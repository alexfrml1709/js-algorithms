/**
 * Функция возвращает длину строки
 * @param {string} string - строка
 * @returns {number} число символов в строке
 * @throws {TypeError} - если аргумент не строка
 * @example
 *     len("hello"); // 5
*/


export function len(string) {
    let stringLength = 0
    while (string[stringLength]) {
        stringLength++
    }

    return stringLength
};