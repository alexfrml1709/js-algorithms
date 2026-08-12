import { describe, test, expect, mock } from "bun:test"
import { map } from "./map"

describe("Тесты функции map", () => {
    test('Должна удвоить элементы', () => {
        const arr = [1, 2, 3];
        const result = map(arr, x => x * 2);
        
        expect(arr).toEqual([1, 2, 3]);
        expect(result).toEqual([2, 4, 6]);
    });

    test('Должна вернуть пустой массив для пустого исходного', () => {
        const arr = [];
        const result = map(arr, fn => {});
        
        expect(arr).toEqual([]);
        expect(result).toEqual([]);
    });

    test('Должна передать корректные аргументы в callback', () => {
        const calls = [];
        const arr = [10, 20];
        map(arr, (el, i, arr) => {
            calls.push({ el, i });
            return el;
        });

        expect(arr).toEqual([10, 20]);
        expect(calls).toEqual([
            { el: 10, i: 0 },
            { el: 20, i: 1 },
        ]);
    });

    test('Должна работать с преобразованием типов', () => {
        const arr = [1, 2];
        const result = map(arr, x => String(x));
        
        expect(arr).toEqual([1, 2]);
        expect(result).toEqual(['1', '2']);
    });

    test("Должна выбросить TypeError если arr не массив или callback не функция", () => {
        expect(() => map("qwe", x => {})).toThrow(TypeError);
        expect(() => map([1, 2], "qwe")).toThrow(TypeError);
    });
});