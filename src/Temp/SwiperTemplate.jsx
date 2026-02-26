import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'
import './SwiperTemplate.scss'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Scrollbar } from 'swiper/modules'
import { Button } from 'antd'
import { ANIMATIONLIST } from './TemplateAnimation'
import { HappyProvider } from '@ant-design/happy-work-theme';
import { axios } from '../Utils/Api'
import { PutIndexedDB } from '../Utils/IndexedDB'


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
