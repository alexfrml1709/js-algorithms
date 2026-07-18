import { len } from "./len"
import { isEqual } from "./is-equal"

export function isNotEqual(firstStr, secondStr) {
    return !isEqual(firstStr, secondStr);
}