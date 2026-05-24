import './ThemeConfig.scss'
import { useEventEmitter } from 'ahooks'


import FormTemplate from '../../Utils/FormTemplate'
import { ThemeFormList } from '../../Config/themeForm'


const ThemeConfig = () => {
    const ThemeEvent = useEventEmitter()
    ThemeEvent.useSubscription(v => {
        console.log(v)
    })


    return (
        <div className='ThemeConfig'>
            <FormTemplate
                fixed={true}
                formItem={ThemeFormList}
                FORMEVENT={ThemeEvent}
                Initial={{}}
                NotLoading={true}
            />
        </div>
    );
};

export default ThemeConfig;