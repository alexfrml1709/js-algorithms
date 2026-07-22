import { test, describe, expect } from "bun:test";
import { replaceAll } from "./replaceAll";


describe("Тест функции replaceAll", () => {
    test("Должен вернуть 'heLLo' при 'hello', 'll', 'LL'", () => {
        expect(replaceAll("hello", "ll", "LL")).toBe("heLLo")
    });

    test("Должен вернуть 'baNANA' при 'banana', 'na', 'NA'", () => {
        expect(replaceAll("banana", "na", "NA")).toBe("baNANA")
    });

    test("Должен вернуть 'baa' при 'aaa', 'aa', 'ba'", () => {
        expect(replaceAll("aaa", "aa", "ba")).toBe("baa")
    });

    test("Должен вернуть 'hello' при 'hello', 'qwe', 'rty'", () => {
        expect(replaceAll("hello", "qwe", "rty")).toBe("hello")
    });

    test("Должен вернуть 'hello' при 'a', 'a', 'hello'", () => {
        expect(replaceAll("a", "a", "hello")).toBe("hello")
    });

    test("Должен вернуть 'hello' при 'hi', 'i', 'ello'", () => {
        expect(replaceAll("hi", "i", "ello")).toBe("hello")
    });

    test("Должен вернуть 'heo' при 'hello', 'll', ''", () => {
        expect(replaceAll("hello", "ll", "")).toBe("heo")
    });

    test("Должен вернуть '' при '', 'll', 'qwe'", () => {
        expect(replaceAll("", "ll", "qwe")).toBe("")
    });

    test("Должен вернуть 'XaXbXcX' при 'abc', '', 'X'", () => {
        expect(replaceAll("abc", "", "X")).toBe("XaXbXcX")
    });

    test("Должен выбросить TypeError если один из аргументов не строка", () => {
        expect(() => replaceAll(123, "hello", "hi")).toThrow(TypeError)
        expect(() => replaceAll("hello", 123, "hi")).toThrow(TypeError)
        expect(() => replaceAll("hello", "ello", 123)).toThrow(TypeError)
    });
});