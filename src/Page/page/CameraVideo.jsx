import './CameraVideo.scss'


import { useState } from 'react'
import { useMount } from 'ahooks'
import { Button, Col, Form, Input, Row, Select, Space, TreeSelect, Pagination, Tree } from 'antd'

import { axios, axiosFor } from '../../Utils/Api'

import { VideoTemplateA03 } from '../../Temp/VideoTemplate'
import { DevScrollView } from '../../Temp/DevTemplate'


const defaultData = {
    pageIndex: 1,
    pageSize: 6,
    menuUuid: '38693ef8-984f-466d-ac7b-b93b0f4e096c',
    organizationUuid: '40491731-928e-4b02-aa30-f45f4a3a563e',
    cameraTypeUuid: '',
    cameraPositionUuid: '',
    cameraGroupCode: '',
    tableName: '',
    deviceSerial: '',
    isEnabled: '',
    online: '',
    isList: '1',
}


const axiosForMapping = [
    { method: 'get', url: 'organization', params: { MenuType: '2cf49ce7-add3-4133-9016-a174130c2f3b' } },
    { method: 'get', url: 'cameraPosition/tree' },
    { method: 'get', url: 'cameraType' }
]


const CameraVideo = () => {
    const [form] = Form.useForm()
    const [Search] = useState([
        // { label: '组织机构', value: 'organizationUuid', type: 'tree', options: 'organization', fieldNames: {} },
        { label: '监控类型', value: 'cameraTypeUuid', type: 'tree', options: 'cameraType', fieldNames: { value: 'uuid', label: 'tableName' } },
        { label: '监控位置', value: 'cameraPositionUuid', type: 'tree', options: 'cameraPosition', fieldNames: { value: 'uuid', label: 'tableName' } },
        { label: '是否启用', value: 'isEnabled', type: 'select', options: 'isEnabled' },
        { label: '在线状态', value: 'online', type: 'select', options: 'online' },
        { label: '监控名称', value: 'tableName', type: 'input' },
        { label: '序列号码', value: 'deviceSerial', type: 'input' },
    ])

    const [Data, setData] = useState([])
    const [Total, setTotal] = useState([])
    const [pageIndex, setPageIndex] = useState(1)
    const [SearchData, setSearchData] = useState({})

    const [OrgActive, setOrgActive] = useState([])

    const [OptionsMapping, setOptionsMapping] = useState({
        organization: [],
        cameraType: [],
        cameraPosition: [],
        isEnabled: [{ label: '启用', value: 1 }, { label: '禁用', value: 0 }],
        online: [{ label: '在线', value: 1 }, { label: '离线', value: 0 }],
    })

    const onFinish = (e) => {
        setSearchData(e)
        getData(e)
    }
    const onFinishClick = () => {
        form.resetFields()
        setSearchData(defaultData)
        setPageIndex(1)
        getData({})
    }

    const getData = async (params) => {
        const [err, res] = await axios({ method: 'get', url: 'camera', params: { ...defaultData, ...SearchData, ...params } })
        if (err) return console.log(err)
        const { total, list } = res.data
        setData(list)
        setTotal(total)
    }

    const onPagination = (e) => {
        setPageIndex(e)
        getData({ pageIndex: e })
    }

    useMount(async () => {
        const [[orgErr, orgRes], [typeErr, typeRes], [posErr, posRes]] = await axiosFor(axiosForMapping)
        if (orgErr || typeErr || posErr) return false
        const { defaultvalue, list } = orgRes.data
        setOptionsMapping(e => ({
            ...e,
            organization: list,
            cameraType: typeRes.data.list,
            cameraPosition: posRes.data.list,
        }))
        setOrgActive(defaultvalue)
        getData({ organizationUuid: defaultvalue })
    })

    const onSelect = (e) => {
        if (e.length === 0) return
        const [key] = e
        setOrgActive(key)
        getData({ organizationUuid: key })
    }


    return (
        <div className='CameraVideo'>
            <div className='orgBox'>
                <DevScrollView>
                    <div className='treeBox'>
                        {OptionsMapping.organization.length !== 0 &&
                            <Tree
                                className='TreeBox'
                                blockNode
                                treeData={OptionsMapping.organization}
                                fieldNames={{ key: 'value', title: 'label' }}
                                selectedKeys={[OrgActive]}
                                defaultExpandAll
                                // onExpand={setOPENKEY}
                                onSelect={onSelect}
                            />
                        }
                    </div>
                </DevScrollView>
            </div>
            <div className='videoBox'>
                <div className='search'>
                    <Form form={form} name="cameraVideo_search" onFinish={onFinish}>
                        <Row gutter={24}>
                            {Search.map(item => (
                                <Col span={6} key={item.value}>
                                    <Form.Item name={item.value} label={item.label}>
                                        {(() => {
                                            if (item.type === 'tree') {
                                                return (
                                                    <TreeSelect
                                                        fieldNames={item.fieldNames}
                                                        showSearch={{ treeNodeFilterProp: 'label' }}
                                                        treeDefaultExpandAll
                                                        placeholder={`请选择${item.label}`}
                                                        treeData={OptionsMapping[item.options]}
                                                    />
                                                )
                                            }
                                            if (item.type === 'select') {
                                                return (
                                                    <Select
                                                        placeholder={`请选择${item.label}`}
                                                        options={OptionsMapping[item.options]}
                                                    />
                                                )
                                            }
                                            return <Input placeholder={`请输入${item.label}`} />
                                        })()}
                                    </Form.Item>
                                </Col>
                            ))}
                            <Col span={12} >
                                <div style={{ textAlign: 'end' }}>
                                    <Space size="small">
                                        <Button type="primary" htmlType="submit">搜索</Button>
                                        <Button onClick={onFinishClick}>重置</Button>
                                    </Space>
                                </div>
                            </Col>
                        </Row>

                    </Form>
                </div>
                <div className='video'>
                    {Data.map(item => {
                        return (
                            <div key={item.uuid}>
                                <VideoTemplateA03 data={item} />
                            </div>
                        )
                    })}
                </div>
                <div className='paginations'>
                    <Pagination current={pageIndex} pageSize={6} total={Total} onChange={onPagination} showSizeChanger={false} />
                </div>
            </div>
        </div>
    );
};

export default CameraVideo;