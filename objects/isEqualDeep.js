import { len } from "../arrays/len";
import { keys } from "./keys";


export function isEqualDeep(a, b) {
    if (typeof a !== typeof b) {
        return false;
    }

    if (typeof a !== "object") {
        return a === b;
    }

    if (a === null && b === null) {
        return true;
    }

    if (a === null || b === null) {
        return false;
    }

    if (Array.isArray(a) !== Array.isArray(b)) {
        return false;
    }

    const aKeys = keys(a);
    const bKeys = keys(b);

    if (len(aKeys) !== len(bKeys)) {
        return false;
    }

    for (let i = 0; i < len(aKeys); i++) {
        const key = aKeys[i];

        if (!Object.prototype.hasOwnProperty.call(b, key)) {
            return false;
        }

        if (!isEqualDeep(a[key], b[key])) {
            return false;
        }
    }

    return true;
}



