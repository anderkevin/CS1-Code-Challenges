/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

 const longstr = (arr) => {;
  arr.sort((a, b) => {
    return b.length - a.length;
  });
  return arr[0];
 }
