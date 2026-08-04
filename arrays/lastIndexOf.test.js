import { test, describe, expect } from "bun:test";
import { lastIndexOf } from "./lastIndexOf"


describe("Тесты функции lastIndexOf", () => {
    test("Функция не мутирует массив", () => {
        const arr = [10, 20, 30];
        lastIndexOf(arr, 20);
        expect(arr).toEqual([10, 20, 30]);
    });

    test("Должна вернуть 2 для [10, 20, 10, 30] и 10", () => {
        const arr = [10, 20, 10, 30];
        const result = lastIndexOf(arr, 10);
        expect(result).toBe(2);
    });

    test("Должна вернуть -1 для [10, 20, 10, 30] и 99", () => {
        const arr = [10, 20, 10, 30];
        const result = lastIndexOf(arr, 99);
        expect(result).toBe(-1);
    });

    test("Должна вернуть 0 для [10, 20, 30] и 10", () => {
        const arr = [10, 20, 30];
        const result = lastIndexOf(arr, 10);
        expect(result).toBe(0);
    });

    test("Должна вернуть 2 для [10, 20, 30] и 30", () => {
        const arr = [10, 20, 30];
        const result = lastIndexOf(arr, 30);
        expect(result).toBe(2);
    });

    test("Должна вернуть -1 для [] и 10", () => {
        const arr = [];
        const result = lastIndexOf(arr, 10);
        expect(result).toBe(-1);
    });

    test("Должна вернуть 2 для ['a', 'b', 'a'] и 'a'", () => {
        const arr = ['a', 'b', 'a'];
        const result = lastIndexOf(arr, 'a');
        expect(result).toBe(2);
    });

    test("Должна вернуть 1 для ['abc', 'qwe', 'rty'] и 'qwe'", () => {
        const arr = ['abc', 'qwe', 'rty'];
        const result = lastIndexOf(arr, 'qwe');
        expect(result).toBe(1);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => lastIndexOf("qwe", 10)).toThrow(TypeError);
    });
});