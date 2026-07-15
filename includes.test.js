import { test, describe, expect} from "bun:test";
import { isIncludes } from "./includes.js"


describe("Тест функции isIncludes", () => {
    test("Должен вернуть true при 'hello' и 'he'", () => {
        expect(isIncludes("hello", "he")).toBe(true)
    });

    test("Должен вернуть true при 'hello' и 'll'", () => {
        expect(isIncludes("hello", "ll")).toBe(true)
    });

    test("Должен вернуть true при 'hello' и 'lo'", () => {
        expect(isIncludes("hello", "lo")).toBe(true)
    });

    test("Должен вернуть false при 'hello' и 'li'", () => {
        expect(isIncludes("hello", "li")).toBe(false)
    });

    test("Должен вернуть 0 при 'hello' и ''", () => {
        expect(isIncludes("hello", "")).toBe(true)
    });

    test("Должен вернуть false при 'hi' и 'hello'", () => {
        expect(isIncludes("hi", "hello")).toBe(false)
    });

    test("Должен вернуть true при 'abc' и 'abc'", () => {
        expect(isIncludes("abc", "abc")).toBe(true)
    });

    test("Должен вернуть true при 'ababa' и 'ba'", () => {
        expect(isIncludes("ababa", "ba")).toBe(true)
    });

    test("Должен вернуть true при 'abababc' и 'ababc'", () => {
        expect(isIncludes("abababc", "ababc")).toBe(true)
    });

    test("Должен вернуть true при 'hello' и 'h'", () => {
        expect(isIncludes("hello", "h")).toBe(true)
    });

    test("Должен вернуть true при 'hello' и 'l'", () => {
        expect(isIncludes("hello", "l")).toBe(true)
    });

    test("Должен вернуть true при 'привет' и 'иве'", () => {
        expect(isIncludes("привет", "иве")).toBe(true)
    });

    test("Должен выбросить TypeError при 123 и 'hello'", () => {
        expect(() => isIncludes(123, "hello")).toThrow(TypeError)
    });

    test("Должен выбросить TypeError при 'hello' и 123", () => {
        expect(() => isIncludes("hello", 123)).toThrow(TypeError)
    });
});