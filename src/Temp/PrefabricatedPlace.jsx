import './Prefabricated.scss'
import { VideoTemplateA01 } from './VideoTemplate'
import { ColorCallBack, SpacingCallBack, SetBorderParams, SetFilderParams } from '../Utils'

const PrefabricatedPlaceEmpty = ({ tempId, data, LayoutEvent }) => {
    const { radius, padding, backType, border, filter,
        backColor, backDeg, imageUrl, backVideo, backVideoStart, backVideoEnd,
        borderSize, borderType, borderColor, filterSize, filterColor
    } = data

    const BackStyle = {
        borderRadius: SpacingCallBack(radius),
        padding: SpacingCallBack(padding),
        border: SetBorderParams(border, borderSize, borderType, borderColor),
        filter: SetFilderParams(filter, filterSize, filterColor),
    }
    return (
        <div className='PrefabricatedPlaceEmpty' style={BackStyle}>
            {backType === 'color' && <div style={{ width: '100%', height: '100%', backgroundColor: ColorCallBack(backColor, backDeg) }} />}
            {backType === 'image' && <img src={imageUrl} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt={tempId} />}
            {backType === 'video' && <VideoTemplateA01 url={backVideo} seekTimeStart={backVideoStart} seekTimeEnd={backVideoEnd} />}
        </div>
    )
}




export const PrefabricatedPlaceTemplate = {
    PrefabricatedPlaceEmpty,
}