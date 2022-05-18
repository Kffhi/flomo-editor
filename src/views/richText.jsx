import MyEditor from '../Editor/MyEditor'
import Content from '../components/Content'
import Readonly from '../components/Readonly'
import { useState } from 'react'

const initialValue = [
    {
        "type": "paragraph",
        "children": [
            {
                "text": "普通文本"
            },
            {
                "text": "加粗",
                "bold": true
            },
            {
                "text": "普通文本"
            },
            {
                "text": "斜体",
                "italic": true
            }
        ]
    },
    {
        "type": "bulleted-list",
        "children": [
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "无"
                    },
                    {
                        "text": "序列",
                        "bold": true,
                        "italic": true
                    },
                    {
                        "text": "表"
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "列表项"
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": ""
                    }
                ]
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": "普通文本"
            }
        ]
    },
    {
        "type": "numbered-list",
        "children": [
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "有序列表"
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "列表+1111"
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "再来"
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": ""
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": ""
                    }
                ]
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