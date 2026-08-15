import { concat } from "./concat"
import { reduce } from "./reduce"


/**
 * Функция сглаживает исходный массив до определенной глубины depth (не мутирует исходный массив; рекурсивная функция)
 * @param {Array<*>} arr - исходный массив
 * @param {number} depth - глубина разглаживания
 * @returns {Array<*>} разглаженный массив
 * @throws {TypeError} - если arr не массив или depth не число
 * @example
 *     flat([1, [2]]); // [1, 2]
 *     flat([1, [2, [3, [4]], 5]], 2); // [1, 2, 3, [4], 5]
 */


export function flat(arr, depth = 1) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    if (typeof depth !== "number") {
        throw new TypeError("depth должен быть числом")
    }

    return reduce(arr, (acc, element, index) => {
        if (Array.isArray(element) && depth > 0) {
            const flatResult = flat(element, depth - 1)
            acc = concat(acc, flatResult);
        } else {
            acc = concat(acc, [element]);
        }

        return acc;
    }, [])
}