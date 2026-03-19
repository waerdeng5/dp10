import { MappingData } from './MappingData'
import { gltfMapping } from '../Mars3d/initData'


// TODO 添加视角
const Mars3donAddCenter = [
    { span: 24, formType: 'INPUT', name: 'name', label: '视角名称', rules: true, tooltip: '同一名称相互覆盖!' },
]
// TODO 添加元素或分组
const Mars3donAddElement = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '唯一标识', rules: true },
    { span: 24, formType: 'INPUT', name: 'name', label: '字段名称', rules: true },
    { span: 24, formType: 'RADIO', name: 'fieldType', label: '数据类型', valueEnum: MappingData.mars3d__fieldsType, rules: true },
    {
        span: 24, formType: 'TREE', name: 'elementType', label: '元素类型', valueEnum: MappingData.mars3d__elementType, rules: true,
        jugde: [{ field: 'fieldType', value: ['element'] }]
    },
]
// TODO 天机模型或分组
const Mars3donAddTiles = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '唯一标识', rules: true },
    { span: 24, formType: 'INPUT', name: 'name', label: '字段名称', rules: true },
    { span: 24, formType: 'RADIO', name: 'fieldType', label: '数据类型', valueEnum: MappingData.mars3d__fieldsTypeA02, rules: true },
    { span: 24, formType: 'INPUT', name: 'tilesUrl', label: '模型地址', rules: true, jugde: [{ field: 'fieldType', value: ['tiles'] }] },
]
// TODO 额外材质
const materialOptionsMapping = [
    { span: 24, formType: 'SELECT', name: ['style', 'materialType'], label: '元素材质', rules: true, valueEnum: MappingData.mars3d__materialType },
    //  SELECT image
    {
        span: 24, formType: 'SELECT', name: ['style', 'materialOptions', 'image'], label: '选择图片', rules: true,
        valueEnum: MappingData.mars3d__polylineImage,
        jugde: [{ field: ['style', 'materialType'], value: ['LineFlow', 'DigitalFlow', 'WallScroll', 'RectSlide', 'Image'] }]
    },
    //  SELECT normalMap
    {
        span: 24, formType: 'RADIO', name: ['style', 'materialOptions', 'normalMap'], label: '水面材质', rules: true,
        valueEnum: MappingData.mars3d__waterMaterial,
        jugde: [{ field: ['style', 'materialType'], value: ['Water'] }]
    },
    //  SELECT specularMap
    {
        span: 24, formType: 'RADIO', name: ['style', 'materialOptions', 'specularMap'], label: '水面材质', rules: true,
        valueEnum: MappingData.mars3d__waterMaterial,
        jugde: [{ field: ['style', 'materialType'], value: ['WaterLight'] }]
    },
    //  基础色值 color 
    {
        span: 24, formType: 'COLOR', name: ['style', 'materialOptions', 'color'], label: '基础色值', rules: true,
        jugde: [{
            field: ['style', 'materialType'], value: ['Color', 'RandomColor', 'PolylineArrow', 'ODLine', 'LineBloom', 'LineTrail', 'LineFlicker',
                'PolylineGlow', 'LineDashArrow', 'LineFlowColor', 'LineThreeDash', 'PolylineDash', 'LineDotDash', 'LineCross', 'PolylineOutline',
                'LineFlow', 'DigitalFlow', 'WallScroll', 'RectSlide', 'ScanLine', 'RadarLine', 'RadarWave', 'CircleWave', 'CylinderWave', 'EllipsoidWave',
                'EllipsoidElectric', 'Grid', 'Image', 'NeonLight', 'PolyAsphalt', 'PolyGradient', 'Text']
        }]
    },
    //  bgColor
    {
        span: 24, formType: 'COLOR', name: ['style', 'materialOptions', 'bgColor'], label: '背景颜色', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['ODLine', 'LineFlow'] }]
    },
    //  outlineColor
    {
        span: 24, formType: 'COLOR', name: ['style', 'materialOptions', 'outlineColor'], label: '衬色颜色', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['PolylineOutline'] }]
    },
    //  gapColor
    {
        span: 24, formType: 'COLOR', name: ['style', 'materialOptions', 'gapColor'], label: '虚线颜色', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['LineDashArrow', 'PolylineDash', 'LineDotDash'] }]
    },
    //  sidesColor
    {
        span: 24, formType: 'COLOR', name: ['style', 'materialOptions', 'sidesColor'], label: '外侧颜色', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['LineThreeDash'] }]
    },
    //  evenColor
    {
        span: 24, formType: 'COLOR', name: ['style', 'materialOptions', 'evenColor'], label: '主要颜色', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['Checkerboard', 'PolyBlob', 'PolyFacet', 'PolyGrass', 'PolyWood', 'Stripe'] }]
    },
    //  oddColor
    {
        span: 24, formType: 'COLOR', name: ['style', 'materialOptions', 'oddColor'], label: '辅助颜色', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['Checkerboard', 'PolyBlob', 'PolyFacet', 'PolyGrass', 'PolyWood', 'Stripe'] }]
    },
    //  baseWaterColor
    {
        span: 24, formType: 'COLOR', name: ['style', 'materialOptions', 'baseWaterColor'], label: '基础颜色', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['Water'] }]
    },
    //  blendColor
    {
        span: 24, formType: 'COLOR', name: ['style', 'materialOptions', 'blendColor'], label: '混合颜色', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['Water'] }]
    },
    //  速度参数 speed
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'speed'], label: '基础速度', rules: true,
        jugde: [{
            field: ['style', 'materialType'], value: ['ODLine', 'LineBloom', 'LineTrail', 'LineFlicker', 'LineFlowColor', 'LineFlow', 'DigitalFlow',
                'WallScroll', 'RectSlide', 'ScanLine', 'RadarLine', 'RadarWave', 'CircleWave', 'CylinderWave', 'EllipsoidWave', 'EllipsoidElectric', 'Text']
        }]
    },
    //  startTime
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'startTime'], label: '开始时间', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['ODLine', 'LineFlowColor'] }]
    },
    //  dashLength
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'dashLength'], label: '虚线间隔', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['LineDashArrow', 'LineThreeDash', 'PolylineDash', 'LineDotDash', 'LineCross'] }]
    },
    //  maskLength
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'maskLength'], label: '间隔长度', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['LineCross'] }]
    },
    //  sidesDashLength
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'sidesDashLength'], label: '外线长度', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['LineThreeDash'] }]
    },
    //  outlineWidth
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'outlineWidth'], label: '衬色宽度', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['PolylineOutline'] }]
    },
    //  repeat_x
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'repeat_x'], label: '横轴重复', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['LineFlow', 'Image'] }]
    },
    //  repeat_y
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'repeat_y'], label: '纵轴重复', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['LineFlow', 'Image'] }]
    },
    //  segment
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'segment'], label: '分段数量', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['DigitalFlow'] }]
    },
    //  count
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'count'], label: '重复数量', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['WallScroll', 'CircleWave'] }]
    },
    //  repeat
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'repeat'], label: '重复数量', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['CylinderWave', 'Checkerboard', 'Stripe'] }]
    },
    //  offset
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'offset'], label: '起始位置', rules: true,
        jugde: [{ field: ['style', 'materialType'], value: ['Stripe'] }]
    },
    //  glow
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'glow'], label: '泛光强度', rules: true, min: 0, max: 10, step: 0.01,
        jugde: [{ field: ['style', 'materialType'], value: ['LineBloom', 'DigitalFlow'] }]
    },
    //  showRatio
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'showRatio'], label: '线宽比例', rules: true, min: -1, max: 1, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['LineBloom'] }]
    },
    //  glowPower
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'glowPower'], label: '高亮强度', rules: true, min: 0, max: 1, step: 0.01,
        jugde: [{ field: ['style', 'materialType'], value: ['PolylineGlow'] }]
    },
    //  taperPower
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'taperPower'], label: '渐变效果', rules: true, min: 0, max: 1, step: 0.01,
        jugde: [{ field: ['style', 'materialType'], value: ['PolylineGlow'] }]
    },
    //  dashPattern
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'dashPattern'], label: '渐变效果', rules: true, min: 0, max: 255, step: 1,
        jugde: [{ field: ['style', 'materialType'], value: ['LineDashArrow', 'LineThreeDash', 'PolylineDash', 'LineDotDash', 'LineCross'] }]
    },
    //  percent
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'percent'], label: '流动比例', rules: true, min: 0, max: 1, step: 0.01,
        jugde: [{ field: ['style', 'materialType'], value: ['LineFlowColor'] }]
    },
    //  alpha
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'alpha'], label: '透明程度', rules: true, min: 0, max: 1, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['LineFlowColor', 'WaterLight'] }]
    },
    //  gradient
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'gradient'], label: '透明程度', rules: true, min: 0, max: 1, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['CircleWave'] }]
    },
    //  cellAlpha
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'cellAlpha'], label: '透明程度', rules: true, min: 0, max: 1, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['Grid'] }]
    },
    //  NUMBER widthRatio
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'widthRatio'], label: '中心比例', rules: true, min: 0, max: 1, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['LineThreeDash'] }]
    },
    //  NUMBER sidesWidthRatio
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'sidesWidthRatio'], label: '外线比例', rules: true, min: 0, max: 1, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['LineThreeDash'] }]
    },
    //  NUMBER centerPower
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'centerPower'], label: '中心百分比', rules: true, min: 0, max: 1, step: 0.01,
        jugde: [{ field: ['style', 'materialType'], value: ['LineCross'] }]
    },
    //  NUMBER thickness
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'thickness'], label: '宽度比例', rules: true, min: 0, max: 1, step: 0.01,
        jugde: [{ field: ['style', 'materialType'], value: ['CylinderWave'] }]
    },
    //  NUMBER dashPower
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'dashPower'], label: '虚线百分比', rules: true, min: 0, max: 1, step: 0.01,
        jugde: [{ field: ['style', 'materialType'], value: ['LineCross'] }]
    },
    //  NUMBER flowGlow
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'flowGlow'], label: '流动高亮', rules: true, min: 0, max: 1, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['DigitalFlow'] }]
    },
    //  NUMBER size
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'size'], label: '块大小', rules: true, min: 0, max: 1, step: 0.01,
        jugde: [{ field: ['style', 'materialType'], value: ['PolyAsphalt'] }]
    },
    //  NUMBER frequency
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'frequency'], label: '混色频率', rules: true, min: 0, max: 100, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['PolyAsphalt', 'PolyBlob', 'PolyFacet', 'PolyGrass', 'PolyWood', 'Water'] }]
    },
    //  NUMBER grainFrequency
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'grainFrequency'], label: '颗粒频率', rules: true, min: 0, max: 100, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['PolyWood'] }]
    },
    //  NUMBER alphaPower
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'alphaPower'], label: '透明度系数', rules: true, min: 0, max: 10, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['PolyGradient'] }]
    },
    //  NUMBER diffusePower
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'diffusePower'], label: '漫反射系数', rules: true, min: 0, max: 10, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['PolyGradient'] }]
    },
    //  NUMBER animationSpeed
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'animationSpeed'], label: '动画速度', rules: true, min: 0, max: 1, step: 0.01,
        jugde: [{ field: ['style', 'materialType'], value: ['Water'] }]
    },
    //  NUMBER amplitude
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'amplitude'], label: '水波振幅', rules: true, min: 0, max: 100, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['Water'] }]
    },
    //  NUMBER specularIntensity
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'specularIntensity'], label: '反射强度', rules: true, min: 0, max: 1, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['Water'] }]
    },
    //  NUMBER fadeFactor
    {
        span: 24, formType: 'NUMBER', name: ['style', 'materialOptions', 'fadeFactor'], label: '衰减因子', rules: true, min: 0, max: 1, step: 0.1,
        jugde: [{ field: ['style', 'materialType'], value: ['Water'] }]
    },
    //  RADIO bidirectional
    {
        span: 24, formType: 'RADIO', name: ['style', 'materialOptions', 'bidirectional'], label: '运行形式', rules: true,
        valueEnum: MappingData.mars3d__bidirectional,
        jugde: [{ field: ['style', 'materialType'], value: ['ODLine'] }]
    },
    //  RADIO axisY
    {
        span: 24, formType: 'RADIO', name: ['style', 'materialOptions', 'axisY'], label: 'Y轴朝上', rules: true,
        valueEnum: MappingData.IsEnabledBool,
        jugde: [{ field: ['style', 'materialType'], value: ['LineFlow', 'WallScroll'] }]
    },
    //  RADIO mixt
    {
        span: 24, formType: 'RADIO', name: ['style', 'materialOptions', 'mixt'], label: '颜色混合', rules: true,
        valueEnum: MappingData.IsEnabledBool,
        jugde: [{ field: ['style', 'materialType'], value: ['LineFlow'] }]
    },
    //  RADIO reverse
    {
        span: 24, formType: 'RADIO', name: ['style', 'materialOptions', 'reverse'], label: '流动方向', rules: true,
        valueEnum: MappingData.mars3d__Reverse,
        jugde: [{ field: ['style', 'materialType'], value: ['WallScroll'] }]
    },
    //  RADIO bloom
    {
        span: 24, formType: 'RADIO', name: ['style', 'materialOptions', 'bloom'], label: '是否泛光', rules: true,
        valueEnum: MappingData.IsEnabledBool,
        jugde: [{ field: ['style', 'materialType'], value: ['WallScroll'] }]
    },
    //  RADIO pure
    {
        span: 24, formType: 'RADIO', name: ['style', 'materialOptions', 'pure'], label: '是否纯色', rules: true,
        valueEnum: MappingData.IsEnabledBool,
        jugde: [{ field: ['style', 'materialType'], value: ['RectSlide'] }]
    },
    //  RADIO transparent
    {
        span: 24, formType: 'RADIO', name: ['style', 'materialOptions', 'transparent'], label: '背景透明', rules: true,
        valueEnum: MappingData.IsEnabledBool,
        jugde: [{ field: ['style', 'materialType'], value: ['Image'] }]
    },
    //  RADIO isInner
    {
        span: 24, formType: 'RADIO', name: ['style', 'materialOptions', 'isInner'], label: '渐变方向', rules: true,
        valueEnum: MappingData.mars3d__Inner,
        jugde: [{ field: ['style', 'materialType'], value: ['PolyGradient'] }]
    },
    //  RADIO orientation
    {
        span: 24, formType: 'RADIO', name: ['style', 'materialOptions', 'orientation'], label: '条纹方向', rules: true,
        valueEnum: MappingData.mars3d__orientation,
        jugde: [{ field: ['style', 'materialType'], value: ['Stripe'] }]
    },
]
// TODO 添加kml 或geo文件
const Mars3dFileConfig = [
    { span: 24, formType: 'INPUT', name: 'fileUrl', label: '文件地址', rules: true },
    { span: 24, formType: 'RADIO', name: 'fileType', label: '文件类型', rules: true, valueEnum: MappingData.Mars3d__fileType },
    { span: 24, formType: 'COLOR', name: ['symbol', 'styleOptions', 'color'], label: '颜色', rules: true, mode: ['single'] },
    { span: 24, formType: 'NUMBER', name: ['symbol', 'styleOptions', 'width'], label: '宽度', rules: true },
    { span: 24, formType: 'RADIO', name: ['symbol', 'styleOptions', 'clampToGround'], label: '贴地', rules: true, valueEnum: MappingData.IsYesBool },
]
// !!! 基础设置
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
        span: 24, formType: 'GROUP', name: 'fog_enabled_group', label: '雾天配置', collapsible: true,
        jugde: [{ field: 'fog_enabled', value: [true] }], children: [
            { span: 24, formType: 'COLOR', name: 'fog_color', label: '雾气颜色', rules: true, tooltip: '#ffffff' },
            { span: 24, formType: 'NUMBER', name: 'fog_maxHeight', label: '最大高度', rules: true, min: 0, max: 100000, step: 1, tooltip: '8000' },
        ]
    },
    { span: 24, formType: 'RADIO', name: 'rain_enabled', label: '雨天', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'rain_enabled_group', label: '雨天配置', collapsible: true,
        jugde: [{ field: 'rain_enabled', value: [true] }], children: [
            { span: 24, formType: 'NUMBER', name: 'rain_size', label: '粒子大小', rules: true, min: 1, max: 100, step: 1, tooltip: '20' },
            { span: 24, formType: 'NUMBER', name: 'rain_speed', label: '粒子速度', rules: true, min: 1, max: 100, step: 1, tooltip: '10' },
            { span: 24, formType: 'NUMBER', name: 'rain_direction', label: '粒子方向', rules: true, min: -90, max: 90, step: 1, tooltip: '45' },
            { span: 24, formType: 'NUMBER', name: 'rain_maxHeight', label: '最大高度', rules: true, min: 0, max: 100000, step: 1, tooltip: '8000' },
        ]
    },
    { span: 24, formType: 'RADIO', name: 'snow_enabled', label: '雪天', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'snow_enabled_group', label: '雪天配置', collapsible: true,
        jugde: [{ field: 'snow_enabled', value: [true] }], children: [
            { span: 24, formType: 'NUMBER', name: 'snow_scale', label: '粒子大小', rules: true, min: 1, max: 100, step: 1, tooltip: '20' },
            { span: 24, formType: 'NUMBER', name: 'snow_speed', label: '粒子速度', rules: true, min: 1, max: 100, step: 1, tooltip: '10' },
            { span: 24, formType: 'NUMBER', name: 'snow_maxHeight', label: '最大高度', rules: true, min: 0, max: 100000, step: 1, tooltip: '8000' },
        ]
    },
    { span: 24, formType: 'RADIO', name: 'snowCover_enabled', label: '积雪', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'snowCover_enabled_group', label: '积雪配置', collapsible: true,
        jugde: [{ field: 'snowCover_enabled', value: [true] }], children: [
            { span: 24, formType: 'NUMBER', name: 'snowCover_alpha', label: '积雪强度', rules: true, min: 0, max: 1, step: 0.1, tooltip: '0.1' },
            { span: 24, formType: 'NUMBER', name: 'snowCover_maxHeight', label: '最大高度', rules: true, min: 0, max: 100000, step: 1, tooltip: '8000' },
        ]
    }
]
// TODO 色彩设置

