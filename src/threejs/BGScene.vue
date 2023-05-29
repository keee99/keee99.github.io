<script setup lang="ts">

import * as THREE from 'three'
import { ref, onMounted } from 'vue';

import { bgSceneConfig } from './BGSceneConfig';
import type { BGSceneConfigInterface } from './BGSceneConfig';
import { BGSceneState, bgSceneHomeState, bgSceneAboutState, bgScenePortfolioState } from './BGSceneState';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';


const BLOOM_LAYER = 1;

const props = defineProps({
    homeY: {
        type: Number,
        required: true
    },
    aboutY: {
        type: Number,
        required: true
    },
    portfolioY: {
        type: Number,
        required: true
    }

})





class BGSceneManager {

    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    clk: THREE.Clock;
    layers: THREE.Layers[];


    text: THREE.Group;
    subtext: THREE.Group;
    textBorder: THREE.Group;

    centralObject: THREE.Group;


    lights: {
        textLight: THREE.Group;
        subtextLight: THREE.Group;
        textBorderLight: THREE.Group | null;
        ambientLight: THREE.AmbientLight;
    };
    flickerControlObject: { // TODO: Refactor!
        // On off flicker
        textFlicker: boolean,
        subtextFlicker: boolean,
        textBorderFlicker: boolean,

        // Current state of flicker
        text: boolean;
        subtext: boolean;
        textBorder: boolean;

        // Flicker time to turn on again after flickering off
        textFlickerTime: number;
        subtextFlickerTime: number;
        textBorderFlickerTime: number;
    };
    scrollStates: {
        home: BGSceneState;
        about: BGSceneState;
        portfolio: BGSceneState;
    }

    
    bloomComposer: EffectComposer;
    finalComposer: EffectComposer;
    materials: Map<string, THREE.Material>;

    config: BGSceneConfigInterface;
    parameters: Map<string, any>;

    constructor(canvas: HTMLCanvasElement, config: BGSceneConfigInterface) {

        this.layers = this.initLayers(2);
        this.parameters = new Map();
        this.config = config;
        this.clk = new THREE.Clock();

        // Build scene
        this.scene = this.buildScene();
        this.camera = this.buildCamera();
        this.renderer = this.buildRenderer(canvas);

        
        // Build objects
        // this.buildCentralObject();

        // Build Neon Text Sign
        this.flickerControlObject = {
            textFlicker: true,
            subtextFlicker: true,
            textBorderFlicker: true,

            text: true,
            subtext: true,
            textBorder: true,

            textFlickerTime: Number.MAX_SAFE_INTEGER,
            subtextFlickerTime: Number.MAX_SAFE_INTEGER,
            textBorderFlickerTime: Number.MAX_SAFE_INTEGER,
        };

        this.text = new THREE.Group();
        this.subtext = new THREE.Group();
        this.textBorder = new THREE.Group();

        this.buildTextObject();
        this.buildSubtextObject();

        this.centralObject = this.buildCentralObject();

    
        // Build Lights
        this.lights = {
            textLight: this.buildTextLight(),
            subtextLight: this.buildSubtextLight(),
            textBorderLight: null, // Built in the callback of buildTextObject
            ambientLight: this.buildAmbientLight(),
        };

        // Post Processing
        this.materials = this.recordMaterials();
        let composers = this.postProcess();
        this.bloomComposer = composers.bloomComposer;
        this.finalComposer = composers.finalComposer;

        // Resize and scroll Callback
        this.scrollStates = this.initScrollData();
        this.onWindowResize();
        this.onScroll();
        window.addEventListener('resize', this.onWindowResize);
        window.addEventListener('scroll', this.onScroll);
    }


    /**
     * Initializes a number of layers for the scene. Default number = 2
     */
    initLayers(num: number = 2) {
        const layers = [];
        for (let i = 0; i < 2; i++) {
            const layer = new THREE.Layers();
            layer.set(i);
            layers.push(layer);
        }
        return layers;

    }


