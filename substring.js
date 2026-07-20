import { len } from "./len"


/**
 * Функция возвращает подстроку в диапазоне указанных индексов
 * @param {string} str - вводная строка
 * @param {number} start - первый индекс искомой строки
 * @param {number} end - последний индекс искомой строки (не учитывается при выводе)
 * @returns {string} строка, с начальным индексом start и конечным end - 1
 * @example
 *     substring("hello", 1, 3); // "el"
 */
 

export function substring(str, start, end = len(str)) {
    if (typeof str !== "string") {
        throw new TypeError("str должен быть строкой")
    }

    if (typeof start !== "number") {
        throw new TypeError("start должен быть числом")
    }

    if (typeof end !== "number") {
        throw new TypeError("end должен быть числом")
    }

    const strLength = len(str)

    if (start >= strLength) {
        return ""
    }

    if (start < 0 || start !== start) {
        start = 0
    }

    if (end < 0 || end !== end) {
        end = 0
    }

    if (end > strLength) {
        end = strLength
    }
    
    if (start > end) {
        const tempNum = start
        start = end
        end = tempNum
    }

    let result = ""
    for (let i = start; i < end; i++) {
        result += str[i]
    }

    return result
}