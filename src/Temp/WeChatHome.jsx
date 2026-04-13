
import './WeChatHome.scss'
import { v4 } from 'uuid'
import { useState, useRef, useEffect } from 'react'
import { useSize, useEventEmitter } from 'ahooks'
import { Dropdown, App, Button } from 'antd'
import ReactGridLayout from 'react-grid-layout'
import { GridBackground } from "react-grid-layout/extras"


import { modelStore } from '../Router/zustand'
import { WeChatFormInit } from '../Config/wechatDefault'

import { WeChatTempTitle } from '../Temp/WeChatTempTitle'






const TempMapping = {
    ...WeChatTempTitle
}



const DropdownItem = ({ START, WeChatEvent }) => {
    return ([
        {
            key: '0-0', type: 'group', label: '全局设置', children: [
                {
                    key: '0-2',
                    label: (<Button type='link' onClick={() => WeChatEvent.emit({ type: 'onSave' })}>保存配置</Button>)
                },
                {
                    key: '0-0',
                    label: (<Button type='link' onClick={() => WeChatEvent.emit({ type: 'onSetBack' })}>背景设置</Button>)
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
    ])
}





const WeChatHome = ({ data, FormEvent }) => {


    const { updateModel } = modelStore()
    const LayoutRef = useRef(null)
    const SIZE = useSize(LayoutRef)
    const WeChatEvent = useEventEmitter()
    const { tabBar_active, tabBarList, pageConfig = {}, pageLayout = {} } = data
    const [Active, setActive] = useState(tabBar_active)

    const [PageLayout, setPageLayout] = useState(pageLayout)
    const [PageConfig, setPageConfig] = useState(pageConfig)

    const [START, setSTART] = useState(false)





    const weChatCallBack = (e) => {
        const { type, data } = e
        // console.log(e)
        const Mapping = new Map([
            ['onSave', () => FormEvent.emit({ type: 'onSaveHome', data: PageConfig })],
            ['onStart', () => setSTART(true)],
            ['onStop', () => setSTART(false)],

            // 添加组件
            ['onAdd', () => updateModel({ title: '小程序组件列表', type: 'WeChatTempSelect', Event: WeChatEvent })],
            ['onSelectTemp', () => {
                const uuid = v4()
                const { type, layout } = data
                console.log('添加模块')
                console.log(uuid)
                console.log(data)
                console.log(WeChatFormInit[type])


                updateModel({})
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
                setActive(data)
            }]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    FormEvent.useSubscription(formCallBack)
    WeChatEvent.useSubscription(weChatCallBack)






    useEffect(() => {
        if (!PageLayout[Active]) setPageLayout(e => ({ ...e, [Active]: [] }))   // 初始化布局信息
        if (!PageConfig[Active]) setPageConfig(e => ({ ...e, [Active]: {} }))   // 初始化模块信息
    }, [Active])

    if (PageConfig[Active]) {
        return (
            <div className='WeChatHome' ref={LayoutRef}>
                <Dropdown trigger={['contextMenu']} menu={{ items: DropdownItem({ START, WeChatEvent }) }}>
                    <div className={`Layout ${START ? 'START' : 'STOP'}`}>
                        {SIZE &&
                            <>
                                {START &&
                                    <GridBackground
                                        className='LayoutBack'
                                        cols={12}
                                        rows={24}
                                        width={SIZE.width}
                                        rowHeight={SIZE.height / 24}
                                        margin={[0, 0]}
                                        color="#cccccc"
                                        borderRadius={4}
                                    />
                                }
                                <ReactGridLayout
                                    resizeConfig={{ enabled: START }}
                                    dragConfig={{ enabled: START }}
                                    width={SIZE.width}
                                    layout={PageLayout[Active]}
                                    isBounded={true}
                                    gridConfig={{ cols: 12, rowHeight: SIZE.height / 24, margin: [0, 0] }}
                                    onLayoutChange={e => {
                                        console.log(e)
                                    }}
                                >
                                    {PageLayout[Active].map(v => {
                                        return (
                                            <div key={v.i}>{v.i}</div>
                                        )
                                    })}
                                </ReactGridLayout>
                            </>
                        }
                    </div>
                </Dropdown>
            </div>
        )
    }
};

export default WeChatHome;
