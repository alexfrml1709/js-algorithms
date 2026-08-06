import { len } from "./len";


/**
 * Функция склеивает элементы массива в строку, разделяя сепаратором (не мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @param {string} separator - исходный разделитель
 * @returns {string} склеенная строка
 * @throws {TypeError} - если arr не массив или separator не строка
 * @example
 *     join([1, 2, 3], "-") // "1-2-3"
 *     join([1, 2, 3]) // "1,2,3"
 */


export function join(arr, separator = ",") {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    if (typeof separator !== "string") {
        throw new TypeError("separator должен быть строкой")
    }

    const arrLen = len(arr);

    if (arrLen === 0) {
        return ""
    }

    let result = ""

    for (let i = 0; i < arrLen; i++) {
        let element = arr[i]

        if (element === null) {
            element = ""
        }

        if (i > 0) {
            result += separator
        }

        result += element;
    }

    return result;
}