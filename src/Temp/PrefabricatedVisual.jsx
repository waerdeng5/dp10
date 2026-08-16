import { Select } from 'antd'
import { Pagination, ConfigProvider } from 'antd'
import { useState, useEffect } from 'react'

import {
    SpacingCallBack,
    ColorCallBack,
    SpacingSizeCallBack,
    SetFilderParams,
    UnitCallBackStruct,
    SetBorderParams,
    SetPositionParams
} from '../Utils'

const PrefabricatedVisualMonitoring = ({ tempId, UrlData, data, LayoutEvent }) => {

    const { left_options, top_options,
        left_width, left_radius, left_color, left_deg, left_padding, left_margin, left_orga, left_type, left_posi, left_nums,
        left_orga_api, left_orga_params, left_type_api, left_type_params, left_posi_api, left_posi_params, left_list,
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
        top_height, top_radius, top_color, top_deg, top_padding, top_margin, top_orga, top_type, top_posi, top_nums,
        top_orga_api, top_orga_params, top_type_api, top_type_params, top_posi_api, top_posi_params, top_list,
        top_label_color, top_label_deg, top_label_padding, top_label_size, top_label_family, top_label_weight, top_label_style,
        top_label_filed, top_label_filed_data, top_label_filed_color,
        top_select_width, top_select_height, top_select_back, top_select_deg, top_select_color, top_select_size,
        top_select_family, top_select_weight, top_select_style, top_select_border, top_select_icon,
        video_align_items, video_align_content, video_justify_content, video_flex_direction, video_flex_wrap,
        video_back, video_deg, video_padding, video_title, item_back, item_deg, item_padding, item_margin, item_list,
        title_position, title_topUnit, title_top, title_btmUnit, title_btm, title_lefUnit, title_lef, title_rigUnit, title_rig,
        title_field, title_size, title_color, title_deg, title_family, title_weight, title_style,
        title_filed, title_filed_data, title_filed_color,

        pagination_back, pagination_deg, pagination_padding, pagination_margin
    } = data



    const [orgaList, setOrgaList] = useState([{ label: '全部', value: '' }])
    const [typeList, setTypeList] = useState([{ label: '全部', value: '' }])
    const [posiList, setPosiList] = useState([{ label: '全部', value: '' }])

    const [orgaValue, setOrgaValue] = useState('')
    const [typeValue, setTypeValue] = useState('')
    const [posiValue, setPosiValue] = useState('')
    const [numsValue, setNumsValue] = useState(1)

    const [RenderList, setRenderList] = useState()
    const [VideoList, setVideoList] = useState([{}, {}, {}, {}])

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

    useEffect(() => {
        const listData = item_list.reduce((acc, v) => {
            const { total, row, col } = v
            acc[total] = { width: Math.floor(100 / col), height: Math.floor(100 / row) }
            return acc
        }, {})
        setRenderList(listData)
    }, [item_list])

    const showTotal = total => `Total ${total} items`;

    return (
        <div className="PrefabricatedVisualMonitoring">
            {left_options &&
                <div className="left_options" style={leftStyle}>
                    {left_orga &&
                        <div className='left_options_item'>
                            <div className="left_options_item_label" style={leftLabelStyle}>组织机构 : </div>
                            <Select
                                value={orgaValue}
                                options={orgaList}
                                style={leftSelectStyle}
                            />
                        </div>
                    }
                    {left_type &&
                        <div className='left_options_item'>
                            <div className="left_options_item_label" style={leftLabelStyle}>监控类型 : </div>
                            <Select
                                value={typeValue}
                                options={typeList}
                                style={leftSelectStyle}
                            />
                        </div>
                    }
                    {left_posi &&
                        <div className='left_options_item'>
                            <div className="left_options_item_label" style={leftLabelStyle}>监控位置 : </div>
                            <Select
                                value={posiValue}
                                options={posiList}
                                style={leftSelectStyle}
                            />
                        </div>
                    }
                    {left_nums &&
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
                        {top_orga &&
                            <div className='top_options_item'>
                                <div className="top_options_item_label" style={topLabelStyle}>组织机构 : </div>
                                <Select
                                    value={orgaValue}
                                    options={orgaList}
                                    style={topSelectStyle}
                                />
                            </div>
                        }
                        {top_type &&
                            <div className='top_options_item'>
                                <div className="top_options_item_label" style={topLabelStyle}>监控类型 : </div>
                                <Select
                                    value={typeValue}
                                    options={typeList}
                                    style={topSelectStyle}
                                />
                            </div>
                        }
                        {top_posi &&
                            <div className='top_options_item'>
                                <div className="top_options_item_label" style={topLabelStyle}>监控位置 : </div>
                                <Select
                                    value={posiValue}
                                    options={posiList}
                                    style={topSelectStyle}
                                />
                            </div>
                        }
                        {top_nums &&
                            <div className='top_options_item'>
                                <div className="top_options_item_label" style={topLabelStyle}>显示方式 : </div>
                                <Select
                                    value={numsValue}
                                    options={top_list}
                                    style={topSelectStyle}
                                />
                            </div>
                        }
                    </div>
                }
                <div className="monitoring" style={videoStyle}>
                    {RenderList && VideoList.map((v, i) => {
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
                            </div>
                        )
                    })}
                </div>
                <div className="pagination" style={paginationStyle}>
                    <ConfigProvider
                        theme={{
                            components: {
                                Pagination: {
                                    itemActiveBg: '#ffffff',
                                    itemActiveBgDisabled: 'rgba(0,0,0,0.15)',
                                    itemActiveColor: '#1677ff',
                                    itemActiveColorDisabled: 'rgba(0,0,0,0.25)',
                                    itemActiveColorHover: '#4096ff',
                                    itemBg: '#ffffff',
                                    itemSize: 32
                                },
                            },
                        }}>
                        <Pagination total={50} showTotal={showTotal} />
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
};


export const PrefabricatedVisualTemplate = {
    PrefabricatedVisualMonitoring
}