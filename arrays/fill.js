import { len } from "./len";


/**
 * Функция заполняет срез исходного массива указанным значением (мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @param {*} value - значениие для заполнения
 * @param {number} start - начальный индекс (включая)
 * @param {number} end - конечный индекс (не включая)
 * @returns {Array} измененный исходный массив
 * @example
 *     fill([10, 20, 30, 40], '*', 1, 3); // [10, '*', '*', 40]
 *     fill([10, 20, 30, 40], '*', -2); // [10, 20, '*', '*']
 */


export function fill(arr, value, start = 0, end = len(arr)) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr должен быть массивом');
    }

    if (typeof start !== "number" || typeof end !== "number") {
        throw new TypeError('start и end должны быть числами');
    }

    const arrLen = len(arr);

    if (start < 0) {
        start = arrLen + start;
    }

    if (start < 0) {
        start = 0;
    }

    if (start > arrLen) {
        start = arrLen;
    }

    if (end < 0) {
        end = arrLen + end;
    }

    if (end < 0) {
        end = 0;
    }

    if (end > arrLen) {
        end = arrLen;
    }

    for (let i = start; i < end; i++) {
        arr[i] = value;
    }

    return arr;
}