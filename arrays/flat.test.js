import { describe, test, expect} from "bun:test"
import { flat } from "./flat"

describe("Тесты функции flat", () => {
    test('Должна разгладить один уровень', () => {
        const arr = [1, [2, 3], 4];
        const result = flat(arr);

        expect(arr).toEqual([1, [2, 3], 4]);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test('Должна разгладить два уровня', () => {
        const arr = [1, [2, [3, 4], 5], 6];
        const result = flat(arr, 2);

        expect(arr).toEqual([1, [2, [3, 4], 5], 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('Должна разгладить полностью с Infinity', () => {
        const arr = [1, [2, [3, [4]], 5], 6];
        const result = flat(arr, Infinity);

        expect(arr).toEqual([1, [2, [3, [4]], 5], 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('Должна вернуть копию для уже плоского массива', () => {
        const arr = [1, 2];
        const result = flat(arr, 5);

        expect(arr).toEqual([1, 2]);
        expect(result).toEqual([1, 2]);
    });

    test('Должна вернуть пустой массив при пустом исходном', () => {
        const arr = [];
        const result = flat(arr, 5);

        expect(arr).toEqual([]);
        expect(result).toEqual([]);
    });

    test('Должна не разглаживать при depth = 0', () => {
        const arr = [1, [2, [3, 4], 5], 6];
        const result = flat(arr, 0);

        expect(arr).toEqual([1, [2, [3, 4], 5], 6]);
        expect(result).toEqual([1, [2, [3, 4], 5], 6]);
    });

    test('Должна обрабатывать смешанную вложенность при depth по умолчанию', () => {
        const arr = [1, [2, [3, 4], 5], 6];
        const result = flat(arr);

        expect(arr).toEqual([1, [2, [3, 4], 5], 6]);
        expect(result).toEqual([1, 2, [3, 4], 5, 6]);
    });

    test("Должна выбросить TypeError если arr не массив или depth не число", () => {
        expect(() => flat("qwe", 2)).toThrow(TypeError);
        expect(() => flat([1, 2], "qwe")).toThrow(TypeError);
    });
});