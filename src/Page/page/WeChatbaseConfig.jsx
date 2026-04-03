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

import { WechatLoginA01, WechatLoginA02, WechatLoginA03, WechatLoginA04 } from '../../Temp/WechatLogin'



const httpPath = 'https://common-api.ljkjkf.com/'

const GetConfig = { method: 'get', url: 'wechats/GetJsonInfoByUuid', path: httpPath, params: { uuid: `PARGET/WeChate` } }
const PostConfig = { method: 'post', url: 'wechats/SaveJsonInfoByUuid', path: httpPath, params: { uuid: `PARGET/WeChate`, content: {} } }

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
const WechatTopBar = ({ page, data, LOGIN }) => {
    // 时间处理
    const [Date, setDate] = useState(dayjs().format('HH:mm'))
    const clearInterval = useInterval(() => setDate(dayjs().format('HH:mm')), 30000)
    useEffect(() => { return () => { clearInterval() } }, [])
    const { navigationStyle, headerBack, headerTitle, headerBackground, headerColor } = data[page]
    const topStyle = {
        background: headerBackground,
        color: headerColor,
    }
    return (
        <>
            <div className='sysTop' style={navigationStyle === 'default' ? topStyle : {}}>
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
            {navigationStyle === 'default' && <div className='defaultTop' style={topStyle}>{headerTitle || 'WeChat'}</div>}
        </>
    )
}

// TODO 表单渲染
const WeChatForm = ({ page, FormEvent, Initial, LOGIN }) => {
    if (page === 'login' && LOGIN) return (
        <FormTemplate
            formItem={pageMapping[page].formItem}
            FORMEVENT={FormEvent}
            Initial={Initial[page]}
            NotLoading
        // detection
        />
    )
}


const ContentTemplate = ({ page, data }) => {

    if (page === 'login') {
        const TempMapping = { A01: WechatLoginA01, A02: WechatLoginA02, A03: WechatLoginA03, A04: WechatLoginA04 }
        const { loginTemp } = data[page]
        const LoginTemp = TempMapping[loginTemp]
        if (LoginTemp) return <LoginTemp data={data[page]} />
    }
    if (page === 'home') {
        return (
            <div>渲染首页</div>
        )
    }
    if (page === 'page') {
        return (
            <div>渲染页面</div>
        )
    }
}



const WeChatbaseConfig = () => {
    const { message, modal, notification } = App.useApp();
    const FormEvent = useEventEmitter()
    const [page, setPage] = useState('login')

    const [LOGIN, setLOGIN] = useState(false)



    const WeChatInit = useReactive({ login: {}, home: {}, page: {} })


    const getLoginData = async () => {
        const [err, res] = await axios(GetConfig)
        if (err) return console.log('小程序登录页面获取失败!')
        WeChatInit.login = res


        setLOGIN(true)
    }

    const setLoaginData = async () => {
        PostConfig.params.content = JSON.stringify(WeChatInit.login)
        const [err, res] = await axios(PostConfig)
        if (err) return console.log('小程序登录页面设置失败!')
        notification.success({ key: 'login', title: '保存成功!', description: '全项目小程序登录页设置成功!' })
    }

    const getBaseData = async () => {
        const [err, res] = await axios({ method: 'get', url: 'weChatMenu' })
        if (err) return console.log('小程序菜单获取失败!')
        // console.log('小程序菜单', res)
    }

    const onSegmentedChange = (e) => {
        setPage(e)
    }

    useMount(() => {
        getLoginData()
        // getBaseData()
        // setLoaginData()
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
                        <ContentTemplate page={page} data={WeChatInit} />
                    </div>
                </div>
            </div>
            <div className='options'>
                <div className='title'>{pageMapping[page].title}</div>
                {page === 'login' && <WeChatForm page={page} FormEvent={FormEvent} Initial={WeChatInit} LOGIN={LOGIN} />}
            </div>
        </div>
    );
};

export default WeChatbaseConfig;