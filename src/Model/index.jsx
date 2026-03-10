// 弹窗层
import { Spin, App } from "antd"
import { CloseOutlined } from '@ant-design/icons'
import { Popup, ToolbarItem } from 'devextreme-react/popup'
import { useState, lazy, Suspense, useEffect, memo } from 'react'

import { Decrypt } from '../Utils/IndexedDB'
import { modelStore } from '../Router/zustand'
import { isEmptyObject, ColorCallBack, SetFilderParams, SetBorderParams } from '../Utils'

const isInteger = (str) => {
    return /^-?\d+$/.test(str);
}

const PopupTemplate = memo(({ modelConfig, updateModel }) => {
    const { message } = App.useApp()
    const {
        shading = true,
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
        position = { my: 'center', at: 'center', of: window }
    } = modelConfig


    const [SIZE, setSIZE] = useState()


    const spinStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const [visible, setVisible] = useState(false)
    const [Template, setTemplate] = useState()

    const [StartData, setStartData] = useState({})

    const getWindow = async () => {
        setStartData(await Decrypt(sessionStorage.getItem('startData')))
    }

    useEffect(() => {
        if (modelConfig.isStart) getWindow()
        if (isEmptyObject(modelConfig)) {
            setVisible(false)
            setTemplate(null)
        } else {
            const temp = lazy(() => import(`./page/${type}.jsx`))
            setTemplate(temp)
            setVisible(true)
        }
        setSIZE({
            minHeight: 400,
            minWidth: 400,
            width: isInteger(modelConfig.width) ? modelConfig.width + 'px' : modelConfig.width || '80vw',
            height: isInteger(modelConfig.height) ? modelConfig.height + 'px' : modelConfig.height || '80vh'
        })
    }, [modelConfig])
    if (isEmptyObject(modelConfig)) return false


    const onClose = () => {
        updateModel({})
    }

    const onResizeEnd = (e) => {
        setSIZE({
            minHeight: 400,
            minWidth: 400,
            width: e.width,
            height: e.height
        })
    }

    if (SIZE) {
        return (
            <Popup
                {...SIZE}
                shading={shading}
                visible={visible}
                position={position}
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
                wrapperAttr={{ class: isStart ? 'devStartPopup' : 'devPopupStyle' }}
                onHiding={onClose}
                onResizeEnd={onResizeEnd}
                titleComponent={isStart ? (e) => {
                    const { win_color, win_deg, win_family, win_filed, win_filed_data, win_filed_color,
                        win_height, win_imageA01, win_imageA02, win_index, win_size, win_style, win_url, win_weight } = StartData

                    const style = {
                        '--titleColor': ColorCallBack(win_color, win_deg),
                        textIndent: win_index,
                        fontSize: win_size,
                        fontFamily: win_family,
                        fontWeight: win_weight,
                        fontStyle: win_style,
                        filter: SetFilderParams(win_filed, win_filed_data, win_filed_color),
                    }
                    return (
                        <div className='StartTop' style={{ height: win_height }}>
                            <div className='image'>
                                <img style={{ width: win_imageA01 }} src={win_url + '01.png'} alt="" />
                                <img style={{ flex: 1 }} src={win_url + '02.png'} alt="" />
                                <img style={{ width: win_imageA02 }} src={win_url + '03.png'} alt="" />
                            </div>
                            <div>
                                <div style={style}>{title}</div>
                                <div><CloseOutlined style={{ fontSize: win_size }} onClick={onClose} /></div>
                            </div>
                        </div>
                    )
                } : null
                }
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
                <Suspense>
                    {(() => {
                        if (isStart) {
                            const { win_back_color, win_back_deg, win_back_filter, win_back_filter_size,
                                win_back_border, win_back_border_size, win_back_border_type, win_back_border_color } = StartData

                            const back = {
                                '--backColor': ColorCallBack(win_back_color, win_back_deg),
                                '--backBorder': SetBorderParams(win_back_border, win_back_border_size, win_back_border_type, win_back_border_color),
                                '--backFilter': win_back_filter ? win_back_filter_size + 'px' : 0
                            }
                            return <div className="StartBack" style={back} />
                        }
                    })()}
                    {!isEmptyObject(modelConfig) && Template ?
                        <Template data={modelData} Event={modelConfig.Event} /> :
                        <div style={spinStyle}><Spin /></div>
                    }
                </Suspense >
            </Popup >
        )
    }

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