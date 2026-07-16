import { len } from "./len.js"


export function endsWith(str, search) {
    if (typeof str !== "string" || typeof search !== "string") {
        throw new TypeError("Оба аргумента должны быть строками");
    };

    const strLength = len(str)
    const searchLength = len(search)
    let searchIndex = searchLength - 1;

    for (let i = strLength - 1; searchIndex >= 0; i--) {
        if (str[i] !== search[searchIndex]) {
            return false;
        }
        searchIndex--;
    }

    return true
}