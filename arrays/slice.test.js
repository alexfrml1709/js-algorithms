import { test, describe, expect } from "bun:test";
import { slice } from "./slice"


describe("Тесты функции slice", () => {
    test("Должна вернуть [10, 20, 30] для slice([10, 20, 30], 0, 3)", () => {
        const arr = [10, 20, 30];
        const result = slice(arr, 0, 3);
        expect(result).toEqual([10, 20, 30]);
        expect(arr).toEqual[10, 20, 30];
    });

    test("Должна вернуть [20, 30] для slice([10, 20, 30, 40], 1, 3)", () => {
        const arr = [10, 20, 30, 40];
        const result = slice(arr, 1, 3);
        expect(result).toEqual([20, 30]);
        expect(arr).toEqual[10, 20, 30, 40];
    });

    test("Должна вернуть [30, 40] для slice([10, 20, 30, 40], 2)", () => {
        const arr = [10, 20, 30, 40];
        const result = slice(arr, 2);
        expect(result).toEqual([30, 40]);
        expect(arr).toEqual[10, 20, 30, 40];
    });

    test("Должна вернуть [30, 40] для slice([10, 20, 30, 40], -2)", () => {
        const arr = [10, 20, 30, 40];
        const result = slice(arr, -2);
        expect(result).toEqual([30, 40]);
        expect(arr).toEqual[10, 20, 30, 40];
    });

    test("Должна вернуть [10, 20, 30] для slice([10, 20, 30, 40], 0, -1)", () => {
        const arr = [10, 20, 30, 40];
        const result = slice(arr, 0, -1);
        expect(result).toEqual([10, 20, 30]);
        expect(arr).toEqual[10, 20, 30, 40];
    });

    test("Должна вернуть [20, 30] для slice([10, 20, 30, 40], -3, -1)", () => {
        const arr = [10, 20, 30, 40];
        const result = slice(arr, -3, -1);
        expect(result).toEqual([20, 30]);
        expect(arr).toEqual[10, 20, 30, 40];
    });

    test("Должна вернуть [] для slice([10, 20, 30, 40], 2, 2)", () => {
        const arr = [10, 20, 30, 40];
        const result = slice(arr, 2, 2);
        expect(result).toEqual([]);
        expect(arr).toEqual[10, 20, 30, 40];
    });

    test("Должна вернуть [] для slice([], 0, 2)", () => {
        const arr = [];
        const result = slice(arr, 0, 2);
        expect(result).toEqual([]);
        expect(arr).toEqual([]);
    });

    test("Должна вернуть [] для slice([10, 20, 30, 40], 5, 7)", () => {
        const arr = [10, 20, 30, 40];
        const result = slice(arr, 5, 7);
        expect(result).toEqual([]);
        expect(arr).toEqual([10, 20, 30, 40]);
    });

    test("Должна вернуть [10, 20] для slice([10, 20, 30, 40], -10, 2)", () => {
        const arr = [10, 20, 30, 40];
        const result = slice(arr, -10, 2);
        expect(result).toEqual([10, 20]);
        expect(arr).toEqual([10, 20, 30, 40]);
    });

    test("Должна вернуть ['a', 'b'] для slice(['a', 'b', 'c'], 0, 2)", () => {
        const arr = ['a', 'b', 'c'];
        const result = slice(arr, 0, 2);
        expect(result).toEqual(['a', 'b']);
        expect(arr).toEqual(['a', 'b', 'c']);
    });

    test("Должна выбросить TypeError если arr не массив или start или end не числа", () => {
        expect(() => slice("qwe", 0, 2)).toThrow(TypeError);
        expect(() => slice([1, 2, 3], "qwe", 2)).toThrow(TypeError);
        expect(() => slice([1, 2, 3], 0, "qwe")).toThrow(TypeError);
    });
});