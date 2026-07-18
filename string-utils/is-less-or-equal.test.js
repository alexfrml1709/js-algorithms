import { test, describe, expect} from "bun:test"
import { isLessOrEqual } from "./is-less-or-equal";


describe("Тест функциии isLessOrEqual", () => {
    test("Должен вернуть true при 'car' и 'cat'", () => {
        expect(isLessOrEqual("car", "cat")).toBe(true)
    });

    test("Должен вернуть false при 'cat' и 'car'", () => {
        expect(isLessOrEqual("cat", "car")).toBe(false)
    });

    test("Должен вернуть true при 'hello' и 'hello'", () => {
        expect(isLessOrEqual("hello", "hello")).toBe(true)
    });

    test("Должен вернуть false при 'hello!' и 'hello'", () => {
        expect(isLessOrEqual("hello!", "hello")).toBe(false)
    });

    test("Должен вернуть true при 'hello' и 'hello!'", () => {
        expect(isLessOrEqual("hello", "hello!")).toBe(true)
    });
    
    test("Должен вернуть true при '' и ''", () => {
        expect(isLessOrEqual("", "")).toBe(true)
    });

    test("Должен выбросить TypeError если один из аргументов не строка", () => {
        expect(() => isLessOrEqual(123, "hello")).toThrow(TypeError)
        expect(() => isLessOrEqual("hello", 123)).toThrow(TypeError)
    });
});