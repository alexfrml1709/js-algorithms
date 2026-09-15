import { describe, test, expect} from "bun:test"
import { find } from "./find"

describe("Тесты функции find", () => {
    test('Должна вернуть первый элемент удовлетворяющий условию', () => {
        const arr = [1, 2, 3, 4];
        const result = find(arr, x => x > 2);
        
        expect(arr).toEqual([1, 2, 3, 4]);
        expect(result).toBe(3);
    });

    test('Должна вернуть undefined, если элемент не найден', () => {
        const arr = [1, 2, 3];
        const result = find(arr, x => x > 5);
        
        expect(arr).toEqual([1, 2, 3]);
        expect(result).toBe(undefined);
    });

    test('Должна вернуть undefined, для пустого исходного массива', () => {
        const arr = [];
        const result = find(arr, x => true);
        
        expect(arr).toEqual([]);
        expect(result).toBe(undefined);
    });

    test('Должна остановиться при первом вхождении элемента', () => {
        const arr = [1, 2, 3];
        let count = 0;
        const result = find(arr, x => {
            count++;
            return x > 1;
        });

        expect(arr).toEqual([1, 2, 3]);
        expect(result).toBe(2);
        expect(count).toBe(2);
    });

    test('Должна вернуть элемент, если он находится на первом месте в массиве', () => {
        const arr = [1, 2, 3];
        const result = find(arr, x => x > 0);
        
        expect(arr).toEqual([1, 2, 3]);
        expect(result).toBe(1);
    });

    test("Должна выбросить TypeError если arr не массив или callback не функция", () => {
        expect(() => find("qwe", x => {})).toThrow(TypeError);
        expect(() => find([1, 2], "qwe")).toThrow(TypeError);
    });
});