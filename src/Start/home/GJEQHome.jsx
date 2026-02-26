import './index.scss'

import { useMount } from 'ahooks'
import { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

import { axios } from '../../Utils/Api'
import { GetIndexedDB } from '../../Utils/IndexedDB'
import { ICONMapping } from '../../Config/IconMapping'
import { DevScrollView } from '../../Temp/DevTemplate'
import { modelStore } from '../../Router/zustand'


const ListA01 = [
    { uuid: 1, title: '工建简介', img: 'HomeTop001.png' },
    { uuid: 2, title: '权属企业', value: 'A01', img: 'HomeTop005.png' },
    { uuid: 3, title: '项目详情', value: 'A02', img: 'HomeTop002.png' },
]

const ListA02 = [
    { uuid: 1, title: '人员', value: 'A01', unit: '人', img: 'HomeLeft001.png' },
    { uuid: 2, title: '批复资金计划', value: 'A02', unit: '家', img: 'HomeLeft002.png' },
    { uuid: 3, title: 'AI报警数', value: 'A03', unit: '条', img: 'HomeLeft003.png' },
    { uuid: 4, title: '安全管控数量', value: 'A03', unit: '条', img: 'HomeLeft004.png' },
]

const ListA03 = [
    { uuid: 1, title: '公路工程', value: 'A01', unit: '个', img: 'gaosu' },
    { uuid: 2, title: '公路养护', value: 'A02', unit: '个', img: 'shigong05' },
    { uuid: 3, title: '市政公用工程', value: 'A03', unit: '个', img: 'gejizhengfu' },
    { uuid: 4, title: '房屋建筑', value: 'A04', unit: '个', img: 'qiye_mianxing' },
    { uuid: 5, title: '港口与航道', value: 'A05', unit: '个', img: 'chuanbo' },
    { uuid: 6, title: '水利水电工程', value: 'A06', unit: '个', img: 'daqiao2' },
    { uuid: 7, title: '其他类', value: 'A07', unit: '个', img: 'hutonglijiao' },
]

const ListA04 = [
    { uuid: 1, title: '累计完成收入', value: 'A01', unit: '万元', back: 'rgba(51, 114, 255, 0.2)', color: 'rgba(29, 229, 231, 1)' },
    { uuid: 2, title: '累计完成利润', value: 'A02', unit: '万元', back: 'rgba(29, 229, 231, 0.2)', color: 'rgba(249, 251, 95, 1)' },
    { uuid: 3, title: '累计完成比例', value: 'A03', unit: '%', back: 'rgba(51, 114, 255, 0.2)', color: 'rgba(29, 229, 231, 1)' },
]

const GJEQHome = () => {
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore
    const Navigate = useNavigate()

    const [imageUrl, setImageUrl] = useState()
    const [ProjectList, setProjectList] = useState([])
    const [Active, setActive] = useState('')

    const [DataA01, setDataA01] = useState({ A01: 0, A02: 0 })
    const [DataA02, setDataA02] = useState({ A01: 0, A02: 0, A03: 0, A04: 0 })
    const [DataA03, setDataA03] = useState({ A01: 0, A02: 0, A03: 0, A04: 0, A05: 0, A06: 0, A07: 0 })
    const [DataA04, setDataA04] = useState({ A01: 0, A02: 0, A03: 0 })


    useMount(async () => {
        const { imageUrl } = await GetIndexedDB('config')
        setImageUrl(imageUrl)
        const [err, res] = await axios({ method: 'get', url: 'jtgj/GetCompanyListByOrganizationType', path: 'https://jtgj-rest.ljkjkf.com/api/' })
        if (err) console.log('项目列表获取失败', err)
        setProjectList(res || [])
        setActive(res[0]?.uuid || '')
    })

    const onProject = (e) => {
        setActive(e)
    }

    const onProjectItem = (e) => {
        if (e === '40491731-928e-4b02-aa30-f45f4a3a563e') return false
        Navigate(`/Start/B01/${e}`)
    }

    const onTopClick = (e) => {
        switch (e) {
            case 1:
                console.log(e, '工建简介')
                break;
            case 2:
                console.log(e, '权属企业')
                break;
            case 3:
                console.log(e, '项目详情')
                break;
            default:
                break;
        }
    }

    return (
        <div className="GJEQHome">
            <div className='Box Left '>
                <img src={imageUrl + 'IndexLeft.png'} alt="" />
                <div className='LeftTitle'>工建智慧建造平台介绍</div>
                <div className='RenderA01'>
                    {ListA02.map(v =>
                        <div key={v.uuid}>
                            <img src={imageUrl + v.img} alt="" />
                            <div>{v.title}</div>
                            <div>{DataA02[v.value]} {v.unit}</div>
                        </div>
                    )}
                </div>
                <div className='RenderA02'>
                    {ListA03.map(v =>
                        <div key={v.uuid}>
                            <div>{ICONMapping[v.img]}</div>
                            <div>
                                <div>{v.title}</div>
                                <div>{DataA03[v.value]} {v.unit}</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='RenderA03'>
                    {ListA04.map(v =>
                        <div key={v.uuid} style={{ background: v.back }}>
                            <div style={{ background: v.color }} />
                            <div>{v.title}</div>
                            <div>{DataA04[v.value]} {v.unit}</div>
                        </div>
                    )}
                </div>
            </div>
            <div className='Box Right '>
                <img src={imageUrl + 'IndexRight.png'} alt="" />
                <div className='AIBox'>
                    <img src={imageUrl + 'intelligence.gif'} alt="" />
                </div>
                <div className='ProjectList'>
                    <DevScrollView>
                        <div className='ListData'>
                            {ProjectList.map(v => {
                                const status = Active === v.uuid
                                return (
                                    <Fragment key={v.uuid}>
                                        <div className='ListDataBox' onClick={() => onProject(v.uuid)}>
                                            <div >{v.tableName}</div>
                                            <div style={{ transform: status ? 'rotate(0deg)' : 'rotate(-90deg)' }}>{ICONMapping['fasCaretDown']}</div>
                                        </div>

                                        {status && v.children.map(child =>
                                            <div className='ListDataChild' key={child.uuid} onClick={() => onProjectItem(child.uuid)}>
                                                <div>{child.tableName}</div>
                                            </div>
                                        )}
                                    </Fragment>

                                )
                            })}
                        </div>
                    </DevScrollView>
                </div>
            </div>
            <div className='Top'>
                <div className='Back'>
                    <img src={imageUrl + 'indexL.png'} alt="" />
                    <img src={imageUrl + 'IndexBox.png'} alt="" />
                    <img src={imageUrl + 'indexR.png'} alt="" />
                </div>
                <div className='List'>
                    {ListA01.map(v => (
                        <div key={v.uuid} onClick={() => onTopClick(v.uuid)}>
                            <img src={imageUrl + v.img} alt="" />
                            <div>
                                <div>{DataA01[v.value]}</div>
                                <div>{v.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GJEQHome;