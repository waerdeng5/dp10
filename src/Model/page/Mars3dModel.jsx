import './Mars3dModel.scss'
import * as mars3d from "mars3d"
import _ from 'lodash'

import { v4 } from 'uuid'
import { useEffect, useState } from 'react'
import { useEventEmitter, useLatest } from "ahooks"
import { Tabs, Button, Tree, Dropdown, Tooltip, App, Drawer, Popconfirm } from "antd"

import FormTemplate from '../../Utils/FormTemplate'
import { Mars3dFormConfig } from '../../Config/Mars3dForm'
import { DevScrollView } from '../../Temp/DevTemplate'
import { LayerListMap, BoundaryBorderFunction } from '../../Mars3d'
import { modelStore } from '../../Router/zustand'
import { onTreeDrop, replaceNodeById, removeTreeByKey, updateTreeByKey, getPathArray, treeValue, replaceNodeByIdTwo } from "../../Utils"
import { ICONMapping } from '../../Config/IconMapping'
import { initStartDraw } from '../../Mars3d/initData'

// DIV元素
const divType = ['div', 'divPlane']
// 单点元素
const singlePoint = [
    'modelP', 'pointP', 'labelP', 'doubleSidedPlane', 'billboardP', 'billboardIndicator', 'tetrahedron', 'div', 'divPlane', 'divLightPoint',
    'divUpLabel', 'divBoderLabel', 'boxP', 'cylinderP', 'lightCone', 'ellipsoidP', 'circleP', 'pointLight'
]

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
    const { message, notification } = App.useApp()
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const { type, MapConfig, ELEConfig, TILConfig, map, gra, clip } = data
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
                    const newConfig = { ...MapConfig, [Active]: { ...MapConfig[Active], ...data } }
                    Event.emit({ type: 'onSaveMapConfig', data: newConfig })
                    const SceneMapping = new Map([
                        ['scene', () => Object.keys(data).forEach(key => map.setSceneOptions({ [key]: data[key] }))],
                        ['globe', () => Object.keys(data).forEach(key => map.setSceneOptions({ globe: { [key]: data[key] } }))],
                        ['cameraController', () => Object.keys(data).forEach(key => map.setSceneOptions({ cameraController: { [key]: data[key] } }))],
                        ['other', () => {
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
        const [Active, setActive] = useState('border')
        const Itme = Object.keys(A02TabsList).map(key => ({
            key,
            label: A02TabsList[key].label,
            children: (<FormTemplate formItem={A02TabsList[key].formItem} FORMEVENT={FORMEVENT} Initial={MapConfig[key]} NotLoading />)
        }))
        const CallBackFunc = e => {
            const { type, data } = e
            const Mapping = new Map([
                ['onFormBack', () => {
                    MapConfig[Active] = data
                    Event.emit({ type: 'onSaveMapConfig', data: MapConfig })
                    BoundaryBorderFunction(gra, clip, MapConfig)
                }]
            ])
            const func = Mapping.get(type)
            func?.(data)
        }
        FORMEVENT.useSubscription(CallBackFunc)
        return (
            <div className='Mars3dModel A02'>
                <Tabs centered items={Itme} value={Active} onChange={setActive} />
            </div>
        )
    }
    if (type === 'A03') {
        const FORMEVENT = useEventEmitter()
        const [List, setList] = useState(MapConfig.camera.list)
        const [Init, setInit] = useState(MapConfig.camera.default)
        const onLoading = (value) => {
            map.setCameraView(value)
        }
        const onDefault = (key) => {
            setInit(key)
            MapConfig.camera.default = key
            Event.emit({ type: 'onSaveMapConfig', data: MapConfig })
        }
        const onAdd = () => {
            updateModel5({
                title: '视角设置',
                type: 'CommonForm',
                width: 480,
                height: 240,
                Event: FORMEVENT,
                modelData: { formItem: 'Mars3donAddCenter' }
            })
        }
        const CallBackFunc = e => {
            const { type, data } = e
            const Mapping = new Map([
                ['onCommonFormBack', () => {
                    MapConfig.camera.list[data.name] = map.getCameraView()
                    setList(MapConfig.camera.list)
                    updateModel5({})
                    Event.emit({ type: 'onSaveMapConfig', data: MapConfig })
                }]
            ])
            const func = Mapping.get(type)
            func?.(data)
        }
        FORMEVENT.useSubscription(CallBackFunc)
        return (
            <div className='Mars3dModel A03'>
                <DevScrollView>
                    <div className='List'>
                        {Object.entries(List).map(([key, value], index) => {
                            const { lng, lat, alt, heading, pitch } = value
                            return (
                                <div key={index} className='CameraCard' onClick={() => onLoading(value)}>
                                    <div className='number'>
                                        <div> 经度值 : <span>{lng}</span> </div>
                                        <div> 纬度值 : <span>{lat}</span> </div>
                                        <div> 高度值 : <span>{alt}</span> </div>
                                        <div> 方向角 : <span>{heading}</span> </div>
                                        <div> 俯仰角 : <span>{pitch}</span> </div>
                                    </div>
                                    <div className='CameraBanner' />
                                    <div className='CameraName'><span className={Init === key ? 'active' : ''}>{key}</span></div>
                                    {Init !== key &&
                                        <div className='CameraOptions'>
                                            <Button type='link' onClick={() => onDefault(key)}>默认</Button>
                                        </div>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </DevScrollView>
                <div className="Button">
                    <Button type='primary' block size='large' onClick={() => onAdd()}>添加视角</Button>
                </div>
            </div>
        )
    }
    if (type === 'A04') {
        gra.isAutoEditing = true
        const FORMEVENT = useEventEmitter()
        const [TreeData, setTreeData] = useState(MapConfig.element)
        const [ELEData, setELEData] = useState(ELEConfig)
        const latestELE = useLatest(ELEData)

        const [Activate, setActivate] = useState()
        // 新增
        const onAdd = () => {
            updateModel5({
                title: '新增元素',
                type: 'CommonForm',
                width: 480,
                height: 480,
                Event: FORMEVENT,
                modelData: { formItem: 'Mars3donAddElement', eventBack: 'onAddElement' }
            })
        }
        const onModify = (data) => {
            updateModel5({
                title: '修改元素',
                type: 'CommonForm',
                width: 480,
                height: 480,
                Event: FORMEVENT,
                modelData: { formItem: 'Mars3donAddElement', eventBack: 'onAddElement', Initial: data }
            })
        }
        const onDraw = async (e) => {
            const { uuid, elementType } = e
            const status = ELEData.findIndex(v => v.id === uuid) !== -1
            const STYLE = status ? ELEData.find(v => v.id === uuid) : initStartDraw[elementType]
            const style = JSON.parse(JSON.stringify(STYLE))
            if (divType.includes(elementType)) {
                const { temp, tempConfig } = style.style
                style.style.html = initStartDraw.DivTemplate[temp](tempConfig)
            }
            await gra.startDraw({ id: uuid, type: elementType, ...style })
        }
        const onDelete = (uuid) => {
            const ELE = gra.getGraphicById(uuid)
            if (ELE) {
                const ele = ELEData.filter(v => v.id !== ELE.id)
                Event.emit({ type: 'onSaveMapElement', data: ele })
                gra.removeGraphic(ELE)
                setELEData(ele)
            }
            const data = removeTreeByKey(TreeData, uuid)
            const list = { ...MapConfig, element: data }
            Event.emit({ type: 'onSaveMapConfig', data: list })
            setTreeData(data)
        }
        const onShow = (ELE, status) => {
            ELEData.find(v => v.id === ELE.id).show = status
            ELE.setOptions({ show: status })
            Event.emit({ type: 'onSaveMapElement', data: ELEData })
        }
        const onPositioning = (uuid) => {
            const ELE = gra.getGraphicById(uuid)
            if (ELE) map.flyToGraphic(ELE)
        }
        const onCopy = (e) => {
            const uuid = v4()
            // 创建树形分支
            const treeObj = treeValue(TreeData, e.id)
            const { name, fieldType, elementType } = treeObj
            const newTree = { uuid, name, fieldType, elementType }
            const treeData = [...TreeData, newTree]
            const newMap = { ...MapConfig, element: treeData }
            setTreeData(treeData)
            // 创建元素基础信息
            const styleObj = ELEData.find(v => v.id === e.id)
            const { show, type, style } = styleObj
            const newStyle = { id: uuid, show, type, style }
            const newEle = [...ELEData, newStyle]
            setELEData(newEle)
            Event.emit({ type: 'onSaveMapEle', data: { map: newMap, ele: newEle } })
        }

        const CallBackFunc = e => {
            const { type, data } = e
            // console.log('Mars3d', e)
            const Mapping = new Map([
                ['onAddElement', () => {
                    const arr = data.uuid ? replaceNodeById(TreeData, data.uuid, data) : [...TreeData, { ...data, uuid: v4() }]
                    const list = { ...MapConfig, element: arr }
                    setTreeData(arr)
                    updateModel5({})
                    Event.emit({ type: 'onSaveMapConfig', data: list })
                }],
                ['onDetection', () => {
                    const { id } = Activate
                    const ELE = gra.getGraphicById(id)
                    if (data.position) {
                        const position = ELE.coordinate
                        position[data.position.length - 1] = data.position.at(-1)
                        ELE.setOptions({ position })
                        return
                    }
                    if (ELE.type === 'div') {
                        const { style } = ELE.options
                        const { temp, tempConfig } = style
                        const { path, value } = getPathArray(data)
                        _.set(ELE.options, path, value)
                        style.html = initStartDraw.DivTemplate[data?.style?.temp || temp](tempConfig)
                        ELE.setOptions({ style })
                        return
                    }
                    ELE.setOptions(data)
                }]
            ])
            const func = Mapping.get(type)
            func?.(data)
        }
        FORMEVENT.useSubscription(CallBackFunc)

        useEffect(() => {
            gra.on(mars3d.EventType.editStart, async (e) => {
                message.loading({ key: 'element', duration: 0, content: '元素编辑中...' })
                const data = e.graphic.options
                await 1
                if (singlePoint.includes(e.editType)) data.position = e.graphic.coordinate
                setActivate(data)
                updateModel5({
                    title: '元素属性',
                    type: 'Mars3dForm',
                    Event: FORMEVENT,
                    width: 600,
                    height: '100vh',
                    shading: false,
                    position: { my: 'right ', at: 'right ', of: window },
                    modelData: { type: `Mars3D${e.editType}FormList`, Initial: data }
                })
            })
            gra.on(mars3d.EventType.editStop, async (e) => {
                message.success({ key: 'element', content: '完成元素编辑!' })
                const data = { ...e.graphic.options, type: e.editType }
                await 1
                if (singlePoint.includes(e.editType)) data.position = e.graphic.coordinate
                else data.positions = e.graphic.coordinates
                const length = latestELE.current.findIndex(v => v.id === data.id)
                if (length !== -1) latestELE.current[length] = data
                else latestELE.current.push(data)
                gra.stopDraw()
                setActivate()
                updateModel5({})
                Event.emit({ type: 'onSaveMapElement', data: latestELE.current })
                setELEData(latestELE.current)
            })
            gra.on(mars3d.EventType.editMovePoint, (e) => {
                if (singlePoint.includes(e.editType)) {
                    const data = { ...e.graphic.options, position: e.graphic.coordinate }
                    FORMEVENT.emit({ type: 'onUploadInitial', data })
                }
            })
            return () => { gra.isAutoEditing = false }
        }, [ELEConfig])

        return (
            <div className='Mars3dModel A04'>
                <div className='List'>
                    <DevScrollView>
                        <Tree
                            draggable
                            blockNode
                            onDrop={e => {
                                const data = onTreeDrop(e, TreeData, 'uuid')
                                setTreeData(data)
                                const list = { ...MapConfig, element: data }
                                Event.emit({ type: 'onSaveMapConfig', data: list })
                            }}
                            selectable={false}
                            treeData={TreeData}
                            defaultExpandAll
                            fieldNames={{ key: 'uuid' }}
                            titleRender={e => {
                                const { uuid, name, fieldType, children } = e
                                if (fieldType === 'group') {
                                    return (
                                        <div className='treeList group'>
                                            <div className='title'>
                                                <div>分组</div>
                                                <div>{name}</div>
                                            </div>
                                            <div className='options'>
                                                <Tooltip title='编辑'>
                                                    <Button type='link' icon={ICONMapping['fasEdit']} onClick={() => onModify(e)} />
                                                </Tooltip>
                                                {(!children || children.length === 0) &&
                                                    <Tooltip title='删除'>
                                                        <Popconfirm
                                                            title="删除提醒!"
                                                            description="是否删除当前分组,删除后将无法恢复!"
                                                            onConfirm={() => onDelete(uuid)}
                                                            okText="删除"
                                                            cancelText="取消"
                                                        >
                                                            <Button type='link' danger icon={ICONMapping['fasTrash']} />
                                                        </Popconfirm>
                                                    </Tooltip>
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                                if (fieldType === 'element') {
                                    const ELE = gra.getGraphicById(uuid)
                                    const show = ELE?.getRealShow() || false
                                    return (
                                        <div className='treeList element'>
                                            <div className='title' onClick={() => onPositioning(uuid)}>
                                                <div>元素</div>
                                                <div>{name}</div>
                                            </div>
                                            <div className='options'>
                                                {ELE ?
                                                    <>
                                                        {show ?
                                                            <Tooltip title='显示中...'>
                                                                <Button type='link' icon={ICONMapping['fasEye']} onClick={() => onShow(ELE, false)} />
                                                            </Tooltip> :
                                                            <Tooltip title='隐藏中...'>
                                                                <Button type='link' danger icon={ICONMapping['fasEyeSlash']} onClick={() => onShow(ELE, true)} />
                                                            </Tooltip>
                                                        }
                                                        <Tooltip title='复制样式'>
                                                            <Popconfirm
                                                                title="复制提醒!"
                                                                description="是否复制当前元素样式?"
                                                                onConfirm={() => onCopy(ELE)}
                                                                okText="复制"
                                                                cancelText="取消"
                                                            >
                                                                <Button type='link' icon={ICONMapping['fasCopy']} />
                                                            </Popconfirm>
                                                        </Tooltip>
                                                    </> :
                                                    <Tooltip title='图上绘制'>
                                                        <Button type='link' icon={ICONMapping['fasRoute']} onClick={() => onDraw(e)} />
                                                    </Tooltip>
                                                }
                                                <Tooltip title='编辑'>
                                                    <Button type='link' icon={ICONMapping['fasEdit']} onClick={() => onModify(e)} />
                                                </Tooltip>
                                                <Tooltip title='删除'>
                                                    <Popconfirm
                                                        title="删除提醒!"
                                                        description="是否删除当前元素,删除后将无法恢复!"
                                                        onConfirm={() => onDelete(uuid)}
                                                        okText="删除"
                                                        cancelText="取消"
                                                    >
                                                        <Button type='link' danger icon={ICONMapping['fasTrash']} />
                                                    </Popconfirm>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    )
                                }
                            }}
                        />
                    </DevScrollView>
                    <div className='Button'>
                        <Button type='primary' block onClick={onAdd} loading={Activate ? true : false}>新增</Button>
                    </div>
                </div>
            </div>
        )
    }
    if (type === 'A05') {
        const FORMEVENT = useEventEmitter()
        const [TreeData, setTreeData] = useState(MapConfig.tiles)
        const [TILData, setTILData] = useState(TILConfig)
        const [Activate, setActivate] = useState()

        const onAdd = () => {
            updateModel5({
                title: '新增模型',
                type: 'CommonForm',
                width: 480,
                height: 480,
                Event: FORMEVENT,
                modelData: { formItem: 'Mars3donAddTiles', eventBack: 'onAddTiles' }
            })
        }
        const onModify = (data) => {
            updateModel5({
                title: '修改模型',
                type: 'CommonForm',
                width: 480,
                height: 480,
                Event: FORMEVENT,
                modelData: { formItem: 'Mars3donAddTiles', eventBack: 'onAddTiles', Initial: data }
            })
        }
        const onDelete = (uuid) => {
            const TIL = map.getLayerById(uuid)
            if (TIL) {
                const til = TILData.filter(v => v.id !== TIL.id)
                Event.emit({ type: 'onSaveTilConfig', data: til })
                map.removeLayer(TIL)
                setTILData(til)
            }
            const data = removeTreeByKey(TreeData, uuid)
            const list = { ...MapConfig, tiles: data }
            Event.emit({ type: 'onSaveMapConfig', data: list })
            setTreeData(data)
        }
        const onDraw = (data, status) => {
            const { uuid, tilesUrl } = data
            setActivate(data)
            const tilesData = { ...initStartDraw.tiles, id: uuid, url: tilesUrl, flyTo: true }
            const tilesLayer = new mars3d.layer.TilesetLayer(tilesData)
            map.addLayer(tilesLayer)
            if (status) {
                const { lng, lat, alt } = map.getCenter()
                tilesData.position = [lng, lat, alt]
            } else tilesLayer.readyPromise.then(() => {
                const { lng, lat, alt } = tilesLayer.center
                tilesData.position = [lng, lat, alt]
            })
            updateModel5({
                title: '模型数据',
                type: 'Mars3dForm',
                Event: FORMEVENT,
                width: 600,
                height: '100vh',
                shading: false,
                position: { my: 'right ', at: 'right ', of: window },
                modelData: { type: `Mars3DtilesFormList`, Initial: tilesData }
            })
            const newTil = [...TILData, tilesData]
            setTILData(newTil)
            Event.emit({ type: 'onSaveTilConfig', data: newTil })
        }
        const onPositioning = (uuid) => {
            const TIL = map.getLayerById(uuid)
            if (!TIL) return
            TIL.flyTo()
        }
        const onShow = (TIL, status) => {
            TIL.setOptions({ show: status })
            TILData.find(v => v.id === TIL.id).show = status
            setTILData([...TILData])
            Event.emit({ type: 'onSaveTilConfig', data: TILData })
        }
        const onModifyModel = (TIL) => {
            setActivate({ uuid: TIL.id })
            TIL.flyTo()
            updateModel5({
                title: '模型数据',
                type: 'Mars3dForm',
                Event: FORMEVENT,
                width: 600,
                height: '100vh',
                shading: false,
                position: { my: 'right ', at: 'right ', of: window },
                modelData: { type: `Mars3DtilesFormList`, Initial: TIL.options }
            })
        }
        const CallBackFunc = e => {
            const { type, data } = e
            // console.log('Mars3d', e)
            const Mapping = new Map([
                ['onAddTiles', () => {
                    const arr = data.uuid ? replaceNodeById(TreeData, data.uuid, data) : [...TreeData, { ...data, uuid: v4() }]
                    const list = { ...MapConfig, tiles: arr }
                    setTreeData(arr)
                    updateModel5({})
                    Event.emit({ type: 'onSaveMapConfig', data: list })
                }],
                ['onDetection', () => {
                    const TIL = map.getLayerById(Activate.uuid)
                    const { path, value } = getPathArray(data)
                    _.set(TIL.options, path, value)
                    TIL.setOptions(TIL.options)
                    const newOpt = replaceNodeByIdTwo(TILData, Activate.uuid, TIL.options, 'id')
                    setTILData(newOpt)
                    Event.emit({ type: 'onSaveTilConfig', data: newOpt })
                }]
            ])
            const func = Mapping.get(type)
            func?.(data)
        }
        FORMEVENT.useSubscription(CallBackFunc)

        return (
            <div className='Mars3dModel A04'>
                <div className='List'>
                    <DevScrollView>
                        <Tree
                            draggable
                            blockNode
                            onDrop={e => {
                                const data = onTreeDrop(e, TreeData, 'uuid')
                                setTreeData(data)
                                const list = { ...MapConfig, tiles: data }
                                Event.emit({ type: 'onSaveMapConfig', data: list })
                            }}
                            selectable={false}
                            treeData={TreeData}
                            defaultExpandAll
                            fieldNames={{ key: 'uuid' }}
                            titleRender={e => {
                                const { uuid, name, fieldType, children } = e
                                if (fieldType === 'group') {
                                    return (
                                        <div className='treeList group'>
                                            <div className='title'>
                                                <div>分组</div>
                                                <div>{name}</div>
                                            </div>
                                            <div className='options'>
                                                <Tooltip title='编辑'>
                                                    <Button type='link' icon={ICONMapping['fasEdit']} onClick={() => onModify(e)} />
                                                </Tooltip>
                                                {(!children || children.length === 0) &&
                                                    <Tooltip title='删除'>
                                                        <Popconfirm
                                                            title="删除提醒!"
                                                            description="是否删除当前分组,删除后将无法恢复!"
                                                            onConfirm={() => onDelete(uuid)}
                                                            okText="删除"
                                                            cancelText="取消"
                                                        >
                                                            <Button type='link' danger icon={ICONMapping['fasTrash']} />
                                                        </Popconfirm>
                                                    </Tooltip>
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                                if (fieldType === 'tiles') {
                                    const TIL = map.getLayerById(uuid)
                                    const show = TIL?.getRealShow() || false
                                    return (
                                        <div className='treeList element'>
                                            <div className='title' onClick={() => onPositioning(uuid)}>
                                                <div>模型</div>
                                                <div>{name}</div>
                                            </div>
                                            <div className='options'>
                                                {TIL ?
                                                    <>
                                                        {show ?
                                                            <Tooltip title='显示中...'>
                                                                <Button type='link' icon={ICONMapping['fasEye']} onClick={() => onShow(TIL, false)} />
                                                            </Tooltip> :
                                                            <Tooltip title='隐藏中...'>
                                                                <Button type='link' danger icon={ICONMapping['fasEyeSlash']} onClick={() => onShow(TIL, true)} />
                                                            </Tooltip>
                                                        }
                                                        <Tooltip title='编辑模型'>
                                                            <Button type='link' icon={ICONMapping['fasTools']} onClick={() => onModifyModel(TIL)} />
                                                        </Tooltip>
                                                    </> :
                                                    <>
                                                        <Tooltip title='加载到当前位置'>
                                                            <Button type='link' icon={ICONMapping['AimOutlined']} onClick={() => onDraw(e, true)} />
                                                        </Tooltip>
                                                        <Tooltip title='加载到模型位置'>
                                                            <Button type='link' icon={ICONMapping['fasThumbtack']} onClick={() => onDraw(e, false)} />
                                                        </Tooltip>
                                                    </>
                                                }
                                                <Tooltip title='编辑'>
                                                    <Button type='link' icon={ICONMapping['fasEdit']} onClick={() => onModify(e)} />
                                                </Tooltip>
                                                <Tooltip title='删除'>
                                                    <Popconfirm
                                                        title="删除提醒!"
                                                        description="是否删除当前模型,删除后将无法恢复!"
                                                        onConfirm={() => onDelete(uuid)}
                                                        okText="删除"
                                                        cancelText="取消"
                                                    >
                                                        <Button type='link' danger icon={ICONMapping['fasTrash']} />
                                                    </Popconfirm>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    )
                                }
                            }}
                        />
                    </DevScrollView>
                    <div className='Button'>
                        <Button type='primary' block onClick={onAdd} loading={Activate ? true : false}>新增</Button>
                    </div>
                </div>
            </div>
        )
    }

    return (<div className='Mars3dModel'> 未知组件 : Mars3dModel - {type}   </div>)
};

export default Mars3dModel;