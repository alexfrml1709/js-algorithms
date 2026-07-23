import { len } from "./len"
import { substring } from "./substring"


/**
 * Функция возвращает подстроку в диапазоне указанных индексов, работает с отрицательными индексами
 * @param {string} str - вводная строка
 * @param {number} start - первый индекс искомой строки
 * @param {number} end - последний индекс искомой строки (не учитывается при выводе)
 * @returns {string} строка, с начальным индексом start и конечным end - 1
 * @example
 *     slice("hello", 1, 3); // "el"
 *     slice("hello", )
 */


export function slice(str, start, end) {
    if (start > end && end >= 0) {
        return ""
    }

    const strLen = len(str)

    if (start < 0 && -start > strLen) {
        start = 0
    } else if (start < 0) {
        start += strLen
    }

    if (end < 0) {
        end += strLen
    }

    return substring(str, start, end)
}