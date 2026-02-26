import './Prefabricated.scss'
import { ColorCallBack, SpacingCallBack, SetBorderParams, SetFilderParams } from '../Utils'

const PrefabricatedDiyText = ({ tempId, data, LayoutEvent }) => {

    const { left_img, left_img_url, left_img_width, left_img_height, left_img_margin,
        right_img, right_img_url, right_img_width, right_img_height, right_img_margin,

    } = data

    const leftImgStyle = {
        width: left_img_width,
        height: left_img_height,
        margin: SpacingCallBack(left_img_margin),
    }

    const rightImgStyle = {
        width: right_img_width,
        height: right_img_height,
        margin: SpacingCallBack(right_img_margin),
    }



    // padding: SpacingCallBack(padding),


    // 左侧图片信息
    // 中间盒子信息
    // 右侧图片信息


    return (
        <div className='PrefabricatedDiyText' >
            {left_img && <img src={left_img_url} style={leftImgStyle} alt="left_img_url" />}
            <div>中间区域</div>
            {right_img && <img src={right_img_url} style={rightImgStyle} alt="right_img_url" />}
        </div>
    )
}




export const PrefabricatedDiyTemplate = {
    PrefabricatedDiyText,
}