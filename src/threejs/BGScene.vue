<script setup lang="ts">

import * as THREE from 'three'
import { ref, onMounted } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as dat from 'lil-gui'

const MAIN_OBJECT_PATH: string = "public/scene.gltf"

class BGSceneManager {

    constructor(canvas: HTMLCanvasElement) {
        
        this.parameters = {};
        
        this.defaults = {
            cam_pos_x: 1.5,
            cam_pos_y: 0,
            cam_pos_z: 1,

            cam_pos_x_min: 1,
            cam_pos_y_min: 1,
            cam_pos_z_min: 1,

            bg_color: 0xFFFFFF,
        }

        // Build scene
        this.scene = this.buildScene();
        this.camera = this.buildCamera();
        this.renderer = this.buildRenderer(canvas);
        this.controls = this.buildOrbitControls(canvas); 

        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize);
        
        // Build objects
        this.buildCentralObject();
        this.buildSphere();

        this.pointLight = this.buildLight();

        this.clk = new THREE.Clock();

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

    buildLight() {
        const light = new THREE.AmbientLight(0xffffff, 0.05);
        this.scene.add(light);

        // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2)
        // directionalLight.position.set(1, 0.25, 0)
        // directionalLight.castShadow = true
        // this.scene.add(directionalLight)

        const pointLight = new THREE.PointLight(0xff9000, 1)
        pointLight.position.set(-1.86, 1, -1.65)
        this.scene.add(pointLight)   
        return pointLight;
    }
    

    buildScene() {
        const scene = new THREE.Scene();
        return scene;
    }

    buildSphere() {
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshLambertMaterial({ color: 0xffbaa3 });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.receiveShadow = true;
        mesh.castShadow = true;

        this.scene.add(mesh);
    }

    buildOrbitControls(canvas: HTMLCanvasElement) {
        const controls = new OrbitControls(this.camera, canvas)
        controls.enableDamping = true;
        controls.enableZoom = true;
        controls.autoRotate = true;
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
        camera.lookAt(0,0,0);
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
        this.pointLight.position.y = 2*Math.cos(elapsedTime)
        this.pointLight.position.x = 2*Math.sin(elapsedTime)

        this.controls.update()
        this.renderer.render(this.scene, this.camera);
    }


    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    clk: THREE.Clock;
    pointLight: THREE.PointLight;
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


