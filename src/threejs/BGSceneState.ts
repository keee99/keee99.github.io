export class BGSceneState {

    cam_pos_x_tolerance: number;
    cam_pos_y_tolerance: number;
    cam_pos_z_tolerance: number;

    cam_pos_x: number;
    cam_pos_y: number;
    cam_pos_z: number;

    cam_rot_x_tolerance: number;
    cam_rot_y_tolerance: number;
    cam_rot_z_tolerance: number;

    obj_pos_x_tolerance: number;
    obj_pos_y_tolerance: number;
    obj_pos_z_tolerance: number;

    obj_pos_x: number;
    obj_pos_y: number;
    obj_pos_z: number;

    cam_rot_x: number;
    cam_rot_y: number;
    cam_rot_z: number;

    textVisibility: boolean;
    subtextVisibility: boolean;
    textBorderVisibility: boolean;

    flickerTolerance: number;
    
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

        this.obj_pos_x_tolerance = 0;
        this.obj_pos_y_tolerance = 0;
        this.obj_pos_z_tolerance = 0;
    
        this.obj_pos_x = 0;
        this.obj_pos_y = 0;
        this.obj_pos_z = 0;

        this.textVisibility = true;
        this.subtextVisibility = true;
        this.textBorderVisibility = true;

        this.flickerTolerance = 0.005;
    }
    
    setCameraPosTolerance(x: number, y: number, z: number) {
        this.cam_pos_x_tolerance = x;
        this.cam_pos_y_tolerance = y;
        this.cam_pos_z_tolerance = z;
        return this;
    }

    setCameraPos(x: number, y: number, z: number) {
        this.cam_pos_x = x;
        this.cam_pos_y = y;
        this.cam_pos_z = z;
        return this;
    }

    setCameraRot(x: number, y: number, z: number) {
        this.cam_rot_x = x;
        this.cam_rot_y = y;
        this.cam_rot_z = z;
        return this;
    }

    setCameraRotTolerance(x: number, y: number, z: number) {  
        this.cam_rot_x_tolerance = x;
        this.cam_rot_y_tolerance = y;
        this.cam_rot_z_tolerance = z;
        return this;
    }

    setObjPosition(x: number, y: number, z: number) {
        this.obj_pos_x = x;
        this.obj_pos_y = y;
        this.obj_pos_z = z;
        return this;
    }
    setObjPositionTolerance(x: number, y: number, z: number) {
        this.obj_pos_x_tolerance = x;
        this.obj_pos_y_tolerance = y;
        this.obj_pos_z_tolerance = z;
        return this;
    }

    setTextVisibility(visibility: boolean) {
        this.textVisibility = visibility;
        return this;
    }

    setSubtextVisibility(visibility: boolean) {
        this.subtextVisibility = visibility;
        return this;
    }

    setTextBorderVisibility(visibility: boolean) {
        this.textBorderVisibility = visibility;
        return this;
    }

    setFlickerTolerance(tolerance: number) {
        this.flickerTolerance = tolerance;
        return this;
    }

}

export const bgSceneHomeState = new BGSceneState()
    .setCameraPos(0, 0, 2)
    .setCameraPosTolerance(0, 0, 2)

    // .setObjPosition(0, -1.4, 0.5)
    .setObjPosition(0, 0, -1.1)


export const bgSceneAboutState = new BGSceneState()
    .setCameraPos(0, 2, 5)
    .setCameraPosTolerance(0.6, 0, 2)

    .setCameraRot(0, -0.5, 0)
    .setCameraRotTolerance(0, 0.25, 0)

    .setObjPosition(0, 2, -0.5)



export const bgScenePortfolioState = new BGSceneState()
    .setCameraPos(0, -9, 5)
    .setCameraPosTolerance(0, 0, 2)

    .setCameraRot(0, -0.5, 0)
    .setCameraRotTolerance(0, 0.25, 0)

    .setObjPosition(0, 0, -1.1)

    .setSubtextVisibility(false)
    .setFlickerTolerance(0.002)


