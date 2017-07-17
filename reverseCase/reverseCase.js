/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
<<<<<<< HEAD
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


=======
>>>>>>> b40a74b08f81bd436c6e3f7bfe9bee0783a0c4be
