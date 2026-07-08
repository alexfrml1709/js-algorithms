import { describe, test, expect } from "bun:test";
import { isEqual } from "./is-equal";


describe("Тесты isEqual", () => {
    test("Должен вернуть true для 'hello' и 'hello'", () => {
        expect(isEqual("hello", "hello")).toBe(true)
    });

    test("Должен вернуть true для '' и ''", () => {
        expect(isEqual("", "")).toBe(true)
    });

    test("Должен вернуть false для 'hello' и 'world'", () => {
        expect(isEqual("hello", "world")).toBe(false)
    });

    test("Должен вернуть false для 'hello' и 'hi'", () => {
        expect(isEqual("hello", "hi")).toBe(false)
    });

    test("Должен вернуть false для 'hello' и 'hello '", () => {
        expect(isEqual("hello", "hello ")).toBe(false)
    });

    test("Должен вернуть false для 'hello' и ''", () => {
        expect(isEqual("hello", "")).toBe(false)
    });

    test("Должен вернуть false для 'hello' и ' hello'", () => {
        expect(isEqual("hello", " hello")).toBe(false)
    });

    test("Должен вернуть true для 'привет' и 'привет'", () => {
        expect(isEqual("привет", "привет")).toBe(true)
    });

    test("Должен выбросить TypeError для 123 и 'hello'", () => {
        expect(() => isEqual(123, "hello")).toThrow(TypeError)
    });
    
    test("Должен выбросить TypeError для 'hello' и null", () => {
        expect(() => isEqual("hello", null)).toThrow(TypeError)
    });
});