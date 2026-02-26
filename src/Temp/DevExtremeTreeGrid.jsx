import { v4 } from 'uuid'
import { Skeleton } from 'antd'
import { memo, useState } from "react"
import { useDebounceEffect } from "ahooks"
import Pagination from 'devextreme-react/pagination'

import {
    TreeList,
    Scrolling,
    FilterRow,
    HeaderFilter,
    SearchPanel,
    ColumnFixing,
    Sorting,
    Selection,
    ColumnChooser,
    ColumnChooserSearch,
    ColumnChooserSelection,
    Position,
    Paging,
    Search
} from 'devextreme-react/tree-list'

import { AssemblySort } from '../Utils'
import { axios, strOfurlParamsFunc } from '../Utils/Api'
import { DevFieldTemplate, SummaryTemplate, DevExtremeRow, onExporting } from './DevExtremeTemplate'

const DevExtremeTreeGrid = (props) => {
    const { data, APIdata, THEdata, OPTdata, ORGUUID, OTHUUID, DEVEvent, POWER } = props
    const { targetUrl } = data
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
            PageIndex,
            PageSize,
        }
        if (isMenuUuid) params[uuidParams] = uuid
        if (othShow && othUuid) params[othUuid] = OTHUUID
        const [err, res] = await axios({ method, url, params })
        if (err) {
            console.log(err)
            return false
        }
        setLoading(false)
        setDataSource(res.data.list)
        setTotal(res.data.total)
        setFocusedRowIndex(-1)
        DEVEvent.emit({ type: 'onFocusedRowChanged', data: null })
    }

    useDebounceEffect(() => {
        if (ORGUUID && PageIndex) getData()
    }, [ORGUUID, OTHUUID, PageIndex, PageSize, SortData, SearchData], { wait: 500 })


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
        <div className='DevExtreme DevExtremeTreeGrid'>
            {Loading ?
                <Skeleton active paragraph={{ rows: 16 }} /> :
                <>
                    <TreeList
                        id={v4()}
                        keyExpr='uuid'
                        dataStructure="tree"
                        itemsExpr='children'
                        allowColumnReordering={true}
                        autoExpandAll={template.autoExpandAll}
                        // 数据
                        dataSource={dataSource}
                        focusedRowIndex={FocusedRowIndex}
                        focusedRowEnabled={template.focusedRowEnabled}
                        // 边框线
                        showBorders={template.showBorders}
                        showRowLines={template.showRowLines}
                        showColumnLines={template.showColumnLines}
                        rowAlternationEnabled={template.rowAlternationEnabled}
                        // 列头
                        showColumnHeaders={template.showColumnHeaders}
                        allowColumnResizing={template.allowColumnResizing}
                        columnResizingMode={template.columnResizingMode}
                        // 操作设置
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
                        {/* 其他设置 */}
                        <Scrolling
                            mode="virtual"
                            rowRenderingMode="virtual"
                            columnRenderingMode="virtual"
                            scrollByContent={true}
                            showScrollbar='onHover'
                        />
                        <Paging defaultPageSize={9999999} />
                    </TreeList>
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

export default DevExtremeTreeGrid;