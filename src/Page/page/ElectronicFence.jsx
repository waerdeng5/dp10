import './ElectronicFence.scss'
import { v4 } from 'uuid'
import * as mars3d from "mars3d"

import { useEventEmitter } from 'ahooks'
import { useState, useRef, useEffect } from 'react'
import { Tree, Button, Result, App, Popconfirm } from 'antd'

import { AimOutlined, PlusOutlined, UsergroupAddOutlined, FormOutlined, BgColorsOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons';

import { InitMap } from '../../Mars3d'
import { CommonAPIUrl } from '../../Config'
import { axios, axiosFor } from '../../Utils/Api'
import { DevScrollView } from '../../Temp/DevTemplate'
import { GetIndexedDB, Encrypt, Decrypt } from '../../Utils/IndexedDB'
import { modelStore } from '../../Router/zustand'
import { FormConfig } from '../../Config/configForm'

const labelConfig = {
    color: '#262626',
    font_size: 16,
    font_family: 'ShuHeiTi',
    font_weight: 'bold',
}

const B09Config = {
    type: 'B09',
    B09_saveMethod: 'post',
    B09_saveUrl: 'fences/BatchAddPersonByFence',
    B09_saveSelect: 'personUuid',
    B09_saveUuid: true,
    B09_saveMapping: 'fenceUuid',
    B09_leftMethod: 'get',
    B09_leftUrl: 'fences/GetAvailablePersonByFence',
    B09_leftUuid: true,
    B09_leftMapping: 'FenceUuid',
    B09_rightMethod: 'get',
    B09_rightUrl: 'fences/GetFenceByPerson',
    B09_rightUuid: true,
    B09_rightMapping: 'fenceUuid',
    B09_render: 'table',
    B09_seeStatus: true,
    B09_orgData: 'outside',
    B09_orgKeyValue: false,
    B09_tableArr: [
        { dataIndex: 'tableName', title: '全名称', width: 160 },
        { dataIndex: 'mobile', title: '手机号码', width: 160 },
        { dataIndex: 'organizationName', title: '所属公司', width: 160 },
    ],
    B06_width: '540',
    B06_type: 'DevExtremeDataGrid',
    B06_FilterRowVisible: false,
    B06_alignment: 'center',
    B06_showBorders: true,
    B06_showRowLines: true,
    B06_showColumnLines: true,
    B06_rowAlternationEnabled: true,
    B06_method: 'get',
    B06_url: 'fences/GetFencePersonList',
    B06_master: true,
    B06_field: 'uuid',
    B06_send: 'FenceUuid',
    B06_list: [
        { dataIndex: 'tableName', title: '全名称', width: 160 },
        { dataIndex: 'mobile', title: '手机号码', width: 160 },
        { dataIndex: 'organizationName', title: '所属公司', width: 160 },
    ],
}

const ElectronicFence = ({ data }) => {
    const { message, modal, notification } = App.useApp();
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const Event = useEventEmitter()
    const { remark } = data

    const mapRef = useRef(null)

    const [MapPar, setMap] = useState({ map: null, gra: null, clip: null })

    const [OrgConfig, setOrgConfig] = useState()
    const [OrgSelect, setOrgSelect] = useState()
    const [Fences, setFences] = useState([])

    const [ModifyUuid, setModifyUuid] = useState('')

    const initMapFunc = async () => {
        const { uuid } = await GetIndexedDB('config')
        const url = `${uuid}/MAP_PAGE/${remark}`
        const mapUrl = [
            { method: 'get', url: '/projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: url } },
            { method: 'get', url: '/projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${url}_element` } },
            { method: 'get', url: '/projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${url}_tiles` } }
        ]
        const [[mapErr, mapRes], [eleErr, eleRes], [tilErr, tilRes]] = await axiosFor(mapUrl)
        if (mapErr || eleErr || tilErr) return console.log('地图数据获取失败')
        const mapConfig = await Decrypt(mapRes)
        const eleConfig = await Decrypt(eleRes)
        const tilConfig = await Decrypt(tilRes)
        const { map, gra, clip } = InitMap({ BOX: mapRef.current, CONFIG: mapConfig, ELEMENT: eleConfig, TILES: tilConfig })
        setMap({ map, gra, clip })
        const [orgErr, orgRes] = await axios({ method: 'GET', url: 'organization', params: { MenuType: '81981e9c-3689-4691-a776-f56c30b3ad25' } })
        if (orgErr) return console.log('组织数据获取失败')
        const { defaultvalue, list } = orgRes.data
        setOrgConfig(list)
        setOrgSelect([defaultvalue])
        getOrgData(defaultvalue, gra)
    }

    const getOrgData = async (uuid, opt) => {
        const gra = opt || MapPar.gra
        const params = { organizationUuid: uuid, menuUuid: 'b15ae256-3e15-42b5-95ce-bf9ee20bf245', pageIndex: 1, pageSize: 100 }
        const [err, res] = await axios({ method: 'get', url: 'fences', params })
        if (err) return console.log('项目围栏数据获取失败')
        setFences(res.data.list)
        gra.clear()
        res.data.list.map(item => {
            const { uuid, color, width, tableName, coordinates } = item
            const obj = { id: uuid, positions: coordinates, style: { closure: true, width, color, label: { text: tableName, ...labelConfig } } }
            const poly = new mars3d.graphic.PolylineEntity(obj)
            gra.addGraphic(poly)
        })
    }

    useEffect(() => {
        if (!mapRef.current) return
        initMapFunc()
        return () => {
            if (MapPar.map) MapPar.map.destroy()
        }
    }, [mapRef])


    const onSelect = (e) => {
        if (e.length === 0) return
        setOrgSelect(e)
        getOrgData(e[0])
    }
    const onAddFence = () => {
        updateModel5({
            title: '新增围栏',
            type: 'CommonForm',
            width: 480,
            height: 480,
            Event: Event,
            modelData: { formItem: 'FenceFormData', eventBack: 'onEditFence', Initial: {} }
        })
    }
    const onModifyStyle = (Initial) => {
        updateModel5({
            title: '修改围栏',
            type: 'CommonForm',
            width: 480,
            height: 480,
            Event: Event,
            modelData: { formItem: 'FenceFormData', eventBack: 'onSaveFenceBack', Initial }
        })
    }
    const onEditFence = (data) => {
        updateModel5({})
        const { gra } = MapPar
        const { tableName, color, width } = data
        message.loading({ duration: 0, content: '绘制已开启...', key: 'fence' })
        gra.startDraw({ name: tableName, type: "polyline", style: { color, width, closure: true, label: { text: tableName, ...labelConfig } } })
            .then(async res => {
                const params = { ...data, coordinates: res.coordinates, organizationUuid: OrgSelect[0] }
                const [saveErr, saveRes] = await axios({ method: 'post', url: 'fences', params })
                if (saveErr) return console.log('保存失败')
                message.success({ content: '绘制完成!', key: 'fence' })
                getOrgData(OrgSelect[0])
            })
    }
    const onSaveFenceBack = async (data) => {
        const [err, res] = await axios({ method: 'put', url: 'fences', params: data })
        if (err) return console.log('保存失败')
        message.success({ content: '保存成功!', key: 'fence' })
        getOrgData(OrgSelect[0])
        updateModel5({})
    }
    const onPosition = (uuid) => {
        const { map, gra } = MapPar
        map.flyToGraphic(gra.getGraphicById(uuid))
    }
    const onSetPerson = (uuid) => {
        updateModel5({
            title: '人员配置',
            type: 'OptionsModel',
            Event: Event,
            modelData: { ...B09Config, ORGUUID: OrgSelect[0], Initial: [uuid] },
            options: [{ widget: 'dxButton', location: 'after', icon: 'fas fa-clipboard-list', text: '查看人员', onClick: () => B06Func(B09Config) }]
        })
    }
    const onModifyPosi = (uuid) => {
        const { gra } = MapPar
        setModifyUuid(uuid)
        gra.startEditing(gra.getGraphicById(uuid))
    }
    const onSaveFence = async (item) => {
        const { gra } = MapPar
        const { graphics } = gra.stopEditing()
        const { coordinates } = graphics.find(v => v.id === item.uuid)
        const obj = { ...item, coordinates }
        const [err, res] = await axios({ method: 'put', url: 'fences', params: obj })
        if (err) return console.log('保存失败')
        message.success({ content: '保存成功!', key: 'fence' })
        setModifyUuid('')
    }
    const onDeleteFence = async (uuid) => {
        const [err, res] = await axios({ method: 'delete', url: 'fences', params: { uuid } })
        if (err) return console.log('删除失败')
        message.success({ content: '删除成功!', key: 'fence' })
        getOrgData(OrgSelect[0])
    }

    const CallBackFunc = (e) => {
        const { type, data } = e
        console.log('callBack', e)
        const Mapping = new Map([
            ['onEditFence', () => onEditFence(data)],
            ['onSaveFenceBack', () => onSaveFenceBack(data)],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    Event.useSubscription(CallBackFunc)

    return (
        <div className='ElectronicFence' >
            <div className='left'>
                {OrgConfig &&
                    <Tree
                        defaultExpandAll
                        selectedKeys={OrgSelect}
                        fieldNames={{ key: 'value', title: 'label' }}
                        treeData={OrgConfig}
                        onSelect={onSelect}
                    />
                }
            </div>
            <div className='right'>
                <div className='Map' ref={mapRef}></div>
                <div className='Config'>
                    <div className='Box'>
                        <DevScrollView>
                            <div className='ConfigBox'>
                                {Fences.map((v, i) => {
                                    const { uuid, organizationName, tableName } = v
                                    return (
                                        <div className='ConfigItem' key={i}>
                                            <div className='ConfigItemTop'>
                                                <div className='ConfigItemTopInfo'>
                                                    <div className='ConfigItemTopInfo_org'>{organizationName}</div>
                                                    <div className='ConfigItemTopInfo_fence'>{tableName}</div>
                                                </div>
                                                <AimOutlined style={{ fontSize: 24, color: '#1677ff', cursor: 'pointer' }} onClick={() => onPosition(uuid)} />
                                            </div>
                                            <div className='ConfigItemOpt'>
                                                <Button type='link' icon={<UsergroupAddOutlined />} onClick={() => onSetPerson(uuid)}>人员配置</Button>
                                                <Button type='link' icon={<BgColorsOutlined />} onClick={() => onModifyStyle(v)}>修改样式</Button>
                                                {ModifyUuid === uuid ?
                                                    <Button type='link' icon={<SaveOutlined />} onClick={() => onSaveFence(v)}>保存位置</Button> :
                                                    <Button type='link' icon={<FormOutlined />} onClick={() => onModifyPosi(uuid)}>修改位置</Button>
                                                }
                                                <Popconfirm
                                                    title="删除提醒!"
                                                    description="确认删除该围栏吗?"
                                                    onConfirm={() => onDeleteFence(uuid)}
                                                    okText="删除"
                                                    cancelText="取消"
                                                >
                                                    <Button type='link' danger icon={<DeleteOutlined />} >删除围栏</Button>
                                                </Popconfirm>

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </DevScrollView>
                    </div>
                    <div className='Btm'>
                        <Button type='primary' block icon={<PlusOutlined />} onClick={onAddFence}>新增围栏</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectronicFence;