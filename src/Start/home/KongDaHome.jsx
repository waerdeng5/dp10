import './KongDaHome.scss'


import { WinTemplate } from '../../Temp/StartTemplate'
import { useState } from 'react';

const KongDaHome = ({ data, page, StartEvent }) => {
    const [Open, setOpen] = useState(true)
    const [Active, setActive] = useState(true)

    const onSwitch = () => {
        setActive(!Active)
        setTimeout(() => setOpen(!Open), 1000)
    }

    return (
        <div className='KongDaHome'>
            {Open ?
                <>
                    <div className='left'>
                        <WinTemplate Config={{ ...data, window_titleTxt: '基层组织情况' }} startType={false} >内容信息</WinTemplate>
                        <WinTemplate Config={{ ...data, window_titleTxt: '党建发展情况' }} startType={false} >内容信息</WinTemplate>
                    </div>
                    <div className='right'>
                        <WinTemplate Config={{ ...data, window_titleTxt: '党员构成情况' }} startType={false} >内容信息</WinTemplate>
                        <WinTemplate Config={{ ...data, window_titleTxt: '党建组织活动' }} startType={false} >内容信息</WinTemplate>
                    </div>
                </> :
                <>
                    <div className='leftTow'>
                        <WinTemplate Config={{ ...data, window_titleTxt: '党员先锋岗' }} startType={false} >内容信息</WinTemplate>
                        <WinTemplate Config={{ ...data, window_titleTxt: '党建考核' }} startType={false} >内容信息</WinTemplate>
                    </div>
                    <div className='rightTow'>
                        <WinTemplate Config={{ ...data, window_titleTxt: '宣传片' }} startType={false} >内容信息</WinTemplate>
                    </div>
                </>
            }

            <div className={`switchBtn ${Open ? 'A01' : 'A02'}`} onClick={onSwitch}>切换按钮</div>

            <img
                style={{ left: Active ? '100%' : '-500%' }}
                className='HomeMosk'
                src='https://aloss.ljkjkf.com/WebConfigFile/image/nongda/HomeMosk.png'
                alt=""
            />
        </div>
    );
};

export default KongDaHome;