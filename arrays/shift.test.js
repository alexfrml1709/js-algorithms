import { test, describe, expect } from "bun:test";
import { shift } from "./shift"
import { len } from "./len"


describe("Тесты функции shift", () => {
    test("Должна вернуть 10 для [10, 20, 30]", () => {
        const arr = [10, 20, 30];
        const result = shift(arr);
        expect(result).toBe(10);
        expect(arr).toEqual([20, 30])
    });

    test("Должна вернуть undefined для []", () => {
        const arr = [];
        const result = shift(arr);
        expect(result).toBe(undefined);
        expect(arr).toEqual([])
    });

    test("Должна вернуть 10 для [10]", () => {
        const arr = [10];
        const result = shift(arr);
        expect(result).toBe(10);
        expect(arr).toEqual([])
    });

    test("Должна вернуть 0 для [0, 1]", () => {
        const arr = [0, 1];
        const result = shift(arr);
        expect(result).toBe(0);
        expect(arr).toEqual([1])
    });

    test("Должна корректно работать при многократном вызове для одного массива", () => {
        const arr = [10, 20, 30];
        const removed = shift(arr);
        expect(removed).toBe(10)
        expect(len(arr)).toBe(2)
        const result = shift(arr);
        expect(result).toBe(20);
        expect(arr).toEqual([30])
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => shift("qwe")).toThrow(TypeError);
    });
});