import { len } from "./len"
import { isMore } from "./is-more"

export function isLess(firstStr, secondStr) {
    if (firstStr === secondStr) {
        return false
    }

    return !isMore(firstStr, secondStr)
};