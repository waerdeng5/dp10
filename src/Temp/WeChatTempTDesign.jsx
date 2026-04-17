import './WeChatTempTDesign.scss'

import { Icon } from 'tdesign-icons-react'
import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, SetShadowParams } from '../Utils'
import { WeChatFormInit } from '../Config/wechatDefault'


const navList = [
    { uuid: 1, title: '演示', icon: 'ai' },
    { uuid: 2, title: '安全', icon: 'robot-1' },
    { uuid: 3, title: '智慧', icon: 'cart' },
]
const WeChatTempTDesignTabs = ({ styleData }) => {
    const config = styleData || WeChatFormInit.WeChatTempTDesignTabs
    const {
        TDtabs_icon, TDtabs_height, TDtabs_back, TDtabs_type,
        TDtabs_line_split, TDtabs_line_active, TDtabs_line_actType, TDtabs_line_actColor,  // 标准导航
        TDtabs_tag_split, TDtabs_tag_def_back, TDtabs_tag_act_back, TDtabs_card_act_back,
        TDtabs_def_icon_size, TDtabs_def_icon_color, TDtabs_def_icon_margin,  // 默认图标
        TDtabs_act_icon_size, TDtabs_act_icon_color, TDtabs_act_icon_margin,  // 激活图标
        TDtabs_def_text_color, TDtabs_def_text_size, TDtabs_def_text_famity, TDtabs_def_text_weight, TDtabs_def_text_style,
        TDtabs_def_text_filed, TDtabs_def_text_filed_size, TDtabs_def_text_filed_color,
        TDtabs_act_text_color, TDtabs_act_text_size, TDtabs_act_text_famity, TDtabs_act_text_weight, TDtabs_act_text_style,
        TDtabs_act_text_filed, TDtabs_act_text_filed_size, TDtabs_act_text_filed_color,
    } = config

    const navStyle = {
        height: SpacingCallBack(TDtabs_height),
        background: TDtabs_back,
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

    return (
        <div className="WeChatTempTDesignTabs">
            {(() => {
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
                    return (
                        <div className='nav card' style={navStyle}>
                            {navList.map(v => {
                                const status = v.uuid === 2
                                return (
                                    <div key={v.uuid} style={{ background: status ? TDtabs_card_act_back : 'transparent' }}>
                                        {TDtabs_icon && <Icon name={v.icon} style={status ? iconAct : iconDef} />}
                                        <div style={status ? navTextAlt : navTextDef}>{v.title}</div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
            })()}
        </div>
    );
};


const imageCdn = 'https://tdesign.gtimg.com/mobile/demos'
const swiperList = [
    `${imageCdn}/swiper1.png`,
    `${imageCdn}/swiper2.png`,
    `${imageCdn}/swiper1.png`,
    `${imageCdn}/swiper2.png`,
    `${imageCdn}/swiper1.png`,
]
const WeChatTempTDesignSwiper = ({ styleData }) => {
    const config = styleData || WeChatFormInit.WeChatTempTDesignSwiper

    const { backgroun, backDeg, padding, number, direction, controls, autoplay, loop, duration, interval, previous, next, easing, image, pagination, paginationType } = config


    const backStyle = {
        background: ColorCallBack(backgroun, backDeg),
        padding: SpacingCallBack(padding)
    }



    return (
        <div className='WeChatTempTDesignSwiper' style={backStyle}>
            <div className="swiper">
                {/* 分页器 */}
            </div>
        </div>
    )
}



export const WeChatTempTDesign = {
    WeChatTempTDesignTabs: {
        type: 'WeChatTempTDesignTabs',
        title: '选项卡-Tabs',
        temp: WeChatTempTDesignTabs,
        layout: { x: 0, y: 0, w: 10, h: 5 },
    },
    WeChatTempTDesignSwiper: {
        type: 'WeChatTempTDesignSwiper',
        title: '轮播图-Swiper',
        temp: WeChatTempTDesignSwiper,
        layout: { x: 0, y: 0, w: 10, h: 20 },
    },
}