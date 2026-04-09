
import './WeChatHome.scss'
import { useState, useRef } from 'react'

const WeChatHome = ({ data, FormEvent }) => {
    const LayoutRef = useRef(null)
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
        <div className='WeChatHome' ref={LayoutRef}>
            <div className='Layout'>
                布局 {Active}
            </div>
        </div>
    );
};

export default WeChatHome;