import { describe, test, expect } from "bun:test";
import { values } from "./values";


describe("Тесты функции values", () => {
    test("Должна вернуть массив значений", () => {
        const obj = {a: 1, b: 2, c: 3};
        const result = values(obj);

        expect(result).toEqual([1, 2, 3]);
        expect(obj).toEqual({a: 1, b: 2, c: 3});
    });

    test("Должна вернуть пустой массив при пустом объекте", () => {
        const obj = {};
        const result = values(obj);

        expect(result).toEqual([]);
        expect(obj).toEqual({});
    });

    test("Должна вернуть значения разных типов", () => {
        const obj = {name: 'Анна', age: 25, active: true};
        const result = values(obj);

        expect(result).toEqual(['Анна', 25, true]);
        expect(obj).toEqual({name: 'Анна', age: 25, active: true});
    });

    test("Должна корректно обрабатывать null и undefined", () => {
        const obj = {a: null, b: undefined};
        const result = values(obj);

        expect(result).toEqual([null, undefined]);
        expect(obj).toEqual({a: null, b: undefined});
    });

    test("Унаследованные свойства не должны попасть в результат", () => {
        const protKey = "b";
        Object.prototype[protKey] = "qweqwe";

        const obj = {a: 1};
        const result = values(obj);

        expect(result).toEqual([1]);
        expect(obj).toEqual({a: 1});

        delete Object.prototype[protKey];
    });

    test("Должна выбросить TypeError, если obj === null", () => {
        expect(() => values(null)).toThrow(TypeError);
    });

    test("Должна выбросить TypeError, если obj не объект", () => {
        expect(() => values("qwe")).toThrow(TypeError);
        expect(() => values(undefined)).toThrow(TypeError);
    });
});