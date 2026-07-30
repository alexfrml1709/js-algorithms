import { len } from "./len"


/**
 * Функция добавляет элемент в конец массива и возвращает новую длину массива (мутирует массив)
 * @param {Array} arr - исходный массив 
 * @param {*} item - элемент добавляемый в конец массива
 * @returns {number} новая длина массива
 * @throws {TypeError} - если arr не массив
 * @example
 *     push([10, 20], 30) // 3
 *     push([], "a") // 1
 */


export function push(arr, item) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    const arrLen = len(arr)

    arr[arrLen] = item

    return arrLen + 1
}