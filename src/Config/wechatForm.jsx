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
]

// TODO 首页设置
const WeChatHomeFormList = [
    { span: 24, formType: 'HIDDEN', name: 'pageLayout', label: 'pageLayout', rules: true, disabled: true },
    { span: 24, formType: 'HIDDEN', name: 'pageConfig', label: 'pageConfig', rules: true, disabled: true },

    // 默认选中的导航
    { span: 24, formType: 'INPUT', name: 'tabBar_active', label: '默认选中导航UUID', rules: true },
    // 是否显示默认头
    { span: 24, formType: 'RADIO', name: 'navigationStyle', label: '头部样式', rules: true, valueEnum: MappingData.WeChat_navigationStyle },
    ...defaultHeader,


    { span: 24, formType: 'RADIO', name: 'homeTabBarType', label: '底部导航', rules: true, valueEnum: MappingData.WeChat__tabBarTemp },
    // 一号导航模板
    {
        span: 24, formType: 'GROUP', name: 'TabBarType_A01_base', label: '基础设置', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'homeTabBarType', value: ['A01'] }], children: [
            { span: 12, formType: 'COLOR', name: 'tabA01_bgColor', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'tabA01_bgDeg', label: '背景角度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'tabA01_bgHeight', label: '背景高度', rules: true },
            { span: 12, formType: 'INPUT', name: 'tabA01_bgPadding', label: '内部填充', rules: true },
            { span: 8, formType: 'SELECT', name: 'tabA01_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
            { span: 8, formType: 'SELECT', name: 'tabA01_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
            { span: 8, formType: 'SELECT', name: 'tabA01_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
            { span: 12, formType: 'SELECT', name: 'tabA01_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
            { span: 12, formType: 'SELECT', name: 'tabA01_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
            { span: 12, formType: 'RADIO', name: 'tabA01_icon', label: '导航图标', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'RADIO', name: 'tabA01_text', label: '导航文字', rules: true, valueEnum: MappingData.IsEnabledBool },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'TabBarType_A01_icon_default', label: '默认图标', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'homeTabBarType', value: ['A01'] }, { field: 'tabA01_icon', value: [true] }], children: [
            { span: 24, formType: 'COLOR', name: 'tabA01_iconD_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 24, formType: 'NUMBER', name: 'tabA01_iconD_Size', label: '图标尺寸', rules: true },
            { span: 24, formType: 'INPUT', name: 'tabA01_iconD_Map', label: '外间距', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'TabBarType_A01_icon_active', label: '选中图标', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'homeTabBarType', value: ['A01'] }, { field: 'tabA01_icon', value: [true] }], children: [
            { span: 24, formType: 'COLOR', name: 'tabA01_iconA_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 24, formType: 'NUMBER', name: 'tabA01_iconA_Size', label: '图标尺寸', rules: true },
            { span: 24, formType: 'INPUT', name: 'tabA01_iconA_Map', label: '外间距', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'TabBarType_A01_text_default', label: '默认文字', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'homeTabBarType', value: ['A01'] }, { field: 'tabA01_text', value: [true] }], children: [
            { span: 24, formType: 'COLOR', name: 'tabA01_textD_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 24, formType: 'NUMBER', name: 'tabA01_textD_size', label: '文字字号', rules: true },
            { span: 24, formType: 'SELECT', name: 'tabA01_textD_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 24, formType: 'RADIO', name: 'tabA01_textD_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 24, formType: 'RADIO', name: 'tabA01_textD_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 24, formType: 'RADIO', name: 'tabA01_textD_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'INPUT', name: 'tabA01_textD_filed_size', label: '阴影数值', rules: true,
                jugde: [{ field: 'tabA01_textD_filed', value: [true] }]
            },
            {
                span: 24, formType: 'COLOR', name: 'tabA01_textD_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'tabA01_textD_filed', value: [true] }]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'TabBarType_A01_text_active', label: '选中文字', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'homeTabBarType', value: ['A01'] }, { field: 'tabA01_text', value: [true] }], children: [
            { span: 24, formType: 'COLOR', name: 'tabA01_textA_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 24, formType: 'NUMBER', name: 'tabA01_textA_size', label: '文字字号', rules: true },
            { span: 24, formType: 'SELECT', name: 'tabA01_textA_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 24, formType: 'RADIO', name: 'tabA01_textA_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 24, formType: 'RADIO', name: 'tabA01_textA_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 24, formType: 'RADIO', name: 'tabA01_textA_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'INPUT', name: 'tabA01_textA_filed_size', label: '阴影数值', rules: true,
                jugde: [{ field: 'tabA01_textA_filed', value: [true] }]
            },
            {
                span: 24, formType: 'COLOR', name: 'tabA01_textA_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'tabA01_textA_filed', value: [true] }]
            },
        ]
    },
    {
        span: 24, formType: 'LIST', name: 'tabBarList', label: '导航项', collapsible: true, addBtn: false, delBtn: false, copy: false, sort: false,
        title: '导航项', jugde: [{ field: 'homeTabBarType', value: ['A01'] }], children: [
            { span: 24, formType: 'HIDDEN', name: 'uuid', label: 'UUID', rules: true, disabled: true },
            { span: 8, formType: 'INPUT', name: 'tableName', label: '导航名称', rules: true, disabled: true },
            { span: 8, formType: 'INPUT', name: 'iconUrl', label: '图标URL' },
            { span: 8, formType: 'COLOR', name: 'background', label: '背景颜色', rules: true, mode: ['single'] },
        ]
    }
]

// TODO 页面设置
const WeChatPageFormList = [

]

// ??? 接口配置
const WeChatAPIUrl = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: 'UUID', rules: true, disabled: true },
    {
        span: 24, formType: 'LIST', name: 'dataList', label: '数据配置', collapsible: true, children: [
            { span: 12, formType: 'INPUT', name: 'api_name', label: '接口名称', rules: true },
            { span: 12, formType: 'RADIO', name: 'dataSource', label: '数据来源', rules: true, valueEnum: MappingData.WeChat__dataSourceType },
            {
                span: 24, formType: 'GROUP', name: 'api_config', label: '接口配置', collapsible: true, defaultCollapsed: false,
                jugde: [{ field: 'dataSource', value: ['api'] }], children: [
                    { span: 12, formType: 'RADIO', name: 'api_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
                    { span: 12, formType: 'INPUT', name: 'api_murl', label: '接口地址', rules: true },
                    { span: 12, formType: 'INPUT', name: 'api_params', label: '接口参数', rules: true },
                    { span: 12, formType: 'INPUT', name: 'api_extra', label: '额外域名' },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'fix_config', label: '接口配置', collapsible: true, defaultCollapsed: false,
                jugde: [{ field: 'dataSource', value: ['fix'] }], children: [
                    // 接口数据
                    // 数据名称 - 数据类型 - 自定义数据
                ]
            },
        ]
    },
]

// ??? 系统组件
// tabs 选项卡
const WeChatTDesignTabs = [
    { span: 8, formType: 'RADIO', name: 'TDtabs_icon', label: '导航图标', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'NUMBER', name: 'TDtabs_height', label: '导航高度', rules: true },
    { span: 8, formType: 'COLOR', name: 'TDtabs_back', label: '背景颜色', rules: true },
    { span: 12, formType: 'RADIO', name: 'TDtabs_type', label: '导航类型', rules: true, valueEnum: MappingData.WeChat__tabsThemeType },
    { span: 12, formType: 'RADIO', name: 'TDtabs_switch', label: '数据切换', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'TDtabs_type_line', label: '标准导航', collapsible: true, defaultCollapsed: false,
        jugde: [{ field: 'TDtabs_type', value: ['line'] }], children: [
            { span: 12, formType: 'RADIO', name: 'TDtabs_line_split', label: '分割线', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'RADIO', name: 'TDtabs_line_active', label: '激活线', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'RADIO', name: 'TDtabs_line_actType', label: '激活线类型', rules: true, valueEnum: MappingData.WeChat__tabsLineType,
                jugde: [{ field: 'TDtabs_line_active', value: [true] }]
            },
            { span: 12, formType: 'COLOR', name: 'TDtabs_line_actColor', label: '激活线颜色', rules: true, jugde: [{ field: 'TDtabs_line_active', value: [true] }] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'TDtabs_type_tag', label: '标签导航', collapsible: true, defaultCollapsed: false,
        jugde: [{ field: 'TDtabs_type', value: ['tag'] }], children: [
            { span: 8, formType: 'RADIO', name: 'TDtabs_tag_split', label: '分割线', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 8, formType: 'COLOR', name: 'TDtabs_tag_def_back', label: '默认背景', rules: true, mode: ['single'] },
            { span: 8, formType: 'COLOR', name: 'TDtabs_tag_act_back', label: '激活背景', rules: true, mode: ['single'] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'TDtabs_type_card', label: '卡片导航', collapsible: true, defaultCollapsed: false,
        jugde: [{ field: 'TDtabs_type', value: ['card'] }], children: [
            { span: 24, formType: 'COLOR', name: 'TDtabs_card_act_back', label: '激活背景', rules: true, mode: ['single'] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'TDtabs_switch_config', label: '切换事件', collapsible: true, defaultCollapsed: false,
        jugde: [{ field: 'TDtabs_switch', value: [true] }], children: [
            {
                span: 24, formType: 'LIST', name: 'TDtabs_switch_api', label: '接口事件', collapsible: true, title: '接口', children: [
                    { span: 12, formType: 'INPUT', name: 'name', label: '接口名称', rules: true },
                    { span: 12, formType: 'RADIO', name: 'type', label: '回调类型', rules: true, valueEnum: MappingData.WeChat__apiBackDataType },
                    { span: 12, formType: 'INPUT', name: 'params', label: '更新参数', rules: true },
                    { span: 12, formType: 'INPUT', name: 'other', label: '其他参数', rules: true },
                ]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'TDtabs_def_icon', label: '默认图标', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'NUMBER', name: 'TDtabs_def_icon_size', label: '图标尺寸', rules: true },
            { span: 24, formType: 'COLOR', name: 'TDtabs_def_icon_color', label: '图标颜色', rules: true, mode: ['single'] },
            { span: 24, formType: 'INPUT', name: 'TDtabs_def_icon_margin', label: '外间距', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'TDtabs_act_icon', label: '激活图标', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'NUMBER', name: 'TDtabs_act_icon_size', label: '图标尺寸', rules: true },
            { span: 24, formType: 'COLOR', name: 'TDtabs_act_icon_color', label: '图标颜色', rules: true, mode: ['single'] },
            { span: 24, formType: 'INPUT', name: 'TDtabs_act_icon_margin', label: '外间距', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'TDtabs_def_text', label: '默认文字', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'COLOR', name: 'TDtabs_def_text_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 24, formType: 'NUMBER', name: 'TDtabs_def_text_size', label: '文字字号', rules: true },
            { span: 24, formType: 'SELECT', name: 'TDtabs_def_text_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 24, formType: 'RADIO', name: 'TDtabs_def_text_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 24, formType: 'RADIO', name: 'TDtabs_def_text_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'TDtabs_act_text', label: '激活文字', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'COLOR', name: 'TDtabs_act_text_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 24, formType: 'NUMBER', name: 'TDtabs_act_text_size', label: '文字字号', rules: true },
            { span: 24, formType: 'SELECT', name: 'TDtabs_act_text_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 24, formType: 'RADIO', name: 'TDtabs_act_text_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 24, formType: 'RADIO', name: 'TDtabs_act_text_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
        ]
    },
]

// ??? 数据配置

// !!! 页面组件
// TODO 标题组件 - A01
const WeChatTempTitleA01 = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: 'UUID', rules: true, disabled: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: 'TYPE', rules: true, disabled: true },
    {
        span: 24, formType: 'GROUP', name: 'title_base', label: '基础设置', collapsible: true, children: [
            { span: 12, formType: 'COLOR', name: 'backgroun', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'backDeg', label: '背景角度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'height', label: '整体高度', rules: true },
            { span: 12, formType: 'INPUT', name: 'radius', label: '背景圆角', rules: true },
            { span: 12, formType: 'INPUT', name: 'padding', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'margin', label: '外间距', rules: true },
            { span: 12, formType: 'RADIO', name: 'after', label: '伪类元素', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'RADIO', name: 'options', label: '操作按钮', rules: true, valueEnum: MappingData.IsEnabledBool },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'title_after', label: '伪类元素', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'after', value: [true] }], children: [
            { span: 12, formType: 'COLOR', name: 'afterBack', label: '伪类颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'afterDeg', label: '颜色角度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'afterWidth', label: '伪类宽度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'afterHeight', label: '伪类高度', rules: true },
            { span: 12, formType: 'INPUT', name: 'afterMargin', label: '外间距', rules: true },
            { span: 12, formType: 'INPUT', name: 'afterRadius', label: '伪类圆角', rules: true },
            { span: 12, formType: 'RADIO', name: 'after_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'after_filed_size', label: '阴影数值', rules: true,
                jugde: [{ field: 'after_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'after_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'after_filed', value: [true] }]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'title_options', label: '操作按钮', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'options', value: [true] }], children: [
            { span: 12, formType: 'RADIO', name: 'options_type', label: '操作类型', rules: true, valueEnum: MappingData.WeChat__titleOptions },
            {
                span: 12, formType: 'INPUT', name: 'options_A01Text', label: '展示内容', rules: true,
                jugde: [{ field: 'options_type', value: ['A01'] }]
            },
            {
                span: 12, formType: 'INPUT', name: 'options_A02Text', label: '操作名称', rules: true,
                jugde: [{ field: 'options_type', value: ['A02'] }]
            },
            {
                span: 24, formType: 'INPUT', name: 'options_A02Url', label: '小程序路由', rules: true,
                jugde: [{ field: 'options_type', value: ['A02'] }]
            },
            {
                span: 12, formType: 'INPUT', name: 'options_A03Text', label: '操作名称', rules: true,
                jugde: [{ field: 'options_type', value: ['A03'] }]
            },
            {
                span: 12, formType: 'INPUT', name: 'options_A03Api', label: '接口名称', rules: true,
                jugde: [{ field: 'options_type', value: ['A03'] }]
            },
            {
                span: 12, formType: 'INPUT', name: 'options_A03Par', label: '接口参数', rules: true,
                jugde: [{ field: 'options_type', value: ['A03'] }]
            },
            {
                span: 24, formType: 'GROUP', name: 'options__flex', label: '按钮布局', collapsible: true, defaultCollapsed: true, children: [
                    { span: 12, formType: 'RADIO', name: 'options_icon', label: '按钮图标', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 12, formType: 'SELECT', name: 'options_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
                    { span: 12, formType: 'SELECT', name: 'options_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
                    { span: 12, formType: 'SELECT', name: 'options_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
                    { span: 12, formType: 'SELECT', name: 'options_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
                    { span: 12, formType: 'SELECT', name: 'options_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'options__setIcon', label: '图标设置', collapsible: true, defaultCollapsed: true,
                jugde: [{ field: 'options_icon', value: [true] }], children: [
                    { span: 12, formType: 'INPUT', name: 'options_icon_url', label: '图标', rules: true },
                    { span: 12, formType: 'INPUT', name: 'options_icon_margin', label: '图标间距', rules: true },
                    { span: 12, formType: 'INPUT', name: 'options_icon_size', label: '图标大小', rules: true },
                    { span: 12, formType: 'COLOR', name: 'options_icon_color', label: '图标颜色', rules: true, mode: ['single'] },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'options_font', label: '文字设置', collapsible: true, defaultCollapsed: true,
                children: [
                    { span: 12, formType: 'INPUT', name: 'options_padding', label: '内填充', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'options_size', label: '文字字号', rules: true, },
                    { span: 12, formType: 'COLOR', name: 'options_color', label: '文字颜色', rules: true, },
                    { span: 12, formType: 'NUMBER', name: 'options_deg', label: '文字角度', rules: true, },
                    { span: 12, formType: 'SELECT', name: 'options_famity', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 12, formType: 'RADIO', name: 'options_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 12, formType: 'RADIO', name: 'options_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 12, formType: 'RADIO', name: 'options_filed', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'options_filed_size', label: '阴影数值', rules: true,
                        jugde: [{ field: 'options_filed', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'options_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'options_filed', value: [true] }]
                    },
                ]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'title_border', label: '边框设置', collapsible: true, defaultCollapsed: true, children: [
            { span: 24, formType: 'RADIO', name: 'border', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'NUMBER', name: 'borderSize', label: '边框尺寸', rules: true,
                jugde: [{ field: 'border', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'borderType', label: '边框类型', rules: true, valueEnum: MappingData.Style__BorderType,
                jugde: [{ field: 'border', value: [true] }]
            },
            {
                span: 24, formType: 'COLOR', name: 'borderColor', label: '边框颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'border', value: [true] }]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'title_shadow', label: '阴影设置', collapsible: true, defaultCollapsed: true, children: [
            { span: 24, formType: 'RADIO', name: 'shadow', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'INPUT', name: 'shadowSize', label: '阴影尺寸', rules: true,
                jugde: [{ field: 'shadow', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'shadowType', label: '阴影类型', rules: true, valueEnum: MappingData.Style__shadowType,
                jugde: [{ field: 'shadow', value: [true] }]
            },
            {
                span: 24, formType: 'COLOR', name: 'shadowColor', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'shadow', value: [true] }]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'title_flex', label: '标题设置', collapsible: true, defaultCollapsed: true, children: [
            { span: 8, formType: 'SELECT', name: 'align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
            { span: 8, formType: 'SELECT', name: 'align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
            { span: 8, formType: 'SELECT', name: 'justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
            { span: 12, formType: 'SELECT', name: 'flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
            { span: 12, formType: 'SELECT', name: 'flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
            {
                span: 24, formType: 'LIST', name: 'textList', label: '标题内容', collapsible: true, title: '标题',
                children: [
                    { span: 12, formType: 'RADIO', name: 'uppercase', label: '字母大写', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 12, formType: 'INPUT', name: 'padding', label: '内填充', rules: true },
                    { span: 12, formType: 'INPUT', name: 'text', label: '标题内容', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'size', label: '标题字号', rules: true, },
                    { span: 12, formType: 'COLOR', name: 'color', label: '标题颜色', rules: true, },
                    { span: 12, formType: 'NUMBER', name: 'deg', label: '标题角度', rules: true, },
                    { span: 12, formType: 'SELECT', name: 'famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 12, formType: 'RADIO', name: 'weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 12, formType: 'RADIO', name: 'style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 12, formType: 'RADIO', name: 'filed', label: '标题阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 12, formType: 'INPUT', name: 'filed_size', label: '阴影数值', rules: true, jugde: [{ field: 'filed', value: [true] }] },
                    { span: 12, formType: 'COLOR', name: 'filed_color', label: '阴影颜色', rules: true, mode: ['single'], jugde: [{ field: 'filed', value: [true] }] },
                ]
            },
        ]
    },
]
// TODO 占位模块 - A01
const WeChatTempReserveA01 = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: 'UUID', rules: true, disabled: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: 'TYPE', rules: true, disabled: true },

    { span: 12, formType: 'INPUT', name: 'resA01_padding', label: '内部填充', rules: true },
    { span: 12, formType: 'RADIO', name: 'resA01_back', label: '背景类型', rules: true, valueEnum: MappingData.WeChat__resA01_backType },
    {
        span: 24, formType: 'GROUP', name: 'resA01_back_color', label: '背景颜色', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'resA01_back', value: ['color'] }], children: [
            { span: 12, formType: 'COLOR', name: 'resA01_BkColor', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'resA01_BkDeg', label: '背景角度', rules: true },
            { span: 12, formType: 'INPUT', name: 'resA01_radius', label: '背景圆角', rules: true },
            { span: 12, formType: 'RADIO', name: 'resA01_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'resA01_filed_size', label: '阴影数值', rules: true,
                jugde: [{ field: 'resA01_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'resA01_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'resA01_filed', value: [true] }]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'resA01_back_image', label: '背景图片', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'resA01_back', value: ['image'] }], children: [
            { span: 12, formType: 'INPUT', name: 'resA01_BkImage', label: '图片地址', rules: true },
            { span: 12, formType: 'SELECT', name: 'resA01_BkMode', label: '渲染模式', rules: true, valueEnum: MappingData.WeChat__imageMode },
            { span: 12, formType: 'INPUT', name: 'resA01_radius', label: '背景圆角', rules: true },
            { span: 12, formType: 'RADIO', name: 'resA01_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'resA01_filed_size', label: '阴影数值', rules: true,
                jugde: [{ field: 'resA01_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'resA01_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'resA01_filed', value: [true] }]
            },
        ]
    },
    { span: 12, formType: 'RADIO', name: 'resA01_text', label: '文字信息', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 12, formType: 'RADIO', name: 'resA01_click', label: '点击事件', rules: true, valueEnum: MappingData.IsEnabledBool },

    {
        span: 24, formType: 'GROUP', name: 'resA01_text_config', label: '文字内容', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'resA01_text', value: [true] }], children: [
            { span: 8, formType: 'SELECT', name: 'align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
            { span: 8, formType: 'SELECT', name: 'align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
            { span: 8, formType: 'SELECT', name: 'justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
            { span: 12, formType: 'SELECT', name: 'flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
            { span: 12, formType: 'SELECT', name: 'flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
            {
                span: 24, formType: 'LIST', name: 'textList', label: '文字内容', collapsible: true, title: '文字',
                children: [
                    { span: 12, formType: 'RADIO', name: 'uppercase', label: '字母大写', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 12, formType: 'INPUT', name: 'padding', label: '外部间距', rules: true },
                    { span: 12, formType: 'INPUT', name: 'text', label: '文字内容', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'size', label: '文字字号', rules: true, },
                    { span: 12, formType: 'COLOR', name: 'color', label: '文字颜色', rules: true, },
                    { span: 12, formType: 'NUMBER', name: 'deg', label: '文字角度', rules: true, },
                    { span: 12, formType: 'SELECT', name: 'famity', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 12, formType: 'RADIO', name: 'weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 12, formType: 'RADIO', name: 'style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 12, formType: 'RADIO', name: 'filed', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 12, formType: 'INPUT', name: 'filed_size', label: '阴影数值', rules: true, jugde: [{ field: 'filed', value: [true] }] },
                    { span: 12, formType: 'COLOR', name: 'filed_color', label: '阴影颜色', rules: true, mode: ['single'], jugde: [{ field: 'filed', value: [true] }] },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'resA01_click_config', label: '点击事件', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'resA01_click', value: [true] }], children: [
            { span: 12, formType: 'RADIO', name: 'resA01_clickType', label: '事件类型', rules: true, valueEnum: MappingData.WeChat__clickType },
            {
                span: 24, formType: 'GROUP', name: 'resA01_router', label: '路由事件', collapsible: true,
                jugde: [{ field: 'resA01_clickType', value: ['router'] }], children: [
                    { span: 12, formType: 'RADIO', name: 'resA01_routerType', label: '跳转方式', rules: true, valueEnum: MappingData.WeChat__routerType },
                    { span: 12, formType: 'INPUT', name: 'resA01_routerUrl', label: '路由地址', rules: true },
                    { span: 12, formType: 'INPUT', name: 'resA01_routerpar', label: '路由参数' },
                ]
            },
        ]
    }
]


// TODO 首页模板 -A01 - 菜单
const WeChatTempHomeA01 = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: 'UUID', rules: true, disabled: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: 'TYPE', rules: true, disabled: true },
]

// TODO 固定组件
const WeChatTempFixedA01 = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: 'UUID', rules: true, disabled: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: 'TYPE', rules: true, disabled: true },
    { span: 8, formType: 'INPUT', name: 'fixedA01_padding', label: '内填充', rules: true },
    { span: 8, formType: 'RADIO', name: 'fixedA01_nav', label: '显示导航', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'fixedA01_title', label: '显示标题', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'fixedA01_nav_config', label: '导航配置', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'fixedA01_nav', value: [true] }], children: WeChatTDesignTabs
    },
    {
        span: 24, formType: 'GROUP', name: 'fixedA01_title_config', label: '标题配置', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'fixedA01_title', value: [true] }], children: [
            { span: 8, formType: 'RADIO', name: 'fixedA01_title_empty', label: '占位元素', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 8, formType: 'NUMBER', name: 'fixedA01_title_height', label: '标题高度', rules: true },
            { span: 8, formType: 'INPUT', name: 'fixedA01_title_margin', label: '外间距', rules: true },
            {
                span: 24, formType: 'GROUP', name: 'fixedA01_title_empty_config', label: '占位元素', collapsible: true, defaultCollapsed: false,
                jugde: [{ field: 'fixedA01_title_empty', value: [true] }], children: [
                    { span: 12, formType: 'NUMBER', name: 'fixedA01_title_empty_width', label: '元素宽度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'fixedA01_title_empty_height', label: '元素高度', rules: true },
                    { span: 12, formType: 'INPUT', name: 'fixedA01_title_empty_margin', label: '外间距', rules: true },
                    { span: 12, formType: 'COLOR', name: 'fixedA01_title_empty_color', label: '元素颜色', rules: true, mode: ['single'] },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'fixedA01_title_zh', label: '标题样式(zh)', collapsible: true, defaultCollapsed: false,
                children: [
                    { span: 24, formType: 'INPUT', name: 'fixedA01_title_zh_margin', label: '外间距', rules: true },
                    { span: 24, formType: 'COLOR', name: 'fixedA01_title_zh_color', label: '文字颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'fixedA01_title_zh_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'fixedA01_title_zh_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'fixedA01_title_zh_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'fixedA01_title_zh_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'fixedA01_title_en', label: '标题样式(en)', collapsible: true, defaultCollapsed: false,
                children: [
                    { span: 24, formType: 'INPUT', name: 'fixedA01_title_en_margin', label: '外间距', rules: true },
                    { span: 24, formType: 'COLOR', name: 'fixedA01_title_en_color', label: '文字颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'fixedA01_title_en_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'fixedA01_title_en_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'fixedA01_title_en_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'fixedA01_title_en_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'menu_style', label: '菜单样式', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 12, formType: 'NUMBER', name: 'menu_style_number', label: '单行菜单数量', rules: true },
            { span: 12, formType: 'NUMBER', name: 'menu_style_spacing', label: '左右菜单间距', rules: true },
            { span: 12, formType: 'NUMBER', name: 'menu_style_height', label: '菜单高度', rules: true },
            { span: 12, formType: 'INPUT', name: 'menu_style_margin', label: '菜单外间距', rules: true },
            {
                span: 24, formType: 'GROUP', name: 'menu_style_text', label: '标题样式', collapsible: true, defaultCollapsed: false,
                children: [
                    { span: 12, formType: 'INPUT', name: 'menu_style_text_margin', label: '内填充', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'menu_style_text_size', label: '文字字号', rules: true },
                    { span: 12, formType: 'COLOR', name: 'menu_style_text_color', label: '文字颜色', rules: true },
                    { span: 12, formType: 'INPUT', name: 'menu_style_text_deg', label: '颜色角度', rules: true },
                    { span: 12, formType: 'SELECT', name: 'menu_style_text_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 12, formType: 'RADIO', name: 'menu_style_text_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 12, formType: 'RADIO', name: 'menu_style_text_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 12, formType: 'RADIO', name: 'menu_style_text_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'menu_style_text_filed_size', label: '阴影数值', rules: true,
                        jugde: [{ field: 'menu_style_text_filed', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'menu_style_text_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'menu_style_text_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'menu_style_theme', label: '主题样式', collapsible: true, defaultCollapsed: false,
                children: [
                    { span: 12, formType: 'NUMBER', name: 'menu_style_theme_left', label: '左定位', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'menu_style_theme_bottom', label: '下定位', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'menu_style_theme_width', label: '宽度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'menu_style_theme_height', label: '高度', rules: true },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'group_list', label: '菜单列表', collapsible: true, defaultCollapsed: true,
        children: [
            {
                span: 24, formType: 'LIST', name: 'MenuGroup', label: '菜单分组', collapsible: true, defaultCollapsed: false, title: '分组',
                children: [
                    { span: 12, formType: 'INPUT', name: 'groupZh', label: '分组名称(zh)', rules: true },
                    { span: 12, formType: 'COLOR', name: 'groupTheme', label: '主题颜色', rules: true, mode: ['single'] },
                    { span: 12, formType: 'INPUT', name: 'groupCn', label: '分组名称(en)', },
                    { span: 12, formType: 'INPUT', name: 'groupIcon', label: '导航图标', },
                    {
                        span: 24, formType: 'LIST', name: 'GroupList', label: '菜单列表', collapsible: true, defaultCollapsed: false, title: '菜单',
                        children: [
                            { span: 12, formType: 'INPUT', name: 'title', label: '菜单名称', rules: true },
                            { span: 12, formType: 'INPUT', name: 'uuid', label: '菜单UUID', rules: true },
                            { span: 12, formType: 'INPUT', name: 'image', label: '背景图片', rules: true },
                            { span: 12, formType: 'SELECT', name: 'mode', label: '渲染模式', rules: true, valueEnum: MappingData.WeChat__imageMode },
                            { span: 12, formType: 'INPUT', name: 'router', label: '路由地址', rules: true },
                            { span: 12, formType: 'INPUT', name: 'params', label: '路由参数' },
                        ]
                    },
                ]
            },
        ]
    },
]

// *** 列表样式
const WeChatTempListTypeA01 = [
    { span: 8, formType: 'INPUT', name: 'A01_padding', label: '内填充', rules: true },
    { span: 8, formType: 'INPUT', name: 'A01_margin', label: '外边距', rules: true },
    { span: 8, formType: 'INPUT', name: 'A01_radius', label: '背景圆角', rules: true },
    { span: 12, formType: 'COLOR', name: 'A01_background', label: '背景颜色', rules: true },
    { span: 12, formType: 'NUMBER', name: 'A01_backDeg', label: '背景角度', rules: true },
    { span: 8, formType: 'RADIO', name: 'A01_left', label: '左侧标签', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'A01_right', label: '右侧标签', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'A01_bottom', label: '底部边框', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'A01_title_config', label: '标题设置', collapsible: true, defaultCollapsed: false,
        children: [
            { span: 12, formType: 'INPUT', name: 'A01_title_field', label: '标题字段', rules: true },
            { span: 12, formType: 'NUMBER', name: 'A01_title_size', label: '文字字号', rules: true },
            { span: 12, formType: 'COLOR', name: 'A01_title_color', label: '文字颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'A01_title_deg', label: '颜色角度', rules: true },
            { span: 12, formType: 'SELECT', name: 'A01_title_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'A01_title_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'A01_title_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'A01_title_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'A01_title_filed_size', label: '阴影数值', rules: true,
                jugde: [{ field: 'A01_title_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'A01_title_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'A01_title_filed', value: [true] }]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'A01_left_config', label: '左侧标签', collapsible: true, defaultCollapsed: false,
        jugde: [{ field: 'A01_left', value: [true] }], children: [
            { span: 24, formType: 'INPUT', name: 'A01_left_field', label: '左标签字段', rules: true },
            { span: 24, formType: 'COLOR', name: 'A01_left_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 24, formType: 'NUMBER', name: 'A01_left_size', label: '文字字号', rules: true },
            { span: 24, formType: 'SELECT', name: 'A01_left_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 24, formType: 'RADIO', name: 'A01_left_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 24, formType: 'RADIO', name: 'A01_left_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'A01_right_config', label: '右侧标签', collapsible: true, defaultCollapsed: false,
        jugde: [{ field: 'A01_right', value: [true] }], children: [
            { span: 24, formType: 'INPUT', name: 'A01_right_field', label: '左标签字段', rules: true },
            { span: 24, formType: 'COLOR', name: 'A01_right_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 24, formType: 'NUMBER', name: 'A01_right_size', label: '文字字号', rules: true },
            { span: 24, formType: 'SELECT', name: 'A01_right_famity', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 24, formType: 'RADIO', name: 'A01_right_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 24, formType: 'RADIO', name: 'A01_right_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'A01_bottom_config', label: '底部边框', collapsible: true, defaultCollapsed: false,
        jugde: [{ field: 'A01_bottom', value: [true] }], children: [
            { span: 8, formType: 'NUMBER', name: 'A01_border_size', label: '边框尺寸', rules: true },
            { span: 8, formType: 'RADIO', name: 'A01_border_type', label: '边框类型', rules: true, valueEnum: MappingData.Style__BorderType },
            { span: 8, formType: 'COLOR', name: 'A01_border_color', label: '边框颜色', rules: true, mode: ['single'] },
        ]
    },

]
// *** 列表样式
const WeChatTempListTypeA02 = [

]


const WeChatTempFixedA02 = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: 'UUID', rules: true, disabled: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: 'TYPE', rules: true, disabled: true },
    { span: 24, formType: 'HIDDEN', name: 'temp', label: 'TEMP', rules: true, disabled: true },
    {
        span: 24, formType: 'GROUP', name: 'backgroun_config', label: '背景样式', collapsible: true, defaultCollapsed: false,
        children: [
            { span: 8, formType: 'INPUT', name: 'padding', label: '内填充', rules: true },
            { span: 8, formType: 'INPUT', name: 'margin', label: '外边距', rules: true },
            { span: 8, formType: 'INPUT', name: 'radius', label: '背景圆角', rules: true },
            { span: 12, formType: 'COLOR', name: 'background', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'backDeg', label: '背景角度', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'list_A01', label: '默认列表样式', collapsible: true, defaultCollapsed: false,
        jugde: [{ field: 'temp', value: ['WeChatTempListTypeA01'] }], children: WeChatTempListTypeA01
    },
    {
        span: 24, formType: 'GROUP', name: 'list_A02', label: '多字段列表样式', collapsible: true, defaultCollapsed: false,
        jugde: [{ field: 'temp', value: ['WeChatTempListTypeA02'] }], children: WeChatTempListTypeA02
    },
    {
        span: 24, formType: 'GROUP', name: 'divider_config', label: '分割线样式', collapsible: true, defaultCollapsed: false,
        children: [
            { span: 12, formType: 'COLOR', name: 'divider_color', label: '分割线颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'SELECT', name: 'divider_type', label: '分割线类型', rules: true, valueEnum: MappingData.Style__BorderType },
            { span: 12, formType: 'RADIO', name: 'divider_position', label: '位置', rules: true, valueEnum: MappingData.System__AlignmentLCR },
            { span: 12, formType: 'COLOR', name: 'divider_text', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'NUMBER', name: 'divider_size', label: '文字字号', rules: true },
            { span: 12, formType: 'SELECT', name: 'divider_family', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
        ]
    },
]


// TODO TDesign组件
// *** 选项卡Tabs ***// 
const WeChatTempTDesignTabs = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: 'UUID', rules: true, disabled: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: 'TYPE', rules: true, disabled: true },
    ...WeChatTDesignTabs,
    // 导航设置
    {
        span: 24, formType: 'GROUP', name: 'tabs_list_config', label: '导航信息', collapsible: true, defaultCollapsed: true,
        children: [
            {
                span: 24, formType: 'LIST', name: 'TabsList', label: '导航分组', collapsible: true, title: '导航',
                children: [
                    { span: 24, formType: 'INPUT', name: 'uuid', label: '关联id', tooltip: '数据菜单uuid' },
                    { span: 12, formType: 'INPUT', name: 'name', label: '导航名称', rules: true },
                    { span: 12, formType: 'INPUT', name: 'icon', label: '导航图标', rules: true },
                ]
            }
        ]
    }
]

// *** 轮播图Swiper ***// 
const WeChatTempTDesignSwiper = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: 'UUID', rules: true, disabled: true },
    { span: 24, formType: 'HIDDEN', name: 'type', label: 'TYPE', rules: true, disabled: true },
    // 数据来源
    {
        span: 24, formType: 'GROUP', name: 'data_config', label: '数据配置', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 8, formType: 'INPUT', name: 'APIName', label: '接口名称', rules: true },
            { span: 8, formType: 'INPUT', name: 'APILevel', label: '数据层级' },
            { span: 8, formType: 'INPUT', name: 'APIImage', label: '图片字段' },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'base_config', label: '基础配置', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 12, formType: 'COLOR', name: 'backgroun', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'backDeg', label: '背景角度', rules: true },
            { span: 12, formType: 'INPUT', name: 'padding', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'imageRadius', label: '轮播圆角', rules: true },
            { span: 12, formType: 'INPUT', name: 'imagePadding', label: '图片间距', rules: true },
            { span: 12, formType: 'NUMBER', name: 'number', label: '同时显示数量', rules: true },
            { span: 12, formType: 'RADIO', name: 'direction', label: '滚动方向', rules: true, valueEnum: MappingData.Charts__VChartsDirectionA01 },
            { span: 12, formType: 'RADIO', name: 'controls', label: '切换按钮', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'RADIO', name: 'autoplay', label: '自动播放', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'RADIO', name: 'loop', label: '循环播放', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'NUMBER', name: 'duration', label: '滑动时长', rules: true },
            { span: 12, formType: 'NUMBER', name: 'interval', label: '轮播间隔', rules: true },
            { span: 12, formType: 'NUMBER', name: 'previous', label: '前方间距', rules: true },
            { span: 12, formType: 'NUMBER', name: 'next', label: '后方间距', rules: true },
            { span: 12, formType: 'SELECT', name: 'easing', label: '动画效果', rules: true, valueEnum: MappingData.WeChat__swiperEasingType },
            { span: 12, formType: 'SELECT', name: 'image', label: '图片渲染', rules: true, valueEnum: MappingData.WeChat__imageMode },
            { span: 12, formType: 'SELECT', name: 'pagination', label: '指示器位置', rules: true, valueEnum: MappingData.WeChat__swiperPagination },
            { span: 12, formType: 'RADIO', name: 'paginationType', label: '指示器类型', rules: true, valueEnum: MappingData.WeChat__swiperPaginationType },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'pagination_dots', label: '点状指示器', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'paginationType', value: ['dots'] }], children: [
            { span: 8, formType: 'NUMBER', name: 'dotsSize', label: '背景角度', rules: true },
            { span: 8, formType: 'COLOR', name: 'dotsDefault', label: '默认颜色', rules: true, mode: ['single'] },
            { span: 8, formType: 'COLOR', name: 'dotsActive', label: '激活颜色', rules: true, mode: ['single'] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'pagination_dots-bar', label: '点条指示器', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'paginationType', value: ['dots-bar'] }], children: [
            { span: 8, formType: 'NUMBER', name: 'dotsSize', label: '背景角度', rules: true },
            { span: 8, formType: 'COLOR', name: 'dotsDefault', label: '默认颜色', rules: true, mode: ['single'] },
            { span: 8, formType: 'COLOR', name: 'dotsActive', label: '激活颜色', rules: true, mode: ['single'] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'pagination_fraction', label: '分式指示器', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'paginationType', value: ['fraction'] }], children: [
            { span: 12, formType: 'COLOR', name: 'fraBack', label: '背景颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'COLOR', name: 'fraColor', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 8, formType: 'NUMBER', name: 'fraHeight', label: '高度', rules: true },
            { span: 8, formType: 'NUMBER', name: 'fraSize', label: '字号', rules: true },
            { span: 8, formType: 'SELECT', name: 'fraFamily', label: '字体', rules: true, valueEnum: MappingData.Font__Family },
        ]
    },
]



export const WeChatFormConfig = {
    WeChatLoginFormList,
    WeChatHomeFormList,
    WeChatPageFormList,

    WeChatAPIUrl,

    WeChatTempTitleA01,
    WeChatTempReserveA01,

    WeChatTempHomeA01,

    WeChatTempFixedA01,
    WeChatTempFixedA02,

    WeChatTempTDesignTabs,
    WeChatTempTDesignSwiper,

}