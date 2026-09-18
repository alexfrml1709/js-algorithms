import { len } from "../arrays/len";
import { push } from "../arrays/push";


/**
 * Функция группирует элементы массива по заданному ключу (функция иммутабельна)
 * @param {Array<*>} array - исходный массив для группировки
 * @param {string} key - исходный ключ, по которому выполняется группировка
 * @returns {Object<string, Array>} объект, где ключи — значения свойства, а значения — массивы сгруппированных элементов
 * @throws {TypeError} - если array не массив или key не строка
 * @example
 *     groupBy([{city: 'Москва'}, {city: 'Питер'}, {city: 'Москва'}], 'city'); // {'Москва': [{city: 'Москва'}, {city: 'Москва'}], 'Питер': [{city: 'Питер'}]}
 */


export function groupBy(array, key) {
    if (!Array.isArray(array)) {
        throw new TypeError("array должен быть массивом");
    }

    if ((typeof key !== "string")) {
        throw new TypeError("key должен быть строкой");
    }

    const result = {};

    for (let i = 0; i < len(array); i++) {
        const groupValue = array[i][key];

        if (!Object.prototype.hasOwnProperty.call(result, groupValue)) {
            result[groupValue] = [];
        }

        push(result[groupValue], array[i]);
    }

    return result;
}