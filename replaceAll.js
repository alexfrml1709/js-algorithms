import { len } from "./len"
import { substring } from "./substring"


/**
 * Функция заменяет в исходной строке все вхождения подстроки на 3-й агрумент
 * @param {string} str - исходная строка
 * @param {string} search - подстрока, которую нужно заменить
 * @param {string} replacement - подстрока, на которую нужно заменить
 * @returns {string} исходный текст с измененным 2-м аргументом, на 3-й
 * @throws {TypeError} - если один из аргументов не строка
 * @example
 *     replaceAll("hello world", "world", "everyone"); // "hello everyone"
 *     replaceAll("banana", "na", "ba"); // "bababa"
*/


export function replaceAll(str, search, replacement) {
    if (typeof str !== "string" || typeof search !== "string" || typeof replacement !== "string") {
        throw new TypeError("Все аргументы должны быть строками");
    }

    let result = "";
    const strLen = len(str);
    const searchLen = len(search);

    if (searchLen === 0) {
        for (let i = 0; i < strLen; i++) {
            result += replacement;
            result += str[i];
        }
        
        result += replacement;

        return result;
    }

    for (let i = 0; i < strLen; i++) {
        let isMatch = false;

        if (i + searchLen <= strLen) {
            isMatch = true;
            for (let j = 0; j < searchLen; j++) {
                if (str.charCodeAt(i + j) !== search.charCodeAt(j)) {
                    isMatch = false;
                    break;
                }
            }
        }

        if (isMatch) {
            result += replacement;
            i += searchLen - 1;
        } else {
            result += str[i];
        }
    }

    return result;
}