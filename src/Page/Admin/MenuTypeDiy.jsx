import './MenuTypeDiy.scss'
import { useState, useEffect } from 'react'
import { useMount } from 'ahooks'
import { Skeleton, Result } from 'antd'


const MenuTypeDiy = ({ data, AdminEvent }) => {
    const { targetUrl } = data
    const [componentStatus, setComponentStatus] = useState({ loading: true, error: null, Template: null })

    const loadComponent = async () => {
        setComponentStatus(prev => ({ ...prev, loading: true, error: null }));
        try {
            if (!targetUrl || typeof targetUrl !== 'string') throw new Error('无效的页面路径')
            if (!/^[a-zA-Z0-9_-]+$/.test(targetUrl)) throw new Error('页面路径包含非法字符')
            const module = await import(`../page/${targetUrl}.jsx`);
            const Component = module.default || module
            if (!Component || (typeof Component !== 'function' && typeof Component !== 'object'))
                throw new Error(`导入的模块不是有效的React组件`)
            setComponentStatus({ loading: false, error: null, Template: Component })
        } catch (error) { setComponentStatus({ loading: false, error: error, Template: null }) }
    }
    useEffect(() => { loadComponent() }, [targetUrl])
    useMount(() => { AdminEvent.emit({ type: 'onActiveMenu', data: { ...data } }) })
    // 渲染状态处理
    if (componentStatus.loading) return (<Skeleton active paragraph={{ rows: 16 }} />)
    if (componentStatus.error) return (
        <div className='MenuTypeDiy Error'>
            <Result status="404" title="页面加载失败" subTitle={`错误: ${componentStatus.error.message}`} />
        </div>
    )
    const { Template } = componentStatus
    return (
        <div className='MenuTypeDiy'>
            <Template data={data} AdminEvent={AdminEvent} />
        </div>
    )
}

export default MenuTypeDiy