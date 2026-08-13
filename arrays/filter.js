import { push } from "./push";
import { forEach } from "./forEach";


/**
 * Функция фильтрует исходный массив через callback (не мутирует исходный массив)
 * @param {Array<*>} arr - исходный массив для фильтрации
 * @param {function(*, number, Array<*>): boolean} callback - функция вызываемая для каждого элемента
 * @returns {Array<*>} новый отфильтрованный массив
 * @throws {TypeError} - если arr не массив или callback не функция
 */


export function filter(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    if (typeof callback !== "function") {
        throw new TypeError("callback должен быть функцией")
    }

    const newArr = [];

    forEach(arr, (item, index, array) => {
        const transformed = callback(item, index, array);

        if (transformed) {
            push(newArr, item)
        }
    });

    return newArr;
}