import './NongKaiA01.scss'
import { useState } from 'react'
import { useMount } from 'ahooks'
import { axios } from '../../Utils/Api'


const imageUrl = 'https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/'

const uuidKeyMap = {
    '22115954-4ddb-4456-8b55-22f0bc821001': 'A01',
    '22115954-4ddb-4456-8b55-22f0bc821002': 'A02',
    '22115954-4ddb-4456-8b55-22f0bc821003': 'A03',
    '22115954-4ddb-4456-8b55-22f0bc821004': 'A04',
    '22115954-4ddb-4456-8b55-22f0bc821005': 'A05',
    '22115954-4ddb-4456-8b55-22f0bc821006': 'A06',
    '22115954-4ddb-4456-8b55-22f0bc821007': 'A07',
    '22115954-4ddb-4456-8b55-22f0bc821008': 'A08',
    '22115954-4ddb-4456-8b55-22f0bc821009': 'A09',
    '22115954-4ddb-4456-8b55-22f0bc821010': 'A10',
    '22115954-4ddb-4456-8b55-22f0bc821011': 'A11',
    '22115954-4ddb-4456-8b55-22f0bc821012': 'A12',
    '22115954-4ddb-4456-8b55-22f0bc821013': 'A13',
};

const NongKaiA01 = () => {
    const [active, setActive] = useState('A01')
    const [Data, setData] = useState({ A01: 0, A02: 0, A03: 0, A04: 0, A05: 0, A06: 0, A07: 0, A08: 0, A09: 0, A10: 0, A11: 0, A12: 0, A13: 0 })
    const MapList = [
        { uuid: 'A01', img: imageUrl + 'MapA01.png', name: '哈尔滨市', x: 480, y: 520 },
        { uuid: 'A02', img: imageUrl + 'MapA02.png', name: '齐齐哈尔市', x: 320, y: 380 },
        { uuid: 'A03', img: imageUrl + 'MapA03.png', name: '鸡西市', x: 720, y: 520 },
        { uuid: 'A04', img: imageUrl + 'MapA04.png', name: '鹤岗市', x: 660, y: 400 },
        { uuid: 'A05', img: imageUrl + 'MapA05.png', name: '双鸭山市', x: 720, y: 460 },
        { uuid: 'A06', img: imageUrl + 'MapA06.png', name: '大庆市', x: 340, y: 480 },
        { uuid: 'A07', img: imageUrl + 'MapA07.png', name: '伊春市', x: 560, y: 400 },
        { uuid: 'A08', img: imageUrl + 'MapA08.png', name: '佳木斯市', x: 740, y: 400 },
        { uuid: 'A09', img: imageUrl + 'MapA09.png', name: '七台河市', x: 640, y: 500 },
        { uuid: 'A10', img: imageUrl + 'MapA10.png', name: '牡丹江市', x: 600, y: 600 },
        { uuid: 'A11', img: imageUrl + 'MapA11.png', name: '黑河市', x: 460, y: 300 },
        { uuid: 'A12', img: imageUrl + 'MapA12.png', name: '绥化市', x: 460, y: 420 },
        { uuid: 'A13', img: imageUrl + 'MapA13.png', name: '大兴安岭地区', x: 280, y: 60 },
    ]



    useMount(async () => {
        const [err, res] = await axios({ method: 'get', url: 'engineeringProject/GetCityProjectCount' })
        if (err) return false
        let data = {}
        res.data.list.forEach(v => {
            const targetKey = uuidKeyMap[v.cityUuid]
            if (targetKey) data[targetKey] = v.projectCount
        })
        setData(data)
    })





    return (
        <div className='NongKaiA01'>
            <div className='MapBox'>
                {MapList.map(v => { if (active === v.uuid) return (<img className='Image' key={v.uuid} src={v.img} alt="" />) })}
                <div className='List'>
                    {MapList.map(v => {
                        return (
                            <div
                                className='ListItem'
                                key={v.uuid}
                                style={{ left: v.x, top: v.y, '--shadow': active === v.uuid ? '7px 15px 9px #012905' : '' }}
                                onClick={() => setActive(v.uuid)}
                            >
                                <div>{Data[v.uuid]}</div>
                                <div>{v.name}</div>
                            </div>
                        )
                    })}
                </div>
                <img className='otherImage' src={imageUrl + 'MapA14.png'} alt="" />
                <div className='otherDiv'>
                    <div>
                        <div>0</div>
                        <div>其他省份</div>
                    </div>
                </div>

            </div>
            <div className='MapBtm'>
                <img src={imageUrl + 'MapBack.png'} alt="" />
                {MapList.map(v => {
                    const status = active === v.uuid
                    return (
                        <div className='item' key={v.uuid} onClick={() => setActive(v.uuid)}>
                            <div>{v.name}</div>
                            {status && <img src={imageUrl + 'MapActive.png'} alt="" />}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default NongKaiA01;