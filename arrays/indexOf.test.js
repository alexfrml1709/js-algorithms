import { test, describe, expect } from "bun:test";
import { indexOf } from "./indexOf"


describe("Тесты функции indexOf", () => {
    test("Должна вернуть 1 для [10, 20, 30] и 20", () => {
        const arr = [10, 20, 30];
        const result = indexOf(arr, 20);
        expect(result).toBe(1);
    });

    test("Должна вернуть 0 для [10, 20, 30] и 10", () => {
        const arr = [10, 20, 30];
        const result = indexOf(arr, 10);
        expect(result).toBe(0);
    });

    test("Должна вернуть 2 для [10, 20, 30] и 30", () => {
        const arr = [10, 20, 30];
        const result = indexOf(arr, 30);
        expect(result).toBe(2);
    });

    test("Должна вернуть -1 для [10, 20, 30] и 99", () => {
        const arr = [10, 20, 30];
        const result = indexOf(arr, 99);
        expect(result).toBe(-1);
    });

    test("Должна вернуть 0 для [10, 20, 30, 10] и 10", () => {
        const arr = [10, 20, 30, 10];
        const result = indexOf(arr, 10);
        expect(result).toBe(0);
    });

    test("Должна вернуть -1 для [] и 10", () => {
        const arr = [];
        const result = indexOf(arr, 10);
        expect(result).toBe(-1);
    });

    test("Должна вернуть 2 для ['a', 'b', 'c'] и 'c'", () => {
        const arr = ['a', 'b', 'c'];
        const result = indexOf(arr, 'c');
        expect(result).toBe(2);
    });

    test("Должна вернуть 2 для ['abc', 'qwe', 'rty'] и 'rty'", () => {
        const arr = ['abc', 'qwe', 'rty'];
        const result = indexOf(arr, 'rty');
        expect(result).toBe(2);
    });

    test("Должна вернуть 1 для [null, 0] и 0", () => {
        const arr = [null, 0];
        const result = indexOf(arr, 0);
        expect(result).toBe(1);
    });

    test("Должна вернуть 1 для [true, false] и false", () => {
        const arr = [true, false];
        const result = indexOf(arr, false);
        expect(result).toBe(1);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => indexOf("qwe", 10)).toThrow(TypeError);
    });
});