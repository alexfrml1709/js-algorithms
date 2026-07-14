function len(string) {
    let stringLenght = 0
    while (string[stringLenght]) {
        stringLenght++
    }

    return stringLenght
};


export function indexOf(str, search) {
    if (typeof str !== "string" || typeof search !== "string") {
        throw new TypeError("Оба аргумента должны быть строками");
    };

    let index = 0

    if (search === "") {
        return index
    }

    let searchLength = len(search)
    let searchWindow = ""

    for (let i = 0; i < searchLength; i++) {
        searchWindow += str[i]
    }

    let strLenght = len(str)

    for (let i = 0; i < strLenght; i++) {
        if (searchWindow === search) {
            return index
        } else {
            searchWindow = ""
    
            for (let j = 0; j < searchLength; j++) {
                searchWindow += str[i + j]
            }

            if (i !== 0) {
                index++;
            }
        }
    }

    return -1
}