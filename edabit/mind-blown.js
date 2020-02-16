// Create a function that takes in a year and returns the correct century.
// Examples

// century(1756) ➞ "18th century"

// century(1555) ➞ "16th century"

// century(1000) ➞ "10th century"

// century(1001) ➞ "11th century"

// century(2005) ➞ "21st century"

// Notes

//     All years will be between 1000 and 2010.
//     The 11th century is between 1001 and 1100.
//     The 18th century is between 1701-1800.

function century(year) {
	let cen = String(Math.ceil(year * 0.01)).slice(0,2);
	return cen === '21' ? `${cen}st century` : `${cen}th century`;
}

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  // repeat after me
  let result = '';
  while (num > 0) {
    result += str;
    num--;
  }
  return result;
}

// Create a function that takes a number and returns an array with the digits of the number in reverse order.
// Examples

// reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

// reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

// reverseArr(12345) ➞ [5, 4, 3, 2, 1]

// Notes

// N/A

function reverseArr(num) {
	return Array.from(String(num)).map(i => parseInt(i)).reverse();
}

// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.
// Examples

// middleEarth(["Frodo", "Sam", "Gandalf"]) ➞ true

// middleEarth(["Frodo", "Saruman", "Sam"]) ➞ false

// middleEarth(["Orc", "Sam", "Frodo", "Legolas"]) ➞ true

// Notes

//     No matter who comes first, the result must be true if Frodo and Sam are side by side.
//     There is only one Sam and one Frodo in the array.

function middleEarth(arr) {
	return Math.abs(arr.indexOf('Sam') - arr.indexOf('Frodo')) === 1;
}

// Throughout the 12 days of Christmas, my true love gave me in total 364 items.

// Create a function where given n days as an argument, return the total amount of items received throughout those days as an integer.
// Examples

// xmasItems(12) ➞ 364

// xmasItems(3) ➞ 10

// xmasItems(31) ➞ 5456

// Notes

//     You will only be given valid inputs.
//     Remember to return as an integer.
//     0 as input should return 0.
//     Look the specific links into the Resources tab for more informations.

function xmasItems(n) {
	return (n * (n + 1) * (n + 2)) / 6;
}

// John is playing a dice game. The rules are as follows.

//     Roll two dice.
//     Add the numbers on the dice together.
//     Add the total to your overall score.
//     Repeat this for three rounds.

// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.
// Examples

// diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21

// diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0

// diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27

// Notes

//     Ignore all other arrays in the matrix if a throw happens to be doubles and go straight to returning 0.
//     John only has two dice and will always give you outcomes for three rounds.

function diceGame(arr) {
	return arr.every(i => i[0] !== i[1]) ? arr.flat(Infinity).reduce((acc,cur) => acc + cur) : 0;
}

//--------------------------------------------------------------------------
// Create a function that takes an array of numbers and returns only the even values.
// Examples

// noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]

// noOdds([43, 65, 23, 89, 53, 9, 6]) ➞ [6]

// noOdds([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]

// Notes

//     Return all even numbers in the order they were given.
// 		All test cases contain valid numbers ranging from 1 to 3000.
		
function noOdds(arr) {
	return arr.filter(x => x % 2 === 0);
}

//--------------------------------------------------------------
// Create a function that adds a string ending to each member in an array.
// Examples

// addEnding(["clever", "meek", "hurried", "nice"], "ly")
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]

// addEnding(["new", "pander", "scoop"], "er")
// ➞ ["newer", "panderer", "scooper"]

// addEnding(["bend", "sharpen", "mean"], "ing")
// ➞ ["bending", "sharpening", "meaning"]

// Notes

//     Don't forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.

function addEnding(arr, ending) {
	return arr.map(i => i + ending);
}

//----------------------------------------------------
// A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.

// Create a function that determines whether an input value is omnipresent for a given array.
// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

// isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true

// isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false

// Notes

// Sub-arrays can be any length.

function isOmnipresent(arr, val) {
	return arr.every(i => i.includes(val));
}

