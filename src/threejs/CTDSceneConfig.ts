

export interface CTDSceneConfigInterface {
    n_circles : number,
    n_spirals : number,

    height_total: number,
    radius: number,
    radius_falloff : number,
    circleSegments : number,

    cam_pos_x : number, // Distance from camera when aspect ratio is 1:1
    cam_pos_x_min : number, // Added to cam pos x to adjust for wider aspect ratios
    cam_pos_y: number, // Height of camera above origin
    bg_color : number,
    r_range: number[];
    g_range: number[];
    b_range: number[];


}

export const ctdSceneConfig : CTDSceneConfigInterface = {
    n_circles: 70,
    n_spirals: 70,
    // Good results:
    // 100, 100, 0,95 7, 2, 0.95
    // 10, 10, 0,95 7, 2, 0.95
    // 70, 70, 0,95 7, 2, 0.93

    height_total: 7,
    radius: 2,
    radius_falloff: 0.93,
    circleSegments: 30,

    cam_pos_x: 15, // Distance from camera when aspect ratio is 1:1
    cam_pos_x_min: 10, // Added to cam pos x to adjust for wider aspect ratios
    cam_pos_y: 1, // Height of camera above origin

    // Colour Control
    bg_color: 0x000000,

    r_range: [255, 255],
    g_range: [255, 70],
    b_range: [255, 0],

    // const r_range = [0, 255];
    // const g_range = [0, 255];
    // const b_range = [0, 255];

    // bg_color: 0xF1FAEE,
    // // --> RED (use 0.94 falloff)
    // r_range: [231, 241],
    // g_range: [150, 60],
    // b_range: [170, 84],
    // FLAT 
    // const r_range = [221, 221];
    // const g_range = [70, 70];
    // const b_range = [104, 104];

}