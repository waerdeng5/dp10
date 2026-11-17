
import './LayoutModel.scss'

import copy from 'copy-to-clipboard'
import { useEventEmitter } from 'ahooks'
import { useState, useEffect } from 'react'
import { Spin, Result, Button, FloatButton, App, Dropdown, Popconfirm } from 'antd'


import { axios, strOfurlParamsFunc } from '../../Utils/Api'
import { CommonAPIUrl } from '../../Config'
import { modelStore } from '../../Router/zustand'
import { Encrypt, Decrypt, GetIndexedDB } from '../../Utils/IndexedDB'
import { ModelAnnexTemplate, ModelTableTemplate } from '../../Temp/ModelTemplate'
import { getNestedValue, ColorCallBack, SpacingCallBack, SetFilderParams, } from '../../Utils'
import { AttachTemplateA01 } from '../../Temp/DevTemplate'


import { PrefabricatedChartTemplate } from '../../Temp/PrefabricatedChart'
import { PrefabricatedPlaceTemplate } from '../../Temp/PrefabricatedPlace'
import { PrefabricatedDiyTemplate } from '../../Temp/PrefabricatedDiy'
import { PrefabricatedListTemplate } from '../../Temp/PrefabricatedList'
import { PrefabricatedImgTextTemplate } from '../../Temp/PrefabricatedImgText'
import { PrefabricatedTableTemplate } from '../../Temp/PrefabricatedTable'
import { PrefabricatedSelectTemplate } from '../../Temp/PrefabricatedSelect'
import { PrefabricatedSwiperTemplate } from '../../Temp/PrefabricatedSwiper'
import { PrefabricatedVisualTemplate } from '../../Temp/PrefabricatedVisual'
import { BitsTextTemplate } from '../../Bits/BitsText'
import { BitsComponentsTemplate } from '../../Bits/BitsComponents'
import { BitsMicroTemplate } from '../../Bits/BitsMicro'
import { BitsAnimationsTemplate } from '../../Bits/BitsAnimations'
import { BitsBackgroundsTemplate } from '../../Bits/BitsBackgrounds'
import {
    TemplateParamsMapping
} from '../../Config'


const TemplateComponentMapping = {
    ...PrefabricatedChartTemplate,
    ...PrefabricatedPlaceTemplate,
    ...PrefabricatedDiyTemplate,
    ...PrefabricatedImgTextTemplate,
    ...PrefabricatedListTemplate,
    ...PrefabricatedTableTemplate,
    ...PrefabricatedSelectTemplate,
    ...PrefabricatedSwiperTemplate,
    ...PrefabricatedVisualTemplate,
    ...BitsTextTemplate,
    ...BitsComponentsTemplate,
    ...BitsMicroTemplate,
    ...BitsAnimationsTemplate,
    ...BitsBackgroundsTemplate,
}


const { port } = window.location

const LayTempMapping = {
    A01: ModelAnnexTemplate,
    A02: ModelTableTemplate
}

