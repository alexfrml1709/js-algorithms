import { test, describe, expect } from "bun:test";
import { replace } from "./replace";


describe("Тест функции replace", () => {
    test("Должен вернуть 'hello everyone' при 'hello world', 'world', 'everyone'", () => {
        expect(replace("hello world", "world", "everyone")).toBe("hello everyone")
    });

    test("Должен вернуть 'hi world' при 'hello world', 'hello', 'hi'", () => {
        expect(replace("hello world", "hello", "hi")).toBe("hi world")
    });

    test("Должен вернуть 'hi world' при 'hello world', 'ello', 'i'", () => {
        expect(replace("hello world", "ello", "i")).toBe("hi world")
    });

    test("Должен вернуть 'hello' при 'hello', 'help', 'blabla'", () => {
        expect(replace("hello", "help", "blabla")).toBe("hello")
    });

    test("Должен вернуть 'hello' при 'hi', 'i', 'ello'", () => {
        expect(replace("hi", "i", "ello")).toBe("hello")
    });

    test("Должен вернуть 'heo' при 'hello', 'll', ''", () => {
        expect(replace("hello", "ll", "")).toBe("heo")
    });

    test("Должен вернуть 'babana' при 'banana', 'na', 'ba'", () => {
        expect(replace("banana", "na", "ba")).toBe("babana")
    });

    test("Должен вернуть 'привет всем' при 'привет мир', 'мир', 'всем'", () => {
        expect(replace("привет мир", "мир", "всем")).toBe("привет всем")
    });

    test("Должен выбросить TypeError если один из аргументов не строка", () => {
        expect(() => replace(123, "hello", "hi")).toThrow(TypeError)
        expect(() => replace("hello", 123, "hi")).toThrow(TypeError)
        expect(() => replace("hello", "ello", 123)).toThrow(TypeError)
    });
});