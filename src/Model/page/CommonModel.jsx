import './CommonModel.scss'
import { v4 } from 'uuid'
import { useEventEmitter, useMount, useReactive, useSize } from 'ahooks'
import { Result, Button, Tree, App, Select, Spin, Timeline, Skeleton, Popconfirm, Divider } from 'antd'
import { useState, useEffect, useRef, useCallback } from 'react'

import { Sortable } from 'devextreme-react/sortable'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import themes from "devextreme/ui/themes";

import Chart, { AdaptiveLayout, CommonSeriesSettings, Size, Tooltip, Export, Label, Format, Legend } from 'devextreme-react/chart'

import { onTreeDrop, ColorCallBack } from '../../Utils'
import FormTemplate from '../../Utils/FormTemplate'
import { GetIndexedDB, PutIndexedDB, Encrypt, Decrypt } from '../../Utils/IndexedDB'
import { DevScrollView } from '../../Temp/DevTemplate'
import { MappingData } from '../../Config/MappingData'
import { axios, axiosFor, strOfurlParamsFunc } from '../../Utils/Api'
import { modelStore, devChartsStore } from '../../Router/zustand'

import { VideoTemplateA02 } from '../../Temp/VideoTemplate'

import { dxThemeMapping } from '../../Config/themeMapping'
import { SwiperLookAnimation } from '../../Temp/SwiperTemplate'


const { port } = window.location

const handleData = (e) => {
    return JSON.parse(e.data).content
};

