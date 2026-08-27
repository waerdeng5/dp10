import './ModelTemplate.scss'
import { useSize } from 'ahooks'
import { useState, useRef, useEffect } from 'react'
import { Card, Descriptions, Menu, Button, Spin } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { ProTable } from '@ant-design/pro-components'

import { Decrypt } from '../Utils/IndexedDB'

import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, splitArrayEvenly, findInTree, getNestedValue } from '../Utils'


import { axios, strOfurlParamsFunc } from '../Utils/Api'
import { PrefabricatedTableTemplate } from './PrefabricatedTable'
import { SwiperAnnexTemplate } from './SwiperTemplate'


const TableTemplate = PrefabricatedTableTemplate.PrefabricatedTable

// 引入组件 




// TODO 弹窗组件 
// !!!  附件
export const ModelAnnexTemplate = ({ config, row, Event }) => {
    // console.log('附件窗口', config, row, Event)
    const { annex_type,
        annex_api_method, annex_api_url, annex_api_params, annex_api_https, annex_api_level, annex_api_mapping, annex_api_fields
    } = config

    const [annexData, setAnnexData] = useState()


    const getAnnexData = async () => {
        const [err, res] = await axios({ method: annex_api_method, url: annex_api_url, params: strOfurlParamsFunc(annex_api_params), path: annex_api_https })
        if (err) return
        const data = annex_api_level ? getNestedValue(annex_api_mapping, res) : res
        setAnnexData(data)
    }


    useEffect(() => {
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

// https://jtgj-rest.ljkjkf.com/api/personStat/GetPersonCategory
