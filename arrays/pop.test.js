import { test, describe, expect } from "bun:test";
import { pop } from "./pop"


describe("Тесты функции pop", () => {
    test("Должна вернуть 30 для [10, 20, 30]", () => {
        const arr = [10, 20, 30];
        const result = pop(arr);
        expect(result).toBe(30);
        expect(arr).toEqual([10, 20])
    });

    test("Должна вернуть undefined для []", () => {
        const arr = [];
        const result = pop(arr);
        expect(result).toBe(undefined);
    });

    test("Должна вернуть 30 для [30]", () => {
        const arr = [30];
        const result = pop(arr);
        expect(result).toBe(30);
        expect(arr).toEqual([])
    });

    test("Должна вернуть 'b' для ['a', 'b']", () => {
        const arr = ["a", "b"];
        const result = pop(arr);
        expect(result).toBe("b");
        expect(arr).toEqual(["a"])
    });

    test("Должна вернуть false для [false]", () => {
        const arr = [false];
        const result = pop(arr);
        expect(result).toBe(false);
        expect(arr).toEqual([])
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => pop("qwe")).toThrow(TypeError);
    });
});