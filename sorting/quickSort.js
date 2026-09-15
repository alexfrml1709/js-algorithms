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

    const arrLen = arr.length;

    if (arrLen <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const less = [];
    const greater = [];

    for (let i = 1; i < arrLen; i++) {
        if (pivot > arr[i]) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return quickSort(less).concat([pivot], quickSort(greater));
}