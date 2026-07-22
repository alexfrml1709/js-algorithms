import { len } from "./len"
import { indexOf } from "./index-of"
import { substring } from "./substring"

/**
 * Функция заменяет в исходной строке 2-й аргумент на 3-й
 * @param {string} str - исходная строка
 * @param {string} search - слово, которое нужно заменить
 * @param {string} replacement - слово, на которое нужно заменить
 * @returns {string} исходный текст с измененным 2-м аргументом, на 3-й
 * @throws {TypeError} - если один из аргументов не строка
 * @example
 *     replace("hello world", "world", "everyone"); // "hello everyone"
 *     replace("hello", "qwe", "smthng"); // "hello"
*/


export function replace(str, search, replacement) {
    if (typeof str !== "string" || typeof search !== "string" || typeof replacement !== "string") {
        throw new TypeError("Все аргументы должны быть строками");
    }

    const searchIndex = indexOf(str, search)
    
    if (searchIndex === -1) {
        return str
    }

    const strLen = len(str)
    let result = ""
    const searchLen = len(search)
   
    for (let i = 0; i < strLen; i++) {
        if (i === searchIndex) {
            result += replacement
            i += searchLen -1
        } else {
            result += str[i]
        }
    }

    return result
}