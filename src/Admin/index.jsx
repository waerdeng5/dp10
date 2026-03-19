import './index.scss'
import React, { useEffect, useState } from 'react';
import { useEventEmitter, useMount, useTitle, useFavicon } from 'ahooks'
import { FloatButton, Tooltip, ConfigProvider, Input, Space, Button } from 'antd'
import { SettingOutlined, BgColorsOutlined, UnorderedListOutlined } from '@ant-design/icons';

import { axios } from '../Utils/Api'
import { GetIndexedDB, Decrypt } from '../Utils/IndexedDB'
import { ColorCallBack, debuggerFun } from '../Utils'
import { BackGrundType } from '../Config/BackGrundType'
import { VideoTemplateA01 } from '../Temp/VideoTemplate'
import { modelStore, pageStore } from '../Router/zustand'
import { Encrypt, PutIndexedDB } from '../Utils/IndexedDB'
import { ThemeBackImageList, formDefaultInit } from '../Config'

import LayoutA01 from './page/LayoutA01'
import LayoutA02 from './page/LayoutA02'
import themes from "devextreme/ui/themes";

import { HappyProvider } from '@ant-design/happy-work-theme';
import { ANIMATIONLIST } from '../Temp/TemplateAnimation'



const LayoutMapping = { LayoutA01, LayoutA02 }
const { Search } = Input;
const { port } = window.location

