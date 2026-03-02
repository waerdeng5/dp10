import './ModelTemplate.scss'
import { useState } from 'react'
import { Card, Descriptions, Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { ProTable } from '@ant-design/pro-components'





// TODO 弹窗组件 
// !!!  附件
export const ModelAnnexTemplate = () => {
    return (
        <div>
            附件窗口
        </div>
    )
}
// !!!  列表
export const ModelTableTemplate = ({ config }) => {
    const [key, setKey] = useState('1')
    const tableListDataSource = Array.from(
        { length: 50 },
        (_, i) => ({ key: i, name: i === 0 ? '用户认证服务' : '支付网关', createdAt: (i * 1000 + 200), progress: ((i * 17 + 23) % 100) + 1 })
    )

    const columns = [
        { title: '序号', dataIndex: 'index', valueType: 'index', width: 80 },
        { title: '更新时间', key: 'since2', dataIndex: 'createdAt', valueType: 'date' },
        { title: '部署进度', dataIndex: 'progress', valueType: 'progress' },
    ]

    return (
        <div className='ModelTableTemplate'>
            <ProTable
                columns={columns}
                rowKey="key"
                pagination={{ showSizeChanger: true }}
                tableRender={(_, dom) => (
                    <div style={{ display: 'flex', width: '100%' }}>
                        <Menu
                            onSelect={(e) => setKey(e.key)}
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            items={[
                                {
                                    key: 'sub1',
                                    label: (
                                        <span>
                                            <span>服务管理</span>
                                        </span>
                                    ),
                                    children: [
                                        {
                                            type: 'group',
                                            key: 'g1',
                                            label: '核心服务',
                                            children: [
                                                { key: '1', label: '用户认证服务' },
                                                { key: '2', label: '订单处理中心' },
                                            ],
                                        },
                                        {
                                            type: 'group',
                                            key: 'g2',
                                            label: '基础设施',
                                            children: [
                                                { key: '3', label: '支付网关' },
                                                { key: '4', label: '消息推送平台' },
                                            ],
                                        },
                                    ],
                                },
                            ]}
                        />
                        <div style={{ flex: 1 }}>
                            {dom}
                        </div>
                    </div>
                )}
                tableExtraRender={(_, data) => (
                    <Card>
                        <Descriptions size="small" column={3}>
                            <Descriptions.Item label="实例数">{data.length}</Descriptions.Item>
                            <Descriptions.Item label="负责人">书琰</Descriptions.Item>
                            <Descriptions.Item label="关联项目"> 智慧零售平台</Descriptions.Item>
                            <Descriptions.Item label="创建时间">2024-01-10</Descriptions.Item>
                            <Descriptions.Item label="上线时间">2024-01-15</Descriptions.Item>
                        </Descriptions>
                    </Card>
                )}
                params={{ key }}
                request={async () => ({ success: true, data: tableListDataSource })}
                dateFormatter="string"
                headerTitle="自定义表格主体"
            />
        </div>
    )
}