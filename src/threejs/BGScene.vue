<script setup lang="ts">

import * as THREE from 'three'
import { ref, onMounted } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

import * as dat from 'lil-gui'

const MAIN_OBJECT_PATH: string = "public/scene.gltf"

const DEFAULT_LAYER = 0;
const BLOOM_LAYER = 1;


interface defaults {
    cam_pos_x: number;
    cam_pos_y: number;
    cam_pos_z: number;

    cam_pos_x_min: number;
    cam_pos_y_min: number;
    cam_pos_z_min: number;

    bg_color: number;

    textMaterial: THREE.MeshBasicMaterial;
    borderMaterial: THREE.MeshBasicMaterial;
    text: string;

    pos_offset: number;
    thickness: number;
    borderRad: number;
}


class BGSceneManager {

    constructor(canvas: HTMLCanvasElement) {
        this.layers = this.initLayers();
        this.parameters = {};
        
        this.defaults = {
            cam_pos_x: 0,
            cam_pos_y: 0,
            cam_pos_z: 1,

            cam_pos_x_min: 0,
            cam_pos_y_min: 0,
            cam_pos_z_min: 2,

            bg_color: 0x000000,
        }

        // Build scene
        this.scene = this.buildScene();
        this.camera = this.buildCamera();
        this.renderer = this.buildRenderer(canvas);
        this.controls = this.buildOrbitControls(canvas); 

        
        // Build objects
        // this.buildCentralObject();

        // Build Neon Text Sign
        const nonbloomLayer = new THREE.Layers();
        nonbloomLayer.set( 2 );
        this.text = new THREE.Group();
        this.textBorder = new THREE.Group();
        this.flickerControlObject = {
            text: true,
            textBorder: true,
            textFlickerTime: Number.MAX_SAFE_INTEGER,
            textBorderFlickerTime: Number.MAX_SAFE_INTEGER,
        };
        this.buildTextObject();
        
        this.buildSphere();

    
        // Build Lights
        this.pointLight = this.buildLight();
        this.clk = new THREE.Clock();

        // Post Processing\
        this.materials = this.recordMaterials();
        let composers = this.postProcess();
        this.bloomComposer = composers.bloomComposer;
        this.finalComposer = composers.finalComposer;

        // Resize Callback
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize);
    }


    initLayers() {
        const layers = [];
        for (let i = 0; i < 2; i++) {
            const layer = new THREE.Layers();
            layer.set(i);
            layers.push(layer);
        }
        return layers;

    }



    buildTextObject() {
        /**
         * Fonts
         */
        const fontLoader = new FontLoader()
        let text: THREE.Mesh | null = null;

        fontLoader.load(
            'public/fonts/beon_medium.typeface.json',
            (font) => {
                
                const textMaterial = new THREE.MeshBasicMaterial({ color: 0xff8866})
                const borderMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
                const text = 'finally works';

                // Border parameters
                const pos_offset = 0.1;
                const thickness = 0.02;
                const borderRad = pos_offset;


                /**
                 * Text 3D
                 */
                const textGeometry = new TextGeometry(
                    text,
                    {
                        font: font,
                        size: 0.5,
                        height: 0.05,
                        curveSegments: 5,
                        bevelEnabled: false,
                    }
                )

                textGeometry.center();
                const textMesh = new THREE.Mesh(textGeometry, textMaterial)
                textMesh.layers.toggle(BLOOM_LAYER)
                this.text.add(textMesh)
                this.scene.add(this.text)

                /**
                 * Text border
                 */
                 const boundingBox = new THREE.Box3().setFromObject(this.text)

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
                
                // Refactor this
                const pointLight1 = new THREE.PointLight(0x00ff00, 0.3)
                pointLight1.position.set(border_hori_offset, border_vert_offset, 0)
                this.scene.add(pointLight1)   
                const pointLight2 = new THREE.PointLight(0x00ff00, 0.3)
                pointLight2.position.set(-border_hori_offset , border_vert_offset, 0)
                this.scene.add(pointLight2)   
                const pointLight3 = new THREE.PointLight(0x00ff00, 0.3)
                pointLight3.position.set(border_hori_offset, -border_vert_offset, 0)
                this.scene.add(pointLight3)   
                const pointLight4 = new THREE.PointLight(0x00ff00, 0.3)
                pointLight4.position.set(-border_hori_offset, -border_vert_offset, 0)
                this.scene.add(pointLight4)   

                function keys<T extends object>(obj: T) {
                    return Object.keys(obj) as Array<keyof T>;
                }

                
                for (let key of keys(borderMeshes)) {
                    borderMeshes[key].layers.toggle(BLOOM_LAYER)
                    this.textBorder.add(borderMeshes[key])
                }

                this.scene.add(this.textBorder)




            }
        )
    }

    buildCentralObject() {
        const geometry = new THREE.BoxGeometry(1.5, 2, 1)
        const material = new THREE.MeshLambertMaterial({ color: 0xff1fff });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = -1;
        mesh.position.x = -1.4;

        mesh.receiveShadow = true;
        mesh.castShadow = true;

        this.scene.add(mesh);


        // const loader = new GLTFLoader();
        // const scene = this.scene;
        // const camera = this.camera;

        // loader.load( 
        //     "public/scene.gltf", 
        //     function ( gltf ) {
        //         scene.add( gltf.scene.children[0]);
        //         camera.lookAt(gltf.scene.position)
        //     }, 
        //     undefined, 
        //     function ( error ) {console.error( error )}
        // );
    }

    buildSphere() {
        const geometry = new THREE.SphereGeometry(0.5, 32, 32)
        const material = new THREE.MeshLambertMaterial( { color: 'white' } );
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.z = 0.24;
        mesh.position.y = -1;

        mesh.receiveShadow = true;
        mesh.castShadow = true;
        mesh.layers.disable(BLOOM_LAYER)
        this.scene.add(mesh);
    }

    buildLight() {
        const light = new THREE.AmbientLight(0x111133);
        this.scene.add(light);

        // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2)
        // directionalLight.position.set(1, 0.25, 0)
        // directionalLight.castShadow = true
        // this.scene.add(directionalLight)

        const textLightGroup = new THREE.Group()

        const textLight1 = new THREE.PointLight(0xff8866, 0.4)
        textLight1.position.set(0,0,0)
        const textLight2 = new THREE.PointLight(0xff8866, 0.4)
        textLight2.position.set(-1,0,0)
        const textLight3 = new THREE.PointLight(0xff8866, 0.4)
        textLight3.position.set(1,0,0)
        
        textLight1.castShadow = true
        textLight2.castShadow = true
        textLight3.castShadow = true

        textLightGroup.add(textLight1)
        textLightGroup.add(textLight2)
        textLightGroup.add(textLight3)
        this.scene.add(textLightGroup);

        return textLightGroup;
    }
    

    buildScene() {
        const scene = new THREE.Scene();
        return scene;
    }

    buildOrbitControls(canvas: HTMLCanvasElement) {
        const controls = new OrbitControls(this.camera, canvas)
        controls.enableDamping = true;
        controls.enableZoom = true;
        controls.autoRotate = false;
        controls.update();
        return controls;
    }

    buildRenderer(canvas: HTMLCanvasElement) {
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });
        const sizes = this.getSizes()
        renderer.setSize(sizes.width, sizes.height);
        renderer.setClearColor(this.defaults.bg_color);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        renderer.shadowMap.enabled = true;

        renderer.render(this.scene, this.camera);
        return renderer;
    }

    buildCamera() {
        const sizes = this.getSizes()
        const aspect = (sizes.width / sizes.height);
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);


        camera.position.x = this.defaults.cam_pos_x / aspect + this.defaults.cam_pos_x_min;
        camera.position.y = this.defaults.cam_pos_y / aspect + this.defaults.cam_pos_y_min;
        camera.position.z = this.defaults.cam_pos_z / aspect + this.defaults.cam_pos_z_min;
        
        // camera.lookAt(0,0,0);
        this.scene.add(camera)
        return camera;
    }


    onWindowResize = () => {
        const sizes = this.getSizes()
        const aspect = (sizes.width / sizes.height);

        // Update camera's aspect and PROJECT MATRIX
        this.camera.aspect = aspect;
        this.camera.position.z = this.defaults.cam_pos_z / aspect + this.defaults.cam_pos_z_min;
        this.camera.updateProjectionMatrix()

        this.bloomComposer.setSize( sizes.width, sizes.height );
		this.finalComposer.setSize( sizes.width, sizes.height );

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

        // Update 
        this.updateText(elapsedTime);

        this.controls.update()
        // this.renderer.render(this.scene, this.camera);
        this.renderPostProcessing();
    }

    updateText(elapsedTime: number) {
        if (!this.text) return;

        const maxOffTime = 0.3;
        
        // Make the text flicker at a random time interval
        if (this.flickerControlObject.text && Math.random() < 0.005) {
            this.flickerControlObject.text = false;
            this.flickerControlObject.textFlickerTime = elapsedTime + maxOffTime * Math.random();
            
        } else {
            if (elapsedTime > this.flickerControlObject.textFlickerTime) {
                this.flickerControlObject.text = true;
            }
        }

        // Make the text flicker at a random time interval
        if (this.flickerControlObject.textBorder && Math.random() < 0.005) {
            this.flickerControlObject.textBorder = false;
            this.flickerControlObject.textBorderFlickerTime = elapsedTime + maxOffTime * Math.random();
            
        } else {
            if (elapsedTime > this.flickerControlObject.textBorderFlickerTime) {
                this.flickerControlObject.textBorder = true;
            }
        }

        // Set visibility
        this.text.layers.disable(1)
        this.text.visible = this.flickerControlObject.text;
        this.pointLight.visible = this.flickerControlObject.text; // TODO: refactor
        this.textBorder.visible = this.flickerControlObject.textBorder;


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

        const params = {
            threshold: 0,
            strength: 2,
            radius: 1,
            exposure: 1
        };

        const renderScene = new RenderPass(this.scene, this.camera);
    
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = params.threshold;
        bloomPass.strength = params.strength;
        bloomPass.radius = params.radius;

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


    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    clk: THREE.Clock;

    pointLight: THREE.Group;

    text: THREE.Group;
    textBorder: THREE.Group;
    flickerControlObject: {
        text: boolean;
        textBorder: boolean;
        textFlickerTime: number;
        textBorderFlickerTime: number;
    };
    layers: THREE.Layers[];
    bloomComposer: EffectComposer;
    finalComposer: EffectComposer;
    materials: Map<string, THREE.Material>;

    defaults: {
        cam_pos_x: number;
        cam_pos_y: number;
        cam_pos_z: number;
        cam_pos_x_min: number;
        cam_pos_y_min: number;
        cam_pos_z_min: number;

        bg_color: number;
    }
    parameters: { [key: string]: any; };
    
}

const bgscene = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
    let canvas: HTMLCanvasElement | null | undefined = bgscene.value;
    if (!canvas) throw new Error("No canvas found");

    const sceneManager = new BGSceneManager(canvas);

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


