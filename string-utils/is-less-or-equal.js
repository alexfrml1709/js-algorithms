import { len } from "./len"
import { isEqual } from "./is-equal"
import { isMore } from "./is-more"


/**
 * Функция возвращает, является ли первый аргумент меньше или равен второму
 * @param {string} firstStr - первая строка 
 * @param {string} secondStr - вторая строка
 * @returns {boolean} - true если аргументы меньше или равны, false если нет
 * @throws {TypeError} - если любой из аргументов не строка
 * @example
 *     isLessOrEqual("hi", "hi"); // true
 *     isLessOrEqual("hi", "hello"); // true
 *     isLessOrEqual("hello", "hi"); // false
 */


export function isLessOrEqual(firstStr, secondStr) {
    return isEqual(firstStr, secondStr) || !isMore(firstStr, secondStr)
};