const LayoutModel = ({ data, Event }) => {
    const { json, row } = data
    const ModelEvent = useEventEmitter()
    const { message, modal, notification } = App.useApp()
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const [Status, setStatus] = useState({ spin: true, result: true })
    const [componentStatus, setComponentStatus] = useState({ laoding: true, error: null, Template: null })

    const [Config, setConfig] = useState({ json: json })
    const [DETData, setDETData] = useState({})


    const [TEMPData, setTEMPData] = useState({ loading: true, status: false, data: {} })


    const getJson = async () => {
        const { uuid } = await GetIndexedDB('config')
        const [err, res] = await axios({
            method: 'get',
            url: 'projects/GetJsonInfoByUuid',
            path: CommonAPIUrl,
            params: { uuid: `${uuid}/MOD_PAGE/${json}` }
        })
        if (err) return setStatus({ spin: false, result: true })
        const jsonData = await Decrypt(res)
        const { pageType, diyUrl } = jsonData
        setConfig(jsonData)
        setStatus({ spin: false, result: false })
        if (pageType === 'TEM') {
            const params = { uuid: `${uuid}/MOD_TEMP/${json}` }
            const [err, res] = await axios({ method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params })
            if (err) return setTEMPData({ loading: false, status: false, data: {} })
            setTEMPData({ loading: false, status: true, data: await Decrypt(res) })
        }

        if (pageType === 'DIY') {
            try {
                const module = await import(`../diy/${diyUrl}.jsx`);
                const Component = module.default || module
                if (!Component || (typeof Component !== 'function' && typeof Component !== 'object')) throw new Error(`导入的模块不是有效的React组件`)
                setComponentStatus({ laoding: false, error: false, Template: Component })
            } catch (error) { setComponentStatus({ laoding: false, error: error, Template: null }) }
        }
        if (pageType === 'DET') {
            const { lay_A03_type, A03_api_method, A03_api_url, A03_api_params, A03_api_https,
                A03_api_data, A03_api_level, A03_api_mapping, A03_fields } = jsonData

            if (lay_A03_type === 'A02') {
                const params = A03_api_data ? { ...strOfurlParamsFunc(A03_api_params), ...row } : strOfurlParamsFunc(A03_api_params)
                const [err, res] = await axios({ method: A03_api_method, url: A03_api_url, path: A03_api_https, params })
                if (err) return console.error('获取树状结构失败', err)
                const apiData = A03_api_level ? getNestedValue(A03_api_mapping || '', res) : res
                setDETData(apiData)
            } else setDETData(row)
        }
    }
    const onFormClick = () => {
        updateModel5({
            title: '弹出层设置',
            type: 'CommonForm',
            Event: ModelEvent,
            modelData: { formItem: 'ModelConfigFormList', eventBack: 'onSaveModel', Initial: Config },
            options: [
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'before',
                    text: '复制参数',
                    type: 'default',
                    onClick: () => {
                        const success = copy(JSON.stringify(Config))
                        if (success) message.success('复制成功！')
                        else message.error('复制失败！')
                    }
                },
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    text: '导入参数',
                    type: 'default',
                    onClick: () => {
                        updateModel4({
                            title: '模块设置',
                            type: 'CommonForm',
                            width: 640,
                            height: 640,
                            Event: ModelEvent,
                            modelData: {
                                formItem: 'PrefabricatedPasteModel',
                                eventBack: 'onPasteIndependentModel',
                                Initial: { json: Config.json }
                            },
                        })
                    }
                }
            ]
        })
    }

    const onSaveModel = async (data) => {
        const { uuid } = await GetIndexedDB('config')
        const params = { uuid: `${uuid}/MOD_PAGE/${json}`, content: JSON.stringify(await Encrypt(data)) }
        const [err] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (err) return console.log(err)
        updateModel5({})
        getJson()
    }

    const onSelectTemplate = async (data) => {
        const { layId, tempId } = data
        const { uuid } = await GetIndexedDB('config')
        const params = { uuid: `${uuid}/MOD_TEMP/${json}`, content: JSON.stringify(await Encrypt(TemplateParamsMapping[tempId])) }
        const [err] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (err) return console.log(err)
    }


    const onSetTemplateParamsBack = (data) => {
        console.log(data)

    }
    const onSetPasteWindowData = (data) => {
        setTEMPData({ loading: true, status: true, data })
        updateModel4({})
        updateModel5({})
    }

    const startCallBack = (e) => {
        const { type, data } = e
        console.log('LayoutModel', e)
        const Mapping = new Map([
            ['onSaveModel', () => onSaveModel(data)],
            ['onPasteIndependentModel', () => {
                const { json, paste } = data
                const params = JSON.parse(paste)
                onSaveModel({ ...params, json })
                updateModel4({})
            }],
            ['onSelectTemplate', () => onSelectTemplate(data)],
            ['onSetTemplateParamsBack', () => onSetTemplateParamsBack(data)],
            ['onSetPasteWindowData', () => onSetPasteWindowData(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    ModelEvent.useSubscription(startCallBack)
    useEffect(() => { if (json) getJson() }, [json])



    const onAddTem = () => {
        updateModel5({ title: '模块选择', type: 'LayoutTemplate', width: '80vw', Event: ModelEvent, modelData: { layId: json } })
    }
    const onPutTem = () => {
        updateModel5({
            title: '模块设置',
            type: 'CommonForm',
            Event: ModelEvent,
            modelData: {
                formItem: TEMPData.data.value,
                eventBack: 'onSetTemplateParamsBack',
                Initial: TEMPData.data
            },
            options: [
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'before',
                    text: '复制参数',
                    type: 'default',
                    onClick: () => {
                        const success = copy(JSON.stringify(TEMPData.data))
                        if (success) message.success('复制成功！')
                        else message.error('复制失败！')
                    }
                },
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    text: '导入参数',
                    type: 'default',
                    onClick: () => {
                        updateModel4({
                            title: '模块设置',
                            type: 'CommonForm',
                            width: 640,
                            height: 640,
                            Event: ModelEvent,
                            modelData: {
                                formItem: 'PrefabricatedPasteWindow',
                                eventBack: 'onSetPasteWindowData',
                                Initial: { uuid: json }
                            },
                        })
                    }
                }
            ]
        })
    }
    const onDelTem = () => {

    }


    const items = [
        { key: '3-3', label: (<Button type='link' onClick={onAddTem}>添加模块</Button>) },
        { key: '4-1', label: (<Button type='link' onClick={onPutTem} >编辑模块</Button>) },
        {
            key: '4-2', label: (
                <Popconfirm
                    title="删除提醒"
                    description="是否删除当前模块?请谨慎操作!"
                    onConfirm={onDelTem}
                    okText="删除"
                    cancelText="取消"
                >
                    <Button type='link' danger>删除模块</Button>
                </Popconfirm>
            )
        },
    ]



    if (Status.spin) return (
        <div className='LayoutModel Spin'>
            <Spin size="large" />
            {port && <FloatButton onClick={onFormClick} />}
        </div>
    )
    if (Status.result) return (
        <div className='LayoutModel Spin'>
            <Result
                status="500"
                title="为获取到弹窗参数"
                extra={port && <Button type="primary" onClick={onFormClick}>添加配置</Button>}
            />
        </div>
    )

    if (Config.pageType === 'DIY') {
        if (componentStatus.laoding) return <div className='LayoutModel Spin'><Spin size="large" /></div>
        if (componentStatus.error) return (
            <div className='LayoutModel Spin'>
                <Result status="404" title="未检测到页面配置!" subTitle={`请联系系统管理员处理.${componentStatus.error}`} />
                {port && <FloatButton onClick={onFormClick} />}
            </div>
        )
        const { Template } = componentStatus
        return (
            <div className='LayoutModel'>
                <Template data={data} />
                {port && <FloatButton onClick={onFormClick} />}
            </div>
        )
    }
    if (Config.pageType === 'DET') {
        const { AddTopOptionsFormList_14, A03_style_color, A03_style_width, A03_style_padding, A03_label_width,
            A03_label_color, A03_label_deg, A03_label_size, A03_label_family, A03_label_weight, A03_label_style,
            A03_label_filed, A03_label_filed_data, A03_label_filed_color,
            A03_value_color, A03_value_deg, A03_value_size, A03_value_family, A03_value_weight, A03_value_style,
            A03_value_filed, A03_value_filed_data, A03_value_filed_color,
        } = Config


        const DetStyle = {
            background: ColorCallBack(A03_style_color, A03_style_width),
            padding: SpacingCallBack(A03_style_padding),
        }

        const labelStyle = {
            width: A03_label_width,
            '--color': ColorCallBack(A03_label_color, A03_label_deg),
            fontSize: A03_label_size,
            fontFamily: A03_label_family,
            fontWeight: A03_label_weight,
            fontStyle: A03_label_style,
            filter: SetFilderParams(A03_label_filed, A03_label_filed_data, A03_label_filed_color)
        }

        const valueStyle = {
            '--color': ColorCallBack(A03_value_color, A03_value_deg),
            fontSize: A03_value_size,
            fontFamily: A03_value_family,
            fontWeight: A03_value_weight,
            fontStyle: A03_value_style,
            filter: SetFilderParams(A03_value_filed, A03_value_filed_data, A03_value_filed_color)
        }


        return (
            <div className='LayoutModel'>
                <div className='DetBox' style={DetStyle}>
                    {AddTopOptionsFormList_14?.map((item, index) => {
                        const { B14_label, B14_value, B14_type } = item
                        if (B14_type === 'txt') {
                            const txt = DETData[B14_value]
                            return txt && (
                                <div className='TXT' key={index}>
                                    <div className='Label' style={labelStyle}>{B14_label} : </div>
                                    <div className='Value' style={valueStyle}>{txt}</div>
                                </div>
                            )
                        }
                        if (B14_type === 'att') {
                            const arr = DETData[B14_value]
                            return arr?.length !== 0 && (
                                <div className='TXT' key={index}>
                                    <div className='Label' style={labelStyle}>{B14_label} : </div>
                                    <div className='Attach' >
                                        <AttachTemplateA01 data={arr} />
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>

                {port && <FloatButton onClick={onFormClick} />}
            </div>
        )
    }

    if (Config.pageType === 'TEM') {
        const { loading, status, data } = TEMPData
        if (loading) return (
            <div className='LayoutModel Spin'>
                <Spin size="large" />
                {port && <FloatButton onClick={onFormClick} />}
            </div>
        )

        if (!status) return (
            <Dropdown
                trigger={['contextMenu']}
                menu={{ items: port ? items : [] }}
            >
                <div className='LayoutModel Spin'>
                    <Result status="404" title="未检测到页面配置!" subTitle={`请联系系统管理员处理.`} />
                    {port && <FloatButton onClick={onFormClick} />}
                </div>
            </Dropdown>
        )

        const { value } = data
        const Template = TemplateComponentMapping[value]

        return (
            <div className='LayoutModel'>
                <Dropdown
                    trigger={['contextMenu']}
                    menu={{ items: port ? items : [] }}
                >
                    <div className='TEM_Template'>
                        <Template tempId={json} data={data} UrlData={[]} LayoutEvent={ModelEvent} />
                    </div>
                </Dropdown>
                {port && <FloatButton onClick={onFormClick} />}
            </div>
        )
    }

    const Template = LayTempMapping[Config.layType]
    return (
        <div className='LayoutModel'>
            <Template config={Config} row={row} Event={Event} />
            {port && <FloatButton onClick={onFormClick} />}
        </div>
    );
};

export default LayoutModel;