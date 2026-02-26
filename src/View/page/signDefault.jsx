import './SignDefault.scss'
import { useState } from 'react'
import { useEventEmitter } from 'ahooks'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'

import { modelStore } from '../../Router/zustand'

import { UserOutlined, LockOutlined } from '@ant-design/icons'


const { port } = window.location

const SignDefault = ({ className, style, simulated }) => {
    const Event = useEventEmitter()
    const { updateModel } = modelStore()
    const [Loading, setLoading] = useState(false)
    const Navigate = useNavigate()
    const onFinish = values => {
        setLoading(true)

        if (simulated) {
            setTimeout(() => setLoading(false), 1500)
            return false
        }

        updateModel({
            title: '登录',
            type: 'LoginUp',
            width: 400,
            height: 480,
            showCloseButton: false,
            Event,
            modelData: values
        })
    }

    const eventCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onAdmin', () => Navigate('/Admin')],
            ['onStart', () => Navigate('/Start')],
            ['onLoadingFlase', () => setLoading(false)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    Event.useSubscription(eventCallBack)

    return (

        <Form
            layout="vertical"
            style={style}
            className={`SignDefault ${className}`}
            onFinish={onFinish}
            initialValues={{ username: port ? 'tonzoc' : '', password: port ? 'Sfgnai85312' : '' }}
            autoComplete="off"
        >
            <Form.Item label={style?.labelStatus && '登录账户'} name="username" rules={[{ required: true, message: '请输入登录账户!' }]}>
                <Input
                    prefix={style?.iconStatus && <UserOutlined className="InputIcon" />}
                    placeholder="登录账户"
                    disabled={Loading}
                />
            </Form.Item>
            <Form.Item label={style?.labelStatus && '登录密码'} name="password" rules={[{ required: true, message: '请输入登录密码!' }]}>
                <Input.Password
                    prefix={style?.iconStatus && <LockOutlined className="InputIcon" />}
                    placeholder="登录密码"
                    disabled={Loading}
                />
            </Form.Item>
            <div className='Button'>
                <Button type="primary" htmlType="submit" loading={Loading}>{Loading ? '登录中...' : '登录'}</Button>
            </div>
        </Form>
    );
};

export default SignDefault;