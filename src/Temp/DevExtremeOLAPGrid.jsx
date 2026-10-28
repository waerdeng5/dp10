import { v4 } from 'uuid'

import { Workbook } from 'exceljs'
import { saveAs } from 'file-saver'
import { Skeleton, App } from 'antd'
import { useDebounceEffect } from "ahooks"
import { exportPivotGrid } from 'devextreme/excel_exporter'
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source'
import { memo, useState, useCallback, useRef, useEffect } from "react"
import { PivotGrid, FieldChooser, FieldPanel, StateStoring, Export, Scrolling } from 'devextreme-react/pivot-grid'


import { AssemblySort } from '../Utils'
import { CommonAPIUrl } from '../Config'
import { GetIndexedDB } from '../Utils/IndexedDB'
import { devChartsStore } from '../Router/zustand'
import { MappingData } from '../Config/MappingData'
import { axios, strOfurlParamsFunc } from '../Utils/Api'

import { DevFieldTemplate, SummaryTemplate, DevExtremeRow } from './DevExtremeTemplate'


const DevExtremeOLAPGrid = (props) => {
    const pivotGridRef = useRef()
    const { updateDevPivot } = devChartsStore()
    const { message, modal, notification } = App.useApp()
    const { data, APIdata, THEdata, OPTdata, ORGUUID, OTHUUID, DEVEvent, POWER } = props
    const { targetUrl } = data
    const { api, fields } = APIdata
    const { template } = THEdata
    const [Loading, setLoading] = useState(true)

    const [SortData, setSortData] = useState()
    const [SearchData, setSearchData] = useState()
    const [dataSource, setDataSource] = useState([])

    const getData = async () => {
        const uuidSet = new Set(POWER)
        const filteredArray = OPTdata.top.filter(item => uuidSet.has(item.uuid)).findIndex(v => v.type === 'A01')
        if (filteredArray === -1) {
            setLoading(false)
            return false
        }

        const { uuid, towUuid } = data
        const { method, apiUrl: url, params: apiParams, othShow, othUuid, isMenuUuid, uuidParams } = api
        const params = {
            menuUuid: towUuid || uuid,
            ...SearchData,
            ...SortData,
            ...strOfurlParamsFunc(apiParams),
            organizationUuid: ORGUUID,
        }
        if (isMenuUuid) params[uuidParams] = uuid
        if (othShow && othUuid) params[othUuid] = OTHUUID
        const [err, res] = await axios({ method, url, params })
        if (err) return console.log(err)
        const fieldsArr = fields.map(item => ({
            dataField: item.dataField,
            caption: item.caption,
            summaryType: 'sum', format: item.format ? { type: item.formatType, precision: item.formatPrecision } : false
        }))
        const olapMapping = { fields: fieldsArr, store: res.data.list }
        setDataSource(new PivotGridDataSource(olapMapping))
        setLoading(false)
    }

    useDebounceEffect(() => {
        if (!!ORGUUID) getData()
        else setLoading(true)
    }, [ORGUUID, OTHUUID, SortData, SearchData], { wait: 500 })

    const onExporting = e => {
        const workbook = new Workbook()
        const worksheet = workbook.addWorksheet('Sales')
        exportPivotGrid({ component: e.component, worksheet }).then(() => {
            workbook.xlsx.writeBuffer().then((buffer) => saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'OLAP.xlsx'))
        })
    }

    const setSummaryType = (args, sourceField) => {
        dataSource.field(sourceField.index, { summaryType: args.itemData.value })
        dataSource.load();
    }

    const onContextMenuPreparing = e => {
        const sourceField = e.field
        if (sourceField) {
            const menuItems = []
            const numebrItems = [
                {
                    text: '小数',
                    value: 'fixedPoint',
                    items: () => [...Array(10)].map((_, index) => ({
                        text: `保留 ${index} 位小数`, value: index, onItemClick(e) { setPrecisionType('fixedPoint', e, sourceField) }
                    }))
                },
                {
                    text: '比例',
                    value: 'percent',
                    items: () => [...Array(10)].map((_, index) => ({
                        text: `保留 ${index} 位小数`, value: index, onItemClick(e) { setPrecisionType('percent', e, sourceField) }
                    }))
                },
                {
                    text: '货币',
                    value: 'currency',
                    items: () => [...Array(10)].map((_, index) => ({
                        text: `保留 ${index} 位小数`, value: index, onItemClick(e) { setPrecisionType('currency', e, sourceField) }
                    }))
                },
            ]

            e.items.push({ text: '统计方式', items: menuItems })
            e.items.push({ text: '数值类型', items: numebrItems })

            MappingData.System__summaryType.forEach(item => {
                menuItems.push({
                    text: item.label,
                    value: item.value,
                    onItemClick(e) { setSummaryType(e, sourceField) }
                })
            })
        }
    }

    const loadState = useCallback(async () => {
        const layout = localStorage.getItem(targetUrl)
        if (!layout) {
            const { uuid } = await GetIndexedDB('config')
            const [err, res] = await axios({
                method: 'get',
                url: 'projects/GetJsonInfoByUuid',
                path: CommonAPIUrl,
                params: { uuid: `${uuid}/OLAPLayout/${targetUrl}` }
            })
            if (err) return message.info('未获取到布局信息!')
            localStorage.setItem(targetUrl, JSON.stringify(res))
            return res
        } else {
            return JSON.parse(layout)
        }
    }, [])

    const saveState = useCallback((data) => {
        const layout = localStorage.getItem(targetUrl)
        if (JSON.stringify(data) !== layout) localStorage.setItem(targetUrl, JSON.stringify(data))
    }, [])


    const onRefreshData = (data) => {
        if (!data.A05_sort) setSortData()
        if (!data.A05_search) setSearchData()
        getData()
    }

    const devCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onSaveSuccess', () => getData()],
            ['onSortBack', () => setSortData(AssemblySort(data))],
            ['onSearchBack', () => setSearchData(data)],
            ['onRefreshData', () => onRefreshData(data)],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    DEVEvent.useSubscription(devCallBack)

    useEffect(() => {
        if (pivotGridRef.current) updateDevPivot(pivotGridRef.current)
    }, [pivotGridRef, Loading])

    return (
        <div className='DevExtreme DevExtremeOLAPGrid'>

            {Loading ?
                <Skeleton active paragraph={{ rows: 16 }} /> :
                <PivotGrid
                    id={v4()}
                    ref={pivotGridRef}
                    dataSource={dataSource}
                    allowSorting={template.allowSorting}
                    allowSortingBySummary={template.allowSortingBySummary}
                    allowFiltering={template.allowFiltering}
                    allowExpandAll={template.allowExpandAll}
                    showBorders={template.showBorders}
                    rowHeaderLayout={template.rowHeaderLayout}
                    showTotalsPrior={template.showTotalsPrior}
                    dataFieldArea={template.dataFieldArea}
                    showColumnTotals={template.showColumnTotals}
                    showColumnGrandTotals={template.showColumnGrandTotals}
                    showRowTotals={template.showRowTotals}
                    showRowGrandTotals={template.showRowGrandTotals}
                    onExporting={onExporting}
                    onContextMenuPreparing={onContextMenuPreparing}
                >
                    <FieldChooser
                        width='60vh'
                        height='80vh'
                        enabled={template.fieldChooserEnabled}
                        title={template.fieldChooserTitle}
                        layout={template.fieldChooserLayout}
                        allowSearch={template.fieldChooserAllowSearch}
                        applyChangesMode={template.fieldChooserApplyChangesMode}
                    />
                    <FieldPanel
                        visible={template.fieldPanelVisible}
                        allowFieldDragging={template.fieldPanelAllowFieldDragging}
                        showColumnFields={template.fieldPanelShowColumnFields}
                        showRowFields={template.fieldPanelShowRowFields}
                        showDataFields={template.fieldPanelShowDataFields}
                        showFilterFields={template.fieldPanelShowFilterFields}
                    />
                    <Export enabled={template.export} />
                    <StateStoring
                        enabled={true}
                        type="custom"
                        customLoad={loadState}
                        customSave={saveState}
                        savingTimeout={500}
                    />
                    <Scrolling
                        rowRenderingMode="virtual"
                        columnRenderingMode="virtual"
                        mode="virtual"
                        scrollByContent={true}
                        showScrollbar='onHover'
                    />
                </PivotGrid>
            }
        </div>
    );
};

export default memo(DevExtremeOLAPGrid);