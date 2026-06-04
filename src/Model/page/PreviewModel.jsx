import './PreviewModel.scss'
import React, { useEffect, useState } from 'react'


const PreviewModel = ({ data }) => {
    const { key, type } = data
    const [componentStatus, setComponentStatus] = useState({ loading: true, error: null, Template: null })

    if (type === 'loading') {
        useEffect(() => {
            const getTemplate = async () => {
                try {
                    const module = await import(`../../Page/Loading/${key}.jsx`);
                    const Component = module.default || module
                    if (!Component || (typeof Component !== 'function' && typeof Component !== 'object'))
                        throw new Error(`导入的模块不是有效的React组件`)
                    setComponentStatus({ loading: false, error: null, Template: Component })
                } catch (error) { setComponentStatus({ loading: false, error: error, Template: null }) }
            }
            getTemplate()
        }, [key])
        if (!componentStatus.error && !componentStatus.loading) {
            const { Template } = componentStatus
            return (
                <div className='PreviewModel_loading'>
                    <Template />
                </div>
            )
        }
    }
};

export default PreviewModel;