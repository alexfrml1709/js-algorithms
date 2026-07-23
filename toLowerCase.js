import { len } from "./len"


/**
 * Функция меняет буквы вернего регистра на нижний
 * @param {string} str - исходная строка
 * @returns {string} исходный текст в нижнем регистре
 * @example
 *     toLowerCase("Hi hElLo!") // "hi hello!"
 */


export function toLowerCase(str) {
    if (typeof str !== "string") {
        throw new TypeError("str должен быть строкой");
    }

    const strLen = len(str)
    let result = ""

    for (let i = 0; i < strLen; i++) {
        const charCode = str.charCodeAt(i)
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 1040 && charCode <= 1071)) {
            result += String.fromCodePoint(charCode + 32)

        } else if (charCode === 1025) {
            result += String.fromCodePoint(charCode + 80)
            
        } else {
            result += str[i]
        }
    }

    return result
}