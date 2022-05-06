import Header from '../Header'

const Content = ({ contentText }) => {
    return (
        <div>
            <Header text={'内容数据'} />
            {JSON.stringify(contentText)}
        </div>
    )
}

export default Content