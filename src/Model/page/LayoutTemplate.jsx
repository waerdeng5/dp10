import './LayoutTemplate.scss'
import { Tabs } from 'antd'
import { DevScrollView } from '../../Temp/DevTemplate'
import { PlaceTempList, ChartTempList, DIYTempList, ImgAndTextTempList, ListTempList, TableTemplate } from '../../Config'

const ItemTemplate = ({ layId, name, data, Event }) => {
    return (
        <div className={`BOX ${name}`}>
            {data.map(item => (
                <div key={item.uuid} onClick={() => Event.emit({ type: 'onSelectTemplate', data: { layId, tempId: item.uuid } })}>
                    <img src={item.img} alt="" />
                    <div>{item.title}</div>
                </div>
            ))}
        </div>
    )
}

const LayoutTemplate = ({ data, Event }) => {
    const items = [
        {
            key: '1', label: '占位模块', children: (
                <div className='LayoutTemplateBox'>
                    <DevScrollView>
                        <ItemTemplate name='占位模块' layId={data.layId} data={PlaceTempList} Event={Event} />
                    </DevScrollView>
                </div>
            )
        },
        {
            key: '2', label: '图例模块', children: (
                <div className='LayoutTemplateBox'>
                    <DevScrollView>
                        <ItemTemplate name='Legend' layId={data.layId} data={ChartTempList} Event={Event} />
                    </DevScrollView>
                </div>
            )
        },
        {
            key: '3', label: '自定义模块', children: (
                <div className='LayoutTemplateBox'>
                    <DevScrollView>
                        <ItemTemplate name='Legend' layId={data.layId} data={DIYTempList} Event={Event} />
                    </DevScrollView>
                </div>
            )
        },
        {
            key: '4', label: '图文模块', children: (
                <div className='LayoutTemplateBox'>
                    <DevScrollView>
                        <ItemTemplate name='Legend' layId={data.layId} data={ImgAndTextTempList} Event={Event} />
                    </DevScrollView>
                </div>
            )
        },
        {
            key: '5', label: '列表模块', children: (
                <div className='LayoutTemplateBox'>
                    <DevScrollView>
                        <ItemTemplate name='Legend' layId={data.layId} data={ListTempList} Event={Event} />
                    </DevScrollView>
                </div>
            )
        },
        {
            key: '6', label: '表单模块', children: (
                <div className='LayoutTemplateBox'>
                    <DevScrollView>
                        <ItemTemplate name='Legend' layId={data.layId} data={TableTemplate} Event={Event} />
                    </DevScrollView>
                </div>
            )
        },
    ]

    return (
        <div className='LayoutTemplate'>
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    );
};

export default LayoutTemplate;