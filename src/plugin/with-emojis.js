const letterEmojis = {
    a: '🐜',
    b: '🐻',
    c: '🐱',
    d: '🐶',
    e: '🐘',
    f: '🦊',
    g: '🐦',
    h: '🐵',
    i: '🦄',
    j: '🦋',
    k: '🦀',
    l: '🦁',
    m: '🐭',
    n: '🐮',
    o: '🐋',
    p: '🐼',
    q: '🐧',
    r: '🐰',
    s: '🕷',
    t: '🐯',
    u: '🐍',
    v: '🦖',
    w: '🦕',
    x: '🦛',
    y: '🐳',
    z: '🦓'
}

const withEmojis = (editor) => {
    const { insertText } = editor

    // 重写editor的insertText方法
    editor.insertText = (text) => {
        if (letterEmojis[text.toLocaleLowerCase()]) {
            text = letterEmojis[text]
        }
        insertText(text)
    }

    return editor
}

export default withEmojis