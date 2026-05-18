import './localhost.scss'
import { App } from 'antd'
import { useMount } from 'ahooks'
import { memo, useState } from 'react'

import { axiosFor } from '../../Utils/Api'
import { CommonAPIUrl } from '../../Config'
import { Decrypt } from '../../Utils/IndexedDB'
import LoadSvg from '../../Page/Loading/LoadSvg'
import { modelStore } from '../../Router/zustand'
import { DevScrollView } from '../../Temp/DevTemplate'

const { port } = window.location

const ProjectTemp = ({ data }) => {
    const { webUrl, isHttps, imageUrl, tableName, fullName } = data

    const openPage = () => {
        const url = port ? `http://${webUrl}:${port}` : isHttps ? `https://${webUrl}` : `http://${webUrl}`
        window.open(url, '_blank')
    }

    return (
        <div className='ProjectTemp'>
            <img className='ProjectLogo' src={imageUrl + 'Logo.png'} alt="" />
            <div className='ProjectInfo'>
                <div className='ProjectInfoItem'>
                    <img src={imageUrl + 'Ico.ico'} alt="" />
                    <div>{tableName}</div>
                </div>
                <div className='ProjectInfoFull'>{fullName}</div>
            </div>
            <div className='Btn'>
                <button onClick={openPage}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                            </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>
            </div>
        </div>
    )
}

const LocalhostLogin = () => {
    const { updateModel, updateModel1 } = modelStore()
    const { notification } = App.useApp()
    const [projects, setProjects] = useState()

    const [APIdata, setAPIdata] = useState({})
    const [THEdata, setTHEdata] = useState({})
    const [OPTdata, setOPTdata] = useState({})


    useMount(async () => {
        const axiosList = [
            { method: 'get', url: 'projects', path: CommonAPIUrl },
            { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: 'common/PARGET/API' } },
            { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: 'common/PARGET/THE' } },
            { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: 'common/PARGET/OPT' } },
        ]
        const [[PROerror, PROdata], [APIerror, APIdata], [THEerror, THEdata], [OPTerror, OPTdata]] = await axiosFor(axiosList)
        if (PROerror || APIerror || THEerror || OPTerror) {
            notification.error({ title: '配置获取失败', description: '请检测网络或联系管理员!!', key: 'LocalhostLogin' })
            return false
        }
        setProjects(PROdata.list)
        setAPIdata(await Decrypt(APIdata))
        setTHEdata(await Decrypt(THEdata))
        setOPTdata(await Decrypt(OPTdata))
    })


    return (
        <div className="LocalhostLogin">
            <DevScrollView>
                <div>{projects ? projects.map(v => <ProjectTemp key={v.uuid} data={v} />) : <LoadSvg />}</div>
            </DevScrollView>
        </div >
    );
};

export default memo(LocalhostLogin)