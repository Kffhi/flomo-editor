import React, { useEffect, useRef, useState } from 'react'
import { Editor, Range } from 'slate'
import { useFocused, useSlate } from 'slate-react'
import useTagSelect from '../plugin/useTagSelect'

const TagSelect = ({ editor }) => {
    const ref = useRef()

    useEffect(() => {
        const el = ref.current

        if (!el) return

        if (!useTagSelect.isShow()) {
            el.removeAttribute('style')
            return
        }

        const domSelection = window.getSelection()
        const domRange = domSelection.getRangeAt(0)
        const rect = domRange.getBoundingClientRect()

        el.style.opacity = '1'
        el.style.top = `${rect.top + window.scrollY - el.offsetHeight}px`
        el.style.left = `${rect.left + window.scrollX + rect.width / 2}px`
    })

    const handleSelectTag = data => {
        console.log('value', data)
        editor.insertText(data.value + ' ')
        editor.removeMark('tag')
        useTagSelect.setVisibility(false)
    }

    return (
        <div ref={ref} className={'tagSelectWrap'} onMouseDown={e => e.preventDefault()}>
            {['标签1', '标签2', '标签3'].map(item => {
                return (
                    <div key={item} onClick={() => handleSelectTag({ value: item })} className={'tagItem'}>{item}</div>
                )
            })}
        </div>
    )
}

export default TagSelect
