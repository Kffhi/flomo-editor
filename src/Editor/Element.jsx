// Element关心的是比Text高一层级的Element实例，基本上是block的，除了一些特殊的例如超链接文本是inline
import React from 'react'
import { Transforms } from 'slate'
import { ReactEditor, useFocused, useSelected, useSlateStatic } from 'slate-react'

const Image = ({ attributes, children, element }) => {
    const editor = useSlateStatic()
    const path = ReactEditor.findPath(editor, element)
    const selected = useSelected()
    const focused = useFocused()

    return (
        <div {...attributes} className={'imgNode'}>
            <div contentEditable={false}>
                <div style={{ position: 'relative' }}>
                    <img
                        src={element.url}
                        className={(
                                       selected && focused
                                   ) ? 'elementImage selected' : 'elementImage'}
                    />
                    <button
                        onClick={() => Transforms.removeNodes(editor, { at: path })}
                        className={(
                                       selected && focused
                                   ) ? 'removeImgBtn selected' : 'removeImgBtn'}
                    >
                        💣
                    </button>
                </div>
            </div>
            <div className={'imgDesc'}>{children}</div>
        </div>
    )
}

const Element = (props) => {
    const { attributes, children, element } = props
    switch (element.type) {
        case 'list-item':
            return (
                <li {...attributes}>
                    {children}
                </li>
            )
        case 'bulleted-list':
            return (
                <ul {...attributes}>
                    {children}
                </ul>
            )
            break
        case 'numbered-list':
            return (
                <ol {...attributes}>
                    {children}
                </ol>
            )
            break
        case 'image':
            return <Image {...props} />
            break
        default:
            return (
                <p {...attributes}>
                    {children}
                </p>
            )
    }
}

export default Element