import './WechatLogin.scss'
import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams } from '../Utils'

import { Icon } from 'tdesign-icons-react';
import { ICONMapping } from '../Config/IconMapping'

export const WechatLoginA01 = ({ data }) => {

    const { wxLogin, loginTemp_A01_Text, loginTempA01_top, loginTempA01_pad, loginTempA01_back, loginTempA01_deg,
        loginTempA01_img, loginTempA01_imgW, loginTempA01_imgH, loginTempA01_imgP, loginTempA01_imgM,
        loginTempA01_signBack, loginTempA01_signDeg, loginTempA01_signPad, loginTempA01_signMar, loginTempA01_signRaduis,
        loginTempA01_signBorder, loginTempA01_signBorder_size, loginTempA01_signBorder_type, loginTempA01_signBorder_color,
        loginTemp_A01_sing, loginTempA01_formLabel, loginTempA01_formIcon, loginTempA01_formPwd,
        loginTempA01_formLabel_padding, loginTempA01_formLabel_size, loginTempA01_formLabel_color, loginTempA01_formLabel_deg,
        loginTempA01_formLabel_famity, loginTempA01_formLabel_weight, loginTempA01_formLabel_style,
        loginTempA01_formLabel_filed, loginTempA01_formLabel_filed_size, loginTempA01_formLabel_filed_color,
        loginTempA01_formInput_height, loginTempA01_formInput_size, loginTempA01_formInput_color, loginTempA01_formInput_famity,
        loginTempA01_formInput_weight, loginTempA01_formInput_style, loginTempA01_formInput_border, loginTempA01_formInput_fill,
        loginTempA01_formIcon_admin, loginTempA01_formIcon_pwe, loginTempA01_formIcon_color, loginTempA01_formIcon_size, loginTempA01_formIcon_padding,
        loginTempA01_formPwd_color, loginTempA01_formPwd_size, loginTempA01_btn_remember, loginTempA01_btn_remember_color,
        loginTempA01_btnLogin_back, loginTempA01_btnLogin_backDeg, loginTempA01_btnLogin_height, loginTempA01_btnLogin_radius, loginTempA01_btnLogin_margin,
        loginTempA01_btnLogin_border, loginTempA01_btnLogin_border_size, loginTempA01_btnLogin_border_type, loginTempA01_btnLogin_border_color,
        loginTempA01_btnLogin_shadow, loginTempA01_btnLogin_shadow_data, loginTempA01_btnLogin_shadow_color,
        loginTempA01_btnLogin_icon, loginTempA01_btnLogin_icon_url, loginTempA01_btnLogin_icon_size, loginTempA01_btnLogin_icon_color, loginTempA01_btnLogin_icon_margin,
        loginTempA01_btnLogin_text, loginTempA01_btnLogin_text_size, loginTempA01_btnLogin_text_color, loginTempA01_btnLogin_text_famity, loginTempA01_btnLogin_text_weight, loginTempA01_btnLogin_text_style, loginTempA01_btnLogin_text_fill, loginTempA01_btnLogin_text_fill_size, loginTempA01_btnLogin_text_fill_color,
        loginTempA01_btnWeChat_back, loginTempA01_btnWeChat_backDeg, loginTempA01_btnWeChat_height, loginTempA01_btnWeChat_radius, loginTempA01_btnWeChat_margin,
        loginTempA01_btnWeChat_border, loginTempA01_btnWeChat_border_size, loginTempA01_btnWeChat_border_type, loginTempA01_btnWeChat_border_color,
        loginTempA01_btnWeChat_shadow, loginTempA01_btnWeChat_shadow_data, loginTempA01_btnWeChat_shadow_color,
        loginTempA01_btnWeChat_icon, loginTempA01_btnWeChat_icon_url, loginTempA01_btnWeChat_icon_size, loginTempA01_btnWeChat_icon_color, loginTempA01_btnWeChat_icon_margin,
        loginTempA01_btnWeChat_text, loginTempA01_btnWeChat_text_size, loginTempA01_btnWeChat_text_color, loginTempA01_btnWeChat_text_famity, loginTempA01_btnWeChat_text_weight, loginTempA01_btnWeChat_text_style, loginTempA01_btnWeChat_text_fill, loginTempA01_btnWeChat_text_fill_size, loginTempA01_btnWeChat_text_fill_color,
    } = data

    const backStyle = {
        background: ColorCallBack(loginTempA01_back, loginTempA01_deg),
        padding: SpacingCallBack(loginTempA01_pad),
    }
    const imgStyle = {
        width: loginTempA01_imgW,
        height: loginTempA01_imgH,
        objectFit: 'contain',
        padding: SpacingCallBack(loginTempA01_imgP),
        margin: SpacingCallBack(loginTempA01_imgM),
    }
    const signStyle = {
        background: ColorCallBack(loginTempA01_signBack, loginTempA01_signDeg),
        padding: SpacingCallBack(loginTempA01_signPad),
        margin: SpacingCallBack(loginTempA01_signMar),
        borderRadius: SpacingCallBack(loginTempA01_signRaduis),
        border: SetBorderParams(loginTempA01_signBorder, loginTempA01_signBorder_size, loginTempA01_signBorder_type, loginTempA01_signBorder_color),
    }

    const labelStyle = {
        padding: SpacingCallBack(loginTempA01_formLabel_padding),
        '--color': ColorCallBack(loginTempA01_formLabel_color, loginTempA01_formLabel_deg),
        fontSize: loginTempA01_formLabel_size,
        fontFamily: loginTempA01_formLabel_famity,
        fontWeight: loginTempA01_formLabel_weight,
        fontStyle: loginTempA01_formLabel_style,
        filter: SetFilderParams(loginTempA01_formLabel_filed, loginTempA01_formLabel_filed_size, loginTempA01_formLabel_filed_color)
    }

    const inputStyle = {
        height: loginTempA01_formInput_height,
        fontSize: loginTempA01_formInput_size,
        color: loginTempA01_formInput_color,
        fontFamily: loginTempA01_formInput_famity,
        fontWeight: loginTempA01_formInput_weight,
        fontStyle: loginTempA01_formInput_style,
        borderWidth: loginTempA01_formInput_border,
        borderColor: loginTempA01_formInput_fill,
    }

    const iconStyle = {
        color: loginTempA01_formIcon_color,
        fontSize: loginTempA01_formIcon_size,
        padding: SpacingCallBack(loginTempA01_formIcon_padding),
    }
    const pwdStyle = {
        color: loginTempA01_formPwd_color,
        fontSize: loginTempA01_formPwd_size,
    }

    const loginBtnStyle = {
        background: ColorCallBack(loginTempA01_btnLogin_back, loginTempA01_btnLogin_backDeg),
        height: loginTempA01_btnLogin_height,
        borderRadius: SpacingCallBack(loginTempA01_btnLogin_radius),
        margin: SpacingCallBack(loginTempA01_btnLogin_margin),
        filter: SetFilderParams(loginTempA01_btnLogin_shadow, loginTempA01_btnLogin_shadow_data, loginTempA01_btnLogin_shadow_color),
        border: SetBorderParams(loginTempA01_btnLogin_border, loginTempA01_btnLogin_border_size, loginTempA01_btnLogin_border_type, loginTempA01_btnLogin_border_color),
    }

    const btnIconStyle = {
        fontSize: loginTempA01_btnLogin_icon_size,
        color: loginTempA01_btnLogin_icon_color,
        margin: SpacingCallBack(loginTempA01_btnLogin_icon_margin),
    }

    const btnTextStyle = {
        fontSize: loginTempA01_btnLogin_text_size,
        height: loginTempA01_btnLogin_text_size,
        lineHeight: loginTempA01_btnLogin_text_size + 'px',
        color: loginTempA01_btnLogin_text_color,
        fontFamily: loginTempA01_btnLogin_text_famity,
        fontWeight: loginTempA01_btnLogin_text_weight,
        fontStyle: loginTempA01_btnLogin_text_style,
        filter: SetFilderParams(loginTempA01_btnLogin_text_fill, loginTempA01_btnLogin_text_fill_size, loginTempA01_btnLogin_text_fill_color),
    }

    const weChatStyle = {
        background: ColorCallBack(loginTempA01_btnWeChat_back, loginTempA01_btnWeChat_backDeg),
        height: loginTempA01_btnWeChat_height,
        borderRadius: SpacingCallBack(loginTempA01_btnWeChat_radius),
        margin: SpacingCallBack(loginTempA01_btnWeChat_margin),
        filter: SetFilderParams(loginTempA01_btnWeChat_shadow, loginTempA01_btnWeChat_shadow_data, loginTempA01_btnWeChat_shadow_color),
        border: SetBorderParams(loginTempA01_btnWeChat_border, loginTempA01_btnWeChat_border_size, loginTempA01_btnWeChat_border_type, loginTempA01_btnWeChat_border_color),
    }

    const weChatIconStyle = {
        fontSize: loginTempA01_btnWeChat_icon_size,
        color: loginTempA01_btnWeChat_icon_color,
        margin: SpacingCallBack(loginTempA01_btnWeChat_icon_margin),
    }

    const weChatTextStyle = {
        fontSize: loginTempA01_btnWeChat_text_size,
        height: loginTempA01_btnWeChat_text_size,
        lineHeight: loginTempA01_btnWeChat_text_size + 'px',
        color: loginTempA01_btnWeChat_text_color,
        fontFamily: loginTempA01_btnWeChat_text_famity,
        fontWeight: loginTempA01_btnWeChat_text_weight,
        fontStyle: loginTempA01_btnWeChat_text_style,
        filter: SetFilderParams(loginTempA01_btnWeChat_text_fill, loginTempA01_btnWeChat_text_fill_size, loginTempA01_btnWeChat_text_fill_color),
    }

    return (
        <div className='WechatLoginA01' style={backStyle}>
            <div className='top' style={loginTempA01_top ? { marginTop: 52 } : {}}>
                <div className='text'>
                    {loginTemp_A01_Text.map((v, i) => {
                        const { text, size, color, deg, famity, weight, style, filed, filed_size, filed_color } = v
                        const textStyle = {
                            '--color': ColorCallBack(color, deg),
                            fontSize: size,
                            fontFamily: famity,
                            fontWeight: weight,
                            fontStyle: style,
                            filter: SetFilderParams(filed, filed_size, filed_color)
                        }
                        return (<div key={i} style={textStyle}>{text}</div>)
                    })}
                </div>
                <img style={imgStyle} src={loginTempA01_img} alt="" />
            </div>
            <div className='sign' style={signStyle}>
                <div className='title'>
                    {loginTemp_A01_sing.map((v, i) => {
                        const { text, size, color, deg, famity, weight, style, filed, filed_size, filed_color, margin, padding } = v
                        const textStyle = {
                            padding: SpacingCallBack(padding),
                            margin: SpacingCallBack(margin),
                            '--color': ColorCallBack(color, deg),
                            fontSize: size,
                            fontFamily: famity,
                            fontWeight: weight,
                            fontStyle: style,
                            filter: SetFilderParams(filed, filed_size, filed_color)
                        }
                        return (<div key={i} style={textStyle}>{text}</div>)
                    })}
                </div>
                <div className='form'>
                    <div className='item'>
                        {loginTempA01_formLabel && <div className='label' style={labelStyle}>登录账户 : </div>}
                        <div className='input admin' style={inputStyle}>
                            {loginTempA01_formIcon && <div className='icon' style={iconStyle}><Icon name={loginTempA01_formIcon_admin} /></div>}
                            <div className='inputBox'>admin</div>
                        </div>
                    </div>
                    <div className='item'>
                        {loginTempA01_formLabel && <div className='label' style={labelStyle}>登录密码 : </div>}
                        <div className='input pwd' style={inputStyle}>
                            {loginTempA01_formIcon && <div className='icon' style={iconStyle}><Icon name={loginTempA01_formIcon_pwe} /></div>}
                            <div className='inputBox'>******</div>
                            {loginTempA01_formPwd && <div className='pwdIcon' style={pwdStyle}><Icon name={'browse'} /> </div>}
                        </div>
                    </div>
                </div>
                <div className='btns'>
                    {loginTempA01_btn_remember &&
                        <div className='remember' style={{ color: loginTempA01_btn_remember_color }}>
                            {ICONMapping['farCircle']}<div>记住密码</div>
                        </div>
                    }
                    <div className='loginBtn' style={loginBtnStyle}>
                        {loginTempA01_btnLogin_icon && <Icon name={loginTempA01_btnLogin_icon_url} style={btnIconStyle} />}
                        <div style={btnTextStyle}>{loginTempA01_btnLogin_text}</div>
                    </div>
                    <div className='wechatBtn' style={weChatStyle}>
                        {loginTempA01_btnWeChat_icon && <Icon name={loginTempA01_btnWeChat_icon_url} style={weChatIconStyle} />}
                        <div style={weChatTextStyle}>{loginTempA01_btnWeChat_text}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const WechatLoginA02 = () => {
    return (
        <div>
            小程序登录页模板2
        </div>
    );
}
export const WechatLoginA03 = () => {
    return (
        <div>
            小程序登录页模板3
        </div>
    );
}
export const WechatLoginA04 = () => {
    return (
        <div>
            小程序登录页模板4
        </div>
    );
}