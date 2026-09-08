import { len } from "../arrays/len";
import { push } from "../arrays/push";
import { concat } from "../arrays/concat";


/**
 * Функция быстрой сортировки массива чисел по возрастанию (не мутирует исходный массив)
 * @param {Array<number>} arr - исходный массив для сортировки
 * @returns {Array<number>} - отсортированный по возрастанию массив чисел
 * @throws {TypeError} - если arr не массив
 * @example
 *     quickSort([3, 2, 3, 1]); // [1, 2, 3, 3]
 */


export function quickSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    const arrLen = len(arr);

    if (arrLen <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const less = [];
    const greater = [];

    for (let i = 1; i < arrLen; i++) {
        if (pivot > arr[i]) {
            push(less, arr[i]);
        } else {
            push(greater, arr[i]);
        }
    }

    return concat(concat(quickSort(less), [pivot]), quickSort(greater));
}