import { Select } from 'antd'
import { useState } from 'react';




import { SpacingCallBack, ColorCallBack, SpacingSizeCallBack, SetFilderParams } from '../Utils'

const PrefabricatedVisualMonitoring = ({ tempId, UrlData, data, LayoutEvent }) => {

    const { left_options, top_options,
        left_width, left_radius, left_color, left_deg, left_padding, left_margin, left_orga, left_type, left_posi, left_nums,
        left_orga_api, left_orga_params, left_type_api, left_type_params, left_posi_api, left_posi_params,

        left_label_color, left_label_deg, left_label_padding, left_label_size, left_label_family, left_label_weight, left_label_style,
        left_label_filed, left_label_filed_data, left_label_filed_color,
        left_select_height, left_select_back, left_select_deg, left_select_color,
        left_select_size, left_select_family, left_select_weight, left_select_style, left_select_border, left_select_icon,

    } = data




    console.log(data)

    const [orgaList, setOrgaList] = useState([{ label: '全部', value: '' }])
    const [typeList, setTypeList] = useState([{ label: '全部', value: '' }])
    const [posiList, setPosiList] = useState([{ label: '全部', value: '' }])
    const [numsList, setNumsList] = useState([
        { label: '一屏', value: 1 },
        { label: '二屏', value: 2 },
        { label: '四屏', value: 3 },
        { label: '六屏', value: 6 },
        { label: '八屏', value: 8 },
        { label: '九屏', value: 9 },
        { label: '十二屏', value: 12 },
    ])

    const [orgaValue, setOrgaValue] = useState('')
    const [typeValue, setTypeValue] = useState('')
    const [posiValue, setPosiValue] = useState('')
    const [numsValue, setNumsValue] = useState('')






    const leftStyle = {
        width: left_width,
        height: SpacingSizeCallBack(left_margin, 100, true),
        borderRadius: SpacingCallBack(left_radius),
        background: ColorCallBack(left_color, left_deg),
        margin: SpacingCallBack(left_margin),
        padding: SpacingCallBack(left_padding),
    }

    const leftLabelStyle = {
        '--color': ColorCallBack(left_label_color, left_label_deg),
        padding: SpacingCallBack(left_label_padding),
        fontSize: left_label_size,
        fontFamily: left_label_family,
        fontWeight: left_label_weight,
        fontStyle: left_label_style,
        filter: SetFilderParams(left_label_filed, left_label_filed_data, left_label_filed_color)
    }

    const leftSelectStyle = {
        height: left_select_height,
        background: ColorCallBack(left_select_back, left_select_deg),
        color: left_select_color,
        fontSize: left_select_size,
        fontFamily: left_select_family,
        fontWeight: left_select_weight,
        fontStyle: left_select_style,
        borderColor: left_select_border,
        '--iconColor': left_select_icon,
    }



    return (
        <div className="PrefabricatedVisualMonitoring">
            {left_options &&
                <div className="left_options" style={leftStyle}>
                    {left_orga &&
                        <div className='left_options_item'>
                            <div className="left_options_item_label" style={leftLabelStyle}>组织机构 : </div>
                            <Select
                                value={orgaValue}
                                options={orgaList}
                                style={leftSelectStyle}
                            />
                        </div>
                    }
                    {left_type &&
                        <div className='left_options_item'>
                            <div className="left_options_item_label" style={leftLabelStyle}>监控类型 : </div>
                            <Select
                                value={typeValue}
                                options={typeList}
                                style={leftSelectStyle}
                            />
                        </div>
                    }
                    {left_posi &&
                        <div className='left_options_item'>
                            <div className="left_options_item_label" style={leftLabelStyle}>监控位置 : </div>
                            <Select
                                value={posiValue}
                                options={posiList}
                                style={leftSelectStyle}
                            />
                        </div>
                    }
                    {left_nums &&
                        <div className='left_options_item'>
                            <div className="left_options_item_label" style={leftLabelStyle}>显示方式 : </div>
                            <div className='left_options_item_snums'>
                                {numsList.map(v => {

                                    return (
                                        <div key={v.value}>{v.label}</div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
            }
            <div className="right_box">
                {top_options &&
                    <div className="top_options">
                        头部
                    </div>
                }
                <div className="monitoring">
                    监控
                </div>
                <div className="pagination">
                    分页
                </div>
            </div>
        </div>
    );
};


export const PrefabricatedVisualTemplate = {
    PrefabricatedVisualMonitoring
};