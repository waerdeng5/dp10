import { CloseCircleOutlined } from '@ant-design/icons'
import { Tabs, Button, Tooltip, Popconfirm } from 'antd'
import { memo, useCallback, useEffect, useState, cloneElement } from 'react'

import { CSS } from '@dnd-kit/utilities'
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers"
import { closestCenter, DndContext, PointerSensor, useSensor } from '@dnd-kit/core'
import { arrayMove, horizontalListSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable'


import { CONSTYLE } from '../../Config'
import { ColorCallBack, SpacingCallBack, SetFilderParams } from '../../Utils'

import { pageStore } from '../../Router/zustand'
import { ICONMapping } from '../../Config/IconMapping'

import MenuTypeDev from '../../Page/Admin/MenuTypeDev'
import MenuTypeLay from '../../Page/Admin/MenuTypeLay'
import MenuTypeDiy from '../../Page/Admin/MenuTypeDiy'

import { PutIndexedDB } from '../../Utils/IndexedDB'



const TemplateMapping = { dev: MenuTypeDev, lay: MenuTypeLay, diy: MenuTypeDiy }

const DraggableTabNode = ({ className, ...props }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props['data-node-key'] });
    const style = { ...props.style, transform: CSS.Translate.toString(transform), transition, cursor: 'pointer' };
    return cloneElement(props.children, { ref: setNodeRef, style, ...attributes, ...listeners });
};


