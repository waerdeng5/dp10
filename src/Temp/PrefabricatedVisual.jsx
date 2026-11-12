
import { useState, useEffect } from 'react'
import { Select, TreeSelect, Pagination, ConfigProvider, Spin, Result } from 'antd'
import { useMount } from 'ahooks'
import { v4 } from 'uuid'

import {
    SpacingCallBack,
    ColorCallBack,
    SpacingSizeCallBack,
    SetFilderParams,
    UnitCallBackStruct,
    SetBorderParams,
    SetPositionParams,
    DiyDataReturn
} from '../Utils'


import { VideoTemplateA02, VideoTemplateA04 } from './VideoTemplate'

import { axios, axiosFor, strOfurlParamsFunc } from '../Utils/Api'
import { MonitorTemplateA01, DevScrollView } from './DevTemplate'

// 监控视频
const PrefabricatedVisualMonitoring = ({ tempId, UrlData, data, LayoutEvent }) => {
    const { isParams, isParamsConfig, left_options, top_options,
        left_width, left_radius, left_color, left_deg, left_padding, left_margin, left_list,
        left_label_color, left_label_deg, left_label_padding, left_label_size, left_label_family, left_label_weight, left_label_style,
        left_label_filed, left_label_filed_data, left_label_filed_color,
        left_select_height, left_select_back, left_select_deg, left_select_color,
        left_select_size, left_select_family, left_select_weight, left_select_style, left_select_border, left_select_icon,
        number_align_items, number_align_content, number_justify_content, number_flex_direction, number_flex_wrap,
        number_widthUnit, number_width, number_heightUnit, number_height, number_padding, number_margin,
        left_options_default_back, left_options_default_deg, left_options_default_radius, left_options_default_border,
        left_options_default_size, left_options_default_type, left_options_default_color,
        left_options_active_back, left_options_active_deg, left_options_active_radius, left_options_active_border,
        left_options_active_size, left_options_active_type, left_options_active_color,
        left_options_default_text_color, left_options_default_text_deg, left_options_default_text_size, left_options_default_text_family,
        left_options_default_text_weight, left_options_default_text_style, left_options_default_text_filed,
        left_options_default_text_filed_data, left_options_default_text_filed_color,
        left_options_active_text_color, left_options_active_text_deg, left_options_active_text_size, left_options_active_text_family,
        left_options_active_text_weight, left_options_active_text_style, left_options_active_text_filed,
        left_options_active_text_filed_data, left_options_active_text_filed_color,
        top_height, top_radius, top_color, top_deg, top_padding, top_margin,
        top_list, top_label_color, top_label_deg, top_label_padding, top_label_size, top_label_family, top_label_weight, top_label_style,
        top_label_filed, top_label_filed_data, top_label_filed_color,
        top_select_width, top_select_height, top_select_back, top_select_deg, top_select_color, top_select_size,
        top_select_family, top_select_weight, top_select_style, top_select_border, top_select_icon,
        video_align_items, video_align_content, video_justify_content, video_flex_direction, video_flex_wrap,
        video_back, video_deg, video_padding, video_title, item_back, item_deg, item_padding, item_margin, item_list,
        title_position, title_topUnit, title_top, title_btmUnit, title_btm, title_lefUnit, title_lef, title_rigUnit, title_rig,
        title_field, title_size, title_color, title_deg, title_family, title_weight, title_style,
        title_filed, title_filed_data, title_filed_color,

        pagination_back, pagination_deg, pagination_padding, pagination_margin,
        itemActiveBg, itemActiveBgDisabled, itemActiveColor, itemActiveColorDisabled, itemActiveColorHover, itemBg, itemSize,
        itemShowTotal, itemShowTotal_page, itemShowTotal_total, total_filed, total_filed_data, total_filed_color,
        total_size, total_color, total_deg, total_family, total_weight, total_style,

        isOrga, isType, isPosi, isNums,
        orga_api, orga_params, type_api, type_params, posi_api, posi_params,
        orga_field, type_field, posi_field, index_field, size_field,
        defautl_org, defautl_type, defautl_posi, defautl_num, defautl_index,
    } = data

    const [orgaList, setOrgaList] = useState([])
    const [typeList, setTypeList] = useState([])
    const [posiList, setPosiList] = useState([])

    const [orgaValue, setOrgaValue] = useState(defautl_org)
    const [typeValue, setTypeValue] = useState(defautl_type)
    const [posiValue, setPosiValue] = useState(defautl_posi)
    const [indexValue, setIndexValue] = useState(defautl_index)
    const [numsValue, setNumsValue] = useState(defautl_num)

    const [RenderList, setRenderList] = useState()
    const [VideoList, setVideoList] = useState()
    const [Total, setTotal] = useState(0)
    const [Uuid, setUuid] = useState()

    const leftStyle = {
        width: left_width,
        height: SpacingSizeCallBack(left_margin, 100, true),
        borderRadius: SpacingCallBack(left_radius),
        background: ColorCallBack(left_color, left_deg),
        margin: SpacingCallBack(left_margin),
        padding: SpacingCallBack(left_padding),
    }

    const leftLabelStyle = {
        '--color': ColorCallBack(left_label_color, left_label_deg),
        padding: SpacingCallBack(left_label_padding),
        fontSize: left_label_size,
        fontFamily: left_label_family,
        fontWeight: left_label_weight,
        fontStyle: left_label_style,
        filter: SetFilderParams(left_label_filed, left_label_filed_data, left_label_filed_color)
    }

    const leftSelectStyle = {
        height: left_select_height,
        background: ColorCallBack(left_select_back, left_select_deg),
        color: left_select_color,
        fontSize: left_select_size,
        fontFamily: left_select_family,
        fontWeight: left_select_weight,
        fontStyle: left_select_style,
        borderColor: left_select_border,
        '--iconColor': left_select_icon,
    }

    const numberStyle = {
        '--align-items': number_align_items,
        '--align-content': number_align_content,
        '--justify-content': number_justify_content,
        '--flex-direction': number_flex_direction,
        '--flex-wrap': number_flex_wrap,
    }

    const numberItemStyle = {
        ...UnitCallBackStruct(number_widthUnit, number_width, 'width'),
        ...UnitCallBackStruct(number_heightUnit, number_height, 'height'),
        padding: SpacingCallBack(number_padding),
        margin: SpacingCallBack(number_margin),
    }

    const numberBackDefault = {
        background: ColorCallBack(left_options_default_back, left_options_default_deg),
        borderRadius: SpacingCallBack(left_options_default_radius),
        border: SetBorderParams(left_options_default_border, left_options_default_size, left_options_default_type, left_options_default_color),
    }

    const numberBackActive = {
        background: ColorCallBack(left_options_active_back, left_options_active_deg),
        borderRadius: SpacingCallBack(left_options_active_radius),
        border: SetBorderParams(left_options_active_border, left_options_active_size, left_options_active_type, left_options_active_color)
    }

    const numberTextBefault = {
        '--color': ColorCallBack(left_options_default_text_color, left_options_default_text_deg),
        fontSize: left_options_default_text_size,
        fontFamily: left_options_default_text_family,
        fontWeight: left_options_default_text_weight,
        fontStyle: left_options_default_text_style,
        filter: SetFilderParams(left_options_default_text_filed, left_options_default_text_filed_data, left_options_default_text_filed_color)
    }

    const numberTextActive = {
        '--color': ColorCallBack(left_options_active_text_color, left_options_active_text_deg),
        fontSize: left_options_active_text_size,
        fontFamily: left_options_active_text_family,
        fontWeight: left_options_active_text_weight,
        fontStyle: left_options_active_text_style,
        filter: SetFilderParams(left_options_active_text_filed, left_options_active_text_filed_data, left_options_active_text_filed_color)
    }

    const topStyle = {
        height: top_height,
        width: SpacingSizeCallBack(top_margin, 100, true),
        borderRadius: SpacingCallBack(top_radius),
        background: ColorCallBack(top_color, top_deg),
        margin: SpacingCallBack(top_margin),
        padding: SpacingCallBack(top_padding),
    }

    const topLabelStyle = {
        '--color': ColorCallBack(top_label_color, top_label_deg),
        padding: SpacingCallBack(top_label_padding),
        fontSize: top_label_size,
        fontFamily: top_label_family,
        fontWeight: top_label_weight,
        fontStyle: top_label_style,
        filter: SetFilderParams(top_label_filed, top_label_filed_data, top_label_filed_color)
    }

    const topSelectStyle = {
        width: top_select_width,
        height: top_select_height,
        background: ColorCallBack(top_select_back, top_select_deg),
        color: top_select_color,
        fontSize: top_select_size,
        fontFamily: top_select_family,
        fontWeight: top_select_weight,
        fontStyle: top_select_style,
        borderColor: top_select_border,
        '--iconColor': top_select_icon,
    }

    const videoStyle = {
        '--video_align-items': video_align_items,
        '--video_align-content': video_align_content,
        '--video_justify-content': video_justify_content,
        '--video_flex-direction': video_flex_direction,
        '--video_flex-wrap': video_flex_wrap,
        background: ColorCallBack(video_back, video_deg),
        padding: SpacingCallBack(video_padding),
    }

    const videoItemStyle = {
        background: ColorCallBack(item_back, item_deg),
        padding: SpacingCallBack(item_padding),
        margin: SpacingCallBack(item_margin),
    }
    const titlePosition = {
        'top-left': { top: title_top, right: null, bottom: null, left: title_lef, topUnit: title_topUnit, leftUnit: title_lefUnit },
        'top-right': { top: title_top, right: title_rig, bottom: null, left: null, topUnit: title_topUnit, rightUnit: title_rigUnit },
        'bottom-left': { top: null, right: null, bottom: title_btm, left: title_lef, bottomUnit: title_btmUnit, leftUnit: title_lefUnit },
        'bottom-right': { top: null, right: title_rig, bottom: title_btm, left: null, bottomUnit: title_btmUnit, rightUnit: title_rigUnit },
    };

    const videoTitleStyle = {
        ...SetPositionParams(titlePosition, title_position),
        '--video_title_color': ColorCallBack(title_color, title_deg),
        fontSize: title_size,
        fontFamily: title_family,
        fontWeight: title_weight,
        fontStyle: title_style,
        filter: SetFilderParams(title_filed, title_filed_data, title_filed_color),
    }

    const paginationStyle = {
        width: SpacingSizeCallBack(pagination_margin, 100),
        background: ColorCallBack(pagination_back, pagination_deg),
        padding: SpacingCallBack(pagination_padding),
        margin: SpacingCallBack(pagination_margin),
    }

    const PaginationTheme = {
        itemActiveBg,
        itemActiveBgDisabled,
        itemActiveColor,
        itemActiveColorDisabled,
        itemActiveColorHover,
        itemBg,
        itemSize,
    }

    useEffect(() => {
        const listData = item_list?.reduce((acc, v) => {
            const { total, row, col } = v
            acc[total] = { width: Math.floor(100 / col), height: Math.floor(100 / row) }
            return acc
        }, {})
        setRenderList(listData)
    }, [item_list])

    const getOptionsData = async () => {
        if (isOrga) {
            const [err, res] = await axios({ method: 'get', url: orga_api, params: strOfurlParamsFunc(orga_params) })
            if (err) return console.log('组织机构获取失败')
            setOrgaList([{ label: '全部', value: '00000000-0000-0000-0000-000000000000' }, ...res.data.list])
            setOrgaValue(defautl_org)
        } else setOrgaValue(defautl_org)
        if (isType) {
            const [err, res] = await axios({ method: 'get', url: type_api, params: strOfurlParamsFunc(type_params) })
            if (err) return console.log('组织机构获取失败')
            setTypeList([{ tableName: '全部', uuid: '00000000-0000-0000-0000-000000000000' }, ...res.data.list])
            setTypeValue(defautl_type)
        } else setTypeValue(defautl_type)
        if (isPosi) {
            const [err, res] = await axios({ method: 'get', url: posi_api, params: strOfurlParamsFunc(posi_params) })
            if (err) return console.log('组织机构获取失败')
            setPosiList([{ tableName: '全部', uuid: '00000000-0000-0000-0000-000000000000' }, ...res.data.list])
            setPosiValue(defautl_posi)
        } else setPosiValue(defautl_posi)
    }

    useEffect(() => {
        getOptionsData()
    }, [data])


    useEffect(() => {
        const backData = DiyDataReturn(data, UrlData, {}, 'api_diyObj', { list: 0, total: [] })
        const { list, total } = backData
        setVideoList(list)
        setTotal(total)
        setUuid(v4())
    }, [UrlData, data])


    const onOrgSelect = (e) => {
        setOrgaValue(e)
        setIndexValue(1)
        if (isParams) {
            const data = isParamsConfig.map(v => {
                if (v.apiParams === orga_field) v.apiData = e
                if (v.apiParams === index_field) v.apiData = 1
                if (v.apiParams === size_field) v.apiData = numsValue
                return v
            })
            LayoutEvent.emit({ type: 'onAPIParamsSelect', data })
        }
    }
    const onTypeSelect = (e) => {
        setTypeValue(e)
        setIndexValue(1)
        if (isParams) {
            const data = isParamsConfig.map(v => {
                if (v.apiParams === type_field) v.apiData = e
                if (v.apiParams === index_field) v.apiData = 1
                if (v.apiParams === size_field) v.apiData = numsValue
                return v
            })
            LayoutEvent.emit({ type: 'onAPIParamsSelect', data })
        }
    }
    const onPosiSelect = (e) => {
        setPosiValue(e)
        setIndexValue(1)
        if (isParams) {
            const data = isParamsConfig.map(v => {
                if (v.apiParams === posi_field) v.apiData = e
                if (v.apiParams === index_field) v.apiData = 1
                if (v.apiParams === size_field) v.apiData = numsValue
                return v
            })
            LayoutEvent.emit({ type: 'onAPIParamsSelect', data })
        }
    }
    const onNumSelect = (e) => {
        setNumsValue(e)
        setIndexValue(1)
        if (isParams) {
            const data = isParamsConfig.map(v => {
                if (v.apiParams === index_field) v.apiData = 1
                if (v.apiParams === size_field) v.apiData = e
                return v
            })
            LayoutEvent.emit({ type: 'onAPIParamsSelect', data })
        }
    }
    const onPaginationChange = (e) => {
        setIndexValue(e)
        if (isParams) {
            const data = isParamsConfig.map(v => {
                if (v.apiParams === index_field) v.apiData = e
                if (v.apiParams === size_field) v.apiData = numsValue
                return v
            })
            LayoutEvent.emit({ type: 'onAPIParamsSelect', data })
        }
    }
    const showTotal = (total, range) => {
        const totalStyle = {
            '--totalColor': ColorCallBack(total_color, total_deg),
            fontSize: total_size,
            fontFamily: total_family,
            fontWeight: total_weight,
            fontStyle: total_style,
            filter: SetFilderParams(total_filed, total_filed_data, total_filed_color)
        }
        if (itemShowTotal) {
            return (
                <div className='itemShowTotal' style={totalStyle}>
                    {itemShowTotal_page && ` 第 ${range[0]}-${range[1]} 条 `}
                    {itemShowTotal_page && itemShowTotal_total && ','}
                    {itemShowTotal_total && ` 共 ${total} 条 `}
                </div>
            )
        }

    }

    return (
        <div className="PrefabricatedVisualMonitoring">
            {left_options &&
                <div className="left_options" style={leftStyle}>
                    {isOrga &&
                        <div className='left_options_item'>
                            <div className="left_options_item_label" style={leftLabelStyle}>组织机构 : </div>
                            <TreeSelect
                                showSearch
                                treeNodeFilterProp="label"
                                treeDefaultExpandAll
                                value={orgaValue}
                                treeData={orgaList}
                                style={topSelectStyle}
                                onChange={onOrgSelect}
                            />
                        </div>
                    }
                    {isType &&
                        <div className='left_options_item'>
                            <div className="left_options_item_label" style={leftLabelStyle}>监控类型 : </div>
                            <TreeSelect
                                showSearch
                                treeNodeFilterProp="tableName"
                                treeDefaultExpandAll
                                fieldNames={{ label: 'tableName', value: 'uuid' }}
                                value={typeValue}
                                treeData={typeList}
                                style={topSelectStyle}
                                onChange={onTypeSelect}
                            />
                        </div>
                    }
                    {isPosi &&
                        <div className='left_options_item'>
                            <div className="left_options_item_label" style={leftLabelStyle}>监控位置 : </div>
                            <TreeSelect
                                showSearch
                                treeNodeFilterProp="tableName"
                                treeDefaultExpandAll
                                fieldNames={{ label: 'tableName', value: 'uuid' }}
                                value={posiValue}
                                treeData={posiList}
                                style={topSelectStyle}
                                onChange={onPosiSelect}
                            />
                        </div>
                    }
                    {isNums &&
                        <div className='left_options_item'>
                            <div className="left_options_item_label" style={leftLabelStyle}>显示方式 : </div>
                            <div className='left_options_item_snums' style={numberStyle}>
                                {left_list && left_list.map(v => {
                                    const status = numsValue === v.value
                                    return (
                                        <div
                                            key={v.value}
                                            className='left_options_item_snums_item'
                                            style={status ? { ...numberItemStyle, ...numberBackActive } : { ...numberItemStyle, ...numberBackDefault }}
                                            onClick={() => setNumsValue(v.value)}
                                        >
                                            <div
                                                className='left_options_item_snums_item_label'
                                                style={status ? { ...numberTextActive } : { ...numberTextBefault }}
                                            >
                                                {v.label}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
            }
            <div className="right_box">
                {top_options &&
                    <div className="top_options" style={topStyle}>
                        {isOrga &&
                            <div className='top_options_item'>
                                <div className="top_options_item_label" style={topLabelStyle}>组织机构 : </div>
                                <TreeSelect
                                    showSearch
                                    treeNodeFilterProp="label"
                                    treeDefaultExpandAll
                                    value={orgaValue}
                                    treeData={orgaList}
                                    style={topSelectStyle}
                                    onChange={onOrgSelect}
                                />
                            </div>
                        }
                        {isType &&
                            <div className='top_options_item'>
                                <div className="top_options_item_label" style={topLabelStyle}>监控类型 : </div>
                                <TreeSelect
                                    showSearch
                                    treeNodeFilterProp="tableName"
                                    treeDefaultExpandAll
                                    fieldNames={{ label: 'tableName', value: 'uuid' }}
                                    value={typeValue}
                                    treeData={typeList}
                                    style={topSelectStyle}
                                    onChange={onTypeSelect}
                                />
                            </div>
                        }
                        {isPosi &&
                            <div className='top_options_item'>
                                <div className="top_options_item_label" style={topLabelStyle}>监控位置 : </div>
                                <TreeSelect
                                    showSearch
                                    treeNodeFilterProp="tableName"
                                    treeDefaultExpandAll
                                    fieldNames={{ label: 'tableName', value: 'uuid' }}
                                    value={posiValue}
                                    treeData={posiList}
                                    style={topSelectStyle}
                                    onChange={onPosiSelect}
                                />
                            </div>
                        }
                        {isNums &&
                            <div className='top_options_item'>
                                <div className="top_options_item_label" style={topLabelStyle}>显示方式 : </div>
                                <Select
                                    value={numsValue}
                                    options={top_list}
                                    style={topSelectStyle}
                                    onChange={onNumSelect}
                                />
                            </div>
                        }
                    </div>
                }
                <div className="monitoring" style={videoStyle}>
                    {!RenderList || !VideoList &&
                        <div className='monitoring_loading'>
                            <Spin />
                        </div>
                    }
                    {RenderList && VideoList && VideoList.length === 0 &&
                        <div className='monitoring_loading'>
                            <Result status="404" title="暂无数据" />
                        </div>
                    }
                    {RenderList && VideoList && VideoList.length !== 0 && VideoList.map((v, i) => {
                        const { length } = VideoList
                        const { width, height } = RenderList[length]
                        const itemStyle = {
                            ...videoItemStyle,
                            width: SpacingSizeCallBack(item_margin, width),
                            height: SpacingSizeCallBack(item_margin, height, true),
                        }
                        return (
                            <div className='video_item' key={i + Uuid} style={itemStyle}>
                                {video_title && <div className='video_title' style={videoTitleStyle}>标题</div>}
                                <MonitorTemplateA01 data={v} />
                            </div>
                        )
                    })}
                </div>
                <div className="pagination" style={paginationStyle}>
                    <ConfigProvider theme={{ components: { Pagination: PaginationTheme } }}>
                        <Pagination
                            total={Total}
                            current={indexValue}
                            pageSize={numsValue}
                            showTotal={showTotal}
                            onChange={onPaginationChange}
                        />
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
};
// 无人机航拍
const PrefabricatedVisualRecorded = ({ tempId, UrlData, data, LayoutEvent }) => {
    const { label_color, label_deg, label_padding, label_size, label_family, label_weight, label_style, label_filed, label_filed_data, label_filed_color,
        select_height, select_back, select_deg, select_color, select_size, select_family, select_weight, select_style, select_border, select_icon,
        isTitle, title_field, align_items, align_content, justify_content, flex_direction, flex_wrap, title_color, title_deg,
        title_padding, title_size, title_family, title_weight, title_style, title_filed, title_filed_data, title_filed_color,
    } = data



    const labelStyle = {
        '--color': ColorCallBack(label_color, label_deg),
        padding: SpacingCallBack(label_padding),
        fontSize: label_size,
        fontFamily: label_family,
        fontWeight: label_weight,
        fontStyle: label_style,
        filter: SetFilderParams(label_filed, label_filed_data, label_filed_color)
    }

    const selectStyle = {
        height: select_height,
        background: ColorCallBack(select_back, select_deg),
        color: select_color,
        fontSize: select_size,
        fontFamily: select_family,
        fontWeight: select_weight,
        fontStyle: select_style,
        borderColor: select_border,
        '--iconColor': select_icon,
    }

    const titleStyle = {
        '--align_items': align_items,
        '--align_content': align_content,
        '--justify_content': justify_content,
        '--flex_direction': flex_direction,
        '--flex_wrap': flex_wrap,
        color: ColorCallBack(title_color, title_deg),
        fontSize: title_size,
        fontFamily: title_family,
        fontWeight: title_weight,
        fontStyle: title_style,
        padding: SpacingCallBack(title_padding),
        filter: SetFilderParams(title_filed, title_filed_data, title_filed_color)
    }


    const [Url, setUrl] = useState('')
    const [Title, setTitle] = useState('')
    const [OrganizationUuid, setOrganizationUuid] = useState('')
    const [Data, setData] = useState([])
    const [dataSelect, setDataSelect] = useState()
    const [NumberSelect, setNumberSelect] = useState()
    const [dateValue, setDateValue] = useState()
    const [numsValue, setNumsValue] = useState()

    const getUrlData = async (date, nums, oruUuid) => {
        const params = { OrganizationUuid: oruUuid || OrganizationUuid, OrgType: 0, YearMonth: date, Number: nums }
        const [err, res] = await axios({ method: 'get', url: 'home/GetVideosByConjunctiveQuery', params })
        if (err) return console.log(err)
        const [data] = res.data.list
        setUrl(data?.fileUrl || '')
        setTitle(data?.[title_field] || '')
    }

    useEffect(() => {
        const backData = DiyDataReturn(data, UrlData, {}, 'api_diyObj')
        if (backData && backData.length !== 0) {
            const oruUuid = UrlData[data.http_urlName].apiMapping.params.OrganizationUuid
            setOrganizationUuid(oruUuid)
            setData(backData)
            const date = backData?.map(v => ({ value: v.yearMonth, label: v.yearMonth })) || []
            const [{ yearMonth, rowsCount }] = backData
            setDateValue(yearMonth)
            setDataSelect(date)
            const nums = [...Array(rowsCount).keys()].map(v => ({ value: v + 1, label: v + 1 })) || []
            setNumsValue(1)
            setNumberSelect(nums)
            getUrlData(yearMonth, 1, oruUuid)
        }
    }, [UrlData, data])


    const onDateChange = e => {
        setDateValue(e)
        const num = Data?.find(v => v.yearMonth === e)?.rowsCount || 0
        const nums = [...Array(num).keys()].map(v => ({ value: v + 1, label: v + 1 })) || []
        setNumberSelect(nums)
        setNumsValue(1)
        getUrlData(e, 1)
    }
    const onNumsChange = e => {
        setNumsValue(e)
        getUrlData(dateValue, e)
    }

    return (
        <div className='PrefabricatedVisualRecorded'>
            <div className='options'>
                <div className="options_item_label" style={labelStyle}>航拍日期 : </div>
                <Select
                    value={dateValue}
                    options={dataSelect}
                    onChange={onDateChange}
                    style={selectStyle}
                />
                <div className="options_item_label" style={labelStyle}>航拍次数 : </div>
                <Select
                    value={numsValue}
                    options={NumberSelect}
                    onChange={onNumsChange}
                    style={selectStyle}
                />
            </div>
            <div className='video'>
                {isTitle &&
                    <div className='title' style={titleStyle}>
                        <div>{Title}</div>
                    </div>
                }
                <VideoTemplateA02 url={Url} />
            </div>
        </div>
    )
}
// 无人机直播
const PrefabricatedVisualLive = ({ tempId, UrlData, data, LayoutEvent }) => {
    const { isParams, isParamsConfig, page_field, screen_field,
        back_color, back_deg, back_padding, isPage, isScreen, screen_nums, video_color, video_deg, live_url, live_cover,
        isPageTitle, page_title_prefix, page_title_suffix, page_title_color, page_title_deg, page_title_margin, page_title_size, page_title_family,
        page_title_weight, page_title_style, page_title_filed, page_title_filed_data, page_title_filed_color,
        page_button_back, page_button_size, page_button_pnback, page_button_pnsize, page_button_moback, page_button_mosize, page_button_radius,
        page_item_back, page_item_back_size, page_item_radius, page_item_isBorder, page_item_border_size, page_item_border_type, page_item_border_color,
        page_item_color, page_item_deg, page_item_size, page_item_family, page_item_weight, page_item_style,
        page_item_filed, page_item_filed_data, page_item_filed_color,
        page_active_back, page_active_back_size, page_active_radius, page_active_isBorder, page_active_border_size, page_active_border_type, page_active_border_color,
        page_active_color, page_active_deg, page_active_size, page_active_family, page_active_weight, page_active_style,
        page_active_filed, page_active_filed_data, page_active_filed_color,
        screen_back, screen_back_deg, screen_height, screen_width, screen_border, screen_color, screen_deg, screen_align, screen_size, screen_family,
        screen_weight, screen_style, screen_filed, screen_filed_data, screen_filed_color, screen_padding, screen_select, screen_layout, screen_layout_margin
    } = data

    const [RenderList, setRenderList] = useState()
    const [PageIndex, setPageIndex] = useState(1)
    const [PageSize, setPageSize] = useState(isScreen ? screen_nums : 1)
    const [LiveList, setLiveList] = useState()
    const [LiveTotal, setLiveTotal] = useState(0)

    const backStyle = {
        background: ColorCallBack(back_color, back_deg),
        padding: SpacingCallBack(back_padding),
    }
    const videoStyle = {
        background: ColorCallBack(video_color, video_deg),
    }
    const pageStyle = {
        '--pageTitleColor': ColorCallBack(page_title_color, page_title_deg),
        '--pageTitlePadding': SpacingCallBack(page_title_margin),
        '--pageTitleFontSize': page_title_size,
        '--pageTitleFontFamily': page_title_family,
        '--pageTitleFontWeight': page_title_weight,
        '--pageTitleFontStyle': page_title_style,
        '--pageTitleFilter': SetFilderParams(page_title_filed, page_title_filed_data, page_title_filed_color),
        '--pageBtnBack': page_button_back,
        '--pageBtnSize': page_button_size + 'px',
        '--pageBtnPnBack': page_button_pnback,
        '--pageBtnPnSize': page_button_pnsize + 'px',
        '--pageBtnMoback': page_button_moback,
        '--pageBtnMosize': page_button_mosize + 'px',
        '--pageBtnRadius': page_button_radius + 'px',
        '--pageItemBack': page_item_back,
        '--pageItemSize': page_item_back_size + 'px',
        '--pageItemRadius': page_item_radius + 'px',
        '--pageItemBorder': SetBorderParams(page_item_isBorder, page_item_border_size, page_item_border_type, page_item_border_color),
        '--pageItemColor': ColorCallBack(page_item_color, page_item_deg),
        '--pageItemFontSize': page_item_size + 'px',
        '--pageItemFontFamily': page_item_family,
        '--pageItemFontWeight': page_item_weight,
        '--pageItemFontStyle': page_item_style,
        '--pageItemFilter': SetFilderParams(page_item_filed, page_item_filed_data, page_item_filed_color),
        '--pageActiveBack': page_active_back,
        '--pageActiveSize': page_active_back_size + 'px',
        '--pageActiveRadius': page_active_radius + 'px',
        '--pageActiveBorder': SetBorderParams(page_active_isBorder, page_active_border_size, page_active_border_type, page_active_border_color),
        '--pageActiveColor': ColorCallBack(page_active_color, page_active_deg),
        '--pageActiveFontSize': page_active_size + 'px',
        '--pageActiveFontFamily': page_active_family,
        '--pageActiveFontWeight': page_active_weight,
        '--pageActiveFontStyle': page_active_style,
        '--pageActiveFilter': SetFilderParams(page_active_filed, page_active_filed_data, page_active_filed_color),
    }

    const screenStyle = {
        width: screen_width,
        height: screen_height,
        background: ColorCallBack(screen_back, screen_back_deg),
        borderColor: screen_border,
        '--screenColor': ColorCallBack(screen_color, screen_deg),
        '--screenFontSize': screen_size + 'px',
        '--screenFontFamily': screen_family,
        '--screenFontWeight': screen_weight,
        '--screenFontStyle': screen_style,
        '--screenAlign': screen_align,
        '--screenFilter': SetFilderParams(screen_filed, screen_filed_data, screen_filed_color),
    }

    useEffect(() => {
        const backData = DiyDataReturn(data, UrlData, {}, 'api_diyObj')
        const { total, list } = backData
        setLiveList(list)
        setLiveTotal(total)
        const listData = screen_layout.reduce((acc, v) => {
            const { number, row, column } = v
            acc[number] = { width: Math.floor(100 / row), height: Math.floor(100 / column) }
            return acc
        }, {})
        setRenderList(listData)
    }, [UrlData, data])

    const onPaginationChange = (e) => {
        setPageIndex(e)
        if (isParams) {
            const data = isParamsConfig.map(v => {
                if (v.apiParams === page_field) v.apiData = e
                if (v.apiParams === screen_field) v.apiData = PageSize
                return v
            })
            LayoutEvent.emit({ type: 'onAPIParamsSelect', data })
        }
    }

    const onScreen = e => {
        setPageSize(e)
        if (isParams) {
            const data = isParamsConfig.map(v => {
                if (v.apiParams === page_field) v.apiData = 1
                if (v.apiParams === screen_field) v.apiData = e
                return v
            })
            LayoutEvent.emit({ type: 'onAPIParamsSelect', data })
        }
    }

    return (
        <div className='PrefabricatedVisualLive' style={backStyle}>
            <div className='video'>
                {!RenderList || !LiveList &&
                    <div className='monitoring_loading'>
                        <Spin />
                    </div>
                }
                {RenderList && LiveList && LiveList.length === 0 &&
                    <div className='monitoring_loading'>
                        <Result status="404" title="暂无数据" />
                    </div>
                }
                {RenderList && LiveList && isScreen ? LiveList?.map(v => {
                    const { length } = LiveList
                    const { width, height } = RenderList[length]
                    const itemStyle = {
                        ...videoStyle,
                        margin: SpacingCallBack(screen_layout_margin),
                        width: SpacingSizeCallBack(screen_layout_margin, width),
                        height: SpacingSizeCallBack(screen_layout_margin, height, true),
                    }
                    return (
                        <div key={v.uuid} style={itemStyle}>
                            <VideoTemplateA04 url={v[live_url]} cover={v[live_cover]} />
                        </div>
                    )
                }) :
                    LiveList && <div style={{ ...videoStyle, width: '100%', height: '100%' }}>
                        <VideoTemplateA04 url={LiveList[0][live_url]} cover={LiveList[0][live_cover]} />
                    </div>
                }
            </div>
            {isPage &&
                <div className='options'>
                    <div className='page' style={pageStyle}>
                        <Pagination
                            current={PageIndex}
                            pageSize={PageSize}
                            total={LiveTotal}
                            showSizeChanger={false}
                            showTotal={total => isPageTitle ? `${page_title_prefix} ${total} ${page_title_suffix}` : ''}
                            onChange={onPaginationChange}
                        />
                    </div>
                    {isScreen &&
                        <div className='screen' style={{ padding: SpacingCallBack(screen_padding) }}>
                            <Select style={screenStyle} value={PageSize} options={screen_select} onChange={onScreen} />
                        </div>
                    }
                </div>
            }
        </div>
    )
}
// 视频列表
const PrefabricatedVisualList = ({ tempId, UrlData, data, LayoutEvent }) => {
    const { isTitle, isList, videoUrl, padding, align_items, align_content, justify_content, flex_direction, flex_wrap,
        title_field, title_align_items, title_align_content, title_justify_content, title_flex_direction, title_flex_wrap,
        title_color, title_deg, title_padding, title_size, title_family, title_weight, title_style,
        title_font_size, title_font_weight, title_font_style,
        list_cover, list_title, list_width, list_height, list_margin, list_back, list_deg, list_radius,

        list_title_height, list_title_align, list_title_color, list_title_deg, list_title_padding, list_title_size, list_title_family, list_title_weight,
        list_title_style, list_title_filed, list_title_filed_data, list_title_filed_color,
    } = data

    const boxLayStyle = {
        padding: SpacingCallBack(padding),
        '--align_items': align_items,
        '--align_content': align_content,
        '--justify_content': justify_content,
        '--flex_direction': flex_direction,
        '--flex_wrap': flex_wrap,
    }

    const titleBoxStyle = {
        '--title_align_items': title_align_items,
        '--title_align_content': title_align_content,
        '--title_justify_content': title_justify_content,
        '--title_flex_direction': title_flex_direction,
        '--title_flex_wrap': title_flex_wrap,
    }

    const titleStyle = {
        '--color': ColorCallBack(title_color, title_deg),
        fontSize: title_size,
        fontFamily: title_family,
        fontWeight: title_weight,
        fontStyle: title_style,
        padding: SpacingCallBack(title_padding),
        filter: SetFilderParams(title_font_size, title_font_weight, title_font_style)
    }

    const listStyle = {
        height: list_height,
        margin: SpacingCallBack(list_margin),
        background: ColorCallBack(list_back, list_deg),
        borderRadius: SpacingCallBack(list_radius),
    }

    const smallStyle = {
        textAlign: list_title_align,
        '--itemColor': ColorCallBack(list_title_color, list_title_deg),
        padding: SpacingCallBack(list_title_padding),
        fontSize: list_title_size,
        fontFamily: list_title_family,
        fontWeight: list_title_weight,
        fontStyle: list_title_style,
        filter: SetFilderParams(list_title_filed, list_title_filed_data, list_title_filed_color)
    }


    const testList = [{}, {}, {}, {}]



    return (
        <div className='PrefabricatedVisualList' style={boxLayStyle}>
            <div className='box video'>
                {isTitle &&
                    <div className='title' style={titleBoxStyle}>
                        <div style={titleStyle}>视频标题</div>
                    </div>
                }
                <VideoTemplateA02 url={''} />
            </div>
            {isList &&
                <div className='box list' style={{ width: list_width }}>
                    <DevScrollView>
                        <div className='itemBox'>
                            {testList.map((v, i) => {
                                return (
                                    <div key={i} className='item' style={listStyle}>
                                        <img className='cover' src="" alt="" />
                                        <div className='title' style={{ height: list_title_height }}>
                                            <div style={smallStyle}>标题名称标题名称标题名称标题名称标题名称</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </DevScrollView>
                </div>
            }
        </div>
    )
}




export const PrefabricatedVisualTemplate = {
    PrefabricatedVisualMonitoring,
    PrefabricatedVisualRecorded,
    PrefabricatedVisualLive,
    PrefabricatedVisualList
}