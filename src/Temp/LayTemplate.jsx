
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

import { v4 } from 'uuid'
import { useState, useRef, useEffect } from 'react'
import { Button, Dropdown, Popconfirm } from 'antd'

import { useSize, useMount } from 'ahooks'
import ReactGridLayout from 'react-grid-layout'
import { GridBackground } from "react-grid-layout/extras"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards, EffectCreative } from 'swiper/modules'

import { modelStore } from '../Router/zustand'
import { ICONMapping } from '../Config/IconMapping'
import { PrefabricatedChartTemplate } from './PrefabricatedChart'
import { PrefabricatedPlaceTemplate } from './PrefabricatedPlace'
import { PrefabricatedDiyTemplate } from './PrefabricatedDiy'
import { PrefabricatedListTemplate } from './PrefabricatedList'
import { PrefabricatedImgTextTemplate } from './PrefabricatedImgText'
import { PrefabricatedTableTemplate } from './PrefabricatedTable'
import { PrefabricatedSelectTemplate } from './PrefabricatedSelect'
import { PrefabricatedSwiperTemplate } from './PrefabricatedSwiper'
import { PrefabricatedVisualTemplate } from './PrefabricatedVisual'

import { BitsTextTemplate } from '../Bits/BitsText'
import { BitsComponentsTemplate } from '../Bits/BitsComponents'
import { BitsMicroTemplate } from '../Bits/BitsMicro'
import { BitsAnimationsTemplate } from '../Bits/BitsAnimations'
import { BitsBackgroundsTemplate } from '../Bits/BitsBackgrounds'


import { GetIndexedDB } from '../Utils/IndexedDB'

import { ColorCallBack, SpacingCallBack, SetBorderParams, SetFilderParams } from '../Utils'

import {
    PlaceTempList,
    ChartTempList,
    DIYTempList,
    ImgAndTextTempList,
    ListTempList,
    TableTemplate,
    TemplateParamsMapping,
    SelectTemplate,
    SwiperTemplatePage,
    VisualTemplatePage,
    BITSTextTemplate,
    BITSComponentsTemplate,
    BITSMicroTemplate,
    BITSAnimationsTemplate,
    BITSBackgroundsTemplate,
} from '../Config'

const { port } = window.location
const TemplateMapping = [
    ...PlaceTempList,
    ...ChartTempList,
    ...DIYTempList,
    ...ImgAndTextTempList,
    ...ListTempList,
    ...TableTemplate,
    ...SelectTemplate,
    ...SwiperTemplatePage,
    ...VisualTemplatePage,
    ...BITSTextTemplate,
    ...BITSComponentsTemplate,
    ...BITSMicroTemplate,
    ...BITSAnimationsTemplate,
    ...BITSBackgroundsTemplate,
]
const TemplateComponentMapping = {
    ...PrefabricatedChartTemplate,
    ...PrefabricatedPlaceTemplate,
    ...PrefabricatedDiyTemplate,
    ...PrefabricatedImgTextTemplate,
    ...PrefabricatedListTemplate,
    ...PrefabricatedTableTemplate,
    ...PrefabricatedSelectTemplate,
    ...PrefabricatedSwiperTemplate,
    ...PrefabricatedVisualTemplate,
    ...BitsTextTemplate,
    ...BitsComponentsTemplate,
    ...BitsMicroTemplate,
    ...BitsAnimationsTemplate,
    ...BitsBackgroundsTemplate,
}

