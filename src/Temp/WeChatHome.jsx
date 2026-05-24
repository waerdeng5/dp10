
import './WeChatHome.scss'
import { v4 } from 'uuid'
import { useState, useEffect } from 'react'
import { useEventEmitter, useDebounceFn } from 'ahooks'
import { Dropdown, App, Button, Popconfirm, Spin } from 'antd'
import ReactGridLayout from 'react-grid-layout'

import { modelStore } from '../Router/zustand'
import { WeChatFormInit } from '../Config/wechatDefault'

import { WeChatTempTitle } from '../Temp/WeChatTempTitle'
import { WeChatTempReserve } from '../Temp/WeChatTempReserve'
import { WeChatTempUserInfo } from '../Temp/WeChatTempUserInfo'
import { WeChatTempFixed } from '../Temp/WeChatTempFixed'
import { WeChatTempTDesign } from '../Temp/WeChatTempTDesign'


import { ColorCallBack } from '../Utils'

const TempMapping = {
    ...WeChatTempTitle,
    ...WeChatTempFixed,
    ...WeChatTempReserve,
    ...WeChatTempTDesign,
    ...WeChatTempUserInfo,
}

const DropdownItem = ({ START, Event, i, type }) => {
    return ([
        {
            key: '0-0', type: 'group', label: '全局设置', children: [
                {
                    key: '0-2',
                    label: (<Button type='link' onClick={() => Event.emit({ type: 'onHomeSave' })}>保存配置</Button>)
                },
                {
                    key: '0-1',
                    label: (<Button type='link' onClick={() => Event.emit({ type: 'onHomeSetApi' })}>接口设置</Button>)
                },
            ]
        },
        {
            key: '1-0', type: 'group', label: '布局操作', children: [
                !START && {
                    key: '1-1',
                    label: (<Button type='link' onClick={() => Event.emit({ type: 'onHomeStart' })}>激活布局</Button>)
                },
                START && {
                    key: '1-2',
                    label: (<Button type='link' onClick={() => Event.emit({ type: 'onHomeAdd' })}>添加组件</Button>)
                },
                START && {
                    key: '1-3',
                    label: (<Button type='link' danger onClick={() => Event.emit({ type: 'onHomeStop' })}>结束布局</Button>)
                },
            ]
        },
        START && i && {
            key: '2-0', type: 'group', label: '模块操作', children: [
                type === 'WeChatTempFixedA02' && {
                    key: '2-list',
                    label: (<Button type='link' onClick={() => Event.emit({ type: 'onSetListType', data: i })}>列表样式</Button>)
                },
                type === 'WeChatTempFixedA03' && {
                    key: '2-clock',
                    label: (<Button type='link' onClick={() => Event.emit({ type: 'onSetClockIn', data: i })}>打卡信息</Button>)
                },
                type === 'WeChatTempFixedA04' && {
                    key: '2-menu',
                    label: (<Button type='link' onClick={() => Event.emit({ type: 'onSetMenuType', data: i })}>菜单类型</Button>)
                },
                {
                    key: '2-1',
                    label: (<Button type='link' onClick={() => Event.emit({ type: 'onSetTemp', data: i })}>修改模块</Button>)
                },
                {
                    key: '2-2',
                    label: (
                        <Popconfirm
                            title="删除提醒!"
                            description="删除后将无法恢复,是否继续删除?"
                            onConfirm={() => Event.emit({ type: 'onDelTemp', data: i })}
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


const WeChatHome = ({ menu, HOME, Event }) => {
    const { message, modal, notification } = App.useApp()
    const { updateModel } = modelStore()
    const { pageLayout, pageConfig, pageApiData, pageHeader } = HOME

    const [PageLayout, setPageLayout] = useState(pageLayout)
    const [PageConfig, setPageConfig] = useState(pageConfig)
    const [PageApiData, setPageApiData] = useState(pageApiData)
    const [START, setSTART] = useState(false)

    const homeCallBack = (e) => {
        const { type, data } = e
        // console.log(e)
        const Mapping = new Map([
            // 保存配置
            ['onHomeSave', () => {
                Event.emit({ type: 'onSave', data: { PageLayout, PageConfig, PageApiData } })
                setSTART(false)
            }],
            // 接口设置
            ['onHomeSetApi', () => {
                updateModel({
                    title: '数据信息',
                    type: 'CommonForm',
                    Event: Event,
                    width: 1200,
                    modelData: {
                        formItem: 'WeChatAPIUrl',
                        eventBack: 'onHomeApiBack',
                        Initial: { uuid: menu, ...PageApiData?.[menu] || {} },
                        NotLoading: true,
                    }
                })
            }],
            ['onHomeApiBack', () => {
                const { uuid } = data
                notification.success({ key: 'onFinishFailed', title: '保存成功', description: '接口信息已更新' })
                setPageApiData(v => ({ ...v, [uuid]: data }))
            }],
            // 激活布局
            ['onHomeStart', () => {
                if (!PageLayout[menu] || !PageConfig[menu]) {
                    PageLayout[menu] = []
                    PageConfig[menu] = {}
                }
                setSTART(true)
            }],
            ['onHomeStop', () => setSTART(false)],
            // 添加组件
            ['onHomeAdd', () => updateModel({ title: '小程序组件列表', type: 'WeChatTempSelect', Event: Event })],
            ['onSelectTemp', () => {
                const uuid = v4()
                const { type, layout } = data
                const layData = PageLayout[menu]
                const conData = PageConfig[menu]
                const newLayout = [...layData, { i: uuid, ...layout }]
                const newConfig = { ...conData, [uuid]: { uuid, type, ...WeChatFormInit[type] } }
                setPageLayout(v => ({ ...v, [menu]: newLayout }))
                setPageConfig(v => ({ ...v, [menu]: newConfig }))
                updateModel({})
            }],
            ['onSetTemp', () => {
                updateModel({
                    title: '修改模块设置',
                    type: 'CommonForm',
                    Event: Event,
                    width: 1200,
                    modelData: {
                        formItem: PageConfig[menu][data].type,
                        eventBack: 'onTempBack',
                        Initial: PageConfig[menu][data],
                        NotLoading: true,
                    }
                })
            }],
            ['onDelTemp', () => {
                const newLayout = PageLayout[menu].filter(item => item.i !== data)
                delete PageConfig[menu][data]
                setPageLayout(v => ({ ...v, [menu]: newLayout }))
                setPageConfig(v => ({ ...v }))
            }],
            ['onTempBack', () => {
                const { uuid } = data
                notification.success({ key: 'onFinishFailed', title: '保存成功', description: '模块信息已更新' })
                setPageConfig(v => ({ ...v, [menu]: { ...v[menu], [uuid]: data } }))
            }],
            // 特殊模块额外操作
            // 选择列表
            ['onSetListType', () => {
                updateModel({
                    title: '选择列表',
                    type: 'CommonModel',
                    Event: Event,
                    modelData: { openType: 'WeChatTempList', Initial: data }
                })
            }],
            ['onFixedList', () => {
                const { uuid, temp } = data
                PageConfig[menu][uuid].temp = temp
                setPageConfig({ ...PageConfig })
            }],
            ['onSetClockIn', () => {
                updateModel({
                    title: '选择列表',
                    type: 'CommonModel',
                    Event: Event,
                    modelData: { openType: 'WeChatTempClockIn', Initial: data }
                })
            }],
            ['onFixedClock', () => {
                const { uuid, temp } = data
                PageConfig[menu][uuid].temp = temp
                setPageConfig({ ...PageConfig })
            }],
            ['onSetMenuType', () => {
                updateModel({
                    title: '选择列表',
                    type: 'CommonModel',
                    Event: Event,
                    modelData: { openType: 'WeChatTempMenu', Initial: data }
                })
            }]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    Event.useSubscription(homeCallBack)

    const { run } = useDebounceFn((e) => { setPageLayout(v => ({ ...v, [menu]: e })) }, { wait: 500 })
    const background = ColorCallBack(pageHeader[menu]?.background, pageHeader[menu]?.backDeg) || '#f7f7f7'
    useEffect(() => { setSTART(false) }, [menu])
    return (
        <div className='HOME_PAGE'>
            <Dropdown trigger={['contextMenu']} menu={{ items: DropdownItem({ START, Event }) }}>
                <div className={`Layout ${START ? 'START' : 'STOP'}`} style={{ background }}>
                    <ReactGridLayout
                        resizeConfig={{ enabled: START }}
                        dragConfig={{ enabled: START }}
                        width={380}
                        autoSize={false}
                        layout={PageLayout[menu]}
                        isBounded={true}
                        gridConfig={{ cols: 10, rowHeight: 8, margin: [0, 0] }}
                        onLayoutChange={run}
                    >
                        {PageLayout[menu] && PageLayout[menu].map(v => {
                            const { i } = v
                            const { type, ...styleData } = PageConfig[menu][i]
                            const Template = TempMapping[type].temp
                            return (
                                <div className={`layoutItem ${START ? 'START' : 'STOP'}`} key={i} onContextMenu={(e) => e.stopPropagation()}>
                                    <Dropdown trigger={['contextMenu']} menu={{ items: DropdownItem({ START, Event, i, type }) }}>
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
};

export default WeChatHome;
