import './index.scss'
import { v4 } from 'uuid'
import { memo } from 'react'
import { useState, useEffect, lazy, Suspense, } from 'react'
import { Result, Spin, FloatButton, Tooltip } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMount, useSessionStorageState, useTitle, useFavicon, useEventEmitter } from 'ahooks'
import { axios, axiosFor } from '../Utils/Api'
import { Decrypt, Encrypt, GetIndexedDB } from '../Utils/IndexedDB'

import { ColorCallBack, SetBorderParams, SpacingCallBack, SetFilderParams } from '../Utils'

import { VideoTemplateA01 } from '../Temp/VideoTemplate'
import LoadSvg from '../Page/Loading/LoadSvg'

import { SettingOutlined } from '@ant-design/icons';
import { TopTemplate, NavTemplate } from '../Temp/StartTemplate'
import { HappyProvider } from '@ant-design/happy-work-theme';
import { modelStore } from '../Router/zustand'

const { port } = window.location

const OurletTemplate = memo(({ data, StartEvent }) => {
    const Navigate = useNavigate()
    const { pathname } = useLocation()
    const [PAGE, setPAGE] = useState({})
    const [componentStatus, setComponentStatus] = useState({ loading: true, status: true, error: null, Template: null })

    const getStartData = async (page) => {
        console.log('page', page)
        const pageParams = page === 'Start' || !page ? 'Home' : page
        setComponentStatus({ loading: true, status: true, error: null, Template: null })
        const [err, res] = await axios({ method: 'get', url: '/dictionary/GetJsonInfoByUuid', params: { uuid: `STA_PAGE/${pageParams}` } })
        if (err) {
            console.log(`[------------错误路由 : ${pathname}---------------] :`, err)
            StartEvent.emit({ type: 'setCurrent', data: {} })
            return setComponentStatus({ loading: false, status: true, error: err, Template: null })
        }
        const pageData = await Decrypt(res)
        StartEvent.emit({ type: 'setCurrent', data: pageData })
        const { start_init, start_home, path, start_page, page_type, page_diyUrl } = pageData

        if (start_init === 'PAGE') Navigate(`/Start/${start_page}`)
        if (start_init === 'HOME' && path === 'Home') {
            try {
                const module = await import(`./home/${start_home}.jsx`);
                const Component = module.default || module
                if (!Component || (typeof Component !== 'function' && typeof Component !== 'object')) throw new Error(`导入的模块不是有效的React组件`)
                setComponentStatus({ loading: false, status: false, error: false, Template: Component })
            } catch (error) { setComponentStatus({ loading: false, status: false, error: error, Template: null }) }

        }
        if (page_type === 'LAY') {
            try {
                const module = await import(`./Page.jsx`);
                const Component = module.default || module
                if (!Component || (typeof Component !== 'function' && typeof Component !== 'object')) throw new Error(`导入的模块不是有效的React组件`)
                setComponentStatus({ loading: false, status: false, error: false, Template: Component })
                setPAGE(pageData)
            } catch (error) { setComponentStatus({ loading: false, status: false, error: error, Template: null }) }
        }
        if (page_type === 'DIY') {
            try {
                const module = await import(`./page/${page_diyUrl}.jsx`);
                const Component = module.default || module
                if (!Component || (typeof Component !== 'function' && typeof Component !== 'object')) throw new Error(`导入的模块不是有效的React组件`)
                setComponentStatus({ loading: false, status: false, error: false, Template: Component })
            } catch (error) { setComponentStatus({ loading: false, status: false, error: error, Template: null }) }
        }



    }

    useEffect(() => { getStartData(pathname.split('/').at(2)) }, [pathname])

    if (componentStatus.loading) return (<div className='OutletBox NotSet'><Spin size='large' /></div>)
    if (componentStatus.status) return (
        <div className='OutletBox NotSet'>
            <Result status="403" title={`未检测到${pathname}配置!`} subTitle={`请联系系统管理员处理.${componentStatus.error}`} />
        </div>
    )
    if (componentStatus.error) return (
        <div className='OutletBox NotSet'>
            <Result status="404" title="未检测到页面配置!" subTitle={`请联系系统管理员处理.${componentStatus.error}`} />
        </div>
    )
    const { Template } = componentStatus
    return (
        <div className='OutletBox'>
            <Template data={data} page={PAGE} StartEvent={StartEvent} />
        </div>
    )
})

