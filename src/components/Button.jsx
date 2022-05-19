import React from 'react'
import { Editor, Element as SlateElement, Transforms } from 'slate'
import { useSlate } from 'slate-react'

const LIST_TYPES = ['numbered-list', 'bulleted-list']

// 判断文本属性是否为真
const isMarkActive = (format, editor) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

// 根据文本样式切换属性值
const toggleMark = (event, editor, format) => {
    event.preventDefault()
    const isActive = isMarkActive(format, editor)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
    // Transforms.setNodes(editor, { [format]: !isActive }, { match: n => Text.isText(n), split: true })
}

// 判断段落属性是否为真
const isBlockActive = (editor, format, blockType = 'type') => {
    const { selection } = editor
    if (!selection) return false

    const [match] = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: n =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                n[blockType] === format
        })
    )
    return !!match
}

// 根据段落样式切换属性值
const toggleBlock = (event, editor, format) => {
    event.preventDefault()
    const isActive = isBlockActive(editor, format, 'type') // 默认左对齐，不做居中
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: n =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            LIST_TYPES.includes(n.type),
        split: true
    })

    const newProperties = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format
    }
    Transforms.setNodes(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

const Button = ({ title, content, format, type = 'mark' }) => {
    const editor = useSlate()

    if (type === 'mark') {
        return (
            <button
                title={title}
                className={isMarkActive(format, editor) ? 'active' : ''}
                onMouseDown={(event) => {
                    toggleMark(event, editor, format)
                }}
            >
                {content}
            </button>
        )
    } else if (type === 'block') {
        return (
            <button
                title={title}
                className={isBlockActive(editor, format) ? 'active' : ''}
                onMouseDown={(event) => {
                    toggleBlock(event, editor, format)
                }}
            >
                {content}
            </button>
        )
    } else {
        return <button>none</button>
    }
}

export default Button