    buildSubtextObject() {
        const fontLoader = new FontLoader();
        const textMaterial = new THREE.MeshBasicMaterial({ color: this.config.subtextColor });
        fontLoader.load(
            this.config.subtextFontPath,
            (font) => {
                const textMesh = this.createTextMesh(font, textMaterial, this.config.subtext, 0.2);

                textMesh.position.y = -0.8;
                textMesh.layers.toggle(BLOOM_LAYER)
                this.subtext.add(textMesh)
                this.scene.add(this.subtext)
        });

    }

    buildTextObject() {
        /**
         * Fonts
         */
        const fontLoader = new FontLoader();
        const textMaterial = new THREE.MeshBasicMaterial({ color: this.config.textColor });

        fontLoader.load(
            this.config.textFontPath,
            (font) => {

                /**
                 * Text 3D
                 */
                const textMesh = this.createTextMesh(font, textMaterial, this.config.text, 0.5);
                textMesh.layers.toggle(BLOOM_LAYER)
                this.text.add(textMesh)
                this.scene.add(this.text)


                /**
                 * Text border
                 */
                this.textBorder = this.createBorderMesh();
                this.scene.add(this.textBorder)

            }
        )
    }

    createTextMesh(font: any, textMaterial: THREE.MeshBasicMaterial, text: string, size: number) {
        const textGeometry = new TextGeometry(
            text,
            {
                font: font,
                size: size,
                height: 0.05,
                curveSegments: 5,
                bevelEnabled: false,
            }
        )

        textGeometry.center();
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        return textMesh;
    }

    createBorderMesh() {
        const boundingBox = new THREE.Box3().setFromObject(this.text)
        const borderMaterial = new THREE.MeshBasicMaterial({ color: this.config.borderColor });

        // Border parameters
        const pos_offset = this.config.borderPosOffset;
        const thickness = this.config.thickness;
        const borderRad = pos_offset;

        
        // Create 2D bounding Border
        const width = boundingBox.max.x - boundingBox.min.x;
        const height = boundingBox.max.y - boundingBox.min.y;

        const hori_pos = width/2 + pos_offset
        const vert_pos = height/2 + pos_offset
        const border_hori_offset = hori_pos - borderRad
        const border_vert_offset = vert_pos - borderRad
        
        const borderConnectorTorus = new THREE.TorusGeometry(borderRad, thickness, 12, 12, Math.PI/2)
        const vertBorder = new THREE.CylinderGeometry(thickness, thickness, height)
        const horiBorder = new THREE.CylinderGeometry(thickness, thickness, width).rotateZ(Math.PI / 2)
        
        
        const borderMeshes = {
            t: new THREE.Mesh(horiBorder, borderMaterial),
            b: new THREE.Mesh(horiBorder, borderMaterial),
            l: new THREE.Mesh(vertBorder, borderMaterial),
            r: new THREE.Mesh(vertBorder, borderMaterial),
            tr: new THREE.Mesh(borderConnectorTorus, borderMaterial),
            tl: new THREE.Mesh(borderConnectorTorus, borderMaterial),
            br: new THREE.Mesh(borderConnectorTorus, borderMaterial),
            bl: new THREE.Mesh(borderConnectorTorus, borderMaterial),
        } 

        borderMeshes.t.position.set(0, vert_pos, 0)
        borderMeshes.b.position.set(0, -vert_pos, 0)
        borderMeshes.l.position.set(hori_pos, 0, 0)
        borderMeshes.r.position.set(-hori_pos, 0, 0)

        borderMeshes.tr.position.set(border_hori_offset, border_vert_offset, 0)
        borderMeshes.tl.position.set(-border_hori_offset , border_vert_offset, 0)
        borderMeshes.br.position.set(border_hori_offset, -border_vert_offset, 0)
        borderMeshes.bl.position.set(-border_hori_offset, -border_vert_offset, 0)

        borderMeshes.tl.rotation.z = Math.PI / 2 
        borderMeshes.bl.rotation.z = Math.PI
        borderMeshes.br.rotation.z = 3 * Math.PI / 2 
        
        function keys<T extends object>(obj: T) {
            return Object.keys(obj) as Array<keyof T>;
        }

        
        const textBorder = new THREE.Group(); 
        for (let key of keys(borderMeshes)) {
            borderMeshes[key].layers.toggle(BLOOM_LAYER)
            textBorder.add(borderMeshes[key])
        }

        this.lights["textBorderLight"] = this.buildBorderLights(boundingBox)
        return textBorder;
    }

