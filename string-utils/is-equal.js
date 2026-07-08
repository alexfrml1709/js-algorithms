export function isEqual(a, b) {
    if (typeof a !== "string" || typeof b !== "string") {
        throw new TypeError("Оба аргумента должны быть строками")
    }

    return a === b
}