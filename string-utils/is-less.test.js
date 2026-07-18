import { test, describe, expect} from "bun:test"
import { isLess } from "./is-less"


describe("Тест функции isLess", () => {
    test("Должен вернуть true при 'car' и 'cat'", () => {
        expect(isLess("car", "cat")).toBe(true)
    });

    test("Должен вернуть false при 'cat' и 'car'", () => {
        expect(isLess("cat", "car")).toBe(false)
    });

    test("Должен вернуть false при 'hello' и 'hello'", () => {
        expect(isLess("hello", "hello")).toBe(false)
    });

    test("Должен вернуть true при 'hello' и 'hello!'", () => {
        expect(isLess("hello", "hello!")).toBe(true)
    });

    test("Должен вернуть true при 'A' и 'a'", () => {
        expect(isLess("A", "a")).toBe(true)
    });

    test("Должен вернуть true при '' и 'a'", () => {
        expect(isLess("", "a")).toBe(true)
    });

    test("Должен выбросить TypeError если один из аргументов не строка", () => {
        expect(() => isLess(123, "hello")).toThrow(TypeError)
        expect(() => isLess("hello", 123)).toThrow(TypeError)
    });
});