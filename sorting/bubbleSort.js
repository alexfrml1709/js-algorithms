/**
 * Функция сортирует массив чисел по возрастанию методом "пузырька" (не мутирует исходный массив)
 * @param {Array<number>} arr - исходный массив для сортировки
 * @returns {Array<number>} отсортированный массив чисел
 * @throws {TypeError} - если arr не массив
 * @example
 *     bubbleSort([4, 2, 4, 1]); // [1, 2, 4, 4]
 */


export function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом");
    }

    const arrLen = arr.length;
    const result = arr.slice();

    for (let i = 0; i < arrLen - 1; i++) {
        let isSorted = true;

        for (let j = 0; j < arrLen - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                const temp = result[j + 1];
                result[j + 1] = result[j];
                result[j] = temp;
                isSorted = false; 
            }
        }

        if (isSorted) break;
    }

    return result;
}