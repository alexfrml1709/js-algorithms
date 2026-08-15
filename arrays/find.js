import { findIndex } from "./findIndex";


/**
 * Если удовлетворяет условию, функция возвращает элемент исходного массива (не мутирует массив, есть наличие раннего выхода)
 * @param {Array<*>} arr - исходный массив 
 * @param {function(*, number, Array<*>): true} callback - функция, вызываемая до первого вхождения элемента
 * @returns {*} элемент исходного массива
 * @throws {TypeError} - если arr не массив или callback не функция
 */


export function find(arr, callback) {
    const arrIndex = findIndex(arr, callback);

    if (arrIndex === -1) {
        return undefined;
    }

    return arr[arrIndex];
}