import { len } from "./len"
import { substring } from "./substring"


/**
 * Функция удаляет пробелы в начале и конце строки
 * @param {string} str - исходная строка
 * @returns {string} строка без пробелов в начале и конце
 * @throws {TypeError} - если аргумент не строка
 * @example
 *     trim("   hi hello"  ); // "hi hello"
*/


export function trim(str) {
    if (typeof str !== "string") {
        throw new TypeError("Аргумент должен быть строкой")
    }

    const strLength = len(str)
    let firstIndex
    let lastIndex

    for (let i = 0; i < strLength; i++) {
        if (str[i].charCodeAt(0) !== 32) {
            firstIndex = i
            break
        }
    }

    if (firstIndex === undefined) {
        return ""
    }

    for (let i = strLength - 1; i >= 0; i--) {
        if (str[i].charCodeAt(0) !== 32) {
            lastIndex = i + 1
            break
        }
    }

    return substring(str, firstIndex, lastIndex)
}