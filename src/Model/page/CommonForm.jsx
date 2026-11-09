import './CommonModel.scss'
import { useState, useRef } from 'react'
import { Button, Tour, App } from 'antd'
import { useEventEmitter } from 'ahooks'
import { BugOutlined } from '@ant-design/icons';
import { HappyProvider } from '@ant-design/happy-work-theme'

import FormTemplate from '../../Utils/FormTemplate'

import { FormConfig } from '../../Config/configForm'
import { Mars3dFormConfig } from '../../Config/Mars3dForm'
import { WeChatFormConfig } from '../../Config/wechatForm'
import { BitsFormConfig } from '../../Config/bitsForm'

const FormList = { ...FormConfig, ...Mars3dFormConfig, ...WeChatFormConfig, ...BitsFormConfig }

const helpMapping = {
    SetDEVTemplateConfig: '模板设置',
    SetDEVStyleConfig: '样式设置',
    SetDEVGetDataConfig: '接口设置',
}

const CommonForm = ({ data, Event }) => {
    const FORMEVENT = useEventEmitter()
    const { message, modal, notification } = App.useApp();

    const [open, setOpen] = useState(false)
    const [steps, setSteps] = useState([])
    const [loading, setLoading] = useState(false)
    const { eventBack = 'onCommonFormBack', NotSubmit = false, detection = false, formItem, Initial, NotLoading = false } = data

    const onFormBack = (data) => Event.emit({ type: eventBack, data })

    const eventCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onFormBack', () => onFormBack(data)],
            ['onFormReset', () => FORMEVENT.emit({ type: 'onFormReset' })],
            ['closeFormLoading', () => FORMEVENT.emit({ type: 'closeFormLoading' })]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    const formCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onFormBack', () => onFormBack(data)],
            ['onDetection', () => Event.emit({ type: detection, data })],
            ['getMap', () => openTour(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    const openTour = ({ map, form }) => {
        if (formItem === 'SetDEVTemplateConfig') {
            const type = form.getFieldValue('devTemplate')
            if (type === 'DevExtremeDataGrid') {
                const DataSteps = [
                    {
                        title: '数据模板',
                        description: '数据模板配置.\n聚焦选中为是否可选中行数据',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpDataA01.png" />),
                        target: () => null
                    },
                    {
                        title: '列宽设置',
                        description: '设置数据模板单列可用操作',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpDataA02.png" />),
                        target: () => map.get('DataGrid_column')
                    },
                    {
                        title: '边框设置',
                        description: '设置数据模板边框样式',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpDataA03.png" />),
                        target: () => map.get('DataGrid_border')
                    },
                    {
                        title: '选择设置',
                        description: '设置数据模板多选方式',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpDataA04.png" />),
                        target: () => map.get('DataGrid_label')
                    },
                    {
                        title: '过滤器',
                        description: '设置数据模板过滤器功能与样式',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpDataA05.png" />),
                        target: () => map.get('DataGrid_HeaderFilter')
                    },
                    {
                        title: '头部搜索',
                        description: '设置数据模板头部可用的全局搜索框',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpDataA06.png" />),
                        target: () => map.get('DataGrid_SearchPanel')
                    },
                    {
                        title: '行内搜索',
                        description: '设置数据模板单列数据搜索框',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpDataA07.png" />),
                        target: () => map.get('DataGrid_FilterRow')
                    },
                    {
                        title: '列选择器',
                        description: '设置数据模板字段的显示、隐藏和排序等',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpDataA08.png" />),
                        target: () => map.get('DataGrid_columnChooser')
                    },
                    {
                        title: '分组面板',
                        description: '设置数据模板列分组功能',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpDataA09.png" />),
                        target: () => map.get('DataGrid_GroupPanel')
                    },
                    {
                        title: '排序设置',
                        description: '设置数据模板单列或多列的排序功能',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpDataA10.png" />),
                        target: () => map.get('DataGrid_Sorting')
                    },
                    {
                        title: '导出设置',
                        description: '设置数据模板当页数据的导出功能',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpDataA11.png" />),
                        target: () => map.get('DataGrid_Export')
                    },
                ]
                setSteps(DataSteps)
                setOpen(true)
            }

            if (type === 'DevExtremeTreeGrid') {
                const TreeSteps = [
                    {
                        title: '树形模板',
                        description: '树形模板配置.\n聚焦选中为是否可选中行数据,全部展开为默认打开所有子级信息',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpTreeA01.png" />),
                        target: () => null
                    },
                    {
                        title: '列宽设置',
                        description: '设置树形模板单列可用操作',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpTreeA02.png" />),
                        target: () => map.get('TreeGrid_column')
                    },
                    {
                        title: '边框设置',
                        description: '设置树形模板边框样式',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpTreeA03.png" />),
                        target: () => map.get('TreeGrid_border')
                    },
                    {
                        title: '选择设置',
                        description: '设置树形模板多选方式',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpTreeA04.png" />),
                        target: () => map.get('TreeGrid_label')
                    },
                    {
                        title: '过滤器',
                        description: '设置树形模板过滤器功能与样式',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpTreeA05.png" />),
                        target: () => map.get('TreeGrid_HeaderFilter')
                    },
                    {
                        title: '头部搜索',
                        description: '设置树形模板头部可用的全局搜索框',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpTreeA06.png" />),
                        target: () => map.get('TreeGrid_SearchPanel')
                    },
                    {
                        title: '行内搜索',
                        description: '设置树形模板单列数据搜索框',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpTreeA07.png" />),
                        target: () => map.get('TreeGrid_FilterRow')
                    },
                    {
                        title: '排序设置',
                        description: '设置树形模板单列或多列的排序功能',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpTreeA08.png" />),
                        target: () => map.get('TreeGrid_Sorting')
                    },
                    {
                        title: '列选择器',
                        description: '设置树形模板字段的显示、隐藏和排序等',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpTreeA09.png" />),
                        target: () => map.get('TreeGrid_columnChooser')
                    },

                ]
                setSteps(TreeSteps)
                setOpen(true)
            }
            if (type === 'DevExtremeCardGrid') {
                message.warning('卡片模板暂未开放')
                setLoading(false)
            }

            if (type === 'DevExtremeOLAPGrid') {
                const OLAPSteps = [
                    {
                        title: '统计模板',
                        description: '统计模板配置.',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HeloOlapA01.png" />),
                        target: () => null
                    },
                    {
                        title: '基础设置',
                        description: '设置统计模板的基础参数',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HeloOlapA01.png" />),
                        target: () => map.get('OLAPGrid_base')
                    },
                    {
                        title: '布局设置',
                        description: '设置统计模板的布局方式',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HeloOlapA02.png" />),
                        target: () => map.get('OLAPGrid_Layout')
                    },
                    {
                        title: '中控开关',
                        description: '设置统计模板的中控开关',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HeloOlapA03.png" />),
                        target: () => map.get('OLAPGrid_fieldChooser')
                    },
                    {
                        title: '字段面板',
                        description: '设置统计模板的各字段面板',
                        cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HeloOlapA04.png" />),
                        target: () => map.get('OLAPGrid_fieldPanel')
                    },
                ]

                setSteps(OLAPSteps)
                setOpen(true)
            }
        }
        if (formItem === 'SetDEVStyleConfig') {
            const LAYOUTSteps = [
                {
                    title: '统计模板',
                    description: '统计模板配置.',
                    cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HeloLayoutA01.png" />),
                    target: () => null
                },
                {
                    title: '树形样式',
                    description: '设置布局的左侧树形样式',
                    cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HeloLayoutA02.png" />),
                    target: () => map.get('SetDEVStyleConfig_tre')
                },
                {
                    title: '头部样式',
                    description: '设置布局的头部全局操作样式',
                    cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HeloLayoutA03.png" />),
                    target: () => map.get('SetDEVStyleConfig_top')
                },
                {
                    title: '行内样式',
                    description: '设置单行的行内操作样式',
                    cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HeloLayoutA04.png" />),
                    target: () => map.get('SetDEVStyleConfig_row')
                },
                {
                    title: '弹窗样式',
                    description: '设置单行的右键操作菜单样式',
                    cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HeloLayoutA05.png" />),
                    target: () => map.get('SetDEVStyleConfig_pop')
                },
            ]
            setSteps(LAYOUTSteps)
            setOpen(true)
        }
        if (formItem === 'SetDEVGetDataConfig') {
            const APISteps = [
                {
                    title: '数据获取',
                    description: '页面的数据获取和部分样式.',
                    cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpApiA01.png" />),
                    target: () => null
                },
                {
                    title: '接口信息',
                    description: '设置布局的左侧树形样式',
                    cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpApiA02.png" />),
                    target: () => map.get('SetDEVGetDataConfig_api')
                },
                {
                    title: '分页设置',
                    description: '设置布局的头部全局操作样式',
                    cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpApiA03.png" />),
                    target: () => map.get('SetDEVGetDataConfig_pag')
                },
                {
                    title: '机构树',
                    description: '设置单行的行内操作样式',
                    cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpApiA04.png" />),
                    target: () => map.get('SetDEVGetDataConfig_org')
                },
                {
                    title: '额外树',
                    description: '设置单行的右键操作菜单样式',
                    cover: (<img alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpApiA05.png" />),
                    target: () => map.get('SetDEVGetDataConfig_oth')
                },
            ]
            setSteps(APISteps)
            setOpen(true)
        }
    }

    Event.useSubscription(eventCallBack)
    FORMEVENT.useSubscription(formCallBack)

    const onHelp = () => {
        setSteps([])
        setLoading(true)
        FORMEVENT.emit({ type: 'getHelpList' })
    }

    const onCloseHelp = () => {
        setOpen(false)
        setLoading(false)
    }


    return (
        <div className='CommonFrom' style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            {helpMapping[data.formItem] &&
                <HappyProvider>
                    <Button className='TourBtn' type="primary" shape="circle" loading={loading} onClick={() => onHelp()} icon={<BugOutlined />} />
                </HappyProvider>
            }
            <FormTemplate
                formItem={FormList[formItem]}
                FORMEVENT={FORMEVENT}
                Initial={Initial || {}}
                NotSubmit={NotSubmit}
                NotLoading={NotLoading}
                detection={detection}
            />
            <Tour open={open} onClose={onCloseHelp} steps={steps} />
        </div>
    );
};

export default CommonForm;