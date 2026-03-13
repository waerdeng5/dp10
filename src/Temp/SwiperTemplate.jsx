import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/grid';


import './SwiperTemplate.scss'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards, EffectCreative, Grid } from 'swiper/modules'
import { Button, Image } from 'antd'
import { ANIMATIONLIST } from './TemplateAnimation'
import { HappyProvider } from '@ant-design/happy-work-theme';
import { axios } from '../Utils/Api'
import { PutIndexedDB } from '../Utils/IndexedDB'
import { AttachTemplateA01 } from '../Temp/DevTemplate'


// 轮播窗口
export const SwiperLoginBack = ({ data = '', speed = 500, delay = 5000 }) => {
    const ImageList = data.split(',')
    return (
        <Swiper
            className='SwiperLoginBack'
            modules={[Autoplay, EffectFade]}
            loop={true}
            speed={speed}
            effect="fade"
            spaceBetween={30}
            allowTouchMove={false}
            autoplay={{ delay, disableOnInteraction: false }}
        >
            {ImageList.map((url, index) =>
                <SwiperSlide key={index}>
                    <img src={url} alt="" />
                </SwiperSlide>
            )}
        </Swiper>
    )
}

// 锁屏动画
export const SwiperLookAnimation = ({ Initial, userInfo, Event }) => {
    const [Loading, setLoading] = useState(false)
    const [Active, setActive] = useState(Object.keys(ANIMATIONLIST).findIndex(v => v === Initial))

    const onSelect = async (index) => {
        setLoading(true)
        const [getErr, getRes] = await axios({ method: 'get', url: 'dictionary/GetJsonInfoByUuid', params: { uuid: 'UserInfo' } })
        if (getErr) return console.log(getErr)
        const { userUuid } = userInfo
        const data = Object.keys(ANIMATIONLIST)[index]
        getRes[userUuid].animation = data
        const params = { uuid: 'UserInfo', content: JSON.stringify(getRes) }
        const [postErr] = await axios({ method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params })
        if (postErr) return console.log(postErr)
        setActive(index)
        PutIndexedDB('userAdd', getRes[userUuid])
        Event.emit({ type: 'onSelectLook', data })
        setLoading(false)
    }

    return (
        <Swiper
            className='SwiperLookAnimation'
            initialSlide={Active}
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
        >
            {Object.keys(ANIMATIONLIST).map((key, index) => {
                const Template = ANIMATIONLIST[key]
                return (
                    <SwiperSlide key={key}>
                        <div className='LookItem'>
                            <Template />
                            <div className='ActiveButton'>
                                <HappyProvider>
                                    {Active === index ?
                                        <Button
                                            color="primary"
                                            variant="solid"
                                            loading={Loading}
                                            icon={<i className="fas fa-check animate__animated  animate__tada animate__infinite" />}
                                        >
                                            已选动画
                                        </Button> :
                                        <Button
                                            color="default"
                                            variant="filled"
                                            loading={Loading}
                                            icon={<i className="far fa-circle" />}
                                            onClick={() => onSelect(index)}
                                        >
                                            可选动画
                                        </Button>
                                    }
                                </HappyProvider>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

// 轮播详情 -B20
export const SwiperB20Template = ({ data }) => {
    const { Initial, B20_field, B20_autoPlay, B20_delay, B20_direction, B20_speed, B20_show, B20_row, B20_col, B20_fill,
        B20_isPagin, B20_paginType, B20_progressbar, B20_bullets, B20_bulletsNumber
    } = data
    const list = Initial[B20_field]

    const SwiperParams = {
        modules: [Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards, EffectCreative, Grid],
        direction: B20_direction,
        speed: B20_speed,
        autoplay: B20_autoPlay && { delay: B20_delay },
        pagination: B20_isPagin && {
            type: B20_paginType,
            progressbarOpposite: B20_progressbar,
            dynamicBullets: B20_bullets,
            dynamicMainBullets: B20_bulletsNumber,
        },
    }
    if (B20_show === 'A02') {
        SwiperParams.slidesPerView = B20_col
        SwiperParams.grid = { fill: B20_fill, rows: B20_row }
    }


    return (
        <Swiper className='B20_swiper' {...SwiperParams}>
            {list.map(v => (
                <SwiperSlide key={v.uuid}>
                    <Image src={v.url} alt={v.url} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