const Mars3dColourConfig = [
    { span: 24, formType: 'RADIO', name: 'bloom_enabled', label: '泛光特效', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'bloom_enabled_group', label: '泛光特效', collapsible: true,
        jugde: [{ field: 'bloom_enabled', value: [true] }], children: [
            { span: 24, formType: 'NUMBER', name: 'bloom_brightness', label: '亮度', rules: true, min: -0.1, max: 3, step: 0.01, tooltip: '0' },
            { span: 24, formType: 'NUMBER', name: 'bloom_contrast', label: '对比度', rules: true, min: -255, max: 255, step: 1, tooltip: '128' },
            { span: 24, formType: 'NUMBER', name: 'bloom_delta', label: '增量', rules: true, min: 1, max: 5, step: 0.01, tooltip: '1' },
            { span: 24, formType: 'NUMBER', name: 'bloom_sigma', label: '步长', rules: true, min: 0, max: 7, step: 0.01, tooltip: '3.78' },
            { span: 24, formType: 'NUMBER', name: 'bloom_stepSize', label: 'Sigma', rules: true, min: 1, max: 10, step: 0.01, tooltip: '5' },
        ]
    },
    { span: 24, formType: 'RADIO', name: 'brightness_enabled', label: '亮度特效', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'NUMBER', name: 'brightness_brightness', label: '对比度', rules: true, min: 0, max: 5, step: 0.01, tooltip: '2',
        jugde: [{ field: 'brightness_enabled', value: [true] }]
    },
    { span: 24, formType: 'RADIO', name: 'colorCorrection_enabled', label: '颜色校正', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'colorCorrection_enabled_group', label: '颜色校正', collapsible: true,
        jugde: [{ field: 'colorCorrection_enabled', value: [true] }], children: [
            { span: 24, formType: 'NUMBER', name: 'colorCorrection_brightness', label: '亮度', rules: true, min: 0, max: 2, step: 0.1, tooltip: '1' },
            { span: 24, formType: 'NUMBER', name: 'colorCorrection_contrast', label: '对比度', rules: true, min: 0, max: 2, step: 0.1, tooltip: '1' },
            { span: 24, formType: 'NUMBER', name: 'colorCorrection_hue', label: '色调', rules: true, min: 0, max: 1, step: 0.1, tooltip: '0' },
            { span: 24, formType: 'NUMBER', name: 'colorCorrection_saturation', label: '饱和度', rules: true, min: 0, max: 2, step: 0.1, tooltip: '1' },
        ]
    },
    { span: 24, formType: 'RADIO', name: 'depthOfField_enabled', label: '景深效果', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'depthOfField_enabled_group', label: '颜色校正', collapsible: true,
        jugde: [{ field: 'depthOfField_enabled', value: [true] }], children: [
            { span: 24, formType: 'NUMBER', name: 'depthOfField_focalDistance', label: '焦距', rules: true, min: 1, max: 500, step: 1, tooltip: '87' },
            { span: 24, formType: 'NUMBER', name: 'depthOfField_delta', label: '增量', rules: true, min: 0.1, max: 2, step: 0.01, tooltip: '1' },
            { span: 24, formType: 'NUMBER', name: 'depthOfField_stepSize', label: '步长', rules: true, min: 0, max: 7, step: 0.01, tooltip: '3.78' },
            { span: 24, formType: 'NUMBER', name: 'depthOfField_sigma', label: 'Sigma', rules: true, min: 0.5, max: 5, step: 0.01, tooltip: '2.46' },
        ]
    },
    { span: 24, formType: 'RADIO', name: 'blackAndWhite_enabled', label: '黑白效果', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'NUMBER', name: 'blackAndWhite_gradations', label: '渐变', rules: true, min: 1, max: 10, step: 0.01, tooltip: '4',
        jugde: [{ field: 'blackAndWhite_enabled', value: [true] }]
    },
    { span: 24, formType: 'RADIO', name: 'nightVision_enabled', label: '夜视效果', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'mosaic_enabled', label: '马赛克', valueEnum: MappingData.IsEnabledBool },
]

