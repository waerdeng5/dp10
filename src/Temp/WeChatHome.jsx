
import './WeChatHome.scss'
import { v4 } from 'uuid'
import { useState, useRef, useEffect } from 'react'
import { useSize, useEventEmitter, useDebounceFn } from 'ahooks'
import { Dropdown, App, Button, Popconfirm } from 'antd'
import ReactGridLayout from 'react-grid-layout'
import { GridBackground } from "react-grid-layout/extras"


import { modelStore } from '../Router/zustand'
import { WeChatFormInit } from '../Config/wechatDefault'

import { DevScrollView } from '../Temp/DevTemplate'
import { WeChatTempTitle } from '../Temp/WeChatTempTitle'
import { WeChatTempHome } from '../Temp/WeChatTempHome'
import { WeChatTempFixed } from '../Temp/WeChatTempFixed'
import { WeChatTempReserve } from '../Temp/WeChatTempReserve'
import { WeChatTempTDesign } from '../Temp/WeChatTempTDesign'



const TempMapping = {
    ...WeChatTempTitle,
    ...WeChatTempHome,
    ...WeChatTempFixed,
    ...WeChatTempReserve,
    ...WeChatTempTDesign,
}



const DropdownItem = ({ START, WeChatEvent, i, type }) => {
    return ([
        {
            key: '0-0', type: 'group', label: '全局设置', children: [
                {
                    key: '0-2',
                    label: (<Button type='link' onClick={() => WeChatEvent.emit({ type: 'onSave' })}>保存配置</Button>)
                },
                {
                    key: '0-1',
                    label: (<Button type='link' onClick={() => WeChatEvent.emit({ type: 'onSetApi' })}>接口设置</Button>)
                },
            ]
        },
        {
            key: '1-0', type: 'group', label: '布局操作', children: [
                !START && {
                    key: '1-1',
                    label: (<Button type='link' onClick={() => WeChatEvent.emit({ type: 'onStart' })}>激活布局</Button>)
                },
                START && {
                    key: '1-2',
                    label: (<Button type='link' onClick={() => WeChatEvent.emit({ type: 'onAdd' })}>添加组件</Button>)
                },
                START && {
                    key: '1-3',
                    label: (<Button type='link' danger onClick={() => WeChatEvent.emit({ type: 'onStop' })}>结束布局</Button>)
                },
            ]
        },
        START && i && {
            key: '2-0', type: 'group', label: '模块操作', children: [
                type === 'WeChatTempFixedA02' && {
                    key: '2-list',
                    label: (<Button type='link' onClick={() => WeChatEvent.emit({ type: 'onSetListType', data: i })}>列表样式</Button>)
                },
                type === 'WeChatTempFixedA03' && {
                    key: '2-clock',
                    label: (<Button type='link' onClick={() => WeChatEvent.emit({ type: 'onSetClockIn', data: i })}>打卡信息</Button>)
                },
                {
                    key: '2-1',
                    label: (<Button type='link' onClick={() => WeChatEvent.emit({ type: 'onSetTemp', data: i })}>修改模块</Button>)
                },
                {
                    key: '2-2',
                    label: (
                        <Popconfirm
                            title="删除提醒!"
                            description="删除后将无法恢复,是否继续删除?"
                            onConfirm={() => WeChatEvent.emit({ type: 'onDelTemp', data: i })}
                            okText="删除"
                            cancelText="取消"
                        >
                            <Button type='link' danger>删除模块</Button>
                        </Popconfirm>
                    )
                },
            ]
        }
    ])
}


