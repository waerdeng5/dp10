import './WeChat.scss'

import { useState } from 'react'
import { useMount } from 'ahooks'


import { App, Button } from 'antd'

import { WeChatFormInit } from '../../Config/wechatDefault'

import { Encrypt, Decrypt, GetIndexedDB } from '../../Utils/IndexedDB'
import { CommonAPIUrl } from '../../Config'
import { axios, axiosFor } from '../../Utils/Api'


import { DevScrollView } from '../../Temp/DevTemplate'
import SetWeChatMenu from '../../Temp/SetWeChatMenu'

import { ColorCallBack, SetFilderParams, onTreeDrop, replaceNodeByIdTwo, removeTreeByKey, findParentNodeFunc, treeValue } from '../../Utils'


// const GetConfig = { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `common/PARGET/WeChate` } }
// const PostConfig = { method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `common/PARGET/WeChate`, content: {} } }


const { hostname, port } = window.location

const NotificationBox = ({ type }) => {
    const onReload = () => window.location.reload()
    const onInit = () => {
        console.log('生成基础文件', type)


    }
    return (
        <div>
            <Button type="primary" onClick={onReload}>重新加载</Button>
            {port && <Button type="primary" danger style={{ marginLeft: 8 }} onClick={onInit}>生成文件</Button>}
        </div>
    )
}



const WeChat = () => {
    const { message, modal, notification } = App.useApp()
    const [UUID, setUUID] = useState()




    useMount(async () => {
        const { uuid } = await GetIndexedDB('config')
        setUUID(uuid)
        const getList = [
            { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${uuid}/COMMON/WECHAT_BASE` } },
            { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${uuid}/COMMON/WECHAT_MENU` } },
        ]
        const [[BASEerr, BASEres], [MENUerr, MENUres]] = await axiosFor(getList)
        if (BASEerr) {
            return notification.error({
                key: 'wechat',
                title: '基础文件获取失败',
                description: '未检测到配置信息,请检测当前网络状态或联系管理员 !',
                duration: 0,
                actions: <NotificationBox type="base" />
            })
        }
        if (MENUerr) {
            return notification.error({
                key: 'wechat',
                title: '菜单文件获取失败',
                description: '未检测到配置信息,请检测当前网络状态或联系管理员 !',
                duration: 0,
                actions: <NotificationBox type="menu" />
            })
        }

        console.log(BASEres, MENUres)


    })



    return (
        <div className="WeChat">
            <SetWeChatMenu />
            <div className='page'>
                <div>小程序模拟器</div>
            </div>
            <div className='form'>
                小程序设置表单
            </div>
        </div>
    );
};

export default WeChat;