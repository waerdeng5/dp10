import * as mars3d from "mars3d"
import { layerList } from './initData'


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
    const gra = new mars3d.layer.GraphicLayer({ isAutoEditing: true })
    const clip = new mars3d.thing.TerrainClip({ czm: false, image: false, splitNum: 80 })

    map.addLayer(gra)
    map.addThing(clip)
    initWeather(weather, map)
    initColour(colour, map)
    map.setCameraView(camera.list[camera.default])

    RenderElement(gra, ELEMENT)
    RenderOther(map, TILES)


    // // 添加剪裁
    // BoundaryBorderFunction(gra, clip, data)


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





const RenderElement = (gra, data) => {
    data && data.forEach(item => {
        const { type, key: id, element_type, style: elementStyle, children } = item
        if (type === 'group') RenderElement(gra, children)
        else {
            if (elementStyle) {
                const { style, show, position_lng, position_lat, position_alt, positions } = elementStyle
                // style.classificationType = 0
                switch (element_type) {
                    case 'modelP':
                        const modelP = new mars3d.graphic.ModelPrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(modelP)
                        break;
                    case 'pointP':
                        const pointP = new mars3d.graphic.PointPrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(pointP)
                        break;
                    case 'labelP':
                        const labelP = new mars3d.graphic.LabelPrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(labelP)
                        break;
                    case 'billboardP':
                        const billboardP = new mars3d.graphic.BillboardPrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(billboardP)
                        break;
                    case 'tetrahedron':
                        const tetrahedron = new mars3d.graphic.Tetrahedron({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(tetrahedron)
                        break;
                    case 'div':
                        const div = new mars3d.graphic.DivGraphic({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(div)
                        break;
                    case 'divPlane':
                        const divPlane = new mars3d.graphic.DivPlane({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(divPlane)
                        break;
                    case 'divLightPoint':
                        const divLightPoint = new mars3d.graphic.DivLightPoint({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(divLightPoint)
                        break;
                    case 'divUpLabel':
                        const divUpLabel = new mars3d.graphic.DivUpLabel({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(divUpLabel)
                        break;
                    case 'divBoderLabel':
                        const divBoderLabel = new mars3d.graphic.DivBoderLabel({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(divBoderLabel)
                        break;
                    case 'boxP':
                        const boxP = new mars3d.graphic.BoxPrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(boxP)
                        break;
                    case 'cylinderP':
                        const cylinderP = new mars3d.graphic.CylinderPrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(cylinderP)
                        break;
                    case 'lightCone':
                        const lightCone = new mars3d.graphic.LightCone({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(lightCone)
                        break;
                    case 'ellipsoidP':
                        const ellipsoidP = new mars3d.graphic.EllipsoidPrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(ellipsoidP)
                        break;
                    case 'circleP':
                        const circleP = new mars3d.graphic.CirclePrimitive({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(circleP)
                        break;
                    case 'sector':
                        const sector = new mars3d.graphic.Sector({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(sector)
                        break;
                    case 'regular':
                        const regular = new mars3d.graphic.Regular({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(regular)
                        break;
                    case 'pointLight':
                        const pointLight = new mars3d.graphic.PointLight({ id, position: [position_lng, position_lat, position_alt], show, style })
                        gra.addGraphic(pointLight)
                        break;
                    case 'polylineP':
                        const polylineP = new mars3d.graphic.PolylinePrimitive({ id, positions, show, style })
                        gra.addGraphic(polylineP)
                        break;
                    case 'curve':
                        const curve = new mars3d.graphic.CurveEntity({ id, positions, show, style })
                        gra.addGraphic(curve)
                        break;
                    case 'polylineVolumeP':
                        const polylineVolumeP = new mars3d.graphic.PolylineVolumePrimitive({ id, positions, show, style })
                        gra.addGraphic(polylineVolumeP)
                        break;
                    case 'corridorP':
                        const corridorP = new mars3d.graphic.CorridorPrimitive({ id, positions, show, style })
                        gra.addGraphic(corridorP)
                        break;
                    case 'road':
                        const road = new mars3d.graphic.Road({ id, positions, show, style })
                        gra.addGraphic(road)
                        break;
                    case 'polygonP':
                        const polygonP = new mars3d.graphic.PolygonPrimitive({ id, positions, show, style })
                        gra.addGraphic(polygonP)
                        break;
                    case 'rectangleP':
                        const rectangleP = new mars3d.graphic.RectanglePrimitive({ id, positions, show, style })
                        gra.addGraphic(rectangleP)
                        break;
                    case 'attackArrow':
                        const attackArrow = new mars3d.graphic.AttackArrow({ id, positions, show, style })
                        gra.addGraphic(attackArrow)
                        break;
                    case 'attackArrowPW':
                        const attackArrowPW = new mars3d.graphic.AttackArrowPW({ id, positions, show, style })
                        gra.addGraphic(attackArrowPW)
                        break;
                    case 'attackArrowYW':
                        const attackArrowYW = new mars3d.graphic.AttackArrowYW({ id, positions, show, style })
                        gra.addGraphic(attackArrowYW)
                        break;
                    case 'doubleArrow':
                        const doubleArrow = new mars3d.graphic.DoubleArrow({ id, positions, show, style })
                        gra.addGraphic(doubleArrow)
                        break;
                    case 'fineArrow':
                        const fineArrow = new mars3d.graphic.FineArrow({ id, positions, show, style })
                        gra.addGraphic(fineArrow)
                        break;
                    case 'fineArrowYW':
                        const fineArrowYW = new mars3d.graphic.FineArrowYW({ id, positions, show, style })
                        gra.addGraphic(fineArrowYW)
                        break;
                    case 'straightArrow':
                        const straightArrow = new mars3d.graphic.StraightArrow({ id, positions, show, style })
                        gra.addGraphic(straightArrow)
                        break;
                    case 'lune':
                        const lune = new mars3d.graphic.Lune({ id, positions, show, style })
                        gra.addGraphic(lune)
                        break;
                    case 'isosTriangle':
                        const isosTriangle = new mars3d.graphic.IsosTriangle({ id, positions, show, style })
                        gra.addGraphic(isosTriangle)
                        break;
                    case 'closeVurve':
                        const closeVurve = new mars3d.graphic.CloseVurve({ id, positions, show, style })
                        gra.addGraphic(closeVurve)
                        break;
                    case 'gatheringPlace':
                        const gatheringPlace = new mars3d.graphic.GatheringPlace({ id, positions, show, style })
                        gra.addGraphic(gatheringPlace)
                        break;
                    case 'planeP':
                        const planeP = new mars3d.graphic.PlanePrimitive({ id, positions, show, style })
                        gra.addGraphic(planeP)
                        break;
                    case 'wallP':
                        const wallP = new mars3d.graphic.WallPrimitive({ id, positions, show, style })
                        gra.addGraphic(wallP)
                        break;
                    case 'diffuseWall':
                        const diffuseWall = new mars3d.graphic.DiffuseWall({ id, positions, show, style })
                        gra.addGraphic(diffuseWall)
                        break;
                    case 'thickWall':
                        const thickWall = new mars3d.graphic.ThickWall({ id, positions, show, style })
                        gra.addGraphic(thickWall)
                        break;
                    default: break;
                }
            }
        }
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