import { describe, test, expect} from "bun:test"
import { filter } from "./filter"

describe("Тесты функции filter", () => {
    test('Должна отфильтровать чётные', () => {
        const arr = [1, 2, 3, 4];
        const result = filter(arr, x => x % 2 === 0);
        
        expect(arr).toEqual([1, 2, 3, 4]);
        expect(result).toEqual([2, 4]);
    });

    test('Должна вернуть пустой массив, если проверка не пройдена', () => {
        const arr = [1, 2, 3, 4];
        const result = filter(arr, x => x > 10);
        
        expect(arr).toEqual([1, 2, 3, 4]);
        expect(result).toEqual([]);
    });

    test('Должна вернуть все элементы, если все проверки пройдены', () => {
        const arr = [1, 2, 3, 4];
        const result = filter(arr, x => x > 0);
        
        expect(arr).toEqual([1, 2, 3, 4]);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test('Должна вернуть пустой массив для пустого исходного массива', () => {
        const arr = [];
        const result = filter(arr, x => {});
        
        expect(arr).toEqual([]);
        expect(result).toEqual([]);
    });

    test('Должна передать корректные аргументы в callback', () => {
        const calls = [];
        const arr = [10, 20];

        filter(arr, (el, i, arr) => {
            calls.push({ el, i, arr });
        });

        expect(arr).toEqual([10, 20]);
        expect(calls).toEqual([
            { el: 10, i: 0, arr: [10, 20] },
            { el: 20, i: 1, arr: [10, 20] },
        ]);
    });

    test("Должна выбросить TypeError если arr не массив или callback не функция", () => {
        expect(() => filter("qwe", x => {})).toThrow(TypeError);
        expect(() => filter([1, 2], "qwe")).toThrow(TypeError);
    });
});