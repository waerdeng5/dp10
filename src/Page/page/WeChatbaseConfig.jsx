import './WeChatbaseConfig.scss'
import dayjs from 'dayjs'
import { v4 } from 'uuid'


import { useEffect, useState } from 'react'
import { Segmented, App, Tree, Button, Popconfirm, Spin, Result } from 'antd'
import { useInterval, useMount, useEventEmitter, useReactive } from 'ahooks'
import { LeftOutlined, HomeOutlined, SearchOutlined, CloseCircleFilled, PlusOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons'


import { modelStore } from '../../Router/zustand'
import { DevScrollView } from '../../Temp/DevTemplate'

import { axios } from '../../Utils/Api'
import { CommonAPIUrl } from '../../Config'
import WeChatHome from '../../Temp/WeChatHome'
import FormTemplate from '../../Utils/FormTemplate'
import { ICONMapping } from '../../Config/IconMapping'
import { WeChatFormConfig } from '../../Config/wechatForm'
import { ColorCallBack, SpacingCallBack, SetFilderParams, isEmptyObject, onTreeDrop, replaceNodeByIdTwo, removeTreeByKey } from '../../Utils'
import { WechatLoginA01, WechatLoginA02, WechatLoginA03, WechatLoginA04 } from '../../Temp/WechatLogin'
import { WeChatTabBarA01, WeChatTabBarA02, WeChatTabBarA03, WeChatTabBarA04 } from '../../Temp/WechatTabBar'

const GetConfig = { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `common/PARGET/WeChate` } }
const PostConfig = { method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `common/PARGET/WeChate`, content: {} } }


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
const WeChatForm = ({ page, FormEvent, Initial, LOGIN, HOME, PAGE }) => {
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
    if (page === 'page' && PAGE) {
        return (
            <FormTemplate
                formItem={pageMapping[page].formItem}
                FORMEVENT={FormEvent}
                Initial={Initial[page]}
                NotLoading
            />
        )
    }
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
                <WeChatHome page={page} data={data[page]} FormEvent={FormEvent} />
                {TabTemplate && <TabTemplate data={data[page]} FormEvent={FormEvent} />}
            </div>
        )
    }
    if (page === 'page' && !isEmptyObject(data[page])) {
        return (
            <div className='HOME_PAGE'>
                <WeChatHome page={page} data={data[page]} FormEvent={FormEvent} />
            </div>
        )
    }
}

