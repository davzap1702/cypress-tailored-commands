function parsePayload(str) {
    let pairs = str.split('&')
    const obj = {}

    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split('=')
        obj[pair[0]] = decodeURIComponent(pair[1].replace(/\+/g, ' '))
    }

    return obj;
}

export default parsePayload;
