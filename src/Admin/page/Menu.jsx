import { useMount } from "ahooks"
import { useState, useCallback, memo } from "react"
import { Menu, Tooltip, Button, App } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons'

import { ICONMapping } from '../../Config/IconMapping'
import { GetIndexedDB, PutIndexedDB } from '../../Utils/IndexedDB'

import { menuCollapsedStore, pageStore } from '../../Router/zustand'
import { ColorCallBack, SpacingCallBack, treeValue, OpenMenuFunc, SetFilderParams } from '../../Utils'
import { DevScrollView } from '../../Temp/DevTemplate'

import { HappyProvider } from '@ant-design/happy-work-theme';


const MenuA01 = ({ Theme, AdminEvent }) => {
    const { message, modal, notification } = App.useApp();
    const { inlineCollapsed, updateMenuCollapsed } = menuCollapsedStore()
    const { pageActive, updateActive, pageList, updateList } = pageStore()
    const pageFunc = { pageActive, pageList, updateActive, updateList }


    const {
        body_tabsMax,
        layout,
        themeColor,
        menu_color = "#ffffff00",
        menu_deg = 0,
        menu_margin = "0",
        menu_padding = "0",
        menu_radius = "0",
        menu_shadow = "--shadow-none",
        menu_class = 'menuDefault',
        menu_class_active = '',
        menu_icon_color = "#1677ff",
        menu_icon_size = 24,
        menu_icon_index = 8,
        // menu_icon_shadowX = 1,
        // menu_icon_shadowY = 1,
        // menu_icon_shadowS = 1,
        // menu_icon_shadowC = "#262626",
        menu_icon_filter,
        menu_icon_filter_data,
        menu_icon_filter_color,
        menu_text_color = "#262626",
        menu_text_active = "#262626",
        menu_text_size = 20,
        menu_text_family = "ShuHeiTi",
        menu_text_style = "normal",
        menu_text_weight = 400,
        menu_text_filter,
        menu_text_filter_data,
        menu_text_filter_color,
        menu_fold_color = "#1677ff",
        menu_fold_size = 20,
        menu_fold_filter,
        menu_fold_filter_data,
        menu_fold_filter_color
    } = Theme

    const [MENU, setMENU] = useState([])
    const [MENUArr, setMENUArr] = useState([])

    const BackStyle = {
        background: ColorCallBack(menu_color, menu_deg),
        padding: SpacingCallBack(menu_padding),
        margin: SpacingCallBack(menu_margin),
        borderRadius: SpacingCallBack(menu_radius),
        boxShadow: `var(${menu_shadow})`,
        '--foltColor': menu_fold_color,
        '--foltSize': menu_fold_size + 'px',
        '--foltFilter': SetFilderParams(menu_fold_filter, menu_fold_filter_data, menu_fold_filter_color),
        '--activeBack': ColorCallBack(menu_class_active, menu_deg),
    }

    const MenuStyle = {
        background: '#00000000',
        '--active': themeColor,
        '--active50': themeColor + '50',
        '--iconColor': menu_icon_color,
        '--iconSize': menu_icon_size + 'px',
        '--iconIndex': menu_icon_index + 'px',
        '--iconFilter': SetFilderParams(menu_icon_filter, menu_icon_filter_data, menu_icon_filter_color),
        '--textColor': menu_text_color,
        '--textActive': menu_text_active,
        '--textSize': menu_text_size + 'px',
        '--textFamily': menu_text_family,
        '--textStyle': menu_text_style,
        '--textWeight': menu_text_weight,
        '--textFilter': SetFilderParams(menu_text_filter, menu_text_filter_data, menu_text_filter_color),
    }

    const getItem = ({ uuid, isEnabled, other, mapping }) => {
        const { tableName, targetUrl, icon } = other
        return { key: uuid, label: mapping[uuid] || tableName, icon: icon ? ICONMapping[icon] : null, enabled: isEnabled, url: targetUrl }
    }

    const getMenu = useCallback((menu, role, state, mapping) => {
        return menu.reduce((menuData, { uuid, isEnabled, children, type, ...other }) => {
            if (isEnabled === 0 || type === 'power' || type === 'two') return menuData
            const item = getItem({ uuid, isEnabled, other, mapping })
            if (!state) {
                if (children?.length) {
                    const childMenu = getMenu(children, role, state, mapping)
                    if (childMenu.length > 0) item.children = childMenu
                }
                menuData.push(item)
            } else if (state) {
                if (children?.length) {
                    const childMenu = getMenu(children, role, state, mapping)
                    if (childMenu.length > 0) item.children = childMenu
                }
                menuData.push(item)
            }
            return menuData
        }, [])
    }, [])

    const getMenuData = async () => {
        const menu = await GetIndexedDB('menu')
        const data = getMenu(menu.find(v => v.targetUrl === 'ADMIN').children, {}, '', {})
        setMENU(data)
        setMENUArr(menu)
    }

    useMount(getMenuData)

    const onSelect = (e) => OpenMenuFunc(e.key, pageFunc, body_tabsMax)

    const onIsFold = useCallback(() => updateMenuCollapsed(!inlineCollapsed), [inlineCollapsed, updateMenuCollapsed])

    const adminCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['changeMenu', () => getMenuData()],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    AdminEvent.useSubscription(adminCallBack)


    return (
        <div className='Menu' style={BackStyle}>
            <DevScrollView>
                <Menu
                    className={menu_class}
                    style={MenuStyle}
                    mode="inline"
                    items={MENU}
                    onSelect={onSelect}
                    selectedKeys={[pageActive]}
                    inlineCollapsed={inlineCollapsed}
                />
            </DevScrollView>
            <Tooltip title={inlineCollapsed ? '展开' : '收起'}>
                <Button block type="link" icon={inlineCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={onIsFold} />
            </Tooltip>
        </div>
    );
};

export default memo(MenuA01);
