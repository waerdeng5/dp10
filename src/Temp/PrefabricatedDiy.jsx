import './Prefabricated.scss'
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
    SetPositionParams
} from '../Utils'

import { ICONMapping } from '../Config/IconMapping'
import { useTemplateModel } from '../Config/useHooks'

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


export const PrefabricatedDiyTemplate = {
    PrefabricatedDiyText,
    PrefabricatedDiyOrgA01,
    PrefabricatedDiyProgress
}