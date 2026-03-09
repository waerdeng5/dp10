import { MappingData } from './MappingData'

// TODO 基础信息
const Mars3dBaseConfig = [
    { span: 24, formType: 'RADIO', name: 'sceneMode', label: '场景模式', rules: true, valueEnum: MappingData.Mars3d__Scene },
    { span: 24, formType: 'RADIO', name: 'highDynamicRange', label: '高动态渲染', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'fxaa', label: '快速抗锯齿', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'showSkyAtmosphere', label: '大气外光圈', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'fog', label: '雾化效果', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'showSun', label: '显示太阳', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'showMoon', label: '显示月亮', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'showSkyBox', label: '显示天空盒', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'COLOR', name: 'backgroundColor', label: '空间背景色', rules: true, mode: ['single'] },
    { span: 24, formType: 'NUMBER', name: 'verticalExaggeration', label: '地形夸张', rules: true, min: 0, max: 100, step: 1 },
]

// TODO 地球设置
const Mars3dGlobeConfig = [
    { span: 24, formType: 'RADIO', name: 'show', label: '显示地球', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'COLOR', name: 'baseColor', label: '地球背景色', rules: true },
    { span: 24, formType: 'RADIO', name: 'depthTestAgainstTerrain', label: '深度检测', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'showGroundAtmosphere', label: '地面大气', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'enableLighting', label: '昼夜区间', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'showWaterEffect', label: '水面遮罩', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'showSkirts', label: '地形裙', valueEnum: MappingData.IsEnabledBool },
]

// TODO 操作设置
const Mars3dCameraController = [
    { span: 24, formType: 'RADIO', name: 'enableZoom', label: '缩放地图', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'enableCollisionDetection', label: '碰撞检测', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'NUMBER', name: 'zoomFactor', label: '滚轮放大倍数', rules: true, min: 1, max: 10, step: 1 },
    { span: 24, formType: 'NUMBER', name: 'minimumZoomDistance', label: '相机最近视距', rules: true, min: 1, max: 100000000, step: 1 },
    { span: 24, formType: 'NUMBER', name: 'maximumZoomDistance', label: '相机最远视距', rules: true, min: 1, max: 100000000, step: 1 },
    { span: 24, formType: 'NUMBER', name: 'minimumCollisionTerrainHeight', label: '最小碰撞高度', rules: true, min: 1, max: 200000, step: 1 },
    { span: 24, formType: 'RADIO', name: 'enableTilt', label: '倾斜相机(3D和哥伦布视图)', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'enableRotate', label: '转换位置(2D和哥伦布视图)', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'enableTranslate', label: '平移地图(2D和3D视图)', valueEnum: MappingData.IsEnabledBool },
]

// TODO 瓦片工具
const Mars3dTerrainConfig = [
    { span: 24, formType: 'RADIO', name: 'show', label: '开启地形', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'wireframe', label: '三角网', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'SELECT', name: 'basemap', label: '地图瓦片', valueEnum: MappingData.mars3d__Basemaps },
    { span: 24, formType: 'SELECTM', name: 'layer', label: '图层瓦片', valueEnum: MappingData.mars3d__Layer },
    { span: 24, formType: 'RADIO', name: 'toolbar', label: '按钮工具栏', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'SELECT', name: 'toolbar_position', label: '按钮定位', valueEnum: MappingData.mars3d__Toolbar },
    { span: 24, formType: 'RADIO', name: 'geocoder', label: '地点搜索', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'homeButton', label: '视角回归', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'locationBar', label: '状态信息', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'distanceLegend', label: '比例尺', valueEnum: MappingData.IsEnabledBool },
]

