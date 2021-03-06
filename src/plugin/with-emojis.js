const letterEmojis = {
    a: '๐',
    b: '๐ป',
    c: '๐ฑ',
    d: '๐ถ',
    e: '๐',
    f: '๐ฆ',
    g: '๐ฆ',
    h: '๐ต',
    i: '๐ฆ',
    j: '๐ฆ',
    k: '๐ฆ',
    l: '๐ฆ',
    m: '๐ญ',
    n: '๐ฎ',
    o: '๐',
    p: '๐ผ',
    q: '๐ง',
    r: '๐ฐ',
    s: '๐ท',
    t: '๐ฏ',
    u: '๐',
    v: '๐ฆ',
    w: '๐ฆ',
    x: '๐ฆ',
    y: '๐ณ',
    z: '๐ฆ'
}

const withEmojis = (editor) => {
    const { insertText } = editor

    // ้ๅeditor็insertTextๆนๆณ
    editor.insertText = (text) => {
        if (letterEmojis[text.toLocaleLowerCase()]) {
            text = letterEmojis[text]
        }
        insertText(text)
    }

    return editor
}

export default withEmojis