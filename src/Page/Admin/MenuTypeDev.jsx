import './MenuTypeDev.scss'

import { Result, Skeleton } from 'antd'
import { useEventEmitter, useMount } from 'ahooks'
import { useState, memo, useCallback } from 'react'
import { Decrypt } from '../../Utils/IndexedDB'

import { DevScrollView } from '../../Temp/DevTemplate'
import { MissingTemplate } from '../../Model/page/SetDevRouter'
import { DevExtremeLayout } from '../../Temp/DevExtremeTemplate'
import { axios, axiosFor, strOfurlParamsFunc } from '../../Utils/Api'

const { port } = window.location
const dataMapping = ['API', 'THE', 'OPT']

const MenuTypeDev = ({ data, AdminEvent }) => {
    const { uuid, towUuid, targetUrl, menuType, } = data
    const DEVEvent = useEventEmitter()
    const [Show, setShow] = useState(false)
    const [Status, setStatus] = useState(true)
    const [Loading, setLoading] = useState(true)
    const [POWER, setPOWER] = useState([])
    const [ORGUUID, setORGUUID] = useState()
    const [OTHUUID, setOTHUUID] = useState()
    const [APIdata, setAPIdata] = useState()
    const [THEdata, setTHEdata] = useState()
    const [OPTdata, setOPTdata] = useState()

    const getPower = useCallback(async (e, optData) => {
        setORGUUID(e)
        const [err, res] = await axios({ method: 'get', url: 'menu/GetMenuByButton', params: { uuid: towUuid || uuid, organizationUuid: e } })
        if (err) return console.log(err)
        const options = optData || OPTdata
        const permissionSet = new Set(options.top);
        const hasPermission = res.some(item => permissionSet.has(item.uuid))
        setPOWER(res)
        setShow(hasPermission)
    }, [uuid, OPTdata])

    const processApiData = useCallback(async (apiData, theData, optData) => {
        setAPIdata(apiData)
        setTHEdata(theData)
        setOPTdata(optData)
        AdminEvent.emit({ type: 'onActiveMenu', data: { ...data, APIdata: apiData, THEdata: theData, OPTdata: optData } })
    }, [data, AdminEvent])

    const getData = useCallback(async () => {
        const url = dataMapping.map(e => ({ method: 'get', url: 'dictionary/GetJsonInfoByUuid', params: { uuid: `DEV_PAGE/${targetUrl}_${e}` } }))
        const [[APIerror, APIdata], [THEerror, THEdata], [OPTerror, OPTdata]] = await axiosFor(url)
        const apiData = APIdata ? await Decrypt(APIdata) : {}
        const theData = THEdata ? await Decrypt(THEdata) : {}
        const optData = OPTdata ? await Decrypt(OPTdata) : {}
        await processApiData(apiData, theData, optData)
        if (APIerror || THEerror || OPTerror) return setLoading(false)
        if (!apiData.api.orgShow) {
            const { orgMethod: method, orgUrl: url, orgParams } = apiData.api
            const params = { ...strOfurlParamsFunc(orgParams), menuType: menuType || uuid }
            const [err, res] = await axios({ method, url, params })
            if (err) return console.log('获取默认值失败', err)
            getPower(res.data.defaultvalue, optData)
        }
        setStatus(false)
        setLoading(false)
    }, [targetUrl, uuid, processApiData, getPower])

    useMount(getData)

    const onSelectOth = useCallback(e => setOTHUUID(e), [])

    const devCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['changeMenu', () => AdminEvent.emit({ type: 'changeMenu' })],
            ['onSelectOrg', () => getPower(data)],
            ['onSelectOth', () => onSelectOth(data)],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    DEVEvent.useSubscription(devCallBack)

    AdminEvent.useSubscription(val => { if (val.type === 'onRefresh') getData() })

    const renderContent = () => {
        if (Loading) return <Skeleton active paragraph={{ rows: 16 }} />
        if (Status) {
            if (port) return <MissingTemplate APIdata={APIdata} THEdata={THEdata} OPTdata={OPTdata} />
            return <Result status="500" title="未检测到配置文件或配置信息不完整,请检测网络或联系管理员" />
        }
        if (Show) return <Result status="500" title="为获取到页面查看权限,请联系管理员" />
        if (OPTdata?.top.findIndex(v => v.type === 'A01') === -1) return <Result status="403" title="未获取查看权限" />
        return (
            <DevExtremeLayout
                data={data}
                POWER={POWER}
                APIdata={APIdata}
                THEdata={THEdata}
                OPTdata={OPTdata}
                ORGUUID={ORGUUID}
                OTHUUID={OTHUUID}
                DEVEvent={DEVEvent}
                AdminEvent={AdminEvent}
            />
        )
    }

    return <div className='MenuTypeDev'>{renderContent()}</div>
}

export default memo(MenuTypeDev);
