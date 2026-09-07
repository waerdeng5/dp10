import './Prefabricated.scss'
import { Masonry } from 'antd'
import { useEffect, useState, Fragment } from 'react'
import {
    ColorCallBack,
    SpacingCallBack,
    SetFilderParams,
    getRandomInt,
    DiyDataReturn,
    TemplateClickFn,
    getNestedValue,
    UnitCallBackStruct,
    SpacingSizeCallBack,
    SetPositionParams,
    SetBorderParams,
    mapTreeKey
} from '../Utils'

import { ICONMapping } from '../Config/IconMapping'
import { useTemplateModel } from '../Config/useHooks'
import { DevScrollView } from './DevTemplate'

const temporaryDataA01 = {
    A01: getRandomInt(1, 1000),
    A02: getRandomInt(1, 1000),
    A03: getRandomInt(1, 1000),
    A04: getRandomInt(1, 1000),
    A05: getRandomInt(1, 1000),
    A06: getRandomInt(1, 1000),
    A07: getRandomInt(1, 1000),
    A08: getRandomInt(1, 1000),
    A09: getRandomInt(1, 1000),
    A10: getRandomInt(1, 1000),
}

const SoldNumber = ({ template, data, list, Event }) => {
    const openModel = useTemplateModel()
    const parts = template.split(/(\$\{[^}]+\})/)
    return (
        <>
            {parts.map((part, index) => {
                const match = part.match(/\$\{([^}]+)\}/)
                if (match) {
                    const key = match[1];
                    const hasA01 = list.some(v => v.data_key === key)
                    if (hasA01) {
                        const obj = list.find(v => v.data_key === key)
                        const { data_margin, data_color, data_deg, data_size, data_family, data_weight, data_style, data_value,
                            data_filed, data_filed_color, data_filed_data, click_status
                        } = obj

                        const numberStyle = {
                            cursor: click_status ? 'pointer' : 'auto',
                            margin: SpacingCallBack(data_margin),
                            '--titleColor': ColorCallBack(data_color, data_deg),
                            fontSize: data_size,
                            fontFamily: data_family,
                            fontWeight: data_weight,
                            fontStyle: data_style,
                            filter: SetFilderParams(data_filed, data_filed_color, data_filed_data),
                        }
                        return (
                            <div
                                className='textNumber'
                                key={index}
                                style={numberStyle}
                                onClick={e => click_status && TemplateClickFn(e, obj, data, Event, openModel)}
                            >
                                {data?.[data_value] || 0}
                            </div>
                        )
                    } else return <div key={index} style={{ fontSize: 40, fontFamily: "DIN", margin: '0 4px' }}> 0 </div>
                }
                return <Fragment key={index}>{part}</Fragment>;
            })}
        </>
    )
}

