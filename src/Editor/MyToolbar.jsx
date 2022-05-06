import React from 'react'
import { Text, Editor, Transforms } from 'slate'

// 判断节点属性是否为真
const isFormatActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: n => n[format] === true, universal: true
    })

    return !!match
}

// 根据样式切换属性值
const toggleFormat = (event, editor, format) => {
    event.preventDefault()
    const isActive = isFormatActive(editor, format)
    console.log('isActive', isActive)

    Transforms.setNodes(editor, { [format]: isActive ? false : true }, { match: n => Text.isText(n), split: true })
}

const MyToolbar = ({ editor }) => {
    return (
        <div className={'toolbarWrap'}>
            <button
                title={'加粗'}
                onMouseDown={(event) => {
                    toggleFormat(event, editor, 'bold')
                }}
            >
                B
            </button>
            <button
                title={'斜体'}
                onMouseDown={(event) => {
                    toggleFormat(event, editor, 'italic')
                }}
            >
                I
            </button>
            <button
                title={'下划线'}
                onMouseDown={(event) => {
                    toggleFormat(event, editor, 'underline')
                }}
            >
                U
            </button>
            <button
                title={'无序列表'}
                onMouseDown={(event) => {
                    console.log('无序列表', event)
                }}
            >
                ⨀
            </button>
            <button
                title={'有序列表'}
                onMouseDown={(event) => {
                    console.log('有序列表', event)
                }}
            >
                ①
            </button>
            <button
                title={'标签'}
                onMouseDown={(event) => {
                    console.log('标签', event)
                }}
            >
                #
            </button>
            <button
                title={'图片'}
                onMouseDown={(event) => {
                    console.log('图片', event)
                }}
            >
                🖼
            </button>
        </div>
    )
}

export default MyToolbar
