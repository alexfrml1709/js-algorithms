import { test, describe, expect} from "bun:test";
import { reverse } from "./reverse"


describe("Тест функции reverse", () => {
    test("Должен вернуть 'olleh' при 'hello'", () => {
        expect(reverse("hello")).toBe("olleh")
    });

    test("Должен вернуть '' при ''", () => {
        expect(reverse("")).toBe("")
    });

    test("Должен вернуть 'a' при 'a'", () => {
        expect(reverse("a")).toBe("a")
    });

    test("Должен вернуть 'topot' при 'topot'", () => {
        expect(reverse("topot")).toBe("topot")
    });

    test("Должен вернуть 'c b a' при 'a b c'", () => {
        expect(reverse("a b c")).toBe("c b a")
    });

    test("Должен вернуть 'тевирп' при 'привет'", () => {
        expect(reverse("привет")).toBe("тевирп")
    });

    test("Должен выбросить TypeError при 123", () => {
        expect(() => reverse(123)).toThrow(TypeError)
    });

    test("Должен выбросить TypeError при null", () => {
        expect(() => reverse(null)).toThrow(TypeError)
    });
});