import { len } from "../arrays/len";


/**
 * Функция бинарного поиска числа в отсортированном массиве (не мутирует исходный массив)
 * Если массив не отсортирован - результат не определен
 * @param {Array<number>} arr - исходный отсортированный массив чисел
 * @param {number} target - искомое число 
 * @returns {number} индекс искомого числа в исходном массиве. Если число не найдено, то -1
 * @throws {TypeError} - если arr не массив
 * @example
 *     binarySearch([10, 20, 30, 40, 50], 40); // 3
 */


export function binarySearch(arr, target) {
    const arrLen = len(arr);
    let leftBorder = 0;
    let rightBorder = arrLen - 1;

    while (leftBorder <= rightBorder) {
        const mid = Math.floor((leftBorder + rightBorder) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            leftBorder = mid + 1;
        } else {
            rightBorder = mid - 1;
        }
    }

    return -1;
}