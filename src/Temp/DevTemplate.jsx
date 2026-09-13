import './DevTemplate.scss'
import { useMount, useSize } from 'ahooks'
import { useEffect, useRef, useState } from 'react'
import { App, Transfer, Tree, Table, Button, Image } from 'antd'
import { ScrollView } from 'devextreme-react/scroll-view'

import FileViewer from '@file-viewer/react-full'


import { axios } from '../Utils/Api'
import { getFileTypeFromUrl } from '../Utils'
import { modelStore } from '../Router/zustand'
import { VideoTemplateA02 } from './VideoTemplate'

const { GC } = window
GC.Spread.Common.CultureManager.culture('zh-cn')

// 通用滚动窗口
export const DevScrollView = ({ children, Event }) => {
    return (
        <ScrollView
            height='100%'
            width='100%'
            direction="vertical"
            showScrollbar='onHover'
            bounceEnabled={false}
            elementAttr={{ class: 'style' }}
            scrollByContent={true}
            scrollByThumb={true}
            onScroll={e => { if (Event) Event.emit({ type: 'onScroll', data: e.scrollOffset }) }}
        >
            {children}
        </ScrollView>
    )
}

// Todo 穿梭框搭配函数
export const filterOption = (input, item) => {
    for (const key in item) {
        if (item.hasOwnProperty(key)) {
            const value = item[key]
            if (typeof value === 'string' && value.includes(input)) return true;
        }
    }
    return false
}
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

// 树形穿梭框
const isChecked = (selectedKeys, eventKey) => selectedKeys.includes(eventKey)
const generateTree = (treeNodes = [], checkedKeys = []) =>
    treeNodes.map(_a => {
        var { children } = _a, props = __rest(_a, ['children'])
        return Object.assign(Object.assign({}, props), { disabled: checkedKeys.includes(props.uuid), children: generateTree(children, checkedKeys) })
    })

// 基础穿梭框
export const BaseTransfer = _a => {
    const { dataSource, targetKeys = [] } = _a, restProps = __rest(_a, ['dataSource', 'targetKeys'])

    return (
        <Transfer
            {...restProps}
            showSearch
            titles={['可选', '已选']}
            targetKeys={targetKeys}
            dataSource={dataSource}
            className="baseTransfer"
            render={item => item.tableName}
            showSelectAll={false}
            rowKey={(record) => record.uuid}
        />
    )
}
// 树形穿梭框
export const TreeTransfer = _a => {
    var { dataSource, targetKeys = [] } = _a, restProps = __rest(_a, ['dataSource', 'targetKeys'])
    const transferDataSource = []
    function flatten(list = []) {
        list.forEach(item => {
            transferDataSource.push(item)
            flatten(item.children)
        });
    }
    flatten(dataSource)
    return (
        <Transfer
            {...restProps}
            titles={['可选', '已选']}
            targetKeys={targetKeys}
            dataSource={transferDataSource}
            className="tree-transfer"
            render={item => item.tableName}
            showSelectAll={false}
            rowKey={(record) => record.uuid}
        >
            {({ direction, onItemSelect, selectedKeys }) => {
                if (direction === 'left') {
                    const checkedKeys = [...selectedKeys, ...targetKeys]
                    return (
                        <Tree
                            blockNode
                            checkable
                            checkStrictly
                            defaultExpandAll
                            checkedKeys={checkedKeys}
                            treeData={generateTree(dataSource, targetKeys)}
                            fieldNames={{ key: 'uuid', title: 'tableName' }}
                            onCheck={(_, { node: { key } }) => onItemSelect(key, !isChecked(checkedKeys, key))}
                            onSelect={(_, { node: { key } }) => onItemSelect(key, !isChecked(checkedKeys, key))}
                        />
                    );
                }
            }}
        </Transfer>
    );
}
// 列表穿梭框
export const TableTransfer = _a => {
    const { columns } = _a, restProps = __rest(_a, ['Columns']);
    return (
        <Transfer
            showSearch
            showSelectAll={false}
            rowKey={(record) => record.uuid}
            {...restProps}
        >
            {({ filteredItems, onItemSelect, onItemSelectAll, selectedKeys: listSelectedKeys, disabled: listDisabled }) => {
                const rowSelection = {
                    getCheckboxProps: () => ({ disabled: listDisabled }),
                    onChange(selectedRowKeys) { onItemSelectAll(selectedRowKeys, 'replace') },
                    selectedRowKeys: listSelectedKeys
                };
                return (
                    <Table
                        pagination={false}
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={filteredItems}
                        style={{ pointerEvents: listDisabled ? 'none' : undefined }}
                        onRow={({ key, disabled: itemDisabled }) => ({
                            onClick: () => {
                                if (itemDisabled || listDisabled) retur
                                onItemSelect(key, !listSelectedKeys.includes(key));
                            }
                        })}
                        scroll={{ x: 200, y: 'calc(50vh - 60px)' }}
                    />
                )
            }}
        </Transfer>
    )
}