export const GlobalOperation = ({ type, winId, layId, actId, tempId, form, LayoutEvent }) => {
    return ([
        {
            key: '1-0', type: 'group', label: '全局操作', children: [
                { key: '1-1', label: (<Button type='link' onClick={() => LayoutEvent.emit({ type: 'onSetApiData' })}>接口信息</Button>) },
                { key: '1-2', label: (<Button type='link' onClick={() => LayoutEvent.emit({ type: 'onAddWindow' })}>添加小窗</Button>) },
                { key: '1-3', label: (<Button type='link' onClick={() => LayoutEvent.emit({ type: 'onSaveLayout' })}>保存布局</Button>) },
                {
                    key: '1-4', label: (
                        <Popconfirm
                            title="删除提醒"
                            description="是否要清空当前布局?请谨慎操作!"
                            onConfirm={() => LayoutEvent.emit({ type: 'onDeleteData' })}
                            okText="清除"
                            cancelText="取消"
                        >
                            <Button type='link' danger>清空数据</Button>
                        </Popconfirm>
                    )
                },
            ]
        },
        (type === 'window' || type === 'layout' || type === 'template') &&
        {
            key: '2-0', type: 'group', label: '小窗设置', children: [
                { key: '2-1', label: (<Button type='link' onClick={() => LayoutEvent.emit({ type: 'onSetWindowParams', data: winId })}>小窗设置</Button>) },
                {
                    key: '2-2', label: (
                        <Popconfirm
                            title="删除提醒"
                            description="是否删除当前窗口?请谨慎操作!"
                            onConfirm={() => LayoutEvent.emit({ type: 'onDeleteWindow', data: winId })}
                            okText="删除"
                            cancelText="取消"
                        >
                            <Button type='link' danger >删除小窗</Button>
                        </Popconfirm>
                    )
                },
            ]
        },
        (type === 'layout' || type === 'template') &&
        {
            key: '3-0', type: 'group', label: '小窗布局', children: [
                actId !== layId &&
                { key: '3-1', label: (<Button type='link' onClick={() => LayoutEvent.emit({ type: 'onActiveLayout', data: layId })}>激活布局 </Button>) },
                actId === layId &&
                { key: '3-2', label: (<Button type='link' danger onClick={() => LayoutEvent.emit({ type: 'onEndLayout', data: layId })}>结束并保存 </Button>) },
                actId === layId &&
                { key: '3-3', label: (<Button type='link' onClick={() => LayoutEvent.emit({ type: 'onAddTemplate', data: layId })}>添加模块</Button>) },
                {
                    key: '3-4', label: (
                        <Popconfirm
                            title="删除提醒"
                            description="是否清除当前布局?请谨慎操作!"
                            onConfirm={() => LayoutEvent.emit({ type: 'onDeleteLayout', data: layId })}
                            okText="清除"
                            cancelText="取消"
                        >
                            <Button type='link' danger>清空布局</Button>
                        </Popconfirm>
                    )
                },
            ].filter(v => v)
        },
        type === 'template' &&
        {
            key: '4-0', type: 'group', label: '模块设置', children: [
                { key: '4-1', label: (<Button type='link' onClick={() => LayoutEvent.emit({ type: 'onSetTemplateParams', data: { form, tempId } })} >编辑模块</Button>) },
                {
                    key: '4-2', label: (
                        <Popconfirm
                            title="删除提醒"
                            description="是否删除当前模块?请谨慎操作!"
                            onConfirm={() => LayoutEvent.emit({ type: 'onDeleteTemplate', data: { layId, tempId } })}
                            okText="删除"
                            cancelText="取消"
                        >
                            <Button type='link' danger>删除模块</Button>
                        </Popconfirm>
                    )
                },
            ]
        },
    ].filter(v => v))
}

