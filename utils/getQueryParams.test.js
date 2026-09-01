import { describe, test, expect } from "bun:test";
import { getQueryParams } from "./getQueryParams"


describe("Тест функции getQueryParams", () => {
    test("Должна вернуть пустой объект, если нет '?'", () => {
        const result = getQueryParams('https://example.com/page');

        expect(result).toEqual({});
    });

    test("Должна вернуть пустой объект, если '?' в конце", () => {
        const result = getQueryParams('https://example.com?');

        expect(result).toEqual({});
    });

    test("Должна разобрать один параметр", () => {
        const result = getQueryParams('https://example.com?a=1');

        expect(result).toEqual({a: "1"});
    });

    test("Должна разобрать несколько параметров", () => {
        const result = getQueryParams('https://example.com?a=1&b=2&c=3');

        expect(result).toEqual({a: "1", b: "2", c: "3"});
    });

    test("Должна разобрать параметр без значения", () => {
        const result = getQueryParams('https://example.com?key');

        expect(result).toEqual({key: ""});
    });

    test("Должна разобрать несколько параметров, один из них без значения", () => {
        const result = getQueryParams('https://example.com?a=1&b');

        expect(result).toEqual({a: "1", b: ""});
    });

    test("Должна декодировать URL-кодирование", () => {
        const result = getQueryParams('https://example.com?name=%D0%90%D0%BD%D0%BD%D0%B0');

        expect(result).toEqual({name: "Анна"});
    });

    test("Должна декодировать пробелы", () => {
        const result = getQueryParams('https://example.com?q=hello%20world');

        expect(result).toEqual({q: "hello world"});
    });

    test("Должна работать с query-строкой без URL", () => {
        const result = getQueryParams('a=1&b=2');

        expect(result).toEqual({a: "1", b: "2"});
    });

    test("Должна выбросить TypeError, если url не строка", () => {
        expect(() => getQueryParams(123).toThrow(TypeError));
    });
});