
import './LayoutModel.scss'

import { useEventEmitter } from 'ahooks'
import { useState, useEffect } from 'react'
import { Spin, Result, Button, FloatButton } from 'antd'


import { axios } from '../../Utils/Api'
import { modelStore } from '../../Router/zustand'
import { Encrypt, Decrypt } from '../../Utils/IndexedDB'

import { ModelAnnexTemplate, ModelTableTemplate } from '../../Temp/ModelTemplate'

const { port } = window.location

const LayTempMapping = {
    A01: ModelAnnexTemplate,
    A02: ModelTableTemplate
}




const LayoutModel = ({ data, Event }) => {
    const { json } = data
    const ModelEvent = useEventEmitter()
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const [Status, setStatus] = useState({ spin: true, result: true })
    const [componentStatus, setComponentStatus] = useState({ laoding: true, error: null, Template: null })

    const [Config, setConfig] = useState({ uuid: json })

    const getJson = async () => {
        const [err, res] = await axios({ method: 'get', url: '/dictionary/GetJsonInfoByUuid', params: { uuid: `MOD_PAGE/${json}` } })
        if (err) return setStatus({ spin: false, result: true })
        const jsonData = await Decrypt(res)
        setStatus({ spin: false, result: false })
        setConfig(jsonData)
        const { pageType, diyUrl } = jsonData
        if (pageType === 'DIY') {
            try {
                const module = await import(`../home/${diyUrl}.jsx`);
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
            modelData: { formItem: 'ModelConfigFormList', eventBack: 'onSaveModel', Initial: Config }
        })
    }

    const onSaveModel = async (data) => {
        console.log('[--保存model页面--]', data)
        const params = { uuid: `MOD_PAGE/${json}`, content: JSON.stringify(await Encrypt(data)) }
        const [err] = await axios({ method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params })
        if (err) return console.log(err)
        updateModel5({})
        getJson()
    }

    const startCallBack = (e) => {
        const { type, data } = e
        // console.log('Home', e)
        const Mapping = new Map([
            ['onSaveModel', () => onSaveModel(data)],

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
                <Template />
                <FloatButton onClick={onFormClick} />
            </div>
        )
    }

    // console.log(Config  layType)

    const Template = LayTempMapping[Config.layType]



    return (
        <div className='LayoutModel'>
            <Template config={Config} />

            <FloatButton onClick={onFormClick} />;
        </div>
    );
};

export default LayoutModel;