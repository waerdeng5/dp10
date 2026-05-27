
import { useMount } from 'ahooks';
import { menuCollapsedStore } from '../../Router/zustand'

import { ColorCallBack, SpacingCallBack, SpacingSizeCallBack, SetFilderParams } from '../../Utils'
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
        logo_icon_filter,
        logo_icon_filter_data,
        logo_icon_filter_color,

        logo_text,
        logo_text_color,
        logo_text_deg,
        logo_text_size,
        logo_text_family,
        logo_text_style,
        logo_text_weight,
        logo_text_filter,
        logo_text_filter_data,
        logo_text_filter_color

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
        filter: SetFilderParams(logo_icon_filter, logo_icon_filter_data, logo_icon_filter_color)
    }


    const TextStyle = {
        '--background': ColorCallBack(logo_text_color, logo_text_deg),
        fontSize: logo_text_size,
        fontFamily: logo_text_family,
        fontStyle: logo_text_style,
        fontWeight: logo_text_weight,
        filter: SetFilderParams(logo_text_filter, logo_text_filter_data, logo_text_filter_color)
    }



    // 折叠设置
    if (layout === 'TempA01') {
        LogoStyle.width = '100%'
        LogoStyle.marginBottom = 8

        return (
            <div className='Logo' style={LogoStyle}>
                <img src={logo_icon} alt="" style={IconStyle} />
                {!inlineCollapsed && logo_textStatus && <div className='text' style={TextStyle}>{logo_text}</div>}
            </div>
        );
    }

    // 铺展设置
    if (layout === 'TempA02') {
        return (
            <div className='Logo' style={LogoStyle}>
                <img src={logo_icon} alt="" style={IconStyle} />
                {logo_textStatus && <div className='text' style={TextStyle}>{logo_text}</div>}
            </div>
        )
    }



};

export default memo(LogoA01);
