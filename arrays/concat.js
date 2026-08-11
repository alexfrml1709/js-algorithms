import { len } from "./len"
import { push } from "./push"


/**
 * Функция объединяет два массива в новый (не мутирует массив)
 * @param {Array<*>} arr1 - первый массив
 * @param {Array<*>} arr2 - второй массив
 * @returns {Array<*>} новый объединенный массив
 * @throws {TypeError} - если arr1 или arr2 не массивы
 * @example
 *     concat([1, 2, 3], [4, 5]) // [1, 2, 3, 4, 5]
 */


export function concat(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError("Оба аргумента должны быть массивами")
    } 

    const arr1Len = len(arr1);
    const arr2Len = len(arr2);
    let finalArr = [];

    for (let i = 0; i < arr1Len; i++) {
        finalArr[i] = arr1[i];
    }

    for (let i = 0; i < arr2Len; i++) {
        push(finalArr, arr2[i]);
    }

    return finalArr;
}