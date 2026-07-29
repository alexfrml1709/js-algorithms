import { len } from "./len"


/**
 * Функция возвращает элемент массива по индексу (не мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @param {number} index - индекс искомого элемента
 * @returns {*} - Элемент массива
 * @example
 *     at([10, 20, 30], 1) // 20
 *     at(["a", "b", "c"], 2) // "c" 
 */


export function at(arr, index) {
    if (!Array.isArray(arr) || typeof index !== "number") {
        throw new TypeError("arr должен быть массивом, а index числом")
    }

    if (index >= 0) {
        return arr[index]
    }

    const arrLen = len(arr)
    return arr[arrLen + index]
}