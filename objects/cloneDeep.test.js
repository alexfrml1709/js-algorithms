import { describe, test, expect } from "bun:test";
import { cloneDeep } from "./cloneDeep";


describe("Тесты функции cloneDeep", () => {
    test("Должна вернуть примитив без изменений", () => {
        const result1 = cloneDeep(42);
        const result2 = cloneDeep("hi");

        expect(result1).toBe(42);
        expect(result2).toBe("hi");
    });

    test("Должна вернуть null при cloneDeep(null)", () => {
        const value = null;
        const result = cloneDeep(value);

        expect(result).toBe(null);
    });

    test("Должна вернуть новый массив", () => {
        const arr = [1, 2, 3];
        const result = cloneDeep(arr);

        expect(result).not.toBe(arr);
        expect(result).toEqual(arr);
    });

    test("Должна вернуть копию вложенного массива", () => {
        const arr = [1, [2, [3]]];
        const result = cloneDeep(arr);

        expect(result).not.toBe(arr);
        expect(result).toEqual([1, [2, [3]]]);
        expect(result[1]).not.toBe(arr[1]);
        expect(result[1][1]).not.toBe(arr[1][1]);
    });

    test("Должна вернуть копию плоского объекта", () => {
        const obj = {a: 1, b: 2};
        const result = cloneDeep(obj);

        expect(result).not.toBe(obj);
        expect(result).toEqual({a: 1, b: 2});
    });

    test("Должна вернуть копию вложенного объекта", () => {
        const obj = {a: 1, b: {c: 2, d: 3}};
        const result = cloneDeep(obj);

        expect(result).not.toBe(obj);
        expect(result).toEqual({a: 1, b: {c: 2, d: 3}});

        result.b.c = 42;
        expect(obj).toEqual({a: 1, b: {c: 2, d: 3}});
        expect(result).toEqual({a: 1, b: {c: 42, d: 3}});
        expect(result.b).not.toBe(obj.b);
    });

    test("Должна создать копию сложной смешанной структуры", () => {
        const value = [1, {a: 2, b: [3, [4]]}, [5, 6]];
        const result = cloneDeep(value);

        expect(result).not.toBe(value);
        expect(result).toEqual([1, {a: 2, b: [3, [4]]}, [5, 6]]);
    });

    test("Должна вернуть пустой массив при пустом входящем массиве", () => {
        const value = [];
        const result = cloneDeep(value);

        expect(result).not.toBe(value);
        expect(result).toEqual([]);
    });

    test("Должна вернуть пустой объект при пустом входящем объекте", () => {
        const value = {};
        const result = cloneDeep(value);

        expect(result).not.toBe(value);
        expect(result).toEqual({});
    });
});