import React, { useEffect } from 'react';




export const WeChatDropdownMenu = ({ WeChatEvent, uuid, type }) => {
    return (
        [
            {
                key: '1-0', type: 'group', label: '基础信息', children: [
                    { key: '1', label: <div onClick={() => WeChatEvent.emit({ type: 'onPageConfig' })}>布局页面配置</div> },
                ]
            },
        ].filter(v => v)
    )
}


//  PNTS -> 对应布局页面 对应UUID参数
// NTS -> 内嵌P组件 -> 组件嵌套关系



export const WeChatPageTemp = ({ data, WeChatEvent }) => {

    // layoutConfig  布局信息
    // tempConfig  组件信息

    useEffect(() => {
        console.log('[--WeChatPageTemp--]', data)
        // 判断是否已经初始化了
        // 如果已经初始化了，就直接返回



    }, [data])


    return (
        <div className='WeChatPageTemp'>
            基础布局信息  laytou布局 - 添加小窗信息
        </div>
    )
}
export const WeChatNavBarTemp = ({ data, WeChatEvent }) => {
    return (
        <div className='WeChatNavBarTemp'>WeChatNavBarTemp</div>
    )
}
export const WeChatTabsTemp = ({ data, WeChatEvent }) => {
    return (
        <div className='WeChatTabsTemp'>WeChatTabsTemp</div>
    )
}
export const WeChatSideBarTemp = ({ data, WeChatEvent }) => {
    return (
        <div className='WeChatSideBarTemp'>WeChatSideBarTemp</div>
    )
}

