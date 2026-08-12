import { len } from "./len"
import { forEach } from "./forEach"


/**
 * Функция трансформирует массив (не мутирует исходный массив)
 * @param {Array<*>} arr - исходный массив для трансформации 
 * @param {function(*, number, Array<*>): *} callback - функция, вызываемая для каждого элемента
 * @returns {Array<*>} новый массив после трансформации
 * @throws {TypeError} - если arr не массив или callback не функция
 */


export function map(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    if (typeof callback !== "function") {
        throw new TypeError("callback должен быть функцией")
    }

    const arrLen = len(arr);
    const newArr = [];

    for (let i = 0; i < arrLen; i++) {
        newArr[i] = callback(arr[i], i, arr);
    }

    return newArr;
}