
import './WeChatHome.scss'
import { useState } from 'react'

const WeChatHome = ({ data, FormEvent }) => {
    const { tabBar_active, tabBarList } = data
    const [Active, setActive] = useState(tabBar_active)

    const formCallBack = (e) => {
        const { type, data } = e
        // console.log(e)
        const Mapping = new Map([
            ['onTabBarClick', () => {
                setActive(data)
            }]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    FormEvent.useSubscription(formCallBack)


    return (
        <div className='WeChatHome'>
            {Active}
        </div>
    );
};

export default WeChatHome;