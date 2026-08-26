import './Prefabricated.scss'
import { useEffect, useState } from 'react'
import { ICONMapping } from '../Config/IconMapping'
import {
    ColorCallBack,
    SpacingCallBack,
    SetBorderParams,
    SetFilderParams,
    getRandomInt,
    DiyDataReturn,
    getNestedValue,
    TemplateClickFn
} from '../Utils'
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

const PrefabricatedList = ({ tempId, UrlData, data, LayoutEvent }) => {
    const openModel = useTemplateModel()
    const [Data, setData] = useState()
    const [ItemList, setItemList] = useState([])

    const { api_source, api_dataType, item_back, item_icon, item_unit, data_obj_config, data_arr_config, data_diy_config, api_diyObj,
        whole_align_content, whole_align_items, whole_flex_direction, whole_flex_wrap, whole_justify_content, whole_margin, whole_padding,
        item_align_content, item_align_items, item_flex_direction, item_flex_wrap, item_justify_content, item_margin, item_padding,
        item_widthUnit, item_heightUnit, item_width, item_height,
        icon_filed, icon_filed_color, icon_filed_data, icon_margin, icon_size, icon_color,
        image_width, image_height, image_margin, image_filed, image_filed_data, image_filed_color,
        unit_color, unit_deg, unit_family, unit_filed, unit_filed_color, unit_filed_data, unit_margin, unit_size, unit_style, unit_weight,
        text_align_content, text_align_items, text_flex_direction, text_flex_wrap, text_justify_content,
        text_title_color, text_title_deg, text_title_family, text_title_margin, text_title_size, text_title_style, text_title_weight,
        text_title_filed, text_title_filed_color, text_title_filed_data,
        text_value_color, text_value_deg, text_value_family, text_value_margin, text_value_size, text_value_style, text_value_weight,
        text_value_filed, text_value_filed_color, text_value_filed_data,
        back_image, back_image_url, back_image_padding, back_image_margin, back_image_width, back_image_height,
        back_color, back_deg, back_radius, back_border, back_border_size, back_border_type, back_border_color,
        back_position, back_topUnit, back_top, back_btmUnit, back_btm, back_lefUnit, back_lef, back_rigUnit, back_rig,
        back_widthUnit, back_width, back_heightUnit, back_height,
        back_backImage, back_backImage_url,
        http_urlName, http_urlLevel, http_urlMapping,

    } = data


    const wholeStyle = {
        padding: SpacingCallBack(whole_padding),
        margin: SpacingCallBack(whole_margin),
        '--alignContent': whole_align_content,
        '--alignItems': whole_align_items,
        '--flexDirection': whole_flex_direction,
        '--flexWrap': whole_flex_wrap,
        '--justifyContent': whole_justify_content,
    }

    const itemStyle = {
        padding: SpacingCallBack(item_padding),
        margin: SpacingCallBack(item_margin),
        '--alignContent': item_align_content,
        '--alignItems': item_align_items,
        '--flexDirection': item_flex_direction,
        '--flexWrap': item_flex_wrap,
        '--justifyContent': item_justify_content,
    }

    if (item_widthUnit === 'flex') itemStyle.flex = item_width
    if (item_widthUnit === 'px') itemStyle.width = item_width
    if (item_widthUnit === 'pct') itemStyle.width = item_width + '%'
    if (item_heightUnit === 'flex') itemStyle.flex = item_height
    if (item_heightUnit === 'px') itemStyle.height = item_height
    if (item_heightUnit === 'pct') itemStyle.height = item_height + '%'

    const imgStyle = {
        width: image_width,
        height: image_height,
        margin: SpacingCallBack(image_margin),
        filter: SetFilderParams(image_filed, image_filed_data, image_filed_color),
    }

    const backImageStyle = {
        width: back_image_width ? back_image_width : '100%',
        height: back_image_height ? back_image_height : '100%',
        margin: SpacingCallBack(back_image_margin),
        padding: SpacingCallBack(back_image_padding),
    }

    const textStyle = {
        '--alignContent': text_align_content,
        '--alignItems': text_align_items,
        '--flexDirection': text_flex_direction,
        '--flexWrap': text_flex_wrap,
        '--justifyContent': text_justify_content,
    }

    useEffect(() => {
        const backData = DiyDataReturn(data, UrlData, temporaryDataA01, 'api_diyObj')
        if (api_source === 'A02') {
            setItemList(api_dataType === 'A02' ? data_obj_config : data_arr_config)
            if (api_dataType === 'A02') setData(backData)
            if (api_dataType === 'A03' && backData) {
                const dataMap = data_arr_config.reduce((acc, item) => {
                    const { data_value, data_field, data_fieldName, data_number } = item
                    acc[data_value] = backData.find(v => v[data_field] === data_fieldName)[data_number]
                    return acc
                }, {});
                setData(dataMap)
            }
        } else if (api_source === 'A03') {
            setItemList(data_diy_config)
            setData(backData)
        } else {
            setItemList(data_diy_config)
        }
    }, [UrlData, data])
    return (
        <div className='PrefabricatedList' style={wholeStyle}>
            {ItemList?.map((v, i) => {
                const { alone_back, alone_title, alone_number, alone_unit, alone_icon,
                    data_back, data_backDeg,
                    data_titleColor, data_titleDeg,
                    data_text, data_textDeg,
                    data_unitColor, data_unitDeg,
                    data_icon_color, data_icon_size,
                    click_status,
                    alone_back_image, alone_back_image_url,
                } = v


                const backStyle = {
                    background: alone_back ? ColorCallBack(data_back, data_backDeg) : ColorCallBack(back_color, back_deg),
                    borderRadius: SpacingCallBack(back_radius),
                    border: SetBorderParams(back_border, back_border_size, back_border_type, back_border_color),
                    width: 0,
                    height: 0
                }
                const setDimension = (styleProp, value, unit) => {
                    if (unit === 'flex' || unit === 'px') backStyle[styleProp] = value
                    if (unit === 'pct') backStyle[styleProp] = `${value}%`
                };
                setDimension('width', back_width, back_widthUnit)
                setDimension('height', back_height, back_heightUnit)

                const positionMap = {
                    'top-left': { top: back_top, right: null, bottom: null, left: back_lef, topUnit: back_topUnit, leftUnit: back_lefUnit },
                    'top-right': { top: back_top, right: back_rig, bottom: null, left: null, topUnit: back_topUnit, rightUnit: back_rigUnit },
                    'bottom-left': { top: null, right: null, bottom: back_btm, left: back_lef, bottomUnit: back_btmUnit, leftUnit: back_lefUnit },
                    'bottom-right': { top: null, right: back_rig, bottom: back_btm, left: null, bottomUnit: back_btmUnit, rightUnit: back_rigUnit },
                };
                const posConfig = positionMap[back_position];
                if (posConfig) {
                    Object.entries(posConfig).forEach(([key, value]) => {
                        if (value !== null) {
                            if (key.endsWith('Unit')) return
                            const unitKey = key + 'Unit'
                            const unit = posConfig[unitKey]
                            backStyle[key] = unit === 'pct' ? `${value}%` : value
                        }
                    })
                }

                const titleStyle = {
                    margin: SpacingCallBack(text_title_margin),
                    '--titleColor': alone_title ? ColorCallBack(data_titleColor, data_titleDeg) : ColorCallBack(text_title_color, text_title_deg),
                    fontSize: text_title_size,
                    fontFamily: text_title_family,
                    fontWeight: text_title_weight,
                    fontStyle: text_title_style,
                    lineHeight: text_title_size + 'px',
                    filter: SetFilderParams(text_title_filed, text_title_filed_data, text_title_filed_color),
                }

                const valueStyle = {
                    margin: SpacingCallBack(text_value_margin),
                    '--titleColor': alone_number ? ColorCallBack(data_text, data_textDeg) : ColorCallBack(text_value_color, text_value_deg),
                    fontSize: text_value_size,
                    fontFamily: text_value_family,
                    fontWeight: text_value_weight,
                    fontStyle: text_value_style,
                    height: text_value_size,
                    lineHeight: text_value_size + 'px',
                    filter: SetFilderParams(text_value_filed, text_value_filed_data, text_value_filed_color),
                }

                const unitStyle = {
                    margin: SpacingCallBack(unit_margin),
                    '--titleColor': alone_unit ? ColorCallBack(data_unitColor, data_unitDeg) : ColorCallBack(unit_color, unit_deg),
                    fontSize: unit_size,
                    fontFamily: unit_family,
                    fontWeight: unit_weight,
                    fontStyle: unit_style,
                    height: unit_size,
                    lineHeight: unit_size + 'px',
                    filter: SetFilderParams(unit_filed, unit_filed_data, unit_filed_color),
                }

                const iconStyle = {
                    width: icon_size,
                    height: icon_size,
                    fontSize: alone_icon ? data_icon_size : icon_size,
                    color: alone_icon ? data_icon_color : icon_color,
                    margin: SpacingCallBack(icon_margin),
                    filter: SetFilderParams(icon_filed, icon_filed_color, icon_filed_data),
                }

                const realText = v.data_title.replace(/\\n/g, '\n')

                return (
                    <div
                        key={i}
                        className='Item'
                        style={{ ...itemStyle, cursor: click_status ? 'pointer' : 'auto' }}
                        onClick={(e) => click_status && TemplateClickFn(e, v, Data, LayoutEvent, openModel)}
                    >
                        {item_back && (
                            <div className='itemBack' style={backStyle}>
                                {back_backImage && <img src={alone_back_image ? alone_back_image_url : back_backImage_url} alt="" />}
                            </div>
                        )}
                        {item_icon === 'img' && <img className='itemImg' style={imgStyle} src={v.data_img} alt={v.data_img} />}
                        {item_icon === 'icon' && <div className='itemIcon' style={iconStyle}>{ICONMapping[v.data_icon || 'farFile']}</div>}
                        <div className='itemText' style={textStyle}>
                            <div className='title' style={titleStyle}>{realText}</div>
                            <div className='value'>
                                <div className='text' style={valueStyle}>{Data?.[v.data_value] || 0}</div>
                                {item_unit && <div className='unit' style={unitStyle}>{v.data_unit}</div>}
                            </div>
                        </div>
                    </div>
                )
            })}
            {back_image && <img className='BackImage' style={backImageStyle} src={back_image_url} alt='背景图片' />}
        </div>
    );
};

export const PrefabricatedListTemplate = {
    PrefabricatedList
}