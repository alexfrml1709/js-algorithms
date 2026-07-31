import { len } from "./len"


/**
 * Функция возвращает индекс последнего вхождения элемента в массив (не мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @param {*} item - искомый элемент
 * @returns {number} индекс последнего вхождения элемента
 * @throws {TypeError} - если arr не массив
 * @example
 *     lastIndexOf([10, 20, 30, 10], 10) // 3
 *     lastIndexOf(["b", "c", "d"], 20) // -1 
 */


export function lastIndexOf(arr, item) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом");
    }

    const arrLen = len(arr);

    for (let i = arrLen; i > 0; i--) {
        if (arr[i - 1] === item) {
            return i - 1
        }
    }

    return -1;
}