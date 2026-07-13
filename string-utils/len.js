export function len(string) {
    if (typeof string !== "string") {
        throw new TypeError("string должен быть строкой");
    };
    
    let stringLenght = 0
    while (string[stringLenght]) {
        stringLenght++
    }

    return stringLenght
};