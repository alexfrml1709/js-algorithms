import { describe, test, expect } from "bun:test";
import { keys } from "./keys"


describe("Тесты функции keys", () => {
    test("Должна вернуть массив ключей", () => {
        const obj = {a: 1, b: 2, c: 3};
        const result = keys(obj);

        expect(result).toEqual(["a", "b", "c"])
        expect(obj).toEqual({a: 1, b: 2, c: 3})
    });

    test("Должна вернуть пустой массив при пустом объекте", () => {
        const obj = {};
        const result = keys(obj);

        expect(result).toEqual([])
        expect(obj).toEqual({})
    });

    test("Должна вернуть ключ при объекте с одним свойством", () => {
        const obj = {a: 1};
        const result = keys(obj);

        expect(result).toEqual(["a"])
        expect(obj).toEqual({a: 1})
    });

    test("Унаследованные свойства не должны попасть в результат", () => {
        const protKey = "b";
        Object.prototype[protKey] = "qweqwe"

        const obj = {a: 1};
        const result = keys(obj);

        expect(result).toEqual(["a"])
        expect(obj).toEqual({a: 1})

        delete Object.prototype[protKey];
    });

    test("Должна выбросить TypeError, если obj === null", () => {
        expect(() => keys(null)).toThrow(TypeError)
    })

    test("Должна выбросить TypeError, если obj не объект", () => {
        expect(() => keys("qwe")).toThrow(TypeError)
        expect(() => keys(undefined)).toThrow(TypeError)
    })
});