// Excel表格
export const ExcelTemplate = (props) => {
    const { notification, message } = App.useApp()
    const { data, isMenuData, isMenuList, Event, DEVEvent, getData, saveData, saveParams } = props
    const ExcelBox = useRef()
    const WorkBox = useRef()
    const [spread, setSpread] = useState()
    const [ExcelName, setExcelName] = useState()
    const [loading, setLoading] = useState(false)

    useMount(async () => {
        const spread = new GC.Spread.Sheets.Workbook(WorkBox.current, { sheetCount: 1 })
        setSpread(spread)
        if (isMenuData) isMenuList.forEach(v => getData.params[v.dataMapping] = data[v.dataField])
        const [err, res] = await axios(getData)
        if (err) return message.warning(err.message)
        const { blob, filename } = res
        setExcelName(filename)
        const excelIo = new GC.Spread.Excel.IO()
        excelIo.open(blob, workbookObj => spread.fromJSON(workbookObj))

        // new GC.Spread.Sheets.Designer.Designer(ExcelBox.current, '', spread)
    })

    const onDownload = () => {
        const excelIo = new GC.Spread.Excel.IO()
        excelIo.save(spread.toJSON(), e => saveAs(e, ExcelName))
    }

    const onSave = () => {
        setLoading(true)
        const excelIo = new GC.Spread.Excel.IO()
        excelIo.save(spread.toJSON(), async e => {
            const forms = new FormData()
            const { type } = e
            const file = new File([e], ExcelName, { type })
            forms.append('File', file)
            forms.append('FileType', 3)
            if (saveData?.params) Object.keys(saveData.params).forEach(key => forms.append(key, saveData.params[key]))
            if (saveParams?.B05_saveMaster) forms.append(saveParams?.B05_saveMapping, data[saveParams?.B05_saveField])
            const [err, res] = await axios({ ...saveData, params: forms })
            if (err) message.warning(err.message)
            if (res?.code) {
                notification.success({ key: 'fromModify', title: '保存成功', description: res.message })
                if (Event) Event.emit({ type: 'onSaveSuccess' })
                if (DEVEvent) DEVEvent.emit({ type: 'onSaveSuccess' })
                setLoading(false)
            } else {
                const { blob, filename, response } = res
                const excelIo = new GC.Spread.Excel.IO()
                excelIo.open(blob, workbookObj => spread.fromJSON(workbookObj))
                new GC.Spread.Sheets.Designer.Designer(ExcelBox.current, '', spread)
                const text = decodeURIComponent(response.headers.get('message'))
                notification.warning({ key: 'fromModify', title: '保存失败', description: text })
                setLoading(false)
            }
        })
    }

    return (
        <div className='ExcelTemplate'>
            <div className="Excel" ref={ExcelBox} />
            <div className="Work" ref={WorkBox} />
            <div className='Options'>
                <Button onClick={onDownload} loading={loading}>下载Excel</Button>
                {saveData && <Button type='primary' onClick={onSave} loading={loading}>保存Excel</Button>}
            </div>
        </div>
    )
}

