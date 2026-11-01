import './ModelTemplate.scss'
import { useSize } from 'ahooks'
import { MailOutlined } from '@ant-design/icons'
import { useState, useRef, useEffect } from 'react'
import { ProTable } from '@ant-design/pro-components'
import { Card, Descriptions, Menu, Button, Spin } from 'antd'

import { Decrypt } from '../Utils/IndexedDB'
import { SwiperAnnexTemplate } from './SwiperTemplate'
import { axios, strOfurlParamsFunc } from '../Utils/Api'
import { PrefabricatedTableTemplate } from './PrefabricatedTable'
import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, splitArrayEvenly, findInTree, getNestedValue, UnitCallBackStruct } from '../Utils'

const TableTemplate = PrefabricatedTableTemplate.PrefabricatedTable

// TODO 弹窗组件 
// !!!  附件
export const ModelAnnexTemplate = ({ config, row, Event }) => {

    const { annex_type, annex_api_method, annex_api_url, annex_api_params, annex_api_https, annex_api_level, annex_api_mapping, annex_api_fields,
        lay_A01_fields, annex_api_data, annex_data_mapping, annex_list, annex_listPosition,
        list_widthUnit, list_width, list_heightUnit, list_height, list_align_items, list_align_content, list_justify_content, list_flex_direction, list_flex_wrap,
        list_cover, list_title, list_cover_field, list_title_field, cover_widthUnit, cover_width, cover_heightUnit, cover_height,
        list_default_back, list_default_deg, list_default_radius, list_default_padding, list_default_align, list_default_color,
        list_default_size, list_default_family, list_default_weight, list_default_style, list_default_filed, list_default_filed_size, list_default_filed_color,
        list_active_back, list_active_deg, list_active_radius, list_active_padding, list_active_align, list_active_color,
        list_active_size, list_active_family, list_active_weight, list_active_style, list_active_filed, list_active_filed_size, list_active_filed_color,
    } = config

    const [annexData, setAnnexData] = useState()
    const [activeIndex, setActiveIndex] = useState(0)

    const getAnnexData = async () => {
        const params = { ...strOfurlParamsFunc(annex_api_params) }
        if (annex_api_data) annex_data_mapping.forEach(v => { params[v.mapping] = row[v.field] })
        const [err, res] = await axios({ method: annex_api_method, url: annex_api_url, params, path: annex_api_https })
        if (err) return
        const data = annex_api_level ? getNestedValue(annex_api_mapping, res) : res
        setAnnexData(data)
    }

    const getAnnexRow = () => {
        const data = row[lay_A01_fields]
        setAnnexData(data)
    }

    useEffect(() => {
        if (annex_type === 'A01') getAnnexRow()
        if (annex_type === 'A02') getAnnexData()
    }, [])

    const flexMapping = { left: 'row', right: 'row-reverse', top: 'column', btm: 'column-reverse', }

    const layStyle = {
        '--flex-direction': flexMapping[annex_listPosition] || 'row',
    }

    const listStyle = {
        ...UnitCallBackStruct(list_widthUnit, list_width, 'width'),
        ...UnitCallBackStruct(list_heightUnit, list_height, 'height'),
        '--align-items': list_align_items || 'center',
        '--align-content': list_align_content || 'center',
        '--justify-content': list_justify_content || 'center',
        '--flex-direction': list_flex_direction || 'column',
        '--flex-wrap': list_flex_wrap || 'wrap',
    }

    const coverStyle = {
        ...UnitCallBackStruct(cover_widthUnit, cover_width, 'width'),
        ...UnitCallBackStruct(cover_heightUnit, cover_height, 'height'),
    }

    const defaultStyle = {
        background: ColorCallBack(list_default_back, list_default_deg),
        borderRadius: SpacingCallBack(list_default_radius),
        padding: SpacingCallBack(list_default_padding),
    }

    const textDefault = {
        textAlign: list_default_align,
        color: list_default_color || '#000',
        fontSize: list_default_size || '14px',
        fontFamily: list_default_family || 'sans-serif',
        fontWeight: list_default_weight || 'normal',
        fontStyle: list_default_style || 'normal',
        filter: SetFilderParams(list_default_filed, list_default_filed_size, list_default_filed_color)
    }

    const activeStyle = {
        background: ColorCallBack(list_active_back, list_active_deg),
        borderRadius: SpacingCallBack(list_active_radius),
        padding: SpacingCallBack(list_active_padding),
    }
    const textActive = {
        textAlign: list_active_align,
        color: list_active_color || '#000',
        fontSize: list_active_size || '14px',
        fontFamily: list_active_family || 'sans-serif',
        fontWeight: list_active_weight || 'normal',
        fontStyle: list_active_style || 'normal',
        filter: SetFilderParams(list_active_filed, list_active_filed_size, list_active_filed_color)
    }

    const onActive = (e) => {
        setActiveIndex(e)
    }

    Event.useSubscription(e => {
        if (e.type === 'onSlideChange') setActiveIndex(e.data)
    })

    if (annexData) {
        return (
            <div className='ModelAnnexTemplate' style={layStyle}>
                {annex_list &&
                    <div className='AnnexList' style={listStyle} >
                        {annexData.map((v, i) => {
                            return (
                                <div key={i} className='AnnexItem' style={activeIndex === i ? activeStyle : defaultStyle} onClick={() => onActive(i)}>
                                    {list_cover && <img style={coverStyle} src={v[list_cover_field]} alt={v[list_cover_field]} />}
                                    {list_title && <div style={activeIndex === i ? textActive : textDefault}>{v[list_title_field]}</div>}
                                </div>
                            )
                        })}
                    </div>
                }
                <SwiperAnnexTemplate data={annexData} urlField={annex_api_fields ? annex_api_fields : 'url'} activeIndex={activeIndex} Event={Event} />
            </div>
        )
    }
}
// !!!  列表
export const ModelTableTemplate = ({ config, row, Event }) => {
    return (
        <div className='ModelTableTemplate' >
            <TableTemplate tempId={'0'} UrlData={{}} data={config} LayoutEvent={Event} row={row} />
        </div>
    )
}