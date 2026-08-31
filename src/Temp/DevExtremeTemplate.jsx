import dayjs from 'dayjs'
import { v4 } from 'uuid'
import { jsPDF } from 'jspdf'
import { Workbook } from 'exceljs'
import { useEventEmitter, useMount } from 'ahooks'
import Splitter, { Item } from 'devextreme-react/splitter'
import { memo, useMemo, useState, useCallback } from 'react'
import { Button, Dropdown, Tree, App, Tag, Badge } from "antd"
import { exportDataGrid as exportExcel } from 'devextreme/excel_exporter'
import { exportDataGrid as exportPDF } from 'devextreme-react/common/export/pdf'
import { VerticalAlignTopOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons'
import { Column, Summary, TotalItem, GroupItem, Lookup } from 'devextreme-react/data-grid'

import { CommonAPIUrl } from '../Config'
import { DevScrollView } from './DevTemplate'
import { MappingData } from '../Config/MappingData'
import { ICONMapping } from '../Config/IconMapping'
import DevExtremeDataGrid from './DevExtremeDataGrid'
import DevExtremeTreeGrid from './DevExtremeTreeGrid'
import DevExtremeCardGrid from './DevExtremeCardGrid'
import DevExtremeOLAPGrid from './DevExtremeOLAPGrid'
import { axios, strOfurlParamsFunc } from '../Utils/Api'
import { GetIndexedDB, Decrypt } from '../Utils/IndexedDB'
import { modelStore, pageStore } from '../Router/zustand'
import { ColorCallBack, SpacingCallBack, OpenMenuFunc, treeValue } from '../Utils'

const DevMapping = { DevExtremeDataGrid, DevExtremeTreeGrid, DevExtremeCardGrid, DevExtremeOLAPGrid }

// 导出函数
export const onExporting = (e) => {
    const { format, component } = e
    if (format === 'xlsx') {
        const workbook = new Workbook()
        const worksheet = workbook.addWorksheet('Main sheet')
        exportExcel({ component: component, worksheet, autoFilterEnabled: true }).then(() =>
            workbook.xlsx.writeBuffer().then((buffer) => saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DEVExcel.xlsx'))
        )
    }
    if (format === 'pdf') {
        const doc = new jsPDF();
        exportPDF({ jsPDFDocument: doc, component: component, indent: 5, }).then(() => { doc.save('Companies.pdf') })
    }
}

// 额外渲染模板
const CellRender = ({ data, field, temp }) => {
    switch (temp) {
        case 'icon': return data.value ? ICONMapping[data.value] : '-'
        case 'date': return data.value ? dayjs(data.value).format(field.dateRender) : '-'
        case 'url': return data.value ? <a href={`${data.value}`} target="_blank">{data.value}</a> : '-'
        case 'status':
            const { status_list, statusBadge, statusTag, statusTagType } = field
            const mapping = status_list.find(v => v.value === data.value)
            if (!mapping) return <div>{data.value}</div>
            const StatusTemp = () => (<>{statusBadge && <Badge color={mapping.color} style={{ marginRight: 4 }} />}  {data.value}</>)
            if (statusTag) return (<Tag color={mapping.color} variant={statusTagType}><StatusTemp /></Tag >)
            return <StatusTemp />
        default: return '未知模板,请联系管理员'
    }
}

// 渲染字段
export const DevFieldTemplate = memo(({ POWER, OPTdata, Fields }) => {
    const { top } = OPTdata
    const uuidSet = useMemo(() => {
        if (!Array.isArray(POWER)) return new Set()
        return new Set(POWER)
    }, [POWER])

    const columnConfigs = useMemo(() => {
        try {
            if (!Array.isArray(top) || top.length === 0) return []
            if (!Array.isArray(Fields) || Fields.length === 0) return []
            const authorizedConfigs = top.filter(item => item?.type === 'A01' && uuidSet.has(item.uuid))
            if (authorizedConfigs.length === 0) return []
            const [{ fields }] = authorizedConfigs;
            if (!fields || !Array.isArray(fields) || fields.length < 2) return []
            return fields[1]
                .map(config => {
                    const field = Fields.find(f => f?.uuid === config.uuid);
                    return field ? { ...field, ...config, order: fields[1].indexOf(config) } : null;
                }).filter(Boolean).sort((a, b) => a.order - b.order)

        } catch (error) { return [] }
    }, [uuidSet, top, Fields])

    if (columnConfigs.length === 0) return false

    return columnConfigs.map(item => {
        const { uuid, format, formatType, formatPrecision, cellRender, cellRenderTemp, fieldData, mappingType, mappingLable, mappingValue, mappingData,
            defaultSortIndex, defaultSortOrder, groupIndex, groupItemStatus,
            ...pop } = item
        const Status = mappingType === 'DataMapping'
        return (
            <Column
                key={uuid}
                {...pop}
                format={format ? { type: formatType, precision: formatPrecision } : format}
                cellRender={cellRender ? e => <CellRender data={e} temp={cellRenderTemp} field={item} /> : false}
            >
                {Status &&
                    <Lookup
                        dataSource={MappingData[mappingData]}
                        valueExpr={mappingValue}
                        displayExpr={mappingLable}
                    />
                }
            </Column>
        )
    })
})

// 统计组件
export const SummaryTemplate = memo(({ Fields }) => {
    const totalArr = Fields?.filter(v => v.totalItemStatus)
    const groupArr = Fields?.filter(v => v.groupItemStatus)
    return (
        <Summary>
            {totalArr && totalArr.length !== 0 && totalArr.map((item, index) => (
                <TotalItem
                    key={index}
                    column={item.dataField}
                    summaryType={item.totalSummaryType}
                    showInColumn={item.totalShowInColumn}
                    alignment={item.totalAlignment}
                    valueFormat={item.format ? { type: item.formatType, precision: item.formatPrecision } : false}
                    displayFormat={`${item.totalDisplayFormat || ''}{0}`}
                />
            ))}

            {groupArr && groupArr.length !== 0 && groupArr.map((item, index) =>
                <GroupItem
                    key={index}
                    column={item.dataField}
                    summaryType={item.groupSummaryType}
                    valueFormat={item.format ? { type: item.formatType, precision: item.formatPrecision } : false}
                    displayFormat={`${item.groupDisplayFormat || ''}{0}`}
                />
            )}
        </Summary>
    )
})

// 头部信息
export const DevExtremeHeader = (props) => {
    const { data, POWER, APIdata, THEdata, OPTdata, ORGUUID, OTHUUID, DEVEvent } = props
    const { message, modal, notification } = App.useApp()
    const { targetUrl } = data
    const { updateModel, updateModel5 } = modelStore()
    const { pageActive, pageList, updateActive, updateList } = pageStore()
    const pageFunc = { pageActive, pageList, updateActive, updateList }
    const [SortData, setSortData] = useState()
    const [SearchData, setSearchData] = useState()
    const [SelectedRowKeys, setSelectedRowKeys] = useState([])
    const devCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onSortBack', () => setSortData(data)],
            ['onSearchBack', () => setSearchData(data)],
            ['onSelectionChanged', () => setSelectedRowKeys(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    DEVEvent?.useSubscription(devCallBack)

    const { top } = OPTdata
    const uuidSet = new Set(POWER)
    const filteredArray = top.filter(item => uuidSet.has(item.uuid))

    const { top_Back, top_Margin, top_Shadow, top_Padding, top_itemMargin, top_itemOrder } = THEdata.style
    const TopStyle = {
        background: top_Back,
        margin: SpacingCallBack(top_Margin),
        padding: SpacingCallBack(top_Padding),
        boxShadow: `var(${top_Shadow})`
    }

    if (filteredArray.length === 0) return <div className='DevExtremeHeader' style={TopStyle}></div>
    const leftData = filteredArray.filter(v => v.position === 'left')
    const rightData = filteredArray.filter(v => v.position === 'right')
    const { top_iconSize, top_iconShadowX, top_iconShadowY, top_iconShadowS, top_iconShadowB } = THEdata.style
    const { top_fontSize, top_fontFamily, top_fontStyle, top_fontWeight } = THEdata.style
    const { top_fontShadowX, top_fontShadowY, top_fontShadowS, top_fontShadowB } = THEdata.style
    const fontStyle = {
        margin: `0 ${top_itemMargin}px`,
        flexDirection: top_itemOrder === 'texticon' ? 'row-reverse' : 'row'
    }
    const iconStyle = {
        fontSize: top_iconSize,
        filter: `drop-shadow(${top_iconShadowX}px ${top_iconShadowY}px ${top_iconShadowS}px ${top_iconShadowB})`
    }
    const textStyle = {
        fontSize: top_fontSize,
        fontStyle: top_fontStyle,
        fontFamily: top_fontFamily,
        fontWeight: top_fontWeight,
        filter: `drop-shadow(${top_fontShadowX}px ${top_fontShadowY}px ${top_fontShadowS}px ${top_fontShadowB})`
    }

    const A02Func = (options) => {
        const menuData = { ...options, menuData: data }
        updateModel5({ title: data.title, type: 'OptionsModel', Event: DEVEvent, modelData: { ...menuData, APIdata, ORGUUID, OTHUUID, targetUrl } })
    }

    const A03Func = (data) => {
        updateModel5({ title: data.title, type: 'OptionsModel', Event: DEVEvent, width: 800, modelData: { ...data, APIdata, Initial: SearchData } })
    }
    const A04Func = (data) => {
        updateModel5({ title: data.title, type: 'OptionsModel', Event: DEVEvent, width: 800, modelData: { ...data, APIdata, Initial: SortData } })
    }
    const A05Func = (data) => {
        DEVEvent.emit({ type: 'onRefreshData', data })
    }
    const A06Func = (data) => {
        console.log('导出数据', data)
    }
    const A07Func = (data) => {
        if (SelectedRowKeys.length === 0) return message.warning('请先选择数据!')
        updateModel5({ title: data.title, type: 'OptionsModel', Event: DEVEvent, width: 800, modelData: { ...data, select: SelectedRowKeys } })
    }
    const A08Func = (data) => {
        const { title, openPage, modelWidth } = data
        updateModel5({ title: title, type: openPage, Event: DEVEvent, width: modelWidth, modelData: data })
    }
    const A0901Func = async (data) => {
        const layout = localStorage.getItem(targetUrl)
        const { uuid } = await GetIndexedDB('config')
        const params = { uuid: `${uuid}/OLAPLayout/${targetUrl}`, content: layout }
        const [err, res] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (err) return message.error(err.message)
        notification.success({ title: '保存成功!', description: '新OLAP布局保存成功!' })
    }
    const A0902Func = async (data) => {
        const { uuid } = await GetIndexedDB('config')
        const [err, res] = await axios({
            method: 'get',
            path: CommonAPIUrl,
            url: 'projects/GetJsonInfoByUuid',
            params: { uuid: `${uuid}/OLAPLayout/${targetUrl}` }
        })
        if (err) return message.error(err.message)
        localStorage.setItem(targetUrl, JSON.stringify(res))
        DEVEvent.emit({ type: 'onRefreshData', data: {} })
        notification.success({ title: '重置成功!', description: '当前布局信息已同步线上!' })
    }
    const A0903Func = (data) => {
        updateModel5({ title: data.title, type: 'CommonModel', Event: DEVEvent, modelData: { openType: data.type } })
    }
    const A1001Func = (data) => {
        updateModel5({ title: data.title, type: 'CommonModel', Event: DEVEvent, width: 640, modelData: { openType: data.type } })
    }
    const A1002Func = (data) => {
        updateModel5({ title: data.title, type: 'CommonModel', Event: DEVEvent, width: 640, modelData: { openType: data.type } })
    }

    const A1101Func = (data) => {
        if (SelectedRowKeys.length === 0) return message.warning('请先选择数据!')
        updateModel5({ title: data.title, type: 'CommonModel', Event: DEVEvent, width: 800, modelData: { openType: data.type, ...data, select: SelectedRowKeys } })
    }

    const A12Func = async (data) => {
        // console.log(data)
        const { title, formMethod, formUrl, formParams, successTips, isModel, modelWidth } = data
        if (isModel) updateModel5({ title: title, type: 'OptionsModel', Event: DEVEvent, width: modelWidth || 800, height: 600, modelData: data })
        else {
            const apiData = { method: formMethod, url: formUrl, params: strOfurlParamsFunc(formParams) }
            const [err, res] = await axios(apiData)
            if (err) return console.log(err)
            notification.success({ title: '执行成功!', description: successTips })
        }
    }

    const A13Func = async (data) => {
        const { body_tabsMax } = await GetIndexedDB('theme')
        const [{ children: menu }] = await GetIndexedDB('menu')
        const { A13_uuid, A13_url, A13_type, A13_title, A13_Icon } = data
        const { uuid: towUuid } = treeValue(menu, A13_url, 'targetUrl')
        const title = A13_title
        const obj = { uuid: A13_uuid, towUuid, tableName: title, type: A13_type, targetUrl: A13_url, icon: A13_Icon }
        OpenMenuFunc(A13_uuid, pageFunc, body_tabsMax, obj)
    }

    const onClick = (item) => {
        const { type } = item
        const Mapping = new Map([
            ['A02', () => A02Func(item)],
            ['A03', () => A03Func(item)],
            ['A04', () => A04Func(item)],
            ['A05', () => A05Func(item)],
            ['A06', () => A06Func(item)],
            ['A07', () => A07Func(item)],
            ['A08', () => A08Func(item)],
            ['A0901', () => A0901Func(item)],
            ['A0902', () => A0902Func(item)],
            ['A0903', () => A0903Func(item)],
            ['A1001', () => A1001Func(item)],
            ['A1002', () => A1002Func(item)],
            ['A1101', () => A1101Func(item)],
            ['A12', () => A12Func(item)],
            ['A13', () => A13Func(item)],
        ])
        const func = Mapping.get(type)
        func?.(item)
    }

    return (
        <div className='DevExtremeHeader' style={TopStyle}>
            <div className='left'>
                {leftData.map((item) => {
                    const { uuid, title, icon, color } = item
                    return (
                        <div key={uuid} style={{ ...fontStyle, color }} onClick={() => onClick(item)}>
                            {top_itemOrder?.includes('icon') && <div style={{ ...iconStyle, margin: '0 4px' }}>{ICONMapping[icon]}</div>}
                            {top_itemOrder?.includes('text') && <div style={textStyle}>{title}</div>}
                        </div>
                    )
                })}
            </div>
            <div className='right'>
                {rightData.map((item) => {
                    const { uuid, title, icon, color } = item
                    return (
                        <div key={uuid} style={{ ...fontStyle, color }} onClick={() => onClick(item)}>
                            {top_itemOrder?.includes('icon') && <div style={{ ...iconStyle, margin: '0 4px' }}>{ICONMapping[icon]}</div>}
                            {top_itemOrder?.includes('text') && <div style={textStyle}>{title}</div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// 树形信息
export const DevExtremeTree = ({ data, THEdata, DEVEvent }) => {
    const { updateModel } = modelStore()
    const { uuid, method, url, params, isSearch, searchArr, isFold, isFoldStatus } = data
    const TreeEvent = useEventEmitter()
    const [type, setType] = useState()
    const [All, setAll] = useState([])
    const [List, setList] = useState([])
    const [Active, setActive] = useState([])
    const [OPENKEY, setOPENKEY] = useState([])
    const [status, setStatus] = useState(isFoldStatus)
    const [fieldNames, setFieldNames] = useState()

    const [SearchData, setSearchData] = useState({})

    const { tree_iconColor, tree_iconSize, tree_iconShadowX, tree_iconShadowY, tree_iconShadowS, tree_iconShadowB } = THEdata.style
    const { tree_fontColor, tree_fontDeg, tree_fontSize, tree_fontFamily, tree_fontStyle, tree_fontWeight } = THEdata.style
    const { tree_fontShadowX, tree_fontShadowY, tree_fontShadowS, tree_fontShadowC, tree_searchColor, tree_resetColor } = THEdata.style
    const { tree_activeBack, tree_activeColor, tree_activeDeg, tree_activeShadowC, tree_foldColor } = THEdata.style

    const TreeStyle = {
        '--IconColor': tree_iconColor,
        '--IconSize': tree_iconSize + 'px',
        '--IconFilter': `drop-shadow(${tree_iconShadowX}px ${tree_iconShadowY}px ${tree_iconShadowS}px ${tree_iconShadowB})`,
        '--TextColor': ColorCallBack(tree_fontColor, tree_fontDeg),
        '--TextSize': tree_fontSize + 'px',
        '--TextFamily': tree_fontFamily,
        '--TextStyle': tree_fontStyle,
        '--TextWeight': tree_fontWeight,
        '--TextFilter': `drop-shadow(${tree_fontShadowX}px ${tree_fontShadowY}px ${tree_fontShadowS}px ${tree_fontShadowC})`,
        '--ActiveBack': tree_activeBack,
        '--ActiveColor': ColorCallBack(tree_activeColor, tree_activeDeg),
        '--ActiveShadowC': `drop-shadow(${tree_fontShadowX}px ${tree_fontShadowY}px ${tree_fontShadowS}px ${tree_activeShadowC})`,
        '--SearchColor': tree_searchColor,
        '--ResetColor': tree_resetColor,
        '--FoldColor': tree_foldColor,
    }

    const getData = async (data = {}) => {
        const [err, res] = await axios({ method, url, params: { ...strOfurlParamsFunc(params), ...data, menuType: uuid } })
        setSearchData(data)
        if (err) {
            TreeEvent.emit({ type: 'closeFormLoading' })
            return false
        }
        updateModel({})
        const { all, defaultvalue, list } = res.data
        if (all || defaultvalue) {
            setType('org')
            setAll(all)
            setList(list)
            setActive([defaultvalue])
            setOPENKEY(isFoldStatus ? all : [])
            setFieldNames({ key: 'value', title: 'label' })
            DEVEvent.emit({ type: 'onSelectOrg', data: defaultvalue })
        } else {
            const all = list.map(item => item.uuid)
            if (all.length === 0) return false
            const [{ uuid }] = list
            setType('oth')
            setAll(all)
            setList(list)
            setActive([uuid])
            setOPENKEY(isFoldStatus ? all : [])
            setFieldNames({ key: 'uuid', title: 'tableName' })
            DEVEvent.emit({ type: 'onSelectOth', data: uuid })
        }
    }


    const onSelect = (e) => {
        if (e.length === 0) return
        setActive(e)
        DEVEvent.emit({ type: type === 'org' ? 'onSelectOrg' : 'onSelectOth', data: e[0] })
    }

    const onFold = () => {
        setStatus(!status)
        setOPENKEY(status ? [] : All)
    }

    const onSearch = () => {
        updateModel({ title: '搜索', type: 'CommonModel', Event: TreeEvent, width: 640, modelData: { openType: 'onTreeSearch', searchArr, Initial: SearchData } })
    }

    const onReset = () => {
        if (JSON.stringify(SearchData) !== '{}') getData()
    }

    const treeCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([['onFormBack', () => getData(data)]])
        const func = Mapping.get(type)
        func?.(data)
    }

    TreeEvent.useSubscription(treeCallBack)
    useMount(getData)
    return (
        <div className='DevExtremeTree' style={TreeStyle}>
            {isSearch &&
                <div className='search'>
                    <Button type='primary' onClick={onSearch}>搜索</Button>
                    <Button type='link' onClick={onReset}>重置</Button>
                </div>
            }
            <DevScrollView>
                <Tree
                    className='TreeBox'
                    blockNode
                    treeData={List}
                    selectedKeys={Active}
                    expandedKeys={OPENKEY}
                    onExpand={setOPENKEY}
                    onSelect={onSelect}
                    fieldNames={fieldNames}
                />
            </DevScrollView>
            {isFold &&
                <Button
                    className='FoldButton'
                    block
                    type='primary'
                    onClick={onFold}
                    icon={status ? <VerticalAlignTopOutlined /> : <VerticalAlignBottomOutlined />}
                >
                    {status ? '折叠' : '展开'}
                </Button>
            }
        </div>
    )
}

// 处理行事件
const onRowClick = async (modelFunc, props, item, data, pageFunc) => {
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelFunc
    const { POWER, APIdata, THEdata, OPTdata, ORGUUID, OTHUUID, DEVEvent } = props
    const { targetUrl } = props.data

    const B01Func = item => {
        updateModel5({ title: item.title, type: 'OptionsModel', Event: DEVEvent, modelData: { ...item, APIdata, ORGUUID, OTHUUID, Initial: data, targetUrl } })
    }
    const B02Func = item => {
        updateModel5({ title: item.title, type: 'OptionsModel', Event: DEVEvent, modelData: { ...item, APIdata, ORGUUID, OTHUUID, Initial: data, targetUrl } })
    }
    const B03Func = item => {
        updateModel5({ title: item.title, type: 'OptionsModel', width: 640, height: 400, Event: DEVEvent, modelData: { ...item, APIdata, Initial: data, targetUrl } })
    }
    const B04Func = item => {
        updateModel5({ title: item.title, type: 'OptionsModel', Event: DEVEvent, modelData: { ...item, APIdata, ORGUUID, OTHUUID, Initial: data, targetUrl } })
    }
    const B05Func = item => {
        updateModel5({ title: item.title, type: 'OptionsModel', Event: DEVEvent, modelData: { ...item, Initial: data, DEVEvent } })
    }
    const B06Func = item => {
        // 可被额外打开 5->4
        const { B09_seeTitle, title, B06_width } = item
        updateModel4({
            title: B09_seeTitle || title,
            type: 'OptionsModel',
            width: B06_width || 1600,
            Event: DEVEvent,
            modelData: { ...item, type: 'B06', Initial: data }
        })
    }
    const B07Func = item => {
        console.log('弹出窗口', item)
    }
    const B08Func = async item => {
        const { B08_method, B08_url, B08_params, B08_isData, B08_dataArr, B08_sendData } = item
        const { B08_isModel, B08_modelWidth, B08_modelHeight } = item
        let params = { ...strOfurlParamsFunc(B08_params) }
        if (B08_isData) B08_dataArr.forEach(item => { params[item.dataMap] = data[item.dataKey] })
        B08_sendData.forEach(item => { params[item.key] = item.value })
        const httpData = { method: B08_method, url: B08_url, params }
        if (B08_isModel) updateModel5({
            title: item.title, type: 'OptionsModel', width: B08_modelWidth || 640, height: B08_modelHeight || 640,
            Event: DEVEvent, modelData: { ...item, httpData }
        })
        else {
            const [err, res] = await axios(httpData)
            if (err) return false
            DEVEvent.emit({ type: 'onSaveSuccess' })
        }
    }

    const B09Func = item => {
        const { title, B09_seeStatus, B09_seeTitle } = item
        updateModel5({
            title: title,
            type: 'OptionsModel',
            Event: DEVEvent,
            modelData: { ...item, Initial: data, ORGUUID },
            options: B09_seeStatus ? [
                {
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'fas fa-clipboard-list',
                    text: B09_seeTitle,
                    onClick: () => B06Func(item)
                }
            ] : []
        })
    }
    const B10Func = item => {
        console.log('打开列表', item)
    }
    const B11Func = async item => {
        const { body_tabsMax } = await GetIndexedDB('theme')
        const [{ children: menu }] = await GetIndexedDB('menu')
        const { B11_url, B11_type, B11_isData, B11_dataKey, B11_fieldTitle, B11_Title, B11_Icon } = item
        const { uuid: towUuid, type, parentUuid } = treeValue(menu, B11_url, 'targetUrl')
        const menuType = type === 'two' ? parentUuid : false
        const uuid = B11_isData ? data[B11_dataKey] : v4()
        const title = B11_fieldTitle ? `${data[B11_fieldTitle]} - ${B11_Title}` : B11_Title
        const obj = { uuid, towUuid, tableName: title, type: B11_type, targetUrl: B11_url, icon: B11_Icon, menuType }
        OpenMenuFunc(uuid, pageFunc, body_tabsMax, obj)
    }
    const B12Func = item => {
        const { title, B08_modelWidth, B08_modelHeight } = item
        updateModel5({
            title: title,
            type: 'OptionsModel',
            width: B08_modelWidth,
            height: B08_modelHeight,
            Event: DEVEvent,
            modelData: { ...item, Initial: data },
        })
    }
    const B13Func = item => {
        console.log('子列表操作', item)
    }
    const B14Func = item => {
        updateModel5({ title: item.title, type: 'OptionsModel', Event: DEVEvent, modelData: { ...item, Initial: data } })
    }
    const B20Func = item => {
        updateModel5({ title: item.title, type: 'OptionsModel', Event: DEVEvent, modelData: { ...item, Initial: data } })
    }
    const B1501Func = item => {
        updateModel5({ title: item.title, type: 'OptionsModel', Event: DEVEvent, width: 800, modelData: { ...item, Initial: data } })
    }
    const B1502Func = item => {
        updateModel5({ title: item.title, type: 'OptionsModel', Event: DEVEvent, width: 800, modelData: { ...item, Initial: data } })
    }
    const B1503Func = item => {
        console.log('空值', item)
    }
    const B1504Func = item => {
        updateModel5({ title: item.title, type: 'CommonModel', Event: DEVEvent, width: 640, height: 640, modelData: { openType: item.type, Initial: data } })
    }
    const B1601Func = item => {
        console.log('文章预览', item)
    }
    const B1602Func = item => {
        console.log('巡检详情', item)
    }
    const B1603Func = item => {
        console.log('整改详情', item)
    }
    const B1605Func = item => {
        updateModel5({ title: item.title, type: 'CommonModel', Event: DEVEvent, width: 640, modelData: { openType: item.type, ...item, Initial: data } })
    }
    const B1606Func = item => {
        updateModel5({ title: item.title, type: 'CommonModel', Event: DEVEvent, width: 640, modelData: { openType: item.type, ...item, Initial: data } })
    }
    const B1607Func = item => {
        updateModel5({ title: item.title, type: 'OptionsModel', shading: false, Event: DEVEvent, modelData: { openType: item.type, ...item, Initial: data, ORGUUID } })
    }
    const B17Func = item => {
        updateModel5({ title: item.title, type: 'CommonModel', Event: DEVEvent, width: 640, modelData: { openType: item.type, ...item, Initial: data } })
    }





    const { type } = item
    const Mapping = new Map([
        ['B01', () => B01Func(item)],
        ['B02', () => B02Func(item)],
        ['B03', () => B03Func(item)],
        ['B04', () => B04Func(item)],
        ['B05', () => B05Func(item)],
        ['B06', () => B06Func(item)],
        ['B07', () => B07Func(item)],
        ['B08', () => B08Func(item)],
        ['B09', () => B09Func(item)],
        ['B10', () => B10Func(item)],
        ['B11', () => B11Func(item)],
        ['B12', () => B12Func(item)],
        ['B13', () => B13Func(item)],
        ['B14', () => B14Func(item)],
        ['B1501', () => B1501Func(item)],
        ['B1502', () => B1502Func(item)],
        ['B1503', () => B1503Func(item)],
        ['B1504', () => B1504Func(item)],
        ['B1601', () => B1601Func(item)],
        ['B1602', () => B1602Func(item)],
        ['B1603', () => B1603Func(item)],

        ['B1605', () => B1605Func(item)],
        ['B1606', () => B1606Func(item)],
        ['B1607', () => B1607Func(item)],
        ['B17', () => B17Func(item)],
        ['B20', () => B20Func(item)],
    ])
    const func = Mapping.get(type)
    func?.(item)
}

// 行内信息
export const DevExtremeRow = (props) => {
    const { pageActive, pageList, updateActive, updateList } = pageStore()
    const pageFunc = { pageActive, pageList, updateActive, updateList }
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const { data, POWER, APIdata, THEdata, OPTdata, ORGUUID, OTHUUID, DEVEvent } = props
    const { row_show, ...style } = THEdata.style
    if (!row_show) return false
    const { row } = OPTdata
    const uuidSet = new Set(POWER)
    const filteredArray = row.filter(item => uuidSet.has(item.uuid) && item.showOptions !== 'hid' && item.showOptions !== 'pop')
    const modelFunc = { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 }
    const { row_width, row_minWidth, row_alignment, row_allowReordering, row_allowResizing, row_caption, row_fixed, row_fixedPosition } = style
    const { row_icon, row_itemMargin, row_fontSize, row_fontFamily, row_fontStyle, row_fontWeight, row_fontShadowX, row_fontShadowY, row_fontShadowS, row_fontShadowC } = style
    const columnData = {
        width: row_width,
        minWidth: row_minWidth,
        fixed: row_fixed,
        fixedPosition: row_fixedPosition,
        caption: row_caption,
        alignment: row_alignment,
        allowReordering: row_allowReordering,
        allowResizing: row_allowResizing,
    }
    const fontStyle = {
        padding: 0,
        margin: SpacingCallBack(row_itemMargin),
        fontSize: row_fontSize,
        fontFamily: row_fontFamily,
        fontStyle: row_fontStyle,
        fontWeight: row_fontWeight,
        filter: `drop-shadow(${row_fontShadowX}px ${row_fontShadowY}px ${row_fontShadowS}px ${row_fontShadowC})`,
    }
    return (
        <Column
            {...columnData}
            visible={filteredArray.length !== 0}
            cellRender={useCallback(e => {
                const { data } = e
                return filteredArray.map(item => {
                    const { uuid, title, icon, color, judge, jugdeValue, jugdeField } = item
                    if (judge && !jugdeValue.split(',').includes(data[jugdeField])) return false
                    return (
                        <Button
                            key={uuid}
                            type='link'
                            onClick={() => onRowClick(modelFunc, props, item, data, pageFunc)}
                            style={{ ...fontStyle, color }}
                            icon={row_icon && ICONMapping[icon]}
                        >
                            {title}
                        </Button>
                    )
                })
            }, [props])}
        />
    )
}

// 布局模板
export const DevExtremeLayout = memo((props) => {
    const { data, POWER, APIdata, THEdata, OPTdata, ORGUUID, OTHUUID, DEVEvent, AdminEvent } = props
    const { pageActive, pageList, updateActive, updateList } = pageStore()
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const pageFunc = { pageActive, pageList, updateActive, updateList }
    const modelFunc = { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 }
    const { orgShow, othShow, orgWidth, orgResize, orgColl, othWidth, othResize, othColl } = APIdata.api
    const top_show = THEdata.style.top_show

    const orgData = {
        uuid: data.uuid,
        method: APIdata.api.orgMethod,
        url: APIdata.api.orgUrl,
        params: APIdata.api.orgParams,
        isSearch: APIdata.api.orgIsSearch,
        searchArr: APIdata.api.orgSearchArr,
        isFold: APIdata.api.orgIsFold,
        isFoldStatus: APIdata.api.orgIsFoldStatus,
    }

    const othData = {
        uuid: data.uuid,
        method: APIdata.api.othMethod,
        url: APIdata.api.othUrl,
        params: APIdata.api.othParams,
        isSearch: APIdata.api.othIsSearch,
        searchArr: APIdata.api.othSearchArr,
        isFold: APIdata.api.othIsFold,
        isFoldStatus: APIdata.api.othIsFoldStatus,
        // othIsAdd: APIdata.api.othIsAdd,
        // addParams: APIdata.api.addParams,
    }

    const [items, setItem] = useState([])
    const [, setContext] = useState(0)
    const [dxThemeMapping, setDxThemeMapping] = useState()

    const onFocusedRowChanged = (data) => {
        const { row } = OPTdata
        if (row.length === 0 || !data) return setItem([])
        const { pop_show, pop_icon, pop_fontSize, pop_fontFamily, pop_fontStyle, pop_fontWeight,
            pop_fontShadowX, pop_fontShadowY, pop_fontShadowS, pop_fontShadowC } = THEdata.style
        const uuidSet = new Set(POWER)
        const filteredArray = row.filter(item => uuidSet.has(item.uuid) && item.showOptions !== 'hid' && item.showOptions !== 'row')
        const Item = filteredArray.map(item => {
            const fontStyle = pop_show ? {
                '--width': pop_fontSize + 'px',
                color: item.color,
                fontSize: pop_fontSize,
                fontFamily: pop_fontFamily,
                fontStyle: pop_fontStyle,
                fontWeight: pop_fontWeight,
                filter: `drop-shadow(${pop_fontShadowX}px ${pop_fontShadowY}px ${pop_fontShadowS}px ${pop_fontShadowC})`,
            } : {}
            const { uuid, title, icon, color, judge, jugdeValue, jugdeField } = item
            if (judge && !jugdeValue.split(',').includes(data[jugdeField])) return false
            return ({
                key: uuid,
                label: (
                    <Button onClick={() => onRowClick(modelFunc, props, item, data, pageFunc)} style={fontStyle} type='link' icon={pop_icon && ICONMapping[icon]} >
                        {title}
                    </Button>
                ),
            })
        })
        setItem(Item)
    }

    const devCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onFocusedRowChanged', () => onFocusedRowChanged(data)],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    DEVEvent.useSubscription(devCallBack)
    const TemplateComponent = useMemo(() => {
        if (!THEdata?.template?.devTemplate) return null
        return DevMapping[THEdata.template.devTemplate]
    }, [THEdata?.template?.devTemplate])

    AdminEvent.useSubscription(val => {
        const { type, data } = val
        if (type === 'onSetDxTheme') {
            const theme = data.split('.compact')[0]
            THEdata.style = { ...THEdata.style, ...dxThemeMapping[theme].style }
            setContext(e => (e + 1))
        }
    })

    useMount(async () => {
        const { devTheme } = await GetIndexedDB('theme')
        const dxThemeMapping = await Decrypt(await GetIndexedDB('dxTheme'))
        setDxThemeMapping(dxThemeMapping)
        if (devTheme) {
            const { dxTheme } = await GetIndexedDB('userAdd')
            const theme = dxTheme.split('.compact')[0]
            THEdata.style = { ...THEdata.style, ...dxThemeMapping[theme].style }
        }
    })

    return (
        <div className="DevExtremeLayout">
            {top_show && <DevExtremeHeader {...props} />}
            <Splitter>
                {orgShow &&
                    <Item size={orgWidth} resizable={orgResize} collapsible={orgColl}>
                        <DevExtremeTree data={orgData} THEdata={THEdata} DEVEvent={DEVEvent} />
                    </Item>
                }
                {othShow &&
                    <Item size={othWidth} resizable={othResize} collapsible={othColl}>
                        <DevExtremeTree data={othData} THEdata={THEdata} DEVEvent={DEVEvent} />
                    </Item>
                }
                <Item style={{ height: '100%' }}>
                    <Dropdown menu={{ items }} trigger={['contextMenu']}>
                        <div className='DevDropdom'>
                            {/* {children} */}
                            <TemplateComponent {...props} />
                        </div>
                    </Dropdown>
                </Item>
            </Splitter>
        </div>
    )
}) 