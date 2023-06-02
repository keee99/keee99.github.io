import * as THREE from 'three'

import type { BGSceneConfigInterface } from './BGSceneConfig';
import { BGSceneState, bgSceneHomeState, bgSceneAboutState, bgScenePortfolioState } from './BGSceneState';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';


export interface BGProps {
    readonly homeY: number;
    readonly aboutY: number;
    readonly portfolioY: number;

}

class FlickerState {
    obj: THREE.Group;
    flickerTime: number;
    flickerEnabled: boolean;

    max_flicker_time: number;

    constructor(obj: THREE.Group, max_flicker_time: number = 0.3) {
        this.obj = obj;
        this.flickerTime = Number.MAX_SAFE_INTEGER;
        this.flickerEnabled = true;

        this.max_flicker_time = max_flicker_time;
    }

    performFlicker (flickerTolerance: number, elapsedTime: number) {
        if (this.flickerEnabled) {
            if (this.obj.visible && Math.random() < flickerTolerance) {
                this.obj.visible = false;
                this.flickerTime = elapsedTime + this.max_flicker_time * Math.random();
                
            } else if (elapsedTime > this.flickerTime) {
                this.obj.visible = true;
            }
        }
    }

    setFlickerEnabled (enabled: boolean, toggleVisibility: boolean = false) {
        this.flickerEnabled = enabled;
        if (toggleVisibility) this.obj.visible = enabled;
    }

}


export class BGSceneManager {

    // Essentials
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    config: BGSceneConfigInterface;
    clk = new THREE.Clock();

    // Layers
    layers: THREE.Layers[] = this.initLayers(2);
    BLOOM_LAYER: number = 1;

    // Objects
    text = new THREE.Group();
    subtext = new THREE.Group();
    textBorder = new THREE.Group();
    centralObject: THREE.Group = new THREE.Group();

    // Lights
    lights: {
        ambientLight: THREE.AmbientLight;
        mouseLight: THREE.SpotLight;
    };

    // States
    props: BGProps;
    flickerStates = {
        text: new FlickerState(this.text),
        subtext: new FlickerState(this.subtext),
        textBorder: new FlickerState(this.textBorder),
    };

    scrollStates = {
        home: bgSceneHomeState,
        about: bgSceneAboutState,
        portfolio: bgScenePortfolioState,
    }

    // Post Processing
    bloomComposer: EffectComposer;
    finalComposer: EffectComposer;
    materials: Map<string, THREE.Material> = new Map();

    constructor(canvas: HTMLCanvasElement, config: BGSceneConfigInterface, props: BGProps) {
        this.props = props;
        this.config = config;

        this.scene = this.buildScene();
        this.camera = this.buildCamera();

        this.buildTextandTextBorderObject();
        this.buildSubtextObject();
        this.buildCentralObject();

        this.lights =  {
            ambientLight: this.buildAmbientLight(),
            mouseLight: this.buildMouseLight(),
        };

        // Post Processing
        this.renderer = this.buildRenderer(canvas);
        let composers = this.getComposers();
        this.bloomComposer = composers.bloomComposer;
        this.finalComposer = composers.finalComposer;

        // Resize and scroll Callback
        this.onWindowResize();
        this.onScroll();

        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('resize', this.onWindowResize);
        window.addEventListener('scroll', this.onScroll);
    }


    /*****************  ESSENTIALS  ******************/
    
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

    getSizes() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
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


    /*****************  OBJECTS  ******************/   


    buildSubtextObject() {
        const fontLoader = new FontLoader();
        const textMaterial = new THREE.MeshBasicMaterial({ color: this.config.subtextColor });
        fontLoader.load(
            this.config.subtextFontPath,
            (font) => {
                const textMesh = this.createTextMesh(font, textMaterial, this.config.subtext, 0.2);

                textMesh.position.y = -0.8;
                textMesh.layers.toggle(this.BLOOM_LAYER)
                this.subtext.add(textMesh)
                this.subtext.add(this.buildSubtextLight())
                this.scene.add(this.subtext)
        });

    }

