import { len } from "./len"

export function isNotEqual(firstStr, secondStr) {
    if (typeof firstStr !== "string" || typeof secondStr !== "string") {
        throw new TypeError("Оба аргумента должны быть строками")
    }

    let firstStrLength = len(firstStr)
    let secondStrLength = len(secondStr)
    
    if (firstStrLength !== secondStrLength) {
        return true
    }

    for (let i = 0; i < firstStrLength; i++) {
        if (firstStr[i].charCodeAt(0) !== secondStr[i].charCodeAt(0)) {
            return true
        }
    }
    return false
}