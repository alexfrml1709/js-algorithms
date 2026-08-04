import { len } from "./len"


/**
 * Функция удаляет первый элемент массива со сдвигом и возвращает его (мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @returns {*} удаленный первый элемент массива
 * @throws {TypeError} - если arr не массив
 * @example
 *     shift([5, 6, 7]); // 5
 *     shift(["a", "b", "c"]) // "a"
 */


export function shift(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    const arrLen = len(arr)
    const deletedElement = arr[0]

    for (let i = 0; i < arrLen - 1; i++) {
        arr[i] = arr[i + 1]
    }

    delete arr[arrLen - 1]

    return deletedElement
}