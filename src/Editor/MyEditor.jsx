import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { createEditor, Editor } from 'slate'
import { Slate, Editable, withReact, useSlate } from 'slate-react'
import MyToolbar from './MyToolbar'
import Header from '../components/Header'
import Leaf from './Leaf'
import Element from './Element'

const MyEditor = (props) => {
    const { valueChangeCB, initialValue } = props
    const [value, setValue] = useState(initialValue)
    const editor = useMemo(() => withReact(createEditor()), [])
    const editorRef = useRef(null)

    // 增加键盘事件监听
    const addListener = () => {
        editorRef.current.addEventListener('keydown', (event) => {
            if (!event.isComposing) {
                const marks = Editor.marks(editor)
                const { tag: isTag = false } = marks

                // 如果当前节点已经是tag，发现输入空格，那就变回普通节点
                if ((
                    event.key === ' ' || event.key === 'Enter'
                ) && isTag) {
                    Editor.removeMark(editor, 'tag')
                }

                // 如果输入#，那就自动变成tag
                if ((
                    event.key === '#' || (
                        // TODO: 为什么中文的 # 号的key是Process啊
                        event.key === 'Process' && event.code === 'Digit3'
                    )
                ) && !isTag) {
                    // const tag = { text: '#', tag: true }
                    Editor.addMark(editor, 'tag', true)
                }

            }
        })
    }

    useEffect(() => {
        addListener()
    }, [])

    // 通知外部组件修改数据
    const handleValueChange = (newValue, e, l) => {
        setValue(newValue)
        valueChangeCB(newValue)
    }

    // 渲染文本
    const renderLeaf = useCallback((props) => {
        return <Leaf {...props}/>
    }, [])

    // 渲染段落
    const renderElement = useCallback((props) => {
        return <Element {...props}/>
    }, [])

    return (
        <div className={'editorWrap'} ref={editorRef}>
            <Header text={'编辑器'}/>
            <Slate
                editor={editor}
                value={value}
                onChange={(value) => handleValueChange(value)}
            >
                <Editable
                    className={'editableWrap'}
                    placeholder="随便输入"
                    renderLeaf={renderLeaf}
                    renderElement={renderElement}
                />
                <MyToolbar editor={editor}></MyToolbar>
            </Slate>
        </div>
    )
}

export default MyEditor