//------------------------------------------------------
// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples

// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"

// Notes

// N/A

function sevenBoom(arr) {
	return /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';
}

//----------------------------------------------------------
// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// // original array

// [1, 3, 5]
// // original array transformed into a set

// Create a function that transforms an array into a set.
// Examples

// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

// set([4, 4, 4, 4]) ➞ [4]

// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

// Notes

//     For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
//     See resources for a hint if you get stuck.

function set(arr) {
	return [...new Set(arr)];
}

//------------------------------------------------------------
// Given a number n, write a function that returns PI to n decimal places.
// Examples

// myPi(5) ➞ 3.14159

// myPi(4) ➞ 3.1416

// myPi(15) ➞ 3.141592653589793

// Notes

//     n will not be above 15, to keep this challenge simple.
//     Round up the last digit if the next digit in PI is greater or equal to 5 (see second example above).
//     The return value must be a number, not a string.

function myPi(n) {
	return parseFloat(Math.PI.toFixed(n));
}

//---------------------------------------------------------------
// Write a regular expression that matches only an even number. Numbers will be presented as strings.
// Examples

// "2341" ➞ false

// "132" ➞ true

// "29" ➞ false

// "5578" ➞ true

// Notes

// This challenge is designed to use Regex only.

let x = /^\d*[02468]$/;

//-------------------------------------------------------
// Given a word, write a function that returns the first index and the last index of a character.
// Examples

// charIndex("hello", "l") ➞ [2, 3]
// // The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞ [0, 8]
// // The first "c" has index 0, the last "c" has index 8.

// charIndex("happy", "h") ➞ [0, 0]
// // Only one "h" exists, so the first and last index is 0.

// charIndex("happy", "e") ➞ undefined
// // "e" does not exist in "happy", so we return undefined.

// Notes

//     If the character does not exist in the word, return undefined.
//     If only one instance of the character exists, the first and last index will be the same.
//     Check the Resources tab for hints.

function charIndex(word, char) {
	return word.includes(char) ? undefined : [word.indexOf(char), word.lastIndexOf(char)];
}

// Create a function that takes a string and returns the number (count) of vowels contained within it.
// Examples

// countVowels("Celebration") ➞ 5

// countVowels("Palm") ➞ 1

// countVowels("Prediction") ➞ 4

// Notes

//     a, e, i, o, u are considered vowels (not y).
//     All test cases are one word and only contain letters.

function countVowels(str) {
	return str.match(/[aeiou]/gi).length;
}

// --------------------------------------------------------
// Write a function that converts an object into an array, where each element represents a key-value pair.
// Examples

// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

// Notes

// Return an empty array if the object is empty.
function toArray(obj) {
	return Object.entrieso(obj);
}


// -----------------------------------------------------------
// Return the total number of arrays inside a given array.
// Examples

// numOfSubbarrays([[1, 2, 3]]) ➞ 1

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

// numOfSubbarrays([1, 2, 3]) ➞ 0

// Notes

// N/A

function numOfSubbarrays(arr) {
	return Array.isArray(arr[0]) ? arr.length : 0;
}

//-------------------------------------------------------
// Create a function that counts the number of towers.
// Examples

// count_towers([
//   ["     ##         "],
//   ["##   ##        ##"],
//   ["##   ##   ##   ##"],
//   ["##   ##   ##   ##"]
// ]) ➞ 4

// count_towers([
//   ["                         ##"],
//   ["##             ##   ##   ##"],
//   ["##        ##   ##   ##   ##"],
//   ["##   ##   ##   ##   ##   ##"]
// ]) ➞ 6

// count_towers([
//   ["##"],
//   ["##"]
// ]) ➞ 1

// Notes

//     You are given a 2D matrix.
//     Towers are two characters in length.
//     Towers are made only of the character #.
//     Some tests have no towers, return 0.

function countTowers(towers) {
  var towerBase = towers[1][0];
  var count = 0;
  towerBase = towerBase.split(" ").filter((currentVal) => {return currentVal === "##" ? currentVal : null;});
  return towerBase.length;
}

