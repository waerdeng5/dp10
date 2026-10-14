import './FormTemplate.scss'
import { v4 } from 'uuid'
import {
    ProForm,
    ProFormCascader,
    ProFormCheckbox,
    ProFormColorPicker,
    ProFormDigit,
    ProFormDigitRange,
    ProFormGroup,
    ProFormRadio,
    ProFormRate,
    ProFormSegmented,
    ProFormSelect,
    ProFormSlider,
    ProFormSwitch,
    ProFormText,
    ProFormUploadButton,
    ProFormUploadDragger,
    ProFormTextArea,
    ProFormCaptcha,
    ProFormTreeSelect,
    ProFormDependency,
    ProFormList,
    ProCard,
    ProFormDateMonthRangePicker,
    ProFormDatePicker,
    ProFormDateQuarterRangePicker,
    ProFormDateRangePicker,
    ProFormDateTimePicker,
    ProFormDateTimeRangePicker,
    ProFormDateWeekRangePicker,
    ProFormDateYearRangePicker,
    ProFormTimePicker,
    ProConfigProvider
} from '@ant-design/pro-components';

import { flushSync } from 'react-dom'
import { Spin, Image, App } from "antd"
import { useDebounceFn, useMount } from 'ahooks'
import { memo, useCallback, useRef, useState, useEffect } from 'react'
import { DeleteOutlined, CopyOutlined } from '@ant-design/icons'
import ValueTypeToComponentMap from '@ant-design/pro-components/es/field/ValueTypeToComponent';

import { checkConditions } from '.'
import { modelStore } from '../Router/zustand'
import { Button } from 'devextreme-react/button'
import { GetIndexedDB } from '../Utils/IndexedDB'
import { ICONMapping } from '../Config/IconMapping'
import { DevScrollView } from '../Temp/DevTemplate'
import { BackGrundTypeConfig } from '../Config/BackGrundType'

const { WinBox } = window
const { RangePicker } = ProFormTimePicker

const formCallBack = e => {
    const toColor = (co) => {
        const { colors } = co
        const valueToSet = colors && Array.isArray(colors) ? colors.map(({ color, percent }) => ({ color: color.toHexString(), percent })) : co.toHexString()
        return valueToSet
    }
    function traverse(obj) {
        if (obj === null || obj === undefined) {
            return obj;
        }
        if (Array.isArray(obj)) return obj.map(item => traverse(item))
        if (typeof obj === 'object') {
            if (obj.toHexString) return toColor(obj)
            const result = {}
            for (let key in obj) { if (obj.hasOwnProperty(key)) result[key] = traverse(obj[key]) }
            return result
        }
        return obj
    }
    return traverse(e)
}

