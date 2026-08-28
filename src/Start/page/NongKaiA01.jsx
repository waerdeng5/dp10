import { useState } from 'react';
import './NongKaiA01.scss'



const imageUrl = 'https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/'

const NongKaiA01 = () => {
    const [active, setActive] = useState('A01')
    const [Data, setData] = useState({ A01: 0, A02: 0, A03: 0, A04: 0, A05: 0, A06: 0, A07: 0, A08: 0, A09: 0, A10: 0, A11: 0, A12: 0, A13: 0 })
    const MapList = [
        { uuid: 'A01', img: imageUrl + 'MapA01.png', name: '哈尔滨市', x: 419, y: 385 },
        { uuid: 'A02', img: imageUrl + 'MapA02.png', name: '齐齐哈尔市', x: 171, y: 262 },
        { uuid: 'A03', img: imageUrl + 'MapA03.png', name: '鸡西市', x: 867, y: 386 },
        { uuid: 'A04', img: imageUrl + 'MapA04.png', name: '鹤岗市', x: 646, y: 247 },
        { uuid: 'A05', img: imageUrl + 'MapA05.png', name: '双鸭山市', x: 822, y: 304 },
        { uuid: 'A06', img: imageUrl + 'MapA06.png', name: '大庆市', x: 164, y: 362 },
        { uuid: 'A07', img: imageUrl + 'MapA07.png', name: '伊春市', x: 539, y: 246 },
        { uuid: 'A08', img: imageUrl + 'MapA08.png', name: '佳木斯市', x: 698, y: 276 },
        { uuid: 'A09', img: imageUrl + 'MapA09.png', name: '七台河市', x: 700, y: 363 },
        { uuid: 'A10', img: imageUrl + 'MapA10.png', name: '牡丹江市', x: 620, y: 480 },
        { uuid: 'A11', img: imageUrl + 'MapA11.png', name: '黑河市', x: 377, y: 164 },
        { uuid: 'A12', img: imageUrl + 'MapA12.png', name: '绥化市', x: 362, y: 310 },
        { uuid: 'A13', img: imageUrl + 'MapA13.png', name: '大兴安岭地区', x: 179, y: 22 },
    ]


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
            </div>
        </div>
    );
};

export default NongKaiA01;