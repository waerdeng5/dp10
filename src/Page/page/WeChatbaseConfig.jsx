import './WeChatbaseConfig.scss'
import dayjs from 'dayjs'

import { Segmented, App } from 'antd'
import { useEffect, useState } from 'react'
import { useInterval, useMount, useEventEmitter, useReactive } from 'ahooks'

import { axios } from '../../Utils/Api'


import { ICONMapping } from '../../Config/IconMapping'
import { Encrypt, Decrypt } from '../../Utils/IndexedDB'

import { DevScrollView } from '../../Temp/DevTemplate'
import FormTemplate from '../../Utils/FormTemplate'
import { WeChatFormConfig } from '../../Config/wechatForm'

import WeChatHome from '../../Temp/WeChatHome'
import { WechatLoginA01, WechatLoginA02, WechatLoginA03, WechatLoginA04 } from '../../Temp/WechatLogin'
import { WeChatTabBarA01, WeChatTabBarA02, WeChatTabBarA03, WeChatTabBarA04 } from '../../Temp/WechatTabBar'
import { ColorCallBack, SpacingCallBack, SetFilderParams, isEmptyObject } from '../../Utils'
import { LeftOutlined, HomeOutlined, SearchOutlined, CloseCircleFilled } from '@ant-design/icons'

// 引入首页配置项






const httpPath = 'https://common-api.ljkjkf.com/'

const GetConfig = { method: 'get', url: 'wechats/GetJsonInfoByUuid', path: httpPath, params: { uuid: `PARGET/WeChate` } }
const PostConfig = { method: 'post', url: 'wechats/SaveJsonInfoByUuid', path: httpPath, params: { uuid: `PARGET/WeChate`, content: {} } }

const GetHomeConfig = { method: 'get', url: 'dictionary/GetJsonInfoByUuid', params: { uuid: `WeChat/home` } }
const PostHomeConfig = { method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params: { uuid: `WeChat/home`, content: {} } }


const pageMapping = {
    login: { title: '登录设置', formItem: WeChatFormConfig.WeChatLoginFormList },
    home: { title: '首页设置', formItem: WeChatFormConfig.WeChatHomeFormList },
    page: { title: '页面设置', formItem: WeChatFormConfig.WeChatPageFormList }
}

const SegmentedOptions = [
    { value: 'login', tooltip: { title: '登录设置', color: '#08979c' }, label: (<div>{ICONMapping['fasDoorOpen']}<div>登录</div></div>) },
    { value: 'home', tooltip: { title: '首页设置', color: '#c41d7f' }, label: (<div>{ICONMapping['fasHome']}<div>首页</div></div>) },
    { value: 'page', tooltip: { title: '页面设置', color: '#722ed1' }, label: (<div>{ICONMapping['fasMagic']} <div>页面</div></div>) },
]


