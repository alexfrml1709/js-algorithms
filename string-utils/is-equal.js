import { len } from "./len"

export function isEqual(firstStr, secondStr) {
    if (typeof firstStr !== "string" || typeof secondStr !== "string") {
        throw new TypeError("Оба аргумента должны быть строками")
    }

    let firstStrLength = len(firstStr)
    let secondStrLength = len(secondStr)
    
    if (firstStrLength !== secondStrLength) {
        return false
    }

    for (let i = 0; i < firstStrLength; i++) {
        if (firstStr[i].charCodeAt(0) !== secondStr[i].charCodeAt(0)) {
            return false
        }
    }
    return true
}