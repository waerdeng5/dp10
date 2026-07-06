import './Prefabricated.scss'
import { useEffect, useState, Fragment } from 'react'
import { ColorCallBack, SpacingCallBack, SetFilderParams, getRandomInt, DiyDataReturn, TemplateClickFn, getNestedValue } from '../Utils'

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



export const PrefabricatedDiyTemplate = {
    PrefabricatedDiyText,
    PrefabricatedDiyOrgA01,
}