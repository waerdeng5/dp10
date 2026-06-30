import { v4 } from 'uuid'
import { Skeleton } from 'antd'
import { memo, useEffect, useState } from "react"
import Pagination from 'devextreme-react/pagination'

import {
    DataGrid,
    Scrolling,
    FilterRow,
    HeaderFilter,
    SearchPanel,
    GroupPanel,
    Grouping,
    ColumnFixing,
    Sorting,
    Selection,
    Export,
    ColumnChooser,
    ColumnChooserSearch,
    ColumnChooserSelection,
    Position,
    Paging,
    Search
} from 'devextreme-react/data-grid'


import { AssemblySort } from '../Utils'
import { axios, strOfurlParamsFunc } from '../Utils/Api'
import { DevFieldTemplate, SummaryTemplate, DevExtremeRow, onExporting } from './DevExtremeTemplate'

const DevExtremeDataGrid = (props) => {
    const { data, APIdata, THEdata, OPTdata, ORGUUID, OTHUUID, DEVEvent, POWER } = props
    const { api, fields } = APIdata
    const { template } = THEdata
    const { pageOptions, pageSize, PaginationMode, PaginationShowInfo, PaginationShowNavigationButtons, PaginationShowPageSizeSelector } = api

    const [Loading, setLoading] = useState(true)

    const [Total, setTotal] = useState()
    const [PageIndex, setPageIndex] = useState(1)
    const [PageSize, setPageSize] = useState(pageSize)
    const [dataSource, setDataSource] = useState([])
    const [FocusedRowIndex, setFocusedRowIndex] = useState(-1)

    const [SortData, setSortData] = useState()
    const [SearchData, setSearchData] = useState()
    const [SelectedRowKeys, setSelectedRowKeys] = useState([])

    const getData = async () => {
        const uuidSet = new Set(POWER)
        const filteredArray = OPTdata.top.filter(item => uuidSet.has(item.uuid)).findIndex(v => v.type === 'A01')
        if (filteredArray === -1) return setLoading(false)
        const { uuid, towUuid } = data
        const { method, apiUrl: url, params: apiParams, othShow, othUuid, isMenuUuid, uuidParams } = api
        const params = {
            menuUuid: towUuid || uuid,
            ...SearchData,
            ...SortData,
            ...strOfurlParamsFunc(apiParams),
            organizationUuid: ORGUUID,
            PageIndex,
            PageSize,
        }
        if (isMenuUuid) params[uuidParams] = uuid
        if (othShow && othUuid) params[othUuid] = OTHUUID
        const [err, res] = await axios({ method, url, params })
        if (err) return console.log(err)
        setLoading(false)
        setDataSource(res.data.list)
        setTotal(res.data.total)
        setFocusedRowIndex(-1)
        DEVEvent.emit({ type: 'onFocusedRowChanged', data: null })
    }

    useEffect(() => {
        if (ORGUUID && PageIndex && POWER.length > 0) {
            setLoading(true)
            getData()
        }
    }, [ORGUUID, OTHUUID, PageIndex, PageSize, SortData, SearchData, POWER])


    const onFocusedRowChanged = (data) => {
        const { row, rowIndex } = data
        setFocusedRowIndex(rowIndex)
        DEVEvent.emit({ type: 'onFocusedRowChanged', data: row.data })
    }

    const onRefreshData = (data) => {
        if (!data.A05_sort) setSortData()
        if (!data.A05_search) setSearchData()
        getData()
    }

    const onSelectionChanged = (e) => {
        setSelectedRowKeys(e.selectedRowKeys)
        DEVEvent.emit({ type: 'onSelectionChanged', data: e.selectedRowKeys })
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

    return (
        <div className='DevExtreme DevExtremeDataGrid'>
            {Loading ?
                <Skeleton active paragraph={{ rows: 16 }} /> :
                <>
                    <DataGrid
                        id={v4()}
                        width='100%'
                        keyExpr='uuid'
                        // 基础数据
                        dataSource={dataSource}
                        focusedRowIndex={FocusedRowIndex}
                        focusedRowEnabled={template.focusedRowEnabled}
                        // 边框线
                        showBorders={template.showBorders}
                        showRowLines={template.showRowLines}
                        showColumnLines={template.showColumnLines}
                        rowAlternationEnabled={template.rowAlternationEnabled}
                        // 列设置
                        allowColumnResizing={template.allowColumnResizing}
                        columnResizingMode={template.columnResizingMode}
                        showColumnHeaders={template.showColumnHeaders}

                        defaultSelectedRowKeys={SelectedRowKeys}
                        onSelectionChanged={onSelectionChanged}
                        onFocusedRowChanged={onFocusedRowChanged}
                        onExporting={onExporting}
                    >
                        {/* 显示字段 */}
                        <DevFieldTemplate Fields={fields} POWER={POWER} OPTdata={OPTdata} />
                        <DevExtremeRow {...props} />

                        {/* 固定列 */}
                        <ColumnFixing enabled={template.columnFixingEnabled} />
                        {/* 列选择器 */}
                        <ColumnChooser
                            enabled={template.columnChooserEnabled}
                            title={template.columnChooserTitle}
                            mode={template.columnChooserMode}
                            width={template.columnChooserWidth}
                            height={template.columnChooserHeight}
                        >
                            <Position my="right top" at="right bottom" of=".dx-datagrid-column-chooser-button" />
                            <ColumnChooserSearch
                                enabled={template.columnChooserSearch}
                                timeout={template.columnChooserTimeout}
                                editorOptions={{ placeholder: template.columnChooserPlaceholder }}
                            />
                            <ColumnChooserSelection
                                allowSelectAll={template.ColumnChooserAllowSelectAll}
                                selectByClick={template.ColumnChooserSelectByClick}
                                recursive={template.ColumnChooserRecursive}
                            />
                        </ColumnChooser>
                        {/* 分组面板 */}
                        <GroupPanel
                            visible={template.GroupPanelVisible}
                            autoExpandAll={template.GroupPanelAutoExpandAll}
                            allowColumnDragging={template.GroupPanelAllowColumnDragging}
                            emptyPanelText={template.GroupPanelEmptyPanelText}
                        />
                        <Grouping
                            allowCollapsing={template.GroupingAllowCollapsing}
                            autoExpandAll={template.GroupingAutoExpandAll}
                            contextMenuEnabled={template.GroupingContextMenuEnabled}
                            expandMode={template.GroupingExpandMode}
                        />
                        {/* 排序 */}
                        <Sorting
                            mode={template.Sortingmode}
                            showSortIndexes={template.SortingshowSortIndexes}
                            ascendingText={template.SortingascendingText}
                            descendingText={template.SortingdescendingText}
                            clearText={template.SortingclearText}
                        />
                        {/* 选择 */}
                        <Selection
                            mode={template.SelectionMode}
                            allowSelectAll={template.SelectionAllowSelectAll}
                            selectAllMode={template.SelectionSelectAllMode}
                            showCheckBoxesMode={template.SelectionShowCheckBoxesMode}
                        />
                        {/* 导出 */}
                        <Export
                            enabled={template.ExportEnabled}
                            allowExportSelectedData={template.ExportAllowExportSelectedData}
                            formats={template.ExportFormats}
                        />
                        {/* 过滤器 */}
                        <HeaderFilter
                            visible={template.HeaderFilterVisible}
                            allowSelectAll={template.HeaderFilterAllowSelectAll}
                            width={template.HeaderFilterWidth}
                            height={template.HeaderFilterHeight}
                        >
                            <Search enabled={template.HeaderFilterEnabled} />
                        </HeaderFilter>
                        {/* 头部搜索 */}
                        <SearchPanel
                            visible={template.SearchPanelVisible}
                            highlightCaseSensitive={template.SearchPanelHighlightCaseSensitive}
                            highlightSearchText={template.SearchPanelHighlightSearchText}
                            placeholder={template.SearchPanelPlaceholder}
                            searchVisibleColumnsOnly={template.SearchPanelSearchVisibleColumnsOnly}
                            defaultText={template.SearchPanelText}
                            width={template.SearchPanelWidth}
                        />
                        {/* 行内搜索 */}
                        <FilterRow
                            visible={template.FilterRowVisible}
                            applyFilter={template.FilterRowApplyFilter}
                            applyFilterText={template.FilterRowApplyFilterText}
                        />
                        <SummaryTemplate Fields={fields} />
                        <Scrolling
                            mode="virtual"
                            rowRenderingMode="virtual"
                            columnRenderingMode="virtual"
                            scrollByContent={true}
                            showScrollbar='onHover'
                        />
                        <Paging defaultPageSize={9999999} />
                    </DataGrid>
                    {pageOptions !== '0' &&
                        <Pagination
                            showInfo={PaginationShowInfo}
                            showPageSizeSelector={PaginationShowPageSizeSelector}
                            showNavigationButtons={PaginationShowNavigationButtons}
                            itemCount={Total}
                            pageIndex={PageIndex}
                            pageSize={PageSize}
                            infoText='第{0}页，共{1}页 ({2} 项)'
                            onPageIndexChange={setPageIndex}
                            onPageSizeChange={setPageSize}
                            allowedPageSizes={pageOptions.split(',').map(item => Number(item))}
                            displayMode={PaginationMode}
                        />
                    }
                </>
            }
        </div>
    );
};

export default memo(DevExtremeDataGrid);