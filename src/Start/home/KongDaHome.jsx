import './KongDaHome.scss'
import "mars3d-cesium/Build/Cesium/Widgets/widgets.css"
import "mars3d/mars3d.css"
import * as mars3d from "mars3d"

import { useRef, useEffect, useState } from 'react'

import { axios, axiosFor } from '../../Utils/Api'
import { CommonAPIUrl } from '../../Config'
import { Decrypt } from '../../Utils/IndexedDB'
import { WinTemplate } from '../../Temp/StartTemplate'

import { PrefabricatedChartTemplate } from '../../Temp/PrefabricatedChart'
import { PrefabricatedPlaceTemplate } from '../../Temp/PrefabricatedPlace'
import { PrefabricatedDiyTemplate } from '../../Temp/PrefabricatedDiy'
import { PrefabricatedListTemplate } from '../../Temp/PrefabricatedList'
import { PrefabricatedImgTextTemplate } from '../../Temp/PrefabricatedImgText'
import { PrefabricatedTableTemplate } from '../../Temp/PrefabricatedTable'
import { PrefabricatedSelectTemplate } from '../../Temp/PrefabricatedSelect'
import { PrefabricatedSwiperTemplate } from '../../Temp/PrefabricatedSwiper'
import { PrefabricatedVisualTemplate } from '../../Temp/PrefabricatedVisual'


import { InitMap } from '../../Mars3d'


const TemplateComponentMapping = {
    ...PrefabricatedChartTemplate,
    ...PrefabricatedPlaceTemplate,
    ...PrefabricatedDiyTemplate,
    ...PrefabricatedImgTextTemplate,
    ...PrefabricatedListTemplate,
    ...PrefabricatedTableTemplate,
    ...PrefabricatedSelectTemplate,
    ...PrefabricatedSwiperTemplate,
    ...PrefabricatedVisualTemplate
}

const uuid = '9df8a94e-158e-4a1d-9305-220c18a7c0b8'
const mapUuid = '9df8a94e-158e-4a1d-9305-220c18a7c0b8/MAP_PAGE/dd71fa8d-4b31-4c6d-8b11-da10767098e0'

