import './ModelTemplate.scss'
import { useSize } from 'ahooks'
import { useState, useRef } from 'react'
import { Card, Descriptions, Menu, Button, Spin } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { ProTable } from '@ant-design/pro-components'

import { Decrypt } from '../Utils/IndexedDB'

import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, splitArrayEvenly, findInTree } from '../Utils'


import { PrefabricatedTableTemplate } from './PrefabricatedTable'


const TableTemplate = PrefabricatedTableTemplate.PrefabricatedTable

// 引入组件 




// TODO 弹窗组件 
// !!!  附件
export const ModelAnnexTemplate = () => {
    return (
        <div>
            附件窗口
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
