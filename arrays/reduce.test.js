import { describe, test, expect} from "bun:test"
import { reduce } from "./reduce"

describe("Тесты функции reduce", () => {
    test('Должна посчитать сумму без initialValue', () => {
        const arr = [1, 2, 3];
        const result = reduce(arr, (acc, x) => acc + x);
        
        expect(arr).toEqual([1, 2, 3]);
        expect(result).toBe(6);
    });

    test('Должна посчитать сумму с initialValue', () => {
        const arr = [1, 2, 3];
        const result = reduce(arr, (acc, x) => acc + x, 4);
    
        expect(arr).toEqual([1, 2, 3]);
        expect(result).toBe(10);
    });

    test('Должна вернуть initialValue при пустом исходном массиве', () => {
        const arr = [];
        const result = reduce(arr, (acc, x) => acc + x, 42);
    
        expect(arr).toEqual([]);
        expect(result).toBe(42);
    });

    test('Должна сконкатенировать строки', () => {
        const arr = ['a', 'b', 'c'];
        const result = reduce(arr, (acc, x) => acc + x, '');
    
        expect(arr).toEqual(['a', 'b', 'c']);
        expect(result).toBe('abc');
    });

    test('Должна работать с массивом из одного элемента без initialValue', () => {
        const arr = [42];
        const result = reduce(arr, (acc, x) => acc + x);
    
        expect(arr).toEqual([42]);
        expect(result).toBe(42);
    });

    test('Должна передавать корректные аргументы в callback', () => {
        const arr = [1, 2];
        const initialValue = 5;
        const result = [];

        reduce(arr, (acc, item, index, array) => {
            result.push([acc, item, index, array]);
            return acc + item;
        }, initialValue);

        expect(result).toEqual([
            [5, 1, 0, [1, 2]],
            [6, 2, 1, [1, 2]],
        ]);
    });

    test('Должна выбросить TypeError для пустого массива без initialValue', () => {
        expect(() => reduce([], (acc, x) => acc + x)).toThrow(TypeError);
    });

    test("Должна выбросить TypeError если arr не массив или callback не функция", () => {
        expect(() => reduce("qwe", x => {})).toThrow(TypeError);
        expect(() => reduce([1, 2], "qwe")).toThrow(TypeError);
    });
});