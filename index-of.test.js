import { test, describe, expect} from "bun:test";
import { indexOf} from "./index-of";


describe("Тест функции indexOf", () => {
    test("Должен вернуть 0 при 'hello' и 'he'", () => {
        expect(indexOf("hello", "he")).toBe(0)
    });

    test("Должен вернуть 2 при 'hello' и 'll'", () => {
        expect(indexOf("hello", "ll")).toBe(2)
    });

    test("Должен вернуть 3 при 'hello' и 'lo'", () => {
        expect(indexOf("hello", "lo")).toBe(3)
    });

    test("Должен вернуть -1 при 'hello' и 'li'", () => {
        expect(indexOf("hello", "li")).toBe(-1)
    });

    test("Должен вернуть 0 при 'hello' и ''", () => {
        expect(indexOf("hello", "")).toBe(0)
    });

    test("Должен вернуть -1 при 'hi' и 'hello'", () => {
        expect(indexOf("hi", "hello")).toBe(-1)
    });

    test("Должен вернуть 0 при 'abc' и 'abc'", () => {
        expect(indexOf("abc", "abc")).toBe(0)
    });

    test("Должен вернуть 1 при 'ababa' и 'ba'", () => {
        expect(indexOf("ababa", "ba")).toBe(1)
    });

    test("Должен вернуть 2 при 'abababc' и 'ababc'", () => {
        expect(indexOf("abababc", "ababc")).toBe(2)
    });

    test("Должен вернуть 0 при 'hello' и 'h'", () => {
        expect(indexOf("hello", "h")).toBe(0)
    });

    test("Должен вернуть 2 при 'hello' и 'l'", () => {
        expect(indexOf("hello", "l")).toBe(2)
    });

    test("Должен вернуть 2 при 'привет' и 'иве'", () => {
        expect(indexOf("привет", "иве")).toBe(2)
    });

    test("Должен выбросить TypeError при 123 и 'hello'", () => {
        expect(() => indexOf(123, "hello")).toThrow(TypeError)
    });

    test("Должен выбросить TypeError при 'hello' и 123", () => {
        expect(() => indexOf("hello", 123)).toThrow(TypeError)
    });
});