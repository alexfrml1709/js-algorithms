import { len as strLen } from "../len";
import { len as arrLen } from "../arrays/len";
import { push } from "../arrays/push";


/**
 * Функция парсит CSV-строки обратно в массив объектов (функция иммутабельна)
 * @param {string} csvString - исходная строка для парсинга
 * @returns {object[]} массив объектов после парсинга строки
 * @throws {TypeError} - если csvString не строка
 * @example
 *     fromCSV("a,b\n1,2"); // [{a: 1, b: 2}]
 */


export function fromCSV(csvString) {
    if (typeof csvString !== "string") {
        throw new TypeError("csvString должен быть строкой");
    }

    let result = [];
    let currentRow = [];
    let rows = [];
    let currentField = '';
    let inQuotes = false;
    let isFieldWasQuoted = false;

    for (let i = 0; i < strLen(csvString); i++) {
        if (inQuotes) {
            if (csvString[i] === '"' && csvString[i + 1] === '"') {
                currentField += csvString[i];
                i++;
            } else if (csvString[i] === '"') {
                inQuotes = false;
            } else {
                currentField += csvString[i];
            }
        } else {
            if (csvString[i] === '"') {
                inQuotes = true;
                isFieldWasQuoted = true;
            } else if (csvString[i] === ',') {
                push(currentRow, {value: currentField, quoted: isFieldWasQuoted});

                currentField = "";
                isFieldWasQuoted = false;
            } else if (csvString[i] === '\n') {
                push(currentRow, {value: currentField, quoted: isFieldWasQuoted});
                push(rows, currentRow);
                currentField = "";
                currentRow = [];
                isFieldWasQuoted = false;
            } else {
                currentField += csvString[i];
            }
        }
    }

    if (arrLen(currentRow) > 0 || strLen(currentField) > 0) {
        push(currentRow, {value: currentField, quoted: isFieldWasQuoted});
        push(rows, currentRow);
    }

    const rowsLen = arrLen(rows);

    for (let i = 1; i < rowsLen; i++) {
        const rowObj = {};
        const iRowsLen = arrLen(rows[i]);

        for (let j = 0; j < iRowsLen; j++) {
            const key = rows[0][j].value;
            const cell = rows[i][j];

            if (cell.quoted) {
                rowObj[key] = cell.value;
            } else {
                if (cell.value === 'true') {
                rowObj[key] = true;
                } else if (cell.value === 'false') {
                rowObj[key] = false;
                } else if (cell.value === 'null' || strLen(cell.value) === 0) {
                rowObj[key] = null;
                } else {
                const num = +cell.value;

                rowObj[key] = (num === num) ? num : cell.value;
                }
            }
        }

        push(result, rowObj);
    }

    return result;
}