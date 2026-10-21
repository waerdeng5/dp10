import './WeChat.scss'
import dayjs from 'dayjs'
import { Icon } from 'tdesign-icons-react'
import { useEffect, useState } from 'react'
import { useEventEmitter } from 'ahooks'
import { App, Button, Spin, Result, Tree, Skeleton, Divider, Dropdown } from 'antd'

import { CommonAPIUrl } from '../../Config'
import { axios, axiosFor } from '../../Utils/Api'
import { modelStore } from '../../Router/zustand'
import FormTemplate from '../../Utils/FormTemplate'

import { ICONMapping } from '../../Config/IconMapping'
import { DevScrollView } from '../../Temp/DevTemplate'
import { WeChatFormConfig } from '../../Config/wechatForm'
import { Encrypt, Decrypt, GetIndexedDB } from '../../Utils/IndexedDB'
import { ColorCallBack, SetFilderParams, SpacingCallBack, UnitCallBackStruct, filterTree } from '../../Utils'


import { WeChatDropdownMenu, WeChatPageTemp, WeChatNavBarTemp, WeChatTabsTemp, WeChatSideBarTemp } from '../../Temp/WeChatLayout'



const PageMapping = {
    A01: WeChatPageTemp,
    A02: WeChatNavBarTemp,
    A03: WeChatTabsTemp,
    A04: WeChatSideBarTemp,
}


const { port } = window.location

// TODO 通用背景图层
const BackLayerTemp = ({ data }) => {
    const { position, topUnit, top, lefUnit, lef, btmUnit, btm, rigUnit, rig,
        widthUnit, width, heightUnit, height, backRadio, backType, color_back, color_deg, image_url, image_mode
    } = data

    const Style = {
        ...UnitCallBackStruct(widthUnit, width, 'width'),
        ...UnitCallBackStruct(heightUnit, height, 'height'),
        borderRadius: SpacingCallBack(backRadio),
    }

    const positionMap = {
        'top-left': { top: top, right: null, bottom: null, left: lef, topUnit: topUnit, leftUnit: lefUnit },
        'top-right': { top: top, right: rig, bottom: null, left: null, topUnit: topUnit, rightUnit: rigUnit },
        'bottom-left': { top: null, right: null, bottom: btm, left: lef, bottomUnit: btmUnit, leftUnit: lefUnit },
        'bottom-right': { top: null, right: rig, bottom: btm, left: null, bottomUnit: btmUnit, rightUnit: rigUnit },
    };

    const posConfig = positionMap[position];
    Object.entries(posConfig).forEach(([key, value]) => {
        if (value !== null) {
            if (key.endsWith('Unit')) return
            const unitKey = key + 'Unit'
            const unit = posConfig[unitKey]
            Style[key] = unit === 'pct' ? `${value}%` : value + unit
        }
    })

    if (backType === 'A01') Style.background = ColorCallBack(color_back, color_deg)

    return (
        <div style={Style} className='BackLayerTemp'>
            {backType === 'A02' && <img className='BackLayerTempImage' src={image_url} alt="" />}
        </div>
    )
}

