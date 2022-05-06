import React, { useState } from 'react'

const TreeElement = ({ attributes, children, element }) => {
    const { checked, label } = element
    const [ isChecked, setIsChecked ] = useState(checked)

    const onChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div {...attributes}>
            <p
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
                contentEditable={false}
            >
                <input
                    type="checkbox"
                    style={{
                        width: 20
                    }}
                    checked={isChecked}
                    onChange={onChange}
                />
                <label>{label}</label>
            </p>
            {isChecked ? <div style={{ paddingLeft: 20 }}>{children}</div> : null}
        </div>
    )
}

export default TreeElement