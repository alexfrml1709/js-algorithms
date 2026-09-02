import { len as strLen} from "../len";
import { len as arrLen } from "../arrays/len";
import { keys } from "../objects/keys";
import { values } from "../objects/values";
import { join } from "../arrays/join";
import { push } from "../arrays/push";


/**
 * Функция преобразовывает массив объектов в CSV-строку (не мутирует исходный массив)
 * @param {Array<*>} data - исходный массив объектов с одинаковой структурой 
 * @returns {string} CSV-строка
 * @throws {TypeError} - если data не массив
 * @example
 *     toCSV([{name: 'Анна', age: 25}]); // 'name,age\nАнна,25\n'
 */


export function toCSV(data) {
    if (!Array.isArray(data)) {
        throw new TypeError("data должна быть массивом");
    }

    if (arrLen(data) === 0) {
        return "";
    }

    let keysResult = keys(data[0]);
    let result = join(keysResult) + "\n";

    function escapeCSV(item) {
        if (item == null) {
            return "";
        }

        const isString = typeof item === 'string';
        const str = "" + item;

        let escapeCSVResult = "";
        let needsQuotes = false;

        if (isString) {
            const num = +str;
            const isNumericString = (strLen(str) > 0 && num === num);
        
            if (isNumericString || str === 'true' || str === 'false' || str === 'null') {
                needsQuotes = true;
            }
        }

        for (let i = 0; i < strLen(str); i++) {
            if (str[i] === ',' || str[i] === '"' || str[i] === '\n') {
                needsQuotes = true;
            }

            escapeCSVResult += str[i];

            if (str[i] === '"') {
                escapeCSVResult += str[i];
            }
        }

        return needsQuotes ? '"' + escapeCSVResult + '"' : escapeCSVResult;
    }

    for (let i = 0; i < arrLen(data); i++) {
        const formatedValues = [];
        const valuesResult = values(data[i]);

        for (let j = 0; j < arrLen(valuesResult); j++) {
            push(formatedValues, escapeCSV(valuesResult[j]))
        }

        result = result + join(formatedValues) + "\n";
    }

    return result;
}