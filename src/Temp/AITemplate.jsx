import './AITemplate.scss'
import { App, Button, Flex, Avatar } from 'antd'
import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { Attachments, Sender, Welcome, Think, Bubble, Actions } from '@ant-design/x'
import { CloudUploadOutlined, PaperClipOutlined } from '@ant-design/icons'
import { AntDesignOutlined, CopyOutlined, RedoOutlined, UserOutlined } from '@ant-design/icons'



import { ICONMapping } from '../Config/IconMapping'


function useBubbleList(initialItems = []) {
    const [items, setItems] = useState(initialItems);
    const appendItem = useCallback(item => {
        setItems(prev => [...prev, item]);
    }, []);
    return [items, setItems, appendItem];
}

const actionItems = [
    { key: 'retry', icon: <RedoOutlined />, label: 'Retry' },
    { key: 'copy', icon: <CopyOutlined />, label: 'Copy' },
];

let id = 0;
const getKey = () => `bubble_${id++}`;
const genItem = (isAI, config, repeat = 50) => {
    return Object.assign(
        {
            key: getKey(),
            role: isAI ? 'ai' : 'user',
            content: `${id} : ${isAI ? 'Mock AI content'.repeat(repeat) : 'Mock user content.'}`,
        },
        config,
    );
};

export const AITemplateA01 = ({ AIconfig }) => {

    const {
        A02_ai_annex, A02_ai_audio, A02_ai_welcome, A02_ai_default_text,
        ai_urser_typing, ai_urser_avatar, ai_urser_avatar_url, ai_urser_header, ai_urser_header_text,
        ai_urser_placement, ai_urser_variant, ai_urser_shape, ai_urser_footer, ai_urser_footerPlacement,
        ai_text_typing, ai_text_avatar, ai_text_avatar_url, ai_text_header, ai_text_header_text,
        ai_text_placement, ai_text_variant, ai_text_shape, ai_text_footer, ai_text_footerPlacement
    } = AIconfig







    const listRef = useRef(null)
    const senderRef = useRef(null)
    const attachmentsRef = useRef(null)

    const [text, setText] = useState(A02_ai_default_text)
    const [open, setOpen] = useState(false)

    const [items, setItems, add] = useBubbleList()
    const [AnnexItems, setAnnexItems] = useState([])

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
                items={AnnexItems}
                onChange={({ fileList }) => setAnnexItems(fileList)}
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






    const memoRole = useMemo(
        () => ({
            ai: {
                shape: ai_text_shape,
                variant: ai_text_variant,
                placement: ai_text_placement,
                typing: ai_text_typing,
                header: ai_text_header ? ai_text_header_text : false,
                avatar: () => ai_text_avatar ? <Avatar icon={ICONMapping[ai_text_avatar_url]} /> : false,
                footer: content => ai_text_footer ? <Actions items={actionItems} onClick={() => console.log('footer', content)} /> : false,
                footerPlacement: ai_text_footerPlacement
            },
            user: {
                shape: ai_urser_shape,
                variant: ai_urser_variant,
                placement: ai_urser_placement,
                typing: ai_urser_typing,
                header: ai_urser_header ? ai_urser_header_text : false,
                avatar: () => ai_text_avatar ? < Avatar icon={ICONMapping[ai_urser_avatar_url]} /> : false,
                footer: content => ai_urser_footer ? <Actions items={actionItems} onClick={() => console.log('footer', content)} /> : false,
                footerPlacement: ai_urser_footerPlacement

            },
        }),
        [],
    );


    useEffect(() => {
        setItems([
            // genItem(false, { typing: false }),
            // genItem(true, { typing: false }),
            // genItem(false, { typing: false }),
            // genItem(true, { typing: false }),
            // genItem(false, { typing: false }),
            // genItem(true, { typing: false }),
            // genItem(false, { typing: false }),
            // genItem(true, { typing: false }),
            genItem(false, { typing: false }),
            genItem(true, { typing: true }, 20),
        ]);
    }, []);


    return (
        <div className='AITemplateA01'>
            <div className='AITemplateA01__content'>
                {A02_ai_welcome &&
                    <Welcome
                        icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
                        title="欢迎使用AI助手"
                        description="打造更卓越的智能视觉体验~"
                    />
                }
                <Bubble.List
                    ref={listRef}
                    role={memoRole}
                    items={items}
                />
            </div>
            <Flex style={{ maxHeight: 220 }} align="end">
                <Sender
                    loading={false}
                    readOnly={false}
                    autoSize={{ maxRows: 6 }}
                    ref={senderRef}
                    allowSpeech={A02_ai_audio}
                    header={A02_ai_annex && senderHeader}
                    prefix={A02_ai_annex && <Button type="text" style={{ fontSize: 16 }} icon={<PaperClipOutlined />} onClick={() => setOpen(!open)} />}
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
                        // setItems([]);
                        // setText('');
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