import { describe, test, expect } from "bun:test";
import { parseUrl } from "./parseUrl"


describe("Тест функции parseUrl", () => {
    test("Должна разобрать полный URL", () => {
        const result = parseUrl('https://example.com:8080/path?q=1#top');

        expect(result).toEqual({protocol: 'https', host: 'example.com', port: '8080', path: '/path', query: 'q=1', hash: 'top'});
    });

    test("Должна разобрать URL без порта и query", () => {
        const result = parseUrl('https://example.com/page');

        expect(result).toEqual({protocol: 'https', host: 'example.com', port: '', path: '/page', query: '', hash: ''});
    });

    test("Должна разобрать URL c портом", () => {
        const result = parseUrl('http://localhost:3000/api');

        expect(result).toEqual({protocol: 'http', host: 'localhost', port: '3000', path: '/api', query: '', hash: ''});
    });

    test("Должна разобрать URL c query и hash", () => {
        const result = parseUrl('https://example.com/page?q=1#section');

        expect(result).toEqual({protocol: 'https', host: 'example.com', port: '', path: '/page', query: 'q=1', hash: 'section'});
        expect(result.query).toBe("q=1");
        expect(result.hash).toBe("section");
    });

    test("Должна разобрать URL без протокола", () => {
        const result = parseUrl('example.com/path');

        expect(result).toEqual({protocol: '', host: 'example.com', port: '', path: '/path', query: '', hash: ''});
    });

    test("Должна указать path '/' если пути нет", () => {
        const result = parseUrl('https://example.com');

        expect(result).toEqual({protocol: 'https', host: 'example.com', port: '', path: '/', query: '', hash: ''});
    });

    test("Должна разобрать URL только с hash", () => {
        const result = parseUrl('https://example.com#section');

        expect(result).toEqual({protocol: 'https', host: 'example.com', port: '', path: '/', query: '', hash: 'section'});
    });

    test("Должна разобрать URL только с query", () => {
        const result = parseUrl('https://example.com?q=1');

        expect(result).toEqual({protocol: 'https', host: 'example.com', port: '', path: '/', query: 'q=1', hash: ''});
    });

    test("Должна выбросить TypeError, если url не строка", () => {
        expect(() => parseUrl(123).toThrow(TypeError));
    })
});