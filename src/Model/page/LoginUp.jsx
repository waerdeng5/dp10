
import './LoginUp.scss'
import { useMount } from 'ahooks'
import { lazy, Suspense, useState } from 'react'
import { axios, axiosFor } from '../../Utils/Api'
import { modelStore } from '../../Router/zustand'
import { UserAvatar, UserBackboard, CommonAPIUrl } from '../../Config'
import { GetIndexedDB, AddIndexdDB, PutIndexedDB } from '../../Utils/IndexedDB'



const homePage = [{ uuid: 'a0b4f6b8-ef44-4b43-925f-85a299eb52cb', tableName: '首页', targetUrl: 'Home', icon: 'shou', closable: true, type: 'lay' }]

const LoginUp = ({ data, Event }) => {
    const { updateModel } = modelStore()
    const [loading, setLoading] = useState(false)
    const [LoadTemp, setLoadTemp] = useState(null)
    const [LoginUpData, setLoginUpData] = useState({})
    const onSignUp = async (config, data) => {
        const [err, res] = await axios({ method: 'post', url: 'authLogin/Login', params: data })
        if (err) {
            Event.emit({ type: 'onLoadingFlase' })
            setTimeout(() => updateModel({}), 500)
            return false
        }
        const TOKEN = `${res.data.token_type} ${res.data.access_token}`
        onToken(config, TOKEN)
    }

    const onToken = async (config, token) => {
        const userAdd = { nickName: '佚名', backImage: 'BackboardA01', avatar: 'AvatarA01' }
        const DBtoken = await GetIndexedDB('token')
        const configData = await GetIndexedDB('config')
        if (DBtoken) await PutIndexedDB('token', token)
        else await AddIndexdDB('token', token)

        const urlMapping = [
            { method: 'get', url: 'roleMenu/GetRoleMenuListByUserUuid' },
            { method: 'get', url: 'users/GetUserInfo' },
            { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${configData.uuid}/UserInfo` } },
            { method: 'get', url: 'projects/GetJsonInfoByUuid', path: CommonAPIUrl, params: { uuid: `${configData.uuid}/Theme/DxTheme` } },
        ]

        const [[MENUerror, MENUdata], [USERerror, USERdata], [INFOerror, INFOdata], [DEVerror, DEVdata]] = await axiosFor(urlMapping)
        if (MENUerror || USERerror || INFOerror || DEVerror) return updateModel({})
        await AddIndexdDB('menu', MENUdata.data.list)
        await AddIndexdDB('user', USERdata.data)
        await AddIndexdDB('openKey', 'a0b4f6b8-ef44-4b43-925f-85a299eb52cb')
        await AddIndexdDB('pageList', homePage)
        const userAddData = INFOdata[USERdata.data.userUuid] || userAdd
        await AddIndexdDB('userAdd', userAddData)
        await AddIndexdDB('dxTheme', DEVdata)
        sessionStorage.setItem('login', true)
        if (config.loginMethod === 1) onStart()
        if (config.loginMethod === 2) onAdmin()
        setLoginUpData({ user: USERdata.data, userAdd: userAddData })
        setLoading(true)
    }

    const onAdmin = () => {
        Event.emit({ type: 'onAdmin' })
        updateModel({})
    }
    const onStart = () => {
        Event.emit({ type: 'onStart' })
        updateModel({})
    }

    useMount(async () => {
        const { username, password, token } = data
        const theme = await GetIndexedDB('theme')
        const config = await GetIndexedDB('config', true)
        const { client_Id, client_Secret, grant_Type } = config
        const { loading } = theme
        const loginPage = lazy(() => import(`../../Page/Loading/${loading}.jsx`))
        setLoadTemp(loginPage)

        if (token) onToken(token)
        if (username && password) {
            const upData = { ...data, client_id: client_Id, grant_type: grant_Type, client_secret: client_Secret }
            onSignUp(config, upData)
        }
    })

    return (
        <Suspense>
            <div className='LoginUpBox'>
                {loading ? LoginUpData &&
                    <div className='LoginWindow'>
                        <img src={UserBackboard[LoginUpData.userAdd.backImage]} alt="" />
                        <div>
                            <svg fill="none" viewBox="0 0 144 62" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#dee2e5" d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z" fillRule="evenodd" />
                            </svg>
                            <img src={UserAvatar[LoginUpData.userAdd.avatar]} alt="" />
                            <div>
                                <div>{LoginUpData.user.roleName}</div>
                                <div>{LoginUpData.user.nickName}</div>
                            </div>
                            <div>
                                <button className="btn" onClick={onAdmin}>后台</button>
                                <button className="btn" onClick={onStart}>大屏</button>
                            </div>
                        </div>
                    </div> :
                    LoadTemp && <LoadTemp style={{ '--background': '#e8e8e800', '--stroke': '#262626' }} />
                }
            </div>
        </Suspense>
    );
};

export default LoginUp;