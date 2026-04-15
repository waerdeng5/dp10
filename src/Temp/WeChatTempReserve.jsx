import './WeChatTempReserve.scss'


import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, SetShadowParams } from '../Utils'
import { WeChatFormInit } from '../Config/wechatDefault'


const WeChatTempReserveA01 = ({ styleData }) => {
    const config = styleData || WeChatFormInit.WeChatTempReserveA01
    const { resA01_padding, resA01_back, resA01_BkColor, resA01_BkDeg, resA01_BkImage, resA01_BkMode,
        resA01_radius, resA01_filed, resA01_filed_size, resA01_filed_color, resA01_text, resA01_click,
        align_items, align_content, justify_content, flex_direction, flex_wrap, textList
    } = config



    const backStyle = {
        width: '100%',
        height: styleData ? '100%' : 190,
        padding: SpacingCallBack(resA01_padding),
        cursor: resA01_click ? 'pointer' : 'default',
    }

    const textStyle = {
        '--alignItems': align_items,
        '--alignContent': align_content,
        '--justifyContent': justify_content,
        '--flexDirection': flex_direction,
        '--flexWrap': flex_wrap,
    }

    const colorStyle = {
        background: ColorCallBack(resA01_BkColor, resA01_BkDeg),
        borderRadius: SpacingCallBack(resA01_radius),
        filter: SetFilderParams(resA01_filed, resA01_filed_size, resA01_filed_color)
    }

    const imageStyle = {
        borderRadius: SpacingCallBack(resA01_radius),
        filter: SetFilderParams(resA01_filed, resA01_filed_size, resA01_filed_color)
    }


    return (
        <div className='WeChatTempReserveA01' style={backStyle} >
            {resA01_back === 'color' && <div className='color' style={colorStyle} />}
            {resA01_back === 'image' && <img className='image' style={imageStyle} src={resA01_BkImage} alt={resA01_BkMode} />}
            {resA01_text && textList.length !== 0 &&
                <div className='text' style={textStyle}>
                    {textList.map((v, i) => {
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
                            margin: SpacingCallBack(padding),
                            filter: SetFilderParams(filed, filed_size, filed_color)
                        }
                        return (<div key={i} style={textStyle}>{text}</div>)
                    })}
                </div>
            }
        </div>
    )
}



export const WeChatTempReserve = {
    WeChatTempReserveA01: {
        type: 'WeChatTempReserveA01',
        title: '通用预留占位',
        temp: WeChatTempReserveA01,
        layout: { x: 0, y: 0, w: 10, h: 5 },
    }
}