    buildTextandTextBorderObject() {
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
                textMesh.layers.toggle(this.BLOOM_LAYER)      
                this.text.add(textMesh)
                this.text.add(this.buildTextLight());
                this.scene.add(this.text)


                /**
                 * Text border
                 */
                const boundingBox = new THREE.Box3().setFromObject(textMesh);
                this.textBorder.add(this.createBorderMesh(boundingBox));
                this.textBorder.add(this.buildBorderLights(boundingBox));
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

    createBorderMesh(boundingBox: THREE.Box3 = new THREE.Box3().setFromObject(this.text)) {
        
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
        

        const textBorder = new THREE.Group(); 
        for (let key of this.getObjKeys(borderMeshes)) {
            borderMeshes[key].layers.toggle(this.BLOOM_LAYER);
            textBorder.add(borderMeshes[key]);
        }

        return textBorder;
    }

    buildCentralObject() {
        const geometry = new THREE.SphereGeometry(1, 5, 5)
        const material = new THREE.MeshLambertMaterial( { color: 'white', wireframe: false } );
        const mesh = new THREE.Mesh(geometry, material);

        mesh.receiveShadow = true;
        mesh.layers.disable(this.BLOOM_LAYER)

        this.centralObject.add(mesh);
        this.scene.add(this.centralObject);


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


    /*****************  LIGHTS  ******************/    
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
        textLightGroup.add(this.createPointLight(0, 0, 0, this.config.textColor, this.config.textIntensity));
        textLightGroup.add(this.createPointLight(-1, 0, 0, this.config.textColor, this.config.textIntensity));
        textLightGroup.add(this.createPointLight(1, 0, 0, this.config.textColor, this.config.textIntensity));
        
        return textLightGroup;
        
    }

    /**
     * Create Subtext Light
     */
     buildSubtextLight() {
        const subtextLightGroup = new THREE.Group();
        subtextLightGroup.add(this.createPointLight(0, -0.8, 0, this.config.subtextColor, this.config.subtextIntensity));
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
        return borderLights;
    }

    buildMouseLight() {
        const mouseLight = new THREE.SpotLight(0x9dffb6, 0.3, 10, Math.PI/8, 0.5, 2);
        mouseLight.lookAt(this.centralObject.position);
        mouseLight.position.set(0,0,2);
        this.scene.add(mouseLight);
        return mouseLight;
    }
    

    
    /*****************  EVENT LISTENERS  ******************/ 

    
    /** */
    onMouseMove = (event: MouseEvent) => {
        this.lights.mouseLight.position.x = (event.clientX / window.innerWidth) * 4 - 2;
        this.lights.mouseLight.position.y = - (event.clientY / window.innerHeight) * 4 + 6;

        this.centralObject.rotation.x = -(event.clientY / window.innerHeight) * 0.1 - 0.1;
        this.centralObject.rotation.y = -(event.clientX / window.innerWidth) * 0.1 - 0.1;
        
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

    onScroll = () => {
        const scroll = window.scrollY;
        if (scroll <= this.props.homeY) {
            // Home
            // Add 1 to homeY to buffer for division by 0
            this.transitSceneState(this.scrollStates.home, this.scrollStates.home, scroll, 0, this.props.homeY + 1);
        } else if (scroll <= this.props.aboutY) {
            // Between Home and About
            this.transitSceneState(this.scrollStates.home, this.scrollStates.about, scroll, this.props.homeY, this.props.aboutY);
        } else {
            // Below About
            this.transitSceneState(this.scrollStates.about, this.scrollStates.portfolio, scroll, this.props.aboutY, this.props.portfolioY);
        }

    }


    transitSceneState(topState: BGSceneState, bottomState: BGSceneState, scrollY: number, topHeight: number, lowerHeight: number) {
        const heightDiff = lowerHeight - topHeight;
        const progressY = (scrollY - topHeight) / heightDiff
        let progress = progressY > 1 ? 1 : this.getProgress(progressY);

        const computeNewAttribute = (pos: number, threshold: number) => {
            const sizes = this.getSizes();
            const aspect = (sizes.width / sizes.height);
            return threshold / aspect + pos;
        }

        const setNewAttrOnAxis = (obj: THREE.Object3D, attr: string, axis: string, state_attr: string) => {
            const tolerance_attr = state_attr + "_tolerance";
            const top: number = computeNewAttribute((topState as any)[state_attr], (topState as any)[tolerance_attr]);
            const bottom: number = computeNewAttribute((bottomState as any)[state_attr], (bottomState as any)[tolerance_attr]);

            (obj as any)[attr][axis] = ( progress * (bottom - top) + top );
        }

        const setNewAttr = (obj: THREE.Object3D, attr: string, state_attr_prefix: string) => {
            setNewAttrOnAxis(obj, attr, "x", state_attr_prefix + "_x");
            setNewAttrOnAxis(obj, attr, "y", state_attr_prefix + "_y");
            setNewAttrOnAxis(obj, attr, "z", state_attr_prefix + "_z");
        }

        // Set new attributes for position and rotation
        setNewAttr(this.camera, "position", "cam_pos");        
        setNewAttr(this.camera, "rotation", "cam_rot")
        setNewAttr(this.centralObject, "position", "obj_pos");

        // Set flicker tolerance
        this.config.flickerTolerance = bottomState.flickerTolerance;

        // Set visibiities (for flickering objects, flicker must be disabled first)
        this.flickerStates.text.setFlickerEnabled(bottomState.textVisibility, true);
        this.flickerStates.subtext.setFlickerEnabled(bottomState.subtextVisibility, true);
        this.flickerStates.textBorder.setFlickerEnabled(bottomState.textBorderVisibility, true);

    }


    getProgress = (progressY : number) => (0.5 * (-(Math.cos(progressY * Math.PI)) + 1)) ** 1.5;


   /*****************  TICK  ******************/

    getObjKeys<T extends object>(obj: T) {
        return Object.keys(obj) as Array<keyof T>;
    }

    update() {
        const elapsedTime = this.clk.getElapsedTime();

        this.flicker(elapsedTime);
        this.renderPostProcessing();
    }

    flicker(elapsedTime: number) {
        if (!this.text) return;
        for (let key of this.getObjKeys(this.flickerStates)) {
            this.flickerStates[key].performFlicker(this.config.flickerTolerance, elapsedTime);
        }
    }

    /*****************  POST PROCESSING & RENDER  ******************/

    renderPostProcessing() {
        this.renderBloom();
        this.finalComposer.render();
    }

    renderBloom() {
        this.scene.traverse( this.darkenNonBloomed );
        this.bloomComposer.render();
        this.scene.traverse( this.restoreMaterial );
    }

    // Heavy Reference from: https://threejs.org/examples/webgl_postprocessing_unreal_bloom.html 
    // https://github.com/mrdoob/three.js/blob/dev/examples/webgl_postprocessing_unreal_bloom_selective.html
    getComposers() {
        this.recordMaterials();

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

    recordMaterials() {
        this.scene.traverse((obj : any) => {
            if (obj.material) {
                this.materials.set(obj.uuid as string, obj.material);
            }
        })
    }

    darkenNonBloomed = (obj: any) => {
        const darkMat = new THREE.MeshBasicMaterial( { color: 'black' } )
        if ( obj.isMesh && this.layers[this.BLOOM_LAYER].test( obj.layers ) === false ) {
            obj.material = darkMat;
        }
    }

    restoreMaterial = (obj: any ) => {
        if ( this.materials.get(obj.uuid as string) ) {
            obj.material = this.materials.get(obj.uuid as string);
        }
    }

 
}