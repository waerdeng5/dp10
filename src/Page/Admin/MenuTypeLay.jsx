import './MenuTypeLay.scss'
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import { v4 } from 'uuid'
import { useState, useRef } from 'react'
import ReactGridLayout from 'react-grid-layout'
import { GridBackground } from "react-grid-layout/extras"
import { useEventEmitter, useMount, useSize } from 'ahooks'
import { Button, Result, Skeleton, Dropdown, App } from 'antd'

import { modelStore } from '../../Router/zustand'
import { LayoutWindowDetailsStyle, CommonAPIUrl } from '../../Config'
import { axios, axiosFor, strOfurlParamsFunc } from '../../Utils/Api'
import { Encrypt, Decrypt, GetIndexedDB } from '../../Utils/IndexedDB'
import { GlobalOperation, SwiperTemplate } from '../../Temp/LayTemplate'
import { ColorCallBack, SpacingCallBack, SetBorderParams, SetFilderParams, SpacingSizeCallBack } from '../../Utils'

const { port } = window.location
const initData = { api: [], layout: [], window: {}, params: {} }

const MenuTypeLay = ({ data, AdminEvent }) => {
    const { notification } = App.useApp()
    const { targetUrl } = data
    const ContentBoxRef = useRef()
    const SIZE = useSize(ContentBoxRef)
    const LayoutEvent = useEventEmitter()
    const { updateModel4, updateModel5 } = modelStore()
    const [User, setUser] = useState()

    const [Loading, setLoading] = useState(true)
    const [Status, setStatus] = useState(true)
    const [ApiData, setApiData] = useState()
    const [LayoutData, setLayoutData] = useState()
    const [WindowData, setWindowData] = useState()
    const [ParamsData, setParamsData] = useState()
    const [LayoutStatus, setLayoutStatus] = useState(false)
    const [UrlData, setUrlData] = useState({})

    const getApiData = async (list) => {
        let data = {}
        const mapping = list.map(v => ({ method: v.api_method, url: v.api_url, path: v.api_https, params: strOfurlParamsFunc(v.api_params) }))
        const api = await axiosFor(mapping)
        list.forEach((v, i) => {
            const [err, res] = api[i]
            data[v.api_name] = err ? 'apiError' : res
            if (err) notification.error({ title: '接口请求失败!', description: `${v.api_url} 接口请求失败` })
        })
        setUrlData(data)
    }

    const getData = async () => {
        const { uuid } = await GetIndexedDB('config')
        const [err, res] = await axios({
            method: 'get',
            url: 'projects/GetJsonInfoByUuid',
            path: CommonAPIUrl,
            params: { uuid: `${uuid}/LAY_PAGE/${targetUrl}` }
        })
        if (err) {
            setLoading(false)
            return console.log(err)
        }
        const { api, layout, params, window } = await Decrypt(res)
        getApiData(api)
        setApiData(api)
        setLayoutData(layout)
        setWindowData(window)
        setParamsData(params)
        setLoading(false)
        setStatus(false)
    }

    const setData = async (data) => {
        console.log('[--保存lay页面--]', data)
        const { uuid } = await GetIndexedDB('config')
        const params = { uuid: `${uuid}/LAY_PAGE/${targetUrl}`, content: JSON.stringify(await Encrypt(data)) }
        const [err] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (err) return console.log(err)
        getData()
    }

    // !!! 全局设置
    // 设置apiData
    const onSetApiData = () => {
        updateModel5({
            title: '接口信息',
            type: 'CommonForm',
            Event: LayoutEvent,
            modelData: { formItem: 'LayoutAPiDataFormList', eventBack: 'onAPIParams', Initial: { layout_ApiList: ApiData } }
        })
    }
    const onAPIParams = (data) => {
        setApiData(data.layout_ApiList)
        updateModel5({})
    }

    // 添加小窗
    const onAddWindow = () => {
        const uuid = v4()
        setLayoutData(e => ([...e, { i: uuid, x: 0, y: 0, w: 12, h: 12 }]))
        setParamsData(e => ({ ...e, [uuid]: LayoutWindowDetailsStyle }))
    }

    // 保存布局
    const onSaveLayout = () => {
        setData({ api: ApiData, layout: LayoutData, window: WindowData, params: ParamsData })
    }

    // 删除布局
    const onDeleteData = () => {
        setApiData([])
        setLayoutData([])
        setWindowData({})
        setParamsData({})
    }

    // !!! 小窗设置
    // 设置小窗样式
    const onSetWindowParams = uuid => {
        updateModel5({
            title: '小窗设置',
            type: 'CommonForm',
            Event: LayoutEvent,
            modelData: {
                formItem: 'LayoutWindowStyleFormList',
                eventBack: 'onWindowParams',
                Initial: { uuid, ...ParamsData[uuid] }
            }
        })
    }

    const onWindowParams = data => {
        const { uuid, ...params } = data
        setParamsData(e => ({ ...e, [uuid]: params }))
        updateModel5({})
    }

    // 删除小窗
    const onDeleteWindow = (uuid) => {
        ParamsData[uuid].window_NavList.forEach(item => (delete WindowData[item.window_navUuid]))
        setWindowData(WindowData)
        delete ParamsData[uuid]
        setParamsData(ParamsData)
        setLayoutData(e => (e.filter(v => v.i !== uuid)))
    }

    const onAddWindowParams = (data) => {
        console.log('onAddWindowParams', data)
    }

    const onActiveLayout = data => {
        setWindowData(e => ({ [data]: [], ...e }))
    }


    // !!! 布局操作
    // 添加模块
    const onAddTemplate = (data) => {
        updateModel5({ title: '模块选择', type: 'LayoutTemplate', width: '80vw', Event: LayoutEvent, modelData: { layId: data } })
    }

    // 追加模块参数
    const onAddTemplateParams = e => {
        const { tempId, params } = e
        ParamsData[tempId] = params
        setParamsData(ParamsData)
    }

    // 保存模块的布局信息
    const onSaveTemplateLayout = e => {
        WindowData[e.layId] = e.data
        setWindowData(WindowData)
    }
    // 清空当前布局
    const onDeleteLayout = (data) => {
        WindowData[data].forEach(item => (delete ParamsData[item.i]))
        WindowData[data] = []
        setParamsData(ParamsData)
        setWindowData(WindowData)
    }

    // !!! 模块操作
    // 模块编辑
    const onSetTemplateParams = (data) => {
        const { form, tempId } = data
        updateModel5({
            title: '模块设置',
            type: 'CommonForm',
            Event: LayoutEvent,
            modelData: {
                formItem: form,
                eventBack: 'onSetTemplateParamsBack',
                Initial: { uuid: tempId, ...ParamsData[tempId] }
            },
            options: [
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    text: '复制参数',
                    type: 'default'
                }
            ]
        })
    }

    const onSetTemplateParamsBack = (e) => {
        const { uuid, ...data } = e
        ParamsData[uuid] = { ...ParamsData[uuid], ...data }
        setParamsData(ParamsData)
        updateModel5({})
    }

    // 删除模块
    const onDeleteTemplate = (data) => {
        const { layId, tempId } = data
        delete ParamsData[tempId]
        WindowData[layId] = WindowData[layId].filter(v => v.i !== tempId)
        setParamsData(ParamsData)
        setWindowData(WindowData)
    }

    const layoutCallBack = e => {
        const { type, data } = e
        const Mapping = new Map([
            ['onAPIParams', () => onAPIParams(data)],
            ['onWindowParams', () => onWindowParams(data)],
            ['onSetApiData', onSetApiData],
            ['onAddWindow', onAddWindow],
            ['onSaveLayout', onSaveLayout],
            ['onDeleteData', onDeleteData],
            ['onSetWindowParams', () => onSetWindowParams(data)],
            ['onDeleteWindow', () => onDeleteWindow(data)],
            ['onAddTemplate', () => onAddTemplate(data)],
            ['onAddWindowParams', () => onAddWindowParams(data)],
            ['onActiveLayout', () => onActiveLayout(data)],
            ['onAddTemplateParams', () => onAddTemplateParams(data)],
            ['onSaveTemplateLayout', () => onSaveTemplateLayout(data)],
            ['onDeleteLayout', () => onDeleteLayout(data)],
            ['onSetTemplateParams', () => onSetTemplateParams(data)],
            ['onSetTemplateParamsBack', () => onSetTemplateParamsBack(data)],
            ['onDeleteTemplate', () => onDeleteTemplate(data)],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }


    LayoutEvent.useSubscription(layoutCallBack)

    useMount(async () => {
        const user = await GetIndexedDB('user')
        setUser(user)
        AdminEvent.emit({ type: 'onActiveMenu', data: { ...data } })
        getData()
    })

    const adminCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([['onActivateLayout', () => setLayoutStatus(e => (!e))]])
        const func = Mapping.get(type)
        func?.(data)
    }

    AdminEvent.useSubscription(adminCallBack)

    if (Loading) return <Skeleton active paragraph={{ rows: 16 }} />

    if (Status) {
        return (
            <div className='MenuTypeLay_None'>
                <Result
                    status="404"
                    title="未检测到页面信息"
                    extra={port && <Button type="primary" onClick={() => setData(initData)}>初始化页面</Button>}
                />
            </div>
        )
    }

    if (LayoutData) {
        return (
            <div className='MenuTypeLay_Content'>
                <Dropdown
                    trigger={['contextMenu']}
                    menu={{ items: ((port || User?.userUuid === '1e99e116-6ec0-425c-87b4-64dd2ce458e2') && LayoutStatus) ? GlobalOperation({ LayoutEvent }) : [] }}
                >
                    <div className={`ContentBox ${LayoutStatus ? 'Edit' : 'Preview'}`} ref={ContentBoxRef}>
                        {SIZE &&
                            <>
                                {LayoutStatus &&
                                    <GridBackground
                                        className='LayoutBack'
                                        cols={24}
                                        rows={24}
                                        width={SIZE.width}
                                        rowHeight={SIZE.height / 24}
                                        margin={[0, 0]}
                                        color="#cccccc10"
                                        borderRadius={4}
                                    />
                                }
                                <ReactGridLayout
                                    resizeConfig={{ enabled: LayoutStatus }}
                                    dragConfig={{ enabled: LayoutStatus }}
                                    width={SIZE.width}
                                    layout={LayoutData}
                                    isBounded={true}
                                    gridConfig={{ cols: 24, rowHeight: SIZE.height / 24, margin: [0, 0] }}
                                    onLayoutChange={setLayoutData}
                                >
                                    {LayoutData.map(item => {
                                        const {
                                            // 基础信息
                                            window_title,
                                            window_backColor, window_backDeg, window_padding, window_margin, window_radius,
                                            window_border, window_borderColor, window_borderSize, window_borderType,
                                            window_filter, window_filterColor, window_filterSize,
                                            // 标题设置
                                            window_titleMar, window_titlePad, window_titleTxt, window_titleColor, window_titleDeg,
                                            window_titleSize, window_titleFamily, window_titleWeight, window_titleStyle,
                                            window_titleFilter, window_titleFilterSize, window_titleFilterColor,
                                            window_NavType,
                                        } = ParamsData[item.i]
                                        // 基础信息
                                        const style = {
                                            width: SpacingSizeCallBack(window_margin, 100),
                                            height: SpacingSizeCallBack(window_margin, 100, true),
                                            background: ColorCallBack(window_backColor, window_backDeg),
                                            padding: SpacingCallBack(window_padding),
                                            margin: SpacingCallBack(window_margin),
                                            borderRadius: SpacingCallBack(window_radius),
                                            border: SetBorderParams(window_border, window_borderSize, window_borderType, window_borderColor),
                                            filter: SetFilderParams(window_filter, window_filterSize, window_filterColor),
                                        }
                                        // 标题设置
                                        const titleStyle = {
                                            '--titleColor': ColorCallBack(window_titleColor, window_titleDeg),
                                            lineHeight: window_titleSize + 'px',
                                            padding: SpacingCallBack(window_titlePad),
                                            margin: SpacingCallBack(window_titleMar),
                                            fontSize: window_titleSize,
                                            fontFamily: window_titleFamily,
                                            fontWeight: window_titleWeight,
                                            fontStyle: window_titleStyle,
                                            filter: SetFilderParams(window_titleFilter, window_titleFilterSize, window_titleFilterColor),
                                        }
                                        return (
                                            <div key={item.i} className='WindowBox'>
                                                <Dropdown
                                                    trigger={['contextMenu']}
                                                    menu={{
                                                        items: ((port || User?.userUuid === '1e99e116-6ec0-425c-87b4-64dd2ce458e2') && LayoutStatus) ?
                                                            GlobalOperation({ type: 'window', winId: item.i, LayoutEvent }) :
                                                            []
                                                    }}
                                                >
                                                    <div className={`WindowItem ${LayoutStatus ? 'Edit' : 'Preview'}`} onContextMenu={(e) => e.stopPropagation()}>
                                                        <div className='WindowContent' style={style}>
                                                            {LayoutStatus && <div className='SCALE'>window : {item.w}*{item.h}</div>}
                                                            {window_title && <div className='WindowTitle' style={titleStyle} >{window_titleTxt}</div>}
                                                            <div
                                                                className='WindowNavSwiper'
                                                                style={{ flexDirection: window_NavType === 'vertical' ? 'row' : 'column' }}
                                                            >
                                                                <SwiperTemplate
                                                                    data={item}
                                                                    status={LayoutStatus}
                                                                    params={ParamsData}
                                                                    winData={WindowData}
                                                                    LayoutEvent={LayoutEvent}
                                                                    UrlData={UrlData}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Dropdown>
                                            </div>
                                        )
                                    })}
                                </ReactGridLayout>
                            </>
                        }
                    </div>
                </Dropdown>
            </div>
        )
    }
}

export default MenuTypeLay