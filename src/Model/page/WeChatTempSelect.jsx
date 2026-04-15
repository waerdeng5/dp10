import './WeChatTempSelect.scss'

import { Tabs, Alert } from 'antd'

import { DevScrollView } from '../../Temp/DevTemplate'
import { WeChatTempTitle } from '../../Temp/WeChatTempTitle'
import { WeChatTempHome } from '../../Temp/WeChatTempHome'
import { WeChatTempFixed } from '../../Temp/WeChatTempFixed'
import { WeChatTempReserve } from '../../Temp/WeChatTempReserve'


const Common = { ...WeChatTempTitle, ...WeChatTempReserve }


const WeChatTempSelect = ({ data, Event }) => {
    const items = [
        {
            key: '1',
            label: '通用模块',
            children: (
                <DevScrollView>
                    <div className='SelectBox A01'>
                        {Object.keys(Common).map((v) => {
                            const { temp, title } = Common[v]
                            const Template = temp
                            return (
                                <div className='Item' key={v} onClick={() => Event.emit({ type: 'onSelectTemp', data: Common[v] })}>
                                    <div className='temp'>
                                        <DevScrollView>
                                            <Template />
                                        </DevScrollView>
                                    </div>

                                    <div className='title'>{title}</div>
                                </div>
                            )
                        })}
                    </div>
                </DevScrollView>
            ),
        },
        {
            key: '2',
            label: '首页大组件',
            children: (
                <DevScrollView>
                    <div className='SelectBox A02'>
                        {Object.keys(WeChatTempHome).map((v) => {
                            const { temp, title } = WeChatTempHome[v]
                            const Template = temp
                            return (
                                <div className='Item' key={v} onClick={() => Event.emit({ type: 'onSelectTemp', data: WeChatTempHome[v] })}>
                                    <div className='temp'>
                                        <DevScrollView>
                                            <Template />
                                        </DevScrollView>
                                    </div>

                                    <div className='title'>{title}</div>
                                </div>
                            )
                        })}
                    </div>
                </DevScrollView>
            ),
        },
        {
            key: '3',
            label: '固定组件',
            children: (
                <DevScrollView>
                    <div className='SelectBox A03'>
                        {Object.keys(WeChatTempFixed).map((v) => {
                            const { temp, title } = WeChatTempFixed[v]
                            const Template = temp
                            return (
                                <div className='Item' key={v} onClick={() => Event.emit({ type: 'onSelectTemp', data: WeChatTempFixed[v] })}>
                                    <div className='temp'>
                                        <DevScrollView>
                                            <Template />
                                        </DevScrollView>
                                    </div>

                                    <div className='title'>{title}</div>
                                </div>
                            )
                        })}
                    </div>
                </DevScrollView>
            ),
        },
    ];

    return (
        <div className='WeChatTempSelect'>
            <Tabs defaultActiveKey="1" centered items={items} />
        </div>
    );
};

export default WeChatTempSelect;