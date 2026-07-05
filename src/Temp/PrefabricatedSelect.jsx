import dayjs from 'dayjs'
import { Select, DatePicker } from 'antd'
import { useState, useEffect } from 'react'



import { ICONMapping } from '../Config/IconMapping'
import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, SetShadowParams } from '../Utils'



const PrefabricatedSelect = () => {
    return (
        <div className="PrefabricatedSelect">
            <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
        </div>
    )
}

const PrefabricatedDateSelect = ({ tempId, UrlData, data, LayoutEvent }) => {
    const dateMapping = {
        'year': 'YYYY',
        'quarter': 'YYYY-MM',
        'month': 'YYYY-MM',
        'week': 'YYYY-MM-DD',
        'date': 'YYYY-MM-DD',
    }
    const [dateValue, setDateValue] = useState()
    const { isParams, isParamsConfig,
        allowClear, picker, defaultDate, specifiedDate, valueDate,
        back_color, back_deg, back_width, back_radius,
        back_border, back_border_color, back_border_size, back_border_type,
        back_shadow, back_shadow_color, back_shadow_size, back_shadow_type,
        title_color, title_size, title_family, title_weight, title_style,
        title_filed, title_filed_data, title_filed_color
    } = data


    const backStyle = {
        background: ColorCallBack(back_color, back_deg),
        borderRadius: SpacingCallBack(back_radius),
        border: SetBorderParams(back_border, back_border_color, back_border_size, back_border_type),
        boxShadow: SetShadowParams(back_shadow, back_shadow_size, back_shadow_color, back_shadow_type),
        '--width': back_width + 'px',
        '--textColor': title_color,
        '--textSize': title_size + 'px',
        '--textFamily': title_family,
        '--textWeight': title_weight,
        '--textStyle': title_style,
        '--textFiled': SetFilderParams(title_filed, title_filed_data, title_filed_color),
    }

    useEffect(() => {
        if (defaultDate) setDateValue(specifiedDate ? dayjs(valueDate) : dayjs())
    }, [data])

    const PrefixTemp = () => {
        const { prefix } = data
        if (prefix === 'none') return false
        if (prefix === 'text') {
            const { prefix_text, prefix_color, prefix_size, prefix_family, prefix_weight, prefix_style,
                prefix_filed, prefix_filed_data, prefix_filed_color
            } = data
            const textStyle = {
                color: prefix_color,
                fontSize: prefix_size,
                fontFamily: prefix_family,
                fontWeight: prefix_weight,
                fontStyle: prefix_style,
                filter: SetFilderParams(prefix_filed, prefix_filed_data, prefix_filed_color)
            }
            return (
                <div style={textStyle}>{prefix_text}</div>
            )
        }
        if (prefix === 'icon') {
            const { prefix_icon, prefix_icon_color, prefix_icon_size,
                prefix_icon_filed, prefix_icon_filed_data, prefix_icon_filed_color
            } = data
            const iconStyle = {
                color: prefix_icon_color,
                fontSize: prefix_icon_size,
                filter: SetFilderParams(prefix_icon_filed, prefix_icon_filed_data, prefix_icon_filed_color)
            }

            return (
                <div style={iconStyle}>{ICONMapping[prefix_icon]}</div>
            )
        }
    }

    const SuffixTemp = () => {
        const { suffix } = data
        if (suffix === 'none') return false
        if (suffix === 'text') {
            const { suffix_text, suffix_color, suffix_size, suffix_family, suffix_weight, suffix_style,
                suffix_filed, suffix_filed_data, suffix_filed_color
            } = data
            const textStyle = {
                color: suffix_color,
                fontSize: suffix_size,
                fontFamily: suffix_family,
                fontWeight: suffix_weight,
                fontStyle: suffix_style,
                filter: SetFilderParams(suffix_filed, suffix_filed_data, suffix_filed_color)
            }
            return (
                <div style={textStyle}>{suffix_text}</div>
            )
        }
        if (suffix === 'icon') {
            const { suffix_icon, suffix_icon_color, suffix_icon_size,
                suffix_icon_filed, suffix_icon_filed_data, suffix_icon_filed_color
            } = data
            const iconStyle = {
                color: suffix_icon_color,
                fontSize: suffix_icon_size,
                filter: SetFilderParams(suffix_icon_filed, suffix_icon_filed_data, suffix_icon_filed_color)
            }
            return (
                <div style={iconStyle}>{ICONMapping[suffix_icon]}</div>
            )
        }
    }


    const onChange = (e) => {
        setDateValue(e)
        if (isParams) {
            const data = isParamsConfig.map(v => {
                v.apiData = e.format(dateMapping[picker])
                return v
            })
            LayoutEvent.emit({ type: 'onAPIParamsSelect', data })
        }
    }



    return (
        <div className='PrefabricatedDateSelect' style={backStyle}>
            <DatePicker
                variant="borderless"
                size='large'
                allowClear={allowClear}
                picker={picker}
                value={dateValue}
                prefix={<PrefixTemp />}
                suffixIcon={<SuffixTemp />}
                onChange={onChange}
            />
        </div>
    )
}


export const PrefabricatedSelectTemplate = {
    PrefabricatedSelect,
    PrefabricatedDateSelect
};