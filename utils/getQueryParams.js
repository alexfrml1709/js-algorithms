import { len } from "../len";
import { indexOf } from "../index-of";
import { slice } from "../slice";


/**
 * Функция декодирует query-строку в объект (функция иммутабельна)
 * @param {string} url - исходная строка для декодирования
 * @returns {object} декодированный объект: ключи — имена параметров, значения — строковые значения
 * @throws {TypeError} - если аргумент не строка
 * @example
 *     getQueryParams('https://example.com?a=1'); // {a: "1"}
 */


export function getQueryParams(url) {
    if (typeof url !== "string") {
        throw new TypeError("url должен быть строкой")
    }

    let questionMarkIndex = indexOf(url, "?");
    let startIndex = questionMarkIndex + 1;

    if (questionMarkIndex === -1) {
        if (indexOf(url, "=") === -1 && indexOf(url, "&") === -1) {
            return {};
        } else {
            startIndex = 0;
        }
    }

    const urlLen = len(url);
    let key;
    let value = "";
    let result = {};
    let hasEqual = false;

    for (let i = startIndex; i < urlLen; i++) {
        if (url[i] === "=") {
            key = slice(url, startIndex, i);
            startIndex = i + 1;
            hasEqual = true;
        }

        if (url[i] === "&" || i === urlLen - 1) {
            let endIndex = (url[i] === "&") ? i : urlLen;

            if (!hasEqual) {
                key = slice(url, startIndex, endIndex)
            } else {
                value = slice(url, startIndex, endIndex);
            }

            result[decodeURIComponent(key)] = decodeURIComponent(value);
            value = "";
            startIndex = i + 1;
            hasEqual = false;
        }
    }

    return result;
}