const FormTemplate = ({
    formItem,
    FORMEVENT,
    Initial = {},
    NotSubmit = false,
    NotLoading = false,
    detection = false,
    onCallBack,
    onFormBack = 'onFormBack',
    fixed = false,
    AI = false,
    AIconfig
}) => {
    const { notification } = App.useApp()
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [INIT] = useState(Initial)
    const { run } = useDebounceFn((e) => {
        FORMEVENT.emit({ type: 'onDetection', data: formCallBack(e) })
    }, { wait: 500 })

    const onFinish = async (e) => {
        const data = await formCallBack(e)
        FORMEVENT.emit({ type: onFormBack, data: { ...data, onCallBack } })
        setLoading(NotLoading ? false : true)
    }

    const onValuesChange = (e) => {
        if (detection) run(e)
    }

    const onFormBackFn = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['closeFormLoading', () => setTimeout(() => setLoading(false), 0)],
            ['onFormReset', () => {
                formRef.current?.resetFields()
                setTimeout(() => setLoading(false), 0)
            }],
            ['onUploadInitial', () => formRef?.current?.setFieldsValue(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    FORMEVENT.useSubscription(onFormBackFn)
    const onFinishFailed = (e) => { notification.warning({ key: 'onFinishFailed', title: '保存失败', description: e.message }) }

    useEffect(() => {
        formRef.current.setFieldsValue(Initial)
    }, [Initial])


    return (
        <div className='FormTemplateClass01'>
            <Spin spinning={loading}>
                <ProForm
                    formRef={formRef}
                    grid={true}
                    layout='vertical'
                    rowProps={{ span: 24 }}
                    initialValues={INIT}
                    scrollToFirstError={true}
                    onValuesChange={onValuesChange}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    size='large'
                    submitter={NotSubmit ? false : {
                        render: (props) => {
                            return [
                                <Button
                                    key='rest'
                                    disabled={false}
                                    text="重置表单"
                                    icon='refresh'
                                    type="normal"
                                    stylingMode="contained"
                                    width={200}
                                    onClick={() => props.form?.resetFields()}
                                />,
                                <Button
                                    key='submit'
                                    disabled={false}
                                    text="提交表单"
                                    icon='return'
                                    type="default"
                                    stylingMode="contained"
                                    width={200}
                                    onClick={() => props.form?.submit?.()}
                                />,
                                AI && <Button
                                    key='ai'
                                    disabled={false}
                                    text={AIconfig.A02_ai_btn_text}
                                    icon='fas fa-paper-plane'
                                    type={AIconfig.A02_ai_btn_type}
                                    stylingMode={AIconfig.A02_ai_btn_text}
                                    width={200}
                                    onClick={() => FORMEVENT.emit({ type: 'onOpenAI' })}
                                />,
                            ]
                        }
                    }}
                >
                    <DevScrollView>
                        <div className='FormScroll'>
                            {formItem?.map((item) => {
                                const Template = TemplateMapping[item.formType]
                                return <Template key={item.name} data={item} form={formRef} init={Initial} />
                            })}
                        </div>
                    </DevScrollView>
                </ProForm>
            </Spin>
        </div>
    );
};


// Todo 渲染判断
const JudgeTemplate = ({ jugde, Template }) => {
    const name = jugde.map(item => (item.field))
    return (
        <ProFormDependency name={name}>
            {e => {
                if (checkConditions(e, jugde)) return <Template />
                else return false
            }}
        </ProFormDependency>
    )
}

// Todo 分组框
const GROUP = ({ data, form, action }) => {
    const { span, name, label, collapsible = false, defaultCollapsed = false, jugde, children } = data
    const Template = memo(() => {
        return (
            <ProFormGroup colProps={{ span }} key={name} >
                <ProCard collapsible={collapsible} defaultCollapsed={defaultCollapsed} title={label} >
                    {children?.map((item) => {
                        const Template = memo(TemplateMapping[item.formType])
                        return <Template key={item.name} data={item} form={form} action={action} />
                    })}
                </ProCard>
            </ProFormGroup>
        )
    })
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// TODO 数组分组
const LIST = ({ data, form }) => {
    const { span, name, label, tooltip, jugde, children, addBtn = true, delBtn = true, copy = true, title = '分组', sort = true } = data
    const Template = memo(() => (
        <div className='LIST' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormList
                name={name}
                label={label}
                tooltip={tooltip}
                arrowSort={true}
                creatorButtonProps={addBtn}
                upIconProps={sort}
                downIconProps={sort}
                copyIconProps={copy ? { Icon: CopyOutlined, tooltipText: '复制此行' } : false}
                deleteIconProps={delBtn ? { Icon: DeleteOutlined, tooltipText: '删除此行' } : false}
                itemRender={({ listDom, action }, { index }) => {
                    return (<ProCard bordered='true' collapsible={true} extra={action} title={`${index + 1} - ${title}`}>{listDom}</ProCard>)
                }}
            >
                {(_, index, action) => {
                    return (
                        <ProFormGroup key={index}>
                            {children.map(item => {
                                const Template = TemplateMapping[item.formType]
                                return <Template key={item.name} data={item} form={form} action={action} />
                            })}
                        </ProFormGroup>
                    )
                }}
            </ProFormList>
        </div>
    ))

    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// !!!  基础组件
// Todo 隐藏框
const HIDDEN = ({ data }) => {
    const { name } = data
    return (
        <div className='HIDDEN'>
            <ProFormText name={name} />
        </div>
    )
}

// Todo 文本框
const INPUT = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='INPUT' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormText
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请输入${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 密码框
const PASSWORD = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='PASSWORD' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormText.Password
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请输入${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 富文本
const TEXTAREA = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='TEXTAREA' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormTextArea
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请输入${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 数字框
const NUMBER = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, min, max, step, jugde } = data
    const Template = () => (
        <div className='NUMBER' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormDigit
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请输入${label}`}
                min={min ?? Number.MIN_SAFE_INTEGER}
                max={max ?? Number.MAX_SAFE_INTEGER}
                fieldProps={{ step: step || 1, variant: "underlined" }}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 范围框
const RANGE = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='RANGE' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormDigitRange
                separator="-"
                separatorWidth={60}
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder ? placeholder.split(',') : ['最小值', '最大值']}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 滑动条
const SLIDER = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, marks, min, max, step, jugde } = data
    const Template = () => (
        <div className='SLIDER' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormSlider
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                marks={marks}
                min={min || 0}
                max={max || 100}
                step={step || 0}
            />
        </div>

    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 评分框
const RATE = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, jugde } = data
    const Template = () => (
        <div className='RATE' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormRate
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 颜色选择
const COLOR = memo(({ data, form, action }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, jugde, mode = ['single', 'gradient'] } = data
    const onChangeComplete = useCallback(e => {
        const { colors } = e
        const valueToSet = colors && Array.isArray(colors) ? colors.map(({ color, percent }) => ({ color: color.toHexString(), percent })) : e.toHexString()

        console.log('valueToSet', valueToSet)
        console.log('name', name)
        console.log('action', action)


        if (action) action.setCurrentRowData({ [name]: valueToSet })
        else {
            const value = typeof (name) === 'string' ? [name] : [...name]
            form.current.setFieldValue(value, valueToSet)
        }
    }, [])
    // onChangeComplete
    const Template = () => (
        <div className='COLOR' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormColorPicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ mode, showText: true }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
})

// Todo Radio单选
const RADIO = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, valueEnum, request, jugde } = data
    const Template = () => (
        <ProConfigProvider valueTypeMap={ValueTypeToComponentMap}>
            <div className='RADIO' style={{ width: `${100 / 24 * span}%` }}>
                <ProFormRadio.Group
                    radioType="button"
                    name={name}
                    label={label}
                    tooltip={tooltip}
                    disabled={disabled}
                    fieldProps={{ buttonStyle: "solid" }}
                    rules={[{ required: !!rules, message: `${label}必须输入` }]}
                    request={async () => {
                        let data = []
                        if (request) data = await API_Mapping[request]()
                        else data = valueEnum
                        return data
                    }}
                />
            </div>
        </ProConfigProvider>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo Select单选
const SELECT = ({ data }) => {
    const { updateModel } = modelStore()
    const { span, name, label, tooltip, rules = false, disabled = false, valueEnum, placeholder, jugde, type } = data

    const onSignClick = (e, data) => {
        e.stopPropagation()
        updateModel({ title: '加载预览', type: 'PreviewModel', width: 600, height: 600, modelData: { key: data.key, type: 'loading' } })
    }

    const Template = () => (
        <div className='SELECT' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormSelect
                showSearch
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{
                    variant: "underlined", optionRender: (e) => {
                        if (type === 'color') {
                            const { label, data } = e
                            return (
                                <span className='SELECTColorModel'>
                                    <span className='SELECTColorModel_back' style={{ background: data.color[1] }}>
                                        <span
                                            className='SELECTColorModel_cont'
                                            style={{ background: data.color[0], '--color': `${data.color[0]}50` }}
                                        />
                                    </span>
                                    <span>{label}</span>
                                </span>
                            )
                        }
                        if (type === 'sign') {
                            const { label, data } = e
                            return (
                                <span className='SELECTColorModel'>
                                    <span className='SELECTColorModel_back' onClick={e => onSignClick(e, data)} >
                                        预览
                                    </span>
                                    <span>{label}</span>
                                </span>
                            )
                        }
                        return (<span>{e.label}</span>)
                    }
                }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
                request={async () => valueEnum || []}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo Select多选
const SELECTM = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, valueEnum, request, placeholder, jugde } = data
    const Template = () => (
        <div className='SELECTM' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormSelect
                fieldProps={{ mode: 'multiple', variant: "underlined" }}
                showSearch
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
                request={async () => {
                    let data = []
                    if (request) data = await API_Mapping[request]()
                    else data = valueEnum
                    return data
                }}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 树形单选
const TREE = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, valueEnum, request, placeholder, jugde } = data
    const Template = () => (
        <div className='SELECT' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormTreeSelect
                fieldProps={{
                    treeDefaultExpandAll: true,
                    showSearch: true,
                    variant: "underlined",
                    treeNodeFilterProp: 'label',
                    fieldNames: { title: 'label', key: 'uuid' }
                }}
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
                request={async () => {
                    let data = []
                    if (request) data = await API_Mapping[request]()
                    else data = valueEnum
                    return data
                }}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 树形多选
const TREEM = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, valueEnum, request, placeholder, jugde } = data
    const Template = () => (

        <div className='SELECTM' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormTreeSelect
                fieldProps={{
                    multiple: true,
                    treeDefaultExpandAll: true,
                    showSearch: true,
                    variant: "underlined",
                    treeNodeFilterProp: 'label',
                    fieldNames: { title: 'label', key: 'uuid' }
                }}
                showSearch
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
                request={async () => {
                    let data = []
                    if (request) data = await API_Mapping[request]()
                    else data = valueEnum
                    return data
                }}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 联级选择
const CASCADER = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, valueEnum, request, placeholder, jugde } = data
    const Template = () => (
        <div className='SELECT' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormCascader
                fieldProps={{ changeOnSelect: true, variant: "underlined" }}
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
                request={async () => {
                    let data = []
                    if (request) data = await API_Mapping[request]()
                    else data = valueEnum
                    return data
                }}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 时间
const TIME = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormTimePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 日期
const DATE = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormDatePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 日期时间
const DATETIME = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            {/* <ProFormDateTimePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            /> */}
            <ProFormDatePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ showTime: true, format: 'YYYY-MM-DD HH:mm:ss', variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 周
const WEEK = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            {/* <Week
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            /> */}
            <ProFormDatePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ picker: 'week', format: 'YYYY-ww周', variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>

    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 月
const MONTH = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormDatePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ picker: 'month', format: 'YYYY-MM', variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
            {/* <Month
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            /> */}
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 季
const QUARTER = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            {/* <Quarter
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            /> */}
            <ProFormDatePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ picker: 'quarter', format: 'YYYY-Q', variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>

    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 年
const YEAR = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            {/* <Year
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            /> */}
            <ProFormDatePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ picker: 'year', format: 'YYYY', variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 时间区间
const TIMERANGE = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            <RangePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 日期区间
const DATERANGE = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormDateRangePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 日期时间区间
const DATETIMERANGE = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        // <ProFormDateTimeRangePicker
        //     name={name}
        //     label={label}
        //     tooltip={tooltip}
        //     disabled={disabled}
        //     rules={[{ required: !!rules, message: `${label}必须输入` }]}
        //     placeholder={placeholder || `请选择${label}`}
        // />
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormDateRangePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ showTime: true, format: 'YYYY-MM-DD HH:mm:ss', variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 周区间
const WEEKRANGE = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        // <ProFormDateWeekRangePicker
        //     name={name}
        //     label={label}
        //     tooltip={tooltip}
        //     disabled={disabled}
        //     rules={[{ required: !!rules, message: `${label}必须输入` }]}
        //     placeholder={placeholder || `请选择${label}`}
        // />
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormDateRangePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ picker: 'week', format: 'YYYY-ww周', variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 月区间
const MONTHRANGE = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        // <ProFormDateMonthRangePicker
        //     name={name}
        //     label={label}
        //     tooltip={tooltip}
        //     disabled={disabled}
        //     rules={[{ required: !!rules, message: `${label}必须输入` }]}
        //     placeholder={placeholder || `请选择${label}`}
        // />
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormDateRangePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ picker: 'month', format: 'YYYY-MM', variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 季区间
const QUARTERRANGE = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        // <ProFormDateQuarterRangePicker
        //     name={name}
        //     label={label}
        //     tooltip={tooltip}
        //     disabled={disabled}
        //     rules={[{ required: !!rules, message: `${label}必须输入` }]}
        //     placeholder={placeholder || `请选择${label}`}
        // />
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormDateRangePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ picker: 'quarter', format: 'YYYY-Q', variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 年区间
const YEARRANGE = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data
    const Template = () => (
        // <ProFormDateYearRangePicker
        //     name={name}
        //     label={label}
        //     tooltip={tooltip}
        //     disabled={disabled}
        //     rules={[{ required: !!rules, message: `${label}必须输入` }]}
        //     placeholder={placeholder || `请选择${label}`}
        // />
        <div className='TIME' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormDateRangePicker
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ picker: 'year', format: 'YYYY', variant: "underlined" }}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请选择${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// *** 上传检测
const beforeUpload = (file, fileType, fileSize, message) => {
    const { type, size } = file
    const typeMapping = {
        img: ['image/png', 'image/jpg', 'image/jpeg', 'image/svg+xml'],
        mp4: ['video/mp4'],
        txt: [
            'application/pdf',
            'text/plain',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        ],
        zip: ['application/x-zip-compressed', 'application/x-compressed']
    }

    const typeJudge = fileType.flatMap(key => typeMapping[key] || [])
    const isJpgOrPng = typeJudge.includes(type)
    if (!isJpgOrPng) {
        message.error('不支持当前文件类型!')
        return false
    }
    const isLt = size <= fileSize * 1024 * 1024 * 1024
    if (!isLt) {
        message.error(`文件体积大于 ${fileSize}GB !!`)
        return false
    }
    return isJpgOrPng && isLt
}
// Todo 上传附件 - 数组形式
const UPLOAD = ({ data, form }) => {
    const { message } = App.useApp()
    const { span, name, label, tooltip, max = 1, fileType, fileSize = 1, rules = false, disabled = false, jugde, fileData = {} } = data
    const Template = () => {
        const [action, setAction] = useState('')
        const [visible, setVisible] = useState(false)
        const [ImageUrl, setImageUrl] = useState(false)
        const [fileList, setFileList] = useState([])
        const [token, setToken] = useState()

        useMount(async () => {
            const token = await GetIndexedDB('token')
            const config = await GetIndexedDB('config')
            setToken(token)
            setAction(config.apiUrl + '/attachments')
            setFileList(form.current?.getFieldValue(name))
        })
        return (
            <>
                {/* {console.log('fileList--附件列表', fileList)} */}
                <ProFormUploadButton
                    colProps={{ span }}
                    max={max}
                    name={name}
                    label={label}
                    tooltip={tooltip}
                    disabled={disabled}
                    title='上传'
                    action={action}
                    fieldProps={{
                        name: 'file',
                        listType: 'picture-card',
                        fileList,
                        data: fileData,
                        headers: { Authorization: token },
                        beforeUpload: e => beforeUpload(e, fileType, fileSize, message),
                        onPreview: e => {
                            setVisible(true)
                            setImageUrl(e.url || e.thumbUrl)
                        },
                        onChange: e => {
                            const { file, fileList } = e
                            const { status } = file
                            setFileList(fileList)
                            if (status === 'done') {
                                fileList.pop()
                                const { uuid, fileUrl, originalName } = file.response.data
                                fileList.push({ uuid, url: fileUrl, originalName })
                                setFileList(fileList)
                            } else if (!status) {
                                fileList.pop()
                                setFileList(fileList)
                            }
                        }
                    }}
                    rules={[{ required: !!rules, message: `${label}必须输入` }]}
                />
                {visible &&
                    <Image
                        preview={{
                            visible,
                            onVisibleChange: visible => setVisible(visible),
                            afterOpenChange: visible => !visible && setImageUrl(''),
                        }}
                        src={ImageUrl}
                    />
                }
            </>
        )
    }
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 上传附件 - 对象形式
const UPLOADOBJ = ({ data }) => {
    return (
        <div>对象数据</div>
    )
}

// TODO 人脸信息上传
const UPLOADFACE = ({ data, form }) => {
    const { message } = App.useApp()
    const { span, name, label, tooltip, max = 1, fileType, fileSize = 1, rules = false, disabled = false, jugde, fileData = {} } = data
    const Template = () => {
        const [action, setAction] = useState('')
        const [visible, setVisible] = useState(false)
        const [ImageUrl, setImageUrl] = useState(false)
        const [fileList, setFileList] = useState([])
        const [token, setToken] = useState()

        useMount(async () => {
            const token = await GetIndexedDB('token')
            const config = await GetIndexedDB('config')
            setToken(token)
            setAction(config.apiUrl + '/rosters/UploadFacePhotoAndConfirm')
            setFileList(form.current?.getFieldValue(name))
        })
        return (
            <>
                {/* {console.log('fileList--附件列表', fileList)} */}
                <ProFormUploadButton
                    colProps={{ span }}
                    max={max}
                    name={name}
                    label={label}
                    tooltip={tooltip}
                    disabled={disabled}
                    title='上传'
                    action={action}
                    fieldProps={{
                        name: 'file',
                        listType: 'picture-card',
                        fileList,
                        data: { ...fileData, RosterUuid: form.current?.getFieldValue('uuid'), FaceConfirmed: 1 },
                        headers: { Authorization: token },
                        beforeUpload: e => beforeUpload(e, fileType, fileSize, message),
                        onPreview: e => {
                            setVisible(true)
                            setImageUrl(e.url || e.thumbUrl)
                        },
                        onChange: e => {
                            const { file, fileList } = e
                            const { status } = file
                            setFileList(fileList)
                            if (status === 'done') {
                                fileList.pop()
                                const { uuid, fileUrl, originalName } = file.response.data
                                fileList.push({ uuid, url: fileUrl, originalName })
                                setFileList(fileList)
                            } else if (!status) {
                                fileList.pop()
                                setFileList(fileList)
                            }
                        }
                    }}
                    rules={[{ required: !!rules, message: `${label}必须输入` }]}
                />
                {visible &&
                    <Image
                        preview={{
                            visible,
                            onVisibleChange: visible => setVisible(visible),
                            afterOpenChange: visible => !visible && setImageUrl(''),
                        }}
                        src={ImageUrl}
                    />
                }
            </>
        )
    }
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}


// !!! 自定义操作项
// Todo 选择图标
const TempICON = ({ data }) => {
    const { name, label, tooltip, rules, jugde, span } = data
    const Template = memo(() => (
        <div className='TempICON' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormSelect
                fieldProps={{ classNames: { popup: { root: 'TempICONBox' } }, virtual: false, variant: "underlined" }}
                showSearch
                name={name}
                label={label}
                tooltip={tooltip}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={`请选择${label}`}
                request={() => {
                    return Object.keys(ICONMapping).map(item => ({ value: item, label: ICONMapping[item] }))
                }}
            />
        </div>
    ))

    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 背景墙设置
const TempBackGrund = ({ data, form }) => {
    const { name, jugde } = data
    const Template = ({ type, init }) => {
        return (
            <ProFormGroup key='TempBackGrund'>
                {Object.keys(BackGrundTypeConfig[type]).map((key, index) => {
                    if (key.includes('color')) {
                        return (
                            <div className='COLOR' key={key} style={{ width: `${100 / 24 * 12}%` }}>
                                <ProFormColorPicker
                                    name={[name, key]}
                                    label='背景颜色'
                                    rules={[{ required: true, message: '必须选择背景颜色' }]}
                                    onChange={e => {
                                        const { colors } = e
                                        const valueToSet = colors && Array.isArray(colors) ? colors.map(({ color, percent }) => ({ color: color.toHexString(), percent })) : e.toHexString()
                                        form.current?.setFieldValue([name, key], valueToSet)
                                    }}
                                />
                            </div>

                        )
                    }
                    if (key.includes('size')) {
                        return (
                            <div className='NUMBER' key={key} style={{ width: `${100 / 24 * 12}%` }}>
                                <ProFormDigit
                                    name={[name, key]}
                                    label='背景尺寸'
                                    rules={[{ required: true, message: '必须填写背景颜色' }]}
                                />
                            </div>
                        )
                    }
                })}
            </ProFormGroup>
        )
    }
    return (
        <ProFormDependency name={[jugde.map(item => (item.field)), 'backGrundType']} >
            {e => checkConditions(e, jugde) && e.backGrundType && <Template type={e.backGrundType} init={e[name]} />}
        </ProFormDependency >
    )
}

// Todo 带按钮的输入框
const TempInputLink = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde, urlLink, urlBtn } = data
    const onOpenLine = () => {
        new WinBox({
            title: urlBtn,
            x: "center",
            y: "center",
            width: "80%",
            height: "80%",
            zIndex: 1001,
            background: 'linear-gradient(45deg, #ff00f0, #0050ff)',
            html: `<iframe src="${urlLink}" frameborder="0" allowfullscreen></iframe>`,
        })
    }

    const Template = () => (
        <div className='INPUT' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormText
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请输入${label}`}
                fieldProps={{
                    variant: "underlined",
                    addonAfter: <Button className='LinkButton' type='default' size='large' onClick={onOpenLine}>{urlBtn}</Button>
                }}
            />
        </div>

    )

    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// Todo 密码确认框
const TempPwdConfirm = ({ data }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde, confirm } = data
    const Template = () => (
        <div className='PASSWORD' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormText.Password
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                fieldProps={{ variant: "underlined" }}
                rules={[
                    { required: !!rules, message: `${label}必须输入` },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue(confirm) === value) return Promise.resolve()
                            return Promise.reject(new Error('您输入的新密码不匹配!'));
                        },
                    })
                ]}
                placeholder={placeholder || `请输入${label}`}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

// TODO 生成UUId 
const TempGenerateUuid = ({ data, form, action }) => {
    const { span, name, label, tooltip, rules = false, disabled = false, placeholder, jugde } = data

    const onClick = () => {
        if (action) action.setCurrentRowData({ [name]: v4() })
        else {
            const value = typeof (name) === 'string' ? [name] : [...name]
            form.current.setFieldValue(value, v4())
        }
    }

    const Template = () => (
        <div className='INPUT' style={{ width: `${100 / 24 * span}%` }}>
            <ProFormText
                name={name}
                label={label}
                tooltip={tooltip}
                disabled={disabled}
                rules={[{ required: !!rules, message: `${label}必须输入` }]}
                placeholder={placeholder || `请输入${label}`}
                fieldProps={{ variant: "underlined", allowClear: false }}
            />
            <Button
                key='rest'
                text="生成"
                icon='fas fa-dice-d20'
                type="normal"
                stylingMode="contained"
                onClick={onClick}
            />
        </div>
    )
    if (jugde) return <JudgeTemplate jugde={jugde} Template={Template} />
    else return <Template />
}

const TemplateMapping = {
    GROUP,
    LIST,
    HIDDEN,
    INPUT,
    PASSWORD,
    TEXTAREA,
    NUMBER,
    RANGE,
    SLIDER,
    RATE,
    COLOR,
    RADIO,
    SELECT,
    SELECTM,
    TREE,
    TREEM,
    CASCADER,
    TIME,
    DATE,
    DATETIME,
    WEEK,
    MONTH,
    QUARTER,
    YEAR,
    TIMERANGE,
    DATERANGE,
    DATETIMERANGE,
    WEEKRANGE,
    MONTHRANGE,
    QUARTERRANGE,
    YEARRANGE,
    UPLOAD,
    UPLOADOBJ,
    UPLOADFACE,
    // // TempProFormCaptcha,
    // // TempTitle,

    TempBackGrund,
    TempICON,
    TempInputLink,
    TempPwdConfirm,
    TempGenerateUuid


    // TempPosition,
    // RADIOLIST,
    // CHECKBOXLIST
}

export default FormTemplate;