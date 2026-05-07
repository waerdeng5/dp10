import { Icon } from 'tdesign-icons-react'

import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams } from '../Utils'
import { useState } from 'react';



export const WeChatTabBarA01 = ({ menu, data, list, FormEvent }) => {
    const { tabA01_bgColor, tabA01_bgDeg, tabA01_bgHeight, tabA01_bgPadding, tabA01_icon, tabA01_text,
        tabA01_align_items, tabA01_align_content, tabA01_justify_content, tabA01_flex_direction, tabA01_flex_wrap,
        tabA01_iconD_color, tabA01_iconD_Size, tabA01_iconD_Map, tabA01_iconA_color, tabA01_iconA_Size, tabA01_iconA_Map,
        tabA01_textD_color, tabA01_textD_size, tabA01_textD_famity, tabA01_textD_weight, tabA01_textD_style,
        tabA01_textD_filed, tabA01_textD_filed_size, tabA01_textD_filed_color,
        tabA01_textA_color, tabA01_textA_size, tabA01_textA_famity, tabA01_textA_weight, tabA01_textA_style,
        tabA01_textA_filed, tabA01_textA_filed_size, tabA01_textA_filed_color,
    } = data


    const backStyle = {
        height: tabA01_bgHeight,
        padding: SpacingCallBack(tabA01_bgPadding),
        background: ColorCallBack(tabA01_bgColor, tabA01_bgDeg),
    }

    const flexStyle = {
        '--alignItems': tabA01_align_items,
        '--alignContent': tabA01_align_content,
        '--justifyContent': tabA01_justify_content,
        '--flexDirection': tabA01_flex_direction,
        '--flexWrap': tabA01_flex_wrap,
    }

    const iconDefaultStyle = {
        color: tabA01_iconD_color,
        fontSize: tabA01_iconD_Size,
        margin: SpacingCallBack(tabA01_iconD_Map)
    }

    const iconActiveStyle = {
        color: tabA01_iconA_color,
        fontSize: tabA01_iconA_Size,
        margin: SpacingCallBack(tabA01_iconA_Map)
    }

    const textDefaultStyle = {
        color: tabA01_textD_color,
        fontSize: tabA01_textD_size,
        height: tabA01_textD_size,
        lineHeight: tabA01_textD_size + 'px',
        fontFamily: tabA01_textD_famity,
        fontWeight: tabA01_textD_weight,
        fontStyle: tabA01_textD_style,
        filter: SetFilderParams(tabA01_textD_filed, tabA01_textD_filed_size, tabA01_textD_filed_color),
    }

    const textActiveStyle = {
        color: tabA01_textA_color,
        fontSize: tabA01_textA_size,
        height: tabA01_textA_size,
        lineHeight: tabA01_textA_size + 'px',
        fontFamily: tabA01_textA_famity,
        fontWeight: tabA01_textA_weight,
        fontStyle: tabA01_textA_style,
        filter: SetFilderParams(tabA01_textA_filed, tabA01_textA_filed_size, tabA01_textA_filed_color),
    }

    const onClick = (e) => {
        setActive(e)
        FormEvent.emit({ type: 'onTabBarClick', data: e })
    }

    return (
        <div className='TabBarBox WeChatTabBarA01' style={backStyle}>
            {list.map(v => {
                const status = menu === v.uuid
                console.log(v)
                return (
                    <div key={v.uuid} style={flexStyle} onClick={() => onClick(v.uuid)}>
                        {tabA01_icon && <Icon style={status ? iconActiveStyle : iconDefaultStyle} name={v.iconUrl || 'ai-1-filled'} />}
                        {tabA01_text && <div style={status ? textActiveStyle : textDefaultStyle}>{v.title}</div>}
                    </div>
                )
            })}
        </div>
    );
};
export const WeChatTabBarA02 = () => {
    return (
        <div className='TabBarBox WeChatTabBarA02'>
            开发中...(2号)
        </div>
    );
};
export const WeChatTabBarA03 = () => {
    return (
        <div className='TabBarBox WeChatTabBarA03'>
            开发中...(3号)
        </div>
    );
};
export const WeChatTabBarA04 = () => {
    return (
        <div className='TabBarBox WeChatTabBarA04'>
            开发中...(4号)
        </div>
    );
};
