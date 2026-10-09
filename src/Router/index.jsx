import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/locale/zh_CN'
import { lazy, Suspense } from 'react'
import { ConfigProvider, App } from 'antd'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ModelPopup, ModelPopup1, ModelPopup2, ModelPopup3, ModelPopup4, ModelPopup5 } from '../Model'

import { IndexedDBFun } from '../Utils/IndexedDB'
import { judgeBrowserVersion, debuggerFun } from '../Utils'


dayjs.locale('zh-cn')

const { port } = window.location
const Loading = lazy(() => import('../Page/Loading/LoadA06'))


const View = lazy(() => import('../View'))
const Login = lazy(() => import('../View'))
const Admin = lazy(() => import('../Admin'))
const Start = lazy(() => import('../Start'))

const RouterMapping = [
    { path: '/', element: <View /> },
    { path: 'Login', element: <Login /> },
    { path: 'Admin', element: <Admin /> },
    { path: 'Start/:page?/:id?', element: <Start /> },
]

const router = createBrowserRouter(RouterMapping)

const RouterPage = () => {

    // console.log(window.location)
    window.webDB = IndexedDBFun()
    // if (!port) debuggerFun()
    return (
        <ConfigProvider locale={zhCN}>
            <App>
                <Suspense fallback={<Loading />}>
                    {judgeBrowserVersion() ?
                        <RouterProvider router={router} /> :
                        <VersionTips />
                    }
                    <ModelPopup />
                    <ModelPopup1 />
                    <ModelPopup2 />
                    <ModelPopup3 />
                    <ModelPopup4 />
                    <ModelPopup5 />
                </Suspense>
            </App>
        </ConfigProvider>
    )

}

export default RouterPage;