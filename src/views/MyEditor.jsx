import React, { useState, useMemo, useCallback } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import MyToolbar from './MyToolbar'
import './MyEditor.css'

const initialValue = [
    {
        type: 'paragraph', children: [
            {
                text: 'A line of text in a paragraph'
            }
        ]
    }
]

const Leaf = (props) => {
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

const MyEditor = () => {
    const [value, setValue] = useState(initialValue)
    const editor = useMemo(() => withReact(createEditor()), [])

    const renderLeaf = useCallback((props) => {
        return <Leaf {...props}/>
    }, [])

    return (
        <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
            <MyToolbar editor={editor}></MyToolbar>
            <Editable
                style={{
                    width: '100%',
                    height: 300,
                    padding: 20,
                    border: '1px solid grey',
                    borderTop: 'none',
                    boxSizing: 'border-box'
                }}
                placeholder="随便输入"
                renderLeaf={renderLeaf}
            />
        </Slate>
    )
}

export default MyEditor