// ---------------------------------------------------------------

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Examples

// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

// Notes

// Expect any positive number between 1 and 1000.

function addUp(num) {
  var sum = 0;
	for (i = 1; i <= num; i++) {
		sum += i;
	}
  return sum;
}
addUp(4);

// ------------------------------------------------------------
// Create a function that returns true when num1 is equal to num2.
// Examples

// isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false

// Notes

// Don't forget to return the result.

function isSameNum(num1, num2) {
	return num1 === num2 ? true : false;
}

// --------------------------------------------------------------
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// Examples

// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2

// Notes

//     Don't forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.

function addition(num) {
	var result = 0;
	return result = num += 1;
}

// -----------------------------------------------------
// Write a function that converts hours into seconds.
// Examples

// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400

// Notes

//     60 seconds in a minute, 60 minutes in an hour
//     Don't forget to return your answer.

function howManySeconds(hours) {
	return hours * 60 * 60;
}

// --------------------------------------------------------
// You are given 2 out of 3 angles in a triangle, in degrees.

// Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

//     An acute angle is less than 90 degrees.
//     A right angle is exactly 90 degrees.
//     An obtuse angle is greater than 90 degrees (but less than 180 degrees).

// For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.
// Examples

// missingAngle(27, 59) ➞ "obtuse"

// missingAngle(135, 11) ➞ "acute"

// missingAngle(45, 45) ➞ "right"

// Notes

// The sum of angles of any triangle is always 180 degrees.

function missingAngle(angle1, angle2) {
	let angles = angle1 + angle2;
	return angles === 90 ? "right"
	: angles > 90 ? "acute" 
	: angles < 90 ? "obtuse"
	: null;
}

//------------------------------------------------------
// A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:

//     false
//     null
//     undefined
//     0
//     NaN
//     ""

// In JavaScript, an empty object and an empty array are both considered "truthy," but an empty string is considered false when evaluated as a Boolean (this behavior is what we call "falsey").

// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.
// Examples

// isTruthy(0) ➞ 0

// isTruthy(false) ➞ 0

// isTruthy("") ➞ 0

// isTruthy("false") ➞ 1

// Notes

//     You may have to take into account NaN's unique behavior in JavaScript. While other falsey values are equal to themselves, NaN != NaN
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.

function isTruthy(input) {
	return !input ? 0 : 1;
}

//-----------------------------------------------------
// Create a function that takes an array of strings and returns the words that are exactly four letters.
// Examples

// isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]

// isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]

// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]

// Notes

// You can expect valid strings for all test cases.

function isFourLetters(arr) {
	return arr.filter(i => i.length === 4);
}

// --------------------------------------------------------
// Create a function that takes an array of numbers. Return the largest number in the array.
// Examples

// findLargestNum([4, 5, 1, 3]) ➞ 5

// findLargestNum([300, 200, 600, 150]) ➞ 600

// findLargestNum([1000, 1001, 857, 1]) ➞ 1001

// Notes

//     Expect either a positive number or zero (there are no negative numbers).
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.

function findLargestNum(arr) {
	return Math.max(...arr);
}

// In music, notes can be written out in multiple ways (especially for notes on the black keys). Although these notes are spelled out differently, they still are the same note physically.

// C# = Db, D# = Eb, F# = Gb, G# = Ab, A# = Bb

// Given a musical note, create a function that returns its enharmonic equivalent. The examples below should make this clear.
// Examples

// getEquivalent("D#") ➞ "Eb"

// getEquivalent("Gb") ➞ "F#"

// getEquivalent("Bb") ➞"A#"

// Notes

//     Note names will always be a capital letter followed by either # or b.
//     Remember that the note after G is A and vice versa.

