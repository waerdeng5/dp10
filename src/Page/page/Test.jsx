import './Test.scss'
import dayjs from 'dayjs'
import { Tooltip, Button } from 'antd'
import { ICONMapping } from '../../Config/IconMapping'
import { DevScrollView } from '../../Temp/DevTemplate'
import { MappingData } from '../../Config/MappingData'

import { useMount } from 'ahooks'
import { useRef, useEffect } from 'react'

import { Gantt, VRender } from '@visactor/vtable-gantt';

import Hyperspeed from '../../Bits/Hyperspeed'

const Test = () => {
    const { Theme__TemplateList, Font__Family } = MappingData
    const boxRef = useRef(null)
    return (
        <div className='TestPage'>
            <div className='Hyperspeed'  >
                <Hyperspeed />
            </div>
            {/* <DevScrollView>
                <div className='fontInfo'>
                    {Font__Family.map(v =>
                        <div key={v.value} style={{ fontFamily: v.value }}>
                            <div>{v.value} : {v.label} </div>
                            <div>中国国家导弹防御系统(CNMD)</div>
                            <div>1 2 3 4 5 6 7 8 9 0</div>
                            <div>a b c d e f g h i g k l m n o p q r s t u v w x y z</div>
                            <div>A B C D E F G H I G K L M N O P Q R S T U V W X Y Z</div>
                        </div>
                    )}
                </div>
                <div className='iconList'>
                    {Object.keys(ICONMapping).map(key => {
                        return (
                            <div className='icon' key={key} style={{ fontSize: 24 }}>
                                <Tooltip title={key}>
                                    {ICONMapping[key]}
                                </Tooltip>
                            </div>
                        )
                    })}
                </div>
            </DevScrollView> */}
        </div>
    );
};

export default Test;