// !!! 场景剪裁
// TODO 剪裁区域
const Mars3dBoundaryBorderConfig = [
    { span: 24, formType: 'RADIO', name: 'enabled', label: '是否剪裁', valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'TREEM', name: 'border', label: '区域选择', valueEnum: MappingData.mapTiles, jugde: [{ field: 'enabled', value: [true] }] },
]
// TODO 覆盖面
const Mars3dBoundaryCoverConfig = [
    { span: 24, formType: 'RADIO', name: 'show', label: '是否启用', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'Mars3dBoundaryCoverConfig', label: '覆盖面设置', collapsible: true,
        jugde: [{ field: 'show', value: [true] }], children: [
            { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsEnabledBool },
            ...materialOptionsMapping
        ]
    },
]
// TODO 边界线
const Mars3dBoundaryLineConfig = [
    { span: 24, formType: 'RADIO', name: 'show', label: '是否启用', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'Mars3dBoundaryLineConfig', label: '边界线设置', collapsible: true,
        jugde: [{ field: 'show', value: [true] }], children: [
            { span: 24, formType: 'NUMBER', name: ['style', 'width'], label: '线条宽度', rules: true },
            { span: 24, formType: 'RADIO', name: ['style', 'closure'], label: '是否闭合', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsEnabledBool },
            ...materialOptionsMapping
        ]
    },
]
// TODO 边界墙
const Mars3dBoundaryWallConfig = [
    { span: 24, formType: 'RADIO', name: 'show', label: '是否启用', valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'Mars3dBoundaryWallConfig', label: '边界线设置', collapsible: true,
        jugde: [{ field: 'show', value: [true] }], children: [
            { span: 24, formType: 'NUMBER', name: ['style', 'diffHeight'], label: '墙体高度', rules: true, },
            { span: 24, formType: 'NUMBER', name: ['style', 'setHeight'], label: '向下偏移', rules: true, },
            { span: 24, formType: 'RADIO', name: ['style', 'closure'], label: '是否闭合', rules: true, valueEnum: MappingData.IsEnabledBool },
            ...materialOptionsMapping
        ]
    },
]

