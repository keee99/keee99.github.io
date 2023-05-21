<script setup lang="ts">

import * as THREE from 'three'
import { ref, onMounted } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const MAIN_OBJECT_PATH: string = "public/scene.gltf"

class BGSceneManager {

    constructor(canvas: HTMLCanvasElement) {
        
        this.parameters = {};
        
        this.defaults = {
            cam_pos_x: 1.5,
            cam_pos_y: 0,
            cam_pos_z: 1,

            cam_pos_x_min: 0.5,
            cam_pos_y_min: 0,
            cam_pos_z_min: 1,

            bg_color: 0xFFFFFF,
        }

        // Build scene
        this.scene = this.buildScene();
        this.camera = this.buildCamera();
        this.renderer = this.buildRenderer(canvas);

        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize);

        // Build objects
        this.buildCentralObject();

    }

    buildCentralObject() {
        const loader = new GLTFLoader();
        const scene = this.scene;
        const camera = this.camera;

        loader.load( 
            "public/scene.gltf", 
            function ( gltf ) {
                scene.add( gltf.scene.children[0]);
                camera.lookAt(gltf.scene.position)
            }, 
            undefined, 
            function ( error ) {console.error( error )}
        );
    }

    buildLight() {
        const light = new THREE.AmbientLight(0x00ff00, 1);
        this.scene.add(light)
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
        renderer.setClearColor(this.defaults.bg_color);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
        // Update 
        this.renderer.render(this.scene, this.camera);
    }


    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
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


