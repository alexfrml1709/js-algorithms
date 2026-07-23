import { test, describe, expect } from "bun:test";
import { substring } from "./substring.js";


describe("Тест функции substring", () => {
    test("Должен вернуть 'hello' при 'hello', 0, 5", () => {
        expect(substring("hello", 0, 5)).toBe("hello")
    });

    test("Должен вернуть 'ell' при 'hello', 1, 4", () => {
        expect(substring("hello", 1, 4)).toBe("ell")
    });

    test("Должен вернуть 'h' при 'hello', 0, 1", () => {
        expect(substring("hello", 0, 1)).toBe("h")
    });

    test("Должен вернуть 'l' при 'hello', 2, 3", () => {
        expect(substring("hello", 2, 3)).toBe("l")
    });

    test("Должен вернуть 'o' при 'hello', 4, 5", () => {
        expect(substring("hello", 4, 5)).toBe("o")
    });

    test("Должен вернуть 'hello' при 'hello', 0, 10", () => {
        expect(substring("hello", 0, 10)).toBe("hello")
    });

    test("Должен вернуть 'llo' при 'hello', 2 и пустом третьем аргументе", () => {
        expect(substring("hello", 2)).toBe("llo")
    });

    test("Должен вернуть 'ell' при 'hello', 4, 1", () => {
        expect(substring("hello", 4, 1)).toBe("ell")
    });

    test("Должен вернуть 'hel' при 'hello', -2, 3", () => {
        expect(substring("hello", -2, 3)).toBe("hel")
    });

    test("Должен вернуть 'hel' при 'hello', 3, -1", () => {
        expect(substring("hello", 3, -1)).toBe("hel")
    });

    test("Должен вернуть 'hel' при 'hello', NaN, 3", () => {
        expect(substring("hello", NaN, 3)).toBe("hel")
    });

    test("Должен вернуть '' при 'hello', 5, 7", () => {
        expect(substring("hello", 5, 7)).toBe("")
    });

    test("Должен вернуть '' при '', 0, 1", () => {
        expect(substring("", 0, 1)).toBe("")
    });

    test("Должен вернуть 'рив' при 'привет', 1, 4", () => {
        expect(substring("привет", 1, 4)).toBe("рив")
    });

    test("Должен выбросить TypeError, если str не строка", () => {
        expect(() => substring(1, 0, 1)).toThrow(TypeError)
    })

    test("Должен выбросить TypeError, если start undefined или не число", () => {
        expect(() => substring("hello", undefined, 1)).toThrow(TypeError)
    })

    test("Должен выбросить TypeError, если end не число", () => {
        expect(() => substring("hello", 0, "qwe")).toThrow(TypeError)
    })
});