import './WeChatTempUserInfo.scss'
import { Icon } from 'tdesign-icons-react'
import { WeChatFormInit } from '../Config/wechatDefault'
import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, SetShadowParams, SpacingSizeCallBack } from '../Utils'


const WeChatTempUserInfoA01 = ({ styleData }) => {
    const config = styleData || WeChatFormInit.WeChatTempUserInfoA01

    const { back_align_items, back_align_content, back_justify_content, back_flex_direction, back_flex_wrap,
        back_padding, back_margin, back_radius, back_color, back_deg, avatar, options, renderList,
        back_shadow, back_shadowSize, back_shadowColor, back_shadowType,
        back_border, back_borderSize, back_borderType, back_borderColor,
        avatar_width, avatar_height, avatar_radius, avatar_margin,
        avatar_shadow, avatar_shadowSize, avatar_shadowColor, avatar_shadowType,
        avatar_border, avatar_borderSize, avatar_borderType, avatar_borderColor,
        options_url, options_size, options_color, options_margin,
        title, title_width, title_size, title_padding, title_color, title_famity, title_weight, title_style,
        text_size, text_padding, text_color, text_famity, text_weight, text_style,
    } = config


    const backStyle = {
        '--align-items': back_align_items,
        '--align-content': back_align_content,
        '--justify-content': back_justify_content,
        '--flex-direction': back_flex_direction,
        '--flex-wrap': back_flex_wrap,
        background: ColorCallBack(back_color, back_deg),
        padding: SpacingCallBack(back_padding),
        margin: SpacingCallBack(back_margin),
        borderRadius: SpacingCallBack(back_radius),
        height: SpacingSizeCallBack(back_margin, 100, true),
        boxShadow: SetShadowParams(back_shadow, back_shadowSize, back_shadowColor, back_shadowType),
        border: SetBorderParams(back_border, back_borderSize, back_borderType, back_borderColor),
    }

    const avatarStyle = {
        width: avatar_width,
        height: avatar_height,
        borderRadius: SpacingCallBack(avatar_radius),
        margin: SpacingCallBack(avatar_margin),
        boxShadow: SetShadowParams(avatar_shadow, avatar_shadowSize, avatar_shadowColor, avatar_shadowType),
        border: SetBorderParams(avatar_border, avatar_borderSize, avatar_borderType, avatar_borderColor),
    }

    const iconStyle = {
        fontSize: options_size,
        color: options_color,
        margin: SpacingCallBack(options_margin),
    }

    const titleStyle = {
        width: title_width,
        fontSize: title_size,
        lineHeight: title_size + 'px',
        padding: SpacingCallBack(title_padding),
        color: title_color,
        fontFamily: title_famity,
        fontWeight: title_weight,
        fontStyle: title_style,
    }
    const textStyle = {
        fontSize: text_size,
        lineHeight: text_size + 'px',
        padding: SpacingCallBack(text_padding),
        color: text_color,
        fontFamily: text_famity,
        fontWeight: text_weight,
        fontStyle: text_style,
    }

    return (
        <div className='WeChatTempUserInfoA01' style={backStyle}>
            {avatar &&
                <div className='avatar' style={avatarStyle}>
                    <img src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/images/unAvatar.webp" alt="" />
                </div>
            }
            <div className='name'>
                {renderList.map((v, i) => {
                    return (
                        <div key={i} >
                            {title && <div className='title' style={titleStyle}>{v.label}</div>}
                            <div className='text' style={textStyle}>{v.field}</div>
                        </div>
                    )
                })}
            </div>
            {options &&
                <div className='options'>
                    <Icon name={options_url} style={iconStyle} />
                </div>
            }
        </div>
    );
};

export const WeChatTempUserInfo = {
    WeChatTempUserInfoA01: {
        type: 'WeChatTempUserInfoA01',
        title: '通用个人信息',
        temp: WeChatTempUserInfoA01,
        layout: { x: 0, y: 0, w: 10, h: 5 },
    }

}