// !!! 场景元素
// *** 衬色边框
const outlineConfig = {
    span: 24, formType: 'GROUP', name: 'outline_config', label: '衬色设置', collapsible: true,
    jugde: [{ field: ['style', 'outline'], value: [true] }], children: [
        { span: 24, formType: 'COLOR', name: ['style', 'outlineColor'], label: '衬色颜色', rules: true },
        { span: 24, formType: 'NUMBER', name: ['style', 'outlineWidth'], label: '衬色宽度', rules: true },
        { span: 24, formType: 'NUMBER', name: ['style', 'outlineOpacity'], label: '衬色透明度', rules: true, min: 0, max: 1, step: 0.1 },
    ]
}
// *** 背景颜色
const backgroundConfig = {
    span: 24, formType: 'GROUP', name: 'background_config', label: '背景设置', collapsible: true,
    jugde: [{ field: ['style', 'background'], value: [true] }], children: [
        { span: 24, formType: 'COLOR', name: ['style', 'backgroundColor'], label: '背景颜色', rules: true },
        { span: 24, formType: 'NUMBER', name: ['style', 'backgroundPadding'], label: '背景内边距', rules: true },
        { span: 24, formType: 'NUMBER', name: ['style', 'backgroundOpacity'], label: '衬色透明度', rules: true, min: 0, max: 1, step: 0.1 },
    ]
}
// *** 偏移量
const hasPixelOffsetConfig = {
    span: 24, formType: 'GROUP', name: 'hasPixelOffset_config', label: '偏移设置', collapsible: true,
    jugde: [{ field: ['style', 'hasPixelOffset'], value: [true] }], children: [
        { span: 24, formType: 'NUMBER', name: ['style', 'pixelOffsetX'], label: 'X轴偏移', rules: true },
        { span: 24, formType: 'NUMBER', name: ['style', 'pixelOffsetY'], label: 'Y轴偏移', rules: true },
    ]
}
// *** 视距缩放
const scaleByDistanceConfig = {
    span: 24, formType: 'GROUP', name: 'scaleByDistance_config', label: '缩放设置', collapsible: true,
    jugde: [{ field: ['style', 'scaleByDistance'], value: [true] }], children: [
        { span: 24, formType: 'NUMBER', name: ['style', 'scaleByDistance_far'], label: '上限', rules: true, min: 0, max: 100000000, step: 1 },
        { span: 24, formType: 'NUMBER', name: ['style', 'scaleByDistance_farValue'], label: '上限比例', rules: true, min: 0, max: 10, step: 0.1 },
        { span: 24, formType: 'NUMBER', name: ['style', 'scaleByDistance_near'], label: '下限', rules: true, min: 0, max: 100000000, step: 1 },
        { span: 24, formType: 'NUMBER', name: ['style', 'scaleByDistance_nearValue'], label: '下限比例', rules: true, min: 0, max: 10, step: 0.1 },
    ]
}
// *** 视距显示
const distanceDisplayConditionConfig = {
    span: 24, formType: 'GROUP', name: 'distanceDisplayCondition_config', label: '显示设置', collapsible: true,
    jugde: [{ field: ['style', 'distanceDisplayCondition'], value: [true] }], children: [
        { span: 24, formType: 'NUMBER', name: ['style', 'distanceDisplayCondition_far'], label: '最大距离', rules: true, min: 0, max: 100000000, step: 1 },
        { span: 24, formType: 'NUMBER', name: ['style', 'distanceDisplayCondition_near'], label: '最小距离', rules: true, min: 0, max: 100000000, step: 1 },
    ]
}
// *** 额外文字
const labelConfig = {
    span: 24, formType: 'GROUP', name: 'label_config', label: '文字设置', collapsible: true,
    children: [
        { span: 24, formType: 'INPUT', name: ['style', 'label', 'text'], label: '文字内容' },
        { span: 24, formType: 'COLOR', name: ['style', 'label', 'color'], label: '文字颜色', rules: true, mode: ['single'] },
        { span: 24, formType: 'NUMBER', name: ['style', 'label', 'font_size'], label: '文字字号', rules: true },
        { span: 24, formType: 'SELECT', name: ['style', 'label', 'font_family'], label: '文字字体', valueEnum: MappingData.Font__Family },
        { span: 24, formType: 'RADIO', name: ['style', 'label', 'font_weight'], label: '是否加粗', rules: true, valueEnum: MappingData.Font__WeightStr },
        { span: 24, formType: 'RADIO', name: ['style', 'label', 'font_style'], label: '是否斜体', rules: true, valueEnum: MappingData.Font__Style },
        { span: 24, formType: 'NUMBER', name: ['style', 'label', 'scale'], label: '缩放比例', rules: true, min: 0, max: 10000, step: 0.1 },
        { span: 24, formType: 'NUMBER', name: ['style', 'label', 'opacity'], label: '透明度', rules: true, min: 0, max: 1, step: 0.1 },
        { span: 24, formType: 'RADIO', name: ['style', 'label', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsYesBool },
        { span: 24, formType: 'RADIO', name: ['style', 'label', 'visibleDepth'], label: '是否遮挡', rules: true, valueEnum: MappingData.IsYesBool },
        { span: 24, formType: 'RADIO', name: ['style', 'label', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'label_outline_config', label: '衬色设置', collapsible: true,
            jugde: [{ field: ['style', 'label', 'outline'], value: [true] }], children: [
                { span: 24, formType: 'COLOR', name: ['style', 'label', 'outlineColor'], label: '衬色颜色', rules: true },
                { span: 24, formType: 'NUMBER', name: ['style', 'label', 'outlineWidth'], label: '衬色宽度', rules: true },
                { span: 24, formType: 'NUMBER', name: ['style', 'label', 'outlineOpacity'], label: '衬色透明度', rules: true, min: 0, max: 1, step: 0.1 },
            ]
        },
        { span: 24, formType: 'RADIO', name: ['style', 'label', 'background'], label: '是否背景', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'label_background_config', label: '背景设置', collapsible: true,
            jugde: [{ field: ['style', 'label', 'background'], value: [true] }], children: [
                { span: 24, formType: 'COLOR', name: ['style', 'label', 'backgroundColor'], label: '背景颜色', rules: true },
                { span: 24, formType: 'NUMBER', name: ['style', 'label', 'backgroundPadding'], label: '背景内边距', rules: true },
                { span: 24, formType: 'NUMBER', name: ['style', 'label', 'backgroundOpacity'], label: '衬色透明度', rules: true, min: 0, max: 1, step: 0.1 },
            ]
        },
        { span: 24, formType: 'RADIO', name: ['style', 'label', 'hasPixelOffset'], label: '偏移量', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'label_hasPixelOffset_config', label: '偏移设置', collapsible: true,
            jugde: [{ field: ['style', 'label', 'hasPixelOffset'], value: [true] }], children: [
                { span: 24, formType: 'NUMBER', name: ['style', 'label', 'pixelOffsetX'], label: 'X轴偏移', rules: true },
                { span: 24, formType: 'NUMBER', name: ['style', 'label', 'pixelOffsetY'], label: 'Y轴偏移', rules: true },
            ]
        }
    ]
}
// *** 视距显示
const silhouetteConfig = {
    span: 24, formType: 'GROUP', name: 'silhouette_config', label: '显示设置', collapsible: true,
    jugde: [{ field: ['style', 'silhouette'], value: [true] }], children: [
        { span: 24, formType: 'COLOR', name: ['style', 'silhouetteColor'], label: '轮廓颜色', rules: true, mode: ['single'] },
        { span: 24, formType: 'NUMBER', name: ['style', 'silhouetteSize'], label: '轮廓尺寸', rules: true },
    ]
}
// *** 遮挡设置
const depthFailConfig = {
    span: 24, formType: 'GROUP', name: 'depthFail_config', label: '显示设置', collapsible: true,
    jugde: [{ field: ['style', 'depthFail'], value: [true] }], children: [
        { span: 24, formType: 'COLOR', name: ['style', 'depthFailColor'], label: '遮挡处颜色(纯色)', rules: true, mode: ['single'] },
        { span: 24, formType: 'NUMBER', name: ['style', 'depthFailOpacity'], label: '遮挡处透明度(纯色)', rules: true, min: 0, max: 1, step: 0.1 },

    ]
}
// TODO 文字点
const Mars3DlabelPFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'INPUT', name: ['style', 'text'], label: '文字内容', rules: true },
    { span: 24, formType: 'COLOR', name: ['style', 'color'], label: '文字颜色', rules: true, mode: ['single'] },
    { span: 24, formType: 'NUMBER', name: ['style', 'font_size'], label: '文字字号', rules: true },
    { span: 24, formType: 'SELECT', name: ['style', 'font_family'], label: '文字字体', valueEnum: MappingData.Font__Family },
    { span: 24, formType: 'RADIO', name: ['style', 'font_weight'], label: '是否加粗', rules: true, valueEnum: MappingData.Font__WeightStr },
    { span: 24, formType: 'RADIO', name: ['style', 'font_style'], label: '是否斜体', rules: true, valueEnum: MappingData.Font__Style },
    { span: 24, formType: 'NUMBER', name: ['style', 'scale'], label: '缩放比例', rules: true, min: 0, max: 10000, step: 0.1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'opacity'], label: '透明度', rules: true, min: 0, max: 1, step: 0.1 },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsYesBool },
    { span: 24, formType: 'RADIO', name: ['style', 'visibleDepth'], label: '是否遮挡', rules: true, valueEnum: MappingData.IsYesBool },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'background'], label: '是否背景', rules: true, valueEnum: MappingData.IsEnabledBool },
    backgroundConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'hasPixelOffset'], label: '偏移量', rules: true, valueEnum: MappingData.IsEnabledBool },
    hasPixelOffsetConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'scaleByDistance'], label: '视距缩放', rules: true, valueEnum: MappingData.IsEnabledBool },
    scaleByDistanceConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
]
// TODO 像素点
const Mars3DpointPFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'pixelSize'], label: '像素大小', rules: true },
    { span: 24, formType: 'COLOR', name: ['style', 'color'], label: '像素颜色', rules: true, mode: ['single'] },
    { span: 24, formType: 'NUMBER', name: ['style', 'opacity'], label: '透明度', rules: true, min: 0, max: 1, step: 0.1 },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsYesBool },
    { span: 24, formType: 'RADIO', name: ['style', 'visibleDepth'], label: '是否遮挡', rules: true, valueEnum: MappingData.IsYesBool },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'scaleByDistance'], label: '视距缩放', rules: true, valueEnum: MappingData.IsEnabledBool },
    scaleByDistanceConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
    labelConfig
]
// TODO 图标点
const Mars3DbillboardPFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'SELECT', name: ['style', 'image'], label: '图标样式', rules: true, valueEnum: MappingData.mars3d__billboardImage },
    { span: 24, formType: 'NUMBER', name: ['style', 'scale'], label: '缩放比例', rules: true, min: 0, max: 10000, step: 0.1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'opacity'], label: '透明度', rules: true, min: 0, max: 1, step: 0.1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'rotationDegree'], label: '旋转角度', rules: true, min: 0, max: 360, step: 0.1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'width'], label: '图标宽度', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'height'], label: '图标高度', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsYesBool },
    { span: 24, formType: 'RADIO', name: ['style', 'visibleDepth'], label: '是否遮挡', rules: true, valueEnum: MappingData.IsYesBool },
    { span: 24, formType: 'RADIO', name: ['style', 'hasPixelOffset'], label: '偏移量', rules: true, valueEnum: MappingData.IsEnabledBool },
    hasPixelOffsetConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'scaleByDistance'], label: '视距缩放', rules: true, valueEnum: MappingData.IsEnabledBool },
    scaleByDistanceConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
    labelConfig
]
// Todo 四面体
const Mars3DtetrahedronFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'width'], label: '顶部大小', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'height'], label: '椎体高度', rules: true },
    { span: 24, formType: 'COLOR', name: ['style', 'color'], label: '填充颜色', rules: true, mode: ['single'] },
    { span: 24, formType: 'RADIO', name: ['style', 'animation'], label: '动画效果', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'NUMBER', name: ['style', 'moveHeight'], label: '单程高度', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'moveDuration'], label: '单程时长', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'rotationAngle'], label: '每帧旋转', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'translucent'], label: '半透明', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'closed'], label: '关闭几何图', rules: true, valueEnum: MappingData.IsEnabledBool },
]
// Todo DIV
const Mars3DdivFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'offsetX'], label: 'X轴偏移', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'offsetY'], label: 'Y轴偏移', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'scale'], label: '缩放比例', rules: true, min: 0, max: 10000, step: 0.1 },
    { span: 24, formType: 'RADIO', name: ['style', 'scaleByDistance'], label: '视距缩放', rules: true, valueEnum: MappingData.IsEnabledBool },
    scaleByDistanceConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
    // 模板设置
    { span: 24, formType: 'RADIO', name: ['style', 'temp'], label: '显示模板', rules: true, valueEnum: MappingData.mars3d__divTemplate },
    {
        span: 24, formType: 'GROUP', name: 'tempConfig_A01', label: '一号版配置', collapsible: true,
        jugde: [{ field: ['style', 'temp'], value: ['A01'] }], children: [
            { span: 24, formType: 'COLOR', name: ['style', 'tempConfig', 'background'], label: '背景颜色', rules: true, mode: ['single'] },
            { span: 24, formType: 'INPUT', name: ['style', 'tempConfig', 'padding'], label: '内部间距', rules: true },
            { span: 24, formType: 'INPUT', name: ['style', 'tempConfig', 'radius'], label: '圆角信息', rules: true },
            {
                span: 24, formType: 'LIST', name: ['style', 'tempConfig', 'list'], label: '字段配置', collapsible: true, children: [
                    { span: 24, formType: 'INPUT', name: 'text', label: '文字内容', rules: true },
                    { span: 24, formType: 'INPUT', name: 'margin', label: '文字间距', rules: true },
                    { span: 24, formType: 'COLOR', name: 'color', label: '文字颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'font_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'font_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'font_weight', label: '是否加粗', rules: true, valueEnum: MappingData.Font__WeightStr },
                    { span: 24, formType: 'RADIO', name: 'font_style', label: '是否斜体', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'filter', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'filterSize', label: '阴影数值', rules: true, jugde: [{ field: 'filter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'filterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'filter', value: [true] }] },
                ]
            }
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'tempConfig_A02', label: '二号版配置', collapsible: true,
        jugde: [{ field: ['style', 'temp'], value: ['A02'] }], children: [
            {
                span: 24, formType: 'LIST', name: ['style', 'tempConfig', 'list'], label: '字段配置', collapsible: true, children: [
                    { span: 24, formType: 'COLOR', name: 'back', label: '背景颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'RADIO', name: 'border', label: '是否边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'NUMBER', name: 'borderSize', label: '边框尺寸', rules: true,
                        jugde: [{ field: 'border', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'borderType', label: '边框类型', rules: true, valueEnum: MappingData.Style__BorderType,
                        jugde: [{ field: 'border', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'borderColor', label: '边框颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'border', value: [true] }]
                    },
                    { span: 24, formType: 'RADIO', name: 'shadow', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'RADIO', name: 'shadowType', label: '阴影类型', rules: true, valueEnum: MappingData.Style__shadowType,
                        jugde: [{ field: 'shadow', value: [true] }]
                    },
                    {
                        span: 24, formType: 'INPUT', name: 'shadowSize', label: '阴影数值', rules: true,
                        jugde: [{ field: 'shadow', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'shadowColor', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'shadow', value: [true] }]
                    },
                    { span: 24, formType: 'INPUT', name: 'radius', label: '圆角', rules: true },
                    { span: 24, formType: 'INPUT', name: 'margin', label: '外间距', rules: true },
                    { span: 24, formType: 'INPUT', name: 'padding', label: '内填充', rules: true },
                    { span: 24, formType: 'INPUT', name: 'text', label: '文字内容', rules: true },
                    { span: 24, formType: 'COLOR', name: 'color', label: '文字颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'font_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'font_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'font_weight', label: '是否加粗', rules: true, valueEnum: MappingData.Font__WeightStr },
                    { span: 24, formType: 'RADIO', name: 'font_style', label: '是否斜体', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'filter', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'filterSize', label: '阴影数值', rules: true, jugde: [{ field: 'filter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'filterColor', label: '阴影颜色', rules: true, mode: ['single'], jugde: [{ field: 'filter', value: [true] }] },
                ]
            },
        ]
    },

]
// Todo 扩散点
const Mars3DdivLightPointFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'color'], label: '元素颜色', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'size'], label: '元素尺寸', rules: true },
    { span: 24, formType: 'INPUT', name: ['style', 'label', 'text'], label: '文字内容' },
    { span: 24, formType: 'COLOR', name: ['style', 'label', 'color'], label: '文字颜色', rules: true, mode: ['single'] },
    { span: 24, formType: 'NUMBER', name: ['style', 'offsetX'], label: 'X轴偏移', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'offsetY'], label: 'Y轴偏移', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsYesBool },
    { span: 24, formType: 'RADIO', name: ['style', 'scaleByDistance'], label: '视距缩放', rules: true, valueEnum: MappingData.IsEnabledBool },
    scaleByDistanceConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
]
// Todo 竖向点
const Mars3DdivUpLabelFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'INPUT', name: ['style', 'text'], label: '文字内容', rules: true },
    { span: 24, formType: 'COLOR', name: ['style', 'color'], label: '文字颜色', rules: true, mode: ['single'] },
    { span: 24, formType: 'NUMBER', name: ['style', 'font_size'], label: '文字字号', rules: true },
    { span: 24, formType: 'SELECT', name: ['style', 'font_family'], label: '文字字体', valueEnum: MappingData.Font__Family },
    { span: 24, formType: 'NUMBER', name: ['style', 'lineHeight'], label: '底线高度', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'circleSize'], label: '圆圈尺寸', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'offsetX'], label: 'X轴偏移', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'offsetY'], label: 'Y轴偏移', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'scaleByDistance'], label: '视距缩放', rules: true, valueEnum: MappingData.IsEnabledBool },
    scaleByDistanceConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
]
// Todo 动态边框
const Mars3DdivBoderLabelFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'INPUT', name: ['style', 'text'], label: '文字内容', rules: true },
    { span: 24, formType: 'COLOR', name: ['style', 'color'], label: '文字颜色', rules: true, mode: ['single'] },
    { span: 24, formType: 'NUMBER', name: ['style', 'font_size'], label: '文字字号', rules: true },
    { span: 24, formType: 'SELECT', name: ['style', 'font_family'], label: '文字字体', valueEnum: MappingData.Font__Family },
    { span: 24, formType: 'COLOR', name: ['style', 'boderColor'], label: '边框颜色', rules: true, mode: ['single'] },
    { span: 24, formType: 'NUMBER', name: ['style', 'offsetX'], label: 'X轴偏移', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'offsetY'], label: 'Y轴偏移', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'scaleByDistance'], label: '视距缩放', rules: true, valueEnum: MappingData.IsEnabledBool },
    scaleByDistanceConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
]
// Todo 动态边框
const Mars3DmodelPFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'TREE', name: ['style', 'url'], label: '渲染模型', rules: true, valueEnum: gltfMapping },
    { span: 24, formType: 'NUMBER', name: ['style', 'scale'], label: '缩放比例', rules: true, min: 0, max: 10000, step: 0.1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'opacity'], label: '透明度', rules: true, min: 0, max: 1, step: 0.1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'heading'], label: '方向角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'pitch'], label: '俯仰角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'roll'], label: '翻滚角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsYesBool },
    { span: 24, formType: 'RADIO', name: ['style', 'hasShadows'], label: '是否阴影', rules: true, valueEnum: MappingData.IsYesBool },
    { span: 24, formType: 'RADIO', name: ['style', 'runAnimations'], label: '模型动画', rules: true, valueEnum: MappingData.IsYesBool },
    { span: 24, formType: 'RADIO', name: ['style', 'fill'], label: '填充模型', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'COLOR', name: ['style', 'color'], label: '填充颜色', rules: true, mode: ['single'], jugde: [{ field: ['style', 'fill'], value: [true] }] },
    { span: 24, formType: 'RADIO', name: ['style', 'silhouette'], label: '模型轮廓', rules: true, valueEnum: MappingData.IsEnabledBool },
    silhouetteConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'scaleByDistance'], label: '视距缩放', rules: true, valueEnum: MappingData.IsEnabledBool },
    scaleByDistanceConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
    labelConfig
]
// Todo 线段
const Mars3DpolylinePFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'width'], label: '线宽', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'closure'], label: '是否闭合', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'hasShadows'], label: '是否阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'depthFail'], label: '遮挡显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    depthFailConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
    ...materialOptionsMapping,
    labelConfig
]
// Todo 曲线
const Mars3DcurveFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'width'], label: '线宽', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'hasShadows'], label: '是否阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'depthFail'], label: '遮挡显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    depthFailConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
    ...materialOptionsMapping,
    labelConfig
]
// Todo 走廊
const Mars3DcorridorPFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'width'], label: '线宽', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'cornerType'], label: '边角样式', rules: true, valueEnum: MappingData.mars3d__cornerType },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'hasShadows'], label: '是否阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    ...materialOptionsMapping,
    labelConfig
]
// Todo 路面
const Mars3DroadFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'width'], label: '线宽', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'height'], label: '高度', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'axisY'], label: '横竖切换', rules: true, valueEnum: MappingData.IsEnabledBool },
]
// Todo 围墙
const Mars3DwallPFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'diffHeight'], label: '墙面高度', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'closure'], label: '是否闭合', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'hasShadows'], label: '是否阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    ...materialOptionsMapping,
    labelConfig
]
// Todo 扩散墙
const Mars3DdiffuseWallFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'diffHeight'], label: '墙面高度', rules: true },
    { span: 24, formType: 'COLOR', name: ['style', 'color'], label: '墙面颜色', rules: true, mode: ['single'] },
    { span: 24, formType: 'NUMBER', name: ['style', 'speed'], label: '扩散速度', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'maxScale'], label: '扩散比例', rules: true, min: 0, max: 1, step: 0.1 },
]
// Todo 扩散墙
const Mars3DthickWallFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'diffHeight'], label: '墙面高度', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'width'], label: '墙面厚度', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'closure'], label: '是否闭合', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'hasShadows'], label: '是否阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    ...materialOptionsMapping,
    labelConfig
]
// Todo 平面
const Mars3DpolygonPFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'diffHeight'], label: '墙面高度', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'hasShadows'], label: '是否阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'classificationType'], label: '覆盖类型', rules: true, valueEnum: MappingData.mars3d_classificationType },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
    ...materialOptionsMapping,
    labelConfig
]
// Todo 矩形
const Mars3DrectanglePFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'rotationDegree'], label: '旋转角度', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'diffHeight'], label: '墙面高度', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'hasShadows'], label: '是否阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'classificationType'], label: '覆盖类型', rules: true, valueEnum: MappingData.mars3d_classificationType },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
    ...materialOptionsMapping,
    labelConfig
]
// Todo 圆形
const Mars3DcirclePFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'radius'], label: '半径', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'diffHeight'], label: '墙面高度', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    ...materialOptionsMapping,
    labelConfig
]
// Todo 扇形
const Mars3DsectorFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'radius'], label: '半径', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'startAngle'], label: '开始角度', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'endAngle'], label: '结束角度', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'RADIO', name: ['style', 'noCenter'], label: '不连接中心', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'NUMBER', name: ['style', 'diffHeight'], label: '墙面高度', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'hasShadows'], label: '是否阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    ...materialOptionsMapping,
    labelConfig
]
// Todo 攻击箭头
const Mars3DattackArrowFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'diffHeight'], label: '墙面高度', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'clampToGround'], label: '是否贴地', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'hasShadows'], label: '是否阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    { span: 24, formType: 'RADIO', name: ['style', 'distanceDisplayCondition'], label: '视距显示', rules: true, valueEnum: MappingData.IsEnabledBool },
    distanceDisplayConditionConfig,
    ...materialOptionsMapping,
    labelConfig
]
// Todo 攻击箭头(平尾)
const Mars3DattackArrowPWFormList = Mars3DattackArrowFormList
// Todo 攻击箭头(燕尾)
const Mars3DattackArrowYWFormList = Mars3DattackArrowFormList
// Todo 钳形箭头
const Mars3DdoubleArrowFormList = Mars3DattackArrowFormList
// Todo 直箭头
const Mars3DfineArrowFormList = Mars3DattackArrowFormList
// Todo 直箭头(燕尾)
const Mars3DfineArrowYWFormList = Mars3DattackArrowFormList
// Todo 直箭头(3点)
const Mars3DstraightArrowFormList = Mars3DattackArrowFormList
// Todo 弓形面
const Mars3DluneFormList = Mars3DattackArrowFormList
// Todo 等腰三角形
const Mars3DisosTriangleFormList = Mars3DattackArrowFormList
// Todo 闭合曲面
const Mars3DcloseVurveFormList = Mars3DattackArrowFormList
// Todo 集结地
const Mars3DgatheringPlaceFormList = Mars3DattackArrowFormList
// Todo 单点盒子
const Mars3DboxPFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'dimensions_x'], label: '长度', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'dimensions_y'], label: '宽度', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'dimensions_z'], label: '高度', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'heading'], label: '方向角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'pitch'], label: '俯仰角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'roll'], label: '翻滚角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    ...materialOptionsMapping,
    labelConfig
]
// Todo 圆锥
const Mars3DcylinderPFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'topRadius'], label: '	顶部半径', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'bottomRadius'], label: '底部半径', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'length'], label: '柱面高度', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'slices'], label: '周长边数', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'heading'], label: '方向角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'pitch'], label: '俯仰角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'roll'], label: '翻滚角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    ...materialOptionsMapping,
    labelConfig
]
// Todo 光锥
const Mars3DlightConeFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'COLOR', name: ['style', 'color'], label: '填充颜色', rules: true, mode: ['single'] },
    { span: 24, formType: 'NUMBER', name: ['style', 'radius'], label: '锥底半径', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'height'], label: '锥体高度', rules: true },
]
// Todo 球体
const Mars3DellipsoidPFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: '元素类型', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'radii_x'], label: 'X轴半径', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'radii_y'], label: 'Y轴半径', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'radii_z'], label: 'Z轴半径', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'innerRadii_x'], label: '内部X轴半径', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'innerRadii_y'], label: '内部Y轴半径', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'innerRadii_z'], label: '内部Z轴半径', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'minimumClockDegree'], label: '最小时钟角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'maximumClockDegree'], label: '最大时钟角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'minimumConeDegree'], label: '最小锥角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'maximumConeDegree'], label: '最大锥角', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: ['style', 'stackPartitions'], label: '竖向划分数量', rules: true },
    { span: 24, formType: 'NUMBER', name: ['style', 'slicePartitions'], label: '横向划分数量', rules: true },
    { span: 24, formType: 'RADIO', name: ['style', 'outline'], label: '是否衬色', rules: true, valueEnum: MappingData.IsEnabledBool },
    outlineConfig,
    ...materialOptionsMapping,
    labelConfig
]
// TODO 模型
const Mars3DtilesFormList = [
    { span: 24, formType: 'HIDDEN', name: 'id', label: '元素ID', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 0], label: '经度', rules: true },
    { span: 9, formType: 'NUMBER', name: ['position', 1], label: '纬度', rules: true },
    { span: 6, formType: 'NUMBER', name: ['position', 2], label: '高程', rules: true },
    { span: 8, formType: 'NUMBER', name: ['rotation', 'x'], label: 'X轴方向', rules: true, min: 0, max: 360, step: 1 },
    { span: 8, formType: 'NUMBER', name: ['rotation', 'y'], label: 'Y轴方向', rules: true, min: 0, max: 360, step: 1 },
    { span: 8, formType: 'NUMBER', name: ['rotation', 'z'], label: 'Z轴方向', rules: true, min: 0, max: 360, step: 1 },
    { span: 24, formType: 'NUMBER', name: 'maxMemory', label: '最大缓存', rules: true },
    { span: 24, formType: 'NUMBER', name: 'maximumScreenSpaceError', label: '精细度', rules: true, min: 1, max: 30, step: 1 },
    { span: 24, formType: 'NUMBER', name: 'scale', label: '整体缩放', rules: true },
    { span: 24, formType: 'NUMBER', name: 'opacity', label: '透明度', rules: true, min: 0, max: 1, step: 0.1 },
    { span: 24, formType: 'RADIO', name: ['highlight', 'enabled'], label: '选中高亮', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'highlight_config', label: '高亮设置', collapsible: true,
        jugde: [{ field: ['highlight', 'enabled'], value: [true] }], children: [
            { span: 24, formType: 'RADIO', name: ['highlight', 'type'], label: '触发方式', rules: true, valueEnum: MappingData.Charts__VchartsTrigger },
            { span: 24, formType: 'RADIO', name: ['highlight', 'outlineEffect'], label: '高亮方式', rules: true, valueEnum: MappingData.mars3d__tilesOutlineEffect },
            {
                span: 24, formType: 'NUMBER', name: ['highlight', 'width'], label: '描边宽度', rules: true,
                jugde: [{ field: ['highlight', 'outlineEffect'], value: [true] }]
            },
            { span: 24, formType: 'COLOR', name: ['highlight', 'color'], label: '高亮颜色', rules: true, mode: ['single'] },
        ]
    }
]


