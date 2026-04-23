import {
    DesktopOutlined,
    ShakeOutlined,
    QuestionOutlined,
    CustomerServiceOutlined,
    FieldTimeOutlined,
    FundProjectionScreenOutlined,
    LockOutlined,
    LogoutOutlined,
    WechatOutlined,
    BgColorsOutlined
} from '@ant-design/icons'
// import { ICONMapping } from './IconMapping'
import { CommonSceneUrl } from '.'

export const MappingData = {
    // 可映射分类
    System__MappingEnum: [
        { value: 'IsYesBool', label: '布尔-是否' },
        { value: 'IsYesNumber', label: '1/0-是/否' },
        { value: 'IsYesText', label: '是/否(文字)' },

        { value: 'IsOpenBool', label: '布尔-展开/收起' },
        { value: 'IsNotOpenBool', label: '布尔-收起/展开' },
        { value: 'IsShowBool', label: '布尔-显示/隐藏' },
        { value: 'IsAllowBool', label: '布尔-允许/禁止' },
        { value: 'IsEnabledBool', label: '布尔-启用/禁用' },
        { value: 'IsEnabledNumber', label: '1/0-启用/禁用' },

        { value: 'System__QueryScope', label: '文字-查看文件(本级/下级/全部)' },
        { value: 'System__DictionaryType', label: '字典分组' },
        { value: 'System__MenuType', label: '页面类型' },
        { value: 'System__WeChatType', label: '小程序类型' },
        { value: 'Data__GetDataType', label: '菜单管理类型' },
        { value: 'handling', label: '整改状态(0:整改完成 1:正在整改)' },
        { value: 'acceptanceStatus', label: '审核状态(0:合格 1:不合格)' },
        { value: 'gender', label: '男女(0:女 1:男)' },
        { value: 'confirmed', label: '确认(0:未确认 1:已确认)' },
        { value: 'weekStatus', label: '确认(0:未提交 1:已提交 2:迟交)' },
        { value: 'PassedOrNotNumber', label: '通过(0:未通过 1:已通过 )' },

        { value: 'LoginType', label: '登录类型(0:全部 1:大屏 2:后台 )' },
        { value: 'LoginMode', label: '登录模式(0:新版 1:旧版 )' },
    ],

    LoginType: [
        { value: 0, label: '全部' },
        { value: 1, label: '大屏' },
        { value: 2, label: '后台' },
    ],
    LoginMode: [
        { value: 0, label: '新版' },
        { value: 1, label: '旧版' },
    ],

    // 基础映射
    IsYesBool: [
        { value: true, label: '是' },
        { value: false, label: '否' },
    ],
    IsYesNumber: [
        { value: 1, label: '是' },
        { value: 0, label: '否' },
    ],
    IsYesText: [
        { value: '是', label: '是' },
        { value: '否', label: '否' },
    ],
    IsOpenBool: [
        { value: true, label: '展开' },
        { value: false, label: '收起' },
    ],
    Is3DKeepBool: [
        { value: true, label: '固定' },
        { value: false, label: '旋转' },
    ],
    IsShowBool: [
        { value: true, label: '显示' },
        { value: false, label: '隐藏' },
    ],
    IsShowBoolNot: [
        { value: false, label: '显示' },
        { value: true, label: '隐藏' },
    ],
    IsEnabledBool: [
        { value: true, label: '启用' },
        { value: false, label: '禁用' },
    ],
    IsEnabledNumber: [
        { value: 1, label: '启用' },
        { value: 0, label: '禁用' },
    ],
    IsAllowBool: [
        { value: true, label: '允许' },
        { value: false, label: '禁止' },
    ],
    acceptanceStatus: [
        { value: 0, label: '合格 ' },
        { value: 1, label: '不合格' },
    ],
    PassedOrNotNumber: [
        { value: 0, label: '未通过' },
        { value: 1, label: '已通过' },
    ],
    handling: [
        { value: 0, label: '整改完成 ' },
        { value: 1, label: '正在整改' },
    ],
    gender: [
        { value: 0, label: '女 ' },
        { value: 1, label: '男' },
    ],
    confirmed: [
        { value: 0, label: '未确认' },
        { value: 1, label: '已确认' },
    ],
    apiType: [
        { value: true, label: '全局接口' },
        { value: false, label: '自定义接口' },
    ],
    modelType: [
        { value: 'A01', label: '数据模块' },
        { value: 'A02', label: '导航模块' },
    ],
    topORbtm: [
        { value: 'top', label: '上' },
        { value: 'bottom', label: '下' },
    ],
    dataType: [
        { value: 'object', label: '对象' },
        { value: 'array', label: '数组' },
    ],
    weekStatus: [
        { value: 0, label: '未提交' },
        { value: 1, label: '已提交' },
        { value: 2, label: '迟交' },
    ],
    axesLabelInside: [
        { value: true, label: '朝内' },
        { value: false, label: '朝外' },
    ],
    dataSourceType: [
        { value: 'A01', label: '临时数据' },
        { value: 'A02', label: '接口信息' },
        { value: 'A03', label: '自定义' },
    ],
    dataTypeMapping: [
        { value: 'A02', label: '对象' },
        { value: 'A03', label: '数组' },
    ],
    paramTypeMapping: [
        { value: 'data', label: '数据' },
        { value: 'diys', label: '自定' },
    ],

    // TODO 数据映射
    Data__GetDataType: [
        { value: '管理公司', label: '管理公司' },
        { value: '不管理公司', label: '不管理公司' },
        { value: '管理项目', label: '管理项目' },
        { value: '不管理项目', label: '不管理项目' },
    ],

    // TODO FLEX布局
    Flex_items: [
        { value: 'center', label: 'center' },
        { value: 'flex-start', label: 'flex-start' },
        { value: 'flex-end', label: 'flex-end' },
        { value: 'stretch', label: 'stretch' },
        { value: 'baseline', label: 'baseline' },
    ],
    Flex_content: [
        { value: 'center', label: 'center' },
        { value: 'flex-start', label: 'flex-start' },
        { value: 'flex-end', label: 'flex-end' },
        { value: 'space-between', label: 'space-between' },
        { value: 'space-around', label: 'space-around' },
        { value: 'stretch', label: 'stretch' },
    ],
    Flex_justify: [
        { value: 'center', label: 'center' },
        { value: 'flex-start', label: 'flex-start' },
        { value: 'flex-end', label: 'flex-end' },
        { value: 'space-between', label: 'space-between' },
        { value: 'space-around', label: 'space-around' },
        { value: 'space-evenly', label: 'space-evenly' },
    ],
    Flex_direction: [
        { value: 'row', label: 'row' },
        { value: 'column', label: 'column' },
        { value: 'row-reverse', label: 'row-reverse' },
        { value: 'column-reverse', label: 'column-reverse' },
    ],
    Flex_wrap: [
        { value: 'nowrap', label: 'nowrap' },
        { value: 'wrap', label: 'wrap' },
    ],
    Flex_SizeType: [
        { value: 'flex', label: '弹性' },
        { value: 'px', label: '像素' },
        { value: 'pct', label: '比例' },
    ],


    // TODO 系统参数

    System__grantType: [
        { value: 'password', label: '帐密方式' },
    ],
    System__clientSecret: [
        { value: 'etime87857872', label: 'E时代' },
    ],
    System__bearerType: [
        { value: 'TOKEN', label: 'token验证' },
    ],
    System__TabsClose: [
        { value: 0, label: '加载最后项' },
        { value: 1, label: '加载第一项' },
    ],

    System__RenderType: [
        { value: 'all', label: '全部渲染' },
        { value: 'home', label: '首页渲染' },
        { value: 'page', label: '非首页渲染' },
    ],
    System__FlexJustifyContent: [
        { value: 'center', label: '居中' },
        { value: 'flex-start', label: '开始位置' },
        { value: 'flex-end', label: '结束为止' },
        { value: 'space-between', label: '两侧' },
        { value: 'space-evenly', label: '平分' },
        { value: 'space-around', label: '同间距' },
    ],
    System__MenuType: [
        { value: 'list', label: '分组' },
        { value: 'dev', label: 'Dev' },
        { value: 'diy', label: '自定义' },
        { value: 'lay', label: '布局页面' },
        { value: 'two', label: '次级页面' },
    ],
    System__WeChatType: [
        { value: 'menu', label: '菜单' },
        { value: 'power', label: '权限' },
    ],
    System__FileType: [
        { value: 'img', label: '图片文件' },
        { value: 'mp4', label: '音视频文件' },
        { value: 'txt', label: '文档文件' },
        { value: 'zip', label: '压缩文件' },
    ],
    System__Method: [
        { value: 'get', label: 'GET' },
        { value: 'post', label: 'POST' },
        { value: 'put', label: 'PUT' },
        { value: 'delete', label: 'DELETE' },
    ],
    System__MapType: [
        { value: 'DataMapping', label: '数据映射' },
        { value: 'ApiMapping', label: '接口映射' },
    ],
    System__MapTypeA02: [
        { value: 'DataMapping', label: '数据映射' },
        { value: 'ApiMapping', label: '接口映射' },
    ],
    System__NavRenderType: [
        { value: 'flex', label: 'flex布局' },
        { value: 'swiper', label: 'swiper布局' },
    ],
    System__DictionaryType: [
        { value: '通用分类', label: '通用分类' },
        { value: '菜单相关', label: '菜单相关' },
        { value: '工程相关', label: '工程相关' },
        { value: '题库相关', label: '题库相关' },
        { value: '公司职务', label: '公司人员' },
    ],
    System__AlignmentLCR: [
        { value: 'left', label: '左侧' },
        { value: 'center', label: '中心' },
        { value: 'right', label: '右侧' },
    ],
    System__AlignmentSCE: [
        { value: 'start', label: '左侧' },
        { value: 'center', label: '中心' },
        { value: 'end', label: '右侧' },
    ],
    System__AlignmentLR: [
        { value: 'left', label: '左侧' },
        { value: 'right', label: '右侧' },
    ],
    System__AlignmentLRA02: [
        { value: 'leftTop', label: '左上' },
        { value: 'leftBtm', label: '左下' },
        { value: 'rightTop', label: '右上' },
        { value: 'rightBtm', label: '右下' },
    ],
    System__AlignmentLHR: [
        { value: 'left', label: '左侧' },
        { value: 'hidden', label: '隐藏' },
        { value: 'right', label: '右侧' },
    ],
    System__FexedPosition: [
        { value: 'left', label: '左' },
        { value: 'sticky', label: '粘性' },
        { value: 'right', label: '右' },
    ],
    System__FlexDirection: [
        { value: 'column', label: '上下' },
        { value: 'column-reverse', label: '左右' },
    ],
    System__FlexDirectionTwo: [
        { value: 'row', label: '左侧' },
        { value: 'row-reverse', label: '右侧' },
    ],
    System__FlexAlignItems: [
        { value: 'flex-start', label: '左侧' },
        { value: 'center', label: '中心' },
        { value: 'flex-end', label: '右侧' },
    ],
    System__SortOrder: [
        { value: 'asc', label: '正序' },
        { value: 'desc', label: '倒序' },
    ],
    System__SortOrderBoolNot: [
        { value: false, label: '正序' },
        { value: true, label: '倒序' },
    ],

    System__SortOrderNot: [
        { value: 'none', label: '无序' },
        { value: 'asc', label: '正序' },
        { value: 'desc', label: '倒序' },
    ],
    System__summaryType: [
        { value: 'sum', label: '合计' },
        { value: 'min', label: '最小' },
        { value: 'max', label: '最大' },
        { value: 'avg', label: '平均' },
        { value: 'count', label: '数量' },
    ],
    System__textIconOrder: [
        { value: 'icon', label: '显示图标' },
        { value: 'text', label: '显示文字' },
        { value: 'icontext', label: '图标文字' },
        { value: 'texticon', label: '文字图标' },
    ],

    System__MappingType: [
        { value: 'local', label: '本地映射' },
        { value: 'onLine', label: '线上映射' },
    ],
    System__TagType: [
        { value: 'filled', label: '填充' },
        { value: 'solid', label: '实心' },
        { value: 'outlined', label: '轮廓' },
    ],
    System__TopOptionsType: [
        { value: 'A00', label: '下拉分组' },
        { value: 'A01', label: '查看数据' },
        { value: 'A02', label: '新增数据' },
        { value: 'A03', label: '查询数据' },
        { value: 'A04', label: '排序数据' },
        { value: 'A05', label: '刷新数据' },
        { value: 'A06', label: '导出数据' },
        { value: 'A07', label: '批量操作' },
        { value: 'A08', label: '弹出窗口' },
        {
            value: 'A09',
            label: 'OLAP操作',
            children: [
                { value: 'A0901', label: '保存布局' },
                { value: 'A0902', label: '重置布局' },
                { value: 'A0903', label: '图例窗口' },
            ]
        },
        {
            value: 'A10',
            label: '菜单功能',
            children: [
                { value: 'A1001', label: '菜单排序' },
                { value: 'A1002', label: '小程序菜单排序' },
                { value: 'A1103', label: '小程序设置' },
            ]
        },
        {
            value: 'A11',
            label: '独立弹窗',
            children: [
                { value: 'A1101', label: '题目解析' },
            ]
        },
        { value: 'A12', label: '执行接口' },
        { value: 'A13', label: '站内路由' },
    ],

    System__RowOptionsType: [
        { value: 'B00', label: '下拉分组' },
        { value: 'B01', label: '修改数据' },
        { value: 'B02', label: '新增子级' },
        { value: 'B03', label: '删除数据' },
        { value: 'B04', label: '查看附件' },
        { value: 'B05', label: 'Excel表格' },
        { value: 'B06', label: 'Table表单' },
        { value: 'B07', label: '弹出窗口' },
        { value: 'B08', label: '执行接口' },
        { value: 'B09', label: '穿梭框' },
        { value: 'B10', label: '打开列表' },
        { value: 'B11', label: '站内路由' },
        { value: 'B12', label: '数据审核' },
        { value: 'B13', label: '子列表操作' },
        { value: 'B14', label: '数据详情' },
        { value: 'B20', label: '图片轮播' },
        { value: 'B17', label: '步骤条' },
        {
            value: 'B15',
            label: '系统窗口',
            children: [
                { value: 'B1501', label: '网页权限' },
                { value: 'B1502', label: '小程序权限' },

                { value: 'B1504', label: '重置密码' },
            ],
        },
        {
            value: 'B16',
            label: '独立窗口',
            children: [
                { value: 'B1601', label: '提交周报' },
                { value: 'B1602', label: '周报详情' },
                { value: 'B1603', label: '巡检详情' },
                { value: 'B1604', label: '整改详情' },
                { value: 'B1605', label: '题库AI' },
                { value: 'B1606', label: '题库参数' },
                { value: 'B1607', label: '交投合同AI' },
            ]
        }
    ],

    System__FormClassData: [
        { value: 'A00', label: '默认样式' },
        { value: 'A01', label: '表单样式一' },
    ],

    System__RowShowStatus: [
        { value: 'all', label: '全部' },
        { value: 'row', label: '仅行' },
        { value: 'pop', label: '仅弹窗' },
        { value: 'hid', label: '隐藏' },
    ],

    System__OptionsModelList: [
        { value: 'CommonModel', label: '通用弹出层' },
    ],

    System__RowB15Type: [
        { value: 'txt', label: '文字' },
        { value: 'att', label: '附件' },
    ],

    System__OptionsStatus: [
        { value: 'top', label: '全局操作' },
        { value: 'row', label: '单行操作' },
    ],

    System__OptionsType: [
        { value: 'batch', label: '批量操作' },

    ],

    System__OptionsMode: [
        { value: 'func', label: '执行函数' },
        { value: 'model', label: '中心弹窗' },
        { value: 'drawer', label: '右侧抽屉' },
    ],

    System__AddDataType: [
        { value: 'form', label: 'FORM表单' },
        { value: 'excel', label: 'EXCEL表格' },
        { value: 'table', label: 'TABLE列表' },
    ],

    System__TransferType: [
        { value: 'base', label: '基础' },
        { value: 'tree', label: '树形' },
        { value: 'table', label: '表单' },
    ],

    System__BulkOperationType: [
        { value: 'confirm', label: '确认' },
        { value: 'select', label: '选择' },
        { value: 'form', label: '表单' },
    ],
    System__ButtonStatus: [
        { value: 'default', label: 'default' },
        { value: 'primary', label: 'primary' },
        { value: 'dashed', label: 'dashed' },
        { value: 'link', label: 'link' },
        { value: 'text', label: 'text' },
    ],
    System__ModelType: [
        { value: 'model', label: '中心弹窗' },
        { value: 'drawer', label: '侧边抽屉' },
    ],
    System__QueryScope: [
        { value: '本级', label: '本级' },
        { value: '下级', label: '下级' },
        { value: '全部', label: '全部' },
    ],
    System__FilesType: [
        { value: 'none', label: '无' },
        { value: 'img', label: '图片' },
        { value: 'icon', label: '图标' },
    ],
    System__IndicatorInit: [
        { value: 'text', label: '文字信息' },
        { value: 'one', label: '第一组数据' },
    ],
    System__TableOptionsType: [
        { value: 'model', label: '弹窗' },
        { value: 'navTo', label: '跳转' },
    ],
    System__TableModelLevel: [
        { value: 'updateModel', label: '默认' },
        { value: 'updateModel1', label: '一级' },
        { value: 'updateModel2', label: '二级' },
        { value: 'updateModel3', label: '三级' },
        { value: 'updateModel4', label: '四级' },
        { value: 'updateModel5', label: '五级' },
    ],
    System_TableNavToType: [
        { value: 'int', label: '站内' },
        { value: 'ext', label: '外部' },
    ],
    System_TableNavToExtType: [
        { value: 'field', label: '数据链接' },
        { value: 'https', label: '外部站点' },
    ],
    System_loginCodeType: [
        { value: 'A01', label: '拖动拼图' },
    ],

    System_gjContractAIType: [
        { value: 'A01', label: '合同对比' },
        { value: 'A02', label: '合同审核' },
        { value: 'A03', label: '合同提取' },
    ],

    // Todo 样式-通用属性
    Style__BoxShadow: [
        { value: '--shadow-none', label: '无阴影' },
        { value: '--shadow-1-down', label: '一级阴影' },
        { value: '--shadow-2-down', label: '二级阴影' },
        { value: '--shadow-3-down', label: '三级阴影' },
    ],
    Style__shadowType: [
        { value: 'inset', label: '内阴影' },
        { value: 'outline', label: '外阴影' },
    ],

    Style__BorderType: [
        { value: 'solid', label: '实线' },
        { value: 'dashed', label: '虚线' },
    ],
    Style__PositionType: [
        { value: 'top-left', label: '上左' },
        { value: 'top-right', label: '上右' },
        { value: 'bottom-left', label: '下左' },
        { value: 'bottom-right', label: '下右' },
    ],

    Style__FormatTemp: [
        { value: 'icon', label: '图标模板' },
        { value: 'date', label: '时间模板' },
        { value: 'url', label: 'URL链接' },
        { value: 'status', label: '状态模板' },
    ],
    Style__AntdResult: [
        { value: 'success', label: '成功提示' },
        { value: 'info', label: '默认提示' },
        { value: 'warning', label: '警告提示' },
        { value: 'error', label: '预警提示' },
        { value: 404, label: '404提示' },
        { value: 403, label: '403提示' },
        { value: 500, label: '500提示' },
    ],
    Swiper__SwiperPaginationType: [
        { value: 'bullets', label: '指示点' },
        { value: 'fraction', label: '分数型' },
        { value: 'progressbar', label: '进度条' },
    ],
    Swiper__SwiperEffectType: [
        { value: 'fade', label: '隐退' },
        { value: 'cube', label: '立方体' },
        { value: 'coverflow', label: '翻转' },
        { value: 'flip', label: '翻面' },
        { value: 'cards', label: '卡片' },
        // { value: 'creative', label: '创意' },
    ],
    Swiper__SwiperShowType: [
        { value: 'A01', label: '单页显示' },
        { value: 'A02', label: '网格显示' },
    ],

    // 动画效果
    Animate_type: [
        // 基础动画
        { value: 'animate__bounce', label: '弹跳' },
        { value: 'animate__flash', label: '闪烁' },
        { value: 'animate__pulse', label: '脉冲' },
        { value: 'animate__rubberBand', label: '皮筋' },
        { value: 'animate__shakeX', label: 'X轴摇晃' },
        { value: 'animate__shakeY', label: 'Y轴摇晃' },
        { value: 'animate__headShake', label: '摇头' },
        { value: 'animate__swing', label: '挥舞' },
        { value: 'animate__tada', label: '惊喜' },
        { value: 'animate__wobble', label: '摇晃' },
        { value: 'animate__jello', label: '果冻' },
        { value: 'animate__heartBeat', label: '心跳' },
        { value: 'animate__flip', label: '翻转' },
        // 基础入场
        { value: 'animate__backInDown', label: '基础入场-上方' },
        { value: 'animate__backInLeft', label: '基础入场-左侧' },
        { value: 'animate__backInRight', label: '基础入场-右侧' },
        { value: 'animate__backInUp', label: '基础入场-下方' },
        // 基础退场
        { value: 'animate__backOutUp', label: '基础退场-上方' },
        { value: 'animate__backOutLeft', label: '基础退场-左侧' },
        { value: 'animate__backOutRight', label: '基础退场-右侧' },
        { value: 'animate__bounceInUp', label: '基础退场-下方' },
        // 弹跳入场
        { value: 'animate__bounceIn', label: '弹跳入场-默认' },
        { value: 'animate__bounceInDown', label: '弹跳入场-上方' },
        { value: 'animate__bounceInLeft', label: '弹跳入场-左侧' },
        { value: 'animate__bounceInLeft', label: '弹跳入场-右侧' },
        { value: 'animate__backInUp', label: '弹跳入场-下方' },
        // 弹跳退场
        { value: 'animate__bounceOut', label: '弹跳退场-默认' },
        { value: 'animate__bounceOutUp', label: '弹跳退场-上方' },
        { value: 'animate__bounceOutLeft', label: '弹跳退场-左侧' },
        { value: 'animate__bounceOutRight', label: '弹跳退场-右侧' },
        { value: 'animate__bounceOutDown', label: '弹跳退场-下方' },
        // 渐隐入场
        { value: 'animate__fadeIn', label: '渐隐入场-默认' },
        { value: 'animate__fadeInDown', label: '渐隐入场-上方' },
        { value: 'animate__fadeInDownBig', label: '渐隐入场-上方(大)' },
        { value: 'animate__fadeInLeft', label: '渐隐入场-左侧' },
        { value: 'animate__fadeInLeftBig', label: '渐隐入场-左侧(大)' },
        { value: 'animate__fadeInRight', label: '渐隐入场-右侧' },
        { value: 'animate__fadeInRightBig', label: '渐隐入场-右侧(大)' },
        { value: 'animate__fadeInUp', label: '渐隐入场-下方' },
        { value: 'animate__fadeInUpBig', label: '渐隐入场-下方(大)' },
        { value: 'animate__fadeInTopLeft', label: '渐隐入场-左上' },
        { value: 'animate__fadeInTopRight', label: '渐隐入场-右上' },
        { value: 'animate__fadeInBottomLeft', label: '渐隐入场-左下' },
        { value: 'animate__fadeInBottomRight', label: '渐隐入场-右下' },
        // 渐隐退场
        { value: 'animate__fadeOut', label: '渐隐退场-默认' },
        { value: 'animate__fadeOutUp', label: '渐隐退场-上方' },
        { value: 'animate__fadeOutUpBig', label: '渐隐退场-上方(大)' },
        { value: 'animate__fadeOutLeft', label: '渐隐退场-左侧' },
        { value: 'animate__fadeOutLeftBig', label: '渐隐退场-左侧(大)' },
        { value: 'animate__fadeOutRight', label: '渐隐退场-右侧' },
        { value: 'animate__fadeOutRightBig', label: '渐隐退场-右侧(大)' },
        { value: 'animate__fadeOutDown', label: '渐隐退场-下方' },
        { value: 'animate__fadeOutDownBig', label: '渐隐退场-下方(大)' },
        { value: 'animate__fadeOutTopLeft', label: '渐隐退场-左上' },
        { value: 'animate__fadeOutTopRight', label: '渐隐退场-右上' },
        { value: 'animate__fadeOutBottomLeft', label: '渐隐退场-左下' },
        { value: 'animate__fadeOutBottomRight', label: '渐隐退场-右下' },
        // 翻转入场
        { value: 'animate__flipInX', label: '翻转入场-X轴' },
        { value: 'animate__flipInY', label: '翻转入场-Y轴' },
        // 翻转出场
        { value: 'animate__flipOutX', label: '翻转出场-X轴' },
        { value: 'animate__flipOutY', label: '翻转出场-Y轴' },
        // 光速入场
        { value: 'animate__lightSpeedInLeft', label: '光速入场-左侧' },
        { value: 'animate__lightSpeedInRight', label: '光速入场-右侧' },
        // 光速出场
        { value: 'animate__lightSpeedOutLeft', label: '光速出场-左侧' },
        { value: 'animate__lightSpeedOutRight', label: '光速出场-右侧' },
        // 旋转入场
        { value: 'animate__rotateIn', label: '旋转入场-默认' },
        { value: 'animate__rotateInDownLeft', label: '旋转入场-左下' },
        { value: 'animate__rotateInDownRight', label: '旋转入场-右下' },
        { value: 'animate__rotateInUpLeft', label: '旋转入场-上左' },
        { value: 'animate__rotateInUpRight', label: '旋转入场-上右' },
        // 旋转出场
        { value: 'animate__rotateOut', label: '旋转出场-默认' },
        { value: 'animate__rotateOutDownLeft', label: '旋转出场-左下' },
        { value: 'animate__rotateOutDownRight', label: '旋转出场-右下' },
        { value: 'animate__rotateOutUpLeft', label: '旋转出场-上左' },
        { value: 'animate__rotateOutUpRight', label: '旋转出场-上右' },
        // 缩放入场
        { value: 'animate__zoomIn', label: '缩放入场-默认' },
        { value: 'animate__zoomInDown', label: '缩放入场-上方' },
        { value: 'animate__zoomInLeft', label: '缩放入场-左侧' },
        { value: 'animate__zoomInRight', label: '缩放入场-右侧' },
        { value: 'animate__zoomInUp', label: '缩放入场-下方' },
        // 缩放出场
        { value: 'animate__rotateOut', label: '缩放出场-默认' },
        { value: 'animate__zoomOutUp', label: '缩放出场-上方' },
        { value: 'animate__zoomOutLeft', label: '缩放出场-左侧' },
        { value: 'animate__zoomOutRight', label: '缩放出场-右侧' },
        { value: 'animate__zoomOutDown', label: '缩放出场-下方' },
        // 滑动入场
        { value: 'animate__slideInDown', label: '滑动入场-上方' },
        { value: 'animate__slideInLeft', label: '滑动入场-左侧' },
        { value: 'animate__slideInRight', label: '滑动入场-右侧' },
        { value: 'animate__slideInUp', label: '滑动入场-下方' },
        // 滑动出场
        { value: 'animate__slideOutUp', label: '滑动出场-上方' },
        { value: 'animate__slideOutLeft', label: '滑动出场-左侧' },
        { value: 'animate__slideOutRight', label: '滑动出场-右侧' },
        { value: 'animate__slideOutDown', label: '滑动出场-下方' },
        // 特别入场
        { value: 'animate__rollIn', label: '特别入场-推入' },
        { value: 'animate__jackInTheBox', label: '特别入场-黑杰克' },
        // 特别出场
        { value: 'animate__rollOut', label: '特别出场-推出' },
        { value: 'animate__hinge', label: '特别出场-铰链' },
    ],

    // Todo 文字-通用设置
    Font__Family: [
        { value: '微软雅黑', label: '微软雅黑' },
        { value: 'PingFang', label: '微软平方' },
        { value: '阿里大楷', label: '阿里大楷' },
        { value: '阿里隶书', label: '阿里隶书' },
        { value: '阿里方圆', label: '阿里方圆' },
        { value: 'ShuHeiTi', label: '书黑体' },
        { value: 'BiaoTiHei', label: '斜黑体' },
        { value: 'SourceHanSansCN', label: '思源黑体' },
        { value: '汉真广标', label: '汉真广标' },
        { value: '宋体', label: '宋体' },
        { value: 'FZXBSK', label: '方正小宋' },
        { value: 'DIN', label: '数字字体' },
        { value: 'Pixel', label: '机械数字' },
        { value: 'HYT', label: '黄油体' },
        { value: 'R-Spectr', label: '光谱' },
        { value: 'LogoSCU', label: '加粗数字' },
    ],
    Font__WeightInt: [
        { value: 400, label: '正常' },
        { value: 600, label: '加粗' },
    ],
    Font__WeightStr: [
        { value: 'normal', label: '正常' },
        { value: 'bold', label: '加粗' },
    ],
    Font__Style: [
        { value: 'normal', label: '正常' },
        { value: 'italic', label: '倾斜' },
    ],
    Font__whiteSpace: [
        { value: 'normal', label: '允许' },
        { value: 'no-wrap', label: '不允许' },
    ],


    // TODO 系统主题
    Theme__loginType: [
        { value: 'A01', label: '直接登录' },
        { value: 'A02', label: '自由登录' },
    ],
    Theme__Layout: [
        { value: 'LayoutA01', label: '左右结构' },
        { value: 'LayoutA02', label: '上下结构' },
    ],
    Theme__BackType: [
        { label: '纯色背景', value: 'Color' },
        { label: '图片背景', value: 'Image' },
        { label: '视频背景', value: 'Video' },
        { label: '图形背景', value: 'Ground' },
    ],
    Theme__BackImage: [
        { label: '图片一', value: 'ThemeImageA01' },
        { label: '图片二', value: 'ThemeImageA02' },
        { label: '图片三', value: 'ThemeImageA03' },
        { label: '图片四', value: 'ThemeImageA04' },
        { label: '图片五', value: 'ThemeImageA05' },
        { label: '图片六', value: 'ThemeImageA06' },
        { label: '图片七', value: 'ThemeImageA07' },
    ],
    Theme__BackGrund: [
        { label: '3D矩形棋盘格 (60-30)', value: 'GrundTypeA01' },
        { label: '菱形棋盘格 (40-40)', value: 'GrundTypeA07' },
        { label: '45度条纹 (20-45)', value: 'GrundTypeA02' },
        { label: '平铺小方块 (40)', value: 'GrundTypeA03' },
        { label: '菱形格 (90-135)', value: 'GrundTypeA04' },
        { label: '45度立体方块 (200)', value: 'GrundTypeA05' },
        { label: '圆头波浪纹 (60)', value: 'GrundTypeA06' },
        { label: '纯色方格纹 (55)', value: 'GrundTypeA08' },
        { label: '错位点阵 (100-50)', value: 'GrundTypeA09' },
        { label: '平铺点阵 (30-5)', value: 'GrundTypeA10' },
        { label: '横向圆环 (60-70)', value: 'GrundTypeA11' },
        { label: '四格点阵 (40)', value: 'GrundTypeA12' },
        { label: '竖向立体方格 (80)', value: 'GrundTypeA13' },
        { label: '双层菱形图 (106-53)', value: 'GrundTypeA14' },
        { label: '双头小条纹 (25)', value: 'GrundTypeA15' },
        { label: '平铺水波纹 (65)', value: 'GrundTypeA16' },
        { label: '3D竖向流体 (15)', value: 'GrundTypeA17' },
        { label: '45度波纹图 (100)', value: 'GrundTypeA18' },
        { label: '大小波纹图 (150)', value: 'GrundTypeA19' },
        { label: '菱形波纹图 (50)', value: 'GrundTypeA20' },
    ],
    Theme__Loading: [
        { value: 'LoadSvg', label: '懵娜丽啥' },
        { value: 'LoadA01', label: '加载测试' },
        { value: 'LoadA02', label: '交投加载' },
        { value: 'LoadA03', label: '交投SVG' },
    ],
    Theme__LoginPage: [
        { value: 'loginDefault', label: '默认登录' },
        { value: 'loginTypeA01', label: '登录页一' },
    ],
    Theme__SignPage: [
        { value: 'signDefault', label: '默认窗口' },
        { value: 'signTypeA01', label: '登录窗一' },
    ],

    Theme__MenuType: [
        { value: 'menuDefault', label: '默认样式' },
        { value: 'menuTypeA01', label: '样式一' },
    ],

    Theme__LoginBackType: [
        { value: 'A01', label: '颜色背景' },
        { value: 'A02', label: '图片背景' },
        { value: 'A03', label: '轮播背景' },
        { value: 'A04', label: '视频背景' },
    ],
    Theme__LoginWindowType: [
        { value: 'A01', label: '平铺' },
        { value: 'A02', label: '分层' },
    ],

    Theme__LoginSignClass: [
        { value: 'SignBoxA01', label: '登录一' },
        { value: 'SignBoxA02', label: '登录二' },
        { value: 'SignBoxA03', label: '登录三' },
        { value: 'SignBoxA04', label: '登录亖' },

    ],

    // 默认操作列表 -> 自定义名称图标 -> 选择功能赋值
    Theme__HeadOptions: [
        { value: 1, label: '切换首页', icon: <DesktopOutlined /> },
        { value: 2, label: '站内通知', icon: <ShakeOutlined /> },
        { value: 3, label: '帮助信息', icon: <QuestionOutlined /> },
        { value: 4, label: '智能客服', icon: <CustomerServiceOutlined /> },
        { value: 5, label: '工作计划', icon: <FieldTimeOutlined /> },
        { value: 6, label: '工作台', icon: <FundProjectionScreenOutlined /> },
        { value: 7, label: '锁屏', icon: <LockOutlined /> },
        { value: 8, label: '退出登录', icon: <LogoutOutlined style={{ color: 'red' }} /> },
        { value: 9, label: '微信绑定', icon: <WechatOutlined style={{ color: '#2bdc70' }} /> },
        // { value: 10, label: '公众号绑定', icon: ICONMapping['weixingongzhonghao'] },
        { value: 11, label: '主题仓库', icon: <BgColorsOutlined /> },
    ],

    // 后台可用操作
    Theme__HeadOptionsList: [
        { value: 'admin', label: 'v' },
        { value: 'project', label: '项目列表' },
        { value: 'theme', label: '项目主题' },
        { value: 'devTheme', label: 'DX主题' },
        { value: 'login', label: '登录页面' },
        { value: 'start', label: '大屏配置' },
        { value: 'test', label: '自定页面测试' },
        { value: 'layout', label: '布局页面测试' },

        { value: 1, label: '切换首页' },
        { value: 2, label: '用户中心' },
        { value: 3, label: '工作台' },
        { value: 4, label: '微信绑定' },
        { value: 5, label: '公众号绑定' },

        { value: 7, label: '锁屏' },
        { value: 8, label: '退出登录' },
    ],

    // 大屏可用操作
    Theme__StartOptionsList: [
        { value: 'admin', label: '进入后台' },
        { value: 'setout', label: '退出登录' },
    ],

    Theme__TemplateList: [
        {
            value: 'vChart',
            label: '图例模板',
            children: [
                { value: 'chartA01', label: '折线图&面积图' },


            ],
        }
    ],


    Theme__OptionsLeftType: [
        { value: 'text', label: '固定字段' },
        { value: 'field', label: '系统字段' },
    ],


    Theme__StartOptions: [
        { value: 1, label: '返回首页', icon: 'HomeOutlined' },
        { value: 2, label: '进入后台', icon: 'ConsoleSqlOutlined' },
        { value: 3, label: '退出登录', icon: 'PoweroffOutlined' },
        { value: 4, label: '智能AI', icon: 'hutonglijiao' },
    ],


    Theme__UserInfoTrigger: [
        { value: 'click', label: '点击' },
        { value: 'hover', label: '移入' },
        { value: 'contextMenu', label: '右键' },
    ],
    Theme__UserInfoShape: [
        { value: 'circle', label: '圆形' },
        { value: 'square', label: '圆角' },
    ],
    Theme__UserOptions: [
        { value: 'SetUserInfo', label: '用户设置' },
        { value: 'Workbenches', label: '工作台' },
    ],
    Theme__UserNickName: [
        { value: 'nickName', label: '昵称' },
        { value: 'tableName', label: '用户名' },
        { value: 'roleName', label: '角色名称' },
        { value: 'mobile', label: '手机号码' },
        { value: 'organizationName', label: '机构名称' },
    ],
    Theme__UserCliclType: [
        { value: 'none', label: '无操作' },
        { value: 'userInfo', label: '个人中心' },
        { value: 'dropdown', label: '下拉菜单' },
    ],

    Theme__StartType: [
        { value: 'A01', label: '全屏' },
        { value: 'A02', label: '小窗' },
    ],


    // Todo 文本框内容
    // 穿梭框机构选择
    Form__TransferOrgSelect: [
        { value: 'outside', label: '外层数据' },
        { value: 'inside', label: '内部渲染' },
    ],

    Form__TypeList: [
        { value: 'HIDDEN', label: '隐藏框' },
        { value: 'INPUT', label: '输入框' },
        { value: 'PASSWORD', label: '密码框' },
        { value: 'TEXTAREA', label: '富文本' },

        { value: 'NUMBER', label: '数字框' },
        { value: 'RANGE', label: '范围框' },
        { value: 'SLIDER', label: '滑动条' },
        { value: 'RATE', label: '评分框' },

        { value: 'COLOR', label: '颜色选择' },
        { value: 'RADIO', label: 'Radio单选' },
        { value: 'SELECT', label: 'Select单选' },
        { value: 'SELECTM', label: 'Select多选' },
        { value: 'TREE', label: '树形单选' },
        { value: 'TREEM', label: '树形多选' },
        { value: 'CASCADER', label: '联级选择' },

        { value: 'TIME', label: '时间' },
        { value: 'DATE', label: '日期' },
        { value: 'DATETIME', label: '日期时间' },
        { value: 'WEEK', label: '周' },
        { value: 'MONTH', label: '月' },
        { value: 'QUARTER', label: '季' },
        { value: 'YEAR', label: '年' },

        { value: 'TIMERANGE', label: '时间区间' },
        { value: 'DATERANGE', label: '日期区间' },
        { value: 'DATETIMERANGE', label: '日期时间区间' },
        { value: 'WEEKRANGE', label: '周区间' },
        { value: 'MONTHRANGE', label: '月区间' },
        { value: 'QUARTERRANGE', label: '季区间' },
        { value: 'YEARRANGE', label: '年区间' },

        { value: 'UPLOAD', label: '上传附件' },
        { value: 'TempICON', label: '图标选择' },
        { value: 'TempInputLink', label: '输入(带连接)' },
        { value: 'TempPwdConfirm', label: '密码确认框' },
        { value: 'TempPosition', label: '经纬度' },
    ],

    Form__SearchType: [
        { value: 'DEFAULT', label: '同原数据' },
        { value: 'INPUT', label: '输入框' },
        { value: 'PASSWORD', label: '密码框' },
        { value: 'TEXTAREA', label: '富文本' },
        { value: 'NUMBER', label: '数字框' },
        { value: 'RANGE', label: '范围框' },
        { value: 'SLIDER', label: '滑动条' },
        { value: 'RATE', label: '评分框' },
        { value: 'TIME', label: '时间' },
        { value: 'DATE', label: '日期' },
        { value: 'DATETIME', label: '日期时间' },
        { value: 'WEEK', label: '周' },
        { value: 'MONTH', label: '月' },
        { value: 'QUARTER', label: '季' },
        { value: 'YEAR', label: '年' },
        { value: 'TIMERANGE', label: '时间区间' },
        { value: 'DATERANGE', label: '日期区间' },
        { value: 'DATETIMERANGE', label: '日期时间区间' },
        { value: 'WEEKRANGE', label: '周区间' },
        { value: 'MONTHRANGE', label: '月区间' },
        { value: 'QUARTERRANGE', label: '季区间' },
        { value: 'YEARRANGE', label: '年区间' },
    ],

    Form__LayoutWindowOptions: [
        { value: 'DATE', label: '日期操作' },
        { value: 'SELECT', label: '下拉选项' },
    ],

    Form__LayoutWindwoDateType: [
        { value: 'TIME', label: '时间' },
        { value: 'DATE', label: '日期' },
        { value: 'DATETIME', label: '日期时间' },
        { value: 'WEEK', label: '周' },
        { value: 'MONTH', label: '月' },
        { value: 'QUARTER', label: '季' },
        { value: 'YEAR', label: '年' },
    ],

    Form__AntdValueType: [
        { value: 'text', label: '默认' },
        { value: 'indexBorder', label: '索引' },
        { value: 'money', label: '金额' },
        { value: 'digit', label: '千分位' },
        { value: 'percent', label: '百分比' },
        { value: 'dateTime', label: '日期时间' },
        { value: 'date', label: '日期' },
        { value: 'time', label: '时间' },
        { value: 'select', label: '下拉' },
        { value: 'cascader', label: '联级' },
        { value: 'treeSelect', label: '树多选' },
        { value: 'code', label: '源码' },
        { value: 'image', label: '图片' },
    ],


    Form__LayoutWindowNavOptions: [
        { value: 'A01', label: '统一配置' },
        // { value: 'A02', label: '独立配置' },
    ],


    // TODO Dev
    DevConfig__ColumnResizing: [
        { value: 'nextColumn', label: '总宽不变' },
        { value: 'widget', label: '保持宽度' },
    ],
    DevConfig__RowApplyFilter: [
        { value: 'none', label: '自动搜索' },
        { value: 'onClick', label: '确认搜索' },
    ],
    DevConfig__DevTemplate: [
        { value: 'DevExtremeDataGrid', label: '数据模板' },
        { value: 'DevExtremeTreeGrid', label: '树形模板' },
        { value: 'DevExtremeCardGrid', label: '卡片模板(暂无)' },
        { value: 'DevExtremeOLAPGrid', label: '统计模板' },
    ],
    DevConfig__DevTemplateA02: [
        { value: 'DevExtremeDataGrid', label: '数据模板' },
        { value: 'DevExtremeTreeGrid', label: '树形模板' },
    ],
    DevConfig__ColumnChooserMode: [
        { value: 'select', label: '选择' },
        { value: 'dragAndDrop', label: '拖拽' },
    ],
    DevConfig__GroupingExpandMode: [
        { value: 'buttonClick', label: '按钮收缩' },
        { value: 'rowClick', label: '行收缩' },
    ],
    DevConfig__SortingMode: [
        { value: 'single', label: '单列排序' },
        { value: 'multiple', label: '多列排序' },
        { value: 'none', label: '禁用排序' },
    ],
    DevConfig__SelectionMode: [
        { value: 'single', label: '单选' },
        { value: 'multiple', label: '多选' },
    ],
    DevConfig__SelectionSelectAllMode: [
        { value: 'page', label: '当前页面' },
        { value: 'allPages', label: '所有页面' },
    ],
    DevConfig__SelectionShowCheckBoxesMode: [
        { value: 'onClick', label: '点击显示' },
        { value: 'onLongTap', label: '长按显示' },
        { value: 'always', label: '始终可见' },
    ],
    DevConfig__FilterRowApplyFilter: [
        { value: 'auto', label: '自动触发' },
        { value: 'onClick', label: '点击触发' },
    ],
    DevConfig__ExportFormats: [
        { value: 'xlsx', label: 'EXCEL' },
        { value: 'pdf', label: 'PDF' },
    ],
    DevConfig__PaginationMode: [
        { value: 'full', label: '平铺' },
        { value: 'compact', label: '下拉' },
    ],
    DevConfig__FieldChooserLayout: [
        { label: '布局一', value: 0 },
        { label: '布局二', value: 1 },
        { label: '布局三', value: 2 },
    ],
    DevConfig__FieldChooserApplyChangesMode: [
        { label: '即刻', value: 'instantly' },
        { label: '按需', value: 'onDemand' },
    ],
    DevConfig__RowHeaderLayout: [
        { value: 'standard', label: '父级右侧' },
        { value: 'tree', label: '密集布局' },
    ],
    DevConfig__ShowTotalsPrior: [
        { label: '上', value: 'row' },
        { label: '下', value: 'column' },
        { label: '前', value: 'both' },
        { label: '后', value: 'none' },
    ],
    DevConfig__DataFieldArea: [
        { label: '行', value: 'row' },
        { label: '列', value: 'column' },
    ],
    DevConfig__NumberFormat: [
        { label: '小数型', value: 'fixedPoint' },
        { label: '百分比', value: 'percent' },
        { label: '货币符', value: 'currency' },
    ],
    // TODO Charts参数
    Charts__renderField: [
        { label: 'xField', value: 'xField' },
        { label: 'yField', value: 'yField' },
        { label: 'seriesField', value: 'seriesField' },
    ],
    Charts__ColorTypeList: [
        { value: 'color', label: '纯色' },
        { value: 'linear', label: '线性渐变' },
        { value: 'radial', label: '径向渐变' },
        { value: 'conical', label: '锥形渐变' },
    ],
    Charts__AxesTypeList: [
        { value: 'linear', label: '线性轴' },
        { value: 'band', label: '离散轴' },
        { value: 'time', label: '时间轴' },
        { value: 'log', label: 'log轴' },
        { value: 'symlog', label: 'symlog轴' },
    ],
    Charts_AxesModeMapping: [
        { value: '2d', label: '2D' },
        { value: '3d', label: '3D' },
    ],

    Charts__axesLabelContainerAlign: [
        { value: 'top', label: '整体向上对齐（垂直方向）' },
        { value: 'middle', label: '整体居中对齐（垂直方向）' },
        { value: 'bottom', label: '整体向下对齐（垂直方向）' },
        { value: 'left', label: '整体向左对齐（水平方向）' },
        { value: 'center', label: '整体居中对齐（水平方向）' },
        { value: 'right', label: '整体向右对齐（水平方向）' },
    ],
    Charts__LegendsOrient: [
        { value: 'top', label: '顶部' },
        { value: 'bottom', label: '底部' },
        { value: 'left', label: '左侧' },
        { value: 'right', label: '右侧' },
    ],

    Charts__VchartsAxesOrientA01: [
        { value: 'top', label: '顶部' },
        { value: 'bottom', label: '底部' },
        { value: 'left', label: '左侧' },
        { value: 'right', label: '右侧' },
        { value: 'z', label: 'Z轴' },
        { value: 'radius', label: '半径轴' },
        { value: 'angle', label: '角度轴' },
    ],
    Charts__LegendsItemAlign: [
        { value: 'left', label: '图标在左侧' },
        { value: 'right', label: '图标在右侧' },
    ],

    Charts__VchartsAxesOrientA02: [
        { value: 'radius', label: '半径轴' },
        { value: 'angle', label: '角度轴' },
    ],
    Charts__VchartsLegendsPosition: [
        { value: 'start', label: '起始' },
        { value: 'middle', label: '居中' },
        { value: 'end', label: '末尾' },
    ],
    Charts__VchartsLegendsSelectMode: [
        { value: 'multiple', label: '多选模式' },
        { value: 'single', label: '单选模式' },
        { value: 'focus', label: '聚焦模式' },
    ],
    Charts__VchartsLabelPosition: [
        { value: 'top', label: '上方' },
        { value: 'bottom', label: '下方' },
        { value: 'left', label: '左侧' },
        { value: 'right', label: '右侧' },
        { value: 'top-right', label: '上右' },
        { value: 'top-left', label: '上左' },
        { value: 'bottom-right', label: '下右' },
        { value: 'bottom-left', label: '下左' },
        { value: 'center', label: '居中' },
    ],
    Charts__VchartsPieLabelPosition: [
        { value: 'outside', label: '外部' },
        { value: 'inside', label: '内部' },
        { value: 'inside-outer', label: '内部外侧' },
        { value: 'inside-inner', label: '内部内侧' },
    ],
    Charts__VChartsDirectionA01: [
        { value: 'horizontal', label: '水平' },
        { value: 'vertical', label: '垂直' },
    ],
    Charts__invalidType: [
        { value: 'break', label: '点处断开' },
        { value: 'link', label: '保持连续' },
        { value: 'zero', label: '数值为 0' },
        { value: 'ignore', label: '不处理' },

    ],
    Charts__VchartsTrigger: [
        { value: 'hover', label: '悬浮触发' },
        { value: 'click', label: '点击触发' },
    ],
    Charts__VchartsTriggerTer: [
        { value: 'hover', label: '悬浮触发' },
        { value: 'click', label: '点击触发' },
        { value: 'none', label: '不会消失' },
    ],
    Charts__crosshairTrigger: [
        { value: 'hover', label: '悬浮触发' },
        { value: 'click', label: '点击触发' },
        { value: 'all', label: '同时触发' },
    ],
    Charts__VchartsTooltipPosition: [
        { value: 'top', label: '上侧' },
        { value: 'bottom', label: '下侧' },
        { value: 'left', label: '左侧' },
        { value: 'right', label: '右侧' },
        { value: 'tl', label: '左上角' },
        { value: 'tr', label: '右上角' },
        { value: 'bl', label: '左下角' },
        { value: 'br', label: '右下角' },
        { value: 'center', label: '中心位置' },
        { value: 'centerTop', label: '中心上侧' },
        { value: 'centerBottom', label: '中心下侧' },
        { value: 'centerLeft', label: '中心左侧' },
        { value: 'centerRight', label: '中心右侧' },
    ],
    Charts__VchartsTooltipPositionMode: [
        { value: 'mark', label: '图元附近' },
        { value: 'pointer', label: '指针附近' },
        { value: 'crosshair', label: 'crosshair 附近' },
    ],
    Charts__VchartsCrosshairType: [
        { value: 'line', label: '辅助线' },
        { value: 'rect', label: '辅助框' },
    ],
    Charts__VchartsTextAlign: [
        { value: 'left', label: '左侧位置' },
        { value: 'center', label: '居中位置' },
        { value: 'right', label: '右侧位置' },
        { value: 'start', label: '开始位置' },
        { value: 'end', label: '结束位置' },
    ],
    Charts__VchartsTextBaseline: [
        { value: 'top', label: '上方位置' },
        { value: 'middle', label: '居中位置' },
        { value: 'bottom', label: '下方位置' },
        { value: 'alphabetic', label: '对齐位置' },
    ],
    Charts__VchartsMarkLineAexs: [
        { value: 'x', label: 'X轴' },
        { value: 'y', label: 'Y轴' },
    ],
    Charts__VchartsMarkLinePositionMapping: [
        { value: 'start', label: '线起点外侧' },
        { value: 'middle', label: '线中点' },
        { value: 'end', label: '线终点外侧' },
        { value: 'insideStartTop', label: '线起点内侧上部' },
        { value: 'insideStartBottom', label: '线起点内侧下部' },
        { value: 'insideMiddleTop', label: '线中点上部' },
        { value: 'insideMiddleBottom', label: '线中点下部' },
        { value: 'insideEndTop', label: '线终点内侧上部' },
        { value: 'insideEndBottom', label: '线终点内侧下部' },
    ],
    Charts__VchartsPointCurveType: [
        { value: 'circle', label: '圆形' },
        { value: 'cross', label: '十字形' },
        { value: 'diamond', label: '菱形' },
        { value: 'square', label: '方形' },
        { value: 'arrow', label: '箭头' },
        { value: 'wedge', label: '锥三角' },
        { value: 'thinTriangle', label: '宽三角' },
        { value: 'triangle', label: '正三角' },
        { value: 'triangleUp', label: '上三角' },
        { value: 'triangleRight', label: '右三角' },
        { value: 'triangleDown', label: '下三角' },
        { value: 'triangleLeft', label: '左三角' },
        { value: 'arrow2Left', label: '左箭头2' },
        { value: 'arrow2Right', label: '右箭头2' },
        { value: 'arrowLeft', label: '左三角3' },
        { value: 'arrowRight', label: '右三角3' },
        { value: 'stroke', label: '破折线' },
        { value: 'star', label: '五角星' },
        { value: 'wye', label: 'Y形' },
        { value: 'rect', label: '矩形' },
        { value: 'rectRound', label: '圆角方形' },
        { value: 'roundLine', label: '圆形线条' },
    ],

    Charts_tooltipDimension: [
        { value: 'circle', label: '圆形' },
        { value: 'star', label: '五角星' },
        { value: 'square', label: '方形' },
        { value: 'diamond', label: '菱形' },
        { value: 'triangle', label: '正三角' },
    ],
    Charts__textrueType: [
        { value: 'circle', label: '圆形' },
        { value: 'diamond', label: '菱形' },
        { value: 'rect', label: '矩形' },
        { value: 'vertical-line', label: '柱形' },
        { value: 'horizontal-line', label: '条形' },
        { value: 'bias-lr', label: '斜杠(左-右)' },
        { value: 'bias-rl', label: '斜杠(右-左)' },
        { value: 'grid', label: '双格' },

    ],

    Charts__widthColorType: [
        { value: 'A01', label: '外描边' },
        { value: 'A02', label: '内填充' },
    ],

    Charts__VchartsMarkPointLineType: [
        { value: 'type-s', label: '直线' },
        { value: 'type-do', label: '折线1' },
        { value: 'type-po', label: '折线2' },
        { value: 'type-op', label: '折线3' },
        { value: 'type-arc', label: '弧线' },
    ],
    Charts__VchartsMarkPointLineContentPosition: [
        { value: 'top', label: '上方' },
        { value: 'middle', label: '居中' },
        { value: 'bottom', label: '下方' },
        { value: 'insideTop', label: '内部上方' },
        { value: 'insideMiddle', label: '内部居中' },
        { value: 'insideBottom', label: '内部下方' },
    ],
    Charts__VchartsLineCurveType: [
        { value: 'basis', label: '基础线' },
        { value: 'bundle', label: '折线' },
        { value: 'cardinal', label: '动画折线' },
        { value: 'catmullRom', label: '弧线' },
        { value: 'linear', label: '直线' },
        { value: 'monotone', label: '弧线' },
        { value: 'monotoneX', label: 'X弧线' },
        { value: 'monotoneY', label: 'Y弧线' },
        { value: 'natural', label: 'natural' },
        { value: 'step', label: '梯线' },
        { value: 'stepAfter', label: '前梯线' },
        { value: 'stepBefore', label: '后梯线' },
        { value: 'linearClosed', label: '闭合线' },
        { value: 'cardinalClosed', label: '动画闭合线' },
    ],
    Charts__VchartsIndicatorFixed: [
        { value: true, label: '保持显示' },
        { value: false, label: '交互显示' },
    ],
    Charts__VchartsIndicatorTrigger: [
        { value: 'hover', label: '悬停' },
        { value: 'select', label: '选中' },
        { value: 'none', label: '不更新' },
    ],
    Charts__VchartsGaugeTypeMapping: [
        { value: 'circularProgress', label: '循环进度' },
        { value: 'gauge', label: '测量进度' },
    ],
    Charts__VchartsProgressTypeMapping: [
        { value: 'linearProgress', label: '条形' },
        { value: 'circularProgress', label: '环形' },
    ],
    Charts__VchartsLiquidMaskShapeMapping: [
        { value: 'drop', label: '水滴' },
        { value: 'circle', label: '圆形' },
        { value: 'cross', label: '十字形' },
        { value: 'diamond', label: '菱形' },
        { value: 'square', label: '方形' },
        { value: 'arrow', label: '箭头' },
        { value: 'arrow2Left', label: '左箭头' },
        { value: 'arrow2Right', label: '右箭头' },
        { value: 'wedge', label: '锥三角' },
        { value: 'thinTriangle', label: '宽三角' },
        { value: 'triangle', label: '正三角' },
        { value: 'triangleUp', label: '上三角' },
        { value: 'triangleRight', label: '右三角' },
        { value: 'triangleDown', label: '下三角' },
        { value: 'triangleLeft', label: '左三角' },
        { value: 'star', label: '五角星' },
        { value: 'wye', label: 'Y形' },
        { value: 'rect', label: '矩形' },
    ],
    Charts__VChartsTypeA01: [
        { value: 'line', label: '折现图' },
        { value: 'area', label: '面积图' },
    ],
    Charts__percentData: [
        { value: 'A01', label: '*1%' },
        { value: 'A02', label: '*100%' },
    ],
    Charts__extensionMarkRender: [
        { value: 'A01', label: '数组字段' },
        { value: 'A02', label: '自定义数据' },
    ],
    Charts__ProgressPosition: [
        { value: 'A01', label: '进度两侧' },
        { value: 'A02', label: '进度内' },
    ],
    Charts__maxLineWidth: [
        { value: 'A01', label: '不隐藏' },
        { value: 'A02', label: '进度长度' },
        { value: 'A03', label: '整体长度' },

    ],
    Charts__colorSelet: [
        { value: 'A01', label: '色板' },
        { value: 'A02', label: '自定' },
    ],
    Charts__stateStatusMapping: [
        { value: 'hover', label: '悬浮' },
        { value: 'hover_reverse', label: '未被悬浮' },
        { value: 'selected', label: '选中' },
        { value: 'selected_reverse', label: '未被选中' },
    ],



    // !!! 大屏配置
    Start__backType: [
        { value: 'color', label: '颜色' },
        { value: 'image', label: '图片' },
        { value: 'video', label: '视频' },
    ],

    Start__textList: [
        { value: 'text', label: '纯文字' },
        { value: 'color', label: '文字颜色' },
        { value: 'back', label: '背景颜色' },
        { value: 'front', label: '前置样式' },
    ],
    Start__frontStyle: [
        { value: 'square', label: '方形' },
        { value: 'rotundity', label: '圆形' },
    ],

    Start__routerType: [
        { value: 'path', label: '页面' },
        { value: 'url', label: '链接' },
    ],
    Start__topTempType: [
        { value: 'empty', label: '空模块' },
        { value: 'nav', label: '导航模块(仅占位)' },
        { value: 'title', label: '标题模块' },
        { value: 'option', label: '操作模块' },
        { value: 'back', label: '返回模块' },
        { value: 'text', label: '文字模块' },
        { value: 'date', label: '时间模块' },
    ],
    Start__navLevel: [
        { value: 'A01', label: '一级导航' },
        { value: 'A02', label: '二级导航' },
        { value: 'A03', label: '三级导航' },
    ],
    Start__navType: [
        { value: 'A01', label: '头部预留' },
        { value: 'A02', label: '自由位置' },
    ],
    Start__navTypeA02: [
        { value: 'A01', label: '一体导航' },
        { value: 'A02', label: '左右均分' },
    ],
    Start__navTypeA02Power: [
        { value: 'A01', label: '左侧' },
        { value: 'A02', label: '右侧' },
    ],

    Start__navPosition: [
        { value: 'top', label: '上' },
        { value: 'right', label: '右' },
        { value: 'bottom', label: '下' },
        { value: 'left', label: '左' },
    ],
    Start__navBackType: [
        { value: 'color', label: '背景颜色' },
        { value: 'image', label: '背景图片' },
    ],
    Start__imgObjectFit: [
        { value: 'contain', label: '完整' },
        { value: 'cover', label: '剪裁' },
        { value: 'fill', label: '拉伸' },
        { value: 'none', label: '不处理' },
    ],
    Start__initPasge: [
        { value: 'HOME', label: '首页' },
        { value: 'PAGE', label: '路由' },
    ],
    Start__pageType: [
        { value: 'LAY', label: '布局页面' },
        { value: 'DIY', label: '自订页面' },
    ],
    Start__windowType: [
        { value: 'WIN', label: '大屏小窗' },
        { value: 'DIY', label: '自定小窗' },
    ],

    ApiUrlLevel: [
        { value: false, label: '默认层级' },
        { value: true, label: '指定层级' },
    ],
    Model_layoutType: [
        { value: 'A01', label: '附件窗口' },
        { value: 'A02', label: '列表窗口' },

    ],

    // !!! 流程配置
    x6__Repeat: [
        { value: 'no-repeat', label: '不重复' },
        { value: 'repeat', label: '重复' },
        { value: 'repeat-x', label: 'X轴重复' },
        { value: 'repeat-y', label: 'Y轴重复' },
        { value: 'round', label: '圆形' },
        { value: 'space', label: '空格' },
        { value: 'flipXY', label: '翻转' },
        { value: 'flipX', label: 'X轴翻转' },
        { value: 'flipY', label: 'Y轴翻转' },
        { value: 'watermark', label: '水印' },
    ],

    x6__Position: [
        { value: 'center', label: '居中' },
        { value: 'left', label: '靠左' },
        { value: 'right', label: '靠右' },
        { value: 'top', label: '靠上' },
        { value: 'bottom', label: '靠下' },
    ],


    x6__Size: [
        { value: 'auto auto', label: '自动' },
        { value: 'cover', label: '覆盖' },
        { value: 'contain', label: '包含' }
    ],

    x6__Grid: [
        { value: 'dot', label: '点' },
        // { value: 'fixedDot', label: '固定点' },
        { value: 'mesh', label: '网格' },
        // { value: 'doubleMesh', label: '双网格' },
    ],

    x6__NodeType: [
        { value: 'square', label: '方形' },
        { value: 'rounded', label: '圆角' },
        { value: 'rotundity', label: '圆形' },
    ],


    // !!! 小程序配置项
    WeChat_navigationStyle: [
        { value: 'A01', label: '无系统头' },
        { value: 'A02', label: '正常标头' },
        { value: 'A05', label: '左侧标头' },
        { value: 'A03', label: '返回标头' },
        { value: 'A04', label: '双胶囊头' },
        { value: 'A06', label: '搜索标头' },
        { value: 'A07', label: '图片标头' },
    ],
    WeChat_navigationBarTextStyle: [
        { value: 'black', label: '黑色' },
        { value: 'white', label: '白色' },
    ],
    WeChat_loginTemp: [
        { value: 'A01', label: '通用登录' },
        { value: 'A02', label: '开发中...' },
        { value: 'A03', label: '开发中...' },
        { value: 'A04', label: '开发中...' },
    ],
    WeChat__tabBarTemp: [
        { value: 'A01', label: '通用导航' },
        { value: 'A02', label: '开发中...' },
        { value: 'A03', label: '开发中...' },
        { value: 'A04', label: '开发中...' },
    ],
    WeChat__titleOptions: [
        { value: 'A01', label: '纯展示' },
        { value: 'A02', label: '跳转' },
        { value: 'A03', label: '更新接口' },
    ],
    WeChat__homeDisplay: [
        { value: 'flex', label: '固定' },
        { value: 'grid', label: '自动' },
    ],
    WeChat__resA01_backType: [
        { value: 'none', label: '无' },
        { value: 'color', label: '颜色' },
        { value: 'image', label: '图片' },
    ],
    WeChat__imageMode: [
        { value: 'scaleToFill', label: '缩放模式.(完全拉伸至填满)' },
        { value: 'aspectFit', label: '缩放模式.(长边能完全显示)' },
        { value: 'aspectFill', label: '缩放模式.(短边能完全显示)' },
        { value: 'widthFix', label: '缩放模式.(宽度不变)' },
        { value: 'heightFix', label: '缩放模式.(高度不变)' },
        { value: 'top', label: '裁剪模式.(只显示图片的顶部区域)' },
        { value: 'bottom', label: '裁剪模式.(只显示图片的底部区域)' },
        { value: 'center', label: '裁剪模式.(只显示图片的中间区域)' },
        { value: 'left', label: '裁剪模式.(只显示图片的左边区域)' },
        { value: 'right', label: '裁剪模式.(只显示图片的右边区域)' },
        { value: 'top left', label: '裁剪模式.(只显示图片的左上边区域)' },
        { value: 'top right	', label: '裁剪模式.(只显示图片的右上边区域)' },
        { value: 'bottom left', label: '裁剪模式.(只显示图片的左下边区域)' },
        { value: 'bottom right', label: '裁剪模式.(只显示图片的右下边区域)' },
    ],
    WeChat__clickType: [
        { value: 'router', label: '路由' },
    ],

    WeChat__routerType: [
        { value: 'A01', label: '仅打开' },
        { value: 'A02', label: '保留当前页' },
    ],
    WeChat__tabsThemeType: [
        { value: 'line', label: '标准' },
        { value: 'tag', label: '标签' },
        { value: 'card', label: '卡片' },
    ],
    WeChat__tabsLineType: [
        { value: 'fixed', label: '固定长度' },
        { value: 'auto', label: '内容长度' },
        { value: 'full', label: '子项长度' },
    ],
    WeChat__swiperEasingType: [
        { value: 'default', label: '默认动画' },
        { value: 'linear', label: '线性动画' },
        { value: 'easeInCubic', label: '缓入动画' },
        { value: 'easeOutCubic', label: '缓出动画' },
        { value: 'easeInOutCubic', label: '缓入缓出' },
    ],
    WeChat__swiperPagination: [
        { value: 'top', label: '正上' },
        { value: 'top-left', label: '左上' },
        { value: 'top-right', label: '右上' },
        { value: 'bottom', label: '正下' },
        { value: 'bottom-left', label: '左下' },
        { value: 'bottom-right', label: '右下' },
    ],
    WeChat__swiperPaginationType: [
        { value: 'dots', label: '点状' },
        { value: 'dots-bar', label: '点条' },
        { value: 'fraction', label: '分式' },
    ],
    WeChat__dataSourceType: [
        { value: 'api', label: '接口数据' },
        { value: 'fix', label: '固定数据' },
    ],
    WeChat__apiBackDataType: [
        { value: 'A01', label: '更新' },
        { value: 'A02', label: '追加' },
    ],
    WeChat__listUpdateType: [
        { value: 'A01', label: '不更新' },
        { value: 'A02', label: '按钮加载' },
        { value: 'A03', label: '下拉加载' },
    ],



    // !!! 地图设置
    Mars3d__fileType: [
        { value: 'kml', label: 'KML' },
        { value: 'geo', label: 'Geo' },
    ],
    Mars3d__Scene: [
        { value: 3, label: '三维视图' },
        { value: 2, label: '二维视图' },
        { value: 1, label: '哥伦布视图' },
    ],
    mars3d__Basemaps: [
        { value: false, label: '无瓦片' },
        { value: 'BaseD02', label: '微软影像' },
        { value: 'BaseD03', label: 'ArcGIS影像' },
        { value: 'BaseD04', label: '天地图影像' },
        { value: 'BaseD08', label: '星图影像' },
        { value: 'BaseD05', label: '高德影像' },
        { value: 'BaseD06', label: '百度影像' },
        { value: 'BaseD07', label: '腾讯影像' },
        { value: 'BaseV01', label: '蓝色底图' },
        { value: 'BaseV02', label: '黑色底图' },
        { value: 'BaseV03', label: '暗色底图' },
        { value: 'BaseV04', label: '天地图电子' },
        { value: 'BaseV08', label: '星图电子' },
        { value: 'BaseV05', label: '高德电子' },
        { value: 'BaseV06', label: '百度电子' },
        { value: 'BaseV07', label: '腾讯电子' },
    ],
    mars3d__Layer: [
        { value: 'BaseZ04', label: '天地图注记' },
        { value: 'BaseZ08', label: '星图注记' },
        { value: 'BaseZ05', label: '高德注记' },
        { value: 'BaseZ06', label: '百度注记' },
        { value: 'BaseZ07', label: '腾讯注记' },
        { value: 'LayF01', label: '经纬网' },
        { value: 'LayF02', label: '网格线' },
        { value: 'LayF03', label: '地形晕渲' },
    ],
    mars3d__Toolbar: [
        { value: 'top-right', label: '上侧靠右' },
        { value: 'top-left', label: '上侧靠左' },
        { value: 'left-top', label: '左侧靠上' },
        { value: 'left-bottom', label: '左侧靠下' },
        { value: 'right-top', label: '右侧靠上' },
        { value: 'right-bottom', label: '右侧靠下' },
    ],
    mars3d__bidirectional: [
        { value: 0, label: '正向' },
        { value: 1, label: '反向' },
        { value: 2, label: '双向' },
    ],
    mars3d__polylineImage: [
        { label: 'right', value: CommonSceneUrl.img + 'line-arrow-right.png' },
        { label: 'dovetail', value: CommonSceneUrl.img + 'line-arrow-dovetail.png' },
        { label: 'aqua', value: CommonSceneUrl.img + 'line-color-aqua.png' },
        { label: 'azure', value: CommonSceneUrl.img + 'line-color-azure.png' },
        { label: 'colour', value: CommonSceneUrl.img + 'line-colour.png' },
        { label: 'gradual', value: CommonSceneUrl.img + 'line-gradual.png' },
        { label: 'pulse', value: CommonSceneUrl.img + 'line-pulse.png' },
        { label: 'sprite', value: CommonSceneUrl.img + 'line-sprite.png' },
        { label: 'tarans', value: CommonSceneUrl.img + 'line-tarans.png' },
        { label: 'vertebral-one', value: CommonSceneUrl.img + 'line-vertebral.png' },
        { label: 'vertebral-two', value: CommonSceneUrl.img + 'line-vertebral-blue.png' },
        { label: 'fence', value: CommonSceneUrl.img + 'fence.png' },
        { label: 'fence-top', value: CommonSceneUrl.img + 'fence-top.png' },
        { label: 'fence-line', value: CommonSceneUrl.img + 'fence-line.png' },
        { label: 'arrow', value: CommonSceneUrl.img + 'arrow.png' },
        { label: 'arrow-h', value: CommonSceneUrl.img + 'arrow-h.png' },
    ],
    mars3d__Reverse: [
        { value: true, label: '向上' },
        { value: false, label: '向下' },
    ],
    mars3d__Inner: [
        { value: true, label: '向内' },
        { value: false, label: '向外' },
    ],
    mars3d__orientation: [
        { value: false, label: '横向' },
        { value: true, label: '纵向' },
    ],
    mars3d__waterMaterial: [
        { label: '反射材质', value: CommonSceneUrl.img + 'waterNormals.jpg' },
        { label: '蓝光材质', value: CommonSceneUrl.img + 'poly-stone.jpg' },
    ],
    mars3d__tilesOutlineEffect: [
        { label: '描边高亮', value: true },
        { label: '本体高亮', value: false },
    ],
    mars3d__materialType: [
        { value: 'Color', label: '通用:纯色' },
        { value: 'RandomColor', label: '通用:随机色' },
        { value: 'PolylineArrow', label: '线状:箭头' },
        { value: 'ODLine', label: '线状:OD线' },
        { value: 'LineBloom', label: '线状:泛光线' },
        { value: 'LineTrail', label: '线状:轨迹线' },
        { value: 'LineFlicker', label: '线状:闪烁线' },
        { value: 'PolylineGlow', label: '线状:高亮线' },
        { value: 'LineFlowColor', label: '线状:流动颜色' },
        { value: 'LineDashArrow', label: '线状:箭头虚线(仅适用线)' },
        { value: 'LineThreeDash', label: '线状:三条平行虚线(仅适用线)' },
        { value: 'PolylineDash', label: '线状:虚线(仅适用线)' },
        { value: 'LineDotDash', label: '线状:点划线虚线(仅适用线)' },
        { value: 'LineCross', label: '线状:十字形间隔线(仅适用线)' },
        { value: 'PolylineOutline', label: '线状:衬色线(仅适用线)' },
        { value: 'LineFlow', label: '线状:流动图片' },
        // { value: 'DigitalFlow', label: '线状:图片流动线' },
        { value: 'WallScroll', label: '墙体:走马灯效果' },
        { value: 'RectSlide', label: '矩形面:轮播图' },
        { value: 'ScanLine', label: '圆形:放大扩散线' },
        { value: 'RadarLine', label: '圆形:雷达线' },
        { value: 'RadarWave', label: '圆形:波纹雷达扫描' },
        { value: 'CircleWave', label: '圆形:波纹扩散' },
        { value: 'CylinderWave', label: '圆锥:条纹扩散' },
        { value: 'EllipsoidWave', label: '球体:波纹球体' },
        { value: 'EllipsoidElectric', label: '球体:电弧球体' },
        { value: 'Checkerboard', label: '面状:棋盘' },
        { value: 'Grid', label: '面状:网格' },
        { value: 'Image', label: '面状:图片' },
        { value: 'NeonLight', label: '面状:霓虹灯材质' },
        { value: 'PolyAsphalt', label: '面状:柏油路面效果' },
        { value: 'PolyBlob', label: '面状:混合' },
        { value: 'PolyFacet', label: '面状:碎石面' },
        { value: 'PolyGradient', label: '面状:渐变面' },
        { value: 'PolyGrass', label: '面状:草地面' },
        { value: 'PolyWood', label: '面状:木材面' },
        { value: 'Stripe', label: '面状:条纹' },
        // { value: 'Text', label: '面状:文字贴图' }, // 报错 无法截取?
        { value: 'Water', label: '面状:水面材质' },
        { value: 'WaterLight', label: '面状:蓝色光线波纹' },
    ],

    // TODO 元素字段类型
    mars3d__fieldsType: [
        { label: '分组', value: 'group' },
        { label: '元素', value: 'element' },
    ],
    mars3d__fieldsTypeA02: [
        { label: '分组', value: 'group' },
        { label: '模型', value: 'tiles' },
    ],



    // Theme__TemplateList: [
    //     {
    //         value: 'vChart',
    //         label: '图例模板',
    //         children: [
    //             { value: 'chartA01', label: '折线图&面积图' },


    //         ],
    //     }
    // ],    
    mars3d__elementType: [
        // {
        //     value: 'A02',
        //     label: '线',
        //     selectable: false,
        //     children: [

        //     ]
        // },



        {
            value: 'A01',
            label: '点元素',
            selectable: false,
            children: [
                { value: 'labelP', label: '文本点' },
                { value: 'pointP', label: '像素点' },
                { value: 'billboardP', label: '图标点' },
                { value: 'tetrahedron', label: '四面体' },
                { value: 'div', label: 'DIV点' },
                { value: 'divLightPoint', label: '扩散点' },
                { value: 'divUpLabel', label: '竖向点' },
                { value: 'divBoderLabel', label: '动态点' },
                { value: 'modelP', label: '小模型' },
            ]
        },
        {
            value: 'A02',
            label: '线元素',
            selectable: false,
            children: [
                { value: 'polylineP', label: '直线' },
                { value: 'curve', label: '曲线' },
                { value: 'corridorP', label: '走廊' },
                { value: 'road', label: '路面' },
                { value: 'wallP', label: '墙面' },
                { value: 'diffuseWall', label: '扩散墙' },
                { value: 'thickWall', label: '厚度墙' },
            ]
        },
        {
            value: 'A03',
            label: '面',
            selectable: false,
            children: [
                // { value: 'planeP', label: '平面' },
                { value: 'polygonP', label: '平面' },
                { value: 'rectangleP', label: '矩形' },
                { value: 'circleP', label: '圆形' },
                { value: 'sector', label: '扇形' },
                { value: 'attackArrow', label: '攻击箭头' },
                { value: 'attackArrowPW', label: '攻击箭头(平尾)' },
                { value: 'attackArrowYW', label: '攻击箭头(燕尾)' },
                { value: 'doubleArrow', label: '攻击箭头(钳击)' },
                { value: 'fineArrow', label: '直箭头' },
                { value: 'fineArrowYW', label: '直箭头(燕尾)' },
                { value: 'straightArrow', label: '直箭头(对齐)' },
                { value: 'lune', label: '弓形面(3个点)' },
                { value: 'isosTriangle', label: '等腰三角形(3个点)' },
                { value: 'closeVurve', label: '闭合曲面(3个点)' },
                { value: 'gatheringPlace', label: '集结地(3个点)' },
            ]
        },
        {
            value: 'A04',
            label: '体',
            selectable: false,
            children: [
                { value: 'boxP', label: '盒子' },
                { value: 'cylinderP', label: '圆锥' },
                { value: 'lightCone', label: '光锥体' },
                { value: 'ellipsoidP', label: '球体' },
                // { value: 'regular', label: '正多边形' },
            ]
        },
    ],
    mars3d_classificationType: [
        { label: '只对地形', value: 0 },
        { label: '只对模型', value: 1 },
        { label: '两者都有', value: 2 },
    ],

    // TODO 图标点图片
    mars3d__billboardImage: [
        { label: '蓝色起点', value: CommonSceneUrl.img + 'route-start.png' },
        { label: '红色终点', value: CommonSceneUrl.img + 'route-end.png' },
        { label: '红色楼房', value: CommonSceneUrl.img + 'mark-red.png' },
        { label: '绿色水滴', value: CommonSceneUrl.img + 'mark-green.png' },
        { label: '蓝色路标', value: CommonSceneUrl.img + 'mark-blue.png' },
        { label: '蓝色标识', value: CommonSceneUrl.img + 'lace-blue.png' },
        { label: '红色标识', value: CommonSceneUrl.img + 'lace-red.png' },
        { label: '黄色标识', value: CommonSceneUrl.img + 'lace-yellow.png' },
        { label: '红色定位', value: CommonSceneUrl.img + 'point-red.png' },
        { label: '橙色定位', value: CommonSceneUrl.img + 'point-orange.png' },
        { label: '黄色定位', value: CommonSceneUrl.img + 'point-yellow.png' },
    ],
    // TODO 自定义div模板
    mars3d__divTemplate: [
        { value: 'A01', label: '一号版' },
        { value: 'A02', label: '二号版' },
        { value: 'A03', label: '三号版' },
    ],
    // TODO 管道形状
    mars3d__shape: [
        { value: 'pipeline', label: '空心' },
        { value: 'circle', label: '实心' },
        { value: 'star', label: '星状' },
    ],
    // TODO 走廊拐角
    mars3d__cornerType: [
        { value: 0, label: '圆滑' },
        { value: 1, label: '斜接' },
        { value: 2, label: '斜切' },
    ],
    // TODO 轴方向
    mars3d__planeNormal: [
        { value: 'x', label: 'X轴' },
        { value: 'y', label: 'Y轴' },
        { value: 'z', label: 'Z轴' },
    ],

    // !!! 省市区县
    // 省市县
    mapTiles: [
        {
            title: '中华人民共和国',
            value: '100000',
            children: [
                {
                    title: '北京市',
                    value: '110000',
                    children: [
                        { title: '东城区', value: '110101' },
                        { title: '西城区', value: '110102' },
                        { title: '朝阳区', value: '110105' },
                        { title: '丰台区', value: '110106' },
                        { title: '石景山区', value: '110107' },
                        { title: '海淀区', value: '110108' },
                        { title: '门头沟区', value: '110109' },
                        { title: '房山区', value: '110111' },
                        { title: '通州区', value: '110112' },
                        { title: '顺义区', value: '110113' },
                        { title: '昌平区', value: '110114' },
                        { title: '大兴区', value: '110115' },
                        { title: '怀柔区', value: '110116' },
                        { title: '平谷区', value: '110117' },
                        { title: '密云区', value: '110118' },
                        { title: '延庆区', value: '110119' },
                    ]
                },
                {
                    title: '天津市',
                    value: '120000',
                    children: [
                        { title: '和平区', value: '120101' },
                        { title: '河东区', value: '120102' },
                        { title: '河西区', value: '120103' },
                        { title: '南开区', value: '120104' },
                        { title: '河北区', value: '120105' },
                        { title: '红桥区', value: '120106' },
                        { title: '东丽区', value: '120110' },
                        { title: '西青区', value: '120111' },
                        { title: '津南区', value: '120112' },
                        { title: '北辰区', value: '120113' },
                        { title: '武清区', value: '120114' },
                        { title: '宝坻区', value: '120115' },
                        { title: '滨海新区', value: '120116' },
                        { title: '宁河区', value: '120117' },
                        { title: '静海区', value: '120118' },
                        { title: '蓟州区', value: '120119' },
                    ]
                },
                {
                    title: '河北省',
                    value: '130000',
                    children: [
                        {
                            title: '石家庄市',
                            value: '130100',
                            children: [
                                { title: '长安区', value: '130102' },
                                { title: '桥西区', value: '130104' },
                                { title: '新华区', value: '130105' },
                                { title: '井陉矿区', value: '130107' },
                                { title: '裕华区', value: '130108' },
                                { title: '藁城区', value: '130109' },
                                { title: '鹿泉区', value: '130110' },
                                { title: '栾城区', value: '130111' },
                                { title: '井陉县', value: '130121' },
                                { title: '正定县', value: '130123' },
                                { title: '行唐县', value: '130125' },
                                { title: '灵寿县', value: '130126' },
                                { title: '高邑县', value: '130127' },
                                { title: '深泽县', value: '130128' },
                                { title: '赞皇县', value: '130129' },
                                { title: '无极县', value: '130130' },
                                { title: '平山县', value: '130131' },
                                { title: '元氏县', value: '130132' },
                                { title: '赵县', value: '130133' },
                                { title: '辛集市', value: '130181' },
                                { title: '晋州市', value: '130183' },
                                { title: '新乐市', value: '130184' },
                            ]
                        },
                        {
                            title: '唐山市',
                            value: '130200',
                            children: [
                                { title: '路南区', value: '130202' },
                                { title: '路北区', value: '130203' },
                                { title: '古冶区', value: '130204' },
                                { title: '开平区', value: '130205' },
                                { title: '丰南区', value: '130207' },
                                { title: '丰润区', value: '130208' },
                                { title: '曹妃甸区', value: '130209' },
                                { title: '滦南县', value: '130224' },
                                { title: '乐亭县', value: '130225' },
                                { title: '迁西县', value: '130227' },
                                { title: '玉田县', value: '130229' },
                                { title: '遵化市', value: '130281' },
                                { title: '迁安市', value: '130283' },
                                { title: '滦州市', value: '130284' },
                            ]
                        },
                        {
                            title: '秦皇岛市',
                            value: '130300',
                            children: [
                                { title: '海港区', value: '130302' },
                                { title: '山海关区', value: '130303' },
                                { title: '北戴河区', value: '130304' },
                                { title: '抚宁区', value: '130306' },
                                { title: '青龙满族自治县', value: '130321' },
                                { title: '昌黎县', value: '130322' },
                                { title: '卢龙县', value: '130324' },
                            ]
                        },
                        {
                            title: '邯郸市',
                            value: '130400',
                            children: [
                                { title: '邯山区', value: '130402' },
                                { title: '丛台区', value: '130403' },
                                { title: '复兴区', value: '130404' },
                                { title: '峰峰矿区', value: '130406' },
                                { title: '肥乡区', value: '130407' },
                                { title: '永年区', value: '130408' },
                                { title: '临漳县', value: '130423' },
                                { title: '成安县', value: '130424' },
                                { title: '大名县', value: '130425' },
                                { title: '涉县', value: '130426' },
                                { title: '磁县', value: '130427' },
                                { title: '邱县', value: '130430' },
                                { title: '鸡泽县', value: '130431' },
                                { title: '广平县', value: '130432' },
                                { title: '馆陶县', value: '130433' },
                                { title: '魏县', value: '130434' },
                                { title: '曲周县', value: '130435' },
                                { title: '武安市', value: '130481' },
                            ]
                        },
                        {
                            title: '邢台市',
                            value: '130500',
                            children: [
                                { title: '襄都区', value: '130502' },
                                { title: '信都区', value: '130503' },
                                { title: '任泽区', value: '130505' },
                                { title: '南和区', value: '130506' },
                                { title: '临城县', value: '130522' },
                                { title: '内丘县', value: '130523' },
                                { title: '柏乡县', value: '130524' },
                                { title: '隆尧县', value: '130525' },
                                { title: '宁晋县', value: '130528' },
                                { title: '巨鹿县', value: '130529' },
                                { title: '新河县', value: '130530' },
                                { title: '广宗县', value: '130531' },
                                { title: '平乡县', value: '130532' },
                                { title: '威县', value: '130533' },
                                { title: '清河县', value: '130534' },
                                { title: '临西县', value: '130535' },
                                { title: '南宫市', value: '130581' },
                                { title: '沙河市', value: '130582' },
                            ]
                        },
                        {
                            title: '保定市',
                            value: '130600',
                            children: [
                                { title: '竞秀区', value: '130602' },
                                { title: '莲池区', value: '130606' },
                                { title: '满城区', value: '130607' },
                                { title: '清苑区', value: '130608' },
                                { title: '徐水区', value: '130609' },
                                { title: '涞水县', value: '130623' },
                                { title: '阜平县', value: '130624' },
                                { title: '定兴县', value: '130626' },
                                { title: '唐县', value: '130627' },
                                { title: '高阳县', value: '130628' },
                                { title: '容城县', value: '130629' },
                                { title: '涞源县', value: '130630' },
                                { title: '望都县', value: '130631' },
                                { title: '安新县', value: '130632' },
                                { title: '易县', value: '130633' },
                                { title: '曲阳县', value: '130634' },
                                { title: '蠡县', value: '130635' },
                                { title: '顺平县', value: '130636' },
                                { title: '博野县', value: '130637' },
                                { title: '雄县', value: '130638' },
                                { title: '涿州市', value: '130681' },
                                { title: '定州市', value: '130682' },
                                { title: '安国市', value: '130683' },
                                { title: '高碑店市', value: '130684' },
                            ]
                        },
                        {
                            title: '张家口市',
                            value: '130700',
                            children: [
                                { title: '桥东区', value: '130702' },
                                { title: '桥西区', value: '130703' },
                                { title: '宣化区', value: '130705' },
                                { title: '下花园区', value: '130706' },
                                { title: '万全区', value: '130708' },
                                { title: '崇礼区', value: '130709' },
                                { title: '张北县', value: '130722' },
                                { title: '康保县', value: '130723' },
                                { title: '沽源县', value: '130724' },
                                { title: '尚义县', value: '130725' },
                                { title: '蔚县', value: '130726' },
                                { title: '阳原县', value: '130727' },
                                { title: '怀安县', value: '130728' },
                                { title: '怀来县', value: '130730' },
                                { title: '涿鹿县', value: '130731' },
                                { title: '赤城县', value: '130732' },
                            ]
                        },
                        {
                            title: '承德市',
                            value: '130800',
                            children: [
                                { title: '双桥区', value: '130802' },
                                { title: '双滦区', value: '130803' },
                                { title: '鹰手营子矿区', value: '130804' },
                                { title: '承德县', value: '130821' },
                                { title: '兴隆县', value: '130822' },
                                { title: '滦平县', value: '130824' },
                                { title: '隆化县', value: '130825' },
                                { title: '丰宁满族自治县', value: '130826' },
                                { title: '宽城满族自治县', value: '130827' },
                                { title: '围场满族蒙古族自治县', value: '130828' },
                                { title: '平泉市', value: '130881' },
                            ]
                        },
                        {
                            title: '沧州市',
                            value: '130900',
                            children: [
                                { title: '新华区', value: '130902' },
                                { title: '运河区', value: '130903' },
                                { title: '沧县', value: '130921' },
                                { title: '青县', value: '130922' },
                                { title: '东光县', value: '130923' },
                                { title: '海兴县', value: '130924' },
                                { title: '盐山县', value: '130925' },
                                { title: '肃宁县', value: '130926' },
                                { title: '南皮县', value: '130927' },
                                { title: '吴桥县', value: '130928' },
                                { title: '献县', value: '130929' },
                                { title: '孟村回族自治县', value: '130930' },
                                { title: '泊头市', value: '130981' },
                                { title: '任丘市', value: '130982' },
                                { title: '黄骅市', value: '130983' },
                                { title: '河间市', value: '130984' },
                            ]
                        },
                        {
                            title: '廊坊市',
                            value: '131000',
                            children: [
                                { title: '安次区', value: '131002' },
                                { title: '广阳区', value: '131003' },
                                { title: '固安县', value: '131022' },
                                { title: '永清县', value: '131023' },
                                { title: '香河县', value: '131024' },
                                { title: '大城县', value: '131025' },
                                { title: '文安县', value: '131026' },
                                { title: '大厂回族自治县', value: '131028' },
                                { title: '霸州市', value: '131081' },
                                { title: '三河市', value: '131082' },
                            ]
                        },
                        {
                            title: '衡水市',
                            value: '131100',
                            children: [
                                { title: '桃城区', value: '131102' },
                                { title: '冀州区', value: '131103' },
                                { title: '枣强县', value: '131121' },
                                { title: '武邑县', value: '131122' },
                                { title: '武强县', value: '131123' },
                                { title: '饶阳县', value: '131124' },
                                { title: '安平县', value: '131125' },
                                { title: '故城县', value: '131126' },
                                { title: '景县', value: '131127' },
                                { title: '阜城县', value: '131128' },
                                { title: '深州市', value: '131182' },
                            ]
                        },
                    ]
                },
                {
                    title: '山西省',
                    value: '140000',
                    children: [
                        {
                            title: '太原市',
                            value: '140100',
                            children: [
                                { title: '小店区', value: '140105' },
                                { title: '迎泽区', value: '140106' },
                                { title: '杏花岭区', value: '140107' },
                                { title: '尖草坪区', value: '140108' },
                                { title: '万柏林区', value: '140109' },
                                { title: '晋源区', value: '140110' },
                                { title: '清徐县', value: '140121' },
                                { title: '阳曲县', value: '140122' },
                                { title: '娄烦县', value: '140123' },
                                { title: '古交市', value: '140181' }
                            ]
                        },
                        {
                            title: '大同市',
                            value: '140200',
                            children: [
                                { title: '新荣区', value: '140212' },
                                { title: '平城区', value: '140213' },
                                { title: '云冈区', value: '140214' },
                                { title: '云州区', value: '140215' },
                                { title: '阳高县', value: '140221' },
                                { title: '天镇县', value: '140222' },
                                { title: '广灵县', value: '140223' },
                                { title: '灵丘县', value: '140224' },
                                { title: '浑源县', value: '140225' },
                                { title: '左云县', value: '140226' },
                            ]
                        },
                        {
                            title: '阳泉市',
                            value: '140300',
                            children: [
                                { title: '城区', value: '140302' },
                                { title: '矿区', value: '140303' },
                                { title: '郊区', value: '140311' },
                                { title: '平定县', value: '140321' },
                                { title: '盂县', value: '140322' },
                            ]
                        },
                        {
                            title: '长治市',
                            value: '140400',
                            children: [
                                { title: '潞州区', value: '140403' },
                                { title: '上党区', value: '140404' },
                                { title: '屯留区', value: '140405' },
                                { title: '潞城区', value: '140406' },
                                { title: '襄垣县', value: '140423' },
                                { title: '平顺县', value: '140425' },
                                { title: '黎城县', value: '140426' },
                                { title: '壶关县', value: '140427' },
                                { title: '长子县', value: '140428' },
                                { title: '武乡县', value: '140429' },
                                { title: '沁县', value: '140430' },
                                { title: '沁源县', value: '140431' },
                            ]
                        },
                        {
                            title: '晋城市',
                            value: '140500',
                            children: [
                                { title: '城区', value: '140502' },
                                { title: '沁水县', value: '140521' },
                                { title: '阳城县', value: '140522' },
                                { title: '陵川县', value: '140524' },
                                { title: '泽州县', value: '140525' },
                                { title: '高平市', value: '140581' },
                            ]
                        },
                        {
                            title: '朔州市',
                            value: '140600',
                            children: [
                                { title: '朔城区', value: '140602' },
                                { title: '平鲁区', value: '140603' },
                                { title: '山阴县', value: '140621' },
                                { title: '应县', value: '140622' },
                                { title: '右玉县', value: '140623' },
                                { title: '怀仁市', value: '140681' },
                            ]
                        },
                        {
                            title: '晋中市',
                            value: '140700',
                            children: [
                                { title: '榆次区', value: '140702' },
                                { title: '太谷区', value: '140703' },
                                { title: '榆社县', value: '140721' },
                                { title: '左权县', value: '140722' },
                                { title: '和顺县', value: '140723' },
                                { title: '昔阳县', value: '140724' },
                                { title: '寿阳县', value: '140725' },
                                { title: '祁县', value: '140727' },
                                { title: '平遥县', value: '140728' },
                                { title: '灵石县', value: '140729' },
                                { title: '介休市', value: '140781' },
                            ]
                        },
                        {
                            title: '运城市',
                            value: '140800',
                            children: [
                                { title: '盐湖区', value: '140802' },
                                { title: '临猗县', value: '140821' },
                                { title: '万荣县', value: '140822' },
                                { title: '闻喜县', value: '140823' },
                                { title: '稷山县', value: '140824' },
                                { title: '新绛县', value: '140825' },
                                { title: '绛县', value: '140826' },
                                { title: '垣曲县', value: '140827' },
                                { title: '夏县', value: '140828' },
                                { title: '平陆县', value: '140829' },
                                { title: '芮城县', value: '140830' },
                                { title: '永济市', value: '140881' },
                                { title: '河津市', value: '140882' },
                            ]
                        },
                        {
                            title: '忻州市',
                            value: '140900',
                            children: [
                                { title: '忻府区', value: '140902' },
                                { title: '定襄县', value: '140921' },
                                { title: '五台县', value: '140922' },
                                { title: '代县', value: '140923' },
                                { title: '繁峙县', value: '140924' },
                                { title: '宁武县', value: '140925' },
                                { title: '静乐县', value: '140926' },
                                { title: '神池县', value: '140927' },
                                { title: '五寨县', value: '140928' },
                                { title: '岢岚县', value: '140929' },
                                { title: '河曲县', value: '140930' },
                                { title: '保德县', value: '140931' },
                                { title: '偏关县', value: '140932' },
                                { title: '原平市', value: '140981' },
                            ]
                        },
                        {
                            title: '临汾市',
                            value: '141000',
                            children: [
                                { title: '尧都区', value: '141002' },
                                { title: '曲沃县', value: '141021' },
                                { title: '翼城县', value: '141022' },
                                { title: '襄汾县', value: '141023' },
                                { title: '洪洞县', value: '141024' },
                                { title: '古县', value: '141025' },
                                { title: '安泽县', value: '141026' },
                                { title: '浮山县', value: '141027' },
                                { title: '吉县', value: '141028' },
                                { title: '乡宁县', value: '141029' },
                                { title: '大宁县', value: '141030' },
                                { title: '隰县', value: '141031' },
                                { title: '永和县', value: '141032' },
                                { title: '蒲县', value: '141033' },
                                { title: '汾西县', value: '141034' },
                                { title: '侯马市', value: '141081' },
                                { title: '霍州市', value: '141082' },
                            ]
                        },
                        {
                            title: '吕梁市',
                            value: '141100',
                            children: [
                                { title: '离石区', value: '141102' },
                                { title: '文水县', value: '141121' },
                                { title: '交城县', value: '141122' },
                                { title: '兴县', value: '141123' },
                                { title: '临县', value: '141124' },
                                { title: '柳林县', value: '141125' },
                                { title: '石楼县', value: '141126' },
                                { title: '岚县', value: '141127' },
                                { title: '方山县', value: '141128' },
                                { title: '中阳县', value: '141129' },
                                { title: '交口县', value: '141130' },
                                { title: '孝义市', value: '141181' },
                                { title: '汾阳市', value: '141182' },
                            ]
                        },
                    ]
                },
                {
                    title: '内蒙古自治区',
                    value: '150000',
                    children: [
                        {
                            title: '呼和浩特市',
                            value: '150100',
                            children: [
                                { title: '新城区', value: '150102' },
                                { title: '回民区', value: '150103' },
                                { title: '玉泉区', value: '150104' },
                                { title: '赛罕区', value: '150105' },
                                { title: '土默特左旗', value: '150121' },
                                { title: '托克托县', value: '150122' },
                                { title: '和林格尔县', value: '150123' },
                                { title: '清水河县', value: '150124' },
                                { title: '武川县', value: '150125' },
                            ]
                        },
                        {
                            title: '包头市',
                            value: '150200',
                            children: [
                                { value: '150202', title: '东河区' },
                                { value: '150203', title: '昆都仑区' },
                                { value: '150204', title: '青山区' },
                                { value: '150205', title: '石拐区' },
                                { value: '150206', title: '白云鄂博矿区' },
                                { value: '150207', title: '九原区' },
                                { value: '150221', title: '土默特右旗' },
                                { value: '150222', title: '固阳县' },
                                { value: '150223', title: '达尔罕茂明安联合旗' },
                            ]
                        },
                        {
                            title: '赤峰市',
                            value: '150400',
                            children: [
                                { value: '150402', title: '红山区' },
                                { value: '150403', title: '元宝山区' },
                                { value: '150404', title: '松山区' },
                                { value: '150421', title: '阿鲁科尔沁旗' },
                                { value: '150422', title: '巴林左旗' },
                                { value: '150423', title: '巴林右旗' },
                                { value: '150424', title: '林西县' },
                                { value: '150425', title: '克什克腾旗' },
                                { value: '150426', title: '翁牛特旗' },
                                { value: '150428', title: '喀喇沁旗' },
                                { value: '150429', title: '宁城县' },
                                { value: '150430', title: '敖汉旗' },
                            ]
                        },
                        {
                            title: '通辽市',
                            value: '150500',
                            children: [
                                { value: '150502', title: '科尔沁区' },
                                { value: '150521', title: '科尔沁左翼中旗' },
                                { value: '150522', title: '科尔沁左翼后旗' },
                                { value: '150523', title: '开鲁县' },
                                { value: '150524', title: '库伦旗' },
                                { value: '150525', title: '奈曼旗' },
                                { value: '150526', title: '扎鲁特旗' },
                                { value: '150581', title: '霍林郭勒市' },
                            ]
                        },
                        {
                            title: '鄂尔多斯市',
                            value: '150600',
                            children: [
                                { value: '150602', title: '东胜区' },
                                { value: '150603', title: '康巴什区' },
                                { value: '150621', title: '达拉特旗' },
                                { value: '150622', title: '准格尔旗' },
                                { value: '150623', title: '鄂托克前旗' },
                                { value: '150624', title: '鄂托克旗' },
                                { value: '150625', title: '杭锦旗' },
                                { value: '150626', title: '乌审旗' },
                                { value: '150627', title: '伊金霍洛旗' },
                            ]
                        },
                        {
                            title: '呼伦贝尔市',
                            value: '150700',
                            children: [
                                { value: '150702', title: '海拉尔区' },
                                { value: '150721', title: '阿荣旗' },
                                { value: '150722', title: '莫力达瓦达斡尔族自治旗' },
                                { value: '150723', title: '鄂伦春自治旗' },
                                { value: '150724', title: '鄂温克族自治旗' },
                                { value: '150725', title: '陈巴尔虎旗' },
                                { value: '150726', title: '新巴尔虎左旗' },
                                { value: '150727', title: '新巴尔虎右旗' },
                                { value: '150782', title: '牙克石市' },
                                { value: '150783', title: '扎兰屯市' },
                                { value: '150784', title: '额尔古纳市' },
                                { value: '150785', title: '根河市' },
                            ]
                        },
                        {
                            title: '巴彦淖尔市',
                            value: '150800',
                            children: [
                                { value: '150802', title: '临河区' },
                                { value: '150821', title: '五原县' },
                                { value: '150822', title: '磴口县' },
                                { value: '150823', title: '乌拉特前旗' },
                                { value: '150824', title: '乌拉特中旗' },
                                { value: '150825', title: '乌拉特后旗' },
                                { value: '150826', title: '杭锦后旗' },
                            ]
                        },
                        {
                            title: '乌兰察布市',
                            value: '150900',
                            children: [
                                { value: '150902', title: '集宁区' },
                                { value: '150921', title: '卓资县' },
                                { value: '150922', title: '化德县' },
                                { value: '150923', title: '商都县' },
                                { value: '150924', title: '兴和县' },
                                { value: '150925', title: '凉城县' },
                                { value: '150926', title: '察哈尔右翼前旗' },
                                { value: '150927', title: '察哈尔右翼中旗' },
                                { value: '150928', title: '察哈尔右翼后旗' },
                                { value: '150929', title: '四子王旗' },
                                { value: '150981', title: '丰镇市' },
                            ]
                        },
                        {
                            title: '兴安盟',
                            value: '152200',
                            children: [
                                { value: '152201', title: '乌兰浩特市' },
                                { value: '152202', title: '阿尔山市' },
                                { value: '152221', title: '科尔沁右翼前旗' },
                                { value: '152222', title: '科尔沁右翼中旗' },
                                { value: '152223', title: '扎赉特旗' },
                                { value: '152224', title: '突泉县' },
                            ]
                        },
                        {
                            title: '锡林郭勒盟',
                            value: '152500',
                            children: [
                                { value: '152501', title: '二连浩特市' },
                                { value: '152502', title: '锡林浩特市' },
                                { value: '152522', title: '阿巴嘎旗' },
                                { value: '152523', title: '苏尼特左旗' },
                                { value: '152524', title: '苏尼特右旗' },
                                { value: '152525', title: '东乌珠穆沁旗' },
                                { value: '152526', title: '西乌珠穆沁旗' },
                                { value: '152527', title: '太仆寺旗' },
                                { value: '152528', title: '镶黄旗' },
                                { value: '152529', title: '正镶白旗' },
                                { value: '152530', title: '正蓝旗' },
                                { value: '152531', title: '多伦县' },
                            ]
                        },
                        {
                            title: '阿拉善盟',
                            value: '152900',
                            children: [
                                { value: '152921', title: '阿拉善左旗' },
                                { value: '152922', title: '阿拉善右旗' },
                                { value: '152923', title: '额济纳旗' },
                            ]
                        },
                    ]
                },
                {
                    title: '辽宁省',
                    value: '210000',
                    children: [
                        {
                            title: '沈阳市',
                            value: '210100',
                            children: [
                                { value: '210102', title: '和平区' },
                                { value: '210103', title: '沈河区' },
                                { value: '210104', title: '大东区' },
                                { value: '210105', title: '皇姑区' },
                                { value: '210106', title: '铁西区' },
                                { value: '210111', title: '苏家屯区' },
                                { value: '210112', title: '浑南区' },
                                { value: '210113', title: '沈北新区' },
                                { value: '210114', title: '于洪区' },
                                { value: '210115', title: '辽中区' },
                                { value: '210123', title: '康平县' },
                                { value: '210124', title: '法库县' },
                                { value: '210181', title: '新民市' },
                            ]
                        },
                        {
                            title: '大连市',
                            value: '210200',
                            children: [
                                { value: '210202', title: '中山区' },
                                { value: '210203', title: '西岗区' },
                                { value: '210204', title: '沙河口区' },
                                { value: '210211', title: '甘井子区' },
                                { value: '210212', title: '旅顺口区' },
                                { value: '210213', title: '金州区' },
                                { value: '210214', title: '普兰店区' },
                                { value: '210281', title: '瓦房店市' },
                                { value: '210283', title: '庄河市' },
                            ]
                        },
                        {
                            title: '鞍山市',
                            value: '210300',
                            children: [
                                { value: '210302', title: '铁东区' },
                                { value: '210303', title: '铁西区' },
                                { value: '210304', title: '立山区' },
                                { value: '210311', title: '千山区' },
                                { value: '210321', title: '台安县' },
                                { value: '210323', title: '岫岩满族自治县' },
                                { value: '210381', title: '海城市' },
                            ]
                        },
                        {
                            title: '抚顺市',
                            value: '210400',
                            children: [
                                { value: '210402', title: '新抚区' },
                                { value: '210403', title: '东洲区' },
                                { value: '210404', title: '望花区' },
                                { value: '210411', title: '顺城区' },
                                { value: '210421', title: '抚顺县' },
                                { value: '210422', title: '新宾满族自治县' },
                                { value: '210423', title: '清原满族自治县' },
                            ]
                        },
                        {
                            title: '本溪市',
                            value: '210500',
                            children: [
                                { value: '210502', title: '平山区' },
                                { value: '210503', title: '溪湖区' },
                                { value: '210504', title: '明山区' },
                                { value: '210505', title: '南芬区' },
                                { value: '210521', title: '本溪满族自治县' },
                                { value: '210522', title: '桓仁满族自治县' },
                            ]
                        },
                        {
                            title: '丹东市',
                            value: '210600',
                            children: [
                                { value: '210602', title: '元宝区' },
                                { value: '210603', title: '振兴区' },
                                { value: '210604', title: '振安区' },
                                { value: '210624', title: '宽甸满族自治县' },
                                { value: '210681', title: '东港市' },
                                { value: '210682', title: '凤城市' },

                            ]
                        },
                        {
                            title: '锦州市',
                            value: '210700',
                            children: [
                                { value: '210702', title: '古塔区' },
                                { value: '210703', title: '凌河区' },
                                { value: '210711', title: '太和区' },
                                { value: '210726', title: '黑山县' },
                                { value: '210727', title: '义县' },
                                { value: '210781', title: '凌海市' },
                                { value: '210782', title: '北镇市' },
                            ]
                        },
                        {
                            title: '营口市',
                            value: '210800',
                            children: [
                                { value: '210802', title: '站前区' },
                                { value: '210803', title: '西市区' },
                                { value: '210811', title: '老边区' },
                                { value: '210881', title: '盖州市' },
                                { value: '210882', title: '大石桥市' },
                                { value: '210804', title: '鲅鱼圈区' },
                            ]
                        },
                        {
                            title: '阜新市',
                            value: '210900',
                            children: [
                                { value: '210902', title: '海州区' },
                                { value: '210903', title: '新邱区' },
                                { value: '210904', title: '太平区' },
                                { value: '210911', title: '细河区' },
                                { value: '210921', title: '阜新蒙古族自治县' },
                                { value: '210922', title: '彰武县' },
                            ]
                        },
                        {
                            title: '辽阳市',
                            value: '211000',
                            children: [
                                { value: '211002', title: '白塔区' },
                                { value: '211003', title: '文圣区' },
                                { value: '211004', title: '宏伟区' },
                                { value: '211005', title: '弓长岭区' },
                                { value: '211011', title: '太子河区' },
                                { value: '211021', title: '辽阳县' },
                                { value: '211081', title: '灯塔市' },
                            ]
                        },
                        {
                            title: '盘锦市',
                            value: '211100',
                            children: [
                                { value: '211102', title: '双台子区' },
                                { value: '211103', title: '兴隆台区' },
                                { value: '211104', title: '大洼区' },
                                { value: '211122', title: '盘山县' },
                            ]
                        },
                        {
                            title: '铁岭市',
                            value: '211200',
                            children: [
                                { value: '211202', title: '银州区' },
                                { value: '211204', title: '清河区' },
                                { value: '211221', title: '铁岭县' },
                                { value: '211223', title: '西丰县' },
                                { value: '211224', title: '昌图县' },
                                { value: '211282', title: '开原市' },
                            ]
                        },
                        {
                            title: '朝阳市',
                            value: '211300',
                            children: [
                                { value: '211302', title: '双塔区' },
                                { value: '211303', title: '龙城区' },
                                { value: '211321', title: '朝阳县' },
                                { value: '211322', title: '建平县' },
                                { value: '211324', title: '喀喇沁左翼蒙古族自治县' },
                                { value: '211381', title: '北票市' },
                                { value: '211382', title: '凌源市' },
                            ]
                        },
                        {
                            title: '葫芦岛市',
                            value: '211400',
                            children: [
                                { value: '211402', title: '连山区' },
                                { value: '211403', title: '龙港区' },
                                { value: '211404', title: '南票区' },
                                { value: '211421', title: '绥中县' },
                                { value: '211422', title: '建昌县' },
                                { value: '211481', title: '兴城市' },
                            ]
                        },
                    ]
                },
                {
                    title: '吉林省',
                    value: '220000',
                    children: [
                        {
                            title: '长春市',
                            value: '220100',
                            children: [
                                { value: '220102', title: '南关区' },
                                { value: '220103', title: '宽城区' },
                                { value: '220104', title: '朝阳区' },
                                { value: '220105', title: '二道区' },
                                { value: '220106', title: '绿园区' },
                                { value: '220112', title: '双阳区' },
                                { value: '220113', title: '九台区' },
                                { value: '220122', title: '农安县' },
                                { value: '220182', title: '榆树市' },
                                { value: '220183', title: '德惠市' },
                                { value: '220184', title: '公主岭市' },
                            ]
                        },
                        {
                            title: '吉林市',
                            value: '220200',
                            children: [
                                { value: '220202', title: '昌邑区' },
                                { value: '220203', title: '龙潭区' },
                                { value: '220204', title: '船营区' },
                                { value: '220211', title: '丰满区' },
                                { value: '220221', title: '永吉县' },
                                { value: '220281', title: '蛟河市' },
                                { value: '220282', title: '桦甸市' },
                                { value: '220283', title: '舒兰市' },
                                { value: '220284', title: '磐石市' },
                            ]
                        },
                        {
                            title: '四平市',
                            value: '220300',
                            children: [
                                { value: '220302', title: '铁西区' },
                                { value: '220303', title: '铁东区' },
                                { value: '220322', title: '梨树县' },
                                { value: '220323', title: '伊通满族自治县' },
                                { value: '220382', title: '双辽市' },
                            ]
                        },
                        {
                            title: '辽源市',
                            value: '220400',
                            children: [
                                { value: '220402', title: '龙山区' },
                                { value: '220403', title: '西安区' },
                                { value: '220421', title: '东丰县' },
                                { value: '220422', title: '东辽县' },

                            ]
                        },
                        {
                            title: '通化市',
                            value: '220500',
                            children: [
                                { value: '220502', title: '东昌区' },
                                { value: '220503', title: '二道江区' },
                                { value: '220521', title: '通化县' },
                                { value: '220523', title: '辉南县' },
                                { value: '220524', title: '柳河县' },
                                { value: '220581', title: '梅河口市' },
                                { value: '220582', title: '集安市' },
                            ]
                        },
                        {
                            title: '白山市',
                            value: '220600',
                            children: [
                                { value: '220602', title: '浑江区' },
                                { value: '220605', title: '江源区' },
                                { value: '220621', title: '抚松县' },
                                { value: '220622', title: '靖宇县' },
                                { value: '220623', title: '长白朝鲜族自治县' },
                                { value: '220681', title: '临江市' },
                            ]
                        },
                        {
                            title: '松原市',
                            value: '220700',
                            children: [
                                { value: '220702', title: '宁江区' },
                                { value: '220721', title: '前郭尔罗斯蒙古族自治县' },
                                { value: '220722', title: '长岭县' },
                                { value: '220723', title: '乾安县' },
                                { value: '220781', title: '扶余市' },
                            ]
                        },
                        {
                            title: '白城市',
                            value: '220800',
                            children: [
                                { value: '220802', title: '洮北区' },
                                { value: '220821', title: '镇赉县' },
                                { value: '220822', title: '通榆县' },
                                { value: '220881', title: '洮南市' },
                                { value: '220882', title: '大安市' },
                            ]
                        },
                        {
                            title: '延边朝鲜族自治州',
                            value: '222400',
                            children: [
                                { value: '222401', title: '延吉市' },
                                { value: '222402', title: '图们市' },
                                { value: '222403', title: '敦化市' },
                                { value: '222404', title: '珲春市' },
                                { value: '222405', title: '龙井市' },
                                { value: '222406', title: '和龙市' },
                                { value: '222424', title: '汪清县' },
                                { value: '222426', title: '安图县' },
                            ]
                        },
                    ]
                },
                {
                    title: '黑龙江省',
                    value: '230000',
                    children: [
                        {
                            title: '哈尔滨市',
                            value: '230100',
                            children: [
                                { title: '道里区', value: '230102' },
                                { title: '南岗区', value: '230103' },
                                { title: '道外区', value: '230104' },
                                { title: '平房区', value: '230108' },
                                { title: '松北区', value: '230109' },
                                { title: '香坊区', value: '230110' },
                                { title: '呼兰区', value: '230111' },
                                { title: '阿城区', value: '230112' },
                                { title: '双城区', value: '230113' },
                                { title: '依兰县', value: '230123' },
                                { title: '方正县', value: '230124' },
                                { title: '宾县', value: '230125' },
                                { title: '巴彦县', value: '230126' },
                                { title: '木兰县', value: '230127' },
                                { title: '通河县', value: '230128' },
                                { title: '延寿县', value: '230129' },
                                { title: '尚志市', value: '230183' },
                                { title: '五常市', value: '230184' },
                            ]
                        },
                        {
                            title: '齐齐哈尔市',
                            value: '230200',
                            children: [
                                { title: '龙沙区', value: '230202' },
                                { title: '建华区', value: '230203' },
                                { title: '铁锋区', value: '230204' },
                                { title: '昂昂溪区', value: '230205' },
                                { title: '富拉尔基区', value: '230206' },
                                { title: '碾子山区', value: '230207' },
                                { title: '梅里斯达斡尔族区', value: '230208' },
                                { title: '龙江县', value: '230221' },
                                { title: '依安县', value: '230223' },
                                { title: '泰来县', value: '230224' },
                                { title: '甘南县', value: '230225' },
                                { title: '富裕县', value: '230227' },
                                { title: '克山县', value: '230229' },
                                { title: '克东县', value: '230230' },
                                { title: '拜泉县', value: '230231' },
                                { title: '讷河市', value: '230281' },
                            ]
                        },
                        {
                            title: '鸡西市',
                            value: '230300',
                            children: [
                                { title: '鸡冠区', value: '230302' },
                                { title: '恒山区', value: '230303' },
                                { title: '滴道区', value: '230304' },
                                { title: '梨树区', value: '230305' },
                                { title: '城子河区', value: '230306' },
                                { title: '麻山区', value: '230307' },
                                { title: '鸡东县', value: '230321' },
                                { title: '虎林市', value: '230381' },
                                { title: '密山市', value: '230382' },
                            ]
                        },
                        {
                            title: '鹤岗市',
                            value: '230400',
                            children: [
                                { title: '向阳区', value: '230402' },
                                { title: '工农区', value: '230403' },
                                { title: '南山区', value: '230404' },
                                { title: '兴安区', value: '230405' },
                                { title: '东山区', value: '230406' },
                                { title: '兴山区', value: '230407' },
                                { title: '萝北县', value: '230421' },
                                { title: '绥滨县', value: '230422' },
                            ]
                        },
                        {
                            title: '双鸭山市',
                            value: '230500',
                            children: [
                                { title: '尖山区', value: '230502' },
                                { title: '岭东区', value: '230503' },
                                { title: '四方台区', value: '230505' },
                                { title: '宝山区', value: '230506' },
                                { title: '集贤县', value: '230521' },
                                { title: '友谊县', value: '230522' },
                                { title: '宝清县', value: '230523' },
                                { title: '饶河县', value: '230524' },
                            ]
                        },
                        {
                            title: '大庆市',
                            value: '230600',
                            children: [
                                { title: '萨尔图区', value: '230602' },
                                { title: '龙凤区', value: '230603' },
                                { title: '让胡路区', value: '230604' },
                                { title: '林甸县', value: '230623' },
                                { title: '红岗区', value: '230605' },
                                { title: '大同区', value: '230606' },
                                { title: '肇州县', value: '230621' },
                                { title: '肇源县', value: '230622' },
                                { title: '杜尔伯特蒙古族自治县', value: '230624' },
                            ]
                        },
                        {
                            title: '伊春市',
                            value: '230700',
                            children: [
                                { title: '伊美区', value: '230717' },
                                { title: '乌翠区', value: '230718' },
                                { title: '友好区', value: '230719' },
                                { title: '嘉荫县', value: '230722' },
                                { title: '汤旺县', value: '230723' },
                                { title: '丰林县', value: '230724' },
                                { title: '大箐山县', value: '230725' },
                                { title: '南岔县', value: '230726' },
                                { title: '金林区', value: '230751' },
                                { title: '铁力市', value: '230781' },
                            ]
                        },
                        {
                            title: '佳木斯市',
                            value: '230800',
                            children: [
                                { title: '向阳区', value: '230803' },
                                { title: '前进区', value: '230804' },
                                { title: '东风区', value: '230805' },
                                { title: '郊区', value: '230811' },
                                { title: '桦南县', value: '230822' },
                                { title: '桦川县', value: '230826' },
                                { title: '汤原县', value: '230828' },
                                { title: '同江市', value: '230881' },
                                { title: '富锦市', value: '230882' },
                                { title: '抚远市', value: '230883' },
                            ]
                        },
                        {
                            title: '七台河市',
                            value: '230900',
                            children: [
                                { title: '新兴区', value: '230902' },
                                { title: '桃山区', value: '230903' },
                                { title: '茄子河区', value: '230904' },
                                { title: '勃利县', value: '230921' },
                            ]
                        },
                        {
                            title: '牡丹江市',
                            value: '231000',
                            children: [
                                { title: '东安区', value: '231002' },
                                { title: '阳明区', value: '231003' },
                                { title: '爱民区', value: '231004' },
                                { title: '西安区', value: '231005' },
                                { title: '林口县', value: '231025' },
                                { title: '绥芬河市', value: '231081' },
                                { title: '海林市', value: '231083' },
                                { title: '宁安市', value: '231084' },
                                { title: '穆棱市', value: '231085' },
                                { title: '东宁市', value: '231086' },
                            ]
                        },
                        {
                            title: '黑河市',
                            value: '231100',
                            children: [
                                { title: '爱辉区', value: '231102' },
                                { title: '逊克县', value: '231123' },
                                { title: '孙吴县', value: '231124' },
                                { title: '北安市', value: '231181' },
                                { title: '五大连池市', value: '231182' },
                                { title: '嫩江市', value: '231183' },
                            ]
                        },
                        {
                            title: '绥化市',
                            value: '231200',
                            children: [
                                { title: '北林区', value: '231202' },
                                { title: '望奎县', value: '231221' },
                                { title: '兰西县', value: '231222' },
                                { title: '青冈县', value: '231223' },
                                { title: '庆安县', value: '231224' },
                                { title: '明水县', value: '231225' },
                                { title: '绥棱县', value: '231226' },
                                { title: '安达市', value: '231281' },
                                { title: '肇东市', value: '231282' },
                                { title: '海伦市', value: '231283' },
                            ]
                        },
                        {
                            title: '大兴安岭地区',
                            value: '232700',
                            children: [
                                { title: '漠河市', value: '232701' },
                                { title: '加格达奇区', value: '232718' },
                                { title: '呼玛县', value: '232721' },
                                { title: '塔河县', value: '232722' },
                            ]
                        },
                    ]
                },
                {
                    title: '上海市',
                    value: '310000',
                    children: [
                        { title: '黄浦区', value: '310101' },
                        { title: '徐汇区', value: '310104' },
                        { title: '长宁区', value: '310105' },
                        { title: '静安区', value: '310106' },
                        { title: '普陀区', value: '310107' },
                        { title: '虹口区', value: '310109' },
                        { title: '杨浦区', value: '310110' },
                        { title: '闵行区', value: '310112' },
                        { title: '宝山区', value: '310113' },
                        { title: '嘉定区', value: '310114' },
                        { title: '浦东新区', value: '310115' },
                        { title: '金山区', value: '310116' },
                        { title: '松江区', value: '310117' },
                        { title: '青浦区', value: '310118' },
                        { title: '奉贤区', value: '310120' },
                        { title: '崇明区', value: '310151' },
                    ]
                },
                {
                    title: '江苏省',
                    value: '320000',
                    children: [
                        {
                            title: '南京市',
                            value: '320100',
                            children: [
                                { value: '320102', title: '玄武区' },
                                { value: '320104', title: '秦淮区' },
                                { value: '320105', title: '建邺区' },
                                { value: '320106', title: '鼓楼区' },
                                { value: '320111', title: '浦口区' },
                                { value: '320113', title: '栖霞区' },
                                { value: '320114', title: '雨花台区' },
                                { value: '320115', title: '江宁区' },
                                { value: '320117', title: '溧水区' },
                                { value: '320116', title: '六合区' },
                                { value: '320118', title: '高淳区' },
                            ]
                        },
                        {
                            title: '无锡市',
                            value: '320200',
                            children: [
                                { value: '320205', title: '锡山区' },
                                { value: '320206', title: '惠山区' },
                                { value: '320211', title: '滨湖区' },
                                { value: '320213', title: '梁溪区' },
                                { value: '320214', title: '新吴区' },
                                { value: '320281', title: '江阴市' },
                                { value: '320282', title: '宜兴市' },
                            ]
                        },
                        {
                            title: '徐州市',
                            value: '320300',
                            children: [
                                { value: '320302', title: '鼓楼区' },
                                { value: '320303', title: '云龙区' },
                                { value: '320305', title: '贾汪区' },
                                { value: '320311', title: '泉山区' },
                                { value: '320312', title: '铜山区' },
                                { value: '320321', title: '丰县' },
                                { value: '320322', title: '沛县' },
                                { value: '320324', title: '睢宁县' },
                                { value: '320381', title: '新沂市' },
                                { value: '320382', title: '邳州市' },
                            ]
                        },
                        {
                            title: '常州市',
                            value: '320400',
                            children: [
                                { value: '320402', title: '天宁区' },
                                { value: '320404', title: '钟楼区' },
                                { value: '320411', title: '新北区' },
                                { value: '320412', title: '武进区' },
                                { value: '320413', title: '金坛区' },
                                { value: '320481', title: '溧阳市' },
                            ]
                        },
                        {
                            title: '苏州市',
                            value: '320500',
                            children: [
                                { value: '320505', title: '虎丘区' },
                                { value: '320506', title: '吴中区' },
                                { value: '320507', title: '相城区' },
                                { value: '320508', title: '姑苏区' },
                                { value: '320509', title: '吴江区' },
                                { value: '320581', title: '常熟市' },
                                { value: '320582', title: '张家港市' },
                                { value: '320583', title: '昆山市' },
                                { value: '320585', title: '太仓市' },
                            ]
                        },
                        {
                            title: '南通市',
                            value: '320600',
                            children: [
                                { value: '320602', title: '崇川区' },
                                { value: '320612', title: '通州区' },
                                { value: '320623', title: '如东县' },
                                { value: '320681', title: '启东市' },
                                { value: '320682', title: '如皋市' },
                                { value: '320684', title: '海门区' },
                                { value: '320685', title: '海安市' },
                            ]
                        },
                        {
                            title: '连云港市',
                            value: '320700',
                            children: [
                                { value: '320703', title: '连云区' },
                                { value: '320706', title: '海州区' },
                                { value: '320707', title: '赣榆区' },
                                { value: '320722', title: '东海县' },
                                { value: '320723', title: '灌云县' },
                                { value: '320724', title: '灌南县' },
                            ]
                        },
                        {
                            title: '淮安市',
                            value: '320800',
                            children: [
                                { value: '320803', title: '淮安区' },
                                { value: '320804', title: '淮阴区' },
                                { value: '320812', title: '清江浦区' },
                                { value: '320813', title: '洪泽区' },
                                { value: '320826', title: '涟水县' },
                                { value: '320830', title: '盱眙县' },
                                { value: '320831', title: '金湖县' },
                            ]
                        },
                        {
                            title: '盐城市',
                            value: '320900',
                            children: [
                                { value: '320902', title: '亭湖区' },
                                { value: '320903', title: '盐都区' },
                                { value: '320904', title: '大丰区' },
                                { value: '320921', title: '响水县' },
                                { value: '320922', title: '滨海县' },
                                { value: '320923', title: '阜宁县' },
                                { value: '320924', title: '射阳县' },
                                { value: '320925', title: '建湖县' },
                                { value: '320981', title: '东台市' },
                            ]
                        },
                        {
                            title: '扬州市',
                            value: '321000',
                            children: [
                                { value: '321002', title: '广陵区' },
                                { value: '321003', title: '邗江区' },
                                { value: '321012', title: '江都区' },
                                { value: '321023', title: '宝应县' },
                                { value: '321081', title: '仪征市' },
                                { value: '321084', title: '高邮市' },
                            ]
                        },
                        {
                            title: '镇江市',
                            value: '321100',
                            children: [
                                { value: '321102', title: '京口区' },
                                { value: '321111', title: '润州区' },
                                { value: '321112', title: '丹徒区' },
                                { value: '321181', title: '丹阳市' },
                                { value: '321182', title: '扬中市' },
                                { value: '321183', title: '句容市' },
                            ]
                        },
                        {
                            title: '泰州市',
                            value: '321200',
                            children: [
                                { value: '321202', title: '海陵区' },
                                { value: '321203', title: '高港区' },
                                { value: '321204', title: '姜堰区' },
                                { value: '321281', title: '兴化市' },
                                { value: '321282', title: '靖江市' },
                                { value: '321283', title: '泰兴市' },
                            ]
                        },
                        {
                            title: '宿迁市',
                            value: '321300',
                            children: [
                                { value: '321302', title: '宿城区' },
                                { value: '321311', title: '宿豫区' },
                                { value: '321322', title: '沭阳县' },
                                { value: '321323', title: '泗阳县' },
                                { value: '321324', title: '泗洪县' },
                            ]
                        },
                    ]
                },
                {
                    title: '浙江省',
                    value: '330000',
                    children: [
                        {
                            title: '杭州市',
                            value: '330100',
                            children: [
                                { value: '330102', title: '上城区' },
                                { value: '330105', title: '拱墅区' },
                                { value: '330106', title: '西湖区' },
                                { value: '330108', title: '滨江区' },
                                { value: '330109', title: '萧山区' },
                                { value: '330110', title: '余杭区' },
                                { value: '330112', title: '临安区' },
                                { value: '330111', title: '富阳区' },
                                { value: '330113', title: '临平区' },
                                { value: '330114', title: '钱塘区' },
                                { value: '330122', title: '桐庐县' },
                                { value: '330127', title: '淳安县' },
                                { value: '330182', title: '建德市' },
                            ]
                        },
                        {
                            title: '宁波市',
                            value: '330200',
                            children: [
                                { value: '330203', title: '海曙区' },
                                { value: '330205', title: '江北区' },
                                { value: '330206', title: '北仑区' },
                                { value: '330211', title: '镇海区' },
                                { value: '330212', title: '鄞州区' },
                                { value: '330213', title: '奉化区' },
                                { value: '330225', title: '象山县' },
                                { value: '330226', title: '宁海县' },
                                { value: '330281', title: '余姚市' },
                                { value: '330282', title: '慈溪市' },
                            ]
                        },
                        {
                            title: '温州市',
                            value: '330300',
                            children: [
                                { value: '330302', title: '鹿城区' },
                                { value: '330303', title: '龙湾区' },
                                { value: '330304', title: '瓯海区' },
                                { value: '330305', title: '洞头区' },
                                { value: '330324', title: '永嘉县' },
                                { value: '330326', title: '平阳县' },
                                { value: '330327', title: '苍南县' },
                                { value: '330328', title: '文成县' },
                                { value: '330329', title: '泰顺县' },
                                { value: '330381', title: '瑞安市' },
                                { value: '330382', title: '乐清市' },
                                { value: '330383', title: '龙港市' },
                            ]
                        },
                        {
                            title: '嘉兴市',
                            value: '330400',
                            children: [
                                { value: '330402', title: '南湖区' },
                                { value: '330411', title: '秀洲区' },
                                { value: '330421', title: '嘉善县' },
                                { value: '330424', title: '海盐县' },
                                { value: '330481', title: '海宁市' },
                                { value: '330482', title: '平湖市' },
                                { value: '330483', title: '桐乡市' },
                            ]
                        },
                        {
                            title: '湖州市',
                            value: '330500',
                            children: [
                                { value: '330502', title: '吴兴区' },
                                { value: '330503', title: '南浔区' },
                                { value: '330521', title: '德清县' },
                                { value: '330522', title: '长兴县' },
                                { value: '330523', title: '安吉县' },
                            ]
                        },
                        {
                            title: '绍兴市',
                            value: '330600',
                            children: [
                                { value: '330602', title: '越城区' },
                                { value: '330603', title: '柯桥区' },
                                { value: '330604', title: '上虞区' },
                                { value: '330624', title: '新昌县' },
                                { value: '330681', title: '诸暨市' },
                                { value: '330683', title: '嵊州市' },
                            ]
                        },
                        {
                            title: '金华市',
                            value: '330700',
                            children: [
                                { value: '330702', title: '婺城区' },
                                { value: '330703', title: '金东区' },
                                { value: '330723', title: '武义县' },
                                { value: '330726', title: '浦江县' },
                                { value: '330727', title: '磐安县' },
                                { value: '330781', title: '兰溪市' },
                                { value: '330782', title: '义乌市' },
                                { value: '330783', title: '东阳市' },
                                { value: '330784', title: '永康市' },
                            ]
                        },
                        {
                            title: '衢州市',
                            value: '330800',
                            children: [
                                { value: '330802', title: '柯城区' },
                                { value: '330803', title: '衢江区' },
                                { value: '330822', title: '常山县' },
                                { value: '330824', title: '开化县' },
                                { value: '330825', title: '龙游县' },
                                { value: '330881', title: '江山市' },
                            ]
                        },
                        {
                            title: '舟山市',
                            value: '330900',
                            children: [
                                { value: '330902', title: '定海区' },
                                { value: '330903', title: '普陀区' },
                                { value: '330921', title: '岱山县' },
                                { value: '330922', title: '嵊泗县' },
                            ]
                        },
                        {
                            title: '台州市',
                            value: '331000',
                            children: [
                                { value: '331002', title: '椒江区' },
                                { value: '331003', title: '黄岩区' },
                                { value: '331004', title: '路桥区' },
                                { value: '331022', title: '三门县' },
                                { value: '331023', title: '天台县' },
                                { value: '331024', title: '仙居县' },
                                { value: '331081', title: '温岭市' },
                                { value: '331082', title: '临海市' },
                                { value: '331083', title: '玉环市' },
                            ]
                        },
                        {
                            title: '丽水市',
                            value: '331100',
                            children: [
                                { value: '331102', title: '莲都区' },
                                { value: '331121', title: '青田县' },
                                { value: '331122', title: '缙云县' },
                                { value: '331123', title: '遂昌县' },
                                { value: '331124', title: '松阳县' },
                                { value: '331125', title: '云和县' },
                                { value: '331126', title: '庆元县' },
                                { value: '331127', title: '景宁畲族自治县' },
                                { value: '331181', title: '龙泉市' },
                            ]
                        },
                    ]
                },
                {
                    title: '安徽省',
                    value: '340000',
                    children: [
                        {
                            title: '合肥市',
                            value: '340100',
                            children: [
                                { value: '340102', title: '瑶海区' },
                                { value: '340103', title: '庐阳区' },
                                { value: '340104', title: '蜀山区' },
                                { value: '340111', title: '包河区' },
                                { value: '340121', title: '长丰县' },
                                { value: '340122', title: '肥东县' },
                                { value: '340123', title: '肥西县' },
                                { value: '340124', title: '庐江县' },
                                { value: '340181', title: '巢湖市' },
                            ]
                        },
                        {
                            title: '芜湖市',
                            value: '340200',
                            children: [
                                { value: '340202', title: '镜湖区' },
                                { value: '340207', title: '鸠江区' },
                                { value: '340209', title: '弋江区' },
                                { value: '340210', title: '湾沚区' },
                                { value: '340211', title: '繁昌区' },
                                { value: '340223', title: '南陵县' },
                                { value: '340281', title: '无为市' },
                            ]
                        },
                        {
                            title: '蚌埠市',
                            value: '340300',
                            children: [
                                { value: '340302', title: '龙子湖区' },
                                { value: '340303', title: '蚌山区' },
                                { value: '340304', title: '禹会区' },
                                { value: '340311', title: '淮上区' },
                                { value: '340321', title: '怀远县' },
                                { value: '340322', title: '五河县' },
                                { value: '340323', title: '固镇县' },
                            ]
                        },
                        {
                            title: '淮南市',
                            value: '340400',
                            children: [
                                { value: '340402', title: '大通区' },
                                { value: '340403', title: '田家庵区' },
                                { value: '340404', title: '谢家集区' },
                                { value: '340405', title: '八公山区' },
                                { value: '340406', title: '潘集区' },
                                { value: '340421', title: '凤台县' },
                                { value: '340422', title: '寿县' },
                            ]
                        },
                        {
                            title: '马鞍山市',
                            value: '340500',
                            children: [
                                { value: '340503', title: '花山区' },
                                { value: '340504', title: '雨山区' },
                                { value: '340506', title: '博望区' },
                                { value: '340521', title: '当涂县' },
                                { value: '340522', title: '含山县' },
                                { value: '340523', title: '和县' },
                            ]
                        },
                        {
                            title: '淮北市',
                            value: '340600',
                            children: [
                                { value: '340602', title: '杜集区' },
                                { value: '340603', title: '相山区' },
                                { value: '340604', title: '烈山区' },
                                { value: '340621', title: '濉溪县' },
                            ]
                        },
                        {
                            title: '铜陵市',
                            value: '340700',
                            children: [
                                { value: '340705', title: '铜官区' },
                                { value: '340706', title: '义安区' },
                                { value: '340711', title: '郊区' },
                                { value: '340722', title: '枞阳县' },
                            ]
                        },
                        {
                            title: '安庆市',
                            value: '340800',
                            children: [
                                { value: '340802', title: '迎江区' },
                                { value: '340803', title: '大观区' },
                                { value: '340811', title: '宜秀区' },
                                { value: '340822', title: '怀宁县' },
                                { value: '340825', title: '太湖县' },
                                { value: '340826', title: '宿松县' },
                                { value: '340827', title: '望江县' },
                                { value: '340828', title: '岳西县' },
                                { value: '340881', title: '桐城市' },
                                { value: '340882', title: '潜山市' },
                            ]
                        },
                        {
                            title: '黄山市',
                            value: '341000',
                            children: [
                                { value: '341002', title: '屯溪区' },
                                { value: '341003', title: '黄山区' },
                                { value: '341004', title: '徽州区' },
                                { value: '341021', title: '歙县' },
                                { value: '341022', title: '休宁县' },
                                { value: '341023', title: '黟县' },
                                { value: '341024', title: '祁门县' },
                            ]
                        },
                        {
                            title: '滁州市',
                            value: '341100',
                            children: [
                                { value: '341102', title: '琅琊区' },
                                { value: '341103', title: '南谯区' },
                                { value: '341122', title: '来安县' },
                                { value: '341124', title: '全椒县' },
                                { value: '341125', title: '定远县' },
                                { value: '341126', title: '凤阳县' },
                                { value: '341181', title: '天长市' },
                                { value: '341182', title: '明光市' },
                            ]
                        },
                        {
                            title: '阜阳市',
                            value: '341200',
                            children: [
                                { value: '341202', title: '颍州区' },
                                { value: '341203', title: '颍东区' },
                                { value: '341204', title: '颍泉区' },
                                { value: '341221', title: '临泉县' },
                                { value: '341222', title: '太和县' },
                                { value: '341225', title: '阜南县' },
                                { value: '341226', title: '颍上县' },
                                { value: '341282', title: '界首市' },
                            ]
                        },
                        {
                            title: '宿州市',
                            value: '341300',
                            children: [
                                { value: '341302', title: '埇桥区' },
                                { value: '341321', title: '砀山县' },
                                { value: '341322', title: '萧县' },
                                { value: '341323', title: '灵璧县' },
                                { value: '341324', title: '泗县' },
                            ]
                        },
                        {
                            title: '六安市',
                            value: '341500',
                            children: [
                                { value: '341502', title: '金安区' },
                                { value: '341503', title: '裕安区' },
                                { value: '341504', title: '叶集区' },
                                { value: '341522', title: '霍邱县' },
                                { value: '341523', title: '舒城县' },
                                { value: '341524', title: '金寨县' },
                                { value: '341525', title: '霍山县' },
                            ]
                        },
                        {
                            title: '亳州市',
                            value: '341600',
                            children: [
                                { value: '341602', title: '谯城区' },
                                { value: '341621', title: '涡阳县' },
                                { value: '341622', title: '蒙城县' },
                                { value: '341623', title: '利辛县' },
                            ]
                        },
                        {
                            title: '池州市',
                            value: '341700',
                            children: [
                                { value: '341702', title: '贵池区' },
                                { value: '341721', title: '东至县' },
                                { value: '341722', title: '石台县' },
                                { value: '341723', title: '青阳县' },
                            ]
                        },
                        {
                            title: '宣城市',
                            value: '341800',
                            children: [
                                { value: '341802', title: '宣州区' },
                                { value: '341821', title: '郎溪县' },
                                { value: '341823', title: '泾县' },
                                { value: '341824', title: '绩溪县' },
                                { value: '341825', title: '旌德县' },
                                { value: '341881', title: '宁国市' },
                                { value: '341882', title: '广德市' },
                            ]
                        },
                    ]
                },
                {
                    title: '福建省',
                    value: '350000',
                    children: [
                        {
                            title: '福州市',
                            value: '350100',
                            children: [
                                { value: '350102', title: '鼓楼区' },
                                { value: '350103', title: '台江区' },
                                { value: '350104', title: '仓山区' },
                                { value: '350105', title: '马尾区' },
                                { value: '350111', title: '晋安区' },
                                { value: '350112', title: '长乐区' },
                                { value: '350121', title: '闽侯县' },
                                { value: '350122', title: '连江县' },
                                { value: '350123', title: '罗源县' },
                                { value: '350124', title: '闽清县' },
                                { value: '350125', title: '永泰县' },
                                { value: '350128', title: '平潭县' },
                                { value: '350181', title: '福清市' },
                            ]
                        },
                        {
                            title: '宁德市',
                            value: '350900',
                            children: [
                                { value: '350902', title: '蕉城区' },
                                { value: '350921', title: '霞浦县' },
                                { value: '350922', title: '古田县' },
                                { value: '350923', title: '屏南县' },
                                { value: '350924', title: '寿宁县' },
                                { value: '350925', title: '周宁县' },
                                { value: '350926', title: '柘荣县' },
                                { value: '350981', title: '福安市' },
                                { value: '350982', title: '福鼎市' },
                            ]
                        },
                        {
                            title: '南平市',
                            value: '350700',
                            children: [
                                { value: '350702', title: '延平区' },
                                { value: '350703', title: '建阳区' },
                                { value: '350721', title: '顺昌县' },
                                { value: '350722', title: '浦城县' },
                                { value: '350723', title: '光泽县' },
                                { value: '350724', title: '松溪县' },
                                { value: '350725', title: '政和县' },
                                { value: '350781', title: '邵武市' },
                                { value: '350782', title: '武夷山市' },
                                { value: '350783', title: '建瓯市' },
                            ]
                        },
                        {
                            title: '三明市',
                            value: '350400',
                            children: [
                                { value: '350403', title: '三元区' },
                                { value: '350421', title: '明溪县' },
                                { value: '350423', title: '清流县' },
                                { value: '350424', title: '宁化县' },
                                { value: '350425', title: '大田县' },
                                { value: '350426', title: '尤溪县' },
                                { value: '350427', title: '沙县区' },
                                { value: '350428', title: '将乐县' },
                                { value: '350429', title: '泰宁县' },
                                { value: '350430', title: '建宁县' },
                                { value: '350481', title: '永安市' },
                            ]
                        },
                        {
                            title: '莆田市',
                            value: '350300',
                            children: [
                                { value: '350302', title: '城厢区' },
                                { value: '350303', title: '涵江区' },
                                { value: '350304', title: '荔城区' },
                                { value: '350305', title: '秀屿区' },
                                { value: '350322', title: '仙游县' },
                            ]
                        },
                        {
                            title: '泉州市',
                            value: '350500',
                            children: [
                                { value: '350502', title: '鲤城区' },
                                { value: '350503', title: '丰泽区' },
                                { value: '350504', title: '洛江区' },
                                { value: '350505', title: '泉港区' },
                                { value: '350521', title: '惠安县' },
                                { value: '350524', title: '安溪县' },
                                { value: '350525', title: '永春县' },
                                { value: '350526', title: '德化县' },
                                { value: '350527', title: '金门县' },
                                { value: '350581', title: '石狮市' },
                                { value: '350582', title: '晋江市' },
                                { value: '350583', title: '南安市' },
                            ]
                        },
                        {
                            title: '龙岩市',
                            value: '350800',
                            children: [
                                { value: '350802', title: '新罗区' },
                                { value: '350803', title: '永定区' },
                                { value: '350821', title: '长汀县' },
                                { value: '350823', title: '上杭县' },
                                { value: '350824', title: '武平县' },
                                { value: '350825', title: '连城县' },
                                { value: '350881', title: '漳平市' },
                            ]
                        },
                        {
                            title: '漳州市',
                            value: '350600',
                            children: [
                                { value: '350602', title: '芗城区' },
                                { value: '350603', title: '龙文区' },
                                { value: '350622', title: '云霄县' },
                                { value: '350623', title: '漳浦县' },
                                { value: '350624', title: '诏安县' },
                                { value: '350625', title: '长泰区' },
                                { value: '350626', title: '东山县' },
                                { value: '350627', title: '南靖县' },
                                { value: '350628', title: '平和县' },
                                { value: '350629', title: '华安县' },
                                { value: '350681', title: '龙海区' },
                            ]
                        },
                        {
                            title: '厦门市',
                            value: '350200',
                            children: [
                                { value: '350203', title: '思明区' },
                                { value: '350205', title: '海沧区' },
                                { value: '350206', title: '湖里区' },
                                { value: '350211', title: '集美区' },
                                { value: '350212', title: '同安区' },
                                { value: '350213', title: '翔安区' },
                            ]
                        },
                    ]
                },
                {
                    title: '江西省',
                    value: '360000',
                    children: [
                        {
                            title: '南昌市',
                            value: '360100',
                            children: [
                                { value: '360102', title: '东湖区' },
                                { value: '360103', title: '西湖区' },
                                { value: '360104', title: '青云谱区' },
                                { value: '360111', title: '青山湖区' },
                                { value: '360112', title: '新建区' },
                                { value: '360113', title: '红谷滩区' },
                                { value: '360121', title: '南昌县' },
                                { value: '360123', title: '安义县' },
                                { value: '360124', title: '进贤县' },
                            ]
                        },
                        {
                            title: '景德镇市',
                            value: '360200',
                            children: [
                                { value: '360202', title: '昌江区' },
                                { value: '360203', title: '珠山区' },
                                { value: '360222', title: '浮梁县' },
                                { value: '360281', title: '乐平市' },
                            ]
                        },
                        {
                            title: '萍乡市',
                            value: '360300',
                            children: [
                                { value: '360302', title: '安源区' },
                                { value: '360313', title: '湘东区' },
                                { value: '360321', title: '莲花县' },
                                { value: '360322', title: '上栗县' },
                                { value: '360323', title: '芦溪县' },
                            ]
                        },
                        {
                            title: '九江市',
                            value: '360400',
                            children: [
                                { value: '360402', title: '濂溪区' },
                                { value: '360403', title: '浔阳区' },
                                { value: '360404', title: '柴桑区' },
                                { value: '360423', title: '武宁县' },
                                { value: '360424', title: '修水县' },
                                { value: '360425', title: '永修县' },
                                { value: '360426', title: '德安县' },
                                { value: '360428', title: '都昌县' },
                                { value: '360429', title: '湖口县' },
                                { value: '360430', title: '彭泽县' },
                                { value: '360481', title: '瑞昌市' },
                                { value: '360482', title: '共青城市' },
                                { value: '360483', title: '庐山市' },
                            ]
                        },
                        {
                            title: '新余市',
                            value: '360500',
                            children: [
                                { value: '360502', title: '渝水区' },
                                { value: '360521', title: '分宜县' },
                            ]
                        },
                        {
                            title: '鹰潭市',
                            value: '360600',
                            children: [
                                { value: '360602', title: '月湖区' },
                                { value: '360603', title: '余江区' },
                                { value: '360681', title: '贵溪市' },
                            ]
                        },
                        {
                            title: '赣州市',
                            value: '360700',
                            children: [
                                { value: '360702', title: '章贡区' },
                                { value: '360703', title: '南康区' },
                                { value: '360704', title: '赣县区' },
                                { value: '360722', title: '信丰县' },
                                { value: '360723', title: '大余县' },
                                { value: '360724', title: '上犹县' },
                                { value: '360725', title: '崇义县' },
                                { value: '360726', title: '安远县' },
                                { value: '360728', title: '定南县' },
                                { value: '360729', title: '全南县' },
                                { value: '360730', title: '宁都县' },
                                { value: '360731', title: '于都县' },
                                { value: '360732', title: '兴国县' },
                                { value: '360733', title: '会昌县' },
                                { value: '360734', title: '寻乌县' },
                                { value: '360735', title: '石城县' },
                                { value: '360781', title: '瑞金市' },
                                { value: '360783', title: '龙南市' },
                            ]
                        },
                        {
                            title: '吉安市',
                            value: '360800',
                            children: [
                                { value: '360802', title: '吉州区' },
                                { value: '360803', title: '青原区' },
                                { value: '360821', title: '吉安县' },
                                { value: '360822', title: '吉水县' },
                                { value: '360823', title: '峡江县' },
                                { value: '360824', title: '新干县' },
                                { value: '360825', title: '永丰县' },
                                { value: '360826', title: '泰和县' },
                                { value: '360827', title: '遂川县' },
                                { value: '360828', title: '万安县' },
                                { value: '360829', title: '安福县' },
                                { value: '360830', title: '永新县' },
                                { value: '360881', title: '井冈山市' },
                            ]
                        },
                        {
                            title: '宜春市',
                            value: '360900',
                            children: [
                                { value: '360902', title: '袁州区' },
                                { value: '360921', title: '奉新县' },
                                { value: '360922', title: '万载县' },
                                { value: '360923', title: '上高县' },
                                { value: '360924', title: '宜丰县' },
                                { value: '360925', title: '靖安县' },
                                { value: '360926', title: '铜鼓县' },
                                { value: '360981', title: '丰城市' },
                                { value: '360982', title: '樟树市' },
                                { value: '360983', title: '高安市' },
                            ]
                        },
                        {
                            title: '抚州市',
                            value: '361000',
                            children: [
                                { value: '361002', title: '临川区' },
                                { value: '361003', title: '东乡区' },
                                { value: '361021', title: '南城县' },
                                { value: '361022', title: '黎川县' },
                                { value: '361023', title: '南丰县' },
                                { value: '361024', title: '崇仁县' },
                                { value: '361025', title: '乐安县' },
                                { value: '361026', title: '宜黄县' },
                                { value: '361027', title: '金溪县' },
                                { value: '361028', title: '资溪县' },
                                { value: '361030', title: '广昌县' },
                            ]
                        },
                        {
                            title: '上饶市',
                            value: '361100',
                            children: [
                                { value: '361102', title: '信州区' },
                                { value: '361103', title: '广丰区' },
                                { value: '361104', title: '广信区' },
                                { value: '361123', title: '玉山县' },
                                { value: '361124', title: '铅山县' },
                                { value: '361125', title: '横峰县' },
                                { value: '361126', title: '弋阳县' },
                                { value: '361127', title: '余干县' },
                                { value: '361128', title: '鄱阳县' },
                                { value: '361129', title: '万年县' },
                                { value: '361130', title: '婺源县' },
                                { value: '361181', title: '德兴市' },
                            ]
                        },
                    ]
                },
                {
                    title: '山东省',
                    value: '370000',
                    children: [
                        {
                            title: '济南市',
                            value: '370100',
                            children: [
                                { value: '370102', title: '历下区' },
                                { value: '370103', title: '市中区' },
                                { value: '370104', title: '槐荫区' },
                                { value: '370105', title: '天桥区' },
                                { value: '370112', title: '历城区' },
                                { value: '370113', title: '长清区' },
                                { value: '370114', title: '章丘区' },
                                { value: '370115', title: '济阳区' },
                                { value: '370116', title: '莱芜区' },
                                { value: '370117', title: '钢城区' },
                                { value: '370124', title: '平阴县' },
                                { value: '370126', title: '商河县' },
                            ]
                        },
                        {
                            title: '青岛市',
                            value: '370200',
                            children: [
                                { value: '370202', title: '市南区' },
                                { value: '370203', title: '市北区' },
                                { value: '370211', title: '黄岛区' },
                                { value: '370212', title: '崂山区' },
                                { value: '370213', title: '李沧区' },
                                { value: '370214', title: '城阳区' },
                                { value: '370215', title: '即墨区' },
                                { value: '370281', title: '胶州市' },
                                { value: '370283', title: '平度市' },
                                { value: '370285', title: '莱西市' },
                            ]
                        },
                        {
                            title: '淄博市',
                            value: '370300',
                            children: [
                                { value: '370302', title: '淄川区' },
                                { value: '370303', title: '张店区' },
                                { value: '370304', title: '博山区' },
                                { value: '370305', title: '临淄区' },
                                { value: '370306', title: '周村区' },
                                { value: '370321', title: '桓台县' },
                                { value: '370322', title: '高青县' },
                                { value: '370323', title: '沂源县' },
                            ]
                        },
                        {
                            title: '枣庄市',
                            value: '370400',
                            children: [
                                { value: '370402', title: '市中区' },
                                { value: '370403', title: '薛城区' },
                                { value: '370404', title: '峄城区' },
                                { value: '370405', title: '台儿庄区' },
                                { value: '370406', title: '山亭区' },
                                { value: '370481', title: '滕州市' },
                            ]
                        },
                        {
                            title: '东营市',
                            value: '370500',
                            children: [
                                { value: '370502', title: '东营区' },
                                { value: '370503', title: '河口区' },
                                { value: '370505', title: '垦利区' },
                                { value: '370522', title: '利津县' },
                                { value: '370523', title: '广饶县' },
                            ]
                        },
                        {
                            title: '烟台市',
                            value: '370600',
                            children: [
                                { value: '370602', title: '芝罘区' },
                                { value: '370611', title: '福山区' },
                                { value: '370612', title: '牟平区' },
                                { value: '370613', title: '莱山区' },
                                { value: '370614', title: '蓬莱区' },
                                { value: '370681', title: '龙口市' },
                                { value: '370682', title: '莱阳市' },
                                { value: '370683', title: '莱州市' },
                                { value: '370685', title: '招远市' },
                                { value: '370686', title: '栖霞市' },
                                { value: '370687', title: '海阳市' },
                            ]
                        },
                        {
                            title: '潍坊市',
                            value: '370700',
                            children: [
                                { value: '370702', title: '潍城区' },
                                { value: '370703', title: '寒亭区' },
                                { value: '370704', title: '坊子区' },
                                { value: '370705', title: '奎文区' },
                                { value: '370724', title: '临朐县' },
                                { value: '370725', title: '昌乐县' },
                                { value: '370781', title: '青州市' },
                                { value: '370782', title: '诸城市' },
                                { value: '370783', title: '寿光市' },
                                { value: '370784', title: '安丘市' },
                                { value: '370785', title: '高密市' },
                                { value: '370786', title: '昌邑市' },
                            ]
                        },
                        {
                            title: '济宁市',
                            value: '370800',
                            children: [
                                { value: '370811', title: '任城区' },
                                { value: '370812', title: '兖州区' },
                                { value: '370826', title: '微山县' },
                                { value: '370827', title: '鱼台县' },
                                { value: '370828', title: '金乡县' },
                                { value: '370829', title: '嘉祥县' },
                                { value: '370830', title: '汶上县' },
                                { value: '370831', title: '泗水县' },
                                { value: '370832', title: '梁山县' },
                                { value: '370881', title: '曲阜市' },
                                { value: '370883', title: '邹城市' },
                            ]
                        },
                        {
                            title: '泰安市',
                            value: '370900',
                            children: [
                                { value: '370902', title: '泰山区' },
                                { value: '370911', title: '岱岳区' },
                                { value: '370921', title: '宁阳县' },
                                { value: '370923', title: '东平县' },
                                { value: '370982', title: '新泰市' },
                                { value: '370983', title: '肥城市' },
                            ]
                        },
                        {
                            title: '威海市',
                            value: '371000',
                            children: [
                                { value: '371002', title: '环翠区' },
                                { value: '371003', title: '文登区' },
                                { value: '371082', title: '荣成市' },
                                { value: '371083', title: '乳山市' },
                            ]
                        },
                        {
                            title: '日照市',
                            value: '371100',
                            children: [
                                { value: '371102', title: '东港区' },
                                { value: '371103', title: '岚山区' },
                                { value: '371121', title: '五莲县' },
                                { value: '371122', title: '莒县' },
                            ]
                        },
                        {
                            title: '临沂市',
                            value: '371300',
                            children: [
                                { value: '371302', title: '兰山区' },
                                { value: '371311', title: '罗庄区' },
                                { value: '371312', title: '河东区' },
                                { value: '371321', title: '沂南县' },
                                { value: '371322', title: '郯城县' },
                                { value: '371323', title: '沂水县' },
                                { value: '371324', title: '兰陵县' },
                                { value: '371325', title: '费县' },
                                { value: '371326', title: '平邑县' },
                                { value: '371327', title: '莒南县' },
                                { value: '371328', title: '蒙阴县' },
                                { value: '371329', title: '临沭县' },
                            ]
                        },
                        {
                            title: '德州市',
                            value: '371400',
                            children: [
                                { value: '371402', title: '德城区' },
                                { value: '371403', title: '陵城区' },
                                { value: '371422', title: '宁津县' },
                                { value: '371423', title: '庆云县' },
                                { value: '371424', title: '临邑县' },
                                { value: '371425', title: '齐河县' },
                                { value: '371426', title: '平原县' },
                                { value: '371427', title: '夏津县' },
                                { value: '371428', title: '武城县' },
                                { value: '371481', title: '乐陵市' },
                                { value: '371482', title: '禹城市' },
                            ]
                        },
                        {
                            title: '聊城市',
                            value: '371500',
                            children: [
                                { value: '371502', title: '东昌府区' },
                                { value: '371503', title: '茌平区' },
                                { value: '371521', title: '阳谷县' },
                                { value: '371522', title: '莘县' },
                                { value: '371524', title: '东阿县' },
                                { value: '371525', title: '冠县' },
                                { value: '371526', title: '高唐县' },
                                { value: '371581', title: '临清市' },
                            ]
                        },
                        {
                            title: '滨州市',
                            value: '371600',
                            children: [
                                { value: '371602', title: '滨城区' },
                                { value: '371603', title: '沾化区' },
                                { value: '371621', title: '惠民县' },
                                { value: '371622', title: '阳信县' },
                                { value: '371623', title: '无棣县' },
                                { value: '371625', title: '博兴县' },
                                { value: '371681', title: '邹平市' },
                            ]
                        },
                        {
                            title: '菏泽市',
                            value: '371700',
                            children: [
                                { value: '371702', title: '牡丹区' },
                                { value: '371703', title: '定陶区' },
                                { value: '371721', title: '曹县' },
                                { value: '371722', title: '单县' },
                                { value: '371723', title: '成武县' },
                                { value: '371724', title: '巨野县' },
                                { value: '371725', title: '郓城县' },
                                { value: '371726', title: '鄄城县' },
                                { value: '371728', title: '东明县' },
                            ]
                        },
                    ]
                },
                {
                    title: '河南省',
                    value: '410000',
                    children: [
                        {
                            title: '郑州市',
                            value: '410100',
                            children: [
                                { value: '410102', title: '中原区' },
                                { value: '410103', title: '二七区' },
                                { value: '410104', title: '管城回族区' },
                                { value: '410105', title: '金水区' },
                                { value: '410106', title: '上街区' },
                                { value: '410108', title: '惠济区' },
                                { value: '410122', title: '中牟县' },
                                { value: '410181', title: '巩义市' },
                                { value: '410182', title: '荥阳市' },
                                { value: '410183', title: '新密市' },
                                { value: '410184', title: '新郑市' },
                                { value: '410185', title: '登封市' },
                            ]
                        },
                        {
                            title: '开封市',
                            value: '410200',
                            children: [
                                { value: '410202', title: '龙亭区' },
                                { value: '410203', title: '顺河回族区' },
                                { value: '410204', title: '鼓楼区' },
                                { value: '410205', title: '禹王台区' },
                                { value: '410212', title: '祥符区' },
                                { value: '410221', title: '杞县' },
                                { value: '410222', title: '通许县' },
                                { value: '410223', title: '尉氏县' },
                                { value: '410225', title: '兰考县' },
                            ]
                        },
                        {
                            title: '洛阳市',
                            value: '410300',
                            children: [
                                { value: '410302', title: '老城区' },
                                { value: '410303', title: '西工区' },
                                { value: '410304', title: '瀍河回族区' },
                                { value: '410305', title: '涧西区' },
                                { value: '410306', title: '孟津区' },
                                { value: '410311', title: '洛龙区' },
                                { value: '410323', title: '新安县' },
                                { value: '410324', title: '栾川县' },
                                { value: '410325', title: '嵩县' },
                                { value: '410326', title: '汝阳县' },
                                { value: '410327', title: '宜阳县' },
                                { value: '410328', title: '洛宁县' },
                                { value: '410329', title: '伊川县' },
                                { value: '410381', title: '偃师区' },
                            ]
                        },
                        {
                            title: '平顶山市',
                            value: '410400',
                            children: [
                                { value: '410402', title: '新华区' },
                                { value: '410403', title: '卫东区' },
                                { value: '410404', title: '石龙区' },
                                { value: '410411', title: '湛河区' },
                                { value: '410421', title: '宝丰县' },
                                { value: '410422', title: '叶县' },
                                { value: '410423', title: '鲁山县' },
                                { value: '410425', title: '郏县' },
                                { value: '410481', title: '舞钢市' },
                                { value: '410482', title: '汝州市' },

                            ]
                        },
                        {
                            title: '安阳市',
                            value: '410500',
                            children: [
                                { value: '410502', title: '文峰区' },
                                { value: '410503', title: '北关区' },
                                { value: '410505', title: '殷都区' },
                                { value: '410506', title: '龙安区' },
                                { value: '410522', title: '安阳县' },
                                { value: '410523', title: '汤阴县' },
                                { value: '410526', title: '滑县' },
                                { value: '410527', title: '内黄县' },
                                { value: '410581', title: '林州市' },
                            ]
                        },
                        {
                            title: '鹤壁市',
                            value: '410600',
                            children: [
                                { value: '410602', title: '鹤山区' },
                                { value: '410603', title: '山城区' },
                                { value: '410611', title: '淇滨区' },
                                { value: '410621', title: '浚县' },
                                { value: '410622', title: '淇县' },
                            ]
                        },
                        {
                            title: '新乡市',
                            value: '410700',
                            children: [
                                { value: '410702', title: '红旗区' },
                                { value: '410703', title: '卫滨区' },
                                { value: '410704', title: '凤泉区' },
                                { value: '410711', title: '牧野区' },
                                { value: '410721', title: '新乡县' },
                                { value: '410724', title: '获嘉县' },
                                { value: '410725', title: '原阳县' },
                                { value: '410726', title: '延津县' },
                                { value: '410727', title: '封丘县' },
                                { value: '410781', title: '卫辉市' },
                                { value: '410782', title: '辉县市' },
                                { value: '410783', title: '长垣市' },
                            ]
                        },
                        {
                            title: '焦作市',
                            value: '410800',
                            children: [
                                { value: '410802', title: '解放区' },
                                { value: '410803', title: '中站区' },
                                { value: '410804', title: '马村区' },
                                { value: '410811', title: '山阳区' },
                                { value: '410821', title: '修武县' },
                                { value: '410822', title: '博爱县' },
                                { value: '410823', title: '武陟县' },
                                { value: '410825', title: '温县' },
                                { value: '410882', title: '沁阳市' },
                                { value: '410883', title: '孟州市' },
                            ]
                        },
                        {
                            title: '濮阳市',
                            value: '410900',
                            children: [
                                { value: '410902', title: '华龙区' },
                                { value: '410922', title: '清丰县' },
                                { value: '410923', title: '南乐县' },
                                { value: '410926', title: '范县' },
                                { value: '410927', title: '台前县' },
                                { value: '410928', title: '濮阳县' },
                            ]
                        },
                        {
                            title: '许昌市',
                            value: '411000',
                            children: [
                                { value: '411002', title: '魏都区' },
                                { value: '411003', title: '建安区' },
                                { value: '411024', title: '鄢陵县' },
                                { value: '411025', title: '襄城县' },
                                { value: '411081', title: '禹州市' },
                                { value: '411082', title: '长葛市' },
                            ]
                        },
                        {
                            title: '漯河市',
                            value: '411100',
                            children: [
                                { value: '411102', title: '源汇区' },
                                { value: '411103', title: '郾城区' },
                                { value: '411104', title: '召陵区' },
                                { value: '411121', title: '舞阳县' },
                                { value: '411122', title: '临颍县' },
                            ]
                        },
                        {
                            title: '三门峡市',
                            value: '411200',
                            children: [
                                { value: '411202', title: '湖滨区' },
                                { value: '411203', title: '陕州区' },
                                { value: '411221', title: '渑池县' },
                                { value: '411224', title: '卢氏县' },
                                { value: '411281', title: '义马市' },
                                { value: '411282', title: '灵宝市' },
                            ]
                        },
                        {
                            title: '南阳市',
                            value: '411300',
                            children: [
                                { value: '411302', title: '宛城区' },
                                { value: '411303', title: '卧龙区' },
                                { value: '411321', title: '南召县' },
                                { value: '411322', title: '方城县' },
                                { value: '411323', title: '西峡县' },
                                { value: '411324', title: '镇平县' },
                                { value: '411325', title: '内乡县' },
                                { value: '411326', title: '淅川县' },
                                { value: '411327', title: '社旗县' },
                                { value: '411328', title: '唐河县' },
                                { value: '411329', title: '新野县' },
                                { value: '411330', title: '桐柏县' },
                                { value: '411381', title: '邓州市' },
                            ]
                        },
                        {
                            title: '商丘市',
                            value: '411400',
                            children: [
                                { value: '411402', title: '梁园区' },
                                { value: '411403', title: '睢阳区' },
                                { value: '411421', title: '民权县' },
                                { value: '411422', title: '睢县' },
                                { value: '411423', title: '宁陵县' },
                                { value: '411424', title: '柘城县' },
                                { value: '411425', title: '虞城县' },
                                { value: '411426', title: '夏邑县' },
                                { value: '411481', title: '永城市' },
                            ]
                        },
                        {
                            title: '信阳市',
                            value: '411500',
                            children: [
                                { value: '411502', title: '浉河区' },
                                { value: '411503', title: '平桥区' },
                                { value: '411521', title: '罗山县' },
                                { value: '411522', title: '光山县' },
                                { value: '411523', title: '新县' },
                                { value: '411524', title: '商城县' },
                                { value: '411525', title: '固始县' },
                                { value: '411526', title: '潢川县' },
                                { value: '411527', title: '淮滨县' },
                                { value: '411528', title: '息县' },
                            ]
                        },
                        {
                            title: '周口市',
                            value: '411600',
                            children: [
                                { value: '411602', title: '川汇区' },
                                { value: '411603', title: '淮阳区' },
                                { value: '411621', title: '扶沟县' },
                                { value: '411622', title: '西华县' },
                                { value: '411623', title: '商水县' },
                                { value: '411624', title: '沈丘县' },
                                { value: '411625', title: '郸城县' },
                                { value: '411627', title: '太康县' },
                                { value: '411628', title: '鹿邑县' },
                                { value: '411681', title: '项城市' },
                            ]
                        },
                        {
                            title: '驻马店市',
                            value: '411700',
                            children: [
                                { value: '411702', title: '驿城区' },
                                { value: '411721', title: '西平县' },
                                { value: '411722', title: '上蔡县' },
                                { value: '411723', title: '平舆县' },
                                { value: '411724', title: '正阳县' },
                                { value: '411725', title: '确山县' },
                                { value: '411726', title: '泌阳县' },
                                { value: '411727', title: '汝南县' },
                                { value: '411728', title: '遂平县' },
                                { value: '411729', title: '新蔡县' },
                            ]
                        },
                        { title: '济源市', value: '419001' },
                    ]
                },
                {
                    title: '湖北省',
                    value: '420000',
                    children: [
                        {
                            title: '武汉市',
                            value: '420100',
                            children: [
                                { value: '420102', title: '江岸区' },
                                { value: '420103', title: '江汉区' },
                                { value: '420104', title: '硚口区' },
                                { value: '420105', title: '汉阳区' },
                                { value: '420106', title: '武昌区' },
                                { value: '420107', title: '青山区' },
                                { value: '420111', title: '洪山区' },
                                { value: '420112', title: '东西湖区' },
                                { value: '420113', title: '汉南区' },
                                { value: '420114', title: '蔡甸区' },
                                { value: '420115', title: '江夏区' },
                                { value: '420116', title: '黄陂区' },
                                { value: '420117', title: '新洲区' },
                            ]
                        },
                        {
                            title: '黄石市',
                            value: '420200',
                            children: [
                                { value: '420202', title: '黄石港区' },
                                { value: '420203', title: '西塞山区' },
                                { value: '420204', title: '下陆区' },
                                { value: '420205', title: '铁山区' },
                                { value: '420222', title: '阳新县' },
                                { value: '420281', title: '大冶市' },
                            ]
                        },
                        {
                            title: '十堰市',
                            value: '420300',
                            children: [
                                { value: '420302', title: '茅箭区' },
                                { value: '420303', title: '张湾区' },
                                { value: '420304', title: '郧阳区' },
                                { value: '420322', title: '郧西县' },
                                { value: '420323', title: '竹山县' },
                                { value: '420324', title: '竹溪县' },
                                { value: '420325', title: '房县' },
                                { value: '420381', title: '丹江口市' },
                            ]
                        },
                        {
                            title: '宜昌市',
                            value: '420500',
                            children: [
                                { value: '420502', title: '西陵区' },
                                { value: '420503', title: '伍家岗区' },
                                { value: '420504', title: '点军区' },
                                { value: '420505', title: '猇亭区' },
                                { value: '420506', title: '夷陵区' },
                                { value: '420525', title: '远安县' },
                                { value: '420526', title: '兴山县' },
                                { value: '420527', title: '秭归县' },
                                { value: '420528', title: '长阳土家族自治县' },
                                { value: '420529', title: '五峰土家族自治县' },
                                { value: '420581', title: '宜都市' },
                                { value: '420582', title: '当阳市' },
                                { value: '420583', title: '枝江市' },

                            ]
                        },
                        {
                            title: '襄阳市',
                            value: '420600',
                            children: [
                                { value: '420602', title: '襄城区' },
                                { value: '420606', title: '樊城区' },
                                { value: '420607', title: '襄州区' },
                                { value: '420624', title: '南漳县' },
                                { value: '420625', title: '谷城县' },
                                { value: '420626', title: '保康县' },
                                { value: '420682', title: '老河口市' },
                                { value: '420683', title: '枣阳市' },
                                { value: '420684', title: '宜城市' },
                            ]
                        },
                        {
                            title: '鄂州市',
                            value: '420700',
                            children: [
                                { value: '420702', title: '梁子湖区' },
                                { value: '420703', title: '华容区' },
                                { value: '420704', title: '鄂城区' },
                            ]
                        },
                        {
                            title: '荆门市',
                            value: '420800',
                            children: [
                                { value: '420802', title: '东宝区' },
                                { value: '420804', title: '掇刀区' },
                                { value: '420822', title: '沙洋县' },
                                { value: '420881', title: '钟祥市' },
                                { value: '420882', title: '京山市' },
                            ]
                        },
                        {
                            title: '孝感市',
                            value: '420900',
                            children: [
                                { value: '420902', title: '孝南区' },
                                { value: '420921', title: '孝昌县' },
                                { value: '420922', title: '大悟县' },
                                { value: '420923', title: '云梦县' },
                                { value: '420981', title: '应城市' },
                                { value: '420982', title: '安陆市' },
                                { value: '420984', title: '汉川市' },
                            ]
                        },
                        {
                            title: '荆州市',
                            value: '421000',
                            children: [
                                { value: '421002', title: '沙市区' },
                                { value: '421003', title: '荆州区' },
                                { value: '421022', title: '公安县' },
                                { value: '421023', title: '监利市' },
                                { value: '421024', title: '江陵县' },
                                { value: '421081', title: '石首市' },
                                { value: '421083', title: '洪湖市' },
                                { value: '421087', title: '松滋市' },
                            ]
                        },
                        {
                            title: '黄冈市',
                            value: '421100',
                            children: [
                                { value: '421102', title: '黄州区' },
                                { value: '421121', title: '团风县' },
                                { value: '421122', title: '红安县' },
                                { value: '421123', title: '罗田县' },
                                { value: '421124', title: '英山县' },
                                { value: '421125', title: '浠水县' },
                                { value: '421126', title: '蕲春县' },
                                { value: '421127', title: '黄梅县' },
                                { value: '421181', title: '麻城市' },
                                { value: '421182', title: '武穴市' },
                            ]
                        },
                        {
                            title: '咸宁市',
                            value: '421200',
                            children: [
                                { value: '421202', title: '咸安区' },
                                { value: '421221', title: '嘉鱼县' },
                                { value: '421222', title: '通城县' },
                                { value: '421223', title: '崇阳县' },
                                { value: '421224', title: '通山县' },
                                { value: '421281', title: '赤壁市' },
                            ]
                        },
                        {
                            title: '随州市',
                            value: '421300',
                            children: [
                                { value: '421303', title: '曾都区' },
                                { value: '421321', title: '随县' },
                                { value: '421381', title: '广水市' },
                            ]
                        },
                        {
                            title: '恩施土家族苗族自治州',
                            value: '422800',
                            children: [
                                { value: '422801', title: '恩施市' },
                                { value: '422802', title: '利川市' },
                                { value: '422822', title: '建始县' },
                                { value: '422823', title: '巴东县' },
                                { value: '422825', title: '宣恩县' },
                                { value: '422826', title: '咸丰县' },
                                { value: '422827', title: '来凤县' },
                                { value: '422828', title: '鹤峰县' },
                            ]
                        },
                        { title: '仙桃市', value: '429004' },
                        { title: '潜江市', value: '429005' },
                        { title: '天门市', value: '429006' },
                        { title: '神农架林区', value: '429021' },
                    ]
                },
                {
                    title: '湖南省',
                    value: '430000',
                    children: [
                        {
                            title: '长沙市',
                            value: '430100',
                            children: [
                                { value: '430102', title: '芙蓉区' },
                                { value: '430104', title: '岳麓区' },
                                { value: '430105', title: '开福区' },
                                { value: '430111', title: '雨花区' },
                                { value: '430112', title: '望城区' },
                                { value: '430103', title: '天心区' },
                                { value: '430121', title: '长沙县' },
                                { value: '430181', title: '浏阳市' },
                                { value: '430182', title: '宁乡市' },
                            ]
                        },
                        {
                            title: '株洲市',
                            value: '430200',
                            children: [
                                { value: '430202', title: '荷塘区' },
                                { value: '430203', title: '芦淞区' },
                                { value: '430204', title: '石峰区' },
                                { value: '430211', title: '天元区' },
                                { value: '430212', title: '渌口区' },
                                { value: '430223', title: '攸县' },
                                { value: '430224', title: '茶陵县' },
                                { value: '430225', title: '炎陵县' },
                                { value: '430281', title: '醴陵市' },
                            ]
                        },
                        {
                            title: '湘潭市',
                            value: '430300',
                            children: [
                                { value: '430302', title: '雨湖区' },
                                { value: '430304', title: '岳塘区' },
                                { value: '430321', title: '湘潭县' },
                                { value: '430381', title: '湘乡市' },
                                { value: '430382', title: '韶山市' },
                            ]
                        },
                        {
                            title: '衡阳市',
                            value: '430400',
                            children: [
                                { value: '430405', title: '珠晖区' },
                                { value: '430406', title: '雁峰区' },
                                { value: '430407', title: '石鼓区' },
                                { value: '430408', title: '蒸湘区' },
                                { value: '430412', title: '南岳区' },
                                { value: '430421', title: '衡阳县' },
                                { value: '430422', title: '衡南县' },
                                { value: '430423', title: '衡山县' },
                                { value: '430424', title: '衡东县' },
                                { value: '430426', title: '祁东县' },
                                { value: '430481', title: '耒阳市' },
                                { value: '430482', title: '常宁市' },
                            ]
                        },
                        {
                            title: '邵阳市',
                            value: '430500',
                            children: [
                                { value: '430502', title: '双清区' },
                                { value: '430503', title: '大祥区' },
                                { value: '430511', title: '北塔区' },
                                { value: '430522', title: '新邵县' },
                                { value: '430523', title: '邵阳县' },
                                { value: '430524', title: '隆回县' },
                                { value: '430525', title: '洞口县' },
                                { value: '430527', title: '绥宁县' },
                                { value: '430528', title: '新宁县' },
                                { value: '430529', title: '城步苗族自治县' },
                                { value: '430581', title: '武冈市' },
                                { value: '430582', title: '邵东市' },
                            ]
                        },
                        {
                            title: '岳阳市',
                            value: '430600',
                            children: [
                                { value: '430602', title: '岳阳楼区' },
                                { value: '430603', title: '云溪区' },
                                { value: '430611', title: '君山区' },
                                { value: '430621', title: '岳阳县' },
                                { value: '430623', title: '华容县' },
                                { value: '430624', title: '湘阴县' },
                                { value: '430626', title: '平江县' },
                                { value: '430681', title: '汨罗市' },
                                { value: '430682', title: '临湘市' },
                            ]
                        },
                        {
                            title: '常德市',
                            value: '430700',
                            children: [
                                { value: '430702', title: '武陵区' },
                                { value: '430703', title: '鼎城区' },
                                { value: '430721', title: '安乡县' },
                                { value: '430722', title: '汉寿县' },
                                { value: '430723', title: '澧县' },
                                { value: '430724', title: '临澧县' },
                                { value: '430725', title: '桃源县' },
                                { value: '430726', title: '石门县' },
                                { value: '430781', title: '津市市' },
                            ]
                        },
                        {
                            title: '张家界市',
                            value: '430800',
                            children: [
                                { value: '430802', title: '永定区' },
                                { value: '430811', title: '武陵源区' },
                                { value: '430821', title: '慈利县' },
                                { value: '430822', title: '桑植县' },
                            ]
                        },
                        {
                            title: '益阳市',
                            value: '430900',
                            children: [
                                { value: '430902', title: '资阳区' },
                                { value: '430903', title: '赫山区' },
                                { value: '430921', title: '南县' },
                                { value: '430922', title: '桃江县' },
                                { value: '430923', title: '安化县' },
                                { value: '430981', title: '沅江市' },
                            ]
                        },
                        {
                            title: '郴州市',
                            value: '431000',
                            children: [
                                { value: '431002', title: '北湖区' },
                                { value: '431003', title: '苏仙区' },
                                { value: '431021', title: '桂阳县' },
                                { value: '431022', title: '宜章县' },
                                { value: '431023', title: '永兴县' },
                                { value: '431024', title: '嘉禾县' },
                                { value: '431025', title: '临武县' },
                                { value: '431026', title: '汝城县' },
                                { value: '431027', title: '桂东县' },
                                { value: '431028', title: '安仁县' },
                                { value: '431081', title: '资兴市' },
                            ]
                        },
                        {
                            title: '永州市',
                            value: '431100',
                            children: [
                                { value: '431102', title: '零陵区' },
                                { value: '431103', title: '冷水滩区' },
                                { value: '431121', title: '祁阳市' },
                                { value: '431122', title: '东安县' },
                                { value: '431123', title: '双牌县' },
                                { value: '431124', title: '道县' },
                                { value: '431125', title: '江永县' },
                                { value: '431126', title: '宁远县' },
                                { value: '431127', title: '蓝山县' },
                                { value: '431128', title: '新田县' },
                                { value: '431129', title: '江华瑶族自治县' },
                            ]
                        },
                        {
                            title: '怀化市',
                            value: '431200',
                            children: [
                                { value: '431202', title: '鹤城区' },
                                { value: '431221', title: '中方县' },
                                { value: '431222', title: '沅陵县' },
                                { value: '431223', title: '辰溪县' },
                                { value: '431224', title: '溆浦县' },
                                { value: '431225', title: '会同县' },
                                { value: '431226', title: '麻阳苗族自治县' },
                                { value: '431227', title: '新晃侗族自治县' },
                                { value: '431228', title: '芷江侗族自治县' },
                                { value: '431229', title: '靖州苗族侗族自治县' },
                                { value: '431230', title: '通道侗族自治县' },
                                { value: '431281', title: '洪江市' },
                            ]
                        },
                        {
                            title: '娄底市',
                            value: '431300',
                            children: [
                                { value: '431302', title: '娄星区' },
                                { value: '431321', title: '双峰县' },
                                { value: '431322', title: '新化县' },
                                { value: '431381', title: '冷水江市' },
                                { value: '431382', title: '涟源市' },
                            ]
                        },
                        {
                            title: '湘西土家族苗族自治州',
                            value: '433100',
                            children: [
                                { value: '433101', title: '吉首市' },
                                { value: '433122', title: '泸溪县' },
                                { value: '433123', title: '凤凰县' },
                                { value: '433124', title: '花垣县' },
                                { value: '433125', title: '保靖县' },
                                { value: '433126', title: '古丈县' },
                                { value: '433127', title: '永顺县' },
                                { value: '433130', title: '龙山县' },
                            ]
                        },
                    ]
                },
                {
                    title: '广东省',
                    value: '440000',
                    children: [
                        {
                            title: '广州市',
                            value: '440100',
                            children: [
                                { value: '440103', title: '荔湾区' },
                                { value: '440104', title: '越秀区' },
                                { value: '440105', title: '海珠区' },
                                { value: '440106', title: '天河区' },
                                { value: '440111', title: '白云区' },
                                { value: '440112', title: '黄埔区' },
                                { value: '440113', title: '番禺区' },
                                { value: '440114', title: '花都区' },
                                { value: '440115', title: '南沙区' },
                                { value: '440117', title: '从化区' },
                                { value: '440118', title: '增城区' },
                            ]
                        },
                        {
                            title: '韶关市',
                            value: '440200',
                            children: [
                                { value: '440203', title: '武江区' },
                                { value: '440204', title: '浈江区' },
                                { value: '440205', title: '曲江区' },
                                { value: '440222', title: '始兴县' },
                                { value: '440224', title: '仁化县' },
                                { value: '440229', title: '翁源县' },
                                { value: '440232', title: '乳源瑶族自治县' },
                                { value: '440233', title: '新丰县' },
                                { value: '440281', title: '乐昌市' },
                                { value: '440282', title: '南雄市' },
                            ]
                        },
                        {
                            title: '深圳市',
                            value: '440300',
                            children: [
                                { value: '440303', title: '罗湖区' },
                                { value: '440304', title: '福田区' },
                                { value: '440305', title: '南山区' },
                                { value: '440306', title: '宝安区' },
                                { value: '440307', title: '龙岗区' },
                                { value: '440308', title: '盐田区' },
                                { value: '440309', title: '龙华区' },
                                { value: '440310', title: '坪山区' },
                                { value: '440311', title: '光明区' },
                            ]
                        },
                        {
                            title: '珠海市',
                            value: '440400',
                            children: [
                                { value: '440402', title: '香洲区' },
                                { value: '440403', title: '斗门区' },
                                { value: '440404', title: '金湾区' },
                            ]
                        },
                        {
                            title: '汕头市',
                            value: '440500',
                            children: [
                                { value: '440507', title: '龙湖区' },
                                { value: '440511', title: '金平区' },
                                { value: '440512', title: '濠江区' },
                                { value: '440513', title: '潮阳区' },
                                { value: '440514', title: '潮南区' },
                                { value: '440515', title: '澄海区' },
                                { value: '440523', title: '南澳县' },
                            ]
                        },
                        {
                            title: '佛山市',
                            value: '440600',
                            children: [
                                { value: '440604', title: '禅城区' },
                                { value: '440605', title: '南海区' },
                                { value: '440606', title: '顺德区' },
                                { value: '440607', title: '三水区' },
                                { value: '440608', title: '高明区' },
                            ]
                        },
                        {
                            title: '江门市',
                            value: '440700',
                            children: [
                                { value: '440703', title: '蓬江区' },
                                { value: '440704', title: '江海区' },
                                { value: '440705', title: '新会区' },
                                { value: '440781', title: '台山市' },
                                { value: '440783', title: '开平市' },
                                { value: '440784', title: '鹤山市' },
                                { value: '440785', title: '恩平市' },
                            ]
                        },
                        {
                            title: '湛江市',
                            value: '440800',
                            children: [
                                { value: '440802', title: '赤坎区' },
                                { value: '440803', title: '霞山区' },
                                { value: '440804', title: '坡头区' },
                                { value: '440811', title: '麻章区' },
                                { value: '440823', title: '遂溪县' },
                                { value: '440825', title: '徐闻县' },
                                { value: '440881', title: '廉江市' },
                                { value: '440882', title: '雷州市' },
                                { value: '440883', title: '吴川市' },
                            ]
                        },
                        {
                            title: '茂名市',
                            value: '440900',
                            children: [
                                { value: '440902', title: '茂南区' },
                                { value: '440904', title: '电白区' },
                                { value: '440981', title: '高州市' },
                                { value: '440982', title: '化州市' },
                                { value: '440983', title: '信宜市' },
                            ]
                        },
                        {
                            title: '肇庆市',
                            value: '441200',
                            children: [
                                { value: '441202', title: '端州区' },
                                { value: '441203', title: '鼎湖区' },
                                { value: '441204', title: '高要区' },
                                { value: '441223', title: '广宁县' },
                                { value: '441224', title: '怀集县' },
                                { value: '441225', title: '封开县' },
                                { value: '441226', title: '德庆县' },
                                { value: '441284', title: '四会市' },
                            ]
                        },
                        {
                            title: '惠州市',
                            value: '441300',
                            children: [
                                { value: '441302', title: '惠城区' },
                                { value: '441303', title: '惠阳区' },
                                { value: '441322', title: '博罗县' },
                                { value: '441323', title: '惠东县' },
                                { value: '441324', title: '龙门县' },
                            ]
                        },
                        {
                            title: '梅州市',
                            value: '441400',
                            children: [
                                { value: '441402', title: '梅江区' },
                                { value: '441403', title: '梅县区' },
                                { value: '441422', title: '大埔县' },
                                { value: '441423', title: '丰顺县' },
                                { value: '441424', title: '五华县' },
                                { value: '441426', title: '平远县' },
                                { value: '441427', title: '蕉岭县' },
                                { value: '441481', title: '兴宁市' },
                            ]
                        },
                        {
                            title: '汕尾市',
                            value: '441500',
                            children: [
                                { value: '441502', title: '城区' },
                                { value: '441521', title: '海丰县' },
                                { value: '441523', title: '陆河县' },
                                { value: '441581', title: '陆丰市' },
                            ]
                        },
                        {
                            title: '河源市',
                            value: '441600',
                            children: [
                                { value: '441602', title: '源城区' },
                                { value: '441621', title: '紫金县' },
                                { value: '441622', title: '龙川县' },
                                { value: '441623', title: '连平县' },
                                { value: '441624', title: '和平县' },
                                { value: '441625', title: '东源县' },
                            ]
                        },
                        {
                            title: '阳江市',
                            value: '441700',
                            children: [
                                { value: '441702', title: '江城区' },
                                { value: '441704', title: '阳东区' },
                                { value: '441721', title: '阳西县' },
                                { value: '441781', title: '阳春市' },
                            ]
                        },
                        {
                            title: '清远市',
                            value: '441800',
                            children: [
                                { value: '441802', title: '清城区' },
                                { value: '441803', title: '清新区' },
                                { value: '441821', title: '佛冈县' },
                                { value: '441823', title: '阳山县' },
                                { value: '441825', title: '连山壮族瑶族自治县' },
                                { value: '441826', title: '连南瑶族自治县' },
                                { value: '441881', title: '英德市' },
                                { value: '441882', title: '连州市' },
                            ]
                        },
                        { title: '东莞市', value: '441900' },
                        { title: '中山市', value: '442000' },
                        {
                            title: '潮州市',
                            value: '445100',
                            children: [
                                { value: '445102', title: '湘桥区' },
                                { value: '445103', title: '潮安区' },
                                { value: '445122', title: '饶平县' },
                            ]
                        },
                        {
                            title: '揭阳市',
                            value: '445200',
                            children: [
                                { value: '445202', title: '榕城区' },
                                { value: '445203', title: '揭东区' },
                                { value: '445222', title: '揭西县' },
                                { value: '445224', title: '惠来县' },
                                { value: '445281', title: '普宁市' },
                            ]
                        },
                        {
                            title: '云浮市',
                            value: '445300',
                            children: [
                                { value: '445302', title: '云城区' },
                                { value: '445303', title: '云安区' },
                                { value: '445321', title: '新兴县' },
                                { value: '445322', title: '郁南县' },
                                { value: '445381', title: '罗定市' },
                            ]
                        },
                    ]
                },
                {
                    title: '广西壮族自治区',
                    value: '450000',
                    children: [
                        {
                            title: '南宁市',
                            value: '450100',
                            children: [
                                { value: '450102', title: '兴宁区' },
                                { value: '450103', title: '青秀区' },
                                { value: '450105', title: '江南区' },
                                { value: '450107', title: '西乡塘区' },
                                { value: '450108', title: '良庆区' },
                                { value: '450109', title: '邕宁区' },
                                { value: '450110', title: '武鸣区' },
                                { value: '450123', title: '隆安县' },
                                { value: '450124', title: '马山县' },
                                { value: '450125', title: '上林县' },
                                { value: '450126', title: '宾阳县' },
                                { value: '450127', title: '横州市' },
                            ]
                        },
                        {
                            title: '柳州市',
                            value: '450200',
                            children: [
                                { value: '450202', title: '城中区' },
                                { value: '450203', title: '鱼峰区' },
                                { value: '450204', title: '柳南区' },
                                { value: '450205', title: '柳北区' },
                                { value: '450206', title: '柳江区' },
                                { value: '450222', title: '柳城县' },
                                { value: '450223', title: '鹿寨县' },
                                { value: '450224', title: '融安县' },
                                { value: '450225', title: '融水苗族自治县' },
                                { value: '450226', title: '三江侗族自治县' },
                            ]
                        },
                        {
                            title: '桂林市',
                            value: '450300',
                            children: [
                                { value: '450302', title: '秀峰区' },
                                { value: '450303', title: '叠彩区' },
                                { value: '450304', title: '象山区' },
                                { value: '450305', title: '七星区' },
                                { value: '450311', title: '雁山区' },
                                { value: '450312', title: '临桂区' },
                                { value: '450321', title: '阳朔县' },
                                { value: '450323', title: '灵川县' },
                                { value: '450324', title: '全州县' },
                                { value: '450325', title: '兴安县' },
                                { value: '450326', title: '永福县' },
                                { value: '450327', title: '灌阳县' },
                                { value: '450328', title: '龙胜各族自治县' },
                                { value: '450329', title: '资源县' },
                                { value: '450330', title: '平乐县' },
                                { value: '450332', title: '恭城瑶族自治县' },
                                { value: '450381', title: '荔浦市' },
                            ]
                        },
                        {
                            title: '梧州市',
                            value: '450400',
                            children: [
                                { value: '450403', title: '万秀区' },
                                { value: '450405', title: '长洲区' },
                                { value: '450406', title: '龙圩区' },
                                { value: '450421', title: '苍梧县' },
                                { value: '450422', title: '藤县' },
                                { value: '450423', title: '蒙山县' },
                                { value: '450481', title: '岑溪市' },
                            ]
                        },
                        {
                            title: '北海市',
                            value: '450500',
                            children: [
                                { value: '450502', title: '海城区' },
                                { value: '450503', title: '银海区' },
                                { value: '450512', title: '铁山港区' },
                                { value: '450521', title: '合浦县' },
                            ]
                        },
                        {
                            title: '防城港市',
                            value: '450600',
                            children: [
                                { value: '450602', title: '港口区' },
                                { value: '450603', title: '防城区' },
                                { value: '450621', title: '上思县' },
                                { value: '450681', title: '东兴市' },
                            ]
                        },
                        {
                            title: '钦州市',
                            value: '450700',
                            children: [
                                { value: '450702', title: '钦南区' },
                                { value: '450703', title: '钦北区' },
                                { value: '450721', title: '灵山县' },
                                { value: '450722', title: '浦北县' },
                            ]
                        },
                        {
                            title: '贵港市',
                            value: '450800',
                            children: [
                                { value: '450802', title: '港北区' },
                                { value: '450803', title: '港南区' },
                                { value: '450804', title: '覃塘区' },
                                { value: '450821', title: '平南县' },
                                { value: '450881', title: '桂平市' },
                            ]
                        },
                        {
                            title: '玉林市',
                            value: '450900',
                            children: [
                                { value: '450902', title: '玉州区' },
                                { value: '450903', title: '福绵区' },
                                { value: '450921', title: '容县' },
                                { value: '450922', title: '陆川县' },
                                { value: '450923', title: '博白县' },
                                { value: '450924', title: '兴业县' },
                                { value: '450981', title: '北流市' },
                            ]
                        },
                        {
                            title: '百色市',
                            value: '451000',
                            children: [
                                { value: '451002', title: '右江区' },
                                { value: '451003', title: '田阳区' },
                                { value: '451022', title: '田东县' },
                                { value: '451024', title: '德保县' },
                                { value: '451026', title: '那坡县' },
                                { value: '451027', title: '凌云县' },
                                { value: '451028', title: '乐业县' },
                                { value: '451029', title: '田林县' },
                                { value: '451030', title: '西林县' },
                                { value: '451031', title: '隆林各族自治县' },
                                { value: '451081', title: '靖西市' },
                                { value: '451082', title: '平果市' },
                            ]
                        },
                        {
                            title: '贺州市',
                            value: '451100',
                            children: [
                                { value: '451102', title: '八步区' },
                                { value: '451103', title: '平桂区' },
                                { value: '451121', title: '昭平县' },
                                { value: '451122', title: '钟山县' },
                                { value: '451123', title: '富川瑶族自治县' },
                            ]
                        },
                        {
                            title: '河池市',
                            value: '451200',
                            children: [
                                { value: '451202', title: '金城江区' },
                                { value: '451203', title: '宜州区' },
                                { value: '451221', title: '南丹县' },
                                { value: '451222', title: '天峨县' },
                                { value: '451223', title: '凤山县' },
                                { value: '451224', title: '东兰县' },
                                { value: '451225', title: '罗城仫佬族自治县' },
                                { value: '451226', title: '环江毛南族自治县' },
                                { value: '451227', title: '巴马瑶族自治县' },
                                { value: '451228', title: '都安瑶族自治县' },
                                { value: '451229', title: '大化瑶族自治县' },
                            ]
                        },
                        {
                            title: '来宾市',
                            value: '451300',
                            children: [
                                { value: '451302', title: '兴宾区' },
                                { value: '451321', title: '忻城县' },
                                { value: '451322', title: '象州县' },
                                { value: '451323', title: '武宣县' },
                                { value: '451324', title: '金秀瑶族自治县' },
                                { value: '451381', title: '合山市' },
                            ]
                        },
                        {
                            title: '崇左市',
                            value: '451400',
                            children: [
                                { value: '451402', title: '江州区' },
                                { value: '451421', title: '扶绥县' },
                                { value: '451422', title: '宁明县' },
                                { value: '451423', title: '龙州县' },
                                { value: '451424', title: '大新县' },
                                { value: '451425', title: '天等县' },
                                { value: '451481', title: '凭祥市' },
                            ]
                        },
                    ]
                },
                {
                    title: '海南省',
                    value: '460000',
                    children: [
                        {
                            title: '海口市',
                            value: '460100',
                            children: [
                                { value: '460105', title: '秀英区' },
                                { value: '460106', title: '龙华区' },
                                { value: '460107', title: '琼山区' },
                                { value: '460108', title: '美兰区' },
                            ]
                        },
                        {
                            title: '三亚市',
                            value: '460200',
                            children: [
                                { value: '460202', title: '海棠区' },
                                { value: '460203', title: '吉阳区' },
                                { value: '460204', title: '天涯区' },
                                { value: '460205', title: '崖州区' },
                            ]
                        },
                        {
                            title: '三沙市',
                            value: '460300',
                            children: [
                                { value: '460301', title: '西沙区' },
                                { value: '460302', title: '南沙区' },
                            ]
                        },
                        { title: '儋州市', value: '460400' },
                        { title: '五指山市', value: '469001' },
                        { title: '琼海市', value: '469002' },
                        { title: '文昌市', value: '469005' },
                        { title: '万宁市', value: '469006' },
                        { title: '东方市', value: '469007' },
                        { title: '定安县', value: '469021' },
                        { title: '屯昌县', value: '469022' },
                        { title: '澄迈县', value: '469023' },
                        { title: '临高县', value: '469024' },
                        { title: '白沙黎族自治县', value: '469025' },
                        { title: '昌江黎族自治县', value: '469026' },
                        { title: '乐东黎族自治县', value: '469027' },
                        { title: '陵水黎族自治县', value: '469028' },
                        { title: '保亭黎族苗族自治县', value: '469029' },
                        { title: '琼中黎族苗族自治县', value: '469030' },
                    ]
                },
                {
                    title: '重庆市',
                    value: '500000',
                    children: [
                        { title: '万州区', value: '500101' },
                        { title: '涪陵区', value: '500102' },
                        { title: '渝中区', value: '500103' },
                        { title: '大渡口区', value: '500104' },
                        { title: '江北区', value: '500105' },
                        { title: '沙坪坝区', value: '500106' },
                        { title: '九龙坡区', value: '500107' },
                        { title: '南岸区', value: '500108' },
                        { title: '北碚区', value: '500109' },
                        { title: '綦江区', value: '500110' },
                        { title: '大足区', value: '500111' },
                        { title: '渝北区', value: '500112' },
                        { title: '巴南区', value: '500113' },
                        { title: '黔江区', value: '500114' },
                        { title: '长寿区', value: '500115' },
                        { title: '江津区', value: '500116' },
                        { title: '合川区', value: '500117' },
                        { title: '永川区', value: '500118' },
                        { title: '南川区', value: '500119' },
                        { title: '璧山区', value: '500120' },
                        { title: '铜梁区', value: '500151' },
                        { title: '潼南区', value: '500152' },
                        { title: '荣昌区', value: '500153' },
                        { title: '开州区', value: '500154' },
                        { title: '梁平区', value: '500155' },
                        { title: '武隆区', value: '500156' },
                        { title: '城口县', value: '500229' },
                        { title: '丰都县', value: '500230' },
                        { title: '垫江县', value: '500231' },
                        { title: '忠县', value: '500233' },
                        { title: '云阳县', value: '500235' },
                        { title: '奉节县', value: '500236' },
                        { title: '巫山县', value: '500237' },
                        { title: '巫溪县', value: '500238' },
                        { title: '石柱土家族自治县', value: '500240' },
                        { title: '秀山土家族苗族自治县', value: '500241' },
                        { title: '酉阳土家族苗族自治县', value: '500242' },
                        { title: '彭水苗族土家族自治县', value: '500243' },
                    ]
                },
                {
                    title: '四川省',
                    value: '510000',
                    children: [
                        {
                            title: '成都市',
                            value: '510100',
                            children: [
                                { value: '510104', title: '锦江区' },
                                { value: '510105', title: '青羊区' },
                                { value: '510106', title: '金牛区' },
                                { value: '510107', title: '武侯区' },
                                { value: '510108', title: '成华区' },
                                { value: '510112', title: '龙泉驿区' },
                                { value: '510113', title: '青白江区' },
                                { value: '510114', title: '新都区' },
                                { value: '510115', title: '温江区' },
                                { value: '510116', title: '双流区' },
                                { value: '510117', title: '郫都区' },
                                { value: '510118', title: '新津区' },
                                { value: '510121', title: '金堂县' },
                                { value: '510129', title: '大邑县' },
                                { value: '510131', title: '蒲江县' },
                                { value: '510181', title: '都江堰市' },
                                { value: '510182', title: '彭州市' },
                                { value: '510183', title: '邛崃市' },
                                { value: '510184', title: '崇州市' },
                                { value: '510185', title: '简阳市' },
                            ]
                        },
                        {
                            title: '自贡市',
                            value: '510300',
                            children: [
                                { value: '510302', title: '自流井区' },
                                { value: '510303', title: '贡井区' },
                                { value: '510304', title: '大安区' },
                                { value: '510311', title: '沿滩区' },
                                { value: '510321', title: '荣县' },
                                { value: '510322', title: '富顺县' },
                            ]
                        },
                        {
                            title: '攀枝花市',
                            value: '510400',
                            children: [
                                { value: '510402', title: '东区' },
                                { value: '510403', title: '西区' },
                                { value: '510411', title: '仁和区' },
                                { value: '510421', title: '米易县' },
                                { value: '510422', title: '盐边县' },
                            ]
                        },
                        {
                            title: '泸州市',
                            value: '510500',
                            children: [
                                { value: '510502', title: '江阳区' },
                                { value: '510503', title: '纳溪区' },
                                { value: '510504', title: '龙马潭区' },
                                { value: '510521', title: '泸县' },
                                { value: '510522', title: '合江县' },
                                { value: '510524', title: '叙永县' },
                                { value: '510525', title: '古蔺县' },
                            ]
                        },
                        {
                            title: '德阳市',
                            value: '510600',
                            children: [
                                { value: '510603', title: '旌阳区' },
                                { value: '510604', title: '罗江区' },
                                { value: '510623', title: '中江县' },
                                { value: '510681', title: '广汉市' },
                                { value: '510682', title: '什邡市' },
                                { value: '510683', title: '绵竹市' },
                            ]
                        },
                        {
                            title: '绵阳市',
                            value: '510700',
                            children: [
                                { value: '510703', title: '涪城区' },
                                { value: '510704', title: '游仙区' },
                                { value: '510705', title: '安州区' },
                                { value: '510722', title: '三台县' },
                                { value: '510723', title: '盐亭县' },
                                { value: '510725', title: '梓潼县' },
                                { value: '510726', title: '北川羌族自治县' },
                                { value: '510727', title: '平武县' },
                                { value: '510781', title: '江油市' },
                            ]
                        },
                        {
                            title: '广元市',
                            value: '510800',
                            children: [
                                { value: '510802', title: '利州区' },
                                { value: '510811', title: '昭化区' },
                                { value: '510812', title: '朝天区' },
                                { value: '510821', title: '旺苍县' },
                                { value: '510822', title: '青川县' },
                                { value: '510823', title: '剑阁县' },
                                { value: '510824', title: '苍溪县' },
                            ]
                        },
                        {
                            title: '遂宁市',
                            value: '510900',
                            children: [
                                { value: '510903', title: '船山区' },
                                { value: '510904', title: '安居区' },
                                { value: '510921', title: '蓬溪县' },
                                { value: '510923', title: '大英县' },
                                { value: '510981', title: '射洪市' },
                            ]
                        },
                        {
                            title: '内江市',
                            value: '511000',
                            children: [
                                { value: '511002', title: '市中区' },
                                { value: '511011', title: '东兴区' },
                                { value: '511024', title: '威远县' },
                                { value: '511025', title: '资中县' },
                                { value: '511083', title: '隆昌市' },
                            ]
                        },
                        {
                            title: '乐山市',
                            value: '511100',
                            children: [
                                { value: '511102', title: '市中区' },
                                { value: '511111', title: '沙湾区' },
                                { value: '511112', title: '五通桥区' },
                                { value: '511113', title: '金口河区' },
                                { value: '511123', title: '犍为县' },
                                { value: '511124', title: '井研县' },
                                { value: '511126', title: '夹江县' },
                                { value: '511129', title: '沐川县' },
                                { value: '511132', title: '峨边彝族自治县' },
                                { value: '511133', title: '马边彝族自治县' },
                                { value: '511181', title: '峨眉山市' },
                            ]
                        },
                        {
                            title: '资阳市',
                            value: '512000',
                            children: [
                                { value: '512002', title: '雁江区' },
                                { value: '512021', title: '安岳县' },
                                { value: '512022', title: '乐至县' },
                            ]
                        },
                        {
                            title: '南充市',
                            value: '511300',
                            children: [
                                { value: '511302', title: '顺庆区' },
                                { value: '511303', title: '高坪区' },
                                { value: '511304', title: '嘉陵区' },
                                { value: '511321', title: '南部县' },
                                { value: '511322', title: '营山县' },
                                { value: '511323', title: '蓬安县' },
                                { value: '511324', title: '仪陇县' },
                                { value: '511325', title: '西充县' },
                                { value: '511381', title: '阆中市' },
                            ]
                        },
                        {
                            title: '眉山市',
                            value: '511400',
                            children: [
                                { value: '511402', title: '东坡区' },
                                { value: '511403', title: '彭山区' },
                                { value: '511421', title: '仁寿县' },
                                { value: '511423', title: '洪雅县' },
                                { value: '511424', title: '丹棱县' },
                                { value: '511425', title: '青神县' },
                            ]
                        },
                        {
                            title: '宜宾市',
                            value: '511500',
                            children: [
                                { value: '511502', title: '翠屏区' },
                                { value: '511503', title: '南溪区' },
                                { value: '511504', title: '叙州区' },
                                { value: '511523', title: '江安县' },
                                { value: '511524', title: '长宁县' },
                                { value: '511525', title: '高县' },
                                { value: '511526', title: '珙县' },
                                { value: '511527', title: '筠连县' },
                                { value: '511528', title: '兴文县' },
                                { value: '511529', title: '屏山县' },
                            ]
                        },
                        {
                            title: '广安市',
                            value: '511600',
                            children: [
                                { value: '511602', title: '广安区' },
                                { value: '511603', title: '前锋区' },
                                { value: '511621', title: '岳池县' },
                                { value: '511622', title: '武胜县' },
                                { value: '511623', title: '邻水县' },
                                { value: '511681', title: '华蓥市' },
                            ]
                        },
                        {
                            title: '达州市',
                            value: '511700',
                            children: [
                                { value: '511702', title: '通川区' },
                                { value: '511703', title: '达川区' },
                                { value: '511722', title: '宣汉县' },
                                { value: '511723', title: '开江县' },
                                { value: '511724', title: '大竹县' },
                                { value: '511725', title: '渠县' },
                                { value: '511781', title: '万源市' },
                            ]
                        },
                        {
                            title: '雅安市',
                            value: '511800',
                            children: [
                                { value: '511802', title: '雨城区' },
                                { value: '511803', title: '名山区' },
                                { value: '511822', title: '荥经县' },
                                { value: '511823', title: '汉源县' },
                                { value: '511824', title: '石棉县' },
                                { value: '511825', title: '天全县' },
                                { value: '511826', title: '芦山县' },
                                { value: '511827', title: '宝兴县' },
                            ]
                        },
                        {
                            title: '巴中市',
                            value: '511900',
                            children: [
                                { value: '511902', title: '巴州区' },
                                { value: '511903', title: '恩阳区' },
                                { value: '511921', title: '通江县' },
                                { value: '511922', title: '南江县' },
                                { value: '511923', title: '平昌县' },
                            ]
                        },
                        {
                            title: '阿坝藏族羌族自治州',
                            value: '513200',
                            children: [
                                { value: '513201', title: '马尔康市' },
                                { value: '513221', title: '汶川县' },
                                { value: '513222', title: '理县' },
                                { value: '513223', title: '茂县' },
                                { value: '513224', title: '松潘县' },
                                { value: '513225', title: '九寨沟县' },
                                { value: '513226', title: '金川县' },
                                { value: '513227', title: '小金县' },
                                { value: '513228', title: '黑水县' },
                                { value: '513230', title: '壤塘县' },
                                { value: '513231', title: '阿坝县' },
                                { value: '513232', title: '若尔盖县' },
                                { value: '513233', title: '红原县' },
                            ]
                        },
                        {
                            title: '甘孜藏族自治州',
                            value: '513300',
                            children: [
                                { value: '513301', title: '康定市' },
                                { value: '513322', title: '泸定县' },
                                { value: '513323', title: '丹巴县' },
                                { value: '513324', title: '九龙县' },
                                { value: '513325', title: '雅江县' },
                                { value: '513326', title: '道孚县' },
                                { value: '513327', title: '炉霍县' },
                                { value: '513328', title: '甘孜县' },
                                { value: '513329', title: '新龙县' },
                                { value: '513330', title: '德格县' },
                                { value: '513331', title: '白玉县' },
                                { value: '513332', title: '石渠县' },
                                { value: '513333', title: '色达县' },
                                { value: '513334', title: '理塘县' },
                                { value: '513335', title: '巴塘县' },
                                { value: '513336', title: '乡城县' },
                                { value: '513337', title: '稻城县' },
                                { value: '513338', title: '得荣县' },
                            ]
                        },
                        {
                            title: '凉山彝族自治州',
                            value: '513400',
                            children: [
                                { value: '513401', title: '西昌市' },
                                { value: '513422', title: '木里藏族自治县' },
                                { value: '513423', title: '盐源县' },
                                { value: '513424', title: '德昌县' },
                                { value: '513425', title: '会理市' },
                                { value: '513426', title: '会东县' },
                                { value: '513427', title: '宁南县' },
                                { value: '513428', title: '普格县' },
                                { value: '513429', title: '布拖县' },
                                { value: '513430', title: '金阳县' },
                                { value: '513431', title: '昭觉县' },
                                { value: '513432', title: '喜德县' },
                                { value: '513433', title: '冕宁县' },
                                { value: '513434', title: '越西县' },
                                { value: '513435', title: '甘洛县' },
                                { value: '513436', title: '美姑县' },
                                { value: '513437', title: '雷波县' },
                            ]
                        },
                    ]
                },
                {
                    title: '贵州省',
                    value: '520000',
                    children: [
                        {
                            title: '贵阳市',
                            value: '520100',
                            children: [
                                { value: '520102', title: '南明区' },
                                { value: '520103', title: '云岩区' },
                                { value: '520111', title: '花溪区' },
                                { value: '520112', title: '乌当区' },
                                { value: '520113', title: '白云区' },
                                { value: '520115', title: '观山湖区' },
                                { value: '520121', title: '开阳县' },
                                { value: '520122', title: '息烽县' },
                                { value: '520123', title: '修文县' },
                                { value: '520181', title: '清镇市' },
                            ]
                        },
                        {
                            title: '六盘水市',
                            value: '520200',
                            children: [
                                { value: '520201', title: '钟山区' },
                                { value: '520203', title: '六枝特区' },
                                { value: '520221', title: '水城区' },
                                { value: '520281', title: '盘州市' },
                            ]
                        },
                        {
                            title: '遵义市',
                            value: '520300',
                            children: [
                                { value: '520302', title: '红花岗区' },
                                { value: '520303', title: '汇川区' },
                                { value: '520304', title: '播州区' },
                                { value: '520322', title: '桐梓县' },
                                { value: '520323', title: '绥阳县' },
                                { value: '520324', title: '正安县' },
                                { value: '520325', title: '道真仡佬族苗族自治县' },
                                { value: '520326', title: '务川仡佬族苗族自治县' },
                                { value: '520327', title: '凤冈县' },
                                { value: '520328', title: '湄潭县' },
                                { value: '520329', title: '余庆县' },
                                { value: '520330', title: '习水县' },
                                { value: '520381', title: '赤水市' },
                                { value: '520382', title: '仁怀市' },
                            ]
                        },
                        {
                            title: '安顺市',
                            value: '520400',
                            children: [
                                { value: '520402', title: '西秀区' },
                                { value: '520403', title: '平坝区' },
                                { value: '520422', title: '普定县' },
                                { value: '520423', title: '镇宁布依族苗族自治县' },
                                { value: '520424', title: '关岭布依族苗族自治县' },
                                { value: '520425', title: '紫云苗族布依族自治县' },
                            ]
                        },
                        {
                            title: '毕节市',
                            value: '520500',
                            children: [
                                { value: '520502', title: '七星关区' },
                                { value: '520521', title: '大方县' },
                                { value: '520522', title: '黔西市' },
                                { value: '520523', title: '金沙县' },
                                { value: '520524', title: '织金县' },
                                { value: '520525', title: '纳雍县' },
                                { value: '520526', title: '威宁彝族回族苗族自治县' },
                                { value: '520527', title: '赫章县' },
                            ]
                        },
                        {
                            title: '铜仁市',
                            value: '520600',
                            children: [
                                { value: '520602', title: '碧江区' },
                                { value: '520603', title: '万山区' },
                                { value: '520621', title: '江口县' },
                                { value: '520622', title: '玉屏侗族自治县' },
                                { value: '520623', title: '石阡县' },
                                { value: '520624', title: '思南县' },
                                { value: '520625', title: '印江土家族苗族自治县' },
                                { value: '520626', title: '德江县' },
                                { value: '520627', title: '沿河土家族自治县' },
                                { value: '520628', title: '松桃苗族自治县' },
                            ]
                        },
                        {
                            title: '黔西南布依族苗族自治州',
                            value: '522300',
                            children: [
                                { value: '522301', title: '兴义市' },
                                { value: '522302', title: '兴仁市' },
                                { value: '522323', title: '普安县' },
                                { value: '522324', title: '晴隆县' },
                                { value: '522325', title: '贞丰县' },
                                { value: '522326', title: '望谟县' },
                                { value: '522327', title: '册亨县' },
                                { value: '522328', title: '安龙县' },
                            ]
                        },
                        {
                            title: '黔东南苗族侗族自治州',
                            value: '522600',
                            children: [
                                { value: '522601', title: '凯里市' },
                                { value: '522622', title: '黄平县' },
                                { value: '522623', title: '施秉县' },
                                { value: '522624', title: '三穗县' },
                                { value: '522625', title: '镇远县' },
                                { value: '522626', title: '岑巩县' },
                                { value: '522627', title: '天柱县' },
                                { value: '522628', title: '锦屏县' },
                                { value: '522629', title: '剑河县' },
                                { value: '522630', title: '台江县' },
                                { value: '522631', title: '黎平县' },
                                { value: '522632', title: '榕江县' },
                                { value: '522633', title: '从江县' },
                                { value: '522634', title: '雷山县' },
                                { value: '522635', title: '麻江县' },
                                { value: '522636', title: '丹寨县' },
                            ]
                        },
                        {
                            title: '黔南布依族苗族自治州',
                            value: '522700',
                            children: [
                                { value: '522701', title: '都匀市' },
                                { value: '522702', title: '福泉市' },
                                { value: '522722', title: '荔波县' },
                                { value: '522723', title: '贵定县' },
                                { value: '522725', title: '瓮安县' },
                                { value: '522726', title: '独山县' },
                                { value: '522727', title: '平塘县' },
                                { value: '522728', title: '罗甸县' },
                                { value: '522729', title: '长顺县' },
                                { value: '522730', title: '龙里县' },
                                { value: '522731', title: '惠水县' },
                                { value: '522732', title: '三都水族自治县' },
                            ]
                        },
                    ]
                },
                {
                    title: '云南省',
                    value: '530000',
                    children: [
                        {
                            title: '昆明市',
                            value: '530100',
                            children: [
                                { value: '530102', title: '五华区' },
                                { value: '530103', title: '盘龙区' },
                                { value: '530111', title: '官渡区' },
                                { value: '530112', title: '西山区' },
                                { value: '530113', title: '东川区' },
                                { value: '530114', title: '呈贡区' },
                                { value: '530115', title: '晋宁区' },
                                { value: '530124', title: '富民县' },
                                { value: '530125', title: '宜良县' },
                                { value: '530126', title: '石林彝族自治县' },
                                { value: '530127', title: '嵩明县' },
                                { value: '530128', title: '禄劝彝族苗族自治县' },
                                { value: '530129', title: '寻甸回族彝族自治县' },
                                { value: '530181', title: '安宁市' },
                            ]
                        },
                        {
                            title: '曲靖市',
                            value: '530300',
                            children: [
                                { value: '530302', title: '麒麟区' },
                                { value: '530303', title: '沾益区' },
                                { value: '530304', title: '马龙区' },
                                { value: '530322', title: '陆良县' },
                                { value: '530323', title: '师宗县' },
                                { value: '530324', title: '罗平县' },
                                { value: '530325', title: '富源县' },
                                { value: '530326', title: '会泽县' },
                                { value: '530381', title: '宣威市' },
                            ]
                        },
                        {
                            title: '玉溪市',
                            value: '530400',
                            children: [
                                { value: '530402', title: '红塔区' },
                                { value: '530403', title: '江川区' },
                                { value: '530423', title: '通海县' },
                                { value: '530424', title: '华宁县' },
                                { value: '530425', title: '易门县' },
                                { value: '530426', title: '峨山彝族自治县' },
                                { value: '530427', title: '新平彝族傣族自治县' },
                                { value: '530428', title: '元江哈尼族彝族傣族自治县' },
                                { value: '530481', title: '澄江市' },
                            ]
                        },
                        {
                            title: '保山市',
                            value: '530500',
                            children: [
                                { value: '530502', title: '隆阳区' },
                                { value: '530521', title: '施甸县' },
                                { value: '530523', title: '龙陵县' },
                                { value: '530524', title: '昌宁县' },
                                { value: '530581', title: '腾冲市' },
                            ]
                        },
                        {
                            title: '昭通市',
                            value: '530600',
                            children: [
                                { value: '530602', title: '昭阳区' },
                                { value: '530621', title: '鲁甸县' },
                                { value: '530622', title: '巧家县' },
                                { value: '530623', title: '盐津县' },
                                { value: '530624', title: '大关县' },
                                { value: '530625', title: '永善县' },
                                { value: '530626', title: '绥江县' },
                                { value: '530627', title: '镇雄县' },
                                { value: '530628', title: '彝良县' },
                                { value: '530629', title: '威信县' },
                                { value: '530681', title: '水富市' },
                            ]
                        },
                        {
                            title: '丽江市',
                            value: '530700',
                            children: [
                                { value: '530702', title: '古城区' },
                                { value: '530721', title: '玉龙纳西族自治县' },
                                { value: '530722', title: '永胜县' },
                                { value: '530723', title: '华坪县' },
                                { value: '530724', title: '宁蒗彝族自治县' },
                            ]
                        },
                        {
                            title: '普洱市',
                            value: '530800',
                            children: [
                                { value: '530802', title: '思茅区' },
                                { value: '530821', title: '宁洱哈尼族彝族自治县' },
                                { value: '530822', title: '墨江哈尼族自治县' },
                                { value: '530823', title: '景东彝族自治县' },
                                { value: '530824', title: '景谷傣族彝族自治县' },
                                { value: '530825', title: '镇沅彝族哈尼族拉祜族自治县' },
                                { value: '530826', title: '江城哈尼族彝族自治县' },
                                { value: '530827', title: '孟连傣族拉祜族佤族自治县' },
                                { value: '530828', title: '澜沧拉祜族自治县' },
                                { value: '530829', title: '西盟佤族自治县' },
                            ]
                        },
                        {
                            title: '临沧市',
                            value: '530900',
                            children: [
                                { value: '530902', title: '临翔区' },
                                { value: '530921', title: '凤庆县' },
                                { value: '530922', title: '云县' },
                                { value: '530923', title: '永德县' },
                                { value: '530924', title: '镇康县' },
                                { value: '530925', title: '双江拉祜族佤族布朗族傣族自治县' },
                                { value: '530926', title: '耿马傣族佤族自治县' },
                                { value: '530927', title: '沧源佤族自治县' },
                            ]
                        },
                        {
                            title: '楚雄彝族自治州',
                            value: '532300',
                            children: [
                                { value: '532301', title: '楚雄市' },
                                { value: '532322', title: '双柏县' },
                                { value: '532323', title: '牟定县' },
                                { value: '532324', title: '南华县' },
                                { value: '532325', title: '姚安县' },
                                { value: '532326', title: '大姚县' },
                                { value: '532327', title: '永仁县' },
                                { value: '532328', title: '元谋县' },
                                { value: '532329', title: '武定县' },
                                { value: '532331', title: '禄丰市' },
                            ]
                        },
                        {
                            title: '红河哈尼族彝族自治州',
                            value: '532500',
                            children: [
                                { value: '532501', title: '个旧市' },
                                { value: '532502', title: '开远市' },
                                { value: '532503', title: '蒙自市' },
                                { value: '532504', title: '弥勒市' },
                                { value: '532523', title: '屏边苗族自治县' },
                                { value: '532524', title: '建水县' },
                                { value: '532525', title: '石屏县' },
                                { value: '532527', title: '泸西县' },
                                { value: '532528', title: '元阳县' },
                                { value: '532529', title: '红河县' },
                                { value: '532530', title: '金平苗族瑶族傣族自治县' },
                                { value: '532531', title: '绿春县' },
                                { value: '532532', title: '河口瑶族自治县' },
                            ]
                        },
                        {
                            title: '文山壮族苗族自治州',
                            value: '532600',
                            children: [
                                { value: '532601', title: '文山市' },
                                { value: '532622', title: '砚山县' },
                                { value: '532623', title: '西畴县' },
                                { value: '532624', title: '麻栗坡县' },
                                { value: '532625', title: '马关县' },
                                { value: '532626', title: '丘北县' },
                                { value: '532627', title: '广南县' },
                                { value: '532628', title: '富宁县' },
                            ]
                        },
                        {
                            title: '西双版纳傣族自治州',
                            value: '532800',
                            children: [
                                { value: '532801', title: '景洪市' },
                                { value: '532822', title: '勐海县' },
                                { value: '532823', title: '勐腊县' },
                            ]
                        },
                        {
                            title: '大理白族自治州',
                            value: '532900',
                            children: [
                                { value: '532901', title: '大理市' },
                                { value: '532922', title: '漾濞彝族自治县' },
                                { value: '532923', title: '祥云县' },
                                { value: '532924', title: '宾川县' },
                                { value: '532925', title: '弥渡县' },
                                { value: '532926', title: '南涧彝族自治县' },
                                { value: '532927', title: '巍山彝族回族自治县' },
                                { value: '532928', title: '永平县' },
                                { value: '532929', title: '云龙县' },
                                { value: '532930', title: '洱源县' },
                                { value: '532931', title: '剑川县' },
                                { value: '532932', title: '鹤庆县' },
                            ]
                        },
                        {
                            title: '德宏傣族景颇族自治州',
                            value: '533100',
                            children: [
                                { value: '533102', title: '瑞丽市' },
                                { value: '533103', title: '芒市' },
                                { value: '533122', title: '梁河县' },
                                { value: '533123', title: '盈江县' },
                                { value: '533124', title: '陇川县' },
                            ]
                        },
                        {
                            title: '怒江傈僳族自治州',
                            value: '533300',
                            children: [
                                { value: '533301', title: '泸水市' },
                                { value: '533323', title: '福贡县' },
                                { value: '533324', title: '贡山独龙族怒族自治县' },
                                { value: '533325', title: '兰坪白族普米族自治县' },
                            ]
                        },
                        {
                            title: '迪庆藏族自治州',
                            value: '533400',
                            children: [
                                { value: '533401', title: '香格里拉市' },
                                { value: '533422', title: '德钦县' },
                                { value: '533423', title: '维西傈僳族自治县' },
                            ]
                        },
                    ]
                },
                {
                    title: '西藏自治区',
                    value: '540000',
                    children: [
                        {
                            title: '拉萨市',
                            value: '540100',
                            children: [
                                { value: '540102', title: '城关区' },
                                { value: '540103', title: '堆龙德庆区' },
                                { value: '540104', title: '达孜区' },
                                { value: '540121', title: '林周县' },
                                { value: '540122', title: '当雄县' },
                                { value: '540123', title: '尼木县' },
                                { value: '540124', title: '曲水县' },
                                { value: '540127', title: '墨竹工卡县' },
                            ]
                        },
                        {
                            title: '日喀则市',
                            value: '540200',
                            children: [
                                { value: '540202', title: '桑珠孜区' },
                                { value: '540221', title: '南木林县' },
                                { value: '540222', title: '江孜县' },
                                { value: '540223', title: '定日县' },
                                { value: '540224', title: '萨迦县' },
                                { value: '540225', title: '拉孜县' },
                                { value: '540226', title: '昂仁县' },
                                { value: '540227', title: '谢通门县' },
                                { value: '540228', title: '白朗县' },
                                { value: '540229', title: '仁布县' },
                                { value: '540230', title: '康马县' },
                                { value: '540231', title: '定结县' },
                                { value: '540232', title: '仲巴县' },
                                { value: '540233', title: '亚东县' },
                                { value: '540234', title: '吉隆县' },
                                { value: '540235', title: '聂拉木县' },
                                { value: '540236', title: '萨嘎县' },
                                { value: '540237', title: '岗巴县' },
                            ]
                        },
                        {
                            title: '昌都市',
                            value: '540300',
                            children: [
                                { value: '540302', title: '卡若区' },
                                { value: '540321', title: '江达县' },
                                { value: '540322', title: '贡觉县' },
                                { value: '540323', title: '类乌齐县' },
                                { value: '540324', title: '丁青县' },
                                { value: '540325', title: '察雅县' },
                                { value: '540326', title: '八宿县' },
                                { value: '540327', title: '左贡县' },
                                { value: '540328', title: '芒康县' },
                                { value: '540329', title: '洛隆县' },
                                { value: '540330', title: '边坝县' },
                            ]
                        },
                        {
                            title: '林芝市',
                            value: '540400',
                            children: [
                                { value: '540402', title: '巴宜区' },
                                { value: '540421', title: '工布江达县' },
                                { value: '540422', title: '米林县' },
                                { value: '540423', title: '墨脱县' },
                                { value: '540424', title: '波密县' },
                                { value: '540425', title: '察隅县' },
                                { value: '540426', title: '朗县' },
                            ]
                        },
                        {
                            title: '山南市',
                            value: '540500',
                            children: [
                                { value: '540502', title: '乃东区' },
                                { value: '540521', title: '扎囊县' },
                                { value: '540522', title: '贡嘎县' },
                                { value: '540523', title: '桑日县' },
                                { value: '540524', title: '琼结县' },
                                { value: '540525', title: '曲松县' },
                                { value: '540526', title: '措美县' },
                                { value: '540527', title: '洛扎县' },
                                { value: '540528', title: '加查县' },
                                { value: '540529', title: '隆子县' },
                                { value: '540530', title: '错那县' },
                                { value: '540531', title: '浪卡子县' },
                            ]
                        },
                        {
                            title: '那曲市',
                            value: '540600',
                            children: [
                                { value: '540602', title: '色尼区' },
                                { value: '540621', title: '嘉黎县' },
                                { value: '540622', title: '比如县' },
                                { value: '540623', title: '聂荣县' },
                                { value: '540624', title: '安多县' },
                                { value: '540625', title: '申扎县' },
                                { value: '540626', title: '索县' },
                                { value: '540627', title: '班戈县' },
                                { value: '540628', title: '巴青县' },
                                { value: '540629', title: '尼玛县' },
                                { value: '540630', title: '双湖县' },
                            ]
                        },
                        {
                            title: '阿里地区',
                            value: '542500',
                            children: [
                                { value: '542521', title: '普兰县' },
                                { value: '542522', title: '札达县' },
                                { value: '542523', title: '噶尔县' },
                                { value: '542524', title: '日土县' },
                                { value: '542525', title: '革吉县' },
                                { value: '542526', title: '改则县' },
                                { value: '542527', title: '措勤县' },
                            ]
                        },
                    ]
                },
                {
                    title: '陕西省',
                    value: '610000',
                    children: [
                        {
                            title: '西安市',
                            value: '610100',
                            children: [
                                { value: '610102', title: '新城区' },
                                { value: '610103', title: '碑林区' },
                                { value: '610104', title: '莲湖区' },
                                { value: '610111', title: '灞桥区' },
                                { value: '610112', title: '未央区' },
                                { value: '610113', title: '雁塔区' },
                                { value: '610114', title: '阎良区' },
                                { value: '610115', title: '临潼区' },
                                { value: '610116', title: '长安区' },
                                { value: '610117', title: '高陵区' },
                                { value: '610118', title: '鄠邑区' },
                                { value: '610122', title: '蓝田县' },
                                { value: '610124', title: '周至县' },
                            ]
                        },
                        {
                            title: '铜川市',
                            value: '610200',
                            children: [
                                { value: '610202', title: '王益区' },
                                { value: '610203', title: '印台区' },
                                { value: '610204', title: '耀州区' },
                                { value: '610222', title: '宜君县' },
                            ]
                        },
                        {
                            title: '宝鸡市',
                            value: '610300',
                            children: [
                                { value: '610302', title: '渭滨区' },
                                { value: '610303', title: '金台区' },
                                { value: '610304', title: '陈仓区' },
                                { value: '610322', title: '凤翔区' },
                                { value: '610323', title: '岐山县' },
                                { value: '610324', title: '扶风县' },
                                { value: '610326', title: '眉县' },
                                { value: '610327', title: '陇县' },
                                { value: '610328', title: '千阳县' },
                                { value: '610329', title: '麟游县' },
                                { value: '610330', title: '凤县' },
                                { value: '610331', title: '太白县' },
                            ]
                        },
                        {
                            title: '咸阳市',
                            value: '610400',
                            children: [
                                { value: '610402', title: '秦都区' },
                                { value: '610403', title: '杨陵区' },
                                { value: '610404', title: '渭城区' },
                                { value: '610422', title: '三原县' },
                                { value: '610423', title: '泾阳县' },
                                { value: '610424', title: '乾县' },
                                { value: '610425', title: '礼泉县' },
                                { value: '610426', title: '永寿县' },
                                { value: '610428', title: '长武县' },
                                { value: '610429', title: '旬邑县' },
                                { value: '610430', title: '淳化县' },
                                { value: '610431', title: '武功县' },
                                { value: '610481', title: '兴平市' },
                                { value: '610482', title: '彬州市' },

                            ]
                        },
                        {
                            title: '渭南市',
                            value: '610500',
                            children: [
                                { value: '610502', title: '临渭区' },
                                { value: '610503', title: '华州区' },
                                { value: '610522', title: '潼关县' },
                                { value: '610523', title: '大荔县' },
                                { value: '610524', title: '合阳县' },
                                { value: '610525', title: '澄城县' },
                                { value: '610526', title: '蒲城县' },
                                { value: '610527', title: '白水县' },
                                { value: '610528', title: '富平县' },
                                { value: '610581', title: '韩城市' },
                                { value: '610582', title: '华阴市' },
                            ]
                        },
                        {
                            title: '延安市',
                            value: '610600',
                            children: [
                                { value: '610602', title: '宝塔区' },
                                { value: '610603', title: '安塞区' },
                                { value: '610621', title: '延长县' },
                                { value: '610622', title: '延川县' },
                                { value: '610625', title: '志丹县' },
                                { value: '610626', title: '吴起县' },
                                { value: '610627', title: '甘泉县' },
                                { value: '610628', title: '富县' },
                                { value: '610629', title: '洛川县' },
                                { value: '610630', title: '宜川县' },
                                { value: '610631', title: '黄龙县' },
                                { value: '610632', title: '黄陵县' },
                                { value: '610681', title: '子长市' },
                            ]
                        },
                        {
                            title: '汉中市',
                            value: '610700',
                            children: [
                                { value: '610702', title: '汉台区' },
                                { value: '610703', title: '南郑区' },
                                { value: '610722', title: '城固县' },
                                { value: '610723', title: '洋县' },
                                { value: '610724', title: '西乡县' },
                                { value: '610725', title: '勉县' },
                                { value: '610726', title: '宁强县' },
                                { value: '610727', title: '略阳县' },
                                { value: '610728', title: '镇巴县' },
                                { value: '610729', title: '留坝县' },
                                { value: '610730', title: '佛坪县' },
                            ]
                        },
                        {
                            title: '榆林市',
                            value: '610800',
                            children: [
                                { value: '610802', title: '榆阳区' },
                                { value: '610803', title: '横山区' },
                                { value: '610822', title: '府谷县' },
                                { value: '610824', title: '靖边县' },
                                { value: '610825', title: '定边县' },
                                { value: '610826', title: '绥德县' },
                                { value: '610827', title: '米脂县' },
                                { value: '610828', title: '佳县' },
                                { value: '610829', title: '吴堡县' },
                                { value: '610830', title: '清涧县' },
                                { value: '610831', title: '子洲县' },
                                { value: '610881', title: '神木市' },
                            ]
                        },
                        {
                            title: '安康市',
                            value: '610900',
                            children: [
                                { value: '610902', title: '汉滨区' },
                                { value: '610921', title: '汉阴县' },
                                { value: '610922', title: '石泉县' },
                                { value: '610923', title: '宁陕县' },
                                { value: '610924', title: '紫阳县' },
                                { value: '610925', title: '岚皋县' },
                                { value: '610926', title: '平利县' },
                                { value: '610927', title: '镇坪县' },
                                { value: '610928', title: '旬阳市' },
                                { value: '610929', title: '白河县' },
                            ]
                        },
                        {
                            title: '商洛市',
                            value: '611000',
                            children: [
                                { value: '611002', title: '商州区' },
                                { value: '611021', title: '洛南县' },
                                { value: '611022', title: '丹凤县' },
                                { value: '611023', title: '商南县' },
                                { value: '611024', title: '山阳县' },
                                { value: '611025', title: '镇安县' },
                                { value: '611026', title: '柞水县' },
                            ]
                        },
                    ]
                },
                {
                    title: '甘肃省',
                    value: '620000',
                    children: [
                        {
                            title: '兰州市',
                            value: '620100',
                            children: [
                                { value: '620102', title: '城关区' },
                                { value: '620103', title: '七里河区' },
                                { value: '620104', title: '西固区' },
                                { value: '620105', title: '安宁区' },
                                { value: '620111', title: '红古区' },
                                { value: '620121', title: '永登县' },
                                { value: '620122', title: '皋兰县' },
                                { value: '620123', title: '榆中县' },
                            ]
                        },
                        { title: '嘉峪关市', value: '620200' },
                        {
                            title: '金昌市',
                            value: '620300',
                            children: [
                                { value: '620302', title: '金川区' },
                                { value: '620321', title: '永昌县' },
                            ]
                        },
                        {
                            title: '白银市',
                            value: '620400',
                            children: [
                                { value: '620402', title: '白银区' },
                                { value: '620403', title: '平川区' },
                                { value: '620421', title: '靖远县' },
                                { value: '620422', title: '会宁县' },
                                { value: '620423', title: '景泰县' },
                            ]
                        },
                        {
                            title: '天水市',
                            value: '620500',
                            children: [
                                { value: '620502', title: '秦州区' },
                                { value: '620503', title: '麦积区' },
                                { value: '620521', title: '清水县' },
                                { value: '620522', title: '秦安县' },
                                { value: '620523', title: '甘谷县' },
                                { value: '620524', title: '武山县' },
                                { value: '620525', title: '张家川回族自治县' },
                            ]
                        },
                        {
                            title: '武威市',
                            value: '620600',
                            children: [
                                { value: '620602', title: '凉州区' },
                                { value: '620621', title: '民勤县' },
                                { value: '620622', title: '古浪县' },
                                { value: '620623', title: '天祝藏族自治县' },
                            ]
                        },
                        {
                            title: '张掖市',
                            value: '620700',
                            children: [
                                { value: '620702', title: '甘州区' },
                                { value: '620721', title: '肃南裕固族自治县' },
                                { value: '620722', title: '民乐县' },
                                { value: '620723', title: '临泽县' },
                                { value: '620724', title: '高台县' },
                                { value: '620725', title: '山丹县' },
                            ]
                        },
                        {
                            title: '平凉市',
                            value: '620800',
                            children: [
                                { value: '620802', title: '崆峒区' },
                                { value: '620821', title: '泾川县' },
                                { value: '620822', title: '灵台县' },
                                { value: '620823', title: '崇信县' },
                                { value: '620825', title: '庄浪县' },
                                { value: '620826', title: '静宁县' },
                                { value: '620881', title: '华亭市' },
                            ]
                        },
                        {
                            title: '酒泉市',
                            value: '620900',
                            children: [
                                { value: '620902', title: '肃州区' },
                                { value: '620921', title: '金塔县' },
                                { value: '620922', title: '瓜州县' },
                                { value: '620923', title: '肃北蒙古族自治县' },
                                { value: '620924', title: '阿克塞哈萨克族自治县' },
                                { value: '620981', title: '玉门市' },
                                { value: '620982', title: '敦煌市' },
                            ]
                        },
                        {
                            title: '庆阳市',
                            value: '621000',
                            children: [
                                { value: '621002', title: '西峰区' },
                                { value: '621021', title: '庆城县' },
                                { value: '621022', title: '环县' },
                                { value: '621023', title: '华池县' },
                                { value: '621024', title: '合水县' },
                                { value: '621025', title: '正宁县' },
                                { value: '621026', title: '宁县' },
                                { value: '621027', title: '镇原县' },
                            ]
                        },
                        {
                            title: '定西市',
                            value: '621100',
                            children: [
                                { value: '621102', title: '安定区' },
                                { value: '621121', title: '通渭县' },
                                { value: '621122', title: '陇西县' },
                                { value: '621123', title: '渭源县' },
                                { value: '621124', title: '临洮县' },
                                { value: '621125', title: '漳县' },
                                { value: '621126', title: '岷县' },
                            ]
                        },
                        {
                            title: '陇南市',
                            value: '621200',
                            children: [
                                { value: '621202', title: '武都区' },
                                { value: '621221', title: '成县' },
                                { value: '621222', title: '文县' },
                                { value: '621223', title: '宕昌县' },
                                { value: '621224', title: '康县' },
                                { value: '621225', title: '西和县' },
                                { value: '621226', title: '礼县' },
                                { value: '621227', title: '徽县' },
                                { value: '621228', title: '两当县' },
                            ]
                        },
                        {
                            title: '临夏回族自治州',
                            value: '622900',
                            children: [
                                { value: '622901', title: '临夏市' },
                                { value: '622921', title: '临夏县' },
                                { value: '622922', title: '康乐县' },
                                { value: '622923', title: '永靖县' },
                                { value: '622924', title: '广河县' },
                                { value: '622925', title: '和政县' },
                                { value: '622926', title: '东乡族自治县' },
                                { value: '622927', title: '积石山保安族东乡族撒拉族自治县' },
                            ]
                        },
                        {
                            title: '甘南藏族自治州',
                            value: '623000',
                            children: [
                                { value: '623001', title: '合作市' },
                                { value: '623021', title: '临潭县' },
                                { value: '623022', title: '卓尼县' },
                                { value: '623023', title: '舟曲县' },
                                { value: '623024', title: '迭部县' },
                                { value: '623025', title: '玛曲县' },
                                { value: '623026', title: '碌曲县' },
                                { value: '623027', title: '夏河县' },
                            ]
                        },
                    ]
                },
                {
                    title: '青海省',
                    value: '630000',
                    children: [
                        {
                            title: '西宁市',
                            value: '630100',
                            children: [
                                { value: '630102', title: '城东区' },
                                { value: '630103', title: '城中区' },
                                { value: '630104', title: '城西区' },
                                { value: '630105', title: '城北区' },
                                { value: '630106', title: '湟中区' },
                                { value: '630121', title: '大通回族土族自治县' },
                                { value: '630123', title: '湟源县' },
                            ]
                        },
                        {
                            title: '海东市',
                            value: '630200',
                            children: [
                                { value: '630202', title: '乐都区' },
                                { value: '630203', title: '平安区' },
                                { value: '630222', title: '民和回族土族自治县' },
                                { value: '630223', title: '互助土族自治县' },
                                { value: '630224', title: '化隆回族自治县' },
                                { value: '630225', title: '循化撒拉族自治县' },
                            ]
                        },
                        {
                            title: '海北藏族自治州',
                            value: '632200',
                            children: [
                                { value: '632221', title: '门源回族自治县' },
                                { value: '632222', title: '祁连县' },
                                { value: '632224', title: '刚察县' },
                                { value: '632223', title: '海晏县' },
                            ]
                        },
                        {
                            title: '黄南藏族自治州',
                            value: '632300',
                            children: [
                                { value: '632301', title: '同仁市' },
                                { value: '632322', title: '尖扎县' },
                                { value: '632323', title: '泽库县' },
                                { value: '632324', title: '河南蒙古族自治县' },
                            ]
                        },
                        {
                            title: '海南藏族自治州',
                            value: '632500',
                            children: [
                                { value: '632521', title: '共和县' },
                                { value: '632522', title: '同德县' },
                                { value: '632523', title: '贵德县' },
                                { value: '632524', title: '兴海县' },
                                { value: '632525', title: '贵南县' },
                            ]
                        },
                        {
                            title: '果洛藏族自治州',
                            value: '632600',
                            children: [
                                { value: '632621', title: '玛沁县' },
                                { value: '632622', title: '班玛县' },
                                { value: '632623', title: '甘德县' },
                                { value: '632624', title: '达日县' },
                                { value: '632625', title: '久治县' },
                                { value: '632626', title: '玛多县' },
                            ]
                        },
                        {
                            title: '玉树藏族自治州',
                            value: '632700',
                            children: [
                                { value: '632701', title: '玉树市' },
                                { value: '632722', title: '杂多县' },
                                { value: '632723', title: '称多县' },
                                { value: '632724', title: '治多县' },
                                { value: '632725', title: '囊谦县' },
                                { value: '632726', title: '曲麻莱县' },
                            ]
                        },
                        {
                            title: '海西蒙古族藏族自治州',
                            value: '632800',
                            children: [
                                { value: '632801', title: '格尔木市' },
                                { value: '632802', title: '德令哈市' },
                                { value: '632803', title: '茫崖市' },
                                { value: '632821', title: '乌兰县' },
                                { value: '632822', title: '都兰县' },
                                { value: '632823', title: '天峻县' },
                                { value: '632825', title: '海西蒙古族藏族自治州直辖' },
                            ]
                        },
                    ]
                },
                {
                    title: '宁夏回族自治区',
                    value: '640000',
                    children: [
                        {
                            title: '银川市',
                            value: '640100',
                            children: [
                                { value: '640104', title: '兴庆区' },
                                { value: '640105', title: '西夏区' },
                                { value: '640106', title: '金凤区' },
                                { value: '640121', title: '永宁县' },
                                { value: '640122', title: '贺兰县' },
                                { value: '640181', title: '灵武市' },
                            ]
                        },
                        {
                            title: '石嘴山市',
                            value: '640200',
                            children: [
                                { value: '640202', title: '大武口区' },
                                { value: '640205', title: '惠农区' },
                                { value: '640221', title: '平罗县' },
                            ]
                        },
                        {
                            title: '吴忠市',
                            value: '640300',
                            children: [
                                { value: '640302', title: '利通区' },
                                { value: '640303', title: '红寺堡区' },
                                { value: '640323', title: '盐池县' },
                                { value: '640324', title: '同心县' },
                                { value: '640381', title: '青铜峡市' },
                            ]
                        },
                        {
                            title: '固原市',
                            value: '640400',
                            children: [
                                { value: '640402', title: '原州区' },
                                { value: '640422', title: '西吉县' },
                                { value: '640423', title: '隆德县' },
                                { value: '640424', title: '泾源县' },
                                { value: '640425', title: '彭阳县' },
                            ]
                        },
                        {
                            title: '中卫市',
                            value: '640500',
                            children: [
                                { value: '640502', title: '沙坡头区' },
                                { value: '640521', title: '中宁县' },
                                { value: '640522', title: '海原县' },
                            ]
                        },
                    ]
                },
                {
                    title: '新疆维吾尔自治区',
                    value: '650000',
                    children: [
                        {
                            title: '乌鲁木齐市',
                            value: '650100',
                            children: [
                                { value: '650102', title: '天山区' },
                                { value: '650103', title: '沙依巴克区' },
                                { value: '650104', title: '新市区' },
                                { value: '650105', title: '水磨沟区' },
                                { value: '650106', title: '头屯河区' },
                                { value: '650107', title: '达坂城区' },
                                { value: '650109', title: '米东区' },
                                { value: '650121', title: '乌鲁木齐县' },
                            ]
                        },
                        {
                            title: '克拉玛依市',
                            value: '650200',
                            children: [
                                { value: '650202', title: '独山子区' },
                                { value: '650203', title: '克拉玛依区' },
                                { value: '650204', title: '白碱滩区' },
                                { value: '650205', title: '乌尔禾区' },
                            ]
                        },
                        {
                            title: '吐鲁番市',
                            value: '650400',
                            children: [
                                { value: '650402', title: '高昌区' },
                                { value: '650421', title: '鄯善县' },
                                { value: '650422', title: '托克逊县' },
                            ]
                        },
                        {
                            title: '哈密市',
                            value: '650500',
                            children: [
                                { value: '650502', title: '伊州区' },
                                { value: '650521', title: '巴里坤哈萨克自治县' },
                                { value: '650522', title: '伊吾县' },
                            ]
                        },
                        {
                            title: '昌吉回族自治州',
                            value: '652300',
                            children: [
                                { value: '652301', title: '昌吉市' },
                                { value: '652302', title: '阜康市' },
                                { value: '652323', title: '呼图壁县' },
                                { value: '652324', title: '玛纳斯县' },
                                { value: '652325', title: '奇台县' },
                                { value: '652327', title: '吉木萨尔县' },
                                { value: '652328', title: '木垒哈萨克自治县' },
                            ]
                        },
                        {
                            title: '博尔塔拉蒙古自治州',
                            value: '652700',
                            children: [
                                { value: '652701', title: '博乐市' },
                                { value: '652722', title: '精河县' },
                                { value: '652723', title: '温泉县' },
                            ]
                        },
                        {
                            title: '巴音郭楞蒙古自治州',
                            value: '652800',
                            children: [
                                { value: '652801', title: '库尔勒市' },
                                { value: '652822', title: '轮台县' },
                                { value: '652823', title: '尉犁县' },
                                { value: '652824', title: '若羌县' },
                                { value: '652825', title: '且末县' },
                                { value: '652826', title: '焉耆回族自治县' },
                                { value: '652827', title: '和静县' },
                                { value: '652828', title: '和硕县' },
                                { value: '652829', title: '博湖县' },
                            ]
                        },
                        {
                            title: '阿克苏地区',
                            value: '652900',
                            children: [
                                { value: '652901', title: '阿克苏市' },
                                { value: '652902', title: '库车市' },
                                { value: '652922', title: '温宿县' },
                                { value: '652924', title: '沙雅县' },
                                { value: '652925', title: '新和县' },
                                { value: '652926', title: '拜城县' },
                                { value: '652927', title: '乌什县' },
                                { value: '652928', title: '阿瓦提县' },
                                { value: '652929', title: '柯坪县' },
                            ]
                        },
                        {
                            title: '喀什地区',
                            value: '653100',
                            children: [
                                { value: '653101', title: '喀什市' },
                                { value: '653121', title: '疏附县' },
                                { value: '653122', title: '疏勒县' },
                                { value: '653123', title: '英吉沙县' },
                                { value: '653124', title: '泽普县' },
                                { value: '653125', title: '莎车县' },
                                { value: '653126', title: '叶城县' },
                                { value: '653127', title: '麦盖提县' },
                                { value: '653128', title: '岳普湖县' },
                                { value: '653129', title: '伽师县' },
                                { value: '653130', title: '巴楚县' },
                                { value: '653131', title: '塔什库尔干塔吉克自治县' },
                            ]
                        },
                        {
                            title: '和田地区',
                            value: '653200',
                            children: [
                                { value: '653201', title: '和田市' },
                                { value: '653221', title: '和田县' },
                                { value: '653222', title: '墨玉县' },
                                { value: '653223', title: '皮山县' },
                                { value: '653224', title: '洛浦县' },
                                { value: '653225', title: '策勒县' },
                                { value: '653226', title: '于田县' },
                                { value: '653227', title: '民丰县' },
                            ]
                        },
                        {
                            title: '塔城地区',
                            value: '654200',
                            children: [
                                { value: '654201', title: '塔城市' },
                                { value: '654202', title: '乌苏市' },
                                { value: '654221', title: '额敏县' },
                                { value: '654223', title: '沙湾市' },
                                { value: '654224', title: '托里县' },
                                { value: '654225', title: '裕民县' },
                                { value: '654226', title: '和布克赛尔蒙古自治县' },
                            ]
                        },
                        {
                            title: '阿勒泰地区',
                            value: '654300',
                            children: [
                                { value: '654301', title: '阿勒泰市' },
                                { value: '654321', title: '布尔津县' },
                                { value: '654322', title: '富蕴县' },
                                { value: '654323', title: '福海县' },
                                { value: '654324', title: '哈巴河县' },
                                { value: '654325', title: '青河县' },
                                { value: '654326', title: '吉木乃县' },
                            ]
                        },
                        {
                            title: '克孜勒苏柯尔克孜自治州',
                            value: '653000',
                            children: [
                                { value: '653001', title: '阿图什市' },
                                { value: '653022', title: '阿克陶县' },
                                { value: '653023', title: '阿合奇县' },
                                { value: '653024', title: '乌恰县' },
                            ]
                        },
                        {
                            title: '伊犁哈萨克自治州',
                            value: '654000',
                            children: [
                                { value: '654002', title: '伊宁市' },
                                { value: '654003', title: '奎屯市' },
                                { value: '654004', title: '霍尔果斯市' },
                                { value: '654021', title: '伊宁县' },
                                { value: '654022', title: '察布查尔锡伯自治县' },
                                { value: '654023', title: '霍城县' },
                                { value: '654024', title: '巩留县' },
                                { value: '654025', title: '新源县' },
                                { value: '654026', title: '昭苏县' },
                                { value: '654027', title: '特克斯县' },
                                { value: '654028', title: '尼勒克县' },
                            ]
                        },
                        { title: '石河子市', value: '659001' },
                        { title: '阿拉尔市', value: '659002' },
                        { title: '图木舒克市', value: '659003' },
                        { title: '五家渠市', value: '659004' },
                        { title: '北屯市', value: '659005' },
                        { title: '铁门关市', value: '659006' },
                        { title: '双河市', value: '659007' },
                        { title: '可克达拉市', value: '659008' },
                        { title: '昆玉市', value: '659009' },
                        { title: '胡杨河市', value: '659010' },
                    ]
                },
                { title: '台湾省', value: '710000' },
                {
                    title: '香港特别行政区',
                    value: '810000',
                    children: [
                        { title: '中西区', value: '810001' },
                        { title: '湾仔区', value: '810002' },
                        { title: '东区', value: '810003' },
                        { title: '南区', value: '810004' },
                        { title: '油尖旺区', value: '810005' },
                        { title: '深水埗区', value: '810006' },
                        { title: '九龙城区', value: '810007' },
                        { title: '黄大仙区', value: '810008' },
                        { title: '观塘区', value: '810009' },
                        { title: '荃湾区', value: '810010' },
                        { title: '屯门区', value: '810011' },
                        { title: '元朗区', value: '810012' },
                        { title: '北区', value: '810013' },
                        { title: '大埔区', value: '810014' },
                        { title: '西贡区', value: '810015' },
                        { title: '沙田区', value: '810016' },
                        { title: '葵青区', value: '810017' },
                        { title: '离岛区', value: '810018' },
                    ]
                },
                {
                    title: '澳门特别行政区',
                    value: '820000',
                    children: [
                        { title: '花地玛堂区', value: '820001' },
                        { title: '花王堂区', value: '820002' },
                        { title: '望德堂区', value: '820003' },
                        { title: '大堂区', value: '820004' },
                        { title: '风顺堂区', value: '820005' },
                        { title: '嘉模堂区', value: '820006' },
                        { title: '路凼填海区', value: '820007' },
                        { title: '圣方济各堂区', value: '820008' },
                    ]
                },
            ]
        }
    ],
}