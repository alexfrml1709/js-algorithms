/**
 * Функция повторяет указанную строку
 * @param {string} str - исходная строка
 * @param {number} count - Количество повторений строки
 * @returns {string} строка, повторенная count раз
 * @throws {RangeError} - если второй аргумент меньше нуля
 * @throws {TypeError} - если первый аргумент не строка
 * @example
 *     repeat("hi", 2); // "hihi"
*/


export function repeat(str, count = 0) {
    if (count < 0) {
        throw new RangeError("count должен быть больше -1")
    };

    if (typeof str !== "string" || typeof count !== "number") {
        throw new TypeError("str должен быть строкой, a count - числом");
    };

    let finalStr = ""
    const intCount = count - (count % 1)

    for (let i = 0; i < intCount; i++) {
        finalStr += str
    }

    return finalStr
}