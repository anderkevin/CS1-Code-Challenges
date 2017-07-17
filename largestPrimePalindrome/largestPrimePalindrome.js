/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */
const largestPrimePalindrome = () => {
    const PalindromeChecker =(number) => {
        const StrNum = number.toString();
        const reversedStrNum = strNum.split('').reverse().join('');
        if (number === Number(reverseStrNum)) {
            return true;
        }
        return false;    
    };
const primeChecker = (num) => {
    const squareRoot = Math.sqrt(num);
    if (num % 2 === 0) return false;
    for (let i = 3; i <= squareRoot; i+=2) {
        if (num % i === 0) return false;
    }
    return true;
};
for (let num = 1000; num >= 11; num--) {
    if (palindromeChecker(num) && primeChecker(num)) return num;
    }
};

console.log(largestPrimePalindrome());
