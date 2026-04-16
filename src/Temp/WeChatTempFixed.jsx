import './WeChatTempFixed.scss'

import { Icon } from 'tdesign-icons-react'
import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, SetShadowParams } from '../Utils'
import { WeChatFormInit } from '../Config/wechatDefault'
import { DevScrollView } from '../Temp/DevTemplate'


const navList = [
    { uuid: 1, title: '演示', icon: 'ai' },
    { uuid: 2, title: '安全', icon: 'robot-1' },
    { uuid: 3, title: '智慧', icon: 'cart' },
]


const WeChatTempFixedA01 = ({ styleData }) => {
    const config = styleData || WeChatFormInit.WeChatTempFixedA01

    const {
        fixedA01_margin, fixedA01_padding, fixedA01_nav, fixedA01_title,
        TDtabs_icon, TDtabs_height, TDtabs_back, TDtabs_backDeg, TDtabs_type,
        TDtabs_line_split, TDtabs_line_active, TDtabs_line_actType, TDtabs_line_actColor,  // 标准导航
        TDtabs_tag_split, TDtabs_tag_def_back, TDtabs_tag_act_back, TDtabs_card_def_back, TDtabs_card_act_back,
        TDtabs_def_icon_size, TDtabs_def_icon_color, TDtabs_def_icon_margin,  // 默认图标
        TDtabs_act_icon_size, TDtabs_act_icon_color, TDtabs_act_icon_margin,  // 激活图标
        TDtabs_def_text_color, TDtabs_def_text_size, TDtabs_def_text_famity, TDtabs_def_text_weight, TDtabs_def_text_style,
        TDtabs_def_text_filed, TDtabs_def_text_filed_size, TDtabs_def_text_filed_color,
        TDtabs_act_text_color, TDtabs_act_text_size, TDtabs_act_text_famity, TDtabs_act_text_weight, TDtabs_act_text_style,
        TDtabs_act_text_filed, TDtabs_act_text_filed_size, TDtabs_act_text_filed_color,
        fixedA01_title_empty, fixedA01_title_height, fixedA01_title_margin,
        fixedA01_title_empty_width, fixedA01_title_empty_height, fixedA01_title_empty_margin, fixedA01_title_empty_color,
        fixedA01_title_zh_color, fixedA01_title_zh_size, fixedA01_title_zh_famity, fixedA01_title_zh_weight, fixedA01_title_zh_style, fixedA01_title_zh_margin,
        fixedA01_title_en_color, fixedA01_title_en_size, fixedA01_title_en_famity, fixedA01_title_en_weight, fixedA01_title_en_style, fixedA01_title_en_margin,
        menu_style_number, menu_style_spacing, menu_style_height, menu_style_margin, menu_style_text_margin, menu_style_text_size,
        menu_style_text_color, menu_style_text_deg, menu_style_text_famity, menu_style_text_weight, menu_style_text_style,
        menu_style_text_filed, menu_style_text_filed_size, menu_style_text_filed_color,
        menu_style_theme_left, menu_style_theme_bottom, menu_style_theme_width, menu_style_theme_height,
        MenuGroup
    } = config




    const backStyle = {
        padding: SpacingCallBack(fixedA01_padding),
        margin: SpacingCallBack(fixedA01_margin),
    }
    const navStyle = {
        height: SpacingCallBack(TDtabs_height),
        background: ColorCallBack(TDtabs_back, TDtabs_backDeg),
    }
    const iconDef = {
        fontSize: TDtabs_def_icon_size,
        margin: SpacingCallBack(TDtabs_def_icon_margin),
        color: TDtabs_def_icon_color,
    }
    const iconAct = {
        fontSize: TDtabs_act_icon_size,
        margin: SpacingCallBack(TDtabs_act_icon_margin),
        color: TDtabs_act_icon_color,
    }
    const navTextDef = {
        color: TDtabs_def_text_color,
        fontSize: TDtabs_def_text_size,
        height: TDtabs_def_text_size,
        lineHeight: TDtabs_def_text_size + 'px',
        fontFamily: TDtabs_def_text_famity,
        fontWeight: TDtabs_def_text_weight,
        fontStyle: TDtabs_def_text_style,
        filter: SetFilderParams(TDtabs_def_text_filed, TDtabs_def_text_filed_size, TDtabs_def_text_filed_color)
    }
    const navTextAlt = {
        color: TDtabs_act_text_color,
        fontSize: TDtabs_act_text_size,
        height: TDtabs_act_text_size,
        lineHeight: TDtabs_act_text_size + 'px',
        fontFamily: TDtabs_act_text_famity,
        fontWeight: TDtabs_act_text_weight,
        fontStyle: TDtabs_act_text_style,
        filter: SetFilderParams(TDtabs_act_text_filed, TDtabs_act_text_filed_size, TDtabs_act_text_filed_color)
    }
    const navTitleStyle = {
        height: fixedA01_title_height,
        margin: SpacingCallBack(fixedA01_title_margin),
    }
    const titleEmpty = {
        width: fixedA01_title_empty_width,
        height: fixedA01_title_empty_height,
        margin: SpacingCallBack(fixedA01_title_empty_margin),
        background: fixedA01_title_empty_color,
    }
    const zhStyle = {
        margin: SpacingCallBack(fixedA01_title_zh_margin),
        color: fixedA01_title_zh_color,
        height: fixedA01_title_zh_size,
        lineHeight: fixedA01_title_zh_size + 'px',
        fontSize: fixedA01_title_zh_size,
        fontFamily: fixedA01_title_zh_famity,
        fontWeight: fixedA01_title_zh_weight,
        fontStyle: fixedA01_title_zh_style,
    }
    const enStyle = {
        margin: SpacingCallBack(fixedA01_title_en_margin),
        color: fixedA01_title_en_color,
        height: fixedA01_title_en_size,
        lineHeight: fixedA01_title_en_size + 'px',
        fontSize: fixedA01_title_en_size,
        fontFamily: fixedA01_title_en_famity,
        fontWeight: fixedA01_title_en_weight,
        fontStyle: fixedA01_title_en_style,
    }
    const menuStyle = {
        width: `calc(100% / ${menu_style_number} - ${menu_style_spacing}px)`,
        height: menu_style_height,
        margin: SpacingCallBack(menu_style_margin),
    }

    const menuTextStyle = {
        '--color': ColorCallBack(menu_style_text_color, menu_style_text_deg),
        margin: SpacingCallBack(menu_style_text_margin),
        fontSize: menu_style_text_size,
        height: menu_style_text_size,
        lineHeight: menu_style_text_size + 'px',
        fontFamily: menu_style_text_famity,
        fontWeight: menu_style_text_weight,
        fontStyle: menu_style_text_style,
        fitler: SetFilderParams(menu_style_text_filed, menu_style_text_filed_size, menu_style_text_filed_color),
        '--left': menu_style_theme_left + 'px',
        '--bottom': menu_style_theme_bottom + 'px',
        '--width': menu_style_theme_width + 'px',
        '--height': menu_style_theme_height + 'px',
    }



    return (
        <div className='WeChatTempFixedA01' style={backStyle}>
            {fixedA01_nav && (() => {
                if (TDtabs_type === 'line') { // 标准导航
                    TDtabs_line_split && (navStyle.borderBottom = '1px solid #e5e5e5')
                    const widthMapping = { fixed: '40px', auto: '50%', full: '100%' }
                    return (
                        <div className='nav line' style={navStyle}>
                            {navList.map(v => {
                                const status = v.uuid === 2
                                return (
                                    <div key={v.uuid}>
                                        {TDtabs_icon && <Icon name={v.icon} style={status ? iconAct : iconDef} />}
                                        <div style={status ? navTextAlt : navTextDef}>{v.title}</div>
                                        {status && TDtabs_line_active &&
                                            <div className='lineAct' style={{ width: widthMapping[TDtabs_line_actType], background: TDtabs_line_actColor }} />
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
                if (TDtabs_type === 'tag') { // 标签导航
                    TDtabs_tag_split && (navStyle.borderBottom = '1px solid #e5e5e5')
                    return (
                        <div className='nav tag' style={navStyle}>
                            {navList.map(v => {
                                const status = v.uuid === 2
                                return (
                                    <div key={v.uuid}>
                                        <div style={{ background: status ? TDtabs_tag_act_back : TDtabs_tag_def_back }}>
                                            {TDtabs_icon && <Icon name={v.icon} style={status ? iconAct : iconDef} />}
                                            <div style={status ? navTextAlt : navTextDef}>{v.title}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
                if (TDtabs_type === 'card') {// 卡片导航
                    TDtabs_card_def_back, TDtabs_card_act_back
                    return (
                        <div className='nav card' style={navStyle}>
                            {navList.map(v => {
                                const status = v.uuid === 2
                                return (
                                    <div key={v.uuid} style={{ background: status ? TDtabs_card_act_back : TDtabs_card_def_back }}>
                                        {TDtabs_icon && <Icon name={v.icon} style={status ? iconAct : iconDef} />}
                                        <div style={status ? navTextAlt : navTextDef}>{v.title}</div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
            })()}
            <DevScrollView>
                <div className='navList'>
                    {MenuGroup.map((v, i) => {
                        return (
                            <div key={i}>
                                {fixedA01_title &&
                                    <div className='title' style={navTitleStyle}>
                                        {fixedA01_title_empty && <div style={titleEmpty} />}
                                        <div style={zhStyle}>{v.groupZh}</div>
                                        {v.groupCn && <div style={enStyle}>{v.groupCn}</div>}
                                    </div>
                                }
                                <div className='menuList'>
                                    {v.GroupList.map((e, k) => {
                                        return (
                                            <div key={k} style={{ '--after': v.groupTheme, ...menuStyle }}>
                                                <div style={menuTextStyle}>{e.title}</div>
                                                <img src={e.image} alt="" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </DevScrollView>
        </div>
    )
}

export const WeChatTempFixed = {
    WeChatTempFixedA01: {
        type: 'WeChatTempFixedA01',
        title: '固定累组件',
        temp: WeChatTempFixedA01,
        layout: { x: 0, y: 0, w: 10, h: 5, minW: 10, maxW: 10 },
    }
}