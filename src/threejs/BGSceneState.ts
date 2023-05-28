export class BGSceneState {

    cam_pos_x_tolerance: Number;
    cam_pos_y_tolerance: Number;
    cam_pos_z_tolerance: Number;

    cam_pos_x: Number;
    cam_pos_y: Number;
    cam_pos_z: Number;

    cam_rot_x_tolerance: Number;
    cam_rot_y_tolerance: Number;
    cam_rot_z_tolerance: Number;

    cam_rot_x: Number;
    cam_rot_y: Number;
    cam_rot_z: Number;

    textVisibility: Boolean;
    subtextVisibility: Boolean;
    textBorderVisibility: Boolean;

    flickerTolerance: Number;
    
    constructor() {
        this.cam_pos_x_tolerance = 0;
        this.cam_pos_y_tolerance = 0;
        this.cam_pos_z_tolerance = 0;

        this.cam_pos_x = 0;
        this.cam_pos_y = 0;
        this.cam_pos_z = 0;

        this.cam_rot_x_tolerance = 0;
        this.cam_rot_y_tolerance = 0;
        this.cam_rot_z_tolerance = 0;

        this.cam_rot_x = 0;
        this.cam_rot_y = 0;
        this.cam_rot_z = 0;

        this.textVisibility = true;
        this.subtextVisibility = true;
        this.textBorderVisibility = true;

        this.flickerTolerance = 0.005;
    }
    
    setCameraPosTolerance(x: Number, y: Number, z: Number) {
        this.cam_pos_x_tolerance = x;
        this.cam_pos_y_tolerance = y;
        this.cam_pos_z_tolerance = z;
        return this;
    }

    setCameraPos(x: Number, y: Number, z: Number) {
        this.cam_pos_x = x;
        this.cam_pos_y = y;
        this.cam_pos_z = z;
        return this;
    }

    setCameraRot(x: Number, y: Number, z: Number) {
        this.cam_rot_x = x;
        this.cam_rot_y = y;
        this.cam_rot_z = z;
        return this;
    }

    setCameraRotTolerance(x: Number, y: Number, z: Number) {  
        this.cam_rot_x_tolerance = x;
        this.cam_rot_y_tolerance = y;
        this.cam_rot_z_tolerance = z;
        return this;
    }

    setTextVisibility(visibility: Boolean) {
        this.textVisibility = visibility;
        return this;
    }

    setSubtextVisibility(visibility: Boolean) {
        this.subtextVisibility = visibility;
        return this;
    }

    setTextBorderVisibility(visibility: Boolean) {
        this.textBorderVisibility = visibility;
        return this;
    }

    setFlickerTolerance(tolerance: Number) {
        this.flickerTolerance = tolerance;
        return this;
    }

}

export const BGSceneHomeState = new BGSceneState()
    .setCameraPos(0, 0, 2)
    .setCameraPosTolerance(0, 0, 2)


export const BGSceneAboutState = new BGSceneState()
    .setCameraPos(1, 2, 5)
    .setCameraPosTolerance(0, 0, 2)

    .setCameraRot(0, -0.5, 0)
    .setCameraRotTolerance(0, 0.25, 0)

    .setSubtextVisibility(false)


export const BGScenePortfolioState = new BGSceneState()
    .setCameraPos(1, -10, 5)
    .setCameraPosTolerance(0, 0, 0)

    .setCameraRot(0, -0.5, 0)
    .setCameraRotTolerance(0, 0.25, 0)

    .setTextVisibility(false)
    .setSubtextVisibility(false)
    .setTextBorderVisibility(false)


