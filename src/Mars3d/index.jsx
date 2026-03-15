import * as mars3d from "mars3d"
import { layerList } from './initData'
import { CommonSceneUrl } from '../Config'


const specialMap = [120000, 150000, 340000, 140525, 150223, 150723]
export const LayerListMap = (arr) => {
    return layerList.map(item => {
        const isItemInValue = arr.includes(item.id)
        const show = isItemInValue ? true : false
        return { ...item, show }
    })
}

export const InitMap = ({ BOX, CONFIG, ELEMENT, TILES }) => {
    const { scene, globe, cameraController, terrain, other, weather, colour, camera } = CONFIG
    scene.globe = globe
    scene.cameraController = cameraController
    terrain.show = other.show

    const map = new mars3d.Map(BOX, CONFIG)
    const gra = new mars3d.layer.GraphicLayer()
    const clip = new mars3d.thing.TerrainClip({ czm: false, image: false, splitNum: 80 })

    map.addLayer(gra)
    map.addThing(clip)
    initWeather(weather, map)
    initColour(colour, map)
    map.setCameraView(camera.list[camera.default])

    RenderElement(gra, ELEMENT)
    RenderOther(map, TILES)

    // 添加剪裁
    BoundaryBorderFunction(gra, clip, CONFIG)

    // 参数后处理
    map.scene.globe._surface.tileProvider._debug.wireframe = other.wireframe
    map.basemap = other.basemap
    map.control.toolbar.show = other.toolbar
    map.control.toolbar.setOptions({ position: other.toolbar_position })
    map.control.geocoder.show = other.geocoder
    map.control.homeButton.show = other.homeButton
    map.control.locationBar.show = other.locationBar
    map.control.distanceLegend.show = other.distanceLegend
    map.setLayersOptions(LayerListMap(other.layer))
    return { map, gra, clip }
}
const effectMapping = {
    blackAndWhite: (map, data) => map.addEffect(new mars3d.effect.BlackAndWhite(data)),
    bloom: (map, data) => map.addEffect(new mars3d.effect.Bloom(data)),
    brightness: (map, data) => map.addEffect(new mars3d.effect.Brightness(data)),
    colorCorrection: (map, data) => map.addEffect(new mars3d.effect.ColorCorrection(data)),
    depthOfField: (map, data) => map.addEffect(new mars3d.effect.DepthOfField(data)),
    fog: (map, data) => map.addEffect(new mars3d.effect.Fog(data)),
    mosaic: (map, data) => map.addEffect(new mars3d.effect.Mosaic(data)),
    nightVision: (map, data) => map.addEffect(new mars3d.effect.NightVision(data)),
    rain: (map, data) => map.addEffect(new mars3d.effect.Rain(data)),
    snow: (map, data) => map.addEffect(new mars3d.effect.Snow(data)),
    snowCover: (map, data) => map.addEffect(new mars3d.effect.SnowCover(data)),
}
const initWeather = (weather, map) => {
    const weatherObj = Object.entries(weather).reduce((acc, [key, value]) => {
        const [lot, field] = key.split('_');
        (acc[lot] ??= {})[field] = value
        return acc
    }, {})
    Object.entries(weatherObj).forEach(([key, value]) => effectMapping[key](map, value))
}
const initColour = (colour, map) => {
    const colourObj = Object.entries(colour).reduce((acc, [key, value]) => {
        const [lot, field] = key.split('_');
        (acc[lot] ??= {})[field] = value
        return acc
    }, {})
    Object.entries(colourObj).forEach(([key, value]) => effectMapping[key](map, value))
}

// !!! 剪裁设置
// 获取范围数据
const GetUrlData = async (url) => {
    return await mars3d.Util.fetchJson({ url: CommonSceneUrl.json + url + '.json' })
}

// 辅助函数：处理特殊区域的positions
const processPositions = (item, callback) => {
    if (specialMap.includes(item.attr.adcode)) item.positions.forEach(pos => callback(pos))
    else callback(item.positions);
}

// 通用渲染函数
const renderCanver = (gra, arr, data, graphicCreator) => {
    const { show, style } = data
    if (!show) return
    arr.forEach(item => {
        processPositions(item, positions => {
            const graphic = graphicCreator(positions, style);
            gra.addGraphic(graphic);
        });
    });
};

// 剪裁函数
const clipFunc = (arr, isClip, clip) => {
    clip.clear()
    if (!isClip) return
    arr.forEach(item => processPositions(item, positions => clip.addArea(positions)))
    clip.clipOutSide = true
}

// 清除图形
const ClearBaseFunc = (gra, attrValue) => {
    const graphics = gra.getGraphicsByAttr(attrValue, 'attr')
    graphics.forEach(graphic => gra.removeGraphic(graphic))
}

const ClearGra = (gra, clip) => {
    clip.clear();
    ['CoverElement', 'LineElement', 'WallElement'].forEach(attr => ClearBaseFunc(gra, attr))
};

