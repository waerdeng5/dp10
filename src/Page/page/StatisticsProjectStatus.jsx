import { v4 } from 'uuid'
import dayjs from 'dayjs'
import { useState } from 'react'
import { useMount } from 'ahooks'

import { isEmptyObject } from '../../Utils'
import { axios } from '../../Utils/Api'
import './StatisticsProjectStatus.scss'
import { ExcelTemplate } from '../../Temp/DevTemplate'
import { Tree, Form, Input, Button, DatePicker } from 'antd'

const StatisticsProjectStatus = () => {
    const [form] = Form.useForm()
    const [orgTree, setOrgTree] = useState([])
    const [selectedKeys, setSelectedKeys] = useState([])
    const [formData, setFormData] = useState({ statisticsDate: dayjs() })

    const [apiData, setApiData] = useState({})


    const onSelect = (selectedKeys) => {
        if (selectedKeys.length === 0) return
        setSelectedKeys(selectedKeys)
        setApiData({ organizationUuid: selectedKeys[0], statisticsDate: dayjs(formData.statisticsDate).format('YYYY-MM-DD') })
    };

    const onSearch = (e) => {
        setFormData(e)
        setApiData({ organizationUuid: selectedKeys[0], statisticsDate: dayjs(e.statisticsDate).format('YYYY-MM-DD') })
    }

    useMount(async () => {
        const [err, res] = await axios({ method: 'get', url: 'organization', params: { menuType: '8abf83a4-8cee-4d14-b3d6-c5fe9f857ea9' } })
        if (err) return err
        setOrgTree(res.data.list)
        setSelectedKeys([res.data.list[0].value])
        setApiData({ organizationUuid: res.data.list[0].value, statisticsDate: dayjs().format('YYYY-MM-DD') })
    })


    return (
        <div className='StatisticsProjectStatus'>
            <div className='orgTree'>
                {orgTree.length > 0 &&
                    <Tree
                        defaultExpandAll
                        selectedKeys={selectedKeys}
                        fieldNames={{ title: 'label', key: 'value' }}
                        onSelect={onSelect}
                        treeData={orgTree}
                    />
                }
            </div>
            <div className='dataPage'>
                <div className='search'>
                    <Form
                        form={form}
                        className='searchForm'
                        initialValues={formData}
                        onFinish={onSearch}>
                        <Form.Item name='statisticsDate' label='时间'>
                            <DatePicker allowClear={false} placeholder="placeholder" />
                        </Form.Item>
                        <div className='searchBtn'>
                            <Button type="primary" htmlType="submit">搜索</Button>
                            <Button onClick={() => { form.resetFields() }}>重置</Button>
                        </div>
                    </Form>
                </div>
                <div className='excelList'>
                    {console.log(apiData)}
                    {!isEmptyObject(apiData) && <ExcelTemplate key={v4()} getData={{ method: 'get', url: 'statisticsProjectStatus', params: apiData }} />}
                </div>
            </div>
        </div>
    );
};

export default StatisticsProjectStatus;