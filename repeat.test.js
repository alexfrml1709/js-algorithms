import { test, describe, expect} from "bun:test";
import { repeat } from "./repeat"


describe("Тест функции repeat", () => {
    test("Должен вернуть 'ababab' при 'ab' и 3", () => {
        expect(repeat("ab", 3)).toBe("ababab")
    });

    test("Должен вернуть 'hello' при 'hello' и 1", () => {
        expect(repeat("hello", 1)).toBe("hello")
    });

    test("Должен вернуть '' при 'hello' и 0", () => {
        expect(repeat("hello", 0)).toBe("")
    });

    test("Должен вернуть '' при '' и 5", () => {
        expect(repeat("", 5)).toBe("")
    });

    test("Должен вернуть 'xxxx' при 'x' и 4", () => {
        expect(repeat("x", 4)).toBe("xxxx")
    });

    test("Должен вернуть 'aa' при 'a' и 2.7", () => {
        expect(repeat("a", 2.7)).toBe("aa")
    });

    test("Должен вернуть '' при 'a' и 0.5", () => {
        expect(repeat("a", 0.5)).toBe("")
    });

    test("Должен вернуть '' при 'a' и пропущенном count", () => {
        expect(repeat("a")).toBe("")
    });

    test("Должен вернуть 'дадада' при 'да' и 3", () => {
        expect(repeat("да", 3)).toBe("дадада")
    });

    test("Должен выбросить RangeError при 'a' и -1", () => {
        expect(() => repeat("a", -1)).toThrow(RangeError)
    });

    test("Должен выбросить TypeError при 'a' и '3'", () => {
        expect(() => repeat("a", "3")).toThrow(TypeError)
    });

    test("Должен выбросить TypeError при 123 и 3", () => {
        expect(() => repeat(123, 3)).toThrow(TypeError)
    });
});