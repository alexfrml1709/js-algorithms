import { test, describe, expect} from "bun:test";
import { selectionSort } from "./selectionSort";


describe("Тест функции selectionSort", () => {
    test("Должна вернуть пустой массив при пустом массиве", () => {
        const arr = [];

        expect(selectionSort(arr)).toEqual([]);
    });

    test("Должна отсортировать массив с одним элементом", () => {
        const arr = [3];

        expect(selectionSort(arr)).toEqual([3]);
    });

    test("Должна не менять уже отсортированный массив", () => {
        const arr = [1, 2, 3];

        expect(selectionSort(arr)).toEqual([1, 2, 3]);
    });

    test("Должна отсортировать массив с обратным порядком", () => {
        const arr = [3, 2, 1];

        expect(selectionSort(arr)).toEqual([1, 2, 3]);
    });

    test("Должна отсортировать массив с дубликатами", () => {
        const arr = [3, 2, 3, 1];

        expect(selectionSort(arr)).toEqual([1, 2, 3, 3]);
    });

    test("Должна не мутировать исходный массив", () => {
        const arr = [3, 2, 1];
        const result = selectionSort(arr);

        expect(result).toEqual([1, 2, 3]);
        expect(arr).toEqual([3, 2, 1]);
        expect(result).not.toBe(arr);
    });

    test("Должна выбросить TypeError, если arr не массив", () => {
        expect(() => selectionSort("qwe")).toThrow(TypeError   );
    })
});