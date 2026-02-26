
import { useMount } from 'ahooks';
import { menuCollapsedStore } from '../../Router/zustand'

import { ColorCallBack, SpacingCallBack, SpacingSizeCallBack } from '../../Utils'
import { memo } from 'react';

const LogoA01 = ({ Theme, DxTheme }) => {
    const { inlineCollapsed } = menuCollapsedStore()
    const {
        devTheme,
        logo_textStatus,
        layout,

        logo_align_items = 'center',
        logo_align_content = 'center',
        logo_justify_content = 'center',
        logo_flex_direction = "row",
        logo_flex_wrap = "nowrap",

        logo_color = "#ffffff00",
        logo_deg = 0,
        logo_margin = "0",
        logo_padding = "0",
        logo_radius = "0",
        logo_shadow = "--shadow-none",

        logo_icon,
        logo_width = 80,
        logo_height = 80,
        logo_icon_padding,
        logo_icon_margin,
        logo_icon_shadowX,
        logo_icon_shadowY,
        logo_icon_shadowS,
        logo_icon_shadowC,

        logo_text,
        logo_text_color,
        logo_text_deg,
        logo_text_size,
        logo_text_family,
        logo_text_style,
        logo_text_weight,
        logo_text_shadowX,
        logo_text_shadowY,
        logo_text_shadowS,
        logo_text_shadowC,
    } = Theme

    const LogoStyle = {
        '--logo_align_items': logo_align_items,
        '--logo_align_content': logo_align_content,
        '--logo_justify_content': logo_justify_content,
        '--logo_flex_direction': logo_flex_direction,
        '--logo_flex_wrap': logo_flex_wrap,

        background: ColorCallBack(logo_color, logo_deg),
        padding: SpacingCallBack(logo_padding),
        margin: SpacingCallBack(logo_margin),
        borderRadius: SpacingCallBack(logo_radius),
        boxShadow: `var(${logo_shadow})`,
    }


    const IconStyle = {
        width: logo_width,
        height: logo_height,
        padding: SpacingCallBack(logo_icon_padding),
        margin: SpacingCallBack(logo_icon_margin),
        borderRadius: SpacingCallBack(logo_radius),
        transform: `translateX(${devTheme && (DxTheme.includes('dark') || DxTheme.includes('contrast')) ? -logo_width * 2 + 'px' : 0} )`,
        filter: devTheme && (DxTheme.includes('dark') || DxTheme.includes('contrast')) ?
            `drop-shadow(${logo_width * 2}px 0 #ffffff)` :
            `drop-shadow(${logo_icon_shadowX}px ${logo_icon_shadowY}px ${logo_icon_shadowS}px ${logo_icon_shadowC})`,
    }

    const TextStyle = {
        '--background': ColorCallBack(logo_text_color, logo_text_deg),
        fontSize: logo_text_size,
        fontFamily: logo_text_family,
        fontStyle: logo_text_style,
        fontWeight: logo_text_weight,
        filter: `drop-shadow(${logo_text_shadowX}px ${logo_text_shadowY}px ${logo_text_shadowS}px ${logo_text_shadowC})`
    }



    // 折叠设置
    if (layout === 'LayoutA01') {
        LogoStyle.width = '100%'
        LogoStyle.marginBottom = 8

        return (
            <div className='LogoA01' style={LogoStyle}>
                <img src={logo_icon} alt="" style={IconStyle} />
                {!inlineCollapsed && logo_textStatus && <div className='text' style={TextStyle}>{logo_text}</div>}
            </div>
        );
    }

    // 铺展设置
    if (layout === 'LayoutA02') {
        return (
            <div className='LogoA01' style={LogoStyle}>
                <img src={logo_icon} alt="" style={IconStyle} />
                {logo_textStatus && <div className='text' style={TextStyle}>{logo_text}</div>}
            </div>
        )
    }



};

export default memo(LogoA01);
