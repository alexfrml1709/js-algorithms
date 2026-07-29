/**
 * Функция возвращает длину входящего массива (не мутирует массив)
 * @param {Array<*>} arr - массив для подсчета его длины
 * @returns {number} длина массива
 * @throws {TypeError} - если arr не массив
 * @example
 *     len([5, 6, 7]); // 3
 */


export function len(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Аргумент должен быть массивом");
    }

    let count = 0;
    for (let i = 0; arr[i] !== undefined; i++) {
        count++;
    }

    return count;
}