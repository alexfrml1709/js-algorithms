import { test, describe, expect } from "bun:test";
import { slice } from "./slice";


describe("Тест функции slice", () => {
    test("Должен вернуть 'hello' при 'hello', 0, 5", () => {
        expect(slice("hello", 0, 5)).toBe("hello")
    });

    test("Должен вернуть 'ell' при 'hello', 1, 4", () => {
        expect(slice("hello", 1, 4)).toBe("ell")
    });

    test("Должен вернуть 'llo' при 'hello', 2 и пропущенном end", () => {
        expect(slice("hello", 2)).toBe("llo")
    });

    test("Должен вернуть 'h' при 'hello', 0, 1", () => {
        expect(slice("hello", 0, 1)).toBe("h")
    });

    test("Должен вернуть 'h' при 'hello', 4 и пропущенном end", () => {
        expect(slice("hello", 4)).toBe("o")
    });

    test("Должен вернуть 'llo' при 'hello', -3 и пропущенном end", () => {
        expect(slice("hello", -3)).toBe("llo")
    });

    test("Должен вернуть 'hell' при 'hello', 0, -1", () => {
        expect(slice("hello", 0, -1)).toBe("hell")
    });

    test("Должен вернуть 'll' при 'hello', -3, -1", () => {
        expect(slice("hello", -3, -1)).toBe("ll")
    });
    
    test("Должен вернуть '' при 'hello', 4, 1", () => {
        expect(slice("hello", 4, 1)).toBe("")
    });

    test("Должен вернуть '' при 'hello', 10, 15", () => {
        expect(slice("hello", 10, 15)).toBe("")
    });

    test("Должен вернуть 'hel' при 'hello', -10, 3", () => {
        expect(slice("hello", -10, 3)).toBe("hel")
    });

    test("Должен вернуть '' при '', 0, 1", () => {
        expect(slice("", 0, 1)).toBe("")
    });

    test("Должен вернуть 'рив' при 'привет', 1, 4", () => {
        expect(slice("привет", 1, 4)).toBe("рив")
    });

    test("Должен выбросить TypeError, если str не строка", () => {
        expect(() => slice(1, 0, 1)).toThrow(TypeError)
    })

    test("Должен выбросить TypeError, если start не число", () => {
        expect(() => slice("hello", undefined, 1)).toThrow(TypeError)
    })

    test("Должен выбросить TypeError, если end не число", () => {
        expect(() => slice("hello", 0, "qwe")).toThrow(TypeError)
    })
});