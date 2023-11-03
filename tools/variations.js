/** @param {string} name */
export function getNumberOfChars(name) {
    // number of characters in: name
    return (name.length)
}

/** @param {string} name */
export function getFirstChar(name) {
    // first character of: name
    return name.charAt(0)
}

/** @param {string} name */
export function getLastChar(name) {
    // last character of: name
    return name.charAt(name.length - 1)
}

/** @param {string} name */
export function getLower(name) {
   let str = "";
    for (let i = 0; i < name.length; i++)
    {
        if (name[i] >= "A" && name[i] <= "Z")
            str += String.fromCharCode(name.charCodeAt(i) + 32);
        else
            str += name[i];
    }
    return str
}

/** @param {string} name */
export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    let str = "";
    for (let i = 0; i < name.length; i++)
    {
        if (name[i] >= "a" && name[i] <= "z")
            str += String.fromCharCode(name.charCodeAt(i) - 32);
        else
            str += name[i];
    }
    return str
}

/** @param {string} name */
export function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    name = getLower(name)
    let capitalizedName = name[0].toUpperCase() + name.slice(1);
    return capitalizedName
}
