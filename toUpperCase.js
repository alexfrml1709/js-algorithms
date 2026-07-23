import { len } from "./len"


/**
 * Функция меняет буквы нижнего регистра на верхний
 * @param {string} str - исходная строка 
 * @returns {string} исходный текст в верхнем регистре
 * @example
 *     toUpperCase("Hi hElLo!") // "HI HELLO!"
 */


export function toUpperCase(str) {
    if (typeof str !== "string") {
        throw new TypeError("str должен быть строкой");
    }

    const strLen = len(str)
    let result = ""

    for (let i = 0; i < strLen; i++) {
        const charCode = str.charCodeAt(i)
        if ((charCode >= 97 && charCode <= 122) || (charCode >= 1072 && charCode <= 1103)) {
            result += String.fromCodePoint(charCode - 32)

        } else if (charCode === 1105) {
            result += String.fromCodePoint(charCode - 80)
            
        } else {
            result += str[i]
        }
    }

    return result
}