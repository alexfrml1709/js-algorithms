import { len } from "./len"


/**
 * Функция удаляет последний элемент массива (мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @returns {*} удаленный последний элемент массива
 * @throws {TypeError} - если arr не массив
 * @example
 *     pop([5, 6, 7]); // 7
 *     pop(["a", "b", "c"]) // "c"
 */


export function pop(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    const arrLen = len(arr)
    const lastElem = arr[arrLen - 1]

    delete arr[arrLen - 1]

    return lastElem
}