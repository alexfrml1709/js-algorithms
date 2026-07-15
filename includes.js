import { len } from "./len.js"


export function isIncludes(str, search) {
    if (typeof str !== "string" || typeof search !== "string") {
        throw new TypeError("Оба аргумента должны быть строками");
    };

    let searchLength = len(search)
    let strLength = len(str)

    for (let i = 0; i < strLength; i++) {
        let searchWindow = ""
    
        for (let j = 0; j < searchLength; j++) {
            searchWindow += str[i + j]
        }

        if (searchWindow === search) {
            return true
        }
    }

    return false
}