import { test, describe, expect } from "bun:test";
import { includes } from "./includes"


describe("Тесты функции includes", () => {
    test("Должна вернуть true для [10, 20, 30] и 20", () => {
        const arr = [10, 20, 30];
        const result = includes(arr, 20);
        expect(result).toBe(true);
    });

    test("Должна вернуть false для [10, 20, 30] и 99", () => {
        const arr = [10, 20, 30];
        const result = includes(arr, 99);
        expect(result).toBe(false);
    });

    test("Должна вернуть false для [] и 20", () => {
        const arr = [];
        const result = includes(arr, 20);
        expect(result).toBe(false);
    });

    test("Должна вернуть true для [10, 20, 30] и 10", () => {
        const arr = [10, 20, 30];
        const result = includes(arr, 10);
        expect(result).toBe(true);
    });

    test("Должна вернуть true для [10, 20, 30] и 30", () => {
        const arr = [10, 20, 30];
        const result = includes(arr, 30);
        expect(result).toBe(true);
    });

    test("Должна вернуть true для ['a', 'b', 'c'] и 'b'", () => {
        const arr = ['a', 'b', 'c'];
        const result = includes(arr, 'b');
        expect(result).toBe(true);
    });

    test("Должна вернуть false для [0] и false", () => {
        const arr = [0];
        const result = includes(arr, false);
        expect(result).toBe(false);
    });

    test("Должна вернуть true для [0] и 0", () => {
        const arr = [0];
        const result = includes(arr, 0);
        expect(result).toBe(true);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => includes("qwe", 10)).toThrow(TypeError);
    });
});