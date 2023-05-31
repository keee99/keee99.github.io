import * as THREE from 'three'
import * as dat from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import type { CTDSceneConfigInterface } from './CTDSceneConfig'

interface SpiralInfo {
    spirals: THREE.Group[],         // Each spiral is an group of n_circles meshes
    spiral_rotation_rads: number[], // Rotation of each spiral about the y-axis, indexed by spiral
    circle_heights:  number[]       // Height of each circle in a spiral, in descending order
}


export class CTDSceneManager {

    mesh_info : SpiralInfo = {
        spirals: [], 
        spiral_rotation_rads: [],
        circle_heights: []
    }
    config: CTDSceneConfigInterface;
    canvas: HTMLCanvasElement;
    scene : THREE.Scene = new THREE.Scene();
    renderer : THREE.WebGLRenderer;
    
    camera : THREE.PerspectiveCamera;
    clock : THREE.Clock = new THREE.Clock();
    controls: OrbitControls;
    
    parameters = {
        rotation_rad: 0,
        playback: true
    };
    
    sizes =  {
        width: window.innerWidth,
        height: window.innerHeight
    }

    constructor(canvas: HTMLCanvasElement, config: CTDSceneConfigInterface) {
        this.canvas = canvas;
        this.config = config;
        this.buildMesh();
        this.addDebugUI();

        this.camera = this.buildCamera();
        this.renderer = this.buildRenderer(canvas);
        this.controls = this.buildControls();

        window.addEventListener('resize', this.resizeCallback)
        this.resizeCallback()
    }

    buildMesh() {
        // Init spiral groups
        for (let j = 0; j < this.config.n_spirals; j++) {
            this.mesh_info.spirals.push(new THREE.Group())
            this.mesh_info.spiral_rotation_rads.push(2*Math.PI/this.config.n_spirals * j)
        }

        // Init meshes 
        for (let i = 0; i < this.config.n_circles; i++) {
        
            const color = new THREE.Color(this.get_r(i), this.get_g(i), this.get_b(i));
            const radius_i = this.config.radius * this.config.radius_falloff**i;

            const mesh = new THREE.Mesh(
                new THREE.CircleGeometry(radius_i , this.config.circleSegments),
                new THREE.MeshBasicMaterial({ color: color , wireframe: true})
            );
            
            // Adjust height, rotation
            mesh.rotation.x = Math.PI/2;
            mesh.position.y = -this.config.height_total/this.config.n_circles * i;

            // Record the height
            this.mesh_info.circle_heights.push(mesh.position.y);

            // Clone for each spiral, rotating the mesh by 2pi/n_spirals
            for (let j = 0; j < this.config.n_spirals; j++) {
                this.mesh_info.spirals[j].add(mesh.clone());
            }

        }

        this.rotateSpirals(this.mesh_info, this.parameters.rotation_rad);
        this.addSpirals(this.mesh_info.spirals, this.scene);
    }

    buildCamera() {
        // CAMERA ==========================
        const camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 1, 100);
        camera.position.x = this.config.cam_pos_x / (this.sizes.width / this.sizes.height) + this.config.cam_pos_x_min;
        camera.position.y = this.config.cam_pos_y;
        camera.lookAt(0,0,0);
        return camera;
    }

    /* 
    Inits a new renderer 
    */
    buildRenderer(canvas: HTMLCanvasElement): THREE.WebGLRenderer {
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });
        renderer.setSize(this.sizes.width, this.sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(this.config.bg_color);
        renderer.render(this.scene, this.camera);
        return renderer;
    }

    buildControls(): OrbitControls {
        const controls = new OrbitControls(this.camera, this.canvas);
        controls.enableDamping = true;
        return controls;
    }

    /* 
    Returns an oscillating animation speed based on current rotation
    */
    getAnimationSpeedMultiplier(
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
    rotateSpirals(mesh_info: SpiralInfo, rotation_rad: number) {
        
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
                circle.position.y = radius * Math.sin(rotation_rad * i/this.config.n_circles)
                circle.position.z = radius * Math.cos(rotation_rad * i/this.config.n_circles)
                
                // Rotate circle to face 0,0,0
                circle.lookAt(0,0,0)
            
            }
            spiral.rotation.y = spiral_rotation[j]
        }
    }

    /* 
    Add all meshes in spirals to scene
    */
    addSpirals(spirals: THREE.Group[], scene: THREE.Scene) {
        spirals.forEach(spiral => {
            scene.add(spiral)
        })
    }

    /* 
    Handles window resize events
    */
    resizeCallback = () => {
        this.sizes.width = window.innerWidth
        this.sizes.height = window.innerHeight

        // Update camera's aspect and PROJECT MATRIX
        this.camera.aspect = this.sizes.width / this.sizes.height
        this.camera.position.x = this.config.cam_pos_x / this.camera.aspect + this.config.cam_pos_x_min
        this.camera.updateProjectionMatrix()

        // Update renderer
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    addDebugUI() {
        const gui = new dat.GUI();
        gui.add(this.parameters, 'rotation_rad').min(0).max(100*Math.PI).step(Math.PI/2);
        gui.add(this.parameters, 'playback');
    }

    update() {
        
        if (this.parameters.playback) {
            const multiplier = Math.PI * this.getAnimationSpeedMultiplier(this.parameters.rotation_rad) / 1.25;
            this.parameters.rotation_rad += multiplier * this.clock.getDelta()
        }
        this.rotateSpirals(this.mesh_info, this.parameters.rotation_rad)

        this.renderer.render(this.scene, this.camera);
    }

    get_r = (i: number) => (this.config.r_range[0] + (this.config.r_range[1] - this.config.r_range[0]) * i / this.config.n_circles)/255;
    get_g = (i: number) => (this.config.g_range[0] + (this.config.g_range[1] - this.config.g_range[0]) * i / this.config.n_circles)/255;
    get_b = (i: number) => (this.config.b_range[0] + (this.config.b_range[1] - this.config.b_range[0]) * i / this.config.n_circles)/255;


}