import './TempMap.scss'
import "mars3d-cesium/Build/Cesium/Widgets/widgets.css"
import "mars3d/mars3d.css"

import { useMount } from 'ahooks'
import { useEffect, useRef, useState } from 'react'

import { InitMap } from '../../Mars3d'
import { axiosFor } from '../../Utils/Api'
import { CommonAPIUrl } from '../../Config'
import { Decrypt, GetIndexedDB } from '../../Utils/IndexedDB'

const TempMap = ({ uuid }) => {
    const mapBox = useRef()
    const [MpaPar, setMpaPar] = useState({ map: null, gra: null, clip: null })
    const onInitMap = (data, ele, til) => {
        if (mapBox.current) {
            const { map, gra, clip } = InitMap({ BOX: mapBox.current, CONFIG: data, ELEMENT: ele, TILES: til })
            setMpaPar({ map, gra, clip })
        } else setTimeout(() => onInitMap(data, ele, til), 500)
    }

    useMount(async () => {
        const { uuid: configUuid } = await GetIndexedDB('config')
        const apiList = [
            { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${configUuid}/MAP_PAGE/${uuid}` } },
            { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${configUuid}/MAP_PAGE/${uuid}_element` } },
            { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${configUuid}/MAP_PAGE/${uuid}_tiles` } },
        ]
        const [[conErr, conRes], [eleErr, eleRes], [tilErr, tilRes]] = await axiosFor(apiList)
        if (conErr || eleErr || tilErr) {
            setSTATUS({ loading: false, config: true })
            return console.error('保存失败', conErr, eleErr, tilErr)
        }
        const config = await Decrypt(conRes)
        const element = await Decrypt(eleRes)
        const tiles = await Decrypt(tilRes)
        onInitMap(config, element, tiles)
    })
    useEffect(() => { return () => { if (MpaPar.map) MpaPar.map.destroy() } }, [MpaPar])

    return (<div className='TempMap' ref={mapBox} />)
};

export default TempMap;