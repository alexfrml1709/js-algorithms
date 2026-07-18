import { test, describe, expect} from "bun:test"
import { isMoreOrEqual } from "./is-more-or-equal"; 


describe("Тест функциии isMoreOrEqual", () => {
    test("Должен вернуть true при 'cat' и 'car'", () => {
        expect(isMoreOrEqual("cat", "car")).toBe(true)
    });

    test("Должен вернуть true при 'hello' и 'hello'", () => {
        expect(isMoreOrEqual("hello", "hello")).toBe(true)
    });

    test("Должен вернуть false при 'car' и 'cat'", () => {
        expect(isMoreOrEqual("car", "cat")).toBe(false)
    });

    test("Должен вернуть true при 'hello!' и 'hello'", () => {
        expect(isMoreOrEqual("hello!", "hello")).toBe(true)
    });

    test("Должен вернуть false при 'hello' и 'hello!'", () => {
        expect(isMoreOrEqual("hello", "hello!")).toBe(false)
    });
    
    test("Должен вернуть true при '' и ''", () => {
        expect(isMoreOrEqual("", "")).toBe(true)
    });

    test("Должен выбросить TypeError если один из аргументов не строка", () => {
        expect(() => isMoreOrEqual(123, "hello")).toThrow(TypeError)
        expect(() => isMoreOrEqual("hello", 123)).toThrow(TypeError)
    });
});