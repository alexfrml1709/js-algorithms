import { test, describe, expect } from "bun:test";
import { at } from "./at"


describe("Тесты функции at", () => {
    test("Должна вернуть 10 для [10, 20, 30] и 0", () => {
        const arr = [10, 20, 30];
        const result = at(arr, 0);
        expect(result).toBe(10);
    });

    test("Должна вернуть 30 для [10, 20, 30] и -1", () => {
        const arr = [10, 20, 30];
        const result = at(arr, -1);
        expect(result).toBe(30);
    });

    test("Должна вернуть 20 для [10, 20, 30] и -2", () => {
        const arr = [10, 20, 30];
        const result = at(arr, -2);
        expect(result).toBe(20);
    });

    test("Должна вернуть 10 для [10, 20, 30] и -3", () => {
        const arr = [10, 20, 30];
        const result = at(arr, -3);
        expect(result).toBe(10);
    });

    test("Должна вернуть undefined для [10, 20, 30] и 5", () => {
        const arr = [10, 20, 30];
        const result = at(arr, 5);
        expect(result).toBe(undefined);
    });

    test("Должна вернуть undefined для [10, 20, 30] и -5", () => {
        const arr = [10, 20, 30];
        const result = at(arr, -5);
        expect(result).toBe(undefined);
    });

    test("Должна вернуть undefined для [] и 0", () => {
        const arr = [];
        const result = at(arr, 0);
        expect(result).toBe(undefined);
    });

    test("Должна вернуть undefined для [] и -1", () => {
        const arr = [];
        const result = at(arr, -1);
        expect(result).toBe(undefined);
    });

    test("Должна вернуть 'c' для ['a', 'b', 'c'] и 2", () => {
        const arr = ["a", "b", "c"];
        const result = at(arr, 2);
        expect(result).toBe("c");
    });

    test("Должна выбросить TypeError если arr не массив или index не число", () => {
        expect(() => at("qwe", 0)).toThrow(TypeError);
        expect(() => at([1, 2, 3], "qwe")).toThrow(TypeError);
    });
});