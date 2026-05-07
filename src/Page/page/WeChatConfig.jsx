import './WeChatConfig.scss'
import dayjs from 'dayjs'
import { v4 } from 'uuid'

import { useEffect, useState } from 'react'
import { Segmented, App, Tree, Button, Popconfirm, Spin, Result, Tooltip } from 'antd'
import { useInterval, useMount, useEventEmitter, useReactive } from 'ahooks'
import { EditOutlined, PlusOutlined, SaveOutlined, DeleteOutlined, BarsOutlined, LeftOutlined, HomeOutlined, SearchOutlined, CloseCircleFilled } from '@ant-design/icons'

import { axios, axiosFor } from '../../Utils/Api'
import { modelStore } from '../../Router/zustand'
import FormTemplate from '../../Utils/FormTemplate'
import { DevScrollView } from '../../Temp/DevTemplate'
import { ICONMapping } from '../../Config/IconMapping'

import { WeChatFormConfig } from '../../Config/wechatForm'
import { WeChatFormInit } from '../../Config/wechatDefault'

import { WechatLoginA01, WechatLoginA02, WechatLoginA03, WechatLoginA04 } from '../../Temp/WechatLogin'
import { WeChatTabBarA01, WeChatTabBarA02, WeChatTabBarA03, WeChatTabBarA04 } from '../../Temp/WechatTabBar'

import {
    ColorCallBack,
    SpacingCallBack,
    SetFilderParams,
    isEmptyObject,
    onTreeDrop,
    replaceNodeByIdTwo,
    removeTreeByKey,
    findParentByChildPath,
    treeValue
} from '../../Utils'

const httpPath = 'https://common-api.ljkjkf.com/'
const initApi = [
    { method: 'get', url: 'wechats/GetJsonInfoByUuid', path: httpPath, params: { uuid: `PARGET/WeChate` } },
    { method: 'get', url: 'dictionary/GetJsonInfoByUuid', params: { uuid: `WeChat/config` } },
]
const PostConfig = { method: 'post', url: 'wechats/SaveJsonInfoByUuid', path: httpPath, params: { uuid: `PARGET/WeChate`, content: {} } }
const PostHomeConfig = { method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params: { uuid: `WeChat/config`, content: JSON.stringify({}) } }

const initMenu = '00000000-0000-0000-000000000000'

// TODO 菜单渲染
const MenuList = ({ data, HOME, Event }) => {
    const { message, modal, notification } = App.useApp()
    const { updateModel } = modelStore()
    const [TreeData, setTreeData] = useState(data)
    const [SELECT, setSELECT] = useState([])

    const { pageNavList } = HOME

    // 选中菜单
    const onMenuSelect = (e) => {
        const [uuid] = e
        setSELECT(e)
        Event.emit({ type: 'onMenuSelect', data: uuid })
    }
    // 新增菜单
    const onMenuAdd = () => {
        updateModel({
            title: '新增菜单',
            type: 'CommonForm',
            Event,
            width: 640,
            height: 400,
            modelData: { formItem: 'WeChatPageForm', eventBack: 'onMenuAdd' }
        })
    }
    // 修改菜单
    const onMenuModify = (e) => {
        updateModel({
            title: '修改菜单',
            type: 'CommonForm',
            Event,
            width: 640,
            height: 400,
            modelData: { formItem: 'WeChatPageForm', eventBack: 'onMenuModify', Initial: e }
        })
    }
    // 删除菜单
    const onMenuDelete = (uuid) => {
        const data = removeTreeByKey(TreeData, uuid)
        setTreeData([...data])
    }
    // 保存菜单
    const onMenuSave = () => Event.emit({ type: 'onMenuSave', data: TreeData })

    // 设置同级导航
    const onMenuSetNav = (e) => {
        const parentUuid = findParentByChildPath(TreeData, e.uuid)?.uuid
        if (!parentUuid) return notification.error({ key: 'init', title: '设置失败!', description: '小程序菜单结构错误!' })
        const InitNav = pageNavList[parentUuid] || { uuid: parentUuid }
        updateModel({
            title: '同级导航设置', type: 'CommonForm', Event,
            modelData: { formItem: 'WeChatPeerNav', eventBack: 'onMenuNav', Initial: InitNav }
        })
    }

    const menuCallBack = (e) => {
        // console.log(e)
        const { type, data } = e
        const Mapping = new Map([
            ['onMenuAdd', () => {
                setTreeData([...TreeData, { uuid: v4(), ...data }])
                updateModel({})
            }],
            ['onMenuModify', () => {
                const arr = replaceNodeByIdTwo(TreeData, data.uuid, data)
                setTreeData([...arr])
                updateModel({})
            }],
            ['onMenuNav', () => {
                const { uuid } = data
                HOME.pageNavList[uuid] = data
                Event.emit({ type: 'onMenuSetNav', data: HOME })
            }]
        ])

        const func = Mapping.get(type)
        func?.(data)
    }

    Event.useSubscription(menuCallBack)

    return (
        <div className='menuList'>
            <DevScrollView>
                <Tree
                    fieldNames={{ key: 'uuid' }}
                    defaultExpandAll
                    blockNode
                    draggable
                    onDrop={e => setTreeData(onTreeDrop(e, TreeData, 'uuid'))}
                    treeData={TreeData}
                    selectedKeys={SELECT}
                    onSelect={(e) => {
                        if (e.length === 0) return
                        onMenuSelect(e)
                    }}
                    titleRender={e => {
                        const { uuid, title, children } = e
                        const init = uuid === initMenu
                        return (
                            <div key={uuid} className='TreeItem'>
                                <div className='title'>{title}</div>
                                {!init &&
                                    <div className='operation'>
                                        <Tooltip title="添加同组导航">
                                            <Button type='link' onClick={() => onMenuSetNav(e)} icon={<BarsOutlined />} />
                                        </Tooltip>
                                        <Button type='link' onClick={() => onMenuModify(e)} icon={<EditOutlined />} />
                                        <Popconfirm
                                            title="删除提醒!"
                                            description="确认删除菜单吗？"
                                            onConfirm={() => onMenuDelete(uuid)}
                                            okText="删除"
                                            cancelText="取消"
                                        >
                                            <Button danger type='link' icon={<DeleteOutlined />} disabled={children && children.length !== 0} />
                                        </Popconfirm>
                                    </div>
                                }
                            </div>
                        )
                    }}
                />
            </DevScrollView>
            <div className='btn'>
                <Button icon={<PlusOutlined />} onClick={onMenuAdd}>新增页面</Button>
                <Button icon={<SaveOutlined />} type='primary' onClick={onMenuSave}>保存菜单</Button>
            </div>
        </div>
    )
}

