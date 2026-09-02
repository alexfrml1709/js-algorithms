import { describe, test, expect } from "bun:test";
import { fromCSV } from "./fromCSV";
import { toCSV } from "./toCSV";


describe("Тест функции fromCSV", () => {
    test("Должна вернуть пустой массив для пустой строки", () => {
        const result = fromCSV("");

        expect(result).toEqual([]);
    });

    test("Должна разобрать простой CSV", () => {
        const result = fromCSV("a,b\n1,2");

        expect(result).toEqual([{a: 1, b: 2}]);
    });

    test("Должна разобрать несколько строк", () => {
        const result = fromCSV("name,age\nАнна,25\nБорис,30");

        expect(result).toEqual([{name: 'Анна', age: 25}, {name: 'Борис', age: 30}]);
    });

    test("Должна обработать экранированную запятую", () => {
        const result = fromCSV('name\n"Анна, Борис"');

        expect(result).toEqual([{name: 'Анна, Борис'}]);
    });

    test("Должна обработать экранированные кавычки", () => {
        const result = fromCSV('name\n"say ""hi"""');

        expect(result).toEqual([{name: 'say "hi"'}]);
    });

    test("Должна быть обратной к toCSV (простой случай)", () => {
        const result = fromCSV(toCSV([{ a: '1', b: '2' }, { a: '3', b: '4' }]));

        expect(result).toEqual([{a: '1', b: '2'}, {a: '3', b: '4'}]);
    });

    test("Должна выполнить round-trip с запятыми в данных", () => {
        const data = [{name: 'Анна, Борис', city: 'Москва'}, {name: 'Вера', city: 'Питер'}];
        const result = fromCSV(toCSV(data));

        expect(result).toEqual([{name: 'Анна, Борис', city: 'Москва'}, {name: 'Вера', city: 'Питер'}]);
        expect(result[0].name).toBe('Анна, Борис');
    });

    test("Должна выполнить round-trip с кавычками в данных", () => {
        const data = [{text: 'say "hi"'}, {text: 'say "bye"'}];
        const result = fromCSV(toCSV(data));

        expect(result).toEqual([{text: 'say "hi"'}, {text: 'say "bye"'}]);
    });

    test("Должна выполнить round-trip со всеми спецсимволами сразу", () => {
        const data = [{msg: 'Привет, мир!', author: 'Я сказал: "Пока!"'}];
        const result = fromCSV(toCSV(data));

        expect(result).toEqual([{msg: 'Привет, мир!', author: 'Я сказал: "Пока!"'}]);
    });

    test("Должна выбросить TypeError, если csvString не строка", () => {
        expect(() => fromCSV(123).toThrow(TypeError));
    });
});