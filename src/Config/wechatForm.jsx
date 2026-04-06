// !!! 微信小程序配置用表
import { MappingData } from './MappingData'

const headerTopCommon = [
    // 背景设置
    {
        span: 24, formType: 'GROUP', name: 'background', label: '背景设置', collapsible: true,
        children: [
            { span: 12, formType: 'COLOR', name: 'header_back', label: '背景颜色', rules: true, },
            { span: 12, formType: 'NUMBER', name: 'header_backDeg', label: '背景角度', rules: true },
        ]
    },
    // 文字设置
    {
        span: 24, formType: 'GROUP', name: 'title', label: '标题设置', collapsible: true,
        children: [
            { span: 12, formType: 'INPUT', name: 'header_text', label: '标题内容', rules: true },
            { span: 12, formType: 'NUMBER', name: 'header_size', label: '标题字号', rules: true, },
            { span: 12, formType: 'COLOR', name: 'header_color', label: '标题颜色', rules: true, },
            { span: 12, formType: 'NUMBER', name: 'header_deg', label: '标题角度', rules: true, },
            { span: 12, formType: 'SELECT', name: 'header_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'header_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'header_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'header_filed', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'header_filed_size', label: '阴影数值', rules: true,
                jugde: [{ field: 'header_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'header_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'header_filed', value: [true] }]
            },
        ]
    }
]