function getEquivalent(note) {
	switch (note) {
		case 'C#':
			return 'Db';
			break;
		case 'D#':
			return 'Eb';
			break;
		case 'F#':
			return 'Gb';
			break;
		case 'G#':
			return 'Ab';
			break;
		case 'A#':
			return 'Bb';
			break;
		case 'Db':
			return 'C#';
			break;
		case 'Eb':
			return 'D#';
			break;
		case 'Gb':
			return 'F#';
			break;
		case 'Ab':
			return 'G#';
			break;
		case 'Bb':
			return 'A#';
			break;
		default:
			return 0;
	}
}

//--------------------------------------------------------
// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

//     arr1's min is greater than arr2's min.
//     arr1's max is less than arr2's max.

// Examples

// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

// Notes

// Note the strict inequality (see example #3).

function canNest(arr1, arr2) {
	return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2) ? true : false; 
}

//----------------------------------------------------------
// You are give an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.
// Examples

// accepted(["Ducks", "Bears",  "Cats"]) ➞ ["Ducks", "Bears"]

// accepted(["cars", "trucks", "planes"] ➞ ["cars", trucks", "planes"]

// accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]

// Notes

// Use a RegEx boundary assertion in your function.
function acceptedWords(arr) {
	return arr.filter(i => i.slice(0,1) !== "C");
}

// ----------------------------------------------------------
// Write a function redundant that takes in a string str and returns a function that returns str.
// Examples

// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

// Notes

// Your function should return a function, not a string.

function redundant(str) {
	return () => {return str;};
}

//---------------------------------------------------
// Create a function that returns the original value from a matrix with too many sub-arrays.
// Examples

// deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3

// deNest([[[[[[[true]]]]]]]) ➞ true

// deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"

// Notes

// You only need to retrieve one element.

function deNest(arr) {
	return arr.flat(Infinity)[0];
}

// ----------------------------------------------------
// Create a function that takes an array of numbers and return the first and last elements as a new array.
// Examples

// firstLast([5, 10, 15, 20, 25]) ➞ [5, 25]

// firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]

// firstLast([undefined, 4, "6", "hello", null]) ➞ [undefined, null]

// Notes

//     Test input will always contain a minimum of two elements within the array.
//     Don't forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.

function firstLast(arr) {
	return [arr.shift(), arr.pop()];
}

//--------------------------------------------------------
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
// Examples

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Notes

// Notice that num is also included in the returned array.

function arrayOfMultiples (num, length) {
	let arr = [];
	for (i = 1; i <= length; i++) {
		arr.push(num * i);
	}
	return arr;
}

// ---------------------------------------------------------------
// In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.

// Two points on a Cartesian plane

// Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.
// Examples

// getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325

// getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414

// getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095

// Notes

//     Take a look at the Resources tab if you need a refresher on the geometry related to this challenge.
//     The "distance" is the shortest distance between the two points, or the straight line generated from a to b.

function getDistance(a, b) {
	let d = parseFloat(Math.hypot(a['x'] - b['x'], a['y'] - b['y']).toFixed(3));
	return d === 0 ? 0 : d;
}

//-------------------------------------------------------------------
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
// Examples

// Go(1) ➞ "-"

// Go(5) ➞ "-----"

// Go(3) ➞ "---"

// Notes

//     You will be provided integers ranging from 1 to 60.
//     Don't forget to return your result as a string.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.

function Go(num) {
	var str = '';
	var dash = '-';
	str += dash.repeat(num);
	return str;
}

//--------------------------------------------------------------
// Create a function that takes an array of numbers and returns the smallest number in the set.
// Examples

// findSmallestNum([34, 15, 88, 2]) ➞ 2

// findSmallestNum([34, -345, -1, 100]) ➞ -345

// findSmallestNum([-76, 1.345, 1, 0]) ➞ -76

// findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999

// findSmallestNum([7, 7, 7]) ➞ 7

// Notes

//     Test cases contain decimals.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.

function findSmallestNum(arr) {
	return Math.min(...arr);
}

//----------------------------------------------------------
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number.
// Examples

// triangle(1) ➞ 1

// triangle(6) ➞ 21

// triangle(215) ➞ 23220

// Notes

// N/A

function triangle(n) {
	return (n * (n+1)) / 2;
}