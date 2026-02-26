import React, { memo } from 'react';

import LogoA01 from './LogoA01'
import HeadA01 from './HeadA01'
import MenuA01 from './MenuA01'
import BodyA01 from './BodyA01'

import { ColorCallBack, SpacingCallBack, SpacingSizeCallBack } from '../../Utils'


const LayoutA02 = ({ DxTheme, Theme, AdminEvent }) => {
    const {
        top_color = '#ffffff33',
        top_deg = 0,
        top_blur = 2,
        top_padding = '8',
        top_margin = '8',
        top_radius = '8',
        top_shadow = '--shadow-1-down',
        btm_color = '#ffffff33',
        btm_deg = 0,
        btm_blur = 2,
        btm_padding = '8',
        btm_margin = '8',
        btm_radius = '8',
        btm_shadow = '--shadow-1-down'
    } = Theme


    const TopStyle = {
        background: ColorCallBack(top_color, top_deg),
        backdropFilter: `blur(${top_blur}px)`,
        padding: SpacingCallBack(top_padding),
        margin: SpacingCallBack(top_margin),
        borderRadius: SpacingCallBack(top_radius),
        boxShadow: `var(${top_shadow})`,
        width: SpacingSizeCallBack(top_margin, 100)
    }

    const BtmStyle = {
        flex: 1,
        background: ColorCallBack(btm_color, btm_deg),
        backdropFilter: `blur(${btm_blur}px)`,
        padding: SpacingCallBack(btm_padding),
        margin: SpacingCallBack(btm_margin),
        borderRadius: SpacingCallBack(btm_radius),
        boxShadow: `var(${btm_shadow})`,
        width: SpacingSizeCallBack(btm_margin, 100)
    }


    return (
        <div className='LayoutA02'>
            <div className='Top' style={TopStyle}>
                <LogoA01 Theme={Theme} AdminEvent={AdminEvent} DxTheme={DxTheme} />
                <HeadA01 Theme={Theme} AdminEvent={AdminEvent} DxTheme={DxTheme} />
            </div>
            <div className='Btm' style={BtmStyle}>
                <MenuA01 Theme={Theme} AdminEvent={AdminEvent} />
                <BodyA01 Theme={Theme} AdminEvent={AdminEvent} />
            </div>
        </div>
    );
};

export default memo(LayoutA02);