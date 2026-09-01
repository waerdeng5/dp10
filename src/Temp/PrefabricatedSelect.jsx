import dayjs from 'dayjs'
import { Select, DatePicker, Tree } from 'antd'
import { useState, useEffect } from 'react'
import { ICONMapping } from '../Config/IconMapping'
import {
    ColorCallBack,
    SpacingCallBack,
    SetFilderParams,
    SetBorderParams,
    SetShadowParams,
    SpacingSizeCallBack,
    getNestedValue
} from '../Utils'

import { axios, strOfurlParamsFunc } from '../Utils/Api'

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

const PrefabricatedTreeData = ({ tempId, UrlData, data, LayoutEvent }) => {
    const { isParams, isParamsConfig,
        data_source, data_type, api_method, api_url, api_params, api_https, api_level, api_mapping, api_default,
        fieldNames_key, fieldNames_title, fieldNames_children, tree_selectable, tree_expandAll, tree_blockNode, tree_switcher,
        box_back, back_deg, back_padding, back_margin, back_radius, parent_color, parent_deg, title_padding,
        title_size, title_color, title_deg, title_family, title_weight, title_style, title_filed, title_filed_data, title_filed_color,
        active_back_color, active_back_deg, active_color, active_deg, active_size, active_family, active_weight, active_style,
        active_filed, active_filed_data, active_filed_color, active_back_padding
    } = data

    const [treeData, setTreeData] = useState()
    const [selectedKeys, setSelectedKeys] = useState([])

    const boxStyle = {
        width: SpacingSizeCallBack(back_margin, 100),
        height: SpacingSizeCallBack(back_margin, 100, true),
        background: ColorCallBack(box_back, back_deg),
        padding: SpacingCallBack(back_padding),
        margin: SpacingCallBack(back_margin),
        borderRadius: SpacingCallBack(back_radius),
        '--tree-switcher': tree_switcher ? 'block' : 'none',
        '--title-padding': SpacingCallBack(title_padding),
        '--title-size': title_size + 'px',
        '--title-color': ColorCallBack(title_color, title_deg),
        '--title-family': title_family,
        '--title-weight': title_weight,
        '--title-style': title_style,
        '--title-filed': SetFilderParams(title_filed, title_filed_data, title_filed_color),
        '--active-back': ColorCallBack(active_back_color, active_back_deg),
        '--active-padding': SpacingCallBack(active_back_padding),
        '--active-color': ColorCallBack(active_color, active_deg),
        '--active-size': active_size + 'px',
        '--active-family': active_family,
        '--active-weight': active_weight,
        '--active-style': active_style,
        '--active-filed': SetFilderParams(active_filed, active_filed_data, active_filed_color),
    }

    const getTreeDataApi = async () => {
        const [err, res] = await axios({ method: api_method, url: api_url, path: api_https, params: strOfurlParamsFunc(api_params) })
        if (err) return false
        const data = api_level ? getNestedValue(api_mapping, res) : res
        setTreeData(data)

        console.log(data)


        setSelectedKeys([api_default])
    }

    useEffect(() => {
        if (data_source === 'A01') getTreeDataApi()

    }, [data_source])

    const onTreeSelect = (e) => {
        if (e.length === 0) return
        setSelectedKeys(e)
        if (isParams) {
            const data = isParamsConfig.map(v => {
                v.apiData = e[0]
                return v
            })
            LayoutEvent.emit({ type: 'onAPIParamsSelect', data })
        }
    }

    return (
        <div className='PrefabricatedTreeData' style={boxStyle}>
            {treeData &&
                <Tree
                    selectedKeys={selectedKeys}
                    treeData={treeData}
                    fieldNames={{ key: fieldNames_key, title: fieldNames_title, children: fieldNames_children }}
                    defaultExpandAll={tree_expandAll}
                    blockNode={tree_blockNode}
                    selectable={tree_selectable}
                    onSelect={onTreeSelect}
                />
            }
        </div>
    )
}

export const PrefabricatedSelectTemplate = {
    PrefabricatedSelect,
    PrefabricatedDateSelect,
    PrefabricatedTreeData,
};

// https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/