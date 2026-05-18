import { openDB } from 'idb'
import CryptoJS from 'crypto-js'
import { useState, useEffect } from 'react'

const { indexedDB, mozIndexedDB, webkitIndexedDB, msIndexedDB } = window
const WebDB = indexedDB || mozIndexedDB || webkitIndexedDB || msIndexedDB

// 设置内置key和iv
// 用来加密非敏感数据
const defKey = '77031bd5-d101-42ee-9307-4a2146b22a14'

const canParseJSON = str => {
    try {
        JSON.parse(str)
        return JSON.parse(str)
    } catch (e) {
        return str
    }
}

// TODO 设置秘钥和偏移量
const Assemble = async (state) => {
    const uuid = state ? window.sessionStorage.getItem('uuid') : defKey
    const combination = () => {
        const [A01, A02, A03, A04, A05] = uuid.split('-')
        const key = A05.split('').reverse().join('') + A03
        const iv = A04 + A01.split('').reverse().join('') + A02
        return { key, iv }
    }
    return new Promise(res => {
        const { key, iv } = combination()
        res({ key: CryptoJS.enc.Utf8.parse(key), iv: CryptoJS.enc.Utf8.parse(iv) })
    })
}

// TODO 加密
export const Encrypt = async (word, state) => {
    const { key, iv } = await Assemble(state)
    const data = typeof (word) === 'object' ? JSON.stringify(word) : word
    let srcs = CryptoJS.enc.Utf8.parse(data)
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    return encrypted.ciphertext.toString().toUpperCase()
}

// TODO 解密
export const Decrypt = async (word, state) => {
    const { key, iv } = await Assemble(state)
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    const data = canParseJSON(decryptedStr)
    return data
}

// TODO 打开数据库
export const IndexedDBFun = () => {
    return new Promise(res => {
        const request = WebDB.open('webDB', 1)
        request.onsuccess = e => {
            const db = e.target.result
            res(db)
        }
        request.onerror = e => console.error('[DBError]', e)
        request.onupgradeneeded = e => {
            e.target.result.createObjectStore("ClientData", { keyPath: "uuid" })
        }
    })
}

// TODO 清空数据库
export const IndexedDBClear = () => {
    window.webDB?.then(db => db.transaction('ClientData', "readwrite").objectStore('ClientData').clear())
}

// TODO 添加主键数据
export const AddIndexdDB = async (key, data) => {
    const json = { uuid: await Encrypt(key), data: await Encrypt(data) }
    return new Promise(res => {
        window.webDB.then(db => {
            if (!db.objectStoreNames.contains(json.uuid)) {
                const rest = db.transaction(['ClientData'], 'readwrite').objectStore('ClientData').add(json)
                rest.onsuccess = () => res()
                rest.onerror = e => console.log('[数据添加失败!]', key, e)
            }
        })
    })
}

// TODO 更新主键(uuid)数据
export const PutIndexedDB = async (key, data) => {
    const json = { uuid: await Encrypt(key), data: await Encrypt(data) }
    return new Promise(res => {
        window.webDB.then(db => {
            const rest = db.transaction(['ClientData'], 'readwrite').objectStore('ClientData').put(json)
            rest.onsuccess = () => res()
            rest.onerror = e => { console.log('[数据更新失败!]', key, e) }
        })
    })
}

// TODO 获取主键(uuid)解密数据
export const GetIndexedDB = async (key) => {
    return new Promise(res => {
        window.webDB.then(async db => {
            const get = await Encrypt(key)
            const rest = db.transaction(['ClientData']).objectStore('ClientData').get(get)
            rest.onsuccess = async e => {
                const { result } = e.target
                if (result) res(await Decrypt(result.data))
                else res()
            }
            rest.onerror = e => { console.log('[获取数据失败!]', key, e) }
        })
    })
}