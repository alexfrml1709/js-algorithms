import { test, describe, expect} from "bun:test";
import { trim } from "./trim"


describe("Тест функции trim", () => {
    test("Должен вернуть 'hello' при '  hello  '", () => {
        expect(trim("  hello  ",)).toBe("hello")
    });

    test("Должен вернуть 'hello' при 'hello  '", () => {
        expect(trim("hello  ",)).toBe("hello")
    });

    test("Должен вернуть 'hello' при '  hello'", () => {
        expect(trim("  hello",)).toBe("hello")
    });

    test("Должен вернуть 'hello' при 'hello'", () => {
        expect(trim("hello",)).toBe("hello")
    });

    test("Должен вернуть '' при '    '", () => {
        expect(trim("    ",)).toBe("")
    });

    test("Должен вернуть 'he  llo' при '  he  llo  '", () => {
        expect(trim("  he  llo  ",)).toBe("he  llo")
    });

    test("Должен вернуть '\t hello \n' при ' \t hello \n '", () => {
        expect(trim(" \t hello \n ",)).toBe("\t hello \n")
    });

    test("Должен выбросить TypeError при 123", () => {
        expect(() => trim(123)).toThrow(TypeError)
    });

    test("Должен выбросить TypeError при null", () => {
        expect(() => trim(null)).toThrow(TypeError)
    });
});