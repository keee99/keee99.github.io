<script setup lang="ts">
// Three.js imports
import * as THREE from 'three'
import * as dat from 'lil-gui'

// Vue imports
import { ref, onMounted } from 'vue';



const n_circles = 70;
const n_spirals = 70;
// Good results:
// 100, 100, 0,95 7, 2, 0.95
// 10, 10, 0,95 7, 2, 0.95
// 70, 70, 0,95 7, 2, 0.93



// 
const height_total = 7;
const radius = 2;
const radius_falloff = 0.93;
const circleSegments = 30;

const cam_pos_x = 15; // Distance from camera when aspect ratio is 1:1
const cam_pos_x_min = 10; // Added to cam pos x to adjust for wider aspect ratios
const cam_pos_y = 1; // Height of camera above origin

// Colour Control
// const r_range = [255, 255];
// const g_range = [255, 70];
// const b_range = [255, 0];
const r_range = [0, 255];
const g_range = [0, 255];
const b_range = [0, 255];

const get_r = (i: number) => (r_range[0] + (r_range[1] - r_range[0]) * i / n_circles)/255;
const get_g = (i: number) => (g_range[0] + (g_range[1] - g_range[0]) * i / n_circles)/255;
const get_b = (i: number) => (b_range[0] + (b_range[1] - b_range[0]) * i / n_circles)/255;

// SCENE ==========================
const scene = new THREE.Scene()


// CONTROL OBJECTS ==========================
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const parameters = {
    rotation_rad: 0,
    playback: true
}


// MESH ========================== 

interface SpiralInfo {
    spirals: THREE.Group[],         // Each spiral is an group of n_circles meshes
    spiral_rotation_rads: number[], // Rotation of each spiral about the y-axis, indexed by spiral
    circle_heights:  number[]       // Height of each circle in a spiral, in descending order
}

const mesh_info : SpiralInfo = {
    spirals: [], 
    spiral_rotation_rads: [],
    circle_heights: []
}


// Init spiral groups
for (let j = 0; j < n_spirals; j++) {
    mesh_info.spirals.push(new THREE.Group())
    mesh_info.spiral_rotation_rads.push(2*Math.PI/n_spirals * j)
}

// Init meshes 
for (let i = 0; i < n_circles; i++) {
 
    const color = new THREE.Color(get_r(i), get_g(i), get_b(i));
    const radius_i = radius * radius_falloff**i;

    const mesh = new THREE.Mesh(
        new THREE.CircleGeometry(radius_i , circleSegments),
        new THREE.MeshBasicMaterial({ color: color , wireframe: true})
    );
    
    // Adjust height, rotation
    mesh.rotation.x = Math.PI/2;
    mesh.position.y = -height_total/n_circles * i;

    // Record the height
    mesh_info.circle_heights.push(mesh.position.y);

    // Clone for each spiral, rotating the mesh by 2pi/n_spirals
    for (let j = 0; j < n_spirals; j++) {
        mesh_info.spirals[j].add(mesh.clone());
    }

}

rotateSpirals(mesh_info, parameters.rotation_rad);
addSpirals(mesh_info.spirals, scene);

// CAMERA ==========================
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
camera.position.x = cam_pos_x / (sizes.width / sizes.height) + cam_pos_x_min;
camera.position.y = cam_pos_y;
camera.lookAt(0,0,0);
scene.add(camera);


// DEBUG =================
const gui = new dat.GUI();
gui.add(parameters, 'rotation_rad').min(0).max(100*Math.PI).step(Math.PI/2);
gui.add(parameters, 'playback');



// ON MOUNT ==========================

// Canvas
const ctdProject = ref<HTMLCanvasElement | null>(null);
let renderer: THREE.WebGLRenderer;

onMounted(() => {
    let canvas: HTMLCanvasElement | null | undefined = ctdProject.value;
    if (!canvas) throw new Error("No canvas found");

    // Renderer
    renderer = getNewRenderer(canvas);
    window.addEventListener('resize', resizeCallback)
    resizeCallback()

    // ANIMATIONS ==========================

    const clock = new THREE.Clock()
    const tick = () => {
        if (parameters.playback) {
            const multiplier = Math.PI * getAnimationSpeedMultiplier(parameters.rotation_rad) / 1.25;
            parameters.rotation_rad += multiplier * clock.getDelta()
        }
        rotateSpirals(mesh_info, parameters.rotation_rad)

        renderer.render(scene, camera)
        window.requestAnimationFrame(tick)
    }
    tick()

});




// FUNCTIONS ==========================

/* 
Inits a new renderer 
*/
function getNewRenderer(canvas: HTMLCanvasElement): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.render(scene, camera);

    return renderer;
}

/* 
Returns an oscillating animation speed based on current rotation
*/
function getAnimationSpeedMultiplier(
        rotation_rad: number, 
        damping_factor: number = 0.5,
        y_translation: number = 1.3,
        stretch_factor: number = 0.5
        ) {
    return -damping_factor * Math.cos(rotation_rad/stretch_factor) + y_translation
}


/*
 Rotate the populated spiral groups to the given rotation radians
*/ 
function rotateSpirals(mesh_info: SpiralInfo, rotation_rad: number) {
    
    const n_spirals = mesh_info.spirals.length
    const spirals = mesh_info.spirals
    const spiral_rotation = mesh_info.spiral_rotation_rads
    const heights = mesh_info.circle_heights

    // For each spiral
    for (let j = 0; j < n_spirals; j++) {
        const spiral = spirals[j]
        const circleArr = spiral.children
        for (let i = 0; i < circleArr.length; i++) {
            const radius = heights[i]
            const circle = circleArr[i]
            // circle.position.x = radius * Math.sin(rotation_rad * i/circleArr.length)
            circle.position.y = radius * Math.sin(rotation_rad * i/n_circles)
            circle.position.z = radius * Math.cos(rotation_rad * i/n_circles)
            
            // Rotate circle to face 0,0,0
            circle.lookAt(0,0,0)
        
        }
        spiral.rotation.y = spiral_rotation[j]
    }
}

/* 
Add all meshes in spirals to scene
*/
function addSpirals(spirals: THREE.Group[], scene: THREE.Scene) {
    spirals.forEach(spiral => {
        scene.add(spiral)
    })
}

/* 
Handles window resize events
*/
function resizeCallback() {
    // Update sizes
    
    // TODO: Change size based on parent div
    // const parent = ctdProject.value?.parentElement
    // if (parent) {
    //     sizes.width = parent.clientWidth
    //     sizes.height = parent.clientHeight
    //     console.log("ASDSAD")
    // } else {
    //     sizes.width = window.innerWidth
    //     sizes.height = window.innerHeight
    // }
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera's aspect and PROJECT MATRIX
    camera.aspect = sizes.width / sizes.height
    camera.position.x = cam_pos_x / camera.aspect + cam_pos_x_min
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}




</script>

<template>
  <main>
    <div>
        <canvas ref="ctdProject" class="webgl"></canvas>
    </div>
  </main>
</template>
