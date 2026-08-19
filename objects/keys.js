import { push } from "./../arrays/push";


/**
 * Функция возвращает массив ключей исходного объекта (не мутирует исходный массив)
 * @param {Object} obj - исходный объект 
 * @returns {Array<*>}
 * @throws {TypeError} - если obj является null или obj не объект
 * @example
 *     keys({a: 1, b: 2, c: 3}); // ["a", "b", "c"]
 */


export function keys(obj) {
    if (obj === null) {
        throw new TypeError("obj не должен равняться null")
    }

    if (typeof obj !== "object") {
        throw new TypeError("obj должен быть объектом")
    }

    let result = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            push(result, key);
        }
    }

    return result;
}