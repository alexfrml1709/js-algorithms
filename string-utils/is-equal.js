import { len } from "./len"


/**
 * Функция возвращает равны ли аргументы
 * @param {string} firstStr - первая строка 
 * @param {string} secondStr - вторая строка
 * @returns {boolean} - true если аргументы равны, false если не равны
 * @throws {TypeError} - если любой из аргументов не строка
 * @example
 *     isEqual("hi", "hi"); // true
 *     isEqual("hi", "hello"); // false
 */


export function isEqual(firstStr, secondStr) {
    if (typeof firstStr !== "string" || typeof secondStr !== "string") {
        throw new TypeError("Оба аргумента должны быть строками")
    }

    const firstStrLength = len(firstStr)
    const secondStrLength = len(secondStr)
    
    if (firstStrLength !== secondStrLength) {
        return false
    }

    for (let i = 0; i < firstStrLength; i++) {
        if (firstStr[i].charCodeAt(0) !== secondStr[i].charCodeAt(0)) {
            return false
        }
    }
    return true
}