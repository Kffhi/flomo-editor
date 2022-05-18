// Element关心的是比Text高一层级的Element实例，基本上是block的，除了一些特殊的例如超链接文本是inline
import React from 'react'

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
        default:
            return (
                <p {...attributes}>
                    {children}
                </p>
            )
    }
}

export default Element