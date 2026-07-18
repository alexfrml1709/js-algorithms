import { test, describe, expect} from "bun:test";
import { endsWith} from "./ends-with"


describe("Тест функции endsWith", () => {
    test("Должен вернуть true при 'hello' и 'o'", () => {
        expect(endsWith("hello", "o")).toBe(true)
    });

    test("Должен вернуть true при 'hello' и 'llo'", () => {
        expect(endsWith("hello", "llo")).toBe(true)
    });

    test("Должен вернуть false при 'hello' и 'ell'", () => {
        expect(endsWith("hello", "ell")).toBe(false)
    });

    test("Должен вернуть true при 'hello' и ''", () => {
        expect(endsWith("hello", "")).toBe(true)
    });

    test("Должен вернуть false при 'hell' и 'qwerty'", () => {
        expect(endsWith("hell", "qwerty")).toBe(false)
    });

    test("Должен вернуть true при 'hell' и 'hell'", () => {
        expect(endsWith("hell", "hell")).toBe(true)
    });

    test("Должен выбросить TypeError если один из аргументов не строка", () => {
        expect(() => endsWith(123, "hello")).toThrow(TypeError)
        expect(() => endsWith("hello", 123)).toThrow(TypeError)
    });
});