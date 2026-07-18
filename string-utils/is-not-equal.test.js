import { describe, expect, test } from "bun:test"
import { isNotEqual } from "./is-not-equal"


describe("Тест функции isNotEqual", () => {
    test("Должен вернуть true для 'hello' и 'world'", () => {
        expect(isNotEqual("hello", "world")).toBe(true)
    });

    test("Должен вернуть false для 'hello' и 'hello'", () => {
        expect(isNotEqual("hello", "hello")).toBe(false)
    });

    test("Должен вернуть true для 'hello' и 'hi'", () => {
        expect(isNotEqual("hello", "hi")).toBe(true)
    });

    test("Должен вернуть false для '' и ''", () => {
        expect(isNotEqual("", "")).toBe(false)
    });

    test("Должен выбросить TypeError если один из аргументов не строка", () => {
        expect(() => isNotEqual(123, "hello")).toThrow(TypeError)
        expect(() => isNotEqual("hello", 123)).toThrow(TypeError)
    });

    test("Должен выбросить TypeError для 'hello' и 'undefined'", () => {
        expect(() => isNotEqual("hello", undefined).toThrow(TypeError))
    });
});