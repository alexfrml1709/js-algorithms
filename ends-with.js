import { len } from "./len.js"


/**
 * Функция проверяет, заканчивается ли первый аргумент на второй
 * @param {string} str - исходная строка
 * @param {string} search - искомое окончание
 * @returns {boolean} true если первый аргумент заканчивается на второй, false если нет
 * @throws {TypeError} - если один из аргументов не строка
 * @example
 *     endsWith("hello", "hell"); // false
 *     endsWith("hello", "lo"); // true
*/


export function endsWith(str, search) {
    if (typeof str !== "string" || typeof search !== "string") {
        throw new TypeError("Оба аргумента должны быть строками");
    };

    const strLength = len(str)
    const searchLength = len(search)
    let searchIndex = searchLength - 1;

    for (let i = strLength - 1; searchIndex >= 0; i--) {
        if (str[i] !== search[searchIndex]) {
            return false;
        }
        searchIndex--;
    }

    return true
}