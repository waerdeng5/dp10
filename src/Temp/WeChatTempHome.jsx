
import './WeChatTempHome.scss'

const WeChatTempHomeA01 = ({ styleData }) => {
    return (
        <div>
            菜单列表  - 当前菜单下的功能按键
        </div>
    );
};



export const WeChatTempHome = {
    WeChatTempHomeA01: {
        type: 'WeChatTempHomeA01',
        title: '功能按钮',
        temp: WeChatTempHomeA01,
        layout: { x: 0, y: 0, w: 12, h: 2 },
    },
}