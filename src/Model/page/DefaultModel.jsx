import './DefaultModel.scss'
import { Result } from 'antd'

import { DevScrollView } from '../../Temp/DevTemplate'

const DefaultModel = () => {
    return (
        <div className='DefaultModel'>
            <Result status="403"
                title="打开失误!"
                subTitle="弹窗未设置具体内容,请及时联系管理员!."
            />
        </div>
    );
};

export default DefaultModel;