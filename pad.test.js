import { test, describe, expect } from "bun:test";
import { pad } from "./pad";


describe("Тест функции pad", () => {
    test("Должен вернуть '---hi' при 'hi', 5, '-', 'left'", () => {
        expect(pad("hi", 5, "-", "left")).toBe("---hi")
    });

    test("Должен вернуть 'hi---' при 'hi', 5, '-', 'right'", () => {
        expect(pad("hi", 5, "-", "right")).toBe("hi---")
    });

    test("Должен вернуть '--hi--' при 'hi', 6, '-', 'both'", () => {
        expect(pad("hi", 6, "-", "both")).toBe("--hi--")
    });

    test("Должен вернуть '-hi--' при 'hi', 5, '-', 'both'", () => {
        expect(pad("hi", 5, "-", "both")).toBe("-hi--")
    });

    test("Должен вернуть 'hello' при 'hello', 5, '-', 'left'", () => {
        expect(pad("hello", 5, "-", "left")).toBe("hello")
    });

    test("Должен вернуть 'hello' при 'hello', 3, '-', 'both'", () => {
        expect(pad("hello", 3, "-", "both")).toBe("hello")
    });

    test("Должен вернуть 'hi   ' при 'hi', 5, ' ', 'right'", () => {
        expect(pad("hi", 5, " ", "right")).toBe("hi   ")
    });

    test("Должен вернуть '---' при '', 3, '-', 'both'", () => {
        expect(pad("", 3, "-", "both")).toBe("---")
    });

    test("Должен вернуть '' при '', 0, '-', 'both'", () => {
        expect(pad("", 0, "-", "both")).toBe("")
    });

    test("Должен вернуть 'ababahi' при 'hi', 7, 'ab', 'left'", () => {
        expect(pad("hi", 7, "ab", "left")).toBe("ababahi")
    });

    test("Должен вернуть 'hiababa' при 'hi', 7, 'ab', 'right'", () => {
        expect(pad("hi", 7, "ab", "right")).toBe("hiababa")
    });


    test("Должен выбросить Error если both не 'left', 'right' или 'both'", () => {
        expect(() => pad("qwerty", 10, "hi", "top")).toThrow(Error)
    });    


    test("Должен выбросить TypeError если str не строка", () => {
        expect(() => pad(123, 10, "hi", "right")).toThrow(TypeError)
    });
});