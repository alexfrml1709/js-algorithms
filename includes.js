import { len } from "./len.js"
import { indexOf } from "./index-of.js"


/**
 * Функция проверяет, содержит ли строка искомую подстроку
 * @param {string} str - исходная строка
 * @param {string} search - искомая подстрока
 * @returns {boolean} true если в строке найдена искомая подстрока, false если нет
 * @throws {TypeError} Если один из аргументов не строка
 * @example
 *     isIncludes("hello", "ll"); // true
 *     isIncludes("hello", "a");  // false
 */


export function isIncludes(str, search) {
    return indexOf(str, search) !== -1;
}