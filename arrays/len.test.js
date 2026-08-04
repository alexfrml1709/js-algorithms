import { test, describe, expect } from "bun:test";
import { len } from "./len"


describe("Тесты функции len", () => {
    test("Функция не мутирует массив", () => {
        const arr = [10, 20, 30];
        len(arr);
        expect(arr).toEqual([10, 20, 30]);
    });

    test("Должна вернуть 3 для [1, 2, 3]", () => {
        const arr = [1, 2, 3];
        const result = len(arr);
        expect(result).toBe(3);
    });

    test("Должен вернуть 0 для []", () => {
        const arr = [];
        const result = len(arr);
        expect(result).toBe(0);
    });

    test("Должен вернуть 1 для [123]", () => {
        const arr = [123];
        const result = len(arr);
        expect(result).toBe(1);
    });

    test("Должна вернуть 4 для ['a', 'b', 'c', 'd']", () => {
        const arr = ['a', 'b', 'c', 'd'];
        const result = len(arr);
        expect(result).toBe(4);
    });

    test("Должна вернуть 5 для [1, 'two', true, 0, null]", () => {
        const arr = [1, 'two', true, 0, null];
        const result = len(arr);
        expect(result).toBe(5);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => len("hi")).toThrow(TypeError);
        expect(() => len(123)).toThrow(TypeError);
        expect(() => len({0: "a"})).toThrow(TypeError);
        expect(() => len()).toThrow(TypeError);
    });
});