export const Mars3dFormConfig = {
    Mars3donAddCenter,
    Mars3donAddElement,
    Mars3donAddTiles,
    Mars3dFileConfig,

    Mars3dBaseConfig,
    Mars3dGlobeConfig,
    Mars3dCameraController,
    Mars3dTerrainConfig,
    Mars3dWeatherConfig,
    Mars3dColourConfig,

    Mars3dBoundaryBorderConfig,
    Mars3dBoundaryCoverConfig,
    Mars3dBoundaryLineConfig,
    Mars3dBoundaryWallConfig,

    Mars3DlabelPFormList,
    Mars3DpointPFormList,
    Mars3DbillboardPFormList,
    Mars3DtetrahedronFormList,
    Mars3DdivFormList,
    Mars3DdivLightPointFormList,
    Mars3DdivUpLabelFormList,
    Mars3DdivBoderLabelFormList,
    Mars3DmodelPFormList,
    Mars3DpolylinePFormList,
    Mars3DcurveFormList,
    Mars3DcorridorPFormList,
    Mars3DroadFormList,
    Mars3DwallPFormList,
    Mars3DdiffuseWallFormList,
    Mars3DthickWallFormList,
    Mars3DpolygonPFormList,
    Mars3DrectanglePFormList,
    Mars3DcirclePFormList,
    Mars3DsectorFormList,
    Mars3DattackArrowFormList,
    Mars3DattackArrowPWFormList,
    Mars3DattackArrowYWFormList,
    Mars3DdoubleArrowFormList,
    Mars3DfineArrowFormList,
    Mars3DfineArrowYWFormList,
    Mars3DstraightArrowFormList,
    Mars3DluneFormList,
    Mars3DisosTriangleFormList,
    Mars3DcloseVurveFormList,
    Mars3DgatheringPlaceFormList,
    Mars3DboxPFormList,
    Mars3DcylinderPFormList,
    Mars3DlightConeFormList,
    Mars3DellipsoidPFormList,
    Mars3DtilesFormList
}