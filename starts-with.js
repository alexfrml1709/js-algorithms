import { len } from "./len.js"


/**
 * Функция проверяет, начинается ли первый аргумент на второй
 * @param {string} str - исходная строка
 * @param {string} search - искомое начало
 * @returns {boolean} true если первый аргумент начинается на второй, false если нет
 * @throws {TypeError} - если один из аргументов не строка
 * @example
 *     startsWith("hello", "hell"); // true
 *     startsWith("hello", "lo"); // false
*/


export function startsWith(str, search) {
    if (typeof str !== "string" || typeof search !== "string") {
        throw new TypeError("Оба аргумента должны быть строками");
    };

    const strLength = len(str)
    const searchLength = len(search)

    if (searchLength > strLength) {
        return false
    }

    for (let i = 0; i < searchLength; i++) {
        if (str[i] !== search[i]) {
            return false
        }
    }

    return true
}