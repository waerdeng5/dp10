import './SetFieldRender.scss'

import { useMount } from 'ahooks'
import React, { useCallback, useState } from 'react'

import TextBox from 'devextreme-react/text-box'
import Sortable from 'devextreme-react/sortable'
import ScrollView from 'devextreme-react/scroll-view'


const removeItem = (array, removeIdx) => array.filter((_, idx) => idx !== removeIdx)

function insertItem(array, item, insertIdx) {
    const newArray = [...array];
    newArray.splice(insertIdx, 0, item)
    return newArray;
}

const syncRenderFields = (renderFields, targetFields) => {
    const targetUuidMap = new Map(targetFields.map(item => [item.uuid, item]))
    // 清理不存在的字段
    const cleanedFields = renderFields.map(subArray => subArray.filter(item => targetUuidMap.has(item.uuid)))
    // 找出缺失的字段并格式化
    const existingUuids = new Set(renderFields.flat().map(item => item.uuid));
    const missingFields = targetFields
        .filter(field => !existingUuids.has(field.uuid))
        .map(({ uuid, dataField, caption }) => ({ uuid, dataField, caption }))
    return [[...cleanedFields[0], ...missingFields], cleanedFields[1]]
}

const Item = ({ item, Event }) => {
    const [value, setValue] = useState(item.caption)
    const valueChanged = useCallback((data) => {
        Event.emit({ type: 'onChangeRenderCaption', data: { uuid: item.uuid, value: data.value } })
        setValue(data.value)
    }, []);

    return (
        <div className="RenderItem">
            <i className="handle dx-icon dx-icon-dragvertical" />
            <TextBox
                height={56}
                label={item.dataField}
                value={value}
                onValueChanged={valueChanged}
            />
        </div>
    )
}



const List = ({ title, index, data, onTaskDrop, Event }) => (
    <div className="list">
        <div className="list-title">{title}</div>
        <ScrollView className="scrollable-list" direction="vertical" showScrollbar="always">
            <Sortable handle='.handle' data={index} group="cardsGroup" onReorder={onTaskDrop} onAdd={onTaskDrop}>
                {data.map((item) => (
                    <Item key={item.uuid} item={item} Event={Event} />
                ))}
            </Sortable>
        </ScrollView>
    </div>
);

const SetFieldRender = ({ data, Event }) => {
    const { APIdata, OPTdata, option } = data
    const { fields, renderFields } = APIdata
    const [Data, setData] = useState([])
    const TitleMappig = ['可用字段', '渲染字段']


    const onTaskDrop = useCallback(({ fromData, toData, fromIndex, toIndex }) => {
        const updatedLists = [...Data];
        const item = updatedLists[fromData][fromIndex];
        updatedLists[fromData] = removeItem(updatedLists[fromData], fromIndex);
        updatedLists[toData] = insertItem(updatedLists[toData], item, toIndex);
        setData(updatedLists)
    }, [Data]);


    const onClickSaveRender = () => {
        const status = OPTdata.top.findIndex(v => v.uuid === option.uuid)
        if (status !== -1) OPTdata.top.find(v => v.uuid === option.uuid).fields = Data
        else OPTdata.row.find(v => v.uuid === option.uuid).fields = Data
        Event.emit({ type: 'onSaveOPTdataA02', data: OPTdata })
    }

    const onChangeRenderCaption = (data) => {
        const { uuid, value } = data
        const newArr = Data.map(subArray => subArray.map(item => item.uuid === uuid ? { ...item, caption: value } : item))
        setData(newArr)
    }

    const eventCallBack = (e) => {
        const { type, data } = e
        const Mapping = new Map([
            ['onClickSaveRender', onClickSaveRender],
            ['onChangeRenderCaption', () => onChangeRenderCaption(data)]
        ])
        const func = Mapping.get(type)
        func?.(data)
    }

    Event.useSubscription(eventCallBack)

    useMount(() => {
        if (option?.fields && option.fields?.length !== 0) setData(syncRenderFields(option.fields, fields))
        else setData([fields.map((item) => ({ uuid: item.uuid, dataField: item.dataField, caption: item.caption })), []])
    })

    return (
        <div className='SetFieldRender'>
            {Data.length !== 0 && Data.map((item, index) => (
                <List key={index} Event={Event} title={TitleMappig[index]} index={index} data={item} onTaskDrop={onTaskDrop} />
            ))}
        </div>
    );
};

export default SetFieldRender;