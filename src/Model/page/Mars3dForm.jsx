

import FormTemplate from '../../Utils/FormTemplate'
import { DevScrollView } from '../../Temp/DevTemplate'
import { Mars3dFormConfig } from '../../Config/Mars3dForm'

const Mars3dForm = ({ data, Event }) => {
    const { type, Initial } = data
    return (
        <DevScrollView>
            <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                <FormTemplate
                    formItem={Mars3dFormConfig[type]}
                    FORMEVENT={Event}
                    Initial={Initial}
                    NotSubmit={true}
                    detection={true}
                />
            </div>
        </DevScrollView>
    );
};

export default Mars3dForm;