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


/**
 * Tracks the state of an Three.js object/group flickering animation.
 * Used in BGSceneManager.
 */
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

    /**
     * Performs the flicker operation if enabled.
     *      - If visible, randomly set obj visibility to false, and set flickerTime to some time in the future
     *      - If not visible, if the flickerTime has passed, set obj visibility back to true
     * @param flickerTolerance Likelihood of flickering per update call
     * @param elapsedTime Time elapsed since initialization
     */
    performFlicker(flickerTolerance: number, elapsedTime: number) {
        if (this.flickerEnabled) {
            if (this.obj.visible && Math.random() < flickerTolerance) {
                this.obj.visible = false;
                this.flickerTime = elapsedTime + this.max_flicker_time * Math.random();

            } else if (elapsedTime > this.flickerTime) {
                this.obj.visible = true;
            }
        }
    }

    /**
     * Enable/Disables flicker
     * @param enabled If true, enable flicker. 
     * @param toggleVisibility If true, "enabled" param enable/disables the obj as well (obj visibility)
     */
    setFlickerEnabled(enabled: boolean, toggleVisibility: boolean = false) {
        this.flickerEnabled = enabled;
        if (toggleVisibility) this.obj.visible = enabled;
    }
}


export class BGSceneManager {

    // Essentials
    scene = new THREE.Scene();
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
    centralObject = new THREE.Group();

    // Lights
    lights = {
        ambientLight: new THREE.Group(),
        mouseLight: new THREE.Group(),
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
        this.camera = this.createCamera();
        this.renderer = this.createRenderer(canvas);

        this.buildTextandTextBorderObject();
        this.buildSubtextObject();
        this.buildCentralObject();

        this.buildAmbientLight();
        this.buildMouseLight();

        // Post Processing
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

    /**
     * Get size of the scene to render
     * @returns object containing width and height
     */
    getSizes() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    /**
     * Create Renderer for the canvas and renders the scene.
     * @param canvas HTML <canvas> element to render into
     * @returns renderer
     */
    createRenderer(canvas: HTMLCanvasElement) {
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });
        const sizes = this.getSizes();
        renderer.setSize(sizes.width, sizes.height);
        renderer.setClearColor(this.config.bg_color);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;