export const LayoutTemplate = ({ UrlData, status, winId, layId, actId, params, winData, LayoutEvent }) => {
    const { updateModel4, updateModel5 } = modelStore()
    const layRef = useRef(null)
    const SIZE = useSize(layRef)
    const Active = layId === actId

    const [STATUS, setSTATUS] = useState(false)
    const [LayoutData, setLayoutData] = useState(winData[layId] || [])

    const onSelectTemplate = (data) => {
        if (layId === data.layId) {
            const Temp = TemplateMapping.find(v => v.uuid === data.tempId)
            if (!Temp) return console.error('模块不存在', data.tempId)
            const i = v4()
            const { x, y, w, h } = Temp
            const layout = { i, x, y, w, h }
            setLayoutData(prev => [...prev, layout])
            LayoutEvent.emit({ type: 'onAddTemplateParams', data: { tempId: i, params: TemplateParamsMapping[data.tempId] } })
            updateModel5({})
        }
    }

    const onActiveLayout = (e) => {
        if (actId && actId !== layId) onEndLayout(actId)
        setSTATUS(e === layId)
    }

    const onEndLayout = e => {
        if (layId === e) {
            setSTATUS(false)
            LayoutEvent.emit({ type: 'onSaveTemplateLayout', data: { layId, data: LayoutData } })
        }
    }
    const onDeleteLayoutRender = e => {
        if (e === layId) setLayoutData([])
    }

    const onDeleteTemplateRender = e => {
        if (e.layId === layId) setLayoutData(prev => prev.filter(v => v.i !== e.tempId))
    }

    const layoutCallBack = e => {
        const { type, data } = e
        // console.log('Lay', e)
        const Mapping = new Map([
            ['onSelectTemplate', () => onSelectTemplate(data)],
            ['onActiveLayout', () => onActiveLayout(data)],
            ['onEndLayout', () => onEndLayout(data)],
            ['onDeleteLayout', () => onDeleteLayoutRender(data)],
            ['onDeleteTemplate', () => onDeleteTemplateRender(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    LayoutEvent.useSubscription(layoutCallBack)

    return (
        <div className='WindowLayout' ref={layRef}>
            {SIZE &&
                <>
                    {Active &&
                        <GridBackground
                            className='LayoutBack'
                            cols={24}
                            rows={24}
                            width={SIZE.width}
                            rowHeight={SIZE.height / 24}
                            margin={[0, 0]}
                            color="#cccccc10"
                            borderRadius={4}
                        />
                    }
                    {/* {Active && <div className='SCALE'>8*8</div>} */}
                    <ReactGridLayout
                        resizeConfig={{ enabled: STATUS }}
                        dragConfig={{ enabled: STATUS }}
                        width={SIZE.width}
                        layout={LayoutData}
                        isBounded={true}
                        gridConfig={{ cols: 24, rowHeight: SIZE.height / 24, margin: [0, 0] }}
                        onLayoutChange={setLayoutData}
                    >
                        {LayoutData.map(item => {
                            if (!params[item.i]) return console.error('模块未声明', item.i)
                            const TemplateComponent = TemplateComponentMapping[params[item.i].value]
                            item.resizeHandles = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw']
                            return (
                                <div key={item.i} className='LayoutBox child-grid-item'>
                                    {Active && <div className='SCALE'>template : {item.w}*{item.h}</div>}
                                    <Dropdown
                                        trigger={['contextMenu']}
                                        menu={{
                                            items: (port && status) ?
                                                GlobalOperation({
                                                    type: 'template',
                                                    winId,
                                                    layId,
                                                    actId,
                                                    LayoutEvent,
                                                    tempId: item.i,
                                                    form: params[item.i].value,
                                                }) : []
                                        }}
                                    >
                                        <div className={`TemplateBox`} onContextMenu={(e) => e.stopPropagation()}>
                                            <TemplateComponent tempId={item.i} data={params[item.i]} UrlData={UrlData} LayoutEvent={LayoutEvent} />
                                        </div>
                                    </Dropdown>
                                </div>
                            )
                        })}
                    </ReactGridLayout>
                </>
            }
        </div>
    )
}

export const SwiperTemplate = ({ UrlData, data, status, params, winData, LayoutEvent }) => {
    const {
        window_nav, window_NavList, window_NavType, window_NavOptions, window_navWidth, window_navHeight,
        window_navMar, window_navPad, window_navBack, window_navDeg, window_navBorder, window_navBorSize, window_navBorType, window_navBorColor,
        window_navColor, window_navDeg2, window_navSize, window_navFamily, window_navWeight, window_navStyle, window_navFilter, window_navFilterSize, window_navFilterColor, window_navIcon, window_navIconSize, window_navIconFilter, window_navIconFilterSize, window_navIconFilterColor,
        window_actMar, window_actPad, window_actBack, window_actDeg, window_actBorder, window_actBorSize, window_actBorType, window_actBorColor,
        window_actColor, window_actDeg2, window_actSize, window_actFamily, window_actWeight, window_actStyle, window_actFilter, window_actFilterSize, window_actFilterColor, window_actIcon, window_actIconSize, window_actIconFilter, window_actIconFilterSize, window_actIconFilterColor,
        window_swiperPagination, window_swiperPaginationClickable, window_swiperPaginationType, window_swiperPaginationOpposite, window_swiperPaginationDynamicBullets,
        window_swiperPaginationDynamicBulletsNumber, window_swiperScrollbar, window_swiperScrollbarDraggable, window_swiperScrollbarHide,
        window_swiperDirection, window_swiperSpeed, window_swiperNoSwiping, window_swiperLoop, window_swiperAutoplay, window_swiperDelay,
        window_swiperEffects, window_swiperFadeEffect, window_swiperFlipSlideShadows, window_swiperFlipLimitRotation, window_swiperCardsSlideShadows,
        window_swiperCubeSlideShadows, window_swiperCubeShadow, window_swiperCubeShadowOffset, window_swiperCubeShadowScale,
        window_swiperCoverflowRotate, window_swiperCoverflowStretch, window_swiperCoverflowDepth, window_swiperCoverflowModifier, window_swiperCoverflowSlideShadows,
        window_navPadding, window_navMargin
    } = params[data.i]
    const style = window_nav && {
        flexDirection: window_NavType === 'vertical' ? 'column' : 'row',
        width: window_NavType === 'vertical' ? 'auto' : '100%',
        padding: SpacingCallBack(window_navPadding),
        margin: SpacingCallBack(window_navMargin),
    }

    const [User, setUser] = useState()
    const [STATUS, setSTATUS] = useState()
    const [SWIPER, setSWIPER] = useState()
    const [Active, setActive] = useState(window_NavList.length !== 0 ? window_NavList[0].window_navUuid : '')

    const detailBack = {
        margin: SpacingCallBack(window_navMar),
        padding: SpacingCallBack(window_navPad),
        background: ColorCallBack(window_navBack, window_navDeg),
        border: SetBorderParams(window_navBorder, window_navBorSize, window_navBorType, window_navBorColor),
    }
    const detailIcon = window_nav && {
        color: window_navIcon,
        fontSize: window_navIconSize,
        filter: SetFilderParams(window_navIconFilter, window_navIconFilterSize, window_navIconFilterColor),
    }
    const detailText = window_nav && {
        '--textColor': ColorCallBack(window_navColor, window_navDeg2),
        fontSize: window_navSize,
        fontFamily: window_navFamily,
        fontWeight: window_navWeight,
        fontStyle: window_navStyle,
        filter: SetFilderParams(window_navFilter, window_navFilterSize, window_navFilterColor),
    }
    const activeBack = window_nav && {
        margin: SpacingCallBack(window_actMar),
        padding: SpacingCallBack(window_actPad),
        background: ColorCallBack(window_actBack, window_actDeg),
        border: SetBorderParams(window_actBorder, window_actBorSize, window_actBorType, window_actBorColor),
    }
    const activeIcon = window_nav && {
        color: window_actIcon,
        fontSize: window_actIconSize,
        filter: SetFilderParams(window_actIconFilter, window_actIconFilterSize, window_actIconFilterColor),
    }
    const activeText = window_nav && {
        '--textColor': ColorCallBack(window_actColor, window_actDeg2),
        fontSize: window_actSize,
        fontFamily: window_actFamily,
        fontWeight: window_actWeight,
        fontStyle: window_actStyle,
        filter: SetFilderParams(window_actFilter, window_actFilterSize, window_actFilterColor),
    }
    if (window_nav && window_NavType === 'horizontal') {
        detailBack.flex = 1
        activeBack.flex = 1
        detailBack.height = window_navHeight
        activeBack.height = window_navHeight
    }
    if (window_nav && window_NavType === 'vertical') {
        detailBack.width = window_navWidth
        activeBack.width = window_navWidth
        detailBack.height = window_navHeight
        activeBack.height = window_navHeight
    }

    const SwiperParams = {
        modules: [Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards, EffectCreative],
        slidesPerView: 1,
        centeredSlides: true,
        direction: window_swiperDirection,
        speed: window_swiperSpeed,
        noSwiping: status ? true : window_swiperNoSwiping || false,
        loop: window_swiperLoop,
        autoplay: window_swiperAutoplay && { delay: window_swiperDelay },
        watchOverflow: true,
        pagination: window_swiperPagination && {
            type: window_swiperPaginationType,
            clickable: window_swiperPaginationClickable,
            progressbarOpposite: window_swiperPaginationOpposite,
            dynamicBullets: window_swiperPaginationDynamicBullets,
            dynamicMainBullets: window_swiperPaginationDynamicBulletsNumber,
        },
        scrollbar: window_swiperScrollbar && {
            hide: window_swiperScrollbarHide,
            draggable: window_swiperScrollbarDraggable,
        },
        effect: window_swiperEffects,
        fadeEffect: { crossFade: window_swiperFadeEffect },
        cubeEffect: {
            slideShadows: window_swiperCubeSlideShadows,
            shadow: window_swiperCubeShadow,
            shadowOffset: window_swiperCubeShadowOffset,
            shadowScale: window_swiperCubeShadowScale
        },
        coverflowEffect: {
            rotate: window_swiperCoverflowRotate,
            stretch: window_swiperCoverflowStretch,
            depth: window_swiperCoverflowDepth,
            modifier: window_swiperCoverflowModifier,
            slideShadows: window_swiperCoverflowSlideShadows
        },
        flipEffect: {
            slideShadows: window_swiperFlipSlideShadows,
            limitRotation: window_swiperFlipLimitRotation,
        },
        cardsEffect: {
            slideShadows: window_swiperCardsSlideShadows,
            //transformEl:'.text',
        },
        onSlideChange: (e) => setActive(window_NavList.length !== 0 ? window_NavList[e.activeIndex].window_navUuid : 0),
        onSwiper: setSWIPER
    }

    const layoutCallBack = e => {
        const { type, data } = e
        const Mapping = new Map([
            ['onActiveLayout', () => setSTATUS(data)],
            ['onEndLayout', () => setSTATUS()]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    LayoutEvent.useSubscription(layoutCallBack)

    useEffect(() => {
        if (SWIPER) SWIPER.slideTo(window_NavList.findIndex(v => v.window_navUuid === Active), window_swiperSpeed, false)
    }, [Active, SWIPER])

    useMount(async () => {
        const user = await GetIndexedDB('user')
        setUser(user)
    })

    return (
        <>
            {window_nav &&
                <div className='WindowNav' style={style}>
                    {window_NavList.map(item => (
                        <div
                            className='WindowNavItem'
                            key={item.window_navUuid}
                            style={Active === item.window_navUuid ? activeBack : detailBack}
                            onClick={() => setActive(item.window_navUuid)}
                        >
                            <div className='icon' style={Active === item.window_navUuid ? activeIcon : detailIcon}>{ICONMapping[item.window_NavIcon]}</div>
                            <div className='text' style={Active === item.window_navUuid ? activeText : detailText}>{item.window_NavLabel}</div>
                        </div>
                    ))}
                </div>
            }
            <div className='WindowSwiper' >
                <Swiper {...SwiperParams} >
                    {window_NavList && window_NavList.map(item => {
                        const { window_navUuid } = item
                        const layoutStyle = STATUS === window_navUuid
                        return (
                            <SwiperSlide key={window_navUuid}>
                                <Dropdown
                                    trigger={['contextMenu']}
                                    menu={{ items: ((port || User?.userUuid === '1e99e116-6ec0-425c-87b4-64dd2ce458e2') && status) ? GlobalOperation({ type: 'layout', winId: data.i, layId: window_navUuid, actId: STATUS, LayoutEvent }) : [] }}
                                >
                                    <div
                                        className={`WindowSwiperItem ${SwiperParams.noSwiping || layoutStyle ? 'swiper-no-swiping' : ''} ${layoutStyle ? 'Edit' : 'Preview'}`}
                                        onContextMenu={(e) => e.stopPropagation()}
                                        onMouseDown={(e) => STATUS ? e.stopPropagation() : null}
                                    >
                                        <LayoutTemplate
                                            status={status}
                                            winId={data.i}
                                            layId={window_navUuid}
                                            actId={STATUS}
                                            params={params}
                                            winData={winData}
                                            LayoutEvent={LayoutEvent}
                                            UrlData={UrlData}
                                        />
                                    </div>
                                </Dropdown>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}