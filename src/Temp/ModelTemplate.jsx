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
import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, splitArrayEvenly, findInTree, getNestedValue } from '../Utils'

const TableTemplate = PrefabricatedTableTemplate.PrefabricatedTable

// TODO 弹窗组件 
// !!!  附件
export const ModelAnnexTemplate = ({ config, row, Event }) => {
    const { annex_type, annex_api_method, annex_api_url, annex_api_params, annex_api_https, annex_api_level, annex_api_mapping, annex_api_fields,
        lay_A01_fields, annex_api_data, annex_data_mapping } = config

    const [annexData, setAnnexData] = useState()

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

    return (
        <div className='ModelAnnexTemplate'>
            {annexData && <SwiperAnnexTemplate data={annexData} urlField={annex_api_fields ? annex_api_fields : 'url'} />}
        </div>
    )
}
// !!!  列表
export const ModelTableTemplate = ({ config, row, Event }) => {
    return (
        <div className='ModelTableTemplate' >
            <TableTemplate tempId={'0'} UrlData={{}} data={config} LayoutEvent={Event} row={row} />
        </div>
    )
}