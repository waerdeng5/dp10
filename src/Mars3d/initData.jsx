import './divTemplate.scss'
import { CommonSceneUrl } from '../Config'
import { ColorCallBack, SetBorderParams, SpacingCallBack, SetFilderParams, SetShadowParams } from '../Utils'

const tdtKey = '66157ab348d37d969fdc61d1a6f45c6e'
const geovisearthToken = "e4964b442b88caaad98477673f5e63fb"


export const basemapsList = [
    {
        id: 'BaseD01',
        name: "谷歌影像",
        type: "google",
        layer: "img_d",
        maximumLevel: 18
    },
    {
        id: 'BaseD02',
        name: "微软影像",
        type: "bing",
        layer: "Aerial",
        maximumLevel: 18
    },
    {
        id: 'BaseD03',
        name: "ArcGIS影像",
        type: "xyz",
        url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        enablePickFeatures: false,
        maximumLevel: 18
    },
    {
        id: 'BaseD04',
        name: '天地图影像',
        type: 'tdt',
        layer: 'img_d',
        key: [tdtKey],
        maximumLevel: 18,
        show: true
    },
    {
        id: 'BaseD08',
        name: "星图影像",
        type: "xyz",
        // url: "https://tiles{s}.geovisearth.com/base/v1/img/{z}/{x}/{y}?token=" + geovisearthToken,
        url: 'https://api.open.geovisearth.com/map/v1/img/{z}/{x}/{y}?token=' + geovisearthToken,
        // https://api.open.geovisearth.com/map/v1/img/
        maximumLevel: 18
    },
    {
        id: 'BaseD05',
        name: "高德影像",
        type: "gaode",
        layer: 'img_d',
        maximumLevel: 18
    },
    {
        id: 'BaseD06',
        name: "百度影像",
        type: "baidu",
        layer: "img_d",
        maximumLevel: 18
    },
    {
        id: 'BaseD07',
        name: "腾讯影像",
        type: "tencent",
        layer: "img_d",
        maximumLevel: 18
    },
    // 电子图
    {
        id: 'BaseV01',
        name: "蓝色底图",
        type: "xyz",
        url: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
        chinaCRS: "GCJ02",
        enablePickFeatures: false,
        maximumLevel: 18
    },
    {
        id: 'BaseV02',
        name: "黑色底图",
        type: "tencent",
        layer: "custom",
        style: "4",
        maximumLevel: 18
    },
    {
        id: 'BaseV03',
        name: "暗色底图",
        type: "gaode",
        layer: "vec",
        invertColor: true,
        filterColor: "#4e70a6",
        brightness: 0.6,
        contrast: 1.8,
        gamma: 0.3,
        hue: 1,
        saturation: 0,
        maximumLevel: 18
    },
    {
        id: 'BaseV04',
        name: '天地图电子',
        type: 'group',
        layers: [
            { name: '底图', type: 'tdt', layer: 'vec_d', key: [tdtKey] },
            { name: '注记', type: 'tdt', layer: 'vec_z', key: [tdtKey] },
        ],
        maximumLevel: 18
    },
    {
        id: 'BaseV08',
        name: "星图电子",
        type: "xyz",
        // url: "https://tiles{s}.geovisearth.com/base/v1/vec/{z}/{x}/{y}?token=" + geovisearthToken,
        url: 'https://api.open.geovisearth.com/map/v1/vec/{z}/{x}/{y}?token=' + geovisearthToken,
        // subdomains: "123",
        maximumLevel: 18
    },
    {
        id: 'BaseV05',
        name: "高德电子",
        type: "gaode",
        layer: "vec",
        maximumLevel: 18
    },
    {
        id: 'BaseV06',
        name: "百度电子",
        type: "baidu",
        layer: "vec",
        maximumLevel: 18
    },
    {
        id: 'BaseV07',
        name: "腾讯电子",
        type: "tencent",
        layer: "vec",
        maximumLevel: 18
    },
]

export const layerList = [
    // 导入参照数据 手动版
    // {
    //     id: 'handMovement',
    //     type: 'kml',
    //     url: 'https://aloss.ljkjkf.com/WebConfigFile/Scene/kml/同绥平面.kml',
    //     symbol: { styleOptions: { color: 'red', width: 2, clampToGround: true } },
    //     show: true
    // },
    {
        id: 'BaseZ01',
        name: "谷歌注记",
        type: "google",
        layer: "img_z",
        show: false,
    },
    {
        id: 'BaseZ04',
        name: '天地图注记',
        type: 'tdt',
        key: [tdtKey],
        layer: 'img_z',
        show: false,
    },
    {
        id: 'BaseZ08',
        name: "星图注记",
        type: "xyz",
        // url: "https://tiles{s}.geovisearth.com/base/v1/cia/{z}/{x}/{y}?token=" + geovisearthToken,
        url: 'https://api.open.geovisearth.com/map/v1/cia/{z}/{x}/{y}?token=' + geovisearthToken,
        // subdomains: "123"
    },
    {
        id: 'BaseZ05',
        name: "高德注记",
        type: "gaode",
        layer: 'img_z',
        show: false,
    },
    {
        id: 'BaseZ06',
        name: "百度注记",
        type: "baidu",
        layer: "img_z",
        show: false,
    },
    {
        id: 'BaseZ07',
        name: "腾讯注记",
        type: "tencent",
        layer: "img_z",
        show: false,
    },
    {
        id: 'LayF01',
        name: '经纬网',
        type: 'graticule',
        show: false,
    },
    {
        id: 'LayF02',
        name: '网格线',
        type: 'grid',
        color: "#ffffff",
        alpha: 0.03,
        cells: 2,
        show: false,
    },
]

export const sceneParameter = {
    scene: {
        sceneMode: 3,
        highDynamicRange: true,
        fxaa: true,
        showSkyAtmosphere: true,
        fog: true,
        showSun: true,
        showMoon: true,
        showSkyBox: true,
        backgroundColor: '#00000000',
        verticalExaggeration: 1,
        orderIndependentTranslucency: false,
        contextOptions: { webgl: { alpha: true } },
    },
    globe: {
        show: true,
        baseColor: '#00000000',
        depthTestAgainstTerrain: true,
        showGroundAtmosphere: true,
        enableLighting: true,
        showWaterEffect: true,
        showSkirts: true,
    },
    cameraController: {
        enableZoom: true,
        enableCollisionDetection: true,
        zoomFactor: 3,
        minimumZoomDistance: 1,
        maximumZoomDistance: 50000000,
        minimumCollisionTerrainHeight: 80000,
        enableTilt: true,
        enableRotate: true,
        enableTranslate: true,
    },
    control: {
        toolbar: { enabled: true, position: 'top-right' },
        geocoder: { service: "gaode" },
        homeButton: { icon: "https://data.mars3d.cn/img/control/homeButton.svg" },
        locationBar: true,
        distanceLegend: { style: { left: "8px", bottom: "0px" } },
    },
    terrain: { url: "https://data.mars3d.cn/terrain" },
    layers: layerList,
    basemaps: basemapsList,
    other: {
        basemap: 'BaseD04',
        layer: ['BaseZ04'],
        wireframe: false,
        show: true,
        toolbar: true,
        geocoder: true,
        homeButton: true,
        locationBar: true,
        distanceLegend: true,
        toolbar_position: 'top-right'
    },
    weather: {
        // 雾天
        fog_enabled: false,
        fog_color: '#ffffff',
        fog_maxHeight: 8000,
        // 雨天
        rain_enabled: false,
        rain_size: 20,
        rain_speed: 10,
        rain_direction: 45,
        rain_maxHeight: 8000,
        // 雪天
        snow_enabled: false,
        snow_speed: 20,
        snow_scale: 10,
        snow_maxHeight: 8000,
        // 积雪
        snowCover_enabled: false,
        snowCover_alpha: 0.1,
        snowCover_maxHeight: 8000
    },
    colour: {
        // 色彩特效
        colorCorrection_enabled: false,
        colorCorrection_brightness: 1,
        colorCorrection_contrast: 1,
        colorCorrection_hue: 0,
        colorCorrection_saturation: 1,
        // 泛光效果
        bloom_enabled: false,
        bloom_contrast: 128,
        bloom_brightness: 0,
        bloom_delta: 1.0,
        bloom_sigma: 3.78,
        bloom_stepSize: 5.0,
        // 亮度效果
        brightness_enabled: false,
        brightness_brightness: 2,
        // 马赛克效果
        mosaic_enabled: false,
        // 景深
        depthOfField_enabled: false,
        depthOfField_focalDistance: 87,
        depthOfField_delta: 1,
        depthOfField_sigma: 3.78,
        depthOfField_stepSize: 2.46,
        // 夜视
        nightVision_enabled: false,
        // 黑白
        blackAndWhite_enabled: false,
        blackAndWhite_gradations: 4,
    },
    border: {
        enabled: false,
        border: []
    },
    cover: {
        show: false,
        style: {
            clampToGround: true,
            materialType: 'Color',
            materialOptions: { color: '#13c2c2', speed: 8 }
        }
    },
    line: {
        show: false,
        style: {
            width: 4,
            closure: true,
            clampToGround: true,
            materialType: 'Color',
            materialOptions: { color: '#13c2c2', speed: 8 }
        }
    },
    wall: {
        show: false,
        style: {
            diffHeight: 50000,
            setHeight: -50000,
            closure: true,
            materialType: 'Color',
            materialOptions: { color: '#13c2c2', speed: 8 }
        }
    },
    camera: {
        list: { 默认: { lat: 32.214031, lng: 106.037732, alt: 7993190.3, heading: 359.4, pitch: -87.9 } },
        default: '默认'
    },
    element: [],
    tiles: []
}

