import './SetFields.scss'
import { v4 } from 'uuid'
import { flushSync } from 'react-dom'
import { useEventEmitter } from 'ahooks'
import { Sortable } from 'devextreme-react/sortable'
import { useState, useCallback, useRef } from 'react'
import { Popconfirm, Button, Result, Tour } from 'antd'

import { BugOutlined } from '@ant-design/icons';
import { HappyProvider } from '@ant-design/happy-work-theme'

import { formDefaultInit } from '../../Config'
import { modelStore } from '../../Router/zustand'
import FormTemplate from '../../Utils/FormTemplate'
import { FormConfig } from '../../Config/configForm'
import { DevScrollView } from '../../Temp/DevTemplate'
import { replaceNodeById, getDiffObjects } from '../../Utils'

const SetFields = ({ data, Event }) => {
    const leftRef = useRef(null)
    const rightRef = useRef(null)
    const [open, setOpen] = useState(false)
    const [steps, setSteps] = useState([])
    const [loading, setLoading] = useState(false)

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

    const onHelp = () => {
        setLoading(true)
        const OLAPSteps = [
            {
                title: '字段设置',
                description: '设置表单字段的参数.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldA01.png" />),
                target: () => null
            },
            {
                title: '字段列表',
                description: '当前接口可用字段列表.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldA02.png" />),
                target: () => leftRef.current
            },
            {
                title: '字段设置',
                description: '设置单项字段的参数信息',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldA03.png" />),
                target: () => rightRef.current
            }
        ]
        setSteps(OLAPSteps)
        setOpen(true)
    }
    const onHelpA02 = () => {
        setSteps([])
        FORMEVENT.emit({ type: 'getHelpList' })
    }

    const openTour = ({ map, form }) => {
        const OLAPSteps = [
            {
                title: '字段设置',
                description: '单项字段的完整设置.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldItemA01.png" />),
                target: () => null
            },
            {
                title: '基础信息',
                description: '字段的表单中的主要渲染类型.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldItemA02.png" />),
                target: () => map.get('SetFieldsFormList_01')
            },
            {
                title: '列表渲染',
                description: '字段在列表中字段的列设置',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldItemA03.png" />),
                target: () => map.get('SetFieldsFormList_02')
            },
            {
                title: '排序设置',
                description: '表单允许排序下,字段的排序设置.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldItemA04.png" />),
                target: () => map.get('SetFieldsFormList_04')
            },
            {
                title: '筛选设置',
                description: '表单允许筛选下,字段的筛选设置.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldItemA05.png" />),
                target: () => map.get('SetFieldsFormList_05')
            },
            {
                title: '分组设置',
                description: '表单需要分组下,字段的分组设置.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldItemA06.png" />),
                target: () => map.get('SetFieldsFormList_03')
            },
            {
                title: '判断渲染',
                description: '字段在表单中是否根据条件渲染.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldItemA07.png" />),
                target: () => map.get('SetFieldsFormList_06')
            },
            {
                title: '数值渲染',
                description: '数值型字段的渲染格式.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldItemA08.png" />),
                target: () => map.get('SetFieldsFormList_07')
            },
            {
                title: '额外模板',
                description: '字段在表单中是否显示额外的模板.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldItemA09.png" />),
                target: () => map.get('SetFieldsFormList_08')
            },
            {
                title: '总体统计',
                description: '字段在表单中下方的统计设置.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldItemA10.png" />),
                target: () => map.get('SetFieldsFormList_09')
            },
            {
                title: '分组统计',
                description: '字段在表单中分组下的统计设置.',
                cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpFieldItemA11.png" />),
                target: () => map.get('SetFieldsFormList_10')
            }
        ]
        setSteps(OLAPSteps)
        setOpen(true)
    }

    const onCloseHelp = () => {
        setSteps([])
        setOpen(false)
        setLoading(false)
    }

    const FormCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onOpenHelp', onHelpA02],
            ['onFormBack', () => onModifyData(data)],
            ['getMap', () => openTour(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    const FORMEVENT = useEventEmitter()
    FORMEVENT.useSubscription(FormCallBack)
    return (
        <div className='SetFields'>
            <HappyProvider>
                <Button className='TourBtn' type="primary" shape="circle" loading={loading} onClick={() => onHelp()} icon={<BugOutlined />} />
            </HappyProvider>
            <div className='left' ref={leftRef}>
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
            <div className="right" ref={rightRef}>
                {ActiveData ?
                    <DevScrollView>
                        <div className='SetFieldsFormList'>
                            <FormTemplate formItem={FormConfig.SetFieldsFormList} FORMEVENT={FORMEVENT} Initial={ActiveData} NotLoading Help />
                        </div>
                    </DevScrollView> :
                    <Result status="403" title="请选择左侧字段进行配置!" />
                }
            </div>

            <Tour open={open} onClose={onCloseHelp} steps={steps} />
        </div>
    );
};

export default SetFields;