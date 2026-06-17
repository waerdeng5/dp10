import dayjs from 'dayjs'
import { Select, DatePicker } from 'antd';
import { useState } from 'react';




const PrefabricatedSelect = () => {
    return (
        <div className="PrefabricatedSelect">
            <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
        </div>
    )
}

const PrefabricatedDateSelect = ({ tempId, UrlData, data, LayoutEvent }) => {

    console.log(data)

    const [dateValue, setDateValue] = useState(dayjs())
    return (
        <div className='PrefabricatedDateSelect'>
            <DatePicker allowClear={false} picker="year" variant="borderless" size='large' value={dateValue} />
        </div>
    )
}


export const PrefabricatedSelectTemplate = {
    PrefabricatedSelect,
    PrefabricatedDateSelect
};