// 各图层渲染函数
const CoverCanver = (gra, arr, data) => renderCanver(gra, arr, data, (positions, style) => new mars3d.graphic.PolygonPrimitive({ attr: 'CoverElement', positions, style }))
const LineCanver = (gra, arr, data) => renderCanver(gra, arr, data, (positions, style) => new mars3d.graphic.PolylineEntity({ attr: 'LineElement', positions, style }))
const WallCanver = (gra, arr, data) => renderCanver(gra, arr, data, (positions, style) => new mars3d.graphic.WallPrimitive({ attr: 'WallElement', positions, style }))

// 主函数
export const BoundaryBorderFunction = (gra, clip, data) => {
    const { border, cover, line, wall } = data
    const { enabled, border: mapArr } = border
    ClearGra(gra, clip)
    if (!enabled || mapArr.length === 0) return
    Promise.all(mapArr.map(item => GetUrlData(item)))
        .then(results => {
            const allGraphics = results.flatMap(res => mars3d.Util.geoJsonToGraphics(res));
            clipFunc(allGraphics, true, clip);
            CoverCanver(gra, allGraphics, cover);
            LineCanver(gra, allGraphics, line);
            WallCanver(gra, allGraphics, wall);
        })
        .catch(error => console.error('数据加载失败:', error));
}



