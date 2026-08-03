import { len } from "./len"


/**
 * Функция возвращает перевернутую строку
 * @param {string} str - исходная строка
 * @returns {string} строка, которую нужно перевернуть
 * @throws {TypeError} - если аргумент не строка
 * @example
 *     reverse("hello"); // "olleh"
*/


export function reverse(str) {
    if (typeof str !== "string") {
        throw new TypeError("Аргумент должен быть строкой");
    };

    const strLength = len(str)
    let reversedStr = ""

    for (let i = strLength - 1; i >= 0; i--) {
        reversedStr += str[i]
    }

    return reversedStr
}