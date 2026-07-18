import { len } from "./len.js"
import { indexOf } from "./index-of.js"


export function isIncludes(str, search) {
    return indexOf(str, search) !== -1;
}