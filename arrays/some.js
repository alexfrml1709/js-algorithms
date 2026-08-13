import { len } from "./len"


/**
 * Функция возвращает true, если хотя бы один элемент массива удовлетворяет условию; false если нет (не мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @param {function(*, number, Array<*>): boolean} callback - функция вызываемая до первого удовлетворения условия
 * @returns {boolean} возвращает true, если хотя бы один элемент массива удовлетворяет условию; false если не удовлетворяет
 * @throws {TypeError} - если arr не массив или callback не функция
 */


export function some(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    if (typeof callback !== "function") {
        throw new TypeError("callback должен быть функцией")
    }

    const arrLen = len(arr);

    for (let i = 0; i < arrLen; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
}