        renderer.render(this.scene, this.camera);
        return renderer;
    }

    /**
     * Creates a Perspective Camera for the scene. 
     * @returns Camera object
     */
    createCamera() {
        const sizes = this.getSizes()
        const aspect = (sizes.width / sizes.height);
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);

        this.scene.add(camera)
        return camera;
    }


    /*****************  OBJECTS  ******************/

    /**
     * Create and add the subtext object and it's lighting to the scene
     */
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
                this.subtext.add(this.createSubtextLight())
                this.scene.add(this.subtext)
            });

    }

    /**
     * Create and add the text and textBorder objects and their lighting to the scene
     * "Async" function: objects only created once font loader returns.
     */
    buildTextandTextBorderObject() {
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
                this.text.add(this.creaeteTextLight());
                this.scene.add(this.text)


                /**
                 * Text border
                 */
                const boundingBox = new THREE.Box3().setFromObject(textMesh);
                this.textBorder.add(this.createBorderMesh(boundingBox));
                this.textBorder.add(this.createTextBorderLight(boundingBox));
                this.scene.add(this.textBorder)

            }
        )
    }

    /**
     * Create a 3D text Mesh based on parameters given
     * @param font Font loaded from FontLoader
     * @param textMaterial Material of mesh
     * @param text Text displayed by mesh
     * @param size Size of mesh
     * @returns 3D text Mesh based on parameters given
     */
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

    /**
     * Create Border around a given bounding box, offset by an amount specified in config.
     * @param boundingBox Box3 Object to border on the x-y plane
     * @returns Border Mesh bordering the given box on the x-y plane, at z=0
     */
    createBorderMesh(boundingBox: THREE.Box3 = new THREE.Box3().setFromObject(this.text)) {

        const borderMaterial = new THREE.MeshBasicMaterial({ color: this.config.borderColor });

        // Border parameters
        const pos_offset = this.config.borderPosOffset;
        const thickness = this.config.thickness;
        const borderRad = pos_offset;


        // Create 2D bounding Border
        const width = boundingBox.max.x - boundingBox.min.x;
        const height = boundingBox.max.y - boundingBox.min.y;

        const hori_pos = width / 2 + pos_offset
        const vert_pos = height / 2 + pos_offset
        const border_hori_offset = hori_pos - borderRad
        const border_vert_offset = vert_pos - borderRad

        const borderConnectorTorus = new THREE.TorusGeometry(borderRad, thickness, 12, 12, Math.PI / 2)
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
        borderMeshes.tl.position.set(-border_hori_offset, border_vert_offset, 0)
        borderMeshes.br.position.set(border_hori_offset, -border_vert_offset, 0)
        borderMeshes.bl.position.set(-border_hori_offset, -border_vert_offset, 0)

        borderMeshes.tl.rotation.z = Math.PI / 2
        borderMeshes.bl.rotation.z = Math.PI
        borderMeshes.br.rotation.z = 3 * Math.PI / 2


        const textBorder = new THREE.Group();
        for (let key of this.keys(borderMeshes)) {
            borderMeshes[key].layers.toggle(this.BLOOM_LAYER);
            textBorder.add(borderMeshes[key]);
        }

        return textBorder;
    }

    /**
     * Create and add the central object to the scene
     */
    buildCentralObject() {
        const geometry = new THREE.SphereGeometry(1, 5, 5)
        const material = new THREE.MeshLambertMaterial({ color: 'white', wireframe: false });
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
     * Create and add Ambient Light to the scene
     */
    buildAmbientLight() {
        const ambientLight = new THREE.AmbientLight(this.config.ambientColor);
        this.lights.ambientLight.add(ambientLight);
        this.scene.add(this.lights.ambientLight);
    }

    /**
     * Create and add SpotLight to the scene.
     * This light follows the mouse position.
     */
    buildMouseLight() {
        const mouseLight = new THREE.SpotLight(0x9dffb6, 0.3, 10, Math.PI / 8, 0.5, 2);
        mouseLight.lookAt(this.centralObject.position);
        mouseLight.position.set(0, 0, 2);
        this.lights.mouseLight.add(mouseLight);
        this.scene.add(this.lights.mouseLight);
    }

    createPointLight = (x: number, y: number, z: number, color: number, intensity: number) => {
        const pointLight = new THREE.PointLight(color, intensity);
        pointLight.position.set(x, y, z);
        return pointLight;
    }

    /**
     * Create a group of lights emitted by the text object
     */
    creaeteTextLight() {
        const textLightGroup = new THREE.Group();
        textLightGroup.add(this.createPointLight(0, 0, 0, this.config.textColor, this.config.textIntensity));
        textLightGroup.add(this.createPointLight(-1, 0, 0, this.config.textColor, this.config.textIntensity));
        textLightGroup.add(this.createPointLight(1, 0, 0, this.config.textColor, this.config.textIntensity));
        return textLightGroup;

    }

    /**
     * Create a group of lights emitted by the subtext object
     */
    createSubtextLight() {
        const subtextLightGroup = new THREE.Group();
        subtextLightGroup.add(this.createPointLight(0, -0.8, 0, this.config.subtextColor, this.config.subtextIntensity));
        return subtextLightGroup;
    }

    /**
     * Create a group of lights emitted by the textBorder object
     */
    createTextBorderLight(boundingBox: THREE.Box3) {
        const borderLights = new THREE.Group();

        // Create 2D bounding Border
        const width = boundingBox.max.x - boundingBox.min.x;
        const height = boundingBox.max.y - boundingBox.min.y;
        const border_hori_offset = width / 2
        const border_vert_offset = height / 2
        const color = this.config.borderColor;
        const intensity = this.config.textBorderIntensity;

        borderLights.add(this.createPointLight(border_hori_offset, border_vert_offset, 0, color, intensity))
        borderLights.add(this.createPointLight(-border_hori_offset, border_vert_offset, 0, color, intensity))
        return borderLights;
    }



    /*****************  EVENT LISTENERS  ******************/


    /** 
     * "mousemove" Event Handler.
     * Updates the mouseLight position and the centralObject rotation.
     */
    onMouseMove = (event: MouseEvent) => {
        this.lights.mouseLight.position.x = (event.clientX / window.innerWidth) * 4 - 2;
        this.lights.mouseLight.position.y = - (event.clientY / window.innerHeight) * 4 + 6;

        this.centralObject.rotation.x = -(event.clientY / window.innerHeight) * 0.1 - 0.1;
        this.centralObject.rotation.y = -(event.clientX / window.innerWidth) * 0.1 - 0.1;

    }


    /**
     * "resize" Event Handler.
     * Updates relevant attributes of renderer, composer, and camera.
     * Invokes the onScroll callback to update scene to new scroll position after resize event.
     */
    onWindowResize = () => {
        const sizes = this.getSizes()
        const aspect = (sizes.width / sizes.height);

        // Update camera's aspect and PROJECT MATRIX
        // Camera position updated with onScroll.
        this.camera.aspect = aspect;
        this.camera.updateProjectionMatrix();

        this.bloomComposer.setSize(sizes.width, sizes.height);
        this.finalComposer.setSize(sizes.width, sizes.height);

        // Update renderer
        this.renderer.setSize(sizes.width, sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        this.onScroll();
    }


    /**
     * "scroll" Event Handler.
     * Updates scene based on scroll Y
     */
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


    /**
     * Updates scene based on scroll progress between two states. 
     * Progress is set to a maximum of 1. Animation hence stops if there is a Y overflow
     * between scrollY and lowerHeight.
     * @param topState BGSceneState to transit from
     * @param bottomState BGSceneState to transit to
     * @param scrollY Y position of current scroll
     * @param topHeight Y height of topState
     * @param lowerHeight Y height of bottomState
     */
    transitSceneState(topState: BGSceneState, bottomState: BGSceneState, scrollY: number, topHeight: number, lowerHeight: number) {

        /**
         * The progress of the scroll normalized to a range [0, 1].
         * Topstate Y represents 0 and bottomState Y represents 1.
         * @param progressY Progress of scroll between topState and bottomState
         * @returns Normalized progress
         */
        const getProgress = (progressY: number) => (0.5 * (-(Math.cos(progressY * Math.PI)) + 1)) ** 1.5;

        const heightDiff = lowerHeight - topHeight;
        const progressY = (scrollY - topHeight) / heightDiff
        let progress = progressY > 1 ? 1 : getProgress(progressY);

        /**
         * Computes value of an attribute based on the aspect ratio.
         * @param pos Value of attribute
         * @param adjustment_factor Degree of flexibility of attribute to change with aspect ratio
         * @returns Adjusted value of attribute
         */
        const computeNewAttribute = (pos: number, adjustment_factor: number) => {
            const sizes = this.getSizes();
            const aspect = (sizes.width / sizes.height);
            return adjustment_factor / aspect + pos;
        }

        /**
         * Sets the new attribute of an object on a single specified axis, based on the progress between two states.
         * Calculates the 
         * @param obj Object to change
         * @param attr Attribute to change
         * @param axis Axis on attribute to change
         * @param state_attr Value of specified attribute on bottomState
         */
        const setNewAttrOnAxis = (obj: THREE.Object3D, attr: string, axis: string, state_attr: string) => {
            const tolerance_attr = state_attr + "_tolerance";
            const top: number = computeNewAttribute((topState as any)[state_attr], (topState as any)[tolerance_attr]);
            const bottom: number = computeNewAttribute((bottomState as any)[state_attr], (bottomState as any)[tolerance_attr]);

            (obj as any)[attr][axis] = (progress * (bottom - top) + top);
        }

        /**
         * Sets the new attribute of an object on all axes, based on the progress between two states
         * @param obj 
         * @param attr 
         * @param state_attr_prefix 
         */
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



    /*****************  TICK  ******************/

    /**
    * Update function called per tick.
    * Invokes flicker, and post processing pipeline for final render.
    */
    update() {
        const elapsedTime = this.clk.getElapsedTime();

        this.flicker(elapsedTime);
        this.renderPostProcessing();
    }

    /**
     * Performs the flicker animation per update call.
     * @param elapsedTime Time since initialization
     */
    flicker(elapsedTime: number) {
        if (!this.text) return;
        for (let key of this.keys(this.flickerStates)) {
            this.flickerStates[key].performFlicker(this.config.flickerTolerance, elapsedTime);
        }
    }

    /*****************  POST PROCESSING & RENDER  ******************
     * Post processing pipeline in this section is heavily referenced from an official three.js example:
     * https://github.com/mrdoob/three.js/blob/dev/examples/webgl_postprocessing_unreal_bloom_selective.html 
     */


    /**
     * Calls the post processing pipeline for final render.
     */
    renderPostProcessing() {
        this.renderBloom();
        this.finalComposer.render();
    }

    /**
     * Renders the bloom effect.
     * Darkens non-bloomed objects (not in the Bloom Layer) to black material before render to ensure no bloom is applied. 
     * Then, applies bloom to all objects (no effect on darkened objects), and restores materials of the darkened objects.
     */
    renderBloom() {
        this.scene.traverse(this.darkenNonBloomed);
        this.bloomComposer.render();
        this.scene.traverse(this.restoreMaterial);
    }

    /**
     * Initializes and returns the relevant composers for the post processing pipeline.
     * @returns Object containing created composers
     */
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

    /**
     * Records materials at initialization for use in post processing pipeline.
     * Aids material restoration after darkening.
     */
    recordMaterials() {
        this.scene.traverse((obj: any) => {
            if (obj.material) {
                this.materials.set(obj.uuid as string, obj.material);
            }
        })
    }

    /**
     * Darkens object's material if the object is not in the Bloom Layer.
     * @param obj Object to check
     */
    darkenNonBloomed = (obj: any) => {
        const darkMat = new THREE.MeshBasicMaterial({ color: 'black' })
        if (obj.isMesh && this.layers[this.BLOOM_LAYER].test(obj.layers) === false) {
            obj.material = darkMat;
        }
    }

    /**
     * Restores the material of a darkened object
     * @param obj Object to check
     */
    restoreMaterial = (obj: any) => {
        if (this.materials.get(obj.uuid as string)) {
            obj.material = this.materials.get(obj.uuid as string);
        }
    }


    /*****************  HELPERS  ******************/

    /**
     * Gets key values of an Object
     * @param obj Object
     * @returns Array of object keys
     */
    keys<T extends object>(obj: T) {
        return Object.keys(obj) as Array<keyof T>;
    }


}