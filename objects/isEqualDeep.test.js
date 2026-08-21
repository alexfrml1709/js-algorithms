import { expect, test, describe } from "bun:test";
import { isEqualDeep } from "./isEqualDeep";


describe("Тесты функции isEqualDeep", () => {
    test("Должна вернуть false для разных типов", () => {
        const a = 1;
        const b = '1';
        const result = isEqualDeep(a, b);

        expect(result).toBe(false);
    });

    test("Должна вернуть true для одинаковых чисел", () => {
        const a = 1;
        const b = 1;
        const result = isEqualDeep(a, b);

        expect(result).toBe(true);
    });


    test("Должна вернуть true для двух null", () => {
        const a = null;
        const b = null;
        const result = isEqualDeep(a, b);

        expect(result).toBe(true);
    });

    test("Должна вернуть false для объектов, один из которых null", () => {
        const a = {};
        const b = null;
        const result = isEqualDeep(a, b);

        expect(result).toBe(false);
    });

    test("Должна вернуть false для null и undefined", () => {
        const a = null;
        const b = undefined;
        const result = isEqualDeep(a, b);

        expect(result).toBe(false);
    });

    test("Должна вернуть true для одинаковых плоских объектов", () => {
        const a = {a: 1, b: 2};
        const b = {a: 1, b: 2};
        const result = isEqualDeep(a, b);

        expect(result).toBe(true);
    });

    test("Должна вернуть false для плоских объектов с разными значениями", () => {
        const a = {a: 1, b: 2};
        const b = {a: 2, b: 2};
        const result = isEqualDeep(a, b);

        expect(result).toBe(false);
    });

    test("Должна вернуть false для плоских объектов с разным количеством ключей", () => {
        const a = {a: 1, b: 2, c: 3};
        const b = {a: 1, b: 2};
        const result = isEqualDeep(a, b);

        expect(result).toBe(false);
    });

    test("Должна вернуть true для глубоко вложенных одинаковых объектов", () => {
        const a = {a: 1, b: {c: 2, d: 3}};
        const b = {a: 1, b: {c: 2, d: 3}};
        const result = isEqualDeep(a, b);

        expect(result).toBe(true);
    });

    test("Должна вернуть true для плоских одинаковых массивов", () => {
        const a = [1, 2, 3];
        const b = [1, 2, 3];
        const result = isEqualDeep(a, b);

        expect(result).toBe(true);
    });

    test("Должна вернуть false для плоских массивов разной длины", () => {
        const a = [1, 2, 3];
        const b = [1, 2];
        const result = isEqualDeep(a, b);

        expect(result).toBe(false);
    });

    test("Должна вернуть true для глубоко вложенных одинаковых структур", () => {
        const a = {a: {b: [1, 2] }};
        const b = {a: {b: [1, 2] }};
        const result = isEqualDeep(a, b);

        expect(result).toBe(true);
    });

    test("Должна вернуть false для глубоко вложенных разных структур", () => {
        const a = {a: {b: [1, 2] }};
        const b = {a: {b: [1, 3] }};
        const result = isEqualDeep(a, b);

        expect(result).toBe(false);
    });

    test("Должна вернуть false для пустых массива и объекта", () => {
        const a = {};
        const b = [];
        const result = isEqualDeep(a, b);

        expect(result).toBe(false);
    });

    test("Должна вернуть false для {a: undefined} и {} ", () => {
        const a = {a: undefined};
        const b = {};
        const result = isEqualDeep(a, b);

        expect(result).toBe(false);
    });

    test("Должна вернуть true для {a: undefined} и {b: undefined} ", () => {
        const a = {a: undefined};
        const b = {b: undefined};
        const result = isEqualDeep(a, b);

        expect(result).toBe(true);
    });
});

