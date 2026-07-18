import { len } from "./len"
import { isEqual } from "./is-equal"
import { isMore } from "./is-more"

export function isMoreOrEqual(firstStr, secondStr) {
    return isEqual(firstStr, secondStr) || isMore(firstStr, secondStr)
};