import './StartTemplate.scss'
import dayjs from 'dayjs'
import { Radio } from 'antd'
import { useRafInterval, useSize } from 'ahooks'
import { useState, useEffect, useRef } from 'react'
import { Card, Descriptions, Menu, Button, Tree } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { ProTable } from '@ant-design/pro-components'
import { useLocation, useNavigate } from 'react-router-dom'

import { ICONMapping } from '../Config/IconMapping'
import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, splitArrayEvenly, findInTree, UnitCallBack } from '../Utils'

const columns = [
    { title: '序号', dataIndex: 'index', valueType: 'index', width: 280, align: 'center' },
    { title: '时间字段', key: 'since2', dataIndex: 'createdAt', valueType: 'date', width: 280, align: 'center' },
    { title: '部署进度', dataIndex: 'progress', valueType: 'progress', width: 280, search: false },
    { title: '下拉选择', dataIndex: 'progress1', valueType: 'select', valueEnum: { 1: '启用', 2: '禁用' }, width: 280, align: 'center' },
    { title: '测试字段', dataIndex: 'progress2', valueType: 'input', width: 280, align: 'center' },
    { title: '测试字段', dataIndex: 'progress3', valueType: 'input', width: 280, align: 'center' },
    { title: '测试字段', dataIndex: 'progress4', valueType: 'input', width: 280, align: 'center' },
    {
        title: '操作', width: 240, key: 'option', fixed: 'end', valueType: 'option', align: 'center',
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


const navMapping = {
    A01: { label: "nav_name", value: "nav_url", children: 'start_navTwo' },
    A02: { label: "two_name", value: "two_url", children: 'start_navTwo' },
    A03: {},
    A04: {},
}

export const TopTemplate = ({ data, status, LOGIN, StartEvent }) => {
    const { home, topType, widthType, widthSize, heightSize, padding, margin, align_items, align_content, justify_content, flex_direction, flex_wrap } = data
    if (home !== 'all') {
        if (home === 'home' && status !== '/Start') return <div />
        if (home === 'page' && status === '/Start') return <div />
    }
    const configStyle = {
        height: heightSize,
        padding: SpacingCallBack(padding),
        margin: SpacingCallBack(margin),
        '--alignItems': align_items,
        '--alignContent': align_content,
        '--justifyContent': justify_content,
        '--flexDirection': flex_direction,
        '--flexWrap': flex_wrap,
    }
    if (widthType === 'flex') configStyle.flex = widthSize
    if (widthType === 'px') configStyle.width = widthSize

    if (topType === 'empty') return (<div className={`TopItem Title`} style={{ ...configStyle }} />)
    if (topType === 'title') {
        const { titleText, titleColor, titleDeg, titleSize, titleFamily, titleWeight, titleStyle, titelFiled, titelFiled_data, titelFiled_color,
            titelIcon, titelIcon_url, titelIcon_size, titelIcon_field, titelIcon_fieldData, titelIcon_fieldColor, titelIcon_padding, titelIcon_margin,
        } = data

        const titleStyleData = {
            '--titleColor': ColorCallBack(titleColor, titleDeg),
            fontSize: titleSize,
            fontFamily: titleFamily,
            fontWeight: titleWeight,
            fontStyle: titleStyle,
            filter: SetFilderParams(titelFiled, titelFiled_data, titelFiled_color),
        }
        const iconStyleData = {
            width: titelIcon_size,
            padding: SpacingCallBack(titelIcon_padding),
            margin: SpacingCallBack(titelIcon_margin),
            filter: SetFilderParams(titelIcon_field, titelIcon_fieldData, titelIcon_fieldColor),
        }

        return (
            <div className={`TopItem Title`} style={{ ...configStyle, ...titleStyleData }}>
                {titelIcon && <img src={titelIcon_url} alt="" style={{ ...iconStyleData }} />}
                {titleText}
            </div>
        )
    }
    if (topType === 'option') {
        const { option_icon, option_icon_color, option_icon_shadow, option_icon_shadow_color, option_icon_shadow_data, option_icon_size,
            option_list, option_margin, option_padding, option_text, option_text_color, option_text_family,
            option_text_shadow, option_text_shadow_color, option_text_shadow_data, option_text_size, option_text_style, option_text_weight
        } = data

        const optionIconStyleData = {
            marginRight: option_margin,
            color: option_icon_color,
            fontSize: option_icon_size,
            filter: SetFilderParams(option_icon_shadow, option_icon_shadow_data, option_icon_shadow_color),
        }
        const optionTextStyleData = {
            color: option_text_color,
            fontSize: option_text_size,
            fontFamily: option_text_family,
            fontWeight: option_text_weight,
            fontStyle: option_text_style,
            filter: SetFilderParams(option_text_shadow, option_text_shadow_data, option_text_shadow_color),
        }

        const onClick = (e) => {
            if (!StartEvent) return
            StartEvent.emit({ type: "onNavigate", data: e.type })
        }

        return (
            <div className={`TopItem Option`} style={{ ...configStyle }}>
                {LOGIN ? option_list.map((v, i) => (
                    <div key={i} style={{ padding: `0 ${option_padding}px` }} onClick={() => onClick(v)}>
                        {option_icon && <span style={optionIconStyleData}>{ICONMapping[v.icon]}</span>}
                        {option_text && <div style={optionTextStyleData}>{v.text}</div>}
                    </div>
                )) :
                    <div style={{ padding: `0 ${option_padding}px` }} onClick={() => onClick({ type: 'login' })}>
                        {option_icon && <span style={optionIconStyleData}>{ICONMapping['fasTheaterMasks']}</span>}
                        {option_text && <div style={optionTextStyleData}>登录</div>}
                    </div>
                }
            </div>
        )
    }
    if (topType === 'back') {
        const { back_color, back_icon, back_shadow, back_shadow_color, back_shadow_data, back_size } = data
        const backStyleData = {
            color: back_color,
            fontSize: back_size,
            filter: SetFilderParams(back_shadow, back_shadow_data, back_shadow_color),
        }

        const onClick = (e) => {
            if (!StartEvent) return
            StartEvent.emit({ type: "onNavigate", data: 'home' })
        }

        return (
            <div className={`TopItem Back`} style={{ ...configStyle, ...backStyleData }} onClick={onClick}>
                <span>{ICONMapping[back_icon]}</span>
            </div>
        )
    }
    if (topType === 'nav') {
        return <div className={`TopItem Nav`} style={{ ...configStyle }}>导航模块(仅占位)</div>
    }
    if (topType === 'text') {
        const { text_text, text_color, text_deg, text_size, text_family, text_weight, text_style, text_filed, text_filed_data, text_filed_color } = data

        const testStyleData = {
            '--titleColor': ColorCallBack(text_color, text_deg),
            fontSize: text_size,
            fontFamily: text_family,
            fontWeight: text_weight,
            fontStyle: text_style,
            filter: SetFilderParams(text_filed, text_filed_data, text_filed_color),
        }
        return <div className={`TopItem Text`} style={{ ...configStyle, ...testStyleData }}>{text_text}</div>
    }
    if (topType === 'date') {
        const { date_list } = data
        const [Date, setData] = useState(dayjs())
        useRafInterval(() => setData(dayjs()), 1000)

        return (
            <div className={`TopItem Date`} style={{ ...configStyle }}>
                {date_list.map((v, i) => {
                    const { date_format, date_color, date_deg, date_size, date_family, date_weight, date_style, date_filed, date_filed_data, date_filed_color } = v
                    const dateStyleData = {
                        '--titleColor': ColorCallBack(date_color, date_deg),
                        fontSize: date_size,
                        fontFamily: date_family,
                        fontWeight: date_weight,
                        fontStyle: date_style,
                        filter: SetFilderParams(date_filed, date_filed_data, date_filed_color),
                    }
                    return <div key={i} style={dateStyleData}>{dayjs(Date).format(date_format)}</div>
                })}
            </div>
        )
    }
}

export const NavTemplate = ({ status, styleData, navList, extra, extraJugde, extraList }) => {
    const { pathname } = useLocation()
    const Navigate = useNavigate()



    const { nav_level, nav_type, nav_typeModel, nav_typePower, nav_typeNumber, nav_position, nav_width, nav_height, nav_top, nav_right, nav_bottom, nav_left,
        nav_item_width, nav_item_height, nav_item_padding, nav_item_margin, nav_align_items, nav_align_content, nav_justify_content,
        nav_flex_direction, nav_flex_wrap, nav_back_type, nav_back_color, nav_back_deg, nav_back_url, nav_back_obj,
        nav_default_color, nav_default_deg, nav_default_size, nav_default_family, nav_default_weight, nav_default_style,
        nav_default_filed, nav_default_filed_size, nav_default_filed_color,
        nav_active_color, nav_active_deg, nav_active_size, nav_active_family, nav_active_weight, nav_active_style,
        nav_active_filed, nav_active_filed_size, nav_active_filed_color,
        nav_active_back, nav_active_url, nav_start
    } = styleData

    const [DataList, setDataList] = useState([])
    const [Active, setActive] = useState()

    const findParent = (data, id) => {
        const obj = data.find(c => c.nav_url === id) || data.find(p => p.start_navTwo?.some(c => c.two_url === id))
        return obj || null
    };

    useEffect(() => {
        const renderNavList = () => {
            if (extra && pathname.split('/').at(2)) {
                const isExtra1 = findInTree(extraList, v => v.nav_url === pathname.split('/').at(2))
                const isExtra2 = findInTree(extraList, v => v.two_url === pathname.split('/').at(2), 'start_navTwo')
                if (isExtra1 || isExtra2) return extraList
                else return navList
            }
            return navList
        }

        if (nav_level === "A01") {
            setDataList(renderNavList())
            const obj = findParent(renderNavList(), pathname.split('/').at(2))
            if (obj) setActive(obj?.nav_url || '')
        }
        if (nav_level === "A02") {
            if (status) {
                setDataList(renderNavList().find(item => item.nav_isChild && item.start_navTwo?.length)?.start_navTwo)
            } else {
                const obj = findParent(renderNavList(), pathname.split('/').at(2))
                setDataList()
                setActive()
                if (obj?.nav_isChild) {
                    setDataList(obj.start_navTwo)
                    setActive(pathname.split('/').at(2))
                }
            }
        }

        if (pathname === '/Start') setActive()
    }, [pathname])

    if (nav_type !== 'A02') return false

    const navStyle = {
        '--alignItems': nav_align_items,
        '--alignContent': nav_align_content,
        '--justifyContent': nav_justify_content,
        '--flexDirection': nav_flex_direction,
        '--flexWrap': nav_flex_wrap,
    }
    if (nav_position === 'top') {
        navStyle.top = nav_top
        navStyle.right = nav_right
        navStyle.left = nav_left
        navStyle.height = nav_height
    }
    if (nav_position === 'right') {
        navStyle.top = nav_top
        navStyle.bottom = nav_bottom
        navStyle.left = nav_left
        navStyle.width = nav_width

    }
    if (nav_position === 'bottom') {
        navStyle.right = nav_right
        navStyle.bottom = nav_bottom
        navStyle.left = nav_left
        navStyle.height = nav_height
    }
    if (nav_position === 'left') {
        navStyle.top = nav_top
        navStyle.bottom = nav_bottom
        navStyle.left = nav_left
        navStyle.width = nav_width
    }
    const itemStyle = {
        width: nav_item_width,
        height: nav_item_height,
        padding: SpacingCallBack(nav_item_padding),
        margin: SpacingCallBack(nav_item_margin),
    }
    const itemDefaultStyle = {
        '--titleColor': ColorCallBack(nav_default_color, nav_default_deg),
        fontSize: nav_default_size,
        fontFamily: nav_default_family,
        fontWeight: nav_default_weight,
        fontStyle: nav_active_style,
        filter: SetFilderParams(nav_default_filed, nav_default_filed_size, nav_default_filed_color),
    }
    const itemActiveStyle = {
        '--titleColor': ColorCallBack(nav_active_color, nav_active_deg),
        fontSize: nav_active_size,
        fontFamily: nav_active_family,
        fontWeight: nav_active_weight,
        fontStyle: nav_default_style,
        filter: SetFilderParams(nav_active_filed, nav_active_filed_size, nav_active_filed_color),
    }


    const onClick = v => {
        if (status) return false
        const { nav_url, nav_isChild, start_navTwo, two_url } = v
        if (nav_isChild) Navigate(`/Start/${start_navTwo[0].two_url}`)
        else if (two_url) Navigate(`/Start/${two_url}`)
        else Navigate(`/Start/${nav_url}`)
    }

    if (((nav_start) || (status !== '/Start' && pathname !== '/Start')) && DataList) {
        if (nav_typeModel === 'A01') {
            return (
                <div className={`NavListBox ${nav_level}`} style={navStyle}>
                    {DataList.map((v, i) => {
                        const Status = Active === v[navMapping[nav_level].value]
                        const admin = status ? i === 0 : false
                        return (
                            <div className='NavItem' key={v[navMapping[nav_level].value]} style={itemStyle} onClick={() => onClick(v)}>
                                <div style={(Status || admin) ? itemActiveStyle : itemDefaultStyle}>{v[navMapping[nav_level].label]}</div>
                                {nav_active_back && (Status || admin) && <img src={nav_active_url} alt="nav_active_url" />}
                            </div>
                        )
                    })}
                    <div className='Back'>
                        {nav_back_type === 'color' && <div style={{ background: ColorCallBack(nav_back_color, nav_back_deg) }} />}
                        {nav_back_type === 'image' && <img style={{ objectFit: nav_back_obj }} src={nav_back_url} alt="nav_back_url" />}
                    </div>
                </div>
            )
        }
        if (nav_typeModel === 'A02') {
            const newNav = splitArrayEvenly(DataList, nav_typePower === 'A01')
            newNav.splice(1, 0, { type: 'empty', width: nav_typeNumber })
            return (
                <div className={`NavListBox A02 ${nav_level}`} style={navStyle}>
                    {newNav.map((item, index) => {
                        if (Array.isArray(item)) {
                            return item.map((v, i) => {
                                const Status = Active === v[navMapping[nav_level].value]
                                const admin = status ? index === 0 && i === 0 : false
                                return (
                                    <div className='NavItem' key={v[navMapping[nav_level].value]} style={itemStyle} onClick={() => onClick(v)}>
                                        <div style={(Status || admin) ? itemActiveStyle : itemDefaultStyle}>{v[navMapping[nav_level].label]}</div>
                                        {nav_active_back && (Status || admin) && <img src={nav_active_url} alt="nav_active_url" />}
                                    </div>
                                )
                            })
                        } else return <div className='NavItemEmpty' key='empty' style={{ flex: 1 }} />
                    })}
                </div>
            )
        }
    }
}

const options = [{ label: '首页', value: '/Start' }, { label: '页面', value: '/Start/Page' }]

export const WinTemplate = ({ Config, startType, setStartType, children }) => {
    const tableBox = useRef(null)
    const size = useSize(tableBox)
    const [key, setKey] = useState(['111'])

    const { win_back_border, win_back_border_color, win_back_border_size, win_back_border_type,
        win_back_color, win_back_deg, win_back_filter, win_back_filter_size,
        win_color, win_deg, win_family, win_size, win_index, win_style, win_weight, win_filed, win_filed_data, win_filed_color,
        win_title, win_height, win_url, win_imageA01, win_imageA02, window_titleTxt, window_backImg, window_backImgUrl,
        win_image_status, win_image_list
    } = Config
    const winTitleStyle = {
        '--titleColor': ColorCallBack(win_color, win_deg),
        fontSize: win_size,
        fontFamily: win_family,
        fontWeight: win_weight,
        fontStyle: win_style,
        textIndent: win_index,
        filter: SetFilderParams(win_filed, win_filed_data, win_filed_color),
    }
    const winBoxStyle = {
        background: ColorCallBack(win_back_color, win_back_deg),
        border: SetBorderParams(win_back_border, win_back_border_size, win_back_border_type, win_back_border_color),
        backdropFilter: win_back_filter ? `blur(${win_back_filter_size}px)` : 'none'
    }

    return (
        <div className='SmallWindowBox '>
            <div className='Title' style={{ height: win_height, '--img1': win_imageA01 + 'px', '--img3': win_imageA02 + 'px' }}>
                <div style={winTitleStyle}>{startType && setStartType ? win_title : window_titleTxt}</div>
                <div>{Array.from({ length: 3 }, (_, i) => (<img key={i} src={win_url + `0${i + 1}.png`} alt="win_imageA01" />))}</div>
            </div>
            <div className='WinBox' style={winBoxStyle}>
                {window_backImg && <img className='WinBackImg' src={window_backImgUrl} alt="window_backImgUrl" />}
                {startType && setStartType ? (() => {
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
                    } = Config


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
                        <div className='ConfigPage'  >
                            <Radio.Group
                                options={options}
                                defaultValue={startType}
                                optionType="button"
                                buttonStyle="solid"
                                onChange={(e) => setStartType(e.target.value)}
                            />
                            <div className='TableStyle' style={SearchStyle}>
                                <ProTable
                                    columns={columns}
                                    rowKey="key"
                                    pagination={{ showSizeChanger: true }}
                                    tableRender={(_, dom) => (
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
                                    )}
                                    tableExtraRender={(_, dom) => (
                                        <Card className='TableExtra' style={cardStyle}>
                                            <Descriptions size="small" column={table_card_number}>
                                                <Descriptions.Item label="实例数">{dom.length}</Descriptions.Item>
                                                <Descriptions.Item label="负责人">饕餮</Descriptions.Item>
                                                <Descriptions.Item label="关联项目">智慧云平台</Descriptions.Item>
                                                <Descriptions.Item label="创建时间">2024-01-10</Descriptions.Item>
                                                <Descriptions.Item label="上线时间">2024-01-15</Descriptions.Item>
                                            </Descriptions>
                                        </Card>
                                    )}
                                    params={{ key }}
                                    request={async () => ({ success: true, data: tableListDataSource })}
                                    dateFormatter="string"
                                    headerTitle="自定义表格主体"
                                    scroll={{ x: 400, y: size?.height - 167 || 400 }}
                                />
                            </div>
                        </div>
                    )
                })() : children}

                {win_image_status && win_image_list.map((v, i) => {
                    const Style = {
                        width: UnitCallBack(v.back_widthUnit, v.width),
                        height: UnitCallBack(v.back_heightUnit, v.height),
                        transform: `rotate3d(${v.rotate}) `
                    }
                    const positionMap = {
                        'top-left': { top: v.back_top, right: null, bottom: null, left: v.back_lef, topUnit: v.back_topUnit, leftUnit: v.back_lefUnit },
                        'top-right': { top: v.back_top, right: v.back_rig, bottom: null, left: null, topUnit: v.back_topUnit, rightUnit: v.back_rigUnit },
                        'bottom-left': { top: null, right: null, bottom: v.back_btm, left: v.back_lef, bottomUnit: v.back_btmUnit, leftUnit: v.back_lefUnit },
                        'bottom-right': { top: null, right: v.back_rig, bottom: v.back_btm, left: null, bottomUnit: v.back_btmUnit, rightUnit: v.back_rigUnit },
                    };
                    const posConfig = positionMap[v.back_position];
                    Object.entries(posConfig).forEach(([key, value]) => {
                        if (value !== null) {
                            if (key.endsWith('Unit')) return
                            const unitKey = key + 'Unit'
                            const unit = posConfig[unitKey]
                            Style[key] = unit === 'pct' ? `${value}%` : value + unit
                        }
                    })
                    return (
                        <img className='WinBoxBackImage' key={i} src={v.image_url} alt={v.image_url} style={Style} />
                    )
                })}
            </div>
        </div>
    )
}