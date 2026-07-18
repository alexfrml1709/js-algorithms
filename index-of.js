import { len } from "./len.js"


export function indexOf(str, search) {
    if (typeof str !== "string" || typeof search !== "string") {
        throw new TypeError("Оба аргумента должны быть строками");
    };

    if (search === "") {
        return 0
    }

    const searchLength = len(search)
    const strLength = len(str)

    for (let i = 0; i <= strLength - searchLength; i++) {
        if (str[i] !== search[0]) {
            continue
        }

        let match = true

        for (let j = 1; j < searchLength; j++) {
            if (str[i + j] !== search[j]) {
                match = false
                break
            }
        }

        if (match) {
            return i
        }
    }

    return -1
}