const CommonModel = ({ data, Event }) => {
    const { message, modal, notification } = App.useApp()
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()


    const { openType, Initial } = data
    if (openType === 'onTreeSearch') {
        const { searchArr, Initial } = data
        return (
            <DevScrollView>
                <FormTemplate
                    formItem={searchArr.map(item => ({ span: 24, formType: item.type, name: item.value, label: item.label }))}
                    FORMEVENT={Event}
                    Initial={Initial}
                />
            </DevScrollView>
        )
    }

    // 菜单排序
    if (openType === 'A1001' || openType === 'A1002') {
        const mapping = {
            A1001: { get: 'menu', post: 'menu/UpdateMenuSortId' },
            A1002: { get: 'weChatMenu', post: 'weChatMenu/UpdateMenuSortId' }
        }

        const [TreeData, setTreeData] = useState()
        const [Loading, setLoading] = useState(false)

        const onSave = async () => {
            setLoading(true)
            const [err, res] = await axios({ method: 'post', url: mapping[openType].post, params: TreeData })
            if (err) return false
            if (openType === 'A1001') {
                await PutIndexedDB('menu', TreeData)
                Event.emit({ type: 'changeMenu' })
            }
            Event.emit({ type: 'onRefreshData', data: {} })
            setLoading(false)
        }

        useMount(async () => {
            const [err, res] = await axios({ method: 'get', url: mapping[openType].get })
            if (err) return false
            setTreeData(res.data.list)
        })
        return (
            <div className='CommonModelA1001'>
                <DevScrollView>
                    <div className='Tree'>
                        {TreeData &&
                            <Tree
                                fieldNames={{ key: 'uuid', title: 'tableName' }}
                                defaultExpandAll
                                draggable
                                blockNode
                                onDrop={e => setTreeData(onTreeDrop(e, TreeData, 'uuid'))}
                                treeData={TreeData}
                                selectedKeys={[]}
                            />
                        }
                    </div>
                </DevScrollView>
                <Button type='primary' loading={Loading} style={{ width: 160 }} onClick={onSave}>保存排序</Button>
            </div>
        )
    }

    // 重置密码
    if (openType === 'B1504') {
        const { uuid, tableName, fullName } = Initial

        const onReset = async () => {
            const [err, res] = await axios({ method: 'post', url: 'users/ResetPassword', params: { uuid } })
            if (err) return console.log('重置失败')
            notification.success({ message: '重置成功!', description: `${tableName}-${fullName} 的密码已重置!` })
            updateModel5({})
        }

        const onClose = () => {
            updateModel5({})
        }

        return (
            <div className='CommonModelB1504'>
                <Result
                    status="warning"
                    title="是否重置密码为初始密码?"
                    extra={[
                        <Button type="primary" key="console1" danger size='large' onClick={onReset}>确认重置</Button>,
                        <Button type="default" key="console2" size='large' onClick={onClose}>取消</Button>
                    ]}
                />
            </div>
        )
    }

    // OLAP图例
    if (openType === 'A0903') {
        const ChartsType = [
            { value: 'bar', label: '柱图' },
            { value: 'stackedbar', label: '堆叠柱图' },
            { value: 'fullstackedbar', label: '百分比全堆叠' },
            { value: 'splinearea', label: '面积图(重叠)' },
            { value: 'stackedsplinearea', label: '面积图(不重叠)' },
            { value: 'fullstackedsplinearea', label: '百分比面积图' },
            { value: 'spline', label: '折线图' },
            { value: 'stackedspline', label: '堆叠折线图' },
            { value: 'fullstackedspline', label: '百分比折线图' },
        ]

        const chartRef = useRef()
        const chartBox = useRef()
        const size = useSize(chartBox)

        const { devPivot } = devChartsStore()
        const [Type, setType] = useState('bar')

        const customizeTooltip = (args) => {
            const valueText = args.seriesName.indexOf('Total') !== -1 ?
                new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(args.originalValue,) : args.originalValue;
            return { html: `${args.seriesName}<div class='currency'>${valueText}</div>` }
        }

        useEffect(() => {
            if (devPivot && size)
                devPivot.instance().bindChart(chartRef.current.instance(), { dataFieldsDisplayMode: 'splitPanes', alternateDataFields: false })
        }, [devPivot, size])

        return (
            <div className='CommonModelA0903'>
                <div className='Options'>
                    <div>图例类型 : </div>
                    <Select suffixIcon={false} value={Type} options={ChartsType} onChange={e => setType(e)} />
                </div>
                <div className='Charts' ref={chartBox}>
                    {size &&
                        <Chart ref={chartRef}>
                            <Size height={size.height} />
                            <Tooltip enabled={true} location="edge" customizeTooltip={customizeTooltip} />
                            <Label enabled={true} >
                                <Format precision={1} type="fixedPoint" />
                            </Label>
                            <CommonSeriesSettings type={Type} />
                            <AdaptiveLayout width={600} />
                            <Export enabled={true} />
                            <Legend
                                verticalAlignment="top"
                                horizontalAlignment="center"
                                itemTextPosition="right"
                            />
                        </Chart>
                    }
                </div>
            </div>
        )
    }

    // 附件详情
    if (openType === 'attDetail') {
        const { type, url } = data

        if (type === 'video') return (
            <div className='CommonModel__attDetail'>
                <VideoTemplateA02 url={url} />
            </div>
        )
        if (type === 'pdf') return (
            <div className='CommonModel__attDetail'>
                <embed src={url} type="application/pdf" />
            </div>
        )
        if (type === 'not') return (
            <div className='CommonModel__attDetail'>
                <Result status="404" title='未知文件' subTitle={url} />
            </div>
        )
    }
    // 步骤条
    if (openType === 'B17') {
        const { B17_method, B17_url, B17_params, B17_isData, B17_dataArr, B17_status, B17_statusArr, B17_render, Initial } = data
        const { B17_titleColor, B17_titleDeg, B17_titleSize, B17_titleFamily, B17_titleWeight, B17_titleStyle,
            B17_titleShadowX, B17_titleShadowY, B17_titleShadowS, B17_titleShadowC } = data
        const { B17_textColor, B17_textDeg, B17_textSize, B17_textFamily, B17_textWeight, B17_textStyle,
            B17_textShadowX, B17_textShadowY, B17_textShadowS, B17_textShadowC } = data

        const [Data, setData] = useState([])
        const [status, setStatus] = useState(false)
        const [statusMapping, setStatusMapping] = useState({})

        const titleStyle = {
            '--background': ColorCallBack(B17_titleColor, B17_titleDeg),
            fontSize: B17_titleSize,
            fontFamily: B17_titleFamily,
            fontWeight: B17_titleWeight,
            fontStyle: B17_titleStyle,
            filter: `drop-shadow(${B17_titleShadowX}px ${B17_titleShadowY}px ${B17_titleShadowS}px ${B17_titleShadowC})`,
        }

        const textStyle = {
            '--background': ColorCallBack(B17_textColor, B17_textDeg),
            fontSize: B17_textSize,
            fontFamily: B17_textFamily,
            fontWeight: B17_textWeight,
            fontStyle: B17_textStyle,
            filter: `drop-shadow(${B17_textShadowX}px ${B17_textShadowY}px ${B17_textShadowS}px ${B17_textShadowC})`,
        }



        useMount(async () => {
            const statusMapping = {}
            B17_statusArr.forEach(item => statusMapping[item.value] = { color: item.color, title: item.label })
            setStatusMapping(statusMapping)

            const params = strOfurlParamsFunc(B17_params)
            if (B17_isData) B17_dataArr.forEach(item => params[item.label] = Initial[item.value])
            const [err, res] = await axios({ method: B17_method, url: B17_url, params })
            if (err) return console.log(err)
            setData(res.data.list)
            setStatus(true)
        })

        return (
            <div className='CommonModelB17'>
                <DevScrollView>
                    <div className='CommonModelB17__step'>
                        {status ?
                            <Timeline
                                items={(() => {
                                    const data = Data.map(i => {
                                        console.log(statusMapping)
                                        return ({
                                            color: statusMapping[i[B17_status]]?.color,
                                            children: (
                                                <div className='TimelineData'>
                                                    <div>
                                                        <div style={titleStyle}>当前状态 : </div>
                                                        <div style={textStyle}>{statusMapping[i[B17_status]]?.title}</div>
                                                    </div>
                                                    {B17_render.map((item, index) => {
                                                        if (i[item.value]) return (
                                                            <div key={index}>
                                                                <div style={titleStyle}>{item.label} : </div>
                                                                <div style={textStyle}>{i[item.value]}</div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })
                                    })
                                    return data
                                })()}
                            /> :
                            <Skeleton active paragraph={{ rows: 16 }} />
                        }
                    </div>
                </DevScrollView>
            </div >
        )
    }

    // 题目单独解析
    if (openType === 'B1605') {
        const { uuid, category, topicTypeName, tableName, explanation } = Initial
        const init = useReactive({ aiText: explanation })

        const [loading, setLoading] = useState(false)

        const onReParse = () => {
            init.aiText = ''
            setLoading(true)
            var eventSource = new EventSource(`https://coze.tonzoc.com.cn/parse_questions_by_uuids?question_uuids=${uuid}`)
            eventSource.onopen = e => { console.log('链接成功') }
            eventSource.onmessage = e => init.aiText += handleData(e)
            eventSource.onerror = (e) => { eventSource.close() }
            eventSource.addEventListener('completed', (event) => {
                eventSource.close()
                setLoading(false)
            })
        }
        return (
            <div className='CommonModelB1605'>
                <DevScrollView>
                    <div className='CommonModelB1605_Box'>
                        <div>
                            <div>类型 : </div>
                            <div>{category}-{topicTypeName}</div>
                        </div>
                        <div>
                            <div>题目 : </div>
                            <div>{tableName}</div>
                        </div>
                        <div>
                            <div>解析 : </div>
                            <div>
                                <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: true }]]}  >
                                    {init.aiText}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </DevScrollView>
                <Button type='primary' loading={loading} onClick={onReParse}>解析</Button>
            </div>
        )
    }
    // 题目批量解析
    if (openType === 'A1101') {
        return (
            <div>
                题目批量解析
            </div>
        )
    }

    if (openType === 'B1606') {
        const { uuid, topicTypeName, explanation, tableName, category } = data.Initial
        const [options, setOptions] = useState([])
        const [answer, setAnswer] = useState({})
        const QuestionEvent = useEventEmitter()
        const getMapping = [
            { method: 'get', url: 'dailyQuizOption', params: { dailyQuizUuid: uuid } },
            { method: 'get', url: 'dailyQuizAnswer', params: { dailyQuizUuid: uuid } }
        ]

        const getData = async () => {
            const [[optionsErr, optionsRes], [answerErr, answerRes]] = await axiosFor(getMapping)
            if (optionsErr || answerErr) return console.log(optionsErr, answerErr)
            const options = optionsRes.data.list.sort((a, b) => {
                if (a.optionKey < b.optionKey) return -1
                if (a.optionKey > b.optionKey) return 1
                return 0
            })
            setOptions(options)
            setAnswer(answerRes.data)
        }

        const onReorder = useCallback((e) => {
            let updatedItems = [...options.slice(0, e.fromIndex), ...options.slice(e.fromIndex + 1)]
            updatedItems = [...updatedItems.slice(0, e.toIndex), e.itemData, ...updatedItems.slice(e.toIndex)]
            setOptions(updatedItems);
        }, [options, setOptions])

        const onDragStart = useCallback((e) => { e.itemData = options[e.fromIndex] }, [options])

        const onAddOptions = () => {
            updateModel4({
                title: '新增选项',
                type: 'CommonForm',
                Event: QuestionEvent,
                width: 640,
                height: 640,
                modelData: { formItem: 'QuestionBankOptions', eventBack: 'onAddOptions' }
            })
        }

        const onSelect = (uuid) => setAnswer(e => ({ ...e, dailyquizoptionuuids: uuid }))


        const onDelete = async uuid => {
            const [err, res] = await axios({ method: 'delete', url: 'dailyQuizOption', params: { uuid } })
            if (err) return console.log(err)
            setOptions(e => e.filter(item => item.uuid !== uuid))
            updateModel4({})
        }

        const onSave = async () => {
            const params = { dailyQuizUuid: answer.dailyquizuuid, dailyQuizOptionUuid: answer.dailyquizoptionuuids }
            const [err, res] = await axios({ method: 'post', url: 'dailyQuizAnswer', params })
            if (err) return console.log(err)
            updateModel5({})
        }

        QuestionEvent.useSubscription(async val => {
            const { type, data } = val
            if (type === 'onAddOptions') {
                const params = { uuid: v4(), ...data, dailyQuizUuid: uuid }
                setOptions(e => ([...e, params]))
                const [err, res] = await axios({ method: 'post', url: 'dailyQuizOption', params })
                if (err) return console.log(err)
                updateModel4({})
            }
        })


        useMount(getData)
        return (
            <div className='CommonModelB1606'>
                <DevScrollView>
                    <div className='DevScrollViewBox'>
                        <div>
                            <div>类型 : </div>
                            <div>{category}-{topicTypeName}</div>
                        </div>
                        <div>
                            <div>题目 : </div>
                            <div>{tableName}</div>
                        </div>
                        <div>
                            <div>解析 : </div>
                            <div>{explanation}</div>
                        </div>
                        <div>
                            <div>选项 : </div>
                            <div className='options'>
                                <Sortable handle='.handle' data={1} group="cardsGroup" onReorder={onReorder} onDragStart={onDragStart}>
                                    {options.map(item => {
                                        const { uuid, optionKey, optionContent } = item
                                        const status = answer?.dailyquizoptionuuids === uuid
                                        return (
                                            <div key={uuid} className={`DevScrollViewBox_options dx-card ${status ? 'active' : ''}`}>
                                                <i className="handle dx-icon dx-icon-dragvertical" />
                                                <div>{optionKey}.{optionContent}</div>
                                                {status ?
                                                    <i className="fas fa-check check" /> :
                                                    <>
                                                        <i className="far fa-circle circle" onClick={() => onSelect(uuid)} />
                                                        <Popconfirm
                                                            title="删除提醒!"
                                                            description="是否删除当前答案选项?"
                                                            onConfirm={() => onDelete(uuid)}
                                                            okText="删除"
                                                            cancelText="取消"
                                                        >
                                                            <i className="far fa-trash-alt delete" />
                                                        </Popconfirm>
                                                    </>
                                                }
                                            </div>
                                        )
                                    })}
                                    <Button block onClick={onAddOptions}>
                                        <i className="fas fa-plus-circle" />  添加新答案
                                    </Button>
                                </Sortable>
                            </div>
                        </div>
                    </div>
                </DevScrollView>

                <Button type='primary' onClick={onSave}>保存题目</Button>
            </div>
        )
    }

    if (openType === 'clearFields') {
        const onReset = () => Event.emit({ type: 'onConfirmClearFields' })
        const onClose = () => updateModel5({})
        return (
            <div className='CommonModelB1504'>
                <Result
                    status="error"
                    title="是否清空当前配置的所有字段?"
                    extra={[
                        <Button type="primary" key="console1" danger size='large' onClick={onReset}>清空</Button>,
                        <Button type="default" key="console2" size='large' onClick={onClose}>取消</Button>
                    ]}
                />
            </div>
        )
    }

    // 主题选择
    if (openType === 'DxTheme') {
        const [UserUuid, setUserUuid] = useState()
        const [UserAdd, setUserAdd] = useState()
        const [Active, setActive] = useState('')
        const [themeData, setThemeData] = useState({})


        const onDxThemeClick = async (theme) => {
            const [err, res] = await axios({ method: 'get', url: 'dictionary/GetJsonInfoByUuid', params: { uuid: 'UserInfo' } })
            if (err) return console.log(err)
            UserAdd.dxTheme = theme
            const params = JSON.stringify({ ...res, [UserUuid]: UserAdd })
            const [postErr,] = await axios({ method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params: { uuid: 'UserInfo', Content: params } })
            if (postErr) return console.log(postErr)
            await PutIndexedDB('userAdd', UserAdd)
            themes.current(theme)
            setActive(theme)
            Event.emit({ type: 'onSetDxTheme', data: theme })
        }

        const onSetTheme = (value) => {
            const theme = value.split('.compact')[0]
            const Initial = { ...themeData[theme], uuid: theme }
            updateModel4({
                title: '主题参数设置',
                type: 'CommonForm',
                Event: Event,
                modelData: { formItem: 'DxThemeConfig', eventBack: 'onSetDxThemeData', Initial }
            })
        }

        Event.useSubscription(async val => {
            const { type, data } = val
            if (type === 'onSetDxThemeData') {
                const { uuid, ...theme } = data
                themeData[uuid] = theme
                const params = JSON.stringify(await Encrypt(themeData))
                const [err,] = await axios({ method: 'post', url: 'dictionary/SaveJsonInfoByUuid', params: { uuid: 'Theme/DxTheme', Content: params } })
                if (err) return console.log(err)
                setThemeData(themeData)
                await PutIndexedDB('dxTheme', await Encrypt(themeData))
                if (Active === uuid) Event.emit({ type: 'onSetDxTheme', data: uuid })
                updateModel4({})
            }
        })

        useMount(async () => {
            const { userUuid } = await GetIndexedDB('user')
            const userAdd = await GetIndexedDB('userAdd')
            setActive(userAdd?.dxTheme || 'fluent.blue.light.compact')
            setUserUuid(userUuid)
            setUserAdd(userAdd)
            const [err, res] = await axios({ method: 'get', url: 'dictionary/GetJsonInfoByUuid', params: { uuid: 'Theme/DxTheme' } })
            if (err) return console.log(err)
            setThemeData(await Decrypt(res))
        })

        return (
            <div className='CommonModelDxTheme'>
                <DevScrollView>
                    <div className='Box'>
                        {dxThemeMapping.map(item => {
                            const { title, children } = item
                            return (
                                <div key={title}>
                                    <Divider titlePlacement="start">{title}</Divider>
                                    {children.map(key => {
                                        const { value, background, color } = key
                                        const status = Active === value
                                        return (
                                            <div className={`Item ${status ? 'active' : ''}`} key={value}>
                                                <div style={{ background }}>
                                                    <div style={{ background: color }} />
                                                </div>
                                                <div>
                                                    <Button
                                                        type='link'
                                                        className={Active === value ? 'active' : ''}
                                                        onClick={() => onDxThemeClick(value)}
                                                    > 宽松 </Button>
                                                    <Button
                                                        type='link'
                                                        className={Active === `${value}.compact` ? 'active' : ''}
                                                        onClick={() => onDxThemeClick(`${value}.compact`)}
                                                    > 紧凑 </Button>
                                                    {port && <Button type='link' onClick={() => onSetTheme(value)}>设置</Button>}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </DevScrollView>
            </div>
        )
    }

    // 锁屏动画
    if (openType === 'LookAnimation') {
        return (
            <div className='CommonModelLookAnimation'>
                <SwiperLookAnimation Initial={data.Initial} userInfo={data.userInfo} Event={Event} />
            </div>
        )
    }

    // 微信绑定
    if (openType === 'WeChatBinding') {
        const { head_optionsList } = data.Initial
        const { wx_appid } = head_optionsList.find(v => v.func === 4)
        const [uuid] = useState(v4())
        const [Loading, setLoading] = useState(true)
        const [BindState, setBindState] = useState(false)

        const unBind = async () => {
            const [err] = await axios({ method: 'post', url: 'users/UnBindOpenWeChatUnionId' })
            if (err) return console.log(err)
            const user = await GetIndexedDB('user')
            user.unionId = ''
            await PutIndexedDB('user', user)
            updateModel({})
        }

        useMount(async () => {
            const { unionId } = await GetIndexedDB('user')
            const { apiUrl } = await GetIndexedDB('config')
            const { client_Id } = await GetIndexedDB('config')
            setBindState(!!!unionId)
            setLoading(false)

            if (!unionId) {
                const state = `${uuid}@${wx_appid}@${client_Id}`
                const get = `${apiUrl}/users/GetOpenUnionidOrTokenSSE?QRUuid=${uuid}&Type=unionid`
                const codeData = {
                    self_redirect: true,
                    id: 'QRcode',
                    appid: wx_appid,
                    scope: 'snsapi_login',
                    response_type: 'code',
                    redirect_uri: window.encodeURI('https://common-redirect.ljkjkf.com'),
                    state: state,
                    style: 'black',
                    href: 'https://image.ljkjkf.com/intellisiteSystem_TieKe/WebTemplate/code.css',
                }
                var eventSource = new EventSource(get)
                eventSource.onopen = () => new window.WxLogin(codeData)
                eventSource.onmessage = async e => {
                    const { data } = e
                    if (data.length > 10) {
                        const [err] = await axios({ method: 'post', url: 'users/BindOpenWeChatUnionIdAndUserId', params: { unionid: data } })
                        if (err) return console.log(err)
                        eventSource.close()
                        const user = await GetIndexedDB('user')
                        user.unionId = data
                        await PutIndexedDB('user', user)
                        updateModel({})
                    }
                }
                eventSource.onerror = () => eventSource.close()
            }
        })

        return (
            <div className='CommonModel_WeChatBinding'>
                {Loading ? ('加载中') : BindState ? (<div id="QRcode" />) :
                    (
                        <Result
                            status="warning"
                            title="是否要解除微信与帐号的绑定?"
                            extra={<Button type="primary" key="console" danger onClick={unBind}>解除绑定</Button>}
                        />
                    )}
            </div>
        )
    }

    // 公众号绑定
    if (openType === 'OfficialAccount') {
        const { head_optionsList } = data.Initial
        const { wx_image } = head_optionsList.find(v => v.func === 5)
        return <img className='CommonModel_OfficialAccount' src={wx_image} alt="" />
    }

    return (
        <div className='CommonModelNone'>
            <Result status="403" title={`CommonModel - 找到功能项 - ${openType}`} />
        </div>
    )
};

export default CommonModel;