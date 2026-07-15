import { test, describe, expect} from "bun:test";
import { startsWith} from "./starts-with"


describe("Тест функции startsWith", () => {
    test("Должен вернуть true при 'hello' и 'h'", () => {
        expect(startsWith("hello", "h")).toBe(true)
    });

    test("Должен вернуть true при 'hello' и 'hell'", () => {
        expect(startsWith("hello", "hell")).toBe(true)
    });

    test("Должен вернуть false при 'hello' и 'el'", () => {
        expect(startsWith("hello", "el")).toBe(false)
    });

    test("Должен вернуть true при 'hello' и ''", () => {
        expect(startsWith("hello", "")).toBe(true)
    });

    test("Должен вернуть false при 'hell' и 'hello'", () => {
        expect(startsWith("hell", "hello")).toBe(false)
    });

    test("Должен вернуть true при 'hell' и 'hell'", () => {
        expect(startsWith("hell", "hell")).toBe(true)
    });

    test("Должен выбросить TypeError при 123 и 'hello'", () => {
        expect(() => startsWith(123, "hello")).toThrow(TypeError)
    });
});