import React from 'react'
import Button from '../components/Button'

const MyToolbar = () => {
    return (
        <div className={'toolbarWrap'}>
            <Button title={'加粗'} format={'bold'} content={'B'}/>
            <Button title={'斜体'} format={'italic'} content={'I'}/>
            <Button title={'下划线'} format={'underline'} content={'U'}/>
            <Button title={'无序列表'} format={'bulleted-list'} content={'⨀'} type={'block'}/>
            <Button title={'有序列表'} format={'numbered-list'} content={'①'} type={'block'}/>
            <Button title={'标签'} format={'tag'} content={'#'} type={'block'}/>
            <Button title={'图片'} format={'pic'} content={'🖼'} type={'block'}/>
        </div>
    )
}

export default MyToolbar
