import { describe, test, expect } from "bun:test";
import { entries } from "./entries";


describe("Тесты функции entries", () => {
    test("Должна вернуть массив пар", () => {
        const obj = {a: 1, b: 2};
        const result = entries(obj);

        expect(result).toEqual([["a", 1], ["b", 2]]);
        expect(obj).toEqual({a: 1, b: 2});
    });

    test("Должна вернуть пустой массив при пустом объекте", () => {
        const obj = {};
        const result = entries(obj);

        expect(result).toEqual([]);
        expect(obj).toEqual({});
    });

    test("Должна корректно обрабатывать значения разных типов", () => {
        const obj = {1: [1, 2, null], b: true, c: null};
        const result = entries(obj);

        expect(result).toEqual([["1", [1, 2, null]], ["b", true], ["c", null]]);
        expect(obj).toEqual({1: [1, 2, null], b: true, c: null});
    });

    test("Должна выбросить TypeError, если obj === null", () => {
        expect(() => entries(null)).toThrow(TypeError);
    });

    test("Должна выбросить TypeError, если obj не объект", () => {
        expect(() => entries("qwe")).toThrow(TypeError);
        expect(() => entries(undefined)).toThrow(TypeError);
    });
});