const AdminIndex = () => {
    const { updateActive, updateList } = pageStore()
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const AdminEvent = useEventEmitter()
    const [Theme, setTheme] = useState()
    const [Active, setActive] = useState()
    const [Config, setConfig] = useState()
    const [DxTheme, setDxTheme] = useState()
    const [DxThemeMapping, setDxThemeMapping] = useState()

    const [userInfo, setUserInfo] = useState()

    const [LookStatus, setLookStatus] = useState(false)
    const [userAdd, setUserAdd] = useState()
    const [unLook, setUnLook] = useState()

    const [BtnStatus, setBtnStatus] = useState(true)

    useTitle(Config?.fullName || '加载中...')
    useFavicon(Config?.imageUrl + 'Ico.ico')

    const [FloatButtonList, setFloatButtonList] = useState([{ uuid: 2, title: '路由设置', icon: <i className="fas fa-registered" /> }])

    useMount(async () => {
        const token = await GetIndexedDB('token')
        const theme = await GetIndexedDB('theme')
        const config = await GetIndexedDB('config')
        const menu = await GetIndexedDB('menu')
        const user = await GetIndexedDB('user')
        const openKey = await GetIndexedDB('openKey')
        const pageList = await GetIndexedDB('pageList')
        const userAdd = await GetIndexedDB('userAdd')
        const dxThemeMapping = await GetIndexedDB('dxTheme')
        const look = await GetIndexedDB('look')
        setUserInfo(user)
        setUserAdd(userAdd)
        setDxThemeMapping(await Decrypt(dxThemeMapping))
        setTheme(theme)
        updateList(pageList)
        updateActive(openKey)
        setConfig(config)
        const dxTheme = userAdd?.dxTheme || 'fluent.blue.light.compact'
        themes.current(dxTheme)
        setDxTheme(dxTheme)
        setLookStatus(!!look)
        // console.log('token', token)
        // console.log('config', config)
        // console.log('menu', menu)
        // console.log('user', user)
        // console.log('openKey', openKey)
        // console.log('pageList', pageList)
        // console.log('userAdd', userAdd)
    })

    const onThemeDetection = (data) => {
        if (data.grundStyle) setTheme(e => ({ ...e, grundStyle: { ...e.grundStyle, ...data.grundStyle } }))
        else setTheme(e => ({ ...e, ...data }))
    }

    const onSetTheme = async (e) => {
        console.log('[-- 保存主题 --]', e)
        const params = { uuid: 'COMMON/THEMEJSON', content: JSON.stringify(await Encrypt(e)) }
        const [err, res] = await axios({ method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params })
        if (err) {
            AdminEvent.emit({ type: 'closeFormLoading' })
            return console.log('修改失败', err)
        }
        await PutIndexedDB('theme', e)
        setTheme(e)
        updateModel({})
    }

    const onActiveMenu = data => {
        setBtnStatus(true)
        setActive(e => ({ ...e, [data.uuid]: data }))
    }

    const onSetDxTheme = async (data) => {
        const dxThemeMapping = await GetIndexedDB('dxTheme')
        setDxThemeMapping(await Decrypt(dxThemeMapping))
        setDxTheme(data)
    }

    const onLookPage = async () => {
        setLookStatus(true)
        await PutIndexedDB('look', true)
    }

    const adminCallBack = (e) => {
        const { type, data } = e
        // console.log(e)
        const Mapping = new Map([
            ['onThemeDetection', () => onThemeDetection(data)],
            ['onSaveTheme', () => onSetTheme(data)],
            ['onActiveMenu', () => onActiveMenu(data)],
            ['onSetDxTheme', () => onSetDxTheme(data)],
            ['onLookPage', onLookPage],
            ['onHiddenButton', () => setBtnStatus(false)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    const onOpenProject = () => {
        console.log('返回项目选择')


    }

    const onUnLookFn = async () => {
        const [err, res] = await axios({ method: 'post', url: 'users/verifyPassword', params: { OldPassword: unLook } })
        if (err) return false
        await PutIndexedDB('look', false)
        setUnLook()
        setLookStatus(false)
    }

    const onOpenSetTheme = () => {
        updateModel({
            title: '主题设置',
            type: 'CommonForm',
            Event: AdminEvent,
            modelData: {
                formItem: 'ThemeFormList',
                eventBack: 'onSaveTheme',
                Initial: Theme,
                detection: 'onThemeDetection'
            }
        })
    }

    const onOpenSetMenu = async () => {
        const openKey = await GetIndexedDB('openKey')
        const pageList = await GetIndexedDB('pageList')
        const data = pageList.find(v => v.uuid === openKey)
        const config = Active[openKey]
        if (data.type === 'dev') addConfigData(config)
        if (data.type === 'diy') AdminEvent.emit({ type: 'onOpenSetPage' })
        if (data.type === 'lay') AdminEvent.emit({ type: 'onActivateLayout' })
    }



    const addConfigData = async (config) => {
        const { uuid, towUuid, targetUrl, tableName, APIdata, THEdata, OPTdata } = config
        updateModel({
            title: tableName + ' 路由配置',
            type: 'SetDevRouter',
            Event: AdminEvent,
            modelData: { uuid: towUuid || uuid, targetUrl, APIdata, THEdata, OPTdata },
            options: [
                {
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'box',
                    text: '模板设置',
                    onClick: () => {
                        updateModel1({
                            title: '配置模板',
                            type: 'CommonForm',
                            Event: AdminEvent,
                            modelData: {
                                formItem: 'SetDEVTemplateConfig',
                                eventBack: 'onBackTemplate',
                                Initial: THEdata?.template || formDefaultInit.FlowMenuTempConfig
                            }
                        })
                    }
                },
                {
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'sparkle',
                    text: '样式设置',
                    onClick: () => {
                        updateModel1({
                            title: '样式配置',
                            type: 'CommonForm',
                            Event: AdminEvent,
                            modelData: {
                                formItem: 'SetDEVStyleConfig',
                                eventBack: 'onBackStyle',
                                Initial: THEdata?.style || formDefaultInit.FlowMenuStyleConfig
                            }
                        })
                    }
                },
                {
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'link',
                    text: '接口设置',
                    onClick: () => {
                        updateModel1({
                            title: '接口配置',
                            type: 'CommonForm',
                            Event: AdminEvent,
                            modelData: {
                                formItem: 'SetDEVGetDataConfig',
                                eventBack: 'onBackApi',
                                Initial: APIdata?.api || formDefaultInit.FlowMenuAPIInterface
                            }
                        })
                    }
                },
                {
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'fields',
                    text: '字段设置',
                    onClick: () => {
                        updateModel1({
                            title: '字段设置',
                            type: 'SetFields',
                            Event: AdminEvent,
                            modelData: APIdata,
                            options: [
                                {
                                    visible: true,
                                    widget: 'dxButton',
                                    location: 'before',
                                    icon: 'fas fa-trash-alt',
                                    text: '清空字段',
                                    type: 'danger',
                                    onClick: () => AdminEvent.emit({ type: 'onClearFields' })
                                },
                                // {
                                //     visible: true,
                                //     widget: 'dxButton',
                                //     location: 'before',
                                //     icon: 'fas fa-arrow-alt-circle-up',
                                //     text: '导出完整字段 ',
                                //     onClick: () => AdminEvent.emit({ type: 'onCopyFields' })
                                // },
                                // {
                                //     visible: true,
                                //     widget: 'dxButton',
                                //     location: 'before',
                                //     icon: 'fas fa-arrow-alt-circle-down',
                                //     text: '导入完整字段 ',
                                //     onClick: () => AdminEvent.emit({ type: 'onImportFields' })
                                // },

                                {
                                    visible: true,
                                    widget: 'dxButton',
                                    location: 'after',
                                    icon: 'add',
                                    text: '基础信息',
                                    onClick: () => AdminEvent.emit({ type: 'onAddCreateFields' })
                                },
                                {
                                    visible: true,
                                    widget: 'dxButton',
                                    location: 'after',
                                    icon: 'add',
                                    text: '新增字段',
                                    onClick: () => {
                                        updateModel2({
                                            title: '新增字段',
                                            width: 480,
                                            height: 600,
                                            type: 'CommonForm',
                                            Event: AdminEvent,
                                            modelData: {
                                                formItem: 'AddFieldsFormList'
                                            }
                                        })
                                    }
                                },
                                {
                                    visible: true,
                                    widget: 'dxButton',
                                    location: 'after',
                                    icon: 'add',
                                    text: '字段导入',
                                    onClick: () => {
                                        updateModel2({
                                            title: '字段导入',
                                            width: 800,
                                            type: 'CommonForm',
                                            Event: AdminEvent,
                                            modelData: {
                                                formItem: 'AddFieldsImport',
                                                eventBack: 'onFieldsImport',
                                            }
                                        })
                                    }
                                },
                                {
                                    visible: true,
                                    widget: 'dxButton',
                                    location: 'after',
                                    icon: 'save',
                                    text: '保存字段',
                                    onClick: () => AdminEvent.emit({ type: 'onSaveField' })
                                }
                            ]
                        })
                    }
                },
                {
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'optionsgear',
                    text: '操作设置',
                    onClick: () => {
                        updateModel1({
                            title: '功能设置',
                            type: 'SetOptions',
                            Event: AdminEvent,
                            modelData: { APIdata, OPTdata },
                            options: [
                                {
                                    visible: true,
                                    widget: 'dxButton',
                                    location: 'after',
                                    icon: 'add',
                                    text: '添加全局操作',
                                    onClick: () => {
                                        updateModel4({
                                            title: '添加全局操作',
                                            type: 'CommonForm',
                                            Event: AdminEvent,
                                            modelData: {
                                                formItem: 'AddTopOptionsFormList',
                                                eventBack: 'onAddOptions',
                                                Initial: formDefaultInit.FlowMenuTopClick
                                            }
                                        })
                                    }
                                },
                                {
                                    visible: true,
                                    widget: 'dxButton',
                                    location: 'after',
                                    icon: 'add',
                                    text: '添加局部操作',
                                    onClick: () => {
                                        updateModel4({
                                            title: '添加局部操作',
                                            type: 'CommonForm',
                                            Event: AdminEvent,
                                            modelData: {
                                                formItem: 'AddRowOptionsFormList',
                                                eventBack: 'onAddOptions',
                                                Initial: formDefaultInit.FlowMenuRowClick
                                            }
                                        })
                                    }
                                },
                                {
                                    visible: true,
                                    widget: 'dxButton',
                                    location: 'after',
                                    icon: 'save',
                                    text: '保存操作',
                                    onClick: () => {
                                        AdminEvent.emit({ type: 'onSaveOPT' })
                                    }
                                }
                            ]
                        })

                    }
                }
            ],
        })
    }

    const onAdminConfigClick = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            [0, onOpenProject],
            [1, onOpenSetTheme],
            [2, onOpenSetMenu],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    AdminEvent.useSubscription(adminCallBack)

    if (Theme && DxThemeMapping) {
        const { layout, themeColor, maskColor, maskBlur,
            backType, backColor, backDeg, backImage,
            backVideo, backVideoStart, backVideoEnd,
            backGrundType, grundStyle, devTheme
        } = Theme
        const maskStyle = { background: maskColor, backdropFilter: `blur(${maskBlur}px)` }
        const Template = LayoutMapping[layout]
        const DXTHEME = DxTheme.split('.compact')[0]
        const backColorData = devTheme ? DxThemeMapping[DXTHEME].backColor : backColor
        const colorPrimary = devTheme ? DxThemeMapping[DXTHEME].themeColor : themeColor
        const ThemeData = devTheme ? { ...Theme, ...DxThemeMapping[DXTHEME] } : Theme

        return (
            <div className='AdminIndex'>
                <div className='BackBox'>
                    <div className='Mask' style={maskStyle} />
                    {backType === 'Color' && <div className='BackColor' style={{ background: ColorCallBack(backColorData, backDeg) }} />}
                    {backType === 'Image' && <img className='BackImage' src={ThemeBackImageList[backImage]} alt="" />}
                    {backType === 'Ground' && grundStyle && <div className='BackGround' style={BackGrundType[backGrundType](grundStyle)} />}
                    {backType === 'Video' && <VideoTemplateA01 url={backVideo} seekTimeStart={backVideoStart} seekTimeEnd={backVideoEnd} />}
                </div>

                <ConfigProvider theme={{ token: { colorPrimary } }} >
                    <Template DxTheme={DxTheme} Theme={ThemeData} AdminEvent={AdminEvent} />
                </ConfigProvider>

                {LookStatus &&
                    <div className='LookPage'>
                        {(() => {
                            if (userAdd?.animation) {
                                const Template = ANIMATIONLIST[userAdd.animation]
                                return <Template />
                            }
                        })()}
                        <div className='unlock'>
                            <Space.Compact>
                                <Input.Password size='large' placeholder="请输入登录密码" variant="underlined" value={unLook} onChange={e => setUnLook(e.target.value)} />
                                <Space.Addon onClick={onUnLookFn}><i className="fas fa-chalkboard" /></Space.Addon>
                            </Space.Compact>
                        </div>
                    </div>
                }

                {BtnStatus && (port || userInfo.userUuid === '1e99e116-6ec0-425c-87b4-64dd2ce458e2') &&
                    <HappyProvider>
                        <FloatButton.Group
                            shape="square"
                            trigger="click"
                            type='primary'
                            icon={<SettingOutlined />}
                        >
                            {FloatButtonList.map(({ uuid, title, icon }) =>
                                <Tooltip key={uuid} title={title} placement='left'>
                                    <FloatButton icon={icon} onClick={() => onAdminConfigClick({ type: uuid })} />
                                </Tooltip>
                            )}
                        </FloatButton.Group>
                    </HappyProvider>
                }
            </div>
        )
    }
}

export default AdminIndex;