export const gltfMapping = [
    {
        label: '自定义',
        value: 'custom',
        children: [
            {
                label: '配电箱',
                value: CommonSceneUrl.gltf + '配电箱/配电箱.gltf'
            },
            {
                label: '箱梁',
                value: CommonSceneUrl.gltf + '箱梁.gltf'
            },
            {
                label: '地块',
                value: CommonSceneUrl.gltf + '逊克地块总装/xunkedikuaizongzongzhuang.gltf'
            },
            {
                label: '梁场',
                value: CommonSceneUrl.gltf + '梁场.glb'
            },
            {
                label: '泵站',
                value: CommonSceneUrl.gltf + '泵站.glb'
            },
            {
                label: '桥A01',
                value: CommonSceneUrl.gltf + '桥A01.glb'
            },
            {
                label: '桥A02',
                value: CommonSceneUrl.gltf + '桥A02.glb'
            },
            {
                label: '医院',
                value: CommonSceneUrl.gltf + '主楼.glb'
            },
            {
                label: '塔吊',
                value: CommonSceneUrl.gltf + 'tadiao.gltf'
            },
            {
                label: '16M台座',
                value: CommonSceneUrl.gltf + 'Pedestal16M.gltf'
            },
            {
                label: '20M台座',
                value: CommonSceneUrl.gltf + 'Pedestal20M.gltf'
            },
            {
                label: '30M台座',
                value: CommonSceneUrl.gltf + 'Pedestal30M.gltf'
            },
            {
                label: '40M台座',
                value: CommonSceneUrl.gltf + 'Pedestal40M.gltf'
            },
            {
                label: '16M梁',
                value: CommonSceneUrl.gltf + 'beam16M.gltf'
            },
            {
                label: '20M梁',
                value: CommonSceneUrl.gltf + 'beam20M.gltf'
            },
            {
                label: '30M梁',
                value: CommonSceneUrl.gltf + 'beam30M.gltf'
            },
            {
                label: '35M梁',
                value: CommonSceneUrl.gltf + 'beam35M.gltf'
            },
            {
                label: '40M梁',
                value: CommonSceneUrl.gltf + 'beam40M.gltf'
            },
            {
                label: '压路机',
                value: CommonSceneUrl.gltf + 'che.gltf'
            },
            {
                label: '二衬台车',
                value: CommonSceneUrl.gltf + 'kaiwataiche.gltf'
            },
        ]
    },
    {
        label: '车辆',
        value: 'A01',
        children: [
            {
                label: '警车',
                image: '//data.mars3d.cn/gltf/mars/img/jingche.jpg',
                value: '//data.mars3d.cn/gltf/mars/jingche/jingche.gltf'
            },
            {
                label: '小汽车',
                image: '//data.mars3d.cn/gltf/mars/img/qiche.jpg',
                value: '//data.mars3d.cn/gltf/mars/qiche.gltf'
            },
            {
                label: '奥迪',
                image: '//data.mars3d.cn/gltf/mars/img/aodi1.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/aodi1.gltf'
            },
            {
                label: '黄色奔驰',
                image: '//data.mars3d.cn/gltf/mars/img/benchi1.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/benchi1.gltf'
            },
            {
                label: '黑色奔驰',
                image: '//data.mars3d.cn/gltf/mars/img/benchi2.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/benchi2.gltf'
            },
            {
                label: '蓝色奔驰',
                image: '//data.mars3d.cn/gltf/mars/img/benchi3.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/benchi3.gltf'
            },
            {
                label: '白色跑车',
                image: '//data.mars3d.cn/gltf/mars/img/paoche1.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/paoche1.gltf'
            },
            {
                label: '红色汽车',
                image: '//data.mars3d.cn/gltf/mars/img/red_car.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/red_car.gltf'
            },
            {
                label: 'SUV汽车',
                image: '//data.mars3d.cn/gltf/mars/img/suv.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/suv.gltf'
            },
            {
                label: '巴士1',
                image: '//data.mars3d.cn/gltf/mars/img/bus1.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/bus1.gltf'
            },
            {
                label: '巴士2',
                image: '//data.mars3d.cn/gltf/mars/img/bus2.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/bus2.gltf'
            },
            {
                label: '黑色小巴士',
                image: '//data.mars3d.cn/gltf/mars/img/bus3.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/bus3.gltf'
            },
            {
                label: '卡车1',
                image: '//data.mars3d.cn/gltf/mars/img/kache1.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/kache1.gltf'
            },
            {
                label: '卡车2',
                image: '//data.mars3d.cn/gltf/mars/img/kache2.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/kache2.gltf'
            },
            {
                label: '卡车3',
                image: '//data.mars3d.cn/gltf/mars/img/kache3.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/kache3.gltf'
            },
            {
                label: '卡车4',
                image: '//data.mars3d.cn/gltf/mars/img/kache4.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/kache4.gltf'
            },
            {
                label: '缆车',
                image: '//data.mars3d.cn/gltf/mars/img/lanche.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/lanche.gltf'
            },
            {
                label: '起重车',
                image: '//data.mars3d.cn/gltf/mars/img/qzcar.jpg',
                value: '//data.mars3d.cn/gltf/mars/qzcar/GKZY_anim.gltf'
            },
            {
                label: '混凝土搅拌车',
                image: '//data.mars3d.cn/gltf/mars/img/jiaobanche.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/jiaobanche.glb'
            },
            {
                label: '渣土车',
                image: '//data.mars3d.cn/gltf/mars/img/zhatuche.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/zhatuche.glb'
            },
            {
                label: '土方车',
                image: '//data.mars3d.cn/gltf/mars/img/tufangche.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/tufangche.glb'
            },
            {
                label: '挖掘机',
                image: '//data.mars3d.cn/gltf/mars/img/wajueji.jpg',
                value: '//data.mars3d.cn/gltf/mars/car/wajueji.glb'
            },
            {
                label: '消防车',
                image: '//data.mars3d.cn/gltf/mars/img/xiaofangche.jpg',
                value: '//data.mars3d.cn/gltf/mars/firedrill/xiaofangche.gltf'
            },
            {
                label: '消防车2',
                image: '//data.mars3d.cn/gltf/mars/img/xiaofangche2.jpg',
                value: '//data.mars3d.cn/gltf/mars/firedrill/xiaofangche2.gltf'
            },
            {
                label: '小货车',
                image: '//data.mars3d.cn/gltf/sample/img/CesiumMilkTruck.jpg',
                value: '//data.mars3d.cn/gltf/sample/CesiumMilkTruck/CesiumMilkTruck.gltf'
            },
            {
                label: '越野车',
                image: '//data.mars3d.cn/gltf/sample/img/GroundVehicle.jpg',
                value: '//data.mars3d.cn/gltf/sample/GroundVehicle/GroundVehicle.glb'
            },
            {
                label: '汽车_海关车',
                image: '//data.mars3d.cn/gltf/imap/img/1564470050852.jpg',
                value: '//data.mars3d.cn/gltf/imap/82bd55706595471793aed25081d923d3/gltf/gltf2.gltf'
            },
            {
                label: '汽车_货车',
                image: '//data.mars3d.cn/gltf/imap/img/1564470090396.jpg',
                value: '//data.mars3d.cn/gltf/imap/1898a88a5f914fd884d55a6d3cb5fc8a/gltf/gltf2.gltf'
            },
            {
                label: '汽车_旅行车',
                image: '//data.mars3d.cn/gltf/imap/img/1564470147369.jpg',
                value: '//data.mars3d.cn/gltf/imap/78b2fc0b7d25469face6912102167e0d/gltf/gltf2.gltf'
            },
            {
                label: '汽车_27',
                image: '//data.mars3d.cn/gltf/imap/img/1564469622135.jpg',
                value: '//data.mars3d.cn/gltf/imap/6d303e03f480400fa66bc365a99c0633/gltf/gltf2.gltf'
            },
            {
                label: '汽车_28',
                image: '//data.mars3d.cn/gltf/imap/img/1564469638574.jpg',
                value: '//data.mars3d.cn/gltf/imap/4ad445a3cade4e05981db027e420d571/gltf/gltf2.gltf'
            },
            {
                label: '汽车_29',
                image: '//data.mars3d.cn/gltf/imap/img/1564469652760.jpg',
                value: '//data.mars3d.cn/gltf/imap/ce2fddca7bac436d8d318bcd4fdf2d69/gltf/gltf2.gltf'
            },
            {
                label: '汽车_30',
                image: '//data.mars3d.cn/gltf/imap/img/1564469672960.jpg',
                value: '//data.mars3d.cn/gltf/imap/af6be6d04323452ba21ab20400c762a0/gltf/gltf2.gltf'
            },
            {
                label: '汽车_31',
                image: '//data.mars3d.cn/gltf/imap/img/1564469702042.jpg',
                value: '//data.mars3d.cn/gltf/imap/faba303ffdd04399a9bd8f923ff063a7/gltf/gltf2.gltf'
            },
            {
                label: '汽车_32',
                image: '//data.mars3d.cn/gltf/imap/img/1564469726522.jpg',
                value: '//data.mars3d.cn/gltf/imap/9a4d7fe12b8a49768bf440650ec5dc81/gltf/gltf2.gltf'
            },
            {
                label: '汽车_33',
                image: '//data.mars3d.cn/gltf/imap/img/1564469753766.jpg',
                value: '//data.mars3d.cn/gltf/imap/3d7b17b5060c41d48d6773bec1a7c325/gltf/gltf2.gltf'
            },
            {
                label: '汽车_39',
                image: '//data.mars3d.cn/gltf/imap/img/1564469770606.jpg',
                value: '//data.mars3d.cn/gltf/imap/2999d0c048eb40a49ccbb20e638ef5be/gltf/gltf2.gltf'
            },
            {
                label: '交通工具_05',
                image: '//data.mars3d.cn/gltf/imap/img/1564477385132.jpg',
                value: '//data.mars3d.cn/gltf/imap/9506d2116b6c4a82b6575141364759db/gltf/gltf2.gltf'
            },
            {
                label: '货车11',
                image: '//data.mars3d.cn/gltf/imap/img/1564479246160.jpg',
                value: '//data.mars3d.cn/gltf/imap/d8cb721fdc3642a085533583da944c79/gltf/gltf2.gltf'
            },
            {
                label: '工地建筑_14',
                image: '//data.mars3d.cn/gltf/imap/img/1564478006083.jpg',
                value: '//data.mars3d.cn/gltf/imap/92da1bb2a08e4c73aadda8bbc6719fba/gltf/gltf2.gltf'
            },
            {
                label: '工地建筑_15',
                image: '//data.mars3d.cn/gltf/imap/img/1564477937331.jpg',
                value: '//data.mars3d.cn/gltf/imap/1d4f63111fc9499dac5cee2286ad7bb3/gltf/gltf2.gltf'
            },
            {
                label: '铲车_32',
                image: '//data.mars3d.cn/gltf/imap/img/1564469862277.jpg',
                value: '//data.mars3d.cn/gltf/imap/ea229c19b0424d9aa6bf7ec2b54b5e5c/gltf/gltf2.gltf'
            },
            {
                label: '军事装备_01',
                image: '//data.mars3d.cn/gltf/imap/img/1564471119884.jpg',
                value: '//data.mars3d.cn/gltf/imap/897ec2fdcdcd4ac181ecc5ed1c48018c/gltf/gltf2.gltf'
            },
            {
                label: '军事装备_02',
                image: '//data.mars3d.cn/gltf/imap/img/1564471137512.jpg',
                value: '//data.mars3d.cn/gltf/imap/40dfa9f495fd4d3a9274746053392d53/gltf/gltf2.gltf'
            },
            {
                label: '自行车01',
                image: '//data.mars3d.cn/gltf/imap/img/1564477572748.jpg',
                value: '//data.mars3d.cn/gltf/imap/15928c4e4e774f32ac1e299fe7774774/gltf/gltf2.gltf'
            },
            {
                label: '电动车03',
                image: '//data.mars3d.cn/gltf/imap/img/1564477407001.jpg',
                value: '//data.mars3d.cn/gltf/imap/8cdf82408c9f4add806d7f65d45d723e/gltf/gltf2.gltf'
            },
            {
                label: '摩托车04',
                image: '//data.mars3d.cn/gltf/imap/img/1564477501378.jpg',
                value: '//data.mars3d.cn/gltf/imap/2eb7131358e345c99ef776c2b1daf204/gltf/gltf2.gltf'
            },
            {
                label: '摩托车',
                image: '//data.mars3d.cn/gltf/mars/img/motorcar.jpg',
                value: '//data.mars3d.cn/gltf/mars/firedrill/motorcar.glb'
            },
            {
                label: '有轨电车13',
                image: '//data.mars3d.cn/gltf/imap/img/1564477523711.jpg',
                value: '//data.mars3d.cn/gltf/imap/8395cc3ed1f046ebaf4649bfc290fe4c/gltf/gltf2.gltf'
            },
            {
                label: '有轨电车15',
                image: '//data.mars3d.cn/gltf/imap/img/1564477541733.jpg',
                value: '//data.mars3d.cn/gltf/imap/639726c652384a3dac4d76b1120ff7d7/gltf/gltf2.gltf'
            },
        ]
    },
    {
        label: '火车及铁路',
        value: 'A02',
        children: [
            {
                label: '高铁车头',
                image: '//data.mars3d.cn/gltf/mars/img/train-heada.jpg',
                value: '//data.mars3d.cn/gltf/mars/train/heada.glb'
            },
            {
                label: '高铁车身',
                image: '//data.mars3d.cn/gltf/mars/img/train-body.jpg',
                value: '//data.mars3d.cn/gltf/mars/train/body.glb'
            },
            {
                label: '桥墩',
                image: '//data.mars3d.cn/gltf/mars/img/railway-bridge.jpg',
                value: '//data.mars3d.cn/gltf/mars/railway/bridge.glb'
            },
            {
                label: '电线架子',
                image: '//data.mars3d.cn/gltf/mars/img/railway-jiazi.jpg',
                value: '//data.mars3d.cn/gltf/mars/railway/jiazi.glb'
            },
            {
                label: '铁路路基',
                image: '//data.mars3d.cn/gltf/mars/img/railway-railway.jpg',
                value: '//data.mars3d.cn/gltf/mars/railway/railway.glb'
            },
            {
                label: '车站',
                image: '//data.mars3d.cn/gltf/mars/img/railway-station.jpg',
                value: '//data.mars3d.cn/gltf/mars/railway/station.glb'
            },
            {
                label: '隧道',
                image: '//data.mars3d.cn/gltf/mars/img/railway-suidao.jpg',
                value: '//data.mars3d.cn/gltf/mars/railway/suidao.glb'
            },
        ]
    },
    {
        label: '飞机及航空',
        value: 'A03',
        children: [
            {
                label: '无人机',
                image: '//data.mars3d.cn/gltf/mars/img/wrj.jpg',
                value: '//data.mars3d.cn/gltf/mars/wrj.glb'
            },
            {
                label: '多旋翼无人机',
                image: '//data.mars3d.cn/gltf/mars/img/dajiang.jpg',
                value: '//data.mars3d.cn/gltf/mars/dajiang/dajiang.gltf'
            },
            {
                label: 'MQ-9无人机',
                image: '//data.mars3d.cn/gltf/mars/img/MQ-9-Predator.jpg',
                value: '//data.mars3d.cn/gltf/mars/MQ-9-Predator.glb'
            },
            {
                label: '战机',
                image: '//data.mars3d.cn/gltf/mars/img/zhanji.jpg',
                value: '//data.mars3d.cn/gltf/mars/zhanji.glb'
            },
            {
                label: '飞机',
                image: '//data.mars3d.cn/gltf/mars/img/feiji.jpg',
                value: '//data.mars3d.cn/gltf/mars/feiji.glb'
            },
            {
                label: '火箭',
                image: '//data.mars3d.cn/gltf/sample/img/launchvehicle.jpg',
                value: '//data.mars3d.cn/gltf/sample/launchvehicle/launchvehicle.glb'
            },
            {
                label: '卫星',
                image: '//data.mars3d.cn/gltf/mars/img/weixin.jpg',
                value: '//data.mars3d.cn/gltf/mars/weixin.gltf'
            },
            {
                label: '客机',
                image: '//data.mars3d.cn/gltf/sample/img/CesiumAir.jpg',
                value: '//data.mars3d.cn/gltf/sample/CesiumAir/Cesium_Air.glb'
            },
            {
                label: '热气球',
                image: '//data.mars3d.cn/gltf/sample/img/CesiumBalloon.jpg',
                value: '//data.mars3d.cn/gltf/sample/CesiumBalloon/CesiumBalloon.glb'
            },
            {
                label: '军事装备_03',
                image: '//data.mars3d.cn/gltf/imap/img/1564471147971.jpg',
                value: '//data.mars3d.cn/gltf/imap/ad876a2e4017485693f0a2b1a0ea3f50/gltf/gltf2.gltf'
            },
            {
                label: '军事装备_04',
                image: '//data.mars3d.cn/gltf/imap/img/1564471165826.jpg',
                value: '//data.mars3d.cn/gltf/imap/89ec16851215454eb0ad93e80f35ad2e/gltf/gltf2.gltf'
            },
            {
                label: '军事装备_05',
                image: '//data.mars3d.cn/gltf/imap/img/1564471103546.jpg',
                value: '//data.mars3d.cn/gltf/imap/f916d50cacf94c2885536527ceef66b7/gltf/gltf2.gltf'
            },
            {
                label: '军事装备_06',
                image: '//data.mars3d.cn/gltf/imap/img/1564471185354.jpg',
                value: '//data.mars3d.cn/gltf/imap/3664046b2add4be38b6c53ec4cdeaedb/gltf/gltf2.gltf'
            },
            {
                label: '军事装备_07',
                image: '//data.mars3d.cn/gltf/imap/img/1564471200664.jpg',
                value: '//data.mars3d.cn/gltf/imap/98bd9b580b87490dabc4ac99bfed0161/gltf/gltf2.gltf'
            },
            {
                label: '军事装备_10',
                image: '//data.mars3d.cn/gltf/imap/img/1564471246485.jpg',
                value: '//data.mars3d.cn/gltf/imap/484f2b2947d444798f9a5dcd0e03d47c/gltf/gltf2.gltf'
            },
            {
                label: '卫星雷达接收站',
                image: '//data.mars3d.cn/gltf/mars/img/leida.jpg',
                value: '//data.mars3d.cn/gltf/mars/leida.glb'
            },
        ]
    },
    {
        label: '船及水利航海',
        value: 'A04',
        children: [
            {
                label: '散货船',
                image: '//data.mars3d.cn/gltf/mars/img/ship-01.jpg',
                value: '//data.mars3d.cn/gltf/mars/ship/ship01.glb'
            },
            {
                label: '油船',
                image: '//data.mars3d.cn/gltf/mars/img/ship-02.jpg',
                value: '//data.mars3d.cn/gltf/mars/ship/ship02.glb'
            },
            {
                label: '集装箱船',
                image: '//data.mars3d.cn/gltf/mars/img/ship-03.jpg',
                value: '//data.mars3d.cn/gltf/mars/ship/ship03.glb'
            },
            {
                label: '拖轮',
                image: '//data.mars3d.cn/gltf/mars/img/ship-04.jpg',
                value: '//data.mars3d.cn/gltf/mars/ship/ship04.glb'
            },
            {
                label: '煤炭船',
                image: '//data.mars3d.cn/gltf/mars/img/ship-05.jpg',
                value: '//data.mars3d.cn/gltf/mars/ship/ship05.glb'
            },
            {
                label: '铁矿石船',
                image: '//data.mars3d.cn/gltf/mars/img/ship-06.jpg',
                value: '//data.mars3d.cn/gltf/mars/ship/ship06.glb'
            },
            {
                label: '滚装船',
                image: '//data.mars3d.cn/gltf/mars/img/ship-07.jpg',
                value: '//data.mars3d.cn/gltf/mars/ship/ship07.glb'
            },
            {
                label: '化工品船',
                image: '//data.mars3d.cn/gltf/mars/img/ship-08.jpg',
                value: '//data.mars3d.cn/gltf/mars/ship/ship08.glb'
            },
            {
                label: '渔船',
                image: '//data.mars3d.cn/gltf/mars/img/ship-09.jpg',
                value: '//data.mars3d.cn/gltf/mars/ship/ship09.glb'
            },
            {
                label: '交通船',
                image: '//data.mars3d.cn/gltf/mars/img/ship-jiaotong.jpg',
                value: '//data.mars3d.cn/gltf/mars/ship/jiaotong.glb'
            },
            {
                label: '护卫舰',
                image: '//data.mars3d.cn/gltf/mars/img/aegis-destroyer.jpg',
                value: '//data.mars3d.cn/gltf/mars/sea/aegis-destroyer.gltf'
            },
            {
                label: '航空母舰',
                image: '//data.mars3d.cn/gltf/mars/img/aircraft-carrier.jpg',
                value: '//data.mars3d.cn/gltf/mars/sea/aircraft-carrier.gltf'
            },
            {
                label: '闸门',
                image: '//data.mars3d.cn/gltf/mars/img/zhamen.jpg',
                value: '//data.mars3d.cn/gltf/mars/zhamen.glb'
            },
            {
                label: '交通工具_轮船16',
                image: '//data.mars3d.cn/gltf/imap/img/1564477439420.jpg',
                value: '//data.mars3d.cn/gltf/imap/be1f6f71e73c4d57bc099a28f6ce2a15/gltf/gltf2.gltf'
            },
            {
                label: '交通工具_轮船17',
                image: '//data.mars3d.cn/gltf/imap/img/1564477468596.jpg',
                value: '//data.mars3d.cn/gltf/imap/ce6097ae41824cb981a66b82dd44578b/gltf/gltf2.gltf'
            },
            {
                label: '交通工具_轮船22',
                image: '//data.mars3d.cn/gltf/imap/img/1564477485005.jpg',
                value: '//data.mars3d.cn/gltf/imap/184ea77fb7fd4411b7004eab1f27ee56/gltf/gltf2.gltf'
            },
            {
                label: '船_42',
                image: '//data.mars3d.cn/gltf/imap/img/1564478255708.jpg',
                value: '//data.mars3d.cn/gltf/imap/bb62f662a549484e923e9be3b667aa19/gltf/gltf2.gltf'
            },
            {
                label: '船_51',
                image: '//data.mars3d.cn/gltf/imap/img/1564478283315.jpg',
                value: '//data.mars3d.cn/gltf/imap/270621418ed849e593194dc4ac744308/gltf/gltf2.gltf'
            },
            {
                label: '燃料船',
                image: '//data.mars3d.cn/gltf/imap/img/1564478302488.jpg',
                value: '//data.mars3d.cn/gltf/imap/a35533afdd894d6385e1690749a27659/gltf/gltf2.gltf'
            },
            {
                label: '军事装备_08',
                image: '//data.mars3d.cn/gltf/imap/img/1564471218071.jpg',
                value: '//data.mars3d.cn/gltf/imap/a64cb3926a024fd8bc2638da6f7ebe32/gltf/gltf2.gltf'
            },
            {
                label: '栓船柱_01',
                image: '//data.mars3d.cn/gltf/imap/img/1564470306357.jpg',
                value: '//data.mars3d.cn/gltf/imap/e090ee3fc42a46a687d8d58890459f45/gltf/gltf2.gltf'
            },
            {
                label: '水坝_22',
                image: '//data.mars3d.cn/gltf/imap/img/1564470335574.jpg',
                value: '//data.mars3d.cn/gltf/imap/7637780556cd4a58a4b475f4b0ec4993/gltf/default.gltf'
            },
            {
                label: '港口高空设备_01',
                image: '//data.mars3d.cn/gltf/imap/img/1564478044720.jpg',
                value: '//data.mars3d.cn/gltf/imap/4278feced41a426399ea53a73b091ddf/gltf/gltf2.gltf'
            },
            {
                label: '港口高空设备_02',
                image: '//data.mars3d.cn/gltf/imap/img/1564478059655.jpg',
                value: '//data.mars3d.cn/gltf/imap/f6cc354bf1dd422d857c7fa489fca6f1/gltf/gltf2.gltf'
            },
            {
                label: '港口起重机03',
                image: '//data.mars3d.cn/gltf/imap/img/1564478076096.jpg',
                value: '//data.mars3d.cn/gltf/imap/4f9959b415ab4adab869fde77079bae7/gltf/gltf2.gltf'
            },
            {
                label: '港口运输设施02',
                image: '//data.mars3d.cn/gltf/imap/img/1564478100294.jpg',
                value: '//data.mars3d.cn/gltf/imap/eba589bbe3c142e4b68e648463bd7d9e/gltf/gltf2.gltf'
            },
        ]
    },
    {
        label: '人物',
        value: 'A05',
        children: [
            {
                label: '巡逻人员A',
                image: '//data.mars3d.cn/gltf/mars/img/ren.jpg',
                value: '//data.mars3d.cn/gltf/mars/man/ren.glb'
            },
            {
                label: '巡逻人员B',
                image: '//data.mars3d.cn/gltf/mars/img/gongren.jpg',
                value: '//data.mars3d.cn/gltf/mars/man/gongren.glb'
            },
            {
                label: '行人',
                image: '//data.mars3d.cn/gltf/mars/img/man.jpg',
                value: '//data.mars3d.cn/gltf/mars/man/walk.gltf'
            },
            {
                label: '消防员',
                image: '//data.mars3d.cn/gltf/mars/img/xiaofangyuan.jpg',
                value: '//data.mars3d.cn/gltf/mars/firedrill/xiaofangyuan.glb'
            },
            {
                label: '奔跑的消防员',
                image: '//data.mars3d.cn/gltf/mars/img/xiaofangyuan-run.jpg',
                value: '//data.mars3d.cn/gltf/mars/firedrill/xiaofangyuan-run.gltf'
            },
            {
                label: '步行动画_人',
                image: '//data.mars3d.cn/gltf/sample/img/CesiumMan.jpg',
                value: '//data.mars3d.cn/gltf/sample/CesiumMan/Cesium_Man.gltf'
            },
        ]
    },
    {
        label: '街道及交通设施',
        value: 'A06',
        children: [
            {
                label: '水马围栏',
                image: '//data.mars3d.cn/gltf/mars/img/shuima.jpg',
                value: '//data.mars3d.cn/gltf/mars/shuima.glb'
            },
            {
                label: '铁围栏',
                image: '//data.mars3d.cn/gltf/mars/img/weilan.jpg',
                value: '//data.mars3d.cn/gltf/mars/weilan.gltf'
            },
            {
                label: '红绿灯',
                image: '//data.mars3d.cn/gltf/mars/img/honglvdeng.jpg',
                value: '//data.mars3d.cn/gltf/mars/jiaotong/honglvdeng.gltf'
            },
            {
                label: '红绿灯(带杆)',
                image: '//data.mars3d.cn/gltf/mars/img/honglvdeng-gan.jpg',
                value: '//data.mars3d.cn/gltf/mars/jiaotong/honglvdeng-gan.gltf'
            },
            {
                label: 'LED屏',
                image: '//data.mars3d.cn/gltf/mars/img/led.jpg',
                value: '//data.mars3d.cn/gltf/mars/jiaotong/led.gltf'
            },
            {
                label: 'LED屏(带杆)',
                image: '//data.mars3d.cn/gltf/mars/img/led-gan.jpg',
                value: '//data.mars3d.cn/gltf/mars/jiaotong/led-gan.gltf'
            },
            {
                label: '摄像头',
                image: '//data.mars3d.cn/gltf/mars/img/sxt.jpg',
                value: '//data.mars3d.cn/gltf/mars/jiaotong/sxt.gltf'
            },
            {
                label: '摄像头(带杆)',
                image: '//data.mars3d.cn/gltf/mars/img/sxt-gan.jpg',
                value: '//data.mars3d.cn/gltf/mars/jiaotong/sxt-gan.gltf'
            },
            {
                label: 'gan',
                image: '//data.mars3d.cn/gltf/mars/img/gan.jpg',
                value: '//data.mars3d.cn/gltf/mars/jiaotong/gan.gltf'
            },
            {
                label: '交通相关_100',
                image: '//data.mars3d.cn/gltf/imap/img/1564471420853.jpg',
                value: '//data.mars3d.cn/gltf/imap/dd3c8c65dd6a4869ab14c72fbba7363c/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_109',
                image: '//data.mars3d.cn/gltf/imap/img/1564471440760.jpg',
                value: '//data.mars3d.cn/gltf/imap/86e2abd37cd04b18a5efb31cb9b9dffa/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_99',
                image: '//data.mars3d.cn/gltf/imap/img/1564471467664.jpg',
                value: '//data.mars3d.cn/gltf/imap/31f72307a8db494a8de965f4e5dc20c2/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_公共座椅055',
                image: '//data.mars3d.cn/gltf/imap/img/1564471479134.jpg',
                value: '//data.mars3d.cn/gltf/imap/7c7d2272b2974ffa81c617b869cb5f97/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_公共座椅056',
                image: '//data.mars3d.cn/gltf/imap/img/1564471492121.jpg',
                value: '//data.mars3d.cn/gltf/imap/fc47453dc155428ea29f78ab59c9d0f5/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_广告牌001',
                image: '//data.mars3d.cn/gltf/imap/img/1564471571986.jpg',
                value: '//data.mars3d.cn/gltf/imap/761c5cdc69f143f7ba32cf663ea766cf/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_广告牌005',
                image: '//data.mars3d.cn/gltf/imap/img/1564471587760.jpg',
                value: '//data.mars3d.cn/gltf/imap/aa2a997ca8b34d809b7beeb2f7ecc10c/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_110',
                image: '//data.mars3d.cn/gltf/imap/img/1564471455855.jpg',
                value: '//data.mars3d.cn/gltf/imap/9c8442a1b18b4db1b5f2963cdd538c51/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_红绿灯063',
                image: '//data.mars3d.cn/gltf/imap/img/1564471607120.jpg',
                value: '//data.mars3d.cn/gltf/imap/995809a3f7834a619b9ae95c57545717/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_红绿灯064',
                image: '//data.mars3d.cn/gltf/imap/img/1564471621079.jpg',
                value: '//data.mars3d.cn/gltf/imap/556482493305441880fa44d72323d1c3/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_红绿灯065',
                image: '//data.mars3d.cn/gltf/imap/img/1564471636892.jpg',
                value: '//data.mars3d.cn/gltf/imap/3c311632e9c24621bf0acfe4955e05a0/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_减速带114',
                image: '//data.mars3d.cn/gltf/imap/img/1564471654546.jpg',
                value: '//data.mars3d.cn/gltf/imap/5b28377c88a64732b3e25261891d72ad/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_垃圾桶048',
                image: '//data.mars3d.cn/gltf/imap/img/1564477007696.jpg',
                value: '//data.mars3d.cn/gltf/imap/d143fe62ee374b41b80818cc6019be8d/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_垃圾桶049',
                image: '//data.mars3d.cn/gltf/imap/img/1564477058803.jpg',
                value: '//data.mars3d.cn/gltf/imap/03fba0648bf1443ab1573e1d0e2093f7/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_垃圾桶053',
                image: '//data.mars3d.cn/gltf/imap/img/1564477077133.jpg',
                value: '//data.mars3d.cn/gltf/imap/2e845accd75c4edeb537f40d8d853e7f/gltf/gltf2.gltf'
            },
            {
                label: '垃圾箱_41',
                image: '//data.mars3d.cn/gltf/imap/img/1564470108986.jpg',
                value: '//data.mars3d.cn/gltf/imap/a370bbcfe3d44594a18bb38bf2ff9652/gltf/default.gltf'
            },
            {
                label: '移动式厕所_33',
                image: '//data.mars3d.cn/gltf/imap/img/1564470459895.jpg',
                value: '//data.mars3d.cn/gltf/imap/85dfe537da1540d6938a3bb71b40a33c/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_信号灯091',
                image: '//data.mars3d.cn/gltf/imap/img/1564477293907.jpg',
                value: '//data.mars3d.cn/gltf/imap/7520f5b3094b46e39c8b2c3764449897/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_站牌083',
                image: '//data.mars3d.cn/gltf/imap/img/1564477309182.jpg',
                value: '//data.mars3d.cn/gltf/imap/8badc423c59b4d85b0e08d9b2d1547f8/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_站厅031',
                image: '//data.mars3d.cn/gltf/imap/img/1564477328484.jpg',
                value: '//data.mars3d.cn/gltf/imap/7b00cf0e22884fdb887ba9c354787a77/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_站厅034',
                image: '//data.mars3d.cn/gltf/imap/img/1564477342290.jpg',
                value: '//data.mars3d.cn/gltf/imap/b1c7ca3ce7d448baab34dfdb097dd939/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_站厅035',
                image: '//data.mars3d.cn/gltf/imap/img/1564477357780.jpg',
                value: '//data.mars3d.cn/gltf/imap/33e9f72e2a7a40d59625cb28818ce17f/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_路灯018',
                image: '//data.mars3d.cn/gltf/imap/img/1564477092720.jpg',
                value: '//data.mars3d.cn/gltf/imap/e17c7f3a2ad7448399f605c2f3690ad7/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_路灯023',
                image: '//data.mars3d.cn/gltf/imap/img/1564477156785.jpg',
                value: '//data.mars3d.cn/gltf/imap/7483136359034d028a695b5d595f9690/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_路灯024',
                image: '//data.mars3d.cn/gltf/imap/img/1564477138553.jpg',
                value: '//data.mars3d.cn/gltf/imap/7f39ed34ab684dfdaf25d78cff16dd36/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_路灯025',
                image: '//data.mars3d.cn/gltf/imap/img/1564477175167.jpg',
                value: '//data.mars3d.cn/gltf/imap/bca6e024881e4134953a54568d0a94ea/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_路灯026',
                image: '//data.mars3d.cn/gltf/imap/img/1564477198499.jpg',
                value: '//data.mars3d.cn/gltf/imap/051ffb7edf194a4494c284966168f89c/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_路灯027',
                image: '//data.mars3d.cn/gltf/imap/img/1564477215220.jpg',
                value: '//data.mars3d.cn/gltf/imap/e47b6fae4a3641fcae0e1767bcc86f47/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_路灯029',
                image: '//data.mars3d.cn/gltf/imap/img/1564477230043.jpg',
                value: '//data.mars3d.cn/gltf/imap/d9222c3778fd4c0d826a2564ffc4c5a6/gltf/gltf2.gltf'
            },
            {
                label: '街道小品_公交亭01',
                image: '//data.mars3d.cn/gltf/imap/img/1564471323822.jpg',
                value: '//data.mars3d.cn/gltf/imap/5d4c5688568e4184af06c58fd17c0bfc/gltf/gltf2.gltf'
            },
            {
                label: '街道小品_公交亭02',
                image: '//data.mars3d.cn/gltf/imap/img/1564471343790.jpg',
                value: '//data.mars3d.cn/gltf/imap/4f491cf0494b487aa8337f5961cf349b/gltf/gltf2.gltf'
            },
            {
                label: '街道小品_广告牌01',
                image: '//data.mars3d.cn/gltf/imap/img/1564471361862.jpg',
                value: '//data.mars3d.cn/gltf/imap/e3400e9fb3514c2e9b71828867210e47/gltf/gltf2.gltf'
            },
            {
                label: '街道小品_座椅01',
                image: '//data.mars3d.cn/gltf/imap/img/1564471381265.jpg',
                value: '//data.mars3d.cn/gltf/imap/5cc3351db5d24366b52eddce000c8958/gltf/gltf2.gltf'
            },
            {
                label: '街道小品_座椅05',
                image: '//data.mars3d.cn/gltf/imap/img/1564471399798.jpg',
                value: '//data.mars3d.cn/gltf/imap/b9fb9e10ac724425b971761f76e8f975/gltf/gltf2.gltf'
            },
            {
                label: '铁桥01',
                image: '//data.mars3d.cn/gltf/imap/img/1564470424094.jpg',
                value: '//data.mars3d.cn/gltf/imap/d5a87b15d9fb4ca8872a596a5595bf05/gltf/gltf2.gltf'
            },
            {
                label: '工地建筑_L_04',
                image: '//data.mars3d.cn/gltf/imap/img/1564477831462.jpg',
                value: '//data.mars3d.cn/gltf/imap/c0a36443fdf04ec4995da8d3d871a7d6/gltf/gltf2.gltf'
            },
            {
                label: '工地建筑_L_12',
                image: '//data.mars3d.cn/gltf/imap/img/1564477890854.jpg',
                value: '//data.mars3d.cn/gltf/imap/cb8974a26d0b45f4b58f92239b4c3e3a/gltf/gltf2.gltf'
            },
            {
                label: '工地建筑_L_33',
                image: '//data.mars3d.cn/gltf/imap/img/1564477956617.jpg',
                value: '//data.mars3d.cn/gltf/imap/076a369f26624888a2416d24bb1b88b3/gltf/gltf2.gltf'
            },
            {
                label: '家居配件_邮箱75',
                image: '//data.mars3d.cn/gltf/imap/img/1564477791752.jpg',
                value: '//data.mars3d.cn/gltf/imap/9e857b0792784bbf83fe48b34e799085/gltf/gltf2.gltf'
            },
            {
                label: '家居配件_邮箱76',
                image: '//data.mars3d.cn/gltf/imap/img/1564477812399.jpg',
                value: '//data.mars3d.cn/gltf/imap/967a9ff2ab89431abeda414b25f25ed9/gltf/gltf2.gltf'
            },
            {
                label: '军事装备_11',
                image: '//data.mars3d.cn/gltf/imap/img/1564471270812.jpg',
                value: '//data.mars3d.cn/gltf/imap/6f8cde6c0b774e86962ce2723832ab7f/gltf/gltf2.gltf'
            },
        ]
    },
    {
        label: '树及植物',
        value: 'A07',
        children: [
            {
                label: '树_005',
                image: '//data.mars3d.cn/gltf/imap/img/1564468860386.jpg',
                value: '//data.mars3d.cn/gltf/imap/de07d417d587494291daccb7670609fb/gltf/gltf2.gltf'
            },
            {
                label: '树_008',
                image: '//data.mars3d.cn/gltf/imap/img/1564468889077.jpg',
                value: '//data.mars3d.cn/gltf/imap/f97d5363970146ac90cb70adb26b2789/gltf/gltf2.gltf'
            },
            {
                label: '树_011',
                image: '//data.mars3d.cn/gltf/imap/img/1564468904579.jpg',
                value: '//data.mars3d.cn/gltf/imap/444108c0e22d446992ade8ad5d61af07/gltf/gltf2.gltf'
            },
            {
                label: '树_014',
                image: '//data.mars3d.cn/gltf/imap/img/1564468936668.jpg',
                value: '//data.mars3d.cn/gltf/imap/a0bed8789dd6453183be58e6850921f6/gltf/gltf2.gltf'
            },
            {
                label: '树_018',
                image: '//data.mars3d.cn/gltf/imap/img/1564468954070.jpg',
                value: '//data.mars3d.cn/gltf/imap/dd090ab0e83a48b98e2cc017a06077aa/gltf/gltf2.gltf'
            },
            {
                label: '树_030',
                image: '//data.mars3d.cn/gltf/imap/img/1564468966603.jpg',
                value: '//data.mars3d.cn/gltf/imap/29d6c57b0cf54dce8c8894e3728b08a8/gltf/gltf2.gltf'
            },
            {
                label: '树_041',
                image: '//data.mars3d.cn/gltf/imap/img/1564468980766.jpg',
                value: '//data.mars3d.cn/gltf/imap/df7253735b5749d496daa42eb9a1a623/gltf/gltf2.gltf'
            },
            {
                label: '树_051',
                image: '//data.mars3d.cn/gltf/imap/img/1564469070232.jpg',
                value: '//data.mars3d.cn/gltf/imap/bbbdc9800120489399e84f5e2fbee610/gltf/gltf2.gltf'
            },
            {
                label: '树_054',
                image: '//data.mars3d.cn/gltf/imap/img/1564469148632.jpg',
                value: '//data.mars3d.cn/gltf/imap/bd24a22883be43c4b9e430c42ab1d4b8/gltf/gltf2.gltf'
            },
            {
                label: '植物_01',
                image: '//data.mars3d.cn/gltf/imap/img/1564478783626.jpg',
                value: '//data.mars3d.cn/gltf/imap/71c45157f5464c10a608113f02c57266/gltf/gltf2.gltf'
            },
            {
                label: '植物_03',
                image: '//data.mars3d.cn/gltf/imap/img/1564020248741.jpg',
                value: '//data.mars3d.cn/gltf/imap/8b950ad4e37441afaa23482728f29842/gltf/gltf2.gltf'
            },
            {
                label: '植物_12',
                image: '//data.mars3d.cn/gltf/imap/img/1564020262776.jpg',
                value: '//data.mars3d.cn/gltf/imap/d27323e8a10e47e6970ca13380db261e/gltf/gltf2.gltf'
            },
            {
                label: '植物_13',
                image: '//data.mars3d.cn/gltf/imap/img/1564478797056.jpg',
                value: '//data.mars3d.cn/gltf/imap/85a27e9f863d4ba0ae9442db7778aa14/gltf/gltf2.gltf'
            },
            {
                label: '植物_32',
                image: '//data.mars3d.cn/gltf/imap/img/1564478810469.jpg',
                value: '//data.mars3d.cn/gltf/imap/c17dc79f015442fa9fea0d4f804a17b8/gltf/gltf2.gltf'
            },
            {
                label: '植物_38',
                image: '//data.mars3d.cn/gltf/imap/img/1564478826634.jpg',
                value: '//data.mars3d.cn/gltf/imap/8c262a4ec3b843e0acc36ef56014a1c8/gltf/gltf2.gltf'
            },
            {
                label: '植物_41',
                image: '//data.mars3d.cn/gltf/imap/img/1564020367599.jpg',
                value: '//data.mars3d.cn/gltf/imap/3c0b5f7ee96148af9f42cdecc8ce915d/gltf/gltf2.gltf'
            },
            {
                label: '植物_62',
                image: '//data.mars3d.cn/gltf/imap/img/1564020429348.jpg',
                value: '//data.mars3d.cn/gltf/imap/3ac57f04b887417b928e7794cad32375/gltf/gltf2.gltf'
            },
            {
                label: '园艺植物_01',
                image: '//data.mars3d.cn/gltf/imap/img/1564468694759.jpg',
                value: '//data.mars3d.cn/gltf/imap/eb408cc379d943428e7501d7f5e1e578/gltf/gltf2.gltf'
            },
            {
                label: '园艺植物_07',
                image: '//data.mars3d.cn/gltf/imap/img/1564468708411.jpg',
                value: '//data.mars3d.cn/gltf/imap/77d89ea1c390446188303a59239b8f5b/gltf/gltf2.gltf'
            },
            {
                label: '园艺植物_22',
                image: '//data.mars3d.cn/gltf/imap/img/1564468721542.jpg',
                value: '//data.mars3d.cn/gltf/imap/b69be1fbcb8c43d2b745478205ce2c76/gltf/gltf2.gltf'
            },
            {
                label: '园艺植物_33',
                image: '//data.mars3d.cn/gltf/imap/img/1564468734703.jpg',
                value: '//data.mars3d.cn/gltf/imap/a0e834a35ecf4f90a513a5b3ee18ce98/gltf/gltf2.gltf'
            },
            {
                label: '园艺植物_46',
                image: '//data.mars3d.cn/gltf/imap/img/1564468663482.jpg',
                value: '//data.mars3d.cn/gltf/imap/30dcf1b4c59d4240bef7afb9fc36d3cf/gltf/gltf2.gltf'
            },
            {
                label: '盆栽植物003',
                image: '//data.mars3d.cn/gltf/imap/img/1564470486467.jpg',
                value: '//data.mars3d.cn/gltf/imap/e26a1072a2e84295b9c39e0a7d5b1c5e/gltf/gltf2.gltf'
            },
            {
                label: '盆栽植物016',
                image: '//data.mars3d.cn/gltf/imap/img/1564470509507.jpg',
                value: '//data.mars3d.cn/gltf/imap/048b0e1dcbe94e8681f27237fe71a5cb/gltf/gltf2.gltf'
            },
            {
                label: '盆栽植物018',
                image: '//data.mars3d.cn/gltf/imap/img/1564470528495.jpg',
                value: '//data.mars3d.cn/gltf/imap/5124851961ff4ed598336e9a26d65002/gltf/gltf2.gltf'
            },
            {
                label: '盆栽植物020',
                image: '//data.mars3d.cn/gltf/imap/img/1564470559273.jpg',
                value: '//data.mars3d.cn/gltf/imap/ef4d7e0657ab4b7d88e3d5632e8fe800/gltf/gltf2.gltf'
            },
            {
                label: '盆栽植物027',
                image: '//data.mars3d.cn/gltf/imap/img/1564470575074.jpg',
                value: '//data.mars3d.cn/gltf/imap/9c4f09841bc941aaa450e9b2b58c316d/gltf/gltf2.gltf'
            },
            {
                label: '盆栽植物056',
                image: '//data.mars3d.cn/gltf/imap/img/1564470607137.jpg',
                value: '//data.mars3d.cn/gltf/imap/ef9f2bb42a1c4dd69e4ecca66d4a0d56/gltf/gltf2.gltf'
            },
            {
                label: '盆栽植物057',
                image: '//data.mars3d.cn/gltf/imap/img/1564470622636.jpg',
                value: '//data.mars3d.cn/gltf/imap/5775f70065444501a66db9820b65bee2/gltf/gltf2.gltf'
            },
            {
                label: '盆栽植物063',
                image: '//data.mars3d.cn/gltf/imap/img/1564470637754.jpg',
                value: '//data.mars3d.cn/gltf/imap/4b86f48d068f446cbefe4f37782ba810/gltf/gltf2.gltf'
            },
            {
                label: '盆栽植物065',
                image: '//data.mars3d.cn/gltf/imap/img/1564470665235.jpg',
                value: '//data.mars3d.cn/gltf/imap/de2036d521184caf921259a94672fcac/gltf/gltf2.gltf'
            },
        ]
    },
    {
        label: '建筑物',
        value: 'A08',
        children: [
            {
                label: '室内楼层',
                image: '//data.mars3d.cn/gltf/mars/img/floor.jpg',
                value: '//data.mars3d.cn/gltf/mars/fang/floor.gltf'
            },
            {
                label: '室内房间',
                image: '//data.mars3d.cn/gltf/mars/img/shinei.jpg',
                value: '//data.mars3d.cn/gltf/mars/fang/shinei.gltf'
            },
            {
                label: '上海浦东',
                image: '//data.mars3d.cn/gltf/mars/img/shanghai.jpg',
                value: '//data.mars3d.cn/gltf/mars/shanghai/scene.gltf'
            },
            {
                label: '城市模型_001',
                image: '//data.mars3d.cn/gltf/imap/img/1564478318849.jpg',
                value: '//data.mars3d.cn/gltf/imap/bbcfb4bee7d348a38577cd1d3cd57af8/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_003',
                image: '//data.mars3d.cn/gltf/imap/img/1564478330161.jpg',
                value: '//data.mars3d.cn/gltf/imap/49c748e17c0446e59390639cb00abc96/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_011',
                image: '//data.mars3d.cn/gltf/imap/img/1564478339997.jpg',
                value: '//data.mars3d.cn/gltf/imap/846b07f3050243d8a563c8c1485c2868/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_022',
                image: '//data.mars3d.cn/gltf/imap/img/1564478350947.jpg',
                value: '//data.mars3d.cn/gltf/imap/3b86f72e90dd45e388413499d4af89b3/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_023',
                image: '//data.mars3d.cn/gltf/imap/img/1564478364015.jpg',
                value: '//data.mars3d.cn/gltf/imap/9e1f98edda514846a1b179550d1b304b/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_031',
                image: '//data.mars3d.cn/gltf/imap/img/1564478378389.jpg',
                value: '//data.mars3d.cn/gltf/imap/b5fb419707d94a1780f91a41b02ec5bc/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_037',
                image: '//data.mars3d.cn/gltf/imap/img/1564478395773.jpg',
                value: '//data.mars3d.cn/gltf/imap/c9d453ccdb2c4cf1bbae52a831f41568/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_049',
                image: '//data.mars3d.cn/gltf/imap/img/1564478413006.jpg',
                value: '//data.mars3d.cn/gltf/imap/32802d8ce44540cdbd2e7081eff4b609/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_050',
                image: '//data.mars3d.cn/gltf/imap/img/1564478438615.jpg',
                value: '//data.mars3d.cn/gltf/imap/70994478f29e4f6b9a619424d9227c2d/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_052',
                image: '//data.mars3d.cn/gltf/imap/img/1564478454726.jpg',
                value: '//data.mars3d.cn/gltf/imap/d17fb339cb1f46b9857447c654471281/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_069',
                image: '//data.mars3d.cn/gltf/imap/img/1564478470797.jpg',
                value: '//data.mars3d.cn/gltf/imap/4d203339d6cc4b45972bce497625030f/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_070',
                image: '//data.mars3d.cn/gltf/imap/img/1564478483630.jpg',
                value: '//data.mars3d.cn/gltf/imap/34eea9b28c55439984ea22f93eed3377/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_072',
                image: '//data.mars3d.cn/gltf/imap/img/1564478497384.jpg',
                value: '//data.mars3d.cn/gltf/imap/cdad0f720ca54007b36caffb88130fa5/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_073',
                image: '//data.mars3d.cn/gltf/imap/img/1564478513539.jpg',
                value: '//data.mars3d.cn/gltf/imap/cd783e8094f94def8b4844ebcabc434d/gltf/gltf2.gltf'
            },
            {
                label: '城市模型_078',
                image: '//data.mars3d.cn/gltf/imap/img/1564478546115.jpg',
                value: '//data.mars3d.cn/gltf/imap/a7e3b092fc354d2b8e3fcf60877133e5/gltf/gltf2.gltf'
            },
            {
                label: '别墅_01',
                image: '//data.mars3d.cn/gltf/imap/img/1564478562704.jpg',
                value: '//data.mars3d.cn/gltf/imap/129707a1798845f8a854eb3db4e12533/gltf/gltf2.gltf'
            },
            {
                label: '别墅_02',
                image: '//data.mars3d.cn/gltf/imap/img/1566373029778.jpg',
                value: '//data.mars3d.cn/gltf/imap/57cb9237101c486980a61df9df36924b/gltf/gltf2.gltf'
            },
            {
                label: '别墅_03',
                image: '//data.mars3d.cn/gltf/imap/img/1564478594367.jpg',
                value: '//data.mars3d.cn/gltf/imap/51d87248c8ff4b1a931343ead86110a7/gltf/gltf2.gltf'
            },
            {
                label: '别墅_04',
                image: '//data.mars3d.cn/gltf/imap/img/1564478609039.jpg',
                value: '//data.mars3d.cn/gltf/imap/646ba9b5152142e9a9fbeda7ca1fdb72/gltf/gltf2.gltf'
            },
            {
                label: '别墅_08',
                image: '//data.mars3d.cn/gltf/imap/img/1564478628779.jpg',
                value: '//data.mars3d.cn/gltf/imap/3ab0b53886ea4f42bc1fd46bd2e6d4a6/gltf/gltf2.gltf'
            },
            {
                label: '别墅_09',
                image: '//data.mars3d.cn/gltf/imap/img/1564478648683.jpg',
                value: '//data.mars3d.cn/gltf/imap/b687e0fed4814f4f81fb598ef8fe316b/gltf/gltf2.gltf'
            },
            {
                label: '别墅_14',
                image: '//data.mars3d.cn/gltf/imap/img/1564478666171.jpg',
                value: '//data.mars3d.cn/gltf/imap/f26a8da13cc1419a94f148bbb821e359/gltf/gltf2.gltf'
            },
            {
                label: '欧式建筑_21',
                image: '//data.mars3d.cn/gltf/imap/img/1564470909131.jpg',
                value: '//data.mars3d.cn/gltf/imap/0cce510b9add470baf9315f03e36ed52/gltf/gltf2.gltf'
            },
            {
                label: '欧式建筑_23',
                image: '//data.mars3d.cn/gltf/imap/img/1564471005169.jpg',
                value: '//data.mars3d.cn/gltf/imap/f4596b5baeb5441e8c104c13008b5fa0/gltf/gltf2.gltf'
            },
            {
                label: '欧式建筑_24',
                image: '//data.mars3d.cn/gltf/imap/img/1564471019674.jpg',
                value: '//data.mars3d.cn/gltf/imap/b7931f4bab064d4b8e67c31121fb8e85/gltf/gltf2.gltf'
            },
            {
                label: '欧式建筑_25',
                image: '//data.mars3d.cn/gltf/imap/img/1564471029514.jpg',
                value: '//data.mars3d.cn/gltf/imap/de163d716d98418eb23e90a13d671aa5/gltf/gltf2.gltf'
            },
            {
                label: '欧式建筑_27',
                image: '//data.mars3d.cn/gltf/imap/img/1564471041661.jpg',
                value: '//data.mars3d.cn/gltf/imap/bdc1435efb2b420fae89a91bc2051303/gltf/gltf2.gltf'
            },
            {
                label: '欧式建筑_29',
                image: '//data.mars3d.cn/gltf/imap/img/1564471057297.jpg',
                value: '//data.mars3d.cn/gltf/imap/3cee411252c944ad9c9bcf32266c91e6/gltf/gltf2.gltf'
            },
            {
                label: '欧式建筑_32',
                image: '//data.mars3d.cn/gltf/imap/img/1564471073287.jpg',
                value: '//data.mars3d.cn/gltf/imap/b7c907519e234588b0a26439469058f6/gltf/gltf2.gltf'
            },
            {
                label: '欧式建筑_35',
                image: '//data.mars3d.cn/gltf/imap/img/1564471088921.jpg',
                value: '//data.mars3d.cn/gltf/imap/99f9791d1ca84f449025db5d2dc0ef2e/gltf/gltf2.gltf'
            },
            {
                label: '商业建筑_39',
                image: '//data.mars3d.cn/gltf/imap/img/1564469381226.jpg',
                value: '//data.mars3d.cn/gltf/imap/171112f22bf34b09a80dfe36b7a2c3ce/gltf/gltf2.gltf'
            },
            {
                label: '商业建筑_47',
                image: '//data.mars3d.cn/gltf/imap/img/1564469514768.jpg',
                value: '//data.mars3d.cn/gltf/imap/81b5ae8c8bdc46a0ab3e45b9e6c47ea8/gltf/gltf2.gltf'
            },
            {
                label: '商业建筑_54',
                image: '//data.mars3d.cn/gltf/imap/img/1564469532643.jpg',
                value: '//data.mars3d.cn/gltf/imap/0332d9cc05cc4128befe160b096cc6af/gltf/gltf2.gltf'
            },
            {
                label: '商业建筑_56',
                image: '//data.mars3d.cn/gltf/imap/img/1564469547022.jpg',
                value: '//data.mars3d.cn/gltf/imap/97aef5750b604a94bad78b60ecd70c0b/gltf/gltf2.gltf'
            },
            {
                label: '商业建筑_61',
                image: '//data.mars3d.cn/gltf/imap/img/1564469461199.jpg',
                value: '//data.mars3d.cn/gltf/imap/40676d827af74e58a8701e5b87b9f918/gltf/gltf2.gltf'
            },
            {
                label: '商业建筑_62',
                image: '//data.mars3d.cn/gltf/imap/img/1564469485804.jpg',
                value: '//data.mars3d.cn/gltf/imap/f634772ca3f040bb827e2eb7b85f30a5/gltf/gltf2.gltf'
            },
            {
                label: '商业建筑_63',
                image: '//data.mars3d.cn/gltf/imap/img/1564469567422.jpg',
                value: '//data.mars3d.cn/gltf/imap/3308f9b546cc4bc0acd9c52f9f634252/gltf/gltf2.gltf'
            },
            {
                label: '中式建筑',
                image: '//data.mars3d.cn/gltf/imap/img/1564469838765.jpg',
                value: '//data.mars3d.cn/gltf/imap/236cec07b3ff49ef8ef23c55d66c07b0/gltf/gltf2.gltf'
            },
            {
                label: '工业建筑_20',
                image: '//data.mars3d.cn/gltf/imap/img/1564468632573.jpg',
                value: '//data.mars3d.cn/gltf/imap/821216d8e8fe4c078831eb38eb994174/gltf/gltf2.gltf'
            },
            {
                label: '工地建筑_L_06',
                image: '//data.mars3d.cn/gltf/imap/img/1564477861044.jpg',
                value: '//data.mars3d.cn/gltf/imap/9d3a5ca27bad426b81b05bca10aac9bd/gltf/gltf2.gltf'
            },
            {
                label: '工地建筑_L_10',
                image: '//data.mars3d.cn/gltf/imap/img/1564477875189.jpg',
                value: '//data.mars3d.cn/gltf/imap/b04575a269e74d309d80fb4aa504c307/gltf/gltf2.gltf'
            },
            {
                label: '工地建筑_L_88',
                image: '//data.mars3d.cn/gltf/imap/img/1564477973098.jpg',
                value: '//data.mars3d.cn/gltf/imap/4f99992dc26a43c2975038003879a8c2/gltf/gltf2.gltf'
            },
            {
                label: '顺德粮仓_仓体',
                image: '//data.mars3d.cn/gltf/imap/img/1564470369041.jpg',
                value: '//data.mars3d.cn/gltf/imap/ecd074f5a7314d84ac4ed06eb66da6bd/gltf/gltf2.gltf'
            },
        ]
    },
    {
        label: '电力设施',
        value: 'A09',
        children: [
            {
                label: '风力发电机',
                image: '//data.mars3d.cn/gltf/mars/img/fengche.jpg',
                value: '//data.mars3d.cn/gltf/mars/fengche.gltf'
            },
            {
                label: '太阳能发电板',
                image: '//data.mars3d.cn/gltf/mars/img/taiyang.jpg',
                value: '//data.mars3d.cn/gltf/mars/taiyang/taiyang.gltf'
            },
            {
                label: '电线塔',
                image: '//data.mars3d.cn/gltf/mars/img/tower.jpg',
                value: '//data.mars3d.cn/gltf/mars/tower/tower.glb'
            },
            {
                label: '三角电线杆',
                image: '//data.mars3d.cn/gltf/mars/img/sanjiao-gan.jpg',
                value: '//data.mars3d.cn/gltf/mars/jiaotong/sanjiao-gan.gltf'
            },
            {
                label: '室外照明_008',
                image: '//data.mars3d.cn/gltf/imap/img/1564469202244.jpg',
                value: '//data.mars3d.cn/gltf/imap/7bab0edfba0044ae9ef215c691025394/gltf/gltf2.gltf'
            },
            {
                label: '室外照明_036',
                image: '//data.mars3d.cn/gltf/imap/img/1564469225075.jpg',
                value: '//data.mars3d.cn/gltf/imap/743212b03967462ea01724d1312b06f9/gltf/gltf2.gltf'
            },
            {
                label: '室外照明_052',
                image: '//data.mars3d.cn/gltf/imap/img/1564469243454.jpg',
                value: '//data.mars3d.cn/gltf/imap/ad599019341e4245b617bcac4eb6b0d6/gltf/gltf2.gltf'
            },
            {
                label: '室外照明_069',
                image: '//data.mars3d.cn/gltf/imap/img/1564469285823.jpg',
                value: '//data.mars3d.cn/gltf/imap/107fecdac89e4b6980d5442caecc284a/gltf/gltf2.gltf'
            },
            {
                label: '室外照明_072',
                image: '//data.mars3d.cn/gltf/imap/img/1564469176204.jpg',
                value: '//data.mars3d.cn/gltf/imap/cfca7e7dde1c4d678649e60f404fef4f/gltf/gltf2.gltf'
            },
            {
                label: '室外照明_073',
                image: '//data.mars3d.cn/gltf/imap/img/1564469347605.jpg',
                value: '//data.mars3d.cn/gltf/imap/110c71184966434fbd05170469feba29/gltf/gltf2.gltf'
            },
            {
                label: '室外照明_076',
                image: '//data.mars3d.cn/gltf/imap/img/1564469335071.jpg',
                value: '//data.mars3d.cn/gltf/imap/0dd0658d82054c15bebfcee0f1f4d630/gltf/gltf2.gltf'
            },
            {
                label: '油田厂房_二层设备28',
                image: '//data.mars3d.cn/gltf/imap/img/1564468817170.jpg',
                value: '//data.mars3d.cn/gltf/imap/085d653283404d3fa63f87c67b5ac415/gltf/gltf2.gltf'
            },
            {
                label: '油田厂房_二层设备86',
                image: '//data.mars3d.cn/gltf/imap/img/1564468841010.jpg',
                value: '//data.mars3d.cn/gltf/imap/08d7116742b448458a449b7ae3073dd5/gltf/gltf2.gltf'
            },
            {
                label: '发动机_45',
                image: '//data.mars3d.cn/gltf/imap/img/1564469946263.jpg',
                value: '//data.mars3d.cn/gltf/imap/750a30391931487c97519ac33d5ff8c6/gltf/default.gltf'
            },
            {
                label: '电箱_26',
                image: '//data.mars3d.cn/gltf/imap/img/1564469895914.jpg',
                value: '//data.mars3d.cn/gltf/imap/0a7ea9162ff8429a99df86a8c416efd3/gltf/default.gltf'
            },
            {
                label: '电线塔_29',
                image: '//data.mars3d.cn/gltf/imap/img/1564478227102.jpg',
                value: '//data.mars3d.cn/gltf/imap/64b2b420d1564777bb68c771f9c9e57e/gltf/gltf2.gltf'
            },
            {
                label: '电线塔_30',
                image: '//data.mars3d.cn/gltf/imap/img/1564478238011.jpg',
                value: '//data.mars3d.cn/gltf/imap/029020c24f604b9e8a5621306889965e/gltf/default.gltf'
            },
        ]
    },
    {
        label: '消防设备',
        value: 'A10',
        children: [
            {
                label: '二氧化碳灭火器',
                image: '//data.mars3d.cn/gltf/xiaofang/img/eryanghuatanmiehuoqi.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/eryanghuatanmiehuoqi/eryanghuatanmiehuoqi.gltf'
            },
            {
                label: '水基型（水雾）灭火器',
                image: '//data.mars3d.cn/gltf/xiaofang/img/shuijimiehuoqi.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/shuijimiehuoqi/shuijimiehuoqi.gltf'
            },
            {
                label: '干粉灭火器',
                image: '//data.mars3d.cn/gltf/xiaofang/img/ganfenmiehuoqi.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/ganfenniehuoqi/ganfenmiehuoqi.gltf'
            },
            {
                label: '推车灭火器',
                image: '//data.mars3d.cn/gltf/xiaofang/img/tuichemiehuoqi.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/tuichemiehuoqi/tuichemiehuoqi.gltf'
            },
            {
                label: '杆',
                image: '//data.mars3d.cn/gltf/xiaofang/img/gan.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/gan/gan.gltf'
            },
            {
                label: '圆盘杆',
                image: '//data.mars3d.cn/gltf/xiaofang/img/yuanpangan.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/yuanpangan/yuanpangan.gltf'
            },
            {
                label: '报警立柱',
                image: '//data.mars3d.cn/gltf/xiaofang/img/baojinglizhu.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/baojinglizhu/baojinglizhu.gltf'
            },
            {
                label: '球机',
                image: '//data.mars3d.cn/gltf/xiaofang/img/qiuji.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/qiuji/qiuji.gltf'
            },
            {
                label: '定点摄像机',
                image: '//data.mars3d.cn/gltf/xiaofang/img/camera.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/camera/scene.gltf'
            },
            {
                label: '全景摄像头',
                image: '//data.mars3d.cn/gltf/xiaofang/img/quanjingshexinagtyuan.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/quanjingshexinagtyuan/quanjingshexinagtyuan.gltf'
            },
            {
                label: '短杆全景摄像头',
                image: '//data.mars3d.cn/gltf/xiaofang/img/duanganquanjingshexiangtou.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/duanganquanjingshexiangtou/duanganquanjingshexiangtou.gltf'
            },
            {
                label: '摄像头',
                image: '//data.mars3d.cn/gltf/xiaofang/img/she160.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/she160/she160.gltf'
            },
            {
                label: '摄像头-60度视椎体',
                image: '//data.mars3d.cn/gltf/xiaofang/img/she60.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/she60/she60.gltf'
            },
            {
                label: '摄像头-90度视椎体',
                image: '//data.mars3d.cn/gltf/xiaofang/img/she90.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/she90/she90.gltf'
            },
            {
                label: '消防水泵接合器',
                image: '//data.mars3d.cn/gltf/xiaofang/img/xiaofangshuibengjieheqi.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/xiaofangshuibengjieheqi/xiaofangshuibengjieheqi.gltf'
            },
            {
                label: '消防栓',
                image: '//data.mars3d.cn/gltf/xiaofang/img/xiaofangshuan.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/xiaofangshuan/xiaofangshuan.gltf'
            },
            {
                label: '温度感应器',
                image: '//data.mars3d.cn/gltf/xiaofang/img/wengan.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/wengan/wengan.gltf'
            },
            {
                label: '区域分机',
                image: '//data.mars3d.cn/gltf/xiaofang/img/quyufenji.jpg',
                value: '//data.mars3d.cn/gltf/xiaofang/quyufenji/quyufenji.gltf'
            },
            {
                label: '交通相关_消火栓043',
                image: '//data.mars3d.cn/gltf/imap/img/1564477248191.jpg',
                value: '//data.mars3d.cn/gltf/imap/317a12c4e9f349adbc97bbc5aa340a4c/gltf/gltf2.gltf'
            },
            {
                label: '交通相关_消火栓046',
                image: '//data.mars3d.cn/gltf/imap/img/1564477273251.jpg',
                value: '//data.mars3d.cn/gltf/imap/051a4ff9d0064cc99658bebd701acf69/gltf/gltf2.gltf'
            },
            {
                label: '家居配件_摄像头47',
                image: '//data.mars3d.cn/gltf/imap/img/1564477754396.jpg',
                value: '//data.mars3d.cn/gltf/imap/8a1b2a19f1334a81b70c308da7bc338a/gltf/gltf2.gltf'
            },
            {
                label: '家居配件_摄像头48',
                image: '//data.mars3d.cn/gltf/imap/img/1564477773311.jpg',
                value: '//data.mars3d.cn/gltf/imap/b01f89a2e8c44c5a9f381ec3edef6836/gltf/gltf2.gltf'
            },
            {
                label: '工地建筑_L_05',
                image: '//data.mars3d.cn/gltf/imap/img/1564477846403.jpg',
                value: '//data.mars3d.cn/gltf/imap/0880ee73aa354792b263ee558148d9f6/gltf/gltf2.gltf'
            },
        ]
    },
    {
        label: '测绘仪器',
        value: 'A11',
        children: [
            {
                label: '全站仪',
                image: '//data.mars3d.cn/gltf/mars/img/cehui-qzy.jpg',
                value: '//data.mars3d.cn/gltf/mars/cehui/qzy.glb'
            },
            {
                label: '全站仪_无脚架',
                image: '//data.mars3d.cn/gltf/mars/img/cehui-qzy01.jpg',
                value: '//data.mars3d.cn/gltf/mars/cehui/qzy01.glb'
            },
            {
                label: 'RTK完整',
                image: '//data.mars3d.cn/gltf/mars/img/cehui-rtk.jpg',
                value: '//data.mars3d.cn/gltf/mars/cehui/rtk.glb'
            },
            {
                label: '棱镜',
                image: '//data.mars3d.cn/gltf/mars/img/cehui-lj.jpg',
                value: '//data.mars3d.cn/gltf/mars/cehui/lj.glb'
            },
        ]
    },
    {
        label: '超高机械',
        value: 'A12',
        children: [
            {
                label: '木楼',
                image: '//data.mars3d.cn/gltf/sample/img/WoodTower.jpg',
                value: '//data.mars3d.cn/gltf/sample/WoodTower/Wood_Tower.gltf'
            },
            {
                label: '起重机_02',
                image: '//data.mars3d.cn/gltf/imap/img/1564469798569.jpg',
                value: '//data.mars3d.cn/gltf/imap/532d9f816aac4727a310e8f92fa52966/gltf/gltf2.gltf'
            },
            {
                label: '起重机_34',
                image: '//data.mars3d.cn/gltf/imap/img/1564469812852.jpg',
                value: '//data.mars3d.cn/gltf/imap/aa91fed9c6d742028404ae0fac16d6cd/gltf/gltf2.gltf'
            },
            {
                label: '井塔_36',
                image: '//data.mars3d.cn/gltf/imap/img/1564471288694.jpg',
                value: '//data.mars3d.cn/gltf/imap/7f08b9f6b80d4f1ea110f1d4d900978b/gltf/default.gltf'
            },
            {
                label: '井塔_49',
                image: '//data.mars3d.cn/gltf/imap/img/1564471302571.jpg',
                value: '//data.mars3d.cn/gltf/imap/9efeecde30524307870697e0a8eac7e1/gltf/default.gltf'
            },
            {
                label: '储蓄罐_11',
                image: '//data.mars3d.cn/gltf/imap/img/1564469882362.jpg',
                value: '//data.mars3d.cn/gltf/imap/406b6d6d8b9c455083b534dce948c61b/gltf/gltf2.gltf'
            },
            {
                label: '镀锌钢板仓',
                image: '//data.mars3d.cn/gltf/imap/img/1564469919631.jpg',
                value: '//data.mars3d.cn/gltf/imap/5fb01d2598f24ce380ee81c6446edfc0/gltf/gltf2.gltf'
            },
            {
                label: '工业建筑_16',
                image: '//data.mars3d.cn/gltf/imap/img/1564042012814.jpg',
                value: '//data.mars3d.cn/gltf/imap/bfdf7ad3ead74b7d9d4320fb56ad7d67/gltf/gltf2.gltf'
            },
            {
                label: '散货场取料机',
                image: '//data.mars3d.cn/gltf/imap/img/1564470227602.jpg',
                value: '//data.mars3d.cn/gltf/imap/588a4b3e7dcc41479c9bedf7e8d195d1/gltf/gltf2.gltf'
            },
            {
                label: '碎石机_42',
                image: '//data.mars3d.cn/gltf/imap/img/1564470403406.jpg',
                value: '//data.mars3d.cn/gltf/imap/572e5e0d18b4418dbd92afe6dedb9d0c/gltf/default.gltf'
            },
        ]
    },
    {
        label: '其他',
        value: 'A13',
        children: [
            {
                label: '三轴',
                image: '//data.mars3d.cn/gltf/mars/img/axis.jpg',
                value: '//data.mars3d.cn/gltf/mars/axis.gltf'
            },
            {
                label: '椎体',
                image: '//data.mars3d.cn/gltf/mars/img/zhui.jpg',
                value: '//data.mars3d.cn/gltf/mars/zhui.glb'
            },
            {
                label: '军事装备_09',
                image: '//data.mars3d.cn/gltf/imap/img/1564471231177.jpg',
                value: '//data.mars3d.cn/gltf/imap/6881109b291a422a85206f2a19a18e46/gltf/gltf2.gltf'
            },
            {
                label: '全方位探头',
                image: '//data.mars3d.cn/gltf/imap/img/1564470179885.jpg',
                value: '//data.mars3d.cn/gltf/imap/94b65a9343ab4972b0223f0fcf02ef50/gltf/gltf2.gltf'
            },
            {
                label: '手持监管设备',
                image: '//data.mars3d.cn/gltf/imap/img/1564470285260.jpg',
                value: '//data.mars3d.cn/gltf/imap/2b8d80fc09ef4b68a3bd23572f988bdf/gltf/gltf2.gltf'
            },
            {
                label: '家居配件_04',
                image: '//data.mars3d.cn/gltf/imap/img/1564477624282.jpg',
                value: '//data.mars3d.cn/gltf/imap/e07243b448c848d1a07b20d1a7fa2558/gltf/gltf2.gltf'
            },
            {
                label: '家居配件_23',
                image: '//data.mars3d.cn/gltf/imap/img/1564477668687.jpg',
                value: '//data.mars3d.cn/gltf/imap/9a36609eadd94b0194ac9f1ee57f6e6b/gltf/gltf2.gltf'
            },
            {
                label: '家居配件_24',
                image: '//data.mars3d.cn/gltf/imap/img/1564477690670.jpg',
                value: '//data.mars3d.cn/gltf/imap/df303e0323844b159e0aabaf0e937849/gltf/gltf2.gltf'
            },
            {
                label: '家居配件_38',
                image: '//data.mars3d.cn/gltf/imap/img/1564477717453.jpg',
                value: '//data.mars3d.cn/gltf/imap/dee8c078d5194a4aafa26b0a985820a5/gltf/gltf2.gltf'
            },
            {
                label: '家居配件_01',
                image: '//data.mars3d.cn/gltf/imap/img/1564477592459.jpg',
                value: '//data.mars3d.cn/gltf/imap/86a271535a81410785cfda11cd30404a/gltf/gltf2.gltf'
            },
            {
                label: '多层货架_12层',
                image: '//data.mars3d.cn/gltf/imap/img/1564478117958.jpg',
                value: '//data.mars3d.cn/gltf/imap/231bc111b97f4367a79b95b6423d9332/gltf/gltf2.gltf'
            },
            {
                label: '多层货架3',
                image: '//data.mars3d.cn/gltf/imap/img/1564478134483.jpg',
                value: '//data.mars3d.cn/gltf/imap/f24c4448086d4d8a87ad3acb95a97402/gltf/gltf2.gltf'
            },
            {
                label: '阀门_02',
                image: '//data.mars3d.cn/gltf/imap/img/1564469963072.jpg',
                value: '//data.mars3d.cn/gltf/imap/bca16194b5cf4d4c86e810cfb817640b/gltf/gltf2.gltf'
            },
            {
                label: '围栏_03',
                image: '//data.mars3d.cn/gltf/imap/img/1564470442982.jpg',
                value: '//data.mars3d.cn/gltf/imap/37eeb2e3095f46eca344a1f9b2d07748/gltf/gltf2.gltf'
            },
            {
                label: '雕塑_002',
                image: '//data.mars3d.cn/gltf/imap/img/1564478146715.jpg',
                value: '//data.mars3d.cn/gltf/imap/e2c53debe2154d3ea4af32d594b95070/gltf/gltf2.gltf'
            },
            {
                label: '雕塑_009',
                image: '//data.mars3d.cn/gltf/imap/img/1564478170247.jpg',
                value: '//data.mars3d.cn/gltf/imap/470c7dd2654b4764a45a0fc59900bb9a/gltf/gltf2.gltf'
            },
            {
                label: '雕塑_039',
                image: '//data.mars3d.cn/gltf/imap/img/1564478188430.jpg',
                value: '//data.mars3d.cn/gltf/imap/2180451c8baf4b3aa7663e4ca3ed31f5/gltf/gltf2.gltf'
            },
            {
                label: '雕塑_048',
                image: '//data.mars3d.cn/gltf/imap/img/1564478211257.jpg',
                value: '//data.mars3d.cn/gltf/imap/e4a3737c66fb4cf4adb6706c33cfbdc8/gltf/gltf2.gltf'
            },
        ]
    },
]

