import './WeChatTempClockIn.scss'
import dayjs from 'dayjs'
import { Avatar } from 'antd'
import { Icon } from 'tdesign-icons-react'
import { WeChatFormInit } from '../Config/wechatDefault'
import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, SetShadowParams } from '../Utils'


const avatarMapping = {
    circle: 'circle',
    round: 'square',
}


const WeChatTempClockInA01 = ({ styleData }) => {
    const config = styleData || WeChatFormInit.WeChatTempClockInA01
    const r = () => Math.floor(Math.random() * 20 + 40) + '%'
    const animationData = [...Array(80)].reduce((acc, _, i) => {
        acc[`--r${i}`] = r()
        return acc
    }, {})

    const {
        ClockA01_user, ClockA01_user_back, ClockA01_user_deg, ClockA01_user_padding, ClockA01_user_margin, ClockA01_user_radius,
        ClockA01_user_border, ClockA01_user_border_size, ClockA01_user_border_type, ClockA01_user_border_color,
        ClockA01_user_shadow, ClockA01_user_shadow_size, ClockA01_user_shadow_color, ClockA01_user_shadow_type,
        ClockA01_user_avatar, ClockA01_user_avatar_size, ClockA01_user_avatar_padding, ClockA01_user_avatar_type,
        ClockA01_user_record, ClockA01_user_record_url, ClockA01_user_record_padding, ClockA01_user_record_color, ClockA01_user_record_size,
        ClockA01_user_nickName, ClockA01_user_nickName_color, ClockA01_user_nickName_padding, ClockA01_user_nickName_size,
        ClockA01_user_nickName_famity, ClockA01_user_nickName_weight, ClockA01_user_nickName_style,
        ClockA01_user_orgName, ClockA01_user_orgName_color, ClockA01_user_orgName_padding, ClockA01_user_orgName_size,
        ClockA01_user_orgName_famity, ClockA01_user_orgName_weight, ClockA01_user_orgName_style,
        ClockA01_back_back, ClockA01_back_deg, ClockA01_back_padding, ClockA01_back_margin, ClockA01_back_radius,
        ClockA01_back_border, ClockA01_back_border_size, ClockA01_back_border_type, ClockA01_back_border_color,
        ClockA01_back_shadow, ClockA01_back_shadow_size, ClockA01_back_shadow_color, ClockA01_back_shadow_type,
        ClockA01_last, ClockA01_last_border_size, ClockA01_last_border_type, ClockA01_last_border_color,
        ClockA01_last_title_color, ClockA01_last_title_padding, ClockA01_last_title_size,
        ClockA01_last_title_famity, ClockA01_last_title_weight, ClockA01_last_title_style,
        ClockA01_last_time_color, ClockA01_last_time_padding, ClockA01_last_time_size,
        ClockA01_last_time_famity, ClockA01_last_time_weight, ClockA01_last_time_style,
        ClockA01_last_address_color, ClockA01_last_address_padding, ClockA01_last_address_size,
        ClockA01_last_address_famity, ClockA01_last_address_weight, ClockA01_last_address_style,
        ClockA01_today_color, ClockA01_today_padding, ClockA01_today_size, ClockA01_today_famity, ClockA01_today_weight, ClockA01_today_style,
        ClockA01_address_color, ClockA01_address_padding, ClockA01_address_size, ClockA01_address_famity, ClockA01_address_weight, ClockA01_address_style,
        ClockA01_refresh, ClockA01_refresh_url, ClockA01_refresh_color, ClockA01_refresh_size,

        ClockA01_btn_back, ClockA01_btn_deg, ClockA01_btn_size, ClockA01_btn_radius,
        ClockA01_btn_border, ClockA01_btn_border_size, ClockA01_btn_border_type, ClockA01_btn_border_color,
        ClockA01_btn_shadow, ClockA01_btn_shadow_size, ClockA01_btn_shadow_color, ClockA01_btn_shadow_type,
        ClockA01_btn_filter, ClockA01_btn_filter_size, ClockA01_btn_filter_color,
        ClockA01_btn_animation, ClockA01_btn_animation_time,

        ClockA01_btn_text_label, ClockA01_btn_text_padding, ClockA01_btn_text_color, ClockA01_btn_text_deg,
        ClockA01_btn_text_size, ClockA01_btn_text_famity, ClockA01_btn_text_weight, ClockA01_btn_text_style,
        ClockA01_btn_text_filter, ClockA01_btn_text_filter_size, ClockA01_btn_text_filter_color,

        ClockA01_btn_text_time, ClockA01_btn_time_color, ClockA01_btn_time_deg, ClockA01_btn_time_padding,
        ClockA01_btn_time_size, ClockA01_btn_time_famity, ClockA01_btn_time_weight, ClockA01_btn_time_style,
        ClockA01_btn_time_filter, ClockA01_btn_time_filter_size, ClockA01_btn_time_filter_color,




    } = config

    const userStyle = {
        background: ColorCallBack(ClockA01_user_back, ClockA01_user_deg),
        padding: SpacingCallBack(ClockA01_user_padding),
        margin: SpacingCallBack(ClockA01_user_margin),
        borderRadius: SpacingCallBack(ClockA01_user_radius),
        border: SetBorderParams(ClockA01_user_border, ClockA01_user_border_size, ClockA01_user_border_type, ClockA01_user_border_color),
        boxShadow: SetShadowParams(ClockA01_user_shadow, ClockA01_user_shadow_size, ClockA01_user_shadow_color, ClockA01_user_shadow_type),
    }

    const avatarStyle = {
        size: ClockA01_user_avatar_size,
        shape: avatarMapping[ClockA01_user_avatar_type],
    }

    const recordStyle = {
        color: ClockA01_user_record_color,
        fontSize: ClockA01_user_record_size,
        padding: SpacingCallBack(ClockA01_user_record_padding),
    }

    const nickNameStyle = {
        color: ClockA01_user_nickName_color,
        padding: SpacingCallBack(ClockA01_user_nickName_padding),
        fontSize: ClockA01_user_nickName_size,
        lineHeight: ClockA01_user_nickName_size + 'px',
        fontFamily: ClockA01_user_nickName_famity,
        fontWeight: ClockA01_user_nickName_weight,
        fontStyle: ClockA01_user_nickName_style,
    }

    const orgNameStyle = {
        color: ClockA01_user_orgName_color,
        padding: SpacingCallBack(ClockA01_user_orgName_padding),
        fontSize: ClockA01_user_orgName_size,
        lineHeight: ClockA01_user_orgName_size + 'px',
        fontFamily: ClockA01_user_orgName_famity,
        fontWeight: ClockA01_user_orgName_weight,
        fontStyle: ClockA01_user_orgName_style,
    }

    const backStyle = {
        background: ColorCallBack(ClockA01_back_back, ClockA01_back_deg),
        padding: SpacingCallBack(ClockA01_back_padding),
        margin: SpacingCallBack(ClockA01_back_margin),
        borderRadius: SpacingCallBack(ClockA01_back_radius),
        border: SetBorderParams(ClockA01_back_border, ClockA01_back_border_size, ClockA01_back_border_type, ClockA01_back_border_color),
        boxShadow: SetShadowParams(ClockA01_back_shadow, ClockA01_back_shadow_size, ClockA01_back_shadow_color, ClockA01_back_shadow_type),
    }

    const lastBorderStyle = {
        borderTop: SetBorderParams(true, ClockA01_last_border_size, ClockA01_last_border_type, ClockA01_last_border_color),
    }

    const lastTitleStyle = {
        color: ClockA01_last_title_color,
        padding: SpacingCallBack(ClockA01_last_title_padding),
        fontSize: ClockA01_last_title_size,
        lineHeight: ClockA01_last_title_size + 'px',
        fontFamily: ClockA01_last_title_famity,
        fontWeight: ClockA01_last_title_weight,
        fontStyle: ClockA01_last_title_style,
    }

    const lastTimeStyle = {
        color: ClockA01_last_time_color,
        padding: SpacingCallBack(ClockA01_last_time_padding),
        fontSize: ClockA01_last_time_size,
        lineHeight: ClockA01_last_time_size + 'px',
        fontFamily: ClockA01_last_time_famity,
        fontWeight: ClockA01_last_time_weight,
        fontStyle: ClockA01_last_time_style,
    }

    const lastAddressStyle = {
        color: ClockA01_last_address_color,
        padding: SpacingCallBack(ClockA01_last_address_padding),
        fontSize: ClockA01_last_address_size,
        lineHeight: ClockA01_last_address_size + 'px',
        fontFamily: ClockA01_last_address_famity,
        fontWeight: ClockA01_last_address_weight,
        fontStyle: ClockA01_last_address_style,
    }

    const todayStyle = {
        color: ClockA01_today_color,
        padding: SpacingCallBack(ClockA01_today_padding),
        fontSize: ClockA01_today_size,
        lineHeight: ClockA01_today_size + 'px',
        fontFamily: ClockA01_today_famity,
        fontWeight: ClockA01_today_weight,
        fontStyle: ClockA01_today_style,
    }

    const locationStyle = {
        color: ClockA01_address_color,
        padding: SpacingCallBack(ClockA01_address_padding),
        fontSize: ClockA01_address_size,
        lineHeight: ClockA01_address_size + 'px',
        fontFamily: ClockA01_address_famity,
        fontWeight: ClockA01_address_weight,
        fontStyle: ClockA01_address_style,
    }

    const refreshStyle = {
        color: ClockA01_refresh_color,
        fontSize: ClockA01_refresh_size
    }

    const buttonStyle = {
        background: ColorCallBack(ClockA01_btn_back, ClockA01_btn_deg),
        width: ClockA01_btn_size,
        height: ClockA01_btn_size,
        borderRadius: SpacingCallBack(ClockA01_btn_radius),
        border: SetBorderParams(ClockA01_btn_border, ClockA01_btn_border_size, ClockA01_btn_border_type, ClockA01_btn_border_color),
        boxShadow: SetShadowParams(ClockA01_btn_shadow, ClockA01_btn_shadow_size, ClockA01_btn_shadow_color, ClockA01_btn_shadow_type),
        filter: SetFilderParams(ClockA01_btn_filter, ClockA01_btn_filter_size, ClockA01_btn_filter_color),
        animation: ClockA01_btn_animation ? `clockBtn ${ClockA01_btn_animation_time}s linear infinite` : ''
    }

    const btnTextStyle = {
        '--color': ColorCallBack(ClockA01_btn_text_color, ClockA01_btn_text_deg),
        padding: SpacingCallBack(ClockA01_btn_text_padding),
        fontSize: ClockA01_btn_text_size,
        lineHeight: ClockA01_btn_text_size + 'px',
        fontFamily: ClockA01_btn_text_famity,
        fontWeight: ClockA01_btn_text_weight,
        fontStyle: ClockA01_btn_text_style,
        filter: SetFilderParams(ClockA01_btn_text_filter, ClockA01_btn_text_filter_size, ClockA01_btn_text_filter_color),
    }

    const btnTimeStyle = {
        '--color': ColorCallBack(ClockA01_btn_time_color, ClockA01_btn_time_deg),
        padding: SpacingCallBack(ClockA01_btn_time_padding),
        fontSize: ClockA01_btn_time_size,
        lineHeight: ClockA01_btn_time_size + 'px',
        fontFamily: ClockA01_btn_time_famity,
        fontWeight: ClockA01_btn_time_weight,
        fontStyle: ClockA01_btn_time_style,
        filter: SetFilderParams(ClockA01_btn_time_filter, ClockA01_btn_time_filter_size, ClockA01_btn_time_filter_color),
    }

    return (
        <div className='WeChatTempClockInA01'>
            {ClockA01_user &&
                <div className='userInfo' style={userStyle}>
                    {ClockA01_user_avatar && <Avatar {...avatarStyle} style={{ padding: SpacingCallBack(ClockA01_user_avatar_padding) }} />}
                    <div className='userName'>
                        {ClockA01_user_nickName && <div style={nickNameStyle}>名称</div>}
                        {ClockA01_user_orgName && <div style={orgNameStyle}>组织机构</div>}
                    </div>
                    {ClockA01_user_record &&
                        <Icon name={ClockA01_user_record_url} style={recordStyle} />
                    }
                </div>
            }
            <div className='ClockBox' style={backStyle}>
                <div className='clockItem'>
                    <div className='today' style={todayStyle}>今日打卡提醒</div>
                    <div className='clockBtn'>
                        <div style={{ ...buttonStyle, ...animationData }}>
                            <div style={btnTextStyle}>{ClockA01_btn_text_label || '打卡文字'}</div>
                            {ClockA01_btn_text_time && <div style={btnTimeStyle}>{dayjs().format('HH:mm:ss')}</div>}
                        </div>
                    </div>
                    <div className='location'>
                        <div style={locationStyle}>黑龙江省哈尔滨市xx区xx大道xx路口右拐右拐右拐在右拐</div>
                        {ClockA01_refresh && <Icon name={ClockA01_refresh_url} style={refreshStyle} />}
                    </div>
                </div>

                {ClockA01_last &&
                    <div className='lastClock' style={lastBorderStyle}>
                        <div>
                            <div style={lastTitleStyle}>上次打卡 : </div>
                            <div>
                                <div style={lastTimeStyle}>{dayjs().format('YYYY-MM-DD HH:mm:ss')}</div>
                                <div style={lastAddressStyle}>黑龙江省哈尔滨市xx区xx大道xx路口左拐左拐左拐再左拐</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export const WeChatTempClockIn = {
    WeChatTempClockInA01: {
        title: '基础打卡',
        temp: WeChatTempClockInA01
    }
}