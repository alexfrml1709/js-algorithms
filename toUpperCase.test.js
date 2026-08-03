import { test, describe, expect } from "bun:test";
import { toUpperCase } from "./toUpperCase";


describe("Тест функции toUpperCase", () => {
    test("Должен вернуть 'HELLO' при 'hello'", () => {
        expect(toUpperCase("hello")).toBe("HELLO")
    });

    test("Должен вернуть 'HELLO' при 'HELLO'", () => {
        expect(toUpperCase("HELLO")).toBe("HELLO")
    });

    test("Должен вернуть 'HELLO WORLD' при 'Hello World'", () => {
        expect(toUpperCase("Hello World")).toBe("HELLO WORLD")
    });

    test("Должен вернуть '  HELLO 123 ' при '  hello 123 '", () => {
        expect(toUpperCase("  hello 123 ")).toBe("  HELLO 123 ")
    });

    test("Должен вернуть 'HELLO!@#' при 'hello!@#'", () => {
        expect(toUpperCase("hello!@#")).toBe("HELLO!@#")
    });

    test("Должен вернуть '' при ''", () => {
        expect(toUpperCase("")).toBe("")
    });

    test("Должен вернуть '123!@#' при '123!@#'", () => {
        expect(toUpperCase("123!@#")).toBe("123!@#")
    });

    test("Должен вернуть 'ПРИВЕТ' при 'привет'", () => {
        expect(toUpperCase("привет")).toBe("ПРИВЕТ")
    });

    test("Должен вернуть 'HELLO ПРИВЕТ' при 'hello привет'", () => {
        expect(toUpperCase("hello привет")).toBe("HELLO ПРИВЕТ")
    });

    test("Должен вернуть 'ПРИВЁЁЁТ' при 'привёЁёт'", () => {
        expect(toUpperCase("привёЁёт")).toBe("ПРИВЁЁЁТ")
    });

    test("Должен выбросить TypeError если str не строка", () => {
        expect(() => toUpperCase(123)).toThrow(TypeError)
    });
});