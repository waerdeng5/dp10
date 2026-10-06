import './SetOptions.scss'
import { v4 } from 'uuid'
import { useState } from 'react'
import copy from 'copy-to-clipboard'
import { Tree, Button, Popconfirm, message } from 'antd'

import { onTreeDrop, replaceNodeById, replaceNodeByIdTwo, removeTreeByKey } from '../../Utils'

import { ICONMapping } from '../../Config/IconMapping'

import { modelStore } from '../../Router/zustand'



const SetOptions = ({ data, Event }) => {
    const { updateModel2, updateModel4, updateModel5 } = modelStore()
    const { APIdata, OPTdata = { top: [], row: [] } } = data
    const { top, row } = OPTdata

    const positionMapping = { left: '左侧', right: '右侧', hidden: '隐藏' }

    const [topTreeData, setTopTreeData] = useState(top || [])
    const [rowTreeData, setRowTreeData] = useState(row || [])

    const onAddOptions = (e) => {
        // --> 修改options -> onSaveOPTdataA02
        const { uuid, code } = e
        let topData = topTreeData
        let rowData = rowTreeData

        console.log('onAddOptions', e)

        if (code === 'top') {
            if (e.type === 'A01') e.fields = topTreeData.find(v => v.uuid === e.uuid)?.fields || []
            if (e.type === 'A02') {
                e.form = topTreeData.find(v => v.uuid === e.uuid)?.form || []
                e.group = topTreeData.find(v => v.uuid === e.uuid)?.group || []
            }
            topData = uuid ? replaceNodeByIdTwo(topTreeData, uuid, e, 'uuid') : [...topTreeData, { ...e, uuid: v4() }]
            setTopTreeData(topData)
        }
        if (code === 'row') {
            rowData = uuid ? replaceNodeById(rowTreeData, uuid, e, 'uuid') : [...rowTreeData, { ...e, uuid: v4() }]
            setRowTreeData(rowData)
        }
        OPTdata.top = topData
        OPTdata.row = rowData
        Event.emit({ type: 'onSaveOPTdataA02', data: OPTdata })
    }


    const onSaveOPT = () => {
        Event.emit({ type: 'onSaveOPTdata', data: { top: topTreeData, row: rowTreeData } })
    }

    const onRender = (e) => {
        updateModel4({
            title: '渲染列表',
            type: 'SetFieldRender',
            Event: Event,
            // width: 800,
            modelData: { OPTdata, APIdata, option: e },
            options: [
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'save',
                    text: '保存渲染',
                    onClick: () => {
                        Event.emit({ type: 'onClickSaveRender' })
                    }
                }
            ]
        })
    }

    const onSetForm = (e) => {
        updateModel4({
            title: e.title + ' - 表单编辑',
            type: 'SetFormList',
            Event: Event,
            modelData: { ...e, APIdata, OPTdata },
            options: [
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'add',
                    text: '添加分组',
                    onClick: () => {
                        updateModel2({
                            title: '添加表单分组',
                            type: 'CommonForm',
                            Event: Event,
                            width: 400,
                            height: 600,
                            modelData: {
                                formItem: 'AddRenderFormFormList',
                                eventBack: 'onFormGroup',
                                Initial: { span: 24, collapsible: false, defaultCollapsed: false }
                            }
                        })
                    }
                },
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'save',
                    text: '保存表单',
                    onClick: () => {
                        Event.emit({ type: 'onClickSaveForm' })
                    }
                }
            ]
        })
    }

    const onSetTabs = () => {
        console.log('设置多层列头')
    }


    // 修改操作
    const onModifyTop = (e) =>
        updateModel4({
            title: '修改全局操作',
            type: 'CommonForm',
            Event: Event,
            modelData: { formItem: 'AddTopOptionsFormList', Initial: e },
            options: [
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'before',
                    icon: 'fas fa-arrow-alt-circle-up',
                    text: '拷贝参数',
                    onClick: () => {
                        const success = copy(JSON.stringify(e))
                        if (success) message.success('复制成功！')
                        else message.error('复制失败！')
                    }
                },
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'fas fa-arrow-alt-circle-up',
                    text: '导入参数',
                    onClick: () => {
                        updateModel2({
                            title: '导入参数',
                            width: 800,
                            type: 'CommonForm',
                            Event: Event,
                            modelData: {
                                Initial: { uuid: e.uuid },
                                formItem: 'AddFieldsPaste',
                                eventBack: 'onPasteGlobalParams',
                            }
                        })
                    }
                },
            ]
        })
    const onModifyRow = (e) =>
        updateModel4({
            title: '修改局部操作',
            type: 'CommonForm',
            Event: Event,
            modelData: { formItem: 'AddRowOptionsFormList', Initial: e },
            options: [
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'before',
                    icon: 'fas fa-arrow-alt-circle-up',
                    text: '拷贝参数',
                    onClick: () => {
                        const success = copy(JSON.stringify(e))
                        if (success) message.success('复制成功！')
                        else message.error('复制失败！')
                    }
                },
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'fas fa-arrow-alt-circle-up',
                    text: '导入参数',
                    onClick: () => {
                        updateModel2({
                            title: '导入参数',
                            width: 800,
                            type: 'CommonForm',
                            Event: Event,
                            modelData: {
                                Initial: { uuid: e.uuid },
                                formItem: 'AddFieldsPaste',
                                eventBack: 'onPastePartialParams',
                            }
                        })
                    }
                },
            ]
        })

    // 删除操作
    const onDeleteTop = (e) => setTopTreeData(removeTreeByKey(topTreeData, e.uuid))
    const onDeleteRow = (e) => setRowTreeData(removeTreeByKey(rowTreeData, e.uuid))


    const evetnCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onSaveOPT', onSaveOPT],
            ['onAddOptions', () => onAddOptions(data)],
            ['onCommonFormBack', () => onAddOptions(data)],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    Event?.useSubscription(evetnCallBack)

    return (
        <div className='SetOptions'>
            <div className='Left'>
                <div>全局操作</div>
                <Tree
                    blockNode
                    draggable={{ icon: false }}
                    onDrop={e => {
                        const data = onTreeDrop(e, topTreeData, 'uuid')
                        setTopTreeData(data)
                    }}
                    selectable={false}
                    treeData={topTreeData}
                    defaultExpandAll
                    fieldNames={{ key: 'uuid' }}
                    titleRender={e => {
                        const { icon, color, title, position, tips, type, addType } = e
                        const A02 = type === 'A02' && addType === 'form'
                        return (
                            <div className='TreeItem'>
                                <div style={{ color }}>{ICONMapping[icon]}</div>
                                <div>
                                    <div style={{ color }}>{title}</div>
                                    <div>( {positionMapping[position]} ) : {tips || '-'}</div>
                                </div>
                                <div>
                                    {false && <Button type='link' onClick={() => onSetTabs(e)}>表头</Button>}
                                    {type === 'A01' && <Button type='link' onClick={() => onRender(e)}>渲染</Button>}
                                    {A02 && <Button type='link' onClick={() => onSetForm(e)}>表单</Button>}
                                    <Button type='link' onClick={() => onModifyTop(e)}>修改</Button>
                                    <Popconfirm
                                        title="删除提醒!"
                                        description="是否要删除当前操作?"
                                        onConfirm={() => onDeleteTop(e)}
                                        okText="删除"
                                        cancelText="取消"
                                    >
                                        <Button type='link' danger>删除</Button>
                                    </Popconfirm>

                                </div>
                            </div>
                        )
                    }}
                />

            </div>
            <div className='Right'>
                <div>局部操作</div>
                <Tree
                    blockNode
                    draggable={{ icon: false }}
                    onDrop={e => {
                        const data = onTreeDrop(e, rowTreeData, 'uuid')
                        setRowTreeData(data)
                    }}
                    selectable={false}
                    treeData={rowTreeData}
                    defaultExpandAll
                    fieldNames={{ key: 'uuid' }}
                    titleRender={e => {
                        const { icon, color, title, tips, type } = e
                        return (
                            <div className='TreeItem'>
                                <div style={{ color }}>{ICONMapping[icon]}</div>
                                <div>
                                    <div style={{ color }}>{title}</div>
                                    <div> 备注 : {tips || '-'}</div>
                                </div>
                                <div>
                                    {(type === 'B01' || type === 'B02') && <Button type='link' onClick={() => onSetForm(e)}>表单</Button>}
                                    <Button type='link' onClick={() => onModifyRow(e)}>修改</Button>
                                    <Popconfirm
                                        title="删除提醒!"
                                        description="是否要删除当前操作?"
                                        onConfirm={() => onDeleteRow(e)}
                                        okText="删除"
                                        cancelText="取消"
                                    >
                                        <Button type='link' danger>删除</Button>
                                    </Popconfirm>

                                </div>
                            </div>
                        )
                    }}
                />
            </div>
        </div>
    );
};

export default SetOptions;