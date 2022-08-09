import Header from './Header'
import { createEditor } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'
import React, { useMemo, useCallback } from 'react'
import Leaf from '../Editor/Leaf'
import Element from '../Editor/Element'

const Readonly = ({ editorData }) => {
    const editor = useMemo(() => withReact(createEditor()), [])
    editor.children = editorData // 强制更新

    // 渲染文本
    const renderLeaf = useCallback((props) => {
        return <Leaf {...props}/>
    }, [])

    // 渲染段落
    const renderElement = useCallback((props) => {
        return <Element {...props}/>
    }, [])

    return (
        <div>
            <Header text={'只读编辑器'}/>
            <Slate
                editor={editor}
                value={editorData}
            >
                <Editable
                    className={'editableWrap'}
                    style={{ borderBottom: 'none' }}
                    renderLeaf={renderLeaf}
                    renderElement={renderElement}
                    readOnly
                />
            </Slate>
        </div>
    )
}

export default Readonly