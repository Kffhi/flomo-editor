import React from 'react'
import { Editor } from 'slate'
import { useSlate } from 'slate-react'

// 判断节点属性是否为真
const isFormatActive = (format, editor) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

// 根据样式切换属性值
const toggleFormat = (event, editor, format) => {
    event.preventDefault()
    const isActive = isFormatActive(format, editor)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
    // Transforms.setNodes(editor, { [format]: !isActive }, { match: n => Text.isText(n), split: true })
}

const Button = ({ title, content, format }) => {
    const editor = useSlate()

    return (
        <button
            title={title}
            className={isFormatActive(format, editor) ? 'active' : ''}
            onMouseDown={(event) => {
                toggleFormat(event, editor, format)
            }}
        >
            {content}
        </button>
    )
}

export default Button
