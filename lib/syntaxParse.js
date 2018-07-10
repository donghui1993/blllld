import { startAtLetter, findEndBreacket } from "./jugemenet";

// div.container{@text}

export const syntaxParse = function (syntax) {
    return syntaxSpliter(syntax)
}

/**
 * 按照class，id，attr，props语句拆分
 * @param {string} syntax 
 */
const syntaxSpliter = function (syntax) {
    const _syntax = Array.prototype.slice.call(syntax)
    const spliter = {
        id: null,
        className: [],
        attr: [],
        text: null,
        tag: null
    };
    for (let i = 0; i < _syntax.length;) {
        let element = _syntax[i];
        if (i === 0 && startAtLetter(element)) {
            // 以字母开头则当前可能是一个html标签
            let matchLetter = syntax.match(/^[a-zA-Z][\w]*/)[0];
            spliter.tag = matchLetter;
            _syntax.splice(0, matchLetter.length);
            // 将修改后的文字重新归纳
            syntax = _syntax.join("");
            i = 0
            continue;
        }
        if (element === '.') {
            // 从当前元素向后的内容为class名称
            let matchLetter = syntax.match(/^\.([a-zA-Z_][\w\-_]*)/);
            if(matchLetter === null){
                console.log('class start at dot but got ' + syntax[0])
            }
            spliter.className.push(matchLetter[1]);
            _syntax.splice(i, matchLetter[0].length);
            // 将修改后的文字重新归纳
            syntax = _syntax.join("");
            i = 0
            continue;
        }
        if (element === '#') {
            // 从当前元素向后的内容为class名称
            let matchLetter = syntax.match(/^#([a-zA-Z_][\w\-_]*)/);
            spliter.id = matchLetter[1];
            _syntax.splice(i, matchLetter[0].length);
            // 将修改后的文字重新归纳
            syntax = _syntax.join("");
            i = 0
            continue;
        }
        if (element === '[') {
            // 从当前元素向后的内容为class名称
            let endBreacketIndex = findEndBreacket(syntax, i, '[', ']');
            let breack = _syntax.splice(i, endBreacketIndex + 1);
            breack.pop();
            breack.shift();
            spliter.attr.push(breack.join(""));
            // 将修改后的文字重新归纳
            syntax = _syntax.join("");
            i = 0
            continue;
        }
        if (element === '{') {
            // 从当前元素向后的内容为class名称
            let endBreacketIndex = findEndBreacket(syntax, i, '{', '}');
            let breack = _syntax.splice(i, endBreacketIndex + 1);
            breack.pop();
            breack.shift();
            spliter.text = breack.join("");
            // 将修改后的文字重新归纳
            syntax = _syntax.join("");
            i = 0
            continue;
        }
        i++
    }
    return spliter;
}