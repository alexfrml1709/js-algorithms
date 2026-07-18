import { len } from "./len"

export function isMore(firstStr, secondStr) {
    if (typeof firstStr !== "string" || typeof secondStr !== "string") {
        throw new TypeError("Оба аргумента должны быть строками")
    }

    const firstStrLength = len(firstStr)
    const secondStrLength = len(secondStr)
    const minLength = firstStrLength > secondStrLength ? secondStrLength : firstStrLength

    for (let i = 0; i < minLength; i++) {
        if (firstStr[i].charCodeAt(0) < secondStr[i].charCodeAt(0)) {
            return false
        } else if (firstStr[i].charCodeAt(0) > secondStr[i].charCodeAt(0)) {
            return true
        }
    }

    return firstStrLength > secondStrLength
}