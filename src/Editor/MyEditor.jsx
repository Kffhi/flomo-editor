import React, { useState, useMemo, useCallback } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact, DefaultEditable } from 'slate-react'
import MyToolbar from './MyToolbar'
import Header from '../components/Header'

const Leaf = props => {
    let { attributes, children, leaf } = props
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }
    if (leaf.italic) {
        children = <i>{children}</i>
    }
    if (leaf.underline) {
        children = <u>{children}</u>
    }
    return <span {...attributes}>{children}</span>
}

const MyEditor = (props) => {
    const { valueChangeCB, initialValue } = props
    const [value, setValue] = useState(initialValue)
    const editor = useMemo(() => withReact(createEditor()), [])

    const handleValueChange = (newValue) => {
        setValue(newValue)
        valueChangeCB(newValue)
    }

    const renderLeaf = useCallback((props) => {
        return <Leaf {...props}/>
    }, [])

    return (
        <div className={'editorWrap'}>
            <Header text={'编辑器'} />
            <Slate
                editor={editor}
                value={value}
                onChange={(value) => handleValueChange(value)}
            >
                <Editable
                    className={'editableWrap'}
                    placeholder="随便输入"
                    renderLeaf={renderLeaf}
                />
                <MyToolbar editor={editor}></MyToolbar>
            </Slate>
        </div>
    )
}

export default MyEditor
