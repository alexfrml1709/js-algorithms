import { len } from "./len"


/**
 * Функция возвращает срез из исходного массива, поддерживает отрицательные индексы (не мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @param {number} start - начальный индекс среза (включая)
 * @param {number} end - конечный индекс среза (не включая)
 * @returns {Array<*>} срез из исходного массива в пределах индексов
 * @throws {TypeError} - если arr не массив или start или end не числа
 * @example
 *     slice([1, 2, 3, 4, 5], 1, 3); // [2, 3]
 *     slice([1, 2, 3, 4, 5], -2); // [4, 5]
 */


export function slice(arr, start, end = len(arr)) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом");
    }

    if (typeof start !== "number" || typeof end !== "number") {
        throw new TypeError("start и end должны быть числами");
    }

    if (start < 0) {
        start = len(arr) + start;
    }

    if (start < 0) {
        start = 0;
    }

    if (end < 0) {
        end = len(arr) + end;
    }

    let finalArr = [];

    for (let i = start; i < end; i++) {
        finalArr[i - start] = arr[i]
    }

    return finalArr;
}