// TODO 天气设置
const Mars3dWeatherConfig = [
    { span: 24, formType: 'RADIO', name: 'fog_enabled', label: '雾天', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'fog_enabled_group', label: '数据配置', collapsible: true,
        jugde: [{ field: 'fog_enabled', value: [true] }], children: [
            { span: 24, formType: 'COLOR', name: 'fog_color', label: '雾气颜色', rules: true },
            { span: 24, formType: 'NUMBER', name: 'fog_maxHeight', label: '最大高度', rules: true, min: 0, max: 100000, step: 1 },
        ]
    },
    { span: 24, formType: 'RADIO', name: 'rain_enabled', label: '雨天', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'rain_enabled_group', label: '数据配置', collapsible: true,
        jugde: [{ field: 'rain_enabled', value: [true] }], children: [
            { span: 24, formType: 'NUMBER', name: 'rain_size', label: '粒子大小', rules: true, min: 1, max: 100, step: 1 },
            { span: 24, formType: 'NUMBER', name: 'rain_speed', label: '粒子速度', rules: true, min: 1, max: 100, step: 1 },
            { span: 24, formType: 'NUMBER', name: 'rain_direction', label: '粒子方向', rules: true, min: -90, max: 90, step: 1 },
            { span: 24, formType: 'NUMBER', name: 'rain_maxHeight', label: '最大高度', rules: true, min: 0, max: 100000, step: 1 },
        ]
    },



    // { formType: 'TempTitle', label: '雪天', name: 'SceneWeatherConfigSnow' },
    // { span: 24, formType: 'RADIO', name: 'snow_enabled', label: '是否启用', valueEnum: MappingData.IsEnabledBool },
    // {
    //     span: 24, formType: 'NUMBER', name: 'snow_scale', label: '粒子大小', rules: true, min: 1, max: 100, step: 1,
    //     jugde: [{ field: 'snow_enabled', value: [true] }]
    // },
    // {
    //     span: 24, formType: 'NUMBER', name: 'snow_speed', label: '粒子速度', rules: true, min: 1, max: 100, step: 1,
    //     jugde: [{ field: 'snow_enabled', value: [true] }]
    // },
    // {
    //     span: 24, formType: 'NUMBER', name: 'snow_maxHeight', label: '最大高度', rules: true, min: 0, max: 100000, step: 1,
    //     jujugde: [{ field: 'snow_enabled', value: [true] }]
    // },
    // { formType: 'TempTitle', label: '积雪', name: 'SceneWeatherConfigSnowCover' },
    // { span: 24, formType: 'RADIO', name: 'snowCover_enabled', label: '是否启用', valueEnum: MappingData.IsEnabledBool },
    // {
    //     span: 24, formType: 'NUMBER', name: 'snowCover_alpha', label: '积雪强度', rules: true, min: 0, max: 1, step: 0.1,
    //     jujugde: [{ field: 'snowCover_enabled', value: [true] }]
    // },
    // {
    //     span: 24, formType: 'NUMBER', name: 'snowCover_maxHeight', label: '最大高度', rules: true, min: 0, max: 100000, step: 1,
    //     jujugde: [{ field: 'snowCover_enabled', value: [true] }]
    // },
]
// TODO 色彩设置
const Mars3dColourConfig = [
    { formType: 'TempTitle', label: '泛光特效', name: 'SceneColourConfigBloom' },
    { span: 24, formType: 'RADIO', name: 'bloom_enabled', label: '是否启用', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'NUMBER', name: 'bloom_brightness', label: '亮度', rules: true, min: -0.1, max: 3, step: 0.01,
        jugdeField: 'bloom_enabled', jugdeValue: [true]
    },
    {
        span: 24, formType: 'NUMBER', name: 'bloom_contrast', label: '对比度', rules: true, min: -255, max: 255, step: 1,
        jugdeField: 'bloom_enabled', jugdeValue: [true]
    },
    {
        span: 24, formType: 'NUMBER', name: 'bloom_delta', label: '增量', rules: true, min: 1, max: 5, step: 0.01,
        jugdeField: 'bloom_enabled', jugdeValue: [true]
    },
    {
        span: 24, formType: 'NUMBER', name: 'bloom_sigma', label: '步长', rules: true, min: 0, max: 7, step: 0.01,
        jugdeField: 'bloom_enabled', jugdeValue: [true]
    },
    {
        span: 24, formType: 'NUMBER', name: 'bloom_stepSize', label: 'Sigma', rules: true, min: 1, max: 10, step: 0.01,
        jugdeField: 'bloom_enabled', jugdeValue: [true]
    },
    { formType: 'TempTitle', label: '亮度特效', name: 'SceneColourConfigBrightness' },
    { span: 24, formType: 'RADIO', name: 'brightness_enabled', label: '是否启用', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'NUMBER', name: 'brightness_brightness', label: '对比度', rules: true, min: 0, max: 5, step: 0.01,
        jugdeField: 'brightness_enabled', jugdeValue: [true]
    },
    { formType: 'TempTitle', label: '颜色校正', name: 'SceneColourConfigColorCorrection' },
    { span: 24, formType: 'RADIO', name: 'colorCorrection_enabled', label: '是否启用', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'NUMBER', name: 'colorCorrection_brightness', label: '亮度', rules: true, min: 0, max: 2, step: 0.1,
        jugdeField: 'colorCorrection_enabled', jugdeValue: [true]
    },
    {
        span: 24, formType: 'NUMBER', name: 'colorCorrection_contrast', label: '对比度', rules: true, min: 0, max: 2, step: 0.1,
        jugdeField: 'colorCorrection_enabled', jugdeValue: [true]
    },
    {
        span: 24, formType: 'NUMBER', name: 'colorCorrection_hue', label: '色调', rules: true, min: 0, max: 1, step: 0.1,
        jugdeField: 'colorCorrection_enabled', jugdeValue: [true]
    },
    {
        span: 24, formType: 'NUMBER', name: 'colorCorrection_saturation', label: '饱和度', rules: true, min: 0, max: 2, step: 0.1,
        jugdeField: 'colorCorrection_enabled', jugdeValue: [true]
    },
    { formType: 'TempTitle', label: '景深效果', name: 'SceneColourDepthOfField' },
    { span: 24, formType: 'RADIO', name: 'depthOfField_enabled', label: '是否启用', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'NUMBER', name: 'depthOfField_focalDistance', label: '焦距', rules: true, min: 1, max: 500, step: 1,
        jugdeField: 'depthOfField_enabled', jugdeValue: [true]
    },
    {
        span: 24, formType: 'NUMBER', name: 'depthOfField_delta', label: '增量', rules: true, min: 0.1, max: 2, step: 0.01,
        jugdeField: 'depthOfField_enabled', jugdeValue: [true]
    },
    {
        span: 24, formType: 'NUMBER', name: 'depthOfField_stepSize', label: '步长', rules: true, min: 0, max: 7, step: 0.01,
        jugdeField: 'depthOfField_enabled', jugdeValue: [true]
    },
    {
        span: 24, formType: 'NUMBER', name: 'depthOfField_sigma', label: 'Sigma', rules: true, min: 0.5, max: 5, step: 0.01,
        jugdeField: 'depthOfField_enabled', jugdeValue: [true]
    },
    { formType: 'TempTitle', label: '黑白效果', name: 'SceneColourNightBlackAndWhite' },
    { span: 24, formType: 'RADIO', name: 'blackAndWhite_enabled', label: '是否启用', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'NUMBER', name: 'blackAndWhite_gradations', label: '渐变', rules: true, min: 1, max: 10, step: 0.01,
        jugdeField: 'blackAndWhite_enabled', jugdeValue: [true]
    },
    { formType: 'TempTitle', label: '夜视效果', name: 'SceneColourNightVision' },
    { span: 24, formType: 'RADIO', name: 'nightVision_enabled', label: '是否启用', valueEnum: MappingData.IsEnabledBool },

    { formType: 'TempTitle', label: '马赛克', name: 'SceneColourConfigMosaic' },
    { span: 24, formType: 'RADIO', name: 'mosaic_enabled', label: '是否启用', valueEnum: MappingData.IsEnabledBool },
]



export const Mars3dFormConfig = {
    Mars3dBaseConfig,
    Mars3dGlobeConfig,
    Mars3dCameraController,
    Mars3dTerrainConfig,
    Mars3dWeatherConfig,
    Mars3dColourConfig
}