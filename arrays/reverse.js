import { len } from "./len";
    

/**
 * Функция переворачивает исходный массив (мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @returns {Array} перевернутый исходный массив
 * @throws {TypeError} - если arr не массив
 * @example
 *     reverse([10, 20, 30]); // [30, 20, 10]
 *     reverse(['a', 'b', 'c']); // ['c', 'b', 'a']
 */


export function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }
    
    const arrLen = len(arr);

    for (let i = 0; i < arrLen / 2; i++) {
        const tempElement = arr[i]
        arr[i] = arr[arrLen - 1 - i]
        arr[arrLen - 1 - i] = tempElement
    }

    return arr;
}