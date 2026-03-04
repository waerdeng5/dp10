import './Prefabricated.scss'

import { useSize } from 'ahooks'
import { useState, useEffect, useRef } from 'react'
import { Card, Descriptions, Tree, Button, Spin } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { ProTable } from '@ant-design/pro-components'

import { Decrypt } from '../Utils/IndexedDB'

import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, splitArrayEvenly, findInTree } from '../Utils'

const columns = [
    { title: '序号', dataIndex: 'index', valueType: 'index', width: 280, align: 'center' },
    { title: '时间字段', key: 'since2', dataIndex: 'createdAt', valueType: 'date', width: 280, align: 'center' },
    { title: '部署进度', dataIndex: 'progress', valueType: 'progress', width: 280, search: false },
    { title: '下拉选择', dataIndex: 'progress1', valueType: 'select', valueEnum: { 1: '启用', 2: '禁用' }, width: 280, align: 'center' },
    { title: '测试字段', dataIndex: 'progress2', valueType: 'input', width: 280, align: 'center' },
    { title: '测试字段', dataIndex: 'progress3', valueType: 'input', width: 280, align: 'center' },
    { title: '测试字段', dataIndex: 'progress4', valueType: 'input', width: 280, align: 'center' },
    {
        title: '操作', width: 160, key: 'option', fixed: 'end', valueType: 'option', align: 'center',
        render: () => [
            <Button key="detail" type='link'>详情</Button>,
            <Button key="log" type='link'>日志</Button>,
            <Button key="monitor" type='link'>监控</Button>
        ],
    },
]

const menuList = [
    {
        key: '1',
        title: '总公司',
        children: [
            { key: '11', title: '一分公司', children: [{ key: '111', title: '第一项目' }, { key: '112', title: '第二项目' }] },
            { key: '12', title: '二分公司' },
        ],
    },
]


const tableListDataSource = Array.from(
    { length: 100 },
    (_, i) => ({ key: i, name: i === 0 ? '用户认证服务' : '支付网关', createdAt: (i * 1000 + 200), progress: ((i * 17 + 23) % 100) + 1 })
)