const PrefabricatedDiyText = ({ tempId, UrlData, data, LayoutEvent }) => {
    const openModel = useTemplateModel()
    const [Data, setData] = useState()
    const {
        left_img, left_img_url, left_img_width, left_img_height, left_img_margin,
        right_img, right_img_url, right_img_width, right_img_height, right_img_margin,
        center_width, center_height, center_color, center_deg, center_padding, center_margin, center_flex,
        center_align_content, center_align_items, center_flex_direction, center_flex_wrap, center_justify_content,
        text_list, data_list,
    } = data

    const leftImgStyle = {
        width: left_img_width,
        height: left_img_height,
        margin: SpacingCallBack(left_img_margin),
    }

    const rightImgStyle = {
        width: right_img_width,
        height: right_img_height,
        margin: SpacingCallBack(right_img_margin),
    }

    const centerStyle = {
        height: center_height,
        background: ColorCallBack(center_color, center_deg),
        padding: SpacingCallBack(center_padding),
        margin: SpacingCallBack(center_margin),
        '--alignContent': center_align_content,
        '--alignItems': center_align_items,
        '--flexDirection': center_flex_direction,
        '--flexWrap': center_flex_wrap,
        '--justifyContent': center_justify_content,
    }

    if (center_flex) centerStyle.flex = 1
    else centerStyle.width = center_width



    useEffect(() => {
        const backData = DiyDataReturn(data, UrlData, temporaryDataA01, 'api_diyObj')
        setData(backData)
    }, [UrlData, data])

    return (
        <div className='PrefabricatedDiyText' >
            {left_img && <img src={left_img_url} style={leftImgStyle} alt="left_img_url" />}
            <div className='centerBox' style={centerStyle}>
                {text_list?.map((v, i) => {
                    const { text_color, text_deg, text_size, text_family, text_weight, text_style, text_filed, text_filed_data, text_filed_color,
                        text_margin, click_status
                    } = v
                    const textStyle = {
                        cursor: click_status ? 'pointer' : 'auto',
                        margin: SpacingCallBack(text_margin),
                        '--titleColor': ColorCallBack(text_color, text_deg),
                        fontSize: text_size,
                        fontFamily: text_family,
                        fontWeight: text_weight,
                        fontStyle: text_style,
                        filter: SetFilderParams(text_filed, text_filed_data, text_filed_color),
                    }
                    return (
                        <div key={i} style={textStyle} className='textItem' onClick={(e) => click_status && TemplateClickFn(e, v, Data, LayoutEvent, openModel)}>
                            <SoldNumber template={v.text} data={Data} list={data_list} Event={LayoutEvent} />
                        </div>
                    )
                })}
            </div>
            {right_img && <img src={right_img_url} style={rightImgStyle} alt="right_img_url" />}
        </div>
    )
}

const PrefabricatedDiyOrgA01 = ({ tempId, UrlData, data, LayoutEvent }) => {

    const [Data, setData] = useState([])
    const [Active, setActive] = useState()
    const { http_urlName, http_urlLevel, http_urlMapping, isParams, isParamsConfig,
        renderLabel, renderValue, renderDefault, renderDefValue,
        backPadding, backMapping, backType, backColor, backDeg, backImage, backVideo, backVideoStart, backVideoEnd,
        cellDefPadding, cellDefMapping, cellDefHeight, cellDefAlign, cellDefColor, cellDefDeg,
        cellActPadding, cellActMapping, cellActHeight, cellActAlign, cellActColor, cellActDeg,
        textDefColor, textDefDeg, textDefSize, textDefFamily, textDefWeight, textDefStyle, textDefFiled, textDefFiled_data, textDefFiled_color,
        textActColor, textActDeg, textActSize, textActFamily, textActWeight, textActStyle, textActFiled, textActFiled_data, textActFiled_color,
    } = data

    const backStyle = {
        padding: SpacingCallBack(backPadding),
        margin: SpacingCallBack(backMapping),
    }

    const cellDef = {
        padding: SpacingCallBack(cellDefPadding),
        margin: SpacingCallBack(cellDefMapping),
        height: cellDefHeight,
        textAlign: cellDefAlign,
        background: ColorCallBack(cellDefColor, cellDefDeg),
    }
    const cellAct = {
        padding: SpacingCallBack(cellActPadding),
        margin: SpacingCallBack(cellActMapping),
        height: cellActHeight,
        textAlign: cellActAlign,
        background: ColorCallBack(cellActColor, cellActDeg),
    }
    const textDef = {
        '--titleColor': ColorCallBack(textDefColor, textDefDeg),
        fontSize: textDefSize,
        fontFamily: textDefFamily,
        fontWeight: textDefWeight,
        fontStyle: textDefStyle,
        filter: SetFilderParams(textDefFiled, textDefFiled_data, textDefFiled_color),
    }
    const textAct = {
        '--titleColor': ColorCallBack(textActColor, textActDeg),
        fontSize: textActSize,
        fontFamily: textActFamily,
        fontWeight: textActWeight,
        fontStyle: textActStyle,
        filter: SetFilderParams(textActFiled, textActFiled_data, textActFiled_color),
    }


    useEffect(() => {
        const apiData = http_urlLevel ? getNestedValue(http_urlMapping, UrlData[http_urlName]) : UrlData[http_urlName]
        setData(apiData || [])
        if (renderDefault && !Active) setActive(renderDefValue)
    }, [UrlData, data])

    const onClick = (e) => {
        setActive(e)

        if (isParams) {
            const data = isParamsConfig.map(v => {
                v.apiData = e
                return v
            })
            LayoutEvent.emit({ type: 'onAPIParamsSelect', data })
        }
    }

    return (
        <div className='PrefabricatedDiyOrgA01' style={backStyle}>
            {backType === 'color' && <div className='backColor' style={{ background: ColorCallBack(backColor, backDeg) }} />}
            {backType === 'image' && <img className='backImage' src={backImage} alt="" />}
            {Data.map(v => {
                const status = Active === v[renderValue]
                return (
                    <div
                        key={v[renderValue]}
                        className={`cellItem ${status ? 'active' : ''}`}
                        style={status ? cellAct : cellDef}
                        onClick={() => onClick(v[renderValue])}
                    >
                        <div style={status ? textAct : textDef}>{v[renderLabel]}</div>
                    </div>
                )
            })}
        </div>
    )
}

