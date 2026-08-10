import './page.scss'

import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import { v4 } from 'uuid'
import { useSize } from 'ahooks'
import { FloatButton, Dropdown, App } from 'antd'
import { AlertOutlined } from '@ant-design/icons'
import { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import ReactGridLayout from 'react-grid-layout'
import { GridBackground } from "react-grid-layout/extras"

import { modelStore } from '../Router/zustand'
import { axios, axiosFor, strOfurlParamsFunc } from '../Utils/Api'
import { Decrypt, Encrypt, GetIndexedDB } from '../Utils/IndexedDB'
import { PageLayoutWindowDetailsStyle, CommonAPIUrl } from '../Config'
import { GlobalOperation, SwiperTemplate } from '../Temp/LayTemplate'
import { ColorCallBack, SetBorderParams, SetFilderParams, SpacingCallBack } from '../Utils'

import { WinTemplate } from '../Temp/StartTemplate'


const PARAMSMAPPING = [
    'PrefabricatedDateSelect',
    'PrefabricatedDiyOrgA01'
]


const { port } = window.location
const initData = { api: [], layout: [], window: {}, params: {} }

const PageTemplate = ({ data, page, StartEvent: LayoutEvent }) => {
    const Navigate = useNavigate()
    const { pathname } = useLocation()

    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const { notification } = App.useApp()

    const { path } = data
    const ContentBoxRef = useRef()
    const SIZE = useSize(ContentBoxRef)

    const [Loading, setLoading] = useState(true)
    const [Status, setStatus] = useState(true)
    const [ApiData, setApiData] = useState()
    const [LayoutData, setLayoutData] = useState()
    const [WindowData, setWindowData] = useState()
    const [ParamsData, setParamsData] = useState()
    const [LayoutStatus, setLayoutStatus] = useState(false)

    const [UrlData, setUrlData] = useState({})

    const [FoldStatus, setFoldStatus] = useState(false)

    const getApiData = (params) => {
        if (!params || !page.params) return
        const apiParams = Object.values(page.params).reduce((acc, v) => {
            if (PARAMSMAPPING.includes(v.value) && v.isParams) acc.push(...(v.isParamsConfig || []))
            return acc
        }, [])
        const mapping = page.api.map((apiItem) => {
            const matchedParams = apiParams.filter(e => e.apiName === apiItem.api_name)
            const dynamicParams = matchedParams.reduce((acc, item) => {
                acc[item.apiParams] = item.apiData
                return acc
            }, {})
            const finalParams = { ...strOfurlParamsFunc(apiItem.api_params), ...dynamicParams, ...(params ? dynamicParams : {}) }
            return { method: apiItem.api_method, url: apiItem.api_url, path: apiItem.api_https, params: finalParams }
        })
        getApiDataParams(mapping)
    }

    const getApiDataParams = async (mapping) => {
        let data = {}
        const api = await axiosFor(mapping)
        page.api.forEach((v, i) => {
            const [err, res] = api[i]
            data[v.api_name] = err ? undefined : res
            if (err) notification.error({ title: '接口请求失败!', description: `${v.api_url} 接口请求失败` })
        })
        setUrlData(data)
    }



    const setPAGEDate = e => {
        const { api = [], layout = [], params = {}, window = {} } = e
        getApiData()
        setApiData(api)
        setLayoutData(layout)
        setWindowData(window)
        setParamsData(params)
    }

    const getData = async () => {
        const { uuid } = await GetIndexedDB('config')
        const [err, res] = await axios({ method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${uuid}/STA_PAGE/${page.path}` } })
        if (err) return console.log(err)
        setPAGEDate(await Decrypt(res))
    }
    const setData = async e => {
        console.log('[--保存lay页面--]', e)
        const { uuid } = await GetIndexedDB('config')
        const params = { uuid: `${uuid}/STA_PAGE/${e.path}`, content: JSON.stringify(await Encrypt(e)) }
        const [err] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (err) return console.log(err)
        LayoutEvent.emit({ type: 'setCurrent', data: e })
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
        setParamsData(e => ({ ...e, [uuid]: PageLayoutWindowDetailsStyle }))
    }

    // 保存布局
    const onSaveLayout = () => {
        setData({ ...page, api: ApiData, layout: LayoutData, window: WindowData, params: ParamsData })
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
                formItem: 'StartWindowFormList',
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
        updateModel5({ title: '模块选择', type: 'LayoutTemplate', width: 900, Event: LayoutEvent, modelData: { layId: data } })
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
            }
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

    const startCallBack = e => {
        const { type, data } = e
        port && console.log('PAGE', e)
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
            ['setInternalRouting', () => console.log('站内路由', data)],
            ['onAPIParamsSelect', () => getApiData(data)],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    LayoutEvent.useSubscription(startCallBack)

    useEffect(() => { setPAGEDate(page) }, [pathname])

    if (page) {
        const { page_layPadding, page_fold, page_diff, page_back } = page
        const pageStyle = { padding: SpacingCallBack(page_layPadding) }

        return (
            <div className='MenuTypeLay_Content' style={pageStyle}>
                {(() => {
                    if (page_fold) {
                        const { fold_position, fold_left, fold_right, fold_top, fold_bottom, fold_width, fold_height, fold_url,
                            fold_open, fold_off, fold_titleColor, fold_titleDeg, fold_titleSize, fold_titleFamily, fold_titleWeight,
                            fold_titleStyle, fold_shadow, fold_filterSize, fold_filterColor, fold_padding
                        } = page

                        const foldStyle = { width: fold_width, height: fold_height }

                        const textStyle = {
                            padding: SpacingCallBack(fold_padding),
                            '--titleColor': ColorCallBack(fold_titleColor, fold_titleDeg),
                            fontSize: fold_titleSize,
                            fontFamily: fold_titleFamily,
                            fontWeight: fold_titleWeight,
                            fontStyle: fold_titleStyle,
                            filter: SetFilderParams(fold_shadow, fold_filterSize, fold_filterColor),
                        }
                        if (fold_position === 'leftTop') {
                            foldStyle.left = fold_left
                            foldStyle.top = fold_top
                        }
                        if (fold_position === 'leftBtm') {
                            foldStyle.left = fold_left
                            foldStyle.bottom = fold_bottom
                        }
                        if (fold_position === 'rightTop') {
                            foldStyle.right = fold_right
                            foldStyle.top = fold_top
                        }
                        if (fold_position === 'rightBtm') {
                            foldStyle.right = fold_right
                            foldStyle.bottom = fold_bottom
                        }
                        return (
                            <div className='FoldContent' style={foldStyle} onClick={() => setFoldStatus(e => (!e))}>
                                <img src={fold_url} alt="" />
                                <div style={textStyle}>{FoldStatus ? fold_off : fold_open}</div>
                            </div>
                        )
                    }
                })()}
                <Dropdown
                    trigger={['contextMenu']}
                    menu={{ items: (port && LayoutStatus) ? GlobalOperation({ LayoutEvent }) : [] }}
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
                                            window_title, window_style,
                                            window_backColor, window_backDeg, window_padding, window_radius,
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
                                            background: ColorCallBack(window_backColor, window_backDeg),
                                            padding: SpacingCallBack(window_padding),
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

                                        const setClass = page_fold ? 'animate__animated ' : ''


                                        return (
                                            <div key={item.i} className='WindowBox'>
                                                <Dropdown
                                                    trigger={['contextMenu']}
                                                    menu={{
                                                        items: (port && LayoutStatus) ?
                                                            GlobalOperation({ type: 'window', winId: item.i, LayoutEvent }) : []
                                                    }}
                                                >
                                                    <div className={`WindowItem ${LayoutStatus ? 'Edit' : 'Preview'}`} onContextMenu={(e) => e.stopPropagation()}>
                                                        {window_style === 'DIY' ?
                                                            <div className={`WindowContent ${setClass}`} style={style}>
                                                                {LayoutStatus && <div className='SCALE'>window : {item.w}*{item.h}</div>}
                                                                {window_title && <div className='WindowTitle' style={titleStyle} >{window_titleTxt}</div>}
                                                                <div className='WindowNavSwiper' style={{ flexDirection: window_NavType === 'vertical' ? 'row' : 'column' }}>
                                                                    <SwiperTemplate
                                                                        data={item}
                                                                        status={LayoutStatus}
                                                                        params={ParamsData}
                                                                        winData={WindowData}
                                                                        LayoutEvent={LayoutEvent}
                                                                        UrlData={UrlData}
                                                                    />
                                                                </div>
                                                            </div> :
                                                            <WinTemplate Config={{ ...data, ...ParamsData[item.i], setClass }} >
                                                                <div className='WindowContent' >
                                                                    {LayoutStatus && <div className='SCALE'>window : {item.w}*{item.h}</div>}
                                                                    <div className='WindowNavSwiper' style={{ flexDirection: window_NavType === 'vertical' ? 'row' : 'column' }}>
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
                                                            </WinTemplate>
                                                        }
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

                {port &&
                    <FloatButton
                        icon={<AlertOutlined />}
                        type={LayoutStatus ? 'primary' : 'default'}
                        style={{ insetInlineEnd: 94 }}
                        onClick={() => setLayoutStatus(e => (!e))}
                    />
                }
            </div>
        )
    }
};

export default PageTemplate;