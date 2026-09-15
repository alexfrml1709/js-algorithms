/**
 * Функция сортирует массив чисел по возрастанию методом "вставки" (не мутирует исходный массив)
 * @param {Array<number>} arr - исходный массив для сортировки
 * @returns {Array<number>} отсортированный массив чисел
 * @throws {TypeError} - если arr не массив
 * @example
 *     insertionSort([4, 2, 1, 2]); // [1, 2, 2, 4]
 */


export function insertionSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    const arrLen = arr.length;
    const result = arr.slice();

    for (let i = 1; i < arrLen; i++) {
        const currentVal = result[i];
        let j = i - 1;

        while (j >= 0 && result[j] > currentVal) {
            result[j + 1] = result[j];
            j--;
        }

        result[j + 1] = currentVal;
    }

    return result;
}