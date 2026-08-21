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

    for (const key in a) {
        const isEqualDeepResult = isEqualDeep(a[key], b[key]);
        if (isEqualDeepResult === false) {
            return false;
        }
    }

    return true;
}



