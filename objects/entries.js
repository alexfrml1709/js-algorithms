import { len } from "../arrays/len";
import { keys } from "./keys";


/**
 * Функция возвращает массив массивов ключей и значений исходного объекта (не мутирует исходный объект)
 * @param {Object} obj - исходный объект 
 * @returns {Array<*>} массив массивов ключей и значений объекта
 * @throws {TypeError} - если obj является null или obj не объект
 * @example
 *     entries({a: 1, b: 2, c: 3}); // [["a", 1], ["b", 2], ["c", 3]]
 */


export function entries(obj) {
    if (obj === null) {
        throw new TypeError("obj не должен равняться null")
    }

    if (typeof obj !== "object") {
        throw new TypeError("obj должен быть объектом")
    }

    const result = [];
    const keysResult = keys(obj);
    const keysResultLen = len(keysResult);

    for (let i = 0; i < keysResultLen; i++) {
        result[i] = [keysResult[i], obj[keysResult[i]]];
    }

    return result;
}