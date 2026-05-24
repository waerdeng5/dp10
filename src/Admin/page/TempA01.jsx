import React, { memo } from 'react';

import Logo from './Logo'
import Head from './Head'
import Menu from './Menu'
import Body from './Body'



import { ColorCallBack, SpacingCallBack, SpacingSizeCallBack } from '../../Utils'

const TempA01 = ({ DxTheme, Theme, AdminEvent }) => {
    const {
        left_color = "#ffffff33",
        left_width = 240,
        left_deg = 0,
        left_blur = 2,
        left_padding = '8',
        left_margin = '8',
        left_radius = '8',
        left_shadow = '--shadow-1-down',
        right_color = "#ffffff33",
        right_deg = 0,
        right_blur = 2,
        right_padding = '8',
        right_margin = '8,8,8,0',
        right_radius = '8',
        right_shadow = '--shadow-1-down'
    } = Theme

    const LeftStyle = {
        maxWidth: left_width,
        background: ColorCallBack(left_color, left_deg),
        backdropFilter: `blur(${left_blur}px)`,
        padding: SpacingCallBack(left_padding),
        margin: SpacingCallBack(left_margin),
        borderRadius: SpacingCallBack(left_radius),
        boxShadow: `var(${left_shadow})`,
        height: SpacingSizeCallBack(left_margin, 100, true),
    }

    const RightStyle = {
        flex: 1,
        background: ColorCallBack(right_color, right_deg),
        backdropFilter: `blur(${right_blur}px)`,
        padding: SpacingCallBack(right_padding),
        margin: SpacingCallBack(right_margin),
        borderRadius: SpacingCallBack(right_radius),
        boxShadow: `var(${right_shadow})`,
        height: SpacingSizeCallBack(right_margin, 100, true)
    }

    return (
        <div className='TempA01'>
            <div className='Left' style={LeftStyle}>
                <Logo Theme={Theme} AdminEvent={AdminEvent} DxTheme={DxTheme} />
                <Menu Theme={Theme} AdminEvent={AdminEvent} />
            </div>
            <div className='Right' style={RightStyle}>
                <Head Theme={Theme} AdminEvent={AdminEvent} DxTheme={DxTheme} />
                <Body Theme={Theme} AdminEvent={AdminEvent} />
            </div>
        </div>
    );
};

export default memo(TempA01)