// TODO 通用头部设置
const SimulatorTopTemp = ({ formData }) => {
    const centerTitle = ['A02', 'A04']
    const backgroundStyle = { background: ColorCallBack(formData.header_back, formData.header_backDeg) }
    const titleStyle = {
        '--color': ColorCallBack(formData.header_color, formData.header_deg),
        fontSize: formData.header_size,
        fontFamily: formData.header_famity,
        fontWeight: formData.header_weight,
        fontStyle: formData.header_style,
        filter: SetFilderParams(formData.header_filed, formData.header_filed_size, formData.header_filed_color),
    }

    const backIconStyle = {
        color: formData.header_backColor,
        fontSize: formData.header_backSize,
        padding: SpacingCallBack(formData.header_backPadding),
    }

    const capsuleStyle = {
        background: formData.header_capsule_back,
        '--border': formData.header_capsule_border,
    }
    const capsuleLeftStyle = {
        color: formData.header_icon_left_color,
        fontSize: formData.header_icon_left_size
    }

    const capsuleRightStyle = {
        color: formData.header_icon_right_color,
        fontSize: formData.header_icon_right_size
    }

    const imageStyle = {
        width: formData.header_image_width,
        height: formData.header_image_height,
        filter: SetFilderParams(formData.header_image_filed, formData.header_image_size, formData.header_image_color),
    }

    const searchBackStyle = {
        background: formData.header_input_back,
        '--border': formData.header_input_border,
        height: formData.header_input_height,
        borderRadius: formData.header_input_height / 2,
    }

    const searchIconStyle = {
        color: formData.header_searchIcon_color,
        fontSize: formData.header_searchIcon_size,
    }
    const searchCloseStyle = {
        color: formData.header_clearIcon_color,
        fontSize: formData.header_clearIcon_size,
    }
    const searchInputStyle = {
        color: formData.header_input_color,
        fontSize: formData.header_input_size,
        lineHeight: formData.header_input_size + 'px',
        fontFamily: formData.header_input_famity,
        fontWeight: formData.header_input_weight,
        fontStyle: formData.header_input_style,
    }





    return (
        <div className='SimulatorTopTemp' style={backgroundStyle}>
            <div className='system' />
            <div className='topBox'>
                {centerTitle.includes(formData.navigationStyle) ?
                    <>
                        {formData.navigationStyle === 'A02' ?
                            <div className='centerTitleBox'>
                                <div className='back' style={backIconStyle}>
                                    {formData.header_backStatus && <Icon name={formData.header_backICON} />}
                                </div>
                                <div className='title' style={titleStyle}>{formData.header_text}</div>
                            </div> :
                            <div className='centerTitleBox' >
                                <div className='capsule' style={capsuleStyle}>
                                    <div className='left' style={capsuleLeftStyle}>
                                        <Icon name={formData.header_icon_left} />
                                    </div>
                                    <div className='right' style={capsuleRightStyle}>
                                        <Icon name={formData.header_icon_right} />
                                    </div>
                                </div>
                                <div className='title' style={titleStyle}>{formData.header_text}</div>
                            </div>
                        }
                    </> :
                    <div className='leftTitleBox'>
                        {formData.header_backStatus &&
                            <div className='back' style={backIconStyle}>
                                <Icon name={formData.header_backICON} />
                            </div>
                        }
                        {formData.navigationStyle === 'A05' &&
                            <div className='title' style={titleStyle}>{formData.header_text}</div>
                        }
                        {formData.navigationStyle === 'A06' &&
                            <div className='search' style={searchBackStyle}>
                                <div className='icon' style={searchIconStyle}><Icon name='ai-search' /></div>
                                <div className='input' style={searchInputStyle}>模拟输入</div>
                                <div className='close' style={searchCloseStyle}><Icon name='close-circle-filled' /></div>
                            </div>
                        }
                        {formData.navigationStyle === 'A07' &&
                            <img style={imageStyle} src={formData.header_image_url} alt="" />
                        }
                    </div>
                }







                {/* 正常标头 */}
                {/* 左侧标头 */}
                {/* 双胶囊头 */}
                {/* 搜索标头 */}
                {/* 图片标头 */}
            </div>
        </div>
    )
}
// TODO 模拟器布局
const SimulatorLayout = ({ formData, WeChatEvent }) => {
    const { updateModel } = modelStore()
    const [Template, setTemplate] = useState()

    const onPageConfig = () => {
        updateModel({
            title: '页面布局配置',
            type: 'CommonForm',
            Event: WeChatEvent,
            modelData: { formItem: 'PageTempConfig', eventBack: 'onPageConfigBack', Initial: { ...formData.pageConfig, uuid: formData.uuid } }
        })
    }

    // useEffect(() => {
    //     if (formData.pageConfig) {
    //         const Template = PageMapping[formData.pageConfig.pageType]
    //         console.log(Template)
    //         setTemplate(Template)
    //     }
    // }, [formData])

    const clickCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onPageConfig', onPageConfig],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    WeChatEvent.useSubscription(clickCallBack)
    return (
        <Dropdown menu={{ items: WeChatDropdownMenu({ WeChatEvent }) }} trigger={['contextMenu']}>
            <div className='pageContent'>
                {(() => {
                    if (formData.pageConfig) {
                        const Template = PageMapping[formData.pageConfig.pageType]
                        return (<Template data={formData} WeChatEvent={WeChatEvent} />)
                    }
                })()}
            </div>
        </Dropdown>
    )
}


// TODO 模拟器
const Simulator = ({ formData, WeChatEvent }) => {
    return (
        <div className='Simulator'>
            <div className='system'>
                <div className='top'>
                    <div className='date'>{dayjs().format('HH:mm')}</div>
                    <div className='shadow' />
                    <div className='icon'>{ICONMapping['fasWifi']} {ICONMapping['fasBatteryFull']}</div>
                </div>
                <div className='opt'>{ICONMapping['fasEllipsisH']}<Divider orientation="vertical" />{ICONMapping['farDotCircle']}</div>
                <div className='btm'><div /></div>
            </div>
            {formData ?
                <div className='pageBox'>
                    {formData.navigationStyle !== 'A01' && <SimulatorTopTemp formData={formData} />}
                    {formData?.pageBackConfig?.map((v, i) => <BackLayerTemp key={i} data={v} />)}
                    <SimulatorLayout WeChatEvent={WeChatEvent} formData={formData} />
                </div> :
                <div className='pageEmpty'><Spin /></div>
            }
        </div>
    )
}


