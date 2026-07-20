/**
 * Функция возвращает длину строки
 * @param {string} string - строка
 * @returns {number} число символов в строке
 * @throws {TypeError} - если аргумент не строка
 * @example
 *     len("hello"); // 5
*/


export function len(string) {
    if (typeof string !== "string") {
        throw new TypeError("string должен быть строкой");
    };
    
    let stringLenght = 0
    while (string[stringLenght]) {
        stringLenght++
    }

    return stringLenght
};