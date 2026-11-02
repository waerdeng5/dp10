import './UserCenter.scss'
import { useState } from 'react'
import { useEventEmitter, useMount } from 'ahooks'
import { Button, Input, Alert, Select, message } from 'antd'

import { axios } from '../../Utils/Api'
import { CommonAPIUrl } from '../../Config'
import { modelStore } from '../../Router/zustand'
import FormTemplate from '../../Utils/FormTemplate'
import { FormConfig } from '../../Config/configForm'
import { ICONMapping } from '../../Config/IconMapping'
import { DevScrollView } from '../../Temp/DevTemplate'
import { ANIMATIONLIST } from '../../Temp/TemplateAnimation'
import { Dev_data, Dev_theme } from '../../Router/devMapping'
import { UserAvatar, UserBackboard } from '../../Config/index'
import { GetIndexedDB, PutIndexedDB } from '../../Utils/IndexedDB'

import themes from "devextreme/ui/themes"
import DataGrid, { Column, Grouping, GroupPanel, Pager, Paging, SearchPanel, Selection } from 'devextreme-react/data-grid';

const UserCenter = () => {
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const [userAdd, setUserAdd] = useState()
    const [userInfo, setUserInfo] = useState()
    const [Active, setActive] = useState(5)
    const [COLOR, setCOLOR] = useState('#0a3cff')
    const [Loading, setLoading] = useState(false)

    const [DataA01, setDataA01] = useState({ 去完成: 0, 已完成: 0, 已失效: 0, 总数量: 0, taskPointsTablePoints: 0 })
    const [ListA01, setListA01] = useState([])

    const [userBack, setUserBack] = useState()
    const [userAvatar, setUserAvatar] = useState()
    const [userNickName, setUserNickName] = useState()
    const [LookAnimation, setLookAnimation] = useState()
    const [DXTheme, setDXTheme] = useState()

    const FormEvent = useEventEmitter()

    const userInfoMapping = [
        { uuid: 1, title: '账户信息', value: 'tableName' },
        { uuid: 2, title: '用户姓名', value: 'userName' },
        { uuid: 3, title: '手机号码', value: 'mobile' },
        { uuid: 4, title: '组织机构', value: 'organizationName' },
        { uuid: 5, title: '有效期限', value: 'validPeriod' },
        { uuid: 6, title: '微信绑定', value: 'unionId' },
    ]

    const tabsMapping = [
        // { uuid: 1, title: '积分信息' },
        { uuid: 2, title: '后台名片' },
        { uuid: 3, title: '密码管理' },
        { uuid: 4, title: '锁屏动画' },
        { uuid: 5, title: '表单主题' },
    ]

    const optionsMapping = [
        { uuid: 2, title: '名片信息' },
        { uuid: 3, title: '修改密码' },
        { uuid: 4, title: '锁屏动画' },
        { uuid: 5, title: '重置密码' },
    ]

    const pointsMapping = [
        { uuid: 1, title: '待完成', value: '去完成', color: '#1677ff', icon: 'fasClock' },
        { uuid: 2, title: '已完成', value: '已完成', color: '#52c41a', icon: 'fasCheckCircle' },
        { uuid: 4, title: '已失效', value: '已失效', color: '#f5222d', icon: 'fasTimesCircle' },
        { uuid: 3, title: '总任务', value: '总数量', color: '#13c2c2', icon: 'fasInfoCircle' },
        { uuid: 5, title: '总积分', value: 'taskPointsTablePoints', color: '#ad6800', icon: 'fasLifeRing' },
    ]

    const getPoints = async () => {
        const [err, res] = await axios({ method: 'get', url: 'taskExecution/GetTaskExecutionCountList' })
        if (err) return console.log(err)
        const { hashtable, list } = res.data
        const { 去完成, 已完成, 已失效, 总数量 } = hashtable
        const [{ taskPointsTablePoints }] = list
        setDataA01({ 去完成, 已完成, 已失效, 总数量, taskPointsTablePoints })
    }
    const getTaskList = async () => {
        const [err, res] = await axios({ method: 'get', url: 'taskExecution/GetWechatTaskExecutionList' })
        if (err) return console.log(err)
        setListA01(res.data.list)
    }

    const onSaveUserCard = async () => {
        setLoading(true)
        const { uuid } = await GetIndexedDB('config')
        const [getErr, getRes] = await axios({
            method: 'get',
            path: CommonAPIUrl,
            url: 'projects/GetJsonInfoByUuid',
            params: { uuid: `${uuid}/UserInfo` }
        })
        if (getErr) return console.log(getErr)
        const data = { ...getRes[userInfo.userUuid], avatar: userAvatar, backImage: userBack, nickName: userNickName }
        getRes[userInfo.userUuid] = data
        const params = { uuid: `${uuid}/UserInfo`, content: JSON.stringify(getRes) }
        const [postErr] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (postErr) return console.log(postErr)
        await PutIndexedDB('userAdd', data)
        setLoading(false)
    }

    const formCallBack = e => {
        const { type, data } = e
        const Mapping = new Map([
            ['onSelectLook', () => setLookAnimation(data)],
            ['onFormBack', () => onModifyPwd(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    FormEvent.useSubscription(formCallBack)

    const onResetPassword = async () => {
        const [err, res] = await axios({ method: 'post', url: 'users/ResetPassword' })
        if (err) return console.log('重置失败')
        console.log('重置成功', res)
    }
    const onModifyPwd = async (data) => {
        const [err, res] = await axios({ method: 'post', url: 'users/changePassword', params: data })
        if (err) return console.log('修改失败')
        console.log('修改成功', res)
        FormEvent.emit({ type: 'closeFormLoading' })
    }

    const onSwitchAnimation = () => {
        updateModel5({
            title: '锁屏动画',
            type: 'CommonModel',
            Event: FormEvent,
            modelData: { openType: 'LookAnimation', Initial: LookAnimation, userInfo }
        })
    }

    useMount(async () => {
        const userAdd = await GetIndexedDB('userAdd')
        const userInfo = await GetIndexedDB('user')
        const { themeColor } = await await GetIndexedDB('theme')
        setUserBack(userAdd.backImage)
        setUserAvatar(userAdd.avatar)
        setUserNickName(userAdd.nickName)
        setLookAnimation(userAdd?.animation || 'TemplateAnimationA01')
        setCOLOR(themeColor)
        setUserAdd(userAdd)
        setUserInfo(userInfo)
        setDXTheme(userAdd.dxTheme)
        // getPoints()
        // getTaskList()
    })

    const onThemeSelect = (e) => {
        themes.current(e)
        setDXTheme(e)
    }

    const onSaveTheme = async () => {
        setLoading(true)
        const { uuid } = await GetIndexedDB('config')
        const [getErr, getRes] = await axios({
            method: 'get',
            url: 'projects/GetJsonInfoByUuid',
            path: CommonAPIUrl,
            params: { uuid: `${uuid}/UserInfo` }
        })

        if (getErr) return console.log(getErr)
        const { userUuid } = userInfo
        getRes[userUuid].dxTheme = DXTheme
        const params = { uuid: `${uuid}/UserInfo`, content: JSON.stringify(getRes) }
        const [postErr] = await axios({ method: 'post', url: 'projects/SaveJsonInfoByUuid', path: CommonAPIUrl, params })
        if (postErr) return console.log(postErr)
        message.success('保存成功')
        setLoading(false)
    }

    return (
        <div className='UserCenter'>
            <img className='back' src={UserBackboard[userBack]} alt="" />
            <div className='box'>
                <div className='user'>
                    <svg fill="none" viewBox="0 0 144 62" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#fff" d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z" fillRule="evenodd" />
                    </svg>
                    <img className='avatar' src={UserAvatar[userAvatar]} alt="" />
                    <div className='nickName'>{userNickName}</div>
                    <div className='userInfo'>
                        {userInfoMapping.map(item => (
                            <div key={item.uuid}>
                                <div className='title'>{item.title} : </div>
                                <div className='value'>
                                    {item.uuid === 6 ? userInfo?.[item.value] ? '已绑定' : '未绑定' : userInfo?.[item.value]}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='options'>  </div>
                </div>
                <div className='info'>
                    <div className='tabs' style={{ '--color': COLOR }}>
                        {tabsMapping.map(item => (
                            <div
                                key={item.uuid}
                                className={Active === item.uuid ? 'active' : ''}
                                onClick={() => setActive(item.uuid)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                    {Active === 1 &&
                        <div className='infoItem points'>
                            <div>
                                {pointsMapping.map(item => (
                                    <div key={item.uuid} style={{ '--color': item.color }}>
                                        <div style={{ background: `${item.color}24` }}>
                                            {ICONMapping[item.icon]}
                                        </div>
                                        <div>
                                            <div>{DataA01[item.value]}</div>
                                            <div>{item.title}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='task'>
                                <div>今日任务 </div>
                                <div>
                                    <DevScrollView>
                                        <div className='list'>
                                            {ListA01.map(item =>
                                                <div key={item.uuid} className='item dx-card'>
                                                    {item.taskScheduleModuleTypeName} - {item.taskPointsTableName}
                                                </div>
                                            )}
                                        </div>
                                    </DevScrollView>
                                </div>
                            </div>
                        </div>
                    }
                    {Active === 2 &&
                        <div className='infoItem card'>
                            <div>
                                <DevScrollView>
                                    <div className='avatarBox'>
                                        {Object.keys(UserAvatar).map(key =>
                                            <div key={key} onClick={() => setUserAvatar(key)} className={userAvatar === key ? 'active' : ''}>
                                                <img src={UserAvatar[key]} alt="" />
                                            </div>
                                        )}
                                    </div>
                                </DevScrollView>
                            </div>
                            <div>
                                <div className='card'>
                                    <img className='back' src={UserBackboard[userBack]} alt="" />
                                    <div>
                                        <svg fill="none" viewBox="0 0 144 62" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#f7f7f7" d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z" fillRule="evenodd" />
                                        </svg>
                                        <img className='avatar' src={UserAvatar[userAvatar]} alt="" />
                                        <Input placeholder="请输入昵称" variant="borderless" value={userNickName} onChange={e => setUserNickName(e.target.value)} />
                                    </div>
                                </div>
                                <Button type='primary' onClick={onSaveUserCard} loading={Loading}>{Loading ? '保存中...' : '保存'}</Button>
                            </div>
                            <div>
                                <DevScrollView>
                                    <div className='backBox'>
                                        {Object.keys(UserBackboard).map(key =>
                                            <div key={key} onClick={() => setUserBack(key)} className={userBack === key ? 'active' : ''}>
                                                <img src={UserBackboard[key]} alt="" />
                                            </div>
                                        )}
                                    </div>
                                </DevScrollView>
                            </div>
                        </div>
                    }
                    {Active === 3 &&
                        <div className='infoItem pwd'>
                            <div className='modify'>
                                <Alert type="error" title="密码规则-6位以上，包含至少一个大小写字母、数字" banner />
                                <FormTemplate formItem={FormConfig.ModifyPasswordFormList} FORMEVENT={FormEvent} />
                            </div>
                            {/* <div className='reset'>
                                <Button type='primary' onClick={onResetPassword}>重置密码</Button>
                            </div> */}
                        </div>
                    }
                    {Active === 4 &&
                        <div className='infoItem look'>
                            <div className='animation'>
                                {(() => {
                                    if (!LookAnimation) return false
                                    const Template = ANIMATIONLIST[LookAnimation]
                                    return <Template />
                                })()}
                            </div>
                            <div className='switch'>
                                <Button type='link' icon={<i className="fas fa-exchange-alt" />} onClick={onSwitchAnimation}>切换动画</Button>
                            </div>
                        </div>
                    }
                    {Active === 5 &&
                        <div className='infoItem dev'>
                            <div className='Select'>
                                <Select
                                    style={{ width: '100%' }}
                                    options={Dev_theme}
                                    value={DXTheme}
                                    variant="underlined"
                                    optionRender={e => {
                                        const { label, data } = e
                                        return (
                                            <span className='SELECTColorModel'>
                                                <span className='SELECTColorModel_back' style={{ background: data.color[1] }}>
                                                    <span
                                                        className='SELECTColorModel_cont'
                                                        style={{ background: data.color[0], '--color': `${data.color[0]}50` }}
                                                    />
                                                </span>
                                                <span>{label}</span>
                                            </span>
                                        )
                                    }}
                                    onChange={onThemeSelect}
                                />
                            </div>
                            <div className='Table'>
                                <DataGrid dataSource={Dev_data} keyExpr="Id" showBorders={true} width="100%" height="100%" hoverStateEnabled={true}>
                                    <Selection mode="single" />
                                    <GroupPanel visible={true} />
                                    <SearchPanel visible={true} highlightCaseSensitive={true} />
                                    <Grouping autoExpandAll={false} />
                                    <Column dataField="Product" />
                                    <Column dataField="Amount" caption="Sale Amount" dataType="number" />
                                    <Column dataField="Discount" caption="Discount" dataType="number" />
                                    <Column dataField="SaleDate" dataType="date" />
                                    <Column dataField="Region" dataType="string" />
                                    <Column dataField="Sector" dataType="string" />
                                    <Column dataField="Channel" dataType="string" />
                                    <Column dataField="Customer" dataType="string" width={150} />
                                    <Pager visible={true} allowedPageSizes={10} showPageSizeSelector={true} />
                                    <Paging defaultPageSize={10} />
                                </DataGrid>
                            </div>
                            <div>
                                <Button loading={Loading} onClick={onSaveTheme}>保存个人主题</Button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserCenter;