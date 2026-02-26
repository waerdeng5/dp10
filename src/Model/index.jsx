// 弹窗层
import { Popup, ToolbarItem } from 'devextreme-react/popup'
import { useState, lazy, Suspense, useEffect, memo } from 'react'

import { Spin, App } from "antd";
import { isEmptyObject } from '../Utils'
import { modelStore } from '../Router/zustand'

const PopupTemplate = memo(({ modelConfig, updateModel }) => {

    const { message } = App.useApp()
    const {
        isStart = false,
        type = 'DefaultModel',
        title = '...', // 标题
        showTitle = true, // 显示标题
        dragEnabled = true,// 是否拖动
        dragOutsideBoundary = false, //拖出边界
        enableBodyScroll = false,// 自身滚动
        fullScreen = false,// 全屏
        hideOnOutsideClick = false,//单击隐藏
        resizeEnabled = true,// 调整大小
        shadingColor = 'rgba(38,38,38,0.15)', // 阴影颜色
        showCloseButton = modelConfig.showCloseButton || true, // 关闭按钮
        options = [],
        modelData = [],
    } = modelConfig

    const size = {
        minHeight: 400,
        minWidth: 400,
        width: modelConfig.width || '80vw',
        height: modelConfig.height || '80vh'
    }


    const style = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const [visible, setVisible] = useState(false)
    const [Template, setTemplate] = useState()
    useEffect(() => {
        if (isEmptyObject(modelConfig)) {
            setVisible(false)
            setTemplate(null)
        } else {
            const temp = lazy(() => import(`./page/${type}.jsx`))
            setTemplate(temp)
            setVisible(true)
        }
    }, [modelConfig])

    if (isEmptyObject(modelConfig)) return false

    return (
        <Popup
            {...size}
            visible={visible}
            title={title}
            showTitle={showTitle}
            dragEnabled={dragEnabled}
            dragOutsideBoundary={dragOutsideBoundary}
            enableBodyScroll={enableBodyScroll}
            fullScreen={fullScreen}
            hideOnOutsideClick={hideOnOutsideClick}
            resizeEnabled={resizeEnabled}
            shadingColor={shadingColor}
            showCloseButton={showCloseButton}
            wrapperAttr={{ class: 'devPopupStyle' }}
            onHiding={() => updateModel({})}
            titleComponent={isStart ? (e) => {
                console.log(e)
                return <div>123</div>
            } : null
            }
        // 添加大屏样式
        >
            {
                options.map((item, index) => {
                    const {
                        visible = true, // 是否显示
                        widget = 'dxButton',  //操作类型
                        location = 'after',  // 操作位置
                        icon = '',
                        text = '操作',
                        type = 'default',
                        onClick = () => message.warning({ content: '未定义按钮事件', key: 'PopupTemplate' })
                    } = item
                    return (
                        <ToolbarItem
                            key={index}
                            visible={visible}
                            widget={widget}
                            location={location}
                            options={{ stylingMode: 'text', icon, text, type, onClick }}
                        />
                    )
                })
            }
            < Suspense >
                {!isEmptyObject(modelConfig) && Template ?
                    <Template data={modelData} Event={modelConfig.Event} /> :
                    <div style={style}><Spin /></div>
                }
            </Suspense >
        </Popup >
    )
})

export const ModelPopup = () => {
    const { modelConfig, updateModel } = modelStore()
    return <PopupTemplate modelConfig={modelConfig} updateModel={updateModel} />
}

export const ModelPopup1 = () => {
    const { modelConfig1, updateModel1 } = modelStore()
    return <PopupTemplate modelConfig={modelConfig1} updateModel={updateModel1} />
}

export const ModelPopup2 = () => {
    const { modelConfig2, updateModel2 } = modelStore()
    return <PopupTemplate modelConfig={modelConfig2} updateModel={updateModel2} />
}

export const ModelPopup3 = () => {
    const { modelConfig3, updateModel3 } = modelStore()
    return <PopupTemplate modelConfig={modelConfig3} updateModel={updateModel3} />
}

export const ModelPopup4 = () => {
    const { modelConfig4, updateModel4 } = modelStore()
    return <PopupTemplate modelConfig={modelConfig4} updateModel={updateModel4} />
}

export const ModelPopup5 = () => {
    const { modelConfig5, updateModel5 } = modelStore()
    return <PopupTemplate modelConfig={modelConfig5} updateModel={updateModel5} />
}