import { len } from "./len"
import { isMore } from "./is-more"


/**
 * Функция возвращает меньше ли первый аргумент, чем второй
 * @param {string} firstStr - первая строка 
 * @param {string} secondStr - вторая строка
 * @returns {boolean} - true если первый агрумент меньше второго, false если нет
 * @throws {TypeError} - если любой из аргументов не строка
 * @example
 *     isLess("hi", "hello"); // true
 *     isLess("hi", "hi"); // false
 */


export function isLess(firstStr, secondStr) {
    if (firstStr === secondStr) {
        return false
    }

    return !isMore(firstStr, secondStr)
};