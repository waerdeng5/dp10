
import './WeChatTempListType.scss';
import { WeChatFormInit } from '../Config/wechatDefault'
import { ColorCallBack, SpacingCallBack, SpacingSizeCallBack, SetFilderParams, SetBorderParams, SetShadowParams } from '../Utils'

const WeChatTempListTypeA01 = ({ styleData }) => {
    const config = styleData || WeChatFormInit.WeChatTempListTypeA01
    const {
        A01_padding, A01_margin, A01_radius, A01_background, A01_backDeg, A01_left, A01_right, A01_bottom,
        A01_title_size, A01_title_color, A01_title_deg, A01_title_famity, A01_title_weight, A01_title_style,
        A01_title_filed, A01_title_filed_size, A01_title_filed_color,
        A01_left_size, A01_left_color, A01_left_famity, A01_left_weight, A01_left_style,
        A01_right_size, A01_right_color, A01_right_famity, A01_right_weight, A01_right_style,
        A01_border, A01_border_size, A01_border_type, A01_border_color,
    } = config

    const backStyle = {
        width: SpacingSizeCallBack(A01_margin, 100),
        background: ColorCallBack(A01_background, A01_backDeg),
        borderRadius: SpacingCallBack(A01_radius),
        padding: SpacingCallBack(A01_padding),
        margin: SpacingCallBack(A01_margin),
        borderBottom: SetBorderParams(A01_bottom, A01_border_size, A01_border_type, A01_border_color),
    }

    const titleStyle = {
        '--color': ColorCallBack(A01_title_color, A01_title_deg),
        fontSize: A01_title_size,
        lineHeight: A01_title_size + 'px',
        fontFamily: A01_title_famity,
        fontWeight: A01_title_weight,
        fontStyle: A01_title_style,
        filter: SetFilderParams(A01_title_filed, A01_title_filed_size, A01_title_filed_color)
    }

    const leftStyle = {
        color: A01_left_color,
        fontSize: A01_left_size,
        fontFamily: A01_left_famity,
        fontWeight: A01_left_weight,
        fontStyle: A01_left_style,
    }

    const rightStyle = {
        color: A01_right_color,
        fontSize: A01_right_size,
        fontFamily: A01_right_famity,
        fontWeight: A01_right_weight,
        fontStyle: A01_right_style,
    }

    return (
        <div className='WeChatTempListTypeA01' style={{ '--noneBorder': A01_border ? 'none' : '' }}>
            {[...Array(2)].map((_, i) => {
                return (
                    <div className='list' key={i} style={backStyle}>
                        <div className='title' style={titleStyle}>列表标题内容.例:文章标题,数据摘要,信息汇总等等信息</div>
                        <div className='text'>
                            <div style={leftStyle}>{A01_left && '左标签'} </div>
                            <div style={rightStyle}>{A01_right && '右标签'}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const WeChatTempListTypeA02 = () => {
    return (
        <div className='WeChatTempListTypeA02'>
            一号列表
        </div>
    );
};

export const WeChatTempListType = {
    WeChatTempListTypeA01: {
        title: '默认列表',
        temp: WeChatTempListTypeA01
    },
    WeChatTempListTypeA02: {
        title: '多字段列表',
        temp: WeChatTempListTypeA02
    },
}