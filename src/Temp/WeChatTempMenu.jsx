import './WeChatTempMenu.scss'
import { Icon } from 'tdesign-icons-react'
import { ColorCallBack, SpacingCallBack, SetFilderParams, SetBorderParams, SetShadowParams, combinedArray } from '../Utils'

const menuMapping = [
    { uuid: 1, title: '模拟菜单', icon: 'ai-1', note: '说明文字', description: '下方内容描述' },
]

const WeChatTempMenuA01 = ({ styleData }) => {
    const {
        list, mapping,
        back_margin, back_padding, back_color, back_deg, back_radius,
        border, back_border_size, back_border_type, back_border_color,
        shadow, back_shadow_size, back_shadow_type, back_shadow_color,
        filter, back_filter_size, back_filter_color,

        cell_color, cell_padding, cell_border_size, cell_border_type, cell_border_color,
        cell_title_color, cell_title_padding, cell_title_size, cell_title_famity, cell_title_weight, cell_title_style,
        cell_icon, cell_icon_color, cell_icon_size, cell_icon_margin,
        cell_arrow, cell_arrow_color, cell_arrow_size, cell_arrow_margin,
        cell_note, cell_note_color, cell_note_padding, cell_note_size, cell_note_famity, cell_note_weight, cell_note_style,
        cell_description, cell_description_color, cell_description_padding, cell_description_size, cell_description_famity,
        cell_description_weight, cell_description_style,
    } = styleData

    const listMapping = list && list.length !== 0 ? combinedArray(list, mapping) : menuMapping

    const backStyle = {
        margin: SpacingCallBack(back_margin),
        padding: SpacingCallBack(back_padding),
        borderRadius: SpacingCallBack(back_radius),
        background: ColorCallBack(back_color, back_deg),
        border: SetBorderParams(border, back_border_size, back_border_type, back_border_color),
        boxShadow: SetShadowParams(shadow, back_shadow_size, back_shadow_color, back_shadow_type),
        filter: SetFilderParams(filter, back_filter_size, back_filter_color),
    }

    const cellStyle = {
        padding: SpacingCallBack(cell_padding),
        background: cell_color,
        borderBottom: SetBorderParams(true, cell_border_size, cell_border_type, cell_border_color),
    }

    const leftIcon = {
        color: cell_icon_color,
        fontSize: cell_icon_size,
        marginRight: cell_icon_margin,
    }
    const rightIcon = {
        color: cell_arrow_color,
        fontSize: cell_arrow_size,
        marginLeft: cell_arrow_margin,
    }

    const titleStyle = {
        color: cell_title_color,
        fontSize: cell_title_size,
        lineHeight: cell_title_size + 'px',
        fontFamily: cell_title_famity,
        fontWeight: cell_title_weight,
        fontStyle: cell_title_style,
        padding: SpacingCallBack(cell_title_padding),
    }
    const noteStyle = {
        color: cell_note_color,
        fontSize: cell_note_size,
        lineHeight: cell_note_size + 'px',
        fontFamily: cell_note_famity,
        fontWeight: cell_note_weight,
        fontStyle: cell_note_style,
        padding: SpacingCallBack(cell_note_padding),
    }
    const descriptionStyle = {
        color: cell_description_color,
        fontSize: cell_description_size,
        lineHeight: cell_description_size + 'px',
        fontFamily: cell_description_famity,
        fontWeight: cell_description_weight,
        fontStyle: cell_description_style,
        padding: SpacingCallBack(cell_description_padding),
    }

    return (
        <div className='WeChatTempMenuA01' style={backStyle}>
            {listMapping.map(v => {
                const { uuid, title, icon, note, description } = v
                return (
                    <div className='cell' key={uuid} style={cellStyle}>
                        <div className='left'>
                            {cell_icon && icon && <Icon className='icon' name={icon} style={leftIcon} />}
                            <div className='text'>
                                <div className='name' style={titleStyle}>{title}</div>
                                {cell_description && description && <div className='description' style={descriptionStyle}>{description}</div>}
                            </div>
                        </div>
                        <div className='right'>
                            {cell_note && note && <div style={noteStyle}>{note}</div>}
                            {cell_arrow && <Icon name='chevron-right' style={rightIcon} />}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export const WeChatTempMenu = {
    WeChatTempMenuA01: {
        title: '单元格 - A01',
        temp: WeChatTempMenuA01
    },
}



