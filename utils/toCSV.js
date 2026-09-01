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
        item = item == null ? "" : String(item);

        let escapeCSVResult = "";
        let needsQuotes = false;

        for (let i = 0; i < strLen(item); i++) {
            if (item[i] === ',' || item[i] === '"' || item[i] === '\n') {
                needsQuotes = true;
            }

            escapeCSVResult += item[i];

            if (item[i] === '"') {
                escapeCSVResult += item[i];
            }
        }

        if (needsQuotes) {
            escapeCSVResult = '"' + escapeCSVResult + '"';
        }

        return escapeCSVResult;
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