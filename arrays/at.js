import { len } from "./len"


/**
 * Функция возвращает элемент массива по индексу (не мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @param {number} index - индекс искомого элемента
 * @returns {*} элемент массива
 * @throws {TypeError} - если arr не массив или index не число
 * @example
 *     at([10, 20, 30], 1) // 20
 *     at(["a", "b", "c"], 2) // "c" 
 */


export function at(arr, index) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    if(typeof index !== "number") {
        throw new TypeError("index должен быть числом")
    }

    if (index >= 0) {
        return arr[index]
    }

    const arrLen = len(arr)
    return arr[arrLen + index]
}