import { test, describe, expect} from "bun:test"
import { isMore } from "./is-more"


describe("Тест функциии isMore", () => {
    test("Должен вернуть true при 'cat' и 'car'", () => {
        expect(isMore("cat", "car")).toBe(true)
    });

    test("Должен вернуть false при 'car' и 'cat'", () => {
        expect(isMore("car", "cat")).toBe(false)
    });

    test("Должен вернуть false при 'hello' и 'hello'", () => {
        expect(isMore("hello", "hello")).toBe(false)
    });

    test("Должен вернуть true при 'hello!' и 'hello'", () => {
        expect(isMore("hello!", "hello")).toBe(true)
    });

    test("Должен вернуть false при 'hello' и 'hello!'", () => {
        expect(isMore("hello", "hello!")).toBe(false)
    });
    
    test("Должен вернуть true при 'b' и 'aaaa'", () => {
        expect(isMore("b", "aaaa")).toBe(true)
    });
    
    test("Должен вернуть false при 'Admin' и 'admin'", () => {
        expect(isMore("Admin", "admin")).toBe(false)
    });
    
    test("Должен вернуть false при ' a' и 'aa'", () => {
        expect(isMore(" a", "aa")).toBe(false)
    });
    
    test("Должен вернуть true при 'aaa ' и 'aaa'", () => {
        expect(isMore("aaa ", "aaa")).toBe(true)
    });
    
    test("Должен вернуть false при '' и ''", () => {
        expect(isMore("", "")).toBe(false)
    });

    test("Должен вернуть false при '' и 'a'", () => {
        expect(isMore("", "a")).toBe(false)
    });

    test("Должен выбросить TypeError если хотя бы один из аргументов не строка", () => {
        expect(() => isMore(123, "aaa")).toThrow(TypeError)
    });

    test("Должен вернуть false при 'aaa' и 'ab'", () => {
        expect(isMore("aaa", "ab")).toBe(false)
    });
});