/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
const revCase = (str) => {
    const chars =str.split('');
    const arr = [];
    chars.forEach((letter, i) => {
        if(letter.toUpperCase() === letter) {
            arr.push(letter.toLowerCase());
        } else {
            arr.push(letter.toUpperCase());
        }
    });
    return arr.join('');
}


