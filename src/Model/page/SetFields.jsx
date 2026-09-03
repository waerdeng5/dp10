import './SetFields.scss'
import { v4 } from 'uuid'
import { flushSync } from 'react-dom'
import { useEventEmitter } from 'ahooks'
import { useState, useCallback } from 'react'
import { Popconfirm, Button, Result } from 'antd'
import { Sortable } from 'devextreme-react/sortable'


import { replaceNodeById, getDiffObjects } from '../../Utils'
import { formDefaultInit } from '../../Config'
import FormTemplate from '../../Utils/FormTemplate'
import { FormConfig } from '../../Config/configForm'
import { DevScrollView } from '../../Temp/DevTemplate'
import { modelStore } from '../../Router/zustand'



const SetFields = ({ data, Event }) => {
    const { fields } = data
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const [Data, setData] = useState(fields || [])
    const [ActiveData, setActiveData] = useState()

    const onSelectField = (item) => {
        flushSync(() => setActiveData(null))
        flushSync(() => setActiveData(item))
    }

    // 拖拽排序
    const onDragStart = useCallback((e) => { e.itemData = Data[e.fromIndex] }, [Data])
    const onReorder = useCallback((e) => {
        const { toIndex, itemData } = e
        setData(e => {
            const arr = e.filter(v => v.dataField !== itemData.dataField)
            arr.splice(toIndex, 0, itemData)
            return arr
        })
    }, [setData])


    const onModifyData = (e) => {
        const data = replaceNodeById(Data, e.uuid, e)
        setData(data)
        onSelectField(e)
    }


    const onAddCreateFields = () => {
        const addArr = [
            { dataField: 'uuid', caption: '表编号' },
            { dataField: 'tableName', caption: '简称' },
            { dataField: 'fullName', caption: '全称' },
            { dataField: 'code', caption: '识别码' },
            { dataField: 'keyword', caption: '助记码' },
            { dataField: 'sortId', caption: '排序' },
            { dataField: 'isEnabled', caption: '是否启用' },
            { dataField: 'remark', caption: '备注' },
            { dataField: 'createUserName', caption: '创建人员' },
            { dataField: 'createTime', caption: '创建时间' },
            { dataField: 'updateUserName', caption: '修改人员' },
            { dataField: 'updateTime', caption: '修改时间' },
        ]
        const diffArr = getDiffObjects(addArr, Data, 'dataField')
        if (diffArr.length === 0) return console.log('已全部存在')
        const data = diffArr.map(v => ({ uuid: v4(), ...v, ...formDefaultInit.FIELDinit }))
        setData(arr => ([...arr, ...data]))
        Event.emit({ type: 'onFormReset' })
    }

    const onFieldsImport = (e) => {
        const { importSplit, importField } = e
        const addArr = JSON.parse(importField).map(item => {
            const { key, description } = item
            if (importSplit) {
                if (!key.includes(importSplit)) return false
                const [_, dataField] = key.split(importSplit)
                return ({ dataField, caption: description })
            }
            return item
        }).filter(v => v)
        const diffArr = getDiffObjects(addArr, Data, 'dataField')
        if (diffArr.length === 0) return console.log('已全部存在')
        const data = diffArr.map(v => ({ uuid: v4(), ...v, ...formDefaultInit.FIELDinit }))
        setData(arr => ([...arr, ...data]))
        Event.emit({ type: 'onFormReset' })
    }

    const onFieldsPaste = e => {
        const { importField } = e
        const addArr = JSON.parse(importField)
        setData(arr => ([...arr, ...addArr]))
        Event.emit({ type: 'onFormReset' })
    }

    const onAddFieldsBack = (e) => {
        const status = Data.some(v => v.dataField === e.dataField)
        if (status) {
            notification.warning({ key: 'GenerateFields', title: '警告!', description: '字段重复!!' })
            FORMEVENT.emit({ type: 'closeFormLoading' })
            return
        }
        setData(arr => ([...arr, { uuid: v4(), ...e, ...formDefaultInit.FIELDinit }]))
        Event.emit({ type: 'onFormReset' })
    }

    const onDelete = (item) => {
        const data = Data.filter(v => v.uuid !== item.uuid)
        setData(data)
    }

    const onClearFields = () => {
        updateModel5({ title: '清空提示!', type: 'CommonModel', Event: Event, width: 640, height: 640, modelData: { openType: 'clearFields' } })
    }

    const onConfirmClearFields = () => {
        setData([])
        Event.emit({ type: 'onFormReset' })
        updateModel5({})
    }

    const onSaveField = () => {
        data.fields = Data
        Event.emit({ type: 'onSaveAPIdata', data })
    }


    const evetnCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onClearFields', onClearFields],
            ['onConfirmClearFields', onConfirmClearFields],
            ['onAddCreateFields', onAddCreateFields],
            ['onSaveField', () => onSaveField(data)],
            ['onFieldsImport', () => onFieldsImport(data)],
            ['onFieldsPaste', () => onFieldsPaste(data)],

            ['onCommonFormBack', () => onAddFieldsBack(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    Event?.useSubscription(evetnCallBack)

    const FormCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onFormBack', onModifyData(data)],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    const FORMEVENT = useEventEmitter()
    FORMEVENT.useSubscription(FormCallBack)

    return (
        <div className='SetFields'>
            <div className='left'>
                <DevScrollView>
                    <Sortable
                        allowReordering={true} // 重新排序
                        autoScroll={true}  // 自动滚动
                        dragDirection='both'  // both 双向  vertical 垂直
                        dropFeedbackMode='push'  // push 推动  indicate  标注
                        elementAttr={{ class: 'sortable' }}
                        scrollSensitivity={60}  // 滚动灵敏度
                        scrollSpeed={30}  // 滚动丝素
                        onDragStart={onDragStart}
                        onReorder={onReorder}
                    >
                        {Data.map(item => {
                            return (
                                <div
                                    key={item.uuid}
                                    className={`item dx-card FieldCard ${ActiveData?.dataField === item.dataField ? 'active' : ''}`}
                                    onClick={() => onSelectField(item)}
                                >
                                    <div className='content'>
                                        <div>{item.dataField}</div>
                                        <div>{item.caption}</div>
                                    </div>
                                    <div className='options'>
                                        <Popconfirm
                                            title="删除提醒!"
                                            description="是否要删除当前字段?"
                                            onConfirm={() => onDelete(item)}
                                            okText="删除"
                                            cancelText="取消"
                                        >
                                            <Button type='link' danger>删除</Button>
                                        </Popconfirm>
                                    </div>
                                </div>
                            )
                        })}
                    </Sortable>
                </DevScrollView>

            </div>
            <div className="right">
                {ActiveData ?
                    <DevScrollView>
                        <div className='SetFieldsFormList'>
                            <FormTemplate formItem={FormConfig.SetFieldsFormList} FORMEVENT={FORMEVENT} Initial={ActiveData} NotLoading />
                        </div>
                    </DevScrollView> :
                    <Result status="403" title="请选择左侧字段进行配置!" />
                }
            </div>
        </div>
    );
};

export default SetFields;