import { len } from "../len";
import { slice } from "../slice";


/**
 * Разбирает URL на составные части (функция иммутабельна)
 * @param {string} url - исходный URL
 * @returns {object} - Разобранный на части исходных URL
 * @throws {TypeError} - если url не строка
 * @example
 *     parseUrl('https://example.com:8080/path?q=1#top'); // {protocol: 'https', host: 'example.com', port: '8080', path: '/path', query: 'q=1', hash: 'top'}
 */


export function parseUrl(url) {
    if (typeof url !== "string") {
        throw new TypeError("url должен быть строкой");
    }

    const urlLen = len(url);
    let result = {protocol: "", host: "", port: "", path: "/", query: "", hash: ""};
    let startIndex = 0;
    let currentPart = "protocol";

    for (let i = 0; i < urlLen; i++) {  
        if (url[i] === ":") {
            if (url[i + 1] === "/" && url[i + 2] === "/" && currentPart === "protocol") {
                result.protocol = slice(url, startIndex, i);
                i += 2;
                startIndex = i + 1;
                currentPart = "host";
                continue;
            } else if (currentPart === "host") {
                result.host = slice(url, startIndex, i);
                startIndex = i + 1;
                currentPart = "port";
            }
        }

        if (url[i] === "/") {
            if (currentPart === "host") {
                result.host = slice(url, startIndex, i);
            } else if (currentPart === "port") {
                result.port = slice(url, startIndex, i);
            } else if (currentPart === "protocol") {
                result.host = slice(url, startIndex, i);
            }

            if (currentPart !== "path") {
                startIndex = i;
                currentPart = "path";
            }
        }

        if (url[i] === "?") {
            if (currentPart === "host") result.host = slice(url, startIndex, i);
            else if (currentPart === "port") result.port = slice(url, startIndex, i);
            else if (currentPart === "path") result.path = slice(url, startIndex, i);
        
            startIndex = i + 1;
            currentPart = "query";
    }

        if (url[i] === "#") {
            if (currentPart === "host") result.host = slice(url, startIndex, i);
            else if (currentPart === "port") result.port = slice(url, startIndex, i);
            else if (currentPart === "path") result.path = slice(url, startIndex, i);
            else if (currentPart === "query") result.query = slice(url, startIndex, i);

            startIndex = i + 1;
            currentPart = "hash";
        }

        if (i === urlLen - 1) {
            if (currentPart === "host") result.host = slice(url, startIndex, urlLen);
            else if (currentPart === "port") result.port = slice(url, startIndex, urlLen);
            else if (currentPart === "path") result.path = slice(url, startIndex, urlLen);
            else if (currentPart === "query") result.query = slice(url, startIndex, urlLen);
            else if (currentPart === "hash") result.hash = slice(url, startIndex, urlLen);
        }
    }

    return result;
}