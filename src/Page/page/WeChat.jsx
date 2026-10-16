import './WeChat.scss'
import dayjs from 'dayjs'

import { useEffect, useState } from 'react'
import { useMount, useEventEmitter } from 'ahooks'


import { App, Button, Spin, Result, Tree, Skeleton, Divider } from 'antd'


import { Encrypt, Decrypt, GetIndexedDB } from '../../Utils/IndexedDB'
import { CommonAPIUrl } from '../../Config'
import { axios, axiosFor } from '../../Utils/Api'
import { modelStore } from '../../Router/zustand'

import { ICONMapping } from '../../Config/IconMapping'


import { DevScrollView } from '../../Temp/DevTemplate'
import SetWeChatMenu from '../../Temp/SetWeChatMenu'
import FormTemplate from '../../Utils/FormTemplate'

import { ColorCallBack, SetFilderParams, onTreeDrop, replaceNodeByIdTwo, removeTreeByKey, findParentNodeFunc, treeValue } from '../../Utils'

import { WeChatFormConfig } from '../../Config/wechatForm'





// const GetConfig = { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `common/WeChate` } }
// const PostConfig = { method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `common/WeChate`, content: {} } }

const { hostname, port } = window.location
// const NotificationBox = ({ type }) => {
//     const onReload = () => window.location.reload()
//     const onInit = () => {
//         console.log('生成基础文件', type)


//     }
//     return (
//         <div>
//             <Button type="primary" onClick={onReload}>重新加载</Button>
//             {port && <Button type="primary" danger style={{ marginLeft: 8 }} onClick={onInit}>生成文件</Button>}
//         </div>
//     )
// }
// const WeChat = () => {
//     const { message, modal, notification } = App.useApp()
//     const [UUID, setUUID] = useState()
//     useMount(async () => {
//         const { uuid } = await GetIndexedDB('config')
//         setUUID(uuid)
//         const getList = [
//             { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${uuid}/COMMON/WECHAT_BASE` } },
//             { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${uuid}/COMMON/WECHAT_MENU` } },
//         ]
//         const [[BASEerr, BASEres], [MENUerr, MENUres]] = await axiosFor(getList)
//         if (BASEerr) {
//             return notification.error({
//                 key: 'wechat',
//                 title: '基础文件获取失败',
//                 description: '未检测到配置信息,请检测当前网络状态或联系管理员 !',
//                 duration: 0,
//                 actions: <NotificationBox type="base" />
//             })
//         }
//         if (MENUerr) {
//             return notification.error({
//                 key: 'wechat',
//                 title: '菜单文件获取失败',
//                 description: '未检测到配置信息,请检测当前网络状态或联系管理员 !',
//                 duration: 0,
//                 actions: <NotificationBox type="menu" />
//             })
//         }
//         console.log(BASEres, MENUres)
//     })
//     return (
//         <div className="WeChat">
//             <SetWeChatMenu />
//             <div className='page'>
//                 <div>小程序模拟器</div>
//             </div>
//             <div className='form'>
//                 小程序设置表单
//             </div>
//         </div>
//     );
// };

const Simulator = () => {
    return (
        <div className='Simulator'>
            <div className='system'>
                <div className='top'>
                    <div className='date'>{dayjs().format('HH:mm')}</div>
                    <div className='shadow'>阴影</div>
                    <div className='icon'>{ICONMapping['fasWifi']} {ICONMapping['fasBatteryFull']}</div>
                </div>
                <div className='opt'>
                    {ICONMapping['fasEllipsisH']}
                    <Divider orientation="vertical" />
                    {ICONMapping['farDotCircle']}
                </div>
                <div className='btm'><div /></div>
            </div>

        </div>
    )
}







const WeChat = () => {
    // 1. 获取公库统一配置文件
    // 2. 获取对应项目配置文件 -> 判断可选与非可选项目
    // 3. 对应文件的修改
    // 4. 保存项目配置文件
    //      1.项目uuid -> appid 名称 https imgUrl asc加密码(统一加密码)
    //      2.项目基础信息的配置
    //      3.项目菜单与权限信息的配置  
    //      4.index - login - home 3大基础页面与入口路由配置
    //      5.统一头部模块设置于参数
    //      6.index -> 
    //      7.login ->
    //      8.home  ->

    const { message, modal, notification } = App.useApp()
    const { updateModel } = modelStore()
    const WeChatEvent = useEventEmitter()
    const [UUID, setUUID] = useState('')
    const [CONFIG, setCONFIG] = useState({})
    const [MENU, setMENU] = useState()
    const [MENUSelect, setMENUSelect] = useState('20000000-0000-0000-0000-000000000000')
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
            setMENU(menuRes.data.list)
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
        setFormData()
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

    const weChatCallBack = (e) => {
        const { type, data } = e
        console.log('[--weChatCallBack--]', e)
        const Mapping = new Map([
            ['onInitConfig', () => onInitConfig(data)],
            ['onFormBack', () => onFormBack(data)]
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
                    <Simulator />
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