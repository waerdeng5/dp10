// !!! 微信小程序配置用表
import { MappingData } from './MappingData'

// ??? 默认头部设置
const defaultHeader = {
    span: 24, formType: 'GROUP', name: 'defaultHeader', label: '操作设置', collapsible: true, defaultCollapsed: true,
    jugde: [{ field: 'navigationStyle', value: ['default'] }], children: [
        { span: 24, formType: 'RADIO', name: 'headerBack', label: '返回按钮', rules: true, valueEnum: MappingData.IsEnabledBool },
        { span: 24, formType: 'INPUT', name: 'headerTitle', label: '标题内容', rules: true },
        { span: 12, formType: 'COLOR', name: 'headerBack', label: '背景颜色', rules: true, mode: ['single'] },
        { span: 24, formType: 'RADIO', name: 'headerColor', label: '文字颜色', rules: true, valueEnum: MappingData.WeChat_navigationBarTextStyle },
    ]
}

// TODO 基础设置
const WeChatBaseFormList = [
    { span: 12, formType: 'RADIO', name: 'wxLogin', label: '直接登录', rules: true, valueEnum: MappingData.IsEnabledBool },
    defaultHeader,
]

// TODO 登录页面设置
const WeChatLoginFormList = [
    // 是否显示默认头
    { span: 12, formType: 'RADIO', name: 'navigationStyle', label: '头部样式', rules: true, valueEnum: MappingData.WeChat_navigationStyle },
    { span: 24, formType: 'RADIO', name: 'loginTemp', label: '登录页模板', rules: true, valueEnum: MappingData.WeChat_loginTemp },
    // 一号版配置
    // 二号版配置
]

// TODO 首页设置
const WeChatHomeFormList = []

// TODO 页面设置
const WeChatPageFormList = []



export const WeChatFormConfig = [
    WeChatBaseFormList,
    WeChatLoginFormList,
    WeChatHomeFormList,
    WeChatPageFormList,
]