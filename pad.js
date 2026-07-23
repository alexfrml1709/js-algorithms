import { len } from "./len"
import { substring } from "./substring"


/**
 * 
 * @param {string} str - исходная строка 
 * @param {number} length - целевая длина итоговой строки
 * @param {string} char - символ, которым нужно дополнить исходную строку
 * @param {string} side - сторона для дополнения (left, right или both)
 * @returns {string} строка, дополненная символом char, по стороне side, до длины length 
 * @example
 *     pad("qwe", 5, "@"", "right") // "qwe@@"
 *     pad("qwe", 6, "@", "both") // "@qwe@@"
 */


export function pad(str, length, char, side) {
    if (side !== "left" && side !== "right" && side !== "both") {
        throw new Error("side должен быть 'left', 'right' или 'both'")
    }

    if (typeof str !== "string") {
        throw new TypeError("str должен быть строкой");
    }

    const strLen = len(str)

    if (length <= strLen) {
        return str
    }

    const cycleLen = length - strLen
    let padStr = ""

    while (len(padStr) < cycleLen) {
        padStr += char        
    }

    const finalPad = substring(padStr, 0, cycleLen)


    if (side === "left") {
        return finalPad + str

    } else if (side === "right") {
        return str + finalPad

    } else {
        const leftLen = Math.floor(cycleLen / 2);
        const leftChar = substring(finalPad, 0, leftLen)
        const rightChar = substring(finalPad, leftLen, cycleLen)

        return leftChar + str + rightChar
    }
}