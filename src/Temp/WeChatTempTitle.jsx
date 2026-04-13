import './WeChatTempTitle.scss'



const WeChatTempTitleA01 = ({ preset }) => {



    const boxStyle = {
        padding: false || '0 8px',
    }

    const titleStyle = {

    }

    const zhStyle = {}

    const enStyle = {}


    return (
        <div className='WeChatTempTitleA01' style={boxStyle}>
            <div className='title'>
                <div className='zh'>通用标题</div>
                <div className='en'>Common title</div>
            </div>
            <div className='options'>操作</div>
        </div>
    );
};

export const WeChatTempTitle = {
    WeChatTempTitleA01: {
        type: 'WeChatTempTitleA01',
        title: '通用标题模块',
        temp: WeChatTempTitleA01,
        layout: { x: 0, y: 0, w: 2, h: 12 },
    },
    WeChatTempTitleA02: {
        type: 'WeChatTempTitleA02',
        title: '小程序标题模块A02',
        temp: WeChatTempTitleA01,
        layout: { x: 0, y: 0, w: 2, h: 12 },
    },
    WeChatTempTitleA03: {
        type: 'WeChatTempTitleA03',
        title: '小程序标题模块A03',
        temp: WeChatTempTitleA01,
        layout: { x: 0, y: 0, w: 2, h: 12 },
    },
    WeChatTempTitleA04: {
        type: 'WeChatTempTitleA04',
        title: '小程序标题模块A04',
        temp: WeChatTempTitleA01,
        layout: { x: 0, y: 0, w: 2, h: 12 },
    },
    WeChatTempTitleA05: {
        type: 'WeChatTempTitleA05',
        title: '小程序标题模块A05',
        temp: WeChatTempTitleA01,
        layout: { x: 0, y: 0, w: 2, h: 12 },
    },
    WeChatTempTitleA06: {
        type: 'WeChatTempTitleA06',
        title: '小程序标题模块A06',
        temp: WeChatTempTitleA01,
        layout: { x: 0, y: 0, w: 2, h: 12 },
    },
}