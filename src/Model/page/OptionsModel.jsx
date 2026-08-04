import './OptionsModel.scss'
import { v4 } from 'uuid'
import { Sortable } from 'devextreme-react/sortable'
import { useState, useCallback, useEffect } from 'react'
import { Result, App, Button, Radio, Transfer, Tree, Spin, Skeleton, Select } from "antd"
import { TreeList, SearchPanel, HeaderFilter, Selection } from 'devextreme-react/tree-list'
import { DataGrid, Scrolling, FilterRow, Column, Paging } from 'devextreme-react/data-grid'

import { useEventEmitter, useMount } from 'ahooks'

import { modelStore } from '../../Router/zustand'
import FormTemplate from '../../Utils/FormTemplate'
import { MappingData } from '../../Config/MappingData'
import { ICONMapping } from '../../Config/IconMapping'
import { axios, strOfurlParamsFunc } from '../../Utils/Api'
import { GetIndexedDB, PutIndexedDB } from '../../Utils/IndexedDB'
import { addAttr, AssemblySort, replaceNodeById, getNestedValue } from '../../Utils'
import {
    DevScrollView,
    filterOption,
    BaseTransfer,
    TableTransfer,
    TreeTransfer,
    ExcelTemplate,
    AttachTemplateA01,
} from '../../Temp/DevTemplate'
import { AITemplateA01 } from '../../Temp/AITemplate'
import { SwiperB20Template, SwiperAnnexTemplate } from '../../Temp/SwiperTemplate'
import { HappyProvider } from '@ant-design/happy-work-theme';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

const FlowMenuAPIFieldJugdeValue = ['RADIO', 'SELECT', 'SELECTM', 'TREE', 'TREEM', 'CASCADER', 'RADIOLIST', 'CHECKBOXLIST']

