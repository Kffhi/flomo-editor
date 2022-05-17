import React, { useState, useMemo, useCallback } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import MyToolbar from './MyToolbar'
import Header from '../components/Header'
import Leaf from './Leaf'
import Element from './Element'

const MyEditor = (props) => {
    const { valueChangeCB, initialValue } = props
    const [value, setValue] = useState(initialValue)
    const editor = useMemo(() => withReact(createEditor()), [])

    // 通知外部组件修改数据
    const handleValueChange = (newValue) => {
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
        <div className={'editorWrap'}>
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
