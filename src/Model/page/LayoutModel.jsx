
import './LayoutModel.scss'

import copy from 'copy-to-clipboard'
import { useEventEmitter } from 'ahooks'
import { useState, useEffect } from 'react'
import { Spin, Result, Button, FloatButton, App } from 'antd'


import { axios } from '../../Utils/Api'
import { CommonAPIUrl } from '../../Config'
import { modelStore } from '../../Router/zustand'
import { Encrypt, Decrypt, GetIndexedDB } from '../../Utils/IndexedDB'

import { ModelAnnexTemplate, ModelTableTemplate } from '../../Temp/ModelTemplate'

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
        setStatus({ spin: false, result: false })
        setConfig(jsonData)
        const { pageType, diyUrl } = jsonData
        if (pageType === 'DIY') {
            try {
                const module = await import(`../diy/${diyUrl}.jsx`);
                const Component = module.default || module
                if (!Component || (typeof Component !== 'function' && typeof Component !== 'object')) throw new Error(`导入的模块不是有效的React组件`)
                setComponentStatus({ laoding: false, error: false, Template: Component })
            } catch (error) { setComponentStatus({ laoding: false, error: error, Template: null }) }
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

    const startCallBack = (e) => {
        const { type, data } = e
        // console.log('Home', e)
        const Mapping = new Map([
            ['onSaveModel', () => onSaveModel(data)],
            ['onPasteIndependentModel', () => {
                const { json, paste } = data
                const params = JSON.parse(paste)
                onSaveModel({ ...params, json })
                updateModel4({})
            }]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    ModelEvent.useSubscription(startCallBack)
    useEffect(() => { if (json) getJson() }, [json])

    if (Status.spin) return <div className='LayoutModel Spin'><Spin size="large" /></div>
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
            </div>
        )
        const { Template } = componentStatus
        return (
            <div className='LayoutModel'>
                <Template data={data} />
                <FloatButton onClick={onFormClick} />
            </div>
        )
    }
    const Template = LayTempMapping[Config.layType]
    return (
        <div className='LayoutModel'>
            <Template config={Config} row={row} Event={Event} />
            <FloatButton onClick={onFormClick} />;
        </div>
    );
};

export default LayoutModel;