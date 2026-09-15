import { describe, test, expect} from "bun:test"
import { some } from "./some"

describe("Тесты функции some", () => {
    test('Должна вернуть true, если хотя бы один элемент удовлетворяет условие', () => {
        const arr = [1, 2, 3];
        const result = some(arr, x => x > 2);
        
        expect(arr).toEqual([1, 2, 3]);
        expect(result).toBe(true);
    });

    test('Должна вернуть false, если условие не проходит', () => {
        const arr = [1, 2, 3];
        const result = some(arr, x => x > 10);
        
        expect(arr).toEqual([1, 2, 3]);
        expect(result).toBe(false);
    });

    test('Должна вернуть false, при пустом исходном массиве', () => {
        const arr = [];
        const result = some(arr, x => {});
        
        expect(arr).toEqual([]);
        expect(result).toBe(false);
    });

    test("Должна остановиться при первом true", () => {
        let callCount = 0;

        const result = some([5, 10, 15], x => {
            callCount++;
            return x === 5;
        });

        expect(result).toBe(true);
        expect(callCount).toBe(1);
    });

    test("Должна выбросить TypeError если arr не массив или callback не функция", () => {
        expect(() => some("qwe", x => {})).toThrow(TypeError);
        expect(() => some([1, 2], "qwe")).toThrow(TypeError);
    });
});