import './KongDaHome.scss'

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


const KongDaHome = ({ data, page, StartEvent }) => {
    const MapBox = useRef()
    const [Open, setOpen] = useState(true)
    const [Active, setActive] = useState(true)
    const [MapOptions, setMapOptions] = useState({ map: null, gra: null })
    const [MapData, setMapData] = useState(null)
    const [MapElementData, setMapElementData] = useState(null)
    const [MapTilesData, setMapTilesData] = useState(null)

    const [PageData, setPageData] = useState()

    const onSwitch = () => {
        setActive(!Active)
        setTimeout(() => setOpen(!Open), 1000)
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




    const getMapData = async () => {
        console.log(mapUuid)




    }


    useEffect(() => {
        getJsonData()
        getMapData()
    }, [])





    useEffect(() => {
        if (Open) {
            MapOptions?.map?.destroy()
        } else {
            if (MapData && MapElementData && MapTilesData && MapBox.current) {
                InitMap({ BOX: MapBox.current, CONFIG: MapData, ELEMENT: MapElementData, TILES: MapTilesData })
            }
        }
        return () => {
            MapOptions?.map?.destroy()
        }

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
                                                return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
                                            })()}
                                        </div>
                                        <div>
                                            {(() => {
                                                const tempId = '5c8f0301-3d4d-4522-aa76-315e6a77871f'
                                                const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                                return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
                                            })()}
                                        </div>
                                    </div>
                                    <div className='btm'>
                                        {(() => {
                                            const tempId = 'b32a5c7b-4bc7-4137-a59f-93dd96cc79d5'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
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
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>
                                    <div className='btm'>
                                        {(() => {
                                            const tempId = '12dcc1d3-f3fb-44cd-a125-611bb6c2f6b8'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
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
                                                return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
                                            })()}
                                        </div>
                                        <div>
                                            {(() => {
                                                const tempId = 'd9d629be-f12a-4eb9-a97c-e833f5afe511'
                                                const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                                return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
                                            })()}
                                        </div>
                                        <img className='backImage' src="https://aloss.ljkjkf.com/WebConfigFile/image/nongda/HomeC02.png" alt="" />
                                    </div>
                                    <div className='btm'>
                                        {(() => {
                                            const tempId = '52113864-d9e1-4227-a5ef-7d53eabc51af'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
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
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
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
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
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
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>
                                    <div className='btm'>
                                        {(() => {
                                            const tempId = '364deca1-b617-4ef3-aa74-5c915a996d51'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
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
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={[]} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>

                                </div>
                            </WinTemplate>
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