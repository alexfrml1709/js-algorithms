import { test, describe, expect } from "bun:test";
import { push } from "./push"


describe("Тесты функции push", () => {
    test("Должна вернуть 3 для [10, 20] и 30", () => {
        const arr = [10, 20];
        const result = push(arr, 30);
        expect(result).toBe(3);
        expect(arr).toEqual([10, 20, 30])
    });

    test("Должна вернуть 1 для [] и 'a'", () => {
        const arr = [];
        const result = push(arr, "a");
        expect(result).toBe(1);
        expect(arr).toEqual(["a"])
    });

    test("Должна вернуть 2 для [] и 'a', затем 'b'", () => {
        const arr = [];
        push(arr, "a")
        const result = push(arr, "b");
        expect(result).toBe(2);
        expect(arr).toEqual(["a", "b"])
    });

    test("Должна корректно добавлять 0, false, null", () => {
        const arr = [10, 20];
        push(arr, 0)
        push(arr, false)
        const result = push(arr, null);
        expect(result).toBe(5);
        expect(arr).toEqual([10, 20, 0, false, null])
    });

    test("Должна вернуть 1 для [] и {a: 1}", () => {
        const arr = [];
        const result = push(arr, {a: 1});
        expect(result).toBe(1);
        expect(arr).toEqual([{a: 1}])
    });

    test("Исходный массив изменился, должна вернуть 2 для [10, 20] и 30 при arr[len - 1]", () => {
        const arr = [10, 20];
        const result = push(arr, 30);
        expect(result - 1).toBe(2);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => push("qwe", 0)).toThrow(TypeError);
    });
});