const RenderElement = (gra, data) => {

    data && data.forEach(item => {
        const { id, show, position, positions, style, type } = item

        switch (type) {
            // !!! 点
            case 'labelP':
                const labelP = new mars3d.graphic.LabelPrimitive({ id, position, show, style })
                gra.addGraphic(labelP)
                break;
            case 'pointP':
                const pointP = new mars3d.graphic.PointPrimitive({ id, position, show, style })
                gra.addGraphic(pointP)
                break;
            case 'billboardP':
                const billboardP = new mars3d.graphic.BillboardPrimitive({ id, position, show, style })
                gra.addGraphic(billboardP)
                break;
            case 'tetrahedron':
                const tetrahedron = new mars3d.graphic.Tetrahedron({ id, position, show, style })
                gra.addGraphic(tetrahedron)
                break;
            case 'div':
                const div = new mars3d.graphic.DivGraphic({ id, position, show, style })
                gra.addGraphic(div)
                break;
            case 'divLightPoint':
                const divLightPoint = new mars3d.graphic.DivLightPoint({ id, position, show, style })
                gra.addGraphic(divLightPoint)
                break;
            case 'divUpLabel':
                const divUpLabel = new mars3d.graphic.DivUpLabel({ id, position, show, style })
                gra.addGraphic(divUpLabel)
                break;
            case 'divBoderLabel':
                const divBoderLabel = new mars3d.graphic.DivBoderLabel({ id, position, show, style })
                gra.addGraphic(divBoderLabel)
                break;
            case 'modelP':
                const modelP = new mars3d.graphic.ModelPrimitive({ id, position, show, style })
                gra.addGraphic(modelP)
                break;
            // !!! 线
            case 'polylineP':
                const polylineP = new mars3d.graphic.PolylinePrimitive({ id, positions, show, style })
                gra.addGraphic(polylineP)
                break;
            case 'curve':
                const curve = new mars3d.graphic.CurveEntity({ id, positions, show, style })
                gra.addGraphic(curve)
                break;
            case 'corridorP':
                const corridorP = new mars3d.graphic.CorridorPrimitive({ id, positions, show, style })
                gra.addGraphic(corridorP)
                break;
            case 'road':
                const road = new mars3d.graphic.Road({ id, positions, show, style })
                gra.addGraphic(road)
                break;
            case 'wallP':
                const wallP = new mars3d.graphic.WallPrimitive({ id, positions, show, style })
                gra.addGraphic(wallP)
                break;
            case 'diffuseWall':
                const diffuseWall = new mars3d.graphic.DiffuseWall({ id, positions, show, style })
                gra.addGraphic(diffuseWall)
                break;
            default:
                break;
        }



        // const { type,  id, element_type, style: elementStyle, children } = item
        // if (type === 'group') RenderElement(gra, children)
        // else {
        //     if (elementStyle) {
        //         const { style, show, position, position_lng, position_lat, position_alt, positions } = elementStyle
        //         // style.classificationType = 0
        //         switch (element_type) {






        //             case 'divPlane':
        //                 const divPlane = new mars3d.graphic.DivPlane({ id, position: [position_lng, position_lat, position_alt], show, style })
        //                 gra.addGraphic(divPlane)
        //                 break;



        //             case 'boxP':
        //                 const boxP = new mars3d.graphic.BoxPrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
        //                 gra.addGraphic(boxP)
        //                 break;
        //             case 'cylinderP':
        //                 const cylinderP = new mars3d.graphic.CylinderPrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
        //                 gra.addGraphic(cylinderP)
        //                 break;
        //             case 'lightCone':
        //                 const lightCone = new mars3d.graphic.LightCone({ id, position: [position_lng, position_lat, position_alt], show, style })
        //                 gra.addGraphic(lightCone)
        //                 break;
        //             case 'ellipsoidP':
        //                 const ellipsoidP = new mars3d.graphic.EllipsoidPrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
        //                 gra.addGraphic(ellipsoidP)
        //                 break;
        //             case 'circleP':
        //                 const circleP = new mars3d.graphic.CirclePrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
        //                 gra.addGraphic(circleP)
        //                 break;
        //             case 'sector':
        //                 const sector = new mars3d.graphic.Sector({ id, position: [position_lng, position_lat, position_alt], show, style })
        //                 gra.addGraphic(sector)
        //                 break;
        //             case 'regular':
        //                 const regular = new mars3d.graphic.Regular({ id, position: [position_lng, position_lat, position_alt], show, style })
        //                 gra.addGraphic(regular)
        //                 break;
        //             case 'pointLight':
        //                 const pointLight = new mars3d.graphic.PointLight({ id, position: [position_lng, position_lat, position_alt], show, style })
        //                 gra.addGraphic(pointLight)
        //                 break;


        //             case 'polylineVolumeP':
        //                 const polylineVolumeP = new mars3d.graphic.PolylineVolumePrimitive({ id, positions, show, style })
        //                 gra.addGraphic(polylineVolumeP)
        //                 break;


        //             case 'polygonP':
        //                 const polygonP = new mars3d.graphic.PolygonPrimitive({ id, positions, show, style })
        //                 gra.addGraphic(polygonP)
        //                 break;
        //             case 'rectangleP':
        //                 const rectangleP = new mars3d.graphic.RectanglePrimitive({ id, positions, show, style })
        //                 gra.addGraphic(rectangleP)
        //                 break;
        //             case 'attackArrow':
        //                 const attackArrow = new mars3d.graphic.AttackArrow({ id, positions, show, style })
        //                 gra.addGraphic(attackArrow)
        //                 break;
        //             case 'attackArrowPW':
        //                 const attackArrowPW = new mars3d.graphic.AttackArrowPW({ id, positions, show, style })
        //                 gra.addGraphic(attackArrowPW)
        //                 break;
        //             case 'attackArrowYW':
        //                 const attackArrowYW = new mars3d.graphic.AttackArrowYW({ id, positions, show, style })
        //                 gra.addGraphic(attackArrowYW)
        //                 break;
        //             case 'doubleArrow':
        //                 const doubleArrow = new mars3d.graphic.DoubleArrow({ id, positions, show, style })
        //                 gra.addGraphic(doubleArrow)
        //                 break;
        //             case 'fineArrow':
        //                 const fineArrow = new mars3d.graphic.FineArrow({ id, positions, show, style })
        //                 gra.addGraphic(fineArrow)
        //                 break;
        //             case 'fineArrowYW':
        //                 const fineArrowYW = new mars3d.graphic.FineArrowYW({ id, positions, show, style })
        //                 gra.addGraphic(fineArrowYW)
        //                 break;
        //             case 'straightArrow':
        //                 const straightArrow = new mars3d.graphic.StraightArrow({ id, positions, show, style })
        //                 gra.addGraphic(straightArrow)
        //                 break;
        //             case 'lune':
        //                 const lune = new mars3d.graphic.Lune({ id, positions, show, style })
        //                 gra.addGraphic(lune)
        //                 break;
        //             case 'isosTriangle':
        //                 const isosTriangle = new mars3d.graphic.IsosTriangle({ id, positions, show, style })
        //                 gra.addGraphic(isosTriangle)
        //                 break;
        //             case 'closeVurve':
        //                 const closeVurve = new mars3d.graphic.CloseVurve({ id, positions, show, style })
        //                 gra.addGraphic(closeVurve)
        //                 break;
        //             case 'gatheringPlace':
        //                 const gatheringPlace = new mars3d.graphic.GatheringPlace({ id, positions, show, style })
        //                 gra.addGraphic(gatheringPlace)
        //                 break;
        //             case 'planeP':
        //                 const planeP = new mars3d.graphic.PlanePrimitive({ id, positions, show, style })
        //                 gra.addGraphic(planeP)
        //                 break;


        //             case 'thickWall':
        //                 const thickWall = new mars3d.graphic.ThickWall({ id, positions, show, style })
        //                 gra.addGraphic(thickWall)
        //                 break;
        //             default: break;
        //         }
        //     }
        // }
    })

}

const RenderOther = (map, tileset) => {
    if (tileset.length !== 0) {
        tileset.forEach(({ position_lng, position_lat, position_alt, ...item }) => {
            const Tileset = new mars3d.layer.TilesetLayer({ position: [position_lng, position_lat, position_alt], ...item })
            map.addLayer(Tileset)
        })
    }
}