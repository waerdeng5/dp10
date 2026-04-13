import './WeChatTempSelect.scss'

import { Tabs } from 'antd'

import { DevScrollView } from '../../Temp/DevTemplate'
import { WeChatTempTitle } from '../../Temp/WeChatTempTitle'


const WeChatTempSelect = ({ data, Event }) => {
    const items = [
        {
            key: '1',
            label: '通用模块',
            children: (
                <DevScrollView>
                    <div className='SelectBox A01'>
                        {Object.keys(WeChatTempTitle).map((v) => {
                            const { temp, title } = WeChatTempTitle[v]
                            const Template = temp
                            return (
                                <div className='Item' key={v} onClick={() => Event.emit({ type: 'onSelectTemp', data: WeChatTempTitle[v] })}>
                                    <div className='temp'>
                                        <DevScrollView>
                                            <Template preset />
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
                <div className='SelectBox A02'>
                    首页大组件
                </div>
            ),
        },
        {
            key: '3',
            label: '列表组件',
            children: (
                <div className='SelectBox A03'>
                    列表组件
                </div>
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