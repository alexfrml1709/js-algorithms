import { len } from "./len";
import { slice } from "./slice"


/**
 * Функция удаляет срез массива, меняет срез на второй исходный массив и возвращает массив удаленных элементов (мутирует массив)
 * @param {Array<*>} arr - исходный массив
 * @param {number} start - стартовый индекс для удаления
 * @param {number} deleteCount - количество элементов для удаления
 * @param {...*} items - исходные элементы для вставки вместо удаленного массива
 * @returns {Array<*>} массив удаленных элементов
 * @example
 *     splice([1, 2, 3, 4], 1, 2, ); // [2, 3]
 *     splice([1, 2, 3, 4], 2) // [3, 4]
 */


export function splice(arr, start, deleteCount = len(arr) - start, ...items) {
    const arrLen = len(arr);
    const itemsLen = len(items);

    if (start < 0) {
        start = arrLen + start;
    }

    if (deleteCount > arrLen - start) {
        deleteCount = arrLen - start;
    }

    const finalArr = slice(arr, start, start + deleteCount);

    if (deleteCount === itemsLen || deleteCount > itemsLen) {
        for (let i = 0; i < itemsLen; i++) {
            arr[start + i] = items[i];
        }
    }

    if (deleteCount > itemsLen) {
        for (let i = 0; i < arrLen - start - deleteCount; i++) {
            arr[start + itemsLen + i] = arr[start + deleteCount + i]
        }

        for (let i = 0; i < deleteCount - itemsLen; i++) {
            delete arr[arrLen - 1 - i];
        }
    } else if (deleteCount < itemsLen) {
        for (let i = arrLen - 1; i >= start + deleteCount; i--) {
            arr[i + (itemsLen - deleteCount)] = arr[i]
        }

        for (let i = 0; i < itemsLen; i++) {
            arr[start + i] = items[i]
        }
    }

    return finalArr;
}