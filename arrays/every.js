import { len } from "./len";


/**
 * Функция проверяет, удовлетворяют ли все элементы массива условию (не мутирует исходный массив)
 * @param {Array<*>} arr - исходный массив
 * @param {function(*, number, Array<*>): boolean} callback - функция, вызываемая до первого неудовлетворения условия
 * @returns {boolean} true, если все элементы массива удовлетворяют условию; false, если хотя бы один не удовлетворяет
 * @throws {TypeError} - если arr не массив или callback не функция
 */


export function every(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    if (typeof callback !== "function") {
        throw new TypeError("callback должен быть функцией")
    }

    const arrLen = len(arr);

    for (let i = 0; i < arrLen; i++) {
        if (!callback(arr[i], i, arr)) {
            return false
        }
    }

    return true
}