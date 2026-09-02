import './NongKaiC01.scss'
import { modelStore } from '../../Router/zustand'
import { useEventEmitter } from 'ahooks';


const NongKaiC01 = () => {

    const Event = useEventEmitter()
    const { updateModel5 } = modelStore()


    const List = [
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1001', title: '优质工程' },
        { uuid: 2, title: '弹窗2' },
        { uuid: 3, title: '弹窗3' },
        { uuid: 4, title: '弹窗4' },
        { uuid: 5, title: '弹窗5' },
        { uuid: 6, title: '弹窗6' },
        { uuid: 7, title: '弹窗7' },
        { uuid: 8, title: '弹窗8' },
        { uuid: 9, title: '弹窗9' },
        { uuid: 10, title: '弹窗10' },
        { uuid: 11, title: '弹窗11' },
        { uuid: 12, title: '弹窗12' },
        { uuid: 13, title: '弹窗13' },
        { uuid: 14, title: '弹窗14' },
    ]

    const onClick = (e) => {
        updateModel5({
            title: e.title,
            type: 'LayoutModel',
            isStart: true,
            width: '80vw',
            height: '80vh',
            Event: Event,
            modelData: { json: e.uuid, row: e }
        })
    }

    return (
        <div className='NongKaiC01'>
            {List.map(v => {
                return (
                    <button key={v.uuid} onClick={() => onClick(v)}>
                        {v.title}
                    </button>
                )
            })}
        </div>
    )
}

export default NongKaiC01;