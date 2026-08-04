import './AITemplate.scss'
import { App, Button, Flex } from 'antd'
import { useState, useRef } from 'react'
import { Attachments, Sender, Welcome, Think } from '@ant-design/x'
import { CloudUploadOutlined, PaperClipOutlined } from '@ant-design/icons'


export const AITemplateA01 = () => {
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState([])
    const [text, setText] = useState('')
    const attachmentsRef = useRef(null)
    const senderRef = useRef(null)

    const [callList, setCallList] = useState([])

    const senderHeader = (
        <Sender.Header
            title="附件列表"
            styles={{ content: { padding: 0 } }}
            open={open}
            onOpenChange={setOpen}
            forceRender
        >
            <Attachments
                ref={attachmentsRef}
                beforeUpload={() => false}
                items={items}
                onChange={({ fileList }) => setItems(fileList)}
                placeholder={type =>
                    type === 'drop' ?
                        { title: 'Drop file here' } :
                        { icon: <CloudUploadOutlined />, title: '附件上传', description: '点击或拖动文件到此处上传' }
                }
                getDropContainer={() => {
                    var _a;
                    return (_a = senderRef.current) === null || _a === void 0 ? void 0 : _a.nativeElement;
                }}
            />
        </Sender.Header>
    );

    return (
        <div className='AITemplateA01'>
            <div className='AITemplateA01__content'>



                {/* 
                <DevScrollView>
                    <div className='AITemplateA01__content__title'>
                        <Welcome
                            icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
                            title="欢迎使用AI助手"
                            description="基于xxxx,打造更卓越的智能视觉体验~"
                        />
                        <Think blink={true} loading={true} title={'模型分析中...'}>{'问题分析结果...'}</Think>
                    </div>
                </DevScrollView> */}

            </div>
            <Flex style={{ height: 220 }} align="end">
                <Sender
                    ref={senderRef}
                    header={senderHeader}
                    allowSpeech={true}
                    prefix={
                        <Button
                            type="text"
                            style={{ fontSize: 16 }}
                            icon={<PaperClipOutlined />}
                            onClick={() => setOpen(!open)}
                        />
                    }
                    value={text}
                    onChange={setText}
                    onPasteFile={files => {
                        var _a;
                        for (const file of files) {
                            (_a = attachmentsRef.current) === null || _a === void 0 ? void 0 : _a.upload(file);
                        }
                        setOpen(true);
                    }}
                    onSubmit={() => {
                        console.log(items, text)
                        setItems([]);
                        setText('');
                    }}
                />
            </Flex>
        </div>
    );
};

// 图片分析
// 音频输入
// 默认提示词
// 可用分析字段