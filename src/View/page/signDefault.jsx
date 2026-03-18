import './SignDefault.scss'
import { useState } from 'react'
import { useEventEmitter } from 'ahooks'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'

import { modelStore } from '../../Router/zustand'

import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Vertify } from '@alex_xu/react-slider-vertify'


const { port } = window.location

const SignDefault = ({ className, style, simulated, Config }) => {
    const { loginCode, loginCodeType } = Config
    const Event = useEventEmitter()
    const { updateModel } = modelStore()
    const [Loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const Navigate = useNavigate()
    const [LoginData, setLoginData] = useState()

    const onSuccess = () => {
        setVisible(false)
        LoginFn()
    }
    const LoginFn = () => updateModel({ title: '登录', type: 'LoginUp', width: 400, height: 480, showCloseButton: false, Event, modelData: LoginData })

    const onFinish = values => {
        setLoading(true)
        setLoginData(values)
        if (loginCode) setVisible(true)  // 开启验证码
        else updateModel({ title: '登录', type: 'LoginUp', width: 400, height: 480, showCloseButton: false, Event, modelData: values })
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
    const backStyle = visible ?
        { background: 'rgba(0, 0, 0, 0.35)', backdropFilter: 'blur(4px)' } :
        { background: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0)' }

    const boxStyle = visible ?
        { background: 'rgba(240, 240, 240, 1)' } :
        { background: 'rgba(200, 200, 200, 0)' }

    return (
        <>
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
            <div className='LoginCodeBox' style={backStyle}>
                {loginCodeType === 'A01' &&
                    <div className='LoginCodeItem A01' style={boxStyle}>
                        <Vertify
                            width={320}
                            height={160}
                            visible={visible}
                            onSuccess={onSuccess}
                        />
                    </div>
                }
            </div>
        </>
    );
};

export default SignDefault;