const WeChatHome = ({ data, FormEvent }) => {
    const { message, modal, notification } = App.useApp()
    const { updateModel } = modelStore()
    const WeChatEvent = useEventEmitter()
    const { tabBar_active, tabBarList, pageConfig = {}, pageLayout = {}, pageApiData = {} } = data
    const [Active, setActive] = useState(tabBar_active)
    const [PageLayout, setPageLayout] = useState(pageLayout)
    const [PageConfig, setPageConfig] = useState(pageConfig)
    const [PageApiData, setPageApiData] = useState(pageApiData)
    const [START, setSTART] = useState(false)


    const weChatCallBack = (e) => {
        const { type, data } = e
        // console.log(e)
        const Mapping = new Map([
            ['onSave', () => FormEvent.emit({ type: 'onSaveHome', data: { PageLayout, PageConfig, PageApiData } })],
            ['onStart', () => setSTART(true)],
            ['onStop', () => setSTART(false)],
            ['onSetApi', () => {
                updateModel({
                    title: '数据信息',
                    type: 'CommonForm',
                    Event: WeChatEvent,
                    width: 1200,
                    modelData: {
                        formItem: 'WeChatAPIUrl',
                        eventBack: 'onApiBack',
                        Initial: { uuid: Active, ...PageApiData[Active] },
                        NotLoading: true,
                    }
                })
            }],
            ['onAdd', () => updateModel({ title: '小程序组件列表', type: 'WeChatTempSelect', Event: WeChatEvent })],
            ['onSelectTemp', () => {
                const uuid = v4()
                const { type, layout } = data
                const layData = PageLayout[Active]
                const conData = PageConfig[Active]
                const newLayout = [...layData, { i: uuid, ...layout }]
                const newConfig = { ...conData, [uuid]: { uuid, type, ...WeChatFormInit[type] } }
                setPageLayout(v => ({ ...v, [Active]: newLayout }))
                setPageConfig(v => ({ ...v, [Active]: newConfig }))
                updateModel({})
            }],
            ['onSetTemp', () => {
                updateModel({
                    title: '修改模块设置',
                    type: 'CommonForm',
                    Event: WeChatEvent,
                    width: 1200,
                    modelData: {
                        formItem: PageConfig[Active][data].type,
                        eventBack: 'onTempBack',
                        Initial: PageConfig[Active][data],
                        NotLoading: true,
                    }
                })
            }],
            ['onDelTemp', () => {
                const newLayout = PageLayout[Active].filter(item => item.i !== data)
                delete PageConfig[Active][data]
                setPageLayout(v => ({ ...v, [Active]: newLayout }))
                setPageConfig(v => ({ ...v }))
            }],
            ['onTempBack', () => {
                const { uuid } = data
                notification.success({ key: 'onFinishFailed', title: '保存成功', description: '模块信息已更新' })
                setPageConfig(v => ({ ...v, [Active]: { ...v[Active], [uuid]: data } }))
            }],
            ['onApiBack', () => {
                const { uuid } = data
                notification.success({ key: 'onFinishFailed', title: '保存成功', description: '接口信息已更新' })
                setPageApiData(v => ({ ...v, [uuid]: data }))
            }],
            // 特殊模块额外操作
            // 选择列表
            ['onSetListType', () => {
                updateModel({
                    title: '选择列表',
                    type: 'CommonModel',
                    Event: WeChatEvent,
                    modelData: { openType: 'WeChatTempList', Initial: data }
                })
            }],
            ['onFixedList', () => {
                const { uuid, temp } = data
                PageConfig[Active][uuid].temp = temp
                setPageConfig({ ...PageConfig })
            }],
            ['onSetClockIn', () => {
                updateModel({
                    title: '选择列表',
                    type: 'CommonModel',
                    Event: WeChatEvent,
                    modelData: { openType: 'WeChatTempClockIn', Initial: data }
                })
            }],
            ['onFixedClock', () => {
                const { uuid, temp } = data
                PageConfig[Active][uuid].temp = temp
                setPageConfig({ ...PageConfig })
            }]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    const formCallBack = (e) => {
        const { type, data } = e
        // console.log(e)
        const Mapping = new Map([
            ['onTabBarClick', () => {
                if (data === Active) return
                setActive(data)
            }]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    FormEvent.useSubscription(formCallBack)
    WeChatEvent.useSubscription(weChatCallBack)

    const { run } = useDebounceFn((e) => { setPageLayout(v => ({ ...v, [Active]: e })) }, { wait: 500 })

    useEffect(() => {
        if (!PageLayout[Active]) setPageLayout(e => ({ ...e, [Active]: [] }))   // 初始化布局信息
        if (!PageConfig[Active]) setPageConfig(e => ({ ...e, [Active]: {} }))   // 初始化模块信息
        if (!pageApiData[Active]) setPageApiData(e => ({ ...e, [Active]: {} }))   // 初始化模块信息
    }, [Active])

    if (PageConfig[Active]) {
        const { background } = tabBarList.find(v => v.uuid === Active)
        return (
            <div className='WeChatHome'>
                <Dropdown trigger={['contextMenu']} menu={{ items: DropdownItem({ START, WeChatEvent }) }}>
                    <div className={`Layout ${START ? 'START' : 'STOP'}`} style={{ background }}>
                        <ReactGridLayout
                            resizeConfig={{ enabled: START }}
                            dragConfig={{ enabled: START }}
                            width={430}
                            autoSize={false}
                            layout={PageLayout[Active]}
                            isBounded={true}
                            gridConfig={{ cols: 10, rowHeight: 8, margin: [0, 0] }}
                            onLayoutChange={run}
                        >
                            {PageLayout[Active].map(v => {
                                const { i } = v
                                const { type, ...styleData } = PageConfig[Active][i]
                                const Template = TempMapping[type].temp
                                return (
                                    <div className={`layoutItem ${START ? 'START' : 'STOP'}`} key={i} onContextMenu={(e) => e.stopPropagation()}>
                                        <Dropdown trigger={['contextMenu']} menu={{ items: DropdownItem({ START, WeChatEvent, i, type }) }}>
                                            <div className='layoutBox' onContextMenu={(e) => e.stopPropagation()}>
                                                {START && <div className='SizeData'>{v.w}0% * {v.h * 8}px</div>}
                                                <Template styleData={styleData} />
                                            </div>
                                        </Dropdown>
                                    </div>
                                )
                            })}
                        </ReactGridLayout>
                    </div>
                </Dropdown>
            </div>
        )
    }
};

export default WeChatHome;
