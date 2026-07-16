import { len } from "./len.js"


export function isIncludes(str, search) {
    if (typeof str !== "string" || typeof search !== "string") {
        throw new TypeError("Оба аргумента должны быть строками");
    };

    if (search === "") {
        return true
    }

    const searchLength = len(search)
    const strLength = len(str)

    for (let i = 0; i <= strLength - searchLength; i++) {
        if (search[0] !== str[i]) {
            continue
        }

        let match = true

        for (let j = 1; j < searchLength; j++) {
            if (search[j] !== str[i + j]) {
                match = false
                break
            }
        }

        if (match) {
            return true
        }

    }

    return false
}