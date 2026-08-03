import { test, describe, expect } from "bun:test";
import { toLowerCase } from "./toLowerCase";


describe("Тест функции toLowerCase", () => {
    test("Должен вернуть 'hello' при 'HELLO'", () => {
        expect(toLowerCase("HELLO")).toBe("hello")
    });

    test("Должен вернуть 'hello' при 'hello'", () => {
        expect(toLowerCase("hello")).toBe("hello")
    });

    test("Должен вернуть 'hello world' при 'Hello World'", () => {
        expect(toLowerCase("Hello World")).toBe("hello world")
    });

    test("Должен вернуть '  hello 123 ' при '  HELLO 123 '", () => {
        expect(toLowerCase("  HELLO 123 ")).toBe("  hello 123 ")
    });

    test("Должен вернуть 'hello!@#' при 'HELLO!@#'", () => {
        expect(toLowerCase("HELLO!@#")).toBe("hello!@#")
    });

    test("Должен вернуть '' при ''", () => {
        expect(toLowerCase("")).toBe("")
    });

    test("Должен вернуть '123!@#' при '123!@#'", () => {
        expect(toLowerCase("123!@#")).toBe("123!@#")
    });

    test("Должен вернуть 'привет' при 'ПРИВЕТ'", () => {
        expect(toLowerCase("ПРИВЕТ")).toBe("привет")
    });

    test("Должен вернуть 'hello привет' при 'HELLO ПРИВЕТ'", () => {
        expect(toLowerCase("HELLO ПРИВЕТ")).toBe("hello привет")
    });

    test("Должен вернуть 'привёёёт' при 'ПРИВЁёЁт'", () => {
        expect(toLowerCase("ПРИВЁёЁт")).toBe("привёёёт")
    });

    test("Должен выбросить TypeError если str не строка", () => {
        expect(() => toLowerCase(123)).toThrow(TypeError)
    });
});