const StartIndex = () => {
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const StartEvent = useEventEmitter()
    const Navigate = useNavigate()
    const { pathname } = useLocation()
    const [Config, setConfig] = useState()
    const [User, setUser] = useState()
    const [login] = useSessionStorageState('login')

    const [LOGIN, setLOGIN] = useState(false)
    const [Loading, setLoading] = useState(true)
    const [Status, setStatus] = useState(true)
    const [startData, setStartData] = useState()
    const [PAGEUUID, setPAGEUUID] = useState(v4())
    const [Current, setCurrent] = useState({})

    const getStartConfig = async (data) => {
        const [err, res] = await axios({ method: 'get', url: '/dictionary/GetJsonInfoByUuid', params: { uuid: `COMMON/START` } })
        if (err) return setLoading(false)
        const startData = await Decrypt(res)
        setStartData(startData)
        setStatus(false)
        setLoading(false)
    }

    useMount(async () => {
        const config = await GetIndexedDB('config')
        if (login) {
            const user = await GetIndexedDB('user')
            setUser(user)
        }

        setConfig(config)
        setLOGIN(login || false)
        getStartConfig()
    })

    useTitle(Config?.fullName || '加载中...')
    useFavicon(Config?.imageUrl + 'Ico.ico')

    const onNavigate = e => {
        if (e === 'setout') Navigate('/')
        if (e === 'admin') Navigate('/Admin')
        if (e === 'login') Navigate('/Login')
        if (e === 'home') Navigate('/Start')
    }

    const onStartConfigClick = () => {
        const pathData = pathname.split('/').at(-1)
        const start = pathData === 'Start' || pathData === 'Home'
        const path = start ? 'Home' : pathData
        updateModel({
            title: pathname + ' 页面配置',
            type: 'CommonForm',
            Event: StartEvent,
            width: 600,
            height: 600,
            modelData: {
                Initial: { ...Current, path, start },
                formItem: 'StartInitFormList',
                eventBack: 'onSaveData',
            }
        })
    }

    const onSaveData = async (data) => {
        console.log('[--保存start页面--]', { ...Current, ...data })
        const params = { uuid: `STA_PAGE/${data.path}`, content: JSON.stringify(await Encrypt({ ...Current, ...data })) }
        const [err] = await axios({ method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params })
        if (err) return console.log(err)
        setPAGEUUID(v4())
        updateModel({})
    }

    const startCallBack = (e) => {
        const { type, data } = e
        // console.log('Home', e)
        const Mapping = new Map([
            ['onNavigate', () => onNavigate(data)],
            ['onSaveData', () => onSaveData(data)],
            ['setCurrent', () => setCurrent(data)],
            ['onRouterPath', () => Navigate(`/Start/${data}`)]

        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    StartEvent.useSubscription(startCallBack)

    if (Loading) return <LoadSvg />
    if (Status) return (
        <div className='StartIndex NotSet'>
            <Result status="403" title="加载失败" subTitle={`错误: 大屏加载信息未配置`} />
        </div>
    )

    const { start_type } = startData

    if (start_type === 'A01') {
        return (
            <div className='StartIndex NotSet'>
                <Result status="403" title="开发中..." subTitle={`错误: 全屏页面还未正式上线`} />
            </div>
        )
    }

    if (start_type === 'A02') {
        const { backType, backColor, backDeg, backImage, backVideo, backVideoStart, backVideoEnd, nav_list, start_navList,
            topImg, topImg_url, topImg_height, btmImg, btmImg_url, btmImg_height,
            leftImg, leftImg_url, leftImg_width, leftImg_top, leftImg_btm, leftImg_margin,
            rightImg, rightImg_url, rightImg_width, rigthImg_top, rightImg_btm, rightImg_margin,
            top_padding, top_margin, top_align_items, top_align_content, top_justify_content, top_flex_direction, top_flex_wrap, top_list,
            extra_nav, extra_navList, extra_jugde
        } = startData

        const topStyle = {
            '--alignItems': top_align_items,
            '--alignContent': top_align_content,
            '--justifyContent': top_justify_content,
            '--flexDirection': top_flex_direction,
            '--flexWrap': top_flex_wrap,
            padding: SpacingCallBack(top_padding),
            margin: SpacingCallBack(top_margin),
        }
        const leftImgStyle = {
            width: leftImg_width,
            height: `calc(100% - ${leftImg_top}px - ${leftImg_btm}px)`,
            top: leftImg_top,
            bottom: leftImg_btm,
            left: leftImg_margin
        }
        const rightImgStyle = {
            width: rightImg_width,
            height: `calc(100% - ${rightImg_btm}px - ${rigthImg_top}px)`,
            top: rigthImg_top,
            bottom: rightImg_btm,
            right: rightImg_margin
        }
        return (
            <div className="StartIndex SamllWindow">
                {/* 背景层 */}
                <div className='BackLayer'>
                    {backType === 'color' && <div className='ColorBack' style={{ background: ColorCallBack(backColor, backDeg) }} />}
                    {backType === 'image' && <img className='ImageBack' src={backImage} alt="backImage" />}
                    {backType === 'video' && <VideoTemplateA01 url={backVideo} seekTimeStart={backVideoStart} seekTimeEnd={backVideoEnd} />}
                </div>
                {/* 浮层图片 */}
                <>
                    {topImg && <img className='topImg' src={topImg_url} style={{ height: topImg_height }} alt="topImg" />}
                    {btmImg && <img className='btmImg' src={btmImg_url} style={{ height: btmImg_height }} alt="btmImg" />}
                    {leftImg && <img className='leftImg' src={leftImg_url} style={leftImgStyle} alt="leftImg" />}
                    {rightImg && <img className='rightImg' src={rightImg_url} style={rightImgStyle} alt="rightImg" />}
                </>
                {/* 头部信息 */}
                <div className='TopData' style={topStyle}>
                    {top_list.map((item, i) => {
                        return <TopTemplate key={i} LOGIN={LOGIN} data={item} StartEvent={StartEvent} status={pathname} />
                    })}
                </div>

                {/* 判断启用几级导航 */}

                {/* 导航信息 */}
                {nav_list && nav_list.length !== 0 && nav_list.map((v, i) =>
                    <NavTemplate key={i} styleData={v} navList={start_navList} extra={extra_nav} extraJugde={extra_jugde} extraList={extra_navList || []} />
                )}

                {/* 页面信息 */}
                <OurletTemplate key={PAGEUUID} data={startData} StartEvent={StartEvent} />
                {(port || User?.userUuid === '1e99e116-6ec0-425c-87b4-64dd2ce458e2') &&
                    <HappyProvider>
                        <Tooltip title='大屏配置' placement='left'>
                            <FloatButton icon={<SettingOutlined />} type="primary" onClick={onStartConfigClick} />
                        </Tooltip>
                    </HappyProvider>
                }
            </div>
        )
    }
}

export default StartIndex;