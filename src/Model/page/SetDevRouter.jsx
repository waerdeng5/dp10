import './SetDevRouter.scss'
import { v4 } from 'uuid'

import copy from 'copy-to-clipboard'
import { message, Tour, Button } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { HappyProvider } from '@ant-design/happy-work-theme'

import { BugOutlined } from '@ant-design/icons';

import { axios } from '../../Utils/Api'
import { CommonAPIUrl } from '../../Config'
import { modelStore, pageStore } from '../../Router/zustand'
import { DevScrollView } from '../../Temp/DevTemplate'
import { MappingData } from '../../Config/MappingData'
import { Encrypt, GetIndexedDB } from '../../Utils/IndexedDB'

export const MissingTemplate = ({ APIdata, THEdata, OPTdata }) => {
    const refA01 = useRef()
    const refA02 = useRef()
    const refA03 = useRef()
    const refA04 = useRef()
    const refA05 = useRef()
    const refA06 = useRef()
    const refA07 = useRef()

    const [open, setOpen] = useState(false)
    const [rowList, setRowList] = useState([])
    const [topList, setTopList] = useState([])
    useEffect(() => {
        console.log('[-MissingTemplate-]', OPTdata)
        setRowList(OPTdata.row)
        setTopList(OPTdata.top)
    }, [OPTdata])


    const steps = [
        {
            title: '模板信息',
            description: '页面Dev组件渲染样式,详见模板设置',
            cover: (<img draggable={true} alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpA01.png" />),
            target: () => refA01.current,
        },
        {
            title: '渲染样式',
            description: '页面内主要样式设置,详见样式设置',
            cover: (<img draggable={true} alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpA02.png" />),
            target: () => refA02.current,
        },
        {
            title: '接口信息',
            description: '页面内主要接口设置,详见接口设置',
            cover: (<img draggable={true} alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpA03.png" />),
            target: () => refA03.current,
        },
        {
            title: '树形菜单',
            description: '页面内左侧机构数与额外树设置,详见接口设置',
            cover: (<img draggable={true} alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpA04.png" />),
            target: () => refA04.current,
        },
        {
            title: '数据分页',
            description: '页面内数据分页设置,详见分页设置',
            cover: (<img draggable={true} alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpA05.png" />),
            target: () => refA05.current,
        },
        {
            title: '字段信息',
            description: '页面内可用字段设置,详见字段设置',
            cover: (<img draggable={true} alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpA06.png" />),
            target: () => refA06.current,
        },
        {
            title: '操作信息',
            description: '页面全局操作和单行操作设置,详见操作设置',
            cover: (<img draggable={true} alt="tour.png" src="https://aloss.ljkjkf.com/WebConfigFile/image/Common/System/HelpA07.png" />),
            target: () => refA07.current,
        },
    ];

    return (
        <div className='SetDevRouter'>
            <HappyProvider>
                <Button className='TourBtn' type="primary" shape="circle" onClick={() => setOpen(true)} icon={<BugOutlined />} />
            </HappyProvider>
            <DevScrollView>
                <div className='SetDevRouterBox'>
                    <div className='Title' ref={refA01}>模板信息</div>
                    <div>
                        {THEdata?.template ?
                            <div className='Label'>
                                <div className='Item'>
                                    <div>当前配置模板 : </div>
                                    <div>{MappingData.DevConfig__DevTemplate.find(v => v.value === THEdata.template.devTemplate).label}</div>
                                </div>
                            </div> :
                            <div className='ErrorTips'>未配置模板信息</div>
                        }
                    </div>
                    <div className='Title' ref={refA02}>样式渲染</div>
                    <div>
                        {THEdata?.style ?
                            <div className='Show'>
                                <div>
                                    <div>头部模块</div>
                                    {THEdata.style.top_show ? <span className='show'>显示</span> : <span className='hidden'>隐藏</span>}
                                </div>
                                <div>
                                    <div>行内模块</div>
                                    {THEdata.style.row_show ? <span className='show'>显示</span> : <span className='hidden'>隐藏</span>}
                                </div>
                                <div>
                                    <div>弹窗模块</div>
                                    {THEdata.style.pop_show ? <span className='show'>显示</span> : <span className='hidden'>隐藏</span>}
                                </div>
                            </div> :
                            <div className='ErrorTips'>未配置渲染字段信息</div>
                        }
                    </div>
                    <div className='Title' ref={refA03}>接口信息</div>
                    <div>
                        {APIdata?.api ?
                            <div className='Label'>
                                <div className='Item'>
                                    <div>请求方式 : </div>
                                    <div>{APIdata.api.method}</div>
                                </div>
                                <div className='Item'>
                                    <div>请求地址 : </div>
                                    <div>{APIdata.api.apiUrl}</div>
                                </div>
                                <div className='Item'>
                                    <div>请求参数 : </div>
                                    <div>{APIdata.api.params || '-'}</div>
                                </div>
                            </div> :
                            <div className='ErrorTips'>未配置接口信息</div>
                        }
                    </div>
                    <div className='Title' ref={refA04}>树形菜单</div>
                    <div>
                        {APIdata?.api ?
                            <div className='Show'>
                                <div>
                                    <div>机构机构树</div>
                                    {APIdata.api.orgShow ? <span className='show'>显示</span> : <span className='hidden'>隐藏</span>}
                                </div>
                                <div>
                                    <div>额外选项树</div>
                                    {APIdata.api.othShow ? <span className='show'>显示</span> : <span className='hidden'>隐藏</span>}
                                </div>
                            </div> :
                            <div className='ErrorTips'>未配置渲染字段信息</div>
                        }
                    </div>
                    <div className='Title' ref={refA05}>数据分页</div>
                    <div>
                        {APIdata?.api ?
                            <div className='Label'>
                                <div className='Item'>
                                    <div>默认页数 : </div>
                                    <div>{APIdata.api.pageSize}</div>
                                </div>
                                <div className='Item'>
                                    <div>分页信息 : </div>
                                    <div>{APIdata.api.pageOptions}</div>
                                </div>
                            </div> :
                            <div className='ErrorTips'>未配置分页信息</div>
                        }
                    </div>
                    <div className='Title' ref={refA06}>字段信息</div>
                    <div>
                        {APIdata?.fields && APIdata.fields.length !== 0 ?
                            <div className='Table'>
                                <div className='List Title'>
                                    <div>字段类型</div>
                                    <div>字段信息</div>
                                    <div>映射名称</div>
                                </div>
                                {APIdata.fields.map(item =>
                                    <div className='List' key={item.uuid}>
                                        <div>{item.valueType}</div>
                                        <div>{item.caption}</div>
                                        <div>{item.dataField}</div>
                                    </div>
                                )}
                            </div> :
                            <div className='ErrorTips'>未配置字段信息</div>
                        }
                    </div>
                    <div className='Title' ref={refA07}>操作信息</div>
                    <div>
                        {OPTdata?.top && OPTdata?.row ?
                            <div className='Options'>
                                <div >
                                    <div className='top'>全局操作</div>
                                    <div>{rowList.map(item => <div key={item.uuid}>{item.title}</div>)}</div>
                                </div>
                                <div>
                                    <div className='top'>行内操作</div>
                                    <div>{topList.map(item => <div key={item.uuid}>{item.title}</div>)}</div>
                                </div>
                            </div> :
                            <div className='ErrorTips'>未配置操作信息</div>
                        }
                    </div>
                </div>
            </DevScrollView>
            <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
        </div>
    )
}

const SetDevRouter = ({ data, Event }) => {
    const { pageActive } = pageStore()
    const { updateModel1, updateModel2, updateModel4 } = modelStore()

    const { uuid: menuUuid, targetUrl } = data

    const [APIdata, setAPIdata] = useState(data.APIdata)
    const [THEdata, setTHEdata] = useState(data.THEdata)
    const [OPTdata, setOPTdata] = useState(data.OPTdata)

    const onSaveAPI = async (data) => {
        console.log('[----------保存API---------]', data)
        const { uuid } = await GetIndexedDB('config')
        const params = { uuid: `${uuid}/DEV_PAGE/${targetUrl}_API`, content: JSON.stringify(await Encrypt(data)) }
        const [APIerror, APIdata] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (APIerror) {
            console.log('保存失败', APIerror)
            return false
        }
        Event.emit({ type: 'onRefresh' })
        setAPIdata(data)
        updateModel1({})
    }

    const onSaveTHE = async (data) => {
        console.log('[----------保存THE---------]', data)
        const { uuid } = await GetIndexedDB('config')
        const params = { uuid: `${uuid}/DEV_PAGE/${targetUrl}_THE`, content: JSON.stringify(await Encrypt(data)) }
        const [THEerror, THEdata] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (THEerror) {
            console.log('保存失败', THEerror)
            return false
        }
        Event.emit({ type: 'onRefresh' })
        setTHEdata(data)
        updateModel1({})
    }

    const onSaveOPT = async (data, type) => {
        console.log('[----------保存OPT---------]', data)
        const { uuid } = await GetIndexedDB('config')
        const params = { uuid: `${uuid}/DEV_PAGE/${targetUrl}_OPT`, content: JSON.stringify(await Encrypt(data)) }
        const [OPTerror, OPTdata] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (OPTerror) return console.log('保存失败', OPTerror)
        const params2 = { menu: menuUuid, button: [...data.top, ...data.row] }
        const [err] = await axios({ method: 'post', url: 'menu/AddMenuButton', params: params2 })
        if (err) return console.log(err)
        Event.emit({ type: 'onRefresh' })
        setOPTdata(data)
        type ? updateModel4({}) : updateModel1({})
    }

    const onBackApi = (e) => {
        APIdata.api = e
        onSaveAPI(APIdata)
    }

    const onBackTemplate = (e) => {
        THEdata.template = e
        onSaveTHE(THEdata)
    }

    const onBackStyle = (e) => {
        THEdata.style = e
        onSaveTHE(THEdata)
    }

    const onCopyFields = () => {
        const success = copy(JSON.stringify(APIdata.fields))
        if (success) message.success('复制成功！')
        else message.error('复制失败！')
    }

    const onImportFields = () => {
        console.log('导入字段')
        console.log('字段直接导入')
    }

    const onPasteGlobalParams = (e) => {
        const { uuid, importField } = e
        const addArr = JSON.parse(importField)
        updateModel2({})
        updateModel4({
            title: '修改全局操作',
            type: 'CommonForm',
            Event: Event,
            modelData: { formItem: 'AddTopOptionsFormList', Initial: { ...addArr, uuid } },
            options: [
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'before',
                    icon: 'fas fa-arrow-alt-circle-up',
                    text: '拷贝参数',
                    onClick: () => {
                        const success = copy(JSON.stringify({ ...addArr, uuid }))
                        if (success) message.success('复制成功！')
                        else message.error('复制失败！')
                    }
                },
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'fas fa-arrow-alt-circle-up',
                    text: '导入参数',
                    onClick: () => {
                        updateModel2({
                            title: '导入参数',
                            width: 800,
                            type: 'CommonForm',
                            Event: Event,
                            modelData: {
                                Initial: { uuid: uuid },
                                formItem: 'AddFieldsPaste',
                                eventBack: 'onPasteGlobalParams',
                            }
                        })
                    }
                },
            ]
        })
    }
    const onPastePartialParams = (e) => {
        const { uuid, importField } = e
        const addArr = JSON.parse(importField)
        updateModel2({})
        updateModel4({
            title: '修改局部操作',
            type: 'CommonForm',
            Event: Event,
            modelData: { formItem: 'AddRowOptionsFormList', Initial: { ...addArr, uuid } },
            options: [
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'before',
                    icon: 'fas fa-arrow-alt-circle-up',
                    text: '拷贝参数',
                    onClick: () => {
                        const success = copy(JSON.stringify({ ...addArr, uuid }))
                        if (success) message.success('复制成功！')
                        else message.error('复制失败！')
                    }
                },
                {
                    visible: true,
                    widget: 'dxButton',
                    location: 'after',
                    icon: 'fas fa-arrow-alt-circle-up',
                    text: '导入参数',
                    onClick: () => {
                        updateModel2({
                            title: '导入参数',
                            width: 800,
                            type: 'CommonForm',
                            Event: Event,
                            modelData: {
                                Initial: { uuid: uuid },
                                formItem: 'AddFieldsPaste',
                                eventBack: 'onPastePartialParams',
                            }
                        })
                    }
                },
            ]
        })
    }

    const devCallBack = (e) => {
        const { type, data } = e
        console.log('[----------SetDevRouter-CallBack---------]', type, data)
        const Mapping = new Map([
            ['onBackApi', () => onBackApi(data)],
            ['onSaveAPIdata', () => onSaveAPI(data)],
            ['onBackStyle', () => onBackStyle(data)],
            ['onBackTemplate', () => onBackTemplate(data)],
            ['onSaveOPTdata', () => onSaveOPT(data)],
            ['onSaveOPTdataA02', () => onSaveOPT(data, true)],
            ['onCopyFields', onCopyFields],
            ['onImportFields', onImportFields],
            ['onPasteGlobalParams', () => onPasteGlobalParams(data)],
            ['onPastePartialParams', () => onPastePartialParams(data)],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    Event.useSubscription(devCallBack)

    return <MissingTemplate APIdata={APIdata} THEdata={THEdata} OPTdata={OPTdata} />
};

export default SetDevRouter