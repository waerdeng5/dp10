import './VideoTemplate.scss'
import { useSize } from 'ahooks'
import { useRef, useState, useEffect } from 'react'

// 视频背景
export const VideoTemplateA01 = ({ url, seekTimeStart = 0, seekTimeEnd = 10 }) => {
    const myRef = useRef(null)
    const easyPro = useRef(null)

    const data = { isLive: false, bufferTime: 0.2, loadTimeReplay: 3, loadTimeOut: 10, MSE: true, hasAudio: false, stretch: false, poster: '' }

    useEffect(() => {
        if (url) {
            if (easyPro.current) easyPro.current.destroy().then(create)
            else create()
        }
    }, [url])

    const create = () => {
        easyPro.current = new window.EasyPlayerPro(myRef.current, data)
        play()
    }

    const play = () => {
        if (!easyPro.current) return create()
        easyPro.current.play(url).catch(destroy)
    }

    const destroy = () => {
        if (!easyPro.current) return create()
        easyPro.current.destroy(url)
    }

    const seekTime = time => easyPro.current.seekTime(time)

    useEffect(() => {
        if (easyPro.current) {
            easyPro.current.on('timestamps', function (e) {
                if (seekTimeEnd && seekTimeEnd === e) seekTime(seekTimeStart)
            })
        }
    }, [easyPro])

    return <div className='VideoTempA01' ref={myRef} />
};

// 视频预览封面
export const VideoTemplateA02 = ({ url }) => {
    // return
    const myRef = useRef(null)
    const easyPro = useRef(null)

    const data = { isLive: false, bufferTime: 0.2, loadTimeReplay: 3, loadTimeOut: 10, MSE: true, hasAudio: false, stretch: false, poster: '' }

    const create = () => {
        easyPro.current = new window.EasyPlayerPro(myRef.current, data)
        play()
    }

    const play = () => {
        if (!easyPro.current) return create()
        easyPro.current.play(url).catch(destroy)
    }

    const destroy = () => {
        if (!easyPro.current) return create()
        easyPro.current.destroy(url)
    }


    useEffect(() => {
        if (url) {
            if (easyPro.current) easyPro.current.destroy().then(create)
            else create()
        }
        return () => destroy()
    }, [url])


    return <div className='VideoTempA02' ref={myRef} />
}

// 各类监控统一处理
export const VideoTemplateA03 = ({ data }) => {
    const myRef = useRef(null)
    const SIZE = useSize(myRef)
    const { deviceSerial, channelNo, tableName, tableName1, token, cameraFactory, playUrl, hd, ptz } = data
    const [Url, setUrl] = useState('')
    useEffect(() => {
        const url = 'https://yingshi.ljkjkf.com'
        if (SIZE) {
            const { width, height } = SIZE
            if (cameraFactory === 1)
                setUrl(`${url}/webvideo.html?url=ezopen://open.ys7.com/${deviceSerial}/${channelNo}${hd ? '.hd' : ''}.live&token=${token}&width=${width}&height=${height}`)
            else if (cameraFactory === 2)
                setUrl(`${url}/webLive.html?url=imou://open.lechange.com/${deviceSerial}/${channelNo}/1?streamId=1|kitToken=${token}&width=${width}&height=${height}`)
            else if (cameraFactory === 4) setUrl(playUrl || '')
            else if (cameraFactory === 5) setUrl(playUrl || '')
        }
    }, [cameraFactory, channelNo, deviceSerial, token, playUrl, hd, SIZE])

    return (
        <div className='VideoTemplateA03' ref={myRef}>
            {(cameraFactory === 1 || cameraFactory === 2) &&
                <iframe
                    title="Video"
                    src={Url}
                    width="100%"
                    height="100%"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                />
            }
        </div>
    )
}

// 直播视频
export const VideoTemplateA04 = ({ url }) => {
    // return
    const myRef = useRef(null)
    const easyPro = useRef(null)

    const data = { isLive: true, bufferTime: 0.2, loadTimeReplay: 3, loadTimeOut: 10, MSE: true, hasAudio: false, stretch: false, poster: '' }

    const create = () => {
        easyPro.current = new window.EasyPlayerPro(myRef.current, data)
        play()
    }

    const play = () => {
        if (!easyPro.current) return create()
        easyPro.current.play(url).catch(destroy)
    }

    const destroy = () => {
        if (!easyPro.current) return create()
        easyPro.current.destroy(url)
    }


    useEffect(() => {
        if (url) {
            if (easyPro.current) easyPro.current.destroy().then(create)
            else create()
        }
        return () => destroy()
    }, [url])


    return <div className='VideoTempA02' ref={myRef} />
}