const OptionsModel = ({ data, Event }) => {
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const { message, modal, notification } = App.useApp()
    const { type, ORGUUID, OTHUUID, APIdata, targetUrl, Initial } = data
    // 类型赋值
    const valueTypeMapping = async (fields, formFields) => {

        const fieldsData = formFields.map(async item => {
            const field = fields.find(v => v.uuid === item.uuid)
            const { valueType } = field
            const { span, dataField, caption, rules } = item
            const obj = ({ span, formType: valueType, name: dataField, label: caption, rules })
            if (FlowMenuAPIFieldJugdeValue.includes(valueType)) {
                const { mappingType, mappingData, mappingApi, mappingPar, mappingJudge, mappingLable, mappingParExtra, mappingValue } = field
                if (mappingType === 'DataMapping') obj.valueEnum = MappingData[mappingData]

                if (mappingType === 'ApiMapping') {
                    const [err, api] = await axios({ method: 'get', url: mappingApi, params: { OrganizationUuid: ORGUUID, ...strOfurlParamsFunc(mappingPar) } })
                    if (err) return false
                    obj.valueEnum = addAttr(api.data.list, { label: mappingLable, value: mappingValue, extra: mappingParExtra, judge: mappingJudge })
                }
            }
            if (valueType.includes('UPLOAD')) {
                const { max, fileType, fileSize } = field
                obj.max = max
                obj.fileType = fileType
                obj.fileSize = fileSize
            }
            return obj
        })
        const results = await Promise.all(fieldsData)
        return results
    }
    // 组装数组 
    const AssemblyForm = async ({ fields, form, group }) => {
        const arr = group.map(async (item, index) => {
            const formFields = form[index + 1] || []
            if (item.code) {
                return await valueTypeMapping(fields, formFields)
            } else {
                const { span, label, collapsible, defaultCollapsed } = item
                return ({ span, formType: 'GROUP', name: v4(), label, collapsible, defaultCollapsed, children: await valueTypeMapping(fields, formFields) })
            }
        })

        const results = await Promise.all(arr)
        return results.flat()
    }
    if (type === 'A02' || type === 'B01') {
        const { api, fields } = APIdata
        const { addType } = data
        if (addType === 'form') {
            const [AIvisible, setAIvisible] = useState(false)
            const { form, group, formMethod, formUrl, formPath, formParams, isAI } = data
            const [formItem, setFormItem] = useState()
            const OptionsEvent = useEventEmitter()
            const onFormBack = async (e) => {
                const HttpData = { method: formMethod, url: formUrl }
                if (formPath) HttpData.path = formPath
                const params = { OrganizationUuid: ORGUUID, ...e, ...strOfurlParamsFunc(formParams) }
                if (api.othIsAdd) params[api.addParams] = OTHUUID

                const [err, res] = await axios({ ...HttpData, params })
                if (err) {
                    notification.error({ title: '保存失败!', key: 'OptionsModel' })
                    OptionsEvent.emit({ type: 'closeFormLoading' })
                    return false
                }
                notification.success({ title: '保存成功!', key: 'OptionsModel' })
                // targetUrl
                if (targetUrl === 'AdministratorsMenu') {
                    const [err, res] = await axios({ method: 'get', url: 'menu' })
                    if (err) return false
                    await PutIndexedDB('menu', res.data.list)
                    Event.emit({ type: 'changeMenu' })
                }
                Event.emit({ type: 'onSaveSuccess' })
                updateModel5({})
            }

            const EventCallBack = (e) => {
                const { type, data } = e
                const Mapping = new Map([
                    ['onFormBack', () => onFormBack(data)],
                    ['onOpenAI', () => setAIvisible(!AIvisible)],
                ])
                const func = Mapping.get(type)
                func?.(data)
            }
            OptionsEvent.useSubscription(EventCallBack)

            useMount(async () => {
                const formItem = await AssemblyForm({ fields, form, group })
                setFormItem(formItem)
            })

            if (formItem) return (
                <div className='OptionsModel__Form'>
                    <FormTemplate formItem={formItem} FORMEVENT={OptionsEvent} Initial={Initial} AI={isAI} />
                    {AIvisible &&
                        <div className='OptionsModel__Form__AI'>
                            <AITemplateA01 />
                        </div>
                    }
                </div>
            )
            else return <Skeleton active paragraph={{ rows: 16 }} />
        }

        if (addType === 'excel') {
            const { excelGetMethod, excelGetUrl, excelGetParams, excelSaveMethod, excelSaveUrl, excelSaveParams } = data
            const props = {
                data: Initial,
                Event,
                getData: { method: excelGetMethod, url: excelGetUrl, params: strOfurlParamsFunc(excelGetParams) },
                saveData: { method: excelSaveMethod, url: excelSaveUrl, params: strOfurlParamsFunc(excelSaveParams) }
            }
            return (
                <div className='OptionsModel__Excel'>
                    <ExcelTemplate {...props} />
                </div>
            )
        }
    }
    // !!! A系操作
    // *** 查询
    if (type === 'A03') {
        const { AddTopOptionsFormList_03, APIdata, Initial } = data
        const { fields } = APIdata
        const A03Event = useEventEmitter()
        const [formItem, setFormItem] = useState([])
        A03Event.useSubscription(val => {
            updateModel5({})
            Event.emit({ type: 'onSearchBack', data: val.data })
        })

        useMount(async () => {
            const data = await Promise.all(AddTopOptionsFormList_03.map(async item => {
                const { A03_type, A03_label, A03_value } = item
                if (A03_type === 'DEFAULT') {
                    const field = fields.find(v => v.dataField === A03_value)
                    if (!field) return null
                    return await valueTypeMapping(fields, [{ ...field, span: 24, rules: false }])
                } else { return ([{ span: 24, formType: A03_type, name: A03_value, label: A03_label }]) }
            }))
            setFormItem(data.filter(v => v).flat())
        })
        return <FormTemplate formItem={formItem} FORMEVENT={A03Event} Initial={Initial} />

    }
    // *** 排序
    if (type === 'A04') {
        const { AddTopOptionsFormList_04 } = data
        const [Data, setData] = useState(AddTopOptionsFormList_04 || [])

        const onReorder = useCallback((e) => {
            let updatedItems = [...Data.slice(0, e.fromIndex), ...Data.slice(e.fromIndex + 1)]
            updatedItems = [...updatedItems.slice(0, e.toIndex), e.itemData, ...updatedItems.slice(e.toIndex)]
            setData(updatedItems);
        }, [Data, setData])

        const onDragStart = useCallback((e) => { e.itemData = Data[e.fromIndex] }, [Data])

        const onChange = (e, item) => {
            item.A04_type = e.target.value
            const data = replaceNodeById(Data, item.A04_value, item, 'A04_value')
            setData(data)
        }

        const onSubmitSort = () => {
            updateModel5({})
            Event.emit({ type: 'onSortBack', data: Data })
        }

        return (
            <div className='OptionsModelA04'>
                <DevScrollView>
                    <Sortable handle='.handle' data={1} group="cardsGroup" onReorder={onReorder} onDragStart={onDragStart}>
                        {Data.map((item, index) => {
                            return (
                                <div className="OptionsModelA04_Box dx-card" key={index}>
                                    <i className="handle dx-icon dx-icon-dragvertical" />
                                    <div className='RenderItemLabel'>{item.A04_label}</div>
                                    <Radio.Group defaultValue={item.A04_type} buttonStyle="solid" onChange={e => onChange(e, item)}>
                                        <Radio.Button value="none">无序</Radio.Button>
                                        <Radio.Button value="asc">正序</Radio.Button>
                                        <Radio.Button value="desc">倒序</Radio.Button>
                                    </Radio.Group>
                                </div>
                            )
                        })}
                    </Sortable>
                </DevScrollView>
                <Button type='primary' onClick={onSubmitSort}>提交排序</Button>
            </div>
        )
    }
    // *** 批量操作
    if (type === 'A07') {
        const { select, A07_type, A07_method, A07_url, A07_params, A07_key, A07_tipsType, A07_tipsTitle, A07_tipsText } = data
        const [loading, setLoading] = useState(false)
        const apiData = { method: A07_method, url: A07_url }
        if (A07_type === 'confirm') {
            const params = A07_key ? { ...strOfurlParamsFunc(A07_params), [A07_key]: select } : select
            const onConfirm = async () => {
                setLoading(true)
                const [err, res] = await axios({ ...apiData, params })
                setLoading(false)
                if (err) return false
                Event.emit({ type: 'onRefreshData', data: {} })
                updateModel5({})
            }
            return (
                <div className='OptionsModelA07 Result'>
                    <Result
                        status={A07_tipsType}
                        title={A07_tipsTitle}
                        subTitle={A07_tipsText}
                        extra={[
                            <Button key="console" type="primary" onClick={onConfirm} loading={loading}> 确认 </Button>,
                            <Button key="buy" type="default" onClick={() => updateModel5({})} loading={loading}> 取消 </Button>,
                        ]}
                    />
                </div>
            )
        }
        if (A07_type === 'select') {
            const { A07_selectParams, A07_selectArr } = data
            const onSelect = async (e) => {
                const params = select.map(uuid => ({ uuid, [A07_selectParams]: e }))
                setLoading(true)
                const [err, res] = await axios({ ...apiData, params })
                setLoading(false)
                if (err) return false
                Event.emit({ type: 'onRefreshData', data: {} })
                updateModel5({})
            }
            const BtnData = A07_selectArr.map(({ A07_selectLabel, A07_selectValue, A07_selectType, A07_selectDanger }) => {
                return (
                    <Button key={A07_selectValue} type={A07_selectType} danger={A07_selectDanger} loading={loading} onClick={() => onSelect(A07_selectValue)}>
                        {A07_selectLabel}
                    </Button>
                )
            })
            return (
                <div className='OptionsModelA07 Result'>
                    <Result
                        status={A07_tipsType}
                        title={A07_tipsTitle}
                        subTitle={A07_tipsText}
                        extra={BtnData}
                    />
                </div>
            )
        }
        if (A07_type === 'form') {
            const { A07_formArr } = data
            const A07Event = useEventEmitter()
            const [formItem, setFormItem] = useState([])
            useMount(async () => {
                const data = await Promise.all(A07_formArr.map(async item => {
                    const { A07_formField, A07_formCaption, A07_formType, A07_tooltip, A07_tooltipText } = item
                    const formItem = { span: 24, formType: A07_formType, name: A07_formField, label: A07_formCaption }
                    if (A07_tooltip) formItem.tooltip = A07_tooltipText
                    if (FlowMenuAPIFieldJugdeValue.includes(A07_formType)) {
                        const { A07_formMapping, A07_formData, A07_apiUrl, A07_apiPar, A07_formValue, A07_formLable } = item
                        if (A07_formMapping === 'DataMapping') formItem.valueEnum = MappingData[A07_formData]

                        if (A07_formMapping === 'ApiMapping') {
                            const [err, api] = await axios({ method: 'get', url: A07_apiUrl, params: { OrganizationUuid: ORGUUID, ...strOfurlParamsFunc(A07_apiPar) } })
                            if (err) return false
                            const data = addAttr(api.data.list, { label: A07_formLable, value: A07_formValue })
                            formItem.valueEnum = data
                        }
                    }
                    return formItem
                }))
                setFormItem(data.filter(v => v))
            })
            A07Event.useSubscription(async e => {
                // const params = select.map(item => ({ [A07_key]: item, ...e.data }))
                const params = { [A07_key]: select, ...e.data }
                const [err, res] = await axios({ ...apiData, params })
                if (err) return false
                Event.emit({ type: 'onRefreshData', data: {} })
                updateModel5({})
            })
            return (
                <div>
                    <FormTemplate formItem={formItem} FORMEVENT={A07Event} />
                </div>
            )
        }
    }
    // *** 执行接口 -> 弹窗
    if (type === 'A12') {
        const [loading, setLoading] = useState(false)
        const { formMethod, formUrl, formParams, modelType, modelTitle, modelText } = data
        const apiData = { method: formMethod, url: formUrl, params: strOfurlParamsFunc(formParams) }

        const onConfirm = async () => {
            setLoading(true)
            const [err, res] = await axios(apiData)
            setLoading(false)
            if (err) return false
            Event.emit({ type: 'onRefreshData', data: {} })
            updateModel5({})
        }

        return (
            <div className='OptionsModelA07 Result'>

                <Result
                    status={modelType}
                    title={modelTitle || '操作提醒'}
                    subTitle={modelText || ''}
                    extra={[
                        <Button key="console" type="primary" onClick={onConfirm} loading={loading}> 确认 </Button>,
                        <Button key="buy" type="default" onClick={() => updateModel5({})} loading={loading}> 取消 </Button>,
                    ]}
                />
            </div>
        )
    }

    // !!! B系操作
    if (type === 'B02') {
        const { B02_method, B02_url, B02_params, B02_uuid, form, group } = data
        const { fields } = APIdata

        const [formItem, setFormItem] = useState()

        const B02Event = useEventEmitter()
        B02Event.useSubscription(async val => {
            const { type, data } = val
            if (type === 'onFormBack') {
                const params = { ...strOfurlParamsFunc(B02_params), ...data, [B02_uuid]: Initial.uuid, organizationUuid: ORGUUID }
                const [err, res] = await axios({ method: B02_method, url: B02_url, params })
                if (err) return console.log(err)
                if (err) {
                    notification.error({ title: '保存失败!', key: 'OptionsModel' })
                    OptionsEvent.emit({ type: 'closeFormLoading' })
                    return false
                }
                notification.success({ title: '保存成功!', key: 'OptionsModel' })
                Event.emit({ type: 'onSaveSuccess' })
                updateModel5({})
            }
        })

        useMount(async () => {
            const formItem = await AssemblyForm({ fields, form, group })
            setFormItem(formItem)
        })

        return (<FormTemplate formItem={formItem} FORMEVENT={B02Event} />)
    }
    // *** 删除
    if (type === 'B03') {
        const { B03_method, B03_url, B03_params, B03_title, B03_subTitle } = data
        const { uuid } = data.Initial
        const [loading, setLoading] = useState(false)
        const onDelete = async () => {
            setLoading(true)
            const params = { uuid, ...strOfurlParamsFunc(B03_params) }
            const [err, res] = await axios({ method: B03_method, url: B03_url, params })
            setLoading(false)
            if (err) return false
            if (targetUrl === 'AdministratorsMenu') {
                const [err, res] = await axios({ method: 'get', url: 'menu' })
                if (err) return false
                await PutIndexedDB('menu', res.data.list)
                Event.emit({ type: 'changeMenu' })
            }
            Event.emit({ type: 'onRefreshData', data: {} })
            updateModel5({})
        }

        return (
            <div className='OptionsModelB03 Result'>
                <Result
                    status="warning"
                    title={B03_title || '删除警告!'}
                    subTitle={B03_subTitle || ''}
                    extra={[
                        <Button type="primary" danger key="01" onClick={onDelete} loading={loading}>删除</Button>,
                        <Button type="default" key="02" onClick={() => updateModel5({})} loading={loading}>取消</Button>
                    ]}
                />
            </div>
        )
    }
    // *** 查看附件
    if (type == 'B04') {
        const { B04_urlType, B04_field, Initial } = data
        const [laoding, setLoading] = useState(true)
        const [LIST, setLIST] = useState([])

        const getData = (res) => {
            const urlData = getNestedValue(B04_field, res)
            const TYPEOF = typeof urlData
            if (TYPEOF === 'string') setLIST([{ uuid: v4(), url: urlData }])
            else setLIST(urlData)
            setLoading(false)
        }

        const getApiData = async () => {
            const { B04_method, B04_url, B04_params, B04_isData, B04_dataArr } = data
            const params = strOfurlParamsFunc(B04_params)
            if (B04_isData) B04_dataArr.forEach(item => params[item.label] = Initial[item.value])
            const [err, res] = await axios({ method: B04_method, url: B04_url, params })
            if (err) return console.log('数据获取失败')
            getData(res)
        }


        useEffect(() => {
            if (B04_urlType === 'A01') getData(Initial)
            else getApiData()
        }, [B04_urlType])


        if (laoding) return <div className='OptionsModelB09'><Spin /></div>
        return <SwiperAnnexTemplate data={LIST} />
    }
    // *** Excel
    if (type === 'B05') {
        const { Initial, DEVEvent, B05_method, B05_url, B05_params, B05_isMaster, B05_field, B05_mapping } = data
        const { B05_isSave, B05_saveMethod, B05_saveUrl, B05_saveParams, B05_saveMaster, B05_saveField, B05_saveMapping } = data
        const getData = { method: B05_method, url: B05_url, params: strOfurlParamsFunc(B05_params) }
        if (B05_isMaster) getData.params = { [B05_mapping]: Initial[B05_field], ...strOfurlParamsFunc(B05_params) }
        const props = { data: Initial, DEVEvent, getData }
        const saveData = { method: B05_saveMethod, url: B05_saveUrl }
        if (B05_isSave) props.saveData = saveData
        if (B05_isSave) props.saveParams = { B05_saveMaster, B05_saveParams, B05_saveField, B05_saveMapping }

        return (
            <div className='OptionsModelB05'>
                <ExcelTemplate {...props} />
            </div>
        )
    }
    // *** Table表单
    if (type === 'B06') {
        const { B06_type, B06_FilterRowVisible, B06_showBorders, B06_showRowLines, B06_showColumnLines, B06_rowAlternationEnabled } = data
        const { Initial, B06_method, B06_url, B06_params, B06_master, B06_field, B06_send, B06_list, B06_alignment } = data
        const Template = B06_type === 'DevExtremeDataGrid' ? DataGrid : TreeList
        const [Data, setData] = useState([])
        useMount(async () => {
            const params = { ...strOfurlParamsFunc(B06_params), pageIndex: 1, pageSize: 1000000 }
            if (B06_master) params[B06_send] = Initial[B06_field]
            const [err, res] = await axios({ method: B06_method, url: B06_url, params })
            if (err) return false
            setData(res.data.list)
        })
        return (
            <div className='OptionsModelB06'>
                <Template
                    id={v4()}
                    width='100%'
                    keyExpr='uuid'
                    dataStructure="tree"
                    itemsExpr='children'
                    dataSource={Data}
                    allowColumnReordering={true}
                    autoExpandAll={true}

                    allowColumnResizing={true}
                    columnResizingMode={true}
                    showColumnHeaders={true}

                    showBorders={B06_showBorders}
                    showRowLines={B06_showRowLines}
                    showColumnLines={B06_showColumnLines}
                    rowAlternationEnabled={B06_rowAlternationEnabled}
                >
                    {B06_list.map((item, index) => (<Column key={index} alignment={B06_alignment} {...item} />))}
                    <FilterRow visible={B06_FilterRowVisible} />
                    <Paging defaultPageSize={9999999} />
                    <Scrolling rowRenderingMode="virtual" columnRenderingMode="virtual" scrollByContent={true} showScrollbar='onHover' />
                </Template>
            </div>
        )
    }
    // *** 执行函数
    if (type === 'B08') {
        const { httpData, B08_modelType, B08_modelTitle, B08_modelSmall } = data
        const [loading, setLoading] = useState(false)
        const onDelete = async () => {
            const [err, res] = await axios(httpData)
            if (err) return false
            Event.emit({ type: 'onSaveSuccess' })
            setLoading(false)
            updateModel5({})
        }

        return (
            <div className='OptionsModelB08 Result'>
                <Result
                    status={B08_modelType}
                    title={B08_modelTitle || '操作提醒!'}
                    subTitle={B08_modelSmall || ''}
                    extra={[
                        <Button type="primary" key="01" onClick={onDelete} loading={loading}>确认</Button>,
                        <Button type="default" key="02" onClick={() => updateModel5({})} loading={loading}>取消</Button>
                    ]}
                />
            </div>
        )
    }
    // *** 穿梭框
    if (type === 'B09') {
        const TransferMapping = { base: BaseTransfer, tree: TreeTransfer, table: TableTransfer }
        const { Initial, B09_render, B09_tableArr } = data
        const { B09_orgData, B09_orgSend, B09_orgMethod, B09_orgUrl, B09_orgParams, B09_orgKeyValue, B09_orgKey, B09_orgValue } = data
        const { B09_leftMethod, B09_leftUrl, B09_leftParams, B09_leftUuid, B09_leftMapping } = data
        const { B09_rightMethod, B09_rightUrl, B09_rightParams, B09_rightUuid, B09_rightMapping } = data
        const { B09_saveMethod, B09_saveUrl, B09_saveParams, B09_saveSelect, B09_saveUuid, B09_saveMapping } = data

        const { uuid } = Initial
        const Template = TransferMapping[B09_render]

        const [Status, setStatus] = useState(false)
        const [LeftData, setLeftData] = useState([])
        const [RightData, setRightData] = useState([])

        const [TreeAll, setTreeAll] = useState([])
        const [TreeData, setTreeData] = useState([])
        const [TreeSelect, setTreeSelect] = useState()

        const getData = async (left, right) => {
            const [errLeft, resLeft] = await axios({ method: B09_leftMethod, url: B09_leftUrl, params: left })
            const [errRight, resRight] = await axios({ method: B09_rightMethod, url: B09_rightUrl, params: right })
            if (errLeft || errRight) return false
            setLeftData(resLeft.data.list)
            setRightData(resRight.data.list)
            setStatus(true)
        }

        useMount(async () => {
            const leftParams = { ...strOfurlParamsFunc(B09_leftParams) }
            const rightParams = { ...strOfurlParamsFunc(B09_rightParams) }
            if (B09_leftUuid) leftParams[B09_leftMapping] = uuid
            if (B09_rightUuid) rightParams[B09_rightMapping] = uuid
            if (B09_orgData === 'outside') {
                leftParams.organizationUuid = ORGUUID
                getData(leftParams, rightParams)
            } else {
                const [err, res] = await axios({ method: B09_orgMethod, url: B09_orgUrl, params: strOfurlParamsFunc(B09_orgParams) })
                if (err) return false
                const { all, defaultvalue, list } = res.data
                setTreeAll(all)
                setTreeData(list)
                setTreeSelect([defaultvalue])
            }
        })

        useEffect(() => {
            if (TreeSelect) {
                const leftParams = { ...strOfurlParamsFunc(B09_leftParams), [B09_orgSend]: TreeSelect[0] }
                const rightParams = { ...strOfurlParamsFunc(B09_rightParams), [B09_orgSend]: TreeSelect[0] }
                if (B09_leftUuid) leftParams[B09_leftMapping] = uuid
                if (B09_rightUuid) rightParams[B09_rightMapping] = uuid
                getData(leftParams, rightParams)
            }
        }, [TreeSelect])

        const onSelect = (e) => {
            if (e.length === 0) return false
            setTreeSelect(e)
        }

        const onSave = async () => {
            const params = RightData.map(item => {
                let mapping = TreeSelect ? { organizationUuid: TreeSelect[0] } : {}
                if (B09_saveUuid) mapping = { ...mapping, [B09_saveMapping]: uuid }
                return ({ ...strOfurlParamsFunc(B09_saveParams), [B09_saveSelect]: item, ...mapping })
            })
            const [err, res] = await axios({ method: B09_saveMethod, url: B09_saveUrl, params })
            if (err) return false
            Event.emit({ type: 'onRefreshData', data: {} })
            updateModel5({})
        }

        if (Status) {
            return (
                <div className='OptionsModelB09'>
                    {B09_orgData === 'inside' &&
                        <div className='Tree'>
                            <DevScrollView>
                                <Tree
                                    className='TreeBox'
                                    blockNode
                                    treeData={TreeData}
                                    selectedKeys={TreeSelect}
                                    expandedKeys={TreeAll}
                                    onExpand={setTreeAll}
                                    onSelect={onSelect}
                                    fieldNames={B09_orgKeyValue ? { key: B09_orgKey, title: B09_orgValue } : { key: 'value', title: 'label' }}
                                />
                            </DevScrollView>
                        </div>
                    }
                    <div className='Transfer'>
                        <Template
                            filterOption={filterOption}
                            dataSource={LeftData}
                            columns={B09_tableArr || []}
                            targetKeys={RightData}
                            onChange={setRightData}
                        />
                        <Button type='primary' onClick={onSave}>保存数据</Button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='OptionsModelB09'><Spin /></div>
            )
        }
    }
    // *** 数据审核
    if (type === 'B12') {
        const OptionsEvent = useEventEmitter()
        const [formItem, setFormItem] = useState()
        const { B08_method, B08_url, B08_params, B08_dataArr, B12Options_list } = data
        const postData = { method: B08_method, url: B08_url, params: { ...strOfurlParamsFunc(B08_params) } }

        const FORMITEM = async () => {
            const formITEM = B12Options_list.map(async v => {
                const { dataField, caption, valueType, mappingType, mappingData, mappingApi, mappingPar, mappingParExtra, mappingJudge,
                    mappingValue, mappingLable, tooltipStatus, tooltip, rules, judge, judgeData
                } = v
                const obj = { dataField, caption, valueType, rules, }
                if (FlowMenuAPIFieldJugdeValue.includes(valueType)) {
                    if (mappingType === 'DataMapping') obj.valueEnum = MappingData[mappingData]
                    if (mappingType === 'ApiMapping') {
                        const [err, api] = await axios({ method: 'get', url: mappingApi, params: { OrganizationUuid: ORGUUID, ...strOfurlParamsFunc(mappingPar) } })
                        if (err) return false
                        obj.valueEnum = addAttr(api.data.list, { label: mappingLable, value: mappingValue, extra: mappingParExtra, judge: mappingJudge })
                    }
                }
                return obj
            })
            const results = await Promise.all(formITEM)
            return results
        }


        useMount(async () => {
            const data = await FORMITEM()
            setFormItem(data)
        })
        if (formItem) return <FormTemplate formItem={formItem} FORMEVENT={OptionsEvent} />
        else return <Skeleton active paragraph={{ rows: 16 }} />
    }
    // *** 数据详情
    if (type === 'B14') {
        const { AddTopOptionsFormList_14, Initial } = data
        return (
            <div className='OptionsModelB14'>
                <DevScrollView>
                    <div className='Box'>
                        {AddTopOptionsFormList_14.map((item, index) => {
                            const { B14_label, B14_value, B14_type } = item
                            if (B14_type === 'txt') {
                                const txt = Initial[B14_value]
                                return txt && (
                                    <div className='TXT' key={index}>
                                        <div className='Label'>{B14_label} : </div>
                                        <div className='Value'>{txt}</div>
                                    </div>
                                )
                            }
                            if (B14_type === 'att') {
                                const arr = Initial[B14_value]
                                return arr?.length !== 0 && (
                                    <div className='ATT' key={index}>
                                        <div className='Label'>{B14_label} : </div>
                                        <div className='Attach'>
                                            <AttachTemplateA01 data={arr} />
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </DevScrollView>
            </div>
        )
    }
    // *** 权限分配
    if (type === 'B1501' || type === 'B1502') {
        const mapping = {
            B1501: {
                get1: 'roleMenu/GetRoleMenuDetailByUserUuid',
                get2: 'roleMenu/GetRoleMenuListByRole',
                post: 'roleMenu',
                params: 'menuUuid'
            },
            B1502: {
                get1: 'weChatMenu',
                get2: 'roleMenu/GetRoleWeChatMenuListByRole',
                post: 'roleMenu/AddRoleWeChatMenuNew',
                params: 'wechatMenuUuid'
            }
        }

        const { uuid } = Initial
        const [Loading, setLoading] = useState(false)
        const [menuData, setMenuData] = useState()
        const [roleData, setRoleData] = useState()
        const onSelectionChanged = e => {
            setRoleData(e.selectedRowKeys)
        }

        const onSave = async () => {
            setLoading(true)
            const params = roleData.map(item => ({ roleUuid: uuid, [mapping[type].params]: item }))
            const [err, res] = await axios({ method: 'post', url: mapping[type].post, params })
            if (err) return console.log('保存失败')
            notification.success({ title: '保存成功!', description: '角色权限已更新!' })
            updateModel5({})
        }

        useMount(async () => {
            const [menuErr, menuRes] = await axios({ method: 'get', url: mapping[type].get1, params: { RoleUuid: uuid } })
            const [roleErr, roleRes] = await axios({ method: 'get', url: mapping[type].get2, params: { RoleUuid: uuid } })
            if (menuErr || roleErr) return console.log('权限信息获取失败')
            setMenuData(menuRes.data.list)
            setRoleData(roleRes.data)
        })

        if (menuData && roleData) {
            return (
                <div className='OptionsModelB1501'>
                    <TreeList
                        id="tasks"
                        keyExpr="uuid"
                        itemsExpr="children"
                        dataStructure="tree"
                        dataSource={menuData}
                        showBorders={true}
                        autoExpandAll={true}
                        columnAutoWidth={true}
                        wordWrapEnabled={true}
                        selectedRowKeys={roleData}
                        onSelectionChanged={onSelectionChanged}
                    >
                        <SearchPanel visible={true} width={400} />
                        <HeaderFilter visible={true} />
                        <Selection mode="multiple" />
                        <Column dataField="tableName" caption="名称" alignment='left' />
                        <Column dataField="remark" caption="备注" alignment='right' />
                    </TreeList>

                    <Button type='primary' loading={Loading} onClick={onSave}>保存</Button>
                </div>
            )
        } else return <div className='OptionsModelB1501'><Spin /></div>
    }
    if (type === 'B20') {
        return (<SwiperB20Template data={data} />)
    }
    if (type === 'B1607') {
        const handleData = (e) => {
            const parsedData = JSON.parse(e.data)
            const content = parsedData.content
            return content
        };
        const TitleMapping = { A01: '对比合同', A02: '审核模板', A03: '提取模板' }
        const OptionsEvent = useEventEmitter()
        const { B1067_type, B1067_url, B1067_sse } = data
        const [{ url }] = Initial[B1067_url]
        const { tableName } = Initial
        const [ModelList, setModelList] = useState([])
        const [ModelCode, setModelCode] = useState()
        const [SelectValue, setSelectValue] = useState()
        const [Options, setOptions] = useState([])
        const [ButtonStatus, setButtonStatus] = useState({ disabled: true, loading: false })

        const [Result, setResult] = useState('')

        const getModel = async () => {
            const [err, res] = await axios({ method: 'get', url: 'menuDictionary', params: { MenuDictionaryTypeUuid: '9b3e80b7-1d76-4bd0-9f33-a4a726e56d36' } })
            if (err) return console.log('获取菜单字失败')
            setModelList(res.data.list)
        }

        const onOpenContract = (url, type) => {
            const obj = {
                type: 'CommonModel',
                Event: OptionsEvent,
                width: 600,
                height: '100vh',
                shading: false,
                position: { my: 'left ', at: 'left ', of: window },
                modelData: { openType: 'attDetail', type: 'pdf', url }
            }
            type === 'A01' ? updateModel1({ ...obj, title: '合同文件' }) : updateModel2({ ...obj, title: '对比合同' })
        }
        const getA01Options = async () => {
            const [err, res] = await axios({ method: 'GET', url: 'contractTemplate', params: { pageIndex: 1, pageSize: 10000 } })
            if (err) return console.log('获取对比合同失败')
            setOptions(res.data.list)
        }
        const getA02Options = async () => {

            const [err, res] = await axios({ method: 'GET', url: 'contractReview/GetContractReviewRulesListByRules', params: { organizationUuid: ORGUUID } })
            if (err) return console.log('获取审核模板失败')
            const options = res.data.list.map(item => ({ uuid: item.tablename, tableName: item.tablename }))
            setOptions(options)
        }

        const onSelect = (e) => {
            setSelectValue(e)
            setButtonStatus({ disabled: false, loading: false })
        }

        const onSelectModel = (e) => {
            setButtonStatus({ disabled: false, loading: true })
            const { code, tableName } = e
            setModelCode(tableName)

            if (B1067_type === 'A01') {
                const { contractAttachment } = Options.find(v => v.uuid === SelectValue)
                const [{ url: tgDocxUrl }] = contractAttachment
                const acDocx = tgDocxUrl.replace(/.pdf/, '.docx')
                const tgDocx = url.replace(/.pdf/, '.docx')
                const params = `${B1067_sse}?template_contract_file_url=${acDocx}&target_contract_file_url=${tgDocx}&model=${code}`
                var eventSource = new EventSource(params)
                eventSource.onopen = e => { console.log('开始解析') }
                // eventSource.onmessage = e =>  init.Result = `${init.Result}${handleData(e)}`
                eventSource.onmessage = e => setResult(data => (data + handleData(e)))
                eventSource.onerror = (e) => {
                    eventSource.close()
                    message.error('解析失败!')
                    setButtonStatus({ disabled: false, loading: false })
                }
                eventSource.addEventListener('completed', (event) => {
                    eventSource.close()
                    message.success('解析完成!')
                    setButtonStatus({ disabled: false, loading: false })
                })
            }
            if (B1067_type === 'A02') {
                const tgDocx = url.replace(/.pdf/, '.docx')
                var eventSource = new EventSource(`${B1067_sse}?file_url=${tgDocx}&prompt_str=${SelectValue.join(',')}&model=${code}`)
                eventSource.onopen = e => { console.log('开始解析') }
                eventSource.onmessage = e => setResult(data => (data + handleData(e)))
                eventSource.onerror = (e) => {
                    eventSource.close()
                    message.error('解析失败!')
                    setButtonStatus({ disabled: false, loading: false })
                }
                eventSource.addEventListener('completed', (event) => {
                    eventSource.close()
                    message.success('解析完成!')
                    setButtonStatus({ disabled: false, loading: false })
                })
            }
            if (B1067_type === 'A03') {
                const tgDocx = url.replace(/.pdf/, '.docx')
                var eventSource = new EventSource(`${B1067_sse}?file_url=${tgDocx}&prompt_str=${SelectValue.join(',')}&model=${code}`)
                eventSource.onopen = e => { console.log('开始解析') }
                eventSource.onmessage = e => setResult(data => (data + handleData(e)))
                eventSource.onerror = (e) => {
                    eventSource.close()
                    message.error('解析失败!')
                    setButtonStatus({ disabled: false, loading: false })
                }
                eventSource.addEventListener('completed', (event) => {
                    eventSource.close()
                    message.success('解析完成!')
                    setButtonStatus({ disabled: false, loading: false })
                })
            }
        }

        useEffect(() => {
            getModel()
            if (B1067_type === 'A01') getA01Options()
            if (B1067_type === 'A02') getA02Options()
            if (B1067_type === 'A03') getA02Options()
        }, [B1067_type])


        return (
            <div className='OptionsModelB1607'>
                <div className='Left'>
                    <div className='selected'>
                        <div>合同文件</div>
                        <div onClick={() => onOpenContract(url, 'A01')}>
                            <div>{ICONMapping['fasFileWord']}</div>
                            <div>{tableName}</div>
                        </div>
                    </div>
                    <div className='selected'>
                        <div>{TitleMapping[B1067_type]}</div>
                        {(() => {
                            if (B1067_type === 'A01') {
                                if (SelectValue) {
                                    const item = Options.find(v => v.uuid === SelectValue)
                                    const { tableName, contractAttachment } = item
                                    const [{ url }] = contractAttachment
                                    return (
                                        <div onClick={() => onOpenContract(url, 'A02')}>
                                            <div>{ICONMapping['fasFileWord']}</div>
                                            <div>{tableName}</div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            <div>{ICONMapping['farFileExcel']}</div>
                                            <div>请选择对比合同</div>
                                        </div>
                                    )
                                }
                            }
                            if (B1067_type === 'A02' || B1067_type === 'A03') {
                                if (SelectValue && SelectValue.length !== 0) {
                                    const text = SelectValue.join('、')
                                    return (
                                        <div >
                                            <div>{ICONMapping['fasFileAlt']}</div>
                                            <div>{text}</div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            <div>{ICONMapping['farFileExcel']}</div>
                                            <div>请选择模板</div>
                                        </div>
                                    )
                                }
                            }
                        })()}
                    </div>
                    {ModelCode && <div className='ModelCodeTITLE'>{ModelCode} {ButtonStatus.loading ? '解析中...' : '解析完成'}</div>}
                </div>
                <div className='Right'>
                    <div className='Content'>
                        <DevScrollView>
                            <div className='text'>
                                <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: true }]]}  >
                                    {Result}
                                </ReactMarkdown>
                            </div>
                        </DevScrollView>
                        {true && <Button type='primary'>保存分析结果</Button>}
                    </div>
                    <div className='Options'>
                        <Select
                            mode={B1067_type === 'A01' ? false : 'multiple'}
                            placement='topLeft'
                            disabled={ButtonStatus.loading}
                            options={Options}
                            variant="underlined"
                            placeholder={`请选择${TitleMapping[B1067_type]}`}
                            fieldNames={{ label: 'tableName', value: 'uuid' }}
                            onChange={onSelect}
                        />
                        <div>
                            {ModelList.map(v => (
                                <HappyProvider key={v.uuid}>
                                    <Button
                                        type='primary'
                                        disabled={ButtonStatus.disabled}
                                        loading={ButtonStatus.loading}
                                        onClick={() => onSelectModel(v)}
                                    >
                                        {v.tableName}
                                    </Button>
                                </HappyProvider>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='OptionsModelNone'>
            <Result status="403" title={`OptionsModel - 未找到功能项 - ${type}`} />
        </div>
    )

};

export default OptionsModel;