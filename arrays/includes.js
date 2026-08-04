import { len } from "./len"
import { indexOf } from "./indexOf"


/**
 * Функция возвращает true, если в массиве был найден входящий элемент; false если нет (не мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @param {*} item - искомый элемент
 * @returns {boolean} true, если элемент найден; false - если нет
 * @throws {TypeError} - если arr не массив
 * @example
 *     includes([10, 20, 30], 30) // true
 *     includes(["b", "c", "d"], 20) // false 
 */


export function includes(arr, item) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr должен быть массивом");
    }

    return indexOf(arr, item) !== -1;
}