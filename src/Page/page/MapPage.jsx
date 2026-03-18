import "mars3d-cesium/Build/Cesium/Widgets/widgets.css"
import "mars3d/mars3d.css"
import './MapPage.scss'

import _ from 'lodash'
import { useMount, useEventEmitter } from 'ahooks'
import { useState, useRef, useEffect } from 'react'
import { Spin, Result, Button, FloatButton, Tooltip, App } from 'antd'
import { HappyProvider } from '@ant-design/happy-work-theme';

import {
    GlobalOutlined,
    SettingOutlined,
    ScissorOutlined,
    TagsOutlined,
    BuildOutlined,
    BankOutlined,
    ImportOutlined,
    SaveOutlined
} from '@ant-design/icons'

import { InitMap } from '../../Mars3d'

import { axios, axiosFor } from '../../Utils/Api'
import FormTemplate from '../../Utils/FormTemplate'
import { sceneParameter } from '../../Mars3d/initData'
import { ICONMapping } from '../../Config/IconMapping'
import { Encrypt, Decrypt } from '../../Utils/IndexedDB'
import { Mars3dFormConfig } from '../../Config/Mars3dForm'


import { isEmptyObject } from '../../Utils'
import { DevScrollView } from '../../Temp/DevTemplate'
import { modelStore } from '../../Router/zustand'



const { port } = window.location


const optionsBtnList = [
    { uuid: 1, label: '场景设置', icon: <GlobalOutlined /> },
    { uuid: 2, label: '场景剪裁', icon: <ScissorOutlined /> },
    { uuid: 3, label: '视角书签', icon: <TagsOutlined /> },
    { uuid: 4, label: '元素列表', icon: <BuildOutlined /> },
    { uuid: 5, label: '模型列表', icon: <BankOutlined /> },
    { uuid: 6, label: '引入文件', icon: <ImportOutlined /> },
    { uuid: 7, label: '保存数据', icon: <SaveOutlined /> },
]


