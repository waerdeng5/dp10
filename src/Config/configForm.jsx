// !!! 系统配置表单项
import { MappingData } from './MappingData'
const FlowMenuAPIFieldJugdeValue = ['RADIO', 'SELECT', 'SELECTM', 'TREE', 'TREEM', 'CASCADER', 'RADIOLIST', 'CHECKBOXLIST']

const TextClassList = [
    { span: 12, formType: 'INPUT', name: 'INPUT1', label: 'INPUT', rules: true },
    { span: 12, formType: 'COLOR', name: 'COLOR1', label: 'COLOR', rules: true },
    {
        span: 24, formType: 'GROUP', name: 'TextClassList_A01', label: '输入框', collapsible: true,
        children: [
            { span: 12, formType: 'INPUT', name: 'INPUT', label: 'INPUT', rules: true },
            { span: 12, formType: 'PASSWORD', name: 'PASSWORD', label: 'PASSWORD', rules: true },
            { span: 12, formType: 'TEXTAREA', name: 'TEXTAREA', label: 'TEXTAREA', rules: true },
            { span: 12, formType: 'NUMBER', name: 'NUMBER', label: 'NUMBER', rules: true },
            { span: 12, formType: 'RANGE', name: 'RANGE', label: 'RANGE', rules: true },
            { span: 12, formType: 'SLIDER', name: 'SLIDER', label: 'SLIDER', rules: true },
            { span: 12, formType: 'RATE', name: 'RATE', label: 'RATE', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'TextClassList_A02', label: '选择框', collapsible: true,
        children: [
            { span: 12, formType: 'COLOR', name: 'COLOR', label: 'COLOR', rules: true },
            { span: 12, formType: 'RADIO', name: 'RADIO', label: 'RADIO', rules: true, valueEnum: MappingData.Theme__Loading },
            { span: 12, formType: 'SELECT', name: 'SELECT', label: 'SELECT', rules: true, valueEnum: MappingData.Form__TypeList },
            { span: 12, formType: 'SELECTM', name: 'SELECTM', label: 'SELECTM', rules: true, valueEnum: MappingData.Form__TypeList },
            { span: 12, formType: 'TREE', name: 'TREE', label: 'TREE', rules: true, valueEnum: MappingData.Form__TypeList },
            { span: 12, formType: 'TREEM', name: 'TREEM', label: 'TREEM', rules: true, valueEnum: MappingData.Form__TypeList },
            { span: 12, formType: 'CASCADER', name: 'CASCADER', label: 'CASCADER', rules: true, valueEnum: MappingData.Form__TypeList },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'TextClassList_A03', label: '时间框', collapsible: true,
        children: [
            { span: 24, formType: 'TIME', name: 'TIME', label: 'TIME', rules: true },
            { span: 24, formType: 'DATE', name: 'DATE', label: 'DATE', rules: true },
            { span: 24, formType: 'DATETIME', name: 'DATETIME', label: 'DATETIME', rules: true },
            { span: 24, formType: 'WEEK', name: 'WEEK', label: 'WEEK', rules: true },
            { span: 24, formType: 'MONTH', name: 'MONTH', label: 'MONTH', rules: true },
            { span: 24, formType: 'QUARTER', name: 'QUARTER', label: 'QUARTER', rules: true },
            { span: 24, formType: 'YEAR', name: 'YEAR', label: 'YEAR', rules: true },
            { span: 24, formType: 'TIMERANGE', name: 'TIMERANGE', label: 'TIMERANGE', rules: true },
            { span: 24, formType: 'DATERANGE', name: 'DATERANGE', label: 'DATERANGE', rules: true },
            { span: 24, formType: 'DATETIMERANGE', name: 'DATETIMERANGE', label: 'DATETIMERANGE', rules: true },
            { span: 24, formType: 'WEEKRANGE', name: 'WEEKRANGE', label: 'WEEKRANGE', rules: true },
            { span: 24, formType: 'MONTHRANGE', name: 'MONTHRANGE', label: 'MONTHRANGE', rules: true },
            { span: 24, formType: 'QUARTERRANGE', name: 'QUARTERRANGE', label: 'QUARTERRANGE', rules: true },
            { span: 24, formType: 'YEARRANGE', name: 'YEARRANGE', label: 'YEARRANGE', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'TextClassList_A04', label: '其他', collapsible: true,
        children: [
            { span: 24, formType: 'TempICON', name: 'TempICON', label: 'TempICON', rules: true },

        ]
    },
    {
        span: 12, formType: 'LIST', name: 'TextClassList_List', label: 'ARRAY', collapsible: true,
        children: [
            { span: 24, formType: 'INPUT', name: 'INPUT1', label: 'INPUT1', rules: true },
            { span: 24, formType: 'INPUT', name: 'INPUT2', label: 'INPUT2', rules: true },
        ]
    },
    { span: 12, formType: 'INPUT', name: 'INPUT3', label: 'INPUT3', tooltip: '这是一个输入框' },

]
// ***  项目主题信息
const ThemeFormList = [
    {
        span: 24, formType: 'GROUP', name: 'ThemeFormList_page', label: '基础页面', collapsible: true,
        children: [
            { span: 12, formType: 'RADIO', name: 'loginType', label: '登录模式', rules: true, valueEnum: MappingData.Theme__loginType },
            { span: 12, formType: 'RADIO', name: 'devTheme', label: '同步DEV主题', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 8, formType: 'SELECT', name: 'loading', label: '加载动画', rules: true, valueEnum: MappingData.Theme__Loading },
            { span: 8, formType: 'SELECT', name: 'login', label: '登录页面', rules: true, valueEnum: MappingData.Theme__LoginPage },
            { span: 8, formType: 'SELECT', name: 'sign', label: '登录窗口', rules: true, valueEnum: MappingData.Theme__SignPage },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'ThemeFormList_theme', label: '主题设置', collapsible: true,
        children: [
            { span: 12, formType: 'RADIO', name: 'layout', label: '主题布局', rules: true, valueEnum: MappingData.Theme__Layout },
            { span: 12, formType: 'COLOR', name: 'themeColor', label: '主题色', rules: true },
            { span: 12, formType: 'COLOR', name: 'maskColor', label: '遮罩色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'maskBlur', label: '遮罩模糊度', rules: true },
            { span: 24, formType: 'RADIO', name: 'backType', label: '背景类型', rules: true, valueEnum: MappingData.Theme__BackType },
            { span: 12, formType: 'COLOR', name: 'backColor', label: '背景颜色', jugde: [{ field: 'backType', value: ['Color'] }] },
            { span: 12, formType: 'NUMBER', name: 'backDeg', label: '背景角度', jugde: [{ field: 'backType', value: ['Color'] }] },
            {
                span: 24, formType: 'SELECT', name: 'backImage', label: '图片选择', valueEnum: MappingData.Theme__BackImage,
                jugde: [{ field: 'backType', value: ['Image'] }]
            },
            {
                span: 24, formType: 'SELECT', name: 'backGrundType', label: '图形背景', valueEnum: MappingData.Theme__BackGrund,
                jugde: [{ field: 'backType', value: ['Ground'] }]
            },
            {
                span: 24, formType: 'TempBackGrund', name: 'grundStyle', label: '墙设置',
                jugde: [{ field: 'backType', value: ['Ground'] }]
            },
            { span: 24, formType: 'INPUT', name: 'backVideo', label: '视频地址', rules: true, jugde: [{ field: 'backType', value: ['Video'] }] },
            { span: 12, formType: 'NUMBER', name: 'backVideoStart', label: '开始时间', rules: true, jugde: [{ field: 'backType', value: ['Video'] }] },
            { span: 12, formType: 'NUMBER', name: 'backVideoEnd', label: '结束时间', rules: true, jugde: [{ field: 'backType', value: ['Video'] }] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'ThemeFormList_left', label: '左侧布局', collapsible: true,
        jugde: [{ field: 'layout', value: ['LayoutA01'] }],
        children: [
            { span: 24, formType: 'COLOR', name: 'left_color', label: '背景颜色', rules: true },
            { span: 24, formType: 'NUMBER', name: 'left_deg', label: '背景角度', rules: true },
            { span: 24, formType: 'NUMBER', name: 'left_blur', label: '模糊度', rules: true },
            { span: 24, formType: 'INPUT', name: 'left_padding', label: '内填充', rules: true },
            { span: 24, formType: 'INPUT', name: 'left_margin', label: '外边距', rules: true },
            { span: 24, formType: 'INPUT', name: 'left_radius', label: '圆角', rules: true },
            { span: 24, formType: 'RADIO', name: 'left_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
            { span: 24, formType: 'NUMBER', name: 'left_width', label: '最大宽度', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'ThemeFormList_right', label: '右侧布局', collapsible: true,
        jugde: [{ field: 'layout', value: ['LayoutA01'] }],
        children: [
            { span: 24, formType: 'COLOR', name: 'right_color', label: '背景颜色', rules: true },
            { span: 24, formType: 'NUMBER', name: 'right_deg', label: '背景角度', rules: true },
            { span: 24, formType: 'NUMBER', name: 'right_blur', label: '模糊度', rules: true },
            { span: 24, formType: 'INPUT', name: 'right_padding', label: '内填充', rules: true },
            { span: 24, formType: 'INPUT', name: 'right_margin', label: '外边距', rules: true },
            { span: 24, formType: 'INPUT', name: 'right_radius', label: '圆角', rules: true },
            { span: 24, formType: 'RADIO', name: 'right_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'ThemeFormList_top', label: '上部布局', collapsible: true,
        jugde: [{ field: 'layout', value: ['LayoutA02'] }],
        children: [
            { span: 24, formType: 'COLOR', name: 'top_color', label: '背景颜色', rules: true },
            { span: 24, formType: 'NUMBER', name: 'top_deg', label: '背景角度', rules: true },
            { span: 24, formType: 'NUMBER', name: 'top_blur', label: '模糊度', rules: true },
            { span: 24, formType: 'INPUT', name: 'top_padding', label: '内填充', rules: true },
            { span: 24, formType: 'INPUT', name: 'top_margin', label: '外边距', rules: true },
            { span: 24, formType: 'INPUT', name: 'top_radius', label: '圆角', rules: true },
            { span: 24, formType: 'RADIO', name: 'top_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'ThemeFormList_btm', label: '下部布局', collapsible: true,
        jugde: [{ field: 'layout', value: ['LayoutA02'] }],
        children: [
            { span: 24, formType: 'COLOR', name: 'btm_color', label: '背景颜色', rules: true },
            { span: 24, formType: 'NUMBER', name: 'btm_deg', label: '背景角度', rules: true },
            { span: 24, formType: 'NUMBER', name: 'btm_blur', label: '模糊度', rules: true },
            { span: 24, formType: 'INPUT', name: 'btm_padding', label: '内填充', rules: true },
            { span: 24, formType: 'INPUT', name: 'btm_margin', label: '外边距', rules: true },
            { span: 24, formType: 'INPUT', name: 'btm_radius', label: '圆角', rules: true },
            { span: 24, formType: 'RADIO', name: 'btm_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'ThemeFormList_logo', label: '图标设置', collapsible: true,
        children: [
            {
                span: 24, formType: 'GROUP', name: 'logo_back', label: '背景设置', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'logo_color', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'logo_deg', label: '背景角度', rules: true },
                    { span: 24, formType: 'INPUT', name: 'logo_padding', label: '内填充', rules: true },
                    { span: 24, formType: 'INPUT', name: 'logo_margin', label: '外边距', rules: true },
                    { span: 24, formType: 'INPUT', name: 'logo_radius', label: '圆角', rules: true },
                    { span: 24, formType: 'RADIO', name: 'logo_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'logo_layout', label: '布局设置', collapsible: true,
                children: [
                    { span: 24, formType: 'SELECT', name: 'logo_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
                    { span: 24, formType: 'SELECT', name: 'logo_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
                    { span: 24, formType: 'SELECT', name: 'logo_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
                    { span: 24, formType: 'SELECT', name: 'logo_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
                    { span: 24, formType: 'SELECT', name: 'logo_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'logo_label', label: '标签设置', collapsible: true,
                children: [
                    { span: 24, formType: 'INPUT', name: 'logo_icon', label: '图标地址', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'logo_width', label: '图片宽度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'logo_height', label: '图片高度', rules: true },
                    { span: 24, formType: 'INPUT', name: 'logo_icon_padding', label: '内填充', rules: true },
                    { span: 24, formType: 'INPUT', name: 'logo_icon_margin', label: '外边距', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'logo_icon_shadowX', label: '阴影X轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'logo_icon_shadowY', label: '阴影Y轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'logo_icon_shadowS', label: '阴影尺寸', rules: true },
                    { span: 24, formType: 'COLOR', name: 'logo_icon_shadowC', label: '阴影颜色', rules: true },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'logo_text', label: '文字设置', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'logo_textStatus', label: '显示文字', rules: true, valueEnum: MappingData.IsShowBool },
                    {
                        span: 24, formType: 'INPUT', name: 'logo_text', label: '文字内容', rules: true,
                        jugde: [{ field: 'logo_textStatus', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'logo_text_color', label: '标题颜色', rules: true,
                        jugde: [{ field: 'logo_textStatus', value: [true] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'logo_text_deg', label: '颜色角度', rules: true,
                        jugde: [{ field: 'logo_textStatus', value: [true] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'logo_text_size', label: '标题字号', rules: true,
                        jugde: [{ field: 'logo_textStatus', value: [true] }]
                    },
                    {
                        span: 24, formType: 'SELECT', name: 'logo_text_family', label: '标题字体', rules: true,
                        valueEnum: MappingData.Font__Family, jugde: [{ field: 'logo_textStatus', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'logo_text_weight', label: '标题加粗', rules: true,
                        valueEnum: MappingData.Font__WeightInt, jugde: [{ field: 'logo_textStatus', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'logo_text_style', label: '标题倾斜', rules: true,
                        valueEnum: MappingData.Font__Style, jugde: [{ field: 'logo_textStatus', value: [true] }]
                    },
                    { span: 24, formType: 'NUMBER', name: 'logo_text_shadowX', label: '阴影X轴', rules: true, jugde: [{ field: 'logo_textStatus', value: [true] }] },
                    { span: 24, formType: 'NUMBER', name: 'logo_text_shadowY', label: '阴影Y轴', rules: true, jugde: [{ field: 'logo_textStatus', value: [true] }] },
                    { span: 24, formType: 'NUMBER', name: 'logo_text_shadowS', label: '阴影尺寸', rules: true, jugde: [{ field: 'logo_textStatus', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'logo_text_shadowC', label: '阴影颜色', rules: true, jugde: [{ field: 'logo_textStatus', value: [true] }] },
                ]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'ThemeFormList_head', label: '头部设置', collapsible: true,
        children: [
            {
                span: 24, formType: 'GROUP', name: 'head_back', label: '背景设置', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'head_color', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'head_deg', label: '背景角度', rules: true },
                    { span: 24, formType: 'INPUT', name: 'head_padding', label: '内填充', rules: true },
                    { span: 24, formType: 'INPUT', name: 'head_margin', label: '外边距', rules: true },
                    { span: 24, formType: 'INPUT', name: 'head_radius', label: '圆角', rules: true },
                    { span: 24, formType: 'RADIO', name: 'head_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'head_layout', label: '布局设置', collapsible: true,
                children: [
                    { span: 24, formType: 'SELECT', name: 'head_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
                    { span: 24, formType: 'SELECT', name: 'head_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
                    { span: 24, formType: 'SELECT', name: 'head_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
                    { span: 24, formType: 'SELECT', name: 'head_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
                    { span: 24, formType: 'SELECT', name: 'head_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'head_title', label: '标题设置', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'head_titleType', label: '内容类型', rules: true, valueEnum: MappingData.Theme__OptionsLeftType },
                    { span: 24, formType: 'INPUT', name: 'head_titleText', label: '标题文字', rules: true, jugde: [{ field: 'head_titleType', value: ['text'] }] },
                    { span: 24, formType: 'INPUT', name: 'head_titleField', label: '标题字段', rules: true, jugde: [{ field: 'head_titleType', value: ['field'] }] },
                    { span: 24, formType: 'COLOR', name: 'head_titleColor', label: '标题颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'head_titleDeg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'head_titleSize', label: '标题字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'head_titleFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'head_titleWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'head_titleStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'NUMBER', name: 'head_titleShadowX', label: '阴影X轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'head_titleShadowY', label: '阴影Y轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'head_titleShadowS', label: '阴影尺寸', rules: true },
                    { span: 24, formType: 'COLOR', name: 'head_titleShadowC', label: '阴影颜色', rules: true },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'head_options', label: '操作栏设置', collapsible: true,
                children: [
                    { span: 24, formType: 'INPUT', name: 'head_optionsPadding', label: '内填充', rules: true },
                    { span: 24, formType: 'INPUT', name: 'head_optionsMargin', label: '外边距', rules: true },
                    {
                        span: 24, formType: 'GROUP', name: 'head_optionsStyle', label: '操作样式', collapsible: true,
                        children: [
                            { span: 24, formType: 'INPUT', name: 'head_itemPadding', label: '内填充', rules: true },
                            { span: 24, formType: 'INPUT', name: 'head_itemMargin', label: '外边距', rules: true },
                            { span: 24, formType: 'INPUT', name: 'head_itemRadius', label: '圆角', rules: true },
                            { span: 24, formType: 'COLOR', name: 'head_itemBack', label: '背景颜色', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'head_itemDeg', label: '背景角度', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'head_itemIconSize', label: '图标尺寸', rules: true },
                        ]
                    },
                    {
                        span: 24, formType: 'LIST', name: 'head_optionsList', label: '操作列表', rules: true,
                        children: [
                            { span: 24, formType: 'SELECT', name: 'func', label: '操作列表', rules: true, valueEnum: MappingData.Theme__HeadOptionsList },
                            { span: 24, formType: 'INPUT', name: 'wx_appid', label: '微信Appid', rules: true, jugde: [{ field: 'func', value: [4] }] },
                            { span: 24, formType: 'INPUT', name: 'wx_image', label: '公众号二维码', rules: true, jugde: [{ field: 'func', value: [5] }] },
                            { span: 24, formType: 'INPUT', name: 'title', label: '操作名称', rules: true },
                            { span: 24, formType: 'TempICON', name: 'icon', label: '图标信息', rules: true },
                            { span: 24, formType: 'COLOR', name: 'color', label: '图标颜色', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'shadowX', label: '阴影X轴', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'shadowY', label: '阴影Y轴', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'shadowS', label: '阴影尺寸', rules: true },
                            { span: 24, formType: 'COLOR', name: 'shadowC', label: '阴影颜色', rules: true },
                            {
                                span: 24, formType: 'GROUP', name: 'head_gridStyle', label: '宫格样式', rules: true, collapsible: true,
                                jugde: [{ field: 'func', value: ['admin', 0] }],
                                children: [
                                    { span: 24, formType: 'RADIO', name: 'gridClick', label: '操作设置', rules: true, valueEnum: MappingData.Theme__UserInfoTrigger },
                                    { span: 24, formType: 'NUMBER', name: 'gridNumber', label: '单行数量', rules: true },
                                    { span: 24, formType: 'NUMBER', name: 'gridSize', label: '单格尺寸', rules: true },
                                    { span: 24, formType: 'NUMBER', name: 'gridIconSize', label: '图标尺寸', rules: true },
                                    { span: 24, formType: 'NUMBER', name: 'gridTextSize', label: '文字尺寸', rules: true },
                                    { span: 24, formType: 'SELECT', name: 'gridTextFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                                    { span: 24, formType: 'RADIO', name: 'gridTextWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                                    { span: 24, formType: 'RADIO', name: 'gridTextStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                                ]
                            },
                            {
                                span: 24, formType: 'LIST', name: 'gridList', label: '宫格操作', rules: true, collapsible: true,
                                jugde: [{ field: 'func', value: ['admin', 0] }],
                                children: [
                                    { span: 24, formType: 'SELECT', name: 'func', label: '操作列表', rules: true, valueEnum: MappingData.Theme__HeadOptionsList },
                                    { span: 24, formType: 'INPUT', name: 'title', label: '操作名称', rules: true },
                                    { span: 24, formType: 'TempICON', name: 'icon', label: '图标信息', rules: true },
                                    { span: 24, formType: 'COLOR', name: 'color', label: '图标颜色', rules: true },
                                    { span: 24, formType: 'NUMBER', name: 'shadowX', label: '阴影X轴', rules: true },
                                    { span: 24, formType: 'NUMBER', name: 'shadowY', label: '阴影Y轴', rules: true },
                                    { span: 24, formType: 'NUMBER', name: 'shadowS', label: '阴影尺寸', rules: true },
                                    { span: 24, formType: 'COLOR', name: 'shadowC', label: '阴影颜色', rules: true },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'head_user', label: '用户栏设置', collapsible: true,
                children: [
                    { span: 24, formType: 'INPUT', name: 'head_userMargin', label: '外边距', rules: true },
                    { span: 24, formType: 'RADIO', name: 'head_avatar', label: '显示头像', rules: true, valueEnum: MappingData.IsShowBool },
                    {
                        span: 24, formType: 'RADIO', name: 'head_avatarPositon', label: '头像位置', rules: true,
                        valueEnum: MappingData.System__FlexDirectionTwo, jugde: [{ field: 'head_avatar', value: [true] }]
                    },
                    {
                        span: 24, formType: 'GROUP', name: 'head_userAvatar', label: '用户头像', collapsible: true,
                        jugde: [{ field: 'head_avatar', value: [true] }],
                        children: [
                            { span: 24, formType: 'INPUT', name: 'head_AvatarMargin', label: '外边距', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'head_AvatarSize', label: '头像尺寸', rules: true },
                            { span: 24, formType: 'RADIO', name: 'head_AvatarTtpe', label: '头像类型', rules: true, valueEnum: MappingData.Theme__UserInfoShape },
                        ]
                    },
                    { span: 24, formType: 'RADIO', name: 'head_userName', label: '名称一', rules: true, valueEnum: MappingData.IsShowBool },
                    {
                        span: 24, formType: 'GROUP', name: 'head_user_userName', label: '名称一', collapsible: true,
                        jugde: [{ field: 'head_userName', value: [true] }],
                        children: [
                            { span: 24, formType: 'SELECT', name: 'head_userFilde', label: '渲染字段', rules: true, valueEnum: MappingData.Theme__UserNickName },
                            { span: 24, formType: 'COLOR', name: 'head_userColor', label: '标题颜色', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'head_userDeg', label: '颜色角度', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'head_userSize', label: '标题字号', rules: true },
                            { span: 24, formType: 'SELECT', name: 'head_userFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                            { span: 24, formType: 'RADIO', name: 'head_userWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                            { span: 24, formType: 'RADIO', name: 'head_userStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                            { span: 24, formType: 'NUMBER', name: 'head_userShadowX', label: '阴影X轴', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'head_userShadowY', label: '阴影Y轴', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'head_userShadowS', label: '阴影尺寸', rules: true },
                            { span: 24, formType: 'COLOR', name: 'head_userShadowC', label: '阴影颜色', rules: true },
                        ]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'head_roleName', label: '名称二', rules: true, valueEnum: MappingData.IsShowBool,
                        jugde: [{ field: 'head_userName', value: [true] }]
                    },
                    {
                        span: 24, formType: 'GROUP', name: 'head_user_roleName', label: '名称二', collapsible: true,
                        jugde: [{ field: 'head_roleName', value: [true] }],
                        children: [
                            { span: 24, formType: 'SELECT', name: 'head_roleFilde', label: '渲染字段', rules: true, valueEnum: MappingData.Theme__UserNickName },
                            { span: 24, formType: 'COLOR', name: 'head_roleColor', label: '标题颜色', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'head_roleDeg', label: '颜色角度', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'head_roleSize', label: '标题字号', rules: true },
                            { span: 24, formType: 'SELECT', name: 'head_roleFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                            { span: 24, formType: 'RADIO', name: 'head_roleWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                            { span: 24, formType: 'RADIO', name: 'head_roleStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                            { span: 24, formType: 'NUMBER', name: 'head_roleShadowX', label: '阴影X轴', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'head_roleShadowY', label: '阴影Y轴', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'head_roleShadowS', label: '阴影尺寸', rules: true },
                            { span: 24, formType: 'COLOR', name: 'head_roleShadowC', label: '阴影颜色', rules: true },
                        ]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'head_nameWidth', label: '名称最大宽度', rules: true,
                        jugde: [{ field: 'head_userName', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'head_namePositon', label: '名称对齐', rules: true,
                        valueEnum: MappingData.System__FlexAlignItems,
                        jugde: [{ field: 'head_userName', value: [true] }, { field: 'head_roleName', value: [true] }]
                    },
                    { span: 24, formType: 'RADIO', name: 'head_userClick', label: '操作设置', rules: true, valueEnum: MappingData.Theme__UserCliclType },
                    {
                        span: 24, formType: 'RADIO', name: 'head_userClickType', label: '弹出方式', rules: true,
                        valueEnum: MappingData.Theme__UserInfoTrigger, jugde: [{ field: 'head_userClick', value: ['dropdown'] }]
                    },
                    {
                        span: 24, formType: 'LIST', name: 'head_userOptions', label: '操作列表', rules: true,
                        jugde: [{ field: 'head_userClick', value: ['dropdown'] }],
                        children: [
                            { span: 24, formType: 'SELECT', name: 'func', label: '操作列表', rules: true, valueEnum: MappingData.Theme__HeadOptionsList },
                            { span: 24, formType: 'INPUT', name: 'title', label: '操作名称', rules: true },
                            { span: 24, formType: 'RADIO', name: 'status', label: '显示图标', rules: true, valueEnum: MappingData.IsShowBool },
                            { span: 24, formType: 'TempICON', name: 'icon', label: '图标信息', rules: true, jugde: [{ field: 'status', value: [true] }] },
                        ]
                    },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'head_outOff', label: '独立退出', collapsible: true,
                children: [
                    // 独立的关闭按钮
                    { span: 24, formType: 'RADIO', name: 'head_offBtn', label: '是否显示', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 24, formType: 'TempICON', name: 'head_offIcon', label: '关闭图标', rules: true, jugde: [{ field: 'head_offBtn', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'head_offBorder', label: '边框颜色', rules: true },
                    { span: 24, formType: 'COLOR', name: 'head_offColor', label: '图标颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'head_offSize', label: '图标尺寸', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'head_offShadowX', label: '阴影X轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'head_offShadowY', label: '阴影Y轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'head_offShadowS', label: '阴影尺寸', rules: true },
                    { span: 24, formType: 'COLOR', name: 'head_offShadowC', label: '阴影颜色', rules: true },
                ]
            },

        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'ThemeFormList_menu', label: '菜单设置', collapsible: true,
        children: [
            {
                span: 24, formType: 'GROUP', name: 'menu_back', label: '背景设置', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'menu_color', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_deg', label: '背景角度', rules: true },
                    { span: 24, formType: 'INPUT', name: 'menu_padding', label: '内填充', rules: true },
                    { span: 24, formType: 'INPUT', name: 'menu_margin', label: '外边距', rules: true },
                    { span: 24, formType: 'INPUT', name: 'menu_radius', label: '圆角', rules: true },
                    { span: 24, formType: 'RADIO', name: 'menu_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'menu_base', label: '基础设置', collapsible: true,
                children: [
                    { span: 24, formType: 'SELECT', name: 'menu_class', label: '菜单样式', valueEnum: MappingData.Theme__MenuType },
                    { span: 24, formType: 'COLOR', name: 'menu_class_active', label: '激活背景', rules: true, jugde: [{ field: 'menu_class', value: ['menuDefault'] }] },
                    { span: 24, formType: 'SELECT', name: 'menu_isFold', label: '折叠状态', valueEnum: MappingData.IsNotOpenBool },
                    { span: 24, formType: 'COLOR', name: 'menu_fold_color', label: '图标颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_fold_size', label: '图标尺寸', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_fold_shadowX', label: '阴影X轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_fold_shadowY', label: '阴影Y轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_fold_shadowS', label: '阴影尺寸', rules: true },
                    { span: 24, formType: 'COLOR', name: 'menu_fold_shadowC', label: '阴影颜色', rules: true },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'menu_icon', label: '图标设置', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'menu_icon_color', label: '图标颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_icon_size', label: '图标尺寸', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_icon_index', label: '图标间距', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_icon_shadowX', label: '阴影X轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_icon_shadowY', label: '阴影Y轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_icon_shadowS', label: '阴影尺寸', rules: true },
                    { span: 24, formType: 'COLOR', name: 'menu_icon_shadowC', label: '阴影颜色', rules: true },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'menu_text', label: '文字样式', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'menu_text_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'COLOR', name: 'menu_text_active', label: '激活颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_text_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'menu_text_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'menu_text_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'menu_text_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'NUMBER', name: 'menu_text_shadowX', label: '阴影X轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_text_shadowY', label: '阴影Y轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'menu_text_shadowS', label: '阴影尺寸', rules: true },
                    { span: 24, formType: 'COLOR', name: 'menu_text_shadowC', label: '阴影颜色', rules: true },
                ]
            }
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'ThemeFormList_body', label: '主体设置', collapsible: true,
        children: [
            {
                span: 24, formType: 'GROUP', name: 'body_back', label: '背景设置', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'body_color', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'body_deg', label: '背景角度', rules: true },
                    { span: 24, formType: 'INPUT', name: 'body_padding', label: '内填充', rules: true },
                    { span: 24, formType: 'INPUT', name: 'body_margin', label: '外边距', rules: true },
                    { span: 24, formType: 'INPUT', name: 'body_radius', label: '圆角', rules: true },
                    { span: 24, formType: 'RADIO', name: 'body_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'body_options', label: '标签操作', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'body_tabsClose', label: '关闭后续', rules: true, valueEnum: MappingData.System__TabsClose },
                    { span: 24, formType: 'RADIO', name: 'body_tabsIsDnd', label: '是否拖拽', rules: true, valueEnum: MappingData.IsYesBool },
                    { span: 24, formType: 'NUMBER', name: 'body_tabsMax', label: '最大标签数', rules: true, tooltip: '数值0为不限制' },
                    { span: 24, formType: 'RADIO', name: 'body_tabsIsAll', label: '全部关闭', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 24, formType: 'RADIO', name: 'body_tabsPopup', label: '关闭确认', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 24, formType: 'COLOR', name: 'body_tabsClear', label: '关闭颜色', rules: true },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'body_tabs_back', label: '标签背景', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'body_tabsBack', label: '默认背景', rules: true },
                    { span: 24, formType: 'COLOR', name: 'body_tabsActive', label: '选中背景', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'body_tabsDeg', label: '背景角度', rules: true },
                    { span: 24, formType: 'COLOR', name: 'body_fontColor', label: '默认颜色', rules: true },
                    { span: 24, formType: 'COLOR', name: 'body_tabsBorderColor', label: '边框颜色', rules: true },
                    { span: 24, formType: 'INPUT', name: 'body_tabsRadio', label: '边框圆角', rules: true },
                    { span: 24, formType: 'RADIO', name: 'body_tabsBorderType', label: '边框类型', rules: true, valueEnum: MappingData.Style__BorderType },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'body_tabs_icon', label: '标签图标', collapsible: true,
                children: [
                    {
                        span: 24, formType: 'RADIO', name: 'body_iconState', label: '图标状态', rules: true,
                        valueEnum: MappingData.IsShowBool, tooltip: '需重新加载'
                    },
                    { span: 24, formType: 'NUMBER', name: 'body_iconSize', label: '图标尺寸', rules: true, jugde: [{ field: 'body_iconState', value: [true] }] },
                    { span: 24, formType: 'NUMBER', name: 'body_iconIndex', label: '图标间距', rules: true, jugde: [{ field: 'body_iconState', value: [true] }] },
                    { span: 24, formType: 'NUMBER', name: 'body_iconShadowX', label: '阴影X轴', rules: true, jugde: [{ field: 'body_iconState', value: [true] }] },
                    { span: 24, formType: 'NUMBER', name: 'body_iconShadowY', label: '阴影Y轴', rules: true, jugde: [{ field: 'body_iconState', value: [true] }] },
                    { span: 24, formType: 'NUMBER', name: 'body_iconShadowS', label: '阴影尺寸', rules: true, jugde: [{ field: 'body_iconState', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'body_iconShadowC', label: '阴影颜色', rules: true, jugde: [{ field: 'body_iconState', value: [true] }] },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'body_tabs_font', label: '标签文字', collapsible: true,
                children: [
                    { span: 24, formType: 'NUMBER', name: 'body_fontSize', label: '标题字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'body_fontFamily', label: '标题字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'body_fontWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'body_fontStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'NUMBER', name: 'body_fontShadowX', label: '阴影X轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'body_fontShadowY', label: '阴影Y轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'body_fontShadowS', label: '阴影尺寸', rules: true },
                    { span: 24, formType: 'COLOR', name: 'body_fontShadowC', label: '阴影颜色', rules: true },
                ]
            },
        ]
    },
]
// ***  项目大屏信息
const StartFormList = [
    {
        span: 24, formType: 'GROUP', name: 'ChartCommon_background', label: '导航设置', collapsible: true, defaultCollapsed: true,
        children: [
            {
                span: 24, formType: 'LIST', name: 'start_navList', label: '导航信息', collapsible: true,
                children: [
                    { span: 8, formType: 'INPUT', name: 'nav_name', label: '导航名称', rules: true },
                    { span: 8, formType: 'INPUT', name: 'nav_url', label: '导航地址', rules: true },
                    { span: 8, formType: 'RADIO', name: 'nav_isChild', label: '下级导航', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'LIST', name: 'start_navTwo', label: '二级导航', collapsible: true,
                        jugde: [{ field: 'nav_isChild', value: [true] }], children: [
                            { span: 12, formType: 'INPUT', name: 'two_name', label: '导航名称', rules: true },
                            { span: 12, formType: 'INPUT', name: 'two_url', label: '导航地址', rules: true },
                            // { span: 8, formType: 'RADIO', name: 'two_isChild', label: '下级导航', rules: true, valueEnum: MappingData.IsEnabledBool },
                            // {
                            //     span: 24, formType: 'LIST', name: 'start_navThr', label: '三级导航', collapsible: true,
                            //     jugde: [{ field: 'two_isChild', value: [true] }], children: [
                            //         { span: 8, formType: 'INPUT', name: 'thr_name', label: '导航名称', rules: true },
                            //         { span: 8, formType: 'INPUT', name: 'thr_url', label: '导航地址', rules: true },
                            //         { span: 8, formType: 'RADIO', name: 'thr_isChild', label: '下级导航', rules: true, valueEnum: MappingData.IsEnabledBool },
                            //         {
                            //             span: 24, formType: 'LIST', name: 'start_navFor', label: '三级导航', collapsible: true,
                            //             jugde: [{ field: 'thr_isChild', value: [true] }], children: [
                            //                 { span: 12, formType: 'INPUT', name: 'for_name', label: '导航名称', rules: true },
                            //                 { span: 12, formType: 'INPUT', name: 'for_url', label: '导航地址', rules: true },
                            //             ]
                            //         },
                            //     ]
                            // },
                        ]
                    },
                ]
            },
        ]
    },
    { span: 24, formType: 'RADIO', name: 'extra_nav', label: '副导航', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'extra_nav_list', label: '副导航列表', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'extra_nav', value: [true] }], children: [
            {
                span: 24, formType: 'LIST', name: 'extra_navList', label: '导航信息', collapsible: true,
                children: [
                    { span: 8, formType: 'INPUT', name: 'nav_name', label: '导航名称', rules: true },
                    { span: 8, formType: 'INPUT', name: 'nav_url', label: '导航地址', rules: true },
                    { span: 8, formType: 'RADIO', name: 'nav_isChild', label: '下级导航', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'LIST', name: 'start_navTwo', label: '二级导航', collapsible: true,
                        jugde: [{ field: 'nav_isChild', value: [true] }], children: [
                            { span: 12, formType: 'INPUT', name: 'two_name', label: '导航名称', rules: true },
                            { span: 12, formType: 'INPUT', name: 'two_url', label: '导航地址', rules: true },
                        ]
                    },
                ]
            },
        ]
    },

    { span: 12, formType: 'RADIO', name: 'start_type', label: '大屏模式', rules: true, valueEnum: MappingData.Theme__StartType },
    {
        span: 12, formType: 'RADIO', name: 'start_home', label: '首页导航', rules: true,
        jugde: [{ field: 'start_type', value: ['A02'] }], valueEnum: MappingData.IsEnabledBool
    },
    {
        span: 24, formType: 'GROUP', name: 'start_type_all', label: '全屏大屏', collapsible: true,
        jugde: [{ field: 'start_type', value: ['A01'] }], children: [
            // 导航样式
            // 页脚样式
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'win_back', label: '背景设置', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'start_type', value: ['A02'] }], children: [
            { span: 12, formType: 'INPUT', name: 'commonPadding', label: '通用间距', rules: true },
            { span: 12, formType: 'RADIO', name: 'backType', label: '背景类型', rules: true, valueEnum: MappingData.Start__backType },
            { span: 12, formType: 'COLOR', name: 'backColor', label: '背景颜色', rules: true, jugde: [{ field: 'backType', value: ['color'] }] },
            { span: 12, formType: 'NUMBER', name: 'backDeg', label: '背景角度', rules: true, jugde: [{ field: 'backType', value: ['color'] }] },
            { span: 24, formType: 'INPUT', name: 'backImage', label: '背景图片', rules: true, jugde: [{ field: 'backType', value: ['image'] }] },
            { span: 24, formType: 'INPUT', name: 'backVideo', label: '背景视频', rules: true, jugde: [{ field: 'backType', value: ['video'] }] },
            { span: 12, formType: 'NUMBER', name: 'backVideoStart', label: '视频开始时间', rules: true, jugde: [{ field: 'backType', value: ['video'] }] },
            { span: 12, formType: 'NUMBER', name: 'backVideoEnd', label: '视频结束时间', rules: true, jugde: [{ field: 'backType', value: ['video'] }] },

            { span: 24, formType: 'RADIO', name: 'topImg', label: '头部背景图片', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'GROUP', name: 'win_top_img', label: '头部背景图片', collapsible: true,
                jugde: [{ field: 'topImg', value: [true] }], children: [
                    { span: 12, formType: 'INPUT', name: 'topImg_url', label: '图片地址', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'topImg_height', label: '图片高度', rules: true },
                ]
            },
            { span: 24, formType: 'RADIO', name: 'btmImg', label: '底部背景图片', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'GROUP', name: 'win_btm_img', label: '底部背景图片', collapsible: true,
                jugde: [{ field: 'btmImg', value: [true] }], children: [
                    { span: 12, formType: 'INPUT', name: 'btmImg_url', label: '图片地址', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'btmImg_height', label: '图片高度', rules: true },
                ]
            },
            { span: 24, formType: 'RADIO', name: 'leftImg', label: '左侧背景图片', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'GROUP', name: 'win_left_img', label: '左侧背景图片', collapsible: true,
                jugde: [{ field: 'leftImg', value: [true] }], children: [
                    { span: 24, formType: 'INPUT', name: 'leftImg_url', label: '图片地址', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'leftImg_width', label: '图片宽度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'leftImg_margin', label: '左侧间距', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'leftImg_top', label: '上部间距', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'leftImg_btm', label: '下部间距', rules: true },
                ]
            },
            { span: 24, formType: 'RADIO', name: 'rightImg', label: '右侧背景图片', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'GROUP', name: 'win_right_img', label: '右侧背景图片', collapsible: true,
                jugde: [{ field: 'rightImg', value: [true] }], children: [
                    { span: 24, formType: 'INPUT', name: 'rightImg_url', label: '图片地址', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'rightImg_width', label: '图片宽度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'rightImg_margin', label: '右侧间距', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'rigthImg_top', label: '上部间距', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'rightImg_btm', label: '下部间距', rules: true },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'win_top', label: '头部信息', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'start_type', value: ['A02'] }], children: [
            {
                span: 24, formType: 'GROUP', name: 'win_top_config', label: '主体布局', collapsible: true, children: [
                    { span: 8, formType: 'SELECT', name: 'top_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
                    { span: 8, formType: 'SELECT', name: 'top_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
                    { span: 8, formType: 'SELECT', name: 'top_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
                    { span: 12, formType: 'SELECT', name: 'top_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
                    { span: 12, formType: 'SELECT', name: 'top_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
                    { span: 12, formType: 'INPUT', name: 'top_padding', label: '内间距', rules: true },
                    { span: 12, formType: 'INPUT', name: 'top_margin', label: '外间距', rules: true },
                ]
            },
            {
                span: 24, formType: 'LIST', name: 'top_list', label: '头部组件', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'topType', label: '组件类型', rules: true, valueEnum: MappingData.Start__topTempType },
                    { span: 12, formType: 'RADIO', name: 'home', label: '渲染模式', rules: true, valueEnum: MappingData.System__RenderType },
                    { span: 12, formType: 'NUMBER', name: 'heightSize', label: '高度值', rules: true },
                    { span: 12, formType: 'RADIO', name: 'widthType', label: '宽度类型', rules: true, valueEnum: MappingData.Flex_SizeType },
                    { span: 12, formType: 'NUMBER', name: 'widthSize', label: '宽度值', rules: true },
                    { span: 12, formType: 'INPUT', name: 'padding', label: '内间距', rules: true },
                    { span: 12, formType: 'INPUT', name: 'margin', label: '外间距', rules: true },
                    {
                        span: 8, formType: 'SELECT', name: 'align_items', label: 'align-items', rules: true,
                        valueEnum: MappingData.Flex_items
                    },
                    {
                        span: 8, formType: 'SELECT', name: 'align_content', label: 'align-content', rules: true,
                        valueEnum: MappingData.Flex_content
                    },
                    {
                        span: 8, formType: 'SELECT', name: 'justify_content', label: 'justify-content', rules: true,
                        valueEnum: MappingData.Flex_justify
                    },
                    {
                        span: 12, formType: 'SELECT', name: 'flex_direction', label: 'flex-direction', rules: true,
                        valueEnum: MappingData.Flex_direction
                    },
                    {
                        span: 12, formType: 'SELECT', name: 'flex_wrap', label: 'flex-wrap', rules: true,
                        valueEnum: MappingData.Flex_wrap
                    },
                    {
                        span: 24, formType: 'GROUP', name: 'title_data', label: '标题模块配置', collapsible: true,
                        jugde: [{ field: 'topType', value: ['title'] }], children: [
                            { span: 12, formType: 'INPUT', name: 'titleText', label: '标题内容', rules: true },
                            { span: 12, formType: 'COLOR', name: 'titleColor', label: '标题颜色', rules: true },
                            { span: 12, formType: 'NUMBER', name: 'titleDeg', label: '颜色角度', rules: true },
                            { span: 12, formType: 'NUMBER', name: 'titleSize', label: '标题字号', rules: true },
                            { span: 12, formType: 'SELECT', name: 'titleFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                            { span: 12, formType: 'RADIO', name: 'titleWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                            { span: 12, formType: 'RADIO', name: 'titleStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                            { span: 12, formType: 'RADIO', name: 'titelFiled', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                            {
                                span: 12, formType: 'INPUT', name: 'titelFiled_data', label: '阴影数值', rules: true,
                                jugde: [{ field: 'titelFiled', value: [true] }]
                            },
                            {
                                span: 12, formType: 'COLOR', name: 'titelFiled_color', label: '阴影颜色', rules: true, mode: ['single'],
                                jugde: [{ field: 'titelFiled', value: [true] }]
                            },
                            { span: 12, formType: 'RADIO', name: 'titelIcon', label: '显示图标', rules: true, valueEnum: MappingData.IsEnabledBool },
                            {
                                span: 12, formType: 'INPUT', name: 'titelIcon_url', label: '标题地址', rules: true,
                                jugde: [{ field: 'titelIcon', value: [true] }]
                            },
                            {
                                span: 12, formType: 'NUMBER', name: 'titelIcon_size', label: '图标尺寸', rules: true,
                                jugde: [{ field: 'titelIcon', value: [true] }]
                            },
                            {
                                span: 12, formType: 'INPUT', name: 'titelIcon_padding', label: '图标内填充', rules: true,
                                jugde: [{ field: 'titelIcon', value: [true] }]
                            },
                            {
                                span: 12, formType: 'INPUT', name: 'titelIcon_margin', label: '图标外间距', rules: true,
                                jugde: [{ field: 'titelIcon', value: [true] }]
                            },
                            {
                                span: 12, formType: 'RADIO', name: 'titelIcon_field', label: '背景阴影', rules: true,
                                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'titelIcon', value: [true] }]
                            },
                            {
                                span: 12, formType: 'INPUT', name: 'titelIcon_fieldData', label: '阴影数值', rules: true, mode: ['single'],
                                jugde: [{ field: 'titelIcon', value: [true] }, { field: 'titelIcon_field', value: [true] }]
                            },
                            {
                                span: 12, formType: 'COLOR', name: 'titelIcon_fieldColor', label: '阴影颜色', rules: true,
                                jugde: [{ field: 'titelIcon', value: [true] }, { field: 'titelIcon_field', value: [true] }]
                            },
                        ]
                    },
                    {
                        span: 24, formType: 'GROUP', name: 'option_data', label: '操作模块配置', collapsible: true,
                        jugde: [{ field: 'topType', value: ['option'] }], children: [
                            {
                                span: 24, formType: 'LIST', name: 'option_list', label: '操作列表', collapsible: true,
                                children: [
                                    {
                                        span: 24, formType: 'RADIO', name: 'type', label: '操作类型', rules: true,
                                        valueEnum: MappingData.Theme__StartOptionsList
                                    },
                                    { span: 12, formType: 'TempICON', name: 'icon', label: '操作图标', rules: true },
                                    { span: 12, formType: 'INPUT', name: 'text', label: '操作名称', rules: true },
                                ]
                            },
                            // 是否显示图标  图标设置
                            // 是否显示文字 文字设置
                            { span: 12, formType: 'NUMBER', name: 'option_margin', label: '图标文字间距', rules: true },
                            { span: 12, formType: 'NUMBER', name: 'option_padding', label: '两组操作间距', rules: true },
                            { span: 12, formType: 'RADIO', name: 'option_icon', label: '操作图标', rules: true, valueEnum: MappingData.IsEnabledBool },
                            { span: 12, formType: 'RADIO', name: 'option_text', label: '操作名称', rules: true, valueEnum: MappingData.IsEnabledBool },

                            {
                                span: 12, formType: 'GROUP', name: 'option_icon_data', label: '图标设置', collapsible: true,
                                jugde: [{ field: 'option_icon', value: [true] }], children: [
                                    { span: 24, formType: 'COLOR', name: 'option_icon_color', label: '图标颜色', rules: true, mode: ['single'] },
                                    { span: 24, formType: 'NUMBER', name: 'option_icon_size', label: '图标尺寸', rules: true },
                                    {
                                        span: 24, formType: 'RADIO', name: 'option_icon_shadow', label: '图标阴影', rules: true,
                                        valueEnum: MappingData.IsEnabledBool
                                    },
                                    {
                                        span: 24, formType: 'INPUT', name: 'option_icon_shadow_data', label: '阴影数值', rules: true,
                                        jugde: [{ field: 'option_icon_shadow', value: [true] }]
                                    },
                                    {
                                        span: 24, formType: 'COLOR', name: 'option_icon_shadow_color', label: '阴影颜色', rules: true, mode: ['single'],
                                        jugde: [{ field: 'option_icon_shadow', value: [true] }]
                                    },
                                ]
                            },
                            {
                                span: 12, formType: 'GROUP', name: 'option_text_data', label: '名称设置', collapsible: true,
                                jugde: [{ field: 'option_text', value: [true] }], children: [
                                    { span: 24, formType: 'COLOR', name: 'option_text_color', label: '名称颜色', rules: true, mode: ['single'] },
                                    { span: 24, formType: 'NUMBER', name: 'option_text_size', label: '名称字号', rules: true },
                                    { span: 24, formType: 'SELECT', name: 'option_text_family', label: '名称字体', rules: true, valueEnum: MappingData.Font__Family },
                                    { span: 24, formType: 'RADIO', name: 'option_text_weight', label: '名称加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                                    { span: 24, formType: 'RADIO', name: 'option_text_style', label: '名称倾斜', rules: true, valueEnum: MappingData.Font__Style },
                                    { span: 24, formType: 'RADIO', name: 'option_text_shadow', label: '名称阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                                    {
                                        span: 24, formType: 'INPUT', name: 'option_text_shadow_data', label: '阴影数值', rules: true,
                                        jugde: [{ field: 'option_text_shadow', value: [true] }]
                                    },
                                    {
                                        span: 24, formType: 'COLOR', name: 'option_text_shadow_color', label: '阴影颜色', rules: true, mode: ['single'],
                                        jugde: [{ field: 'option_text_shadow', value: [true] }]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        span: 24, formType: 'GROUP', name: 'back_data', label: '返回模块配置', collapsible: true,
                        jugde: [{ field: 'topType', value: ['back'] }], children: [
                            { span: 12, formType: 'TempICON', name: 'back_icon', label: '返回图标', rules: true },
                            { span: 12, formType: 'COLOR', name: 'back_color', label: '图标颜色', rules: true, mode: ['single'] },
                            { span: 12, formType: 'NUMBER', name: 'back_size', label: '图标尺寸', rules: true },
                            { span: 12, formType: 'RADIO', name: 'back_shadow', label: '图标阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                            {
                                span: 12, formType: 'INPUT', name: 'back_shadow_data', label: '阴影数值', rules: true,
                                jugde: [{ field: 'back_shadow', value: [true] }]
                            },
                            {
                                span: 12, formType: 'COLOR', name: 'back_shadow_color', label: '阴影颜色', rules: true, mode: ['single'],
                                jugde: [{ field: 'back_shadow', value: [true] }]
                            },
                        ]
                    },
                    {
                        span: 24, formType: 'GROUP', name: 'text_data', label: '文本模块配置', collapsible: true,
                        jugde: [{ field: 'topType', value: ['text'] }], children: [
                            { span: 12, formType: 'INPUT', name: 'text_text', label: '文字内容', rules: true },
                            { span: 12, formType: 'COLOR', name: 'text_color', label: '文字颜色', rules: true },
                            { span: 12, formType: 'NUMBER', name: 'text_deg', label: '颜色角度', rules: true },
                            { span: 12, formType: 'NUMBER', name: 'text_size', label: '文字字号', rules: true },
                            { span: 12, formType: 'SELECT', name: 'text_family', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
                            { span: 12, formType: 'RADIO', name: 'text_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                            { span: 12, formType: 'RADIO', name: 'text_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                            { span: 12, formType: 'RADIO', name: 'text_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                            {
                                span: 12, formType: 'INPUT', name: 'text_filed_data', label: '阴影数值', rules: true,
                                jugde: [{ field: 'text_filed', value: [true] }]
                            },
                            {
                                span: 12, formType: 'COLOR', name: 'text_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                                jugde: [{ field: 'text_filed', value: [true] }]
                            },
                        ]
                    },
                    {
                        span: 24, formType: 'GROUP', name: 'date_data', label: '时间模块配置', collapsible: true,
                        jugde: [{ field: 'topType', value: ['date'] }], children: [
                            {
                                span: 24, formType: 'LIST', name: 'date_list', label: '时间列表', collapsible: true,
                                children: [
                                    { span: 12, formType: 'INPUT', name: 'date_format', label: '时间格式', rules: true },
                                    { span: 12, formType: 'COLOR', name: 'date_color', label: '文字颜色', rules: true },
                                    { span: 12, formType: 'NUMBER', name: 'date_deg', label: '颜色角度', rules: true },
                                    { span: 12, formType: 'NUMBER', name: 'date_size', label: '文字字号', rules: true },
                                    { span: 12, formType: 'SELECT', name: 'date_family', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
                                    { span: 12, formType: 'RADIO', name: 'date_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                                    { span: 12, formType: 'RADIO', name: 'date_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                                    { span: 12, formType: 'RADIO', name: 'date_filed', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                                    {
                                        span: 12, formType: 'INPUT', name: 'date_filed_data', label: '阴影数值', rules: true,
                                        jugde: [{ field: 'date_filed', value: [true] }]
                                    },
                                    {
                                        span: 12, formType: 'COLOR', name: 'date_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                                        jugde: [{ field: 'date_filed', value: [true] }]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'win_samll', label: '小窗信息', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'start_type', value: ['A02'] }], children: [
            {
                span: 24, formType: 'GROUP', name: 'win_top', label: '头部标题', collapsible: true, children: [
                    { span: 12, formType: 'INPUT', name: 'win_title', label: '小窗标题', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'win_height', label: '标题高度', rules: true },
                    { span: 24, formType: 'INPUT', name: 'win_url', label: '图片地址', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'win_imageA01', label: '图一宽度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'win_imageA02', label: '图三宽度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'win_index', label: '文字前距', rules: true },
                    { span: 12, formType: 'COLOR', name: 'win_color', label: '文字颜色', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'win_deg', label: '颜色角度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'win_size', label: '文字字号', rules: true },
                    { span: 12, formType: 'SELECT', name: 'win_family', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 12, formType: 'RADIO', name: 'win_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 12, formType: 'RADIO', name: 'win_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 12, formType: 'RADIO', name: 'win_filed', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'win_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'win_filed', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'win_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'win_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'win_win', label: '窗口背景', collapsible: true, children: [
                    { span: 12, formType: 'COLOR', name: 'win_back_color', label: '背景颜色', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'win_back_deg', label: '颜色角度', rules: true },
                    { span: 12, formType: 'RADIO', name: 'win_back_border', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 12, formType: 'RADIO', name: 'win_back_filter', label: '背景模糊', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'GROUP', name: 'win_back_border_data', label: '边框样式', collapsible: true,
                        jugde: [{ field: 'win_back_border', value: [true] }], children: [
                            { span: 24, formType: 'NUMBER', name: 'win_back_border_size', label: '边框尺寸', rules: true },
                            {
                                span: 24, formType: 'RADIO', name: 'win_back_border_type', label: '边框类型', rules: true,
                                valueEnum: MappingData.Style__BorderType
                            },
                            { span: 24, formType: 'COLOR', name: 'win_back_border_color', label: '边框颜色', rules: true, mode: ['single'] },
                        ]
                    },
                    {
                        span: 12, formType: 'GROUP', name: 'win_back_filter_data', label: '背景模糊', collapsible: true,
                        jugde: [{ field: 'win_back_filter', value: [true] }], children: [
                            { span: 24, formType: 'NUMBER', name: 'win_back_filter_size', label: '模糊数值', rules: true, },
                        ]
                    },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'win_image', label: '图片背景', collapsible: true, children: [
                    { span: 24, formType: 'RADIO', name: 'win_image_status', label: '背景图层', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'LIST', name: 'win_image_list', label: '图片列表', collapsible: true, title: '图片',
                        jugde: [{ field: 'win_image_status', value: [true] }], children: [
                            { span: 12, formType: 'INPUT', name: 'image_url', label: '图片地址', rules: true },
                            { span: 12, formType: 'RADIO', name: 'back_position', label: '背景定位方式', rules: true, valueEnum: MappingData.Style__PositionType },
                            {
                                span: 12, formType: 'RADIO', name: 'back_topUnit', label: '顶部定位单位', rules: true,
                                valueEnum: MappingData.Flex_SizeType, jugde: [{ field: 'back_position', value: ['top-left', 'top-right'] }]
                            },
                            {
                                span: 12, formType: 'NUMBER', name: 'back_top', label: '顶部距离', rules: true,
                                jugde: [{ field: 'back_position', value: ['top-left', 'top-right'] }]
                            },
                            {
                                span: 12, formType: 'RADIO', name: 'back_btmUnit', label: '底部定位单位', rules: true,
                                valueEnum: MappingData.Flex_SizeType, jugde: [{ field: 'back_position', value: ['bottom-left', 'bottom-right'] }]
                            },
                            {
                                span: 12, formType: 'NUMBER', name: 'back_btm', label: '底部距离', rules: true,
                                jugde: [{ field: 'back_position', value: ['bottom-left', 'bottom-right'] }]
                            },
                            {
                                span: 12, formType: 'RADIO', name: 'back_lefUnit', label: '左侧定位单位', rules: true,
                                valueEnum: MappingData.Flex_SizeType, jugde: [{ field: 'back_position', value: ['top-left', 'bottom-left'] }]
                            },
                            {
                                span: 12, formType: 'NUMBER', name: 'back_lef', label: '左侧距离', rules: true,
                                jugde: [{ field: 'back_position', value: ['top-left', 'bottom-left'] }]
                            },
                            {
                                span: 12, formType: 'RADIO', name: 'back_rigUnit', label: '右侧定位单位', rules: true,
                                valueEnum: MappingData.Flex_SizeType, jugde: [{ field: 'back_position', value: ['top-right', 'bottom-right'] }]
                            },
                            {
                                span: 12, formType: 'NUMBER', name: 'back_rig', label: '右侧距离', rules: true,
                                jugde: [{ field: 'back_position', value: ['top-right', 'bottom-right'] }]
                            },
                            { span: 8, formType: 'NUMBER', name: 'width', label: '宽度', rules: true },
                            { span: 8, formType: 'NUMBER', name: 'height', label: '高度', rules: true },
                            { span: 8, formType: 'NUMBER', name: 'rotate', label: '旋转度', rules: true },
                        ]
                    },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'win_nav', label: '导航样式', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'start_type', value: ['A02'] }], children: [
            {
                span: 24, formType: 'LIST', name: 'nav_list', label: '导航列表', collapsible: true,
                children: [
                    { span: 8, formType: 'RADIO', name: 'nav_start', label: '首页显示', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 8, formType: 'RADIO', name: 'nav_level', label: '导航等级', rules: true, valueEnum: MappingData.Start__navLevel },
                    { span: 8, formType: 'RADIO', name: 'nav_type', label: '导航位置', rules: true, valueEnum: MappingData.Start__navType },
                    {
                        span: 12, formType: 'RADIO', name: 'nav_position', label: '导航定位', rules: true,
                        valueEnum: MappingData.Start__navPosition, jugde: [{ field: 'nav_type', value: ['A02'] }]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'nav_typeModel', label: '导航类型', rules: true,
                        valueEnum: MappingData.Start__navTypeA02, jugde: [{ field: 'nav_type', value: ['A02'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'nav_typePower', label: '分组权重', rules: true,
                        valueEnum: MappingData.Start__navTypeA02Power, jugde: [{ field: 'nav_typeModel', value: ['A02'] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'nav_width', label: '导航宽度', rules: true,
                        jugde: [{ field: 'nav_type', value: ['A02'] }, { field: 'nav_position', value: ['left', 'right'] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'nav_height', label: '导航高度', rules: true,
                        jugde: [{ field: 'nav_type', value: ['A02'] }, { field: 'nav_position', value: ['top', 'bottom'] }]
                    },

                    {
                        span: 12, formType: 'NUMBER', name: 'nav_top', label: '上方定位', rules: true,
                        jugde: [{ field: 'nav_type', value: ['A02'] }, { field: 'nav_position', value: ['top', 'left', 'right'] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'nav_right', label: '右侧定位', rules: true,
                        jugde: [{ field: 'nav_type', value: ['A02'] }, { field: 'nav_position', value: ['right', 'top', 'bottom'] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'nav_bottom', label: '下方定位', rules: true,
                        jugde: [{ field: 'nav_type', value: ['A02'] }, { field: 'nav_position', value: ['bottom', 'left', 'right'] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'nav_left', label: '左侧定位', rules: true,
                        jugde: [{ field: 'nav_type', value: ['A02'] }, { field: 'nav_position', value: ['left', 'top', 'bottom'] }]
                    },
                    {
                        span: 24, formType: 'GROUP', name: 'nav_flex', label: '内部布局', collapsible: true, children: [
                            { span: 12, formType: 'NUMBER', name: 'nav_item_width', label: '选项宽度', rules: true },
                            { span: 12, formType: 'NUMBER', name: 'nav_item_height', label: '选项高度', rules: true },
                            { span: 12, formType: 'INPUT', name: 'nav_item_padding', label: '内填充', rules: true },
                            { span: 12, formType: 'INPUT', name: 'nav_item_margin', label: '外边距', rules: true },
                            {
                                span: 8, formType: 'SELECT', name: 'nav_align_items', label: 'align-items', rules: true,
                                valueEnum: MappingData.Flex_items
                            },
                            {
                                span: 8, formType: 'SELECT', name: 'nav_align_content', label: 'align-content', rules: true,
                                valueEnum: MappingData.Flex_content
                            },
                            {
                                span: 8, formType: 'SELECT', name: 'nav_justify_content', label: 'justify-content', rules: true,
                                valueEnum: MappingData.Flex_justify
                            },
                            {
                                span: 12, formType: 'SELECT', name: 'nav_flex_direction', label: 'flex-direction', rules: true,
                                valueEnum: MappingData.Flex_direction
                            },
                            {
                                span: 12, formType: 'SELECT', name: 'nav_flex_wrap', label: 'flex-wrap', rules: true,
                                valueEnum: MappingData.Flex_wrap
                            },
                        ]
                    },
                    {
                        span: 24, formType: 'GROUP', name: 'nav_back', label: '背景设置', collapsible: true,
                        jugde: [{ field: 'nav_typeModel', value: ['A01'] }], children: [
                            {
                                span: 24, formType: 'RADIO', name: 'nav_back_type', label: '背景类型', rules: true,
                                valueEnum: MappingData.Start__navBackType
                            },
                            {
                                span: 12, formType: 'COLOR', name: 'nav_back_color', label: '背景颜色', rules: true,
                                jugde: [{ field: 'nav_back_type', value: ['color'] }]
                            },
                            {
                                span: 12, formType: 'NUMBER', name: 'nav_back_deg', label: '颜色角度', rules: true,
                                jugde: [{ field: 'nav_back_type', value: ['color'] }]
                            },

                            {
                                span: 12, formType: 'INPUT', name: 'nav_back_url', label: '图片地址', rules: true,
                                jugde: [{ field: 'nav_back_type', value: ['image'] }]
                            },
                            {
                                span: 12, formType: 'RADIO', name: 'nav_back_obj', label: '剪裁方式', rules: true,
                                jugde: [{ field: 'nav_back_type', value: ['image'] }], valueEnum: MappingData.Start__imgObjectFit
                            },
                        ]
                    },
                    {
                        span: 12, formType: 'GROUP', name: 'nav_item_default', label: '默认样式', collapsible: true, children: [
                            { span: 24, formType: 'COLOR', name: 'nav_default_color', label: '文字颜色', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'nav_default_deg', label: '颜色角度', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'nav_default_size', label: '文字字号', rules: true },
                            { span: 24, formType: 'SELECT', name: 'nav_default_family', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
                            { span: 24, formType: 'RADIO', name: 'nav_default_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                            { span: 24, formType: 'RADIO', name: 'nav_default_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                            { span: 24, formType: 'RADIO', name: 'nav_default_filed', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                            {
                                span: 24, formType: 'INPUT', name: 'nav_default_filed_size', label: '阴影数值', rules: true,
                                jugde: [{ field: 'nav_default_filed', value: [true] }]
                            },
                            {
                                span: 24, formType: 'COLOR', name: 'nav_default_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                                jugde: [{ field: 'nav_default_filed', value: [true] }]
                            },
                        ]
                    },
                    {
                        span: 12, formType: 'GROUP', name: 'nav_item_active', label: '选中样式', collapsible: true, children: [
                            { span: 24, formType: 'COLOR', name: 'nav_active_color', label: '文字颜色', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'nav_active_deg', label: '颜色角度', rules: true },
                            { span: 24, formType: 'NUMBER', name: 'nav_active_size', label: '文字字号', rules: true },
                            { span: 24, formType: 'SELECT', name: 'nav_active_family', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
                            { span: 24, formType: 'RADIO', name: 'nav_active_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                            { span: 24, formType: 'RADIO', name: 'nav_active_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                            { span: 24, formType: 'RADIO', name: 'nav_active_filed', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                            {
                                span: 24, formType: 'INPUT', name: 'nav_active_filed_size', label: '阴影数值', rules: true,
                                jugde: [{ field: 'nav_active_filed', value: [true] }]
                            },
                            {
                                span: 24, formType: 'COLOR', name: 'nav_active_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                                jugde: [{ field: 'nav_active_filed', value: [true] }]
                            },
                        ]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'nav_active_back', label: '选中背景', rules: true,
                        valueEnum: MappingData.IsEnabledBool
                    },
                    {
                        span: 12, formType: 'INPUT', name: 'nav_active_url', label: '背景地址', rules: true,
                        jugde: [{ field: 'nav_active_back', value: [true] }]
                    },
                ]
            }
        ]
    },
    // 通用列表设置
    {
        span: 24, formType: 'GROUP', name: 'table_search', label: '表单-搜索框样式', collapsible: true, defaultCollapsed: true,
        children: [
            {
                span: 12, formType: 'GROUP', name: 'table_search_title', label: '标题设置', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_search_title_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_search_title_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_search_title_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_search_title_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_search_title_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_search_title_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'table_search_title_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'table_search_title_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'table_search_title_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_search_title_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'table_search_title_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'table_search_value', label: '数值设置', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_search_value_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_search_value_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_search_value_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_search_value_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_search_value_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_search_value_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'table_search_value_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'table_search_value_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'table_search_value_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_search_value_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'table_search_value_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'table_search_reset', label: '查询按钮', collapsible: true,
                children: [
                    { span: 24, formType: 'INPUT', name: 'table_search_reset_radius', label: '背景圆角', rules: true },
                    { span: 24, formType: 'COLOR', name: 'table_search_reset_back', label: '背景颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'COLOR', name: 'table_search_reset_border', label: '边框颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'COLOR', name: 'table_search_reset_text', label: '文字颜色', rules: true, mode: ['single'] },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'table_search_query', label: '重置按钮', collapsible: true,
                children: [
                    { span: 24, formType: 'INPUT', name: 'table_search_query_radius', label: '背景圆角', rules: true },
                    { span: 24, formType: 'COLOR', name: 'table_search_query_back', label: '背景颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'COLOR', name: 'table_search_query_border', label: '边框颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'COLOR', name: 'table_search_query_text', label: '文字颜色', rules: true, mode: ['single'] },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'table_search_back', label: '背景样式', collapsible: true,
                children: [
                    { span: 12, formType: 'COLOR', name: 'table_search_back_color', label: '背景颜色', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'table_search_back_back', label: '颜色角度', rules: true },
                    { span: 12, formType: 'INPUT', name: 'table_search_back_radius', label: '背景圆角', rules: true },
                    { span: 12, formType: 'RADIO', name: 'table_search_back_border', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'NUMBER', name: 'table_search_back_border_size', label: '边框尺寸', rules: true,
                        jugde: [{ field: 'table_search_back_border', value: [true] }]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'table_search_back_border_type', label: '边框类型', rules: true,
                        valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'table_search_back_border', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'table_search_back_border_color', label: '边框颜色', rules: true,
                        mode: ['single'], jugde: [{ field: 'table_search_back_border', value: [true] }]
                    },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'table_card', label: '表单-卡片样式', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 12, formType: 'COLOR', name: 'table_card_back', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'table_card_deg', label: '颜色角度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'table_card_number', label: '单行数量', rules: true },
            { span: 12, formType: 'INPUT', name: 'table_card_radius', label: '背景圆角', rules: true },
            { span: 12, formType: 'INPUT', name: 'table_card_padding', label: '内填充', rules: true },
            { span: 12, formType: 'RADIO', name: 'table_card_border', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'NUMBER', name: 'table_card_border_size', label: '边框尺寸', rules: true,
                jugde: [{ field: 'table_card_border', value: [true] }]
            },
            {
                span: 12, formType: 'RADIO', name: 'table_card_border_type', label: '边框类型', rules: true,
                valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'table_card_border', value: [true] }]
            },
            {
                span: 24, formType: 'COLOR', name: 'table_card_border_color', label: '边框颜色', rules: true,
                mode: ['single'], jugde: [{ field: 'table_card_border', value: [true] }]
            },
            {
                span: 12, formType: 'GROUP', name: 'table_card_title', label: '标题样式', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_card_title_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_card_title_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_card_title_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_card_title_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_card_title_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_card_title_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'table_card_title_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'table_card_title_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'table_card_title_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_card_title_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'table_card_title_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'table_card_value', label: '数值样式', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_card_value_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_card_value_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_card_value_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_card_value_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_card_value_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_card_value_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'table_card_value_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'table_card_value_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'table_card_value_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_card_value_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'table_card_value_filed', value: [true] }]
                    },
                ]
            },
        ]
    },

    {
        span: 24, formType: 'GROUP', name: 'table_menu', label: '表单-菜单样式', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 12, formType: 'NUMBER', name: 'table_menu_width', label: '菜单宽度', rules: true },
            { span: 12, formType: 'INPUT', name: 'table_menu_margin', label: '外间距', rules: true },
            { span: 12, formType: 'COLOR', name: 'table_menu_back', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'table_menu_deg', label: '颜色角度', rules: true },
            { span: 12, formType: 'COLOR', name: 'table_menu_icon', label: '图标颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'NUMBER', name: 'table_menu_icon_size', label: '图标尺寸', rules: true },
            { span: 12, formType: 'COLOR', name: 'table_menu_active_back', label: '选中背景', rules: true },
            { span: 12, formType: 'NUMBER', name: 'table_menu_active_backDeg', label: '颜色角度', rules: true },
            {
                span: 12, formType: 'GROUP', name: 'table_menu_default', label: '默认文字样式', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_menu_default_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_menu_default_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_menu_default_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_menu_default_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_menu_default_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_menu_default_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'table_menu_default_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'table_menu_default_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'table_menu_default_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_menu_default_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'table_menu_default_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'table_menu_active', label: '选中文字样式', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_menu_active_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_menu_active_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_menu_active_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_menu_active_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_menu_active_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_menu_active_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'table_menu_active_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'table_menu_active_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'table_menu_active_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_menu_active_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'table_menu_active_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'table_menu_default_unit', label: '默认文字样式', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_menu_default_unit_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_menu_default_unit_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_menu_default_unit_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_menu_default_unit_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_menu_default_unit_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_menu_default_unit_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'table_menu_default_unit_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'table_menu_default_unit_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'table_menu_default_unit_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_menu_default_unit_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'table_menu_default_unit_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'table_menu_active_unit', label: '选中文字样式', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_menu_active_unit_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_menu_active_unit_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_menu_active_unit_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_menu_active_unit_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_menu_active_unit_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_menu_active_unit_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'table_menu_active_unit_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'table_menu_active_unit_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'table_menu_active_unit_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_menu_active_unit_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'table_menu_active_unit_filed', value: [true] }]
                    },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'table_extra', label: '表单-额外信息', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 12, formType: 'COLOR', name: 'table_extra_opt_color', label: '操作颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'NUMBER', name: 'table_extra_opt_size', label: '操作尺寸', rules: true },
            { span: 12, formType: 'COLOR', name: 'table_scroll_thumb', label: '滚动条-滑块颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'COLOR', name: 'table_extra_color', label: '文字颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'table_extra_deg', label: '颜色角度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'table_extra_size', label: '文字字号', rules: true },
            { span: 12, formType: 'SELECT', name: 'table_extra_family', label: '文字字体', valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'table_extra_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'table_extra_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'table_extra_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'table_extra_filed_data', label: '阴影数值', rules: true,
                jugde: [{ field: 'table_extra_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'table_extra_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'table_extra_filed', value: [true] }]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'table_top', label: '表单-表单头部样式', collapsible: true, defaultCollapsed: true,
        children: [
            // 表头样式
            { span: 12, formType: 'COLOR', name: 'table_top_back', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'table_top_Backdeg', label: '颜色角度', rules: true },
            { span: 12, formType: 'COLOR', name: 'table_top_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'NUMBER', name: 'table_top_size', label: '文字字号', rules: true },
            { span: 12, formType: 'SELECT', name: 'table_top_family', label: '文字字体', valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'table_top_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'table_top_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'table_list', label: '表单-列表样式', collapsible: true, defaultCollapsed: true,
        children: [
            {
                span: 12, formType: 'GROUP', name: 'table_list_default', label: '表单-列表默认样式', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_list_back', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_list_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'COLOR', name: 'table_list_border', label: '边框颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'table_list_border_size', label: '边框尺寸', rules: true },
                    { span: 24, formType: 'COLOR', name: 'table_list_color', label: '文字颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'table_list_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_list_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_list_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_list_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'table_list_active', label: '表单-列表选中样式', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_list_act_back', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_list_act_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'COLOR', name: 'table_list_act_border', label: '边框颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'table_list_act_border_size', label: '边框尺寸', rules: true },
                    { span: 24, formType: 'COLOR', name: 'table_list_act_color', label: '文字颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'table_list_act_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_list_act_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_list_act_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_list_act_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'table_options', label: '表单-操作样式', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 12, formType: 'COLOR', name: 'table_options_back', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'table_options_deg', label: '颜色角度', rules: true },
            { span: 12, formType: 'COLOR', name: 'table_options_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'NUMBER', name: 'table_options_size', label: '文字字号', rules: true },
            { span: 12, formType: 'SELECT', name: 'table_options_family', label: '文字字体', valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'table_options_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'table_options_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'table_pagin', label: '表单-分页器样式', collapsible: true, defaultCollapsed: true,
        children: [
            {
                span: 24, formType: 'GROUP', name: 'table_pagin_title', label: '标题设置', collapsible: true,
                children: [
                    { span: 12, formType: 'COLOR', name: 'table_pagin_title_color', label: '文字颜色', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'table_pagin_title_deg', label: '颜色角度', rules: true },
                    { span: 12, formType: 'SELECT', name: 'table_pagin_title_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 12, formType: 'RADIO', name: 'table_pagin_title_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 12, formType: 'RADIO', name: 'table_pagin_title_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 12, formType: 'RADIO', name: 'table_pagin_title_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'table_pagin_title_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'table_pagin_title_filed', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'table_pagin_title_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'table_pagin_title_filed', value: [true] }]
                    },
                ]
            },
            { span: 12, formType: 'COLOR', name: 'table_pagin_icon_color', label: '图标颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'NUMBER', name: 'table_pagin_icon_size', label: '图标尺寸', rules: true },
            {
                span: 12, formType: 'GROUP', name: 'table_pagin_default', label: '默认按钮', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_pagin_default_back', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_pagin_default_backDeg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_pagin_default_radius', label: '背景圆角', rules: true },
                    { span: 24, formType: 'COLOR', name: 'table_pagin_default_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_pagin_default_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_pagin_default_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_pagin_default_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_pagin_default_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'table_pagin_default_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'table_pagin_default_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'table_pagin_default_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_pagin_default_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'table_pagin_default_filed', value: [true] }]
                    },

                    { span: 24, formType: 'RADIO', name: 'table_pagin_default_border', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'NUMBER', name: 'table_pagin_default_border_size', label: '边框尺寸', rules: true,
                        jugde: [{ field: 'table_pagin_default_border', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'table_pagin_default_border_type', label: '边框类型', rules: true,
                        valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'table_pagin_default_border', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_pagin_default_border_color', label: '边框颜色', rules: true,
                        mode: ['single'], jugde: [{ field: 'table_pagin_default_border', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'table_pagin_active', label: '选中按钮', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'table_pagin_active_back', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_pagin_active_backDeg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_pagin_active_radius', label: '背景圆角', rules: true },
                    { span: 24, formType: 'COLOR', name: 'table_pagin_active_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'table_pagin_active_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'SELECT', name: 'table_pagin_active_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'table_pagin_active_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'table_pagin_active_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'table_pagin_active_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'table_pagin_active_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'table_pagin_active_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_pagin_active_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'table_pagin_active_filed', value: [true] }]
                    },

                    { span: 24, formType: 'RADIO', name: 'table_pagin_active_border', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'NUMBER', name: 'table_pagin_active_border_size', label: '边框尺寸', rules: true,
                        jugde: [{ field: 'table_pagin_active_border', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'table_pagin_active_border_type', label: '边框类型', rules: true,
                        valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'table_pagin_active_border', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'table_pagin_active_border_color', label: '边框颜色', rules: true,
                        mode: ['single'], jugde: [{ field: 'table_pagin_active_border', value: [true] }]
                    },
                ]
            },
        ]
    },
]
// *** 大屏初始页面
const StartInitFormList = [
    { span: 24, formType: 'HIDDEN', name: 'path', label: '表编号', rules: true },
    {
        span: 24, formType: 'GROUP', name: 'StartInitFormList_initData', label: '初始参数', collapsible: true,
        jugde: [{ field: 'start', value: [true] }], children: [
            { span: 24, formType: 'RADIO', name: 'start_init', label: '初始页面', rules: true, valueEnum: MappingData.Start__initPasge },
            { span: 24, formType: 'INPUT', name: 'start_home', label: '首页路径', rules: true, jugde: [{ field: 'start_init', value: ['HOME'] }] },
            { span: 24, formType: 'INPUT', name: 'start_page', label: '路由路径', rules: true, jugde: [{ field: 'start_init', value: ['PAGE'] }] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'StartInitFormList_router', label: '路由页面', collapsible: true,
        jugde: [{ field: 'start', value: [false] }], children: [
            { span: 24, formType: 'RADIO', name: 'page_type', label: '路由页面类型', rules: true, valueEnum: MappingData.Start__pageType },
            { span: 24, formType: 'INPUT', name: 'page_diyUrl', label: '自订页面地址', rules: true, jugde: [{ field: 'page_type', value: ['DIY'] }] },

            {
                span: 24, formType: 'GROUP', name: 'StartInitFormList_router', label: '布局页面配置', collapsible: true,
                jugde: [{ field: 'page_type', value: ['LAY'] }], children: [
                    { span: 24, formType: 'INPUT', name: 'page_layPadding', label: '布局页面内填充', rules: true },
                    { span: 24, formType: 'RADIO', name: 'page_fold', label: '折叠面板', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'page_diff', label: '全局异色', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'page_back', label: '背景模板', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'page_back_url', label: '模板地址', rules: true, jugde: [{ field: 'page_back', value: [true] }] },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'page_fold_config', label: '折叠面板配置', collapsible: true,
                jugde: [{ field: 'page_fold', value: [true] }], children: [
                    { span: 24, formType: 'RADIO', name: 'fold_position', label: '折叠面板', rules: true, valueEnum: MappingData.System__AlignmentLRA02 },
                    {
                        span: 24, formType: 'NUMBER', name: 'fold_left', label: '左侧距离', rules: true,
                        jugde: [{ field: 'fold_position', value: ['leftTop', 'leftBtm'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'fold_right', label: '右侧距离', rules: true,
                        jugde: [{ field: 'fold_position', value: ['rightTop', 'rightBtm'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'fold_top', label: '上方距离', rules: true,
                        jugde: [{ field: 'fold_position', value: ['leftTop', 'rightTop'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'fold_bottom', label: '下方距离', rules: true,
                        jugde: [{ field: 'fold_position', value: ['leftBtm', 'rightBtm'] }]
                    },
                    { span: 24, formType: 'NUMBER', name: 'fold_width', label: '面板宽度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'fold_height', label: '面板高度', rules: true },
                    { span: 24, formType: 'INPUT', name: 'fold_url', label: '背景图片', rules: true },
                    { span: 24, formType: 'INPUT', name: 'fold_open', label: '展开文字', rules: true },
                    { span: 24, formType: 'INPUT', name: 'fold_off', label: '收起文字', rules: true },
                    { span: 24, formType: 'INPUT', name: 'fold_padding', label: '文字内填充', rules: true },
                    { span: 24, formType: 'COLOR', name: 'fold_titleColor', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'fold_titleDeg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'fold_titleSize', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'fold_titleFamily', label: '文字字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'fold_titleWeight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'fold_titleStyle', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'fold_shadow', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'fold_filterSize', label: '阴影数值', rules: true, jugde: [{ field: 'fold_shadow', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'fold_filterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'fold_shadow', value: [true] }] },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'page_diff_config', label: '异色页面配置', collapsible: true,
                jugde: [{ field: 'page_diff', value: [true] }], children: [
                    // 需要异色的配置信息
                    // 头部图片
                    // 背景图片
                    // 底部图片
                    // 左侧图片
                    // 右侧图片
                    // 小窗设置
                ]
            },


        ]
    }
]
// *** 大屏小窗设置
const StartWindowFormList = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    { span: 12, formType: 'RADIO', name: 'window_style', label: '小窗样式', rules: true, valueEnum: MappingData.Start__windowType },
    { span: 12, formType: 'RADIO', name: 'window_nav', label: '小窗导航', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 12, formType: 'RADIO', name: 'window_title', label: '小窗标题', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 12, formType: 'INPUT', name: 'window_titleTxt', label: '标题内容', rules: true, jugde: [{ field: 'window_title', value: [true] }] },
    {
        span: 24, formType: 'GROUP', name: 'LayoutWindowStyleFormList_01', label: '样式设置', collapsible: true,
        jugde: [{ field: 'window_style', value: ['DIY'] }], children: [
            { span: 12, formType: 'COLOR', name: 'window_backColor', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'window_backDeg', label: '背景角度', rules: true },
            { span: 12, formType: 'INPUT', name: 'window_radius', label: '背景圆角', rules: true },
            { span: 12, formType: 'INPUT', name: 'window_padding', label: '背景内填充', rules: true },
            { span: 12, formType: 'RADIO', name: 'window_border', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'NUMBER', name: 'window_borderSize', label: '边框尺寸', rules: true,
                jugde: [{ field: 'window_border', value: [true] }]
            },
            {
                span: 12, formType: 'RADIO', name: 'window_borderType', label: '边框类型', rules: true,
                valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'window_border', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'window_borderColor', label: '边框颜色', rules: true,
                mode: ['single'], jugde: [{ field: 'window_border', value: [true] }]
            },
            { span: 12, formType: 'RADIO', name: 'window_filter', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'INPUT', name: 'window_filterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_filter', value: [true] }] },
            { span: 12, formType: 'COLOR', name: 'window_filterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_filter', value: [true] }] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'LayoutWindowStyleFormList_02', label: '标题设置', collapsible: true,
        jugde: [{ field: 'window_style', value: ['DIY'] }, { field: 'window_title', value: [true] }], children: [
            { span: 12, formType: 'INPUT', name: 'window_titleMar', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'window_titlePad', label: '外边距', rules: true },
            { span: 12, formType: 'COLOR', name: 'window_titleColor', label: '标题颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'window_titleDeg', label: '颜色角度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'window_titleSize', label: '标题字号', rules: true },
            { span: 12, formType: 'SELECT', name: 'window_titleFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'window_titleWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'window_titleStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'window_titleFilter', label: '标题阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'INPUT', name: 'window_titleFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_titleFilter', value: [true] }] },
            { span: 12, formType: 'COLOR', name: 'window_titleFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_titleFilter', value: [true] }] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'LayoutWindowStyleFormList_07', label: '导航设置', collapsible: true,
        children: [
            {
                span: 24, formType: 'LIST', name: 'window_NavList', label: '导航列表', collapsible: true,
                children: [
                    { span: 10, formType: 'TempGenerateUuid', name: 'window_navUuid', label: '生成ID', rules: true },
                    { span: 4, formType: 'TempICON', name: 'window_NavIcon', label: '导航图标' },
                    { span: 10, formType: 'INPUT', name: 'window_NavLabel', label: '导航名称', rules: true },
                ]
            },
            // 独立 统一
            {
                span: 12, formType: 'RADIO', name: 'window_NavType', label: '导航样式', rules: true,
                valueEnum: MappingData.Charts__VChartsDirectionA01, jugde: [{ field: 'window_nav', value: [true] }]
            },
            {
                span: 12, formType: 'NUMBER', name: 'window_navWidth', label: '导航宽度', rules: true,
                jugde: [{ field: 'window_nav', value: [true] }, { field: 'window_NavType', value: ['vertical'] }]
            },
            {
                span: 12, formType: 'NUMBER', name: 'window_navHeight', label: '导航高度', rules: true,
                jugde: [{ field: 'window_nav', value: [true] }, { field: 'window_NavType', value: ['horizontal'] }]
            },
            { span: 12, formType: 'INPUT', name: 'window_navPadding', label: '导航内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'window_navMargin', label: '导航外间距', rules: true },
            // A01 
            {
                span: 12, formType: 'GROUP', name: 'window_NavOptions_details', label: '默认样式', collapsible: true, jugde: [{ field: 'window_nav', value: [true] }], children: [
                    { span: 12, formType: 'INPUT', name: 'window_navMar', label: '内填充', rules: true },
                    { span: 12, formType: 'INPUT', name: 'window_navPad', label: '外边距', rules: true },
                    { span: 24, formType: 'COLOR', name: 'window_navBack', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_navDeg', label: '背景角度', rules: true },
                    { span: 24, formType: 'RADIO', name: 'window_navBorder', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_navBorSize', label: '边框尺寸', rules: true,
                        jugde: [{ field: 'window_navBorder', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_navBorType', label: '边框类型', rules: true,
                        valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'window_navBorder', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'window_navBorColor', label: '边框颜色', rules: true,
                        mode: ['single'], jugde: [{ field: 'window_navBorder', value: [true] }]
                    },
                    { span: 24, formType: 'COLOR', name: 'window_navColor', label: '标题颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_navDeg2', label: '标题角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_navSize', label: '标题字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'window_navFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'window_navWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'window_navStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'window_navFilter', label: '标题阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'window_navFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_navFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_navFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_navFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_navIcon', label: '图标颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_navIconSize', label: '图标尺寸', rules: true },
                    { span: 24, formType: 'RADIO', name: 'window_navIconFilter', label: '图标阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'window_navIconFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_navIconFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_navIconFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_navIconFilter', value: [true] }] },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'window_NavOptions_active', label: '选中样式', collapsible: true, jugde: [{ field: 'window_nav', value: [true] }], children: [
                    { span: 12, formType: 'INPUT', name: 'window_actMar', label: '内填充', rules: true },
                    { span: 12, formType: 'INPUT', name: 'window_actPad', label: '外边距', rules: true },
                    { span: 24, formType: 'COLOR', name: 'window_actBack', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_actDeg', label: '背景角度', rules: true },
                    { span: 24, formType: 'RADIO', name: 'window_actBorder', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_actBorSize', label: '边框尺寸', rules: true,
                        jugde: [{ field: 'window_actBorder', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_actBorType', label: '边框类型', rules: true,
                        valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'window_actBorder', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'window_actBorColor', label: '边框颜色', rules: true,
                        mode: ['single'], jugde: [{ field: 'window_actBorder', value: [true] }]
                    },
                    { span: 24, formType: 'COLOR', name: 'window_actColor', label: '标题颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_actDeg2', label: '标题角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_actSize', label: '标题字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'window_actFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'window_actWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'window_actStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'window_actFilter', label: '标题阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'window_actFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_actFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_actFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_actFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_actIcon', label: '图标颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_actIconSize', label: '图标字号', rules: true },
                    { span: 24, formType: 'RADIO', name: 'window_actIconFilter', label: '图标阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'window_actIconFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_actIconFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_actIconFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_actIconFilter', value: [true] }] },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'LayoutWindowStyleFormList_08', label: '轮播设置', collapsible: true, jugde: [{ field: 'window_nav', value: [true] }],
        children: [
            {
                span: 12, formType: 'GROUP', name: 'LayoutWindowStyleFormList_autoPlay', label: '切换参数', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'window_swiperDirection', label: '切换方向', rules: true, valueEnum: MappingData.Charts__VChartsDirectionA01 },
                    { span: 24, formType: 'NUMBER', name: 'window_swiperSpeed', label: '切换速度', rules: true },
                    { span: 24, formType: 'RADIO', name: 'window_swiperNoSwiping', label: '禁止拖动', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'window_swiperLoop', label: '切换循环', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'window_swiperAutoplay', label: '自动切换', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperDelay', label: '切换延迟', rules: true,
                        jugde: [{ field: 'window_swiperAutoplay', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'LayoutWindowStyleFormList_Effects', label: '切换效果', collapsible: true,
                children: [
                    { span: 24, formType: 'SELECT', name: 'window_swiperEffects', label: '切换效果', rules: true, valueEnum: MappingData.Swiper__SwiperEffectType },
                    // fade
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperFadeEffect', label: '淡出效果', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['fade'] }]
                    },
                    // cube
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperCubeSlideShadows', label: '开启slide阴影', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['cube'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperCubeShadow', label: '开启投影', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['cube'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCubeShadowOffset', label: '投影距离', rules: true, tooltip: '20',
                        jugde: [{ field: 'window_swiperEffects', value: ['cube'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCubeShadowScale', label: '缩放比例', rules: true, tooltip: '0.94',
                        jugde: [{ field: 'window_swiperEffects', value: ['cube'] }]
                    },
                    // coverflow
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCoverflowRotate', label: '旋转角度', rules: true, tooltip: '50',
                        jugde: [{ field: 'window_swiperEffects', value: ['coverflow'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCoverflowStretch', label: '拉伸值', rules: true, tooltip: '1',
                        jugde: [{ field: 'window_swiperEffects', value: ['coverflow'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCoverflowDepth', label: '位置深度', rules: true, tooltip: '100',
                        jugde: [{ field: 'window_swiperEffects', value: ['coverflow'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCoverflowModifier', label: '倍率', rules: true, tooltip: '1',
                        jugde: [{ field: 'window_swiperEffects', value: ['coverflow'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperCoverflowSlideShadows', label: '阴影', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['coverflow'] }]
                    },
                    // flip
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperFlipSlideShadows', label: 'slides的阴影', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['flip'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperFlipLimitRotation', label: '最大旋转角度', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['flip'] }]
                    },
                    // cards
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperCardsSlideShadows', label: 'slides的阴影', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['cards'] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'LayoutWindowStyleFormList_Pagination', label: '分页器设置', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'window_swiperPagination', label: '分页器', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperPaginationClickable', label: '点击切换', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperPagination', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperPaginationType', label: '分页器类型', rules: true,
                        valueEnum: MappingData.Swiper__SwiperPaginationType, jugde: [{ field: 'window_swiperPagination', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperPaginationOpposite', label: '进度条方向', rules: true, valueEnum: MappingData.mars3d__orientation,
                        jugde: [{ field: 'window_swiperPagination', value: [true] }, { field: 'window_swiperPaginationType', value: ['progressbar'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperPaginationDynamicBullets', label: '自动隐藏', rules: true, valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'window_swiperPagination', value: [true] }, { field: 'window_swiperPaginationType', value: ['bullets'] }]
                    },

                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperPaginationDynamicBulletsNumber', label: '主点数量', rules: true,
                        jugde: [{ field: 'window_swiperPagination', value: [true] }, { field: 'window_swiperPaginationType', value: ['bullets'] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'LayoutWindowStyleFormList_Scroll', label: '滚动条设置', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'window_swiperScrollbar', label: '滚动条', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperScrollbarDraggable', label: '点击切换', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperScrollbar', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperScrollbarHide', label: '自动隐藏', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperScrollbar', value: [true] }]
                    },
                ]
            },
        ]
    }
]
// *** 字段导入
const AddFieldsImport = [
    { span: 24, formType: 'INPUT', name: 'importSplit', label: '切割字符' },
    { span: 24, formType: 'TEXTAREA', name: 'importField', label: '字段导入', rules: true },
]
// *** 新增字段
const AddFieldsFormList = [
    {
        span: 24, formType: 'GROUP', name: 'AddFieldsFormList_01', label: '字段信息',
        children: [
            { span: 24, formType: 'INPUT', name: 'dataField', label: '字段', rules: true },
            { span: 24, formType: 'INPUT', name: 'caption', label: '映射', rules: true, },
        ]
    }
]

// *** 设置字段
const SetFieldsFormList = [
    { formType: 'HIDDEN', name: 'uuid' },
    {
        span: 12, formType: 'GROUP', name: 'SetFieldsFormList_01', label: '01-基础信息', collapsible: true,
        children: [
            { span: 24, formType: 'INPUT', name: 'dataField', label: '字段', rules: true },
            { span: 24, formType: 'INPUT', name: 'caption', label: '映射', rules: true },
            { span: 24, formType: 'SELECT', name: 'valueType', label: '数据类型', rules: true, valueEnum: MappingData.Form__TypeList },
            // 映射设置
            {
                span: 24, formType: 'RADIO', name: 'mappingType', label: '映射类型', rules: true, tooltip: '将字符映射为中文',
                valueEnum: MappingData.System__MapType, jugde: [{ field: 'valueType', value: FlowMenuAPIFieldJugdeValue }]
            },
            {
                span: 24, formType: 'SELECT', name: 'mappingData', label: '数据映射', rules: true, tooltip: '将字符映射为中文',
                valueEnum: MappingData.System__MappingEnum, jugde: [{ field: 'mappingType', value: ['DataMapping'] }]
            },
            { span: 24, formType: 'INPUT', name: 'mappingApi', label: '数据接口', rules: true, jugde: [{ field: 'mappingType', value: ['ApiMapping'] }] },
            { span: 24, formType: 'INPUT', name: 'mappingPar', label: '数据参数', jugde: [{ field: 'mappingType', value: ['ApiMapping'] }] },
            { span: 24, formType: 'INPUT', name: 'mappingParExtra', label: '额外渲染', jugde: [{ field: 'mappingType', value: ['ApiMapping'] }] },
            {
                span: 24, formType: 'RADIO', name: 'mappingJudge', label: '是否判断', tooltip: '根据isEnabled判断是否渲染',
                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'mappingType', value: ['ApiMapping'] }]
            },
            {
                span: 24, formType: 'INPUT', name: 'mappingValue', label: '映射键', rules: true,
                jugde: [{ field: 'valueType', value: FlowMenuAPIFieldJugdeValue }, { field: 'mappingType', value: ['DataMapping', 'ApiMapping'] }]
            },
            {
                span: 24, formType: 'INPUT', name: 'mappingLable', label: '映射值', rules: true,
                jugde: [{ field: 'valueType', value: FlowMenuAPIFieldJugdeValue }, { field: 'mappingType', value: ['DataMapping', 'ApiMapping'] }]
            },
            // 链接按钮
            { span: 24, formType: 'INPUT', name: 'urlLink', label: '跳转链接', jugde: [{ field: 'valueType', value: ['TempInputLink'] }] },
            { span: 24, formType: 'INPUT', name: 'urlBtn', label: '跳转名称', jugde: [{ field: 'valueType', value: ['TempInputLink'] }] },
            // 文件上传
            {
                span: 24, formType: 'SELECTM', name: 'fileType', label: '附件类型', rules: true,
                valueEnum: MappingData.System__FileType, jugde: [{ field: 'valueType', value: ['UPLOAD'] }]
            },
            { span: 24, formType: 'NUMBER', name: 'max', label: '最大附件数量', rules: true, jugde: [{ field: 'valueType', value: ['UPLOAD'] }] },
            { span: 24, formType: 'NUMBER', name: 'fileSize', label: '体积限制(G)', rules: true, jugde: [{ field: 'valueType', value: ['UPLOAD'] }] },
            // 提示信息
            { span: 24, formType: 'RADIO', name: 'tooltipStatus', label: '提示信息', rules: true, tooltip: '新增修改时提示信息', valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'tooltip', label: '提示内容', rules: true, jugde: [{ field: 'tooltipStatus', value: [true] }] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetFieldsFormList_02', label: '02-列表渲染', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'allowResizing', label: '改变列宽', rules: true, valueEnum: MappingData.IsYesBool },
            { span: 24, formType: 'NUMBER', name: 'width', label: '默认列宽', rules: true },
            { span: 24, formType: 'NUMBER', name: 'minWidth', label: '最小列宽', rules: true, jugde: [{ field: 'allowResizing', value: [true] }] },
            { span: 24, formType: 'RADIO', name: 'alignment', label: '对齐方式', rules: true, valueEnum: MappingData.System__AlignmentLCR },
            { span: 24, formType: 'RADIO', name: 'fixed', label: '是否固定', rules: true, valueEnum: MappingData.IsYesBool },
            {
                span: 24, formType: 'RADIO', name: 'fixedPosition', label: '固定位置', rules: true,
                valueEnum: MappingData.System__FexedPosition, jugde: [{ field: 'fixed', value: [true] }]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetFieldsFormList_04', label: '03-排序设置', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'allowReordering', label: '调整位置', rules: true, valueEnum: MappingData.IsYesBool },
            { span: 24, formType: 'RADIO', name: 'allowSorting', label: '调整排序', rules: true, valueEnum: MappingData.IsYesBool },
            { span: 24, formType: 'RADIO', name: 'defaultSortOrder', label: '排序方式', rules: true, valueEnum: MappingData.System__SortOrder },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetFieldsFormList_05', label: '04-筛选设置', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'allowHeaderFiltering', label: '筛选器', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'RADIO', name: 'allowFiltering', label: '行内筛选', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'RADIO', name: 'showInColumnChooser', label: '列选择器', rules: true, valueEnum: MappingData.IsEnabledBool },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetFieldsFormList_03', label: '05-分组设置', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'allowGrouping', label: '能否分组', rules: true, valueEnum: MappingData.IsYesBool },
            {
                span: 24, formType: 'RADIO', name: 'autoExpandGroup', label: '自动展开', rules: true,
                valueEnum: MappingData.IsYesBool, jugde: [{ field: 'allowGrouping', value: [true] }]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetFieldsFormList_06', label: '06-判断渲染', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'judge', label: '是否启用', rules: true, tooltip: '根据数据中某一字段的值判断渲染', valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'jugdeField', label: '判断字段', rules: true, jugde: [{ field: 'judge', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'jugdeValue', label: '判断值', rules: true, jugde: [{ field: 'judge', value: [true] }] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetFieldsFormList_07', label: '07-数值渲染', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'format', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'RADIO', name: 'formatType', label: '格式化类型', rules: true,
                valueEnum: MappingData.DevConfig__NumberFormat, jugde: [{ field: 'format', value: [true] }]
            },
            { span: 24, formType: 'INPUT', name: 'formatPrecision', label: '数值精度', rules: true, jugde: [{ field: 'format', value: [true] }] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetFieldsFormList_08', label: '08-额外模板', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'cellRender', label: '额外渲染', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'SELECT', name: 'cellRenderTemp', label: '渲染模板', rules: true, valueEnum: MappingData.Style__FormatTemp,
                jugde: [{ field: 'cellRender', value: [true] }]
            },
            {
                span: 24, formType: 'INPUT', name: 'dateRender', label: '时间格式', rules: true,
                jugde: [{ field: 'cellRender', value: [true] }, { field: 'cellRenderTemp', value: ['date'] }]
            },
            {
                span: 24, formType: 'LIST', name: 'status_list', label: '状态数据', collapsible: true,
                jugde: [{ field: 'cellRender', value: [true] }, { field: 'cellRenderTemp', value: ['status'] }],
                children: [
                    { span: 24, formType: 'INPUT', name: 'value', label: '字段值', rules: true },
                    { span: 24, formType: 'COLOR', name: 'color', label: '状态色', rules: true },
                ]
            },
            {
                span: 24, formType: 'RADIO', name: 'statusBadge', label: '标识符', rules: true, valueEnum: MappingData.IsEnabledBool,
                jugde: [{ field: 'cellRender', value: [true] }, { field: 'cellRenderTemp', value: ['status'] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'statusTag', label: '标签', rules: true, valueEnum: MappingData.IsEnabledBool,
                jugde: [{ field: 'cellRender', value: [true] }, { field: 'cellRenderTemp', value: ['status'] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'statusTagType', label: '标签类型', rules: true, valueEnum: MappingData.System__TagType,
                jugde: [{ field: 'cellRender', value: [true] }, { field: 'statusTag', value: [true] }, { field: 'cellRenderTemp', value: ['status'] }]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetFieldsFormList_09', label: '09-总体统计', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'totalItemStatus', label: '总体统计', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'SELECT', name: 'totalSummaryType', label: '统计方式', rules: true, valueEnum: MappingData.System__summaryType,
                jugde: [{ field: 'totalItemStatus', value: [true] }]
            },
            { span: 24, formType: 'INPUT', name: 'totalDisplayFormat', label: '描述文字', rules: true, jugde: [{ field: 'totalItemStatus', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'totalShowInColumn', label: '显示位置', rules: true, jugde: [{ field: 'totalItemStatus', value: [true] }] },
            {
                span: 24, formType: 'RADIO', name: 'totalAlignment', label: '对齐方式', rules: true,
                valueEnum: MappingData.System__AlignmentLCR, jugde: [{ field: 'totalItemStatus', value: [true] }]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetFieldsFormList_10', label: '10-分组统计', collapsible: true, defaultCollapsed: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'groupItemStatus', label: '分组统计', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'SELECT', name: 'groupSummaryType', label: '统计方式', rules: true, valueEnum: MappingData.System__summaryType,
                jugde: [{ field: 'groupItemStatus', value: [true] }]
            },
            { span: 24, formType: 'INPUT', name: 'groupDisplayFormat', label: '描述文字', rules: true, jugde: [{ field: 'groupItemStatus', value: [true] }] },
        ]
    }
]

// *** 添加全局操作
const AddTopOptionsFormList = [
    { formType: 'HIDDEN', name: 'uuid' },
    { formType: 'HIDDEN', name: 'code' },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_01', label: '基础信息',
        children: [
            { span: 24, formType: 'RADIO', name: 'position', label: '按钮位置', rules: true, valueEnum: MappingData.System__AlignmentLHR },
            { span: 24, formType: 'TREE', name: 'type', label: '操作类型', rules: true, valueEnum: MappingData.System__TopOptionsType },
            { span: 24, formType: 'INPUT', name: 'title', label: '操作名称', rules: true },
            { span: 24, formType: 'COLOR', name: 'color', label: '操作颜色', rules: true },
            { span: 24, formType: 'TempICON', name: 'icon', label: '操作图标', rules: true },
            { span: 24, formType: 'INPUT', name: 'api', label: '调用接口' },
            { span: 24, formType: 'INPUT', name: 'tips', label: '补充说明' },
        ]
    },
    // 新增选项
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_02', label: '新增选项',
        jugde: [{ field: 'type', value: ['A02'] }],
        children: [
            // AI分析
            { span: 24, formType: 'RADIO', name: 'isAI', label: '是否启用AI分析', rules: true, valueEnum: MappingData.IsEnabledBool },
            // 主数据字段
            { span: 24, formType: 'RADIO', name: 'isData', label: '是否使用菜单UUID', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'INPUT', name: 'dataKey', label: '主表UUID映射字段', rules: true,
                jugde: [{ field: 'isData', value: [true] }]
            },
            { span: 24, formType: 'RADIO', name: 'addType', label: '新增方式', rules: true, valueEnum: MappingData.System__AddDataType },
            // form 添加
            {
                span: 24, formType: 'RADIO', name: 'formMethod', label: '请求方式', rules: true, valueEnum: MappingData.System__Method,
                jugde: [{ field: 'addType', value: ['form'] }]
            },
            { span: 24, formType: 'INPUT', name: 'formUrl', label: '接口地址', rules: true, jugde: [{ field: 'addType', value: ['form'] }] },
            { span: 24, formType: 'INPUT', name: 'formParams', label: '额外参数', jugde: [{ field: 'addType', value: ['form'] }] },
            { span: 24, formType: 'INPUT', name: 'formPath', label: '接口路径', jugde: [{ field: 'addType', value: ['form'] }] },
            // excel 添加
            {
                span: 24, formType: 'RADIO', name: 'excelGetMethod', label: '获取方式', rules: true, valueEnum: MappingData.System__Method,
                jugde: [{ field: 'addType', value: ['excel'] }]
            },
            { span: 24, formType: 'INPUT', name: 'excelGetUrl', label: '获取EXCEL', rules: true, jugde: [{ field: 'addType', value: ['excel'] }] },
            { span: 24, formType: 'INPUT', name: 'excelGetParams', label: '获取时额外参数', jugde: [{ field: 'addType', value: ['excel'] }] },
            {
                span: 24, formType: 'RADIO', name: 'excelSaveMethod', label: '保存方式', rules: true, valueEnum: MappingData.System__Method,
                jugde: [{ field: 'addType', value: ['excel'] }]
            },
            { span: 24, formType: 'INPUT', name: 'excelSaveUrl', label: '保存EXCEL', rules: true, jugde: [{ field: 'addType', value: ['excel'] }] },
            { span: 24, formType: 'INPUT', name: 'excelSaveParams', label: '保存时额外参数', jugde: [{ field: 'addType', value: ['excel'] }] },
        ]
    },
    // 新增-ai配置
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_02_ai_render', label: 'AI页面渲染',
        jugde: [{ field: 'type', value: ['A02'] }, { field: 'isAI', value: [true] }],
        children: [
            // 按钮类型     type
            // 按钮样式     stylingMode
            // 按钮信息     text

            // 上传附件
            // 音频输入
            // 默认提示

            // 欢迎头

        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_02_ai_data', label: 'AI数据信息',
        jugde: [{ field: 'type', value: ['A02'] }, { field: 'isAI', value: [true] }],
        children: [
            // ai接口
            // 接口方式
            // 对应参数

            // 对应接口
            // 返回类型
            // 返回模式
            // 返回内容操作
        ]
    },
    // 查询字段
    {
        span: 12, formType: 'LIST', name: 'AddTopOptionsFormList_03', label: '查询字段',
        jugde: [{ field: 'type', value: ['A03'] }],
        children: [
            { span: 8, formType: 'INPUT', name: 'A03_value', label: '查询字段', rules: true },
            { span: 8, formType: 'INPUT', name: 'A03_label', label: '映射名称', rules: true },
            { span: 8, formType: 'SELECT', name: 'A03_type', label: '操作类型', rules: true, valueEnum: MappingData.Form__SearchType },
        ]
    },
    // 排序字段
    {
        span: 12, formType: 'LIST', name: 'AddTopOptionsFormList_04', label: '排序字段',
        jugde: [{ field: 'type', value: ['A04'] }],
        children: [
            { span: 8, formType: 'INPUT', name: 'A04_value', label: '查询字段', rules: true },
            { span: 8, formType: 'INPUT', name: 'A04_label', label: '映射名称', rules: true },
            { span: 8, formType: 'RADIO', name: 'A04_type', label: '操作类型', rules: true, valueEnum: MappingData.System__SortOrderNot },
        ]
    },
    // 刷新
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_05', label: '刷新选项',
        jugde: [{ field: 'type', value: ['A05'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'A05_search', label: '保留查询条件', rules: true, valueEnum: MappingData.IsYesBool },
            { span: 24, formType: 'RADIO', name: 'A05_sort', label: '保留排序条件', rules: true, valueEnum: MappingData.IsYesBool },
        ]
    },
    // 导出
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_06', label: '导出参数',
        jugde: [{ field: 'type', value: ['A06'] }],
        children: [
            // { span: 24, formType: 'RADIO', name: 'getMethod', label: '获取方式', rules: true, valueEnum: MappingData.System__Method },
            // { span: 24, formType: 'INPUT', name: 'getUrl', label: '获取接口', rules: true },
            // { span: 24, formType: 'INPUT', name: 'getParams', label: '额外参数' },
            // { span: 24, formType: 'RADIO', name: 'saveMethod', label: '保存方式', valueEnum: MappingData.System__Method },
            // { span: 24, formType: 'INPUT', name: 'saveUrl', label: '保存接口' },
            // { span: 24, formType: 'INPUT', name: 'saveParams', label: '额外参数' },
        ]
    },
    // 批操
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_07', label: '批量操作',
        jugde: [{ field: 'type', value: ['A07'] }],
        children: [
            // 保存接口
            { span: 24, formType: 'RADIO', name: 'A07_method', label: '保存方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'A07_url', label: '保存接口', rules: true },
            { span: 24, formType: 'INPUT', name: 'A07_params', label: '额外参数' },
            { span: 24, formType: 'INPUT', name: 'A07_key', label: '保存字段', tooltip: '保存是数组的键' },
            { span: 24, formType: 'RADIO', name: 'A07_type', label: '批操类型', rules: true, valueEnum: MappingData.System__BulkOperationType },
            {
                span: 24, formType: 'SELECT', name: 'A07_tipsType', label: '提示类型', rules: true,
                valueEnum: MappingData.Style__AntdResult, jugde: [{ field: 'A07_type', value: ['select', 'confirm'] }]
            },
            { span: 24, formType: 'INPUT', name: 'A07_tipsTitle', label: '提示标题', rules: true, jugde: [{ field: 'A07_type', value: ['select', 'confirm'] }] },
            { span: 24, formType: 'INPUT', name: 'A07_tipsText', label: '提示描述', jugde: [{ field: 'A07_type', value: ['select', 'confirm'] }] },
            // select
            { span: 24, formType: 'INPUT', name: 'A07_selectParams', label: '发送字段', rules: true, jugde: [{ field: 'A07_type', value: ['select'] }] },
            {
                span: 24, formType: 'LIST', name: 'A07_selectArr', label: '操作组', jugde: [{ field: 'A07_type', value: ['select'] }],
                children: [
                    { span: 24, formType: 'INPUT', name: 'A07_selectValue', label: '数据值', rules: true },
                    { span: 24, formType: 'INPUT', name: 'A07_selectLabel', label: '映射名称', rules: true },
                    { span: 24, formType: 'RADIO', name: 'A07_selectType', label: '按钮状态', rules: true, valueEnum: MappingData.System__ButtonStatus },
                    { span: 24, formType: 'RADIO', name: 'A07_selectDanger', label: '危险按钮', rules: true, valueEnum: MappingData.IsEnabledBool },
                ]
            },
            // form 表单
            {
                span: 24, formType: 'LIST', name: 'A07_formArr', label: '操作字段', jugde: [{ field: 'A07_type', value: ['form'] }],
                children: [
                    { span: 24, formType: 'INPUT', name: 'A07_formField', label: '字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'A07_formCaption', label: '映射名称', rules: true },
                    { span: 24, formType: 'SELECT', name: 'A07_formType', label: '数据类型', rules: true, valueEnum: MappingData.Form__TypeList },

                    {
                        span: 24, formType: 'RADIO', name: 'A07_formMapping', label: '映射类型', rules: true,
                        valueEnum: MappingData.System__MapType, jugde: [{ field: 'A07_formType', value: FlowMenuAPIFieldJugdeValue }]
                    },
                    {   // 数据映射
                        span: 24, formType: 'SELECT', name: 'A07_formData', label: '数据映射', rules: true, valueEnum: MappingData.System__MappingEnum,
                        jugde: [{ field: 'A07_formMapping', value: ['DataMapping'] }],
                    },
                    { span: 24, formType: 'INPUT', name: 'A07_apiUrl', label: '数据接口', rules: true, jugde: [{ field: 'A07_formMapping', value: ['ApiMapping'] }] },
                    { span: 24, formType: 'INPUT', name: 'A07_apiPar', label: '数据参数', jugde: [{ field: 'A07_formMapping', value: ['ApiMapping'] }] },
                    { span: 24, formType: 'INPUT', name: 'A07_formValue', label: '映射键', rules: true, jugde: [{ field: 'A07_formType', value: FlowMenuAPIFieldJugdeValue }] },
                    { span: 24, formType: 'INPUT', name: 'A07_formLable', label: '映射值', rules: true, jugde: [{ field: 'A07_formType', value: FlowMenuAPIFieldJugdeValue }] },
                    { span: 24, formType: 'RADIO', name: 'A07_tooltip', label: '提示信息', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'A07_tooltipText', label: '提示内容', rules: true, jugde: [{ field: 'A07_tooltip', value: [true] }] },
                ]
            },
        ]
    },
    // 弹窗
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_08', label: '弹出窗口',
        jugde: [{ field: 'type', value: ['A08'] }],
        children: [
            { span: 24, formType: 'NUMBER', name: 'modelWidth', label: '窗体宽度' },
            { span: 24, formType: 'RADIO', name: 'openPage', label: '选择页面', rules: true, valueEnum: MappingData.System__OptionsModelList },
            { span: 24, formType: 'INPUT', name: 'openType', label: '打开类型', rules: true },
        ],
    },
    // 执行接口
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_12', label: '执行接口',
        jugde: [{ field: 'type', value: ['A12'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'formMethod', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'formUrl', label: '接口地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'formParams', label: '额外参数' },
            { span: 24, formType: 'INPUT', name: 'successTips', label: '成功提示' },
            { span: 24, formType: 'RADIO', name: 'isModel', label: '是否弹窗', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'SELECT', name: 'modelType', label: '弹窗类型', rules: true,
                valueEnum: MappingData.Style__AntdResult, jugde: [{ field: 'isModel', value: [true] }]
            },
            { span: 24, formType: 'NUMBER', name: 'modelWidth', label: '弹窗宽度', jugde: [{ field: 'isModel', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'modelTitle', label: '弹窗标题', jugde: [{ field: 'isModel', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'modelText', label: '弹窗描述', jugde: [{ field: 'isModel', value: [true] }] },
        ]
    },
    // 站内路由
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_13', label: '站内路由',
        jugde: [{ field: 'type', value: ['A13'] }],
        children: [
            { span: 24, formType: 'TempGenerateUuid', name: 'A13_uuid', label: '生成ID', rules: true },
            { span: 24, formType: 'INPUT', name: 'A13_url', label: '菜单路由', rules: true },
            { span: 24, formType: 'SELECT', name: 'A13_type', label: '页面类型', rules: true, valueEnum: MappingData.System__MenuType },
            { span: 24, formType: 'INPUT', name: 'A13_title', label: '菜单标题', rules: true },
            { span: 24, formType: 'TempICON', name: 'A13_Icon', label: '页面图标' },
        ]
    },


]

// *** 添加局部操作
const AddRowOptionsFormList = [
    { formType: 'HIDDEN', name: 'uuid' },
    { formType: 'HIDDEN', name: 'code' },
    {
        span: 12, formType: 'GROUP', name: 'AddRowOptionsFormList', label: '基础信息', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'judge', label: '判断渲染', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'jugdeField', label: '判断字段', rules: true, jugde: [{ field: 'judge', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'jugdeValue', label: '判断值', rules: true, jugde: [{ field: 'judge', value: [true] }] },
            { span: 24, formType: 'TREE', name: 'type', label: '操作类型', rules: true, valueEnum: MappingData.System__RowOptionsType },
            { span: 24, formType: 'INPUT', name: 'title', label: '操作名称', rules: true },
            { span: 24, formType: 'COLOR', name: 'color', label: '操作颜色', rules: true },
            { span: 24, formType: 'TempICON', name: 'icon', label: '操作图标', rules: true },
            { span: 24, formType: 'INPUT', name: 'api', label: '调用接口' },
            { span: 24, formType: 'INPUT', name: 'tips', label: '补充说明' },
            { span: 24, formType: 'RADIO', name: 'showOptions', label: '判断渲染', rules: true, valueEnum: MappingData.System__RowShowStatus },
        ]
    },
    // !!! 01 修改
    {
        span: 12, formType: 'GROUP', name: 'AddRowOptionsFormList_01', label: '修改选项',
        jugde: [{ field: 'type', value: ['B01'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'addType', label: '修改方式', rules: true, valueEnum: MappingData.System__AddDataType },
            // form 添加
            {
                span: 24, formType: 'RADIO', name: 'formMethod', label: '请求方式', rules: true, valueEnum: MappingData.System__Method,
                jugde: [{ field: 'addType', value: ['form'] }]
            },
            { span: 24, formType: 'INPUT', name: 'formUrl', label: '接口地址', rules: true, jugde: [{ field: 'addType', value: ['form'] }] },
            { span: 24, formType: 'INPUT', name: 'formParams', label: '额外参数', jugde: [{ field: 'addType', value: ['form'] }] },
            { span: 24, formType: 'INPUT', name: 'formPath', label: '接口路径', jugde: [{ field: 'addType', value: ['form'] }] },
            // excel 添加
            {
                span: 24, formType: 'RADIO', name: 'excelGetMethod', label: '获取方式', rules: true, valueEnum: MappingData.System__Method,
                jugde: [{ field: 'addType', value: ['excel'] }]
            },
            { span: 24, formType: 'INPUT', name: 'excelGetUrl', label: '获取EXCEL', rules: true, jugde: [{ field: 'addType', value: ['excel'] }] },
            { span: 24, formType: 'INPUT', name: 'excelGetParams', label: '获取时额外参数', jugde: [{ field: 'addType', value: ['excel'] }] },
            {
                span: 24, formType: 'RADIO', name: 'excelSaveMethod', label: '保存方式', rules: true, valueEnum: MappingData.System__Method,
                jugde: [{ field: 'addType', value: ['excel'] }]
            },
            { span: 24, formType: 'INPUT', name: 'excelSaveUrl', label: '保存EXCEL', rules: true, jugde: [{ field: 'addType', value: ['excel'] }] },
            { span: 24, formType: 'INPUT', name: 'excelSaveParams', label: '保存时额外参数', jugde: [{ field: 'addType', value: ['excel'] }] },
        ]
    },
    // !!! 02 新增
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_02', label: '新增选项',
        jugde: [{ field: 'type', value: ['B02'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B02_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'B02_url', label: '接口地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'B02_params', label: '额外参数' },
            { span: 24, formType: 'INPUT', name: 'B02_uuid', label: '父级键名', rules: true },
        ]
    },
    // !!! 03 删除
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_03', label: '删除选项',
        jugde: [{ field: 'type', value: ['B03'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B03_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'B03_url', label: '接口地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'B03_params', label: '额外参数' },
            { span: 24, formType: 'INPUT', name: 'B03_title', label: '删除标题' },
            { span: 24, formType: 'INPUT', name: 'B03_subTitle', label: '删除描述' },
        ]
    },
    // !!! 04 查看附件
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_04_01', label: '数据来源',
        jugde: [{ field: 'type', value: ['B04'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B04_urlType', label: '附件地址', rules: true, valueEnum: MappingData.System_fileUrlType },
            // 接口地址
            {
                span: 24, formType: 'RADIO', name: 'B04_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method,
                jugde: [{ field: 'B04_urlType', value: ['A02'] }]
            },
            {
                span: 24, formType: 'INPUT', name: 'B04_url', label: '接口地址', rules: true,
                jugde: [{ field: 'B04_urlType', value: ['A02'] }]
            },
            {
                span: 24, formType: 'INPUT', name: 'B04_params', label: '额外参数',
                jugde: [{ field: 'B04_urlType', value: ['A02'] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'B04_isData', label: '是否使用主数据', rules: true, valueEnum: MappingData.IsEnabledBool,
                jugde: [{ field: 'B04_urlType', value: ['A02'] }]
            },
            {
                span: 24, formType: 'LIST', name: 'B04_dataArr', label: '额外主表数据',
                jugde: [{ field: 'B04_isData', value: [true] }, { field: 'B04_urlType', value: ['A02'] }], children: [
                    { span: 24, formType: 'INPUT', name: 'value', label: '使用字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'label', label: '映射名称', rules: true },
                ]
            },
            // 数据字段
            { span: 24, formType: 'INPUT', name: 'B04_field', label: '数据字段', rules: true },






        ]
    },

    // !!! B06 打开Excel
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_05', label: 'Excel参数',
        jugde: [{ field: 'type', value: ['B05'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B05_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'B05_url', label: '请求地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'B05_params', label: '额外参数' },
            { span: 24, formType: 'RADIO', name: 'B05_isMaster', label: '请求使用主数据', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'B05_field', label: '使用字段', jugde: [{ field: 'B05_isMaster', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'B05_mapping', label: '发送字段', jugde: [{ field: 'B05_isMaster', value: [true] }] },
            { span: 24, formType: 'RADIO', name: 'B05_isSave', label: '是否保存', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'RADIO', name: 'B05_saveMethod', label: '保存方式',
                valueEnum: MappingData.System__Method, jugde: [{ field: 'B05_isSave', value: [true] }]
            },
            { span: 24, formType: 'INPUT', name: 'B05_saveUrl', label: '保存地址', jugde: [{ field: 'B05_isSave', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'B05_saveParams', label: '额外参数', jugde: [{ field: 'B05_isSave', value: [true] }] },
            {
                span: 24, formType: 'RADIO', name: 'B05_saveMaster', label: '保存使用主数据', rules: true,
                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'B05_isSave', value: [true] }]
            },
            {
                span: 24, formType: 'INPUT', name: 'B05_saveField', label: '使用字段',
                jugde: [{ field: 'B05_isSave', value: [true] }, { field: 'B05_saveMaster', value: [true] }]
            },
            {
                span: 24, formType: 'INPUT', name: 'B05_saveMapping', label: '发送字段',
                jugde: [{ field: 'B05_isSave', value: [true] }, { field: 'B05_saveMaster', value: [true] }]
            },
        ]
    },

    // !!! B06 打开Table
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_06', label: 'Dev列表',
        jugde: [{ field: 'type', value: ['B06'] }],
        children: [
            { span: 24, formType: 'NUMBER', name: 'B06_width', label: '窗体宽度' },
            { span: 24, formType: 'RADIO', name: 'B06_type', label: '表单类型', rules: true, valueEnum: MappingData.DevConfig__DevTemplateA02 },
            { span: 24, formType: 'RADIO', name: 'B06_FilterRowVisible', label: '行内搜索', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'RADIO', name: 'B06_alignment', label: '对齐方式', rules: true, valueEnum: MappingData.System__AlignmentLCR },
            { span: 24, formType: 'RADIO', name: 'B06_showBorders', label: '外边框', rules: true, valueEnum: MappingData.IsShowBool, },
            { span: 24, formType: 'RADIO', name: 'B06_showRowLines', label: '底边框', rules: true, valueEnum: MappingData.IsShowBool, },
            { span: 24, formType: 'RADIO', name: 'B06_showColumnLines', label: '竖边框', rules: true, valueEnum: MappingData.IsShowBool, },
            { span: 24, formType: 'RADIO', name: 'B06_rowAlternationEnabled', label: '斑马格', rules: true, valueEnum: MappingData.IsShowBool, },
            { span: 24, formType: 'RADIO', name: 'B06_method', label: '获取方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'B06_url', label: '获取地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'B06_params', label: '额外参数' },
            { span: 24, formType: 'RADIO', name: 'B06_master', label: '是否使用主数据', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'B06_field', label: '使用字段', jugde: [{ field: 'B06_master', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'B06_send', label: '发送字段', jugde: [{ field: 'B06_master', value: [true] }] },
            {
                span: 24, formType: 'LIST', name: 'B06_list', label: '显示字段',
                children: [
                    { span: 24, formType: 'INPUT', name: 'dataField', label: '字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'caption', label: '映射名称', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'width', label: '字段宽度', rules: true },
                ]
            }
        ]
    },
    // !!! 08 执行接口
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_08', label: '接口配置',
        jugde: [{ field: 'type', value: ['B08'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B08_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'B08_url', label: '接口地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'B08_params', label: '额外参数' },
            { span: 24, formType: 'RADIO', name: 'B08_isData', label: '是否使用主数据', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'LIST', name: 'B08_dataArr', label: '额外主表数据', jugde: [{ field: 'B08_isData', value: [true] }],
                children: [
                    { span: 24, formType: 'INPUT', name: 'dataKey', label: '使用字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'dataMap', label: '映射名称', rules: true },
                ]
            },
            {
                span: 24, formType: 'LIST', name: 'B08_sendData', label: '发送数据',
                children: [
                    { span: 24, formType: 'INPUT', name: 'key', label: '发送字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'value', label: '发送值', rules: true },
                ]
            },
            { span: 24, formType: 'RADIO', name: 'B08_isModel', label: '是否弹窗', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'NUMBER', name: 'B08_modelWidth', label: '弹窗宽度', jugde: [{ field: 'B08_isModel', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'B08_modelHeight', label: '弹窗高度', jugde: [{ field: 'B08_isModel', value: [true] }] },
            {
                span: 24, formType: 'SELECT', name: 'B08_modelType', label: '弹窗类型', rules: true,
                valueEnum: MappingData.Style__AntdResult, jugde: [{ field: 'B08_isModel', value: [true] }]
            },
            { span: 24, formType: 'INPUT', name: 'B08_modelTitle', label: '弹窗提示', jugde: [{ field: 'B08_isModel', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'B08_modelSmall', label: '弹窗提示', jugde: [{ field: 'B08_isModel', value: [true] }] },
        ]
    },
    // !!! 09 穿梭框
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_09_04', label: '保存方式',
        jugde: [{ field: 'type', value: ['B09'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B09_saveMethod', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'B09_saveUrl', label: '保接口地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'B09_saveParams', label: '额外参数' },
            { span: 24, formType: 'INPUT', name: 'B09_saveSelect', label: '选中键名', rules: true },
            { span: 24, formType: 'RADIO', name: 'B09_saveUuid', label: '当前行Uuid', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'B09_saveMapping', label: '映射键名', jugde: [{ field: 'B09_saveUuid', value: [true] }], },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_09_02', label: '可选数据',
        jugde: [{ field: 'type', value: ['B09'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B09_leftMethod', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'B09_leftUrl', label: '接口地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'B09_leftParams', label: '额外参数' },
            { span: 24, formType: 'RADIO', name: 'B09_leftUuid', label: '当前行Uuid', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'B09_leftMapping', label: '映射键名', jugde: [{ field: 'B09_leftUuid', value: [true] }] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_09_03', label: '已选数据',
        jugde: [{ field: 'type', value: ['B09'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B09_rightMethod', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'B09_rightUrl', label: '接口地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'B09_rightParams', label: '额外参数' },
            { span: 24, formType: 'RADIO', name: 'B09_rightUuid', label: '当前行Uuid', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'B09_rightMapping', label: '映射键名', jugde: [{ field: 'B09_rightUuid', value: [true] }] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_09_01', label: '渲染方式',
        jugde: [{ field: 'type', value: ['B09'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B09_render', label: '渲染方式', rules: true, valueEnum: MappingData.System__TransferType },
            { span: 24, formType: 'RADIO', name: 'B09_seeStatus', label: '查看详情', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'RADIO', name: 'B09_orgData', label: '机构参数', rules: true, valueEnum: MappingData.Form__TransferOrgSelect },
            {
                span: 24, formType: 'INPUT', name: 'B09_orgSend', label: '发送参数', rules: true, tooltip: '点击内部树发送的参数',
                jugde: [{ field: 'B09_orgData', value: ['inside'] }],
            },
            {
                span: 24, formType: 'RADIO', name: 'B09_orgMethod', label: '请求方式', rules: true,
                valueEnum: MappingData.System__Method, jugde: [{ field: 'B09_orgData', value: ['inside'] }],
            },
            { span: 24, formType: 'INPUT', name: 'B09_orgUrl', label: '接口地址', rules: true, jugde: [{ field: 'B09_orgData', value: ['inside'] }] },
            { span: 24, formType: 'INPUT', name: 'B09_orgParams', label: '额外参数', jugde: [{ field: 'B09_orgData', value: ['inside'] }] },

            { span: 24, formType: 'RADIO', name: 'B09_orgKeyValue', label: '字段映射', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'B09_orgKey', label: '映射键', jugde: [{ field: 'B09_orgKeyValue', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'B09_orgValue', label: '映射值', jugde: [{ field: 'B09_orgKeyValue', value: [true] }] },
            {
                span: 24, formType: 'LIST', name: 'B09_tableArr', label: '分组测试',
                jugde: [{ field: 'B09_render', value: ['table'] }],
                children: [
                    { span: 24, formType: 'INPUT', name: 'dataIndex', label: '字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'title', label: '映射名称', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'width', label: '字段宽度', rules: true },
                ]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_09_05', label: '查看详情',
        jugde: [{ field: 'type', value: ['B09'] }, { field: 'B09_seeStatus', value: [true] }],
        children: [
            { span: 24, formType: 'INPUT', name: 'B09_seeTitle', label: '按钮名称', rules: true },
            { span: 24, formType: 'NUMBER', name: 'B06_width', label: '窗体宽度' },
            { span: 24, formType: 'RADIO', name: 'B06_type', label: '表单类型', rules: true, valueEnum: MappingData.DevConfig__DevTemplateA02 },
            { span: 24, formType: 'RADIO', name: 'B06_FilterRowVisible', label: '行内搜索', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'RADIO', name: 'B06_alignment', label: '对齐方式', rules: true, valueEnum: MappingData.System__AlignmentLCR },
            { span: 24, formType: 'RADIO', name: 'B06_showBorders', label: '外边框', rules: true, valueEnum: MappingData.IsShowBool, },
            { span: 24, formType: 'RADIO', name: 'B06_showRowLines', label: '底边框', rules: true, valueEnum: MappingData.IsShowBool, },
            { span: 24, formType: 'RADIO', name: 'B06_showColumnLines', label: '竖边框', rules: true, valueEnum: MappingData.IsShowBool, },
            { span: 24, formType: 'RADIO', name: 'B06_rowAlternationEnabled', label: '斑马格', rules: true, valueEnum: MappingData.IsShowBool, },
            { span: 24, formType: 'RADIO', name: 'B06_method', label: '获取方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'B06_url', label: '获取地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'B06_params', label: '额外参数' },
            { span: 24, formType: 'RADIO', name: 'B06_master', label: '是否使用主数据', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'B06_field', label: '使用字段', jugde: [{ field: 'B06_master', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'B06_send', label: '发送字段', jugde: [{ field: 'B06_master', value: [true] }] },
            {
                span: 24, formType: 'LIST', name: 'B06_list', label: '显示字段',
                children: [
                    { span: 24, formType: 'INPUT', name: 'dataField', label: '字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'caption', label: '映射名称', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'width', label: '字段宽度', rules: true },
                ]
            }
        ]
    },
    // !!! 11 站内路由
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_11', label: '站内路由',
        jugde: [{ field: 'type', value: ['B11'] }],
        children: [
            { span: 24, formType: 'INPUT', name: 'B11_url', label: '菜单路由', rules: true },
            { span: 24, formType: 'SELECT', name: 'B11_type', label: '页面类型', rules: true, valueEnum: MappingData.System__MenuType },
            { span: 24, formType: 'RADIO', name: 'B11_isData', label: '是否使用主数据', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'B11_dataKey', label: '使用字段', rules: true, jugde: [{ field: 'B11_isData', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'B11_Title', label: '菜单标题', rules: true },
            { span: 24, formType: 'INPUT', name: 'B11_fieldTitle', label: '标题字段' },
            { span: 24, formType: 'TempICON', name: 'B11_Icon', label: '页面图标' },
        ]
    },
    // !!! 12 数据审核
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_12', label: '数据审核',
        jugde: [{ field: 'type', value: ['B12'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B08_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'B08_url', label: '接口地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'B08_params', label: '额外参数' },
            { span: 24, formType: 'NUMBER', name: 'B08_modelWidth', label: '弹窗宽度' },
            { span: 24, formType: 'NUMBER', name: 'B08_modelHeight', label: '弹窗高度' },
        ],
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_12_01', label: '主表数据',
        jugde: [{ field: 'type', value: ['B12'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B08_isData', label: '是否使用主数据', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'LIST', name: 'B08_dataArr', label: '额外主表数据', jugde: [{ field: 'B08_isData', value: [true] }],
                children: [
                    { span: 24, formType: 'INPUT', name: 'dataKey', label: '使用字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'dataMap', label: '映射名称', rules: true },
                ]
            },
        ]
    },
    {
        span: 12, formType: 'LIST', name: 'B12Options_list', label: '操作数据',
        jugde: [{ field: 'type', value: ['B12'] }],
        children: [
            { span: 24, formType: 'INPUT', name: 'dataField', label: '字段', rules: true },
            { span: 24, formType: 'INPUT', name: 'caption', label: '映射', rules: true },
            { span: 24, formType: 'SELECT', name: 'valueType', label: '数据类型', rules: true, valueEnum: MappingData.Form__TypeList },
            // 映射设置
            {
                span: 24, formType: 'RADIO', name: 'mappingType', label: '映射类型', rules: true, tooltip: '将字符映射为中文',
                valueEnum: MappingData.System__MapType, jugde: [{ field: 'valueType', value: FlowMenuAPIFieldJugdeValue }]
            },
            {
                span: 24, formType: 'SELECT', name: 'mappingData', label: '数据映射', rules: true, tooltip: '将字符映射为中文',
                valueEnum: MappingData.System__MappingEnum, jugde: [{ field: 'mappingType', value: ['DataMapping'] }]
            },
            { span: 24, formType: 'INPUT', name: 'mappingApi', label: '数据接口', rules: true, jugde: [{ field: 'mappingType', value: ['ApiMapping'] }] },
            { span: 24, formType: 'INPUT', name: 'mappingPar', label: '数据参数', jugde: [{ field: 'mappingType', value: ['ApiMapping'] }] },
            { span: 24, formType: 'INPUT', name: 'mappingParExtra', label: '额外渲染', jugde: [{ field: 'mappingType', value: ['ApiMapping'] }] },
            {
                span: 24, formType: 'RADIO', name: 'mappingJudge', label: '是否判断', tooltip: '根据isEnabled判断是否渲染',
                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'mappingType', value: ['ApiMapping'] }]
            },
            {
                span: 24, formType: 'INPUT', name: 'mappingValue', label: '映射键', rules: true,
                jugde: [{ field: 'valueType', value: FlowMenuAPIFieldJugdeValue }, { field: 'mappingType', value: ['DataMapping', 'ApiMapping'] }]
            },
            {
                span: 24, formType: 'INPUT', name: 'mappingLable', label: '映射值', rules: true,
                jugde: [{ field: 'valueType', value: FlowMenuAPIFieldJugdeValue }, { field: 'mappingType', value: ['DataMapping', 'ApiMapping'] }]
            },
            { span: 24, formType: 'RADIO', name: 'tooltipStatus', label: '提示信息', rules: true, tooltip: '新增修改时提示信息', valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'tooltip', label: '提示内容', rules: true, jugde: [{ field: 'tooltipStatus', value: [true] }] },
            { span: 24, formType: 'RADIO', name: 'rules', label: '是否必选', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'RADIO', name: 'judge', label: '是否启用', rules: true, tooltip: '根据数据中某一字段的值判断渲染',
                valueEnum: MappingData.IsEnabledBool
            },
            {
                span: 24, formType: 'LIST', name: 'judgeData', label: '操作数据', jugde: [{ field: 'judge', value: [true] }],
                children: [
                    { span: 24, formType: 'INPUT', name: 'field', label: '判断字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'value', label: '字段值', rules: true },
                ]
            }
        ]
    },

    // !!! 14 数据详情
    {
        span: 12, formType: 'LIST', name: 'AddTopOptionsFormList_14', label: '数据详情',
        jugde: [{ field: 'type', value: ['B14'] }],
        children: [
            { span: 8, formType: 'INPUT', name: 'B14_value', label: '字段', rules: true },
            { span: 8, formType: 'INPUT', name: 'B14_label', label: '标题', rules: true },
            { span: 8, formType: 'RADIO', name: 'B14_type', label: '类型', rules: true, valueEnum: MappingData.System__RowB15Type },
        ]
    },

    // !!! 17 步骤条
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_17_01', label: '数据来源',
        jugde: [{ field: 'type', value: ['B17'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'B17_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'B17_url', label: '接口地址', rules: true },
            { span: 24, formType: 'INPUT', name: 'B17_params', label: '额外参数' },
            { span: 24, formType: 'RADIO', name: 'B17_isData', label: '是否使用主数据', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'LIST', name: 'B17_dataArr', label: '额外主表数据', jugde: [{ field: 'B17_isData', value: [true] }],
                children: [
                    { span: 24, formType: 'INPUT', name: 'value', label: '使用字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'label', label: '映射名称', rules: true },
                ]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_17_02', label: '状态判定',
        jugde: [{ field: 'type', value: ['B17'] }],
        children: [
            { span: 24, formType: 'INPUT', name: 'B17_status', label: '状态字段', rules: true },
            {
                span: 24, formType: 'LIST', name: 'B17_statusArr', label: '状态参数',
                children: [
                    { span: 24, formType: 'INPUT', name: 'value', label: '状态值', rules: true },
                    { span: 24, formType: 'INPUT', name: 'label', label: '状态名称', rules: true },
                    { span: 24, formType: 'COLOR', name: 'color', label: '对应色', rules: true },
                ]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_17_03', label: '渲染字段',
        jugde: [{ field: 'type', value: ['B17'] }],
        children: [
            {
                span: 24, formType: 'LIST', name: 'B17_render', label: '渲染字段',
                children: [
                    { span: 24, formType: 'INPUT', name: 'value', label: '使用字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'label', label: '映射名称', rules: true },
                ]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_17_04', label: '标题样式',
        jugde: [{ field: 'type', value: ['B17'] }],
        children: [
            { span: 24, formType: 'COLOR', name: 'B17_titleColor', label: '标题颜色', rules: true },
            { span: 24, formType: 'NUMBER', name: 'B17_titleDeg', label: '颜色角度', rules: true },
            { span: 24, formType: 'NUMBER', name: 'B17_titleSize', label: '标题字号', rules: true },
            { span: 24, formType: 'SELECT', name: 'B17_titleFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family, },
            { span: 24, formType: 'RADIO', name: 'B17_titleWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 24, formType: 'RADIO', name: 'B17_titleStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 24, formType: 'NUMBER', name: 'B17_titleShadowX', label: '阴影X轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'B17_titleShadowY', label: '阴影Y轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'B17_titleShadowS', label: '阴影尺寸', rules: true },
            { span: 24, formType: 'COLOR', name: 'B17_titleShadowC', label: '阴影颜色', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_17_05', label: '数值样式',
        jugde: [{ field: 'type', value: ['B17'] }],
        children: [
            { span: 24, formType: 'COLOR', name: 'B17_textColor', label: '数值颜色', rules: true },
            { span: 24, formType: 'NUMBER', name: 'B17_textDeg', label: '颜色角度', rules: true },
            { span: 24, formType: 'NUMBER', name: 'B17_textSize', label: '数值字号', rules: true },
            { span: 24, formType: 'SELECT', name: 'B17_textFamily', label: '数值字体', rules: true, valueEnum: MappingData.Font__Family, },
            { span: 24, formType: 'RADIO', name: 'B17_textWeight', label: '数值加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 24, formType: 'RADIO', name: 'B17_textStyle', label: '数值倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 24, formType: 'NUMBER', name: 'B17_textShadowX', label: '阴影X轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'B17_textShadowY', label: '阴影Y轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'B17_textShadowS', label: '阴影尺寸', rules: true },
            { span: 24, formType: 'COLOR', name: 'B17_textShadowC', label: '阴影颜色', rules: true },
        ]
    },
    // !!! 20 图片轮播
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_20_01', label: '轮播设置',
        jugde: [{ field: 'type', value: ['B20'] }], children: [
            { span: 24, formType: 'INPUT', name: 'B20_field', label: '图片字段', rules: true },
            { span: 24, formType: 'RADIO', name: 'B20_autoPlay', label: '自动播放', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'NUMBER', name: 'B20_delay', label: '切换间隔', rules: true, tooltip: '毫秒', jugde: [{ field: 'B20_autoPlay', value: [true] }] },
            { span: 24, formType: 'RADIO', name: 'B20_direction', label: '切换方向', rules: true, valueEnum: MappingData.Charts__VChartsDirectionA01 },
            { span: 24, formType: 'NUMBER', name: 'B20_speed', label: '切换速度', rules: true, tooltip: '毫秒' },

        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_20_02', label: '分页器设置',
        jugde: [{ field: 'type', value: ['B20'] }], children: [
            { span: 24, formType: 'RADIO', name: 'B20_show', label: '显示方式', rules: true, valueEnum: MappingData.Swiper__SwiperShowType },
            { span: 24, formType: 'NUMBER', name: 'B20_row', label: '显示行数', rules: true, jugde: [{ field: 'B20_show', value: ['A02'] }] },
            { span: 24, formType: 'NUMBER', name: 'B20_col', label: '每行列数', rules: true, jugde: [{ field: 'B20_show', value: ['A02'] }] },
            {
                span: 24, formType: 'RADIO', name: 'B20_fill', label: '排列方式', rules: true,
                valueEnum: MappingData.DevConfig__DataFieldArea, jugde: [{ field: 'B20_show', value: ['A02'] }]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_20_03', label: '分页器设置',
        jugde: [{ field: 'type', value: ['B20'] }], children: [
            { span: 24, formType: 'RADIO', name: 'B20_isPagin', label: '分页器', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'RADIO', name: 'B20_paginType', label: '分页器类型', rules: true,
                valueEnum: MappingData.Swiper__SwiperPaginationType, jugde: [{ field: 'B20_isPagin', value: [true] }],
            },
            {
                span: 24, formType: 'RADIO', name: 'B20_progressbar', label: '进度条方向', rules: true, valueEnum: MappingData.mars3d__orientation,
                jugde: [{ field: 'B20_isPagin', value: [true] }, { field: 'B20_paginType', value: ['progressbar'] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'B20_bullets', label: '自动隐藏', rules: true, valueEnum: MappingData.IsEnabledBool,
                jugde: [{ field: 'B20_isPagin', value: [true] }, { field: 'B20_paginType', value: ['bullets'] }]
            },
            {
                span: 24, formType: 'NUMBER', name: 'B20_bulletsNumber', label: '主点数量', rules: true,
                jugde: [{ field: 'B20_isPagin', value: [true] }, { field: 'B20_paginType', value: ['bullets'] }]
            },
        ]
    },
    // !!! 各项目独立组件
    {
        span: 12, formType: 'GROUP', name: 'AddTopOptionsFormList_1607_01', label: 'AI合同分析',
        jugde: [{ field: 'type', value: ['B1607'] }], children: [
            { span: 24, formType: 'RADIO', name: 'B1067_type', label: '分析类型', rules: true, valueEnum: MappingData.System_gjContractAIType },
            { span: 24, formType: 'INPUT', name: 'B1067_url', label: '文件字段', rules: true },
            { span: 24, formType: 'INPUT', name: 'B1067_sse', label: 'SSE域名', rules: true },
        ],
    },
]

// ***  添加表单分组
const AddRenderFormFormList = [
    { formType: 'HIDDEN', name: 'uuid' },
    { formType: 'HIDDEN', name: 'code' },
    { span: 24, formType: 'INPUT', name: 'label', label: '分组名称', rules: true },
    { span: 24, formType: 'NUMBER', name: 'span', label: '分组宽度', rules: true },
    { span: 24, formType: 'RADIO', name: 'collapsible', label: '是否启用折叠', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 24, formType: 'RADIO', name: 'defaultCollapsed', label: '默认折叠', rules: true, valueEnum: MappingData.IsEnabledBool },
]

// *** 配置Dev模板信息
const SetDEVTemplateConfig = [
    { formType: 'HIDDEN', name: 'uuid' },
    { span: 24, formType: 'RADIO', name: 'devTemplate', label: 'Dev模板', rules: true, valueEnum: MappingData.DevConfig__DevTemplate },
    {
        span: 24, formType: 'GROUP', name: 'DevExtremeDataGrid', label: '数据模板', collapsible: true,
        jugde: [{ field: 'devTemplate', value: ['DevExtremeDataGrid'] }],
        children: [
            { span: 24, formType: 'RADIO', name: 'focusedRowEnabled', label: '聚焦选中', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'GROUP', name: 'DataGrid_column', label: '列宽设置 ', collapsible: true,
                children: [

                    { span: 24, formType: 'RADIO', name: 'showColumnHeaders', label: '列标题', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 24, formType: 'RADIO', name: 'columnFixingEnabled', label: '固定列宽', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'allowColumnResizing', label: '调整列宽', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'RADIO', name: 'columnResizingMode', label: '列宽属性', rules: true, valueEnum: MappingData.DevConfig__ColumnResizing,
                        jugde: [{ field: 'allowColumnResizing', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'DataGrid_border', label: '边框设置', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'showBorders', label: '外边框', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 24, formType: 'RADIO', name: 'showRowLines', label: '底边框', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 24, formType: 'RADIO', name: 'showColumnLines', label: '竖边框', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 24, formType: 'RADIO', name: 'rowAlternationEnabled', label: '斑马格', rules: true, valueEnum: MappingData.IsShowBool },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'DataGrid_label', label: '选择设置', collapsible: true,
                children: [
                    {
                        span: 24, formType: 'RADIO', name: 'SelectionMode', label: '选择方式', rules: true,
                        valueEnum: MappingData.DevConfig__SelectionMode
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SelectionShowCheckBoxesMode', label: '选择方式', rules: true,
                        valueEnum: MappingData.DevConfig__SelectionShowCheckBoxesMode,
                        jugde: [{ field: 'SelectionMode', value: ['multiple'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SelectionAllowSelectAll', label: '全选操作', rules: true,
                        valueEnum: MappingData.IsShowBool,
                        jugde: [{ field: 'SelectionMode', value: ['multiple'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SelectionSelectAllMode', label: '全选方式', rules: true,
                        valueEnum: MappingData.DevConfig__SelectionSelectAllMode,
                        jugde: [{ field: 'SelectionMode', value: ['multiple'] }, { field: 'SelectionAllowSelectAll', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'DataGrid_HeaderFilter', label: '过滤器', collapsible: true,
                children: [
                    {
                        span: 24, formType: 'RADIO', name: 'HeaderFilterVisible', label: '是否启用', rules: true,
                        valueEnum: MappingData.IsEnabledBool
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'HeaderFilterAllowSelectAll', label: '全选按钮', rules: true,
                        valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'HeaderFilterVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'HeaderFilterEnabled', label: '搜索窗口', rules: true,
                        valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'HeaderFilterVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'HeaderFilterWidth', label: '整体宽度', rules: true,
                        jugde: [{ field: 'HeaderFilterVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'HeaderFilterHeight', label: '整体高度', rules: true,
                        jugde: [{ field: 'HeaderFilterVisible', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'DataGrid_SearchPanel', label: '头部搜索', collapsible: true,
                children: [
                    {
                        span: 24, formType: 'RADIO', name: 'SearchPanelVisible', label: '是否启用', rules: true,
                        valueEnum: MappingData.IsEnabledBool
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SearchPanelHighlightCaseSensitive', label: '区分大小写', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'SearchPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SearchPanelHighlightSearchText', label: '结果染色', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'SearchPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SearchPanelSearchVisibleColumnsOnly', label: '搜索所有列', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'SearchPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'SearchPanelWidth', label: '框体宽度', rules: true,
                        jugde: [{ field: 'SearchPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'INPUT', name: 'SearchPanelText', label: '默认搜索值',
                        jugde: [{ field: 'SearchPanelVisible', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'DataGrid_FilterRow', label: '行内搜索', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'FilterRowVisible', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'RADIO', name: 'FilterRowApplyFilter', label: '触发方式', rules: true,
                        valueEnum: MappingData.DevConfig__FilterRowApplyFilter, jugde: [{ field: 'FilterRowVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'INPUT', name: 'FilterRowApplyFilterText', label: '按钮提示', rules: true,
                        jugde: [{ field: 'FilterRowVisible', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'DataGrid_columnChooser', label: '列选择器', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'columnChooserEnabled', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'NUMBER', name: 'columnChooserWidth', label: '选择器宽度', rules: true,
                        jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'columnChooserHeight', label: '选择器高度', rules: true,
                        jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'columnChooserMode', label: '选择方式', rules: true,
                        valueEnum: MappingData.DevConfig__ColumnChooserMode, jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'columnChooserSearch', label: '字段搜索', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'ColumnChooserAllowSelectAll', label: '全选选项', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'ColumnChooserSelectByClick', label: '列互动', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'ColumnChooserRecursive', label: '递归查询', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'DataGrid_GroupPanel', label: '分组面板', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'GroupPanelVisible', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'RADIO', name: 'GroupPanelAutoExpandAll', label: '默认展开', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'GroupPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'GroupPanelAllowColumnDragging', label: '拖动分组', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'GroupPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'INPUT', name: 'GroupPanelEmptyPanelText', label: '面板文字', rules: true,
                        jugde: [{ field: 'GroupPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'GroupingAllowCollapsing', label: '能否折叠', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'GroupPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'GroupingAutoExpandAll', label: '默认展开', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'GroupPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'GroupingContextMenuEnabled', label: '右键取消', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'GroupPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'GroupingExpandMode', label: '展开方式', rules: true,
                        valueEnum: MappingData.DevConfig__GroupingExpandMode, jugde: [{ field: 'GroupPanelVisible', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'DataGrid_Sorting', label: '排序设置', collapsible: true,
                children: [
                    {
                        span: 24, formType: 'RADIO', name: 'Sortingmode', label: '排序设置', rules: true,
                        valueEnum: MappingData.DevConfig__SortingMode,
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SortingshowSortIndexes', label: '序号文字', rules: true,
                        valueEnum: MappingData.IsShowBool,
                        jugde: [{ field: 'Sortingmode', value: ['multiple'] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'DataGrid_Export', label: '导出设置', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'ExportEnabled', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'RADIO', name: 'ExportAllowExportSelectedData', label: '全部导出', rules: true,
                        valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'ExportEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'SELECTM', name: 'ExportFormats', label: '导出类型', rules: true,
                        valueEnum: MappingData.DevConfig__ExportFormats,
                        jugde: [{ field: 'ExportEnabled', value: [true] }]
                    },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'DevExtremeTreeGrid', label: '树形模板', collapsible: true,
        jugde: [{ field: 'devTemplate', value: ['DevExtremeTreeGrid'] }],
        children: [
            { span: 12, formType: 'RADIO', name: 'focusedRowEnabled', label: '聚焦选中', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'RADIO', name: 'autoExpandAll', label: '全部展开', rules: true, valueEnum: MappingData.IsOpenBool },
            {
                span: 12, formType: 'GROUP', name: 'TreeGrid_column', label: '列宽设置 ', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'showColumnHeaders', label: '列标题', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 24, formType: 'RADIO', name: 'columnFixingEnabled', label: '固定列宽', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'allowColumnResizing', label: '调整列宽', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'RADIO', name: 'columnResizingMode', label: '列宽属性', rules: true, valueEnum: MappingData.DevConfig__ColumnResizing,
                        jugde: [{ field: 'allowColumnResizing', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'TreeGrid_border', label: '边框设置', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'showBorders', label: '外边框', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 24, formType: 'RADIO', name: 'showRowLines', label: '底边框', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 24, formType: 'RADIO', name: 'showColumnLines', label: '竖边框', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 24, formType: 'RADIO', name: 'rowAlternationEnabled', label: '斑马格', rules: true, valueEnum: MappingData.IsShowBool },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'TreeGrid_label', label: '选择设置', collapsible: true,
                children: [
                    {
                        span: 24, formType: 'RADIO', name: 'SelectionMode', label: '选择方式', rules: true,
                        valueEnum: MappingData.DevConfig__SelectionMode
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SelectionShowCheckBoxesMode', label: '选择方式', rules: true,
                        valueEnum: MappingData.DevConfig__SelectionShowCheckBoxesMode,
                        jugde: [{ field: 'SelectionMode', value: ['multiple'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SelectionAllowSelectAll', label: '全选操作', rules: true,
                        valueEnum: MappingData.IsShowBool,
                        jugde: [{ field: 'SelectionMode', value: ['multiple'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SelectionSelectAllMode', label: '全选方式', rules: true,
                        valueEnum: MappingData.DevConfig__SelectionSelectAllMode,
                        jugde: [{ field: 'SelectionMode', value: ['multiple'] }, { field: 'SelectionAllowSelectAll', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'TreeGrid_HeaderFilter', label: '过滤器', collapsible: true,
                children: [
                    {
                        span: 24, formType: 'RADIO', name: 'HeaderFilterVisible', label: '是否启用', rules: true,
                        valueEnum: MappingData.IsEnabledBool
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'HeaderFilterAllowSelectAll', label: '全选按钮', rules: true,
                        valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'HeaderFilterVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'HeaderFilterEnabled', label: '搜索窗口', rules: true,
                        valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'HeaderFilterVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'HeaderFilterWidth', label: '整体宽度', rules: true,
                        jugde: [{ field: 'HeaderFilterVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'HeaderFilterHeight', label: '整体高度', rules: true,
                        jugde: [{ field: 'HeaderFilterVisible', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'TreeGrid_SearchPanel', label: '头部搜索', collapsible: true,
                children: [
                    {
                        span: 24, formType: 'RADIO', name: 'SearchPanelVisible', label: '是否启用', rules: true,
                        valueEnum: MappingData.IsEnabledBool
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SearchPanelHighlightCaseSensitive', label: '区分大小写', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'SearchPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SearchPanelHighlightSearchText', label: '结果染色', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'SearchPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SearchPanelSearchVisibleColumnsOnly', label: '搜索所有列', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'SearchPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'SearchPanelWidth', label: '框体宽度', rules: true,
                        jugde: [{ field: 'SearchPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'INPUT', name: 'SearchPanelText', label: '默认搜索值',
                        jugde: [{ field: 'SearchPanelVisible', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'TreeGrid_FilterRow', label: '行内搜索', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'FilterRowVisible', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'RADIO', name: 'FilterRowApplyFilter', label: '触发方式', rules: true,
                        valueEnum: MappingData.DevConfig__FilterRowApplyFilter, jugde: [{ field: 'FilterRowVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'INPUT', name: 'FilterRowApplyFilterText', label: '按钮提示', rules: true,
                        jugde: [{ field: 'FilterRowVisible', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'TreeGrid_Sorting', label: '排序设置', collapsible: true,
                children: [
                    {
                        span: 24, formType: 'RADIO', name: 'Sortingmode', label: '排序设置', rules: true,
                        valueEnum: MappingData.DevConfig__SortingMode,
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'SortingshowSortIndexes', label: '序号文字', rules: true,
                        valueEnum: MappingData.IsShowBool,
                        jugde: [{ field: 'Sortingmode', value: ['multiple'] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'TreeGrid_columnChooser', label: '列选择器', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'columnChooserEnabled', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'NUMBER', name: 'columnChooserWidth', label: '选择器宽度', rules: true,
                        jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'columnChooserHeight', label: '选择器高度', rules: true,
                        jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'columnChooserMode', label: '选择方式', rules: true,
                        valueEnum: MappingData.DevConfig__ColumnChooserMode, jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'columnChooserSearch', label: '字段搜索', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'ColumnChooserAllowSelectAll', label: '全选选项', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'ColumnChooserSelectByClick', label: '列互动', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'ColumnChooserRecursive', label: '递归查询', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'columnChooserEnabled', value: [true] }]
                    },
                ]
            }
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'DevExtremeCardGrid', label: '卡片模板(暂无)', collapsible: true,
        jugde: [{ field: 'devTemplate', value: ['DevExtremeCardGrid'] }],
        children: [

        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'DevExtremeOLAPGrid', label: '统计模板', collapsible: true,
        jugde: [{ field: 'devTemplate', value: ['DevExtremeOLAPGrid'] }],
        children: [
            {
                span: 12, formType: 'GROUP', name: 'OLAPGrid_base', label: '基础设置 ', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'allowSorting', label: '是否排序', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'allowSortingBySummary', label: '是否统计', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'allowFiltering', label: '筛选器', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'allowExpandAll', label: '全部展开', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'showBorders', label: '表格边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'export', label: '导出功能', rules: true, valueEnum: MappingData.IsEnabledBool }
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'OLAPGrid_Layout', label: '布局设置 ', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'rowHeaderLayout', label: '布局方式', rules: true, valueEnum: MappingData.DevConfig__RowHeaderLayout },
                    { span: 24, formType: 'RADIO', name: 'showTotalsPrior', label: '总计位置', rules: true, valueEnum: MappingData.DevConfig__ShowTotalsPrior },
                    { span: 24, formType: 'RADIO', name: 'dataFieldArea', label: '字段位置', rules: true, valueEnum: MappingData.DevConfig__DataFieldArea },
                    { span: 24, formType: 'RADIO', name: 'showColumnTotals', label: '行分组统计', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'showColumnGrandTotals', label: '行全部统计', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'showRowTotals', label: '行分组统计', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'showRowGrandTotals', label: '列全部统计', rules: true, valueEnum: MappingData.IsEnabledBool },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'OLAPGrid_fieldChooser', label: '中控开关 ', collapsible: true,
                children: [
                    {
                        span: 24, formType: 'RADIO', name: 'fieldChooserEnabled', label: '是否启用', rules: true,
                        valueEnum: MappingData.IsEnabledBool
                    },
                    {
                        span: 24, formType: 'INPUT', name: 'fieldChooserTitle', label: '面板标题', rules: true,
                        jugde: [{ field: 'fieldChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'fieldChooserLayout', label: '面板布局', rules: true,
                        valueEnum: MappingData.DevConfig__FieldChooserLayout,
                        jugde: [{ field: 'fieldChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'fieldChooserAllowSearch', label: '字段搜索', rules: true,
                        valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'fieldChooserEnabled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'fieldChooserApplyChangesMode', label: '应用模式', rules: true,
                        valueEnum: MappingData.DevConfig__FieldChooserApplyChangesMode,
                        jugde: [{ field: 'fieldChooserEnabled', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'OLAPGrid_fieldPanel', label: '字段面板 ', collapsible: true,
                children: [
                    {
                        span: 24, formType: 'RADIO', name: 'fieldPanelVisible', label: '是否启用', rules: true,
                        valueEnum: MappingData.IsEnabledBool
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'fieldPanelAllowFieldDragging', label: '拖动字段', rules: true,
                        valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'fieldPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'fieldPanelShowColumnFields', label: '列字段', rules: true,
                        valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'fieldPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'fieldPanelShowRowFields', label: '行字段', rules: true,
                        valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'fieldPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'fieldPanelShowDataFields', label: '数据字段', rules: true,
                        valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'fieldPanelVisible', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'fieldPanelShowFilterFields', label: '过滤字段', rules: true,
                        valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'fieldPanelVisible', value: [true] }]
                    },
                ]
            },
        ]
    },



]

// *** 配置Dev接口信息
const SetDEVGetDataConfig = [
    { formType: 'HIDDEN', name: 'uuid' },
    {
        span: 12, formType: 'GROUP', name: 'SetDEVGetDataConfig_api', label: '接口信息', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'apiUrl', label: '接口地址', rules: true, tooltip: '获取数据接口' },
            { span: 24, formType: 'INPUT', name: 'params', label: '额外参数', tooltip: '每次请求自动带入参数' },
            { span: 24, formType: 'RADIO', name: 'isMenuUuid', label: '是否使用菜单Uuid', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'uuidParams', label: '菜单Uuid参数名称', jugde: [{ field: 'isMenuUuid', value: [true] }] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetDEVGetDataConfig_pag', label: '分页设置', collapsible: true,
        children: [
            { span: 24, formType: 'NUMBER', name: 'pageSize', label: '默认页码', rules: true, tooltip: '每页默认获取条数' },
            { span: 24, formType: 'INPUT', name: 'pageOptions', label: '页码列表', rules: true, tooltip: '逗号分隔.只输入0不显示分页器!' },
            {
                span: 24, formType: 'RADIO', name: 'PaginationMode', label: '分页样式', rules: true, tooltip: '页码选择方式',
                valueEnum: MappingData.DevConfig__PaginationMode
            },
            {
                span: 24, formType: 'RADIO', name: 'PaginationShowInfo', label: '页面信息', rules: true, tooltip: '当前分页数和数据总数',
                valueEnum: MappingData.IsEnabledBool
            },
            {
                span: 24, formType: 'RADIO', name: 'PaginationShowNavigationButtons', label: '导航按钮', rules: true, tooltip: '上一页下一页按钮',
                valueEnum: MappingData.IsEnabledBool
            },
            {
                span: 24, formType: 'RADIO', name: 'PaginationShowPageSizeSelector', label: '条数选择器', rules: true, tooltip: '是否显示可选分页数',
                valueEnum: MappingData.IsEnabledBool
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetDEVGetDataConfig_org', label: '机构树', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'orgShow', label: '是否显示', rules: true, valueEnum: MappingData.IsShowBool },
            { span: 24, formType: 'RADIO', name: 'orgMethod', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 24, formType: 'INPUT', name: 'orgUrl', label: '接口地址', rules: true, tooltip: 'organization/GetOrganizationListDefault' },
            { span: 24, formType: 'INPUT', name: 'orgParams', label: '额外参数', tooltip: '每次请求自动带入参数' },

            { span: 24, formType: 'NUMBER', name: 'orgWidth', label: '默认宽度', rules: true, jugde: [{ field: 'orgShow', value: [true] }] },
            {
                span: 24, formType: 'RADIO', name: 'orgResize', label: '是否改变大小', rules: true, valueEnum: MappingData.IsShowBool,
                jugde: [{ field: 'orgShow', value: [true] }]
            }, {
                span: 24, formType: 'RADIO', name: 'orgColl', label: '是否折叠', rules: true, valueEnum: MappingData.IsShowBool,
                jugde: [{ field: 'orgShow', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'orgIsFold', label: '折叠按钮', rules: true, valueEnum: MappingData.IsShowBool,
                jugde: [{ field: 'orgShow', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'orgIsFoldStatus', label: '折叠状态', rules: true, valueEnum: MappingData.IsOpenBool,
                jugde: [{ field: 'orgIsFold', value: [true] }, { field: 'orgShow', value: [true] }],
            },
            {
                span: 24, formType: 'RADIO', name: 'orgIsSearch', label: '搜索窗口', rules: true,
                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'orgShow', value: [true] }]
            },
            {
                span: 24, formType: 'LIST', name: 'orgSearchArr', label: '搜索字段',
                jugde: [{ field: 'orgIsSearch', value: [true] }, { field: 'orgShow', value: [true] }],
                children: [
                    { span: 24, formType: 'INPUT', name: 'value', label: '字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'label', label: '映射', rules: true },
                    { span: 24, formType: 'SELECT', name: 'type', label: '类型', rules: true, valueEnum: MappingData.Form__SearchType },
                ]
            },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetDEVGetDataConfig_oth', label: '额外树', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'othShow', label: '是否显示', rules: true, valueEnum: MappingData.IsShowBool },
            {
                span: 24, formType: 'RADIO', name: 'othMethod', label: '请求方式', rules: true,
                valueEnum: MappingData.System__Method, jugde: [{ field: 'othShow', value: [true] }]
            },
            { span: 24, formType: 'INPUT', name: 'othUrl', label: '接口地址', rules: true, jugde: [{ field: 'othShow', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'othUuid', label: 'Uuid参数名', rules: true, jugde: [{ field: 'othShow', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'othParams', label: '额外参数', jugde: [{ field: 'othShow', value: [true] }] },
            {
                span: 24, formType: 'RADIO', name: 'othIsAdd', label: '参与新增', rules: true,
                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'othShow', value: [true] }]
            },
            {
                span: 24, formType: 'INPUT', name: 'addParams', label: '新增字段', rules: true,
                jugde: [{ field: 'othShow', value: [true] }, { field: 'othIsAdd', value: [true] }]
            },
            { span: 24, formType: 'NUMBER', name: 'othWidth', label: '默认宽度', rules: true, jugde: [{ field: 'othShow', value: [true] }] },
            {
                span: 24, formType: 'RADIO', name: 'othResize', label: '是否改变大小', rules: true, valueEnum: MappingData.IsShowBool,
                jugde: [{ field: 'othShow', value: [true] }]
            }, {
                span: 24, formType: 'RADIO', name: 'othColl', label: '是否折叠', rules: true, valueEnum: MappingData.IsShowBool,
                jugde: [{ field: 'othShow', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'othIsFold', label: '折叠按钮', rules: true, valueEnum: MappingData.IsShowBool,
                jugde: [{ field: 'othShow', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'othIsFoldStatus', label: '折叠状态', rules: true, valueEnum: MappingData.IsOpenBool,
                jugde: [{ field: 'othShow', value: [true] }, { field: 'othIsFold', value: [true] }],
            },
            {
                span: 24, formType: 'RADIO', name: 'othIsSearch', label: '搜索窗口', rules: true,
                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'othShow', value: [true] }]
            },
            {
                span: 24, formType: 'LIST', name: 'othSearchArr', label: '搜索字段',
                jugde: [{ field: 'othShow', value: [true] }, { field: 'othIsSearch', value: [true] }],
                children: [
                    { span: 24, formType: 'INPUT', name: 'value', label: '字段', rules: true },
                    { span: 24, formType: 'INPUT', name: 'label', label: '映射', rules: true },
                    { span: 24, formType: 'SELECT', name: 'type', label: '类型', rules: true, valueEnum: MappingData.Form__SearchType },
                ]
            },
        ]
    },
]

// *** 配置Dev样式信息
const SetDEVStyleConfig = [
    { formType: 'HIDDEN', name: 'uuid' },
    {
        span: 12, formType: 'GROUP', name: 'SetDEVStyleConfig_tre', label: '树形样式', collapsible: true,
        children: [
            { span: 24, formType: 'COLOR', name: 'tree_iconColor', label: '图标颜色', rules: true },
            { span: 24, formType: 'NUMBER', name: 'tree_iconSize', label: '图标尺寸', rules: true },
            { span: 24, formType: 'NUMBER', name: 'tree_iconShadowX', label: '阴影X轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'tree_iconShadowY', label: '阴影Y轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'tree_iconShadowS', label: '阴影尺寸', rules: true },
            { span: 24, formType: 'COLOR', name: 'tree_iconShadowB', label: '阴影颜色', rules: true },
            { span: 24, formType: 'COLOR', name: 'tree_fontColor', label: '标题颜色', rules: true },
            { span: 24, formType: 'NUMBER', name: 'tree_fontDeg', label: '标题角度', rules: true },
            { span: 24, formType: 'NUMBER', name: 'tree_fontSize', label: '标题字号', rules: true },
            { span: 24, formType: 'SELECT', name: 'tree_fontFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 24, formType: 'RADIO', name: 'tree_fontWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 24, formType: 'RADIO', name: 'tree_fontStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 24, formType: 'NUMBER', name: 'tree_fontShadowX', label: '阴影X轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'tree_fontShadowY', label: '阴影Y轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'tree_fontShadowS', label: '阴影尺寸', rules: true },
            { span: 24, formType: 'COLOR', name: 'tree_fontShadowC', label: '阴影颜色', rules: true },
            { span: 24, formType: 'COLOR', name: 'tree_activeBack', label: '选中背景', rules: true },
            { span: 24, formType: 'COLOR', name: 'tree_activeColor', label: '选中文字', rules: true },
            { span: 24, formType: 'NUMBER', name: 'tree_activeDeg', label: '选中角度', rules: true },
            { span: 24, formType: 'COLOR', name: 'tree_activeShadowC', label: '选中阴影', rules: true },
            { span: 24, formType: 'COLOR', name: 'tree_searchColor', label: '选中阴影', rules: true },
            { span: 24, formType: 'COLOR', name: 'tree_resetColor', label: '选中阴影', rules: true },
            { span: 24, formType: 'COLOR', name: 'tree_foldColor', label: '选中阴影', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetDEVStyleConfig_top', label: '头部样式', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'top_show', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'COLOR', name: 'top_Back', label: '背景颜色', rules: true },
            { span: 24, formType: 'SELECT', name: 'top_Shadow', label: '阴影等级', rules: true, valueEnum: MappingData.Style__BoxShadow },
            { span: 24, formType: 'INPUT', name: 'top_Padding', label: '内填充', rules: true },
            { span: 24, formType: 'INPUT', name: 'top_Margin', label: '外间距', rules: true },
            { span: 24, formType: 'NUMBER', name: 'top_itemMargin', label: '选项间距', rules: true },
            { span: 24, formType: 'SELECT', name: 'top_itemOrder', label: '显示方式', rules: true, valueEnum: MappingData.System__textIconOrder },
            { span: 24, formType: 'NUMBER', name: 'top_iconSize', label: '图标尺寸', rules: true },
            { span: 24, formType: 'NUMBER', name: 'top_iconShadowX', label: '阴影X轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'top_iconShadowY', label: '阴影Y轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'top_iconShadowS', label: '阴影尺寸', rules: true },
            { span: 24, formType: 'COLOR', name: 'top_iconShadowB', label: '阴影颜色', rules: true },
            { span: 24, formType: 'NUMBER', name: 'top_fontSize', label: '标题字号', rules: true },
            { span: 24, formType: 'SELECT', name: 'top_fontFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 24, formType: 'RADIO', name: 'top_fontWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 24, formType: 'RADIO', name: 'top_fontStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 24, formType: 'NUMBER', name: 'top_fontShadowX', label: '阴影X轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'top_fontShadowY', label: '阴影Y轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'top_fontShadowS', label: '阴影尺寸', rules: true },
            { span: 24, formType: 'COLOR', name: 'top_fontShadowB', label: '阴影颜色', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetDEVStyleConfig_row', label: '行内样式', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'row_show', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'row_caption', label: '标题', rules: true, jugde: [{ field: 'row_show', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'row_width', label: '宽度', rules: true, jugde: [{ field: 'row_show', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'row_minWidth', label: '最小宽度', rules: true, jugde: [{ field: 'row_show', value: [true] }] },
            {
                span: 24, formType: 'RADIO', name: 'row_fixed', label: '是否固定', rules: true,
                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'row_show', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'row_fixedPosition', label: '固定位置', rules: true,
                valueEnum: MappingData.System__FexedPosition, jugde: [{ field: 'row_show', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'row_allowResizing', label: '调整宽度', rules: true,
                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'row_show', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'row_allowReordering', label: '调整位置', rules: true,
                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'row_show', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'row_alignment', label: '对齐方式', rules: true,
                valueEnum: MappingData.System__AlignmentLCR, jugde: [{ field: 'row_show', value: [true] }]
            },
            { span: 24, formType: 'INPUT', name: 'row_itemMargin', label: '选项间距', rules: true, jugde: [{ field: 'row_show', value: [true] }] },
            {
                span: 24, formType: 'SELECT', name: 'row_icon', label: '显示图标',
                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'row_show', value: [true] }]
            },
            { span: 24, formType: 'NUMBER', name: 'row_fontSize', label: '标题字号', rules: true, jugde: [{ field: 'row_show', value: [true] }] },
            {
                span: 24, formType: 'SELECT', name: 'row_fontFamily', label: '标题字体',
                valueEnum: MappingData.Font__Family, jugde: [{ field: 'row_show', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'row_fontWeight', label: '标题加粗', rules: true,
                valueEnum: MappingData.Font__WeightInt, jugde: [{ field: 'row_show', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'row_fontStyle', label: '标题倾斜', rules: true,
                valueEnum: MappingData.Font__Style, jugde: [{ field: 'row_show', value: [true] }]
            },
            { span: 24, formType: 'NUMBER', name: 'row_fontShadowX', label: '阴影X轴', rules: true, jugde: [{ field: 'row_show', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'row_fontShadowY', label: '阴影Y轴', rules: true, jugde: [{ field: 'row_show', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'row_fontShadowS', label: '阴影尺寸', rules: true, jugde: [{ field: 'row_show', value: [true] }] },
            { span: 24, formType: 'COLOR', name: 'row_fontShadowC', label: '阴影颜色', rules: true, jugde: [{ field: 'row_show', value: [true] }] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetDEVStyleConfig_pop', label: '弹窗样式', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'pop_show', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'RADIO', name: 'pop_icon', label: '显示图标', rules: true,
                valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'pop_show', value: [true] }]
            },
            {
                span: 24, formType: 'NUMBER', name: 'pop_fontSize', label: '标题字号', rules: true,
                jugde: [{ field: 'pop_show', value: [true] }]
            },
            {
                span: 24, formType: 'SELECT', name: 'pop_fontFamily', label: '标题字体', rules: true,
                valueEnum: MappingData.Font__Family, jugde: [{ field: 'pop_show', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'pop_fontWeight', label: '标题加粗', rules: true,
                valueEnum: MappingData.Font__WeightInt, jugde: [{ field: 'pop_show', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'pop_fontStyle', label: '标题倾斜', rules: true,
                valueEnum: MappingData.Font__Style, jugde: [{ field: 'pop_show', value: [true] }]
            },
            {
                span: 24, formType: 'NUMBER', name: 'pop_fontShadowX', label: '阴影X轴', rules: true,
                jugde: [{ field: 'pop_show', value: [true] }]
            },
            {
                span: 24, formType: 'NUMBER', name: 'pop_fontShadowY', label: '阴影Y轴', rules: true,
                jugde: [{ field: 'pop_show', value: [true] }]
            },
            {
                span: 24, formType: 'NUMBER', name: 'pop_fontShadowS', label: '阴影尺寸', rules: true,
                jugde: [{ field: 'pop_show', value: [true] }]
            },
            {
                span: 24, formType: 'COLOR', name: 'pop_fontShadowC', label: '阴影颜色', rules: true,
                jugde: [{ field: 'pop_show', value: [true] }]
            },
        ]
    },
]

// *** 配置登录页面
const SetLoginPageConfig = [
    { span: 12, formType: 'RADIO', name: 'loginCode', label: '登录校验码', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 12, formType: 'RADIO', name: 'loginCodeType', label: '校验码类型', rules: true,
        jugde: [{ field: 'loginCode', value: [true] }], valueEnum: MappingData.System_loginCodeType
    },

    {
        span: 24, formType: 'GROUP', name: 'SetLoginPageConfig_Back', label: '背景层设置', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'backType', label: '背景类型', rules: true, valueEnum: MappingData.Theme__LoginBackType },
            { span: 12, formType: 'COLOR', name: 'backColor', label: '背景颜色', rules: true, jugde: [{ field: 'backType', value: ['A01'] }] },
            { span: 12, formType: 'NUMBER', name: 'backDeg', label: '背景角度', rules: true, jugde: [{ field: 'backType', value: ['A01'] }] },
            { span: 24, formType: 'INPUT', name: 'backImage', label: '图片地址', rules: true, jugde: [{ field: 'backType', value: ['A02'] }] },
            { span: 12, formType: 'NUMBER', name: 'backSpeed', label: '轮播速度', rules: true, jugde: [{ field: 'backType', value: ['A03'] }] },
            { span: 12, formType: 'NUMBER', name: 'backDelay', label: '轮换速度', rules: true, jugde: [{ field: 'backType', value: ['A03'] }] },
            { span: 24, formType: 'TEXTAREA', name: 'backSwiper', label: '图片地址', rules: true, jugde: [{ field: 'backType', value: ['A03'] }] },
            { span: 24, formType: 'INPUT', name: 'backVideo', label: '视频地址', rules: true, jugde: [{ field: 'backType', value: ['A04'] }] },
            { span: 12, formType: 'NUMBER', name: 'backStart', label: '开始时间', rules: true, jugde: [{ field: 'backType', value: ['A04'] }] },
            { span: 12, formType: 'NUMBER', name: 'backEnd', label: '结束时间', rules: true, jugde: [{ field: 'backType', value: ['A04'] }] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetLoginPageConfig_Top', label: '头部背景', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'topShow', label: '背景类型', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'topImage', label: '图片地址', rules: true, jugde: [{ field: 'topShow', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'topNumber', label: '顶部距离', rules: true, jugde: [{ field: 'topShow', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'topHeight', label: '背景角度', rules: true, jugde: [{ field: 'topShow', value: [true] }] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetLoginPageConfig_Btm', label: '底部背景', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'btmShow', label: '背景类型', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'btmImage', label: '图片地址', rules: true, jugde: [{ field: 'btmShow', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'btmNumber', label: '底部距离', rules: true, jugde: [{ field: 'btmShow', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'btmHeight', label: '背景角度', rules: true, jugde: [{ field: 'btmShow', value: [true] }] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'SetLoginPageConfig_Flex', label: '布局方式', collapsible: true,
        children: [
            { span: 12, formType: 'SELECT', name: 'flex_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
            { span: 12, formType: 'SELECT', name: 'flex_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
            { span: 12, formType: 'SELECT', name: 'flex_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
            { span: 12, formType: 'SELECT', name: 'flex_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
            { span: 12, formType: 'SELECT', name: 'flex_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetLoginPageConfig_Title', label: '主标题', collapsible: true,
        children: [
            { span: 24, formType: 'INPUT', name: 'title', label: '标题内容', rules: true },
            { span: 24, formType: 'SELECT', name: 'title_flex', label: '对齐方式', rules: true, valueEnum: MappingData.Flex_justify },
            { span: 24, formType: 'INPUT', name: 'title_padding', label: '内间距', rules: true },
            { span: 24, formType: 'INPUT', name: 'title_margin', label: '外间距', rules: true },
            { span: 24, formType: 'COLOR', name: 'title_color', label: '标题颜色', rules: true },
            { span: 24, formType: 'NUMBER', name: 'title_deg', label: '颜色角度', rules: true },
            { span: 24, formType: 'NUMBER', name: 'title_size', label: '标题字号', rules: true },
            { span: 24, formType: 'SELECT', name: 'title_family', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 24, formType: 'RADIO', name: 'title_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 24, formType: 'RADIO', name: 'title_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 24, formType: 'NUMBER', name: 'title_shadowX', label: '阴影X轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'title_shadowY', label: '阴影Y轴', rules: true },
            { span: 24, formType: 'NUMBER', name: 'title_shadowS', label: '阴影尺寸', rules: true },
            { span: 24, formType: 'COLOR', name: 'title_shadowC', label: '阴影颜色', rules: true },
            { span: 24, formType: 'RADIO', name: 'logo_status', label: '启用LOGO', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 24, formType: 'SELECT', name: 'logo_direction', label: 'LOGO位置', rules: true,
                valueEnum: MappingData.Flex_direction, jugde: [{ field: 'logo_status', value: [true] }]
            },
            { span: 24, formType: 'INPUT', name: 'logo_url', label: 'LOGO地址', rules: true, jugde: [{ field: 'logo_status', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'logo_width', label: 'LOGO宽度', rules: true, jugde: [{ field: 'logo_status', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'logo_height', label: 'LOGO高度', rules: true, jugde: [{ field: 'logo_status', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'logo_padding', label: 'LOGO内间距', rules: true, jugde: [{ field: 'logo_status', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'logo_margin', label: 'LOGO外边框', rules: true, jugde: [{ field: 'logo_status', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'logo_shadowX', label: '阴影X轴', rules: true, jugde: [{ field: 'logo_status', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'logo_shadowY', label: '阴影Y轴', rules: true, jugde: [{ field: 'logo_status', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'logo_shadowS', label: '阴影尺寸', rules: true, jugde: [{ field: 'logo_status', value: [true] }] },
            { span: 24, formType: 'COLOR', name: 'logo_shadowC', label: '阴影颜色', rules: true, jugde: [{ field: 'logo_status', value: [true] }] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'SetLoginPageConfig_Small', label: '副标题', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'small_status', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 24, formType: 'INPUT', name: 'small', label: '标题内容', rules: true, jugde: [{ field: 'small_status', value: [true] }] },
            {
                span: 24, formType: 'SELECT', name: 'small_flex', label: '对齐方式', rules: true,
                valueEnum: MappingData.Flex_justify, jugde: [{ field: 'small_status', value: [true] }]
            },
            { span: 24, formType: 'INPUT', name: 'small_padding', label: '内间距', rules: true, jugde: [{ field: 'small_status', value: [true] }] },
            { span: 24, formType: 'INPUT', name: 'small_margin', label: '外间距', rules: true, jugde: [{ field: 'small_status', value: [true] }] },
            { span: 24, formType: 'COLOR', name: 'small_color', label: '标题颜色', rules: true, jugde: [{ field: 'small_status', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'small_deg', label: '颜色角度', rules: true, jugde: [{ field: 'small_status', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'small_size', label: '标题字号', rules: true, jugde: [{ field: 'small_status', value: [true] }] },
            {
                span: 24, formType: 'SELECT', name: 'small_family', label: '标题字体', rules: true,
                valueEnum: MappingData.Font__Family, jugde: [{ field: 'small_status', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'small_weight', label: '标题加粗', rules: true,
                valueEnum: MappingData.Font__WeightInt, jugde: [{ field: 'small_status', value: [true] }]
            },
            {
                span: 24, formType: 'RADIO', name: 'small_style', label: '标题倾斜', rules: true,
                valueEnum: MappingData.Font__Style, jugde: [{ field: 'small_status', value: [true] }]
            },
            { span: 24, formType: 'NUMBER', name: 'small_shadowX', label: '阴影X轴', rules: true, jugde: [{ field: 'small_status', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'small_shadowY', label: '阴影Y轴', rules: true, jugde: [{ field: 'small_status', value: [true] }] },
            { span: 24, formType: 'NUMBER', name: 'small_shadowS', label: '阴影尺寸', rules: true, jugde: [{ field: 'small_status', value: [true] }] },
            { span: 24, formType: 'COLOR', name: 'small_shadowC', label: '阴影颜色', rules: true, jugde: [{ field: 'small_status', value: [true] }] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'SetLoginPageConfig_Window', label: '窗口信息', collapsible: true,
        children: [
            { span: 12, formType: 'RADIO', name: 'windowAll', label: '窗口全屏', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'RADIO', name: 'windowType', label: '窗口类型', rules: true, valueEnum: MappingData.Theme__LoginWindowType },
            { span: 12, formType: 'NUMBER', name: 'windowWidth', label: '窗口宽度', rules: true, jugde: [{ field: 'windowAll', value: [false] }] },
            { span: 12, formType: 'NUMBER', name: 'windowHeight', label: '窗口高度', rules: true, jugde: [{ field: 'windowAll', value: [false] }] },
            { span: 12, formType: 'INPUT', name: 'windowPadding', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'windowMargin', label: '外边距', rules: true },
            {
                span: 12, formType: 'GROUP', name: 'window_back', label: '背景层', collapsible: true,
                children: [
                    { span: 24, formType: 'NUMBER', name: 'backPro', label: '平铺比例', rules: true, jugde: [{ field: 'windowType', value: ['A01'] }] },
                    { span: 24, formType: 'INPUT', name: 'backUrl', label: '背景地址', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'backBlur', label: '高斯模糊', rules: true },
                    { span: 24, formType: 'INPUT', name: 'backPadding', label: '内间距', rules: true },
                    { span: 24, formType: 'INPUT', name: 'backMargin', label: '外边距', rules: true },
                    { span: 24, formType: 'INPUT', name: 'backRadius', label: '窗口圆角', rules: true },
                    { span: 24, formType: 'SELECT', name: 'backShadow', label: '阴影等级', rules: true, valueEnum: MappingData.Style__BoxShadow },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'window_flex', label: '窗口布局', collapsible: true,
                children: [
                    { span: 24, formType: 'SELECT', name: 'sign_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
                    { span: 24, formType: 'SELECT', name: 'sign_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
                    { span: 24, formType: 'SELECT', name: 'sign_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
                    { span: 24, formType: 'SELECT', name: 'sign_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
                    { span: 24, formType: 'SELECT', name: 'sign_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'window_sign', label: '登录窗口', collapsible: true,
                children: [
                    { span: 24, formType: 'NUMBER', name: 'signPro', label: '登录比例', rules: true, jugde: [{ field: 'windowType', value: ['A01'] }] },
                    {
                        span: 24, formType: 'RADIO', name: 'signBackPosition', label: '窗口位置', rules: true,
                        valueEnum: MappingData.System__AlignmentLR, jugde: [{ field: 'windowType', value: ['A02'] }]
                    },
                    { span: 24, formType: 'NUMBER', name: 'signBackWidth', label: '窗口宽度', rules: true, jugde: [{ field: 'windowType', value: ['A02'] }] },
                    { span: 24, formType: 'NUMBER', name: 'signBackNumber', label: '窗口边距', rules: true, jugde: [{ field: 'windowType', value: ['A02'] }] },
                    { span: 24, formType: 'COLOR', name: 'signBackColor', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'signBackDeg', label: '背景角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'signBackBlur', label: '高斯模糊', rules: true },
                    { span: 24, formType: 'INPUT', name: 'signBackPadding', label: '内间距', rules: true },
                    { span: 24, formType: 'INPUT', name: 'signBackMargin', label: '外边距', rules: true },
                    { span: 24, formType: 'INPUT', name: 'signBackRadius', label: '窗口圆角', rules: true },
                    { span: 24, formType: 'SELECT', name: 'signBackShadow', label: '阴影等级', rules: true, valueEnum: MappingData.Style__BoxShadow },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'window_titleA01', label: '单行标题', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'titleA01_status', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'titleA01', label: '标题内容', rules: true, jugde: [{ field: 'titleA01_status', value: [true] }] },
                    {
                        span: 24, formType: 'SELECT', name: 'titleA01_flex', label: '对齐方式', rules: true,
                        valueEnum: MappingData.Flex_justify, jugde: [{ field: 'titleA01_status', value: [true] }]
                    },
                    { span: 24, formType: 'INPUT', name: 'titleA01_padding', label: '内间距', rules: true, jugde: [{ field: 'titleA01_status', value: [true] }] },
                    { span: 24, formType: 'INPUT', name: 'titleA01_margin', label: '外间距', rules: true, jugde: [{ field: 'titleA01_status', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'titleA01_color', label: '标题颜色', rules: true, jugde: [{ field: 'titleA01_status', value: [true] }] },
                    { span: 24, formType: 'NUMBER', name: 'titleA01_deg', label: '颜色角度', rules: true, jugde: [{ field: 'titleA01_status', value: [true] }] },
                    { span: 24, formType: 'NUMBER', name: 'titleA01_size', label: '标题字号', rules: true, jugde: [{ field: 'titleA01_status', value: [true] }] },
                    {
                        span: 24, formType: 'SELECT', name: 'titleA01_family', label: '标题字体', rules: true,
                        valueEnum: MappingData.Font__Family, jugde: [{ field: 'titleA01_status', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'titleA01_weight', label: '标题加粗', rules: true,
                        valueEnum: MappingData.Font__WeightInt, jugde: [{ field: 'titleA01_status', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'titleA01_style', label: '标题倾斜', rules: true,
                        valueEnum: MappingData.Font__Style, jugde: [{ field: 'titleA01_status', value: [true] }]
                    },
                    { span: 24, formType: 'NUMBER', name: 'titleA01_shadowX', label: '阴影X轴', rules: true, jugde: [{ field: 'titleA01_status', value: [true] }] },
                    { span: 24, formType: 'NUMBER', name: 'titleA01_shadowY', label: '阴影Y轴', rules: true, jugde: [{ field: 'titleA01_status', value: [true] }] },
                    { span: 24, formType: 'NUMBER', name: 'titleA01_shadowS', label: '阴影尺寸', rules: true, jugde: [{ field: 'titleA01_status', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'titleA01_shadowC', label: '阴影颜色', rules: true, jugde: [{ field: 'titleA01_status', value: [true] }] },
                ]
            },
            { span: 24, formType: 'RADIO', name: 'titleA02_status', label: '多行标题', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'SELECT', name: 'titleA02_justify', label: '对齐方式', rules: true,
                valueEnum: MappingData.Flex_justify, jugde: [{ field: 'titleA02_status', value: [true] }]
            },
            {
                span: 12, formType: 'SELECT', name: 'titleA02_direction', label: '排布方式', rules: true,
                valueEnum: MappingData.Flex_direction, jugde: [{ field: 'titleA02_status', value: [true] }]
            },
            { span: 12, formType: 'INPUT', name: 'titleA02_padding', label: '内间距', rules: true, jugde: [{ field: 'titleA02_status', value: [true] }] },
            { span: 12, formType: 'INPUT', name: 'titleA02_margin', label: '外间距', rules: true, jugde: [{ field: 'titleA02_status', value: [true] }] },

            {
                span: 12, formType: 'GROUP', name: 'window_titleA02_main', label: '多行标题-主标题', collapsible: true,
                jugde: [{ field: 'titleA02_status', value: [true] }],
                children: [
                    { span: 24, formType: 'INPUT', name: 'titleA02', label: '标题内容', rules: true },
                    { span: 24, formType: 'COLOR', name: 'titleA02_color', label: '标题颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'titleA02_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'titleA02_size', label: '标题字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'titleA02_family', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'titleA02_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'titleA02_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'NUMBER', name: 'titleA02_shadowX', label: '阴影X轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'titleA02_shadowY', label: '阴影Y轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'titleA02_shadowS', label: '阴影尺寸', rules: true },
                    { span: 24, formType: 'COLOR', name: 'titleA02_shadowC', label: '阴影颜色', rules: true },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'window_titleA02_small', label: '多行标题-副标题', collapsible: true,
                jugde: [{ field: 'titleA02_status', value: [true] }], children: [
                    { span: 24, formType: 'INPUT', name: 'smallA02', label: '标题内容', rules: true },
                    { span: 24, formType: 'COLOR', name: 'smallA02_color', label: '标题颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'smallA02_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'smallA02_size', label: '标题字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'smallA02_family', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'smallA02_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'smallA02_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'NUMBER', name: 'smallA02_shadowX', label: '阴影X轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'smallA02_shadowY', label: '阴影Y轴', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'smallA02_shadowS', label: '阴影尺寸', rules: true },
                    { span: 24, formType: 'COLOR', name: 'smallA02_shadowC', label: '阴影颜色', rules: true },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'window_signBox', label: '登录样式', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'signBoxClass', label: '登录样式', rules: true, valueEnum: MappingData.Theme__LoginSignClass },
            {
                span: 24, formType: 'GROUP', name: 'signBox_label', label: 'label设置', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'signBox_label_status', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'COLOR', name: 'signBox_label_color', label: '标题颜色', rules: true,
                        jugde: [{ field: 'signBox_label_status', value: [true] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'signBox_label_deg', label: '颜色角度', rules: true,
                        jugde: [{ field: 'signBox_label_status', value: [true] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'signBox_label_size', label: '标题字号', rules: true,
                        jugde: [{ field: 'signBox_label_status', value: [true] }]
                    },
                    {
                        span: 12, formType: 'SELECT', name: 'signBox_label_family', label: '标题字体', rules: true,
                        valueEnum: MappingData.Font__Family, jugde: [{ field: 'signBox_label_status', value: [true] }]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'signBox_label_weight', label: '标题加粗', rules: true,
                        valueEnum: MappingData.Font__WeightInt, jugde: [{ field: 'signBox_label_status', value: [true] }]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'signBox_label_style', label: '标题倾斜', rules: true,
                        valueEnum: MappingData.Font__Style, jugde: [{ field: 'signBox_label_status', value: [true] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'signBox_label_shadowX', label: '阴影X轴', rules: true,
                        jugde: [{ field: 'signBox_label_status', value: [true] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'signBox_label_shadowY', label: '阴影Y轴', rules: true,
                        jugde: [{ field: 'signBox_label_status', value: [true] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'signBox_label_shadowS', label: '阴影尺寸', rules: true,
                        jugde: [{ field: 'signBox_label_status', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'signBox_label_shadowC', label: '阴影颜色', rules: true,
                        jugde: [{ field: 'signBox_label_status', value: [true] }]
                    },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'signBox_input', label: 'input设置', collapsible: true,
                children: [
                    { span: 12, formType: 'NUMBER', name: 'signBox_input_height', label: '输入窗高度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'signBox_input_radius', label: '输入窗圆角', rules: true },
                    {
                        span: 12, formType: 'COLOR', name: 'signBox_input_shadow', label: '边框阴影', rules: true,
                        jugde: [{ field: 'signBoxClass', value: ['SignBoxA01'] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'signBox_input_shadowD', label: '激活阴影', rules: true,
                        jugde: [{ field: 'signBoxClass', value: ['SignBoxA01'] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'signBox_input_back', label: '输入窗背景', rules: true,
                        jugde: [{ field: 'signBoxClass', value: ['SignBoxA02'] }]
                    },
                    { span: 12, formType: 'COLOR', name: 'signBox_placeholder_color', label: '占位颜色', rules: true, mode: ['single'] },
                    {
                        span: 12, formType: 'NUMBER', name: 'signBox_placeholder_size', label: '占位字号', rules: true,
                    },
                    {
                        span: 12, formType: 'SELECT', name: 'signBox_placeholder_family', label: '占位字体', rules: true,
                        valueEnum: MappingData.Font__Family,
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'signBox_placeholder_weight', label: '占位加粗', rules: true,
                        valueEnum: MappingData.Font__WeightInt,
                    },
                    { span: 12, formType: 'COLOR', name: 'signBox_input_color', label: '输入颜色', rules: true, mode: ['single'] },
                    {
                        span: 12, formType: 'NUMBER', name: 'signBox_input_size', label: '输入字号', rules: true,
                    },
                    {
                        span: 12, formType: 'SELECT', name: 'signBox_input_family', label: '输入字体', rules: true,
                        valueEnum: MappingData.Font__Family,
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'signBox_input_weight', label: '输入加粗', rules: true,
                        valueEnum: MappingData.Font__WeightInt,
                    },
                    { span: 12, formType: 'NUMBER', name: 'signBox_input_shadowX', label: '阴影X轴', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'signBox_input_shadowY', label: '阴影Y轴', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'signBox_input_shadowS', label: '阴影尺寸', rules: true },
                    { span: 12, formType: 'COLOR', name: 'signBox_input_shadowC', label: '阴影颜色', rules: true },
                    { span: 24, formType: 'RADIO', name: 'signBox_icon_status', label: '登录图标', rules: true, valueEnum: MappingData.IsShowBool },
                    { span: 12, formType: 'COLOR', name: 'signBox_icon_color', label: '图标颜色', rules: true, mode: ['single'] },
                    { span: 12, formType: 'NUMBER', name: 'signBox_icon_size', label: '图标尺寸', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'signBox_icon_shadowX', label: '阴影X轴', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'signBox_icon_shadowY', label: '阴影Y轴', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'signBox_icon_shadowS', label: '阴影尺寸', rules: true },
                    { span: 12, formType: 'COLOR', name: 'signBox_icon_shadowC', label: '阴影颜色', rules: true },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'signBox_button', label: '提交按钮', collapsible: true,
                children: [
                    { span: 12, formType: 'NUMBER', name: 'signBox_button_height', label: '按钮高度', rules: true },
                    {
                        span: 12, formType: 'COLOR', name: 'signBox_button_back', label: '背景颜色', rules: true,
                        jugde: [{ field: 'signBoxClass', value: ['SignBoxA02'] }]
                    },
                    { span: 12, formType: 'NUMBER', name: 'signBox_button_radio', label: '按钮圆角', rules: true },
                    { span: 12, formType: 'COLOR', name: 'signBox_button_color', label: '文字颜色', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'signBox_button_deg', label: '颜色角度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'signBox_button_size', label: '输入字号', rules: true, },
                    { span: 12, formType: 'SELECT', name: 'signBox_button_family', label: '输入字体', rules: true, valueEnum: MappingData.Font__Family, },
                    { span: 12, formType: 'RADIO', name: 'signBox_button_weight', label: '输入加粗', rules: true, valueEnum: MappingData.Font__WeightInt, },
                    { span: 12, formType: 'RADIO', name: 'signBox_button_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style, },
                    { span: 12, formType: 'NUMBER', name: 'signBox_button_shadowX', label: '阴影X轴', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'signBox_button_shadowY', label: '阴影Y轴', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'signBox_button_shadowS', label: '阴影尺寸', rules: true },
                    { span: 12, formType: 'COLOR', name: 'signBox_button_shadowC', label: '阴影颜色', rules: true },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'signBox_three', label: '三方设置', collapsible: true,
                children: [

                ]
            },
            // 输入框设置
            // label 设置
            // input 设置
            // 按钮设置


        ]
    },
]

// *** 题库选项参数
const QuestionBankOptions = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    { span: 24, formType: 'INPUT', name: 'optionKey', label: '选项', rules: true },
    { span: 24, formType: 'INPUT', name: 'optionContent', label: '内容', rules: true },
]

// *** dxTheme主题设置
const DxThemeConfig = [
    { span: 12, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    {
        span: 24, formType: 'GROUP', name: 'DxThemeConfig_01', label: '主题信息', collapsible: true,
        children: [
            { span: 12, formType: 'COLOR', name: 'themeColor', label: '主题颜色' },
            { span: 12, formType: 'COLOR', name: 'backColor', label: '通用背景' },
            { span: 12, formType: 'COLOR', name: 'top_color', label: '标题颜色' },
            { span: 12, formType: 'COLOR', name: 'btm_color', label: '主体背景' },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'DxThemeConfig_02', label: '图标模块', collapsible: true,
        children: [
            { span: 24, formType: 'COLOR', name: 'logo_color', label: '图标背景' },
            { span: 24, formType: 'COLOR', name: 'logo_icon_shadowC', label: '图标阴影' },
            { span: 24, formType: 'COLOR', name: 'logo_text_color', label: '图标描述' },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'DxThemeConfig_03', label: '操作模块', collapsible: true,
        children: [
            { span: 24, formType: 'COLOR', name: 'head_color', label: '背景颜色' },
            { span: 24, formType: 'COLOR', name: 'head_titleColor', label: '标题颜色' },
            { span: 24, formType: 'COLOR', name: 'head_itemBack', label: '操作图标背景' },
            { span: 24, formType: 'COLOR', name: 'head_offBorder', label: '独立关闭边框' },
            { span: 24, formType: 'COLOR', name: 'head_offShadowC', label: '独立关闭阴影' },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'DxThemeConfig_04', label: '菜单模块', collapsible: true,
        children: [
            { span: 24, formType: 'COLOR', name: 'menu_color', label: '背景颜色' },
            { span: 24, formType: 'COLOR', name: 'menu_class_active', label: '选中选项背景' },
            { span: 24, formType: 'COLOR', name: 'menu_fold_color', label: '折叠按钮颜色' },
            { span: 24, formType: 'COLOR', name: 'menu_fold_shadowC', label: '折叠按钮阴影' },
            { span: 24, formType: 'COLOR', name: 'menu_icon_color', label: '图标颜色' },
            { span: 24, formType: 'COLOR', name: 'menu_icon_shadowC', label: '图标阴影' },
            { span: 24, formType: 'COLOR', name: 'menu_text_color', label: '文字颜色' },
            { span: 24, formType: 'COLOR', name: 'menu_text_active', label: '选中文字颜色' },
            { span: 24, formType: 'COLOR', name: 'menu_text_shadowC', label: '文字阴影' },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'DxThemeConfig_05', label: '数据模块', collapsible: true,
        children: [
            { span: 24, formType: 'COLOR', name: 'body_color', label: '背景颜色' },
            { span: 24, formType: 'COLOR', name: 'body_tabsBack', label: '标签背景色' },
            { span: 24, formType: 'COLOR', name: 'body_tabsActive', label: '标签选中色' },
            { span: 24, formType: 'COLOR', name: 'body_fontColor', label: '标签文字颜色' },
            { span: 24, formType: 'COLOR', name: 'body_tabsBorderColor', label: '标签边框颜色' },
            { span: 24, formType: 'COLOR', name: 'body_tabsClear', label: '标签关闭颜色' },
            { span: 24, formType: 'COLOR', name: 'body_iconShadowC', label: '标签图标阴影' },
            { span: 24, formType: 'COLOR', name: 'body_fontShadowC', label: '标签文字阴影' },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'DxThemeConfig_06', label: '数据模块内部参数', collapsible: true,
        children: [
            { span: 12, formType: 'COLOR', name: ['style', 'top_Back'], label: '头部操作背景' },
            { span: 12, formType: 'COLOR', name: ['style', 'tree_iconColor'], label: '树形图标颜色' },
            { span: 12, formType: 'COLOR', name: ['style', 'tree_fontColor'], label: '树形文字颜色' },
            { span: 12, formType: 'COLOR', name: ['style', 'tree_activeBack'], label: '树形选背景', },
            { span: 12, formType: 'COLOR', name: ['style', 'tree_activeColor'], label: '树形选中文字颜色' },
            { span: 12, formType: 'COLOR', name: ['style', 'tree_searchColor'], label: '树形搜索文字颜色' },
            { span: 12, formType: 'COLOR', name: ['style', 'tree_resetColor'], label: '树形重置文字颜色' },
            { span: 12, formType: 'COLOR', name: ['style', 'tree_foldColor'], label: '树形折叠文字颜色' },
        ]
    }
]

// *** 修改密码
const ModifyPasswordFormList = [
    { span: 24, formType: 'PASSWORD', name: 'OldPassword', label: '原密码', rules: true },
    { span: 24, formType: 'PASSWORD', name: 'NewPassword', label: '新密码', rules: true },
    { span: 24, formType: 'TempPwdConfirm', name: 'ConPassword', label: '确认密码', confirm: 'NewPassword', rules: true },
]

// *** 新增项目
const AddProjectFormList = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    {
        span: 12, formType: 'GROUP', name: 'AddProjectFormList_01', label: '基础信息', collapsible: true,
        children: [
            { span: 24, formType: 'INPUT', name: 'tableName', label: '项目简称', rules: true },
            { span: 24, formType: 'INPUT', name: 'fullName', label: '项目全称', rules: true },
            { span: 24, formType: 'INPUT', name: 'projectTypeUuid', label: '项目类型', rules: true },
            { span: 24, formType: 'INPUT', name: 'code', label: '项目编码' },
            { span: 24, formType: 'INPUT', name: 'keyword', label: '项目识别码' },
            { span: 24, formType: 'NUMBER', name: 'sortId', label: '项目排序' },
            { span: 24, formType: 'INPUT', name: 'address', label: '项目地址' },
            { span: 24, formType: 'INPUT', name: 'remark', label: '备注信息' },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddProjectFormList_02', label: '域名信息', collapsible: true,
        children: [
            { span: 24, formType: 'INPUT', name: 'webUrl', label: '项目域名', rules: true },
            { span: 24, formType: 'INPUT', name: 'authUrl', label: '授权域名', rules: true },
            { span: 24, formType: 'INPUT', name: 'apiUrl', label: '接口域名', rules: true },
            { span: 24, formType: 'INPUT', name: 'weChatApiUrl', label: '小程序域名', rules: true },
            { span: 24, formType: 'INPUT', name: 'imageUrl', label: '图床地址', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddProjectFormList_03', label: '登录设置', collapsible: true,
        children: [
            { span: 24, formType: 'INPUT', name: 'client_Id', label: '登录ID', rules: true },
            { span: 24, formType: 'RADIO', name: 'grant_Type', label: '登录方式', rules: true, valueEnum: MappingData.System__grantType },
            { span: 24, formType: 'RADIO', name: 'client_Secret', label: '登录验证', rules: true, valueEnum: MappingData.System__clientSecret },
            { span: 24, formType: 'RADIO', name: 'bearer', label: 'TOKEN头', rules: true, valueEnum: MappingData.System__bearerType },
            { span: 24, formType: 'INPUT', name: 'login', label: '额外登录' },
            { span: 24, formType: 'RADIO', name: 'loginMethod', label: '登录授权', rules: true, valueEnum: MappingData.LoginType },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'AddProjectFormList_04', label: '其他设置', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'isDebug', label: '调试DeBug', rules: true, valueEnum: MappingData.IsEnabledNumber },
            { span: 24, formType: 'RADIO', name: 'isEnabled', label: '项目状态', rules: true, valueEnum: MappingData.IsEnabledNumber },
            { span: 24, formType: 'RADIO', name: 'isHttps', label: 'SSL认证', rules: true, valueEnum: MappingData.IsEnabledNumber },
            { span: 24, formType: 'RADIO', name: 'isScan', label: '扫码登录', rules: true, valueEnum: MappingData.IsEnabledNumber },
        ]
    },
]

// *** 布局接口信息
const LayoutAPiDataFormList = [
    {
        span: 24, formType: 'LIST', name: 'layout_ApiList', label: '接口列表', collapsible: true,
        children: [
            { span: 24, formType: 'RADIO', name: 'api_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
            { span: 12, formType: 'INPUT', name: 'api_name', label: '接口名称', rules: true },
            { span: 12, formType: 'INPUT', name: 'api_url', label: '请求地址', rules: true },
            { span: 12, formType: 'INPUT', name: 'api_params', label: '请求参数' },
            { span: 12, formType: 'INPUT', name: 'api_https', label: '额外域名' },
        ]
    },
]

// *** 布局小窗信息
const LayoutWindowStyleFormList = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    {
        span: 24, formType: 'GROUP', name: 'LayoutWindowStyleFormList_01', label: '样式设置', collapsible: true,
        children: [
            { span: 12, formType: 'RADIO', name: 'window_nav', label: '小窗导航', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'RADIO', name: 'window_title', label: '小窗标题', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'COLOR', name: 'window_backColor', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'window_backDeg', label: '背景角度', rules: true },
            { span: 12, formType: 'INPUT', name: 'window_radius', label: '背景圆角', rules: true },
            { span: 12, formType: 'INPUT', name: 'window_padding', label: '背景内填充', rules: true },
            { span: 12, formType: 'RADIO', name: 'window_border', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'NUMBER', name: 'window_borderSize', label: '边框尺寸', rules: true,
                jugde: [{ field: 'window_border', value: [true] }]
            },
            {
                span: 12, formType: 'RADIO', name: 'window_borderType', label: '边框类型', rules: true,
                valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'window_border', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'window_borderColor', label: '边框颜色', rules: true,
                mode: ['single'], jugde: [{ field: 'window_border', value: [true] }]
            },
            { span: 12, formType: 'RADIO', name: 'window_filter', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'INPUT', name: 'window_filterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_filter', value: [true] }] },
            { span: 12, formType: 'COLOR', name: 'window_filterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_filter', value: [true] }] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'LayoutWindowStyleFormList_02', label: '标题设置', collapsible: true, jugde: [{ field: 'window_title', value: [true] }],
        children: [
            { span: 12, formType: 'INPUT', name: 'window_titleMar', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'window_titlePad', label: '外边距', rules: true },
            { span: 12, formType: 'INPUT', name: 'window_titleTxt', label: '标题内容', rules: true },
            { span: 12, formType: 'COLOR', name: 'window_titleColor', label: '标题颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'window_titleDeg', label: '颜色角度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'window_titleSize', label: '标题字号', rules: true },
            { span: 12, formType: 'SELECT', name: 'window_titleFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'window_titleWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'window_titleStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'window_titleFilter', label: '标题阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'INPUT', name: 'window_titleFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_titleFilter', value: [true] }] },
            { span: 12, formType: 'COLOR', name: 'window_titleFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_titleFilter', value: [true] }] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'LayoutWindowStyleFormList_07', label: '导航设置', collapsible: true,
        children: [
            // 独立 统一
            {
                span: 12, formType: 'RADIO', name: 'window_NavType', label: '导航样式', rules: true,
                valueEnum: MappingData.Charts__VChartsDirectionA01, jugde: [{ field: 'window_nav', value: [true] }]
            },
            // {
            //     span: 12, formType: 'RADIO', name: 'window_NavOptions', label: '配置方式', rules: true,
            //     valueEnum: MappingData.Form__LayoutWindowNavOptions
            // },
            {
                span: 12, formType: 'NUMBER', name: 'window_navWidth', label: '导航宽度', rules: true,
                jugde: [{ field: 'window_nav', value: [true] }, { field: 'window_NavType', value: ['vertical'] }]
            },
            {
                span: 12, formType: 'NUMBER', name: 'window_navHeight', label: '导航高度', rules: true,
                jugde: [{ field: 'window_nav', value: [true] }, { field: 'window_NavType', value: ['horizontal'] }]
            },
            // A01 
            {
                span: 12, formType: 'GROUP', name: 'window_NavOptions_details', label: '默认样式', collapsible: true, jugde: [{ field: 'window_nav', value: [true] }], children: [
                    { span: 12, formType: 'INPUT', name: 'window_navMar', label: '内填充', rules: true },
                    { span: 12, formType: 'INPUT', name: 'window_navPad', label: '外边距', rules: true },
                    { span: 24, formType: 'COLOR', name: 'window_navBack', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_navDeg', label: '背景角度', rules: true },
                    { span: 24, formType: 'RADIO', name: 'window_navBorder', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_navBorSize', label: '边框尺寸', rules: true,
                        jugde: [{ field: 'window_navBorder', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_navBorType', label: '边框类型', rules: true,
                        valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'window_navBorder', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'window_navBorColor', label: '边框颜色', rules: true,
                        mode: ['single'], jugde: [{ field: 'window_navBorder', value: [true] }]
                    },
                    { span: 24, formType: 'COLOR', name: 'window_navColor', label: '标题颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_navDeg2', label: '标题角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_navSize', label: '标题字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'window_navFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'window_navWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'window_navStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'window_navFilter', label: '标题阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'window_navFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_navFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_navFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_navFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_navIcon', label: '图标颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_navIconSize', label: '图标尺寸', rules: true },
                    { span: 24, formType: 'RADIO', name: 'window_navIconFilter', label: '图标阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'window_navIconFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_navIconFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_navIconFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_navIconFilter', value: [true] }] },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'window_NavOptions_active', label: '选中样式', collapsible: true, jugde: [{ field: 'window_nav', value: [true] }], children: [
                    { span: 12, formType: 'INPUT', name: 'window_actMar', label: '内填充', rules: true },
                    { span: 12, formType: 'INPUT', name: 'window_actPad', label: '外边距', rules: true },
                    { span: 24, formType: 'COLOR', name: 'window_actBack', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_actDeg', label: '背景角度', rules: true },
                    { span: 24, formType: 'RADIO', name: 'window_actBorder', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_actBorSize', label: '边框尺寸', rules: true,
                        jugde: [{ field: 'window_actBorder', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_actBorType', label: '边框类型', rules: true,
                        valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'window_actBorder', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'window_actBorColor', label: '边框颜色', rules: true,
                        mode: ['single'], jugde: [{ field: 'window_actBorder', value: [true] }]
                    },
                    { span: 24, formType: 'COLOR', name: 'window_actColor', label: '标题颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_actDeg2', label: '标题角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_actSize', label: '标题字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'window_actFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'window_actWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'window_actStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'window_actFilter', label: '标题阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'window_actFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_actFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_actFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_actFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_actIcon', label: '图标颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'window_actIconSize', label: '图标字号', rules: true },
                    { span: 24, formType: 'RADIO', name: 'window_actIconFilter', label: '图标阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'INPUT', name: 'window_actIconFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_actIconFilter', value: [true] }] },
                    { span: 24, formType: 'COLOR', name: 'window_actIconFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_actIconFilter', value: [true] }] },
                ]
            },

            {
                span: 24, formType: 'LIST', name: 'window_NavList', label: '导航列表', collapsible: true,
                children: [
                    { span: 10, formType: 'TempGenerateUuid', name: 'window_navUuid', label: '生成ID', rules: true },
                    { span: 4, formType: 'TempICON', name: 'window_NavIcon', label: '导航图标' },
                    { span: 10, formType: 'INPUT', name: 'window_NavLabel', label: '导航名称', rules: true },
                ]
            },
            // {
            //     span: 24, formType: 'LIST', name: 'window_NavList2', label: '导航列表', collapsible: true, jugde: [{ field: 'window_NavOptions', value: ['A02'] }],
            //     children: [
            //         { span: 4, formType: 'TempICON', name: 'window_NavIcon', label: '导航图标' },
            //         { span: 10, formType: 'INPUT', name: 'window_NavLabel', label: '导航名称', rules: true },
            //         {
            //             span: 12, formType: 'GROUP', name: 'window_NavOptions_details', label: '默认样式', collapsible: true,
            //             children: [
            //                 { span: 12, formType: 'INPUT', name: 'window_navMar', label: '内填充', rules: true },
            //                 { span: 12, formType: 'INPUT', name: 'window_navPad', label: '外边距', rules: true },
            //                 { span: 24, formType: 'COLOR', name: 'window_navBack', label: '背景颜色', rules: true },
            //                 { span: 24, formType: 'NUMBER', name: 'window_navDeg', label: '背景角度', rules: true },
            //                 { span: 24, formType: 'RADIO', name: 'window_navBorder', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
            //                 {
            //                     span: 24, formType: 'NUMBER', name: 'window_navBorSize', label: '边框尺寸', rules: true,
            //                     jugde: [{ field: 'window_navBorder', value: [true] }]
            //                 },
            //                 {
            //                     span: 24, formType: 'RADIO', name: 'window_navBorType', label: '边框类型', rules: true,
            //                     valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'window_navBorder', value: [true] }]
            //                 },
            //                 {
            //                     span: 24, formType: 'COLOR', name: 'window_navBorColor', label: '边框颜色', rules: true,
            //                     mode: ['single'], jugde: [{ field: 'window_navBorder', value: [true] }]
            //                 },
            //                 { span: 24, formType: 'COLOR', name: 'window_navColor', label: '标题颜色', rules: true },
            //                 { span: 24, formType: 'NUMBER', name: 'window_navDeg2', label: '标题角度', rules: true },
            //                 { span: 24, formType: 'NUMBER', name: 'window_navSize', label: '标题字号', rules: true },
            //                 { span: 24, formType: 'SELECT', name: 'window_navFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            //                 { span: 24, formType: 'RADIO', name: 'window_navWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            //                 { span: 24, formType: 'RADIO', name: 'window_navStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            //                 { span: 24, formType: 'RADIO', name: 'window_navFilter', label: '标题阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            //                 { span: 24, formType: 'INPUT', name: 'window_navFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_navFilter', value: [true] }] },
            //                 { span: 24, formType: 'COLOR', name: 'window_navFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_navFilter', value: [true] }] },
            //             ]
            //         },
            //         {
            //             span: 12, formType: 'GROUP', name: 'window_NavOptions_active', label: '选中样式', collapsible: true,
            //             children: [
            //                 { span: 12, formType: 'INPUT', name: 'window_actMar', label: '内填充', rules: true },
            //                 { span: 12, formType: 'INPUT', name: 'window_actPad', label: '外边距', rules: true },
            //                 { span: 24, formType: 'COLOR', name: 'window_actBack', label: '背景颜色', rules: true },
            //                 { span: 24, formType: 'NUMBER', name: 'window_actDeg', label: '背景角度', rules: true },
            //                 { span: 24, formType: 'RADIO', name: 'window_actBorder', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
            //                 {
            //                     span: 24, formType: 'NUMBER', name: 'window_actBorSize', label: '边框尺寸', rules: true,
            //                     jugde: [{ field: 'window_actBorder', value: [true] }]
            //                 },
            //                 {
            //                     span: 24, formType: 'RADIO', name: 'window_actBorType', label: '边框类型', rules: true,
            //                     valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'window_actBorder', value: [true] }]
            //                 },
            //                 {
            //                     span: 24, formType: 'COLOR', name: 'window_actBorColor', label: '边框颜色', rules: true,
            //                     mode: ['single'], jugde: [{ field: 'window_actBorder', value: [true] }]
            //                 },
            //                 { span: 24, formType: 'COLOR', name: 'window_actColor', label: '标题颜色', rules: true },
            //                 { span: 24, formType: 'NUMBER', name: 'window_actDeg2', label: '标题角度', rules: true },
            //                 { span: 24, formType: 'NUMBER', name: 'window_actSize', label: '标题字号', rules: true },
            //                 { span: 24, formType: 'SELECT', name: 'window_actFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
            //                 { span: 24, formType: 'RADIO', name: 'window_actWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            //                 { span: 24, formType: 'RADIO', name: 'window_actStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
            //                 { span: 24, formType: 'RADIO', name: 'window_actFilter', label: '标题阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            //                 { span: 24, formType: 'INPUT', name: 'window_actFilterSize', label: '阴影数值', rules: true, jugde: [{ field: 'window_actFilter', value: [true] }] },
            //                 { span: 24, formType: 'COLOR', name: 'window_actFilterColor', label: '阴影颜色', rules: true, jugde: [{ field: 'window_actFilter', value: [true] }] },
            //             ]
            //         },
            //     ]
            // },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'LayoutWindowStyleFormList_08', label: '轮播设置', collapsible: true, jugde: [{ field: 'window_nav', value: [true] }],
        children: [
            {
                span: 12, formType: 'GROUP', name: 'LayoutWindowStyleFormList_autoPlay', label: '切换参数', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'window_swiperDirection', label: '切换方向', rules: true, valueEnum: MappingData.Charts__VChartsDirectionA01 },
                    { span: 24, formType: 'NUMBER', name: 'window_swiperSpeed', label: '切换速度', rules: true },
                    { span: 24, formType: 'RADIO', name: 'window_swiperNoSwiping', label: '禁止拖动', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'window_swiperLoop', label: '切换循环', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 24, formType: 'RADIO', name: 'window_swiperAutoplay', label: '自动切换', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperDelay', label: '切换延迟', rules: true,
                        jugde: [{ field: 'window_swiperAutoplay', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'LayoutWindowStyleFormList_Effects', label: '切换效果', collapsible: true,
                children: [
                    { span: 24, formType: 'SELECT', name: 'window_swiperEffects', label: '切换效果', rules: true, valueEnum: MappingData.Swiper__SwiperEffectType },
                    // fade
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperFadeEffect', label: '淡出效果', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['fade'] }]
                    },
                    // cube
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperCubeSlideShadows', label: '开启slide阴影', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['cube'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperCubeShadow', label: '开启投影', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['cube'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCubeShadowOffset', label: '投影距离', rules: true, tooltip: '20',
                        jugde: [{ field: 'window_swiperEffects', value: ['cube'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCubeShadowScale', label: '缩放比例', rules: true, tooltip: '0.94',
                        jugde: [{ field: 'window_swiperEffects', value: ['cube'] }]
                    },
                    // coverflow
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCoverflowRotate', label: '旋转角度', rules: true, tooltip: '50',
                        jugde: [{ field: 'window_swiperEffects', value: ['coverflow'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCoverflowStretch', label: '拉伸值', rules: true, tooltip: '1',
                        jugde: [{ field: 'window_swiperEffects', value: ['coverflow'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCoverflowDepth', label: '位置深度', rules: true, tooltip: '100',
                        jugde: [{ field: 'window_swiperEffects', value: ['coverflow'] }]
                    },
                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperCoverflowModifier', label: '倍率', rules: true, tooltip: '1',
                        jugde: [{ field: 'window_swiperEffects', value: ['coverflow'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperCoverflowSlideShadows', label: '阴影', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['coverflow'] }]
                    },
                    // flip
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperFlipSlideShadows', label: 'slides的阴影', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['flip'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperFlipLimitRotation', label: '最大旋转角度', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['flip'] }]
                    },
                    // cards
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperCardsSlideShadows', label: 'slides的阴影', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperEffects', value: ['cards'] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'LayoutWindowStyleFormList_Pagination', label: '分页器设置', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'window_swiperPagination', label: '分页器', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperPaginationClickable', label: '点击切换', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperPagination', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperPaginationType', label: '分页器类型', rules: true,
                        valueEnum: MappingData.Swiper__SwiperPaginationType, jugde: [{ field: 'window_swiperPagination', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperPaginationOpposite', label: '进度条方向', rules: true, valueEnum: MappingData.mars3d__orientation,
                        jugde: [{ field: 'window_swiperPagination', value: [true] }, { field: 'window_swiperPaginationType', value: ['progressbar'] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperPaginationDynamicBullets', label: '自动隐藏', rules: true, valueEnum: MappingData.IsEnabledBool,
                        jugde: [{ field: 'window_swiperPagination', value: [true] }, { field: 'window_swiperPaginationType', value: ['bullets'] }]
                    },

                    {
                        span: 24, formType: 'NUMBER', name: 'window_swiperPaginationDynamicBulletsNumber', label: '主点数量', rules: true,
                        jugde: [{ field: 'window_swiperPagination', value: [true] }, { field: 'window_swiperPaginationType', value: ['bullets'] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'LayoutWindowStyleFormList_Scroll', label: '滚动条设置', collapsible: true,
                children: [
                    { span: 24, formType: 'RADIO', name: 'window_swiperScrollbar', label: '滚动条', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperScrollbarDraggable', label: '点击切换', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperScrollbar', value: [true] }]
                    },
                    {
                        span: 24, formType: 'RADIO', name: 'window_swiperScrollbarHide', label: '自动隐藏', rules: true,
                        valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'window_swiperScrollbar', value: [true] }]
                    },
                ]
            },
        ]
    }
]

// !!! 各模块参数配置
// *** 空屏占位模块
const PrefabricatedPlaceEmpty = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    { span: 12, formType: 'INPUT', name: 'radius', label: '背景圆角', rules: true },
    { span: 12, formType: 'INPUT', name: 'padding', label: '背景内填充', rules: true },
    { span: 24, formType: 'RADIO', name: 'backType', label: '背景类型', rules: true, valueEnum: MappingData.Start__backType },
    { span: 12, formType: 'RADIO', name: 'border', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 12, formType: 'RADIO', name: 'filter', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'PrefabricatedPlaceEmpty_Color', label: '纯色背景', collapsible: true, jugde: [{ field: 'backType', value: ['color'] }],
        children: [
            { span: 12, formType: 'COLOR', name: 'backColor', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'backDeg', label: '背景角度', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'PrefabricatedPlaceEmpty_Image', label: '图片背景', collapsible: true, jugde: [{ field: 'backType', value: ['image'] }],
        children: [
            { span: 24, formType: 'INPUT', name: 'imageUrl', label: '图片地址', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'PrefabricatedPlaceEmpty_Video', label: '视频背景', collapsible: true, jugde: [{ field: 'backType', value: ['video'] }],
        children: [
            { span: 24, formType: 'INPUT', name: 'backVideo', label: '视频地址', rules: true },
            { span: 12, formType: 'NUMBER', name: 'backVideoStart', label: '开始时间', rules: true },
            { span: 12, formType: 'NUMBER', name: 'backVideoEnd', label: '结束时间', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'PrefabricatedPlaceEmpty_border', label: '边框设置', collapsible: true, jugde: [{ field: 'border', value: [true] }],
        children: [
            { span: 24, formType: 'NUMBER', name: 'borderSize', label: '边框尺寸', rules: true },
            { span: 24, formType: 'RADIO', name: 'borderType', label: '边框类型', rules: true, valueEnum: MappingData.Style__BorderType },
            { span: 24, formType: 'COLOR', name: 'borderColor', label: '边框颜色', rules: true, mode: ['single'] },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'PrefabricatedPlaceEmpty_filter', label: '阴影设置', collapsible: true, jugde: [{ field: 'filter', value: [true] }],
        children: [
            { span: 24, formType: 'INPUT', name: 'filterSize', label: '阴影数值', rules: true },
            { span: 24, formType: 'COLOR', name: 'filterColor', label: '阴影颜色', rules: true },
        ]
    },
]
// *** 图例模块
// ? 通用图例参数
// TODO 背景设置
const ChartBackCommonFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_background', label: '背景设置', collapsible: true, defaultCollapsed: true,
    children: [
        { span: 24, formType: 'RADIO', name: 'background_type', label: '色值类型', rules: true, valueEnum: MappingData.Charts__ColorTypeList },
        {
            span: 24, formType: 'COLOR', name: 'background_colorSingle', label: '纯色背景', rules: true, mode: ['single'],
            jugde: [{ field: 'background_type', value: ['color'] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'background_x0', label: '横向起始', min: 0, max: 1, rules: true,
            jugde: [{ field: 'background_type', value: ['linear', 'radial'] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'background_x1', label: '横向结束', min: 0, max: 1, rules: true,
            jugde: [{ field: 'background_type', value: ['linear', 'radial'] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'background_y0', label: '纵向起始', min: 0, max: 1, rules: true,
            jugde: [{ field: 'background_type', value: ['linear', 'radial'] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'background_y1', label: '纵向结束', min: 0, max: 1, rules: true,
            jugde: [{ field: 'background_type', value: ['linear', 'radial'] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'background_r0', label: '径向起始', min: 0, max: 1, rules: true,
            jugde: [{ field: 'background_type', value: ['radial'] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'background_r1', label: '径向结束', min: 0, max: 1, rules: true,
            jugde: [{ field: 'background_type', value: ['radial'] }]
        },
        {
            span: 24, formType: 'COLOR', name: 'background_colorGradient', label: '背景颜色', rules: true, mode: ['gradient'],
            jugde: [{ field: 'background_type', value: ['linear', 'radial'] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'background_x', label: '横向坐标', min: 0, max: 1, rules: true,
            jugde: [{ field: 'background_type', value: ['conical'] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'background_y', label: '纵向坐标', min: 0, max: 1, rules: true,
            jugde: [{ field: 'background_type', value: ['conical'] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'background_startAngle', label: '起始角度', rules: true, tooltip: '0',
            jugde: [{ field: 'background_type', value: ['conical'] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'background_endAngle', label: '结束角度', rules: true, tooltip: '6.283185307179586',
            jugde: [{ field: 'background_type', value: ['conical'] }]
        },
        {
            span: 24, formType: 'LIST', name: 'background_colorArr', label: '颜色列表', collapsible: true, jugde: [{ field: 'background_type', value: ['conical'] }],
            children: [
                { span: 12, formType: 'NUMBER', name: 'offset', label: '颜色顺序', rules: true, min: 0, max: 1 },
                { span: 12, formType: 'COLOR', name: 'color', label: '角度颜色', rules: true, mode: ['single'] }
            ]
        },
    ]
}
// TODO 标题设置
const ChartTitleCommonFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_title', label: '标题设置', collapsible: true, defaultCollapsed: true,
    children: [
        { span: 12, formType: 'RADIO', name: 'title_visible', label: '主标题', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 12, formType: 'RADIO', name: 'title_subtextStatus', label: '副标题', rules: true, valueEnum: MappingData.IsEnabledBool,
            jugde: [{ field: 'title_visible', value: [true] }]
        },
        {
            span: 12, formType: 'RADIO', name: 'title_orient', label: '标题方向', rules: true, valueEnum: MappingData.Charts__VchartsAxesOrientA01,
            jugde: [{ field: 'title_visible', value: [true] }]
        },
        { span: 12, formType: 'NUMBER', name: 'title_innerPadding', label: '边距留白', rules: true, jugde: [{ field: 'title_visible', value: [true] }] },


        {
            span: 12, formType: 'RADIO', name: 'title_align', label: '水平对齐', rules: true, valueEnum: MappingData.System__AlignmentLCR,
            jugde: [{ field: 'title_visible', value: [true] }]
        },
        {
            span: 12, formType: 'RADIO', name: 'title_verticalAlign', label: '垂直对齐', rules: true, valueEnum: MappingData.Charts__VchartsLegendsPosition,
            jugde: [{ field: 'title_visible', value: [true] }]
        },
        { span: 12, formType: 'NUMBER', name: 'title_offsetX', label: '水平偏移', rules: true, jugde: [{ field: 'title_visible', value: [true] }] },
        { span: 12, formType: 'NUMBER', name: 'title_offsetY', label: '垂直偏移', rules: true, jugde: [{ field: 'title_visible', value: [true] }] },

        {
            span: 12, formType: 'GROUP', name: 'ChartCommon_title_A01', label: '主标题设置', collapsible: true, jugde: [{ field: 'title_visible', value: [true] }],
            children: [
                { span: 24, formType: 'INPUT', name: 'title_text', label: '标题内容', rules: true },
                { span: 24, formType: 'RADIO', name: 'title_textDirection', label: '排布方向', rules: true, valueEnum: MappingData.Charts__VChartsDirectionA01 },
                { span: 24, formType: 'RADIO', name: 'title_textWhiteSpace', label: '是否折行', rules: true, valueEnum: MappingData.Font__whiteSpace },
                { span: 24, formType: 'RADIO', name: 'title_textKeepDirIn3d', label: '3D模式', rules: true, valueEnum: MappingData.Is3DKeepBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_title_A01_color', label: '标题颜色', collapsible: true,
                    children: [
                        { span: 24, formType: 'RADIO', name: 'title_textType', label: '色值类型', rules: true, valueEnum: MappingData.Charts__ColorTypeList },
                        {
                            span: 24, formType: 'COLOR', name: 'title_textColorSingle', label: '纯色背景', rules: true, mode: ['single'],
                            jugde: [{ field: 'title_textType', value: ['color'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_textx0', label: '横向起始', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_textType', value: ['linear', 'radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_textx1', label: '横向结束', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_textType', value: ['linear', 'radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_texty0', label: '纵向起始', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_textType', value: ['linear', 'radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_texty1', label: '纵向结束', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_textType', value: ['linear', 'radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_textr0', label: '径向起始', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_textType', value: ['radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_textr1', label: '径向结束', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_textType', value: ['radial'] }]
                        },
                        {
                            span: 24, formType: 'COLOR', name: 'title_textColorGradient', label: '背景颜色', rules: true, mode: ['gradient'],
                            jugde: [{ field: 'title_textType', value: ['linear', 'radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_textx', label: '横向坐标', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_textType', value: ['conical'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_texty', label: '纵向坐标', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_textType', value: ['conical'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_textStartAngle', label: '起始角度', rules: true, tooltip: '0',
                            jugde: [{ field: 'title_textType', value: ['conical'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_textEndAngle', label: '结束角度', rules: true, tooltip: '6.283185307179586',
                            jugde: [{ field: 'title_textType', value: ['conical'] }]
                        },
                        {
                            span: 24, formType: 'LIST', name: 'title_textColorArr', label: '颜色列表', collapsible: true, jugde: [{ field: 'title_textType', value: ['conical'] }],
                            children: [
                                { span: 12, formType: 'NUMBER', name: 'offset', label: '颜色顺序', rules: true, min: 0, max: 1 },
                                { span: 12, formType: 'COLOR', name: 'color', label: '角度颜色', rules: true, mode: ['single'] }
                            ]
                        },
                    ]
                },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_title_A01_font', label: '标题字体', collapsible: true,
                    children: [
                        { span: 24, formType: 'NUMBER', name: 'title_textSize', label: '标题字号', rules: true },
                        { span: 24, formType: 'SELECT', name: 'title_textFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                        { span: 24, formType: 'RADIO', name: 'title_textWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                        { span: 24, formType: 'RADIO', name: 'title_textStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                        { span: 24, formType: 'NUMBER', name: 'title_textShadowOffsetX', label: '阴影水平', rules: true },
                        { span: 24, formType: 'NUMBER', name: 'title_textShadowOffsetY', label: '阴影垂直', rules: true },
                        { span: 24, formType: 'NUMBER', name: 'title_textShadowBlur', label: '阴影模糊', rules: true },
                        { span: 24, formType: 'COLOR', name: 'title_textShadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
                    ]
                }
            ]
        },
        {
            span: 12, formType: 'GROUP', name: 'ChartCommon_title_A02', label: '副标题设置', collapsible: true,
            jugde: [{ field: 'title_visible', value: [true] }, { field: 'title_subtextStatus', value: [true] }], children: [
                { span: 24, formType: 'INPUT', name: 'title_subtext', label: '标题内容', rules: true },
                { span: 24, formType: 'RADIO', name: 'title_subtextDirection', label: '排布方向', rules: true, valueEnum: MappingData.Charts__VChartsDirectionA01 },
                { span: 24, formType: 'RADIO', name: 'title_subtextWhiteSpace', label: '是否折行', rules: true, valueEnum: MappingData.Font__whiteSpace },
                { span: 24, formType: 'RADIO', name: 'title_subtextKeepDirIn3d', label: '3D模式', rules: true, valueEnum: MappingData.Is3DKeepBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_subtitle_A01_color', label: '标题颜色', collapsible: true,
                    children: [
                        { span: 24, formType: 'RADIO', name: 'title_subtextType', label: '色值类型', rules: true, valueEnum: MappingData.Charts__ColorTypeList },
                        {
                            span: 24, formType: 'COLOR', name: 'title_subtextColorSingle', label: '纯色背景', rules: true, mode: ['single'],
                            jugde: [{ field: 'title_subtextType', value: ['color'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_subtextx0', label: '横向起始', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_subtextType', value: ['linear', 'radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_subsubtextx1', label: '横向结束', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_subtextType', value: ['linear', 'radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_subtexty0', label: '纵向起始', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_subtextType', value: ['linear', 'radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_subtexty1', label: '纵向结束', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_subtextType', value: ['linear', 'radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_subtextr0', label: '径向起始', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_subtextType', value: ['radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_subtextr1', label: '径向结束', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_subtextType', value: ['radial'] }]
                        },
                        {
                            span: 24, formType: 'COLOR', name: 'title_subtextColorGradient', label: '背景颜色', rules: true, mode: ['gradient'],
                            jugde: [{ field: 'title_subtextType', value: ['linear', 'radial'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_subtextx', label: '横向坐标', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_subtextType', value: ['conical'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_subtexty', label: '纵向坐标', min: 0, max: 1, rules: true,
                            jugde: [{ field: 'title_subtextType', value: ['conical'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_subtextStartAngle', label: '起始角度', rules: true, tooltip: '0',
                            jugde: [{ field: 'title_subtextType', value: ['conical'] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'title_subtextEndAngle', label: '结束角度', rules: true, tooltip: '6.283185307179586',
                            jugde: [{ field: 'title_subtextType', value: ['conical'] }]
                        },
                        {
                            span: 24, formType: 'LIST', name: 'title_subtextColorArr', label: '颜色列表', collapsible: true, jugde: [{ field: 'title_subtextType', value: ['conical'] }],
                            children: [
                                { span: 12, formType: 'NUMBER', name: 'offset', label: '颜色顺序', rules: true, min: 0, max: 1 },
                                { span: 12, formType: 'COLOR', name: 'color', label: '角度颜色', rules: true, mode: ['single'] }
                            ]
                        },
                    ]
                },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_subtitle_A01_font', label: '标题字体', collapsible: true,
                    children: [
                        { span: 24, formType: 'NUMBER', name: 'title_subtextSize', label: '标题字号', rules: true },
                        { span: 24, formType: 'SELECT', name: 'title_subtextFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                        { span: 24, formType: 'RADIO', name: 'title_subtextWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                        { span: 24, formType: 'RADIO', name: 'title_subtextStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                        { span: 24, formType: 'NUMBER', name: 'title_subtextShadowOffsetX', label: '阴影水平', rules: true },
                        { span: 24, formType: 'NUMBER', name: 'title_subtextShadowOffsetY', label: '阴影垂直', rules: true },
                        { span: 24, formType: 'NUMBER', name: 'title_subtextShadowBlur', label: '阴影模糊', rules: true },
                        { span: 24, formType: 'COLOR', name: 'title_subtextShadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
                    ]
                }
            ]
        }

    ]
}
// TODO 轴设置
const ChartAxesCommonFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_axes', label: '轴设置', collapsible: true, defaultCollapsed: true,
    children: [
        {
            span: 24, formType: 'LIST', name: 'axes_arrList', label: '轴列表', collapsible: true,
            children: [
                { span: 12, formType: 'RADIO', name: 'axes_visible', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
                // { span: 12, formType: 'RADIO', name: 'axes_type', label: '轴类型', rules: true, valueEnum: MappingData.Charts__AxesTypeList },
                { span: 12, formType: 'SELECT', name: 'axes_orient', label: '轴位置', rules: true, valueEnum: MappingData.Charts__VchartsAxesOrientA01 },
                { span: 12, formType: 'RADIO', name: 'axes_inverse', label: '反向轴', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'RADIO', name: 'axes_hover', label: '悬浮交互', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'RADIO', name: 'axes_select', label: '选中交互', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'RADIO', name: 'axes_mode', label: '轴模式', rules: true, valueEnum: MappingData.Charts_AxesModeMapping },
                { span: 12, formType: 'NUMBER', name: 'axes_depth', label: 'Z轴长度', rules: true, jugde: [{ field: 'axes_mode', value: ['3d'] }] },
                { span: 12, formType: 'RADIO', name: 'axes_trimPadding', label: '两端留白', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 12, formType: 'RADIO', name: 'axes_bandSizeStatus', label: '固定组宽', rules: true, valueEnum: MappingData.IsEnabledBool
                },
                {
                    span: 12, formType: 'NUMBER', name: 'axes_bandSize', label: '固定组宽', rules: true,
                    jugde: [{ field: 'axes_bandSizeStatus', value: [true] }]
                },
                { span: 24, formType: 'RADIO', name: 'axes_domainLine', label: '轴线', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_axes_domainLine', label: '轴线设置', collapsible: true,
                    jugde: [{ field: 'axes_domainLine', value: [true] }], children: [
                        { span: 12, formType: 'NUMBER', name: 'axes_domainLine_style_lineWidth', label: '默认线宽', rules: true },
                        { span: 12, formType: 'COLOR', name: 'axes_domainLine_style_stroke', label: '默认颜色', rules: true, mode: ['single'] },

                        {
                            span: 12, formType: 'NUMBER', name: 'axes_domainLine_state_hover_lineWidth', label: '悬浮线宽', rules: true,
                            jugde: [{ field: 'axes_hover', value: [true] }]
                        },
                        {
                            span: 12, formType: 'COLOR', name: 'axes_domainLine_state_hover_stroke', label: '悬浮颜色', rules: true, mode: ['single'],
                            jugde: [{ field: 'axes_hover', value: [true] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'axes_domainLine_state_selected_lineWidth', label: '选中线宽', rules: true,
                            jugde: [{ field: 'axes_select', value: [true] }]
                        },
                        {
                            span: 12, formType: 'COLOR', name: 'axes_domainLine_state_selected_stroke', label: '选中颜色', rules: true, mode: ['single'],
                            jugde: [{ field: 'axes_select', value: [true] }]
                        },
                    ]
                },
                { span: 24, formType: 'RADIO', name: 'axes_label', label: '轴标签', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_axes_label', label: '标签设置', collapsible: true,
                    jugde: [{ field: 'axes_label', value: [true] }], children: [
                        {
                            span: 8, formType: 'SELECT', name: 'axes_label_containerAlign', label: '对齐方向', rules: true,
                            valueEnum: MappingData.Charts__axesLabelContainerAlign
                        },
                        { span: 8, formType: 'NUMBER', name: 'axes_label_space', label: '标签间距', rules: true, tooltip: '与刻度间距' },
                        { span: 8, formType: 'NUMBER', name: 'axes_label_unit', label: '额外单位', tooltip: '显示在标签后' },
                        { span: 12, formType: 'RADIO', name: 'axes_label_inside', label: '标签朝向', rules: true, valueEnum: MappingData.axesLabelInside },
                        { span: 12, formType: 'RADIO', name: 'axes_label_autoRotate', label: '自动旋转', rules: true, valueEnum: MappingData.IsEnabledBool },
                        { span: 12, formType: 'RADIO', name: 'axes_label_autoLimit', label: '自动切断', rules: true, valueEnum: MappingData.IsEnabledBool },
                        { span: 12, formType: 'RADIO', name: 'axes_label_autoWrap', label: '自动换行', rules: true, valueEnum: MappingData.IsEnabledBool },
                        { span: 12, formType: 'RADIO', name: 'axes_label_autoHide', label: '自动隐藏', rules: true, valueEnum: MappingData.IsEnabledBool },
                        {
                            span: 12, formType: 'NUMBER', name: 'axes_label_autoHideSeparation', label: '文本间距', rules: true,
                            jugde: [{ field: 'axes_label_autoHide', value: [true] }]
                        },
                        {
                            span: 24, formType: 'GROUP', name: 'ChartCommon_axes_label_style', label: '默认样式', collapsible: true,
                            children: [
                                { span: 8, formType: 'COLOR', name: 'axes_label_styleFill', label: '标签颜色', rules: true },
                                { span: 8, formType: 'NUMBER', name: 'axes_label_styleSize', label: '标签字号', rules: true },
                                { span: 8, formType: 'SELECT', name: 'axes_label_styleFamily', label: '标签字体', rules: true, valueEnum: MappingData.Font__Family },
                                { span: 12, formType: 'RADIO', name: 'axes_label_styleWeight', label: '标签加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                                { span: 12, formType: 'RADIO', name: 'axes_label_styleStyle', label: '标签倾斜', rules: true, valueEnum: MappingData.Font__Style },
                                { span: 12, formType: 'NUMBER', name: 'axes_label_styleShadowOffsetX', label: '阴影水平', rules: true },
                                { span: 12, formType: 'NUMBER', name: 'axes_label_styleShadowOffsetY', label: '阴影垂直', rules: true },
                                { span: 12, formType: 'NUMBER', name: 'axes_label_styleShadowBlur', label: '阴影模糊', rules: true },
                                { span: 12, formType: 'COLOR', name: 'axes_label_styleShadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
                            ]
                        },
                        {
                            span: 12, formType: 'GROUP', name: 'ChartCommon_axes_label_style_hover', label: '悬浮样式', collapsible: true,
                            jugde: [{ field: 'axes_hover', value: [true] }], children: [
                                { span: 24, formType: 'COLOR', name: 'axes_label_hover_styleFill', label: '标签颜色', rules: true },
                                { span: 24, formType: 'NUMBER', name: 'axes_label_hover_styleSize', label: '标签字号', rules: true },
                                {
                                    span: 24, formType: 'SELECT', name: 'axes_label_hover_styleFamily', label: '标签字体', rules: true,
                                    valueEnum: MappingData.Font__Family
                                },
                                {
                                    span: 24, formType: 'RADIO', name: 'axes_label_hover_styleWeight', label: '标签加粗', rules: true,
                                    valueEnum: MappingData.Font__WeightInt
                                },
                                {
                                    span: 24, formType: 'RADIO', name: 'axes_label_hover_styleStyle', label: '标签倾斜', rules: true,
                                    valueEnum: MappingData.Font__Style
                                },
                                { span: 24, formType: 'NUMBER', name: 'axes_label_hover_styleShadowOffsetX', label: '阴影水平', rules: true },
                                { span: 24, formType: 'NUMBER', name: 'axes_label_hover_styleShadowOffsetY', label: '阴影垂直', rules: true },
                                { span: 24, formType: 'NUMBER', name: 'axes_label_hover_styleShadowBlur', label: '阴影模糊', rules: true },
                                { span: 24, formType: 'COLOR', name: 'axes_label_hover_styleShadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
                            ]
                        },
                        {
                            span: 12, formType: 'GROUP', name: 'ChartCommon_axes_label_style_select', label: '选中样式', collapsible: true,
                            jugde: [{ field: 'axes_select', value: [true] }], children: [
                                { span: 24, formType: 'COLOR', name: 'axes_label_select_styleFill', label: '标签颜色', rules: true },
                                { span: 24, formType: 'NUMBER', name: 'axes_label_select_styleSize', label: '标签字号', rules: true },
                                {
                                    span: 24, formType: 'SELECT', name: 'axes_label_select_styleFamily', label: '标签字体', rules: true,
                                    valueEnum: MappingData.Font__Family
                                },
                                {
                                    span: 24, formType: 'RADIO', name: 'axes_label_select_styleWeight', label: '标签加粗', rules: true,
                                    valueEnum: MappingData.Font__WeightInt
                                },
                                {
                                    span: 24, formType: 'RADIO', name: 'axes_label_select_styleStyle', label: '标签倾斜', rules: true,
                                    valueEnum: MappingData.Font__Style
                                },
                                { span: 24, formType: 'NUMBER', name: 'axes_label_select_styleShadowOffsetX', label: '阴影水平', rules: true },
                                { span: 24, formType: 'NUMBER', name: 'axes_label_select_styleShadowOffsetY', label: '阴影垂直', rules: true },
                                { span: 24, formType: 'NUMBER', name: 'axes_label_select_styleShadowBlur', label: '阴影模糊', rules: true },
                                { span: 24, formType: 'COLOR', name: 'axes_label_select_styleShadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
                            ]
                        },
                    ]
                },
                { span: 24, formType: 'RADIO', name: 'axes_title', label: '轴标题', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_axes_title', label: '标题设置', collapsible: true,
                    jugde: [{ field: 'axes_title', value: [true] }], children: [
                        { span: 12, formType: 'INPUT', name: 'axes_title_text', label: '标题内容', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'axes_title_space', label: '轴距离', rules: true },
                        {
                            span: 12, formType: 'RADIO', name: 'axes_title_position', label: '标题位置', rules: true,
                            valueEnum: MappingData.Charts__VchartsLegendsPosition
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'axes_title_inside', label: '标题朝向', rules: true,
                            valueEnum: MappingData.axesLabelInside
                        },
                        { span: 12, formType: 'NUMBER', name: 'axes_title_padding', label: '内边距', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'axes_title_angle', label: '旋转角度', rules: true },
                        {
                            span: 24, formType: 'GROUP', name: 'ChartCommon_axes_title_style', label: '默认样式', collapsible: true,
                            children: [
                                { span: 8, formType: 'COLOR', name: 'axes_title_styleFill', label: '标题颜色', rules: true },
                                { span: 8, formType: 'NUMBER', name: 'axes_title_styleSize', label: '标题字号', rules: true },
                                { span: 8, formType: 'SELECT', name: 'axes_title_styleFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                                { span: 12, formType: 'RADIO', name: 'axes_title_styleWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                                { span: 12, formType: 'RADIO', name: 'axes_title_styleStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                                { span: 12, formType: 'NUMBER', name: 'axes_title_styleShadowOffsetX', label: '阴影水平', rules: true },
                                { span: 12, formType: 'NUMBER', name: 'axes_title_styleShadowOffsetY', label: '阴影垂直', rules: true },
                                { span: 12, formType: 'NUMBER', name: 'axes_title_styleShadowBlur', label: '阴影模糊', rules: true },
                                { span: 12, formType: 'COLOR', name: 'axes_title_styleShadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
                            ]
                        },
                        {
                            span: 24, formType: 'GROUP', name: 'ChartCommon_axes_title_hover_style', label: '悬浮样式', collapsible: true,
                            jugde: [{ field: 'axes_hover', value: [true] }], children: [
                                { span: 8, formType: 'COLOR', name: 'axes_title_hover_styleFill', label: '标题颜色', rules: true },
                                { span: 8, formType: 'NUMBER', name: 'axes_title_hover_styleSize', label: '标题字号', rules: true },
                                { span: 8, formType: 'SELECT', name: 'axes_title_hover_styleFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                                { span: 12, formType: 'RADIO', name: 'axes_title_hover_styleWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                                { span: 12, formType: 'RADIO', name: 'axes_title_hover_styleStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                                { span: 12, formType: 'NUMBER', name: 'axes_title_hover_styleShadowOffsetX', label: '阴影水平', rules: true },
                                { span: 12, formType: 'NUMBER', name: 'axes_title_hover_styleShadowOffsetY', label: '阴影垂直', rules: true },
                                { span: 12, formType: 'NUMBER', name: 'axes_title_hover_styleShadowBlur', label: '阴影模糊', rules: true },
                                { span: 12, formType: 'COLOR', name: 'axes_title_hover_styleShadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
                            ]
                        },
                        {
                            span: 24, formType: 'GROUP', name: 'ChartCommon_axes_title_select_style', label: '选中样式', collapsible: true,
                            jugde: [{ field: 'axes_select', value: [true] }], children: [
                                { span: 8, formType: 'COLOR', name: 'axes_title_select_styleFill', label: '标题颜色', rules: true },
                                { span: 8, formType: 'NUMBER', name: 'axes_title_select_styleSize', label: '标题字号', rules: true },
                                { span: 8, formType: 'SELECT', name: 'axes_title_select_styleFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                                { span: 12, formType: 'RADIO', name: 'axes_title_select_styleWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                                { span: 12, formType: 'RADIO', name: 'axes_title_select_styleStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                                { span: 12, formType: 'NUMBER', name: 'axes_title_select_styleShadowOffsetX', label: '阴影水平', rules: true },
                                { span: 12, formType: 'NUMBER', name: 'axes_title_select_styleShadowOffsetY', label: '阴影垂直', rules: true },
                                { span: 12, formType: 'NUMBER', name: 'axes_title_select_styleShadowBlur', label: '阴影模糊', rules: true },
                                { span: 12, formType: 'COLOR', name: 'axes_title_select_styleShadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
                            ]
                        },
                    ]
                },
                { span: 24, formType: 'RADIO', name: 'axes_grid', label: '网格线', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_axes_grid', label: '网格设置', collapsible: true,
                    jugde: [{ field: 'axes_grid', value: [true] }], children: [
                        {
                            span: 24, formType: 'RADIO', name: 'axes_grid_alignWithLabel', label: '对齐标签', rules: true, valueEnum: MappingData.IsEnabledBool,
                            tooltip: '配置为 禁用 则显示在前后两个刻度中间'
                        },
                        {
                            span: 24, formType: 'LIST', name: 'axes_grid_alternateColor', label: '网格阴影', collapsible: true,
                            children: [{ span: 24, formType: 'COLOR', name: 'color', label: '网格颜色', rules: true, mode: ['single'] }]
                        },
                        { span: 12, formType: 'COLOR', name: 'axes_grid_stroke', label: '网格颜色', rules: true, mode: ['single'] },
                        { span: 12, formType: 'NUMBER', name: 'axes_grid_lineWidth', label: '网格线宽', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'axes_grid_lineDash1', label: '虚线长度', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'axes_grid_lineDash2', label: '实现长度', rules: true },
                    ]
                },
                { span: 24, formType: 'RADIO', name: 'axes_unit', label: '轴单位', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_axes_unit', label: '单位设置', collapsible: true,
                    jugde: [{ field: 'axes_unit', value: [true] }], children: [
                        { span: 12, formType: 'NUMBER', name: 'axes_unit_dx', label: 'X轴偏移', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'axes_unit_dy', label: 'Y轴偏移', rules: true },
                        { span: 12, formType: 'INPUT', name: 'axes_unit_text', label: '单位名称', rules: true },
                        { span: 12, formType: 'COLOR', name: 'axes_unit_styleFill', label: '单位颜色', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'axes_unit_styleSize', label: '单位字号', rules: true },
                        { span: 12, formType: 'SELECT', name: 'axes_unit_styleFamily', label: '单位字体', rules: true, valueEnum: MappingData.Font__Family },
                        { span: 12, formType: 'RADIO', name: 'axes_unit_styleWeight', label: '单位加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                        { span: 12, formType: 'RADIO', name: 'axes_unit_styleStyle', label: '单位倾斜', rules: true, valueEnum: MappingData.Font__Style },
                        { span: 12, formType: 'NUMBER', name: 'axes_unit_styleShadowOffsetX', label: '阴影水平', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'axes_unit_styleShadowOffsetY', label: '阴影垂直', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'axes_unit_styleShadowBlur', label: '阴影模糊', rules: true },
                        { span: 12, formType: 'COLOR', name: 'axes_unit_styleShadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
                    ]
                },
                { span: 24, formType: 'RADIO', name: 'axes_tick', label: '轴刻度', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_axes_tick', label: '刻度设置', collapsible: true,
                    jugde: [{ field: 'axes_tick', value: [true] }], children: [
                        {
                            span: 12, formType: 'RADIO', name: 'axes_tick_alignWithLabel', label: '对齐方式', rules: true,
                            valueEnum: MappingData.IsEnabledBool, tooltip: '配置为 禁用 则显示在前后两个刻度中间'
                        },
                        { span: 12, formType: 'RADIO', name: 'axes_tick_inside', label: '刻度朝向', rules: true, valueEnum: MappingData.axesLabelInside },
                        {
                            span: 12, formType: 'RADIO', name: 'axes_tick_noDecimals', label: '避免小数', rules: true,
                            valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'axes_type', value: ['linear'] }]
                        },
                        { span: 12, formType: 'NUMBER', name: 'axes_tick_style_lineWidth', label: '默认线宽', rules: true },
                        { span: 12, formType: 'COLOR', name: 'axes_tick_style_stroke', label: '默认颜色', rules: true, mode: ['single'] },
                        {
                            span: 12, formType: 'NUMBER', name: 'axes_tick_style_hover_lineWidth', label: '悬浮线宽', rules: true,
                            jugde: [{ field: 'axes_hover', value: [true] }]
                        },
                        {
                            span: 12, formType: 'COLOR', name: 'axes_tick_style_hover_stroke', label: '悬浮颜色', rules: true, mode: ['single'],
                            jugde: [{ field: 'axes_hover', value: [true] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'axes_tick_style_selected_lineWidth', label: '选中线宽', rules: true,
                            jugde: [{ field: 'axes_select', value: [true] }]
                        },
                        {
                            span: 12, formType: 'COLOR', name: 'axes_tick_style_selected_stroke', label: '选中颜色', rules: true, mode: ['single'],
                            jugde: [{ field: 'axes_select', value: [true] }]
                        },
                        { span: 12, formType: 'NUMBER', name: 'axes_tick_tickSize', label: '刻度长度', rules: true },
                        { span: 24, formType: 'RADIO', name: 'axes_tick_tickCount_status', label: '指定刻度数量', rules: true, valueEnum: MappingData.IsEnabledBool },
                        {
                            span: 12, formType: 'NUMBER', name: 'axes_tick_tickCount', label: '刻度数量', rules: true, tooltip: '值小不一定保证准确',
                            jugde: [{ field: 'axes_tick_tickCount_status', value: [true] }]
                        },

                    ]
                },
            ]
        },
    ]
}
// TODO 提示信息
const ChartTooltipCommonFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip', label: '提示信息', collapsible: true, defaultCollapsed: true,
    children: [
        { span: 24, formType: 'RADIO', name: 'axes_tooltip', label: '提示信息', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 12, formType: 'RADIO', name: 'axes_tooltip_trigger', label: '触发方式', rules: true,
            valueEnum: MappingData.Charts__VchartsTrigger, jugde: [{ field: 'axes_tooltip', value: [true] }]
        },
        {
            span: 12, formType: 'RADIO', name: 'axes_tooltip_triggerOff', label: '隐藏方式', rules: true,
            valueEnum: MappingData.Charts__VchartsTriggerTer, jugde: [{ field: 'axes_tooltip', value: [true] }]
        },
        {
            span: 24, formType: 'RADIO', name: 'axes_tooltip_dimension', label: '主要面板', rules: true, valueEnum: MappingData.IsEnabledBool,
            jugde: [{ field: 'axes_tooltip', value: [true] }], tooltip: '主体提示信息'
        },
        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_dimension', label: '主要面板', collapsible: true,
            jugde: [{ field: 'axes_tooltip', value: [true] }, { field: 'axes_tooltip_dimension', value: [true] }], children: [
                {
                    span: 12, formType: 'SELECT', name: 'axes_tooltip_dimension_position', label: '显示位置', rules: true,
                    valueEnum: MappingData.Charts__VchartsTooltipPosition
                },
                {
                    span: 12, formType: 'RADIO', name: 'axes_tooltip_dimension_positionMode', label: '位置模式', rules: true,
                    valueEnum: MappingData.Charts__VchartsTooltipPositionMode
                },
                { span: 24, formType: 'RADIO', name: 'axes_tooltip_dimension_title', label: '提示标题', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_dimension_title', label: '提示标题', collapsible: true,
                    jugde: [{ field: 'axes_tooltip_dimension_title', value: [true] }], children: [
                        { span: 24, formType: 'RADIO', name: 'axes_tooltip_dimension_title_extra', label: '额外标题', rules: true, valueEnum: MappingData.IsEnabledBool },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_dimension_title_af', label: '额外前缀',
                            jugde: [{ field: 'axes_tooltip_dimension_title_extra', value: [true] }]
                        },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_dimension_title_be', label: '额外后缀',
                            jugde: [{ field: 'axes_tooltip_dimension_title_extra', value: [true] }]
                        },
                    ]
                },
                { span: 24, formType: 'RADIO', name: 'axes_tooltip_dimension_content', label: '显示数值', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_dimension_content', label: '显示数值', collapsible: true,
                    jugde: [{ field: 'axes_tooltip_dimension_content', value: [true] }], children: [
                        {
                            span: 12, formType: 'RADIO', name: 'axes_tooltip_dimension_content_key', label: '额外名称', rules: true,
                            valueEnum: MappingData.IsEnabledBool
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'axes_tooltip_dimension_content_value', label: '额外数值', rules: true,
                            valueEnum: MappingData.IsEnabledBool
                        },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_dimension_content_key_af', label: '名称前缀',
                            jugde: [{ field: 'axes_tooltip_dimension_content_key', value: [true] }]
                        },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_dimension_content_key_bf', label: '名称后缀',
                            jugde: [{ field: 'axes_tooltip_dimension_content_key', value: [true] }]
                        },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_dimension_content_value_af', label: '数值前缀',
                            jugde: [{ field: 'axes_tooltip_dimension_content_value', value: [true] }]
                        },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_dimension_content_value_bf', label: '数值后缀',
                            jugde: [{ field: 'axes_tooltip_dimension_content_value', value: [true] }]
                        },
                    ]
                },
            ]
        },
        {
            span: 24, formType: 'RADIO', name: 'axes_tooltip_mark', label: '图元设置', rules: true, valueEnum: MappingData.IsEnabledBool,
            jugde: [{ field: 'axes_tooltip', value: [true] }], tooltip: '图元的提示信息'
        },
        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_mark', label: '图元设置', collapsible: true,
            jugde: [{ field: 'axes_tooltip', value: [true] }, { field: 'axes_tooltip_mark', value: [true] }], children: [
                {
                    span: 12, formType: 'SELECT', name: 'axes_tooltip_mark_position', label: '显示位置', rules: true,
                    valueEnum: MappingData.Charts__VchartsTooltipPosition
                },
                {
                    span: 12, formType: 'RADIO', name: 'axes_tooltip_mark_positionMode', label: '位置模式', rules: true,
                    valueEnum: MappingData.Charts__VchartsTooltipPositionMode
                },
                { span: 12, formType: 'NUMBER', name: 'axes_tooltip_offset_x', label: 'X轴偏移', rules: true },
                { span: 12, formType: 'NUMBER', name: 'axes_tooltip_offset_y', label: 'Y轴偏移', rules: true },
                { span: 24, formType: 'RADIO', name: 'axes_tooltip_mark_title', label: '提示标题', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_mark_title', label: '提示标题', collapsible: true,
                    jugde: [{ field: 'axes_tooltip_mark_title', value: [true] }], children: [
                        { span: 24, formType: 'RADIO', name: 'axes_tooltip_mark_title_extra', label: '额外标题', rules: true, valueEnum: MappingData.IsEnabledBool },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_mark_title_af', label: '额外前缀',
                            jugde: [{ field: 'axes_tooltip_mark_title_extra', value: [true] }]
                        },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_mark_title_be', label: '额外后缀',
                            jugde: [{ field: 'axes_tooltip_mark_title_extra', value: [true] }]
                        },
                    ]
                },
                { span: 24, formType: 'RADIO', name: 'axes_tooltip_mark_content', label: '显示数值', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_mark_content', label: '显示数值', collapsible: true,
                    jugde: [{ field: 'axes_tooltip_mark_content', value: [true] }], children: [
                        {
                            span: 12, formType: 'RADIO', name: 'axes_tooltip_mark_content_key', label: '额外名称', rules: true,
                            valueEnum: MappingData.IsEnabledBool
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'axes_tooltip_mark_content_value', label: '额外数值', rules: true,
                            valueEnum: MappingData.IsEnabledBool
                        },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_mark_content_key_af', label: '名称前缀',
                            jugde: [{ field: 'axes_tooltip_mark_content_key', value: [true] }]
                        },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_mark_content_key_bf', label: '名称后缀',
                            jugde: [{ field: 'axes_tooltip_mark_content_key', value: [true] }]
                        },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_mark_content_value_af', label: '数值前缀',
                            jugde: [{ field: 'axes_tooltip_mark_content_value', value: [true] }]
                        },
                        {
                            span: 12, formType: 'INPUT', name: 'axes_tooltip_mark_content_value_bf', label: '数值后缀',
                            jugde: [{ field: 'axes_tooltip_mark_content_value', value: [true] }]
                        },
                    ]
                },
            ],
        },
        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_style', label: '样式设置', collapsible: true,
            children: [
                { span: 24, formType: 'NUMBER', name: 'axes_tooltip_style_spaceRow', label: '内容行间距', rules: true },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_style_panel', label: '背景框设置', collapsible: true,
                    children: [
                        { span: 24, formType: 'NUMBER', name: 'axes_tooltip_style_spanel_padding', label: '内填充', rules: true },
                        { span: 24, formType: 'COLOR', name: 'axes_tooltip_style_spanel_backgroundColor', label: '背景色', rules: true, mode: ['single'] },
                        {
                            span: 12, formType: 'GROUP', name: 'ChartCommon_tooltip_style_panel_border', label: '边框设置', collapsible: true,
                            children: [
                                {
                                    span: 24, formType: 'RADIO', name: 'axes_tooltip_style_spanel_border', label: '是否启用', rules: true,
                                    valueEnum: MappingData.IsEnabledBool
                                },
                                {
                                    span: 24, formType: 'NUMBER', name: 'axes_tooltip_style_spanel_border_width', label: '线框宽度', rules: true,
                                    jugde: [{ field: 'axes_tooltip_style_spanel_border', value: [true] }]
                                },
                                {
                                    span: 24, formType: 'NUMBER', name: 'axes_tooltip_style_spanel_border_radius', label: '线框圆角', rules: true,
                                    jugde: [{ field: 'axes_tooltip_style_spanel_border', value: [true] }]
                                },
                                {
                                    span: 24, formType: 'COLOR', name: 'axes_tooltip_style_spanel_border_color', label: '线框颜色', rules: true,
                                    jugde: [{ field: 'axes_tooltip_style_spanel_border', value: [true] }]
                                }
                            ]
                        },
                        {
                            span: 12, formType: 'GROUP', name: 'ChartCommon_tooltip_style_panel_shadow', label: '阴影设置', collapsible: true,
                            children: [
                                {
                                    span: 24, formType: 'RADIO', name: 'axes_tooltip_style_spanel_shadow', label: '是否启用', rules: true,
                                    valueEnum: MappingData.IsEnabledBool
                                },
                                {
                                    span: 24, formType: 'NUMBER', name: 'axes_tooltip_style_spanel_shadow_x', label: 'X轴阴影', rules: true,
                                    jugde: [{ field: 'axes_tooltip_style_spanel_shadow', value: [true] }]
                                },
                                {
                                    span: 24, formType: 'NUMBER', name: 'axes_tooltip_style_spanel_shadow_y', label: 'Y轴阴影', rules: true,
                                    jugde: [{ field: 'axes_tooltip_style_spanel_shadow', value: [true] }]
                                },
                                {
                                    span: 24, formType: 'NUMBER', name: 'axes_tooltip_style_spanel_shadow_blur', label: '模糊半径', rules: true,
                                    jugde: [{ field: 'axes_tooltip_style_spanel_shadow', value: [true] }]
                                },
                                {
                                    span: 24, formType: 'NUMBER', name: 'axes_tooltip_style_spanel_shadow_spread', label: '扩散半径', rules: true,
                                    jugde: [{ field: 'axes_tooltip_style_spanel_shadow', value: [true] }]
                                },
                                {
                                    span: 24, formType: 'COLOR', name: 'axes_tooltip_style_spanel_shadow_color', label: '阴影颜色', rules: true,
                                    jugde: [{ field: 'axes_tooltip_style_spanel_shadow', value: [true] }]
                                },
                            ]
                        },
                    ]
                },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_style_shape', label: '图形设置', collapsible: true,
                    children: [
                        {
                            span: 24, formType: 'RADIO', name: 'tooltip_style_shape_hasShape', label: '是否启用', rules: true,
                            valueEnum: MappingData.IsEnabledBool
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'tooltip_style_shape_shapeType', label: '图形样式', rules: true,
                            valueEnum: MappingData.Charts_tooltipDimension, jugde: [{ field: 'tooltip_style_shape_hasShape', value: [true] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'tooltip_style_shape_shapeSize', label: '图形尺寸', rules: true,
                            jugde: [{ field: 'tooltip_style_shape_hasShape', value: [true] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'tooltip_style_shape_spacing', label: '图形间距', rules: true,
                            jugde: [{ field: 'tooltip_style_shape_hasShape', value: [true] }]
                        },
                        {
                            span: 12, formType: 'NUMBER', name: 'tooltip_style_shape_shapeLineWidth', label: '描边尺寸', rules: true, min: 0, max: 1,
                            jugde: [{ field: 'tooltip_style_shape_hasShape', value: [true] }]
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'tooltip_style_shape_type', label: '边框类型', rules: true,
                            valueEnum: MappingData.Charts__widthColorType, jugde: [{ field: 'tooltip_style_shape_hasShape', value: [true] }]
                        },
                        {
                            span: 12, formType: 'COLOR', name: 'tooltip_style_shape_shapeStroke', label: '描边颜色', rules: true,
                            jugde: [{ field: 'tooltip_style_shape_hasShape', value: [true] }, { field: 'tooltip_style_shape_type', value: ['A01'] }]
                        },
                        {
                            span: 12, formType: 'COLOR', name: 'tooltip_style_shape_shapeFill', label: '填充颜色', rules: true,
                            jugde: [{ field: 'tooltip_style_shape_hasShape', value: [true] }, { field: 'tooltip_style_shape_type', value: ['A02'] }]
                        },
                    ]
                },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_style_titleLabel', label: '标题设置', collapsible: true,
                    children: [
                        {
                            span: 24, formType: 'RADIO', name: 'tooltip_style_titleLabel_textAlign', label: '对齐方式', rules: true,
                            valueEnum: MappingData.System__AlignmentLCR
                        },
                        { span: 12, formType: 'COLOR', name: 'tooltip_style_titleLabel_fontColor', label: '标题颜色', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'tooltip_style_titleLabel_fontSize', label: '标题字号', rules: true },
                        {
                            span: 12, formType: 'SELECT', name: 'tooltip_style_titleLabel_fontFamily', label: '标题字体', rules: true,
                            valueEnum: MappingData.Font__Family
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'tooltip_style_titleLabel_fontWeight', label: '标题加粗', rules: true,
                            valueEnum: MappingData.Font__WeightInt
                        },
                    ]
                },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_style_keyLabel', label: '键行设置', collapsible: true,
                    children: [
                        {
                            span: 24, formType: 'RADIO', name: 'tooltip_style_keyLabel_textAlign', label: '对齐方式', rules: true,
                            valueEnum: MappingData.System__AlignmentLCR
                        },
                        { span: 12, formType: 'COLOR', name: 'tooltip_style_keyLabel_fontColor', label: '标题颜色', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'tooltip_style_keyLabel_fontSize', label: '标题字号', rules: true },
                        {
                            span: 12, formType: 'SELECT', name: 'tooltip_style_keyLabel_fontFamily', label: '标题字体', rules: true,
                            valueEnum: MappingData.Font__Family
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'tooltip_style_keyLabel_fontWeight', label: '标题加粗', rules: true,
                            valueEnum: MappingData.Font__WeightInt
                        },
                    ]
                },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_tooltip_style_valueLabel', label: '值行设置', collapsible: true,
                    children: [
                        {
                            span: 24, formType: 'RADIO', name: 'tooltip_style_valueLabel_textAlign', label: '对齐方式', rules: true,
                            valueEnum: MappingData.System__AlignmentLCR
                        },
                        { span: 12, formType: 'COLOR', name: 'tooltip_style_valueLabel_fontColor', label: '标题颜色', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'tooltip_style_valueLabel_fontSize', label: '标题字号', rules: true },
                        {
                            span: 12, formType: 'SELECT', name: 'tooltip_style_valueLabel_fontFamily', label: '标题字体', rules: true,
                            valueEnum: MappingData.Font__Family
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'tooltip_style_valueLabel_fontWeight', label: '标题加粗', rules: true,
                            valueEnum: MappingData.Font__WeightInt
                        },
                    ]
                },
            ]
        }
    ]
}
// TODO 图例信息
const ChartLegendsCommonFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_legends', label: '图例设置', collapsible: true, defaultCollapsed: true,
    children: [
        { span: 24, formType: 'RADIO', name: 'legends_visible', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'legends_base', label: '基础信息', collapsible: true,
            jugde: [{ field: 'legends_visible', value: [true] }], children: [
                { span: 12, formType: 'NUMBER', name: 'legends_offsetX', label: 'X轴偏移', rules: true },
                { span: 12, formType: 'NUMBER', name: 'legends_offsetY', label: 'Y轴偏移', rules: true },
                { span: 12, formType: 'RADIO', name: 'legends_orient', label: '位置信息', rules: true, valueEnum: MappingData.Charts__LegendsOrient },
                { span: 12, formType: 'RADIO', name: 'legends_position', label: '对齐方式', rules: true, valueEnum: MappingData.Charts__VchartsLegendsPosition },
                { span: 12, formType: 'RADIO', name: 'legends_select', label: '选中功能', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 12, formType: 'RADIO', name: 'legends_selectMode', label: '选中模式', rules: true,
                    valueEnum: MappingData.Charts__VchartsLegendsSelectMode, jugde: [{ field: 'legends_select', value: [true] }]
                },
                { span: 12, formType: 'RADIO', name: 'legends_hover', label: '悬浮功能', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'RADIO', name: 'legends_reversed', label: '反向图例', rules: true, valueEnum: MappingData.IsEnabledBool },
            ]
        },
        {
            span: 24, formType: 'RADIO', name: 'legends_title_visible', label: '图例标题', rules: true,
            valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'legends_visible', value: [true] }]
        },
        {
            span: 24, formType: 'GROUP', name: 'legends_title', label: '标题设置', collapsible: true,
            jugde: [{ field: 'legends_title_visible', value: [true] }], children: [
                { span: 12, formType: 'INPUT', name: 'legends_title_text', label: '标题内容', rules: true },
                { span: 12, formType: 'RADIO', name: 'legends_title_align', label: '对齐方式', rules: true, valueEnum: MappingData.System__AlignmentSCE },
                { span: 12, formType: 'NUMBER', name: 'legends_title_space', label: '图例间距', rules: true },
                { span: 12, formType: 'NUMBER', name: 'legends_title_padding', label: '内填充', rules: true },
                { span: 12, formType: 'COLOR', name: 'legends_title_fontFill', label: '标题颜色', rules: true },
                { span: 12, formType: 'NUMBER', name: 'legends_title_fontSize', label: '标题字号', rules: true },
                { span: 12, formType: 'SELECT', name: 'legends_title_fontFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                { span: 12, formType: 'RADIO', name: 'legends_title_fontWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                { span: 12, formType: 'RADIO', name: 'legends_title_fontStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                { span: 12, formType: 'NUMBER', name: 'legends_title_shadowOffsetX', label: '阴影水平', rules: true },
                { span: 12, formType: 'NUMBER', name: 'legends_title_shadowOffsetY', label: '阴影垂直', rules: true },
                { span: 12, formType: 'NUMBER', name: 'legends_title_shadowBlur', label: '阴影模糊', rules: true },
                { span: 12, formType: 'COLOR', name: 'legends_title_shadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
            ]
        },
        {
            span: 24, formType: 'RADIO', name: 'legends_item', label: '图例配置', rules: true,
            valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'legends_visible', value: [true] }]
        },
        {
            span: 24, formType: 'GROUP', name: 'legends_item_list', label: '图例配置', collapsible: true,
            jugde: [{ field: 'legends_item', value: [true] }], children: [
                { span: 12, formType: 'NUMBER', name: 'legends_item_spaceCol', label: '水平间距', rules: true },
                { span: 12, formType: 'NUMBER', name: 'legends_item_spaceRow', label: '垂直间距', rules: true },
                { span: 12, formType: 'COLOR', name: 'legends_item_background', label: '默认背景', mode: ['single'] },
                { span: 12, formType: 'COLOR', name: 'legends_item_backActive', label: '选中背景', mode: ['single'] },
                { span: 12, formType: 'NUMBER', name: 'legends_item_padding', label: '内填充', rules: true },
                { span: 12, formType: 'RADIO', name: 'legends_item_align', label: '排列方式', rules: true, valueEnum: MappingData.Charts__LegendsItemAlign },
                { span: 12, formType: 'RADIO', name: 'legends_item_shape', label: '显示图标', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 12, formType: 'NUMBER', name: 'legends_item_shape_space', label: '图标间距', rules: true,
                    jugde: [{ field: 'legends_item_shape', value: [true] }]
                },
                {
                    span: 12, formType: 'NUMBER', name: 'legends_item_shape_size', label: '图标尺寸', rules: true,
                    jugde: [{ field: 'legends_item_shape', value: [true] }]
                },
                {
                    span: 12, formType: 'SELECT', name: 'legends_item_shape_symbolType', label: '图标形状', rules: true,
                    valueEnum: MappingData.Charts__VchartsPointCurveType, jugde: [{ field: 'legends_item_shape', value: [true] }]
                },
                {
                    span: 24, formType: 'GROUP', name: 'legends_item_label', label: '标签设置', collapsible: true, children: [
                        { span: 12, formType: 'INPUT', name: 'legends_item_label_af', label: '额外前缀' },
                        { span: 12, formType: 'INPUT', name: 'legends_item_label_bf', label: '额外后缀' },

                        { span: 12, formType: 'NUMBER', name: 'legends_item_label_space', label: '标签间距', rules: true },
                        { span: 12, formType: 'COLOR', name: 'legends_item_label_fontFill', label: '标题颜色', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'legends_item_label_fontSize', label: '标题字号', rules: true },
                        {
                            span: 12, formType: 'SELECT', name: 'legends_item_label_fontFamily', label: '标题字体', rules: true,
                            valueEnum: MappingData.Font__Family
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'legends_item_label_fontWeight', label: '标题加粗', rules: true,
                            valueEnum: MappingData.Font__WeightInt
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'legends_item_label_fontStyle', label: '标题倾斜', rules: true,
                            valueEnum: MappingData.Font__Style
                        },
                        { span: 12, formType: 'NUMBER', name: 'legends_item_label_shadowOffsetX', label: '阴影水平', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'legends_item_label_shadowOffsetY', label: '阴影垂直', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'legends_item_label_shadowBlur', label: '阴影模糊', rules: true },
                        { span: 12, formType: 'COLOR', name: 'legends_item_label_shadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
                    ]
                }
            ]
        }
    ]
}
// TODO 十字准星
const ChartCrosshairCommonFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_crosshair', label: '十字准星设置', collapsible: true, defaultCollapsed: true,
    children: [
        { span: 24, formType: 'RADIO', name: 'crosshair_trigger', label: '触发方式', rules: true, valueEnum: MappingData.Charts__crosshairTrigger },
        { span: 12, formType: 'RADIO', name: 'crosshair_xField', label: 'X轴渲染', rules: true, valueEnum: MappingData.IsEnabledBool },
        { span: 12, formType: 'RADIO', name: 'crosshair_yField', label: 'Y轴渲染', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 12, formType: 'GROUP', name: 'crosshair_xField_line', label: 'X轴标记', collapsible: true,
            jugde: [{ field: 'crosshair_xField', value: [true] }], children: [
                { span: 24, formType: 'RADIO', name: 'crosshair_xField_type', label: 'Y轴渲染', rules: true, valueEnum: MappingData.Charts__VchartsCrosshairType },
                { span: 24, formType: 'COLOR', name: 'crosshair_xField_color', label: '颜色', rules: true },
                { span: 24, formType: 'NUMBER', name: 'crosshair_xField_lineWidth', label: '线宽', rules: true },
                { span: 24, formType: 'NUMBER', name: 'crosshair_xField_lineDash_s', label: '实线', rules: true },
                { span: 24, formType: 'NUMBER', name: 'crosshair_xField_lineDash_x', label: '虚线', rules: true },
            ]
        },
        {
            span: 12, formType: 'GROUP', name: 'crosshair_xField_label', label: 'X轴标签', collapsible: true,
            jugde: [{ field: 'crosshair_xField', value: [true] }], children: [
                { span: 24, formType: 'COLOR', name: 'crosshair_xField_label_color', label: '标签颜色', rules: true },
                { span: 24, formType: 'NUMBER', name: 'crosshair_xField_label_size', label: '标签字号', rules: true },
                { span: 24, formType: 'SELECT', name: 'crosshair_xField_label_family', label: '标签字体', rules: true, valueEnum: MappingData.Font__Family },
                { span: 24, formType: 'RADIO', name: 'crosshair_xField_label_weight', label: '标签加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                { span: 24, formType: 'RADIO', name: 'crosshair_xField_label_style', label: '标签倾斜', rules: true, valueEnum: MappingData.Font__Style },
            ]
        },
        {
            span: 12, formType: 'GROUP', name: 'crosshair_yField_line', label: 'Y轴标记', collapsible: true,
            jugde: [{ field: 'crosshair_yField', value: [true] }], children: [
                { span: 24, formType: 'RADIO', name: 'crosshair_yField_type', label: 'Y轴渲染', rules: true, valueEnum: MappingData.Charts__VchartsCrosshairType },
                { span: 24, formType: 'COLOR', name: 'crosshair_yField_color', label: '颜色', rules: true },
                { span: 24, formType: 'NUMBER', name: 'crosshair_yField_lineWidth', label: '线宽', rules: true },
                { span: 24, formType: 'NUMBER', name: 'crosshair_yField_lineDash_s', label: '实线', rules: true },
                { span: 24, formType: 'NUMBER', name: 'crosshair_yField_lineDash_x', label: '虚线', rules: true },
            ]
        },
        {
            span: 12, formType: 'GROUP', name: 'crosshair_yField_label', label: 'Y轴标签', collapsible: true,
            jugde: [{ field: 'crosshair_yField', value: [true] }], children: [
                { span: 24, formType: 'COLOR', name: 'crosshair_yField_label_color', label: '标签颜色', rules: true },
                { span: 24, formType: 'NUMBER', name: 'crosshair_yField_label_size', label: '标签字号', rules: true },
                { span: 24, formType: 'SELECT', name: 'crosshair_yField_label_family', label: '标签字体', rules: true, valueEnum: MappingData.Font__Family },
                { span: 24, formType: 'RADIO', name: 'crosshair_yField_label_weight', label: '标签加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                { span: 24, formType: 'RADIO', name: 'crosshair_yField_label_style', label: '标签倾斜', rules: true, valueEnum: MappingData.Font__Style },
            ]
        },
    ]
}
// TODO 滚动条
const ChartScrollBarCommonFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_scrollBar', label: '滚动条设置', collapsible: true, defaultCollapsed: true,
    children: [
        { span: 24, formType: 'RADIO', name: 'scrollBar_visible', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_scrollBar_set', label: '滚动条设置', collapsible: true,
            jugde: [{ field: 'scrollBar_visible', value: [true] }], children: [
                { span: 12, formType: 'RADIO', name: 'scrollBar_orient', label: '渲染位置', rules: true, valueEnum: MappingData.Charts__LegendsOrient },
                { span: 12, formType: 'RADIO', name: 'scrollBar_round', label: '是否圆角', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'NUMBER', name: 'scrollBar_start', label: '起点配置', rules: true, min: 0, max: 1 },
                { span: 12, formType: 'NUMBER', name: 'scrollBar_end', label: '终点配置', rules: true, min: 0, max: 1 },
                { span: 12, formType: 'RADIO', name: 'scrollBar_roamZoom', label: '鼠标缩放', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'RADIO', name: 'scrollBar_roamDrag', label: '鼠标拖拽', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'COLOR', name: 'scrollBar_rail', label: '轨道颜色', rules: true, mode: ['single'] },
                { span: 12, formType: 'COLOR', name: 'scrollBar_slider', label: '滑块颜色', rules: true, mode: ['single'] },
            ]
        },
    ]
}
// TODO 标签设置
const ChartLabelCommonFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_label', label: '标签设置', collapsible: true, defaultCollapsed: true,
    children: [
        { span: 24, formType: 'RADIO', name: 'label_visible', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_label_set', label: '标签设置', collapsible: true,
            jugde: [{ field: 'label_visible', value: [true] }], children: [
                { span: 12, formType: 'SELECT', name: 'label_position', label: '标签位置', rules: true, valueEnum: MappingData.Charts__VchartsLabelPosition },
                { span: 12, formType: 'NUMBER', name: 'label_offset', label: '标签间距', rules: true },
                { span: 12, formType: 'RADIO', name: 'label_overlap', label: '防标签重叠', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'RADIO', name: 'label_hideOnHit', label: '隐藏重叠标签', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'RADIO', name: 'label_smartInvert', label: '只能反色', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'RADIO', name: 'label_animation', label: '标签动画', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'RADIO', name: 'label_showKey', label: '显示键', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'RADIO', name: 'label_showValue', label: '显示值', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 12, formType: 'GROUP', name: 'ChartCommon_label_showKey', label: '键参数', collapsible: true,
                    jugde: [{ field: 'label_showKey', value: [true] }], children: [
                        { span: 24, formType: 'RADIO', name: 'label_extraKey', label: '额外键', rules: true, valueEnum: MappingData.IsEnabledBool },
                        { span: 24, formType: 'INPUT', name: 'label_Key_af', label: '键前缀', jugde: [{ field: 'label_extraKey', value: [true] }] },
                        { span: 24, formType: 'INPUT', name: 'label_Key_bf', label: '键后缀', jugde: [{ field: 'label_extraKey', value: [true] }] },
                    ]
                },
                {
                    span: 12, formType: 'GROUP', name: 'ChartCommon_label_showValue', label: '值参数', collapsible: true,
                    jugde: [{ field: 'label_showValue', value: [true] }], children: [
                        { span: 24, formType: 'RADIO', name: 'label_extraValue', label: '额外值', rules: true, valueEnum: MappingData.IsEnabledBool },
                        { span: 24, formType: 'INPUT', name: 'label_Value_af', label: '值前缀', jugde: [{ field: 'label_extraValue', value: [true] }] },
                        { span: 24, formType: 'INPUT', name: 'label_Value_bf', label: '值后缀', jugde: [{ field: 'label_extraValue', value: [true] }] },
                    ]
                },
                {
                    span: 24, formType: 'GROUP', name: 'ChartCommon_label_style', label: '标签样式', collapsible: true, children: [
                        {
                            span: 12, formType: 'RADIO', name: 'label_style_textAlign', label: '水平排序', rules: true,
                            valueEnum: MappingData.Charts__VchartsTextAlign
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'label_style_textBaseline', label: '垂直排序', rules: true,
                            valueEnum: MappingData.Charts__VchartsTextBaseline
                        },
                        { span: 12, formType: 'NUMBER', name: 'label_style_size', label: '标签字号', rules: true },
                        { span: 12, formType: 'SELECT', name: 'label_style_family', label: '标签字体', rules: true, valueEnum: MappingData.Font__Family },
                        { span: 12, formType: 'RADIO', name: 'label_style_weight', label: '标签加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                        { span: 12, formType: 'RADIO', name: 'label_style_style', label: '标签倾斜', rules: true, valueEnum: MappingData.Font__Style },
                        { span: 12, formType: 'NUMBER', name: 'label_style_shadowOffsetX', label: '水平阴影', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'label_style_shadowOffsetY', label: '垂直阴影', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'label_style_shadowBlur', label: '阴影扩散', rules: true },
                        { span: 12, formType: 'COLOR', name: 'label_style_shadowColor', label: '阴影颜色', rules: true },
                    ]
                },
            ]
        }
    ]
}
// TODO 指示卡设置 
const ChartIndicatorCommonFormList = {
    span: 24, formType: 'GROUP', name: 'Indicator_options', label: '指示卡设置', collapsible: true, defaultCollapsed: true,
    children: [
        { span: 24, formType: 'RADIO', name: 'indicator_visible', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'Indicator_options', label: '指示卡信息', collapsible: true,
            jugde: [{ field: 'indicator_visible', value: [true] }], children: [
                { span: 12, formType: 'RADIO', name: 'indicator_fixed', label: '初始状态', rules: true, valueEnum: MappingData.Charts__VchartsIndicatorFixed },
                { span: 12, formType: 'RADIO', name: 'indicator_trigger', label: '交互类型', rules: true, valueEnum: MappingData.Charts__VchartsIndicatorTrigger },
                { span: 12, formType: 'NUMBER', name: 'indicator_offsetX', label: 'X轴偏移', rules: true },
                { span: 12, formType: 'NUMBER', name: 'indicator_offsetY', label: 'Y轴偏移', rules: true },
                { span: 12, formType: 'NUMBER', name: 'indicator_limitRatio', label: '渲染占比', rules: true },
                { span: 12, formType: 'RADIO', name: 'indicator_firstData', label: '渲染第一组数据', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 24, formType: 'RADIO', name: 'indicator_title', label: '渲染标题', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'Indicator_options_title', label: '标题设置', collapsible: true,
                    jugde: [{ field: 'indicator_title', value: [true] }], children: [
                        { span: 12, formType: 'INPUT', name: 'indicator_title_init', label: '默认标题', rules: true },
                        { span: 12, formType: 'INPUT', name: 'indicator_title_field', label: '渲染字段', rules: true },
                        { span: 12, formType: 'INPUT', name: 'indicator_title_af', label: '字段前缀' },
                        { span: 12, formType: 'INPUT', name: 'indicator_title_bf', label: '字段后缀' },
                        { span: 12, formType: 'COLOR', name: 'indicator_title_fill', label: '字体颜色', rules: true, mode: ['single'] },
                        { span: 12, formType: 'NUMBER', name: 'indicator_title_Size', label: '标题字号', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'indicator_title_Height', label: '标题行高', rules: true },
                        { span: 12, formType: 'SELECT', name: 'indicator_title_Family', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                        { span: 12, formType: 'RADIO', name: 'indicator_title_Weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                        { span: 12, formType: 'RADIO', name: 'indicator_title_Style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                        {
                            span: 12, formType: 'RADIO', name: 'indicator_title_percent', label: '渲染占比', rules: true,
                            valueEnum: MappingData.IsEnabledBool
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'indicator_title_percentData', label: '占比计算方式 ', rules: true,
                            jugde: [{ field: 'indicator_title_percent', value: [true] }], valueEnum: MappingData.Charts__percentData
                        },
                    ]
                },
                { span: 24, formType: 'RADIO', name: 'indicator_content', label: '渲染内容 ', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'Indicator_options_content', label: '内容设置', collapsible: true,
                    jugde: [{ field: 'indicator_content', value: [true] }], children: [
                        { span: 12, formType: 'INPUT', name: 'indicator_content_init', label: '默认标题', rules: true },
                        { span: 12, formType: 'INPUT', name: 'indicator_content_field', label: '渲染字段', rules: true },
                        { span: 12, formType: 'INPUT', name: 'indicator_content_af', label: '字段前缀' },
                        { span: 12, formType: 'INPUT', name: 'indicator_content_bf', label: '字段后缀' },
                        { span: 12, formType: 'COLOR', name: 'indicator_content_fill', label: '字体颜色', rules: true, mode: ['single'] },
                        { span: 12, formType: 'NUMBER', name: 'indicator_content_Size', label: '标题字号', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'indicator_content_Height', label: '标题行高', rules: true },
                        { span: 12, formType: 'SELECT', name: 'indicator_content_Family', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
                        { span: 12, formType: 'RADIO', name: 'indicator_content_Weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                        { span: 12, formType: 'RADIO', name: 'indicator_content_Style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
                        {
                            span: 12, formType: 'RADIO', name: 'indicator_content_percent', label: '渲染占比', rules: true,
                            valueEnum: MappingData.IsEnabledBool
                        },
                        {
                            span: 12, formType: 'RADIO', name: 'indicator_content_percentData', label: '占比计算方式 ', rules: true,
                            jugde: [{ field: 'indicator_content_percent', value: [true] }], valueEnum: MappingData.Charts__percentData
                        },
                    ]
                }
            ]
        }
    ]
}
// TODO 扩展标记
const ChartExtensionMarkCommonFormList = {
    span: 24, formType: 'GROUP', name: 'ExtensionMark_options', label: '扩展标记', collapsible: true, defaultCollapsed: true,
    children: [
        {
            span: 24, formType: 'LIST', name: 'ExtensionMark_Arr', label: '扩展标记', collapsible: true, defaultCollapsed: true,
            children: [
                {
                    span: 12, formType: 'RADIO', name: 'extensionMark_render', label: '渲染内容', rules: true,
                    valueEnum: MappingData.Charts__extensionMarkRender
                },
                { span: 12, formType: 'INPUT', name: 'extensionMark_text', label: '自定义内容/字段名称', rules: true },
                {
                    span: 12, formType: 'RADIO', name: 'extensionMark_xy', label: '渲染位置', rules: true,
                    valueEnum: MappingData.Charts__ProgressPosition
                },
                { span: 12, formType: 'NUMBER', name: 'extensionMark_number', label: '进度内间距 / 进度外间距', rules: true },
                {
                    span: 12, formType: 'RADIO', name: 'extensionMark_maxLineWidth', label: '超出隐藏', rules: true,
                    valueEnum: MappingData.Charts__maxLineWidth
                },
                { span: 12, formType: 'COLOR', name: 'extensionMark_color', label: '字体颜色', rules: true },
                { span: 12, formType: 'NUMBER', name: 'extensionMark_size', label: '标签字号', rules: true },
                { span: 12, formType: 'SELECT', name: 'extensionMark_family', label: '标签字体', rules: true, valueEnum: MappingData.Font__Family },
                { span: 12, formType: 'RADIO', name: 'extensionMark_weight', label: '标签加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                { span: 12, formType: 'RADIO', name: 'extensionMark_style', label: '标签倾斜', rules: true, valueEnum: MappingData.Font__Style },
                { span: 12, formType: 'NUMBER', name: 'extensionMark_shadowOffsetX', label: '水平阴影', rules: true },
                { span: 12, formType: 'NUMBER', name: 'extensionMark_shadowOffsetY', label: '垂直阴影', rules: true },
                { span: 12, formType: 'NUMBER', name: 'extensionMark_shadowBlur', label: '阴影扩散', rules: true },
                { span: 12, formType: 'COLOR', name: 'extensionMark_shadowColor', label: '阴影颜色', rules: true },
            ]
        }
    ]
}

// TODO 数据来源
const ChartDataCommonFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_data', label: '数据设置', collapsible: true,
    children: [
        { span: 12, formType: 'RADIO', name: 'dataSourceType', label: '数据来源', rules: true, valueEnum: MappingData.dataSourceType },
        { span: 12, formType: 'RADIO', name: 'dataType', label: '数据类型', rules: true, valueEnum: MappingData.dataTypeMapping },

        { span: 8, formType: 'INPUT', name: 'render_xField', label: 'xField', rules: true },
        { span: 8, formType: 'INPUT', name: 'render_yField', label: 'yField', rules: true },
        { span: 8, formType: 'INPUT', name: 'render_seriesField', label: 'seriesField', rules: true },

        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_data_api', label: '接口数据', collapsible: true,
            jugde: [{ field: 'dataSourceType', value: ['A02'] }], children: [
                { span: 12, formType: 'INPUT', name: 'data_apiName', label: '接口地址', rules: true },
                { span: 12, formType: 'INPUT', name: 'data_apiLevel', label: '接口层级' },
                {
                    span: 24, formType: 'LIST', name: 'data_apiData', label: '渲染对象', collapsible: true,
                    jugde: [{ field: 'dataSourceType', value: ['A02'] }, { field: 'dataType', value: ['A02'] }], children: [
                        { span: 8, formType: 'INPUT', name: 'xField', label: '字段', rules: true },
                        { span: 8, formType: 'INPUT', name: 'yField', label: '名称', rules: true },
                        { span: 8, formType: 'INPUT', name: 'seriesField', label: '分类' },
                    ]
                },
                {
                    span: 24, formType: 'LIST', name: 'data_apiArr', label: '渲染对象', collapsible: true,
                    jugde: [{ field: 'dataSourceType', value: ['A02'] }, { field: 'dataType', value: ['A03'] }], children: [
                        { span: 8, formType: 'INPUT', name: 'data_xField', label: 'xField', rules: true },
                        { span: 8, formType: 'INPUT', name: 'data_yField', label: 'yField', rules: true },
                        { span: 8, formType: 'INPUT', name: 'data_seriesField', label: 'seriesField' },
                    ]
                },
            ]
        },
        {
            span: 24, formType: 'LIST', name: 'data_diyData', label: '自定义数组', collapsible: true,
            jugde: [{ field: 'dataSourceType', value: ['A03'] }], children: [
                { span: 8, formType: 'INPUT', name: 'xField', label: '名称', rules: true },
                { span: 8, formType: 'INPUT', name: 'yField', label: '数值', rules: true },
                { span: 8, formType: 'INPUT', name: 'seriesField', label: '分类' },
            ]
        },
    ]
}

// !!! 图元
// Todo line 图元
const LineFormData = {
    span: 24, formType: 'GROUP', name: 'line_primitive', label: '折线图元', collapsible: true, defaultCollapsed: true,
    children: [
        { span: 24, formType: 'RADIO', name: 'line_visible', label: '是否显示', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 12, formType: 'SELECT', name: 'line_curveType', label: '折线样式', rules: true,
            jugde: [{ field: 'line_visible', value: [true] }], valueEnum: MappingData.Charts__VchartsLineCurveType
        },
        {
            span: 12, formType: 'NUMBER', name: 'line_lineWidth', label: '折线线宽', rules: true,
            jugde: [{ field: 'line_visible', value: [true] }]
        },
    ]
}
// Todo point 图元
const PointFormData = {
    span: 24, formType: 'GROUP', name: 'point_primitive', label: '点图元', collapsible: true, defaultCollapsed: true,
    children: [
        {
            span: 12, formType: 'GROUP', name: 'point_primitive_default', label: '默认样式', collapsible: true,
            children: [
                { span: 24, formType: 'RADIO', name: 'point_style_visible', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'SELECT', name: 'point_style_symbolType', label: '图形形状', rules: true,
                    valueEnum: MappingData.Charts__VchartsLiquidMaskShapeMapping, jugde: [{ field: 'point_style_visible', value: [true] }]
                },
                {
                    span: 24, formType: 'NUMBER', name: 'point_style_size', label: '图形尺寸', rules: true,
                    jugde: [{ field: 'point_style_visible', value: [true] }]
                },
            ]
        },
        {
            span: 12, formType: 'GROUP', name: 'point_primitive_active', label: '选中样式', collapsible: true,
            children: [
                { span: 24, formType: 'RADIO', name: 'point_state_visible', label: '是否启用', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'SELECT', name: 'point_state_symbolType', label: '图形形状', rules: true,
                    valueEnum: MappingData.Charts__VchartsLiquidMaskShapeMapping, jugde: [{ field: 'point_state_visible', value: [true] }]
                },
                {
                    span: 24, formType: 'NUMBER', name: 'point_state_size', label: '图形尺寸', rules: true,
                    jugde: [{ field: 'point_state_visible', value: [true] }]
                },
            ]
        },
    ]
}
// TODO area 图元
const AreaFormData = {
    span: 24, formType: 'GROUP', name: 'area_primitive', label: '面积图元', collapsible: true, defaultCollapsed: true,
    children: [
        { span: 24, formType: 'RADIO', name: 'area_visible', label: '是否显示', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 12, formType: 'SELECT', name: 'area_curveType', label: '折线样式', rules: true,
            jugde: [{ field: 'area_visible', value: [true] }], valueEnum: MappingData.Charts__VchartsLineCurveType
        },
        {
            span: 12, formType: 'NUMBER', name: 'area_lineWidth', label: '折线线宽', rules: true,
            jugde: [{ field: 'area_visible', value: [true] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'area_style_top', label: '面积颜色上部透明度', rules: true,
            min: 0, max: 1, jugde: [{ field: 'area_visible', value: [true] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'area_style_btm', label: '面积颜色下部透明度', rules: true,
            min: 0, max: 1, jugde: [{ field: 'area_visible', value: [true] }]
        },
    ]
}
// TODO bar 图元
const BarFormData = {
    span: 24, formType: 'GROUP', name: 'bar_primitive', label: '柱状图元', collapsible: true, defaultCollapsed: true,
    children: [
        { span: 12, formType: 'RADIO', name: 'bar_visible', label: '是否显示', rules: true, valueEnum: MappingData.IsEnabledBool },
        { span: 12, formType: 'NUMBER', name: 'bar_cornerRadius', label: '矩形圆角', rules: true, jugde: [{ field: 'bar_visible', value: [true] }] },
        {
            span: 12, formType: 'NUMBER', name: 'bar_style_top', label: '面积颜色起始透明度', rules: true,
            min: 0, max: 1, jugde: [{ field: 'bar_visible', value: [true] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'bar_style_btm', label: '面积颜色结束透明度', rules: true,
            min: 0, max: 1, jugde: [{ field: 'bar_visible', value: [true] }]
        },
        { span: 12, formType: 'NUMBER', name: 'bar_shadowOffsetX', label: '阴影X轴', rules: true, jugde: [{ field: 'bar_visible', value: [true] }] },
        { span: 12, formType: 'NUMBER', name: 'bar_shadowOffsetY', label: '阴影Y轴', rules: true, jugde: [{ field: 'bar_visible', value: [true] }] },
        { span: 12, formType: 'NUMBER', name: 'bar_shadowBlur', label: '阴影模糊', rules: true, jugde: [{ field: 'bar_visible', value: [true] }] },
        { span: 12, formType: 'COLOR', name: 'bar_shadowColor', label: '阴影颜色', rules: true, mode: ['single'], jugde: [{ field: 'bar_visible', value: [true] }] },

        {
            span: 12, formType: 'RADIO', name: 'bar_width_visible', label: '柱体宽度', rules: true,
            valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'bar_visible', value: [true] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'bar_width', label: '柱体宽度', rules: true,
            jugde: [{ field: 'bar_visible', value: [true] }, { field: 'bar_width_visible', value: [true] }]
        },

        {
            span: 12, formType: 'RADIO', name: 'bar_height_visible', label: '柱体高度', rules: true,
            valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'bar_visible', value: [true] }]
        },
        {
            span: 12, formType: 'NUMBER', name: 'bar_height', label: '柱体高度', rules: true,
            jugde: [{ field: 'bar_visible', value: [true] }, { field: 'bar_height_visible', value: [true] }]
        },
        {
            span: 24, formType: 'RADIO', name: 'bar_texture_visible', label: '柱体纹理', rules: true,
            valueEnum: MappingData.IsEnabledBool, jugde: [{ field: 'bar_visible', value: [true] }]
        },
        {
            span: 24, formType: 'GROUP', name: 'bar_texture_style', label: '柱体纹理', collapsible: true,
            jugde: [{ field: 'bar_texture_visible', value: [true] }, { field: 'bar_visible', value: [true] }], children: [
                { span: 12, formType: 'SELECT', name: 'bar_texture', label: '纹理形状', rules: true, valueEnum: MappingData.Charts__textrueType },
                { span: 12, formType: 'COLOR', name: 'bar_textureColor', label: '纹理颜色', rules: true, mode: ['single'] },
                { span: 12, formType: 'NUMBER', name: 'bar_textureSize', label: '纹理尺寸', rules: true },
                { span: 12, formType: 'NUMBER', name: 'bar_texturePadding', label: '纹理间距', rules: true },
            ]
        },
    ]
}

// 各图例的独立配置
// TODO 折现图
const ChartLineFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_line', label: '折现图', collapsible: true,
    children: [
        { span: 12, formType: 'RADIO', name: 'direction', label: '布局方式', rules: true, valueEnum: MappingData.Charts__VChartsDirectionA01 },
        { span: 12, formType: 'RADIO', name: 'invalidType', label: '无效数据处理', rules: true, valueEnum: MappingData.Charts__invalidType },
        { span: 12, formType: 'RADIO', name: 'percent', label: '百分比折现', rules: true, valueEnum: MappingData.IsEnabledBool },
        { span: 12, formType: 'RADIO', name: 'stack', label: '堆叠折现', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_color', label: '色板', collapsible: true, defaultCollapsed: true,
            children: [
                {
                    span: 24, formType: 'LIST', name: 'color', label: '', collapsible: true,
                    children: [{ span: 24, formType: 'COLOR', name: 'color', label: '色板', rules: true }]
                }
            ]
        },
        LineFormData,
        PointFormData,
    ]
}
const PrefabricatedChartLine = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartLineFormList,
    ChartAxesCommonFormList,
    ChartBackCommonFormList,
    ChartTitleCommonFormList,
    ChartTooltipCommonFormList,
    ChartLegendsCommonFormList,
    ChartCrosshairCommonFormList,
    ChartLabelCommonFormList,
    ChartScrollBarCommonFormList,
]
// TODO 面积图
const ChartAreaFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_area', label: '面积图图', collapsible: true,
    children: [
        { span: 12, formType: 'RADIO', name: 'direction', label: '布局方式', rules: true, valueEnum: MappingData.Charts__VChartsDirectionA01 },
        { span: 12, formType: 'RADIO', name: 'invalidType', label: '无效数据处理', rules: true, valueEnum: MappingData.Charts__invalidType },
        { span: 12, formType: 'RADIO', name: 'percent', label: '百分比折现', rules: true, valueEnum: MappingData.IsEnabledBool },
        { span: 12, formType: 'RADIO', name: 'stack', label: '堆叠折现', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_color', label: '色板', collapsible: true, defaultCollapsed: true,
            children: [
                {
                    span: 24, formType: 'LIST', name: 'color', label: '', collapsible: true,
                    children: [{ span: 24, formType: 'COLOR', name: 'color', label: '色板', rules: true }]
                }
            ]
        },
        // 面积设置
        AreaFormData,
        PointFormData,
    ]
}
const PrefabricatedChartArea = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartAreaFormList,
    ChartAxesCommonFormList,
    ChartBackCommonFormList,
    ChartTitleCommonFormList,
    ChartTooltipCommonFormList,
    ChartLegendsCommonFormList,
    ChartCrosshairCommonFormList,
    ChartLabelCommonFormList,
    ChartScrollBarCommonFormList,
]
// TODO 柱图 
const ChartBarFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_bar', label: '柱图', collapsible: true,
    children: [
        { span: 12, formType: 'RADIO', name: 'direction', label: '布局方式', rules: true, valueEnum: MappingData.Charts__VChartsDirectionA01 },
        { span: 12, formType: 'RADIO', name: 'invalidType', label: '无效数据处理', rules: true, valueEnum: MappingData.Charts__invalidType },
        { span: 12, formType: 'RADIO', name: 'percent', label: '百分比折现', rules: true, valueEnum: MappingData.IsEnabledBool },
        { span: 12, formType: 'RADIO', name: 'stack', label: '堆叠折现', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_color', label: '色板', collapsible: true, defaultCollapsed: true,
            children: [
                {
                    span: 24, formType: 'LIST', name: 'color', label: '', collapsible: true,
                    children: [{ span: 24, formType: 'COLOR', name: 'color', label: '色板', rules: true }]
                }
            ]
        },
        BarFormData,
    ]
}
const PrefabricatedChartBar = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartBarFormList,
    ChartAxesCommonFormList,
    ChartBackCommonFormList,
    ChartTitleCommonFormList,
    ChartTooltipCommonFormList,
    ChartLegendsCommonFormList,
    ChartCrosshairCommonFormList,
    ChartLabelCommonFormList,
    ChartScrollBarCommonFormList,
]
// TODO 直方图
const ChartHistogramFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Histogram', label: '直方图', collapsible: true,
    children: []
}
const PrefabricatedChartHistogram = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartHistogramFormList,
]
// TODO 区间柱状图
const ChartRangeColumnFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_RangeColumn', label: '区间柱状图', collapsible: true,
    children: []
}
const PrefabricatedChartRangeColumn = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartRangeColumnFormList,
]
// TODO 箱线图
const ChartBoxPlotFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_BoxPlot', label: '箱线图', collapsible: true,
    children: []
}
const PrefabricatedChartBoxPlot = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartBoxPlotFormList,
]
// TODO 饼图
const ChartPieFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Pie', label: '饼图', collapsible: true,
    children: [
        { span: 12, formType: 'NUMBER', name: 'outerRadius', label: '外半径', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'innerRadius', label: '内半径', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'startAngle', label: '起始角', rules: true, min: -360, max: 360 },
        { span: 12, formType: 'NUMBER', name: 'endAngle', label: '结束角', rules: true, min: -360, max: 360 },
        { span: 12, formType: 'NUMBER', name: 'padAngle', label: '角度间隔', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'cornerRadius', label: '扇区圆角', rules: true },
        { span: 12, formType: 'NUMBER', name: 'opacityTop', label: '上部透明', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'opacityBtm', label: '下部透明', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'shadowOffsetX', label: 'X轴阴影', rules: true },
        { span: 12, formType: 'NUMBER', name: 'shadowOffsetY', label: 'Y轴阴影', rules: true },
        { span: 12, formType: 'NUMBER', name: 'shadowBlur', label: '阴影扩散', rules: true },
        { span: 12, formType: 'COLOR', name: 'shadowColor', label: '阴影颜色', rules: true },
        { span: 24, formType: 'RADIO', name: 'textureStatus', label: '扇区纹理', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'texture_style', label: '扇区纹理', collapsible: true,
            jugde: [{ field: 'textureStatus', value: [true] }], children: [
                { span: 12, formType: 'SELECT', name: 'texture', label: '纹理形状', rules: true, valueEnum: MappingData.Charts__textrueType },
                { span: 12, formType: 'COLOR', name: 'textureColor', label: '纹理颜色', rules: true, mode: ['single'] },
                { span: 12, formType: 'NUMBER', name: 'textureSize', label: '纹理尺寸', rules: true },
                { span: 12, formType: 'NUMBER', name: 'texturePadding', label: '纹理间距', rules: true },
            ]
        },
        { span: 24, formType: 'RADIO', name: 'stateStatus', label: '状态交互', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'state_style', label: '交互设置', collapsible: true,
            jugde: [{ field: 'stateStatus', value: [true] }], children: [
                { span: 12, formType: 'RADIO', name: 'stateType', label: '状态交互', rules: true, valueEnum: MappingData.Charts__stateStatusMapping },
                { span: 12, formType: 'NUMBER', name: 'state_cornerRadius', label: '扇区圆角', rules: true },
                { span: 12, formType: 'NUMBER', name: 'state_outerRadius', label: '外半径', rules: true },
                { span: 12, formType: 'NUMBER', name: 'state_innerRadius', label: '内半径', rules: true },
            ]
        },
        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_color', label: '色板', collapsible: true, defaultCollapsed: true,
            children: [
                {
                    span: 24, formType: 'LIST', name: 'color', label: '', collapsible: true,
                    children: [{ span: 24, formType: 'COLOR', name: 'color', label: '色板', rules: true }]
                }
            ]
        },
    ]
}
const PrefabricatedChartPie = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartPieFormList,
    ChartBackCommonFormList,
    ChartTitleCommonFormList,
    ChartTooltipCommonFormList,
    ChartLegendsCommonFormList,
    ChartLabelCommonFormList,
    ChartIndicatorCommonFormList,
]
// TODO 玫瑰图
const ChartRoseFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Rose', label: '玫瑰图', collapsible: true,
    children: [
        { span: 12, formType: 'RADIO', name: 'percent', label: '百分比折现', rules: true, valueEnum: MappingData.IsEnabledBool },
        { span: 12, formType: 'RADIO', name: 'stack', label: '堆叠折现', rules: true, valueEnum: MappingData.IsEnabledBool },
        { span: 12, formType: 'NUMBER', name: 'outerRadius', label: '外半径', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'innerRadius', label: '内半径', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'startAngle', label: '起始角', rules: true, min: -360, max: 360 },
        { span: 12, formType: 'NUMBER', name: 'endAngle', label: '结束角', rules: true, min: -360, max: 360 },
        { span: 12, formType: 'NUMBER', name: 'padAngle', label: '角度间隔', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'cornerRadius', label: '扇区圆角', rules: true },
        { span: 12, formType: 'NUMBER', name: 'opacityTop', label: '上部透明', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'opacityBtm', label: '下部透明', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'shadowOffsetX', label: 'X轴阴影', rules: true },
        { span: 12, formType: 'NUMBER', name: 'shadowOffsetY', label: 'Y轴阴影', rules: true },
        { span: 12, formType: 'NUMBER', name: 'shadowBlur', label: '阴影扩散', rules: true },
        { span: 12, formType: 'COLOR', name: 'shadowColor', label: '阴影颜色', rules: true },
        { span: 24, formType: 'RADIO', name: 'textureStatus', label: '扇区纹理', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'texture_style', label: '柱体纹理', collapsible: true,
            jugde: [{ field: 'textureStatus', value: [true] }], children: [
                { span: 12, formType: 'SELECT', name: 'texture', label: '纹理形状', rules: true, valueEnum: MappingData.Charts__textrueType },
                { span: 12, formType: 'COLOR', name: 'textureColor', label: '纹理颜色', rules: true, mode: ['single'] },
                { span: 12, formType: 'NUMBER', name: 'textureSize', label: '纹理尺寸', rules: true },
                { span: 12, formType: 'NUMBER', name: 'texturePadding', label: '纹理间距', rules: true },
            ]
        },
        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_color', label: '色板', collapsible: true, defaultCollapsed: true,
            children: [
                {
                    span: 24, formType: 'LIST', name: 'color', label: '', collapsible: true,
                    children: [{ span: 24, formType: 'COLOR', name: 'color', label: '色板', rules: true }]
                }
            ]
        },
    ]
}
const PrefabricatedChartRose = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartRoseFormList,
    ChartAxesCommonFormList,
    ChartBackCommonFormList,
    ChartTitleCommonFormList,
    ChartTooltipCommonFormList,
    ChartLegendsCommonFormList,
    ChartLabelCommonFormList,
    ChartCrosshairCommonFormList,
]
// TODO 漏斗图
const ChartFunnelFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Funnel', label: '漏斗图', collapsible: true,
    children: []
}
const PrefabricatedChartFunnel = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartFunnelFormList,
]
// TODO 雷达图
const ChartRadarFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Radar', label: '雷达图', collapsible: true,
    children: [
        { span: 12, formType: 'RADIO', name: 'percent', label: '百分比折现', rules: true, valueEnum: MappingData.IsEnabledBool },
        { span: 12, formType: 'RADIO', name: 'stack', label: '堆叠折现', rules: true, valueEnum: MappingData.IsEnabledBool },
        { span: 12, formType: 'NUMBER', name: 'outerRadius', label: '外半径', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'innerRadius', label: '内半径', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'startAngle', label: '起始角', rules: true, min: -360, max: 360 },
        { span: 12, formType: 'NUMBER', name: 'endAngle', label: '结束角', rules: true, min: -360, max: 360 }, {
            span: 24, formType: 'GROUP', name: 'ChartCommon_color', label: '色板', collapsible: true, defaultCollapsed: true,
            children: [
                {
                    span: 24, formType: 'LIST', name: 'color', label: '', collapsible: true,
                    children: [{ span: 24, formType: 'COLOR', name: 'color', label: '色板', rules: true }]
                }
            ]
        },
        AreaFormData,
        PointFormData,
    ]
}
const PrefabricatedChartRadar = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartRadarFormList,
    ChartAxesCommonFormList,
    ChartBackCommonFormList,
    ChartTitleCommonFormList,
    ChartTooltipCommonFormList,
    ChartLegendsCommonFormList,
    ChartLabelCommonFormList,
    ChartCrosshairCommonFormList,
    ChartIndicatorCommonFormList,
]
// TODO 桑基图
const ChartSankeyFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Sankey', label: '桑基图', collapsible: true,
    children: []
}
const PrefabricatedChartSankey = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartSankeyFormList,
]
// TODO 序列图
const ChartSequenceFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Sequence', label: '序列图', collapsible: true,
    children: []
}
const PrefabricatedChartSequence = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartSequenceFormList,
]
// TODO 词云图
const ChartWordCloudFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_WordCloud', label: '词云图', collapsible: true,
    children: []
}
const PrefabricatedChartWordCloud = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartWordCloudFormList,
]
// TODO 仪表盘图
const ChartGaugeFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Gauge', label: '仪表盘图', collapsible: true,
    children: [
        { span: 12, formType: 'NUMBER', name: 'outerRadius', label: '扇区外半径', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'innerRadius', label: '扇区内半径', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'startAngle', label: '扇区起始角', rules: true, min: -360, max: 360 },
        { span: 12, formType: 'NUMBER', name: 'endAngle', label: '扇区结束角', rules: true, min: -360, max: 360 },
        { span: 24, formType: 'RADIO', name: 'type', label: '仪表盘类型', rules: true, valueEnum: MappingData.Charts__VchartsGaugeTypeMapping },
        {
            span: 24, formType: 'GROUP', name: 'Gauge_circularProgress', label: '循环进度', collapsible: true,
            jugde: [{ field: 'type', value: ['circularProgress'] }], children: [
                { span: 12, formType: 'NUMBER', name: 'circular_innerPadding', label: '进度条内侧间距', rules: true },
                { span: 12, formType: 'NUMBER', name: 'circular_outerPadding', label: '进度条外侧间距', rules: true },
                { span: 12, formType: 'COLOR', name: 'circular_progressColor', label: '进度条颜色', rules: true },
                { span: 12, formType: 'NUMBER', name: 'circular_progressRadius', label: '进度条圆角', rules: true },
                { span: 12, formType: 'COLOR', name: 'circular_trackColor', label: '背景颜色', rules: true, mode: ['single'] },
                { span: 12, formType: 'NUMBER', name: 'circular_trackRadius', label: '背景圆角', rules: true },
            ]
        },
        {
            span: 24, formType: 'GROUP', name: 'Gauge_gauge', label: '测量进度', collapsible: true,
            jugde: [{ field: 'type', value: ['gauge'] }], children: [
                {
                    span: 24, formType: 'LIST', name: 'gauge_color', label: '测量色板', collapsible: true, children: [
                        { span: 8, formType: 'COLOR', name: 'color', label: '颜色', rules: true, mode: ['single'] },
                        { span: 8, formType: 'INPUT', name: 'type', label: '名称', rules: true },
                        { span: 8, formType: 'NUMBER', name: 'value', label: '最大值', rules: true },
                    ]
                },
                { span: 12, formType: 'NUMBER', name: 'gauge_cornerRadius', label: '色板圆角', rules: true },
                { span: 12, formType: 'RADIO', name: 'gauge_label', label: '色板标签', rules: true, valueEnum: MappingData.IsEnabledBool },
                {
                    span: 24, formType: 'GROUP', name: 'gauge_label_obj', label: '标签设置', collapsible: true,
                    jugde: [{ field: 'gauge_label', value: [true] }], children: [
                        { span: 24, formType: 'RADIO', name: 'gauge_position', label: '标签位置', rules: true, valueEnum: MappingData.Charts__VchartsPieLabelPosition },
                        { span: 12, formType: 'NUMBER', name: 'gauge_offsetRadius', label: '标签间距', rules: true },
                        { span: 12, formType: 'COLOR', name: 'gauge_textColor', label: '标签颜色', rules: true, mode: ['single'] },
                        { span: 12, formType: 'NUMBER', name: 'gauge_textSize', label: '标签字号', rules: true },
                        { span: 12, formType: 'SELECT', name: 'gauge_textFamily', label: '标签字体', rules: true, valueEnum: MappingData.Font__Family },
                        { span: 12, formType: 'RADIO', name: 'gauge_textWeight', label: '标标签加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                        { span: 12, formType: 'RADIO', name: 'gauge_textStyle', label: '标签倾斜', rules: true, valueEnum: MappingData.Font__Style },
                        { span: 12, formType: 'NUMBER', name: 'gauge_ShadowOffsetX', label: '阴影水平', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'gauge_ShadowOffsetY', label: '阴影垂直', rules: true },
                        { span: 12, formType: 'NUMBER', name: 'gauge_ShadowBlur', label: '阴影模糊', rules: true },
                        { span: 12, formType: 'COLOR', name: 'gauge_ShadowColor', label: '阴影颜色', rules: true, mode: ['single'] }
                    ]
                }
            ]
        },
        { span: 24, formType: 'RADIO', name: 'tickMask', label: '图元蒙层', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'tickMask_data', label: '指针图元', collapsible: true,
            jugde: [{ field: 'tickMask', value: [true] }], children: [
                { span: 12, formType: 'RADIO', name: 'tickMask_forceAlign', label: '强制对齐', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'NUMBER', name: 'tickMask_angle', label: '单个宽度', rules: true },
                { span: 12, formType: 'NUMBER', name: 'tickMask_offsetAngle', label: '偏移角度', rules: true },
                { span: 12, formType: 'NUMBER', name: 'tickMask_cornerRadius', label: '圆角角度', rules: true },
            ]
        },
        { span: 24, formType: 'RADIO', name: 'pointer', label: '指针图元', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'pointer_data', label: '指针图元', collapsible: true,
            jugde: [{ field: 'pointer', value: [true] }], children: [
                { span: 8, formType: 'COLOR', name: 'pointer_color', label: '指针颜色', rules: true, mode: ['single'] },
                { span: 8, formType: 'NUMBER', name: 'pointer_width', label: '指针宽度', rules: true, min: 0, max: 1 },
                { span: 8, formType: 'NUMBER', name: 'pointer_height', label: '指针高度', rules: true, min: 0, max: 1 },
                { span: 12, formType: 'NUMBER', name: 'pointer_center_x', label: 'X轴中心比例', rules: true },
                { span: 12, formType: 'NUMBER', name: 'pointer_center_y', label: 'Y轴边缘距离', rules: true },
            ]
        },
        { span: 24, formType: 'RADIO', name: 'pin', label: '图钉前景', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'pin_data', label: '图钉前景', collapsible: true,
            jugde: [{ field: 'pin', value: [true] }], children: [
                { span: 8, formType: 'COLOR', name: 'pin_color', label: '指针颜色', rules: true, mode: ['single'] },
                { span: 8, formType: 'NUMBER', name: 'pin_width', label: '指针宽度', rules: true, min: 0, max: 1 },
                { span: 8, formType: 'NUMBER', name: 'pin_height', label: '指针高度', rules: true, min: 0, max: 1 },
            ]
        },
        { span: 24, formType: 'RADIO', name: 'pinBack', label: '图钉背景', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'pinBack_data', label: '图钉背景', collapsible: true,
            jugde: [{ field: 'pinBack', value: [true] }], children: [
                { span: 8, formType: 'COLOR', name: 'pinBack_color', label: '指针颜色', rules: true, mode: ['single'] },
                { span: 8, formType: 'NUMBER', name: 'pinBack_width', label: '指针宽度', rules: true, min: 0, max: 1 },
                { span: 8, formType: 'NUMBER', name: 'pinBack_height', label: '指针高度', rules: true, min: 0, max: 1 },
            ]
        },
    ]
}
const PrefabricatedChartGauge = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartGaugeFormList,
    ChartBackCommonFormList,
    ChartTitleCommonFormList,
    ChartTooltipCommonFormList,
    ChartIndicatorCommonFormList,
]
// TODO 线性进度图
const ChartLinearProgressFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_LinearProgress', label: '线性进度图', collapsible: true,
    children: [
        { span: 12, formType: 'NUMBER', name: 'bandWidth', label: '进度条宽度', rules: true },
        { span: 12, formType: 'NUMBER', name: 'cornerRadius', label: '进度条圆角', rules: true },
        { span: 12, formType: 'COLOR', name: 'progress_fill', label: '进度条颜色', rules: true },
        { span: 12, formType: 'NUMBER', name: 'progress_xy', label: '颜色方向', rules: true, min: 0, max: 1 },
    ]
}
const PrefabricatedChartLinearProgress = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartLinearProgressFormList,
    ChartExtensionMarkCommonFormList,
    ChartBackCommonFormList,
    ChartTitleCommonFormList,
    ChartTooltipCommonFormList,
]
// TODO 环形进度图
const ChartCircularProgressFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_CircularProgress', label: '环形进度图', collapsible: true,
    children: [
        { span: 12, formType: 'NUMBER', name: 'outerRadius', label: '扇区外半径', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'innerRadius', label: '扇区内半径', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'innerPadding', label: '进度条内侧间距', rules: true },
        { span: 12, formType: 'NUMBER', name: 'outerPadding', label: '进度条外侧间距', rules: true },
        { span: 12, formType: 'NUMBER', name: 'cornerRadius', label: '圆角半径', rules: true },
        { span: 12, formType: 'RADIO', name: 'colorType', label: '颜色选择', rules: true, valueEnum: MappingData.Charts__colorSelet },
        { span: 24, formType: 'COLOR', name: 'colorData', label: '自定颜色', rules: true, jugde: [{ field: 'colorType', value: ['A02'] }] },
        {
            span: 24, formType: 'GROUP', name: 'ChartCommon_color', label: '色板', collapsible: true, defaultCollapsed: true,
            jugde: [{ field: 'colorType', value: ['A01'] }], children: [
                {
                    span: 24, formType: 'LIST', name: 'color', label: '', collapsible: true,
                    children: [{ span: 24, formType: 'COLOR', name: 'color', label: '色板', rules: true }]
                }
            ]
        },
        { span: 24, formType: 'RADIO', name: 'tickMask', label: '图元蒙层', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'tickMask_data', label: '指针图元', collapsible: true,
            jugde: [{ field: 'tickMask', value: [true] }], children: [
                { span: 12, formType: 'RADIO', name: 'tickMask_forceAlign', label: '强制对齐', rules: true, valueEnum: MappingData.IsEnabledBool },
                { span: 12, formType: 'NUMBER', name: 'tickMask_angle', label: '单个宽度', rules: true },
                { span: 12, formType: 'NUMBER', name: 'tickMask_offsetAngle', label: '偏移角度', rules: true },
                { span: 12, formType: 'NUMBER', name: 'tickMask_cornerRadius', label: '圆角角度', rules: true },
            ]
        },
    ]
}
const PrefabricatedChartCircularProgress = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartCircularProgressFormList,
    ChartBackCommonFormList,
    ChartTitleCommonFormList,
    ChartTooltipCommonFormList,
    ChartIndicatorCommonFormList,
]
// TODO 树图
const ChartTreemapFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Treemap', label: '树图', collapsible: true,
    children: []
}
const PrefabricatedChartTreemap = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartTreemapFormList,
]
// TODO 瀑布图
const ChartWaterfallFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Waterfall', label: '瀑布图', collapsible: true,
    children: []
}
const PrefabricatedChartWaterfall = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartWaterfallFormList,
]
// TODO 圆包图
const ChartCirclePackingFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_CirclePacking', label: '圆包图', collapsible: true,
    children: []
}
const PrefabricatedChartCirclePacking = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartCirclePackingFormList,
]
// TODO 旭日图
const ChartSunburstFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Sunburst', label: '旭日图', collapsible: true,
    children: []
}
const PrefabricatedChartSunburst = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartSunburstFormList,
]
// TODO 相关系数图
const ChartCorrelationFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Correlation', label: '相关系数图', collapsible: true,
    children: []
}
const PrefabricatedChartCorrelation = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartCorrelationFormList,
]
// TODO 水球图
const ChartLiquidFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Liquid', label: '水球图', collapsible: true,
    children: [
        { span: 12, formType: 'SELECT', name: 'maskShape', label: '水球图形状', rules: true, valueEnum: MappingData.Charts__VchartsLiquidMaskShapeMapping },
        { span: 12, formType: 'NUMBER', name: 'wave', label: '波浪变化状态', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'outlineMargin', label: '外部间距', rules: true },
        { span: 12, formType: 'NUMBER', name: 'outlinePadding', label: '内部间距', rules: true },
        { span: 12, formType: 'COLOR', name: 'color', label: '水球图颜色', rules: true, mode: ['single'] },
        { span: 12, formType: 'COLOR', name: 'backColor', label: '背景颜色', rules: true, mode: ['single'] },
        { span: 12, formType: 'NUMBER', name: 'liquid_fillTop', label: '波浪上部透明', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'liquidBack_fillTop', label: '背景上部透明', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'liquid_fillBtm', label: '波浪下部透明', rules: true, min: 0, max: 1 },
        { span: 12, formType: 'NUMBER', name: 'liquidBack_fillBtm', label: '背景下部透明', rules: true, min: 0, max: 1 },
        { span: 24, formType: 'RADIO', name: 'textureStatus', label: '波纹纹理', rules: true, valueEnum: MappingData.IsEnabledBool },
        {
            span: 24, formType: 'GROUP', name: 'texture_style', label: '波纹纹理', collapsible: true,
            jugde: [{ field: 'textureStatus', value: [true] }], children: [
                { span: 12, formType: 'SELECT', name: 'texture', label: '纹理形状', rules: true, valueEnum: MappingData.Charts__textrueType },
                { span: 12, formType: 'COLOR', name: 'textureColor', label: '纹理颜色', rules: true, mode: ['single'] },
                { span: 12, formType: 'NUMBER', name: 'textureSize', label: '纹理尺寸', rules: true },
                { span: 12, formType: 'NUMBER', name: 'texturePadding', label: '纹理间距', rules: true },
            ]
        },
    ]
}
const PrefabricatedChartLiquid = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartLiquidFormList,
    ChartBackCommonFormList,
    ChartTitleCommonFormList,
    ChartTooltipCommonFormList,
    ChartIndicatorCommonFormList,
]
// TODO 韦恩图
const ChartVennFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Venn', label: '韦恩图', collapsible: true,
    children: []
}
const PrefabricatedChartVenn = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartVennFormList,
]
// TODO 马赛克图
const ChartMosaicFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Mosaic', label: '马赛克图', collapsible: true,
    children: []
}
const PrefabricatedChartMosaic = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartMosaicFormList,
]
// TODO 蜡烛图
const ChartCandlestickFormList = {
    span: 24, formType: 'GROUP', name: 'ChartCommon_Candlestick', label: '蜡烛图', collapsible: true,
    children: []
}
const PrefabricatedChartCandlestick = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    ChartDataCommonFormList,
    ChartCandlestickFormList,
]

// TODO 数据配置
const TemplateApiConfig = {
    span: 24, formType: 'GROUP', name: 'api_config', label: '数据配置', collapsible: true,
    children: [
        { span: 12, formType: 'RADIO', name: 'api_source', label: '数据来源', rules: true, valueEnum: MappingData.dataSourceType },
        {
            span: 12, formType: 'RADIO', name: 'api_dataType', label: '数据类型', tooltip: '部分组件数据类型为固定类型!',
            rules: true, valueEnum: MappingData.dataTypeMapping, jugde: [{ field: 'api_source', value: ['A02', 'A03'] }]
        },
        {
            span: 24, formType: 'GROUP', name: 'api_http', label: '接口配置', collapsible: true,
            jugde: [{ field: 'api_source', value: ['A02'] }], children: [
                { span: 12, formType: 'INPUT', name: 'http_urlName', label: '接口名称', rules: true },
                { span: 12, formType: 'RADIO', name: 'http_urlLevel', label: '数据层级', rules: true, valueEnum: MappingData.ApiUrlLevel },
                { span: 12, formType: 'INPUT', name: 'http_urlMapping', label: '接口层级', jugde: [{ field: 'http_urlLevel', value: [true] }] },
            ]
        },
    ]
}

const rowClickFormList = [
    { span: 12, formType: 'RADIO', name: 'click_status', label: '点击事件', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 12, formType: 'RADIO', name: 'click_type', label: '操作设置', rules: true,
        valueEnum: MappingData.System__TableOptionsType, jugde: [{ field: 'click_status', value: [true] }]
    },
    // 弹窗设置
    {
        span: 12, formType: 'TempGenerateUuid', name: 'click_model_uuid', label: '生成ID', rules: true,
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['model'] }],
    },
    {
        span: 12, formType: 'RADIO', name: 'click_model_start', label: '大屏小窗', rules: true,
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['model'] }],
        valueEnum: MappingData.IsEnabledBool
    },
    {
        span: 12, formType: 'RADIO', name: 'click_model_level', label: '弹窗层级', rules: true,
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['model'] }],
        valueEnum: MappingData.System__TableModelLevel
    },
    {
        span: 12, formType: 'INPUT', name: 'click_model_title', label: '弹窗名称', rules: true,
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['model'] }],
    },
    {
        span: 12, formType: 'INPUT', name: 'click_model_width', label: '整体宽度', tooltip: 'vw,vh,px,%',
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['model'] }],
    },
    {
        span: 12, formType: 'INPUT', name: 'click_model_height', label: '整体高度', tooltip: 'vw,vh,px,%',
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['model'] }],
    },
    {
        span: 24, formType: 'RADIO', name: 'click_model_params', label: '弹窗参数', rules: true,
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['model'] }],
        valueEnum: MappingData.IsEnabledBool
    },
    {
        span: 24, formType: 'LIST', name: 'click_model_config', label: '弹窗设置', collapsible: true,
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['model'] }, { field: 'click_model_params', value: [true] }],
        children: [
            { span: 8, formType: 'RADIO', name: 'param_type', label: '数据类型', rules: true, valueEnum: MappingData.paramTypeMapping },
            { span: 8, formType: 'INPUT', name: 'param_key', label: '参数建', rules: true },
            { span: 8, formType: 'INPUT', name: 'param_field', label: '数据字段', rules: true, jugde: [{ field: 'param_type', value: ['data'] }] },
            { span: 8, formType: 'INPUT', name: 'param_value', label: '参数值', rules: true, jugde: [{ field: 'param_type', value: ['diys'] }] },
        ]
    },
    // 跳转设置
    {
        span: 24, formType: 'RADIO', name: 'click_navTo_type', label: '跳转方式', rules: true,
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['navTo'] }],
        valueEnum: MappingData.System_TableNavToType
    },
    // 站内跳转
    {
        span: 12, formType: 'INPUT', name: 'click_navTo_int_router', label: '站内路由', rules: true,
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['navTo'] }, { field: 'click_navTo_type', value: ['int'] }],
    },
    {
        span: 12, formType: 'INPUT', name: 'click_navTo_int_params', label: '参数字段',
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['navTo'] }, { field: 'click_navTo_type', value: ['int'] }],
    },
    // 外部链接
    {
        span: 12, formType: 'RADIO', name: 'click_navTo_ext_type', label: '链接方式', rules: true,
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['navTo'] }, { field: 'click_navTo_type', value: ['ext'] }],
        valueEnum: MappingData.System_TableNavToExtType,
    },
    {
        span: 12, formType: 'INPUT', name: 'click_navTo_ext_url', label: '字段或链接', rules: true, tooltip: '数据字段或站点链接',
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['navTo'] }, { field: 'click_navTo_type', value: ['ext'] }],
    },
    {
        span: 12, formType: 'INPUT', name: 'click_navTo_ext_value', label: '参数字段',
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['navTo'] }, { field: 'click_navTo_type', value: ['ext'] }],
    },
    {
        span: 12, formType: 'INPUT', name: 'click_navTo_ext_field', label: '字段映射',
        jugde: [{ field: 'click_status', value: [true] }, { field: 'click_type', value: ['navTo'] }, { field: 'click_navTo_type', value: ['ext'] }],
    },
]

// !!! 自定义模块表单信息
// 交投ai
const PrefabricatedDiyText = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    TemplateApiConfig,
    {
        span: 24, formType: 'LIST', name: 'api_diyObj', label: '自定义数据-对象', collapsible: true,
        jugde: [{ field: 'api_source', value: ['A03'] }], children: [
            { span: 12, formType: 'INPUT', name: 'diyData_key', label: '对象键', rules: true },
            { span: 12, formType: 'INPUT', name: 'diyData_value', label: '对象值', rules: true },
        ]
    },
    { span: 12, formType: 'RADIO', name: 'left_img', label: '左侧图片', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 12, formType: 'RADIO', name: 'right_img', label: '右侧图片', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 12, formType: 'GROUP', name: 'left_img_config', label: '左侧图片', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'left_img', value: [true] }], children: [
            { span: 24, formType: 'INPUT', name: 'left_img_url', label: '图片地址', rules: true },
            { span: 24, formType: 'NUMBER', name: 'left_img_width', label: '图片宽度', rules: true },
            { span: 24, formType: 'NUMBER', name: 'left_img_height', label: '图片高度', rules: true },
            { span: 24, formType: 'INPUT', name: 'left_img_margin', label: '外间距', rules: true },
        ]
    },
    {
        span: 12, formType: 'GROUP', name: 'right_img_config', label: '右侧图片', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'right_img', value: [true] }], children: [
            { span: 24, formType: 'INPUT', name: 'right_img_url', label: '图片地址', rules: true },
            { span: 24, formType: 'NUMBER', name: 'right_img_width', label: '图片宽度', rules: true },
            { span: 24, formType: 'NUMBER', name: 'right_img_height', label: '图片高度', rules: true },
            { span: 24, formType: 'INPUT', name: 'right_img_margin', label: '外间距', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'center_config', label: '背景设置', collapsible: true, defaultCollapsed: true, children: [
            { span: 8, formType: 'SELECT', name: 'center_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
            { span: 8, formType: 'SELECT', name: 'center_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
            { span: 8, formType: 'SELECT', name: 'center_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
            { span: 12, formType: 'SELECT', name: 'center_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
            { span: 12, formType: 'SELECT', name: 'center_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
            { span: 12, formType: 'COLOR', name: 'center_color', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'center_deg', label: '颜色角度', rules: true },
            { span: 12, formType: 'INPUT', name: 'center_padding', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'center_margin', label: '外间距', rules: true },
            { span: 12, formType: 'RADIO', name: 'center_flex', label: '通栏铺满', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'NUMBER', name: 'center_width', label: '背景宽度', rules: true, jugde: [{ field: 'center_flex', value: [false] }] },
            { span: 12, formType: 'NUMBER', name: 'center_height', label: '背景高度', rules: true },
        ]
    },
    {
        span: 24, formType: 'LIST', name: 'text_list', label: '展示文字列表', collapsible: true, children: [
            { span: 24, formType: 'TEXTAREA', name: 'text', label: '文字列表', rules: true },
            { span: 12, formType: 'INPUT', name: 'text_margin', label: '外间距', rules: true },
            { span: 12, formType: 'COLOR', name: 'text_color', label: '文字颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'text_deg', label: '颜色角度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'text_size', label: '文字字号', rules: true },
            { span: 12, formType: 'SELECT', name: 'text_family', label: '文字字体', valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'text_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'text_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'text_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'text_filed_data', label: '阴影数值', rules: true,
                jugde: [{ field: 'text_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'text_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'text_filed', value: [true] }]
            },
            ...rowClickFormList,
        ]
    },
    {
        span: 24, formType: 'LIST', name: 'data_list', label: '数据列表', collapsible: true,
        children: [
            { span: 12, formType: 'INPUT', name: 'data_key', label: '映射字段', rules: true },
            { span: 12, formType: 'INPUT', name: 'data_value', label: '映射数据', rules: true },

            { span: 12, formType: 'INPUT', name: 'data_margin', label: '外间距', rules: true },
            { span: 12, formType: 'COLOR', name: 'data_color', label: '文字颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'data_deg', label: '颜色角度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'data_size', label: '文字字号', rules: true },
            { span: 12, formType: 'SELECT', name: 'data_family', label: '文字字体', valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'data_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'data_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'data_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'data_filed_data', label: '阴影数值', rules: true,
                jugde: [{ field: 'data_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'data_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'data_filed', value: [true] }]
            },
            ...rowClickFormList,
        ]
    }
]
// 组织机构
const PrefabricatedDiyOrgA01 = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    TemplateApiConfig,
    { span: 24, formType: 'RADIO', name: 'isParams', label: '接口参数', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'LIST', name: 'isParamsConfig', label: '接口参数', collapsible: true,
        jugde: [{ field: 'isParams', value: [true] }], children: [
            { span: 8, formType: 'INPUT', name: 'apiName', label: '接口名称', rules: true },
            { span: 8, formType: 'INPUT', name: 'apiParams', label: '接口字段', rules: true },
            { span: 8, formType: 'INPUT', name: 'apiData', label: '默认值', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'PrefabricatedDiyOrgA01_Red', label: '渲染设置', collapsible: true,
        children: [
            { span: 12, formType: 'INPUT', name: 'renderLabel', label: '渲染标签', rules: true },
            { span: 12, formType: 'INPUT', name: 'renderValue', label: '渲染值', rules: true },
            { span: 24, formType: 'RADIO', name: 'renderDefault', label: '默认选中', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'INPUT', name: 'renderDefValue', label: '默认值', rules: true, jugde: [{ field: 'renderDefault', value: [true] }] },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'PrefabricatedDiyOrgA01_BACK', label: '背景设置', collapsible: true,
        children: [
            { span: 12, formType: 'INPUT', name: 'backPadding', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'backMapping', label: '外间距', rules: true },
            { span: 24, formType: 'RADIO', name: 'backType', label: '背景类型', rules: true, valueEnum: MappingData.Start__backType },
            { span: 12, formType: 'COLOR', name: 'backColor', label: '背景颜色', rules: true, jugde: [{ field: 'backType', value: ['color'] }] },
            { span: 12, formType: 'NUMBER', name: 'backDeg', label: '背景角度', rules: true, jugde: [{ field: 'backType', value: ['color'] }] },
            { span: 24, formType: 'INPUT', name: 'backImage', label: '背景图片', rules: true, jugde: [{ field: 'backType', value: ['image'] }] },
            { span: 24, formType: 'INPUT', name: 'backVideo', label: '背景视频', rules: true, jugde: [{ field: 'backType', value: ['video'] }] },
            { span: 12, formType: 'NUMBER', name: 'backVideoStart', label: '视频开始时间', rules: true, jugde: [{ field: 'backType', value: ['video'] }] },
            { span: 12, formType: 'NUMBER', name: 'backVideoEnd', label: '视频结束时间', rules: true, jugde: [{ field: 'backType', value: ['video'] }] },
        ],
    },
    {
        span: 24, formType: 'GROUP', name: 'PrefabricatedDiyOrgA01_CELL', label: '单元格设置', collapsible: true,
        children: [
            {
                span: 12, formType: 'GROUP', name: 'PrefabricatedDiyOrgA01_CELL_def', label: '默认状态', collapsible: true,
                children: [
                    { span: 24, formType: 'INPUT', name: 'cellDefPadding', label: '内填充', rules: true },
                    { span: 24, formType: 'INPUT', name: 'cellDefMapping', label: '外间距', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'cellDefHeight', label: '高度', rules: true, },
                    { span: 24, formType: 'RADIO', name: 'cellDefAlign', label: '对齐方式', rules: true, valueEnum: MappingData.System__AlignmentLCR },
                    { span: 24, formType: 'COLOR', name: 'cellDefColor', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'cellDefDeg', label: '背景角度', rules: true },
                ],
            },
            {
                span: 12, formType: 'GROUP', name: 'PrefabricatedDiyOrgA01_CELL_act', label: '选中状态', collapsible: true,
                children: [
                    { span: 24, formType: 'INPUT', name: 'cellActPadding', label: '内填充', rules: true },
                    { span: 24, formType: 'INPUT', name: 'cellActMapping', label: '外间距', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'cellActHeight', label: '高度', rules: true, },
                    { span: 24, formType: 'RADIO', name: 'cellActAlign', label: '对齐方式', rules: true, valueEnum: MappingData.System__AlignmentLCR },
                    { span: 24, formType: 'COLOR', name: 'cellActColor', label: '背景颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'cellActDeg', label: '背景角度', rules: true },
                ],
            },
        ],
    },
    {
        span: 24, formType: 'GROUP', name: 'PrefabricatedDiyOrgA01_TEXT', label: '文字设置', collapsible: true,
        children: [
            {
                span: 12, formType: 'GROUP', name: 'PrefabricatedDiyOrgA01_TEXT_def', label: '默认状态', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'textDefColor', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'textDefDeg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'textDefSize', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'textDefFamily', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'textDefWeight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'textDefStyle', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'textDefFiled', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'textDefFiled_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'textDefFiled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'textDefFiled_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'textDefFiled', value: [true] }]
                    },
                ],
            },
            {
                span: 12, formType: 'GROUP', name: 'PrefabricatedDiyOrgA01_TEXT_act', label: '选中状态', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'textActColor', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'textActDeg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'textActSize', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'textActFamily', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'textActWeight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'textActStyle', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'textActFiled', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'textActFiled_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'textActFiled', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'textActFiled_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'textActFiled', value: [true] }]
                    },

                ],
            },

        ],
    }
]

// !!! 图文模块
// 默认图文
const PrefabricatedImgText = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    TemplateApiConfig,
    {
        span: 24, formType: 'LIST', name: 'api_diyObj', label: '自定义数据-对象', collapsible: true,
        jugde: [{ field: 'api_source', value: ['A03'] }], children: [
            { span: 12, formType: 'INPUT', name: 'diyData_key', label: '对象键', rules: true },
            { span: 12, formType: 'INPUT', name: 'diyData_value', label: '对象值', rules: true },
        ]
    },
    { span: 8, formType: 'RADIO', name: 'render_img', label: '显示图片', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'render_title', label: '显示标题', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'render_data', label: '显示数值', rules: true, valueEnum: MappingData.IsEnabledBool },

    {
        span: 24, formType: 'GROUP', name: 'render_img_config', label: '图片设置', collapsible: true,
        jugde: [{ field: 'render_img', value: [true] }], children: [
            { span: 24, formType: 'INPUT', name: 'img_url', label: '图片地址', rules: true },
            { span: 12, formType: 'INPUT', name: 'img_padding', label: '图片填充', rules: true },
            { span: 12, formType: 'RADIO', name: 'img_fit', label: '显示数值', rules: true, valueEnum: MappingData.Start__imgObjectFit },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'render_title_config', label: '标题设置', collapsible: true,
        jugde: [{ field: 'render_title', value: [true] }], children: [
            { span: 12, formType: 'RADIO', name: 'title_position', label: '标题位置', rules: true, valueEnum: MappingData.topORbtm },
            { span: 12, formType: 'NUMBER', name: 'title_top', label: '上方定位', rules: true, jugde: [{ field: 'title_position', value: ['top'] }] },
            { span: 12, formType: 'NUMBER', name: 'title_btm', label: '下方定位', rules: true, jugde: [{ field: 'title_position', value: ['bottom'] }] },
            { span: 8, formType: 'SELECT', name: 'title_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
            { span: 8, formType: 'SELECT', name: 'title_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
            { span: 8, formType: 'SELECT', name: 'title_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
            { span: 12, formType: 'SELECT', name: 'title_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
            { span: 12, formType: 'SELECT', name: 'title_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
            { span: 12, formType: 'INPUT', name: 'title_padding', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'title_mapping', label: '外间距', rules: true },

            { span: 12, formType: 'INPUT', name: 'title_text', label: '标题内容', rules: true },
            { span: 12, formType: 'NUMBER', name: 'title_size', label: '文字字号', rules: true },
            { span: 12, formType: 'COLOR', name: 'title_color', label: '文字颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'title_deg', label: '颜色角度', rules: true },
            { span: 12, formType: 'SELECT', name: 'title_family', label: '文字字体', valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'title_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'title_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'title_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'title_filed_data', label: '阴影数值', rules: true,
                jugde: [{ field: 'title_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'title_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'title_filed', value: [true] }]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'render_data_config', label: '数据设置', collapsible: true,
        jugde: [{ field: 'render_data', value: [true] }], children: [
            { span: 12, formType: 'RADIO', name: 'data_position', label: '数据位置', rules: true, valueEnum: MappingData.topORbtm },
            { span: 12, formType: 'NUMBER', name: 'data_top', label: '上方定位', rules: true, jugde: [{ field: 'data_position', value: ['top'] }] },
            { span: 12, formType: 'NUMBER', name: 'data_btm', label: '下方定位', rules: true, jugde: [{ field: 'data_position', value: ['bottom'] }] },
            { span: 8, formType: 'SELECT', name: 'data_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
            { span: 8, formType: 'SELECT', name: 'data_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
            { span: 8, formType: 'SELECT', name: 'data_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
            { span: 12, formType: 'SELECT', name: 'data_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
            { span: 12, formType: 'SELECT', name: 'data_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
            { span: 12, formType: 'INPUT', name: 'data_padding', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'data_mapping', label: '外间距', rules: true },

            { span: 12, formType: 'INPUT', name: 'data_text', label: '数据字段', rules: true },
            { span: 12, formType: 'NUMBER', name: 'data_size', label: '文字字号', rules: true },
            { span: 12, formType: 'COLOR', name: 'data_color', label: '文字颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'data_deg', label: '颜色角度', rules: true },
            { span: 12, formType: 'SELECT', name: 'data_family', label: '文字字体', valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'data_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'data_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'data_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'data_filed_data', label: '阴影数值', rules: true,
                jugde: [{ field: 'data_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'data_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'data_filed', value: [true] }]
            },
        ]
    },
    ...rowClickFormList
]
// !!! 列表模块
// ??? 列表的通用参数
const ListConfigList = [
    { span: 24, formType: 'INPUT', name: 'data_img', label: '图片地址' },
    { span: 12, formType: 'TempICON', name: 'data_icon', label: '图标选择' },
    { span: 12, formType: 'INPUT', name: 'data_unit', label: '单位信息' },

    { span: 8, formType: 'RADIO', name: 'alone_back', label: '单独背景设置', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'alone_back_image', label: '单独背景图片', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'alone_title', label: '单独标题设置', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'alone_number', label: '单独数值设置', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'alone_unit', label: '单独单位设置', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'alone_icon', label: '单独图标设置', rules: true, valueEnum: MappingData.IsEnabledBool },

    {
        span: 24, formType: 'GROUP', name: 'data_back_group', label: '独立背景设置', collapsible: true,
        jugde: [{ field: 'alone_back', value: [true] }], children: [
            { span: 12, formType: 'COLOR', name: 'data_back', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'data_backDeg', label: '颜色角度', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'alone_back_image_group', label: '独立背景图片', collapsible: true,
        jugde: [{ field: 'alone_back_image', value: [true] }], children: [
            { span: 24, formType: 'INPUT', name: 'alone_back_image_url', label: '图片地址', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'data_title_group', label: '独立标题设置', collapsible: true,
        jugde: [{ field: 'alone_title', value: [true] }], children: [
            { span: 12, formType: 'COLOR', name: 'data_titleColor', label: '标题颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'data_titleDeg', label: '颜色角度', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'data_number_group', label: '独立数值设置', collapsible: true,
        jugde: [{ field: 'alone_number', value: [true] }], children: [
            { span: 12, formType: 'COLOR', name: 'data_text', label: '数值颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'data_textDeg', label: '颜色角度', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'data_unit_group', label: '独立单位设置', collapsible: true,
        jugde: [{ field: 'alone_unit', value: [true] }], children: [
            { span: 12, formType: 'COLOR', name: 'data_unitColor', label: '单位颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'data_unitDeg', label: '颜色角度', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'data_icon_group', label: '独立图标设置', collapsible: true,
        jugde: [{ field: 'alone_icon', value: [true] }], children: [
            { span: 12, formType: 'COLOR', name: 'data_icon_color', label: '图标颜色', mode: ['single'], rules: true },
            { span: 12, formType: 'NUMBER', name: 'data_icon_size', label: '图标尺寸', rules: true },
        ]
    },
    ...rowClickFormList,
]
// 默认列表
const PrefabricatedList = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    TemplateApiConfig,
    {
        span: 24, formType: 'LIST', name: 'api_diyObj', label: '自定义数据-对象', collapsible: true,
        jugde: [{ field: 'api_source', value: ['A03'] }], children: [
            { span: 12, formType: 'INPUT', name: 'diyData_key', label: '对象键', rules: true },
            { span: 12, formType: 'INPUT', name: 'diyData_value', label: '对象值', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'data_diy_config_group', label: '自定义数据', collapsible: true,
        children: [
            {
                span: 24, formType: 'LIST', name: 'data_diy_config', label: '自定义数据', collapsible: true,
                jugde: [{ field: 'api_source', value: ['A01', 'A03'] }], children: [
                    { span: 12, formType: 'INPUT', name: 'data_title', label: '标题名称', rules: true },
                    { span: 12, formType: 'INPUT', name: 'data_value', label: '映射字段', rules: true },
                    ...ListConfigList,
                ]
            },
        ]
    },
    {
        span: 24, formType: 'LIST', name: 'data_arr_config', label: '数组设置', collapsible: true,
        jugde: [{ field: 'api_source', value: ['A02'] }, { field: 'api_dataType', value: ['A03'] }], children: [
            { span: 8, formType: 'INPUT', name: 'data_field', label: '标题字段' },
            { span: 8, formType: 'INPUT', name: 'data_fieldName', label: '标题识别' },
            { span: 8, formType: 'INPUT', name: 'data_number', label: '数值字段' },
            { span: 12, formType: 'INPUT', name: 'data_title', label: '字段标题' },
            { span: 12, formType: 'INPUT', name: 'data_value', label: '数值字段' },
            ...ListConfigList,
        ]
    },
    {
        span: 24, formType: 'LIST', name: 'data_obj_config', label: '对象列表', collapsible: true,
        jugde: [{ field: 'api_source', value: ['A02'] }, { field: 'api_dataType', value: ['A02'] }], children: [
            { span: 12, formType: 'INPUT', name: 'data_title', label: '标题名称', rules: true },
            { span: 12, formType: 'INPUT', name: 'data_value', label: '映射字段', rules: true },
            ...ListConfigList,
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'whole_layout', label: '整体布局', collapsible: true,
        children: [
            { span: 8, formType: 'SELECT', name: 'whole_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
            { span: 8, formType: 'SELECT', name: 'whole_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
            { span: 8, formType: 'SELECT', name: 'whole_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
            { span: 12, formType: 'SELECT', name: 'whole_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
            { span: 12, formType: 'SELECT', name: 'whole_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
            { span: 12, formType: 'INPUT', name: 'whole_padding', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'whole_margin', label: '外间距', rules: true },
            // 背景图片
            { span: 12, formType: 'RADIO', name: 'back_image', label: '背景图片', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'back_image_url', label: '图片地址', rules: true,
                jugde: [{ field: 'back_image', value: [true] }]
            },
            {
                span: 12, formType: 'INPUT', name: 'back_image_padding', label: '图片内填充', rules: true,
                jugde: [{ field: 'back_image', value: [true] }]
            },
            {
                span: 12, formType: 'INPUT', name: 'back_image_margin', label: '图片外边距', rules: true,
                jugde: [{ field: 'back_image', value: [true] }]
            },
            {
                span: 12, formType: 'NUMBER', name: 'back_image_width', label: '图片宽度',
                jugde: [{ field: 'back_image', value: [true] }]
            },
            {
                span: 12, formType: 'NUMBER', name: 'back_image_height', label: '图片高度',
                jugde: [{ field: 'back_image', value: [true] }]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'item_layout', label: '单项布局', collapsible: true,
        children: [
            { span: 8, formType: 'RADIO', name: 'item_icon', label: '单项图标', rules: true, valueEnum: MappingData.System__FilesType },
            { span: 8, formType: 'RADIO', name: 'item_back', label: '单项背景', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 8, formType: 'RADIO', name: 'item_unit', label: '独立单位', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'RADIO', name: 'item_widthUnit', label: '宽度单位', rules: true, valueEnum: MappingData.Flex_SizeType },
            { span: 12, formType: 'NUMBER', name: 'item_width', label: '单项宽度', rules: true },
            { span: 12, formType: 'RADIO', name: 'item_heightUnit', label: '高度单位', rules: true, valueEnum: MappingData.Flex_SizeType },
            { span: 12, formType: 'NUMBER', name: 'item_height', label: '单项高度', rules: true },
            {
                span: 8, formType: 'SELECT', name: 'item_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items,
                jugde: [{ field: 'item_icon', value: ['icon', 'img'] }]
            },
            {
                span: 8, formType: 'SELECT', name: 'item_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content,
                jugde: [{ field: 'item_icon', value: ['icon', 'img'] }]
            },
            {
                span: 8, formType: 'SELECT', name: 'item_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify,
                jugde: [{ field: 'item_icon', value: ['icon', 'img'] }]
            },
            {
                span: 12, formType: 'SELECT', name: 'item_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction,
                jugde: [{ field: 'item_icon', value: ['icon', 'img'] }]
            },
            {
                span: 12, formType: 'SELECT', name: 'item_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap,
                jugde: [{ field: 'item_icon', value: ['icon', 'img'] }]
            },
            { span: 12, formType: 'INPUT', name: 'item_padding', label: '内填充', rules: true },
            { span: 12, formType: 'INPUT', name: 'item_margin', label: '外间距', rules: true },

            {
                span: 24, formType: 'GROUP', name: 'item_icon_config', label: '图标设置', collapsible: true,
                jugde: [{ field: 'item_icon', value: ['icon'] }], children: [
                    { span: 12, formType: 'COLOR', name: 'icon_color', label: '图标颜色', rules: true, mode: ['single'] },
                    { span: 12, formType: 'NUMBER', name: 'icon_size', label: '图标尺寸', rules: true },
                    { span: 12, formType: 'INPUT', name: 'icon_margin', label: '外间距', rules: true },
                    { span: 12, formType: 'RADIO', name: 'icon_filed', label: '图标阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'icon_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'icon_filed', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'icon_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'icon_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'item_image_config', label: '图片设置', collapsible: true,
                jugde: [{ field: 'item_icon', value: ['img'] }], children: [
                    { span: 12, formType: 'NUMBER', name: 'image_width', label: '图片宽度', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'image_height', label: '图片高度', rules: true },
                    { span: 12, formType: 'INPUT', name: 'image_margin', label: '外间距', rules: true },
                    { span: 12, formType: 'RADIO', name: 'image_filed', label: '图片阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'image_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'image_filed', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'image_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'image_filed', value: [true] }]
                    },
                ]
            },

            {
                span: 24, formType: 'GROUP', name: 'item_back_confit', label: '背景设置', collapsible: true,
                jugde: [{ field: 'item_back', value: [true] }], children: [
                    { span: 12, formType: 'COLOR', name: 'back_color', label: '背景颜色', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'back_deg', label: '背景角度', rules: true },
                    { span: 24, formType: 'RADIO', name: 'back_position', label: '背景定位方式', rules: true, valueEnum: MappingData.Style__PositionType },
                    {
                        span: 12, formType: 'RADIO', name: 'back_topUnit', label: '顶部定位单位', rules: true,
                        valueEnum: MappingData.Flex_SizeType, jugde: [{ field: 'back_position', value: ['top-left', 'top-right'] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'back_top', label: '顶部距离', rules: true,
                        jugde: [{ field: 'back_position', value: ['top-left', 'top-right'] }]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'back_btmUnit', label: '底部定位单位', rules: true,
                        valueEnum: MappingData.Flex_SizeType, jugde: [{ field: 'back_position', value: ['bottom-left', 'bottom-right'] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'back_btm', label: '底部距离', rules: true,
                        jugde: [{ field: 'back_position', value: ['bottom-left', 'bottom-right'] }]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'back_lefUnit', label: '左侧定位单位', rules: true,
                        valueEnum: MappingData.Flex_SizeType, jugde: [{ field: 'back_position', value: ['top-left', 'bottom-left'] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'back_lef', label: '左侧距离', rules: true,
                        jugde: [{ field: 'back_position', value: ['top-left', 'bottom-left'] }]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'back_rigUnit', label: '右侧定位单位', rules: true,
                        valueEnum: MappingData.Flex_SizeType, jugde: [{ field: 'back_position', value: ['top-right', 'bottom-right'] }]
                    },
                    {
                        span: 12, formType: 'NUMBER', name: 'back_rig', label: '右侧距离', rules: true,
                        jugde: [{ field: 'back_position', value: ['top-right', 'bottom-right'] }]
                    },
                    { span: 12, formType: 'RADIO', name: 'back_widthUnit', label: '宽度单位', rules: true, valueEnum: MappingData.Flex_SizeType },
                    { span: 12, formType: 'NUMBER', name: 'back_width', label: '背景宽度', rules: true },
                    { span: 12, formType: 'RADIO', name: 'back_heightUnit', label: '高度单位', rules: true, valueEnum: MappingData.Flex_SizeType },
                    { span: 12, formType: 'NUMBER', name: 'back_height', label: '背景高度', rules: true },

                    { span: 12, formType: 'INPUT', name: 'back_radius', label: '背景圆角', rules: true },
                    { span: 12, formType: 'RADIO', name: 'back_border', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },

                    { span: 12, formType: 'NUMBER', name: 'back_border_size', label: '边框尺寸', rules: true, jugde: [{ field: 'back_border', value: [true] }] },
                    {
                        span: 12, formType: 'RADIO', name: 'back_border_type', label: '边框类型', rules: true,
                        valueEnum: MappingData.Style__BorderType, jugde: [{ field: 'back_border', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'back_border_color', label: '边框颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'back_border', value: [true] }]
                    },
                    { span: 12, formType: 'RADIO', name: 'back_backImage', label: '背景图片', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'back_backImage_url', label: '背景图片URL', rules: true,
                        jugde: [{ field: 'back_backImage', value: [true] }]
                    },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'item_unit_config', label: '单位设置', collapsible: true,
                jugde: [{ field: 'item_unit', value: [true] }], children: [
                    { span: 12, formType: 'COLOR', name: 'unit_color', label: '文字颜色', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'unit_deg', label: '颜色角度', rules: true },
                    { span: 12, formType: 'INPUT', name: 'unit_margin', label: '外间距', rules: true },
                    { span: 12, formType: 'NUMBER', name: 'unit_size', label: '文字字号', rules: true },
                    { span: 12, formType: 'SELECT', name: 'unit_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 12, formType: 'RADIO', name: 'unit_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 12, formType: 'RADIO', name: 'unit_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 12, formType: 'RADIO', name: 'unit_filed', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 12, formType: 'INPUT', name: 'unit_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'unit_filed', value: [true] }]
                    },
                    {
                        span: 12, formType: 'COLOR', name: 'unit_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'unit_filed', value: [true] }]
                    },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'text_layout', label: '文字区设置', collapsible: true,
        children: [
            { span: 8, formType: 'SELECT', name: 'text_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
            { span: 8, formType: 'SELECT', name: 'text_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
            { span: 8, formType: 'SELECT', name: 'text_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
            { span: 12, formType: 'SELECT', name: 'text_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
            { span: 12, formType: 'SELECT', name: 'text_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
            {
                span: 12, formType: 'GROUP', name: 'text_title', label: '标题设置', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'text_title_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'text_title_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'INPUT', name: 'text_title_margin', label: '外间距', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'text_title_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'text_title_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'text_title_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'text_title_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'text_title_filed', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'text_title_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'text_title_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'text_title_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'text_title_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'text_value', label: '数值设置', collapsible: true,
                children: [
                    { span: 24, formType: 'COLOR', name: 'text_value_color', label: '文字颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'text_value_deg', label: '颜色角度', rules: true },
                    { span: 24, formType: 'INPUT', name: 'text_value_margin', label: '外间距', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'text_value_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'text_value_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'text_value_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'text_value_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'text_value_filed', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'text_value_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'text_value_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'text_value_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'text_value_filed', value: [true] }]
                    },
                ]
            },
        ]
    },
]
// !!! 表单模块
// ??? 默认表单
const PrefabricatedTable = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    {
        span: 24, formType: 'GROUP', name: 'data_config', label: '数据设置', collapsible: true,
        children: [
            { span: 12, formType: 'RADIO', name: 'data_type', label: '数据来源', rules: true, valueEnum: MappingData.dataSourceType },
            { span: 12, formType: 'INPUT', name: 'data_number', label: '默认单页数据数量', rules: true },
            {
                span: 24, formType: 'GROUP', name: 'data_api_config', label: '数据设置', collapsible: true,
                jugde: [{ field: 'data_type', value: ['A02'] }], children: [
                    { span: 12, formType: 'RADIO', name: 'data_api_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
                    { span: 12, formType: 'INPUT', name: 'data_api_url', label: '请求接口', rules: true },
                    { span: 12, formType: 'INPUT', name: 'data_api_params', label: '额外参数' },
                    { span: 12, formType: 'INPUT', name: 'data_api_https', label: '额外地址' },
                    { span: 12, formType: 'RADIO', name: 'data_api_level', label: '数据层级', rules: true, valueEnum: MappingData.ApiUrlLevel },
                    { span: 12, formType: 'INPUT', name: 'data_api_mapping', label: '层级字段', rules: true, jugde: [{ field: 'data_api_level', value: [true] }] },
                ]
            },
        ]
    },
    { span: 8, formType: 'INPUT', name: 'headerTitle', label: '额外标题', rules: true },
    { span: 8, formType: 'RADIO', name: 'card', label: '额外卡片', rules: true, valueEnum: MappingData.IsEnabledBool },
    { span: 8, formType: 'RADIO', name: 'tree', label: '额外菜单', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'GROUP', name: 'card_config', label: '卡片设置', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'card', value: [true] }, { field: 'data_type', value: ['A02', 'A03'] }], children: [
            { span: 24, formType: 'INPUT', name: 'card_field', label: '数据字段', rules: true, jugde: [{ field: 'data_type', value: ['A02'] }] },
            {
                span: 24, formType: 'LIST', name: 'card_diyData', label: '独立单位设置', collapsible: true,
                jugde: [{ field: 'data_type', value: ['A03'] }], children: [
                    { span: 12, formType: 'INPUT', name: 'key', label: '数据键', rules: true },
                    { span: 12, formType: 'INPUT', name: 'value', label: '数据值', rules: true },
                ]
            },
            {
                span: 24, formType: 'LIST', name: 'card_renderList', label: '独立单位设置', collapsible: true,
                children: [
                    { span: 8, formType: 'INPUT', name: 'label', label: '标题名称', rules: true },
                    { span: 8, formType: 'INPUT', name: 'value', label: '映射字段', rules: true },
                    { span: 8, formType: 'INPUT', name: 'unit', label: '额外单位' },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'tree_config', label: '菜单设置', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'tree', value: [true] }, { field: 'data_type', value: ['A02', 'A03'] }], children: [
            { span: 24, formType: 'RADIO', name: 'tree_api_source', label: '数据来源', rules: true, valueEnum: MappingData.dataSourceType },
            {
                span: 24, formType: 'GROUP', name: 'tree_api_http', label: '接口配置', collapsible: true,
                jugde: [{ field: 'tree_api_source', value: ['A02'] }], children: [
                    { span: 12, formType: 'RADIO', name: 'tree_api_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method },
                    { span: 12, formType: 'INPUT', name: 'tree_api_url', label: '请求接口', rules: true },
                    { span: 12, formType: 'INPUT', name: 'tree_api_params', label: '额外参数' },
                    { span: 12, formType: 'INPUT', name: 'tree_api_https', label: '额外地址' },
                    { span: 12, formType: 'INPUT', name: 'tree_http_params', label: '发送字段', rules: true },
                    { span: 12, formType: 'RADIO', name: 'tree_api_level', label: '数据层级', rules: true, valueEnum: MappingData.ApiUrlLevel },
                    { span: 12, formType: 'INPUT', name: 'tree_api_mapping', label: '层级字段', rules: true, jugde: [{ field: 'tree_api_level', value: [true] }] },
                ]
            },
            {
                span: 24, formType: 'GROUP', name: 'tree_api_diy', label: '自定义菜单', collapsible: true,
                jugde: [{ field: 'tree_api_source', value: ['A03'] }], children: [

                ]
            },

            // 映射设置
            { span: 12, formType: 'RADIO', name: 'tree_start', label: '是否显示数值', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'INPUT', name: 'tree_number', label: '数值字段', rules: true, jugde: [{ field: 'tree_start', value: [true] }] },
            { span: 12, formType: 'INPUT', name: 'tree_key', label: 'key映射' },
            { span: 12, formType: 'INPUT', name: 'tree_title', label: 'title映射' },
            { span: 12, formType: 'INPUT', name: 'tree_children', label: 'children映射' },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'columns', label: '字段设置', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'data_type', value: ['A02', 'A03'] }], children: [
            {
                span: 24, formType: 'LIST', name: 'columns_diyData', label: '自定义列表数据', collapsible: true,
                jugde: [{ field: 'data_type', value: ['A03'] }], children: [
                    {
                        span: 24, formType: 'LIST', name: 'diyData_item', label: '自定义列表数据', collapsible: true,
                        children: [
                            { span: 12, formType: 'INPUT', name: 'key', label: '数据键' },
                            { span: 12, formType: 'INPUT', name: 'value', label: '数据值' },
                        ]
                    },
                ]
            },
            {
                span: 24, formType: 'LIST', name: 'columns_list', label: '字段列表', collapsible: true,
                children: [
                    { span: 12, formType: 'INPUT', name: 'dataIndex', label: '字段', rules: true },
                    { span: 12, formType: 'INPUT', name: 'title', label: '映射', rules: true },
                    { span: 12, formType: 'RADIO', name: 'hideInTable', label: '渲染', rules: true, valueEnum: MappingData.IsShowBoolNot },
                    { span: 12, formType: 'RADIO', name: 'search', label: '搜索', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 12, formType: 'NUMBER', name: 'width', label: '宽度', rules: true },
                    { span: 12, formType: 'RADIO', name: 'align', label: '对齐', rules: true, valueEnum: MappingData.System__AlignmentLCR },
                    { span: 12, formType: 'RADIO', name: 'copyable', label: '拷贝', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 12, formType: 'RADIO', name: 'ellipsis', label: '缩略', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 12, formType: 'INPUT', name: 'tooltip', label: '提示' },
                    { span: 12, formType: 'SELECT', name: 'valueType', label: '类型', rules: true, valueEnum: MappingData.Form__AntdValueType },

                    {
                        span: 12, formType: 'INPUT', name: 'valueEnum_key', label: '映射键', rules: true,
                        jugde: [{ field: 'valueType', value: ['select', 'cascader', 'treeSelect'] }]
                    },
                    {
                        span: 12, formType: 'INPUT', name: 'valueEnum_value', label: '映射值', rules: true,
                        jugde: [{ field: 'valueType', value: ['select', 'cascader', 'treeSelect'] }]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'valueEnum_type', label: '类型', rules: true, valueEnum: MappingData.System__MapType,
                        jugde: [{ field: 'valueType', value: ['select', 'cascader', 'treeSelect'] }]
                    },
                    {
                        span: 12, formType: 'SELECT', name: 'valueEnum_data', label: '数据映射', rules: true, valueEnum: MappingData.System__MappingEnum,
                        jugde: [{ field: 'valueType', value: ['select', 'cascader', 'treeSelect'] }, { field: 'valueEnum_type', value: ['DataMapping'] }]
                    },
                    {
                        span: 12, formType: 'INPUT', name: 'valueEnum_apiUrl', label: '接口地址', rules: true,
                        jugde: [{ field: 'valueType', value: ['select', 'cascader', 'treeSelect'] }, { field: 'valueEnum_type', value: ['ApiMapping'] }]
                    },
                    {
                        span: 12, formType: 'SELECT', name: 'valueEnum_method', label: '请求方式', rules: true, valueEnum: MappingData.System__Method,
                        jugde: [{ field: 'valueType', value: ['select', 'cascader', 'treeSelect'] }, { field: 'valueEnum_type', value: ['ApiMapping'] }]
                    },
                    {
                        span: 12, formType: 'INPUT', name: 'valueEnum_params', label: '额外参数', rules: true,
                        jugde: [{ field: 'valueType', value: ['select', 'cascader', 'treeSelect'] }, { field: 'valueEnum_type', value: ['ApiMapping'] }]
                    },
                    {
                        span: 12, formType: 'INPUT', name: 'valueEnum_http', label: '额外地址', rules: true,
                        jugde: [{ field: 'valueType', value: ['select', 'cascader', 'treeSelect'] }, { field: 'valueEnum_type', value: ['ApiMapping'] }]
                    },
                    {
                        span: 12, formType: 'RADIO', name: 'valueEnum_level', label: '数据层级', rules: true, valueEnum: MappingData.ApiUrlLevel,
                        jugde: [{ field: 'valueType', value: ['select', 'cascader', 'treeSelect'] }, { field: 'valueEnum_type', value: ['ApiMapping'] }]
                    },
                    {
                        span: 12, formType: 'INPUT', name: 'valueEnum_mapping', label: '层级字段', rules: true,
                        jugde: [{ field: 'valueType', value: ['select', 'cascader', 'treeSelect'] }, { field: 'valueEnum_type', value: ['ApiMapping'] },
                        { field: 'valueEnum_level', value: [true] }]
                    },
                ]
            },
        ]
    },
    {
        span: 24, formType: 'RADIO', name: 'options_status', label: '单行操作', rules: true, valueEnum: MappingData.IsEnabledBool,
        jugde: [{ field: 'data_type', value: ['A02', 'A03'] }]
    },
    {
        span: 24, formType: 'GROUP', name: 'options_config', label: '操作设置', collapsible: true, defaultCollapsed: true,
        jugde: [{ field: 'data_type', value: ['A02', 'A03'] }, { field: 'options_status', value: [true] }],
        children: [
            { span: 12, formType: 'INPUT', name: 'options_name', label: '栏位名称', rules: true },
            { span: 12, formType: 'NUMBER', name: 'options_width', label: '整体宽度', rules: true },
            { span: 12, formType: 'RADIO', name: 'options_align', label: '对齐方式', rules: true, valueEnum: MappingData.System__AlignmentLCR },
            { span: 12, formType: 'RADIO', name: 'options_fixed', label: '是否固定', rules: true, valueEnum: MappingData.IsEnabledBool }
        ]
    },
    {
        span: 24, formType: 'LIST', name: 'options', label: '操作设置', collapsible: true,
        jugde: [{ field: 'data_type', value: ['A02', 'A03'] }, { field: 'options_status', value: [true] }],
        children: [
            { span: 12, formType: 'INPUT', name: 'name', label: '操作名称', rules: true },
            { span: 12, formType: 'RADIO', name: 'type', label: '操作类型', rules: true, valueEnum: MappingData.System__TableOptionsType },
            // 弹窗设置
            {
                span: 24, formType: 'GROUP', name: 'model_config', label: '弹窗设置', collapsible: true,
                jugde: [{ field: 'type', value: ['model'] }], children: [
                    { span: 12, formType: 'TempGenerateUuid', name: 'model_uuid', label: '生成ID', rules: true },
                    { span: 12, formType: 'RADIO', name: 'model_start', label: '大屏小窗', rules: true, valueEnum: MappingData.IsEnabledBool },
                    { span: 12, formType: 'RADIO', name: 'model_level', label: '弹窗层级', rules: true, valueEnum: MappingData.System__TableModelLevel },
                    { span: 12, formType: 'INPUT', name: 'model_title', label: '弹窗名称', rules: true },
                    { span: 12, formType: 'INPUT', name: 'model_width', label: '整体宽度', tooltip: 'vw,vh,px,%' },
                    { span: 12, formType: 'INPUT', name: 'model_height', label: '整体宽度', tooltip: 'vw,vh,px,%' },
                ]
            },
            // 跳转设置
            {
                span: 24, formType: 'GROUP', name: 'navTo_config', label: '跳转设置', collapsible: true,
                jugde: [{ field: 'type', value: ['navTo'] }], children: [
                    { span: 24, formType: 'RADIO', name: 'navTo_type', label: '跳转方式', rules: true, valueEnum: MappingData.System_TableNavToType },
                    // 站内跳转
                    { span: 12, formType: 'INPUT', name: 'navTo_int_router', label: '站内路由', rules: true, jugde: [{ field: 'navTo_type', value: ['int'] }] },
                    { span: 12, formType: 'INPUT', name: 'navTo_int_params', label: '参数字段', jugde: [{ field: 'navTo_type', value: ['int'] }], },
                    // 外部链接
                    {
                        span: 12, formType: 'RADIO', name: 'navTo_ext_type', label: '链接方式', rules: true,
                        valueEnum: MappingData.System_TableNavToExtType, jugde: [{ field: 'navTo_type', value: ['ext'] }]
                    },
                    {
                        span: 12, formType: 'INPUT', name: 'navTo_ext_url', label: '字段或链接', rules: true, tooltip: '数据字段或站点链接',
                        jugde: [{ field: 'navTo_type', value: ['ext'] }]
                    },
                    { span: 12, formType: 'INPUT', name: 'navTo_ext_value', label: '参数字段', jugde: [{ field: 'navTo_type', value: ['ext'] }] },
                    { span: 12, formType: 'INPUT', name: 'navTo_ext_field', label: '字段映射', jugde: [{ field: 'navTo_type', value: ['ext'] }] },
                ]
            },
        ]
    },
]
// !!! 选择器
// ??? 下拉选择器
const PrefabricatedSelect = [

]
// ??? 时间选择器
const PrefabricatedDateSelect = [
    { span: 24, formType: 'HIDDEN', name: 'uuid', label: '表编号', rules: true },
    { span: 12, formType: 'RADIO', name: 'isParams', label: '接口参数', rules: true, valueEnum: MappingData.IsEnabledBool },
    {
        span: 24, formType: 'LIST', name: 'isParamsConfig', label: '接口参数', collapsible: true,
        jugde: [{ field: 'isParams', value: [true] }], children: [
            { span: 8, formType: 'INPUT', name: 'apiName', label: '接口名称', rules: true },
            { span: 8, formType: 'INPUT', name: 'apiParams', label: '接口字段', rules: true },
            { span: 8, formType: 'INPUT', name: 'apiData', label: '默认值', rules: true },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'PrefabricatedDateSelectA01', label: '基础设置', collapsible: true,
        children: [
            { span: 12, formType: 'RADIO', name: 'allowClear', label: '清除按钮', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'RADIO', name: 'picker', label: '日期类型', rules: true, valueEnum: MappingData.From_AntdDatePicker },
            { span: 8, formType: 'RADIO', name: 'defaultDate', label: '默认日期', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 8, formType: 'RADIO', name: 'specifiedDate', label: '指定默认日期', rules: true, valueEnum: MappingData.IsEnabledBool,
                jugde: [{ field: 'defaultDate', value: [true] }]
            },
            {
                span: 8, formType: 'DATETIME', name: 'valueDate', label: '日期默认值', rules: true,
                jugde: [{ field: 'defaultDate', value: [true] }, { field: 'specifiedDate', value: [true] }]
            },
        ]
    },
    // 背景设置
    {
        span: 24, formType: 'GROUP', name: 'PrefabricatedDateSelectA02', label: '背景样式', collapsible: true,
        children: [
            { span: 12, formType: 'COLOR', name: 'back_color', label: '背景颜色', rules: true },
            { span: 12, formType: 'NUMBER', name: 'back_deg', label: '背景角度', rules: true },
            { span: 12, formType: 'NUMBER', name: 'back_width', label: '窗体宽度', rules: true },
            { span: 12, formType: 'INPUT', name: 'back_radius', label: '背景圆角', rules: true },
            { span: 12, formType: 'RADIO', name: 'back_border', label: '背景边框', rules: true, valueEnum: MappingData.IsEnabledBool },
            { span: 12, formType: 'RADIO', name: 'back_shadow', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'GROUP', name: 'back_border_config', label: '边框样式', collapsible: true,
                jugde: [{ field: 'back_border', value: [true] }], children: [
                    { span: 24, formType: 'COLOR', name: 'back_border_color', label: '边框颜色', rules: true },
                    { span: 24, formType: 'NUMBER', name: 'back_border_size', label: '边框尺寸', rules: true },
                    { span: 24, formType: 'RADIO', name: 'back_border_type', label: '边框类型', rules: true, valueEnum: MappingData.Style__BorderType },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'back_shadow_config', label: '阴影样式', collapsible: true,
                jugde: [{ field: 'back_shadow', value: [true] }], children: [
                    { span: 24, formType: 'COLOR', name: 'back_shadow_color', label: '阴影颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'INPUT', name: 'back_shadow_size', label: '阴影数值', rules: true },
                    { span: 24, formType: 'RADIO', name: 'back_shadow_type', label: '阴影类型', rules: true, valueEnum: MappingData.Style__shadowType },
                ]
            }
        ]
    },
    // 组件样式
    {
        span: 24, formType: 'GROUP', name: 'PrefabricatedDateSelectA03', label: '字体样式', collapsible: true,
        children: [
            { span: 12, formType: 'COLOR', name: 'title_color', label: '文字颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'NUMBER', name: 'title_size', label: '文字字号', rules: true },
            { span: 12, formType: 'SELECT', name: 'title_family', label: '文字字体', valueEnum: MappingData.Font__Family },
            { span: 12, formType: 'RADIO', name: 'title_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
            { span: 12, formType: 'RADIO', name: 'title_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
            { span: 12, formType: 'RADIO', name: 'title_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
            {
                span: 12, formType: 'INPUT', name: 'title_filed_data', label: '阴影数值', rules: true,
                jugde: [{ field: 'title_filed', value: [true] }]
            },
            {
                span: 12, formType: 'COLOR', name: 'title_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                jugde: [{ field: 'title_filed', value: [true] }]
            },
        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'PrefabricatedDateSelectA04', label: '图标样式', collapsible: true,
        children: [
            { span: 12, formType: 'RADIO', name: 'prefix', label: '前缀', rules: true, valueEnum: MappingData.System__textOrImage },
            { span: 12, formType: 'RADIO', name: 'suffix', label: '后缀', rules: true, valueEnum: MappingData.System__textOrImage },
            {
                span: 12, formType: 'GROUP', name: 'prefix_text_config', label: '前缀文字', collapsible: true,
                jugde: [{ field: 'prefix', value: ['text'] }], children: [
                    { span: 24, formType: 'INPUT', name: 'prefix_text', label: '文字内容', rules: true },
                    { span: 24, formType: 'COLOR', name: 'prefix_color', label: '文字颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'prefix_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'prefix_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'prefix_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'prefix_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'prefix_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'prefix_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'prefix_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'prefix_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'prefix_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'prefix_icon_config', label: '前缀图标', collapsible: true,
                jugde: [{ field: 'prefix', value: ['icon'] }], children: [
                    { span: 24, formType: 'TempICON', name: 'prefix_icon', label: '图标选择', rules: true },
                    { span: 24, formType: 'COLOR', name: 'prefix_icon_color', label: '图标颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'prefix_icon_size', label: '图标尺寸', rules: true },
                    { span: 24, formType: 'RADIO', name: 'prefix_icon_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'prefix_icon_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'prefix_icon_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'prefix_icon_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'prefix_icon_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'suffix_text_config', label: '后缀设置', collapsible: true,
                jugde: [{ field: 'suffix', value: ['text'] }], children: [
                    { span: 24, formType: 'INPUT', name: 'suffix_text', label: '文字内容', rules: true },
                    { span: 24, formType: 'COLOR', name: 'suffix_color', label: '文字颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'suffix_size', label: '文字字号', rules: true },
                    { span: 24, formType: 'SELECT', name: 'suffix_family', label: '文字字体', valueEnum: MappingData.Font__Family },
                    { span: 24, formType: 'RADIO', name: 'suffix_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
                    { span: 24, formType: 'RADIO', name: 'suffix_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },
                    { span: 24, formType: 'RADIO', name: 'suffix_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'suffix_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'suffix_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'suffix_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'suffix_filed', value: [true] }]
                    },
                ]
            },
            {
                span: 12, formType: 'GROUP', name: 'suffix_icon_config', label: '后缀设置', collapsible: true,
                jugde: [{ field: 'suffix', value: ['icon'] }], children: [
                    { span: 24, formType: 'TempICON', name: 'suffix_icon', label: '图标选择', rules: true },
                    { span: 24, formType: 'COLOR', name: 'suffix_icon_color', label: '图标颜色', rules: true, mode: ['single'] },
                    { span: 24, formType: 'NUMBER', name: 'suffix_icon_size', label: '图标尺寸', rules: true },
                    { span: 24, formType: 'RADIO', name: 'suffix_icon_filed', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
                    {
                        span: 24, formType: 'INPUT', name: 'suffix_icon_filed_data', label: '阴影数值', rules: true,
                        jugde: [{ field: 'suffix_icon_filed', value: [true] }]
                    },
                    {
                        span: 24, formType: 'COLOR', name: 'suffix_icon_filed_color', label: '阴影颜色', rules: true, mode: ['single'],
                        jugde: [{ field: 'suffix_icon_filed', value: [true] }]
                    },
                ]
            },
        ]
    }
]
// *** 弹窗设置
const ModelConfigFormList = [
    { span: 24, formType: 'HIDDEN', name: 'json', label: '表编号', rules: true },
    { span: 24, formType: 'RADIO', name: 'pageType', label: '页面类型', rules: true, valueEnum: MappingData.Start__pageType },
    { span: 24, formType: 'INPUT', name: 'diyUrl', label: '自订页面路径', rules: true, jugde: [{ field: 'pageType', value: ['DIY'] }] },
    {
        span: 24, formType: 'RADIO', name: 'layType', label: '布局页面类型', rules: true,
        valueEnum: MappingData.Model_layoutType, jugde: [{ field: 'pageType', value: ['LAY'] }]
    },
    {
        span: 24, formType: 'GROUP', name: 'lay_A01', label: '附件窗口配置', collapsible: true,
        jugde: [{ field: 'pageType', value: ['LAY'] }, { field: 'layType', value: ['A01'] }], children: [

        ]
    },
    {
        span: 24, formType: 'GROUP', name: 'lay_A02', label: '列表窗口配置', collapsible: true,
        jugde: [{ field: 'pageType', value: ['LAY'] }, { field: 'layType', value: ['A02'] }], children: [
            ...PrefabricatedTable,
        ]
    },
]



export const FormConfig = {
    TextClassList,
    AddProjectFormList,

    ThemeFormList,
    StartFormList,
    StartInitFormList,
    StartWindowFormList,

    AddFieldsImport,
    AddFieldsFormList,
    SetFieldsFormList,
    AddTopOptionsFormList,
    AddRowOptionsFormList,
    AddRenderFormFormList,

    SetDEVTemplateConfig,
    SetDEVGetDataConfig,
    SetDEVStyleConfig,
    SetLoginPageConfig,
    QuestionBankOptions,
    DxThemeConfig,
    ModifyPasswordFormList,

    LayoutAPiDataFormList,
    LayoutWindowStyleFormList,
    ModelConfigFormList,

    PrefabricatedPlaceEmpty,
    PrefabricatedChartLine,
    PrefabricatedChartArea,
    PrefabricatedChartBar,
    PrefabricatedChartHistogram,
    PrefabricatedChartRangeColumn,
    PrefabricatedChartBoxPlot,
    PrefabricatedChartPie,
    PrefabricatedChartRose,
    PrefabricatedChartFunnel,
    PrefabricatedChartRadar,
    PrefabricatedChartSankey,
    PrefabricatedChartSequence,
    PrefabricatedChartWordCloud,
    PrefabricatedChartGauge,
    PrefabricatedChartLinearProgress,
    PrefabricatedChartCircularProgress,
    PrefabricatedChartTreemap,
    PrefabricatedChartWaterfall,
    PrefabricatedChartCirclePacking,
    PrefabricatedChartSunburst,
    PrefabricatedChartCorrelation,
    PrefabricatedChartLiquid,
    PrefabricatedChartVenn,
    PrefabricatedChartMosaic,
    PrefabricatedChartCandlestick,

    PrefabricatedDiyText,
    PrefabricatedDiyOrgA01,

    PrefabricatedImgText,

    PrefabricatedList,

    PrefabricatedTable,

    PrefabricatedSelect,
    PrefabricatedDateSelect
}