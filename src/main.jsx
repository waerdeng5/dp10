
import './index.scss'
import { createRoot } from 'react-dom/client'
import Router from './Router/index'

import config from 'devextreme/core/config'
import { locale, loadMessages } from "devextreme/localization"

import { licenseKey, Dev_zh } from './Router/devMapping'
// import 'devextreme/dist/css/dx.material.blue.light.css';

config({ licenseKey, defaultCurrency: 'CNY' })

loadMessages(Dev_zh)
locale('zh')

createRoot(document.getElementById('root')).render(<Router />)