// TODO 头部渲染
const WechatTopBar = ({ page, data }) => {
    // 时间处理
    const [Date, setDate] = useState(dayjs().format('HH:mm'))
    const clearInterval = useInterval(() => setDate(dayjs().format('HH:mm')), 30000)
    useEffect(() => { return () => { clearInterval() } }, [])
    const { navigationStyle,
        header_back, header_backDeg, header_color, header_deg, header_size, header_famity,
        header_text, header_weight, header_style, header_filed, header_filed_size, header_filed_color,
        header_icon_backColor, header_icon_size, header_capsule_back, header_capsule_border, header_icon_homeColor, header_icon_homeSize,
        header_searchIcon_color, header_searchIcon_size, header_clearIcon_color, header_clearIcon_size, header_input_placeholder,
        header_input_back, header_input_border, header_input_height, header_input_radius, header_image_url,
        header_input_size, header_input_color, header_input_famity, header_input_weight, header_input_style,
        header_image_width, header_image_height, header_image_filed, header_image_size, header_image_color
    } = data[page]

    const topStyle = { background: ColorCallBack(header_back, header_backDeg) }
    const titleStyle = {
        '--titleColor': ColorCallBack(header_color, header_deg),
        fontSize: `${header_size}px`,
        fontFamily: header_famity,
        fontWeight: header_weight,
        fontStyle: header_style,
        filter: SetFilderParams(header_filed, header_filed_size, header_filed_color)
    }

    const backIcon = {
        fontSize: header_icon_size,
        color: header_icon_backColor
    }

    const capsuleStyle = {
        background: header_capsule_back,
        borderColor: header_capsule_border,
    }

    const homeStyel = {
        fontSize: header_icon_homeSize,
        color: header_icon_homeColor,
    }

    const searchIcon = {
        fontSize: header_searchIcon_size,
        color: header_searchIcon_color,
    }

    const clearIcon = {
        fontSize: header_clearIcon_size,
        color: header_clearIcon_color,
    }

    const searchStyle = {
        background: header_input_back,
        borderColor: header_input_border,
        height: header_input_height,
        borderRadius: header_input_radius
    }

    const searchText = {
        color: header_input_color,
        fontSize: header_input_size,
        fontFamily: header_input_famity,
        fontWeight: header_input_weight,
        fontStyle: header_input_style,
        height: header_input_height,
        lineHeight: header_input_height + 'px',
    }

    const imageStyle = {
        width: header_image_width,
        height: header_image_height,
        filter: SetFilderParams(header_image_filed, header_image_size, header_image_color)
    }

    return (
        <>
            <div className='sysTop' >
                <div>{Date}</div>
                <div />
                <div>{ICONMapping['fasWifi']}{ICONMapping['fasBatteryFull']}</div>
            </div>
            <div className='sysBtm'>
                <div />
            </div>
            <div className='capsule'>
                {ICONMapping['fasEllipsisH']}
                {ICONMapping['farDotCircle']}
            </div>
            {navigationStyle === 'A02' &&
                <div className='sysHeader A02' style={topStyle}>
                    <div className='title' style={titleStyle}>{header_text}</div>
                </div>
            }
            {navigationStyle === 'A03' &&
                <div className='sysHeader A03' style={topStyle}>
                    <LeftOutlined style={backIcon} />
                    <div className='title' style={titleStyle}>{header_text}</div>
                </div>}
            {navigationStyle === 'A04' &&
                <div className='sysHeader A04' style={topStyle}>
                    <div className='capsule' style={capsuleStyle}>
                        <LeftOutlined style={backIcon} />
                        <HomeOutlined style={homeStyel} />
                    </div>
                    <div className='title' style={titleStyle}>{header_text}</div>
                </div>
            }
            {navigationStyle === 'A05' &&
                <div className='sysHeader A05' style={topStyle}>
                    <div className='title' style={titleStyle}>{header_text}</div>
                </div>
            }
            {navigationStyle === 'A06' &&
                <div className='sysHeader A06' style={topStyle}>
                    <div className='search' style={searchStyle}>
                        <SearchOutlined style={searchIcon} />
                        <div style={searchText}>{header_input_placeholder}</div>
                        <CloseCircleFilled style={clearIcon} />
                    </div>
                </div>
            }
            {navigationStyle === 'A07' &&
                <div className='sysHeader A07' style={topStyle}>
                    <img className='image' style={imageStyle} src={header_image_url} alt="" />
                </div>
            }
        </>
    )
}

// TODO 表单渲染
const WeChatForm = ({ page, FormEvent, Initial, LOGIN, HOME }) => {
    if (page === 'login' && LOGIN) return (
        <FormTemplate
            formItem={pageMapping[page].formItem}
            FORMEVENT={FormEvent}
            Initial={Initial[page]}
            NotLoading
        />
    )
    if (page === 'home' && HOME) return (
        <FormTemplate
            formItem={pageMapping[page].formItem}
            FORMEVENT={FormEvent}
            Initial={Initial[page]}
            NotLoading
        />
    )
}


const ContentTemplate = ({ page, data, FormEvent }) => {
    if (page === 'login' && !isEmptyObject(data[page])) {
        const logMapping = { A01: WechatLoginA01, A02: WechatLoginA02, A03: WechatLoginA03, A04: WechatLoginA04 }
        const { loginTemp } = data[page]
        const LoginTemp = logMapping[loginTemp]
        if (LoginTemp) return <LoginTemp data={data[page]} />
    }
    if (page === 'home' && !isEmptyObject(data[page])) {
        const tabMapping = { A01: WeChatTabBarA01, A02: WeChatTabBarA02, A03: WeChatTabBarA03, A04: WeChatTabBarA04 }
        const { homeTabBarType } = data[page]
        const TabTemplate = tabMapping[homeTabBarType]
        return (
            <div className='HOME_PAGE'>
                <WeChatHome data={data[page]} FormEvent={FormEvent} />
                {TabTemplate && <TabTemplate data={data[page]} FormEvent={FormEvent} />}
            </div>
        )
    }
    if (page === 'page' && !isEmptyObject(data[page])) {
        return (
            <div>渲染页面</div>
        )
    }
}



