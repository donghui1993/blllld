/**
 * 以字母开头
 * @param {string} letter 
 */
export const startAtLetter = letter => /^[a-zA-Z]/.test(letter)

export const findEndBreacket = (str, start = 0, left, right) => {
    let i = start;
    let bleft = 0;
    for (; i < str.length; i++) {
        bleft += str[i] === left ? 1 :
            str[i] === right ? -1 : 0
        if (bleft === 0) {
            return i;
        }
    }
    return -1;
}