/**
 * Функция сортирует массив чисел по возрастанию методом "выбора" (не мутирует исходный массив)
 * @param {Array<number>} arr - исходный массив для сортировки 
 * @returns {Array<number>} отсортированный по возрастанию массив чисел
 * @throws {TypeError} - если arr не массив
 * @example
 *     selectionSort([3, 2, 3, 1]); // [1, 2, 3, 3]
 */


export function selectionSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    const arrLen = arr.length;
    const result = arr.slice();

    for (let i = 0; i < arrLen - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arrLen; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const temp = result[i];
            result[i] = result[minIndex];
            result[minIndex] = temp;
        }
    }

    return result;
}