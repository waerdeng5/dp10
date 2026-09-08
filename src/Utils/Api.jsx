import { createAlova } from 'alova'
import { notification } from 'antd'
import ReactHook from 'alova/react'
import adapterFetch from 'alova/fetch'

import { GetIndexedDB } from './IndexedDB'


import { App, Button, Space } from 'antd';

export const ContentTypeMapping = [
    'image/png',
    'image/jpeg',
    'image/gif',
    'video/mp4',
    'application/pdf',
    'text/plain',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-word',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '系统提示!',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
    521: '接口又爱了'
}

// XML请求
const TypeXFrom = []
// 无头请求
const urlsToMatch = [
    'https://common-api.ljkjkf.com/wechats/GetJsonInfoByUuid',
    'https://common-api.ljkjkf.com/wechats/SaveJsonInfoByUuid',
    'https://common-api.ljkjkf.com/projects/getProjectConfigInfo',
    'https://common-api.ljkjkf.com/projects',
]

const noTokenApi = [
    'authLogin/Login',
    'projects/GetJsonInfoByUuid',
    'projects/SaveJsonInfoByUuid',
    'users/GetOrganizationListByUser'
]

// ! 抛错机制
const ErrorModal = (status, data) => {
    const { message } = data
    notification.error({ key: 'apiError', title: codeMessage[status], description: message })
    return (<App />)
}

const alovaInstance = createAlova({
    localCache: null,
    timeout: 60000,
    statesHook: ReactHook,
    requestAdapter: adapterFetch(),
    cacheFor: false, // 禁用缓存机制

    async beforeRequest(method) {
        const { url } = method
        if (TypeXFrom.includes(url)) {
            method.config.headers['content-type'] = 'application/x-www-form-urlencoded'
        } else if (urlsToMatch.includes(url)) {
            method.config.headers['content-type'] = 'application/json; charset=utf-8'
        } else if (noTokenApi.some(item => url.includes(item))) {
            method.config.headers['content-type'] = 'application/json; charset=utf-8'
        } else {
            const token = await GetIndexedDB('token')
            if (token) { method.config.headers.Authorization = token }
            else {
                console.log(url)
                throw new Error('请求头失效')
            }
        }
    },
    responded: {
        onSuccess: async (response) => {
            const contentType = response.headers.get('Content-Type')
            if (contentType.indexOf('application/json') !== -1) {
                try {
                    const json = await response.json()
                    if (response.status >= 400) {
                        ErrorModal(response.status, json)
                        throw new Error(json)
                    }
                    return json
                }
                catch (err) {
                    throw new Error(err)
                }
            } else if (contentType.indexOf('text/html') !== -1) {
                try {
                    const text = await response.text()
                    if (response.status >= 400) {
                        ErrorModal(response.status, text)
                        throw new Error(text)
                    }
                    return JSON.parse(text)
                }
                catch (err) {
                    throw new Error(err)
                }
            } else if (ContentTypeMapping.includes(contentType)) {
                try {
                    let filename = '导出文件'
                    const blob = await response.blob()
                    if (response.status >= 400) {
                        ErrorModal(response.status, blob)
                        throw new Error(blob)
                    }
                    const contentDisposition = response.headers.get('Content-Disposition')
                    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
                    const matches = filenameRegex.exec(contentDisposition)
                    if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '')
                    return { blob, filename, contentType, response }
                }
                catch (err) {
                    throw new Error(err)
                }
            } else {
                throw new Error('未知响应头')
            }
        },
        onError: (error) => {
            ErrorModal(error)
            throw new Error(error)
        }
        // onComplete: (res) => console.log('[请求完成]', res)
    }
})

// TODO 默认请求方式 // 可二续 三续
export const Http = async ({ method, url, params, path, headers, responseType }) => {
    const config = await GetIndexedDB('config')
    const alovaUrl = path ? path + url : `${config.apiUrl}/${url}`

    switch (method) {
        case 'get':
        case 'Get':
        case 'GET':
            return alovaInstance.Get(alovaUrl, { params, headers, responseType })
        case 'post':
        case 'Post':
        case 'POST':
            return alovaInstance.Post(alovaUrl, params)
        case 'put':
        case 'Put':
        case 'PUT':
            return alovaInstance.Put(alovaUrl, params)
        case 'delete':
        case 'Delete':
        case 'DELETE':
            return alovaInstance.Delete(alovaUrl, params)
        case 'patch':
        case 'Patch':
        case 'PATHC':
            return alovaInstance.Patch(alovaUrl, params)
        default: return false
    }
}

export const axios = async (data) => {
    return Http(data).then(res => [null, res]).catch(err => [err, undefined])
}

export const axiosFor = async (data) => {
    return Promise.all(data.map(e => axios(e)))
}

export const axiosFile = async (url, data) => {
    const formData = new FormData()
    formData.append('file', data)
    return alovaInstance.Post(url, formData).then(res => [null, res]).catch(err => [err, undefined])
}


export const strOfurlParamsFunc = (string) => {
    if (string) {
        const data = string.trimEnd().split('&').reduce((acc, item) => {
            const [key, value] = item.split('=')
            acc[key] = encodeURIComponent(value)
            return acc
        }, {})
        return data
    } else return {}
}