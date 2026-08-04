import { len } from "./len"


/**
 * Функция возвращает индекс первого вхождения элемента в массив (не мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @param {*} item - искомый элемент
 * @returns {number} индекс первого вхождения элемента
 * @throws {TypeError} - если arr не массив
 * @example
 *     indexOf([10, 20, 30], 30) // 2
 *     indexOf(["b", "c", "d"], 20) // -1 
 */


export function indexOf(arr, item) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом");
    }

    const arrLen = len(arr)

    for (let i = 0; i < arrLen; i++) {
        if (arr[i] === item) {
            return i
        }
    }

    return -1
}