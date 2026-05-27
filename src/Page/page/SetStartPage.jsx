import './SetStartPage.scss'
import { useState } from 'react'
import { Skeleton, Result, Button, Radio } from 'antd'
import { useEventEmitter, useMount } from 'ahooks'

import { axios } from '../../Utils/Api'
import { modelStore } from '../../Router/zustand'
import { CommonAPIUrl } from '../../Config'
import { Encrypt, Decrypt, GetIndexedDB } from '../../Utils/IndexedDB'
import { VideoTemplateA01 } from '../../Temp/VideoTemplate'
import { ColorCallBack, SetBorderParams, SpacingCallBack, SetFilderParams } from '../../Utils'
import { DevScrollView } from '../../Temp/DevTemplate'

import { TopTemplate, NavTemplate, WinTemplate } from '../../Temp/StartTemplate'


const SetStartPage = ({ data, AdminEvent }) => {
    const { updateModel } = modelStore()
    const [Loading, setLoading] = useState(false)
    const [Status, setStatus] = useState(false)
    const [Config, setConfig] = useState({})
    const [startType, setStartType] = useState('/Start')
    const StartEvent = useEventEmitter()

    const getData = async () => {
        const { uuid } = await GetIndexedDB('config')
        const [err, res] = await axios({
            method: 'get',
            url: 'projects/GetJsonInfoByUuid',
            path: CommonAPIUrl,
            params: { uuid: `${uuid}/COMMON/START` }
        })
        if (err) return setLoading(true)
        setConfig(await Decrypt(res))
        setStatus(true)
        setLoading(true)
    }

    const onOpenSetPage = () => {
        updateModel({
            title: '大屏页面基础配置',
            type: 'CommonForm',
            Event: StartEvent,
            modelData: {
                formItem: 'StartFormList',
                eventBack: 'onSavePage',
                Initial: Config,
            }
        })
    }

    const onSavePage = async (data) => {
        const { uuid } = await GetIndexedDB('config')
        const params = { uuid: `${uuid}/COMMON/START`, content: JSON.stringify(await Encrypt(data)) }
        const [err, res] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', params, path: CommonAPIUrl })
        if (err) return false
        setConfig(data)
        updateModel({})
    }

    const startCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onSavePage', () => onSavePage(data)],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    const adminCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onOpenSetPage', () => onOpenSetPage()]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    AdminEvent.useSubscription(adminCallBack)
    StartEvent.useSubscription(startCallBack)
    useMount(getData)

    if (!Loading) return <Skeleton active paragraph={{ rows: 16 }} />
    if (!Status) return <div className='SetStartPage NotSet'> <Result status="404" title="加载失败" subTitle={`错误: 未检测到配置信息`} /></div>
    const { start_type } = Config

    if (start_type === 'A01') {
        return (<div>全屏配置</div>)
    }

    if (start_type === 'A02') {
        const { start_navList, commonPadding, backType, backColor, backDeg, backImage, backVideo, backVideoStart, backVideoEnd,
            topImg, topImg_url, topImg_height, btmImg, btmImg_url, btmImg_height, nav_list,
            leftImg, leftImg_url, leftImg_width, leftImg_top, leftImg_btm, leftImg_margin,
            rightImg, rightImg_url, rightImg_width, rigthImg_top, rightImg_btm, rightImg_margin,
            top_padding, top_margin, top_align_items, top_align_content, top_justify_content, top_flex_direction, top_flex_wrap, top_list,
        } = Config
        const topStyle = {
            '--alignItems': top_align_items,
            '--alignContent': top_align_content,
            '--justifyContent': top_justify_content,
            '--flexDirection': top_flex_direction,
            '--flexWrap': top_flex_wrap,
            padding: SpacingCallBack(top_padding),
            margin: SpacingCallBack(top_margin),
        }
        const leftImgStyle = {
            width: leftImg_width,
            height: `calc(100% - ${leftImg_top}px - ${leftImg_btm}px)`,
            top: leftImg_top,
            bottom: leftImg_btm,
            left: leftImg_margin
        }
        const rightImgStyle = {
            width: rightImg_width,
            height: `calc(100% - ${rightImg_btm}px - ${rigthImg_top}px)`,
            top: rigthImg_top,
            bottom: rightImg_btm,
            right: rightImg_margin
        }

        return (
            <div className='SetStartPage SamllWindow'>
                {/* 背景层 */}
                <div className='BackLayer'>
                    {backType === 'color' && <div className='ColorBack' style={{ background: ColorCallBack(backColor, backDeg) }} />}
                    {backType === 'image' && <img className='ImageBack' src={backImage} alt="backImage" />}
                    {backType === 'video' && <VideoTemplateA01 url={backVideo} seekTimeStart={backVideoStart} seekTimeEnd={backVideoEnd} />}
                </div>
                {/* 浮层图片 */}
                <>
                    {topImg && <img className='topImg' src={topImg_url} style={{ height: topImg_height }} alt="topImg" />}
                    {btmImg && <img className='btmImg' src={btmImg_url} style={{ height: btmImg_height }} alt="btmImg" />}
                    {leftImg && <img className='leftImg' src={leftImg_url} style={leftImgStyle} alt="leftImg" />}
                    {rightImg && <img className='rightImg' src={rightImg_url} style={rightImgStyle} alt="rightImg" />}
                </>
                {/* 头部信息 */}
                <div className='TopData' style={topStyle}>
                    {top_list.map((item, i) => {
                        return <TopTemplate key={i} LOGIN data={item} status={startType} />
                    })}
                </div>
                {/* 小窗主体 */}
                <div className='OutletBox' style={{ padding: SpacingCallBack(commonPadding) }}>
                    <WinTemplate Config={Config} startType={startType} setStartType={setStartType} />
                </div>
                {/* 导航信息 */}
                {nav_list && nav_list.length !== 0 && nav_list.map((v, i) =>
                    <NavTemplate
                        key={i}
                        status={startType}
                        styleData={v}
                        navList={start_navList}
                    />
                )}
            </div>
        )
    }

    return (
        <div className='SetStartPage NotSet'>
            <Result
                status="403"
                title="加载失败"
                subTitle={`错误: 大屏加载信息未配置`}
                extra={<Button type="primary" key="console" onClick={onOpenSetPage}>配置基础信息</Button>} />
        </div>
    )
}

export default SetStartPage;