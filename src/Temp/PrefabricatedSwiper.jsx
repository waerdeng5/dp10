import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/grid';
import 'swiper/css/mousewheel';


import { Swiper, SwiperSlide } from 'swiper/react'
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    EffectCards,
    EffectCreative,
    Grid,
    Mousewheel,
    FreeMode
} from 'swiper/modules'


import {
    ColorCallBack,
    SpacingCallBack,
    SpacingSizeCallBack,
    UnitCallBackStruct,
    SetFilderParams,
    DiyDataReturn
} from '../Utils'
import { useEffect, useState } from 'react';

const testList = [{}, {}, {}, {}, {}, {}, {}, {}, {}]

const PrefabricatedSwiperBox = ({ tempId, UrlData, data, LayoutEvent }) => {
    const [dataList, setDataList] = useState()
    const {
        api_source, api_dataType,
        swiper_direction, swiper_speed, swiper_slidesPerView, swiper_spaceBetween, swiper_allowTouchMove, swiper_freeMode,
        swiper_mousewheel, swiper_loop, swiper_navigation, swiper_pagination, swiper_scrollbar, swiper_autoPlay, swiper_delay,
        swiper_pagination_clickable, swiper_pagination_type, swiper_pagination_opposite, swiper_pagination_dynamicBullets,
        swiper_pagination_dynamicBulletsNumber, swiper_scrollbar_draggable, swiper_scrollbar_hide,
        align_items, align_content, justify_content, flex_direction, flex_wrap,
        padding, margin, back_color, back_deg, isImage, isText,
        img_type, img_url, img_widthUnit, img_width, img_heightUnit, img_height, img_margin, img_objectFit,
        item_widthUnit, item_width, item_heightUnit, item_height, item_color, item_deg, item_padding, item_margin,
        item_align_items, item_align_content, item_justify_content, item_flex_direction, item_flex_wrap, list,
        swiper_cover, swiper_cover_url
    } = data

    const SWIPER_CONFIG = {
        modules: [
            FreeMode, Mousewheel, Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid,
            EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards, EffectCreative,
        ],
        direction: swiper_direction,
        speed: swiper_speed,
        slidesPerView: swiper_slidesPerView,
        spaceBetween: swiper_spaceBetween,
        allowTouchMove: swiper_allowTouchMove,
        freeMode: swiper_freeMode,
        mousewheel: swiper_mousewheel,
        loop: swiper_loop,
        navigation: swiper_navigation,
        autoplay: swiper_autoPlay && { delay: swiper_delay },

        pagination: swiper_pagination && {
            type: swiper_pagination_type,
            clickable: swiper_pagination_clickable,
            progressbarOpposite: swiper_pagination_opposite,
            dynamicBullets: swiper_pagination_dynamicBullets,
            dynamicMainBullets: swiper_pagination_dynamicBulletsNumber,
        },
        scrollbar: swiper_scrollbar && {
            hide: swiper_scrollbar_hide,
            draggable: swiper_scrollbar_draggable,
        },
    }

    const backStyle = {
        '--alignItems': align_items,
        '--alignContent': align_content,
        '--justifyContent': justify_content,
        '--flexDirection': flex_direction,
        '--flexWrap': flex_wrap,
        width: SpacingSizeCallBack(margin, 100),
        height: SpacingSizeCallBack(margin, 100, true),
        background: ColorCallBack(back_color, back_deg),
        padding: SpacingCallBack(padding),
        margin: SpacingCallBack(margin),
    }

    const imgStyle = {
        ...UnitCallBackStruct(img_widthUnit, img_width, 'width'),
        ...UnitCallBackStruct(img_heightUnit, img_height, 'height'),
        objectFit: img_objectFit,
        margin: SpacingCallBack(img_margin),
    }

    const itemStyle = {
        ...UnitCallBackStruct(item_widthUnit, item_width, 'width'),
        ...UnitCallBackStruct(item_heightUnit, item_height, 'height'),
        background: ColorCallBack(item_color, item_deg),
        padding: SpacingCallBack(item_padding),
        margin: SpacingCallBack(item_margin),
        '--itemAlignItems': item_align_items,
        '--itemAlignContent': item_align_content,
        '--itemJustifyContent': item_justify_content,
        '--itemFlexDirection': item_flex_direction,
        '--itemFlexWrap': item_flex_wrap,
    }


    useEffect(() => {
        if (api_source === 'A01') setDataList(testList)
        if (api_source === 'A02') {
            const backData = DiyDataReturn(data, UrlData, [{}, {}, {}, {}, {}, {}, {}, {}, {}], 'api_diyObj')
            setDataList(backData)
        }
    }, [data, UrlData])



    return (
        <div className="PrefabricatedSwiperBox">
            {swiper_cover && <img className='SwiperCover' src={swiper_cover_url} alt="" />}
            <Swiper
                className='SwiperBox'
                {...SWIPER_CONFIG}
            >
                {dataList && dataList.map((v, i) =>
                    <SwiperSlide key={i}>
                        <div className='SwiperSlideItem' style={backStyle} onClick={() => console.log(i)}>
                            {isImage &&
                                <img className='SwiperSlideItemImg' style={imgStyle} src={img_type === 'A01' ? img_url : v[img_url]} alt={img_type} />
                            }
                            {isText &&
                                <div className='SwiperSlideItemText' style={itemStyle}>
                                    {list.map((k, i) => {
                                        const { type, field, color, deg, padding, size, family, weight, style, filed, filed_data, filed_color } = k

                                        const textStyle = {
                                            '--color': ColorCallBack(color, deg),
                                            fontSize: SpacingCallBack(size),
                                            fontFamily: family,
                                            fontWeight: weight,
                                            fontStyle: style,
                                            padding: SpacingCallBack(padding),
                                            filter: SetFilderParams(filed, filed_data, filed_color)
                                        }

                                        return (
                                            <div key={i} className='itemText' style={textStyle}>
                                                {type === 'A01' ? field : v[field]}
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export const PrefabricatedSwiperTemplate = {
    PrefabricatedSwiperBox
};