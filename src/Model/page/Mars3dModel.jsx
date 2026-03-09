

import { Tabs } from 'antd'
import { useState } from 'react'
import { useEventEmitter } from "ahooks"


import FormTemplate from '../../Utils/FormTemplate'
import { Mars3dFormConfig } from '../../Config/Mars3dForm'
import { DevScrollView } from '../../Temp/DevTemplate'




const A01TabsList = {
    scene: { label: '基础设置', formItem: Mars3dFormConfig.Mars3dBaseConfig },
    globe: { label: '地球设置', formItem: Mars3dFormConfig.Mars3dGlobeConfig },
    cameraController: { label: '操作设置', formItem: Mars3dFormConfig.Mars3dCameraController },
    other: { label: '工具瓦片', formItem: Mars3dFormConfig.Mars3dTerrainConfig },
    weather: { label: '天气设置', formItem: Mars3dFormConfig.Mars3dWeatherConfig },
    colour: { label: '色彩设置', formItem: Mars3dFormConfig.Mars3dColourConfig }
}

// Mars3dBaseConfig,
// Mars3dGlobeConfig,
// Mars3dCameraController,
// Mars3dTerrainConfig,
// Mars3dWeatherConfig,
// Mars3dColourConfig


const Mars3dModel = ({ data, Event }) => {
    const { type, MapConfig, map, gra, clip } = data

    console.log(data)


    if (type === 'A01') {
        const FORMEVENT = useEventEmitter()
        const [Active, setActive] = useState('scene')

        const Itme = Object.keys(A01TabsList).map(key => ({
            key,
            label: A01TabsList[key].label,
            children: <FormTemplate formItem={A01TabsList[key].formItem} FORMEVENT={FORMEVENT} Initial={MapConfig[key]} />
        }))


        const CallBackFunc = (e) => {
            const { type, data } = e
            console.log(e)

            const Mapping = new Map([
                ['scene', () => { }]
            ])
            const func = Mapping.get(onCallBack)
            func?.()
        }


        FORMEVENT.useSubscription(CallBackFunc)
        return (
            <div className='Mars3dModel A01'>
                <Tabs
                    centered
                    items={Itme}
                    value={Active}
                    onChange={setActive}
                />
            </div>
        )
    }




    return (<div> 未知组件 : Mars3dModel - {type}   </div>)
};

export default Mars3dModel;