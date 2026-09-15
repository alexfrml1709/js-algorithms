import { describe, test, expect} from "bun:test"
import { every } from "./every"

describe("Тесты функции every", () => {
    test('Должна вернуть true, если все элементы удовлетворяют условию', () => {
        const arr = [2, 4, 6];
        const result = every(arr, x => x % 2 === 0);
        
        expect(arr).toEqual([2, 4, 6]);
        expect(result).toBe(true);
    });

    test('Должна вернуть false, если хотя бы один элемент не удовлетворяет условию', () => {
        const arr = [2, 3, 4];
        const result = every(arr, x => x % 2 === 0);
        
        expect(arr).toEqual([2, 3, 4]);
        expect(result).toBe(false);
    });

    test('Должна вернуть true, при пустом исходном массиве', () => {
        const arr = [];
        const result = every(arr, x => x % 2 === 0);
        
        expect(arr).toEqual([]);
        expect(result).toBe(true);
    });

    test("Должна остановиться при первом false", () => {
        let callCount = 0;

        const result = every([5, 10, 15], (x) => {
            callCount++;
            return x < 10;
        });

        expect(result).toBe(false);
        expect(callCount).toBe(2);
    }); 

    test("Должна выбросить TypeError если arr не массив или callback не функция", () => {
        expect(() => every("qwe", x => {})).toThrow(TypeError);
        expect(() => every([1, 2], "qwe")).toThrow(TypeError);
    });
});