// *** 衬色
const outlineMapping = {
    outlineColor: '#000000',
    outlineOpacity: 0.6,
    outlineWidth: 2.0,
}
// *** 背景颜色
const backgroundMapping = {
    backgroundColor: '#000000',
    backgroundOpacity: 0.5,
    backgroundPadding: 4,
}
// *** 偏移量
const hasPixelOffsetMapping = {
    pixelOffsetX: 0,
    pixelOffsetY: 0,
}
// *** 视距缩放
const scaleByDistanceMapping = {
    scaleByDistance_far: 1000000,
    scaleByDistance_farValue: 0.1,
    scaleByDistance_near: 1000,
    scaleByDistance_nearValue: 1,
}
// *** 视距显示
const distanceDisplayConditionMapping = {
    distanceDisplayCondition_far: 10000000,
    distanceDisplayCondition_near: 0
}

// TODO 文字点
const label = {
    text: '',
    scale: 1,
    font_family: 'HYT',
    font_size: 24,
    font_weight: 'normal',
    font_style: 'normal',
    fill: true,
    color: '#13c2c2',
    opacity: 1,
    clampToGround: true,
    visibleDepth: false,
    outline: false,
    ...outlineMapping,
    background: false,
    ...backgroundMapping,
    hasPixelOffset: false,
    ...hasPixelOffsetMapping,
    scaleByDistance: false,
    ...scaleByDistanceMapping,
    distanceDisplayCondition: false,
    ...distanceDisplayConditionMapping,
}
// *** 文字点
const labelP = {
    type: 'labelP',
    show: true,
    style: { ...label }
}
// *** 像素点
const pointP = {
    type: 'pointP',
    show: true,
    style: {
        pixelSize: 8,
        color: '#13c2c2',
        opacity: 1,
        clampToGround: true,
        visibleDepth: false,
        outline: false,
        ...outlineMapping,
        scaleByDistance: false,
        ...scaleByDistanceMapping,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
        label
    },
}
// *** 图标点
const billboardP = {
    type: 'billboardP',
    show: true,
    style: {
        image: 'https://aloss.ljkjkf.com/WebConfigFile/Scene/img/route-start.png',
        scale: 1,
        opacity: 1,
        rotationDegree: 0,
        width: 30,
        height: 40,
        clampToGround: false,
        visibleDepth: false,
        hasPixelOffset: false,
        ...hasPixelOffsetMapping,
        scaleByDistance: false,
        ...scaleByDistanceMapping,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
        label
    }
}
// *** 四面体
const tetrahedron = {
    type: 'tetrahedron',
    show: true,
    style: {
        width: 8,
        height: 16,
        color: '#13c2c2',
        animation: true,
        moveHeight: 30,
        moveDuration: 4,
        rotationAngle: 1,
        translucent: false,
        closed: true
    }
}
// *** div面板
const div = {
    type: 'div',
    show: true,
    style: {
        offsetX: 0,
        offsetY: 0,
        scale: 1,
        clampToGround: false,
        scaleByDistance: false,
        ...scaleByDistanceMapping,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
        temp: 'A01',
        tempConfig: {
            background: '#13c2c2',
            backDeg: 0,
            padding: '8',
            radius: '8',
            list: [
                {
                    text: '文字',
                    margin: '0,8',
                    color: '#ffffff',
                    deg: 0,
                    font_size: 16,
                    font_family: 'HYT',
                    font_weight: 'normal',
                    font_style: 'normal',
                    filter: true,
                    filterSize: '1,1,1',
                    filterColor: '#262626'
                },
            ]
        }
    }
}
// TODO div模板
const DivTemplate = {
    A01: e => {
        const { background, padding, radius, list } = e
        const backStyle = {
            background: ColorCallBack(background),
            padding: SpacingCallBack(padding),
            'border-radius': SpacingCallBack(radius),
        }
        const html = list.map((v, i) => {
            const textStyle = {
                margin: SpacingCallBack(v.margin),
                color: v.color,
                'font-size': v.font_size + 'px',
                'font-family': v.font_family,
                'font-weight': v.font_weight,
                'font-style': v.font_style,
                'filter': SetFilderParams(v.filter, v.filterSize, v.filterColor),
            }
            return `<div class="text text${i}" style="${Object.keys(textStyle).map(k => `${k}:${textStyle[k]}`).join(';')}">${v.text}</div>`
        }).join('')

        return `<div class="DivHtmlTemplate A01" style="${Object.keys(backStyle).map(k => `${k}:${backStyle[k]}`).join(';')}">${html}</div> `
    },
    A02: e => {
        const html = e.list.map((v, i) => {
            const boxStyle = {
                background: v.back,
                border: SetBorderParams(v.border, v.borderSize, v.borderType, v.borderColor),
                'border-radius': SpacingCallBack(v.radius),
                padding: SpacingCallBack(v.padding),
                margin: SpacingCallBack(v.margin),
                'box-shadow': SetShadowParams(v.shadow, v.shadowSize, v.shadowColor, v.shadowType),
            }

            const textStyle = {
                color: v.color,
                'font-size': v.font_size + 'px',
                height: v.font_size + 'px',
                'line-height': v.font_size + 'px',
                'font-family': v.font_family,
                'font-weight': v.font_weight,
                'font-style': v.font_style,
                'filter': SetFilderParams(v.filter, v.filterSize, v.filterColor),
            }

            return `<div class="text text${i}" style="${Object.keys(boxStyle).map(k => `${k}:${boxStyle[k]}`).join(';')}">
                        <div style="${Object.keys(textStyle).map(k => `${k}:${textStyle[k]}`).join(';')}">${v.text}</div>  
                    </div>`
        }).join('')

        return `<div class="DivHtmlTemplate A02" ><div class="text">${html}</div></div > `
    },
    A03: e => {
        const { background, padding, radius, after,
            border, borderSize, borderType, borderColor,
            shadow, shadowSize, shadowColor, shadowType,
            text, color, font_size, font_family, font_weight, font_style, filter, filterSize, filterColor,
            imgUrl, imgWidth, imgHeight, imgPad, imgMar,
        } = e
        const backStyle = {
            background,
            padding: SpacingCallBack(padding),
            'border-radius': SpacingCallBack(radius),
            border: SetBorderParams(border, borderSize, borderType, borderColor),
            'box-shadow': SetShadowParams(shadow, shadowSize, shadowColor, shadowType),
        }
        const textStyle = {
            color,
            'font-size': font_size + 'px',
            'font-family': font_family,
            'font-weight': font_weight,
            'font-style': font_style,
            'filter': SetFilderParams(filter, filterSize, filterColor),
        }
        const imgStyle = {
            width: imgWidth + 'px',
            height: imgHeight + 'px',
            padding: SpacingCallBack(imgPad),
            margin: SpacingCallBack(imgMar),
        }

        return `<div class="DivHtmlTemplate A03" style="--after:${after}">
                    <div class="box" style="${Object.keys(backStyle).map(k => `${k}:${backStyle[k]}`).join(';')}">
                        <div class="text" style="${Object.keys(textStyle).map(k => `${k}:${textStyle[k]}`).join(';')}">${text}</div>
                    </div>
                    <img src="${imgUrl}" alt="" style="${Object.keys(imgStyle).map(k => `${k}:${imgStyle[k]}`).join(';')}">
                </div >`
    },
    A04: e => {
        const { background, padding, margin, radius, list,
            border, borderSize, borderType, borderColor,
            shadow, shadowSize, shadowColor, shadowType,
            color, font_size, font_family, font_weight, font_style, filter, filterSize, filterColor,
            imgUrl, imgWidth, imgHeight, imgPad, imgMar, imgFil, imgFilSize, imgFilColor,
        } = e



        const backStyle = {
            background,
            padding: SpacingCallBack(padding),
            margin: SpacingCallBack(margin),
            'border-radius': SpacingCallBack(radius),
            border: SetBorderParams(border, borderSize, borderType, borderColor),
            'box-shadow': SetShadowParams(shadow, shadowSize, shadowColor, shadowType),
            color,
            'font-size': font_size + 'px',
            'font-family': font_family,
            'font-weight': font_weight,
            'font-style': font_style,
            'filter': SetFilderParams(filter, filterSize, filterColor),
        }
        const imageStyle = {
            width: imgWidth + 'px',
            height: imgHeight + 'px',
            filter: SetFilderParams(imgFil, imgFilSize, imgFilColor),
        }

        return `<div class="DivHtmlTemplate A04" style="--list:${list.length * 30 + 24}px">
                    <img class="img" src="${imgUrl}" alt="" style="${Object.keys(imageStyle).map(k => `${k}:${imageStyle[k]}`).join(';')}">
                    <div class="box">
                        ${list.map((v, i) => `
                            <div class="text text${i}" style="${Object.keys(backStyle).map(k => `${k}:${backStyle[k]}`).join(';')}">
                                ${v.text}
                            </div>
                        `).join('')}
                    </div>
                    <div class="dot"></div>
                </div >`
    }
}
// *** 扩散DIV
const divLightPoint = {
    type: 'divLightPoint',
    show: true,
    style: {
        color: '#13c2c2',
        size: 10,
        offsetX: 0,
        offsetY: 0,
        clampToGround: false,
        scaleByDistance: false,
        ...scaleByDistanceMapping,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
        label: {
            text: '文字',
            color: '#fff'
        }
    }
}
// *** 竖的div
const divUpLabel = {
    type: 'divUpLabel',
    show: true,
    textAlign: 'vertical',
    style: {
        text: '默认文案',
        color: '#fff',
        font_size: 16,
        font_family: '微软雅黑',
        lineHeight: 100,
        circleSize: 10,
        offsetX: 0,
        offsetY: 0,
        scaleByDistance: false,
        ...scaleByDistanceMapping,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
    }
}
// *** 动态Div
const divBoderLabel = {
    type: 'divBoderLabel',
    show: true,
    style: {
        text: '默认文案',
        color: '#fff',
        font_size: 16,
        font_family: '微软雅黑',
        boderColor: '#13c2c2',
        offsetX: 0,
        offsetY: 0,
        scaleByDistance: false,
        ...scaleByDistanceMapping,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
    }
}
// *** 小模型
const modelP = {
    type: 'modelP',
    show: true,
    style: {
        url: "//data.mars3d.cn/gltf/mars/jingche/jingche.gltf",
        scale: 1,
        opacity: 1,
        heading: 0,
        pitch: 0,
        roll: 0,
        fill: false,
        color: '#ffffff',
        silhouette: false,
        silhouetteColor: '#ff0000',
        silhouetteSize: 2,
        clampToGround: false,
        hasShadows: true,
        shadows: false,
        runAnimations: true,
        scaleByDistance: false,
        ...scaleByDistanceMapping,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
        label
    }
}
// *** 线
const polylineP = {
    type: 'polylineP',
    show: true,
    style: {
        width: 4,
        closure: false,
        depthFail: false,
        depthFailColor: 'red',
        hasShadows: false,
        clampToGround: false,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label
    }
}
// *** 曲线
const curve = {
    type: 'curve',
    show: true,
    style: {
        width: 4,
        depthFail: false,
        depthFailColor: 'red',
        hasShadows: false,
        clampToGround: false,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label,
    }
}
// *** 走廊
const corridorP = {
    type: 'corridorP',
    show: true,
    style: {
        width: 24,
        cornerType: 0,
        outline: false,
        ...outlineMapping,
        hasShadows: false,
        clampToGround: false,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label,
    }
}
// *** 道路
const road = {
    type: 'road',
    show: true,
    style: {
        image: 'https://data.mars3d.cn/img/textures/road.jpg',
        width: 20,
        height: 0,
        axisY: true,
    }
}
// *** 围墙
const wallP = {
    type: 'wallP',
    show: true,
    style: {
        diffHeight: 100,
        closure: false,
        hasShadows: false,
        outline: false,
        ...outlineMapping,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2', speed: 8 }, // 材质属性
        label,
    }
}
// *** 扩散墙
const diffuseWall = {
    type: 'diffuseWall',
    show: true,
    style: {
        diffHeight: 100,
        color: '#13c2c2',
        speed: 10,
        maxScale: 1,
    }
}
// *** 厚度墙
const thickWall = {
    type: 'thickWall',
    show: true,
    style: {
        diffHeight: 100,
        width: 10,
        closure: false,
        hasShadows: false,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label,
    }
}
// *** 面
const polygonP = {
    type: 'polygonP',
    show: true,
    style: {
        diffHeight: 0,
        hasShadows: false,
        clampToGround: false,
        outline: false,
        ...outlineMapping,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
        classificationType: 2,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label,
    }
}
// *** 矩形
const rectangleP = {
    type: 'rectangleP',
    show: true,
    style: {
        diffHeight: 0,
        rotationDegree: 0,
        hasShadows: false,
        clampToGround: false,
        outline: false,
        ...outlineMapping,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
        classificationType: 2,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label,
    }
}
// *** 圆柱
const circleP = {
    type: 'circleP',
    show: true,
    style: {
        radius: 100,
        diffHeight: 0,
        clampToGround: false,
        outline: false,
        ...outlineMapping,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label,
    }
}
// *** 扇形
const sector = {
    type: 'sector',
    show: true,
    style: {
        diffHeight: 0,
        radius: 100,
        startAngle: 0,
        endAngle: 360,
        noCenter: false,
        hasShadows: false,
        clampToGround: false,
        outline: false,
        ...outlineMapping,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label,
    }
}
// *** 攻击箭头
const attackArrow = {
    type: 'attackArrow',
    show: true,
    style: {
        outlineWidth: 1,
        diffHeight: 0,
        clampToGround: false,
        hasShadows: false,
        outline: false,
        ...outlineMapping,
        distanceDisplayCondition: false,
        ...distanceDisplayConditionMapping,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label,
    }
}
// *** 平尾箭头
const attackArrowPW = { ...attackArrow, type: 'attackArrowPW' }
// *** 燕尾箭头
const attackArrowYW = { ...attackArrow, type: 'attackArrowYW' }
// *** 钳形箭头
const doubleArrow = { ...attackArrow, type: 'doubleArrow' }
// *** 直箭头
const fineArrow = { ...attackArrow, type: 'fineArrow' }
// *** 直箭头(燕尾)
const fineArrowYW = { ...attackArrow, type: 'fineArrowYW' }
// *** 直箭头(3点)
const straightArrow = { ...attackArrow, type: 'straightArrow' }
// *** 弓形面
const lune = { ...attackArrow, type: 'lune' }
// *** 等腰三角形
const isosTriangle = { ...attackArrow, type: 'isosTriangle' }
// *** 闭合曲面 
const closeVurve = { ...attackArrow, type: 'closeVurve' }
// *** 集结地
const gatheringPlace = { ...attackArrow, type: 'gatheringPlace' }
// *** 单点盒子
const boxP = {
    type: 'boxP',
    show: true,
    style: {
        dimensions_x: 100,
        dimensions_y: 100,
        dimensions_z: 100,
        heading: 0,
        pitch: 0,
        roll: 0,
        outline: false,
        ...outlineMapping,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label,
    }
}
// *** 圆锥
const cylinderP = {
    type: 'cylinderP',
    show: true,
    style: {
        topRadius: 0,
        bottomRadius: 100,
        length: 100,
        slices: 128,
        heading: 0,
        pitch: 0,
        roll: 0,
        outline: false,
        ...outlineMapping,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label,
    }
}
// *** 光锥
const lightCone = {
    type: 'lightCone',
    show: true,
    style: {
        color: '#36cfc9',
        radius: 10,
        height: 100,
    }
}
// *** 球
const ellipsoidP = {
    type: 'ellipsoidP',
    show: true,
    style: {
        radii_x: 100,
        radii_y: 100,
        radii_z: 100,
        innerRadii_x: 0,
        innerRadii_y: 0,
        innerRadii_z: 0,
        minimumClockDegree: 0,
        maximumClockDegree: 360,
        minimumConeDegree: 0,
        maximumConeDegree: 180,
        stackPartitions: 64,
        slicePartitions: 64,
        outline: false,
        ...outlineMapping,
        materialType: 'Color',
        materialOptions: { color: '#13c2c2' },
        label,
    }
}
// *** 模型
const tiles = {
    show: true,
    maximumScreenSpaceError: 16,
    maxMemory: 1024,
    scale: 1,
    opacity: 1,
    rotation: { x: 0, y: 0, z: 0 },
    highlight: {
        enabled: false,
        type: 'click',
        color: '#ff0000',
        outlineEffect: true,
        width: 4,
    },


}

export const initStartDraw = {
    // 点
    labelP,
    pointP,
    billboardP,
    tetrahedron,
    div,
    divLightPoint,
    divUpLabel,
    divBoderLabel,
    modelP,
    // 线
    polylineP,
    curve,
    corridorP,
    road,
    wallP,
    diffuseWall,
    thickWall,
    // 面
    polygonP,
    rectangleP,
    circleP,
    sector,
    attackArrow,
    attackArrowPW,
    attackArrowYW,
    doubleArrow,
    fineArrow,
    fineArrowYW,
    straightArrow,
    lune,
    isosTriangle,
    closeVurve,
    gatheringPlace,
    // 体
    boxP,
    cylinderP,
    lightCone,
    ellipsoidP,
    // 自定义div元素
    DivTemplate,
    // 模型
    tiles
}