import { describe, test, expect } from "bun:test"
import { fill } from "./fill"

describe("Тесты функции fill", () => {
    test("Должна вернуть [0, 0, 0] при [10, 20, 30] и 0", () => {
        const arr = [10, 20, 30];
        const result = fill(arr, 0);
        expect(result).toEqual([0, 0, 0]);
        expect(arr).toEqual([0, 0, 0]);
        expect(result).toBe(arr);
    });

    test("Должна вернуть [10, '*', '*', 40] при fill([10, 20, 30, 40], '*', 1, 3)", () => {
        const arr = [10, 20, 30, 40];
        const result = fill(arr, '*', 1, 3);
        expect(result).toEqual([10, '*', '*', 40]);
        expect(arr).toEqual([10, '*', '*', 40]);
        expect(result).toBe(arr);
    });

    test("Должна вернуть [] при fill([], 5)", () => {
        const arr = [];
        const result = fill(arr, 5);
        expect(result).toEqual([]);
        expect(arr).toEqual([]);
        expect(result).toBe(arr);
    });

    test("Должна вернуть [10, 20, 30, 40] при fill([10, 20, 30, 40], '*', 2, 1)", () => {
        const arr = [10, 20, 30, 40];
        const result = fill(arr, '*', 2, 1);
        expect(result).toEqual([10, 20, 30, 40]);
        expect(arr).toEqual([10, 20, 30, 40]);
        expect(result).toBe(arr);
    });

    test("Должна вернуть [10, 20, '*', '*'] при fill([10, 20, 30, 40], '*', -2)", () => {
        const arr = [10, 20, 30, 40];
        const result = fill(arr, '*', -2);
        expect(result).toEqual([10, 20, '*', '*']);
        expect(arr).toEqual([10, 20, '*', '*']);
        expect(result).toBe(arr);
    });

    test("Должна вернуть ['*', '*', '*', 40] при fill([10, 20, 30, 40], '*', 0, -1)", () => {
        const arr = [10, 20, 30, 40];
        const result = fill(arr, '*', 0, -1);
        expect(result).toEqual(['*', '*', '*', 40]);
        expect(arr).toEqual(['*', '*', '*', 40]);
        expect(result).toBe(arr);
    });

    test("Должна вернуть ['*', '*', '*', '*'] при fill([10, 20, 30, 40], '*')", () => {
        const arr = [10, 20, 30, 40];
        const result = fill(arr, '*');
        expect(result).toEqual(['*', '*', '*', '*']);
        expect(arr).toEqual(['*', '*', '*', '*']);
        expect(result).toBe(arr);
    });

    test("Должна вернуть [10, 20, 30, 40] при fill([10, 20, 30, 40], '*', 5)", () => {
        const arr = [10, 20, 30, 40];
        const result = fill(arr, '*', 5);
        expect(result).toEqual([10, 20, 30, 40]);
        expect(arr).toEqual([10, 20, 30, 40]);
        expect(result).toBe(arr);
    });

    test("Должна вернуть ['*', '*', 30, 40] при fill([10, 20, 30, 40], '*', -10, 2)", () => {
        const arr = [10, 20, 30, 40];
        const result = fill(arr, '*', -10, 2);
        expect(result).toEqual(['*', '*', 30, 40]);
        expect(arr).toEqual(['*', '*', 30, 40]);
        expect(result).toBe(arr);
    });

    test("Должна выбросить TypeError если arr не массив или start/end не числа", () => {
        expect(() => fill("qwe", 0)).toThrow(TypeError);
        expect(() => fill([10, 20, 30, 40], '*', '*')).toThrow(TypeError);
        expect(() => fill([10, 20, 30, 40], '*', 0, '*')).toThrow(TypeError);
    });
});