// Element关心的是比Text高一层级的Element实例，基本上是block的，除了一些特殊的例如超链接文本是inline
import React from 'react'

const Element = (props) => {
    const { attributes, children, element } = props
    return <span {...attributes}>{children}</span>
}

export default Element