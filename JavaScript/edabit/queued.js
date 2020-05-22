// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

//     Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
//     Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).

// Examples

// removeLeadingTrailing("230.000") ➞ "230"

// removeLeadingTrailing("00402") ➞ "402"

// removeLeadingTrailing("03.1400") ➞ "3.14"

// removeLeadingTrailing("30") ➞ "30"

// Notes

//     Return a string.
//     If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
//     If the number is 0, 0.0, 000, 00.00, etc... return "0".

function removeLeadingTrailing (n) {
  // return n.replace(/^0+(\d)|(\d)0+$|(\d)\.0+$/g, '$1$2$3')
}

// In the image below, squares are either empty or filled with a circle.
// Steps vs Empty Squarest
// Create a function that takes a number step (which equals HALF the width of a square) and returns the amount of empty squares. The image shows the squares with step 1, 2 and 3. The return value is the number of cells not on a diagonal, which is 0 for the first square, 8 for the second, and 24 for the third.
// Examples
// emptySq(1) ➞ 0
// emptySq(3) ➞ 24
// emptySq(10) ➞ 360
// Notes
//     Test input will always be a positive integer.
//     The width of the square will always be even.

function emptySq (step) {
  // return step * (step - 1) / 2
}

/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an resultay. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

function allAnagrams (str) {
  const result = []
  const strArr = str.split('')
  for (let i = 0; i < strArr.length; i++) {
    for (let j = i + 1; j < strArr.length; j++) {
      result.push(strArr[i] + strArr[j])
    }
  }
  return result
}
allAnagrams('abc')