const BodyA01 = ({ Theme, AdminEvent }) => {
    const { pageActive, pageList, updateActive, updateList } = pageStore()
    const { body_tabsPopup, body_tabsIsAll, body_tabsClose, body_tabsIsDnd, body_tabsClear } = Theme
    const { body_color, body_deg, body_padding, body_margin, body_radius, body_shadow } = Theme
    const { body_tabsBack, body_tabsActive, body_tabsDeg, body_tabsBorderColor, body_tabsRadio, body_tabsBorderType } = Theme
    const { body_iconState, body_iconSize, body_iconIndex, body_icon_filter, body_icon_filter_data, body_icon_filter_color } = Theme
    const { body_fontColor, body_fontSize, body_fontFamily, body_fontWeight, body_fontStyle, body_font_filter, body_font_filter_data, body_font_filter_color } = Theme

    const TabsStyle = {
        background: ColorCallBack(body_color, body_deg),
        padding: SpacingCallBack(body_padding),
        margin: SpacingCallBack(body_margin),
        borderRadius: SpacingCallBack(body_radius),
        boxShadow: `var(${body_shadow})`,
        '--tabsBack': ColorCallBack(body_tabsBack, body_tabsDeg),
        '--activeTabsBack': ColorCallBack(body_tabsActive, body_tabsDeg),
        '--tabsBorder': `1px ${body_tabsBorderType} ${body_tabsBorderColor}`,
        '--tabsRadius': SpacingCallBack(body_tabsRadio),
        '--tabsIconSize': body_iconSize + 'px',
        '--tabsIconIndex': body_iconIndex + 'px',
        '--tabsIconFilter': SetFilderParams(body_icon_filter, body_icon_filter_data, body_icon_filter_color),
        '--tabsFontColor': body_fontColor,
        '--tabsFontSize': body_fontSize + 'px',
        '--tabsFontFamily': body_fontFamily,
        '--tabsFontWeight': body_fontWeight,
        '--tabsFontStyle': body_fontStyle,
        '--tabsFontFilter': SetFilderParams(body_font_filter, body_font_filter_data, body_font_filter_color),
        '--tabsCloseColor': body_tabsClear,
    }

    const [items, setItems] = useState([])

    const onTabChange = useCallback(async (e) => {
        updateActive(e)
        await PutIndexedDB('openKey', e)
    }, [updateActive])

    const onEdit = useCallback(async (targetKey, action) => {
        if (action === 'remove') {
            const data = pageList.filter(item => item.uuid !== targetKey)
            if (pageActive === targetKey) {
                if (body_tabsClose === 0) {
                    updateActive(data.at(-1).uuid)
                    await PutIndexedDB('openKey', data.at(-1).uuid)
                }
                if (body_tabsClose === 1) {
                    updateActive('a0b4f6b8-ef44-4b43-925f-85a299eb52cb')
                    await PutIndexedDB('openKey', 'a0b4f6b8-ef44-4b43-925f-85a299eb52cb')
                }
            }
            updateList(data)
            await PutIndexedDB('pageList', data)
        }
    }, [items, pageActive])

    const onCloseAll = useCallback(async () => {
        const [data] = pageList
        updateList([data])
        updateActive('a0b4f6b8-ef44-4b43-925f-85a299eb52cb')
        await PutIndexedDB('pageList', [data])
        await PutIndexedDB('openKey', 'a0b4f6b8-ef44-4b43-925f-85a299eb52cb')
    }, [updateList])


    // 添加关闭确认
    const ExtraContent = {
        right: body_tabsIsAll && body_tabsPopup ?
            (
                <Popconfirm
                    title="关闭提醒"
                    description="是否关闭全部标签页?"
                    onConfirm={onCloseAll}
                    okText="关闭"
                    cancelText="取消"
                >
                    <Tooltip title="关闭全部" placement='left'>
                        <Button color="danger" variant="link" icon={<CloseCircleOutlined style={{ fontSize: 24 }} />} />
                    </Tooltip>
                </Popconfirm>
            ) :
            (
                <Tooltip title="关闭全部" placement='left'>
                    <Button color="danger" variant="link" onClick={onCloseAll} icon={<CloseCircleOutlined style={{ fontSize: 24 }} />} />
                </Tooltip>
            )
    }

    useEffect(() => {
        const data = pageList.map(item => {
            const { uuid, icon, tableName, type, closable } = item
            const Template = TemplateMapping[type]
            return ({
                closable: !closable,
                key: uuid,
                icon: body_iconState ? ICONMapping[icon] : null,
                label: tableName,
                children: <Template data={item} AdminEvent={AdminEvent} />
            })
        })
        setItems(data)
    }, [pageList])


    useEffect(() => {
        // const [{ tableName, targetUrl, type }] = pageList.filter(v => v.uuid === pageActive)
        // const { title, cssLog } = CONSTYLE[type]
        // console.info(`%c[${title} -- ${tableName} -- ${targetUrl}]`, cssLog)
    }, [pageActive])


    // 拖拽函数
    const sensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } });
    const onDragEnd = async ({ active, over }) => {
        if (active.id !== over?.id) {
            const activeIndex = items.findIndex(i => i.key === active.id);
            const overIndex = items.findIndex(i => i.key === over?.id)
            const data = arrayMove(items, activeIndex, overIndex)
            setItems(data)
        }
    };

    return (
        <div className='Body' style={TabsStyle}>
            <Tabs
                items={items}
                type="editable-card"
                hideAdd={true}
                activeKey={pageActive}
                onChange={onTabChange}
                onEdit={onEdit}
                tabBarExtraContent={pageList.length > 1 ? ExtraContent : null}
                renderTabBar={body_tabsIsDnd ? (tabBarProps, DefaultTabBar) => (
                    <DndContext sensors={[sensor]} onDragEnd={onDragEnd} collisionDetection={closestCenter} modifiers={[restrictToHorizontalAxis]}>
                        <SortableContext items={items.map(i => i.key)} strategy={horizontalListSortingStrategy}>
                            <DefaultTabBar {...tabBarProps}>
                                {node => (<DraggableTabNode {...node.props} key={node.key}>{node}</DraggableTabNode>)}
                            </DefaultTabBar>
                        </SortableContext>
                    </DndContext>
                ) : false}
            />
        </div>
    );
};

export default memo(BodyA01);