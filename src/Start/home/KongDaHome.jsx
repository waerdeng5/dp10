import './KongDaHome.scss'

import { useEventEmitter } from 'ahooks'
import { createPortal } from 'react-dom'
import { useRef, useEffect, useState } from 'react'
import { useTemplateModel } from '../../Config/useHooks'


import { ICONMapping } from '../../Config/IconMapping'

import { axios, axiosFor } from '../../Utils/Api'
import { CommonAPIUrl } from '../../Config'
import { Decrypt } from '../../Utils/IndexedDB'
import { WinTemplate } from '../../Temp/StartTemplate'
import { TemplateClickFn } from '../../Utils'

import { PrefabricatedChartTemplate } from '../../Temp/PrefabricatedChart'
import { PrefabricatedPlaceTemplate } from '../../Temp/PrefabricatedPlace'
import { PrefabricatedDiyTemplate } from '../../Temp/PrefabricatedDiy'
import { PrefabricatedListTemplate } from '../../Temp/PrefabricatedList'
import { PrefabricatedImgTextTemplate } from '../../Temp/PrefabricatedImgText'
import { PrefabricatedTableTemplate } from '../../Temp/PrefabricatedTable'
import { PrefabricatedSelectTemplate } from '../../Temp/PrefabricatedSelect'
import { PrefabricatedSwiperTemplate } from '../../Temp/PrefabricatedSwiper'
import { PrefabricatedVisualTemplate } from '../../Temp/PrefabricatedVisual'


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

