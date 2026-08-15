import { len } from "./len"


/**
 * Функция приводит массив к одному элементу и возвращает его (не мутирует исходный массив; 2 режима работы в зависимости от того, указан ли initialValue)
 * @param {Array<*>} arr - исходный массив 
 * @param {function(*, *, number, Array<*>): *} callback - функция, вызываемая для каждого элемента массива
 * @param {*} initialValue - начальное значение возвращаемого элемента
 * @returns {*} возвращаемый элемент после приведения массива
 * @throws {TypeError} - если arr не массив или callback не функция; также если одновременно пуст arr и не указан initialValue 
 */


export function reduce(arr, callback, initialValue) {
    const arrLen = len(arr);

    if (arrLen === 0 && arguments.length < 3) {
        throw new TypeError("arr или intialValue должны быть корректно заполнены")
    }

    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом")
    }

    if (typeof callback !== "function") {
        throw new TypeError("callback должен быть функцией")
    }

    let acc;

    if (arguments.length < 3) {
        acc = arr[0];

        for (let i = 1; i < arrLen; i++) {
            acc = callback(acc, arr[i], i, arr)
        }
    } else {
        acc = initialValue;

        for (let i = 0; i < arrLen; i++) {
           acc = callback(acc, arr[i], i, arr)
        }
    }

    return acc;
}