const PrefabricatedDiyProgress = ({ tempId, UrlData, data, LayoutEvent }) => {
    const {
        align_items, calign_content, justify_content, flex_direction, flex_wrap, padding, margin, color, deg,
        progress_widthUnit, progress_width, progress_heightUnit, progress_height, back_color, back_deg,
        progress_color, progress_deg, back_radius, progress_radius, progress_isAfter, progress_isBefore, progress_icon,
        after_position, after_topUnit, after_top, after_btmUnit, after_btm, after_lefUnit, after_lef, after_rigUnit, after_rig,
        after_widthUnit, after_width, after_heightUnit, after_height, after_color, after_deg,
        before_position, before_topUnit, before_top, before_btmUnit, before_btm, before_lefUnit, before_lef, before_rigUnit, before_rig,
        before_widthUnit, before_width, before_heightUnit, before_height, before_color, before_deg,
        icon_url, icon_color, icon_size, icon_top, PrefabricatedDiyProgress_list,
        params_align_items, params_calign_content, params_justify_content, params_flex_direction, params_flex_wrap,
        params_padding, params_margin, params_color, params_deg, params_widthUnit, params_width, params_heightUnit, params_height
    } = data

    const layoutStyle = {
        '--align_items': align_items,
        '--align_content': calign_content,
        '--justify_content': justify_content,
        '--flex_direction': flex_direction,
        '--flex_wrap': flex_wrap,
        padding: SpacingCallBack(padding),
        margin: SpacingCallBack(margin),
        background: ColorCallBack(color, deg),
    }

    const backStyle = {
        ...UnitCallBackStruct(progress_widthUnit, progress_width, 'width'),
        ...UnitCallBackStruct(progress_heightUnit, progress_height, 'height'),
        background: ColorCallBack(back_color, back_deg),
        borderRadius: SpacingCallBack(back_radius),
    }

    const afterMap = {
        'top-left': { top: after_top, right: null, bottom: null, left: after_lef, topUnit: after_topUnit, leftUnit: after_lefUnit },
        'top-right': { top: after_top, right: after_rig, bottom: null, left: null, topUnit: after_topUnit, rightUnit: after_rigUnit },
        'bottom-left': { top: null, right: null, bottom: after_btm, left: after_lef, bottomUnit: after_btmUnit, leftUnit: after_lefUnit },
        'bottom-right': { top: null, right: after_rig, bottom: after_btm, left: null, bottomUnit: after_btmUnit, rightUnit: after_rigUnit },
    };

    const beforeMap = {
        'top-left': { top: before_top, right: null, bottom: null, left: before_lef, topUnit: before_topUnit, leftUnit: before_lefUnit },
        'top-right': { top: before_top, right: before_rig, bottom: null, left: null, topUnit: before_topUnit, rightUnit: before_rigUnit },
        'bottom-left': { top: null, right: null, bottom: before_btm, left: before_lef, bottomUnit: before_btmUnit, leftUnit: before_lefUnit },
        'bottom-right': { top: null, right: before_rig, bottom: before_btm, left: null, bottomUnit: before_btmUnit, rightUnit: before_rigUnit },
    };

    const afterStyle = {
        ...SetPositionParams(afterMap, after_position),
        background: ColorCallBack(after_color, after_deg),
        ...UnitCallBackStruct(after_widthUnit, after_width, 'width'),
        ...UnitCallBackStruct(after_heightUnit, after_height, 'height'),
    }

    const beforeStyle = {
        ...SetPositionParams(beforeMap, before_position),
        background: ColorCallBack(before_color, before_deg),
        ...UnitCallBackStruct(before_widthUnit, before_width, 'width'),
        ...UnitCallBackStruct(before_heightUnit, before_height, 'height'),
    }

    const iconStyle = {
        left: '62%',
        color: icon_color,
        fontSize: icon_size,
        top: icon_top,
        height: icon_size,
    }

    const progressStyle = {
        width: '62%',
        background: ColorCallBack(progress_color, progress_deg),
        borderRadius: SpacingCallBack(progress_radius),
    }

    const paramsStyle = {
        ...UnitCallBackStruct(params_widthUnit, params_width, 'width'),
        ...UnitCallBackStruct(params_heightUnit, params_height, 'height'),
        padding: SpacingCallBack(params_padding),
        margin: SpacingCallBack(params_margin),
        background: ColorCallBack(params_color, params_deg),
        '--params_align_items': params_align_items,
        '--params_align_content': params_calign_content,
        '--params_justify_content': params_justify_content,
        '--params_flex_direction': params_flex_direction,
        '--params_flex_wrap': params_flex_wrap,
    }

    return (
        <div className='PrefabricatedDiyProgress' style={layoutStyle}>
            <div className='progressBack' style={backStyle}>
                <div className='progressBar' style={progressStyle} />
                {progress_icon && <span className='progressIcon' style={iconStyle}>{ICONMapping[icon_url]}</span>}
                {progress_isAfter && <span className='progressAfter' style={afterStyle} />}
                {progress_isBefore && <span className='progressBefore' style={beforeStyle} />}
            </div>
            <div className='params' style={paramsStyle}>
                {PrefabricatedDiyProgress_list.map((v, i) => {
                    const { render, render_text, render_field, color, deg, size, family, weight, style, filed, filed_data, filed_color, percent, percentData } = v
                    const itemStyle = {
                        color: ColorCallBack(color, deg),
                        fontSize: size,
                        fontWeight: weight,
                        fontFamily: family,
                        style: style,
                        filter: SetFilderParams(filed, filed_data, filed_color)
                    }
                    const textRend = render === 'A01' ? render_text : render_field
                    const percentRend = percent ? Number(textRend) * (percentData === 'A01' ? 1 : 100) + '%' : textRend
                    return (
                        <div className='params_item' key={i}>
                            <div style={itemStyle}>{percentRend}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const textData = [
    { key: 1, data: '1', list: [{ key: 11, data: '1' }, { key: 2, data: '2' }, { key: 3, data: '3' }] },
    { key: 2, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 3, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 4, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 5, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 6, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 7, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 8, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 9, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 10, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 11, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 12, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 13, data: '1', list: [{ key: 11, data: '11' }] },
    { key: 14, data: '1', },
    { key: 15, data: '1', },
    { key: 16, data: '1', },
]
// 树形文件夹
const PrefabricatedDiyFolder = ({ tempId, UrlData, data, LayoutEvent }) => {

    const { back_color, back_deg, back_padding, back_column, back_gutter, isOpenClose, isOpenDefaultl,
        isBtmBorder, btm_size, btm_type, btm_color,
        isPrefix, prefix_icon, prefix_color, prefix_size, prefix_padding,
        isSuffix, suffix_type, suffix_diy, suffix_field, suffix_icon, suffix_icon_color, suffix_icon_size,
        suffix_text_color, suffix_text_deg, suffix_text_size, suffix_text_family, suffix_text_weight, suffix_text_style,
        suffix_text_filed, suffix_text_filed_data, suffix_text_filed_color,
        title_type, title_field, title_color, title_deg, title_size, title_family, title_weight, title_style,
        title_filed, title_filed_data, title_filed_color, title_index,
        list_color, list_deg, list_padding, list_margin, item_hidden, item_row,
        item_color, item_deg, item_padding, item_margin, item_border, item_border_size, item_border_type, item_border_color,
        item_title_type, item_title_field, item_title_color, item_title_deg, item_title_size, item_title_family, item_title_weight,
        item_title_style, item_title_filed, item_title_filed_data, item_title_filed_color,
        extra_title_type, extra_title_field, extra_title_color, extra_title_deg, extra_title_size, extra_title_family, extra_title_weight,
        extra_title_style, extra_title_filed, extra_title_filed_data, extra_title_filed_color,
    } = data


    const [Open, setOpen] = useState([])
    const [Data, setData] = useState([])

    const backStyle = {
        background: ColorCallBack(back_color, back_deg),
        padding: SpacingCallBack(back_padding),
    }

    const prefixStyle = {
        color: prefix_color,
        fontSize: prefix_size,
        padding: SpacingCallBack(prefix_padding),
    }

    const suffixIconStyle = {
        color: suffix_icon_color,
        fontSize: suffix_icon_size,
    }

    const suffixTextStyle = {
        '--suffix_text_color': ColorCallBack(suffix_text_color, suffix_text_deg),
        fontSize: suffix_text_size,
        fontWeight: suffix_text_weight,
        fontFamily: suffix_text_family,
        fontStyle: suffix_text_style,
        filter: SetFilderParams(suffix_text_filed, suffix_text_filed_data, suffix_text_filed_color),
    }

    const titleStyle = {
        '--title_color': ColorCallBack(title_color, title_deg),
        fontSize: title_size,
        fontWeight: title_weight,
        fontFamily: title_family,
        fontStyle: title_style,
        filter: SetFilderParams(title_filed, title_filed_data, title_filed_color),
    }

    const listStyle = {
        width: SpacingSizeCallBack(list_margin, 100),
        background: ColorCallBack(list_color, list_deg),
        padding: SpacingCallBack(list_padding),
        margin: SpacingCallBack(list_margin),
    }

    const itemStyle = {
        width: SpacingSizeCallBack(item_margin, 100),
        background: ColorCallBack(item_color, item_deg),
        padding: SpacingCallBack(item_padding),
        margin: SpacingCallBack(item_margin),
        borderBottom: SetBorderParams(item_border, item_border_size, item_border_type, item_border_color)
    }

    const itemTitleStyle = {
        '--item_title_color': ColorCallBack(item_title_color, item_title_deg),
        '--item_title_row': item_hidden ? item_row : 'none',
        fontSize: item_title_size,
        fontWeight: item_title_weight,
        fontFamily: item_title_family,
        fontStyle: item_title_style,
        filter: SetFilderParams(item_title_filed, item_title_filed_data, item_title_filed_color),
    }


    const itemExtraStyle = {
        '--item_title_extra': ColorCallBack(extra_title_color, extra_title_deg),
        fontSize: extra_title_size,
        fontWeight: extra_title_weight,
        fontFamily: extra_title_family,
        fontStyle: extra_title_style,
        filter: SetFilderParams(extra_title_filed, extra_title_filed_data, extra_title_filed_color),
    }

    const onOpen = (e) => {
        if (!isOpenClose) return false
        setOpen(Open.includes(e) ? Open.filter(item => item !== e) : [...Open, e])
    }


    useEffect(() => {
        if (data.isOpenDefault) setOpen(textData.map(item => item.key))
        else setOpen([])
        const backData = DiyDataReturn(data, UrlData, textData, 'api_diyObj')
        const newData = mapTreeKey(backData, title_index)
        setData(newData)
    }, [data, UrlData])

    return (
        <DevScrollView>
            <div className='PrefabricatedDiyFolder' style={backStyle}>
                <Masonry
                    columns={back_column}
                    gutter={back_gutter}
                    items={Data}
                    fresh={false}
                    itemRender={(e) => {
                        const { key, data, list } = e
                        const boxStyle = {
                            cursor: isOpenClose ? 'pointer' : 'default',
                            borderBottom: SetBorderParams(isBtmBorder, btm_size, btm_type, btm_color)
                        }
                        return (
                            <div className='PrefabricatedDiyFolder_box' style={boxStyle}>
                                <div className='box_title' onClick={() => onOpen(key)}>
                                    {isPrefix && <div className='box_prefix' style={prefixStyle}>{ICONMapping[prefix_icon]}</div>}
                                    <div className='box_text' style={titleStyle}>
                                        {title_type === 'A01' ? title_field : e[title_field]}
                                    </div>
                                    {isSuffix && (suffix_type === 'A01' || suffix_type === "A02") &&
                                        <div className='box_suffix_text' style={suffixTextStyle}>{suffix_diy || suffix_field}</div>
                                    }
                                    {isSuffix && suffix_type === 'A03' &&
                                        <div
                                            className='box_suffix_icon'
                                            style={{ ...suffixIconStyle, transform: `rotate(${Open.includes(key) ? 180 : 0}deg` }}
                                        >
                                            {ICONMapping[suffix_icon]}
                                        </div>
                                    }
                                </div>
                                {list && Open.includes(key) &&
                                    <div className='box_list' style={listStyle}>
                                        {list.map(v => {
                                            return (
                                                <div className='box_list_item' key={v.key} style={itemStyle}>
                                                    <div className='box_list_item_text' style={itemTitleStyle}>
                                                        {/* {v.data} */}
                                                        {item_title_field}
                                                    </div>
                                                    <div className='box_list_item_extra' style={itemExtraStyle}>
                                                        {/* {v.data} */}
                                                        {extra_title_field}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </div>
                        )
                    }}
                />
            </div>
        </DevScrollView>
    )
}

// 天气组件
const PrefabricatedDiyWeather = ({ tempId, UrlData, data, LayoutEvent }) => {
    const openModel = useTemplateModel()

    const [Data, setData] = useState()
    const [IconList, setIconList] = useState({})

    const { align_items, align_content, justify_content, flex_direction, flex_wrap,
        back_color, back_deg, back_padding, back_margin, back_radius, isIcon,
        icon_width, icon_height, icon_margin, icon_field, weather_list,
        text_align_items, text_align_content, text_justify_content, text_flex_direction, text_flex_wrap, isDate, weatherType,
        data_align_items, data_align_content, data_justify_content, data_flex_direction, data_flex_wrap,
        date_list, date_widthUnit, date_width, date_heightUnit, date_height, date_padding, date_margin,
        wea_widthUnit, wea_width, wea_heightUnit, wea_height, wea_padding, wea_margin,
        max_field, max_padding, max_color, max_deg, max_size, max_family, max_weight, max_style, max_filed, max_filed_data, max_filed_color,
        min_field, war_field, war_color, war_deg, war_size, war_family, war_weight, war_style, war_filed, war_filed_data, war_filed_color,
        click_status,
    } = data

    const boxStyle = {
        cursor: click_status ? 'pointer' : 'auto',
        width: SpacingSizeCallBack(back_margin, 100),
        height: SpacingSizeCallBack(back_margin, 100, true),
        background: ColorCallBack(back_color, back_deg),
        padding: SpacingCallBack(back_padding),
        margin: SpacingCallBack(back_margin),
        borderRadius: SpacingCallBack(back_radius),
        '--align_items': align_items,
        '--calign_content': align_content,
        '--justify_content': justify_content,
        '--flex_direction': flex_direction,
        '--flex_wrap': flex_wrap,
    }

    const imgStyle = {
        width: icon_width,
        height: icon_height,
        margin: SpacingCallBack(icon_margin),
    }

    const textStyle = {
        '--text_align_items': text_align_items,
        '--text_align_content': text_align_content,
        '--text_justify_content': text_justify_content,
        '--text_flex_direction': text_flex_direction,
        '--text_flex_wrap': text_flex_wrap,
    }

    const dateStyle = {
        '--data_align_items': data_align_items,
        '--data_align_content': data_align_content,
        '--data_justify_content': data_justify_content,
        '--data_flex_direction': data_flex_direction,
        '--data_flex_wrap': data_flex_wrap,
        ...UnitCallBackStruct(date_widthUnit, date_width, 'width'),
        ...UnitCallBackStruct(date_heightUnit, date_height, 'height'),
        padding: SpacingCallBack(date_padding),
        margin: SpacingCallBack(date_margin),
    }

    useEffect(() => {
        if (isIcon) {
            const list = Object.fromEntries(
                weather_list.flatMap(v => {
                    const { weather_map, weather_url } = v
                    if (typeof weather_map !== 'string') return []
                    return weather_map.split(',').map(k => [k.trim(), weather_url])
                })
            )
            setIconList(list)
        }
    }, [isIcon, weather_list])

    const WeatherTypeA01 = () => {
        if (weatherType !== 'A01') return null

        const weaStyle = {
            ...UnitCallBackStruct(wea_widthUnit, wea_width, 'width'),
            ...UnitCallBackStruct(wea_heightUnit, wea_height, 'height'),
            padding: SpacingCallBack(wea_padding),
            margin: SpacingCallBack(wea_margin),
        }

        const maxStyle = {
            padding: SpacingCallBack(max_padding),
            '--color': ColorCallBack(max_color, max_deg),
            fontSize: max_size,
            fontFamily: max_family,
            fontWeight: max_weight,
            fontStyle: max_style,
            filter: SetFilderParams(max_filed, max_filed_data, max_filed_color)
        }

        const minStyle = {
            '--color': ColorCallBack(war_color, war_deg),
            fontSize: war_size,
            fontFamily: war_family,
            fontWeight: war_weight,
            fontStyle: war_style,
            filter: SetFilderParams(war_filed, war_filed_data, war_filed_color)
        }

        return (
            <div className='weatherTypeA01' style={weaStyle}>
                {Data?.[max_field] && <div className='max' style={maxStyle}>{Data?.[max_field]}</div>}
                <div className='item'>
                    {Data?.[min_field] && <div className='min' style={minStyle}>/{Data?.[min_field]} ℃</div>}
                    {Data?.[war_field] && <div className='war' style={minStyle}>{Data?.[war_field]}</div>}
                </div>
            </div>
        )
    }

    useEffect(() => {
        const backData = DiyDataReturn(data, UrlData, temporaryDataA01, 'api_diyObj')
        setData(backData)
    }, [UrlData, data])

    return (
        <div className='PrefabricatedDiyWeather' style={boxStyle} onClick={(e) => click_status && TemplateClickFn(e, data, Data, LayoutEvent, openModel)}>
            <div className='text' style={textStyle}>
                {isDate &&
                    <div className='date' style={dateStyle}>
                        {date_list.map((v, i) => {
                            const { date_field, size, color, deg, family, weight, style, fileiled, fileiled_data, fileiled_color } = v
                            const dateTextStyle = {
                                '--color': ColorCallBack(color, deg),
                                fontSize: size,
                                fontFamily: family,
                                fontWeight: weight,
                                fontStyle: style,
                                filter: SetFilderParams(fileiled, fileiled_data, fileiled_color)
                            }
                            return (
                                <div key={i} className='dateText' style={dateTextStyle}>{Data?.[date_field]}</div>
                            )
                        })}
                    </div>
                }
                {weatherType === 'A01' && <WeatherTypeA01 />}
            </div>
            {isIcon && IconList?.[Data?.[icon_field]] &&
                <img style={imgStyle} src={IconList?.[Data?.[icon_field]]} alt={icon_field} />
            }
        </div>
    )
}


const PrefabricatedDiyNongKaiOrgData = [{}, {}, {}]

// 农开带进度组织机构
const PrefabricatedDiyNongKaiOrg = ({ tempId, UrlData, data, LayoutEvent }) => {

    const [Data, setData] = useState()
    const [activeIndex, setActiveIndex] = useState(0)

    const { back_color, back_deg, back_padding, back_margin, item_color, item_deg, item_padding, item_margin,
        active_color, active_deg, active_padding, active_margin,
        icon_width, icon_height, icon_padding, text_size, text_color, text_deg, text_family, text_weight, text_style,
        text_filed, text_filed_data, text_filed_color, text_list
    } = data

    const backStyle = {
        background: ColorCallBack(back_color, back_deg),
        padding: SpacingCallBack(back_padding),
        margin: SpacingCallBack(back_margin),
    }

    const itemStyle = {
        width: SpacingSizeCallBack(item_margin, 100),
        background: ColorCallBack(item_color, item_deg),
        padding: SpacingCallBack(item_padding),
        margin: SpacingCallBack(item_margin),
    }

    const activeStyle = {
        width: SpacingSizeCallBack(active_margin, 100),
        background: ColorCallBack(active_color, active_deg),
        padding: SpacingCallBack(active_padding),
        margin: SpacingCallBack(active_margin),
    }

    const iconStyle = {
        width: icon_width,
        height: icon_height,
        margin: SpacingCallBack(icon_padding),
    }

    const textStyle = {
        '--color': ColorCallBack(text_color, text_deg),
        fontSize: text_size,
        fontFamily: text_family,
        fontWeight: text_weight,
        fontStyle: text_style,
        filter: SetFilderParams(text_filed, text_filed_data, text_filed_color)
    }

    useEffect(() => {
        const backData = DiyDataReturn(data, UrlData, PrefabricatedDiyNongKaiOrgData, 'api_diyObj')
        if (backData.length !== 0) {
            const [{ projectUuid }] = backData
            setActiveIndex(projectUuid)
        }
        console.log(backData)
        setData(backData)
    }, [data, UrlData])

    return (
        <div className='PrefabricatedDiyNongKaiOrg' style={backStyle}>
            {Data && Data.map((v, i) => {
                return (
                    <div className='itemData' key={i} style={activeIndex === v.projectUuid ? activeStyle : itemStyle}>
                        {text_list.map((k, s) => {
                            const { icon_url, field, type, prefix, suffix, back_color, back_deg, pro_color, pro_deg } = k

                            const Item = () => {
                                if (type === 'text') {
                                    return (
                                        <div className='Text' style={textStyle}>
                                            {prefix}{v[field]}{suffix}
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className='Progress' >
                                            <div className='icon' style={{ background: ColorCallBack(back_color, back_deg) }}>
                                                <div style={{ width: `${v[field]}%`, background: ColorCallBack(pro_color, pro_deg) }} />
                                            </div>
                                            <div className='text' style={textStyle}>{v[field]}%</div>
                                        </div>
                                    )
                                }
                            }

                            return (
                                <div key={s} className='itemList'>
                                    <img src={icon_url} style={iconStyle} alt="" />
                                    <Item />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}


export const PrefabricatedDiyTemplate = {
    PrefabricatedDiyText,
    PrefabricatedDiyOrgA01,
    PrefabricatedDiyProgress,
    PrefabricatedDiyFolder,
    PrefabricatedDiyWeather,
    PrefabricatedDiyNongKaiOrg
}