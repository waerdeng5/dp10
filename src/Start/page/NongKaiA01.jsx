import './NongKaiA01.scss'
import "mars3d-cesium/Build/Cesium/Widgets/widgets.css"
import "mars3d/mars3d.css"
import { useEffect, useRef, useState } from 'react'
import { useMount } from 'ahooks'
import { useEventEmitter } from 'ahooks'
import { axios, axiosFor } from '../../Utils/Api'
import { TemplateClickFn } from '../../Utils'
import { useTemplateModel } from '../../Config/useHooks'
import { CommonAPIUrl } from '../../Config'
import { Decrypt } from '../../Utils/IndexedDB'
import { InitMap, LayerListMap } from '../../Mars3d'

const imageUrl = 'https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/'

const mapUuid = '1081d01e-0cc7-4415-bdb4-0528bb80050a/MAP_PAGE/2ec7b8e6-a0a2-4338-a537-2590f78e01f4'

const MapApi = [
    { method: 'get', url: '/projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${mapUuid}` } },
    { method: 'get', url: '/projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${mapUuid}_element` } },
]

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
    '99999999-9999-9999-9999-999999999999': 'A00',
};

const mapColor = {
    CoverElement230100: '#5099d880',
    CoverElement230200: '#4b5fac80',
    CoverElement230300: '#54bb8280',
    CoverElement230400: '#00893b80',
    CoverElement230500: '#5099d880',
    CoverElement230600: '#4b5fac80',
    CoverElement230700: '#54bb8280',
    CoverElement2308002306: '#00893b80',
    CoverElement23080049: '#00893b80',
    CoverElement230900: '#5099d880',
    CoverElement231000: '#4b5fac80',
    CoverElement231100: '#5099d880',
    CoverElement231200: '#00893b80',
    CoverElement232700992: '#00893b80',
    CoverElement232700157: '#00893b80',
}

const topNav = [
    { value: 'A01', title: '项目统计' },
    { value: 'A02', title: '项目分部' },
]

const NongKaiA01 = () => {
    const mapRef = useRef(null)
    const openModel = useTemplateModel()
    const PageEvent = useEventEmitter()
    const [MpaPar, setMpaPar] = useState({ map: null, gra: null, clip: null })


    const [active, setActive] = useState('A01')
    const [TabsActive, setTabsActive] = useState('A01')
    const [Data, setData] = useState({ A01: 0, A02: 0, A03: 0, A04: 0, A05: 0, A06: 0, A07: 0, A08: 0, A09: 0, A10: 0, A11: 0, A12: 0, A13: 0, A00: 0 })
    const MapList = [
        { uuid: 'A01', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821001', img: imageUrl + 'MapA01.png', name: '哈尔滨市', x: 480, y: 520 },
        { uuid: 'A02', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821002', img: imageUrl + 'MapA02.png', name: '齐齐哈尔市', x: 320, y: 380 },
        { uuid: 'A03', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821003', img: imageUrl + 'MapA03.png', name: '鸡西市', x: 720, y: 520 },
        { uuid: 'A04', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821004', img: imageUrl + 'MapA04.png', name: '鹤岗市', x: 660, y: 400 },
        { uuid: 'A05', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821005', img: imageUrl + 'MapA05.png', name: '双鸭山市', x: 720, y: 460 },
        { uuid: 'A06', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821006', img: imageUrl + 'MapA06.png', name: '大庆市', x: 340, y: 480 },
        { uuid: 'A07', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821007', img: imageUrl + 'MapA07.png', name: '伊春市', x: 560, y: 400 },
        { uuid: 'A08', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821008', img: imageUrl + 'MapA08.png', name: '佳木斯市', x: 740, y: 400 },
        { uuid: 'A09', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821009', img: imageUrl + 'MapA09.png', name: '七台河市', x: 640, y: 500 },
        { uuid: 'A10', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821010', img: imageUrl + 'MapA10.png', name: '牡丹江市', x: 600, y: 600 },
        { uuid: 'A11', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821011', img: imageUrl + 'MapA11.png', name: '黑河市', x: 460, y: 300 },
        { uuid: 'A12', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821012', img: imageUrl + 'MapA12.png', name: '绥化市', x: 460, y: 420 },
        { uuid: 'A13', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821013', img: imageUrl + 'MapA13.png', name: '大兴安岭地区', x: 280, y: 60 },
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

    const onClickCity = async (data) => {
        const { uuid, name } = data
        if (uuid !== 'A00') setActive(uuid)
        TemplateClickFn(false, {
            alone_back: false,
            alone_back_image: true,
            alone_back_image_url: "https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/StartA0115.png",
            alone_icon: false,
            alone_number: true,
            alone_title: false,
            alone_unit: false,
            click_model_height: "80vh",
            click_model_level: "updateModel",
            click_model_params: true,
            click_model_config: [{ param_type: 'data', param_key: 'cityUuid', param_field: 'cityUuid' }],
            click_model_start: true,
            click_model_title: name + '项目列表',
            click_model_uuid: "19e1583a-97aa-49c2-b020-aefdd54f8123",
            click_model_width: "80vw",
            click_status: true,
            click_type: "model",
            data_img: "https://aloss.ljkjkf.com/WebConfigFile/image/nongkai/StartA0113.png",
            data_text: [],
            data_textDeg: 0,
            data_title: "累计中标金额(万)",
            data_value: "totalContractAmount",
        }, data, PageEvent, openModel)
    }

    useEffect(() => {
        if (mapRef.current) onInitMap()
        else {
            console.log('mapRef.current is null')
        }
        return () => {
            MpaPar.map?.destroy()
        }
    }, [mapRef])

    const onTabNavTo = (e) => {
        setTabsActive(e)
        if (e === 'A01') MpaPar.map?.destroy()
        else onInitMap()
    }


    const onInitMap = async () => {
        const [[mapErr, mapRes], [eleErr, eleRes]] = await axiosFor(MapApi)
        if (mapErr || eleErr) return false
        const mapData = await Decrypt(mapRes)
        const eleData = await Decrypt(eleRes)
        const { map, gra, clip } = await InitMap({ BOX: mapRef.current, CONFIG: mapData, ELEMENT: eleData })

        setTimeout(() => {
            Object.keys(mapColor).forEach(v => {
                if (gra.getGraphicById(v)) {
                    const ELE = gra.getGraphicById(v)
                    ELE.setOptions({ style: { ...ELE.style, materialOptions: { color: mapColor[v], materialType: "Color" } } })
                }
            })
        }, 240);
        setMpaPar({ map, gra, clip })
    }

    return (
        <div className='NongKaiA01'>
            <div className='top'>
                <div className='topNav'>
                    <img src={imageUrl + 'TopNavBack.png'} alt="" />
                    {topNav.map(v => {
                        const status = TabsActive === v.value
                        return (
                            <div key={v.value} onClick={() => onTabNavTo(v.value)}>
                                <div>{v.title}</div>
                                {status && <img style={v.value === 'A01' ? { left: 8 } : { right: 8 }} src={imageUrl + 'TopNavAct.png'} alt="" />}
                            </div>
                        )
                    }
                    )}
                </div>
            </div>



            {TabsActive === 'A01' ?
                <>
                    <div className='MapBox'>
                        {MapList.map(v => { if (active === v.uuid) return (<img className='Image' key={v.uuid} src={v.img} alt="" />) })}
                        <div className='List'>
                            {MapList.map(v => {
                                return (
                                    <div
                                        className='ListItem'
                                        key={v.uuid}
                                        style={{ left: v.x, top: v.y, '--shadow': active === v.uuid ? '7px 15px 9px #012905' : '' }}
                                        onClick={() => onClickCity(v)}
                                    >
                                        <div>{Data[v.uuid] || 0} </div>
                                        <div>{v.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <img className='otherImage' src={imageUrl + 'MapA14.png'} alt="" />
                        <div className='otherDiv' onClick={() => onClickCity({ uuid: 'A00', name: '其他省份', cityUuid: '99999999-9999-9999-9999-999999999999' })}>
                            <div>
                                <div>{Data['A00']}</div>
                                <div>其他省份</div>
                            </div>
                        </div>
                    </div>
                    <div className='MapBtm'>
                        <img src={imageUrl + 'BtmBack.png'} alt="" />
                        {MapList.map(v => {
                            const status = active === v.uuid
                            return (
                                <div className='item' key={v.uuid} onClick={() => onClickCity(v)}>
                                    <div>{v.name}</div>
                                    <img src={`${imageUrl}${status ? 'BtmBackAct.png' : 'BtmBackDev.png'}`} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </> : <div className='MapBox3D' ref={mapRef} />
            }
        </div>
    );
};

export default NongKaiA01;