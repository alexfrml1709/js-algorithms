import { len } from "./len"


/**
 * Перебирает массив через вызов callback (не мутирует исходный массив)
 * @param {Array<*>} arr - исходный массив для перебора
 * @param {function(*, number, Array<*>): void} callback - функция, вызываемая для каждого элемента
 * @returns {void}
 * @throws {TypeError} - если arr не массив или callback не функция
 */


export function forEach(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    if (typeof callback !== "function") {
        throw new TypeError("callback должен быть функцией")
    }

    const arrLen = len(arr);

    for (let i = 0; i < arrLen; i++) {
        callback(arr[i], i, arr);
    }
}