    buildCentralObject() {
        const group = new THREE.Group();

        const geometry = new THREE.SphereGeometry(1, 5, 5)
        const material = new THREE.MeshLambertMaterial( { color: 'white', wireframe: false } );
        const mesh = new THREE.Mesh(geometry, material);

        mesh.receiveShadow = true;
        mesh.layers.disable(BLOOM_LAYER)

        group.add(mesh);
        this.scene.add(group);
        return group;


        // const loader = new GLTFLoader();
        // const scene = this.scene;
        // const camera = this.camera;

        // loader.load( 
        //     this.config.modelPath, 
        //     function ( gltf ) {
        //         scene.add( gltf.scene.children[0]);
        //         camera.lookAt(gltf.scene.position)
        //     }, 
        //     undefined, 
        //     function ( error ) {console.error( error )}
        // );
    }


    /**
     * Create Ambient Light
     */
    buildAmbientLight() {
        const ambientLight = new THREE.AmbientLight(this.config.ambientColor);
        this.scene.add(ambientLight);
        return ambientLight;

    }

    createPointLight = (x: number, y: number, z: number, color: number, intensity: number) => {
        const pointLight = new THREE.PointLight(color, intensity);
        pointLight.position.set(x, y, z);
        return pointLight;
    }

    /**
     * Create Text Light
     */
    buildTextLight() {
        const textLightGroup = new THREE.Group();

        const textLight1 = new THREE.PointLight(this.config.textColor, this.config.subtextIntensity)
        const textLight2 = new THREE.PointLight(this.config.textColor, this.config.subtextIntensity)
        const textLight3 = new THREE.PointLight(this.config.textColor, this.config.subtextIntensity)

        textLight1.position.set(0,0,0)
        textLight2.position.set(-1,0,0)
        textLight3.position.set(1,0,0)

        textLightGroup.add(textLight1)
        textLightGroup.add(textLight2)
        textLightGroup.add(textLight3)
        
        this.scene.add(textLightGroup);
        return textLightGroup;
        
    }

    /**
     * Create Subtext Light
     */
     buildSubtextLight() {
        const subtextLightGroup = new THREE.Group();

        const subtextLight = new THREE.PointLight(this.config.textColor, this.config.textIntensity)
    
        subtextLight.position.set(0,-0.8,0)
        subtextLightGroup.add(subtextLight)

        
        this.scene.add(subtextLightGroup);
        return subtextLightGroup;
        
    }

    /**
     * Create Border Lights
     */
    buildBorderLights(boundingBox: THREE.Box3) {
        const borderLights = new THREE.Group();

        // Create 2D bounding Border
        const width = boundingBox.max.x - boundingBox.min.x;
        const height = boundingBox.max.y - boundingBox.min.y;
        const border_hori_offset = width/2
        const border_vert_offset = height/2
        const color = this.config.borderColor;
        const intensity = this.config.textBorderIntensity;

        borderLights.add(this.createPointLight(border_hori_offset, border_vert_offset, 0, color, intensity))
        borderLights.add(this.createPointLight(-border_hori_offset , border_vert_offset, 0, color, intensity))
        // borderLights.add(this.createPointLight(border_hori_offset, -border_vert_offset, 0, color, intensity))
        // borderLights.add(this.createPointLight(-border_hori_offset, -border_vert_offset, 0, color, intensity))

        this.scene.add(borderLights)
        return borderLights;
    }
    

    buildScene() {
        const scene = new THREE.Scene();
        return scene;
    }


