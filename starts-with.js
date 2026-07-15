import { len } from "./len.js"


export function startsWith(str, search) {
    if (typeof str !== "string" || typeof search !== "string") {
        throw new TypeError("Оба аргумента должны быть строками");
    };

    let searchLength = len(search)
    let searchWindow = ""

    for (let i = 0; i < searchLength; i++) {
        searchWindow += str[i]
    }

    return searchWindow === search
}