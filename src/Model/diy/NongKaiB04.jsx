import './NongKaiB04.scss'
import dayjs from 'dayjs'
import { Select, DatePicker, Empty } from 'antd'
import { useEffect, useState } from 'react'
import { axios } from '../../Utils/Api'


const MonthMapping = [
    { value: '1', label: '一月' },
    { value: '2', label: '二月' },
    { value: '3', label: '三月' },
    { value: '4', label: '四月' },
    { value: '5', label: '五月' },
    { value: '6', label: '六月' },
    { value: '7', label: '七月' },
    { value: '8', label: '八月' },
    { value: '9', label: '九月' },
    { value: '10', label: '十月' },
    { value: '11', label: '十一月' },
    { value: '12', label: '十二月' },
]

function chunkAndTransform(list, chunkSize = 6) {
    const result = [];
    for (let i = 0; i < list.length; i += chunkSize) {
        const children = list.slice(i, i + chunkSize)
        const start = i + 1;
        const end = Math.min(i + chunkSize, list.length)
        result.push({
            title: `${start}-${end}`,
            children: children
        })
    }
    return result;
}

const weather_list = [
    { "weather_url": "https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weather100.png", "weather_map": "100" },
    { "weather_url": "https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weather101.png", "weather_map": "101,102,103,104" },
    { "weather_url": "https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weather305.png", "weather_map": "305,309,314,315,350,399" },
    { "weather_url": "https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weather300.png", "weather_map": "300,306,307,313,314,315" },
    { "weather_url": "https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weather301.png", "weather_map": "301,302,303,304,308,310,311,312,316,317,318" },
    { "weather_url": "https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weather400.png", "weather_map": "400,401,404,405,406,408" },
    { "weather_url": "https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weather402.png", "weather_map": "402,403,407,409,410,499" },
    { "weather_url": "https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weather500.png", "weather_map": "500,501,502,503,504,507,508,509,510,511,512,513,514,515" }
]

const NongKaiB04 = ({ data }) => {
    const [DateList, setDateList] = useState([])
    const [IconList, setIconList] = useState({})

    const [active, setActive] = useState(0)
    const [year, setYear] = useState(dayjs())
    const [month, setMonth] = useState(dayjs().format('M'))

    const [fristData, setFristData] = useState()

    const getDataList = async (y, m) => {
        const params = { year: dayjs(y).format('YYYY'), month: m, OrganizationUuid: data.row.organizationUuid }
        const [err, res] = await axios({ method: 'get', url: 'weather/qweather/history', params })
        if (err) return false
        const List = chunkAndTransform(res.data, 6)
        setDateList(List)
        setFristData(List[0].children[0])
    }

    useEffect(() => {
        getDataList(dayjs(), dayjs().format('M'))
        const list = Object.fromEntries(weather_list.flatMap(v => {
            const { weather_map, weather_url } = v
            if (typeof weather_map !== 'string') return []
            return weather_map.split(',').map(k => [k.trim(), weather_url])
        }))
        setIconList(list)
    }, [data])

    const onYearChange = (e) => {
        getDataList(e, month)
        setYear(e)
    }
    const onMonthChange = (e) => {
        getDataList(year, e)
        setMonth(e)
    }

    return (
        <div className='NongKaiB04'>
            <div className='title'>
                <div>项目名称：万顷良田提质改造示范项目</div>
                <div>项目所在地：黑龙江省·哈尔滨市</div>
            </div>
            <div className='options'>
                <div className='item'>
                    <div className='label'>年度 : </div>
                    <DatePicker allowClear={false} value={year} picker="year" onChange={onYearChange} />
                </div>
                <div className='item'>
                    <div className='label'>月份 : </div>
                    <Select allowClear={false} value={month} options={MonthMapping} onChange={onMonthChange} />
                </div>
            </div>
            <div className='list'>
                {(() => {
                    if (DateList.length !== 0) {
                        const data = DateList[active]
                        return data.children.map((v, i) => {
                            const { date, icon, locationName, organizationUuid, tempMax, tempMin, warningText, weatherCondition, week } = v

                            if (tempMax && tempMin) {
                                const warningIcon = warningText ?
                                    'https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weatheritemIconA02.png' :
                                    'https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weatheritemIconA01.png'
                                const imageBack = warningText ?
                                    'https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weatheritemBackA02.png' :
                                    'https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weatheritemBackA01.png'
                                const iconUrl = IconList?.[icon]
                                return (
                                    <div key={i} className='item'>
                                        <img className='back' src={imageBack} alt="" />
                                        <div className='text'>
                                            <div className='text_date'>{date} {week}</div>
                                            <div className='text_weather'>
                                                <div className='max'> {tempMax}</div>
                                                <div className='min'>
                                                    <div>/{tempMin}℃</div>
                                                    <div>{weatherCondition}</div>
                                                </div>
                                            </div>
                                            <div className='text_locationName'>
                                                <img src="https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weatheritemPosition.png" alt="" />
                                                <div>{locationName}</div>
                                            </div>
                                        </div>
                                        <img className='icon' src={iconUrl} alt="" />
                                        <div className='warning'>
                                            <img src={warningIcon} alt="" />
                                            <div style={{ color: warningText ? '#FF0101' : '#ACFFD7' }}>{warningText ? warningText : '暂无预警'}</div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className='item Empty' key={i}>
                                        <img className='back' src='https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/weatheritemBackA01.png' alt="" />
                                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                    </div>
                                )
                            }


                        })
                    }
                })()}
            </div>
            <div className='date'>
                {DateList.map((v, i) => {
                    const status = i === active ? 'active' : ''
                    return (
                        <div key={i} className={status} onClick={() => setActive(i)}>{v.title}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default NongKaiB04;