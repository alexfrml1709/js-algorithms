import { len } from "./len"
import { isEqual } from "./is-equal"
import { isMore } from "./is-more"


/**
 * Функция возвращает, является ли первый аргумент больше или равен второму
 * @param {string} firstStr - первая строка 
 * @param {string} secondStr - вторая строка
 * @returns {boolean} - true если первый аргумент больше или равен второму, false если нет
 * @throws {TypeError} - если любой из аргументов не строка
 * @example
 *     isMoreOrEqual("hi", "hi"); // true
 *     isMoreOrEqual("hi", "hello"); // false
 *     isMoreOrEqual("hello", "hi"); // true
 */


export function isMoreOrEqual(firstStr, secondStr) {
    return isEqual(firstStr, secondStr) || isMore(firstStr, secondStr)
};