const MapList = [
    { uuid: 'A01', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821001', name: '哈尔滨市', x: 440, y: 650 },
    { uuid: 'A02', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821002', name: '齐齐哈尔市', x: 170, y: 450 },
    { uuid: 'A03', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821003', name: '鸡西市', x: 810, y: 640 },
    { uuid: 'A04', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821004', name: '鹤岗市', x: 660, y: 440 },
    { uuid: 'A05', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821005', name: '双鸭山市', x: 780, y: 540 },
    { uuid: 'A06', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821006', name: '大庆市', x: 250, y: 560 },
    { uuid: 'A07', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821007', name: '伊春市', x: 560, y: 440 },
    { uuid: 'A08', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821008', name: '佳木斯市', x: 640, y: 530 },
    { uuid: 'A09', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821009', name: '七台河市', x: 670, y: 600 },
    { uuid: 'A10', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821010', name: '牡丹江市', x: 600, y: 720 },
    { uuid: 'A11', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821011', name: '黑河市', x: 400, y: 300 },
    { uuid: 'A12', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821012', name: '绥化市', x: 410, y: 480 },
    { uuid: 'A13', cityUuid: '22115954-4ddb-4456-8b55-22f0bc821013', name: '大兴安岭地区', x: 200, y: 100 },
    { uuid: 'A14', cityUuid: '99999999-9999-9999-9999-999999999999', name: '其他省份', x: 800, y: 190 },
]

const pageData = [
    { method: 'get', url: 'assessMent/GetPartyAssessmentList' },
    { method: 'get', url: 'partyPerson/GetDaPingPartyPersonList' },
    { method: 'get', url: 'partyPerson/GetDaPingPartyPersonConstitute' },
    { method: 'get', url: 'partyPerson/GetPartyPersonVanguardList' },
    { method: 'get', url: 'partyPersonType/GetDaPingPartyPersonDevelopment' },
    { method: 'get', url: 'video/GetPartyVideo' },
    { method: 'get', url: 'organization/GetOrganizationRemarkList' },
    { method: 'get', url: 'newsRelease/GetPartyBuildingList' },
]

const KongDaHome = ({ data, page, StartEvent }) => {
    const openModel = useTemplateModel()
    const KongEvent = useEventEmitter()
    const [Open, setOpen] = useState(true)
    const [Active, setActive] = useState(true)
    const [PageData, setPageData] = useState()

    const [RemarkList, setRemarkList] = useState([])
    const [MapData, setMapData] = useState([])

    const onSwitch = () => {
        setActive(!Active)
        setTimeout(() => setOpen(!Open), 800)
    }

    const getJsonData = async () => {
        const [err, res] = await axios({ method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${uuid}/STA_PAGE/A01` } })
        if (err) return console.log(err)
        const pageData = await Decrypt(res)
        setPageData(pageData.params)
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
        setMapData(list)
    }

    useEffect(() => {
        getJsonData()
        getMapData()
        GetDaPingPartyPersonDevelopment()
    }, [])

    const onClickCity = (data) => {
        const obj = {
            click_model_height: "80vh",
            click_model_level: "updateModel",
            click_model_start: true,
            click_model_title: data.name,
            click_model_uuid: "7216ff50-c958-4321-1234-ad0716a7a7bb",
            click_model_width: "80vw",
            click_status: true,
            click_type: "model",
            click_model_params: true,
            click_model_config: [{ param_type: 'data', param_key: 'address', param_field: 'cityUuid' }],
        }
        TemplateClickFn(null, obj, data, KongEvent, openModel)
    }

    KongEvent.useSubscription(v => {
        console.log(v)
    })

    const BackBtn = () => {
        return createPortal(
            <div className={`switchBtn ${Open ? 'A01' : 'A02'}`} onClick={onSwitch}>
                {!Open &&
                    <div> {ICONMapping['fh']}返回首页</div>
                }
            </div>,
            document.body
        )
    }

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
                            <WinTemplate Config={{ ...data, window_titleTxt: '党员构成情况' }} startType={false} >
                                <div className='rightA01'>
                                    <div className='top'>
                                        <div>
                                            {(() => {
                                                const tempId = '20f2c27a-209a-4b76-a431-638be97cc01f'
                                                const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                                return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                            })()}
                                            <img className='backImage' src="https://aloss.ljkjkf.com/WebConfigFile/image/nongda/HomeC02.png" alt="" />
                                        </div>
                                        <div>
                                            {(() => {
                                                const tempId = 'd9d629be-f12a-4eb9-a97c-e833f5afe511'
                                                const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                                return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                            })()}
                                        </div>
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
                        </div>
                        <div className='right'>
                            <WinTemplate Config={{ ...data, window_titleTxt: '党建组织活动' }} startType={false} >
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
                        <div className='rightTow'>

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
                            <WinTemplate Config={{ ...data, window_titleTxt: '宣传片' }} startType={false} >
                                <div className='rightA02'>
                                    <div>
                                        {(() => {
                                            const tempId = '898c2c20-cfcd-4914-9550-cf7739fe59fb'
                                            const TemplateComponent = TemplateComponentMapping[PageData[tempId].value]
                                            return (<TemplateComponent tempId={tempId} data={PageData[tempId]} UrlData={RemarkList} LayoutEvent={StartEvent} />)
                                        })()}
                                    </div>
                                </div>
                            </WinTemplate>
                        </div>
                    </>
                }
                <img
                    style={{ left: Active ? '100%' : '-500%' }}
                    className='HomeMosk'
                    src='https://aloss.ljkjkf.com/WebConfigFile/image/nongda/HomeMosk.png'
                    alt=""
                />
                {!Open &&
                    <div className='MapBox'>
                        <img src="https://aloss.ljkjkf.com/WebConfigFile/image/nongda/MapBoxBack.png" alt="" />
                        <div className='MapBoxImage'>
                            <img className='MapHLJ' src="https://aloss.ljkjkf.com/WebConfigFile/image/nongda/MapHLJ.png" alt="" />
                            <img className='MapOther' src="https://aloss.ljkjkf.com/WebConfigFile/image/nongda/MapOther.png" alt="" />

                            <div className='MapCity'>
                                {MapList.map(v => {
                                    const { uuid, cityUuid, name, x, y } = v
                                    const style = { left: x, top: y }
                                    const num = MapData.find(v => v.uuid === cityUuid)?.projectCount
                                    const status = !!num
                                    return (
                                        <div key={uuid} style={style} onClick={() => status && onClickCity(v)}>
                                            {status && <img className='Icon' src={`https://aloss.ljkjkf.com/WebConfigFile/image/nongda/MapIcon.png`} alt="" />}
                                            {name}
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                    </div>
                }
                <BackBtn />
            </div>
        );
    }

};

export default KongDaHome;