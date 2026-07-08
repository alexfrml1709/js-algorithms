export function len(string) {
    if (typeof string !== "string") {
        throw new TypeError("string должен быть строкой");
    };
    
    return string.length
};