const WeChatbaseConfig = () => {
    const { message, modal, notification } = App.useApp();
    const FormEvent = useEventEmitter()
    const [page, setPage] = useState('home')
    const [menu, setMenu] = useState([])

    const [LOGIN, setLOGIN] = useState(false)
    const [HOME, setHOME] = useState(false)

    const WeChatInit = useReactive({ login: {}, home: {}, page: {} })


    // 获取登录页面配置
    const getLoginData = async () => {
        const [err, res] = await axios(GetConfig)
        if (err) console.log('小程序登录页面获取失败!')
        WeChatInit.login = res || {}
        setLOGIN(true)
    }
    // 获取小程序首页配置
    const getWeChatHomeData = async () => {
        const [err, res] = await axios(GetHomeConfig)
        if (err) console.log('小程序首页获取失败!')
        WeChatInit.home = res || {}
        const [menuErr, menuRes] = await axios({ method: 'get', url: 'weChatMenu' })
        if (menuErr) return console.log('小程序菜单获取失败!')
        const [{ children }] = menuRes.data.list
        const menu = children.map(v => ({ uuid: v.uuid, tableName: v.tableName }))
        if (WeChatInit.home.tabBarList) {
            const result = menu.map(configItem => {
                const dataItem = WeChatInit.home.tabBarList.find(item => item.uuid === configItem.uuid)
                return dataItem ? { ...dataItem } : { ...configItem }
            })
            WeChatInit.home.tabBarList = result
            setHOME(true)
        } else {
            WeChatInit.home.tabBarList = menu
            setHOME(true)
        }
    }

    const setLoaginData = async () => {
        PostConfig.params.content = JSON.stringify(WeChatInit.login)
        const [err, res] = await axios(PostConfig)
        if (err) return notification.error({ key: 'weChat', title: '保存失败!', description: '登录页面设置失败!' })
        notification.success({ key: 'weChat', title: '保存成功!', description: '全项目小程序登录页设置成功!' })
    }

    const setHomeData = async () => {
        PostHomeConfig.params.content = JSON.stringify(WeChatInit.home)
        const [err, res] = await axios(PostHomeConfig)
        if (err) return notification.error({ key: 'weChat', title: '保存失败!', description: '首页页面设置失败!' })
        notification.success({ key: 'weChat', title: '保存成功!', description: '小程序首页设置成功!' })
    }

    const onSegmentedChange = (e) => {
        setPage(e)
    }

    useMount(() => {
        getLoginData()
        getWeChatHomeData()
    })

    const formCallBack = (e) => {
        const { type, data } = e
        // console.log(e)
        const Mapping = new Map([
            ['onDetection', () => {
                const [keys] = Object.keys(data)
                const [values] = Object.values(data)
                WeChatInit[page][keys] = values
                // console.log('WeChatInit', WeChatInit[page])

            }],
            ['onFormBack', () => {
                WeChatInit[page] = data
                if (page === 'login') setLoaginData()
                if (page === 'home') setHomeData()
            }],
            ['onSaveHome', () => {
                WeChatInit.home.pageConfig = data
                setHomeData()
            }]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    FormEvent.useSubscription(formCallBack)


    return (
        <div className='WeChatbaseConfig'>
            <div className='simulator'>
                <div className='option'>
                    <Segmented block value={page} options={SegmentedOptions} onChange={onSegmentedChange} />
                </div>
                <div className='box'>
                    <WechatTopBar page={page} data={WeChatInit} />
                    <div className='content'>
                        <ContentTemplate page={page} data={WeChatInit} FormEvent={FormEvent} />
                    </div>
                </div>
            </div>
            <div className='options'>
                <div className='title'>{pageMapping[page].title}</div>
                {page === 'login' && <WeChatForm page={page} FormEvent={FormEvent} Initial={WeChatInit} LOGIN={LOGIN} />}
                {page === 'home' && <WeChatForm page={page} FormEvent={FormEvent} Initial={WeChatInit} HOME={HOME} />}
            </div>
        </div>
    );
};

export default WeChatbaseConfig;