import { test, describe, expect } from "bun:test";
import { join } from "./join"


describe("Тесты функции join", () => {
    test("Должна вернуть '10,20,30' для join([10, 20, 30])", () => {
        const arr = [10, 20, 30];
        const result = join(arr);
        expect(result).toBe("10,20,30");
        expect(arr).toEqual([10, 20, 30]);
    });

    test("Должна вернуть '10-20-30' для join([10, 20, 30], '-')", () => {
        const arr = [10, 20, 30];
        const result = join(arr, "-");
        expect(result).toBe("10-20-30");
        expect(arr).toEqual([10, 20, 30]);
    });

    test("Должна вернуть 'a b c' для join(['a', 'b', 'c'], ' ')", () => {
        const arr = ['a', 'b', 'c'];
        const result = join(arr, ' ');
        expect(result).toBe("a b c");
        expect(arr).toEqual(['a', 'b', 'c']);
    });

    test("Должна вернуть 'abc' для join(['a', 'b', 'c'], '')", () => {
        const arr = ['a', 'b', 'c'];
        const result = join(arr, '');
        expect(result).toBe("abc");
        expect(arr).toEqual(['a', 'b', 'c']);
    });

    test("Должна вернуть '' для join([], '*')", () => {
        const arr = [];
        const result = join(arr, '*');
        expect(result).toBe("");
        expect(arr).toEqual([]);
    });

    test("Должна вернуть '42' для join([42], '*')", () => {
        const arr = [42];
        const result = join(arr, '*');
        expect(result).toBe("42");
        expect(arr).toEqual([42]);
    });

    test("Должна вернуть 'qwe' для join(['qwe', undefined, null, 4])", () => {
        const arr = ['qwe', undefined, null, 4];
        const result = join(arr);
        expect(result).toBe("qwe");
        expect(arr).toEqual(['qwe', undefined, null, 4]);
    });

    test("Должна вернуть 'qwe,,4' для join(['qwe', null, 4])", () => {
        const arr = ['qwe', null, 4];
        const result = join(arr);
        expect(result).toBe("qwe,,4");
        expect(arr).toEqual(['qwe', null, 4]);
    });

    test("Должна вернуть 'qwe,true,false' для join(['qwe', true, false])", () => {
        const arr = ['qwe', true, false];
        const result = join(arr);
        expect(result).toBe("qwe,true,false");
        expect(arr).toEqual(['qwe', true, false]);
    });

    test("Должна выбросить TypeError если arr не массив или separator не строка", () => {
        expect(() => join("qwe", "*")).toThrow(TypeError);
        expect(() => join([1, 2, 3], 2)).toThrow(TypeError);
    });
});