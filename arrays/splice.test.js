import { test, describe, expect } from "bun:test";
import { splice } from "./splice"


describe("Тесты функции splice", () => {
    test("Должна вернуть [20, 30] для splice([10, 20, 30, 40], 1, 2)", () => {
        const arr = [10, 20, 30, 40];
        const result = splice(arr, 1, 2);
        expect(result).toEqual([20, 30]);
        expect(arr).toEqual([10, 40]);
    });

    test("Должна вернуть [10] для splice([10, 20, 30, 40], 0, 1)", () => {
        const arr = [10, 20, 30, 40];
        const result = splice(arr, 0, 1);
        expect(result).toEqual([10]);
        expect(arr).toEqual([20, 30, 40]);
    });

    test("Должна вернуть [30] для splice([10, 20, 30], 2, 1)", () => {
        const arr = [10, 20, 30];
        const result = splice(arr, 2, 1);
        expect(result).toEqual([30]);
        expect(arr).toEqual([10, 20]);
    });

    test("Должна вернуть [30, 40] для splice([10, 20, 30, 40], 2)", () => {
        const arr = [10, 20, 30, 40];
        const result = splice(arr, 2);
        expect(result).toEqual([30, 40]);
        expect(arr).toEqual([10, 20]);
    });

    test("Должна вернуть [] для splice([10, 20, 30, 40], 1, 0)", () => {
        const arr = [10, 20, 30, 40];
        const result = splice(arr, 1, 0);
        expect(result).toEqual([]);
        expect(arr).toEqual([10, 20, 30, 40]);
    });

    test("Должна вернуть [30] для splice([10, 20, 30, 40], -2, 1)", () => {
        const arr = [10, 20, 30, 40];
        const result = splice(arr, -2, 1);
        expect(result).toEqual([30]);
        expect(arr).toEqual([10, 20, 40]);
    });

    test("Должна вернуть [20, 30] для splice([10, 20, 30], 1, 5)", () => {
        const arr = [10, 20, 30];
        const result = splice(arr, 1, 5);
        expect(result).toEqual([20, 30]);
        expect(arr).toEqual([10]);
    });

    test("Должна вернуть [] для splice([10, 20, 30], 5, 1)", () => {
        const arr = [10, 20, 30];
        const result = splice(arr, 5, 1);
        expect(result).toEqual([]);
        expect(arr).toEqual([10, 20, 30]);
    });

    test("Должна вернуть [20] для splice([10, 20, 30], 1, 1, 'a', 'b')", () => {
        const arr = [10, 20, 30];
        const result = splice(arr, 1, 1, 'a', 'b');
        expect(result).toEqual([20]);
        expect(arr).toEqual([10, 'a', 'b', 30]);
    });

    test("Должна вернуть [] для splice([10, 20, 30], 1, 0, 'a')", () => {
        const arr = [10, 20, 30];
        const result = splice(arr, 1, 0, 'a');
        expect(result).toEqual([]);
        expect(arr).toEqual([10, 'a', 20, 30]);
    });

    test("Должна вернуть [] для splice([2, 3], 0, 0, 0, 1)", () => {
        const arr = [2, 3];
        const result = splice(arr, 0, 0, 0, 1);
        expect(result).toEqual([]);
        expect(arr).toEqual([0, 1, 2, 3]);
    });

    test("Должна вернуть [] для splice([1, 2], 2, 0, 3, 4)", () => {
        const arr = [1, 2];
        const result = splice(arr, 2, 0, 3, 4);
        expect(result).toEqual([]);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    test("Должна вернуть [1, 2] для splice([1, 2, 3], 0, 2, 'a')", () => {
        const arr = [1, 2, 3];
        const result = splice(arr, 0, 2, 'a');
        expect(result).toEqual([1, 2]);
        expect(arr).toEqual(['a', 3]);
    });
});