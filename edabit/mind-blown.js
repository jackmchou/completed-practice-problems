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

