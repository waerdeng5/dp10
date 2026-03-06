import * as mars3d from "mars3d"


const specialMap = [120000, 150000, 340000, 140525, 150223, 150723]

export const InitMap = ({ BOX, CONFIG }) => {
    const { scene, globe, cameraController, terrain, other, weather, colour, camera } = CONFIG
    scene.globe = globe
    scene.cameraController = cameraController
    terrain.show = other.show

    const map = new mars3d.Map(BOX, CONFIG)
    const gra = new mars3d.layer.GraphicLayer({ isAutoEditing: true })
    const clip = new mars3d.thing.TerrainClip({ czm: false, image: false, splitNum: 80 })

    map.addLayer(gra)
    map.addThing(clip)
    // initWeather(weather, map)
    // initColour(colour, map)
    map.setCameraView(camera.list[camera.default])


    return { map, gra, clip }
}




