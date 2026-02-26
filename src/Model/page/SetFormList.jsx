import './SetFormList.scss'

import { v4 } from 'uuid'
import { useMount } from 'ahooks'
import { useState, useCallback } from 'react'
import { Button, Popconfirm, App } from 'antd'
import TextBox from 'devextreme-react/text-box'
import Sortable from 'devextreme-react/sortable'
import ScrollView from 'devextreme-react/scroll-view'

import { modelStore } from '../../Router/zustand'

import { replaceNodeById, removeTreeByKey } from '../../Utils'
import { CheckBox } from 'devextreme-react/check-box';



function removeItem(array, removeIdx) {
    return array.filter((_, idx) => idx !== removeIdx);
}
function insertItem(array, item, insertIdx) {
    const newArray = [...array];
    newArray.splice(insertIdx, 0, item);
    return newArray;
}
function reorderItem(array, fromIdx, toIdx) {
    const item = array[fromIdx];
    const result = removeItem(array, fromIdx);
    return insertItem(result, item, toIdx);
}

const syncRenderFields = (renderFields, targetFields) => {
    console.log(renderFields, targetFields)
    const targetUuidMap = new Map(targetFields.map(item => [item.uuid, item]))
    // 清理不存在的字段
    const [arr0, ...arrList] = renderFields.map(subArray => subArray.filter(item => targetUuidMap.has(item.uuid)))
    // 找出缺失的字段并格式化
    const existingUuids = new Set(renderFields.flat().map(item => item.uuid));
    const missingFields = targetFields
        .filter(field => !existingUuids.has(field.uuid))
        .map((item) => ({ uuid: item.uuid, dataField: item.dataField, caption: item.caption, valueType: item.valueType, span: 24, }))
    return [[...arr0, ...missingFields], ...arrList]
}

const LeftItem = ({ item, Event }) => {
    const [value, setValue] = useState(item.caption)
    const valueChanged = useCallback((e) => {
        Event.emit({ type: 'onChangeFormItem', data: { uuid: item.uuid, value: { caption: e.value } } })
        setValue(e.value)
    }, []);


    return (
        <div className="SetLeftFormItem">
            <i className="handle dx-icon dx-icon-dragvertical" />
            <TextBox height={56} label={item.dataField} value={value} onValueChanged={valueChanged} />
        </div>
    )
}

const RightItem = ({ item, Event }) => {
    const [span, setSpan] = useState(item.span)
    const [caption, setCaption] = useState(item.caption)
    const [rules, setRules] = useState(item.rules)

    const captionChange = useCallback((e) => {
        Event.emit({ type: 'onChangeFormItem', data: { uuid: item.uuid, value: { caption: e.value } } })
        setCaption(e.value)
    }, [])
    const spanChange = useCallback((e) => {
        Event.emit({ type: 'onChangeFormItem', data: { uuid: item.uuid, value: { span: e.value } } })
        setSpan(e.value)
    }, [])
    const rulesChange = useCallback((e) => {
        Event.emit({ type: 'onChangeFormItem', data: { uuid: item.uuid, value: { rules: e.value } } })
        setRules(e.value)
    }, [])

    return (
        <div className="SetLeftFormItem" style={{ width: `calc(${100 / 24 * span}% - 16px)` }}>
            <i className="handle dx-icon dx-icon-dragvertical" />
            <TextBox height={56} label={item.dataField} value={caption} onValueChanged={captionChange} />
            <TextBox height={56} label='宽度' mode='number' value={span} onValueChanged={spanChange} />
            <div>
                {/* <div>{item.valueType}</div> */}
                <CheckBox text="必填" value={rules} onValueChanged={rulesChange} />
            </div>
        </div>
    )
}

const List = ({ data, list, index, onTaskDrop, Event }) => {
    const { notification } = App.useApp()

    const { updateModel2 } = modelStore()
    const { span, label, code } = data

    const onModify = () => {
        updateModel2({
            title: '添加表单分组',
            type: 'CommonForm',
            Event: Event,
            width: 400,
            height: 600,
            modelData: {
                formItem: 'AddRenderFormFormList',
                eventBack: 'onFormGroup',
                Initial: data
            }
        })
    }

    const onDelete = () => {
        if (list.length !== 0) {
            notification.error({ title: '删除失败!', description: '请先清空分组内的字段!!', key: 'SetFormList' })
            return false
        }
        Event.emit({ type: 'onDeleteFormGroup', data: data.uuid })
    }

    return (
        <div className='SetRightFormGtoup' style={{ width: `calc(${100 / 24 * span}% - 8px)` }}>
            <div className="handle-title">
                <div>{label}</div>
                {!code &&
                    <div>
                        <Button type='link' onClick={onModify}>修改</Button>
                        <Popconfirm
                            title="删除提醒!"
                            description="删除前请确保改分组内无字段?"
                            onConfirm={onDelete}
                            okText="删除"
                            cancelText="取消"
                        >
                            <Button type='link' danger>删除</Button>
                        </Popconfirm>

                    </div>
                }
            </div>
            <ScrollView className="scrollable-item" direction="vertical" showScrollbar="always">
                <Sortable handle='.handle' data={index} group="cardsGroup" onReorder={onTaskDrop} onAdd={onTaskDrop}>
                    {list.map((item) => (
                        <RightItem key={item.uuid} item={item} Event={Event} />
                    ))}
                </Sortable>
            </ScrollView>
        </div>
    )
}

