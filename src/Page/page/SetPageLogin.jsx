import './SetPageLogin.scss'
import { useState } from 'react';
import { Skeleton, Result } from 'antd'
import { useEventEmitter, useMount } from 'ahooks'

import { CommonAPIUrl } from '../../Config'

import { axios } from '../../Utils/Api'
import { modelStore } from '../../Router/zustand'
import SignDefault from '../../View/page/signDefault'
import { Encrypt, Decrypt, GetIndexedDB } from '../../Utils/IndexedDB'
import { SwiperLoginBack } from '../../Temp/SwiperTemplate'
import { VideoTemplateA01 } from '../../Temp/VideoTemplate'
import { ColorCallBack, SpacingCallBack, SpacingSizeCallBack } from '../../Utils'


const SetPageLogin = ({ data, AdminEvent }) => {
    const { updateModel } = modelStore()
    const LoginEvent = useEventEmitter()
    const [Config, setConfig] = useState()
    const getData = async () => {
        const { uuid } = await GetIndexedDB('config')
        const [err, res] = await axios({ method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${uuid}/COMMON/LOGIN` } })
        if (err) return false
        setConfig(await Decrypt(res))
    }

    const saveData = async () => {
        const { uuid } = await GetIndexedDB('config')
        const params = { uuid: `${uuid}/COMMON/LOGIN`, content: JSON.stringify(await Encrypt(Config)) }
        const [err, res] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (err) return false
        updateModel({})
    }

    const onOpenSetPage = () => {
        updateModel({
            title: '配置登录页面',
            type: 'CommonForm',
            Event: LoginEvent,
            modelData: {
                formItem: 'SetLoginPageConfig',
                eventBack: 'onSaveLoginPage',
                detection: 'onLoginDetection',
                Initial: Config,
            }
        })
    }

    const onLoginDetection = (data) => {
        setConfig(e => ({ ...e, ...data }))
    }

    const loginCallBack = e => {
        const { type, data } = e
        const Mapping = new Map([
            ['onLoginDetection', () => onLoginDetection(data)],
            ['onSaveLoginPage', () => saveData()]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    const adminCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onOpenSetPage', () => onOpenSetPage()]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    AdminEvent.useSubscription(adminCallBack)
    LoginEvent.useSubscription(loginCallBack)

    useMount(getData)

    if (!Config) return <Skeleton active paragraph={{ rows: 16 }} />
    if (!Config.backType) return (
        <div className='SetPageLogin Error'>
            <Result status="404" title="加载失败" subTitle={`错误: 未检测到配置信息`} />
        </div>
    )

    const { backType, backColor, backDeg, backImage, backSwiper, backSpeed, backDelay, backVideo, backStart, backEnd } = Config
    const { topShow, topImage, topNumber, topHeight, btmShow, btmImage, btmNumber, btmHeight } = Config
    const { flex_align_items, flex_align_content, flex_justify_content, flex_flex_direction, flex_flex_wrap } = Config
    const { title, title_flex, title_padding, title_margin, title_color, title_deg, title_size, title_family, title_weight, title_style, title_shadowX, title_shadowY, title_shadowS, title_shadowC, logo_status, logo_direction, logo_url, logo_width, logo_height, logo_padding, logo_margin, logo_shadowX, logo_shadowY, logo_shadowS, logo_shadowC
    } = Config

    const { small_status, small, small_flex, small_padding, small_margin, small_color, small_deg, small_size, small_family, small_weight, small_style, small_shadowX, small_shadowY, small_shadowS, small_shadowC } = Config

    const { windowAll, windowWidth, windowHeight, windowPadding, windowMargin, windowType } = Config

    const windowStyle = {
        position: windowAll ? 'absolute' : 'relative',
        width: windowAll ? '100%' : windowWidth,
        height: windowAll ? '100%' : windowHeight,
        padding: SpacingCallBack(windowPadding),
        margin: windowAll ? 0 : SpacingCallBack(windowMargin),
    }

    const flexStyle = {
        alignItems: flex_align_items,
        alignContent: flex_align_content,
        justifyContent: flex_justify_content,
        flexDirection: flex_flex_direction,
        flexWrap: flex_flex_wrap
    }

    const titleStyle = {
        justifyContent: title_flex,
        flexDirection: logo_direction || 'row',
        padding: SpacingCallBack(title_padding),
        margin: SpacingCallBack(title_margin),
    }

    const logoStyle = {
        width: logo_width,
        height: logo_height,
        padding: SpacingCallBack(logo_padding),
        margin: SpacingCallBack(logo_margin),
        filter: `drop-shadow(${logo_shadowX}px ${logo_shadowY}px ${logo_shadowS}px ${logo_shadowC})`
    }

    const titleTextStyle = {
        '--titleColor': ColorCallBack(title_color, title_deg),
        fontSize: title_size,
        fontFamily: title_family,
        fontStyle: title_style,
        fontWeight: title_weight,
        filter: `drop-shadow(${title_shadowX}px ${title_shadowY}px ${title_shadowS}px ${title_shadowC})`
    }

    const smallStyle = {
        '--smallColor': ColorCallBack(small_color, small_deg),
        justifyContent: small_flex,
        padding: SpacingCallBack(small_padding),
        margin: SpacingCallBack(small_margin),
        fontSize: small_size,
        fontFamily: small_family,
        fontStyle: small_style,
        fontWeight: small_weight,
        filter: `drop-shadow(${small_shadowX}px ${small_shadowY}px ${small_shadowS}px ${small_shadowC})`
    }

    const { backUrl, backPro, backBlur, backPadding, backMargin, backRadius, backShadow,
        signPro, signBackColor, signBackDeg, signBackBlur, signBackPadding, signBackMargin, signBackRadius, signBackShadow,
        sign_align_items, sign_align_content, sign_justify_content, sign_flex_direction, sign_flex_wrap,
        signBackWidth, signBackPosition, signBackNumber
    } = Config

    const { titleA01_status, titleA01, titleA01_flex, titleA01_padding, titleA01_margin, titleA01_color, titleA01_deg, titleA01_size, titleA01_family, titleA01_weight, titleA01_style, titleA01_shadowX, titleA01_shadowY, titleA01_shadowS, titleA01_shadowC } = Config


    const imageStyle = {
        padding: SpacingCallBack(backPadding),
        margin: SpacingCallBack(backMargin),
        boxShadow: `var(${backShadow})`,
        backdropFilter: `blur(${backBlur}px)`,
        borderRadius: SpacingCallBack(backRadius),
        height: SpacingSizeCallBack(backMargin, 100, true),
    }

    const signBackBoxStyle = {
        borderRadius: SpacingCallBack(signBackRadius),
        boxShadow: `var(${signBackShadow})`,
        background: ColorCallBack(signBackColor, signBackDeg),
        backdropFilter: `blur(${signBackBlur}px)`,
    }

    const signBackStyle = {
        alignItems: sign_align_items,
        alignContent: sign_align_content,
        justifyContent: sign_justify_content,
        flexDirection: sign_flex_direction,
        flexWrap: sign_flex_wrap,
        padding: SpacingCallBack(signBackPadding),
        margin: SpacingCallBack(signBackMargin),
    }

    const signBackStyleA02 = {
        width: signBackWidth,
        [signBackPosition]: signBackNumber
    }



    const TitleA01Style = {
        padding: SpacingCallBack(titleA01_padding),
        margin: SpacingCallBack(titleA01_margin),
        '--titleColor': ColorCallBack(titleA01_color, titleA01_deg),
        justifyContent: titleA01_flex,
        fontSize: titleA01_size,
        fontFamily: titleA01_family,
        fontStyle: titleA01_style,
        fontWeight: titleA01_weight,
        filter: `drop-shadow(${titleA01_shadowX}px ${titleA01_shadowY}px ${titleA01_shadowS}px ${titleA01_shadowC})`
    }

    const { titleA02_status, titleA02_justify, titleA02_direction, titleA02_padding, titleA02_margin } = Config

    const TitleA02Style = {
        alignItems: titleA02_justify,
        justifyContent: titleA02_justify,
        flexDirection: titleA02_direction,
        padding: SpacingCallBack(titleA02_padding),
        margin: SpacingCallBack(titleA02_margin),
    }

    const { titleA02, titleA02_color, titleA02_deg, titleA02_size, titleA02_family, titleA02_weight, titleA02_style, titleA02_shadowX, titleA02_shadowY,
        titleA02_shadowS, titleA02_shadowC } = Config

    const { smallA02, smallA02_color, smallA02_deg, smallA02_size, smallA02_family, smallA02_weight, smallA02_style, smallA02_shadowX, smallA02_shadowY,
        smallA02_shadowS, smallA02_shadowC } = Config


    const TitleA02Text = {
        '--titleColor': ColorCallBack(titleA02_color, titleA02_deg),
        fontSize: titleA02_size,
        fontFamily: titleA02_family,
        fontStyle: titleA02_style,
        fontWeight: titleA02_weight,
        filter: `drop-shadow(${titleA02_shadowX}px ${titleA02_shadowY}px ${titleA02_shadowS}px ${titleA02_shadowC})`
    }

    const SmallA02SText = {
        '--titleColor': ColorCallBack(smallA02_color, smallA02_deg),
        fontSize: smallA02_size,
        fontFamily: smallA02_family,
        fontStyle: smallA02_style,
        fontWeight: smallA02_weight,
        filter: `drop-shadow(${smallA02_shadowX}px ${smallA02_shadowY}px ${smallA02_shadowS}px ${smallA02_shadowC})`
    }

    const { signBoxClass,
        signBox_label_status, signBox_label_color, signBox_label_deg, signBox_label_size, signBox_label_family, signBox_label_weight,
        signBox_label_style, signBox_label_shadowX, signBox_label_shadowY, signBox_label_shadowS, signBox_label_shadowC,
        signBox_input_height, signBox_input_radius, signBox_input_shadow, signBox_input_shadowD, signBox_input_back,
        signBox_placeholder_color, signBox_placeholder_size, signBox_placeholder_family, signBox_placeholder_weight,
        signBox_input_color, signBox_input_size, signBox_input_family, signBox_input_weight,
        signBox_input_shadowX, signBox_input_shadowY, signBox_input_shadowS, signBox_input_shadowC,
        signBox_icon_status, signBox_icon_color, signBox_icon_size, signBox_icon_shadowX, signBox_icon_shadowY, signBox_icon_shadowS, signBox_icon_shadowC,
        signBox_button_height, signBox_button_radio, signBox_button_color, signBox_button_deg, signBox_button_back,
        signBox_button_size, signBox_button_family, signBox_button_weight, signBox_button_style,
        signBox_button_shadowX, signBox_button_shadowY, signBox_button_shadowS, signBox_button_shadowC
    } = Config



    const signBoxStyle = {
        labelStatus: signBox_label_status,
        iconStatus: signBox_icon_status,
        '--LabelColor': ColorCallBack(signBox_label_color, signBox_label_deg),
        '--LabelSize': signBox_label_size + 'px',
        '--LabelFamily': signBox_label_family,
        '--LabelWeight': signBox_label_weight,
        '--LabelStyle': signBox_label_style,
        '--LabelFilter': `drop-shadow(${signBox_label_shadowX}px ${signBox_label_shadowY}px ${signBox_label_shadowS}px ${signBox_label_shadowC})`,
        '--InputHeight': signBox_input_height + 'px',
        '--InputRadius': signBox_input_radius + 'px',
        '--InputShadow': signBox_input_shadow,
        '--InputActive': signBox_input_shadowD,
        '--InputBackground': signBox_input_back || 'transparent',
        '--InputPlaceholderColor': signBox_placeholder_color,
        '--InputPlaceholderSize': signBox_placeholder_size + 'px',
        '--InputPlaceholderFamily': signBox_placeholder_family,
        '--InputPlaceholderWeight': signBox_placeholder_weight,
        '--InputColor': signBox_input_color,
        '--InputSize': signBox_input_size + 'px',
        '--InputFamily': signBox_input_family,
        '--InputWeight': signBox_input_weight,
        '--InputFilter': `drop-shadow(${signBox_input_shadowX}px ${signBox_input_shadowY}px ${signBox_input_shadowS}px ${signBox_input_shadowC})`,
        '--IconColor': signBox_icon_color,
        '--IconSize': signBox_icon_size + 'px',
        '--IconFilter': `drop-shadow(${signBox_icon_shadowX}px ${signBox_icon_shadowY}px ${signBox_icon_shadowS}px ${signBox_icon_shadowC})`,
        '--ButtonHeight': signBox_button_height + 'px',
        '--ButtonRadius': signBox_button_radio + 'px',
        '--ButtonBack': signBox_button_back || 'transparent',
        '--ButtonColor': ColorCallBack(signBox_button_color, signBox_button_deg),
        '--ButtonSize': signBox_button_size + 'px',
        '--ButtonFamily': signBox_button_family,
        '--ButtonWeight': signBox_button_weight,
        '--ButtonStyle': signBox_button_style,
        '--ButtonFilter': `drop-shadow(${signBox_button_shadowX}px ${signBox_button_shadowY}px ${signBox_button_shadowS}px ${signBox_button_shadowC})`
    }

    return (
        <div className='SetPageLogin'>
            <div className='Back'>
                {backType === 'A01' && <div style={{ background: ColorCallBack(backColor, backDeg) }} />}
                {backType === 'A02' && <img src={backImage} alt="" />}
                {backType === 'A03' && <SwiperLoginBack data={backSwiper} speed={backSpeed} delay={backDelay} />}
                {backType === 'A04' && <VideoTemplateA01 url={backVideo} seekTimeStart={backStart} seekTimeEnd={backEnd} />}
            </div>
            {topShow && <img className='Head' style={{ top: topNumber, height: topHeight }} src={topImage} alt="" />}
            {btmShow && <img className='Foot' style={{ bottom: btmNumber, height: btmHeight }} src={btmImage} alt="" />}

            <div className='Box' style={flexStyle}>
                <div className='Title' style={titleStyle}>
                    {logo_status && <img style={logoStyle} src={logo_url} alt="" />}
                    <div style={titleTextStyle}>{title}</div>
                </div>
                <div className='Window' style={windowStyle}>
                    <div className={windowType === 'A01' ? 'SignA01' : 'SignA02'}>
                        <div style={windowType === 'A01' ? { flex: backPro } : {}}>
                            <img src={backUrl} style={imageStyle} alt="" />
                        </div>
                        <div style={windowType === 'A01' ? { flex: signPro, ...signBackBoxStyle } : { ...signBackStyleA02, ...signBackBoxStyle }}>
                            <div style={signBackStyle}>
                                {titleA01_status && <div className='TitleA01' style={TitleA01Style}>{titleA01}</div>}
                                {titleA02_status &&
                                    <div className='TitleA02' style={TitleA02Style}>
                                        <div style={TitleA02Text}>{titleA02}</div>
                                        <div style={SmallA02SText}>{smallA02}</div>
                                    </div>
                                }
                                <SignDefault className={signBoxClass} style={signBoxStyle} simulated Config={{ loginCode: false }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Small' style={smallStyle}>{small_status && small}</div>
            </div>

        </div>
    );
};

export default SetPageLogin;