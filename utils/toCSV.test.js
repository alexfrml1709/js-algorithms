import { describe, test, expect } from "bun:test";
import { toCSV } from "./toCSV";


describe("Тест функции toCSV", () => {
    test("Должна вернуть пустую строку для пустого массива", () => {
        const result = toCSV([]);

        expect(result).toEqual("");
    });

    test("Должна преобразовать один объект", () => {
        const result = toCSV([{name: 'Анна', age: 25}]);

        expect(result).toEqual('name,age\nАнна,25\n');
    });

    test("Должна преобразовать несколько объектов", () => {
        const result = toCSV([{a: 1}, {a: 2}, {a: 3}]);

        expect(result).toEqual('a\n1\n2\n3\n');
    });

    test("Должна экранировать значение с запятой", () => {
        const result = toCSV([{name: 'Анна, Борис', age: 25}]);

        expect(result).toEqual('name,age\n"Анна, Борис",25\n');
    });

    test("Должна экранировать значение с переносом строки", () => {
        const result = toCSV([{desc: 'line1\nline2'}]);

        expect(result).toEqual('desc\n"line1\nline2"\n');
    });

    test("Должна преобразовывать числа в строку", () => {
        const result = toCSV([{x: 42}, {x: -7}]);

        expect(result).toEqual('x\n42\n-7\n');
    });

    test("Должна преобразовывать булевы значения в строку", () => {
        const result = toCSV([{a: true}, {a: false}]);

        expect(result).toEqual('a\ntrue\nfalse\n');
    });

    test("Должна превращать null в пустую строку", () => {
        const result = toCSV([{x: 1}, {x: null}]);

        expect(result).toEqual('x\n1\n\n');
    });

    test("Должна превращать undefined в пустую строку", () => {
        const result = toCSV([{x: 'a'}, {}]);

        expect(result).toEqual('x\na\n\n');
    });

    test("Должна выбросить TypeError, если data не строка", () => {
        expect(() => toCSV(123).toThrow(TypeError));
    });
});