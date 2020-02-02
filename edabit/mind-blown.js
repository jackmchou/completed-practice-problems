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