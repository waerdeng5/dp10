import './localhost.scss'
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useEventEmitter, useMount } from 'ahooks';
import { Result, App } from 'antd'

import { Http } from '../../Utils/Api';
import LoadSvg from '../../Page/Loading/LoadSvg'

import { promiseTo } from '../../Utils'
// import { AddOptionsFormList } from '../../Config/configForm'
import { formDefaultInit } from '../../Config'
import { DevScrollView } from '../../Temp/DevTemplate'

import List, { ItemDragging } from 'devextreme-react/list'
import TabPanel, { Item } from "devextreme-react/tab-panel"
import { Button } from 'devextreme-react/button'
import { ArrayStore } from 'devextreme-react/common/data'
import { Popup, ToolbarItem } from 'devextreme-react/popup'
import { ScrollView } from 'devextreme-react/scroll-view'

import { Encrypt, Decrypt } from '../../Utils/IndexedDB'


import { modelStore } from '../../Router/zustand'
import { ButtonItem } from 'devextreme-react/cjs/card-view';
import { axios } from '../../Utils/Api'


const httpPath = 'https://common-api.ljkjkf.com/'
const menuConfig = ['PARGET/API', 'PARGET/THE', 'PARGET/OPT']


const { port } = window.location


const saveJsonInfoByUuid = async (uuid, content) => {
    return await Http({ method: 'post', url: 'wechats/SaveJsonInfoByUuid', path: httpPath, params: { uuid, content } })
}

const getJsonInfoByUuid = async (uuid) => {
    return await Http({ method: 'get', url: 'wechats/GetJsonInfoByUuid', path: httpPath, params: { uuid } })
}



