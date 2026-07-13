import { len } from "./len"

export function isLess(firstStr, secondStr) {
    if (typeof firstStr !== "string" || typeof secondStr !== "string") {
        throw new TypeError("Оба аргумента должны быть строками")
    };

    let firstStrLength = len(firstStr)
    let secondStrLength = len(secondStr)
    let minLength = firstStrLength > secondStrLength ? secondStrLength : firstStrLength

    for (let i = 0; i < minLength; i++) {
        if (firstStr[i].charCodeAt(0) < secondStr[i].charCodeAt(0)) {
            return true
        } else if (firstStr[i].charCodeAt(0) > secondStr[i].charCodeAt(0)) {
            return false
        }
    }

    return secondStrLength > firstStrLength
};