    buildRenderer(canvas: HTMLCanvasElement) {
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });
        const sizes = this.getSizes()
        renderer.setSize(sizes.width, sizes.height);
        renderer.setClearColor(this.config.bg_color);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        renderer.shadowMap.enabled = true;

        renderer.render(this.scene, this.camera);
        return renderer;
    }

    buildCamera() {
        const sizes = this.getSizes()
        const aspect = (sizes.width / sizes.height);
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);


        camera.position.x = this.config.cam_pos_x / aspect + this.config.cam_pos_x_min;
        camera.position.y = this.config.cam_pos_y / aspect + this.config.cam_pos_y_min;
        camera.position.z = this.config.cam_pos_z / aspect + this.config.cam_pos_z_min;
        
        this.scene.add(camera)
        return camera;
    }

    // On scroll to a certain distance, change the camera position
    // Also need handle not only between sections, but AT sections, or before/after extreme sections
    initScrollData () {
        return {
            home: bgSceneHomeState,
            about: bgSceneAboutState,
            portfolio: bgScenePortfolioState,
        }
    }
    onScroll = () => {
        const scroll = window.scrollY;
        if (scroll <= props.homeY) {
            // Home
            // Add 1 to homeY to buffer for division by 0
            this.transitSceneState(this.scrollStates.home, this.scrollStates.home, scroll, 0, props.homeY + 1);
        } else if (scroll <= props.aboutY) {
            // Between Home and About
            this.transitSceneState(this.scrollStates.home, this.scrollStates.about, scroll, props.homeY, props.aboutY);
        } else {
            // About
            this.transitSceneState(this.scrollStates.about, this.scrollStates.portfolio, scroll, props.aboutY, props.portfolioY);
        }

    }


    transitSceneState(topState: BGSceneState, bottomState: BGSceneState, scrollY: number, topHeight: number, lowerHeight: number) {
        const heightDiff = lowerHeight - topHeight;
        let progress = this.getProgress((scrollY - topHeight) / heightDiff);
        if (progress > 1) progress = 1;

        const getNewPos = (oldPos: number, newPos: number) => ( progress * (newPos - oldPos) + oldPos );


        // TODO: Refactor this!!!!!
        // Set new camera position
        const topX = this.computePos(topState.cam_pos_x, topState.cam_pos_x_tolerance);
        const bottomX = this.computePos(bottomState.cam_pos_x, bottomState.cam_pos_x_tolerance);
        this.camera.position.x = getNewPos(topX, bottomX);

        const topY = this.computePos(topState.cam_pos_y, topState.cam_pos_y_tolerance);
        const bottomY = this.computePos(bottomState.cam_pos_y, bottomState.cam_pos_y_tolerance);
        this.camera.position.y = getNewPos(topY, bottomY);

        const topZ = this.computePos(topState.cam_pos_z, topState.cam_pos_z_tolerance);
        const bottomZ = this.computePos(bottomState.cam_pos_z, bottomState.cam_pos_z_tolerance);
        this.camera.position.z = getNewPos(topZ, bottomZ);
        

        // Set new camera rotation
        const topRotX = this.computeRot(topState.cam_rot_x, topState.cam_rot_x_tolerance);
        const bottomRotX = this.computeRot(bottomState.cam_rot_x, bottomState.cam_rot_x_tolerance);
        this.camera.rotation.x = getNewPos(topRotX, bottomRotX);

        const topRotY = this.computeRot(topState.cam_rot_y, topState.cam_rot_y_tolerance);
        const bottomRotY = this.computeRot(bottomState.cam_rot_y, bottomState.cam_rot_y_tolerance);
        this.camera.rotation.y = getNewPos(topRotY, bottomRotY);

        const topRotZ = this.computeRot(topState.cam_rot_z, topState.cam_rot_z_tolerance);
        const bottomRotZ = this.computeRot(bottomState.cam_rot_z, bottomState.cam_rot_z_tolerance);
        this.camera.rotation.z = getNewPos(topRotZ, bottomRotZ);


        // Set new object pos
        const objTopX = this.computePos(topState.obj_pos_x, topState.obj_pos_x_tolerance);
        const objBottomX = this.computePos(bottomState.obj_pos_x, bottomState.obj_pos_x_tolerance);
        this.centralObject.position.x = getNewPos(objTopX, objBottomX);

        const objTopY = this.computePos(topState.obj_pos_y, topState.obj_pos_y_tolerance);
        const objBottomY = this.computePos(bottomState.obj_pos_y, bottomState.obj_pos_y_tolerance);
        this.centralObject.position.y = getNewPos(objTopY, objBottomY);

        const objTopZ = this.computePos(topState.obj_pos_z, topState.obj_pos_z_tolerance);
        const objBottomZ = this.computePos(bottomState.obj_pos_z, bottomState.obj_pos_z_tolerance);
        this.centralObject.position.z = getNewPos(objTopZ, objBottomZ);

        
        // Text Visibility get overwritten by flicker
        this.flickerControlObject.textFlicker = bottomState.textVisibility;
        this.text.visible = bottomState.textVisibility;
        this.lights.textLight.visible = bottomState.textVisibility;

        this.flickerControlObject.subtextFlicker = bottomState.subtextVisibility;
        this.subtext.visible = bottomState.subtextVisibility;
        this.lights.subtextLight.visible = bottomState.subtextVisibility;

        this.flickerControlObject.textBorderFlicker = bottomState.textBorderVisibility;
        this.textBorder.visible = bottomState.textBorderVisibility;
        if (this.lights.textBorderLight) this.lights.textBorderLight.visible = bottomState.textBorderVisibility;

        this.config.flickerTolerance = bottomState.flickerTolerance;
    }

    getProgress = (progressY : number) => 0.5 * (-(Math.cos(progressY * Math.PI)) + 1) ** 1.5;
    computePos = (pos: number, threshold: number) => {
        const sizes = this.getSizes();
        const aspect = (sizes.width / sizes.height);
        return threshold / aspect + pos;
    }
    computeRot = (rot: number, threshold: number) => {
        return this.computePos(rot, threshold);
    }


    onWindowResize = () => {
        const sizes = this.getSizes()
        const aspect = (sizes.width / sizes.height);

        // Update camera's aspect and PROJECT MATRIX
        this.camera.aspect = aspect;
        this.camera.position.z = this.config.cam_pos_z / aspect + this.config.cam_pos_z_min;
        this.camera.updateProjectionMatrix()

        this.bloomComposer.setSize( sizes.width, sizes.height );
		this.finalComposer.setSize( sizes.width, sizes.height );

        this.onScroll();

        // Update renderer
        this.renderer.setSize(sizes.width, sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    getSizes() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    

    update() {
        const elapsedTime = this.clk.getElapsedTime();
        const deltaTime = this.clk.getDelta();

        this.flicker(elapsedTime);
        this.renderPostProcessing();
    }

    // TODO: Refactor this!
    flicker(elapsedTime: number) {
        if (!this.text) return;

        const maxOffTime = 0.3;
        
        // Make the text flicker at a random time interval
        if (this.flickerControlObject.textFlicker) {
            if (this.flickerControlObject.text && Math.random() < this.config.flickerTolerance) {
                this.flickerControlObject.text = false;
                this.flickerControlObject.textFlickerTime = elapsedTime + maxOffTime * Math.random();
            } else {
                if (elapsedTime > this.flickerControlObject.textFlickerTime) {
                    this.flickerControlObject.text = true;
                }
            }
            this.text.visible = this.flickerControlObject.text;
            this.lights.textLight.visible = this.flickerControlObject.text;

        }

        if (this.flickerControlObject.textBorderFlicker) {
            if (this.flickerControlObject.textBorder && Math.random() < this.config.flickerTolerance) {
                this.flickerControlObject.textBorder = false;
                this.flickerControlObject.textBorderFlickerTime = elapsedTime + maxOffTime * Math.random();
            } else {
                if (elapsedTime > this.flickerControlObject.textBorderFlickerTime) {
                    this.flickerControlObject.textBorder = true;
                }
            }
            this.textBorder.visible = this.flickerControlObject.textBorder;
            if (this.lights.textBorderLight) this.lights.textBorderLight.visible = this.flickerControlObject.textBorder;


        }

        if (this.flickerControlObject.subtextFlicker) {
            if (this.flickerControlObject.subtext && Math.random() < this.config.flickerTolerance) {
                this.flickerControlObject.subtext = false;
                this.flickerControlObject.subtextFlickerTime = elapsedTime + maxOffTime * Math.random();
            } else {
                if (elapsedTime > this.flickerControlObject.subtextFlickerTime) {
                    this.flickerControlObject.subtext = true;
                }
            }
            this.subtext.visible = this.flickerControlObject.subtext;
            this.lights.subtextLight.visible = this.flickerControlObject.subtext;

        }

        
        

    }

    renderPostProcessing() {
        this.renderBloom();
        this.finalComposer.render();
    }

    postProcess() {
        // Heavy Reference from: https://threejs.org/examples/webgl_postprocessing_unreal_bloom.html 
        // https://github.com/mrdoob/three.js/blob/dev/examples/webgl_postprocessing_unreal_bloom_selective.html
        this.text.layers.toggle(BLOOM_LAYER);
        this.textBorder.layers.toggle(BLOOM_LAYER);

        const renderScene = new RenderPass(this.scene, this.camera);
    
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = this.config.bloomThreshold;
        bloomPass.strength = this.config.bloomStrength;
        bloomPass.radius = this.config.bloomRadius;

        const bloomComposer = new EffectComposer(this.renderer);
        bloomComposer.renderToScreen = false;
        bloomComposer.addPass(renderScene);
        bloomComposer.addPass(bloomPass);

        const mixPass = new ShaderPass(
            new THREE.ShaderMaterial({
                uniforms: {
                    baseTexture: { value: null },
                    bloomTexture: { value: bloomComposer.renderTarget2.texture }
                },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform sampler2D baseTexture;
                    uniform sampler2D bloomTexture;
                    varying vec2 vUv;
                    void main() {
                        gl_FragColor = (texture2D(baseTexture, vUv) + texture2D(bloomTexture, vUv));
                    }
                `
            }), "baseTexture"
        );
        mixPass.needsSwap = true;

        
        const finalComposer = new EffectComposer(this.renderer);
        finalComposer.addPass(renderScene);
        finalComposer.addPass(mixPass);
        

        return {
            bloomComposer: bloomComposer, 
            finalComposer: finalComposer
        };

    }

    renderBloom() {
        this.scene.traverse( this.darkenNonBloomed );
        this.bloomComposer.render();
        this.scene.traverse( this.restoreMaterial );

    }

    recordMaterials() {

        const materials = new Map<string, THREE.Material>();
        this.scene.traverse((obj : any) => {
            if (obj.material) {
                materials.set(obj.uuid as string, obj.material);
            }
        })
        return materials;
    }

    darkenNonBloomed = (obj: any) => {
        const darkMat = new THREE.MeshBasicMaterial( { color: 'black' } )
        if ( obj.isMesh && this.layers[BLOOM_LAYER].test( obj.layers ) === false ) {
            obj.material = darkMat;
        }
    }
    checkLayer = (obj: any) => {
        if ( obj.isMesh) {
        }
    }

    restoreMaterial = (obj: any ) => {

        if ( this.materials.get(obj.uuid as string) ) {
            obj.material = this.materials.get(obj.uuid as string);

        }

    }



    
}

const bgscene = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
    let canvas: HTMLCanvasElement | null | undefined = bgscene.value;
    if (!canvas) throw new Error("No canvas found");

    const sceneManager = new BGSceneManager(canvas, bgSceneConfig);

    function animate() {
        sceneManager.update();
        requestAnimationFrame(animate);
        
    }
    animate();

});



</script>


<template>
  <main>
    <div>
        <canvas ref="bgscene" class="webgl"></canvas>
    </div>
  </main>
</template>


