import './WeChatTempTitle.scss'
import { Icon } from 'tdesign-icons-react'
import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, SetShadowParams } from '../Utils'

import { WeChatFormInit } from '../Config/wechatDefault'

const WeChatTempTitleA01 = ({ styleData }) => {
    const config = styleData || WeChatFormInit.WeChatTempTitleA01
    const { height, radius, padding, margin, backgroun, backDeg, textList, after, options,
        border, borderSize, borderType, borderColor, shadow, shadowSize, shadowType, shadowColor,
        align_items, align_content, justify_content, flex_direction, flex_wrap,
        afterBack, afterDeg, afterWidth, afterHeight, afterMargin, afterRadius, after_filed, after_filed_size, after_filed_color,
        options_type, options_A01Text, options_A02Text, options_A02Url, options_A03Text, options_A03Api, options_A03Par,
        options_icon, options_align_items, options_align_content, options_justify_content, options_flex_direction, options_flex_wrap,
        options_icon_url, options_icon_margin, options_icon_size, options_icon_color,
        options_padding, options_size, options_color, options_deg, options_famity, options_weight, options_style,
        options_filed, options_filed_size, options_filed_color
    } = config

    const boxStyle = {
        height,
        borderRadius: SpacingCallBack(radius),
        margin: SpacingCallBack(margin),
        padding: SpacingCallBack(padding),
        background: ColorCallBack(backgroun, backDeg),
        border: SetBorderParams(border, borderSize, borderType, borderColor),
        boxShadow: SetShadowParams(shadow, shadowSize, shadowColor, shadowType),
    }

    const titleStyle = {
        '--alignItems': align_items,
        '--alignContent': align_content,
        '--justifyContent': justify_content,
        '--flexDirection': flex_direction,
        '--flexWrap': flex_wrap,
    }

    const afterStyle = {
        background: ColorCallBack(afterBack, afterDeg),
        width: afterWidth,
        height: afterHeight,
        borderRadius: SpacingCallBack(afterRadius),
        margin: SpacingCallBack(afterMargin),
        filter: SetFilderParams(after_filed, after_filed_size, after_filed_color)
    }

    const optionsText = {
        A01: options_A01Text,
        A02: options_A02Text,
        A03: options_A03Text,
    }

    const optionsStyle = {
        '--alignItems': options_align_items,
        '--alignContent': options_align_content,
        '--justifyContent': options_justify_content,
        '--flexDirection': options_flex_direction,
        '--flexWrap': options_flex_wrap,
    }

    const optionIcon = {
        margin: SpacingCallBack(options_icon_margin),
        fontSize: options_icon_size,
        color: options_icon_color,
    }

    const optinsTitle = {
        '--color': ColorCallBack(options_color, options_deg),
        fontSize: options_size,
        height: options_size,
        lineHeight: options_size + 'px',
        fontFamily: options_famity,
        fontWeight: options_weight,
        fontStyle: options_style,
        padding: SpacingCallBack(options_padding),
        filter: SetFilderParams(options_filed, options_filed_size, options_filed_color)
    }

    return (
        <div className='WeChatTempTitleA01' style={boxStyle} >
            {after && <div className='after' style={afterStyle} />}
            <div className='title' style={titleStyle}>
                {textList?.map((v, i) => {
                    const { uppercase, text, padding, size, color, deg, famity, weight, style, filed, filed_size, filed_color } = v
                    const textStyle = {
                        '--color': ColorCallBack(color, deg),
                        fontSize: size,
                        height: size,
                        lineHeight: size + 'px',
                        fontFamily: famity,
                        fontWeight: weight,
                        fontStyle: style,
                        textTransform: uppercase ? "uppercase" : "none",
                        padding: SpacingCallBack(padding),
                        filter: SetFilderParams(filed, filed_size, filed_color)
                    }
                    return (
                        <div key={i} style={textStyle}>{text}</div>
                    )
                })}
            </div>
            {options &&
                <div className='options' style={optionsStyle}>
                    {options_icon && <Icon style={optionIcon} name={options_icon_url || 'ai-1-filled'} />}
                    <div className='optionText' style={optinsTitle}>{optionsText[options_type]}</div>
                </div>
            }
        </div>
    );
};


export const WeChatTempTitle = {
    WeChatTempTitleA01: {
        type: 'WeChatTempTitleA01',
        title: '通用标题模块',
        temp: WeChatTempTitleA01,
        layout: { x: 0, y: 0, w: 10, h: 5 },
    }
}