const WeChat = () => {
    const { message, modal, notification } = App.useApp()
    const { updateModel } = modelStore()
    const WeChatEvent = useEventEmitter()
    const [UUID, setUUID] = useState('')
    const [CONFIG, setCONFIG] = useState({})
    const [MENU, setMENU] = useState()
    const [MENUSelect, setMENUSelect] = useState('10000000-0000-0000-0000-000000000000')
    const [FormData, setFormData] = useState()
    const [STATUS, setSTATUS] = useState({ loading: true, status: false })

    const onGetInit = async () => {
        const [conErr, conRes] = await axios({ method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `common/WeChate` } })
        if (conErr) return console.log('公共文件获取失败')
        const commonData = await Decrypt(conRes)
        const { uuid } = await GetIndexedDB('config')
        setUUID(uuid)
        setCONFIG(commonData)
        setSTATUS({ loading: false, status: !!commonData[uuid] })
        if (!!commonData[uuid]) {
            const [menuErr, menuRes] = await axios({ method: 'get', url: 'weChatMenu', params: { PageIndex: 1, PageSize: 100000 } })
            if (menuErr) return console.log(menuErr)
            const menuData = filterTree(menuRes.data.list, 'type', 'power')
            setMENU(menuData)
            setFormData(commonData[uuid])
        }
    }

    const FormItem = (key) => {
        switch (key) {
            case '10000000-0000-0000-0000-000000000000': return WeChatFormConfig.WeChatProjectForm
            case '20000000-0000-0000-0000-000000000000': return WeChatFormConfig.WeChatLoginForm
            case '30000000-0000-0000-0000-000000000000': return WeChatFormConfig.WeChatHomeForm
            default: return WeChatFormConfig.WeChatPageForm
        }
    }

    const onInit = () => {
        updateModel({
            title: '基础信息',
            type: 'CommonForm',
            Event: WeChatEvent,
            width: 640,
            height: 640,
            modelData: { formItem: 'WeChatProjectForm', eventBack: 'onInitConfig', Initial: { uuid: UUID } }
        })
    }

    const onInitConfig = async (data) => {
        CONFIG[data.uuid] = data
        const params = { uuid: `common/WeChate`, content: JSON.stringify(await Encrypt(CONFIG)) }
        const [err, res] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (err) return console.log(err)
        onGetInit()
        notification.success({ title: '保存成功!', key: 'weChat' })
    }

    const onPageInit = async (data) => {
        const { uuid } = data
        const params = { uuid: `${UUID}/WeChat/${uuid}`, content: JSON.stringify(await Encrypt(data)) }
        const [err, res] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (err) return console.log(err)
        notification.success({ title: '保存成功!', key: 'weChat' })
        setFormData(data)
    }

    const onGetItem = async (uuid) => {
        setFormData(() => null)
        const [err, res] = await axios({ method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${UUID}/WeChat/${uuid}` } })
        if (err) {
            return notification.info({
                title: '未找到对应文件',
                description: "检测网络状态或重新生成",
                key: 'wechat',
                duration: false,
                btn: (port && <Button type="link" onClick={() => onPageInit({ uuid })}>生成文件</Button>)
            })
        }
        setFormData(await Decrypt(res))
    }

    const onSelect = (e) => {
        if (e.length === 0) return
        const [uuid] = e
        setMENUSelect(uuid)
        if (uuid !== '10000000-0000-0000-0000-000000000000') onGetItem(uuid)
        else setFormData(CONFIG[UUID])
    }

    const onFormBack = (e) => {
        if (MENUSelect === '10000000-0000-0000-0000-000000000000') onInitConfig(e)
        else onPageInit(e)
    }

    const onPageConfigBack = (e) => {
        const data = JSON.parse(JSON.stringify(FormData))
        data.pageConfig = e
        setFormData(data)
        onPageInit(data)
        updateModel({})
    }

    const weChatCallBack = (e) => {
        const { type, data } = e
        console.log('[--weChatCallBack--]', e)
        const Mapping = new Map([
            ['onInitConfig', () => onInitConfig(data)],
            ['onFormBack', () => onFormBack(data)],
            ['onPageConfigBack', () => onPageConfigBack(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    WeChatEvent.useSubscription(weChatCallBack)

    useEffect(() => { onGetInit() }, [])
    if (STATUS.loading) {
        return <div className='WeChatPage Loading'> <Spin /></div>
    }
    if (!STATUS.status) {
        return (
            <div className='WeChatPage Error'>
                <Result status="404" title="未检测到配置文件" extra={port && <Button type="primary" onClick={onInit}>生成配置</Button>} />
            </div>
        )
    }

    return (
        <div className='WeChatPage'>
            <div className='WeChatPage_menu'>
                {MENU &&
                    <DevScrollView>
                        <Tree
                            blockNode
                            defaultExpandAll
                            treeData={MENU}
                            selectedKeys={[MENUSelect]}
                            onSelect={onSelect}
                            fieldNames={{ key: 'uuid' }}
                            titleRender={e => {
                                return (
                                    <div className='WeChatPage_menu_item'>
                                        {e.tableName}
                                    </div>
                                )
                            }}
                        />
                    </DevScrollView>
                }
            </div>
            {!MENUSelect.includes('10000000-0000-0000-0000-000000000000') &&
                <div className='WeChatPage_page'>
                    <Simulator uuid={UUID} pageUuid={MENUSelect} formData={FormData} WeChatEvent={WeChatEvent} />
                </div>
            }
            <div className='WeChatPage_form'>
                {FormData ?
                    <FormTemplate
                        formItem={FormItem(MENUSelect)}
                        FORMEVENT={WeChatEvent}
                        Initial={FormData}
                        NotLoading
                    /> :
                    <Skeleton active />
                }
            </div>
        </div>
    )
}

export default WeChat;