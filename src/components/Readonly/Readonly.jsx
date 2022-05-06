import Header from '../Header'
import { createEditor } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'
import React, { useMemo } from 'react'

const Readonly = ({ editorData }) => {
    const editor = useMemo(() => withReact(createEditor()), [])
    console.log('props change, but not reRendering', editorData)
    return (
        <div>
            <Header text={'只读编辑器'}/>
            <Slate
                editor={editor}
                value={editorData}
            >
                <Editable
                    className={'editableWrap'}
                    style={{ borderBottom: 'none' }}
                    readOnly
                />
            </Slate>
        </div>
    )
}

export default Readonly