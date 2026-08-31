import './Test.scss'
import dayjs from 'dayjs'
import { Tooltip, } from 'antd'
import { ICONMapping } from '../../Config/IconMapping'
import { DevScrollView } from '../../Temp/DevTemplate'
import { MappingData } from '../../Config/MappingData'

import { useMount } from 'ahooks'
import { useRef, useEffect } from 'react'



import { Gantt, VRender } from '@visactor/vtable-gantt';


const Test = () => {
    const { Theme__TemplateList, Font__Family } = MappingData
    useMount(() => {
    })


    // const GanttRef = useRef(null)
    // const ganttInstance = useRef(null)
    // const records = [
    //     {
    //         id: 1,
    //         title: 'Task 1',
    //         hierarchyState: 'expand',
    //         baselineStartDateField: '2024-08-02',
    //         baselineEndDateField: '2024-08-10',
    //         start: "2024-08-01",
    //         end: "2024-08-20",

    //         children: [
    //             { id: 11, title: "子任务 #1", start: "2024-08-01", end: "2024-08-15", progress: 60, priority: 'P0' },
    //             { id: 12, title: "里程碑", type: "milestone", start: "2024-08-8" }
    //         ]
    //     },
    //     { id: 3, title: "子任务 #1", start: "2024-08-01", end: "2024-08-11", progress: 60, priority: 'P0' },
    //     // {
    //     //     id: 2,
    //     //     title: 'Task 2',
    //     //     developer: 'liufangfang.jane@bytedance.com',
    //     //     start: '07/24/2024',
    //     //     end: '08/04/2024',
    //     //     progress: 60,
    //     //     priority: 'P0'
    //     // },
    //     // {
    //     //     id: 3,
    //     //     title: 'Task 3',
    //     //     developer: 'liufangfang.jane@bytedance.com',
    //     //     start: '2024-08-04',
    //     //     end: '2024-08-04',
    //     //     progress: 100,
    //     //     priority: 'P1'
    //     // },
    //     // {
    //     //     id: 4,
    //     //     title: 'Task 4',
    //     //     developer: 'liufangfang.jane@bytedance.com',
    //     //     start: '2024-07-26',
    //     //     end: '2024-07-28',
    //     //     progress: 31,
    //     //     priority: 'P0'
    //     // },
    //     // {
    //     //     id: 5,
    //     //     title: 'Task 5',
    //     //     developer: 'liufangfang.jane@bytedance.com',
    //     //     start: '2024-07-26',
    //     //     end: '2024-07-28',
    //     //     progress: 60,
    //     //     priority: 'P0'
    //     // },
    //     // {
    //     //     id: 6,
    //     //     title: 'Task 6',
    //     //     developer: 'liufangfang.jane@bytedance.com',
    //     //     start: '2024-07-29',
    //     //     end: '2024-08-11',
    //     //     progress: 100,
    //     //     priority: 'P1'
    //     // }
    // ];

    // const columns = [
    //     {
    //         field: 'title',
    //         title: '标题',
    //         width: 'auto',
    //         sort: true,
    //         tree: true,
    //         editor: 'input'
    //     },
    //     {
    //         field: 'developer',
    //         title: '标题2',
    //         width: 'auto',
    //         sort: true,
    //         tree: true,
    //         editor: 'input'
    //     },
    // ];
    // const option = {
    //     records,   // 数据项
    //     taskListTable: {   // 左侧任务列表表格
    //         columns,     // 列
    //         tableWidth: 'auto',  // 自动宽度
    //         minTableWidth: 100,  // 最小宽度
    //         maxTableWidth: 600,  // 最大宽度
    //         theme: {
    //             headerStyle: {
    //                 padding: 0,
    //                 borderColor: 'red',
    //                 borderLineWidth: [0, 1, 0, 1],
    //                 fontSize: 18,
    //                 fontWeight: 'bold',
    //                 fontFamily: 'ShuHeiTi',
    //                 color: '#262626',
    //                 bgColor: '#EEF1F5',
    //                 textAlign: 'center',
    //                 textBaseline: 'bottom'
    //             },
    //             bodyStyle: {
    //                 padding: 40,
    //                 borderColor: '#ff0000',
    //                 borderLineWidth: [1, 0, 1, 0],
    //                 fontSize: 16,
    //                 color: '#4D4D4D',
    //                 bgColor: '#FFF',
    //                 fontFamily: 'ShuHeiTi',
    //             }
    //         },
    //         // rightFrozenColCount: 1
    //     },
    //     timelineHeader: {  // 时间刻度配置
    //         colWidth: 100,  //列宽。
    //         hideWeekend: false, // 是否隐藏周末。
    //         weekendColWidth: 100,     // 周末列宽。
    //         backgroundColor: '#EEF1F500',  // 时间刻度背景颜色。
    //         horizontalLine: {  // 水平线。
    //             lineWidth: 1,
    //             lineColor: '#e1e4e8',
    //             lineDash: [10, 5]
    //         },
    //         verticalLine: {  // 垂直线。
    //             lineWidth: 1,
    //             lineColor: '#e1e4e8',
    //             lineDash: [10, 5]
    //         },
    //         scales: [  // 时间刻度。
    //             {
    //                 visible: true,  // 是否显示时间刻度
    //                 rowHeight: 44, // 行高
    //                 unit: 'month', // 时间单位
    //                 step: 1,     // 步长
    //                 startOfWeek: 'sunday', // 周一 or 周日
    //                 format(date) {
    //                     return dayjs(date.startDate).format('YYYY-MM');  // 格式化时间刻度
    //                 },
    //                 style: {  // 时间刻度样式
    //                     fontSize: 20,
    //                     fontWeight: 'bold',
    //                     color: '#f8f8f8',
    //                     strokeColor: 'black',
    //                     textAlign: 'right',
    //                     textBaseline: 'bottom',
    //                     textStick: true,
    //                     fontFamily: 'DIN',
    //                     // padding: [0, 30, 0, 20]
    //                 }
    //             },
    //             {
    //                 unit: 'day',
    //                 step: 1,
    //                 format(date) {
    //                     // console.log(dayjs(date.startDate).format('YYYY-MM-DD HH:mm:ss'))
    //                     // console.log(dayjs(date.endDate).format('YYYY-MM-DD HH:mm:ss'))
    //                     // return date.dateIndex.toString();

    //                     return dayjs(date.startDate).format('YYYY-MM-DD');  // 格式化时间刻度
    //                 },
    //                 style: {
    //                     fontSize: 20,
    //                     fontWeight: 'bold',
    //                     color: 'white',
    //                     strokeColor: 'black',
    //                     textAlign: 'right',
    //                     textBaseline: 'bottom',
    //                     backgroundColor: '#EEF1F5'
    //                 }
    //             }
    //         ],
    //         // zoomScale: {
    //         //     enabled: true,
    //         //     dataZoomAxis: {
    //         //         enabled: true,
    //         //         height: 30,
    //         //         delayTime: 1
    //         //     },
    //         // },
    //     },
    //     taskBar: {  // 任务条配置
    //         startDateField: 'start',  // 开始日期字段
    //         endDateField: 'end',  // 结束日期字段
    //         baselineStartDateField: 'baselineStartDateField',
    //         baselineEndDateField: 'baselineEndDateField',

    //         progressField: 'progress',  // 进度字段
    //         baselineProgressField: 'progress',  // 进度字段
    //         labelText: '{title}  完成 {progress}%  {start}/{end}',  // 任务条标签格式
    //         labelTextStyle: {  // 任务条标签样式
    //             padding: 40,
    //             color: '#262626',
    //             fontFamily: 'DIN',
    //             fontSize: 16,
    //             textAlign: 'right',
    //             textOverflow: true,
    //             // orient: 'center',
    //             // orientHandleWithOverflow: 'right' // 超出隐藏
    //         },
    //         baselineStyle:
    //             { barColor: '#d3d3d3', completedBarColor: '#a9a9a9', width: 20, cornerRadius: 3, borderWidth: 1, borderColor: 'red' }
    //         ,
    //         barStyle: (e) => {
    //             return {  // 任务条样式
    //                 width: 24,
    //                 /** 任务条的颜色 */
    //                 barColor: '#ee8800',
    //                 /** 已完成部分任务条的颜色 */
    //                 completedBarColor: '#91e8e0',
    //                 /** 任务条的圆角 */
    //                 cornerRadius: 8,
    //                 /** 任务条的边框 */
    //                 borderLineWidth: 1,
    //                 /** 边框颜色 */
    //                 borderColor: 'red',
    //                 paddingTop: 16
    //             }
    //         },
    //         // customLayout: (e) => {
    //         //     const { width, height, index, startDate, endDate, taskDays, progress, taskRecord, ganttInstance } = e
    //         //     // return false

    //         //     const container = new VRender.Group({
    //         //         width,
    //         //         height,
    //         //         cornerRadius: 20,
    //         //         fill: {
    //         //             gradient: 'linear',
    //         //             x0: 0,
    //         //             y0: 0,
    //         //             x1: 1,
    //         //             y1: 0,
    //         //             stops: [
    //         //                 {
    //         //                     offset: 0,
    //         //                     color: '#f00'
    //         //                 },
    //         //                 {
    //         //                     offset: 0.5,
    //         //                     color: '#0f0'
    //         //                 },
    //         //                 {
    //         //                     offset: 1,
    //         //                     color: '#00f'
    //         //                 }
    //         //             ]
    //         //         },
    //         //         display: 'flex',
    //         //         flexDirection: 'row',
    //         //         flexWrap: 'nowrap'
    //         //     });

    //         //     console.log(container)

    //         //     return {
    //         //         rootContainer: container
    //         //         // renderDefaultBar: true
    //         //         // renderDefaultText: true
    //         //     };
    //         // },

    //         milestoneStyle: {
    //             width: 16,
    //             fillColor: value => (value.record.progress >= 100 ? '#597ef7' : '#d6e4ff'),
    //             borderColor: '#597ef7',
    //             borderLineWidth: 0,
    //             labelText: '{title}',
    //             labelTextStyle: {
    //                 fontSize: 16,
    //                 color: 'rgb(1, 43, 75)'
    //             }
    //         },

    //         resizable: true,  // 是否可调整大小。
    //         moveable: false, // 是否可移动。
    //         progressAdjustable: false, // 是否可调整进度。
    //         hoverBarStyle: {  // 悬停任务条样式
    //             cornerRadius: 0,
    //             barOverlayColor: 'rgba(99, 144, 0, 0.4)'
    //         },

    //         selectable: true,
    //         selectedBarStyle: { // 选中状态
    //             borderLineWidth: 10
    //             // shadowBlur?: number; //阴影宽度
    //             // shadowOffsetX?: number; //x方向偏移
    //             // shadowOffsetY?: number; //Y方向偏移
    //             // shadowColor?: string; //阴影颜色
    //             // borderColor?: string; //边框颜色
    //             // borderLineWidth?: number;
    //         },
    //         locateIcon: true, // 是否显示定位图标
    //         scheduleCreatable: false,
    //         // scheduleCreation: { // 创建任务条按钮
    //         //     buttonStyle: {
    //         //         lineWidth: 1,
    //         //         // lineColor?: string;
    //         //         // lineWidth?: number;
    //         //         // lineDash?: number[];
    //         //         // cornerRadius?: number;
    //         //         // backgroundColor?: string;
    //         //     },
    //         //     // customLayout: true, // 是否自定义布局
    //         // },
    //     },
    //     tasksShowMode: 'Sub_Tasks_Separate',
    //     taskKeyField: 'id', // 任务条唯一标识字段
    //     grid: { // 网格配置
    //         backgroundColor: '#ff00ff00', // 背景颜色
    //         weekendBackgroundColor: '#f0ff0000', // 周末背景颜色
    //         verticalLineDependenceOnTimeScale: 'week',

    //         verticalLine: {
    //             lineWidth: 1,
    //             lineColor: '#e1e4e8',
    //             lineDash: [4, 4],
    //         },
    //         horizontalLine: {
    //             lineWidth: 1,
    //             lineColor: '#e1e4e8'
    //         }
    //     },
    //     markLine: [
    //         {
    //             date: '2024/8/02', // 标记线日期
    //             scrollToMarkLine: false, // 是否滚动到标记线
    //             position: 'left', // 标记线位置
    //             style: {     // 标记线样式
    //                 lineColor: 'red',
    //                 lineWidth: 1,
    //                 lineDash: [4, 4],
    //             },
    //             content: '1123',
    //             contentStyle: {
    //                 color: '#fff',
    //                 fontSize: 16
    //                 // color?: string;
    //                 // fontSize?: string;
    //                 // fontWeight?: string;
    //                 // lineHeight?: string;
    //                 // backgroundColor?: string;
    //                 // cornerRadius?: string;
    //             },
    //         },
    //     ],

    //     frame: { // 整个外边框及横纵分割线配置。
    //         outerFrameStyle: {   // 外框样式
    //             borderLineWidth: 1,
    //             borderColor: '#00ff00',
    //             cornerRadius: 0
    //         },
    //         verticalSplitLine: { // 垂直分割线样式
    //             lineColor: '#e1e4e8',
    //             lineWidth: 3
    //         },
    //         horizontalSplitLine: { // 水平分割线样式
    //             lineColor: '#e1e4e8',
    //             lineWidth: 3
    //         },
    //         verticalSplitLineMoveable: false, // 是否可移动垂直分割线
    //         verticalSplitLineHighlight: { // 垂直分割线高亮样式
    //             lineColor: 'green',
    //             lineWidth: 0,
    //             lineDash: [4, 4],
    //         }
    //     },

    //     // minDate: '2024/8/01', // 最小日期
    //     // maxDate: '2024/8/31', // 最大日期

    //     headerRowHeight: 40, // 头行高度
    //     rowHeight: 40, // 行高

    //     overscrollBehavior: 'none', // 涅出滚动行为
    //     dateFormat: 'yyyy-MM-dd', // 日期格式
    //     underlayBackgroundColor: '#f7f7f700', // 背景颜色


    //     // rowSeriesNumber: { // 行号配置
    //     //     title: '行号',
    //     //     // field:'rowNumber', // 行号字段
    //     //     dragOrder: false, // 是否可拖动行号
    //     //     disableColumnResize: false, // 是否禁用调整列宽
    //     //     headerStyle: {
    //     //         bgColor: '#EEF1F5',
    //     //         borderColor: '#e1e4e8'
    //     //     },
    //     //     style: {
    //     //         borderColor: '#e1e4e8'
    //     //     }
    //     // },

    //     scrollStyle: {
    //         hoverOn: true,
    //         barToSide: false,
    //         ignoreFrozenCols: false,
    //         scrollRailColor: 'RGBA(246,246,246,0.5)',
    //         visible: 'always',
    //         width: 16,
    //         scrollSliderCornerRadius: 2,
    //         scrollSliderColor: '#5cb85c'
    //     }
    // };

    // useEffect(() => {
    //     if (GanttRef.current && !ganttInstance.current) {
    //         ganttInstance.current = new Gantt(GanttRef.current, option)
    //     }
    //     return () => {
    //         if (ganttInstance.current) {
    //             ganttInstance.current.release()
    //             ganttInstance.current = null
    //         }
    //     }
    // }, [])


    // return (
    //     <div className='PrefabricatedChartGantt' >
    //         <div ref={GanttRef} />
    //     </div>
    // )


    return (
        <div className='TestPage'>
            <DevScrollView>
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
            </DevScrollView>
        </div>
    );
};

export default Test;