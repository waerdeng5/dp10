import './SetDevRouter.scss'
import { useState } from 'react'
import { axios } from '../../Utils/Api'
import { CommonAPIUrl } from '../../Config'
import { modelStore } from '../../Router/zustand'
import { DevScrollView } from '../../Temp/DevTemplate'
import { MappingData } from '../../Config/MappingData'
import { Encrypt, GetIndexedDB } from '../../Utils/IndexedDB'



export const MissingTemplate = ({ APIdata, THEdata, OPTdata }) => (
    <div className='SetDevRouter'>
        <DevScrollView>
            <div className='SetDevRouterBox'>
                <div className='Title'>模板信息</div>
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
                <div className='Title'>样式渲染</div>
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
                <div className='Title'>接口信息</div>
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
                <div className='Title'>树形菜单</div>
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
                <div className='Title'>数据分页</div>
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

                <div className='Title'>字段信息</div>
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

                <div className='Title'>操作信息</div>
                <div>
                    {OPTdata?.top && OPTdata?.row ?
                        <div className='Options'>
                            <div >
                                <div className='top'>全局操作</div>
                                <div>{OPTdata.top.map(item => <div key={item.uuid}>{item.title}</div>)}</div>
                            </div>
                            <div>
                                <div className='top'>行内操作</div>
                                <div>{OPTdata.row.map(item => <div key={item.uuid}>{item.title}</div>)}</div>
                            </div>
                        </div> :
                        <div className='ErrorTips'>未配置操作信息</div>
                    }
                </div>
            </div>
        </DevScrollView>
    </div>
)

const SetDevRouter = ({ data, Event }) => {
    const { updateModel1, updateModel4 } = modelStore()
    const { uuid, targetUrl } = data

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
        const params2 = { menu: uuid, button: [...data.top, ...data.row] }
        const [err] = await axios({ method: 'post', url: 'menu/AddMenuButton', params: { menu: uuid, button: [...data.top, ...data.row] } })
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
        console.log('拷贝字段', APIdata.fields)

    }
    const onImportFields = () => {
        console.log('导入字段')
    }

    const devCallBack = (e) => {
        const { type, data } = e
        console.log('[----------devCallBack---------]', type, data)
        const Mapping = new Map([
            ['onBackApi', () => onBackApi(data)],
            ['onSaveAPIdata', () => onSaveAPI(data)],
            ['onBackStyle', () => onBackStyle(data)],
            ['onBackTemplate', () => onBackTemplate(data)],
            ['onSaveOPTdata', () => onSaveOPT(data)],
            ['onSaveOPTdataA02', () => onSaveOPT(data, true)],
            ['onCopyFields', onCopyFields],
            ['onImportFields', onImportFields],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    Event.useSubscription(devCallBack)

    return <MissingTemplate APIdata={APIdata} THEdata={THEdata} OPTdata={OPTdata} />
};

export default SetDevRouter