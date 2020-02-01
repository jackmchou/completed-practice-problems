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