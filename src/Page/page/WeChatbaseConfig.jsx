import './WeChatbaseConfig.scss'
import dayjs from 'dayjs'

import { Segmented } from 'antd'
import { useEffect, useState } from 'react'
import { useInterval, useMount } from 'ahooks'

import { axios } from '../../Utils/Api'


import { ICONMapping } from '../../Config/IconMapping'
import { Encrypt, Decrypt } from '../../Utils/IndexedDB'

import { DevScrollView } from '../../Temp/DevTemplate'


import { WechatLoginA01, WechatLoginA02, WechatLoginA03, WechatLoginA04 } from '../../Temp/WechatLogin'



const httpPath = 'https://common-api.ljkjkf.com/'

const GetConfig = { method: 'get', url: 'wechats/GetJsonInfoByUuid', path: httpPath, params: { uuid: `PARGET/WeChate` } }
const PostConfig = { method: 'post', url: 'wechats/SaveJsonInfoByUuid', path: httpPath, params: { uuid: `PARGET/WeChate`, content: '' } }


const pageMapping = {
    login: '登录设置',
    base: '基础设置',
    home: '首页设置',
    page: '页面设置'
}


const SegmentedOptions = [
    { value: 'login', tooltip: { title: '登录设置', color: '#08979c' }, label: (<div>{ICONMapping['fasDoorOpen']}<div>登录</div></div>) },
    { value: 'base', tooltip: { title: '基础设置', color: '#1677ff' }, label: (<div>{ICONMapping['fasPalette']}<div>基础</div></div>) },
    { value: 'home', tooltip: { title: '首页设置', color: '#c41d7f' }, label: (<div>{ICONMapping['fasHome']}<div>首页</div></div>) },
    { value: 'page', tooltip: { title: '页面设置', color: '#722ed1' }, label: (<div>{ICONMapping['fasMagic']} <div>页面</div></div>) },
]




const WeChatbaseConfig = () => {

    const [page, setPage] = useState('base')




    // 时间处理
    const [Date, setDate] = useState(dayjs().format('HH:mm'))
    const clearInterval = useInterval(() => setDate(dayjs().format('HH:mm')), 30000)
    useEffect(() => { return () => { clearInterval() } }, [])





    const getLoginData = async () => {
        const [err, res] = await axios(GetConfig)
        if (err) return console.log('小程序登录页面获取失败!')
        console.log('小程序登录页面', await Decrypt(res))
    }


    const getBaseData = async () => {
        const [err, res] = await axios({ method: 'get', url: 'weChatMenu' })
        if (err) return console.log('小程序菜单获取失败!')
        console.log('小程序菜单', res)

    }

    const onSegmentedChange = (e) => {
        setPage(e)
    }


    useMount(() => {
        getLoginData()
        getBaseData()
    })


    return (
        <div className='WeChatbaseConfig'>
            <div className='simulator'>
                <div className='option'>
                    <Segmented block value={page} options={SegmentedOptions} onChange={onSegmentedChange} />
                </div>
                <div className='box'>
                    <div className='sysTop'>
                        <div>{Date}</div>
                        <div />
                        <div>{ICONMapping['fasWifi']}{ICONMapping['fasBatteryFull']}</div>
                    </div>
                    <div className='sysBtm'><div /></div>
                    <div className='capsule'>
                        {ICONMapping['fasEllipsisH']}
                        {ICONMapping['farDotCircle']}
                    </div>

                    <div className='content'>
                        <div className='top'> 默认名称 </div>
                        <div className='bottom'>
                            <DevScrollView>
                                <div className='conScroll'>
                                    内容信息
                                    {/* 判断当前页面 三选一 */}
                                </div>
                            </DevScrollView>
                        </div>
                    </div>

                </div>
            </div>

            <div className='options'>
                <div>{pageMapping[page]}</div>
                {/* 不同页面的选项信息 */}
            </div>
        </div>
    );
};

export default WeChatbaseConfig;