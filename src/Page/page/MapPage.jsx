import './MapPage.scss'

import { useState, useRef, useEffect } from 'react'


import { Spin, Result, Button } from 'antd'


import { axios } from '../../Utils/Api'


import { InitMap } from '../../Mars3d'
import { sceneParameter } from '../../Mars3d/initData'


import { Encrypt, Decrypt } from '../../Utils/IndexedDB'


const { port } = window.location



const MapPage = ({ data, AdminEvent }) => {
    const { uuid } = data
    const mapBox = useRef()
    const [STATUS, setSTATUS] = useState({ loading: true, config: true })
    const [MpaPar, setMpaPar] = useState({ map: null, gra: null, clip: null })


    const getMapData = async () => {
        const [err, res] = await axios({ method: 'get', url: '/dictionary/GetJsonInfoByUuid', params: { uuid: `MAP_PAGE/${uuid}` } })
        if (err) return setSTATUS({ loading: false, config: true })
        setSTATUS({ loading: true, config: true })
        setSTATUS({ loading: false, config: false })
        const data = await Decrypt(res)
        onInitMap(data)
    }

    const onInitMap = (data) => {
        if (mapBox.current) {
            const { map, gra, clip } = InitMap({ BOX: mapBox.current, CONFIG: data })
            setMpaPar({ map, gra, clip })
        } else setTimeout(() => onInitMap(data), 500)
    }

    const onSaveMap = async () => {
        const params = JSON.stringify(await Encrypt(sceneParameter))
        const [err, res] = await axios({ method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params: { uuid: `MAP_PAGE/${uuid}`, Content: params } })
        if (err) return console.error('保存失败', err)
        getMapData()
    }





    useEffect(() => { getMapData() }, [data])
    useEffect(() => { return () => { if (MpaPar.map) MpaPar.map.destroy() } }, [MpaPar])

    if (STATUS.loading) return (<div className="MapPage"><Spin /></div>)
    if (STATUS.config) return (
        <div className="MapPage">
            <Result
                status="403"
                title="当前地图无配置信息"
                subTitle="请检测网络连接或联系管理员添加配置!"
                extra={port && <Button type="primary" onClick={onSaveMap}>添加配置</Button>}
            />
        </div>
    )



    return (
        <div className="MapPage">
            <div className="MapBox" ref={mapBox} />
        </div>
    );
};

export default MapPage;