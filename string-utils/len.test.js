import { describe, test, expect } from 'bun:test';
import { len } from './len.js';


describe("Тесты len", () => {
    test('должен вернуть 5 для строки "hello"', () => {
        expect(len("hello")).toBe(5)
    });

    test('должен вернуть 0 для пустой строки', () => {
        expect(len("")).toBe(0)
    });

    test('должен вернуть 3 для строки их 3-х пробелов', () => {
        expect(len("   ")).toBe(3)
    });

    test('должен вернуть 6 для строки "привет"', () => {
        expect(len("привет")).toBe(6)
    });

    test('должен вернуть TypeError для 123', () => {
        expect(() => len(123)).toThrow(TypeError)
    });

    test('должен вернуть TypeError для null или undefined', () => {
        expect(() => len(null)).toThrow(TypeError);
        expect(() => len(undefined)).toThrow(TypeError);
    });
});