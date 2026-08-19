import { len } from "../arrays/len";
import { keys } from "./keys";


export function entries(obj) {
    if (obj === null) {
        throw new TypeError("obj не должен равняться null")
    }

    if (typeof obj !== "object") {
        throw new TypeError("obj должен быть объектом")
    }

    const result = [];
    const keysResult = keys(obj);
    const keysResultLen = len(keysResult);

    for (let i = 0; i < keysResultLen; i++) {
        result[i] = [keysResult[i], obj[keysResult[i]]];
    }

    return result;
}