const MapPage = ({ data, AdminEvent }) => {
    const { message, notification } = App.useApp()
    const { modelConfig, updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const { uuid } = data
    const mapBox = useRef()
    const [STATUS, setSTATUS] = useState({ loading: true, config: true })
    const [MpaPar, setMpaPar] = useState({ map: null, gra: null, clip: null })

    const MapEvent = useEventEmitter()
    const [MapConfig, setMapConfig] = useState({})
    const [ELEConfig, setELEConfig] = useState([])
    const [TILConfig, setTILConfig] = useState([])

    const getMapData = async () => {
        const apiList = [
            { method: 'get', url: '/dictionary/GetJsonInfoByUuid', params: { uuid: `MAP_PAGE/${uuid}` } },
            { method: 'get', url: '/dictionary/GetJsonInfoByUuid', params: { uuid: `MAP_PAGE/${uuid}_element` } },
            { method: 'get', url: '/dictionary/GetJsonInfoByUuid', params: { uuid: `MAP_PAGE/${uuid}_tiles` } },
        ]
        const [[conErr, conRes], [eleErr, eleRes], [tilErr, tilRes]] = await axiosFor(apiList)
        if (conErr || eleErr || tilErr) {
            setSTATUS({ loading: false, config: true })
            return console.error('保存失败', conErr, eleErr, tilErr)
        }
        setSTATUS({ loading: false, config: false })
        const config = await Decrypt(conRes)
        const element = await Decrypt(eleRes)
        const tiles = await Decrypt(tilRes)
        setMapConfig(config)
        setELEConfig(element)
        setTILConfig(tiles)
        onInitMap(config, element, tiles)
    }
    const onInitMap = (data, ele, til) => {
        if (mapBox.current) {
            const { map, gra, clip } = InitMap({ BOX: mapBox.current, CONFIG: data, ELEMENT: ele, TILES: til })
            setMpaPar({ map, gra, clip })
        } else setTimeout(() => onInitMap(data, ele, til), 500)
    }

    const onSaveMap = async (status) => {
        port && console.log('[---------基础信息---------]', { ...sceneParameter, ...MapConfig })
        port && console.log('[---------元素信息---------]', ELEConfig)
        port && console.log('[---------模型信息---------]', TILConfig)
        // const paramsA01 = JSON.stringify(await Encrypt({ ...sceneParameter, ...MapConfig }))
        // const paramsA02 = JSON.stringify(await Encrypt(ELEConfig))
        // const paramsA03 = JSON.stringify(await Encrypt(TILConfig))
        // const apiList = [
        //     { method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params: { uuid: `MAP_PAGE/${uuid}`, Content: paramsA01 } },
        //     { method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params: { uuid: `MAP_PAGE/${uuid}_element`, Content: paramsA02 } },
        //     { method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params: { uuid: `MAP_PAGE/${uuid}_tiles`, Content: paramsA03 } },
        // ]
        // const [[conErr, conRes], [eleErr, eleRes], [tilErr, tilRes]] = await axiosFor(apiList)
        // if (conErr || eleErr || tilErr) return console.error('保存失败', conErr, eleErr, tilErr)
        // message.success({ key: ' save', content: '保存成功!' })
        // status && getMapData()
    }
    // TODO 操作信息
    const onButtonClick = async (uuid) => {
        const Mapping = new Map([
            [1, () => { // 场景设置
                updateModel({
                    title: '场景设置',
                    type: 'Mars3dModel',
                    Event: MapEvent,
                    width: 600,
                    height: '100vh',
                    shading: false,
                    position: { my: 'left ', at: 'left ', of: window },
                    modelData: { type: 'A01', MapConfig, ...MpaPar }
                })
            }],
            [2, () => { // 场景剪裁
                updateModel({
                    title: '场景剪裁',
                    type: 'Mars3dModel',
                    Event: MapEvent,
                    width: 600,
                    height: '100vh',
                    shading: false,
                    position: { my: 'left ', at: 'left ', of: window },
                    modelData: { type: 'A02', MapConfig, ...MpaPar }
                })
            }],
            [3, () => { // 视角书签
                updateModel({
                    title: '视角书签',
                    type: 'Mars3dModel',
                    Event: MapEvent,
                    width: 600,
                    height: '100vh',
                    shading: false,
                    position: { my: 'left ', at: 'left ', of: window },
                    modelData: { type: 'A03', MapConfig, ...MpaPar }
                })
            }],
            [4, () => { // 元素列表
                updateModel({
                    title: '元素列表',
                    type: 'Mars3dModel',
                    Event: MapEvent,
                    width: 600,
                    height: '100vh',
                    shading: false,
                    position: { my: 'left ', at: 'left ', of: window },
                    modelData: { type: 'A04', MapConfig, ELEConfig, ...MpaPar }
                })
            }],
            [5, () => { // 模型列表
                updateModel({
                    title: '模型列表',
                    type: 'Mars3dModel',
                    Event: MapEvent,
                    width: 600,
                    height: '100vh',
                    shading: false,
                    position: { my: 'left ', at: 'left ', of: window },
                    modelData: { type: 'A05', MapConfig, TILConfig, ...MpaPar }
                })
            }],
            [6, () => { // 引入文件
                console.log('引入文件')
            }],
            [7, onSaveMap],
        ])

        if (!isEmptyObject(modelConfig)) await updateModel({})
        const func = Mapping.get(uuid)
        func?.()
    }

    const mapCallBack = (e) => {
        const { type, data } = e
        // console.log('Map', type, data)
        const Mapping = new Map([
            ['onSaveMapConfig', () => setMapConfig(data)],
            ['onSaveMapElement', () => setELEConfig(data)],
            ['onSaveTilConfig', () => setTILConfig(data)],

            ['onSaveMapEle', () => {
                setMapConfig(data.map)
                setELEConfig(data.ele)
            }]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }


    MapEvent.useSubscription(mapCallBack)

    useEffect(() => { getMapData() }, [data])
    useEffect(() => { return () => { if (MpaPar.map) MpaPar.map.destroy() } }, [MpaPar])
    useMount(() => { AdminEvent.emit({ type: 'onHiddenButton' }) })

    if (STATUS.loading) return (<div className="MapPage"><Spin /></div>)
    if (STATUS.config) return (
        <div className="MapPage">
            <Result
                status="403"
                title="当前地图无配置信息"
                subTitle="请检测网络连接或联系管理员添加配置!"
                extra={port && <Button type="primary" onClick={() => onSaveMap(true)}>添加配置</Button>}
            />
        </div>
    )
    return (
        <div className="MapPage">
            <div className="MapBox" ref={mapBox} />
            <HappyProvider>
                <FloatButton.Group
                    type="primary"
                    trigger="click"
                    shape="square"
                    style={{ insetInlineEnd: 24 }}
                    icon={<SettingOutlined />}
                >
                    {optionsBtnList.map(item =>
                        <Tooltip key={item.uuid} title={item.label} placement="left">
                            <FloatButton icon={item.icon} onClick={() => onButtonClick(item.uuid)} />
                        </Tooltip>
                    )}
                </FloatButton.Group>
            </HappyProvider>
        </div>
    );
};

export default MapPage;