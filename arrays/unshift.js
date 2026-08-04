import { len } from "./len"


/**
 * Функция добавляет элемент в начало массива со сдвигом и возвращает новую длину (мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @param {*} item - элемент для добавления
 * @returns {number} новая длина массива
 * @throws {TypeError} - если arr не массив
 * @example
 *     unshift([20, 30], 10) // 3
 *     unshift(["b", "c", "d"], "a") // 4 
 */


export function unshift(arr, item) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом");
    }

    const arrLen = len(arr)
    
    for (let i = arrLen; i > 0; i--) {
        arr[i] = arr[i - 1]
    }

    arr[0] = item

    return arrLen + 1
}