// TODO: Change to camel case
export const bgSceneConfig : BGSceneConfigInterface = {
    cam_pos_x: 0,
    cam_pos_y: 0,
    cam_pos_z: 2,

    cam_pos_x_min: 0,
    cam_pos_y_min: 0,
    cam_pos_z_min: 2,

    enableOrbitControls: true,

    bg_color: 0x000000,
    ambientColor: 0x111133,
    ambientIntensity: 0.1,

    modelPath: "public/scene.gltf",

    text: "Jia Jun's",
    subtext: "Portfolio",
    textFontPath: "/fonts/beon_medium.typeface.json",
    subtextFontPath: "/fonts/bettina_signature_regular.typeface.json",
    textColor: 0xff8866,
    subtextColor: 0xff88aa,
    borderColor: 0x00ff00,
    textIntensity: 0.3,
    subtextIntensity: 0.2,
    textBorderIntensity: 0.15,
    
    borderPosOffset: 0.15,
    thickness: 0.025,
    flickerTolerance: 0.005,

    bloomThreshold: 0.0,
    bloomStrength: 2.5,
    bloomRadius: 1.0,
}

export interface BGSceneConfigInterface {
    cam_pos_x: number;
    cam_pos_y: number;
    cam_pos_z: number;

    cam_pos_x_min: number;
    cam_pos_y_min: number;
    cam_pos_z_min: number;

    enableOrbitControls: boolean;

    bg_color: number;
    ambientColor: number;
    ambientIntensity: number;

    modelPath: string;

    /**
     * Defaults for neon sign logo
     */
    text: string;
    subtext: string;
    textFontPath: string;
    subtextFontPath: string;
    textColor: number;
    subtextColor: number;
    borderColor: number;
    textIntensity: number;
    subtextIntensity: number;
    textBorderIntensity: number;

    borderPosOffset: number;
    thickness: number;
    flickerTolerance: number;

    bloomThreshold: number;
    bloomStrength: number;
    bloomRadius: number;
    
}
