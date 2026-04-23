import './WeChatTempClockIn.scss'

const WeChatTempClockInA01 = () => {
    return (
        <div className='WeChatTempClockInA01'>
            <div className='userInfo'>
                <div>头像</div>
                <div>
                    <div>名称</div>
                    <div>组织机构</div>
                </div>
                <div>打卡记录</div>
            </div>
            <div className='ClockBox'>
                <div className='today'>今日打卡提醒</div>

                <div className='clockItem'>
                    <div className='clockBtn'>打卡按钮</div>
                    <div className='location'>当前位置信息</div>
                </div>

                <div className='lastClock'>
                    上次打卡 : 地点事件
                </div>
            </div>
        </div>
    );
};

export const WeChatTempClockIn = {
    WeChatTempClockInA01: {
        title: '基础打卡',
        temp: WeChatTempClockInA01
    }
}