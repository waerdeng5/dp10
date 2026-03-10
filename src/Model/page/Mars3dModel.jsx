import './Mars3dModel.scss'

import { Tabs } from 'antd'
import { useState } from 'react'
import { useEventEmitter } from "ahooks"


import FormTemplate from '../../Utils/FormTemplate'
import { Mars3dFormConfig } from '../../Config/Mars3dForm'
import { DevScrollView } from '../../Temp/DevTemplate'
import { LayerListMap, BoundaryBorderFunction } from '../../Mars3d'




const A01TabsList = {
    scene: { label: '基础设置', formItem: Mars3dFormConfig.Mars3dBaseConfig },
    globe: { label: '地球设置', formItem: Mars3dFormConfig.Mars3dGlobeConfig },
    cameraController: { label: '操作设置', formItem: Mars3dFormConfig.Mars3dCameraController },
    other: { label: '工具瓦片', formItem: Mars3dFormConfig.Mars3dTerrainConfig },
    weather: { label: '天气设置', formItem: Mars3dFormConfig.Mars3dWeatherConfig },
    colour: { label: '色彩设置', formItem: Mars3dFormConfig.Mars3dColourConfig }
}

const A02TabsList = {
    border: { label: '剪裁区', formItem: Mars3dFormConfig.Mars3dBoundaryBorderConfig },
    cover: { label: '覆盖面', formItem: Mars3dFormConfig.Mars3dBoundaryCoverConfig },
    line: { label: '边界线', formItem: Mars3dFormConfig.Mars3dBoundaryLineConfig },
    wall: { label: '边界墙', formItem: Mars3dFormConfig.Mars3dBoundaryWallConfig },
}


const Mars3dModel = ({ data, Event }) => {
    const { type, MapConfig, map, gra, clip } = data

    if (type === 'A01') {
        const FORMEVENT = useEventEmitter()
        const [Active, setActive] = useState('scene')
        const Itme = Object.keys(A01TabsList).map(key => ({
            key,
            label: A01TabsList[key].label,
            children: (<FormTemplate formItem={A01TabsList[key].formItem} FORMEVENT={FORMEVENT} Initial={MapConfig[key]} NotLoading />)
        }))
        const CallBackFunc = (e) => {
            const { type, data } = e
            const Mapping = new Map([
                ['onFormBack', () => {
                    MapConfig[Active] = data
                    const SceneMapping = new Map([
                        ['scene', () => Object.keys(data).forEach(key => map.setSceneOptions({ [key]: data[key] }))],
                        ['globe', () => Object.keys(data).forEach(key => map.setSceneOptions({ globe: { [key]: data[key] } }))],
                        ['cameraController', () => Object.keys(data).forEach(key => map.setSceneOptions({ cameraController: { [key]: data[key] } }))],
                        ['other', () => {
                            console.log(data)
                            Object.keys(data).forEach(key => {
                                if (key === 'show') map.hasTerrain = data[key]
                                if (key === 'wireframe') map.scene.globe._surface.tileProvider._debug.wireframe = data[key]
                                if (key === 'basemap') map.basemap = data[key]
                                if (key === 'layer') map.setLayersOptions(LayerListMap(data[key]))
                                if (key === 'toolbar') map.control.toolbar.show = data[key]
                                if (key === 'toolbar_position') map.control.toolbar.setOptions({ position: data[key] })
                                if (key === 'geocoder') map.control.geocoder.show = data[key]
                                if (key === 'homeButton') map.control.homeButton.show = data[key]
                                if (key === 'locationBar') map.control.locationBar.show = data[key]
                                if (key === 'distanceLegend') map.control.distanceLegend.show = data[key]
                            })
                            console.log(map.control)
                        }],
                        ['weather', () => Object.keys(data).forEach(key => {
                            const [lot, field] = key.split('_')
                            map.effects[lot][field] = data[key]
                        })],
                        ['colour', () => Object.keys(data).forEach(key => {
                            const [lot, field] = key.split('_')
                            map.effect[lot][field] = data[key]
                        })]
                    ])
                    const fu = SceneMapping.get(Active)
                    fu?.()

                    Event.emit({ type: 'onSaveMapConfig', data: MapConfig })
                }]
            ])
            const func = Mapping.get(type)
            func?.()
        }
        FORMEVENT.useSubscription(CallBackFunc)
        return (
            <div className='Mars3dModel A01'>
                <Tabs centered items={Itme} value={Active} onChange={setActive} />
            </div>
        )
    }

    if (type === 'A02') {
        const FORMEVENT = useEventEmitter()
        const [Active, setActive] = useState('scene')
        const Itme = Object.keys(A02TabsList).map(key => ({
            key,
            label: A02TabsList[key].label,
            children: (<FormTemplate formItem={A02TabsList[key].formItem} FORMEVENT={FORMEVENT} Initial={MapConfig[key]} NotLoading />)
        }))


        const CallBackFunc = e => {
            console.log(e)
        }

        FORMEVENT.useSubscription(CallBackFunc)

        console.log(Itme)

        return (
            <div className='Mars3dModel A02'>
                <Tabs centered items={Itme} value={Active} onChange={setActive} />
            </div>
        )
    }




    return (<div> 未知组件 : Mars3dModel - {type}   </div>)
};

export default Mars3dModel;