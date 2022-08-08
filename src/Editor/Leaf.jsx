// Leaf关心的是最底层的Text实例，inline的，参考链接：https://juejin.cn/post/6917123466307698696
import React from 'react'

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
    if (leaf.tag) {
        children = <span className={'tagNodeWrap'}>{children}</span>
    }
    return <span {...attributes}>{children}</span>
}

export default Leaf
