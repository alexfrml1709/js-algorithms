import { describe, test, expect, mock } from "bun:test"
import { forEach } from "./forEach"

describe("Тесты функции forEach", () => {
    test('Должна вызвать callback для каждого элемента', () => {
        const calls = [];

        forEach([1, 2, 3], (element, index, arr) => {
            calls.push({ element, index, arr });
        });

        expect(calls).toEqual([
            { element: 1, index: 0, arr: [1, 2, 3] },
            { element: 2, index: 1, arr: [1, 2, 3] },
            { element: 3, index: 2, arr: [1, 2, 3] },
        ]);
    });

    test('Не должна вызвать callback при пустом массиве', () => {
        const fn = mock();
        forEach([], fn);
        expect(fn).toHaveBeenCalledTimes(0);
    });

    test('Должна вернуть undefined при forEach([1], () => {})', () => {
        const result = forEach([1], () => {});

        expect(result).toBe(undefined);
    });

    test("Должна выбросить TypeError если arr не массив или callback не функция", () => {
        expect(() => forEach("qwe", () => {})).toThrow(TypeError);
        expect(() => forEach([1, 2], "qwe")).toThrow(TypeError);
    });
});