// TODO 头部渲染
const WechatTopBar = ({ menu, SIGN, HOME, Event }) => {
    const [Date, setDate] = useState(dayjs().format('HH:mm'))
    const clearInterval = useInterval(() => setDate(dayjs().format('HH:mm')), 30000)
    useEffect(() => { return () => { clearInterval() } }, [])
    if (!menu) return false
    const config = initMenu === menu ? SIGN : HOME.pageHeader[menu]

    if (!config) return false

    const { navigationStyle,
        header_back, header_backDeg, header_color, header_deg, header_size, header_famity,
        header_text, header_weight, header_style, header_filed, header_filed_size, header_filed_color,
        header_icon_backColor, header_icon_size, header_capsule_back, header_capsule_border, header_icon_homeColor, header_icon_homeSize,
        header_searchIcon_color, header_searchIcon_size, header_clearIcon_color, header_clearIcon_size, header_input_placeholder,
        header_input_back, header_input_border, header_input_height, header_input_radius, header_image_url,
        header_input_size, header_input_color, header_input_famity, header_input_weight, header_input_style,
        header_image_width, header_image_height, header_image_filed, header_image_size, header_image_color
    } = config

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

// TODO 导航信息
const TabsTemplate = ({ data, HOME }) => {
    return (
        <div className='HOME_TAB'>头部导航</div>
    )
}

const TabBarTemplate = ({ menu, list, data }) => {
    const tabBarMapping = { A01: WeChatTabBarA01, A02: WeChatTabBarA02, A03: WeChatTabBarA03, A04: WeChatTabBarA04 }
    const { tabBar_type } = data
    const Template = tabBarMapping[tabBar_type]
    return <Template menu={menu} data={data} list={list} />
}

const ContentTemplate = ({ menu, SIGN, HOME, Event }) => {
    if (!menu) return (
        <div className='HOMEBOX'>
            <Result title="请先选择菜单  👉" />
        </div>
    )
    if (menu === initMenu) {
        const logMapping = { A01: WechatLoginA01, A02: WechatLoginA02, A03: WechatLoginA03, A04: WechatLoginA04 }
        const LoginTemp = logMapping?.[SIGN.loginTemp]
        if (LoginTemp) return <LoginTemp data={SIGN} />
        return <Spin />
    } else {
        const parentUuid = findParentByChildPath(HOME.menuList, menu)?.uuid
        return (
            <div className='HOMEBOX'>
                {parentUuid && HOME.pageNavList[parentUuid].navType === 'tabs ' &&
                    <TabsTemplate menu={menu} HOME={HOME} data={HOME.pageNavList[parentUuid]} list={treeValue(HOME.menuList, parentUuid)?.children || []} />
                }
                <div className='HOME_PAGE'> 内容页面 {menu} </div>
                {parentUuid && HOME.pageNavList[parentUuid].navType === 'tabBar' &&
                    <TabBarTemplate menu={menu} HOME={HOME} data={HOME.pageNavList[parentUuid]} list={treeValue(HOME.menuList, parentUuid)?.children || []} />
                }
            </div>
        )
    }
}

const FormDataTemp = ({ menu, SIGN, HOME, Event }) => {
    if (!menu) return (
        <div className='formData'>
            <Result title="👈 请先选择菜单" />
        </div>
    )
    const status = menu === initMenu

    if (status) return (
        <div className='formData'>
            <FormTemplate
                key={v4()}
                formItem={WeChatFormConfig.WeChatLoginFormList}
                FORMEVENT={Event}
                Initial={SIGN}
                NotLoading
            />
        </div>
    )
    const init = HOME.pageHeader[menu] || { uuid: menu }

    return (
        <div className='formData'>
            <FormTemplate
                key={v4()}
                formItem={WeChatFormConfig.WeChatPageFormList}
                FORMEVENT={Event}
                Initial={init}
                NotLoading
            />
        </div>
    )
}


const WeChatConfig = () => {
    const WeChatEvent = useEventEmitter()
    const { updateModel } = modelStore()
    const { message, modal, notification } = App.useApp()
    const [INIT, setINIT] = useState({ loading: true, status: true })

    const [SIGN, setSIGN] = useState()
    const [HOME, setHOME] = useState()
    const [MENU, setMENU] = useState([])
    const [SELECT, setSELECT] = useState()

    // 初始化数据
    const getInit = async () => {
        const [[comErr, comRes], [configErr, configRes]] = await axiosFor(initApi)
        if (comErr) return notification.error({ key: 'init', title: '获取失败!', description: '公共库小程序登录页设置获取失败!' })
        if (configErr) {
            setINIT({ loading: false, status: true })
            return notification.error({ key: 'init', title: '获取失败!', description: '未检测到项目配置信息!' })
        }
        setSIGN(comRes)
        setHOME(configRes)
        setINIT({ loading: false, status: false })
        setMENU(configRes.menuList)
    }

    // 生成配置文件
    const onAddPageConfig = async () => {
        PostHomeConfig.params.content = JSON.stringify(WeChatFormInit.WeChatInitProjectData)
        const [err, res] = await axios(PostHomeConfig)
        if (err) return notification.error({ key: 'init', title: '生成失败!', description: '项目配置文件生成失败!' })
        getInit()
    }

    // 保存配置文件
    const onSaveConfig = async () => {
        console.log('[-----------保存配置文件--------------]', HOME)
        PostHomeConfig.params.content = JSON.stringify(HOME)
        const [err, res] = await axios(PostHomeConfig)
        if (err) return notification.error({ key: 'init', title: '生成失败!', description: '项目配置文件生成失败!' })
        notification.success({ key: 'init', title: '保存成功!', description: '项目配置文件保存成功!' })
    }

    useMount(() => getInit())

    const weChatCallBack = (e) => {
        // console.log(e)
        const { type, data } = e
        const Mapping = new Map([
            ['onMenuSelect', () => setSELECT(data)],
            ['onMenuSave', () => {
                HOME.menuList = data
                onSaveConfig()
            }],
            ['onMenuSetNav', () => {
                setHOME(data)
                updateModel({})
            }],
            ['onFormBack', () => {
                if (SELECT === initMenu) {

                } else {
                    HOME.pageHeader[SELECT] = data
                    setHOME({ ...HOME })
                    onSaveConfig()
                }
            }]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    WeChatEvent.useSubscription(weChatCallBack)

    if (INIT.loading) return (
        <div className='WeChatConfig'>
            <Spin />
        </div>
    )
    if (INIT.status) return (
        <div className='WeChatConfig'>
            <Result
                status="404"
                title="未获取到配置文件"
                subTitle="请检查配置文件是否存在！"
                extra={<Button type="primary" key="console" onClick={onAddPageConfig}>生成配置文件</Button>}
            />
        </div>
    )

    return (
        <div className='WeChatConfig'>
            <div className='simulator'>
                <WechatTopBar menu={SELECT} SIGN={SIGN} HOME={HOME} Event={WeChatEvent} />
                <ContentTemplate menu={SELECT} SIGN={SIGN} HOME={HOME} Event={WeChatEvent} />
            </div>
            <MenuList data={MENU} HOME={HOME} Event={WeChatEvent} />
            <FormDataTemp menu={SELECT} SIGN={SIGN} HOME={HOME} Event={WeChatEvent} />
        </div>
    );
};

export default WeChatConfig;