const SetFormList = ({ data, Event }) => {
    const { updateModel2 } = modelStore()
    const { uuid, form, group, APIdata, OPTdata } = data
    const { fields } = APIdata

    const [Data, setData] = useState()
    const [FormList, setFormList] = useState()

    const onListReorder = useCallback(({ fromIndex, toIndex }) => {
        const [data, ...arr] = Data
        setData([data, ...reorderItem(arr, fromIndex, toIndex)])
        setFormList((state) => reorderItem(state, fromIndex, toIndex))
    }, [Data])

    const onTaskDrop = useCallback(({ fromData, toData, fromIndex, toIndex }) => {
        const updatedLists = [...Data];
        const item = updatedLists[fromData][fromIndex];
        updatedLists[fromData] = removeItem(updatedLists[fromData], fromIndex);
        updatedLists[toData] = insertItem(updatedLists[toData], item, toIndex);
        setData(updatedLists)
    }, [Data])

    const updateByUuid = (data, uuid, patch) => {
        for (const key of ['top', 'row']) {
            const arr = data[key];
            const idx = arr.findIndex(item => item.uuid === uuid)
            if (idx !== -1) {
                Object.assign(arr[idx], patch)
                return true
            }
        }
        return false
    }

    const onClickSaveForm = () => {
        const newData = { group: FormList, form: Data }
        updateByUuid(OPTdata, uuid, newData)
        Event.emit({ type: 'onSaveOPTdataA02', data: OPTdata })
    }

    const onChangeFormItem = (data) => {
        const { uuid, value } = data
        const newArr = Data.map(subArray => subArray.map(item => item.uuid === uuid ? { ...item, ...value } : item))
        setData(newArr)
    }

    const onFormGroup = (e) => {
        const { uuid } = e
        if (uuid) {
            const data = replaceNodeById(FormList, uuid, e)
            setFormList(data)
            updateModel2({})
        } else {
            setData(data => ([...data, []]))
            setFormList(data => ([...data, { ...e, uuid: v4() }]))
            updateModel2({})
        }
    }

    const onDeleteFormGroup = (uuid) => {
        const index = FormList.findIndex(item => item.uuid === uuid)
        const list = removeTreeByKey(FormList, uuid)
        const data = Data.filter((_, i) => i !== index)
        setFormList(list)
        setData(data)
    }

    const eventCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onClickSaveForm', onClickSaveForm],
            ['onFormGroup', () => onFormGroup(data)],
            ['onChangeFormItem', () => onChangeFormItem(data)],
            ['onDeleteFormGroup', () => onDeleteFormGroup(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    Event.useSubscription(eventCallBack)

    useMount(() => {
        if (form && form.length !== 0) {
            const data = syncRenderFields(form, fields)
            setFormList(group)
            setData(data)
        } else {
            const data = fields.map((item) => ({ uuid: item.uuid, dataField: item.dataField, caption: item.caption, valueType: item.valueType, span: 24, rules: true }))
            setData([data, []])
            setFormList([{ uuid: v4(), span: 24, label: '仅展示用.内部字段不会已分组形式出现!', collapsible: false, defaultCollapsed: true, code: true }])
        }
    })

    if (Data && FormList) {
        return (
            <div className='SetFormList'>
                <div className='Left'>
                    <div className="list-title">可选字段</div>
                    <ScrollView className="scrollable-list" direction="vertical" showScrollbar="always">
                        <Sortable handle='.handle' data={0} group="cardsGroup" onReorder={onTaskDrop} onAdd={onTaskDrop}>
                            {Data[0].map((item) => (
                                <LeftItem key={item.uuid} item={item} Event={Event} />
                            ))}
                        </Sortable>
                    </ScrollView>
                </div>
                <div className='Right'>
                    <div className="list-title">表单项</div>
                    <ScrollView className="scrollable-list RightScroll" direction="vertical" showScrollbar="always">
                        <Sortable
                            className="sortable-list"
                            handle=".handle-title"
                            onReorder={onListReorder}
                        >
                            {(() => {
                                const [_, ...arr] = Data
                                return arr.map((item, index) => (
                                    <List key={index} index={index + 1} Event={Event} data={FormList[index]} list={item} onTaskDrop={onTaskDrop} />
                                ))
                            })()}
                        </Sortable>
                    </ScrollView>
                </div>
            </div>
        );
    }
};

export default SetFormList;