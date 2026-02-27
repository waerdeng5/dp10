import './Prefabricated.scss'
import { useEffect, useState } from 'react'
import { ICONMapping } from '../Config/IconMapping'
import { ColorCallBack, SpacingCallBack, SetBorderParams, SpacingSizeCallBack, SetFilderParams, isEmptyObject, getNestedValue } from '../Utils'

const PrefabricatedList = ({ tempId, UrlData, data, LayoutEvent }) => {
    const [Data, setData] = useState()
    const [ItemList, setItemList] = useState([])

    const { api_urlName, api_urlLevel, api_urlMapping,
        item_back, item_icon, item_unit, data_type, data_obj_config, data_arr_config,
        whole_align_content, whole_align_items, whole_flex_direction, whole_flex_wrap, whole_justify_content, whole_margin, whole_padding,
        item_align_content, item_align_items, item_flex_direction, item_flex_wrap, item_height, item_justify_content, item_margin, item_padding, item_width,
        back_color, back_deg, back_margin, back_radius, back_border, back_border_size, back_border_type, back_border_color,
        icon_filed, icon_filed_color, icon_filed_data, icon_margin, icon_size, icon_color,

        image_width, image_height, image_margin, image_filed, image_filed_data, image_filed_color,

        unit_color, unit_deg, unit_family, unit_filed, unit_filed_color, unit_filed_data, unit_margin, unit_size, unit_style, unit_weight,
        text_align_content, text_align_items, text_flex_direction, text_flex_wrap, text_justify_content,
        text_title_color, text_title_deg, text_title_family, text_title_margin, text_title_size, text_title_style, text_title_weight,
        text_title_filed, text_title_filed_color, text_title_filed_data,
        text_value_color, text_value_deg, text_value_family, text_value_margin, text_value_size, text_value_style, text_value_weight,
        text_value_filed, text_value_filed_color, text_value_filed_data
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
        width: item_width + '%',
        height: item_height,
        padding: SpacingCallBack(item_padding),
        margin: SpacingCallBack(item_margin),
        '--alignContent': item_align_content,
        '--alignItems': item_align_items,
        '--flexDirection': item_flex_direction,
        '--flexWrap': item_flex_wrap,
        '--justifyContent': item_justify_content,
    }

    const imgStyle = {
        width: image_width,
        height: image_height,
        margin: SpacingCallBack(image_margin),
        filter: SetFilderParams(image_filed, image_filed_data, image_filed_color),

    }

    const textStyle = {
        '--alignContent': text_align_content,
        '--alignItems': text_align_items,
        '--flexDirection': text_flex_direction,
        '--flexWrap': text_flex_wrap,
        '--justifyContent': text_justify_content,
    }



    useEffect(() => {
        if (!isEmptyObject(UrlData)) {
            const data = api_urlLevel ? getNestedValue(api_urlMapping, UrlData[api_urlName]) : UrlData[api_urlName]
            if (data_type === 'A02') {
                setItemList(data_obj_config)
                setData(data)
            }
            if (data_type === 'A03') {
                setItemList(data_arr_config)
                const dataMap = data_arr_config.reduce((acc, item) => {
                    const { data_value, data_field, data_fieldName, data_number } = item
                    acc[data_value] = data.find(v => v[data_field] === data_fieldName)[data_number]
                    return acc
                }, {});
                setData(dataMap)
            }
        }
    }, [UrlData, api_urlName, api_urlMapping, api_urlLevel, data_type])

    return (
        <div className='PrefabricatedList' style={wholeStyle}>
            {ItemList.map((v, i) => {
                const { data_back, data_backDeg, data_titleColor, data_titleDeg, data_text, data_textDeg, data_unitColor, data_unitDeg, data_icon_color } = v
                const backStyle = {
                    width: SpacingSizeCallBack(back_margin, 100),
                    height: SpacingSizeCallBack(back_margin, 100, true),
                    background: data_back ? ColorCallBack(data_back, data_backDeg) : ColorCallBack(back_color, back_deg),
                    margin: SpacingCallBack(back_margin),
                    borderRadius: SpacingCallBack(back_radius),
                    border: SetBorderParams(back_border, back_border_size, back_border_type, back_border_color),
                }

                const titleStyle = {
                    margin: SpacingCallBack(text_title_margin),
                    '--titleColor': data_titleColor ? ColorCallBack(data_titleColor, data_titleDeg) : ColorCallBack(text_title_color, text_title_deg),
                    fontSize: text_title_size,
                    fontFamily: text_title_family,
                    fontWeight: text_title_weight,
                    fontStyle: text_title_style,
                    height: text_title_size,
                    lineHeight: text_title_size + 'px',
                    filter: SetFilderParams(text_title_filed, text_title_filed_data, text_title_filed_color),
                }

                const valueStyle = {
                    margin: SpacingCallBack(text_value_margin),
                    '--titleColor': data_text ? ColorCallBack(data_text, data_textDeg) : ColorCallBack(text_value_color, text_value_deg),
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
                    '--titleColor': data_unitColor ? ColorCallBack(data_unitColor, data_unitDeg) : ColorCallBack(unit_color, unit_deg),
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
                    fontSize: icon_size,
                    color: data_icon_color || icon_color,
                    margin: SpacingCallBack(icon_margin),
                    filter: SetFilderParams(icon_filed, icon_filed_color, icon_filed_data),
                }

                return (
                    <div key={i} className='Item' style={itemStyle}>
                        {item_back && <div className='itemBack' style={backStyle} />}
                        {item_icon === 'img' && <img className='itemImg' style={imgStyle} src={v.data_img} alt={v.data_img} />}
                        {item_icon === 'icon' && <div className='itemIcon' style={iconStyle}>{ICONMapping[v.data_icon || 'farFile']}</div>}
                        <div className='itemText' style={textStyle}>
                            <div className='title' style={titleStyle}>{v.data_title}</div>
                            <div className='value'>
                                <div className='text' style={valueStyle}>{Data?.[v.data_value] || 0}</div>
                                {item_unit && <div className='unit' style={unitStyle}>{v.data_unit}</div>}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export const PrefabricatedListTemplate = {
    PrefabricatedList
}