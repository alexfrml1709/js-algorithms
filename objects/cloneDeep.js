import { len } from "../arrays/len";
import { push } from "../arrays/push";
import { keys } from "./keys";


export function cloneDeep(value) {
    if (typeof value !== "object" || value === null) {
        return value;
    }

    if (Array.isArray(value)) {
        let result = [];
        const arrLen = len(value);

        for (let i = 0; i < arrLen; i++) {
            push(result, cloneDeep(value[i]));
        }

        return result;
    } else {
        let result = {};
        const keysResult = keys(value);
        const keysResultLen = len(keysResult);

        for (let i = 0; i < keysResultLen; i++) {
            const key = keysResult[i];

            result[key] = cloneDeep(value[key]);
        }

        return result;
    }
}