const axiosArr = [
    { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${mapUuid}` } },
    { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${mapUuid}_element` } },
    { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${mapUuid}_tiles` } },
]

const pageData = [
    { method: 'get', url: 'assessMent/GetPartyAssessmentList' },
    { method: 'get', url: 'partyPerson/GetDaPingPartyPersonList' },
    { method: 'get', url: 'partyPerson/GetDaPingPartyPersonConstitute' },
    { method: 'get', url: 'partyPerson/GetPartyPersonVanguardList' },
    { method: 'get', url: 'partyPersonType/GetDaPingPartyPersonDevelopment' },
    { method: 'get', url: 'video/GetPartyVideo' },
    { method: 'get', url: 'organization/GetOrganizationRemarkList' },
]

const cityMapping = {
    '22115954-4ddb-4456-8b55-22f0bc821001': { title: '哈尔滨市', position: [127.849494, 45.245517, 243.6] },
    '22115954-4ddb-4456-8b55-22f0bc821002': { title: '齐齐哈尔', position: [124.312451, 47.676298, 165.5] },
    '22115954-4ddb-4456-8b55-22f0bc821003': { title: '鸡西市', position: [132.29563, 45.484801, 121.7] },
    '22115954-4ddb-4456-8b55-22f0bc821004': { title: '鹤岗市', position: [130.436071, 47.567174, 145.1] },
    '22115954-4ddb-4456-8b55-22f0bc821005': { title: '双鸭山市', position: [132.253163, 46.380754, 97.9] },
    '22115954-4ddb-4456-8b55-22f0bc821006': { title: '大庆市', position: [124.419975, 46.188539, 143] },
    '22115954-4ddb-4456-8b55-22f0bc821007': { title: '伊春市', position: [129.103064, 47.503512, 215.3] },
    '22115954-4ddb-4456-8b55-22f0bc821008': { title: '佳木斯市', position: [132.552054, 47.105604, 75.2] },
    '22115954-4ddb-4456-8b55-22f0bc821009': { title: '七台河市', position: [130.868228, 45.720259, 124.4] },
    '22115954-4ddb-4456-8b55-22f0bc821010': { title: '牡丹江市', position: [129.854702, 44.425733, 464.5] },
    '22115954-4ddb-4456-8b55-22f0bc821011': { title: '黑河市', position: [126.958102, 49.117566, 104.9] },
    '22115954-4ddb-4456-8b55-22f0bc821012': { title: '绥化市', position: [126.525435, 46.848897, 192.7] },
    '22115954-4ddb-4456-8b55-22f0bc821013': { title: '大兴安岭', position: [124.124811, 52.121286, 378.4] },
}



const KongDaHome = ({ data, page, StartEvent }) => {
    const MapBox = useRef()
    const [Open, setOpen] = useState(true)
    const [Active, setActive] = useState(true)
    const [MapOptions, setMapOptions] = useState({ map: null, gra: null })
    const [MapData, setMapData] = useState(null)
    const [MapElementData, setMapElementData] = useState(null)
    const [MapTilesData, setMapTilesData] = useState(null)
    const [PageData, setPageData] = useState()

    const [RemarkList, setRemarkList] = useState([])

    const onSwitch = () => {
        setActive(!Active)
        setTimeout(() => setOpen(!Open), 800)
    }

    const getJsonData = async () => {
        const [err, res] = await axios({ method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${uuid}/STA_PAGE/A01` } })
        if (err) return console.log(err)
        const pageData = await Decrypt(res)
        setPageData(pageData.params)
        const [[MapErr, MapRes], [MapElementErr, MapElementRes], [MapTilesErr, MapTilesRes]] = await axiosFor(axiosArr)
        if (MapErr || MapElementErr || MapTilesErr) return console.log(MapErr || MapElementErr || MapTilesErr)
        const MapData = await Decrypt(MapRes)
        const MapElementData = await Decrypt(MapElementRes)
        const MapTilesData = await Decrypt(MapTilesRes)
        setMapData(MapData)
        setMapElementData(MapElementData)
        setMapTilesData(MapTilesData)
    }


    const GetDaPingPartyPersonDevelopment = async () => {
        const [
            [A01Err, A01Res],
            [A02Err, A02Res],
            [A03Err, A03Res],
            [A04Err, A04Res],
            [A05Err, A05Res],
            [A06Err, A06Res],
            [A07Err, A07Res],
        ] = await axiosFor(pageData)
        if (A01Err || A02Err || A03Err || A04Err || A05Err || A06Err || A07Err)
            return console.log(A01Err || A02Err || A03Err || A04Err || A05Err || A06Err || A07Err)
        const data = { A01: A01Res, A02: A02Res, A03: A03Res, A04: A04Res, A05: A05Res, A06: A06Res, A07: A07Res }
        setRemarkList(data)
    }

    const getMapData = async (backData) => {
        const [err, res] = await axios({ method: 'get', url: 'organization/GetOrganizationMapList' })
        if (err) return console.log(err)
        const { list } = res.data
        Object.keys(cityMapping).forEach(v => {
            const data = list.find(item => item.uuid === v)
            const obj = {
                "id": v,
                "type": "div",
                "show": true,
                "style": {
                    "offsetX": 0,
                    "offsetY": 0,
                    "scale": 1,
                    "clampToGround": false,
                    "scaleByDistance": false,
                    "scaleByDistance_far": 1000000,
                    "scaleByDistance_farValue": 0.1,
                    "scaleByDistance_near": 1000,
                    "scaleByDistance_nearValue": 1,
                    "distanceDisplayCondition": false,
                    "distanceDisplayCondition_far": 10000000,
                    "distanceDisplayCondition_near": 0,
                    "html": `
                        <div class="KongDaHomeMapDiv" >
                            <div class="KongDaHomeMapDivItem" style="display: ${data ? 'flex' : 'none'};" >
                                <img src='https://aloss.ljkjkf.com/WebConfigFile/image/nongda/HomeQi.png' alt='${cityMapping[v].title}' />
                                <div >${data && data?.projectCount}</div>
                            </div>
                            <div class="KongDaHomeMapDivTitle" >${cityMapping[v].title}</div>
                        </div>
                        `
                },
                "_promise": {},
                "attr": {},
                "frameRate": 1,
                "position": cityMapping[v].position
            }
            const div = new mars3d.graphic.DivGraphic(obj)
            div.on('click', () => {
                if (!data) return false
                console.log('返回当前省市信息', data)

            })
            backData.gra.addGraphic(div)
        })
    }

    useEffect(() => {
        getJsonData()
        GetDaPingPartyPersonDevelopment()
    }, [])

    useEffect(() => {
        if (Open) {
            MapOptions?.map?.destroy()
        } else {
            if (MapData && MapElementData && MapTilesData && MapBox.current) {
                console.log(MapElementData)
                const backData = InitMap({ BOX: MapBox.current, CONFIG: MapData, ELEMENT: [], TILES: MapTilesData })
                setMapOptions(backData)
                getMapData(backData)
            }
        }
        return () => { MapOptions?.map?.destroy() }
    }, [Open])

    if (PageData) {
        return (
            <div className='KongDaHome'>
                {Open ?
                    <>
                        <div className='left'>
                            <WinTemplate Config={{ ...data, window_titleTxt: '基层组织情况' }} startType={false} >
                                <div className='leftA01'>
                                    <div className='top'>
                                        <div>
                                            {(() => {
                                                const tempId = '6b7e8400-507c-4df3-bae4-b94a4afeed5d'
                                                const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                                return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                            })()}
                                        </div>
                                        <div>
                                            {(() => {
                                                const tempId = '5c8f0301-3d4d-4522-aa76-315e6a77871f'
                                                const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                                return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                            })()}
                                        </div>
                                    </div>
                                    <div className='btm'>
                                        {(() => {
                                            const tempId = 'b32a5c7b-4bc7-4137-a59f-93dd96cc79d5'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>
                                </div>
                            </WinTemplate>
                            <WinTemplate Config={{ ...data, window_titleTxt: '党建发展情况' }} startType={false} >
                                <div className='leftA02'>
                                    <div className='top'>
                                        {(() => {
                                            const tempId = '05b35506-0de8-4b3e-aae1-42d9e674013e'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>
                                    <div className='btm'>
                                        {(() => {
                                            const tempId = '12dcc1d3-f3fb-44cd-a125-611bb6c2f6b8'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>
                                </div>
                            </WinTemplate>
                        </div>
                        <div className='right'>
                            <WinTemplate Config={{ ...data, window_titleTxt: '党员构成情况' }} startType={false} >
                                <div className='rightA01'>
                                    <div className='top'>
                                        <div>
                                            {(() => {
                                                const tempId = 'db3dda58-da63-41d7-945c-4b6b7d97070d'
                                                const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                                return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                            })()}
                                        </div>
                                        <div>
                                            {(() => {
                                                const tempId = 'd9d629be-f12a-4eb9-a97c-e833f5afe511'
                                                const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                                return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                            })()}
                                        </div>
                                        <img className='backImage' src="https://aloss.ljkjkf.com/WebConfigFile/image/nongda/HomeC02.png" alt="" />
                                    </div>
                                    <div className='btm'>
                                        {(() => {
                                            const tempId = '52113864-d9e1-4227-a5ef-7d53eabc51af'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>
                                </div>
                            </WinTemplate>
                            <WinTemplate Config={{ ...data, window_titleTxt: '党建组织活动' }} startType={false} >
                                <div className='rightA02'>
                                    <div>
                                        {(() => {
                                            const tempId = '7cecb1e2-6df6-4ef4-a961-b9ab047b1e26'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>
                                </div>
                            </WinTemplate>
                        </div>
                    </> :
                    <>
                        <div className='leftTow'>
                            <WinTemplate Config={{ ...data, window_titleTxt: '党员先锋岗' }} startType={false} >
                                <div className='leftA03'>
                                    <div>
                                        {(() => {
                                            const tempId = 'c4ed0499-eb0e-486e-98b1-c5468ed36dae'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>
                                </div>
                            </WinTemplate>
                            <WinTemplate Config={{ ...data, window_titleTxt: '党建考核' }} startType={false} >
                                <div className='leftA04'>
                                    <div className='top'>
                                        {(() => {
                                            const tempId = '0d160ed7-4456-4825-9b59-4e8b6b5dae49'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>
                                    <div className='btm'>
                                        {(() => {
                                            const tempId = '364deca1-b617-4ef3-aa74-5c915a996d51'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>
                                </div>
                            </WinTemplate>
                        </div>
                        <div className='rightTow'>
                            <WinTemplate Config={{ ...data, window_titleTxt: '宣传片' }} startType={false} >
                                <div className='rightA03'>
                                    <div>
                                        {(() => {
                                            const tempId = 'bcc54aa7-fc66-48a6-8f5f-87be2425bc2e'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>

                                </div>
                            </WinTemplate>
                        </div>
                        <div className='btmBox'>
                            {RemarkList.A07.data.list.map(v => {
                                const { uuid, tableName, remark } = v
                                return (
                                    <div className='item' key={uuid}>
                                        <img src='https://aloss.ljkjkf.com/WebConfigFile/image/nongda/HomeList.png' alt="" />
                                        <div>{tableName}党支部 : </div>
                                        <div>{remark}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                }
                <div className={`switchBtn ${Open ? 'A01' : 'A02'}`} onClick={onSwitch}>{Open ? '' : '首页'}</div>
                <img
                    style={{ left: Active ? '100%' : '-500%' }}
                    className='HomeMosk'
                    src='https://aloss.ljkjkf.com/WebConfigFile/image/nongda/HomeMosk.png'
                    alt=""
                />
                {!Open && <div className='Map' ref={MapBox}></div>}
            </div>
        );
    }

};

export default KongDaHome;