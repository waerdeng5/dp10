

import { useState } from 'react'
import { Tree, Divider, Button } from 'antd'
import { DevScrollView } from './DevTemplate'



import { ColorCallBack, SetFilderParams, onTreeDrop, replaceNodeByIdTwo, removeTreeByKey, findParentNodeFunc, treeValue } from '../Utils'


const BaseTree = [
    { title: '基础设置', uuid: '0-0' },
    { title: '登录设置', uuid: '0-1' },
]

const SetWeChatMenu = () => {
    const [TreeData, setTreeData] = useState([])
    const [SELECT, setSELECT] = useState([])




    const onMenuSelect = (e) => {
        console.log(e)
        setSELECT(e)
    }

    const onAddMenu = () => { }
    const onDelMenu = () => { }

    return (
        <div className='menu'>
            <div className='tree'>
                <DevScrollView>
                    <div>
                        <Divider>基础信息</Divider>
                        <Tree
                            fieldNames={{ key: 'uuid' }}
                            defaultExpandAll
                            blockNode
                            treeData={BaseTree}
                            selectedKeys={SELECT}
                            onSelect={(e) => {
                                if (e.length === 0) return
                                onMenuSelect(e)
                            }}
                        />
                        <Divider>菜单信息</Divider>
                        <Tree
                            fieldNames={{ key: 'uuid' }}
                            defaultExpandAll
                            blockNode
                            draggable
                            onDrop={e => setTreeData(onTreeDrop(e, TreeData, 'uuid'))}
                            treeData={TreeData}
                            selectedKeys={SELECT}
                            onSelect={(e) => {
                                if (e.length === 0) return
                                onMenuSelect(e)
                            }}
                        />
                    </div>

                </DevScrollView>
            </div>
            <div className='btn'>
                <Button onClick={onAddMenu} block type='primary'>新增菜单</Button>
            </div>
        </div>
    )
}

export default SetWeChatMenu