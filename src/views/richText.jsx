import MyEditor from '../Editor/MyEditor'
import Content from '../components/Content'
import Readonly from '../components/Readonly'
import { useState } from 'react'

const initialValue = [
    {
        type: 'paragraph', children: [
            {
                text: 'A line of text in a paragraph'
            }
        ]
    }
]

const RichText = () => {
    const [value, setValue] = useState(initialValue)

    const handleValueChange = newValue => {
        setValue(newValue)
    }

    return (
        <div className={'layout'}>
            <div className={'main'}>
                <MyEditor initialValue={initialValue} valueChangeCB={value => handleValueChange(value)}/>
            </div>
            <div className={'content'}>
                <Content contentText={value}/>
            </div>
            <div className={'readonly'}>
                <Readonly editorData={value}/>
            </div>
        </div>
    )
}

export default RichText