const LeftTemplate = ({ projects, DataEvent, APIdata, OPTdata }) => {
    const { notification } = App.useApp();
    const { updateModel, updateModel1 } = modelStore()
    const [selectedKeys, setSelectedKeys] = useState([])

    const GroupRender = (data) => {
        return <div>{data.key || '未分组'}</div>
    }

    const onSelectedItemKeysChange = useCallback((e) => {
        const { name, value } = e
        if (name === 'selectedItemKeys') setSelectedKeys(value)
    }, [selectedKeys, setSelectedKeys])

    const onItemClick = e => DataEvent.emit({ type: 'onSelectProject', data: e.itemData })


    const onModel = () => {
        const addObj = OPTdata.top.find(v => v.type === 'A02')
        const { fields } = APIdata
        if (!addObj) {
            notification.error({ title: '打开失败!', description: '未检测到新增设置!!', key: 'LocalhostLogin' })
            return false
        }
        updateModel({
            title: '新增项目',
            type: 'CommonForm',
            Event: DataEvent,
            modelData: { formItem: 'AddProjectFormList', eventBack: 'onAddProject' }
        })
    }

    const onModel2 = () => {
        updateModel({
            title: '字段设置',
            type: 'SetFields',
            Event: DataEvent,
            modelData: APIdata,
            options: [
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'add',
                    text: '新增字段',
                    onClick: () => {
                        updateModel1({
                            title: '新增字段',
                            width: 480,
                            height: 600,
                            type: 'CommonForm',
                            Event: DataEvent,
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
                    icon: 'save',
                    text: '保存字段',
                    onClick: () => DataEvent.emit({ type: 'onSaveField' })
                }
            ]
        })
    }

    const onModel3 = () => {
        updateModel({
            title: '功能设置',
            type: 'SetOptions',
            Event: DataEvent,
            modelData: { APIdata, OPTdata },
            options: [
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'add',
                    text: '添加全局操作',
                    onClick: () => {
                        updateModel1({
                            title: '添加全局操作',
                            type: 'CommonForm',
                            Event: DataEvent,
                            modelData: {
                                formItem: 'AddTopOptionsFormList',
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
                        updateModel1({
                            title: '添加局部操作',
                            type: 'CommonForm',
                            Event: DataEvent,
                            modelData: {
                                formItem: 'AddRowOptionsFormList',
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
                        DataEvent.emit({ type: 'onSaveOPT' })
                    }
                }
            ]
        })
    }


    useEffect(() => DataEvent.emit({ type: 'onSelectProject', data: null }), [projects])

    return (
        <div className='left'>
            <div>
                <List
                    dataSource={projects} // 绑定数据
                    displayExpr="tableName"  // 渲染字段
                    // itemRender={ProductInfo} // 自定义渲染

                    searchEnabled={true} // 开启搜索

                    grouped={true}  // 开启分组
                    collapsibleGroups={true} // 开启分组可折叠
                    groupRender={GroupRender}

                    scrollByContent={true} // 开启内容滚动
                    scrollByThumb={true} // 开启滚动条滚动
                    bounceEnabled={true} // 反弹

                    showSelectionControls={false} // 开启选择控件
                    selectByClick={true} // 点击选择
                    selectionMode="single"  // 选择模式 single multiple   all none
                    selectAllMode="page" // 全选模式  page allPages

                    selectedItemKeys={selectedKeys}

                    onOptionChanged={onSelectedItemKeysChange}  // 事件判断
                    onItemClick={onItemClick}
                >
                    <ItemDragging allowReordering={false} />
                </List>
            </div>
            <div>
                <Button
                    disabled={false} // 是否禁用
                    text="新增项目"  // 按钮文字
                    icon='fas fa-plus-square '  // 按钮图标
                    type="default"  // 类型 normal default success danger
                    stylingMode="contained"   //样式  text outlined  contained
                    // onClick={onAddProject}
                    onClick={onModel}
                    elementAttr={{ class: 'addButton' }}
                />
                <Button
                    disabled={false} // 是否禁用
                    text="字段设置"  // 按钮文字
                    icon='fas fa-plus-square '  // 按钮图标
                    type="default"  // 类型 normal default success danger
                    stylingMode="contained"   //样式  text outlined  contained
                    // onClick={onSetField}
                    onClick={onModel2}
                    elementAttr={{ class: 'addButton' }}
                />
                <Button
                    disabled={false} // 是否禁用
                    text="操作设置"  // 按钮文字
                    icon='fas fa-plus-square '  // 按钮图标
                    type="default"  // 类型 normal default success danger
                    stylingMode="contained"   //样式  text outlined  contained
                    onClick={onModel3}
                    elementAttr={{ class: 'addButton' }}
                />
            </div>
        </div>
    )
}

const RightTemplate = ({ DataEvent, APIdata, OPTdata }) => {

    const { updateModel } = modelStore()
    const [selectedItem, setSelectedItem] = useState()

    const EventCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onSelectProject', () => setSelectedItem(data)],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    DataEvent.useSubscription(EventCallBack)

    const dataSource = [
        {
            key: 'A01',
            icon: 'fas fa-camera ',
            title: '各类域名',
            list: [
                { label: '接口域名', value: 'apiUrl' },
                { label: '授权域名', value: 'authUrl' },
                { label: '小程序地址接口', value: 'weChatApiUrl' },
                { label: '图床地址', value: 'imageUrl' },
            ]
        },
        {
            key: 'A02',
            icon: 'fas fa-american-sign-language-interpreting fa-pulse',
            title: '登录设置',
            list: [
                { label: '登录ID', value: 'client_Id' },
                { label: '登录方式', value: 'grant_Type' },
                { label: '登录验证', value: 'client_Secret' },
                { label: 'TOKEN头', value: 'bearer' },
                { label: '额外登录', value: 'login' },
                { label: '登录类型', value: 'loginMethod' },
            ]
        },
        {
            key: 'A03',
            icon: 'description',
            title: '项目信息',
            list: [
                { label: '项目类型', value: 'projectTypeUuid' },
                { label: '项目编码', value: 'code' },
                { label: '识别码', value: 'keyword' },
                { label: '排序', value: 'sortId' },
                { label: '项目地址', value: 'address' },
                { label: '备注信息', value: 'remark' },
                { label: '创建时间', value: 'createTime' },
                { label: '创建人员', value: 'createUserName' },
            ]
        },
        {
            key: 'A04',
            icon: 'belloutline',
            title: '其他设置',
            list: [
                { label: '是否开启DEGBU', value: 'isDebug' },
                { label: '是否启用', value: 'isEnabled' },
                { label: '是否ssl认证', value: 'isHttps' },
                { label: '是否扫码', value: 'isScan' },
            ]
        },
    ]


    const TabPanelItem = (e) => {
        const { data, index } = e
        const { key, title, list } = data
        return (
            <div className='RightItem'>
                {list.map(({ label, value }, index) => {
                    return (
                        <div key={index} className='dx-card'>
                            <div>{label}</div>
                            <div>{selectedItem[value] || '-'}</div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const onClickLogin = () => {
        window.open(`http://${selectedItem.webUrl}:${port}`)
    }

    const onClickModify = () => {
        // const addObj = OPTdata.row.find(v => v.type === 'B01')
        // const { fields } = APIdata
        // updateModel({ title: addObj.title, type: 'OptionsModel', Event: DataEvent, modelData: { ...addObj, fields, Initial: selectedItem } })

        updateModel({
            title: '修改项目',
            type: 'CommonForm',
            Event: DataEvent,
            modelData: { formItem: 'AddProjectFormList', eventBack: 'onAddProject', Initial: selectedItem }
        })
    }

    return (
        <div className='right'>
            {selectedItem ?
                <div className='Info'>
                    <div className='Top'>
                        <img className='Logo' src={selectedItem.imageUrl + 'Logo.png'} alt="Logo" />
                        <div className='Content'>
                            <div>
                                <img src={selectedItem.imageUrl + 'Ico.ico'} alt="Logo" />
                                <div>{selectedItem.tableName}</div>
                            </div>
                            <div>{selectedItem.fullName}</div>
                            <div>访问网址 : {selectedItem.webUrl}</div>
                        </div>
                        <div className='Options'>
                            <Button
                                text="进入项目"
                                type="default"
                                stylingMode="contained"
                                onClick={onClickLogin}
                                elementAttr={{ class: 'addButton' }}
                            />
                            <Button
                                text="修改"  // 按钮文字
                                type="default"  // 类型 normal default success danger
                                stylingMode="text"   //样式  text outlined  contained
                                onClick={onClickModify}
                            />
                        </div>
                        {/* <Button type='primary'>进入项目</Button> */}
                    </div>
                    <div className='TabPanel'>
                        <TabPanel
                            height='100%'
                            dataSource={dataSource}
                            activeStateEnabled={true}   // 开启选中状态
                            animationEnabled={true} // 开启动画
                            deferRendering={true} // 开启延迟渲染
                            disabled={false} // 禁用
                            elementAttr={{ class: 'newClass' }}
                            iconPosition='start'   // 图标位置 'start'  “开始”  'end'  '结束' 'top'  “顶部” 'bottom'  “底部”
                            loop={true} // 循环
                            tabsPosition='top'  // 选项卡位置 'top' (default)   'top'（默认）'bottom'  “底部”'right'  “右边”'left'  “左边”
                            stylingMode='primary' // 选项卡样式  primary 底线全长  secondary  底线文字长度
                            swipeEnabled={false}  // 滑动切换
                            showNavButtons={true}  // 超宽按钮
                            itemComponent={TabPanelItem}
                        />
                    </div>
                </div> :
                <div className='Result'>
                    <Result status="500" title="请选择左侧项目" />
                </div>
            }
        </div>
    )
}



const LocalhostLogin = () => {
    const { notification } = App.useApp();
    const [projects, setProjects] = useState()
    const { updateModel, updateModel1 } = modelStore()


    const [APIdata, setAPIdata] = useState({})
    const [THEdata, setTHEdata] = useState({})
    const [OPTdata, setOPTdata] = useState({})

    const DataEvent = useEventEmitter()


    const onSaveAPIdata = async (data) => {
        console.log('[----------保存API---------]', data)
        const uuids = ['PARGET/API']
        const params = JSON.stringify(await Encrypt(data))
        const [[APIerror, APIdata]] = await Promise.all(uuids.map(e => promiseTo(saveJsonInfoByUuid(e, params))))
        if (APIerror) {
            notification.error({ title: '保存失败', description: '请检测网络或联系管理员!!', key: 'LocalhostLogin' })
            return false
        }
        notification.success({ title: '操作成功!', description: 'API配置信息以保存!!', key: 'LocalhostLogin' })
        setAPIdata(data)
    }

    const onSaveOPTdata = async (data) => {
        console.log('[----------保存OPT---------]', data)
        const uuids = ['PARGET/OPT']
        const params = JSON.stringify(await Encrypt(data))
        const [[OPTerror, OPTdata]] = await Promise.all(uuids.map(e => promiseTo(saveJsonInfoByUuid(e, params))))
        if (OPTerror) {
            notification.error({ title: '保存失败', description: '请检测网络或联系管理员!!', key: 'LocalhostLogin' })
            return false
        }
        notification.success({ title: '操作成功!', description: '操作信息以保存!!', key: 'LocalhostLogin' })
        setOPTdata(data)
    }

    const onAddProject = async (data) => {
        const [err, res] = await axios({ method: data?.uuid ? 'put' : 'post', url: 'projects', params: data, path: httpPath })
        if (err) return DataEvent.emit({ type: 'closeFormLoading' })
        updateModel({})
        getData()
    }

    const EventCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onSaveAPIdata', () => onSaveAPIdata(data)],
            ['onSaveOPTdata', () => onSaveOPTdata(data)],
            ['onSaveSuccess', () => getData()],
            ['onAddProject', () => onAddProject(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    DataEvent.useSubscription(EventCallBack)

    const getSetData = async () => {
        const [
            [APIerror, APIdata],
            [THEerror, THEdata],
            [OPTerror, OPTdata]
        ] = await Promise.all(menuConfig.map(e => promiseTo(getJsonInfoByUuid(e))))

        if (APIerror || THEerror || OPTerror) {
            notification.error({ title: '配置获取失败', description: '请检测网络或联系管理员!!', key: 'LocalhostLogin' })
            return false
        }
        setAPIdata(await Decrypt(APIdata))
        setTHEdata(await Decrypt(THEdata))
        setOPTdata(await Decrypt(OPTdata))
    }


    const getData = () => {
        // 获取表单设置
        Http({ method: 'get', url: 'projects', path: httpPath }).then(res => {
            const data = {
                store: new ArrayStore({ data: res.list, key: 'uuid' }),
                group: 'projectTypeUuid',
                pageSize: 10,
                paginate: false,
                searchExpr: ['tableName', 'fullName']
            }
            setProjects(data)
        })
    }

    useMount(() => {
        getSetData()
        getData()
    })

    return (
        <div className="LocalhostLogin">
            {projects ?
                <div className='Box'>
                    <LeftTemplate projects={projects} DataEvent={DataEvent} APIdata={APIdata} OPTdata={OPTdata} />
                    <RightTemplate DataEvent={DataEvent} APIdata={APIdata} OPTdata={OPTdata} />
                </div> :
                <LoadSvg />
            }
        </div>
    );
};

export default memo(LocalhostLogin)