import { len } from "./len.js"


export function startsWith(str, search) {
    if (typeof str !== "string" || typeof search !== "string") {
        throw new TypeError("Оба аргумента должны быть строками");
    };

    const strLength = len(str)
    const searchLength = len(search)

    if (searchLength > strLength) {
        return false
    }

    for (let i = 0; i < searchLength; i++) {
        if (str[i] !== search[i]) {
            return false
        }
    }

    return true
}