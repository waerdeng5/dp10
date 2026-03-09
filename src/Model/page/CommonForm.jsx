import { useEventEmitter } from 'ahooks'
import FormTemplate from '../../Utils/FormTemplate'
import { FormConfig } from '../../Config/configForm'
import { Mars3dFormConfig } from '../../Config/Mars3dForm'
import { DevScrollView } from '../../Temp/DevTemplate'

const FormList = { ...FormConfig, ...Mars3dFormConfig }

const CommonForm = ({ data, Event }) => {
    const FORMEVENT = useEventEmitter()
    const { eventBack = 'onCommonFormBack', NotSubmit = false, detection = false, formItem, Initial } = data

    const onFormBack = (data) => Event.emit({ type: eventBack, data })

    const eventCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onFormBack', () => onFormBack(data)],
            ['onFormReset', () => FORMEVENT.emit({ type: 'onFormReset' })],
            ['closeFormLoading', () => FORMEVENT.emit({ type: 'closeFormLoading' })]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }
    const formCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onFormBack', () => onFormBack(data)],
            ['onDetection', () => Event.emit({ type: detection, data })],
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    Event.useSubscription(eventCallBack)
    FORMEVENT.useSubscription(formCallBack)

    return (
        <DevScrollView>
            <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                <FormTemplate
                    formItem={FormConfig[formItem]}
                    FORMEVENT={FORMEVENT}
                    Initial={Initial || {}}
                    NotSubmit={NotSubmit}
                    detection={detection}
                />
            </div>
        </DevScrollView>
    );
};

export default CommonForm;