// ??? 默认头部设置
const defaultHeader = [
    {
        span: 24, formType: 'GROUP', name: 'defaultHeader_A02', label: '正常标头', collapsible: true,
        jugde: [{ field: 'navigationStyle', value: ['A02'] }], children: headerTopCommon
    },
    {
        span: 24, formType: 'GROUP', name: 'defaultHeader_A05', label: '左侧标头', collapsible: true,
        jugde: [{ field: 'navigationStyle', value: ['A05'] }], children: headerTopCommon
    },
    {
        span: 24, formType: 'GROUP', name: 'defaultHeader_A03', label: '返回标头', collapsible: true,
        jugde: [{ field: 'navigationStyle', value: ['A03'] }], children: [
            {
                span: 24, formType: 'GROUP', name: 'iconBack', label: '返回图标', collapsible: true,
                children: [
                    { span: 12, formType: 'COLOR', name: 'header_icon_backColor', label: '图标颜色', rules: true, mode: ['single'] },
                    { span: 12, formType: 'NUMBER', name: 'header_icon_size', label: '图标尺寸', rules: true },
                ]
            },
            ...headerTopCommon
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'defaultHeader_A04', label: '双胶囊头', collapsible: true,
        jugde: [{ field: 'navigationStyle', value: ['A04'] }], children: [
            {
                span: 24, formType: 'GROUP', name: 'capsule', label: '胶囊样式', collapsible: true,
                children: [
                    { span: 12, formType: 'COLOR', name: 'header_capsule_back', label: '胶囊背景', rules: true, mode: ['single'] },
                    { span: 12, formType: 'COLOR', name: 'header_capsule_border', label: '边框颜色', rules: true, mode: ['single'] },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'iconBack', label: '返回图标', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'header_icon_backColor', label: '图标颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'header_icon_size', label: '图标尺寸', rules: true },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'iconHome', label: '首页图标', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'header_icon_homeColor', label: '图标颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'header_icon_homeSize', label: '图标尺寸', rules: true },
                ]
            },

            ...headerTopCommon
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'defaultHeader_A06', label: '搜索标头', collapsible: true,
        jugde: [{ field: 'navigationStyle', value: ['A06'] }], children: [
            {
                span: 24, formType: 'GROUP', name: 'background', label: '背景设置', collapsible: true,
                children: [
                    { span: 12, formType: 'COLOR', name: 'header_back', label: '背景颜色', rules: true, },
                    { span: 12, formType: 'NUMBER', name: 'header_backDeg', label: '背景角度', rules: true },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'search', label: '搜索图标', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'header_searchIcon_color', label: '图标颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'header_searchIcon_size', label: '图标尺寸', rules: true },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'clear', label: '清除图标', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'header_clearIcon_color', label: '图标颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'header_clearIcon_size', label: '图标尺寸', rules: true },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'searchInput', label: '搜索框设置', collapsible: true,
                children: [
                    { span: 12, formType: 'COLOR', name: 'header_input_back', label: '背景颜色', rules: true, mode: ['single'] },
                    { span: 12, formType: 'COLOR', name: 'header_input_border', label: '边框颜色', rules: true, mode: ['single'] },
                    { span: 12, formType: 'NUMBER', name: 'header_input_height', label: '窗口高度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'header_input_radius', label: '窗口圆角', rules: true },
                    { span: 12, formType: 'INPUT', name: 'header_input_placeholder', label: '占位文字', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'header_input_size', label: '文字字号', rules: true },
                    { span: 12, formType: 'COLOR', name: 'header_input_color', label: '文字颜色', rules: true, mode: ['single'] },
                    { span: 12, formType: 'SELECT', name: 'header_input_famity', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 12, formType: 'RADIO', name: 'header_input_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 12, formType: 'RADIO', name: 'header_input_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                ]
            }
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'defaultHeader_A07', label: '图片标头', collapsible: true,
        jugde: [{ field: 'navigationStyle', value: ['A07'] }], children: [
            {
                span: 24, formType: 'GROUP', name: 'background', label: '背景设置', collapsible: true,
                children: [
                    { span: 12, formType: 'COLOR', name: 'header_back', label: '背景颜色', rules: true, },
                    { span: 12, formType: 'NUMBER', name: 'header_backDeg', label: '背景角度', rules: true },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'image', label: '图片设置', collapsible: true,
                children: [
                    { span: 12, formType: 'INPUT', name: 'header_image_url', label: '图片URL', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'header_image_width', label: '图片宽度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'header_image_height', label: '图片高度', rules: true },
                    { span: 12, formType: 'RADIO', name: 'header_image_filed', label: '图片阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'header_image_size', label: '阴影数值', rules: true,
                        jugde: [{ field: 'header_image_filed', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'header_image_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'header_image_filed', value: [true] }]
                    },
                ]
            },
        ]
    },
]

// TODO 登录页面设置
const WeChatLoginFormList = [
    { span: 12, formType: 'RADIO', name: 'wxLogin', label: '直接登录', rules: true, valueEnum: MappingData.IsEnabledBool },
    // 是否显示默认头
    { span: 24, formType: 'RADIO', name: 'navigationStyle', label: '头部样式', rules: true, valueEnum: MappingData.WeChat_navigationStyle },
    ...defaultHeader,
    { span: 24, formType: 'RADIO', name: 'loginTemp', label: '登录页模板', rules: true, valueEnum: MappingData.WeChat_loginTemp },
    // 一号版配置
    {
        span: 24, formType: 'GROUP', name: 'loginTemp_A01_01', label: '一号模板-基础', collapsible: true,
        jugde: [{ field: 'loginTemp', value: ['A01'] }], children: [
            { span: 12, formType: 'RADIO', name: 'loginTempA01_top', label: '默认头距离', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'INPUT', name: 'loginTempA01_pad', label: '内填充', rules: true },
            { span: 12, formType: 'COLOR', name: 'loginTempA01_back', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'loginTempA01_deg', label: '背景角度', rules: true },
        ]
    },
    {
        span: 24, formType: 'LIST', name: 'loginTemp_A01_Text', label: '一号模板-文字', collapsible: true,
        jugde: [{ field: 'loginTemp', value: ['A01'] }], children: [
            // 对齐方式 // 内填充
            { span: 12, formType: 'RADIO', name: 'align', label: '对齐方式', rules: true, valueEnum: MappingData.System__AlignmentLCR },
            { span: 12, formType: 'INPUT', name: 'padding', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'text', label: '文字内容', rules: true },
            { span: 12, formType: 'NUMBER', name: 'size', label: '文字字号', rules: true, },
            { span: 12, formType: 'COLOR', name: 'color', label: '文字颜色', rules: true, },
            { span: 12, formType: 'NUMBER', name: 'deg', label: '文字角度', rules: true, },
            { span: 12, formType: 'SELECT', name: 'famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'INPUT', name: 'filed_size', label: '阴影数值', rules: true, jugde: [{ field: 'filed', value: [true] }] },
            { span: 12, formType: 'COLOR', name: 'filed_color', label: '阴影颜色', rules: true, mode: ['single'], jugde: [{ field: 'filed', value: [true] }] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'loginTemp_A01_03', label: '一号模板-图片', collapsible: true,
        jugde: [{ field: 'loginTemp', value: ['A01'] }], children: [
            { span: 24, formType: 'INPUT', name: 'loginTempA01_img', label: '图片路径', rules: true },
            { span: 12, formType: 'NUMBER', name: 'loginTempA01_imgW', label: '图片宽度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'loginTempA01_imgH', label: '图片高度', rules: true },
            { span: 12, formType: 'INPUT', name: 'loginTempA01_imgP', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'loginTempA01_imgM', label: '外间距', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'loginTemp_A01_04', label: '一号模板-登录窗口', collapsible: true,
        jugde: [{ field: 'loginTemp', value: ['A01'] }], children: [
            { span: 12, formType: 'COLOR', name: 'loginTempA01_signBack', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'loginTempA01_signDeg', label: '背景角度', rules: true },
            { span: 12, formType: 'INPUT', name: 'loginTempA01_signPad', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'loginTempA01_signMar', label: '外间距', rules: true },
            { span: 12, formType: 'INPUT', name: 'loginTempA01_signRaduis', label: '背景圆角', rules: true },
            { span: 12, formType: 'RADIO', name: 'loginTempA01_signBorder', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'NUMBER', name: 'loginTempA01_signBorder_size', label: '边框尺寸', rules: true,
                jugde: [{ field: 'loginTempA01_signBorder', value: [true] }]
            },
            {
                span: 12, formType: 'RADIO', name: 'loginTempA01_signBorder_type', label: '边框类型', rules: true,
                valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'loginTempA01_signBorder', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'loginTempA01_signBorder_color', label: '边框颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'loginTempA01_signBorder', value: [true] }]
            },
        ]
    },
    {
        span: 24, formType: 'LIST', name: 'loginTemp_A01_sing', label: '一号模板-登录标题', collapsible: true,
        jugde: [{ field: 'loginTemp', value: ['A01'] }], children: [
            { span: 12, formType: 'INPUT', name: 'padding', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'margin', label: '外边距', rules: true },
            { span: 12, formType: 'INPUT', name: 'text', label: '文字内容', rules: true },
            { span: 12, formType: 'NUMBER', name: 'size', label: '文字字号', rules: true },
            { span: 12, formType: 'COLOR', name: 'color', label: '文字颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'deg', label: '文字角度', rules: true },
            { span: 12, formType: 'SELECT', name: 'famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'INPUT', name: 'filed_size', label: '阴影数值', rules: true, jugde: [{ field: 'filed', value: [true] }] },
            { span: 12, formType: 'COLOR', name: 'filed_color', label: '阴影颜色', rules: true, mode: ['single'], jugde: [{ field: 'filed', value: [true] }] },
        ]
    },
    { span: 8, formType: 'RADIO', name: 'loginTempA01_formLabel', label: '表单标签', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'loginTempA01_formIcon', label: '表单图标', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'loginTempA01_formPwd', label: '切换密码', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'loginTemp_A01_05_0', label: '一号模板-输入框', collapsible: true,
        jugde: [{ field: 'loginTemp', value: ['A01'] }], children: [
            { span: 12, formType: 'NUMBER', name: 'loginTempA01_formInput_height', label: '高度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'loginTempA01_formInput_size', label: '文字字号', rules: true },
            { span: 12, formType: 'COLOR', name: 'loginTempA01_formInput_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'NUMBER', name: 'loginTempA01_formInput_border', label: '边框宽度', rules: true },
            { span: 12, formType: 'COLOR', name: 'loginTempA01_formInput_fill', label: '边框颜色', rules: true, mode: ['single'] },

        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'loginTemp_A01_05_1', label: '一号模板-表单标签', collapsible: true,
        jugde: [{ field: 'loginTemp', value: ['A01'] }, { field: 'loginTempA01_formLabel', value: [true] }], children: [
            { span: 12, formType: 'INPUT', name: 'loginTempA01_formLabel_padding', label: '内填充', rules: true },
            { span: 12, formType: 'NUMBER', name: 'loginTempA01_formLabel_size', label: '文字字号', rules: true },
            { span: 12, formType: 'COLOR', name: 'loginTempA01_formLabel_color', label: '文字颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'loginTempA01_formLabel_deg', label: '文字角度', rules: true },
            { span: 12, formType: 'SELECT', name: 'loginTempA01_formLabel_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'loginTempA01_formLabel_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'loginTempA01_formLabel_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'loginTempA01_formLabel_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'loginTempA01_formLabel_filed_size', label: '阴影数值', rules: true,
                jugde: [{ field: 'loginTempA01_formLabel_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'loginTempA01_formLabel_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'loginTempA01_formLabel_filed', value: [true] }]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'loginTemp_A01_05_2', label: '一号模板-表单图标', collapsible: true,
        jugde: [{ field: 'loginTemp', value: ['A01'] }, { field: 'loginTempA01_formIcon', value: [true] }], children: [
            { span: 12, formType: 'INPUT', name: 'loginTempA01_formIcon_admin', label: '账户图标', rules: true },
            { span: 12, formType: 'INPUT', name: 'loginTempA01_formIcon_pwe', label: '密码图标', rules: true },
            { span: 12, formType: 'COLOR', name: 'loginTempA01_formIcon_color', label: '图标颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'NUMBER', name: 'loginTempA01_formIcon_size', label: '图标尺寸', rules: true },
            { span: 12, formType: 'INPUT', name: 'loginTempA01_formIcon_padding', label: '内填充', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'loginTemp_A01_05_3', label: '一号模板-密码图标', collapsible: true,
        jugde: [{ field: 'loginTemp', value: ['A01'] }, { field: 'loginTempA01_formPwd', value: [true] }], children: [
            { span: 12, formType: 'COLOR', name: 'loginTempA01_formPwd_color', label: '图标颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'NUMBER', name: 'loginTempA01_formPwd_size', label: '图标尺寸', rules: true },

        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'loginTemp_A01_06', label: '一号模板-操作设置', collapsible: true,
        jugde: [{ field: 'loginTemp', value: ['A01'] }], children: [
            { span: 12, formType: 'RADIO', name: 'loginTempA01_btn_remember', label: '记住密码', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'COLOR', name: 'loginTempA01_btn_remember_color', label: '图标颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'loginTempA01_btn_remember', value: [true] }]
            },

            // 登录按钮设置    
            {
                span: 24, formType: 'GROUP', name: 'loginTemp_A01_btn_login', label: '登录按钮', collapsible: true,
                children: [
                    { span: 12, formType: 'COLOR', name: 'loginTempA01_btnLogin_back', label: '背景颜色', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'loginTempA01_btnLogin_backDeg', label: '背景角度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'loginTempA01_btnLogin_height', label: '按钮高度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'loginTempA01_btnLogin_radius', label: '圆角大小', rules: true },
                    { span: 12, formType: 'INPUT', name: 'loginTempA01_btnLogin_margin', label: '外间距', rules: true },
                    // 背景边框
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnLogin_border', label: '按钮边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'NUMBER', name: 'loginTempA01_btnLogin_border_size', label: '边框尺寸', rules: true,
                        jugde: [{ field: 'loginTempA01_btnLogin_border', value: [true] }]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'loginTempA01_btnLogin_border_type', label: '边框类型', rules: true,
                        valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'loginTempA01_btnLogin_border', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'loginTempA01_btnLogin_border_color', label: '边框颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'loginTempA01_btnLogin_border', value: [true] }]
                    },
                    // 背景阴影
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnLogin_shadow', label: '按钮阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'loginTempA01_btnLogin_shadow_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'loginTempA01_btnLogin_shadow', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'loginTempA01_btnLogin_shadow_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'loginTempA01_btnLogin_shadow', value: [true] }]
                    },
                    // 图标
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnLogin_icon', label: '按钮图标', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'loginTempA01_btnLogin_icon_url', label: '图标URL', rules: true,
                        jugde: [{ field: 'loginTempA01_btnLogin_icon', value: [true] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'loginTempA01_btnLogin_icon_size', label: '图标尺寸', rules: true,
                        jugde: [{ field: 'loginTempA01_btnLogin_icon', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'loginTempA01_btnLogin_icon_color', label: '图标颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'loginTempA01_btnLogin_icon', value: [true] }]
                    },
                    {
                        span: 12, formType: 'INPUT', name: 'loginTempA01_btnLogin_icon_margin', label: '图标间距', rules: true,
                        jugde: [{ field: 'loginTempA01_btnLogin_icon', value: [true] }]
                    },
                    { span: 12, formType: 'INPUT', name: 'loginTempA01_btnLogin_text', label: '文字内容', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'loginTempA01_btnLogin_text_size', label: '文字字号', rules: true },
                    { span: 12, formType: 'COLOR', name: 'loginTempA01_btnLogin_text_color', label: '文字颜色', rules: true, mode: ['single'] },
                    { span: 12, formType: 'SELECT', name: 'loginTempA01_btnLogin_text_famity', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnLogin_text_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnLogin_text_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnLogin_text_fill', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'loginTempA01_btnLogin_text_fill_size', label: '阴影数值', rules: true,
                        jugde: [{ field: 'loginTempA01_btnLogin_text_fill', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'loginTempA01_btnLogin_text_fill_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'loginTempA01_btnLogin_text_fill', value: [true] }]
                    },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'loginTemp_A01_btn_weChat', label: '微信按钮', collapsible: true,
                jugde: [{ field: 'wxLogin', value: [true] }], children: [
                    { span: 12, formType: 'COLOR', name: 'loginTempA01_btnWeChat_back', label: '背景颜色', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'loginTempA01_btnWeChat_backDeg', label: '背景角度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'loginTempA01_btnWeChat_height', label: '按钮高度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'loginTempA01_btnWeChat_radius', label: '圆角大小', rules: true },
                    { span: 12, formType: 'INPUT', name: 'loginTempA01_btnWeChat_margin', label: '外间距', rules: true },
                    // 背景边框
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnWeChat_border', label: '按钮边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'NUMBER', name: 'loginTempA01_btnWeChat_border_size', label: '边框尺寸', rules: true,
                        jugde: [{ field: 'loginTempA01_btnWeChat_border', value: [true] }]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'loginTempA01_btnWeChat_border_type', label: '边框类型', rules: true,
                        valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'loginTempA01_btnWeChat_border', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'loginTempA01_btnWeChat_border_color', label: '边框颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'loginTempA01_btnWeChat_border', value: [true] }]
                    },
                    // 背景阴影
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnWeChat_shadow', label: '按钮阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'loginTempA01_btnWeChat_shadow_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'loginTempA01_btnWeChat_shadow', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'loginTempA01_btnWeChat_shadow_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'loginTempA01_btnWeChat_shadow', value: [true] }]
                    },
                    // 图标
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnWeChat_icon', label: '按钮图标', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'loginTempA01_btnWeChat_icon_url', label: '图标URL', rules: true,
                        jugde: [{ field: 'loginTempA01_btnWeChat_icon', value: [true] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'loginTempA01_btnWeChat_icon_size', label: '图标尺寸', rules: true,
                        jugde: [{ field: 'loginTempA01_btnWeChat_icon', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'loginTempA01_btnWeChat_icon_color', label: '图标颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'loginTempA01_btnWeChat_icon', value: [true] }]
                    },
                    {
                        span: 12, formType: 'INPUT', name: 'loginTempA01_btnWeChat_icon_margin', label: '图标间距', rules: true,
                        jugde: [{ field: 'loginTempA01_btnWeChat_icon', value: [true] }]
                    },
                    { span: 12, formType: 'INPUT', name: 'loginTempA01_btnWeChat_text', label: '文字内容', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'loginTempA01_btnWeChat_text_size', label: '文字字号', rules: true },
                    { span: 12, formType: 'COLOR', name: 'loginTempA01_btnWeChat_text_color', label: '文字颜色', rules: true, mode: ['single'] },
                    { span: 12, formType: 'SELECT', name: 'loginTempA01_btnWeChat_text_famity', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnWeChat_text_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnWeChat_text_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 12, formType: 'RADIO', name: 'loginTempA01_btnWeChat_text_fill', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'loginTempA01_btnWeChat_text_fill_size', label: '阴影数值', rules: true,
                        jugde: [{ field: 'loginTempA01_btnWeChat_text_fill', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'loginTempA01_btnWeChat_text_fill_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'loginTempA01_btnWeChat_text_fill', value: [true] }]
                    },
                ]
            },
        ]
    },

    // 二号版配置
]

// TODO 首页设置
const WeChatHomeFormList = []

// TODO 页面设置
const WeChatPageFormList = []



export const WeChatFormConfig = {
    WeChatLoginFormList,
    WeChatHomeFormList,
    WeChatPageFormList,
}