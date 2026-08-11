import { describe, test, expect } from "bun:test"
import { concat } from "./concat"

describe("Тесты функции concat", () => {
    test("Должна вернуть [1, 2, 3, 4] при concat([1, 2], [3, 4])", () => {
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        const result = concat(arr1, arr2);
        expect(result).toEqual([1, 2, 3, 4]);
        expect(arr1).toEqual([1, 2]);
        expect(arr2).toEqual([3, 4]);
    });

    test("Должна вернуть [1, 2] при concat([1, 2], [])", () => {
        const arr1 = [1, 2];
        const arr2 = [];
        const result = concat(arr1, arr2);
        expect(result).toEqual([1, 2]);
        expect(arr1).toEqual([1, 2]);
        expect(arr2).toEqual([]);
    });

    test("Должна вернуть [3, 4] при concat([], [3, 4])", () => {
        const arr1 = [];
        const arr2 = [3, 4];
        const result = concat(arr1, arr2);
        expect(result).toEqual([3, 4]);
        expect(arr1).toEqual([]);
        expect(arr2).toEqual([3, 4]);
    });

    test("Должна вернуть [] при concat([], [])", () => {
        const arr1 = [];
        const arr2 = [];
        const result = concat(arr1, arr2);
        expect(result).toEqual([]);
        expect(arr1).toEqual([]);
        expect(arr2).toEqual([]);
    });

    test("Должна вернуть ['a', 'b', 'c'] при concat(['a'], ['b', 'c'])", () => {
        const arr1 = ['a'];
        const arr2 = ['b', 'c'];
        const result = concat(arr1, arr2);
        expect(result).toEqual(['a', 'b', 'c']);
        expect(arr1).toEqual(['a']);
        expect(arr2).toEqual(['b', 'c']);
    });

    test("Должна вернуть [null, undefined, 'a', 1] при concat([null, Infinity], ['a', 1])", () => {
        const arr1 = [null, Infinity];
        const arr2 = ['a', 1];
        const result = concat(arr1, arr2);
        expect(result).toEqual([null, Infinity, 'a', 1]);
        expect(arr1).toEqual([null, Infinity]);
        expect(arr2).toEqual(['a', 1]);
    });

    test("Должна выбросить TypeError если arr1 или arr2 не массивы", () => {
        expect(() => concat("qwe", [3, 4])).toThrow(TypeError);
        expect(() => concat([1, 2], "qwe")).toThrow(TypeError);
    });
});