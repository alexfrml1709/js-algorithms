import { push } from "./../arrays/push";


/**
 * Функция возвращает массив значений исходного объекта (не мутирует исходный объект)
 * @param {Object} obj - исходный объект
 * @returns {Array<*>} массив значений исходного объекта
 * @throws {TypeError} - если obj является null или obj не объект
 * @example
 *     values({a: 1, b: 2}); // [1, 2]
 */


export function values(obj) {
    if (obj === null) {
        throw new TypeError("obj не должен равняться null")
    }

    if (typeof obj !== "object") {
        throw new TypeError("obj должен быть объектом")
    }

    const result = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            push(result, obj[key])
        }
    }

    return result;
}