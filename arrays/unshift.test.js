import { test, describe, expect } from "bun:test";
import { unshift } from "./unshift"


describe("Тесты функции unshift", () => {
    test("Должна вернуть 3 для [20, 30] и 10", () => {
        const arr = [20, 30];
        const result = unshift(arr, 10);
        expect(result).toBe(3);
        expect(arr).toEqual([10, 20, 30])
    });

    test("Должна вернуть 1 для [] и 'a'", () => {
        const arr = [];
        const result = unshift(arr, "a");
        expect(result).toBe(1);
        expect(arr).toEqual(["a"])
    });

    test("Должна вернуть 4 для ['b', 'c', 'd'] и 'a'", () => {
        const arr = ['b', 'c', 'd'];
        const result = unshift(arr, "a");
        expect(result).toBe(4);
        expect(arr).toEqual(['a', 'b', 'c', 'd'])
    });

    test("Должна корректно работать при многократном вызове для массива", () => {
        const arr = [30, 40];
        unshift(arr, 20)
        const result = unshift(arr, 10);
        expect(result).toBe(4);
        expect(arr).toEqual([10, 20, 30, 40])
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => unshift("qwe", 10)).toThrow(TypeError);
    });
});