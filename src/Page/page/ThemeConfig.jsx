import './ThemeConfig.scss'
import { v4 } from 'uuid'
import { useEventEmitter, useMount } from 'ahooks'
import { useEffect, useState } from 'react'


import { CommonAPIUrl } from '../../Config'
import { axios } from '../../Utils/Api'

import { GetIndexedDB, PutIndexedDB, Encrypt } from '../../Utils/IndexedDB'

import FormTemplate from '../../Utils/FormTemplate'
import { ThemeFormList } from '../../Config/themeForm'
import { themeDefault } from '../../Config/themeDefault'

const ThemeConfig = ({ AdminEvent }) => {
    const ThemeEvent = useEventEmitter()

    const [Initial, setInitial] = useState()

    const themeConfigBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onFormBack', async () => {
                AdminEvent.emit({ type: 'onSaveTheme', data })
                setInitial(data)
            }]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    useMount(async () => {
        const theme = await GetIndexedDB('theme')
        setInitial(theme)
    })


    ThemeEvent.useSubscription(themeConfigBack)
    if (Initial) {
        return (
            <div className='ThemeConfig'>
                <FormTemplate
                    fixed={true}
                    formItem={ThemeFormList}
                    FORMEVENT={ThemeEvent}
                    Initial={Initial}
                    NotLoading={true}
                />
            </div>
        )
    }

}

export default ThemeConfig;