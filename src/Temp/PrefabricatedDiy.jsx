import './Prefabricated.scss'
import { useMount } from 'ahooks'
import { ColorCallBack, SpacingCallBack, SetBorderParams, SetFilderParams, isEmptyObject, getNestedValue } from '../Utils'
import { useEffect, useState, Fragment } from 'react'

const SoldNumber = ({ template, data, list }) => {
    const parts = template.split(/(\$\{[^}]+\})/)
    return (
        <>
            {parts.map((part, index) => {
                const match = part.match(/\$\{([^}]+)\}/)
                if (match) {
                    const key = match[1];
                    const hasA01 = list.some(v => v.data_key === key)
                    if (hasA01) {
                        const { data_margin, data_color, data_deg, data_size, data_family, data_weight, data_style, data_value,
                            data_filed, data_filed_color, data_filed_data
                        } = list.find(v => v.data_key === key)
                        const numberStyle = {
                            margin: SpacingCallBack(data_margin),
                            '--titleColor': ColorCallBack(data_color, data_deg),
                            fontSize: data_size,
                            fontFamily: data_family,
                            fontWeight: data_weight,
                            fontStyle: data_style,
                            filter: SetFilderParams(data_filed, data_filed_color, data_filed_data),
                        }
                        return <div className='textNumber' key={index} style={numberStyle}>{data?.[data_value] || 0}</div>
                    } else return <div key={index} style={{ fontSize: 40, fontFamily: "DIN", margin: '0 4px' }}> 0 </div>
                }
                return <Fragment key={index}>{part}</Fragment>;
            })}
        </>
    )
}


const PrefabricatedDiyText = ({ tempId, UrlData, data, LayoutEvent }) => {
    const [Data, setData] = useState()

    const { api_urlName, api_urlLevel, api_urlMapping,
        left_img, left_img_url, left_img_width, left_img_height, left_img_margin,
        right_img, right_img_url, right_img_width, right_img_height, right_img_margin,
        center_width, center_height, center_color, center_deg, center_padding, center_margin,
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
        width: center_width,
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

    useEffect(() => {
        if (!isEmptyObject(UrlData)) {
            const data = api_urlLevel ? getNestedValue(api_urlMapping, UrlData[api_urlName]) : UrlData[api_urlName]
            setData(data)
        }
    }, [UrlData, api_urlName, api_urlMapping, api_urlLevel])



    return (
        <div className='PrefabricatedDiyText' >
            {left_img && <img src={left_img_url} style={leftImgStyle} alt="left_img_url" />}
            <div className='centerBox' style={centerStyle}>
                {text_list.map((v, i) => {
                    const { text_color, text_deg, text_size, text_family, text_weight, text_style, text_filed, text_filed_data, text_filed_color, text_margin } = v
                    const textStyle = {
                        margin: SpacingCallBack(text_margin),
                        '--titleColor': ColorCallBack(text_color, text_deg),
                        fontSize: text_size,
                        fontFamily: text_family,
                        fontWeight: text_weight,
                        fontStyle: text_style,
                        filter: SetFilderParams(text_filed, text_filed_data, text_filed_color),
                    }
                    return (
                        <div key={i} style={textStyle} className='textItem'>
                            <SoldNumber template={v.text} data={Data} list={data_list} />
                        </div>
                    )
                })}
            </div>
            {right_img && <img src={right_img_url} style={rightImgStyle} alt="right_img_url" />}
        </div>
    )
}




export const PrefabricatedDiyTemplate = {
    PrefabricatedDiyText,
}