import './index.scss'
import { Button } from 'antd'

const SHJHome = ({ data, StartEvent }) => {
    const { start_navList } = data
    const onClick = path => StartEvent.emit({ type: 'onRouterPath', data: path })

    return (
        <div className='Home'>
            <div>默认home页面</div>
            <div>
                {start_navList.map(v => {
                    const { nav_url, nav_name, nav_isChild, start_navTwo } = v
                    const path = nav_isChild ? start_navTwo[0].two_url : nav_url
                    return (
                        <Button key={nav_url} onClick={() => onClick(path)}>{nav_name}</Button>
                    )
                })}
            </div>
        </div>
    );
};

export default SHJHome;