// 默认表单组件
const PrefabricatedTable = ({ tempId, UrlData, data, LayoutEvent }) => {
    const tableBox = useRef(null)
    const size = useSize(tableBox)
    const [key, setKey] = useState(['111'])
    const [STYLE, setSTYLE] = useState()

    const getStyle = async () => {
        const style = await Decrypt(sessionStorage.getItem('startData'))
        setSTYLE(style)
    }

    useEffect(() => {
        getStyle()
        console.log(UrlData, data,)

        // 字段设置
        // 卡片设置
        // 菜单设置
        // 列表设置



    }, [UrlData, data])

    if (!STYLE) return <div className='PrefabricatedTable'><Spin /></div>

    const {
        table_search_title_color, table_search_title_deg, table_search_title_size, table_search_title_family, table_search_title_style,
        table_search_title_weight, table_search_title_filed, table_search_title_filed_color, table_search_title_filed_data,
        table_search_value_color, table_search_value_deg, table_search_value_size, table_search_value_family, table_search_value_style,
        table_search_value_weight, table_search_value_filed, table_search_value_filed_color, table_search_value_filed_data,
        table_search_query_border, table_search_query_back, table_search_query_radius, table_search_query_text,
        table_search_reset_border, table_search_reset_back, table_search_reset_radius, table_search_reset_text,
        table_search_back_color, table_search_back_back, table_search_back_radius,
        table_search_back_border, table_search_back_border_color, table_search_back_border_size, table_search_back_border_type,
        table_card_number, table_card_back, table_card_deg, table_card_padding, table_card_radius,
        table_card_border, table_card_border_color, table_card_border_size, table_card_border_type,
        table_card_title_color, table_card_title_deg, table_card_title_size, table_card_title_family, table_card_title_style, table_card_title_weight,
        table_card_title_filed, table_card_title_filed_color, table_card_title_filed_data,
        table_card_value_color, table_card_value_deg, table_card_value_size, table_card_value_family, table_card_value_style, table_card_value_weight,
        table_card_value_filed, table_card_value_filed_color, table_card_value_filed_data,
        table_menu_width, table_menu_margin, table_menu_back, table_menu_deg,
        table_menu_icon, table_menu_icon_size, table_menu_active_back, table_menu_active_backDeg,
        table_menu_active_color, table_menu_active_deg,
        table_menu_active_size, table_menu_active_style, table_menu_active_weight, table_menu_active_family,
        table_menu_active_filed, table_menu_active_filed_color, table_menu_active_filed_data,
        table_menu_default_color, table_menu_default_deg,
        table_menu_default_size, table_menu_default_style, table_menu_default_weight, table_menu_default_family,
        table_menu_default_filed, table_menu_default_filed_color, table_menu_default_filed_data,
        table_menu_active_unit_color, table_menu_active_unit_deg,
        table_menu_active_unit_size, table_menu_active_unit_style, table_menu_active_unit_weight, table_menu_active_unit_family,
        table_menu_active_unit_filed, table_menu_active_unit_filed_color, table_menu_active_unit_filed_data,
        table_menu_default_unit_color, table_menu_default_unit_deg,
        table_menu_default_unit_size, table_menu_default_unit_style, table_menu_default_unit_weight, table_menu_default_unit_family,
        table_menu_default_unit_filed, table_menu_default_unit_filed_color, table_menu_default_unit_filed_data,
        table_top_back, table_top_Backdeg, table_top_color,
        table_top_family, table_top_size, table_top_style, table_top_weight,
        table_list_back, table_list_deg, table_list_border, table_list_border_size,
        table_list_color, table_list_family, table_list_size, table_list_style, table_list_weight,
        table_list_act_back, table_list_act_deg, table_list_act_border, table_list_act_border_size,
        table_list_act_color, table_list_act_family, table_list_act_size, table_list_act_style, table_list_act_weight,
        table_extra_color, table_extra_deg, table_extra_opt_color, table_extra_opt_size, table_scroll_thumb,
        table_extra_family, table_extra_size, table_extra_style, table_extra_weight,
        table_extra_filed, table_extra_filed_color, table_extra_filed_data,
        table_options_back, table_options_deg, table_options_color,
        table_options_family, table_options_size, table_options_style, table_options_weight,
        table_pagin_title_color, table_pagin_title_deg,
        table_pagin_title_family, table_pagin_title_size, table_pagin_title_style, table_pagin_title_weight,
        table_pagin_title_filed, table_pagin_title_filed_color, table_pagin_title_filed_data,
        table_pagin_icon_color, table_pagin_icon_size,
        table_pagin_default_back, table_pagin_default_backDeg, table_pagin_default_radius,
        table_pagin_default_border, table_pagin_default_border_color, table_pagin_default_border_size, table_pagin_default_border_type,
        table_pagin_default_color, table_pagin_default_deg,
        table_pagin_default_family, table_pagin_default_style, table_pagin_default_weight,
        table_pagin_default_filed, table_pagin_default_filed_color, table_pagin_default_filed_data,
        table_pagin_active_back, table_pagin_active_backDeg, table_pagin_active_radius,
        table_pagin_active_border, table_pagin_active_border_color, table_pagin_active_border_size, table_pagin_active_border_type,
        table_pagin_active_color, table_pagin_active_deg,
        table_pagin_active_family, table_pagin_active_style, table_pagin_active_weight,
        table_pagin_active_filed, table_pagin_active_filed_color, table_pagin_active_filed_data,
    } = STYLE

    const SearchStyle = {
        '--searchTitleColor': ColorCallBack(table_search_title_color, table_search_title_deg),
        '--searchTitleSize': table_search_title_size + 'px',
        '--searchTitleFamily': table_search_title_family,
        '--searchTitleStyle': table_search_title_style,
        '--searchTitleWeight': table_search_title_weight,
        '--searchTitleFiledColor': SetFilderParams(table_search_title_filed, table_search_title_filed_data, table_search_title_filed_color),
        '--searchValueColor': ColorCallBack(table_search_value_color, table_search_value_deg),
        '--searchValueSize': table_search_value_size + 'px',
        '--searchValueFamily': table_search_value_family,
        '--searchValueStyle': table_search_value_style,
        '--searchValueWeight': table_search_value_weight,
        '--searchValueFiledColor': SetFilderParams(table_search_value_filed, table_search_value_filed_data, table_search_value_filed_color),
        '--searchQueryRadius': SpacingCallBack(table_search_query_radius),
        '--searchQueryBorder': table_search_query_border,
        '--searchQueryBack': table_search_query_back,
        '--searchQueryText': table_search_query_text,
        '--searchResetRadius': SpacingCallBack(table_search_reset_radius),
        '--searchResetBorder': table_search_reset_border,
        '--searchResetBack': table_search_reset_back,
        '--searchResetText': table_search_reset_text,
        '--searchBackColor': ColorCallBack(table_search_back_color, table_search_back_back),
        '--searchBackRadius': SpacingCallBack(table_search_back_radius),
        '--searchBackBorder': SetBorderParams(table_search_back_border, table_search_back_border_size, table_search_back_border_type, table_search_back_border_color)
    }

    const cardStyle = {
        background: ColorCallBack(table_card_back, table_card_deg),
        padding: SpacingCallBack(table_card_padding),
        borderRadius: SpacingCallBack(table_card_radius),
        border: SetBorderParams(table_card_border, table_card_border_size, table_card_border_type, table_card_border_color),
        '--cardTitleColor': ColorCallBack(table_card_title_color, table_card_title_deg),
        '--cardTitleSize': table_card_title_size + 'px',
        '--cardTitleFamily': table_card_title_family,
        '--cardTitleStyle': table_card_title_style,
        '--cardTitleWeight': table_card_title_weight,
        '--cardTitleFiledColor': SetFilderParams(table_card_title_filed, table_card_title_filed_data, table_card_title_filed_color),

        '--cardValueColor': ColorCallBack(table_card_value_color, table_card_value_deg),
        '--cardValueSize': table_card_value_size + 'px',
        '--cardValueFamily': table_card_value_family,
        '--cardValueStyle': table_card_value_style,
        '--cardValueWeight': table_card_value_weight,
        '--cardValueFiledColor': SetFilderParams(table_card_value_filed, table_card_value_filed_data, table_card_value_filed_color),
    }

    const MenuStyle = {
        '--menuWidth': table_menu_width + 'px',
        '--menuMargin': SpacingCallBack(table_menu_margin),
        '--menuBack': ColorCallBack(table_menu_back, table_menu_deg),
        '--menuIconColor': table_menu_icon,
        '--menuIconSize': table_menu_icon_size + 'px',
        '--menuActBack': ColorCallBack(table_menu_active_back, table_menu_active_backDeg),

        '--menuActColor': ColorCallBack(table_menu_active_color, table_menu_active_deg),
        '--menuActSize': table_menu_active_size + 'px',
        '--menuActFamily': table_menu_active_family,
        '--menuActStyle': table_menu_active_style,
        '--menuActWeight': table_menu_active_weight,
        '--menuActFiledColor': SetFilderParams(table_menu_active_filed, table_menu_active_filed_data, table_menu_active_filed_color),
        '--menuDefColor': ColorCallBack(table_menu_default_color, table_menu_default_deg),
        '--menuDefSize': table_menu_default_size + 'px',
        '--menuDefFamily': table_menu_default_family,
        '--menuDefStyle': table_menu_default_style,
        '--menuDefWeight': table_menu_default_weight,
        '--menuDefFiledColor': SetFilderParams(table_menu_default_filed, table_menu_default_filed_data, table_menu_default_filed_color),

        '--menuActUnitColor': ColorCallBack(table_menu_active_unit_color, table_menu_active_unit_deg),
        '--menuActUnitSize': table_menu_active_unit_size + 'px',
        '--menuActUnitFamily': table_menu_active_unit_family,
        '--menuActUnitStyle': table_menu_active_unit_style,
        '--menuActUnitWeight': table_menu_active_unit_weight,
        '--menuActUnitFiledColor': SetFilderParams(table_menu_active_unit_filed, table_menu_active_unit_filed_data, table_menu_active_unit_filed_color),
        '--menuDefUnitColor': ColorCallBack(table_menu_default_unit_color, table_menu_default_unit_deg),
        '--menuDefUnitSize': table_menu_default_unit_size + 'px',
        '--menuDefUnitFamily': table_menu_default_unit_family,
        '--menuDefUnitStyle': table_menu_default_unit_style,
        '--menuDefUnitWeight': table_menu_default_unit_weight,
        '--menuDefUnitFiledColor': SetFilderParams(table_menu_default_unit_filed, table_menu_default_unit_filed_data, table_menu_default_unit_filed_color),
    }

    const TableStyle = {
        flex: 1,
        '--topBack': ColorCallBack(table_top_back, table_top_Backdeg),
        '--topColor': table_top_color,
        '--topSize': table_top_size + 'px',
        '--topFamily': table_top_family,
        '--topStyle': table_top_style,
        '--topWeight': table_top_weight,
        '--listBack': ColorCallBack(table_list_back, table_list_deg),
        '--listBorder': table_list_border,
        '--listBorderSize': table_list_border_size + 'px',
        '--listColor': table_list_color,
        '--listSize': table_list_size + 'px',
        '--listFamily': table_list_family,
        '--listStyle': table_list_style,
        '--listWeight': table_list_weight,
        '--listActBack': ColorCallBack(table_list_act_back, table_list_act_deg),
        '--listActBorder': table_list_act_border,
        '--listActBorderSize': table_list_act_border_size + 'px',
        '--listActColor': table_list_act_color,
        '--listActSize': table_list_act_size + 'px',
        '--listActFamily': table_list_act_family,
        '--listActStyle': table_list_act_style,
        '--listActWeight': table_list_act_weight,
        '--extraOptColor': table_extra_opt_color,
        '--extraOptSize': table_extra_opt_size + 'px',
        '--extraColor': ColorCallBack(table_extra_color, table_extra_deg),
        '--extraSize': table_extra_size + 'px',
        '--extraFamily': table_extra_family,
        '--extraStyle': table_extra_style,
        '--extraWeight': table_extra_weight,
        '--extraFiled': SetFilderParams(table_extra_filed, table_extra_filed_data, table_extra_filed_color),
        '--scrollThumb': table_scroll_thumb,
        '--optionBack': ColorCallBack(table_options_back, table_options_deg),
        '--optionColor': table_options_color,
        '--optionSize': table_options_size + 'px',
        '--optionFamily': table_options_family,
        '--optionStyle': table_options_style,
        '--optionWeight': table_options_weight,
        '--paginTitleColor': ColorCallBack(table_pagin_title_color, table_pagin_title_deg),
        '--paginTitleFamily': table_pagin_title_family,
        '--paginTitleStyle': table_pagin_title_style,
        '--paginTitleWeight': table_pagin_title_weight,
        '--paginTitleFiled': SetFilderParams(table_pagin_title_filed, table_pagin_title_filed_data, table_pagin_title_filed_color),
        '--paginDefBack': ColorCallBack(table_pagin_default_back, table_pagin_default_backDeg),
        '--paginDefRadius': table_pagin_default_radius + 'px',
        '--paginDefBorder': SetBorderParams(table_pagin_default_border, table_pagin_default_border_size, table_pagin_default_border_type, table_pagin_default_border_color),
        '--paginDefColor': ColorCallBack(table_pagin_default_color, table_pagin_default_deg),
        '--paginDefFamily': table_pagin_default_family,
        '--paginDefStyle': table_pagin_default_style,
        '--paginDefWeight': table_pagin_default_weight,
        '--paginDefFiled': SetFilderParams(table_pagin_default_filed, table_pagin_default_filed_data, table_pagin_default_filed_color),
        '--paginActBack': ColorCallBack(table_pagin_active_back, table_pagin_active_backDeg),
        '--paginActRadius': table_pagin_active_radius + 'px',
        '--paginActBorder': SetBorderParams(table_pagin_active_border, table_pagin_active_border_size, table_pagin_active_border_type, table_pagin_active_border_color),
        '--paginActColor': ColorCallBack(table_pagin_active_color, table_pagin_active_deg),
        '--paginActFamily': table_pagin_active_family,
        '--paginActStyle': table_pagin_active_style,
        '--paginActWeight': table_pagin_active_weight,
        '--paginActFiled': SetFilderParams(table_pagin_active_filed, table_pagin_active_filed_data, table_pagin_active_filed_color),
        '--paginIconColor': table_pagin_icon_color,
        '--paginIconSize': table_pagin_icon_size + 'px',
    }


    return (
        <div className='PrefabricatedTable' style={SearchStyle}>
            <ProTable
                columns={columns}
                rowKey="key"
                pagination={{ showSizeChanger: true }}
                tableRender={(_, dom) => {
                    // 判断显示
                    return (
                        <div style={{ display: 'flex', width: '100%', ...MenuStyle }}>
                            <Tree
                                className='TableMenu'
                                blockNode
                                treeData={menuList}
                                onSelect={(e) => setKey(e)}
                                selectedKeys={key}
                                defaultExpandAll
                                titleRender={(e) => {
                                    return (
                                        <div className='TableTree'>
                                            <div className='title'>{e.title}</div>
                                            <div className='unit'>{e.key}</div>
                                        </div>
                                    )
                                }}
                            />
                            <div className='TableContent' style={TableStyle} ref={tableBox}>
                                {dom}
                            </div>
                        </div>
                    )
                }}
                tableExtraRender={(_, data) => {
                    // 判断显示
                    return (
                        <Card className='TableExtra' style={cardStyle}>
                            <Descriptions size="small" column={table_card_number}>
                                <Descriptions.Item label="实例数">{data.length}</Descriptions.Item>
                                <Descriptions.Item label="负责人">书琰</Descriptions.Item>
                                <Descriptions.Item label="关联项目">智慧零售平台</Descriptions.Item>
                                <Descriptions.Item label="创建时间">2024-01-10</Descriptions.Item>
                                <Descriptions.Item label="上线时间">2024-01-15</Descriptions.Item>
                            </Descriptions>
                        </Card>
                    )
                }}
                params={{ key }}
                request={async () => ({ success: true, data: tableListDataSource })}
                dateFormatter="string"
                headerTitle="自定义表格主体"
                scroll={{ x: 400, y: size?.height - 167 || 400 }}
            />
        </div>
    );
};

export const PrefabricatedTableTemplate = {
    PrefabricatedTable
};