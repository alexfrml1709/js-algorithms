import { describe, test, expect } from "bun:test"
import { reverse } from "./reverse"

describe("Тесты функции reverse", () => {
    test("Должна вернуть [3, 2, 1] при [1, 2, 3]", () => {
        const arr = [1, 2, 3];
        const result = reverse(arr);
        expect(result).toEqual([3, 2, 1]);
        expect(arr).toEqual([3, 2, 1]);
        expect(result).toBe(arr);
    });

    test("Должна вернуть [4, 3, 2, 1] при [1, 2, 3, 4]", () => {
        const arr = [1, 2, 3, 4];
        const result = reverse(arr);
        expect(result).toEqual([4, 3, 2, 1]);
        expect(arr).toEqual([4, 3, 2, 1]);
        expect(result).toBe(arr);
    });

    test("Должна вернуть [24] при [24]", () => {
        const arr = [24];
        const result = reverse(arr);
        expect(result).toEqual([24]);
        expect(arr).toEqual([24]);
        expect(result).toBe(arr);
    });

    test("Должна вернуть [] при []", () => {
        const arr = [];
        const result = reverse(arr);
        expect(result).toEqual([]);
        expect(arr).toEqual([]);
        expect(result).toBe(arr);
    });

    test("Должна вернуть ['c', 'b', 'a'] при ['a', 'b', 'c']", () => {
        const arr = ['a', 'b', 'c'];
        const result = reverse(arr);
        expect(result).toEqual(['c', 'b', 'a']);
        expect(arr).toEqual(['c', 'b', 'a']);
        expect(result).toBe(arr);
    });

    test("Должна вернуть [1, 'two', null] при [null, 'two', 1]", () => {
        const arr = [null, 'two', 1];
        const result = reverse(arr);
        expect(result).toEqual([1, 'two', null]);
        expect(arr).toEqual([1, 'two', null]);
        expect(result).toBe(arr);
    });

    test("Должна оставить массив без изменений при двойном вызове функции", () => {
        const arr = [1, 2, 3];
        const result = reverse(reverse(arr));
        expect(result).toEqual([1, 2, 3]);
        expect(arr).toEqual([1, 2, 3]);
        expect(result).toBe(arr);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => reverse("qwe")).toThrow(TypeError);
    });
});