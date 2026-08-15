import { len } from "./len";


/**
 * Функция возвращает индекс первого вхождения элемента в исходный массив (не мутирует массив, есть наличие раннего выхода)
 * @param {Array<*>} arr - исходный массив 
 * @param {function(*, number, Array<*>): true} callback - функция, вызываемая до первого вхождения элемента
 * @returns {number} индекс первого вхождения элемента
 * @throws {TypeError} - если arr не массив или callback не функция
 */


export function findIndex(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    if (typeof callback !== "function") {
        throw new TypeError("callback должен быть функцией")
    }

    const arrLen = len(arr);

    for (let i = 0; i < arrLen; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }

    return -1;
}