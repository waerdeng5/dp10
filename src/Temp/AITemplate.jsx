import './AITemplate.scss'
import { App, Button, Flex, Avatar, Image } from 'antd'
import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { Attachments, Sender, Welcome, Think, Bubble, Actions } from '@ant-design/x'
import { CloudUploadOutlined, PaperClipOutlined } from '@ant-design/icons'
import { AntDesignOutlined, CopyOutlined, RedoOutlined, UserOutlined } from '@ant-design/icons'
import { axiosFile } from '../Utils/Api'

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

const genItem = (isAI, config, contentData) => {
    const { type, content, annexList, audioList } = contentData
    // 内容类型
    // 内容附件
    // 内容文本
    // 内容音频

    const ContentTemp = () => {
        console.log(type, content, annexList, audioList)


        return (
            <div>
                {annexList.length !== 0 && (
                    annexList.map((v, i) => {
                        return (
                            <Image key={i} width={80} alt="basic" src={v.url} />
                        )
                    })
                )}
                <div >{content}</div>
            </div>
        )
    }


    return Object.assign(
        { key: getKey(), role: isAI ? 'ai' : 'user', content: <ContentTemp /> },
        config,
    );
};

export const AITemplateA01 = ({ AIconfig, FORMEVENT }) => {
    const { message, notification, modal } = App.useApp()
    const {
        A02_ai_annex, A02_ai_audio, A02_ai_welcome, A02_ai_default_text,
        ai_urser_typing, ai_urser_avatar, ai_urser_avatar_url, ai_urser_header, ai_urser_header_text,
        ai_urser_placement, ai_urser_variant, ai_urser_shape, ai_urser_footer, ai_urser_footerPlacement,
        ai_text_typing, ai_text_avatar, ai_text_avatar_url, ai_text_header, ai_text_header_text,
        ai_text_placement, ai_text_variant, ai_text_shape, ai_text_footer, ai_text_footerPlacement,
        A02_ai_annex_url, A02_ai_welcome_image, A02_ai_welcome_title, A02_ai_welcome_content,

        ai_method, ai_url, ai_params, ai_path, ai_annex, ai_render, ai_render_field, ai_back_field,



    } = AIconfig

    const listRef = useRef(null)
    const senderRef = useRef(null)
    const attachmentsRef = useRef(null)

    const [text, setText] = useState(A02_ai_default_text)
    const [open, setOpen] = useState(false)

    const [items, setItems, add] = useBubbleList()
    const [AnnexItems, setAnnexItems] = useState([])
    const [AnnexList, setAnnexList] = useState([])

    const [loading, setLoading] = useState(false)

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
                onChange={async ({ file, fileList }) => {
                    const { uid, status } = file
                    if (!status) {
                        const [err, res] = await axiosFile(A02_ai_annex_url, [{ key: 'file', value: file }])
                        if (err) return console.log('上传失败')
                        const { uuid, fileUrl, originalName } = res.data
                        const fileData = [...AnnexList, { uid, uuid, url: fileUrl, originalName }]
                        FORMEVENT.emit({ type: 'aiAnnex', data: fileData })
                        setAnnexList(fileData)
                    }
                    setAnnexItems(fileList)
                }}
                placeholder={type =>
                    type === 'drop' ?
                        { title: 'Drop file here' } :
                        { icon: <CloudUploadOutlined />, title: '附件上传', description: '点击此处上传文件' }
                }
                getDropContainer={() => {
                    var _a;
                    return (_a = senderRef.current) === null || _a === void 0 ? void 0 : _a.nativeElement;
                }}
                onRemove={(e) => {
                    const { uid } = e
                    const fileData = AnnexList.filter(v => v.uid !== uid)
                    FORMEVENT.emit({ type: 'aiAnnex', data: fileData })
                    setAnnexList(fileData)
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
                avatar: () => ai_urser_avatar ? < Avatar icon={ICONMapping[ai_urser_avatar_url]} /> : false,
                footer: content => ai_urser_footer ? <Actions items={actionItems} onClick={() => console.log('footer', content)} /> : false,
                footerPlacement: ai_urser_footerPlacement

            },
        }),
        [],
    );

    return (
        <div className='AITemplateA01'>
            <div className='AITemplateA01__content'>
                {A02_ai_welcome && <Welcome icon={A02_ai_welcome_image} title={A02_ai_welcome_title} description={A02_ai_welcome_content} />}
                <Bubble.List
                    ref={listRef}
                    role={memoRole}
                    items={items}
                />
            </div>
            <Flex style={{ maxHeight: 220 }} align="end">
                <Sender
                    loading={loading}
                    readOnly={loading}
                    autoSize={{ maxRows: 6 }}
                    ref={senderRef}
                    allowSpeech={A02_ai_audio}
                    header={A02_ai_annex && senderHeader}
                    prefix={A02_ai_annex && <Button type="text" style={{ fontSize: 16 }} icon={<PaperClipOutlined />} onClick={() => setOpen(!open)} />}
                    value={text}
                    onChange={setText}
                    onPasteFile={files => {
                        var _a;
                        for (const file of files) { (_a = attachmentsRef.current) === null || _a === void 0 ? void 0 : _a.upload(file) }
                        setOpen(true)
                    }}
                    onSubmit={async (e) => {
                        console.log(e)
                        // 附件判定 已有数据
                        if (ai_annex && !AnnexList.length) return message.warning('请上传附件')
                        // setLoading(true)
                        // add(genItem(false, { typing: false }, { type: 'text', content: text, annexList: AnnexList || [], audioList: [] }))

                        // const files = AnnexList.map(v => v.url).join(',')
                        // const params = [{ key: 'files', value: files }, { key: 'prompt', value: text },{key:'audio'}]
                        // const [err, res] = await axiosFile(ai_url, params)
                        // if (err) return
                        // console.log(res)



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