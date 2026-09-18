import { describe, test, expect } from "bun:test";
import { groupBy } from "./groupBy";


describe("Тест функции groupBy", () => {
    test("Должна вернуть пустой объект для пустого массива", () => {
        const result = groupBy([], 'city');

        expect(result).toEqual({});
    });

    test("Должна сгруппировать по строковому ключу", () => {
        const result = groupBy([{city: 'Москва'}, {city: 'Питер'}, {city: 'Москва'}], 'city');

        expect(result).toEqual({'Москва': [{city: 'Москва'}, {city: 'Москва'}], 'Питер': [{city: 'Питер'}]});
    });

    test("Должна сгруппировать по числовому ключу", () => {
        const result = groupBy([{age: 25}, {age: 30}, {age: 25}], 'age');

        expect(result).toEqual({'25': [{age: 25}, {age: 25}], '30': [{age: 30}]});
    });

    test("Должна работать с одним элементом", () => {
        const result = groupBy([{x: 1}], 'x');

        expect(result).toEqual({'1': [{x: 1}]});
    });

    test("Все элементы в одной группе если ключ одинаковый", () => {
        const result = groupBy([{a: 1}, {a: 1}], 'a');

        expect(result).toEqual({'1': [{a: 1}, {a: 1}]});
    });

    test("Должна обработать отсутствующий ключ", () => {
        const result = groupBy([{ a: 1 }, {}], 'a');

        expect(result).toEqual({'1': [{a: 1}], 'undefined': [{}]});
    });

    test("Должна вернуть те же объекты (не копии)", () => {
        const arr = [{a: 1}, {a: 2}];
        const result = groupBy(arr, 'a');

        expect(result).toEqual({'1': [{a: 1}], '2': [{a: 2}]});
        expect(result['1'][0]).toBe(arr[0]);
    });

    test("Должна выбросить TypeError, если array не массив или key не строка", () => {
        expect(() => groupBy(123, "city").toThrow(TypeError));
        expect(() => groupBy([{city: 'Москва'}, {city: 'Питер'}, {city: 'Москва'}], 123).toThrow(TypeError));
    });
});