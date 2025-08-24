export function checkHeading(str) {
    return /(\*)(\*)(.*)\*$/.test(str)
}

export function replaceHeadingAstrick(str) {
    return str.replace(/^(\*)(\*)|(\*)$/g, '')
}