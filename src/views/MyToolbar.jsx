import React from 'react'
import { Text, Editor, Transforms } from 'slate'

// 判断节点属性是否为真
const isFormatActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: n => n[format] === true,
        universal: true
    })

    return !!match
}

// 根据样式切换属性值
const toggleFormat = (event, editor, format) => {
    event.preventDefault()
    const isActive = isFormatActive(editor, format)

    Transforms.setNodes(
        editor,
        { [format]: isActive ? false : true },
        { match: n => Text.isText(n), split: true }
    )
}

const MyToolbar = ({ editor }) => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            padding: '10px 20px',
            alignItems: 'center',
            margin: '0 auto',
            marginTop: 50,
            border: '1px solid grey',
            boxSizing: 'border-box'
        }}
        >
            <button
                style={{
                    marginRight: 20
                }}
                onMouseDown={(event) => {
                    toggleFormat(event, editor, 'bold')
                }}
            >
                B
            </button>
            <button
                style={{
                    marginRight: 20
                }}
                onMouseDown={(event) => {
                    toggleFormat(event, editor, 'italic')
                }}
            >
                I
            </button>
            <button
                style={{
                    marginRight: 20
                }}
                onMouseDown={(event) => {
                    toggleFormat(event, editor, 'underline')
                }}
            >
                U
            </button>
        </div>
    )
}

export default MyToolbar
