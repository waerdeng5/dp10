import { App, Button } from "antd"
import { lazy, Suspense, useState, useEffect } from 'react'
import { useMount, useTitle, useFavicon } from "ahooks"
import { useNavigate, useLocation } from 'react-router-dom'



import { themeDefault } from '../Config/themeDefault'

import { axios } from "../Utils/Api"
import LoadSvg from '../Page/Loading/LoadSvg'
import LoadA06 from '../Page/Loading/LoadA06'
import { formDefaultInit, CommonAPIUrl } from '../Config'
import { pageStore, modelStore, fromStore } from '../Router/zustand'
import { Encrypt, Decrypt, IndexedDBClear, AddIndexdDB, GetIndexedDB } from '../Utils/IndexedDB'


import { shanxi } from './common'


const { hostname, port } = window.location
const GetProject = { method: 'get', path: CommonAPIUrl, url: 'projects/getProjectConfigInfo' }

const NotificationBox = ({ uuid }) => {
    const onReload = () => window.location.reload()
    const onInit = async () => {
        const [PROevent, PROdata] = await axios({
            method: 'post',
            url: 'projects/SaveJsonInfoByUuid',
            path: CommonAPIUrl,
            params: { uuid: `${uuid}/COMMON/THEME`, content: JSON.stringify(await Encrypt(themeDefault)) }
        })
        if (PROevent) return console.log('初始化失败', PROevent)
        onReload()
    }
    return (
        <div>
            {port && <Button type='link' onClick={onInit}>生成配置文件</Button>}
            <Button type='primary' onClick={onReload}>重新加载</Button>
        </div>
    )
}

const LoginIndex = () => {
    const { updateFromData, updateFromLoad } = fromStore()

    const Navigate = useNavigate()
    const { pathname } = useLocation()
    const { notification } = App.useApp()
    const { updateList } = pageStore()
    const { updateModel } = modelStore()
    const [Template, setTemplate] = useState()
    const [SingPage, setSingPage] = useState()
    const [Config, setConfig] = useState()
    useTitle(Config?.fullName || '加载中...')
    useFavicon(Config?.imageUrl + 'Ico.ico')

    const setLoginPage = async () => {
        if (hostname === 'localhost') {
            const Template = lazy(() => import(`./page/${hostname}.jsx`))
            setTemplate(Template)
        }
        else if (hostname === 'shanxi.ljkjkf.com') {
            console.log('山西产教融合', shanxi)



        }
        else if (pathname === '/') {
            IndexedDBClear()
            sessionStorage.clear()
            localStorage.clear()
            updateList([])
            updateModel({})
            updateFromData({})
            updateFromLoad(false)

            const [PROevent, PROdata] = await axios({ ...GetProject, params: { WebUrl: hostname } })
            if (PROevent) {
                notification.error({ title: '链接失败!', description: PROevent, key: 'login' })
                return false
            }
            const { config, key } = PROdata
            const [configData] = config

            await AddIndexdDB('config', configData)

            setConfig(configData)
            sessionStorage.setItem('uuid', key)
            const GetConfig = { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${configData.uuid}/COMMON/THEME` } }
            const [COMerror, COMdata] = await axios({ ...GetConfig })
            if (COMerror) {
                notification.info({
                    key: 'login',
                    title: '加载错误提醒!',
                    description: '未检测到项目配置信息,请检测当前网络状态或联系管理员 !',
                    duration: 0,
                    actions: <NotificationBox uuid={configData.uuid} />
                })
                return false
            }
            const theme = await Decrypt(COMdata)
            console.log(theme)
            await AddIndexdDB('theme', theme)
            const { loginType } = theme
            if (loginType === 'A01') Navigate('/Login')
            else Navigate('/Start')
        }
        if (pathname === '/Login') {
            const { login, sign } = await GetIndexedDB('theme')
            const menu = await GetIndexedDB('menu')
            if (menu) return Navigate('/')
            const loginPage = lazy(() => import(`./page/${login}.jsx`))
            const signPage = lazy(() => import(`./page/${sign}.jsx`))
            if (login === 'loginDefault' && sign === 'signDefault') {
                setTemplate(loginPage)
                setSingPage(signPage)
            } else {
                console.log('登录窗口获取失败')
            }
        }
    }
    useEffect(() => {
        setLoginPage()
    }, [pathname])

    return (
        <Suspense>
            <div className="LoginPage">
                {Template ?
                    <Template SingPage={SingPage} /> :
                    <LoadA06 style={{ '--background': '#e8e8e8', '--stroke': '#262626', height: '100vh' }} />
                }
            </div>
        </Suspense>
    );
};

export default LoginIndex;