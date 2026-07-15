import { len } from "./len.js"


export function endsWith(str, search) {
    if (typeof str !== "string" || typeof search !== "string") {
        throw new TypeError("Оба аргумента должны быть строками");
    };

    let strLength = len(str)
    let searchLength = len(search)
    let searchWindow = ""

    for (let i = searchLength - 1; i >= 0; i--) {
        searchWindow += str[strLength - (i + 1)]
    }

    return searchWindow === search
}