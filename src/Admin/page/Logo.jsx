
import { useMount } from 'ahooks';
import { menuCollapsedStore } from '../../Router/zustand'

import { ColorCallBack, SpacingCallBack, SpacingSizeCallBack, SetFilderParams } from '../../Utils'
import { memo } from 'react';

const LogoA01 = ({ Theme }) => {
    const { inlineCollapsed } = menuCollapsedStore()
    const {
        logo_textStatus, logo_shrink_status,
        logo_align_items, logo_align_content, logo_justify_content, logo_flex_direction, logo_flex_wrap,
        logo_color, logo_deg, logo_margin, logo_padding, logo_radius, logo_shadow,

        logo_icon, logo_width, logo_height, logo_icon_padding, logo_icon_margin,
        logo_icon_filter, logo_icon_filter_data, logo_icon_filter_color,

        logo_icon_shrink, logo_width_shrink, logo_height_shrink, logo_icon_padding_shrink, logo_icon_margin_shrink,
        logo_icon_filter_shrink, logo_icon_filter_shrink_data, logo_icon_filter_shrink_color,

        logo_text, logo_text_color, logo_text_deg, logo_text_size, logo_text_family, logo_text_style, logo_text_weight,
        logo_text_filter, logo_text_filter_data, logo_text_filter_color,

        logo_text_shrink, logo_text_shrink_color, logo_text_shrink_deg, logo_text_shrink_size, logo_text_shrink_family,
        logo_text_shrink_weight, logo_text_shrink_style, logo_text_shrink_filter,
        logo_text_filter_shrink_data, logo_text_filter_shrink_color
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
        filter: SetFilderParams(logo_icon_filter, logo_icon_filter_data, logo_icon_filter_color)
    }

    const IconShrinkStyle = {
        width: logo_width_shrink,
        height: logo_height_shrink,
        padding: SpacingCallBack(logo_icon_padding_shrink),
        margin: SpacingCallBack(logo_icon_margin_shrink),
        filter: SetFilderParams(logo_icon_filter_shrink, logo_icon_filter_shrink_data, logo_icon_filter_shrink_color)
    }

    const TextStyle = {
        '--background': ColorCallBack(logo_text_color, logo_text_deg),
        fontSize: logo_text_size,
        fontFamily: logo_text_family,
        fontStyle: logo_text_style,
        fontWeight: logo_text_weight,
        filter: SetFilderParams(logo_text_filter, logo_text_filter_data, logo_text_filter_color)
    }

    const TextShrinkStyle = {
        '--background': ColorCallBack(logo_text_shrink_color, logo_text_shrink_deg),
        fontSize: logo_text_shrink_size,
        fontFamily: logo_text_shrink_family,
        fontStyle: logo_text_shrink_style,
        fontWeight: logo_text_shrink_weight,
        filter: SetFilderParams(logo_text_shrink_filter, logo_text_filter_shrink_data, logo_text_filter_shrink_color)
    }

    return (
        <div className='Logo' style={LogoStyle}>
            <img
                style={logo_shrink_status && inlineCollapsed ? IconShrinkStyle : IconStyle}
                src={logo_shrink_status && inlineCollapsed ? logo_icon_shrink : logo_icon}
                alt=""
            />
            {logo_textStatus &&
                <div className='text' style={logo_shrink_status && inlineCollapsed ? TextShrinkStyle : TextStyle}>
                    {logo_shrink_status && inlineCollapsed ? logo_text_shrink : logo_text}
                </div>
            }
        </div>
    );




};

export default memo(LogoA01);
