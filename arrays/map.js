import { push } from "./push"
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

    const newArr = [];

    forEach(arr, (item, index, arr) => {
        const transformed = callback(item, index, arr);
        push(newArr, transformed);
    });

    return newArr;
}