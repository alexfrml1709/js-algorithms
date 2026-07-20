import { len } from "./len"
import { isEqual } from "./is-equal"


/**
 * Функция возвращает проверку неравенства между двумя аргументами
 * @param {string} firstStr - первая строка 
 * @param {string} secondStr - вторая строка
 * @returns {boolean} - true если аргументы не равны, false если равны
 * @throws {TypeError} - если любой из аргументов не строка
 * @example
 *     isNotEqual("hi", "hi"); // false
 *     isNotEqual("hi", "hello"); // true
 */


export function isNotEqual(firstStr, secondStr) {
    return !isEqual(firstStr, secondStr);
}