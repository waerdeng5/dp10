import { memo, useState } from 'react';
import { Avatar, Dropdown, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom'
import { modelStore, pageStore } from '../../Router/zustand'
import { MappingData } from '../../Config/MappingData'
import { GetIndexedDB, PutIndexedDB } from '../../Utils/IndexedDB'

import { ColorCallBack, SpacingCallBack, OpenMenuFunc } from '../../Utils'
import { ICONMapping } from '../../Config/IconMapping'
import { useMount } from 'ahooks';

import { UserAvatar, OtherDiyPageConfig } from '../../Config'

const { port } = window.location

const HeadA01 = ({ Theme, AdminEvent, DxTheme }) => {
    const Navigate = useNavigate()
    const { pageActive, pageList, updateActive, updateList } = pageStore()
    const pageFunc = { pageActive, pageList, updateActive, updateList }
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const { head_color, head_deg, head_padding, head_margin, head_radius, head_shadow, body_tabsMax, devTheme } = Theme
    const { head_align_items, head_align_content, head_justify_content, head_flex_direction, head_flex_wrap } = Theme
    const { head_offBtn, head_offIcon, head_offSize, head_offColor, head_offBorder, head_offShadowX, head_offShadowY, head_offShadowS, head_offShadowC } = Theme
    const { head_avatar, head_avatarPositon, head_userName, head_roleName, head_namePositon, head_userMargin, head_nameWidth, head_userClick } = Theme
    const { head_AvatarMargin, head_AvatarSize, head_AvatarTtpe, head_userClickType, head_userOptions } = Theme
    const { head_userFilde, head_userColor, head_userDeg, head_userSize, head_userFamily, head_userWeight, head_userStyle, head_userShadowX, head_userShadowY, head_userShadowS, head_userShadowC } = Theme
    const { head_roleFilde, head_roleColor, head_roleDeg, head_roleSize, head_roleFamily, head_roleWeight, head_roleStyle, head_roleShadowX, head_roleShadowY, head_roleShadowS, head_roleShadowC } = Theme
    const { head_optionsPadding, head_optionsMargin, head_itemPadding, head_itemMargin, head_itemRadius, head_itemBack, head_itemDeg, head_itemIconSize, head_optionsList } = Theme
    const { head_titleType, head_titleText, head_titleField, head_titleColor, head_titleDeg, head_titleSize, head_titleFamily, head_titleWeight, head_titleStyle, head_titleShadowX, head_titleShadowY, head_titleShadowS, head_titleShadowC } = Theme

    const headStyle = {
        '--logo_align_items': head_align_items,
        '--logo_align_content': head_align_content,
        '--logo_justify_content': head_justify_content,
        '--logo_flex_direction': head_flex_direction,
        '--logo_flex_wrap': head_flex_wrap,
        background: ColorCallBack(head_color, head_deg),
        padding: SpacingCallBack(head_padding),
        margin: SpacingCallBack(head_margin),
        borderRadius: SpacingCallBack(head_radius),
        boxShadow: `var(${head_shadow})`,
    }

    const offBtnStyle = {
        '--fontSize': head_offSize + 'px',
        color: head_offColor,
        borderLeft: `1px solid ${head_offBorder}`,
        filter: `drop-shadow(${head_offShadowX}px ${head_offShadowY}px ${head_offShadowS}px ${head_offShadowC})`,
    }

    const usesBtnStyle = {
        margin: SpacingCallBack(head_userMargin),
        flexDirection: head_avatarPositon,
        '--avaMargin': SpacingCallBack(head_AvatarMargin),
        cursor: head_userClick !== 'none' ? 'pointer' : 'default'
    }

    const userStyle = {
        '--background': ColorCallBack(devTheme && (DxTheme.includes('dark') || DxTheme.includes('contrast')) ? '#ffffff' : head_userColor, head_userDeg),
        maxWidth: head_nameWidth,
        fontSize: head_userSize,
        height: head_userSize,
        lineHeight: head_userSize + 'px',
        fontFamily: head_userFamily,
        fontStyle: head_userStyle,
        fontWeight: head_userWeight,
        filter: `drop-shadow(${head_userShadowX}px ${head_userShadowY}px ${head_userShadowS}px ${head_userShadowC})`
    }

    const roleStyle = {
        '--background': ColorCallBack(devTheme && (DxTheme.includes('dark') || DxTheme.includes('contrast')) ? '#ffffff' : head_roleColor, head_roleDeg),
        maxWidth: head_nameWidth,
        fontSize: head_roleSize,
        height: head_roleSize,
        lineHeight: head_roleSize + 'px',
        fontFamily: head_roleFamily,
        fontStyle: head_roleStyle,
        fontWeight: head_roleWeight,
        filter: `drop-shadow(${head_roleShadowX}px ${head_roleShadowY}px ${head_roleShadowS}px ${head_roleShadowC})`
    }

    const optionsStyle = {
        padding: SpacingCallBack(head_optionsPadding),
        margin: SpacingCallBack(head_optionsMargin),
    }

    const titleStyle = {
        '--background': ColorCallBack(head_titleColor, head_titleDeg),
        fontSize: head_titleSize,
        fontFamily: head_titleFamily,
        fontStyle: head_titleStyle,
        fontWeight: head_titleWeight,
        filter: `drop-shadow(${head_titleShadowX}px ${head_titleShadowY}px ${head_titleShadowS}px ${head_titleShadowC})`
    }

    const [userInfo, setUserInfo] = useState()

    useMount(async () => {
        const user = await GetIndexedDB('user')
        const userAdd = await GetIndexedDB('userAdd')
        setUserInfo({ ...user, ...userAdd })
    })

    const [items, setItems] = useState([])

    const onUserClick = () => {
        if (head_userClick === 'userInfo') onItemClick(2)
    }

    const onOpenSetTheme = () => {
        updateModel({
            title: '主题设置',
            type: 'CommonForm',
            Event: AdminEvent,
            modelData: { formItem: 'ThemeFormList', eventBack: 'onSaveTheme', Initial: Theme, detection: 'onThemeDetection' }
        })
    }

    const onOpenProjectList = () => window.location.href = `http://localhost:${port}`

    const onOpenDevTheme = () => {
        updateModel5({
            title: 'DX主题设置',
            type: 'CommonModel',
            width: 480,
            Event: AdminEvent,
            modelData: { openType: 'DxTheme' }
        })
    }

    const onItemClick = (key) => {
        if (key === 'admin' || key === 0) return false
        console.log('[onItemClick] --', key)
        const Mapping = new Map([
            ['login', onSetLogin],
            ['theme', onOpenSetTheme],
            ['project', onOpenProjectList],
            ['devTheme', onOpenDevTheme],
            ['test', onOpenTest],
            ['layout', onOpenLayout],
            ['start', onOpenStart],
            ['window', onOpenWindow],

            [1, () => Navigate('/Start')],
            [2, onOpenUserCenter],
            [3, onWorkstation],
            [4, onWeChatBinding],
            [5, onOfficialAccount],

            [7, () => AdminEvent.emit({ type: 'onLookPage' })],
            [8, () => Navigate('/')],
        ])
        const func = Mapping.get(key)
        func?.()
    }

    const onSetLogin = async () => {
        const page = OtherDiyPageConfig.SetPageLogin
        OpenMenuFunc(page.uuid, pageFunc, body_tabsMax, page)
    }

    const onOpenUserCenter = async () => {
        const page = OtherDiyPageConfig.UserCenter
        OpenMenuFunc(page.uuid, pageFunc, body_tabsMax, page)
    }

    const onWorkstation = () => {
        const page = OtherDiyPageConfig.Workstation
        OpenMenuFunc(page.uuid, pageFunc, body_tabsMax, page)
    }

    const onWeChatBinding = () => {
        updateModel({
            width: 480,
            height: 480,
            title: '微信绑定',
            type: 'CommonModel',
            Event: AdminEvent,
            modelData: { openType: 'WeChatBinding', Initial: Theme }
        })
    }

    const onOfficialAccount = () => {
        updateModel({
            width: 480,
            height: 500,
            title: '公众号绑定',
            type: 'CommonModel',
            Event: AdminEvent,
            modelData: { openType: 'OfficialAccount', Initial: Theme }
        })
    }

    const onOpenTest = () => {
        const page = OtherDiyPageConfig.Test
        OpenMenuFunc(page.uuid, pageFunc, body_tabsMax, page)
    }

    const onOpenLayout = () => {
        const page = OtherDiyPageConfig.Layout
        OpenMenuFunc(page.uuid, pageFunc, body_tabsMax, page)
    }
    const onOpenStart = () => {
        const page = OtherDiyPageConfig.StartPage
        OpenMenuFunc(page.uuid, pageFunc, body_tabsMax, page)
    }
    const onOpenWindow = () => {
        const page = OtherDiyPageConfig.WindowPage
        OpenMenuFunc(page.uuid, pageFunc, body_tabsMax, page)
    }


    useMount(() => {
        const data = head_userOptions?.map((item, index) => {
            const { title, icon, func, status } = item
            const data = { key: index, label: <div onClick={() => onItemClick(func)}>{title}</div> }
            if (status) data.icon = ICONMapping[icon]
            return data
        })
        setItems(data)
    })

    return (
        <div className='HeadA01' style={headStyle}>
            <div className='left' style={titleStyle}>
                {head_titleType === 'text' ? head_titleText : userInfo ? userInfo?.[head_titleField] : ''}
            </div>
            <div className='right'>
                <div className='options' style={optionsStyle}>
                    {head_optionsList.map((item, index) => {
                        const { func, title, color, icon, shadowX, shadowY, shadowS, shadowC, gridClick } = item
                        const itemStyle = {
                            color: devTheme && (DxTheme.includes('dark') || DxTheme.includes('contrast')) ? '#ffffff' : color,
                            width: head_itemIconSize + 8,
                            height: head_itemIconSize + 8,
                            fontSize: head_itemIconSize,
                            padding: SpacingCallBack(head_itemPadding),
                            margin: SpacingCallBack(head_itemMargin),
                            borderRadius: SpacingCallBack(head_itemRadius),
                            background: ColorCallBack(head_itemBack, head_itemDeg),
                            '--filter': `drop-shadow(${shadowX}px ${shadowY}px ${shadowS}px ${shadowC})`,
                        }
                        if (func === 'admin' && userInfo?.userUuid !== '1e99e116-6ec0-425c-87b4-64dd2ce458e2') return false
                        return (
                            <Dropdown
                                key={index}
                                menu={{ items: [] }}
                                placement='bottom'
                                disabled={func !== 'admin' && func !== 0}
                                trigger={[gridClick]}
                                popupRender={() => {
                                    const { gridNumber, gridSize, gridList, gridIconSize, gridTextFamily, gridTextSize, gridTextStyle, gridTextWeight } = item
                                    const gridStyle = { minWidth: gridSize + 16, minHeight: gridSize + 16, maxWidth: gridSize * gridNumber + 16 }
                                    return (
                                        <div className='DropdownGrid' style={gridStyle}>
                                            {gridList.map((item, index) => {
                                                const { func, title, icon, color, shadowX, shadowY, shadowS, shadowC } = item
                                                const divStyle = { width: gridSize, height: gridSize }
                                                const IconStyle = {
                                                    color,
                                                    '--size': gridIconSize + 'px',
                                                    '--filter': `drop-shadow(${shadowX}px ${shadowY}px ${shadowS}px ${shadowC})`,
                                                }
                                                const TextStyle = {
                                                    fontSize: gridTextSize,
                                                    fontFamily: gridTextFamily,
                                                    fontStyle: gridTextStyle,
                                                    fontWeight: gridTextWeight,
                                                }
                                                return (
                                                    <div key={index} style={divStyle} onClick={() => onItemClick(func)}>
                                                        <span style={IconStyle}> {ICONMapping[icon]}</span>
                                                        <div style={TextStyle}>{title}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                }}
                            >
                                <Tooltip placement="bottom" title={title}>
                                    <div style={itemStyle} onClick={() => onItemClick(func)}>
                                        {ICONMapping[icon]}
                                    </div>
                                </Tooltip>
                            </Dropdown>
                        )
                    })}
                </div>
                {userInfo && (
                    <Dropdown menu={{ items }} disabled={head_userClick !== 'dropdown'} trigger={[head_userClickType]} >
                        <div className='usesBtn' style={usesBtnStyle} onClick={onUserClick}>
                            {head_avatar && <Avatar shape={head_AvatarTtpe} size={head_AvatarSize} src={UserAvatar[userInfo.avatar]} />}
                            {(head_userName || head_roleName) &&
                                <div className='nameData' style={{ alignItems: head_namePositon }}>
                                    {head_userName && <div style={userStyle}>{userInfo[head_userFilde]}</div>}
                                    {head_roleName && <div style={roleStyle}>{userInfo[head_roleFilde]}</div>}
                                </div>
                            }
                        </div>
                    </Dropdown>
                )}
                {head_offBtn && <div className='OffBtn' style={offBtnStyle} onClick={() => Navigate('/')}>{ICONMapping[head_offIcon]}</div>}
            </div>
        </div>
    );
};

export default memo(HeadA01);
