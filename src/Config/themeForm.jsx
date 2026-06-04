// !!! 主题菜单
import { MappingData } from './MappingData'

// ***  项目主题信息
export const ThemeFormList = [
    {
        span: 24, formType: 'GROUP', name: 'ThemeFormList_page', label: '基础配置', collapsible: true,
        children: [
            { span: 12, formType: 'RADIO', name: 'loginType', label: '登录模式', rules: true, valueEnum: MappingData.Theme__loginType },
            { span: 12, formType: 'COLOR', name: 'themeColor', label: '主题颜色', rules: true, mode: ['single'] },
            { span: 12, formType: 'SELECT', name: 'devTheme', label: 'DEV主题', rules: true, valueEnum: MappingData.DevConfig__ThemeList, type: 'color' },
            { span: 12, formType: 'SELECT', name: 'loading', label: '加载动画', rules: true, valueEnum: MappingData.Theme__Loading, type: 'sign' },
            { span: 12, formType: 'SELECT', name: 'login', label: '登录页面', rules: true, valueEnum: MappingData.Theme__LoginPage },
            { span: 12, formType: 'SELECT', name: 'sign', label: '登录窗口', rules: true, valueEnum: MappingData.Theme__SignPage },
            { span: 12, formType: 'COLOR', name: 'maskColor', label: '遮罩色', rules: true, mode: ['single'] },
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
    // {
    //     span: 24, formType: 'GROUP', name: 'ThemeFormList_layout', label: '布局配置', collapsible: true,
    //     children: [
    //         { span: 24, formType: 'RADIO', name: 'layout', label: '布局框架', rules: true, valueEnum: MappingData.Theme__Layout },
    //         {
    //             span: 12, formType: 'GROUP', name: 'ThemeFormList_left', label: '左侧布局', collapsible: true,
    //             jugde: [{ field: 'layout', value: ['TempA01'] }],
    //             children: [
    //                 { span: 24, formType: 'COLOR', name: 'left_color', label: '背景颜色', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'left_deg', label: '背景角度', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'left_blur', label: '模糊度', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'left_padding', label: '内填充', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'left_margin', label: '外边距', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'left_radius', label: '圆角', rules: true },
    //                 { span: 24, formType: 'RADIO', name: 'left_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
    //             ]
    //         },
    //         {
    //             span: 12, formType: 'GROUP', name: 'ThemeFormList_right', label: '右侧布局', collapsible: true,
    //             jugde: [{ field: 'layout', value: ['TempA01'] }],
    //             children: [
    //                 { span: 24, formType: 'COLOR', name: 'right_color', label: '背景颜色', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'right_deg', label: '背景角度', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'right_blur', label: '模糊度', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'right_padding', label: '内填充', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'right_margin', label: '外边距', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'right_radius', label: '圆角', rules: true },
    //                 { span: 24, formType: 'RADIO', name: 'right_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
    //             ]
    //         },
    //         {
    //             span: 12, formType: 'GROUP', name: 'ThemeFormList_top', label: '上部布局', collapsible: true,
    //             jugde: [{ field: 'layout', value: ['TempA02'] }],
    //             children: [
    //                 { span: 24, formType: 'COLOR', name: 'top_color', label: '背景颜色', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'top_deg', label: '背景角度', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'top_blur', label: '模糊度', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'top_padding', label: '内填充', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'top_margin', label: '外边距', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'top_radius', label: '圆角', rules: true },
    //                 { span: 24, formType: 'RADIO', name: 'top_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
    //             ]
    //         },
    //         {
    //             span: 12, formType: 'GROUP', name: 'ThemeFormList_btm', label: '下部布局', collapsible: true,
    //             jugde: [{ field: 'layout', value: ['TempA02'] }],
    //             children: [
    //                 { span: 24, formType: 'COLOR', name: 'btm_color', label: '背景颜色', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'btm_deg', label: '背景角度', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'btm_blur', label: '模糊度', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'btm_padding', label: '内填充', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'btm_margin', label: '外边距', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'btm_radius', label: '圆角', rules: true },
    //                 { span: 24, formType: 'RADIO', name: 'btm_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     span: 24, formType: 'GROUP', name: 'ThemeFormList_logo', label: '图标配置', collapsible: true,
    //     children: [
    //         {
    //             span: 24, formType: 'GROUP', name: 'logo_back', label: '背景设置', collapsible: true,
    //             children: [
    //                 { span: 12, formType: 'COLOR', name: 'logo_color', label: '背景颜色', rules: true },
    //                 { span: 12, formType: 'NUMBER', name: 'logo_deg', label: '背景角度', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'logo_padding', label: '内填充', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'logo_margin', label: '外边距', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'logo_radius', label: '圆角', rules: true },
    //                 { span: 12, formType: 'RADIO', name: 'logo_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'logo_layout', label: '布局设置', collapsible: true,
    //             children: [
    //                 { span: 8, formType: 'SELECT', name: 'logo_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
    //                 { span: 8, formType: 'SELECT', name: 'logo_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
    //                 { span: 8, formType: 'SELECT', name: 'logo_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
    //                 { span: 12, formType: 'SELECT', name: 'logo_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
    //                 { span: 12, formType: 'SELECT', name: 'logo_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
    //             ]
    //         },
    //         { span: 12, formType: 'RADIO', name: 'logo_shrink_status', label: '同步收缩', rules: true, valueEnum: MappingData.IsEnabledBool },
    //         { span: 12, formType: 'RADIO', name: 'logo_textStatus', label: '显示文字', rules: true, valueEnum: MappingData.IsShowBool },
    //         {
    //             span: 12, formType: 'GROUP', name: 'logo_label_default', label: '默认标签', collapsible: true,
    //             children: [
    //                 { span: 24, formType: 'INPUT', name: 'logo_icon', label: '图标地址', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'logo_width', label: '图片宽度', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'logo_height', label: '图片高度', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'logo_icon_padding', label: '内填充', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'logo_icon_margin', label: '外边距', rules: true },
    //                 { span: 24, formType: 'RADIO', name: 'logo_icon_filter', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                 {
    //                     span: 24, formType: 'INPUT', name: 'logo_icon_filter_data', label: '阴影数值', rules: true,
    //                     jugde: [{ field: 'logo_icon_filter', value: [true] }]
    //                 },
    //                 {
    //                     span: 24, formType: 'COLOR', name: 'logo_icon_filter_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                     jugde: [{ field: 'logo_icon_filter', value: [true] }]
    //                 },
    //             ]
    //         },
    //         {
    //             span: 12, formType: 'GROUP', name: 'logo_label_shrink', label: '收缩标签', collapsible: true,
    //             jugde: [{ field: 'logo_shrink_status', value: [true] }],
    //             children: [
    //                 { span: 24, formType: 'INPUT', name: 'logo_icon_shrink', label: '图标地址', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'logo_width_shrink', label: '图片宽度', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'logo_height_shrink', label: '图片高度', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'logo_icon_padding_shrink', label: '内填充', rules: true },
    //                 { span: 24, formType: 'INPUT', name: 'logo_icon_margin_shrink', label: '外边距', rules: true },
    //                 { span: 24, formType: 'RADIO', name: 'logo_icon_filter_shrink', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                 {
    //                     span: 24, formType: 'INPUT', name: 'logo_icon_filter_shrink_data', label: '阴影数值', rules: true,
    //                     jugde: [{ field: 'logo_icon_filter_shrink', value: [true] }]
    //                 },
    //                 {
    //                     span: 24, formType: 'COLOR', name: 'logo_icon_filter_shrink_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                     jugde: [{ field: 'logo_icon_filter_shrink', value: [true] }]
    //                 },
    //             ]
    //         },
    //         {
    //             span: 12, formType: 'GROUP', name: 'logo_text_default', label: '默认文字', collapsible: true,
    //             jugde: [{ field: 'logo_textStatus', value: [true] }],
    //             children: [
    //                 { span: 24, formType: 'INPUT', name: 'logo_text', label: '文字内容', rules: true },
    //                 { span: 24, formType: 'COLOR', name: 'logo_text_color', label: '标题颜色', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'logo_text_deg', label: '颜色角度', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'logo_text_size', label: '标题字号', rules: true },
    //                 { span: 24, formType: 'SELECT', name: 'logo_text_family', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
    //                 { span: 24, formType: 'RADIO', name: 'logo_text_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
    //                 { span: 24, formType: 'RADIO', name: 'logo_text_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
    //                 { span: 24, formType: 'RADIO', name: 'logo_text_filter', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                 {
    //                     span: 24, formType: 'INPUT', name: 'logo_text_filter_data', label: '阴影数值', rules: true,
    //                     jugde: [{ field: 'logo_text_filter', value: [true] }]
    //                 },
    //                 {
    //                     span: 24, formType: 'COLOR', name: 'logo_text_filter_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                     jugde: [{ field: 'logo_text_filter', value: [true] }]
    //                 }
    //             ]
    //         },
    //         {
    //             span: 12, formType: 'GROUP', name: 'logo_text_shrink', label: '收缩文字', collapsible: true,
    //             jugde: [{ field: 'logo_shrink_status', value: [true] }, { field: 'logo_textStatus', value: [true] }],
    //             children: [
    //                 { span: 24, formType: 'INPUT', name: 'logo_text_shrink', label: '文字内容', rules: true },
    //                 { span: 24, formType: 'COLOR', name: 'logo_text_shrink_color', label: '标题颜色', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'logo_text_shrink_deg', label: '颜色角度', rules: true },
    //                 { span: 24, formType: 'NUMBER', name: 'logo_text_shrink_size', label: '标题字号', rules: true },
    //                 { span: 24, formType: 'SELECT', name: 'logo_text_shrink_family', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
    //                 { span: 24, formType: 'RADIO', name: 'logo_text_shrink_weight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
    //                 { span: 24, formType: 'RADIO', name: 'logo_text_shrink_style', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
    //                 { span: 24, formType: 'RADIO', name: 'logo_text_shrink_filter', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                 {
    //                     span: 24, formType: 'INPUT', name: 'logo_text_filter_shrink_data', label: '阴影数值', rules: true,
    //                     jugde: [{ field: 'logo_text_shrink_filter', value: [true] }]
    //                 },
    //                 {
    //                     span: 24, formType: 'COLOR', name: 'logo_text_filter_shrink_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                     jugde: [{ field: 'logo_text_shrink_filter', value: [true] }]
    //                 }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     span: 24, formType: 'GROUP', name: 'ThemeFormList_head', label: '头部配置', collapsible: true,
    //     children: [
    //         {
    //             span: 24, formType: 'GROUP', name: 'head_back', label: '背景设置', collapsible: true, defaultCollapsed: false,
    //             children: [
    //                 { span: 12, formType: 'COLOR', name: 'head_color', label: '背景颜色', rules: true },
    //                 { span: 12, formType: 'NUMBER', name: 'head_deg', label: '背景角度', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'head_padding', label: '内填充', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'head_margin', label: '外边距', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'head_radius', label: '圆角', rules: true },
    //                 { span: 12, formType: 'RADIO', name: 'head_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'head_layout', label: '布局设置', collapsible: true, defaultCollapsed: false,
    //             children: [
    //                 { span: 8, formType: 'SELECT', name: 'head_align_items', label: 'align-items', rules: true, valueEnum: MappingData.Flex_items },
    //                 { span: 8, formType: 'SELECT', name: 'head_align_content', label: 'align-content', rules: true, valueEnum: MappingData.Flex_content },
    //                 { span: 8, formType: 'SELECT', name: 'head_justify_content', label: 'justify-content', rules: true, valueEnum: MappingData.Flex_justify },
    //                 { span: 12, formType: 'SELECT', name: 'head_flex_direction', label: 'flex-direction', rules: true, valueEnum: MappingData.Flex_direction },
    //                 { span: 12, formType: 'SELECT', name: 'head_flex_wrap', label: 'flex-wrap', rules: true, valueEnum: MappingData.Flex_wrap },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'head_title', label: '标题设置', collapsible: true, defaultCollapsed: false,
    //             children: [
    //                 { span: 12, formType: 'RADIO', name: 'head_titleType', label: '内容类型', rules: true, valueEnum: MappingData.Theme__OptionsLeftType },
    //                 { span: 12, formType: 'INPUT', name: 'head_titleText', label: '标题文字', rules: true, jugde: [{ field: 'head_titleType', value: ['text'] }] },
    //                 { span: 12, formType: 'INPUT', name: 'head_titleField', label: '标题字段', rules: true, jugde: [{ field: 'head_titleType', value: ['field'] }] },
    //                 { span: 12, formType: 'COLOR', name: 'head_titleColor', label: '标题颜色', rules: true },
    //                 { span: 12, formType: 'NUMBER', name: 'head_titleDeg', label: '颜色角度', rules: true },
    //                 { span: 12, formType: 'NUMBER', name: 'head_titleSize', label: '标题字号', rules: true },
    //                 { span: 12, formType: 'SELECT', name: 'head_titleFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
    //                 { span: 12, formType: 'RADIO', name: 'head_titleWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
    //                 { span: 12, formType: 'RADIO', name: 'head_titleStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
    //                 { span: 12, formType: 'RADIO', name: 'head_titleFiled', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                 {
    //                     span: 12, formType: 'INPUT', name: 'head_titleFiled_data', label: '阴影数值', rules: true,
    //                     jugde: [{ field: 'head_titleFiled', value: [true] }]
    //                 },
    //                 {
    //                     span: 12, formType: 'COLOR', name: 'head_titleFiled_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                     jugde: [{ field: 'head_titleFiled', value: [true] }]
    //                 },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'head_options', label: '操作栏设置', collapsible: true, defaultCollapsed: false,
    //             children: [
    //                 { span: 12, formType: 'INPUT', name: 'head_optionsPadding', label: '内填充', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'head_optionsMargin', label: '外边距', rules: true },
    //                 {
    //                     span: 24, formType: 'GROUP', name: 'head_optionsStyle', label: '操作样式', collapsible: true,
    //                     children: [
    //                         { span: 12, formType: 'INPUT', name: 'head_itemPadding', label: '内填充', rules: true },
    //                         { span: 12, formType: 'INPUT', name: 'head_itemMargin', label: '外边距', rules: true },
    //                         { span: 12, formType: 'COLOR', name: 'head_itemBack', label: '背景颜色', rules: true },
    //                         { span: 12, formType: 'NUMBER', name: 'head_itemDeg', label: '背景角度', rules: true },
    //                         { span: 12, formType: 'INPUT', name: 'head_itemRadius', label: '圆角', rules: true },
    //                         { span: 12, formType: 'NUMBER', name: 'head_itemIconSize', label: '图标尺寸', rules: true },
    //                         { span: 12, formType: 'RADIO', name: 'head_itemFiled', label: '图标阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                         {
    //                             span: 12, formType: 'INPUT', name: 'head_itemFiled_data', label: '阴影数值', rules: true,
    //                             jugde: [{ field: 'head_itemFiled', value: [true] }]
    //                         },
    //                         {
    //                             span: 12, formType: 'COLOR', name: 'head_itemFiled_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                             jugde: [{ field: 'head_itemFiled', value: [true] }]
    //                         },
    //                     ]
    //                 },
    //                 {
    //                     span: 24, formType: 'LIST', name: 'head_optionsList', label: '操作列表', rules: true, title: '操作',
    //                     children: [
    //                         { span: 12, formType: 'SELECT', name: 'func', label: '操作列表', rules: true, valueEnum: MappingData.Theme__HeadOptionsList },
    //                         { span: 12, formType: 'INPUT', name: 'wx_appid', label: '微信Appid', rules: true, jugde: [{ field: 'func', value: [4] }] },
    //                         { span: 12, formType: 'INPUT', name: 'wx_image', label: '公众号二维码', rules: true, jugde: [{ field: 'func', value: [5] }] },
    //                         { span: 12, formType: 'INPUT', name: 'title', label: '操作名称', rules: true },
    //                         { span: 12, formType: 'TempICON', name: 'icon', label: '图标信息', rules: true },
    //                         { span: 12, formType: 'COLOR', name: 'color', label: '图标颜色', rules: true },
    //                         {
    //                             span: 24, formType: 'GROUP', name: 'head_gridStyle', label: '宫格样式', rules: true, collapsible: true,
    //                             jugde: [{ field: 'func', value: ['admin', 0] }],
    //                             children: [
    //                                 { span: 12, formType: 'RADIO', name: 'gridClick', label: '操作设置', rules: true, valueEnum: MappingData.Theme__UserInfoTrigger },
    //                                 { span: 12, formType: 'NUMBER', name: 'gridNumber', label: '单行数量', rules: true },
    //                                 { span: 12, formType: 'NUMBER', name: 'gridSize', label: '单格尺寸', rules: true },
    //                                 { span: 12, formType: 'NUMBER', name: 'gridIconSize', label: '图标尺寸', rules: true },
    //                                 { span: 12, formType: 'NUMBER', name: 'gridTextSize', label: '文字尺寸', rules: true },
    //                                 { span: 12, formType: 'SELECT', name: 'gridTextFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
    //                                 { span: 12, formType: 'RADIO', name: 'gridTextWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
    //                                 { span: 12, formType: 'RADIO', name: 'gridTextStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
    //                                 { span: 12, formType: 'RADIO', name: 'gridFiled', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                                 {
    //                                     span: 12, formType: 'INPUT', name: 'gridFiled_data', label: '阴影数值', rules: true,
    //                                     jugde: [{ field: 'gridFiled', value: [true] }]
    //                                 },
    //                                 {
    //                                     span: 12, formType: 'COLOR', name: 'gridFiled_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                                     jugde: [{ field: 'gridFiled', value: [true] }]
    //                                 },
    //                             ]
    //                         },
    //                         {
    //                             span: 24, formType: 'LIST', name: 'gridList', label: '宫格操作', rules: true, collapsible: true, title: '操作',
    //                             jugde: [{ field: 'func', value: ['admin', 0] }],
    //                             children: [
    //                                 { span: 12, formType: 'SELECT', name: 'func', label: '操作列表', rules: true, valueEnum: MappingData.Theme__HeadOptionsList },
    //                                 { span: 12, formType: 'INPUT', name: 'title', label: '操作名称', rules: true },
    //                                 { span: 12, formType: 'TempICON', name: 'icon', label: '图标信息', rules: true },
    //                                 { span: 12, formType: 'COLOR', name: 'color', label: '图标颜色', rules: true },
    //                             ]
    //                         },
    //                     ]
    //                 },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'head_user', label: '用户栏设置', collapsible: true, defaultCollapsed: false,
    //             children: [
    //                 { span: 24, formType: 'RADIO', name: 'head_status', label: '显示头像', rules: true, valueEnum: MappingData.IsShowBool },
    //                 {
    //                     span: 24, formType: 'GROUP', name: 'head_userAvatar', label: '用户头像', collapsible: true,
    //                     jugde: [{ field: 'head_status', value: [true] }],
    //                     children: [
    //                         { span: 24, formType: 'RADIO', name: 'head_avatar', label: '显示头像', rules: true, valueEnum: MappingData.IsShowBool },
    //                         {
    //                             span: 12, formType: 'RADIO', name: 'head_avatarPositon', label: '头像位置', rules: true,
    //                             valueEnum: MappingData.System__FlexDirectionTwo, jugde: [{ field: 'head_avatar', value: [true] }]
    //                         },
    //                         {
    //                             span: 12, formType: 'INPUT', name: 'head_AvatarMargin', label: '外边距', rules: true,
    //                             jugde: [{ field: 'head_avatar', value: [true] }]
    //                         },
    //                         {
    //                             span: 12, formType: 'NUMBER', name: 'head_AvatarSize', label: '头像尺寸', rules: true,
    //                             jugde: [{ field: 'head_avatar', value: [true] }]
    //                         },
    //                         {
    //                             span: 12, formType: 'RADIO', name: 'head_AvatarTtpe', label: '头像类型', rules: true, valueEnum: MappingData.Theme__UserInfoShape,
    //                             jugde: [{ field: 'head_avatar', value: [true] }]
    //                         },
    //                     ]
    //                 },
    //                 {
    //                     span: 24, formType: 'GROUP', name: 'head_setName', label: '名称设置', collapsible: true,
    //                     jugde: [{ field: 'head_status', value: [true] }],
    //                     children: [
    //                         { span: 12, formType: 'RADIO', name: 'head_userName', label: '名称一', rules: true, valueEnum: MappingData.IsShowBool },
    //                         { span: 12, formType: 'RADIO', name: 'head_roleName', label: '名称二', rules: true, valueEnum: MappingData.IsShowBool },
    //                         {
    //                             span: 12, formType: 'NUMBER', name: 'head_nameWidth', label: '名称最大宽度', rules: true,
    //                             jugde: [{ field: 'head_userName', value: [true] }]
    //                         },
    //                         {
    //                             span: 12, formType: 'RADIO', name: 'head_namePositon', label: '名称对齐', rules: true,
    //                             valueEnum: MappingData.System__FlexAlignItems,
    //                             jugde: [{ field: 'head_userName', value: [true] }, { field: 'head_roleName', value: [true] }]
    //                         },
    //                         {
    //                             span: 12, formType: 'GROUP', name: 'head_user_userName', label: '名称一', collapsible: true,
    //                             jugde: [{ field: 'head_userName', value: [true] }],
    //                             children: [
    //                                 { span: 24, formType: 'SELECT', name: 'head_userFilde', label: '渲染字段', rules: true, valueEnum: MappingData.Theme__UserNickName },
    //                                 { span: 24, formType: 'COLOR', name: 'head_userColor', label: '标题颜色', rules: true },
    //                                 { span: 24, formType: 'NUMBER', name: 'head_userDeg', label: '颜色角度', rules: true },
    //                                 { span: 24, formType: 'NUMBER', name: 'head_userSize', label: '标题字号', rules: true },
    //                                 { span: 24, formType: 'SELECT', name: 'head_userFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
    //                                 { span: 24, formType: 'RADIO', name: 'head_userWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
    //                                 { span: 24, formType: 'RADIO', name: 'head_userStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
    //                                 { span: 24, formType: 'RADIO', name: 'head_userFiled', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                                 {
    //                                     span: 24, formType: 'INPUT', name: 'head_userFiled_data', label: '阴影数值', rules: true,
    //                                     jugde: [{ field: 'head_userFiled', value: [true] }]
    //                                 },
    //                                 {
    //                                     span: 24, formType: 'COLOR', name: 'head_userFiled_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                                     jugde: [{ field: 'head_userFiled', value: [true] }]
    //                                 },
    //                             ]
    //                         },
    //                         {
    //                             span: 12, formType: 'GROUP', name: 'head_user_roleName', label: '名称二', collapsible: true,
    //                             jugde: [{ field: 'head_roleName', value: [true] }],
    //                             children: [
    //                                 { span: 24, formType: 'SELECT', name: 'head_roleFilde', label: '渲染字段', rules: true, valueEnum: MappingData.Theme__UserNickName },
    //                                 { span: 24, formType: 'COLOR', name: 'head_roleColor', label: '标题颜色', rules: true },
    //                                 { span: 24, formType: 'NUMBER', name: 'head_roleDeg', label: '颜色角度', rules: true },
    //                                 { span: 24, formType: 'NUMBER', name: 'head_roleSize', label: '标题字号', rules: true },
    //                                 { span: 24, formType: 'SELECT', name: 'head_roleFamily', label: '标题字体', rules: true, valueEnum: MappingData.Font__Family },
    //                                 { span: 24, formType: 'RADIO', name: 'head_roleWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
    //                                 { span: 24, formType: 'RADIO', name: 'head_roleStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
    //                                 { span: 24, formType: 'RADIO', name: 'head_roleFiled', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                                 {
    //                                     span: 24, formType: 'INPUT', name: 'head_roleFiled_data', label: '阴影数值', rules: true,
    //                                     jugde: [{ field: 'head_roleFiled', value: [true] }]
    //                                 },
    //                                 {
    //                                     span: 24, formType: 'COLOR', name: 'head_roleFiled_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                                     jugde: [{ field: 'head_roleFiled', value: [true] }]
    //                                 },
    //                             ]
    //                         },
    //                     ]
    //                 },
    //                 {
    //                     span: 24, formType: 'GROUP', name: 'head_options_btn', label: '操作设置', collapsible: true,
    //                     jugde: [{ field: 'head_status', value: [true] }],
    //                     children: [
    //                         { span: 12, formType: 'RADIO', name: 'head_userClick', label: '操作设置', rules: true, valueEnum: MappingData.Theme__UserCliclType },
    //                         {
    //                             span: 12, formType: 'RADIO', name: 'head_userClickType', label: '操作方式', rules: true,
    //                             valueEnum: MappingData.Theme__UserInfoTrigger, jugde: [{ field: 'head_userClick', value: ['dropdown'] }]
    //                         },
    //                         {
    //                             span: 24, formType: 'LIST', name: 'head_userOptions', label: '操作列表', rules: true,
    //                             jugde: [{ field: 'head_userClick', value: ['dropdown'] }],
    //                             children: [
    //                                 { span: 12, formType: 'SELECT', name: 'func', label: '操作列表', rules: true, valueEnum: MappingData.Theme__HeadOptionsList },
    //                                 { span: 12, formType: 'INPUT', name: 'title', label: '操作名称', rules: true },
    //                                 { span: 12, formType: 'RADIO', name: 'status', label: '显示图标', rules: true, valueEnum: MappingData.IsShowBool },
    //                                 { span: 12, formType: 'TempICON', name: 'icon', label: '图标信息', rules: true, jugde: [{ field: 'status', value: [true] }] },
    //                             ]
    //                         },
    //                     ]
    //                 },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'head_outOff', label: '独立退出', collapsible: true, defaultCollapsed: false,
    //             children: [
    //                 // 独立的关闭按钮
    //                 { span: 12, formType: 'RADIO', name: 'head_offBtn', label: '是否显示', rules: true, valueEnum: MappingData.IsShowBool },
    //                 { span: 12, formType: 'TempICON', name: 'head_offIcon', label: '关闭图标', rules: true, jugde: [{ field: 'head_offBtn', value: [true] }] },
    //                 { span: 12, formType: 'INPUT', name: 'head_offMargin', label: '外间距', rules: true, jugde: [{ field: 'head_offBtn', value: [true] }] },
    //                 { span: 12, formType: 'INPUT', name: 'head_offPadding', label: '内填充', rules: true, jugde: [{ field: 'head_offBtn', value: [true] }] },
    //                 { span: 12, formType: 'COLOR', name: 'head_offBorder', label: '边框颜色', rules: true, jugde: [{ field: 'head_offBtn', value: [true] }] },
    //                 { span: 12, formType: 'COLOR', name: 'head_offColor', label: '图标颜色', rules: true, jugde: [{ field: 'head_offBtn', value: [true] }] },
    //                 { span: 12, formType: 'NUMBER', name: 'head_offSize', label: '图标尺寸', rules: true, jugde: [{ field: 'head_offBtn', value: [true] }] },
    //                 {
    //                     span: 12, formType: 'RADIO', name: 'head_offFiled', label: '文字阴影', rules: true, valueEnum: MappingData.IsEnabledBool,
    //                     jugde: [{ field: 'head_offBtn', value: [true] }]
    //                 },
    //                 {
    //                     span: 12, formType: 'INPUT', name: 'head_offFiled_data', label: '阴影数值', rules: true,
    //                     jugde: [{ field: 'head_offBtn', value: [true] }, { field: 'head_offFiled', value: [true] }]
    //                 },
    //                 {
    //                     span: 12, formType: 'COLOR', name: 'head_offFiled_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                     jugde: [{ field: 'head_offBtn', value: [true] }, { field: 'head_offFiled', value: [true] }]
    //                 },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     span: 24, formType: 'GROUP', name: 'ThemeFormList_menu', label: '菜单配置', collapsible: true,
    //     children: [
    //         {
    //             span: 24, formType: 'GROUP', name: 'menu_back', label: '背景设置', collapsible: true,
    //             children: [
    //                 { span: 12, formType: 'COLOR', name: 'menu_color', label: '背景颜色', rules: true },
    //                 { span: 12, formType: 'NUMBER', name: 'menu_deg', label: '背景角度', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'menu_padding', label: '内填充', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'menu_margin', label: '外边距', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'menu_radius', label: '圆角', rules: true },
    //                 { span: 12, formType: 'RADIO', name: 'menu_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'menu_base', label: '基础设置', collapsible: true,
    //             children: [
    //                 { span: 12, formType: 'SELECT', name: 'menu_class', label: '菜单样式', valueEnum: MappingData.Theme__MenuType },
    //                 {
    //                     span: 12, formType: 'COLOR', name: 'menu_class_active', label: '激活背景', rules: true,
    //                     jugde: [{ field: 'menu_class', value: ['menuDefault'] }]
    //                 },
    //                 { span: 12, formType: 'RADIO', name: 'menu_isFold', label: '折叠状态', valueEnum: MappingData.IsNotOpenBool },
    //                 { span: 12, formType: 'COLOR', name: 'menu_fold_color', label: '折叠图标颜色', rules: true },
    //                 { span: 12, formType: 'NUMBER', name: 'menu_fold_size', label: '折叠图标尺寸', rules: true },
    //                 { span: 12, formType: 'RADIO', name: 'menu_fold_filter', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                 {
    //                     span: 12, formType: 'INPUT', name: 'menu_fold_filter_data', label: '阴影数值', rules: true,
    //                     jugde: [{ field: 'menu_fold_filter', value: [true] }]
    //                 },
    //                 {
    //                     span: 12, formType: 'COLOR', name: 'menu_fold_filter_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                     jugde: [{ field: 'menu_fold_filter', value: [true] }]
    //                 },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'menu_icon', label: '图标设置', collapsible: true,
    //             children: [
    //                 { span: 12, formType: 'COLOR', name: 'menu_icon_color', label: '图标颜色', rules: true },
    //                 { span: 12, formType: 'NUMBER', name: 'menu_icon_size', label: '图标尺寸', rules: true },
    //                 { span: 12, formType: 'NUMBER', name: 'menu_icon_index', label: '图标间距', rules: true },
    //                 { span: 12, formType: 'RADIO', name: 'menu_icon_filter', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                 {
    //                     span: 12, formType: 'INPUT', name: 'menu_icon_filter_data', label: '阴影数值', rules: true,
    //                     jugde: [{ field: 'menu_icon_filter', value: [true] }]
    //                 },
    //                 {
    //                     span: 12, formType: 'COLOR', name: 'menu_icon_filter_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                     jugde: [{ field: 'menu_icon_filter', value: [true] }]
    //                 },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'menu_text', label: '文字样式', collapsible: true,
    //             children: [
    //                 { span: 12, formType: 'COLOR', name: 'menu_text_color', label: '文字颜色', rules: true },
    //                 { span: 12, formType: 'COLOR', name: 'menu_text_active', label: '激活颜色', rules: true },
    //                 { span: 12, formType: 'NUMBER', name: 'menu_text_size', label: '文字字号', rules: true },
    //                 { span: 12, formType: 'SELECT', name: 'menu_text_family', label: '文字字体', valueEnum: MappingData.Font__Family },
    //                 { span: 12, formType: 'RADIO', name: 'menu_text_weight', label: '文字加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
    //                 { span: 12, formType: 'RADIO', name: 'menu_text_style', label: '文字倾斜', rules: true, valueEnum: MappingData.Font__Style },

    //                 { span: 12, formType: 'RADIO', name: 'menu_text_filter', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool },
    //                 {
    //                     span: 12, formType: 'INPUT', name: 'menu_text_filter_data', label: '阴影数值', rules: true,
    //                     jugde: [{ field: 'menu_text_filter', value: [true] }]
    //                 },
    //                 {
    //                     span: 12, formType: 'COLOR', name: 'menu_text_filter_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                     jugde: [{ field: 'menu_text_filter', value: [true] }]
    //                 },
    //             ]
    //         }
    //     ]
    // },
    // {
    //     span: 24, formType: 'GROUP', name: 'ThemeFormList_body', label: '主体配置', collapsible: true,
    //     children: [
    //         {
    //             span: 24, formType: 'GROUP', name: 'body_back', label: '背景设置', collapsible: true,
    //             children: [
    //                 { span: 12, formType: 'COLOR', name: 'body_color', label: '背景颜色', rules: true },
    //                 { span: 12, formType: 'NUMBER', name: 'body_deg', label: '背景角度', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'body_padding', label: '内填充', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'body_margin', label: '外边距', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'body_radius', label: '圆角', rules: true },
    //                 { span: 12, formType: 'RADIO', name: 'body_shadow', label: '阴影类型', valueEnum: MappingData.Style__BoxShadow },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'body_options', label: '标签操作', collapsible: true,
    //             children: [
    //                 { span: 12, formType: 'RADIO', name: 'body_tabsClose', label: '关闭后续', rules: true, valueEnum: MappingData.System__TabsClose },
    //                 { span: 12, formType: 'RADIO', name: 'body_tabsIsDnd', label: '是否拖拽', rules: true, valueEnum: MappingData.IsYesBool },
    //                 { span: 12, formType: 'NUMBER', name: 'body_tabsMax', label: '最大标签数', rules: true, tooltip: '数值0为不限制' },
    //                 { span: 12, formType: 'RADIO', name: 'body_tabsIsAll', label: '全部关闭', rules: true, valueEnum: MappingData.IsShowBool },
    //                 { span: 12, formType: 'RADIO', name: 'body_tabsPopup', label: '关闭确认', rules: true, valueEnum: MappingData.IsShowBool },
    //                 { span: 12, formType: 'COLOR', name: 'body_tabsClear', label: '关闭颜色', rules: true },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'body_tabs_back', label: '标签背景', collapsible: true,
    //             children: [
    //                 { span: 12, formType: 'COLOR', name: 'body_tabsBack', label: '默认背景', rules: true },
    //                 { span: 12, formType: 'COLOR', name: 'body_tabsActive', label: '选中背景', rules: true },
    //                 { span: 12, formType: 'NUMBER', name: 'body_tabsDeg', label: '背景角度', rules: true },
    //                 { span: 12, formType: 'COLOR', name: 'body_fontColor', label: '默认颜色', rules: true },
    //                 { span: 12, formType: 'COLOR', name: 'body_tabsBorderColor', label: '边框颜色', rules: true },
    //                 { span: 12, formType: 'INPUT', name: 'body_tabsRadio', label: '边框圆角', rules: true },
    //                 { span: 12, formType: 'RADIO', name: 'body_tabsBorderType', label: '边框类型', rules: true, valueEnum: MappingData.Style__BorderType },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'body_tabs_icon', label: '标签图标', collapsible: true,
    //             children: [
    //                 {
    //                     span: 12, formType: 'RADIO', name: 'body_iconState', label: '图标状态', rules: true,
    //                     valueEnum: MappingData.IsShowBool, tooltip: '需重新加载'
    //                 },
    //                 { span: 12, formType: 'NUMBER', name: 'body_iconSize', label: '图标尺寸', rules: true, jugde: [{ field: 'body_iconState', value: [true] }] },
    //                 { span: 12, formType: 'NUMBER', name: 'body_iconIndex', label: '图标间距', rules: true, jugde: [{ field: 'body_iconState', value: [true] }] },
    //                 {
    //                     span: 12, formType: 'RADIO', name: 'body_icon_filter', label: '背景阴影', rules: true, valueEnum: MappingData.IsEnabledBool,
    //                     jugde: [{ field: 'body_iconState', value: [true] }]
    //                 },
    //                 {
    //                     span: 12, formType: 'INPUT', name: 'body_icon_filter_data', label: '阴影数值', rules: true,
    //                     jugde: [{ field: 'body_iconState', value: [true] }, { field: 'body_icon_filter', value: [true] }]
    //                 },
    //                 {
    //                     span: 12, formType: 'COLOR', name: 'body_icon_filter_color', label: '阴影颜色', rules: true, mode: ['single'],
    //                     jugde: [{ field: 'body_iconState', value: [true] }, { field: 'body_icon_filter', value: [true] }]
    //                 },
    //             ]
    //         },
    //         {
    //             span: 24, formType: 'GROUP', name: 'body_tabs_font', label: '标签文字', collapsible: true,
    //             children: [
    //                 { span: 12, formType: 'NUMBER', name: 'body_fontSize', label: '标题字号', rules: true },
    //                 { span: 12, formType: 'SELECT', name: 'body_fontFamily', label: '标题字体', valueEnum: MappingData.Font__Family },
    //                 { span: 12, formType: 'RADIO', name: 'body_fontWeight', label: '标题加粗', rules: true, valueEnum: MappingData.Font__WeightInt },
    //                 { span: 12, formType: 'RADIO', name: 'body_fontStyle', label: '标题倾斜', rules: true, valueEnum: MappingData.Font__Style },
    //             ]
    //         },
    //     ]
    // },
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