const WeChatbaseConfig = () => {
    const { updateModel } = modelStore()
    const { message, modal, notification } = App.useApp()
    const WeChatInit = useReactive({ login: {}, home: {}, page: {} })
    const FormEvent = useEventEmitter()
    const [page, setPage] = useState('home')
    const [TreeData, setTreeData] = useState()

    const [LOGIN, setLOGIN] = useState(false)
    const [HOME, setHOME] = useState(false)
    const [PAGE, setPAGE] = useState([])
    const [PAGELoading, setPAGELoading] = useState(true)
    const [PAGESTATUS, setPAGESTATUS] = useState({ loading: true, status: false })

    // 获取登录页面配置
    const getLoginData = async () => {
        const [err, res] = await axios(GetConfig)
        if (err) console.log('小程序登录页面获取失败!')
        WeChatInit.login = res || {}
        setLOGIN(true)
    }
    // 获取小程序首页配置
    const getWeChatHomeData = async () => {
        const { uuid } = await GetIndexedDB('config')
        const GetHomeConfig = { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${uuid}/WeChat/home` } }


        const [err, res] = await axios(GetHomeConfig)
        if (err) console.log('小程序首页获取失败!')
        console.log(res)
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
        setTreeData(WeChatInit.home.pageList || [])
        setPAGELoading(false)
    }

    const setLoaginData = async () => {
        PostConfig.params.content = JSON.stringify(WeChatInit.login)
        const [err, res] = await axios(PostConfig)
        if (err) return notification.error({ key: 'weChat', title: '保存失败!', description: '登录页面设置失败!' })
        notification.success({ key: 'weChat', title: '保存成功!', description: '全项目小程序登录页设置成功!' })
    }

    const setHomeData = async () => {
        console.log('[------保存HOME-------]', WeChatInit.home)
        const { uuid } = await GetIndexedDB('config')
        const [err, res] = await axios({
            method: 'post',
            path: CommonAPIUrl,
            url: 'projects/SaveJsonInfoByUuid',
            params: {
                uuid: `${uuid}/WeChat/home`,
                content: JSON.stringify(WeChatInit.home)
            }
        })
        if (err) return notification.error({ key: 'weChat', title: '保存失败!', description: '首页页面设置失败!' })
        notification.success({ key: 'weChat', title: '保存成功!', description: '小程序首页设置成功!' })
    }

    const setPageData = async () => {
        console.log('[------保存PAGE-------]', WeChatInit.page)
        const { uuid } = await GetIndexedDB('config')
        const [err, res] = await axios({
            method: 'post',
            url: 'projects/SaveJsonInfoByUuid',
            path: CommonAPIUrl,
            params: { uuid: `${uuid}/WeChat/${PAGE[0]}`, content: JSON.stringify(WeChatInit.page) }
        })
        if (err) return notification.error({ key: 'weChat', title: '保存失败!', description: '页面设置失败!' })
        notification.success({ key: 'weChat', title: '保存成功!', description: '首页设置成功!' })
    }

    const onSegmentedChange = (e) => {
        setPage(e)
    }

    useMount(() => {
        getLoginData()
        getWeChatHomeData()
    })

    // 新增页面
    const onNewPage = () => {
        updateModel({
            title: '新增页面',
            type: 'CommonForm',
            Event: FormEvent,
            width: 640,
            height: 400,
            modelData: { formItem: 'WeChatPageForm', eventBack: 'onPageBack' }
        })
    }

    // 保存页面
    const onSavePage = () => {
        WeChatInit.home.pageList = TreeData
        setHomeData()
    }
    // 删除菜单
    const onPageDelete = (uuid) => {
        const data = removeTreeByKey(TreeData, uuid)
        setTreeData([...data])
        WeChatInit.page = {}
        setPAGE([])
        setPAGESTATUS({ loading: true, status: false })
    }
    // 修改菜单
    const onPageModify = (e) => {
        updateModel({
            title: '修改页面',
            type: 'CommonForm',
            Event: FormEvent,
            width: 640,
            height: 400,
            modelData: { formItem: 'WeChatPageForm', eventBack: 'onPageModifyBack', Initial: e }
        })
    }

    // 生成页面配置
    const onSetPageConfig = async () => {
        const [uuid] = PAGE
        const { uuid: configUuid } = await GetIndexedDB('config')
        const [err, res] = await axios({
            method: 'post',
            url: 'projects/SaveJsonInfoByUuid',
            path: CommonAPIUrl,
            params: { uuid: `${configUuid}/WeChat/${uuid}`, content: JSON.stringify({}) }
        })
        if (err) return console.log(err)
        setPAGESTATUS({ loading: false, status: false })

    }

    // 选中页面
    const onSelectPage = async (e) => {
        const config = await GetIndexedDB('config')
        WeChatInit.page = {}
        setPAGE(e)
        const [uuid] = e
        const [err, res] = await axios({
            method: 'get',
            url: 'projects/GetJsonInfoByUuid',
            path: CommonAPIUrl,
            params: { uuid: `${config.uuid}/WeChat/${uuid}` }
        })
        if (err) return setPAGESTATUS({ loading: false, status: true })
        WeChatInit.page = res
        setPAGESTATUS({ loading: false, status: false })
    }


    const formCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onDetection', () => {
                const [keys] = Object.keys(data)
                const [values] = Object.values(data)
                WeChatInit[page][keys] = values
            }],
            ['onFormBack', () => {
                WeChatInit[page] = { ...WeChatInit[page], ...data }
                if (page === 'login') setLoaginData()
                if (page === 'home') setHomeData()
                if (page === 'page') setPageData()
            }],
            ['onSaveHome', () => {
                WeChatInit.home.pageApiData = data.PageApiData
                WeChatInit.home.pageLayout = data.PageLayout
                WeChatInit.home.pageConfig = data.PageConfig
                setHomeData()
            }],
            ['onSavePage', () => {
                console.log('保存page', data)
            }],
            ['onPageBack', () => {
                setTreeData(e => ([...e, { uuid: v4(), ...data }]))
                updateModel({})
            }],
            ['onPageModifyBack', () => {
                const arr = replaceNodeByIdTwo(TreeData, data.uuid, data)
                setTreeData([...arr])
                updateModel({})
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
                        <ContentTemplate page={page} data={WeChatInit} active FormEvent={FormEvent} />
                    </div>
                </div>
            </div>
            <div className='options'>
                <div className='title'>{pageMapping[page].title}</div>
                {page === 'login' && <WeChatForm page={page} FormEvent={FormEvent} Initial={WeChatInit} LOGIN={LOGIN} />}
                {page === 'home' && <WeChatForm page={page} FormEvent={FormEvent} Initial={WeChatInit} HOME={HOME} />}
                {page === 'page' &&
                    <div className='pageData'>
                        <div className='tree'>
                            {PAGELoading ?
                                <Spin /> :
                                TreeData.length === 0 ?
                                    <Result status="404" title="暂无页面配置" subTitle="点击下方新增按钮添加新的小程序页面" /> :
                                    <DevScrollView>
                                        <Tree
                                            fieldNames={{ key: 'uuid' }}
                                            defaultExpandAll
                                            blockNode
                                            draggable
                                            onDrop={e => setTreeData(onTreeDrop(e, TreeData, 'uuid'))}
                                            treeData={TreeData}
                                            selectedKeys={PAGE}
                                            onSelect={(e) => {
                                                if (e.length === 0) return
                                                onSelectPage(e)
                                            }}
                                            titleRender={e => {
                                                const { uuid, tableName, children } = e
                                                return (
                                                    <div key={uuid} className='TreeItem'>
                                                        <div className='title'>{tableName}</div>
                                                        <div className='operation'>
                                                            <Button type='link' onClick={() => onPageModify(e)} >修改</Button>
                                                            <Popconfirm
                                                                title="删除提醒!"
                                                                description="确认删除菜单吗？"
                                                                onConfirm={() => onPageDelete(uuid)}
                                                                okText="删除"
                                                                cancelText="取消"
                                                            >
                                                                <Button danger type='link' disabled={children && children.length !== 0} >删除</Button>
                                                            </Popconfirm>
                                                        </div>
                                                    </div>
                                                )
                                            }}
                                        />
                                    </DevScrollView>
                            }
                            {!PAGELoading &&
                                <div className='btn'>
                                    <Button icon={<PlusOutlined />} onClick={onNewPage}>新增页面</Button>
                                    <Button icon={<SaveOutlined />} type='primary' onClick={onSavePage}>保存配置</Button>
                                </div>
                            }
                        </div>
                        <div className='form'>
                            {PAGELoading ? <Spin /> :
                                <div className='formList'>
                                    {PAGE.length === 0 ?
                                        <Result title="请先选择左侧菜单" /> :
                                        PAGESTATUS.loading ? <Spin /> :
                                            PAGESTATUS.status ?
                                                <Result
                                                    status="403"
                                                    title="配置文件加载失败!"
                                                    subTitle="请检测网络波动或重新生成配置文件"
                                                    extra={<Button type="primary" key="console" onClick={() => onSetPageConfig()}>生成配置文件</Button>}
                                                /> :
                                                <WeChatForm page={page} FormEvent={FormEvent} Initial={WeChatInit} PAGE={PAGE} />
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default WeChatbaseConfig;