import { describe, test, expect} from "bun:test"
import { findIndex } from "./findIndex"

describe("Тесты функции findIndex", () => {
    test('Должна вернуть индекс первого вхождения элемента', () => {
        const arr = [1, 2, 3, 4];
        const result = findIndex(arr, x => x > 2);
        
        expect(arr).toEqual([1, 2, 3, 4]);
        expect(result).toBe(2);
    });

    test('Должна вернуть -1, если элемент не найден', () => {
        const arr = [1, 2, 3];
        const result = findIndex(arr, x => x > 5);
        
        expect(arr).toEqual([1, 2, 3]);
        expect(result).toBe(-1);
    });

    test('Должна вернуть -1, для пустого исходного массива', () => {
        const arr = [];
        const result = findIndex(arr, x => true);
        
        expect(arr).toEqual([]);
        expect(result).toBe(-1);
    });

    test('Должна остановиться при первом вхождении элемента', () => {
        const arr = [1, 2, 3];
        let count = 0;
        const result = findIndex(arr, x => {
            count++;
            return x > 1;
        });

        expect(arr).toEqual([1, 2, 3]);
        expect(result).toBe(1);
        expect(count).toBe(2);
    });

    test('Должна вернуть 0, если элемент находится на первом месте в массиве', () => {
        const arr = [1, 2, 3];
        const result = findIndex(arr, x => x > 0);
        
        expect(arr).toEqual([1, 2, 3]);
        expect(result).toBe(0);
    });

    test("Должна выбросить TypeError если arr не массив или callback не функция", () => {
        expect(() => findIndex("qwe", x => {})).toThrow(TypeError);
        expect(() => findIndex([1, 2], "qwe")).toThrow(TypeError);
    });
});