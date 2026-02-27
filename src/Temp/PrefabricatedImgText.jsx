import './Prefabricated.scss'
import { useEffect, useState } from 'react'
import { ColorCallBack, SpacingCallBack, SetBorderParams, SetFilderParams, isEmptyObject, getNestedValue } from '../Utils'

const PrefabricatedImgText = ({ tempId, UrlData, data, LayoutEvent }) => {
    const [Data, setData] = useState()

    const { api_urlName, api_urlLevel, api_urlMapping,
        render_data, render_img, render_title,
        img_fit, img_padding, img_url,
        title_position, title_top, title_btm, title_mapping, title_padding, title_text,
        title_align_content, title_align_items, title_flex_direction, title_flex_wrap, title_justify_content,
        title_color, title_deg, title_family, title_size, title_style, title_weight,
        title_filed, title_filed_color, title_filed_data,

        data_position, data_top, data_btm, data_mapping, data_padding, data_text,
        data_align_content, data_align_items, data_flex_direction, data_flex_wrap, data_justify_content,
        data_color, data_deg, data_family, data_size, data_style, data_weight,
        data_filed, data_filed_color, data_filed_data,

        ...item
    } = data


    const imgStyle = {
        padding: SpacingCallBack(img_padding),
        objectFit: img_fit,
    }

    const titleStyle = {
        padding: SpacingCallBack(title_padding),
        margin: SpacingCallBack(title_mapping),
        '--alignContent': title_align_content,
        '--alignItems': title_align_items,
        '--flexDirection': title_flex_direction,
        '--flexWrap': title_flex_wrap,
        '--justifyContent': title_justify_content,
        '--titleColor': ColorCallBack(title_color, title_deg),
        fontSize: title_size,
        fontFamily: title_family,
        fontWeight: title_weight,
        fontStyle: title_style,
        filter: SetFilderParams(title_filed, title_filed_data, title_filed_color),
    }
    const dataStyle = {
        padding: SpacingCallBack(data_padding),
        margin: SpacingCallBack(data_mapping),
        '--alignContent': data_align_content,
        '--alignItems': data_align_items,
        '--flexDirection': data_flex_direction,
        '--flexWrap': data_flex_wrap,
        '--justifyContent': data_justify_content,
        '--titleColor': ColorCallBack(data_color, data_deg),
        fontSize: data_size,
        fontFamily: data_family,
        fontWeight: data_weight,
        fontStyle: data_style,
        filter: SetFilderParams(data_filed, data_filed_data, data_filed_color),
    }

    if (title_position === 'top') titleStyle.top = title_top
    if (title_position === 'bottom') titleStyle.bottom = title_btm
    if (data_position === 'top') dataStyle.top = data_top
    if (data_position === 'bottom') dataStyle.bottom = data_btm






    useEffect(() => {
        if (!isEmptyObject(UrlData)) {
            const data = api_urlLevel ? getNestedValue(api_urlMapping, UrlData[api_urlName]) : UrlData[api_urlName]
            setData(data)
        }
    }, [UrlData, api_urlName, api_urlMapping, api_urlLevel])


    return (
        <div className='PrefabricatedImgText'>
            {render_img && <img className='img' style={imgStyle} src={img_url} alt={img_url} />}
            {render_title && <div className='title' style={titleStyle}>{title_text}</div>}
            {render_data && <div className='data' style={dataStyle}>{Data?.[data_text] || ''}</div>}
        </div>
    );
};

export const PrefabricatedImgTextTemplate = {
    PrefabricatedImgText
}
