import { test, describe, expect} from "bun:test";
import { binarySearch } from "./binarySearch";


describe("Тест функции binarySearch", () => {
    test("Должна вернуть -1 при пустом массиве", () => {
        const arr = [];

        expect(binarySearch(arr, 5)).toBe(-1);
    });

    test("Должна найти элемент при массиве с одним элементом", () => {
        const arr = [3];

        expect(binarySearch(arr, 3)).toBe(0);
    });

    test("Должна вернуть -1 при отсутствии искомого элемента при массиве с одним элементом", () => {
        const arr = [3];

        expect(binarySearch(arr, 5)).toBe(-1);
    });

    test("Должна найти элемент в начале", () => {
        const arr = [1, 2, 3, 4, 5];

        expect(binarySearch(arr, 1)).toBe(0);
    });

    test("Должна найти элемент в конце", () => {
        const arr = [1, 2, 3, 4, 5];

        expect(binarySearch(arr, 5)).toBe(4);
    });

    test("Должна найти элемент в середине", () => {
        const arr = [1, 2, 3, 4, 5];

        expect(binarySearch(arr, 3)).toBe(2);
    });

    test("Должна вернуть -1 если элемент отсутствует", () => {
        const arr = [1, 2, 3, 4, 5];

        expect(binarySearch(arr, 10)).toBe(-1);
    });

    test("Должна найти элемент в массиве с чётной длиной", () => {
        const arr = [1, 3, 5, 7];

        expect(binarySearch(arr, 3)).toBe(1);
    });

    test("Должна выбросить TypeError, если arr не массив", () => {
        expect(() => binarySearch("qwe", 1)).toThrow(TypeError);
    });
});