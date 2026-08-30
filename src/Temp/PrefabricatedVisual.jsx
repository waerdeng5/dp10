
import { useState, useEffect } from 'react'
import { Select, TreeSelect, Pagination, ConfigProvider, Spin, Result } from 'antd'

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

import { axios, axiosFor, strOfurlParamsFunc } from '../Utils/Api'

import { MonitorTemplateA01 } from './DevTemplate'

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
        const listData = item_list.reduce((acc, v) => {
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
                            <div className='video_item' key={i} style={itemStyle}>
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

    return (
        <div>
            无人机航拍


            newsRelease
            moduleType=

            coverUrlList
            articleAttachment

            线上安全技术交底--792e061a-8725-4a58-886f-ba888ce748cd
            安全责任书签订--6cf70c08-5b16-4533-b7cf-9701a7af1a7f
            风险告知--49aad8e4-8c60-4cf5-9147-7aa453d32bb9
            专项施工方案--7f9f31f2-0997-484f-95f6-50cc7f36e193
            危大工程方案--8510387b-0187-4620-9d68-b2ad26dcba7b


            交底管理--6d97e414-d2ad-451a-b4d0-50ef5dd2f22c
            原材料抽样管控--d3773470-c86e-445f-a017-56b119db428d
            关键工序验收--3ba72de7-f04a-4103-9717-b8a9e0b5b057
            旁站监督--f2a8f0ad-cafe-4a65-a19c-847701815cc4

            企业新闻--62db9761-9bdf-4470-a48d-933bb6b274de

            publishStatus
            newsRelease/UpdateNewsReleaseStatus
            ActionType

            ff434970-a0b3-40dc-8adb-d26da0564ef3	草稿
            d8f1cd7e-8979-497c-ae3d-40f1a92c4127	发布
            e4074e43-44ce-4f43-85aa-93b0377414f1	下架
        </div>
    )
}

// 无人机直播
const PrefabricatedVisualLive = ({ tempId, UrlData, data, LayoutEvent }) => {
    console.log(data)
    return (
        <div>
            无人机直播
        </div>
    )
}


export const PrefabricatedVisualTemplate = {
    PrefabricatedVisualMonitoring,
    PrefabricatedVisualRecorded,
    PrefabricatedVisualLive
}