// 附件列表
export const AttachTemplateA01 = ({ data }) => {
    const { updateModel3 } = modelStore()
    const onClick = (type, title, url) => {
        if (type === 'word' || type === 'excel' || type === 'md' || type === 'txt' || type === 'edge') return window.open(url)
        updateModel3({ title, type: 'CommonModel', modelData: { openType: 'attDetail', type, url } })
    }

    return (
        <div className='AttachTemplateA01'>
            {data.map(item => {
                const { uuid, url, originalName } = item
                const type = getFileTypeFromUrl(url)
                const Template = () => {
                    if (type === 'image') return <Image src={url} alt={originalName} />
                    if (type === 'video') return <VideoTemplateA02 url={url} />
                    if (type === 'pdf') return <i className="far fa-file-pdf" onClick={() => onClick(type, originalName, url)} />
                    if (type === 'word') return <i className="far fa-file-word" onClick={() => onClick(type, originalName, url)} />
                    if (type === 'excel') return <i className="far fa-file-excel" onClick={() => onClick(type, originalName, url)} />
                    if (type === 'md') return <i className="far fa-file-alt" onClick={() => onClick(type, originalName, url)} />
                    if (type === 'txt') return <i className="far fa-file-code" onClick={() => onClick(type, originalName, url)} />
                    if (type === 'edge') return <i className="fas fa-link" onClick={() => onClick(type, originalName, url)} />
                    return <div onClick={() => onClick(type, originalName, url)}>未知文件</div>
                }

                return (
                    <div className='AttachItem' key={uuid}>
                        <div className='Left'>
                            <Template />
                        </div>
                        <div className='Right'>
                            <div>{originalName}</div>
                            {/* <div>{url}</div> */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export const AttachTemplateA02 = ({ url }) => {
    const type = getFileTypeFromUrl(url)

    const onClick = () => {
        console.log(url)
    }

    if (type === 'image') return <img src={url} alt={url} />
    if (type === 'video') return <VideoTemplateA02 url={url} />
    if (type === 'pdf') return <i className="far fa-file-pdf" onClick={() => onClick()} />
    if (type === 'word') return <i className="far fa-file-word" onClick={() => onClick()} />
    if (type === 'excel') return <i className="far fa-file-excel" onClick={() => onClick()} />
    if (type === 'md') return <i className="far fa-file-alt" onClick={() => onClick()} />
    if (type === 'txt') return <i className="far fa-file-code" onClick={() => onClick()} />
    if (type === 'edge') return <i className="fas fa-link" onClick={() => onClick()} />
    return <div onClick={() => onClick()}>未知文件</div>


}

// 监控数据
export const MonitorTemplateA01 = ({ data }) => {
    const { deviceSerial, channelNo, tableName, tableName1, token, cameraFactory, playUrl, hD, ptz } = data
    const BoxHeight = useRef()
    const size = useSize(BoxHeight)
    const [Url, setUrl] = useState('')
    const [OptionsCall, setOptionsCall] = useState()
    const [CameraFactory, setCameraFactory] = useState(cameraFactory)

    const iframeUrl = 'https://yingshi.ljkjkf.com/webvideo.html?url=ezopen://open.ys7.com/'

    useEffect(() => {
        if (cameraFactory === 1 && size) {
            setUrl(`${iframeUrl}${deviceSerial}/${channelNo}${hD ? '.hd' : ''}.live&token=${token}&width=${size.width}&height=${size.height}`)
        }
    }, [data, size])

    if (cameraFactory === 1) {
        return (
            <div className='MonitorTemplateA01' ref={BoxHeight}>
                {Url && <iframe title="Video" src={Url} width="100%" height="100%" scrolling="no" frameBorder="0" allowFullScreen={true} />}
            </div>
        )
    }
}