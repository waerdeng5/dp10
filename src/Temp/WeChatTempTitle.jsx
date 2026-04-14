import './WeChatTempTitle.scss'

import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, SetShadowParams } from '../Utils'

const WeChatTempTitleA01 = ({ styleData }) => {

    const { height, radius, padding, margin, backgroun, backDeg, textList,
        border, borderSize, borderType, borderColor, shadow, shadowSize, shadowType, shadowColor,
        align_items, align_content, justify_content, flex_direction, flex_wrap,
    } = styleData


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


    return (
        <div className='WeChatTempTitleA01' style={boxStyle} >
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
            <div className='options'>操作</div>
        </div>
    );
};

export const WeChatTempTitle = {
    WeChatTempTitleA01: {
        type: 'WeChatTempTitleA01',
        title: '通用标题模块',
        temp: WeChatTempTitleA01,
        layout: { x: 0, y: 0, w: 12, h: 2 },
    },
}