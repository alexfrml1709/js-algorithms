import { len } from "./len"


export function reverse(str) {
    if (typeof str !== "string") {
        throw new TypeError("Аргумент должен быть строкой");
    };

    let strLength = len(str)
    let reversedStr = ""

    for (let i = strLength - 1; i >= 0; i--) {
        reversedStr += str[i]
    }

    return reversedStr
}