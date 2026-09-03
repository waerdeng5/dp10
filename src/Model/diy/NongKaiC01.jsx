import './NongKaiC01.scss'
import { modelStore } from '../../Router/zustand'
import { useEventEmitter } from 'ahooks';


const NongKaiC01 = () => {
    const Event = useEventEmitter()
    const { updateModel1 } = modelStore()

    const List = [
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1001', title: '优质工程' },
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1002', title: 'QC' },
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1003', title: '施工工法' },
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1004', title: '十新技术' },
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1005', title: '绿色工程' },
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1006', title: 'BIM' },
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1007', title: '专利' },
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1008', title: '参编标准' },
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1009', title: '样板工程' },
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1010', title: '智慧工地' },
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1011', title: '微创新' },
        { uuid: '1154691c-a87d-40e5-9a33-946fb0bc1012', title: '科学技术成果' },
    ]
    const onClick = (e) => {
        updateModel1({
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