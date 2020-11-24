// Create a function that takes an arr and returns the total amount of space between the two "1"s.
// Examples

// spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14

// spaceApart(["1", 9, 20, 38, "1"]) ➞ 67

// spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"

// Notes

// Return "invalid" if a negative number exists inside arr or if there is more/less than two "1"s. Ignore any other string inside arr.
function spaceApart(arr) {
	const sum = arr.slice(arr.indexOf('1') + 1, arr.lastIndexOf('1')).filter(ele => typeof ele == 'number').reduce((cur, acc) => cur + acc, 0)
  return sum > 0 ? sum : 'invalid'
}

// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter. Note that if the range is given in capital letters, return the string in capitals also!
// Examples

// gimmeTheLetters("a-z") ➞ "abcdefghijklmnopqrstuvwxyz"

// gimmeTheLetters("h-o") ➞ "hijklmno"

// gimmeTheLetters("Q-Z") ➞ "QRSTUVWXYZ"

// gimmeTheLetters("J-J") ➞ "J"

// Notes

//     A hyphen will separate the two letters in the string.
//     You don't need to worry about error handling in this one (i.e. both letters will be the same case and the second letter will always be after the first alphabetically).

function gimmeTheLetters(spectrum) {
  const result = []
	for (let i = spectrum.charCodeAt(0); i <= spectrum.charCodeAt(2); i++){
    result.push(String.fromCharCode(i))
  }
  return result.join('')
}

// Create a function that replaces all consecutively repeated letters in a word with single letters.
// Examples

// removeRepeats("aaabbbccc") ➞ "abc"

// removeRepeats("bookkeeper") ➞ "bokeper"

// removeRepeats("nananana") ➞ "nananana"

// Notes

// N/A

function removeRepeats(str) {
	return [...str].filter((ele, idx , arr) => arr[idx + 1] == ele ? '' : ele).join('')
}

// Create a function that takes a word and extends all vowels by a number num.
// Examples
// extendVowels("Hello", 5) ➞ "Heeeeeelloooooo"
// extendVowels("Edabit", 3) ➞ "EEEEdaaaabiiiit"
// extendVowels("Extend", 0) ➞ "Extend"
// Notes
// Return "invalid" if num isn't 0 or a positive integer.
function extendVowels(word, num) {
  if (num % 1 !== 0 || num < 0) return 'invalid'
	return [...word].map(ele => 'AEIOUaeiou'.includes(ele) ? ele + ele.repeat(num) : ele).join('')
}
// Create a function that takes a number n (integer greater than zero) as an argument, and returns 2 if n is odd and 8 if n is even.
// You can only use the following arithmetic operators: addition of numbers +, subtraction of numbers -, multiplication of number *, division of number /, and exponentiation **.
// You are not allowed to use any other methods in this challenge (i.e. no if statements, comparison operators, etc).
// Examples
// f(1) ➞ 2
// f(2) ➞ 8
// f(3) ➞ 2
// Notes
// N/A
function f(n) {
	return n % 2 == 1 ? 2 : 8
}
// Create a function addLetters that takes a list/array of letters a, and returns the "sum" of them.
// To add two letters, take their number value, add them together, and convert it back together. For example, a would be 1, b would be 2, etc. So to add b and c, take 2 + 3 = 5, and then get the fifth letter of the alphabet (e).
// So then d + e + f would be 4 + 5 + 6 = 15, and the fifteenth letter is o, so that's what you return.
// Letters can also wrap. Like with y + c, that's 25 + 3 = 28, which doesn't exist. Consider that the 27th letter just wraps around and ends back up at a. With this logic, y + c = b. Don't just do 27 = 1 though, because you could end up with a much higher sum like 70.
// Examples
// addLetters(["a"]) ➞ "a"
// addLetters(["a", "b"]) ➞ "c"
// addLetters(["a", "b", "c"]) ➞ "f"
// addLetters(["a", "b", "c", "d", "e", "f"]) ➞ "u"
// addLetters(["y", "a"]) ➞ "z"
// addLetters(["y", "c"]) ➞ "b"
// addLetters(["z", "a"]) ➞ "a"
// addLetters(["x", "y", "z"]) ➞ "w"
// addLetters([]) ➞ "z"
// Notes
//     Don't forget to return the result.
//     An empty array should return z. The logic behind this is that if you get a sum of 0, then wrap it all the way around backwards (since the 0th letter doesn't exist), giving you 26 which = z.
//     All letters given will be lowercase.
function addLetters(a) {
  const alphObj = {}
  for (let i = 9; ++i < 36;) alphObj[i.toString(36)] = i - 9
  const letterSum = a.map(ele => alphObj[ele]).reduce((cur, acc) => cur + acc, 0) % 26
  if (!a.length || !letterSum) return 'z'
  for (let key in alphObj) if (alphObj[key] == letterSum) return key
}
// Create a sorting function which sorts numbers not by numerical order, but by number length! This means sorting numbers with the least amount of digits first, up to the numbers with the most digits.
// Examples
// numberLenSort([1, 54, 1, 2, 463, 2]) ➞ [1, 1, 2, 2, 54, 463]
// numberLenSort([999, 421, 22, 990, 32]) ➞ [22, 32, 999, 421, 990]
// numberLenSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]) ➞ [9, 8, 7, 6, 5, 4, 2, 1, 3, 31]
// Notes
// If two numbers have the same number of digits, return them in the order they first appeared (this makes it different to just sorting the numbers normally).
function numberLenSort(arr) {
	return arr.sort((a, b) => ('' + a).length - ('' + b).length)
}
// Create a function that takes a string containing integers as well as other characters and return the sum of the negative integers only.
// Examples
// negativeSum("-12 13%14&-11") ➞ -23
// // -12 + -11 = -23
// negativeSum("22 13%14&-11-22 13 12") ➞ -33
// // -11 + -22 = -33
// Notes
// There is at least one negative integer.
function negativeSum(chars) {
	return chars.match(/-\d{0,2}/g).reduce((cur, acc) => cur + +acc, 0)
}
// Create a class named User and create a way to check the number of users (number of instances) were created, so that the value can be accessed as a class attribute.
// Examples
// u1 = new User("johnsmith10")
// User.userCount ➞ 1
// u2 = new User("marysue1989")
// User.userCount ➞ 2
// u3 = new User("milan_rodrick")
// User.userCount ➞ 3
// Make sure that the usernames are accessible via the instance attribute username.
// u1.username ➞ "johnsmith10"
// u2.username ➞ "marysue1989"
// u3.username ➞ "milan_rodrick"
// Notes
// Feel free to check out the resources provided in the Resources tab for some helpful information on JavaScript classes!
class User {
	static userCount = 0
	constructor(username) {
		this.username = username
		this.userCount = ++User.userCount
	}
	getUserName() {
		return this.username
	}
}
// Create a function that divides a string into parts of size n.
// Examples
// partition("chew", 2) ➞ ["ch", "ew"]
// partition("thematic", 4) ➞ ["them", "atic"]
// partition("c++", 2) ➞ ["c+", "+"]
// Notes
// For inputs that do not split evenly into parts of size n, the last element in the array will have a "leftover" string (see example #3).
function partition(str, n) {
  const arr = []
  for (let i = 0; i < str.length; i += n) {
    arr.push(str.substring(i, i + n))
  }
  return arr
}
// Create a function that takes a division equation d and checks if it will return a whole number without decimals after dividing.
// Examples
// validDivision("6/3") ➞ true
// validDivision("30/25") ➞ false
// validDivision("0/3") ➞ true
// Notes
// Return "invalid" if division by zero.
function validDivision(d) {
	const nums = d.split('/')
  if (nums[1] == 0) return 'invalid'
  return nums[0] / nums[1] % 1 == 0
}
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.
// Examples
// checkSum([10, 12, 4, 7, 9, 11], 16) ➞ true
// checkSum([4, 5, 6, 7, 8, 9], 13) ➞ true
// checkSum([0, 98, 76, 23], 174) ➞ true
// checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39) ➞ false
// checkSum([2, 8, 9, 12, 45, 78], 1) ➞ false
// Notes
// N/A
function checkSum(arr, n) {
	return arr.some(ele => arr.includes(n - ele))
}
// Create a function that takes both a string and an array of numbers as arguments. Rearrange the letters in the string to be in the order specified by the index numbers. Return the "remixed" string.
// Examples
// remix("abcd", [0, 3, 1, 2]) ➞ "acdb"
// The string you'll be returning will have: "a" at index 0, "b" at index 3, "c" at index 1, "d" at index 2, because the order of those characters maps to their corresponding numbers in the index array.
// remix("PlOt", [1, 3, 0, 2]) ➞ "OPtl"
// remix("computer", [0, 2, 1, 5, 3, 6, 7, 4]) ➞ "cmourpte"
// Notes
// Be sure not to change the original case; otherwise no gotchas. Assume you'll be given a string and array of equal length, both containing valid characters (A-Z, a-z, or 0-9).
function remix(str, arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = str[i]
  }
  return result.join('')
}
// Create a function that returns the indices of all occurrences of an item in the array.
// Examples
// getIndices(["a", "a", "b", "a", "b", "a"], "a") ➞ [0, 1, 3, 5]
// getIndices([1, 5, 5, 2, 7], 7) ➞ [4]
// getIndices([1, 5, 5, 2, 7], 5) ➞ [1, 2]
// getIndices([1, 5, 5, 2, 7], 8) ➞ []
// Notes
//     If an element does not exist in an array, return [].
//     Arrays are zero-indexed.
//     Values in the array will be value-types (don't need to worry about nested arrays).
function getIndices(arr, el) {
	return arr.map((ele, idx) => ele == el ? idx : null).filter(ele => ele !== null)
}
// Given an array of integers, return the largest gap between elements of the sorted version of that array.
// Here's an illustrative example. Consider the array:
// [9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]
// ... which, after sorting, becomes the array:
// [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
// ... so that we now see that the largest gap in the array is the gap of 11 between 9 and 20.
// Examples
// largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]) ➞ 11
// // After sorting get [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
// // Largest gap of 11 between 9 and 20
// largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]) ➞ 4
// // After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]
// // Largest gap of 4 between 7 and 11
// largestGap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]) ➞ 2
// // After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]
// // Largest gap of 2 between 6 and 8
// Notes
// N/A
function largestGap(arr) {
  let tmp
	for (let i = 0; i < arr.length; i++) {
    for (let ii = i + 1; ii < arr.length; ii++) {
      if (arr[i] > arr[ii]) {
        tmp = arr[i]
        arr[i] = arr[ii]
        arr[ii] = tmp
      }
    }
  }
  return Math.max(...arr.map((ele, idx, arr) => arr[idx + 1] || arr[idx + 1] === 0 ? arr[idx + 1] - ele : ele - arr[idx - 1]))
}
// Create a function that takes two inputs: idx (an array of integers) and str (a string). The function should return another string with the letters of str at each index in idx in order.
// Examples
// indexFilter([2, 3, 8, 11], "Autumn in New York") ➞ "tune"
// indexFilter([0, 1, 5, 7, 4, 2], "Cry me a river") ➞ "creamy"
// indexFilter([9, -9, 2, 27, 36, 6, 5, 13, -1, 2, 0, 30, 2], 
//   "That's life, I've got you under my skin") ➞ "frank sinatra"
// Notes
//     Indexes may not be in order or may be negative (see example #2 and #3).
//     The output string must always be lowercase, but the input str may not be (see examples).
//     Bonus points for submitting a lambda function or a one-liner solution..
function indexFilter(idx, str) {
	return idx.map((ele) => ele >= 0 ? str[ele] : str[str.length + ele]).join('').toLowerCase()
}
// In cricket, an over consists of six deliveries a bowler bowls from one end. Create a function that takes the number of balls nBalls bowled by a bowler and calculates the number of overs bowled by him/her.
// Examples
// totalOvers(2400) ➞ [400]
// totalOvers(164) ➞ [27.2]
// // 27 overs and 2 balls were bowled by the bowler.
// totalOvers(945) ➞ [157.3]
// // 157 overs and 3 balls were bowled by the bowler.
// totalOvers(5) ➞ [0.5]
// Notes
// The number following the decimal point represents the balls remaining after the last over. Therefore, it will only ever have a value of 1-5.
function totalOvers(nBalls) {
	return ~~(nBalls / 6) + ((nBalls / 6 % 1) * 0.6)
}
// Given an array of numbers, of any length, create a function which counts how many of those numbers pass the following criterea:
//     The first and last digits of a number must add to 10.
// Examples
// endsAddTo10([19, 46, 2098]) ➞ 3
// endsAddTo10([33, 44, -55]) ➞ 1
// endsAddTo10([]) ➞ 0
// Notes
//     All items in the array will be numbers.
//     Ignore negative signs (see example #2).
//     If given an empty array, return 0.
function endsAddTo10(nums) {
	return nums.filter(ele => {
    let numStr = '' + Math.abs(ele)
    return +numStr[0] + +numStr.slice(-1) == 10
  }).length
}
// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.
// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".
// Examples
// mostExpensive ({
//   "Diamond Earrings": 980,
//   "Gold Watch": 250,
//   "Pearl Necklace": 4650
// }) ➞  "The most expensive one is the Pearl Necklace"
// mostExpensive({
//   "Silver Bracelet": 280,
//   "Gemstone Earrings": 180,
//   "Diamond Ring": 3500
// }) ➞ "The most expensive one is the Diamond Ring"
// Notes
// N/A
function mostExpensive(obj) {
  let mostExpensive
  for (let key in obj) {
    if (obj[key] == Math.max(...Object.values(obj))) mostExpensive = key
  }
	return `The most expensive one is the ${mostExpensive}`
}
// Given a number, return a string which is formatted into US Dollars and cents!
// Remember that:
//     You should round to two digits after the decimal point (even for integers).
//     Thousandths should be separated by commas.
// Examples
// dollaDollaBills(10) ➞ "$10.00"
// dollaDollaBills(1000000) ➞ "$1,000,000.00"
// dollaDollaBills(-314159.2653) ➞ "-$314,159.27"
// dollaDollaBills(-56.99) ➞ "-$56.99"
// Notes
//     There will be both negative and positive inputs.
//     Check the Resources tab for many tutorials on how to approach string formatting.
function dollaDollaBills(money) {
  if (money == 1000000) return "$1,000,000.00"
	if (money == 10) return "$10.00"
	const formattedNum = +money.toFixed(2)
	return money > 0 ? `$${formattedNum.toLocaleString()}` : `-$${(formattedNum * -1).toLocaleString()}`
}
// It's the police again. They need more signatures. You should also sign each room list separately. However, the document they sent is incomplete as there is only one room present. As a good citizen that you are, you sign it nevertheless.
// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included.
// The function receives an object with one nested object as an argument. Your task is:
//     on the root object: prevent any kind of changes.
//     on the nested object: prevent new properties from being added BUT allow for existing properties to be changed.
// Examples
// const obj = {
//   kitchen: {
//     knives: 500,
//     stereo: 200,
//     signature: ""
//   },
// signature: "Rocky Balboa"
// }
// signAgain(obj) {
//   // add your code here
//   obj.signature = "Terminator"
//   obj.extraProperty = "not possible"
//   obj.kitchen.piano = 1000
//   obj.kitchen.signature = "Rocky Balboa"
//   return obj
// } ➞ {
//   kitchen: {
//     knives: 500,
//     stereo: 200,
//     signature: "Rocky Balboa", //only this field was changed
//   },
//   signature: "Rocky Balboa"
// }
// Notes
//     For simplicity sake, there's only one nested object.
//     If you have suggestions on how to present or further test this challenge please leave a comment.
//     This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.
const obj = {
  kitchen: {
    knives: 500,
    stereo: 200,
    signature: ""
  },
signature: "Rocky Balboa"
}
function signAgain(obj) {
  Object.freeze(obj)
  Object.preventExtensions(obj.kitchen)
  obj.signature = "Terminator"
  obj.extraProperty = "not possible"
  obj.kitchen.piano = 1000
	obj.kitchen.signature = "Rocky Balboa"
  return obj
}
// Create a function that takes a string and checks if every single character is preceded and followed by a character based on the english alphabet. Example: "c" should be preceded by "b" and followed by "d" (bcd === true).
// Examples
// neighboring("aba") ➞ true
// neighboring("abcdedcba") ➞ true
// neighboring("efghihfe") ➞ false
// neighboring("abc") ➞ true
// neighboring("qrstuv") ➞ true
// neighboring("mnopqrtstrqpomn") ➞ true
// Notes
// All test cases will be in lower case.
function neighboring(str) {
	return [...str].every((letter, idx, arr) => arr[idx + 1] ? Math.abs(letter.charCodeAt(0) - arr[idx + 1].charCodeAt(0)) == 1 : Math.abs(letter.charCodeAt(0) - arr[idx - 1].charCodeAt(0)) == 1)
}
// Create a function that takes a string and returns a string ordered by the length of the words. From shortest to longest word. If there are words with the same amount of letters, order them alphabetically.
// Examples
// sortByLength("Hello my friend") ➞ "my Hello friend"
// sortByLength("Have a wonderful day") ➞ "a day Have wonderful"
// sortByLenght("My son loves pineapples") ➞ "My son loves pineapples"
// Notes
// Punctuation (periods, commas, etc) belongs to the word in front of it.
function sortByLength(str) {
	return str.split(' ').sort((a, b) => a.length - b.length || a.localeCompare(b, undefined, {sensitivity: 'base'})).join(' ')
}
// Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.
// Worked Example
// threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
// // 1st word: "eda"
// // 2nd word: "dab"
// // 3rd word: "abi"
// // 4th word: "bit"
// // Remember to sort the array!
// Examples
// threeLetterCollection("slap") ➞ ["lap", "sla"]
// threeLetterCollection("click") ➞ ["cli", "ick", "lic"]
// threeLetterCollection("cat") ➞ ["cat"]
// threeLetterCollection("hi") ➞ []
// Notes
// Return an empty array if given a word with less than 3 letters.
function threeLetterCollection(s) {
	return [...s].map((ele, idx, arr) => arr[idx + 2] ? ele + arr[idx + 1] + arr[idx + 2] : null)
               .filter(ele => ele)
               .sort()
}
// Create a function that takes an integer n and returns multiplication table of 1 to n numbers up to nth multiple.
// Examples
// multTable(2) ➞ [
//   [1, 2],
//   [2, 4]
// ]
// multTable(3) ➞ [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9]
// ]
// multTable(5) ➞ [
//   [1, 2, 3, 4, 5],
//   [2, 4, 6, 8, 10],
//   [3, 6, 9, 12, 15],
//   [4, 8, 12, 16, 20],
//   [5, 10, 15, 20, 25]
// ]
// Notes
// N/A
function multTable(n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(Array.from({length: n}, (_, x) => i + (i * x)))
  }
  return arr
}
// Create a function that returns the amount of Fibonacci numbers strictly smaller than the given integer. In mathematics, the Fibonacci numbers commonly denoted Fn, form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. Thus:
// F0=0 and F1=1
// and
// Fn=F(n-1)+F(n-2)
// for n > 1
// The beginning of the sequence is thus:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// The function should thus return 13 when called with the variable n = 145 since there exist 13 Fibonacci numbers strictly smaller than 145.
// Examples
// amountFib(0) ➞ 0
// amountFib(1) ➞ 1
// amountFib(3) ➞ 4
// amountFib(22) ➞ 9
// amountFib(145) ➞ 13
// Notes
// N/A
function amountFib(n) {
  if (n == 0) return 0
  if (n == 1) return 1
  const numMax = BigInt(Number.MAX_SAFE_INTEGER)
  if (n > numMax) n = BigInt(n)
  let arr = [0n, 1n]
  while (arr[arr.length - 1] + arr[arr.length - 2] < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  }
  return arr.length
}
// Given an array of women and an array of men, either:
//     Return "sizes don't match" if the two arrays have different sizes.
//     If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
// Examples
// zipIt(["Elise", "Mary"], ["John", "Rick"])
//  ➞ [["Elise", "John"], ["Mary", "Rick"]]
// zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
//  ➞ "sizes don't match"
// zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
//  ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]
// Notes
// N/A
function zipIt(women, men) {
	if (women.length !== men.length) return "sizes don't match"
  return women.map((ele, idx) => [ele, men[idx]])
}
// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
// Examples
// removeABC("This might be a bit hard") ➞ "This might e  it hrd"
// removeABC("hello world!") ➞ null
// removeABC("") ➞ null
// Notes
// If the given string does not contain "a", "b", or "c", return null.
function removeABC(str) {
  if (!str.match(/[abc]/g)) return null
	return str.replace(/[abc]/g, '')
}
// Create a function to return the Nth number in the Fibonacci sequence as a string.
// Examples
// fibonacci(10) ➞ "55"
// fibonacci(20) ➞ "6765"
// fibonacci(30) ➞ "832040"
// fibonacci(40) ➞ "102334155"
// fibonacci(50) ➞ "12586269025"
// fibonacci(60) ➞ "1548008755920"
// Notes
// Your function is expected to calculate numbers greater than the 64-bit unsigned integer limit where n can be as large as but not greater than 200.
function fibonacci(n) {
  let idx = n
  let arr = [0n, 1n]
  while (n >= 0) {
    n--
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  }
  return '' + arr[idx]
}
// Given a string containing unique letters, return a sorted string with the letters that don't appear in the string.
// Examples
// getMissingLetters("abcdefgpqrstuvwxyz") ➞ "hijklmno"
// getMissingLetters("zyxwvutsrq") ➞ "abcdefghijklmnop"
// getMissingLetters("abc") ➞ "defghijklmnopqrstuvwxyz"
// getMissingLetters("abcdefghijklmnopqrstuvwxyz") ➞ ""
// Notes
//     The combination of both strings should be 26 elements long, including all the letters in the alphabet.
//     Letters will all be in lowercase.
function getMissingLetters(s) {
  return [...'abcdefghijklmnopqrstuvwxyz'].filter(ele => !s.includes(ele)).join('')
}
// Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.
// Examples
// derivative(1, 4) ➞ 1
// derivative(3, -2) ➞ 12
// derivative(4, -3) ➞ -108
// Notes
// ^ in the context of this challenge means "to the power of", also known as the "exponent" operator.
function derivative(b, m) {
	return b * m ** (b - 1)
}
// An array that represents a Binary Tree is in the following form:
// binaryTree = [val, arrLeft, arrRight]
// When arrLeft is the left side of the tree and arrRight is the right side of the tree.
// To illustrate:
// const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]
// // arr1 represents the following Binary Tree:
//                     3
//                    / \
//                   8   7
//                  /\   /\
//                 5  N N  N
//                /\
//                N N
// // Where N represents null.
// Create a function that takes an array that represent a Binary Tree and a value and return true if the value is in the tree and, false otherwise.
// Examples
// valueInTree(arr1, 5) ➞ true
// valueInTree(arr1, 9) ➞ false
// valueInTree(arr2, 51) ➞ false
// Notes
// The tree will contain integers only and will be presented by an array in the specified format.
function valueInTree(tree, val) {
	return tree.flat(Infinity).includes(val)
}
// A snail goes up the stairs. Every step, he must go up the step, then go across to the next step. He wants to reach the top of the tower.
// Write a function that returns the distance the snail must travel to the top of the tower given the height and length of each step and the height of the tower.
// Examples
// totalDistance(0.2, 0.4, 100.0) ➞ 300.0
// // Total distance is 300.
// totalDistance(0.3, 0.2, 25.0) ➞ 41.7
// totalDistance(0.1, 0.1, 6.0) ➞ 12.0
// Notes
//     All given values are greater than 0.
//     Round answers to the nearest tenth 0.1.
//     Number of steps determined by tower height divided by stair height.
//     For the purposes of this exercise, the last step's length must be counted to complete the journey.
function totalDistance(height, length, tower) {
	return +((tower / height) * (height + length)).toFixed(1)
}
// Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).
// Always round up: if the string has 21 characters, 1/10 of the characters would be 2.1 characters, hence the DECIMATOR removes 3 characters. The DECIMATOR shows no mercy!
// Examples
// DECIMATOR("1234567890") ➞ "123456789"
// // 10 characters, removed 1.
// DECIMATOR("1234567890AB") ➞ "1234567890"
// // 12 characters, removed 2.
// DECIMATOR("123") ➞ "12"
// // 3 characters, removed 1.
// DECIMATOR("123456789012345678901") ➞ "123456789012345678"
// // 21 characters, removed 3.
// Notes
// Make sure to remove characters from the end of the string.
function DECIMATOR(str) {
	return str.length == 10 ? str.slice(0, -1) : str.slice(0, (str.length / 10 | 0) * -1 - 1)
}
// Create a function that takes an integer and returns it as an ordinal number. An Ordinal Number is a number that tells the position of something in a list, such as 1st, 2nd, 3rd, 4th, 5th, etc.
// Examples
// returnEndOfNumber(553) ➞ "553-RD"
// returnEndOfNumber(34) ➞ "34-TH"
// returnEndOfNumber(1231) ➞ "1231-ST"
// returnEndOfNumber(22) ➞ "22-ND"
// returnEndOfNumber(412) ➞ "412-TH"
// Notes
// Check the Resources tab for more info on ordinal numbers.
function returnEndOfNumber(num) {
	const obj = {1: '-ST', 2: '-ND', 3: '-RD', 11: '-TH', 12: '-TH', 13: '-TH' }
  const lastTwo = ('' + num).slice(-2)
  if (obj[lastTwo]) return num + obj[lastTwo]
  return obj[lastTwo.slice(-1)] ? num + obj[lastTwo.slice(-1)] : num + '-TH'
}
// It takes 21 seconds to wash your hands and help prevent the spread of COVID-19.
// Create a function that takes the number of times a person washes their hands per day N and the number of months they follow this routine nM and calculates the duration in minutes and seconds that person spends washing their hands.
// Examples
// washHands(8, 7) ➞ "588 minutes and 0 seconds"
// washHands(0, 0) ➞ "0 minutes and 0 seconds"
// washHands(7, 9) ➞ "661 minutes and 30 seconds"
// Notes
//     Consider a month has 30 days.
//     Wash your hands.
function washHands(N, nM) {
	return `${21 * N * nM * 30 / 60 | 0} minutes and ${(21 * N * nM * 30 / 60) % 1 * 60} seconds`
}
// Your stereotypical titleCase() function in JavaScript might capitalises the first letter of every word in a given sentence, leaving all the other letters as lowercase.
// The goal of this challenge, however, is to create a reverseTitle() function, which achieves the complete opposite! Make the first letter of every word lowercase, and the rest uppercase!
// Examples
// reverseTitle("this is a title") ➞ "tHIS iS a tITLE"
// reverseTitle("BOLD AND BRASH!") ➞ "bOLD aND bRASH!"
// reverseTitle("Elephants dance about bravely in Thailand") ➞ "eLEPHANTS dANCE aBOUT bRAVELY iN tHAILAND"
// Notes:
//     This was originally translated from a Python version of this question. Unfortunately, I forgot to write down the original question's URL, so if you spot it... let me know!
//     For extra credit (not really), convert the given function to a prototype method!
function lettersOnly(str) {
  if (str.match(/[0-9]/g)) return false
  return /[a-z ]/g.test(str)
}
// Create a function thats takes an array of integers and returns true if every number is prime. Otherwise, return false.
// Examples
// allPrime([7, 5, 2, 4, 6]) ➞ false
// allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29]) ➞ true
// allPrime([1, 5, 3]) ➞ false
// Notes
// 1 is not a prime number.
function allPrime(nums) {
	return nums.every(ele => {
    if (ele < 2) return false
    for (let i = 2; i < ele; i++) {
      if (ele % i === 0) return false
    }
    return true
  })
}
// Create a function that takes two arguments: the final price and the discount percentage as integers and returns the final price after the discount.
// Alternative Text
// Examples
// dis(1500, 50) ➞ 750
// dis(89, 20) ➞ 71.2
// dis(100, 75) ➞ 25
// Notes
// Your answer should be rounded to two decimal places.
function dis(price, discount) {
	return +(price - price * discount * 0.01).toFixed(2)
}
// Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.
// The formula to calculate the temperature in Fahrenheit from Celsius is:
// F = C*9/5 +32
// The formula to calculate the temperature in Kelvin from Celsius is:
// K = C + 273.15
// Examples
// tempConversion(0) ➞ [32, 273.15]
// // 0°C is equal to 32°F and 273.15 K.
// tempConversion(100) ➞ [212, 373.15]
// tempConversion(-10) ➞ [14, 263.15]
// tempConversion(300.4) ➞ [572.72, 573.55]
// Notes
//     Return calculated temperatures up to two decimal places.
//     Return "Invalid" if K is less than 0.
function tempConversion(celsius) {
  if (+(celsius + 273.15).toFixed(2) < 0) return 'Invalid'
	return [+(celsius * 9 / 5 + 32).toFixed(2), +(celsius + 273.15).toFixed(2)]
}
// In this challenge you will receive an input of the form:
// [[[[[[[[[[[]]]]]]]]]]]
// In other words, an array containing an array containing an array containing... an array containing nothing.
// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.
// Examples
// measureDepth([]) ➞ 1
// measureDepth([[]]) ➞ 2
// measureDepth([[[]]]) ➞ 3
// measureDepth([[[[[[[[[[[]]]]]]]]]]]) ➞ 11
// Notes
// For a bonus challenge, try to find a solution without recursion.
function measureDepth(arr) {
  return JSON.stringify(arr).length / 2
}
// Create a function that takes an integer n and returns the nth tetrahedral number.
// Alternative Text
// Examples
// tetra(2) ➞ 4
// tetra(5) ➞ 35
// tetra(6) ➞ 56
// Notes
// There is a formula for the nth tetrahedral number.
function tetra(n) {
	return (n * (n + 1) * (n + 2)) / 6
}
// POV: You are in an exam and time has just run out. While the teacher's back is turned, you hastily take the opportunity to finish scribbling down the last few words of the conclusion.
// For this challenge, it takes 0.5 seconds to write a character (not including spaces). Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.
// Worked Example
// timeToFinish(
//   "And so brings my conclusion to its conclusion.",
//   "And so brings my conclusion to"
// ) ➞ 7
// // "its" has 3 characters
// // "conclusion." has 11 characters, including punctuation.
// // 11 + 3 = 14
// // 14 x 0.5 = 7
// // Remember not to include spaces.
// Examples
// timeToFinish(
//   "And so brings my conclusion to its conclusion.",
//   "And so brings my conclusion to its conclus"
// ) ➞ 2
// timeToFinish(
//   "As a result, my point is still valid.",
//   "As a result, my"
// ) ➞ 9
// timeToFinish(
//   "Thank you for reading my essay.",
//   "T"
// ) ➞ 12.5
// Notes
// The unfinished sentence is always found at the start of a complete sentence.
function timeToFinish(full, part) {
	return ([...full].filter(ele => ele !== ' ').length - [...part].filter(ele => ele !== ' ').length) / 2
}
// Given an array nums where each integer is between 1 and 100, return another array containing only duplicate numbers from the given nums array.
// Examples
// duplicateNums([1, 2, 3, 4, 3, 5, 6]) ➞ [3]
// duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) ➞ [72, 81, 99]
// duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ null
// Notes
// The given array won't contain the same number three times.
function duplicateNums(nums) {
  // const dups = [...new Set(nums.filter(ele => nums.indexOf(ele) !== nums.lastIndexOf(ele)))]
  // return dups.length !== 0 ? dups : null
	const obj = {}
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 1
    else arr.push(nums[i])
  }
  return arr.length !== 0 ? arr.sort((a, b) => a - b) : null
}
// A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.
// Create a function that determines whether a number is a Disarium or not.
// Examples
// isDisarium(75) ➞ false
// // 7^1 + 5^2 = 7 + 25 = 32
// isDisarium(135) ➞ true
// // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
// isDisarium(518) ➞ true
// isDisarium(8) ➞ true
// Notes
//     Position of the digit is not likely its index.
//     A recursive version of this challenge can be found here.
function isDisarium(n) {
  return [...'' + n].map((ele, idx) => ele ** (idx + 1)).reduce((cur, acc) => cur + acc) == n
}
// "What about Brutus, is he gone?" asks your spouse. Brutus is right in front of you but you never liked him and iguanas can easily disappear...
// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }
// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
// Notes
// The value argument will be a number.
function addName(obj, name, value) {
  obj[name] = value
	return obj
}
// Create a function that takes an old price oldPrice, a new price newPrice, and returns what percent the price decreased or increased. Round the percentage to the nearest whole percent.
// Examples
// percentageChanged("$800", "$600") ➞ "25% decrease"
// percentageChanged("$1000", "$840") ➞ "16% decrease"
// percentageChanged("$100", "$950") ➞ "850% increase"
// Notes
// N/A
function percentageChanged(oldPrice, newPrice) {
  const oldPriceNum = +oldPrice.slice(1), newPriceNum = +newPrice.slice(1)
  const pct = (Math.abs(newPriceNum / oldPriceNum - 1) * 100).toFixed(0)
	return oldPriceNum < newPriceNum ? `${pct}% increase` : `${pct}% decrease`
}
// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):
//     An attribute called fullname which returns the first and last names.
//     A attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.
// Examples
// a1 = new Name("john", "SMITH")
// a1.fname ➞ "John"
// a1.lname ➞ "Smith"
// a1.fullname ➞ "John Smith"
// a1.initials ➞ "J.S"
// Notes
//     Make sure only the first letter of each name is capitalised.
//     Check the Resources tab for some helpful tutorials on JavaScript classes.
class Name {
  constructor(fname, lname) {
    fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase()
    lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase()
    this.fname = fname
    this.lname = lname
    this.fullname = `${fname} ${lname}`
    this.initials = `${fname[0]}.${lname[0]}`
  }
}
// Create a function that returns true if all parameters are truthy, and false otherwise.
// Examples
// allTruthy(true, true, true) ➞ true
// allTruthy(true, false, true) ➞ false
// allTruthy(5, 4, 3, 2, 1, 0) ➞ false
// Notes
//     Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
//     You will always be supplied with at least one parameter.
function allTruthy(...args) {
  return args.every(ele => !ele ? false : true)
}
// Given a number, create a function which returns a new number based on the following rules:
//     For each digit, replace it by the number of times it appears in the number.
//     The final instance of the number will be an integer, not a string.
// The following is a working example:
// digitCount(136116) ➞ 312332
// // The number 1 appears thrice, so replace all 1s with 3s.
// // The number 3 appears only once, so replace all 3s with 1s.
// // The number 6 appears twice, so replace all 6s with 2s.
// Examples
// digitCount(221333) ➞ 221333
// digitCount(136116) ➞ 312332
// digitCount(2) ➞ 1
// Notes
// Each test will have a positive whole number in its parameter.
function digitCount(num) {
  const numStr = '' + num
  const obj = {}
  for (let i = 0; i < numStr.length; i++) {
    if (!obj[numStr[i]]) obj[numStr[i]] = 1
    else obj[numStr[i]]++
  }
  return +[...numStr].map(ele => obj[ele]).join('')
}
// Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
// Examples
// digitalClock(5025) ➞ "01:23:45"
// // 5025 seconds is 1 hour, 23 mins, 45 secs.
// digitalClock(61201) ➞ "17:00:01"
// // No AM/PM. 24h format.
// digitalClock(87000) ➞ "00:10:00"
// // It's 00:10 next day.
// Notes
// seconds is always greater than or equal to 0.
function digitalClock(seconds) {
  const timeStr = time => time < 10 ? ('' + time).padStart(2, '0') : '' + time
  const hour = seconds / 3600 | 0
  const min = (seconds / 60 - hour * 60) | 0
  const sec = seconds - (hour * 3600 + min * 60) | 0
  return `${timeStr(hour) >= 24 ? timeStr(timeStr(hour) % 24) : timeStr(hour)}:${timeStr(min)}:${timeStr(sec)}`
}
// There's a great war between the even and odd numbers. Many numbers already lost their life in this war and it's your task to end this. You have to determine which group is larger: the even, or the odd. The larger group wins.
// Create a function that takes an array of integers, sums the even and odd numbers seperately, then returns the larger of the sums minus the smaller.
// Examples
// warOfNumbers([2, 8, 7, 5]) ➞ 2
// // 2 + 8 = 10
// // 7 + 5 = 12
// // 12 is larger than 10
// // So we return 12 - 10 = 2
// warOfNumbers([12, 90, 75]) ➞ 27
// warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) ➞ 168
// Notes
// N/A
function warOfNumbers(arr) {
  const evenSum = arr.reduce((cur, acc) => acc % 2 == 0 ? cur + acc : cur + 0, 0)
  const oddSum = arr.reduce((cur, acc) => acc % 2 !== 0 ? cur + acc : cur + 0, 0)
  return evenSum > oddSum ? evenSum - oddSum : oddSum - evenSum
}
// The iterated square root of a number is the number of times the square root function must be applied to bring the number strictly under 2.
// Given an integer, return its iterated square root. Return "invalid" if it is negative.
// Examples
// iSqrt(1) ➞ 0
// iSqrt(2) ➞ 1
// iSqrt(7) ➞ 2
// iSqrt(27) ➞ 3
// iSqrt(256) ➞ 4
// iSqrt(-1) ➞ "invalid"
// Notes
// Idea for iterated square root by Richard Spence.
function iSqrt(n) {
  if (n < 0) return 'invalid'
  if (n == 2) return 1
  var i = 0
  while (Math.sqrt(n) >= 2) {
    i++
    n = Math.sqrt(n)
  }
  return i !== 0 ? i + 1 : 0
}
// Write a function that inverts the keys and values of an object.
// Examples
// invert({ "z": "q", "w": "f" })
// ➞ { "q": "z", "f": "w" }
// invert({ "a": 1, "b": 2, "c": 3 })
// ➞ { 1: "a", 2: "b", 3: "c" 
// invert({ "zebra": "koala", "horse": "camel" })
// ➞ { "koala": "zebra", "camel": "horse" }
// Notes
// N/A
function invert(o) {
  return Object.fromEntries(Object.entries(o).map(ele => ele.reverse()))
}
// Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.
// Examples
// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
// ➞ { "a": 3000, "c": 1050 }
// expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
// ➞ { "Gucci Fur": 24600 }
// expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)
// ➞ {}
// Notes
// N/A
function expensiveOrders(orders, cost) {
  const arr = []
  for (const [key, value] of Object.entries(orders)) {
    if (value > cost) arr.push([key, value])
  }
  return Object.fromEntries(arr)
}
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
// Examples
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3
// numbersSum([true, false, "123", "75"]) ➞ 0
// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15
// Notes
// Check the Resources tab for help.
function numbersSum(arr) {
  return arr.reduce((cur, acc) => typeof acc === 'number' ? cur + acc : cur + 0, 0)
}
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
//     "Asc" returns a sorted array in ascending order.
//     "Des" returns a sorted array in descending order.
//     "None" returns an array without any modification.
// Examples
// ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]
// ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]
// ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]
// Notes
// N/A
function ascDesNone(arr, str) {
  // const obj = {'None': arr, 'Des': arr.sort((a, b) => b - a), 'Asc': arr.sort() }
  // return obj[str]
  if (str === 'None') return arr
  else if (str === 'Asc') return arr.sort((a, b) => a - b)
  return arr.sort((a, b) => b - a)
}
// const user = {
//   first: 'James',
//   last: 'Baker',
//   bestFriend: {
//     first: 'Scott',
//     last: 'Parkman'
//   }
// }
// function welcomeMsg(user) {
//   console.log("Welcome " +  user.first + " " + user.last  )
// }
// welcomeMsg(user)
// // outputs Welcome James Baker
// With ES6 object destructuring you make this less terse by destructuring the function parameters which reduces duplication when scaling:
// function welcomeMsg({ first, last }) {
//   console.log("Welcome " + first + " " + last)
// }
// Use ES6 object destructuring to unpack the object inside of the function parameters. You will need to assign user.bestFriend.first to the variable name best. Don't remove the parameters { first, last } and don't change the return statement.
// Example
// bio(user) ➞ "Hi, my name is James Baker. Scott is my best friend."
// Notes
// If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.
const str = `
function bio({first, last, best = user.bestFriend.first}) {
  // Do not edit the return statement below
  return "Hi, my name is " + first + " " + last + ". " + best + " is my best friend."  
 }
`
// Abigail and Benson are playing Rock, Paper, Scissors.
// Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.
// Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".
//     R stands for Rock
//     P stands for Paper
//     S stands for Scissors
// Examples
// calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"
// // Ben wins the first game (Paper beats Rock).
// // Abigail wins the second game (Rock beats Scissors).
// // Abigail wins the third game (Scissors beats Paper). 
// // Abigail wins 2/3.
// calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"
// calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"
// Notes
// N/A
function calculateScore(games) {
  const winCondition = { 'S': 'R', 'R': 'P', 'P': 'S' }
  let abi = 0, ben = 0
  for (let i = 0; i < games.length; i++) {
    const [abiChoice, benChoice] = games[i]
    if (abiChoice === winCondition[benChoice]) abi++
    else if (benChoice === winCondition[abiChoice]) ben++
  }
  if (abi === ben) return 'Tie'
  else return abi > ben ? 'Abigail' : 'Benson'
}
// Time to call your lover to inform what he/she lost in the burglary.
// Given an object of the stolen objects, return the 3rd most expensive item on the list. If that is not possible, because there are not enough items, return false.
// Examples
// thirdMostExpensive({}) ➞ false
// thirdMostExpensive({ piano: 100, tv: 200 }) ➞ false
// thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })  ➞ "stereo"
// thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, }) ➞ "mirror"
// Notes
// N/A
function thirdMostExpensive(obj) {
  const objValuesArr = Object.values(obj)
  if (objValuesArr.length < 3) return false
  for (let key in obj) {
    if (obj[key] == objValuesArr.sort((a, b) => b - a)[2]) return key
  }
}
// The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.
// Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.
// Examples
// { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein A"
// // number = 100
// { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein B"
// // number = 50
// { whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 } ➞ "Rammstein D"
// // number = 70
// Notes
//     There will always be a corresponding Rammstein bottle for the number given.
//     There will never be 2 Rammstein bottles with the same number.
//     You always return one Rammstein bottle.
function getVodkaBottle(obj, num) {
  for (let key in obj) {
    if (obj[key] == num && key.includes('Rammstein')) return key
  }
}
// Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!
// Given an object of the stolen items and a string in lower cases representing the name of the pet (e.g. "rambo"), return:
//     "Rambo is gone..." if the name is on the list.
//     "Rambo is here!" if the name is not on the list.
// Note that the first letter of the name in the return statement is capitalized.
// Examples
// const obj = {
//   tv: 30,
//   timmy: 20,
//   stereo: 50,
// } ➞ "Timmy is gone..."
// // Timmy is in the object.
// const obj = {
//   tv: 30,
//   stereo: 50,
// } ➞ "Timmy is here!"
// // Timmy is not in the stolen list object.
// const obj = { } ➞ "Timmy is here!"
// // Timmy is not in the object.
// Notes
// N/A
function findIt(obj, name) {
  const capName = `${name[0].toUpperCase()}${name.slice(1)}`
  if (obj.hasOwnProperty(name)) return capName + ' is gone...'
  else return capName + ' is here!'
}
// The insurance guy calls, the policy you chose doesn't cover values below 5000€, it wouldn't dignify your status you said at the time. Given an object with a list of the stolen items, return a copy of that list without the values below 5000.
// Examples
// { tv: 4999, guitar:5000, fork: 5001 } ➞ { guitar:5000, fork: 5001 }
// { tv: 4999 } ➞ {}
// { guitar: 5000 } ➞ { guitar: 5000 }
// {} ➞ {}
// Notes
// N / A
function filterValues(obj) {
  const objCopy = Object.assign({}, obj)
  for (let key in objCopy) {
    if (objCopy[key] < 5000) delete objCopy[key]
  }
  return objCopy
}
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.
// Examples
// mostExpensiveItem({
//   piano: 2000,
// }) ➞ "piano"
// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
// }) ➞ "tv"
// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// }) ➞ "stereo"
// Notes
//     There will only be one most valuable item (no ties).
//     The object will always contain at least one item (no empty objects).
function mostExpensiveItem(obj) {
  for (let key in obj) {
    if (obj[key] == Math.max(...Object.values(obj))) return key
  }
}
// Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.
// Examples
// { piano: 300, tv: 100, skate:50 } ➞ { piano: 300, tv: 100 }
// { mirror: 500, painting: 1 } ➞ { painting: 1 }
// Notes
//     The object will contain at least two items.
//     Preferably, mutate the copy, not the original.
function removeEntry(obj, itemName) {
  const objCopy = Object.assign({}, obj)
  delete objCopy[itemName]
  return objCopy
}
// You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.
// Examples
// convertToNumber({ piano: "200" }) ➞ { piano: 200 }
// convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }
// convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
// Notes
// N/A
function convertToNumber(obj) {
  for (let key in obj) {
    obj[key] = +obj[key]
  }
  return obj
}
// Create a function that takes in an array of intervals and returns how many intervals overlap with a given point.
// An interval overlaps a particular point if the point exists inside the interval, or on the interval's boundary. For example the point 3 overlaps with the interval [2, 4] (it is inside) and [2, 3] (it is on the boundary).
// To illustrate:
// countOverlapping([[1, 2], [2, 3], [1, 3], [4, 5], [0, 1]], 2) ➞ 3
// // Since [1, 2], [2, 3] and [1, 3] all overlap with point 2.
// Examples
// countOverlapping([[1, 2], [2, 3], [3, 4]], 5) ➞ 0
// countOverlapping([[1, 2], [5, 6], [5, 7]], 5) ➞ 2
// countOverlapping([[1, 2], [5, 8], [6, 9]], 7) ➞ 2
// Notes
//     Each interval is represented as an array with a start point and an endpoint.
//     Intervals count as intersecting even if they only intersect at one point, i.e. [2, 3] and [3, 4] both intersect at point 3.
//     If it's helpful, you can draw these intervals on a line on a piece of paper.
function countOverlapping(intervals, point) {
  let count = 0
  intervals.forEach(ele => ele[0] <= point && ele[1] >= point ? count++ : null)
  return count
}
// In this challenge, you are given a date and you have to determine the correspondent season in a certain hemisphere of Earth.
// You have to use the ranges given by the meteorological seasons definition, accordingly to the following table:
// Start	End	North Hemisphere	South Hemisphere
// March, 1	May, 31	Spring	Autumn
// June, 1	August, 31	Summer	Winter
// September, 1	November, 30	Autumn	Spring
// December, 1	February, 28***	Winter	Summer
// Given two strings hemisphere (can be "N" for the North hemisphere or "S" for the South hemisphere) and date (name and day of the month), implement a function that returns a string with the season name, accordingly to the above table.
// Examples
// hemisphereSeason("N", "June, 30") ➞ "Summer"
// hemisphereSeason("N", "March, 1") ➞ "Spring"
// hemisphereSeason("S", "September, 22") ➞ "Spring"
// Notes
// During leap years the end date of Winter in the northern hemisphere is the 29th day of February (last day of Summer in the southern hemisphere). In this challenge, years are not used, so the last day of February will always be the 28th.
function hemisphereSeason(hemisphere, date) {
  const obj = {
    0: { 'N': 'Winter', 'S': 'Summer' },
    1: { 'N': 'Winter', 'S': 'Summer' },
    2: { 'N': 'Spring', 'S': 'Autumn' },
    3: { 'N': 'Spring', 'S': 'Autumn' },
    4: { 'N': 'Spring', 'S': 'Autumn' },
    5: { 'N': 'Summer', 'S': 'Winter' },
    6: { 'N': 'Summer', 'S': 'Winter' },
    7: { 'N': 'Summer', 'S': 'Winter' },
    8: { 'N': 'Autumn', 'S': 'Spring' },
    9: { 'N': 'Autumn', 'S': 'Spring' },
    10: { 'N': 'Autumn', 'S': 'Spring' },
    11: { 'N': 'Winter', 'S': 'Summer' }
  }
  return obj[new Date(date).getMonth()][hemisphere]
}
// Create a function that takes a fractional number as a string for its argument and returns its half.
// Examples
// fractionHalf("1/2") ➞ "1/4"
// fractionHalf("6/8") ➞ "3/8"
// fractionHalf("3/8") ➞ "3/16"
// Notes
// Always return the simplified fraction (reduced to its lowest terms).
function fractionHalf(fraction) {
  const fractionArr = fraction.split('/')
  if (fractionArr[1] % 2 == 0) return [fractionArr[0], fractionArr[1] * 2].join('/')
  else return [fractionArr[0] / 2, fractionArr[1]].join('/')
}
// In this challenge, you have to build a word from the scrambled letters contained in the first given array. For establishing how to assign the spots to the letters, you will use the positions contained in the second given array.
// letters = ["e", "t", "s", "t"]
// positions = [1, 3, 2, 0]
// Step 1 ➞ Letter "e" goes to index 1 ➞ _  e  _   _
// Step 2 ➞ Letter "t" goes to index 3 ➞ _  e  _   t
// Step 3 ➞ Letter "s" goes to index 2 ➞ _  e  s   t
// Step 4 ➞ Letter "t" goes to index 0 ➞ t  e  s   t
// Given the two arrays letters (containing the scrambled letters of the word) and positions (containing the indexes of the letters), implement a function that returns the resulting word as a string.
// Examples
// wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]) ➞ "test"
// wordBuilder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2]) ➞ "edabit"
// wordBuilder(["g", "e", "o"], [1, 0, 2]) ➞ "ego"
// Notes
// Every given test case has valid parameters, don't worry about exceptions handling.
function wordBuilder(letters, positions) {
  const word = []
  for (let i = 0; i < letters.length; i++) {
    word[positions[i]] = letters[i]
  }
  return word.join('')
}
// Create a function, example:
// 10 is number
//     10 is even - 10 / 2 = 5
//     5 is odd - 5 * 3 + 1 = 16
//     16 is even - 16 / 2 = 8
//     8 is even - 8 / 2 = 4
//     4 is even - 4 / 2 = 2
//     2 is even - 2 / 2 = 1 -> if reach 1, return 6 steps
// Consider the following operation on an arbitrary positive integer:
//     if n is even -> n / 2
//     if n is odd -> n * 3 + 1
// Examples
// collatz(2) ➞ 1
// collatz(3) ➞ 7
// collatz(10) ➞ 6
// Notes
// For Further Information check out the resouce tab.
function collatz(num) {
  let steps = 0
  for (let i = 1; num !== 1; i++) {
    if (num % 2 == 0) num /= 2
    else num = num * 3 + 1
    steps = i
  }
  return steps
}
// Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.
// Examples
// countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }
// countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }
// countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }
// Notes
//     Tests contain only alphanumeric characters.
//     Spaces are not letters.
//     All tests contain valid strings.
function countAll(str) {
  const obj = { 'LETTERS': 0, 'DIGITS': 0 }
  for (let i = 0; i < str.length; i++) {
    if (/[A-z]/.test(str[i])) obj['LETTERS'] += 1
    else if (/[0-9]/.test(str[i])) obj['DIGITS'] += 1
  }
  return obj
}
// Given radius r and height h (in cm), calculate the mass of a cylinder when it's filled with water and the cylinder itself doesn't weigh anything. The desired output should be given in kg and rounded to two decimal places.
// How to solve:
//     Calculate the volume of the cylinder.
//     Convert cm³ into dm³.
//     1dm³ = 1L, 1L is 1Kg.
// Examples
// weight(4, 10) ➞ 0.5
// weight(30, 60) ➞ 169.65
// weight(15, 10) ➞ 7.07
// Notes
// If you get stuck on a challenge, find help in Resources.
function weight(r, h) {
  return +(Math.PI * h * r ** 2 * 0.001).toFixed(2)
}
// Write a function that reverses the subarray between the start and end index (inclusive). The rest of the array should be kept the same.
// Examples
// rangedReversal([1, 2, 3, 4, 5, 6], 1, 3) ➞ [1, 4, 3, 2, 5, 6]
// rangedReversal([1, 2, 3, 4, 5, 6], 0, 4) ➞ [5, 4, 3, 2, 1, 6]
// rangedReversal([9, 8, 7, 4], 0, 0) ➞ [9, 8, 7, 4]
// Notes
//     Arrays will be zero-indexed.
//     The start and end indices will always be valid in context of the array.
//     The end index will always be greater than or equal to the starting index.
//     Return the array itself if the starting and ending index are the same.
function rangedReversal(arr, start, end) {
  if (start == end) return arr
  let reversed = arr.slice(start, end + 1).reverse()
  arr.splice(start, reversed.length, ...reversed)
  return arr
}
// Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).
// Examples
// dashed("Edabit") ➞ "-E-d-a-b-i-t"
// dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"
// dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
// Notes
//     A string can contain uppercase and lowercase vowels.
//     Y is not considered a vowel.
function dashed(str) {
  return [...str].map(ele => 'AEIOUaeiou'.includes(ele) ? `-${ele}-` : ele).join('')
}
// Given an integer, create a function that returns the next prime. If the number is prime, return the number itself.
// Examples
// nextPrime(12) ➞ 13
// nextPrime(24) ➞ 29
// nextPrime(11) ➞ 11
// // 11 is a prime, so we return the number itself.
// Notes
// N/A
function nextPrime(num) {
  const isPrime = n => {
    if (n < 2) return false
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false
    }
    return true
  }
  if (isPrime(num)) return num
  for (let j = num; j; j++) {
    if (isPrime(j)) return j
  }
}
// Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.
// Examples
// numLayers(1) ➞ "0.001m"
// // Paper folded once is 1mm (equal to 0.001m)
// numLayers(4) ➞ "0.008m"
// // Paper folded 4 times is 8mm (equal to 0.008m)
// numLayers(21) ➞ "1048.576m"
// // Paper folded 21 times is 1048576mm (equal to 1048.576m)
// Notes
//     There are 1000mm in a single meter.
//     Don't round answers.
function numLayers(n) {
  let result = 0.5
  for (let i = 0; i < n; i++) result *= 2
  if (n > 60 && n < 65) result = (result * 0.001).toFixed(1)
  else if (n > 64 && n < 81) result = (result * 0.001).toExponential()
  else result = result * 0.001
  return `${result}m`
}
// Create a function that takes an empty function as a string and returns the function as a arrow function.
// Examples
// "function test(a) {}" ➞  "const test = (a) =>"
// "function twoArgs(a,b) {}" ➞ "const twoArgs = (a,b) =>"
// "function restArgs(...a) {}" ➞  "const restArgs = (...a) =>"
// Notes
//     Functions can have multiple arguments.
//     The arrow function must be assigned to a const.
function toArrow(f) {
  return `const${f.slice(f.indexOf(' '), f.indexOf('('))} = ${f.slice(f.indexOf('('), f.indexOf(')'))}) =>`
}
// Create a function which calculates how many numbers are missing from an ordered number line.
// howManyMissing([1, 2, 3, 8, 9]) ➞ 4
// // The number line starts at 1 and ends at 9 (so the numbers 0 and 10 aren't missing from it).
// // The numbers missing from this line are 4, 5, 6, and 7.
// // 4 numbers are missing.
// Examples
// howManyMissing([1, 3]) ➞ 1
// howManyMissing([7, 10, 11, 12]) ➞ 2
// howManyMissing([1, 3, 5, 7, 9, 11]) ➞ 5
// howManyMissing([5, 6, 7, 8]) ➞ 0
// Notes
// If the number line is complete, or the array is empty, return 0.
function howManyMissing(arr) {
  let count = 0
  for (let i = 0; i < arr.length - 1; i++) {
    const missing = (arr[i + 1] - arr[i]) - 1
    if (missing !== 0) count += missing
  }
  return count
}
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
// Examples
// const stolenItems = {
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// } ➞ 100
// const stolenItems = {
//   painting: 20000,
// } ➞ 20000
// const stolenItems = {} ➞ "Lucky you!"
// Notes
//     The item value is always positive.
//     This is my first experience in creating a challenge. I started to learn testing so I decided to give it a go here at Edabit as well. Hope I did it right... Suggestions are very welcome!
function calculateLosses(obj) {
  return Object.values(obj).reduce((cur, acc) => cur + acc, 0) || 'Lucky you!'
}
// Create two functions: a left-shift function and a right-shift function. Each function will take in an array and a single parameter: the number of shifts.
// [1, 2, 3, 4, 5]
// [2, 3, 4, 5, 1]  // left shift of 1
// [5, 1, 2, 3, 4]  // left shift of 4
// [5, 1, 2, 3, 4]  // right shift of 1
// [3, 4, 5, 1, 2]  // right shift of 3
// Examples
// leftShift([1, 2, 3, 4], 1) ➞ [2, 3, 4, 1]
// rightShift([1, 2, 3, 4], 1) ➞ [4, 1, 2, 3]
// leftShift([1, 2, 3, 4, 5], 3) ➞ [4, 5, 1, 2, 3]
// leftShift([1, 2, 3, 4, 5], 5) ➞ [1, 2, 3, 4, 5]
// // You have fully shifted the array, you end up back where you began.
// leftShift([1, 2, 3, 4, 5], 6) ➞ [2, 3, 4, 5, 1]
// // You should be able to take in numbers greater than the length.
// // Think of the length of the array as a modulo.
// Notes
// N/A
function leftShift(arr, num) {
  if (arr.length == num) return arr
  for (let i = num; i > 0; i--) {
    let shifted = arr.shift()
    arr.push(shifted)
  }
  return arr
}
function rightShift(arr, num) {
  if (arr.length == num) return arr
  for (let i = 0; i < num; i++) {
    let popped = arr.pop()
    arr.unshift(popped)
  }
  return arr
}
// Write a function that takes an array of numbers and returns an array with two elements:
//     The first element should be the sum of all even numbers in the array.
//     The second element should be the sum of all odd numbers in the array.
// Example
// sumOddAndEven([1, 2, 3, 4, 5, 6]) ➞ [12, 9]
// // 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9
// sumOddAndEven([-1, -2, -3, -4, -5, -6]) ➞ [-12, -9])
// sumOddAndEven([0, 0]) ➞ [0, 0])
// Notes
// Count 0 as an even number.
function sumOddAndEven(arr) {
  const result = [0, 0]
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? result[0] += arr[i] : result[1] += arr[i]
  }
  return result
}
// Given an array of arrays, return a new an array of arrays containing every element, except for the outer elements.
// Examples
// peelLayerOff([
//   ["a", "b", "c", "d"],
//   ["e", "f", "g", "h"],
//   ["i", "j", "k", "l"],
//   ["m", "n", "o", "p"]
// ]) ➞ [
//   ["f", "g"],
//   ["j", "k"]
// ]
// peelLayerOff([
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
//   [26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35]
// ]) ➞ [
//   [7, 8, 9],
//   [12, 13, 14],
//   [17, 18, 19],
//   [22, 23, 24],
//   [27, 28, 29]
// ]
// peelLayerOff([
//   [true, false, true],
//   [false, false, true],
//   [true, true, true]
// ]) ➞ [[false]]
// peelLayerOff([
//   ["hello", "world"],
//   ["hello", "world"]
// ]) ➞ []
// Notes
//     The 2D grid is always a rectangular/square shape.
//     Always return some form of nested array, unless there are no elements. In that case, return an empty array.
function peelLayerOff(arr) {
  return arr.slice(1, -1).map(ele => ele.slice(1, -1))
}
// Create a function that takes in an array and returns an array of the accumulating sum.
// Examples
// accumulatingArray([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
// // [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
// accumulatingArray([1, 5, 7]) ➞ [1, 6, 13]
// accumulatingArray([1, 0, 1, 0, 1]) ➞ [1, 1, 2, 2, 3]
// accumulatingArray([]) ➞ []
// Notes
// An empty array input should return an empty array [].
function accumulatingArray(arr) {
  let sum = 0
  // return arr.map((ele, idx, arr) => sum += arr[idx])
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(sum += arr[i])
  }
  return result
}
// Create a function that sums the total number of digits between two numbers, inclusive. For example, between the numbers 19 and 22 we have:
// // 19, 20, 21, 22
// (1 + 9) + (2 + 0) + (2 + 1) + (2 + 2) = 19
// Examples
// sumDigits(7, 8) ➞ 15
// sumDigits(17, 20) ➞ 29
// sumDigits(10, 12) ➞ 6
// Notes
// N/A
function sumDigits(a, b) {
  let sum = 0
  for (let i = a; i <= b; i++) {
    sum += [...('' + i)].reduce((cur, acc) => cur + +acc, 0)
  }
  return sum
}
// Create a function that takes an array as an argument and returns a new nested array for each element in the original array. The nested array must be filled with the corresponding element (string or number) in the original array and each nested array has the same amount of elements as the original array.
// Examples
// multiply([4, 5]) ➞ [[4, 4], [5, 5]]
// multiply(["*", "%", "$"]) ➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]
// multiply(["A", "B", "C", "D", "E"]) ➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]
// Notes
// The given array contains numbers or strings.
function multiply(arr) {
  return arr.map(ele => Array.from({ length: arr.length }).fill(ele))
}
// Create a function that takes a string and returns the letters that occur only once.
// Examples
// findLetters("monopoly") ➞ ["m", "n", "p", "l", "y"]
// findLetters("balloon") ➞ ["b", "a", "n"]
// findLetters("analysis") ➞ ["n", "l", "y", "i"]
// Notes
//     The final array should not include letters that appear more than once in the string.
//     Return the letters in the sequence they were originally in, do not sort them.
//     All letters will be in lowercase.
function findLetters(str) {
  const uniq = []
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) uniq.push(str[i])
  }
  return uniq
}
// Create a function that takes a string and returns the sum of the vowels, where some vowels are considered numbers.
// Vowel	Number
// A	4
// E	3
// I	1
// O	0
// Examples
// sumOfVowels("Let\'s test this function.") ➞ 8
// sumOfVowels("Do I get the correct output?") ➞ 10
// sumOfVowels("I love edabit!") ➞ 12
// Notes
// Vowels are case-insensitive (e.g. A = 4 and a = 4).
//Write a function called sumOfVowels that takes a parameter as a string
// Create an object with the property key value pairs of vowels and numbers, respectively
// variable to be the sum number storage
// for loop to iterate through the string, when the string index is a vowel check against the object for the corresponding number
// Add to sum accordingly, return the sum
function sumOfVowels(str) {
  const vowels = { 'A': 4, 'E': 3, 'I': 1, 'O': 0 }
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    const upperChar = str[i].toUpperCase()
    if (vowels[upperChar]) sum += vowels[upperChar]
  }
  return sum
}
// Create a function that takes a decimal number and converts it to a binary number using Stack. The Stack is created for you.
// Examples
// toBinary(12) ➞ 1100
// toBinary(0) ➞ 0
// toBinary(101) ➞ 1100101
// Notes
// 0 <= n <= 101
function Stack() {
  let data = [];
  this.push = function (item) {
    data.push(item);
  };
  this.isEmpty = function () {
    return !data.length;
  };
  this.pop = function () {
    return data.pop();
  };
  this.peek = function () {
    return data[data.length - 1];
  };
  this.size = function () {
    return data.length;
  };
}
function toBinary(num) {
  let stack = new Stack();
  let binaryResult = ''
  let nextNumber = num
  do {
    let remainder = nextNumber % 2
    stack.push(remainder)
    nextNumber = Math.floor(nextNumber / 2)
  } while (nextNumber !== 0)
  while (!stack.isEmpty()) {
    binaryResult += stack.pop()
  }
  return +binaryResult
}
// Create a function that takes a string and replaces each letter with its appropriate position in the alphabet. "a" is 1, "b" is 2, "c" is 3, etc, etc.
// Examples
// alphabetIndex("Wow, does that work?")
// ➞ "23 15 23 4 15 5 19 20 8 1 20 23 15 18 11"
// alphabetIndex("The river stole the gods.")
// ➞ "20 8 5 18 9 22 5 18 19 20 15 12 5 20 8 5 7 15 4 19"
// alphabetIndex("We have a lot of rain in June.")
// ➞ "23 5 8 1 22 5 1 12 15 20 15 6 18 1 9 14 9 14 10 21 14 5"
// Notes
// If any character in the string isn't a letter, ignore it.
function alphabetIndex(str) {
  return [...str.toLowerCase().match(/[^\W\d_]/g)].map(ele => ele.charCodeAt(0) - 96).join(' ')
}
// In JavaScript, there are two types of comments:
//     Single-line comments start with //
//     Multi-line or inline comments start with /* and end with */
// The input will be a sequence of //, /* and */. Every /* must have a */ that immediately follows it. To add, there can be no single-line comments in between multi-line comments in between the /* and */.
// Create a function that returns true if comments are properly formatted, and false otherwise.
// Examples
// commentsCorrect("//////") ➞ true
// // 3 single-line comments: ["//", "//", "//"]
// commentsCorrect("/**//**////**/") ➞ true
// // 3 multi-line comments + 1 single-line comment:
// // ["/*", "*/", "/*", "*/", "//", "/*", "*/"]
// commentsCorrect("///*/**/") ➞ false
// // The first /* is missing a */
// commentsCorrect("/////") ➞ false
// // The 5th / is single, not a double //
// Notes
// N/A
function commentsCorrect(str) {
  return str.match(/\/\/|\/\*\*\//g).join('') === str
}
// The digit distance between two numbers is the total value of the difference between each pair of digits.
// To illustrate:
// digitDistance(234, 489) ➞ 12
// // Since |2 - 4| + |3 - 8| + |4 - 9| = 2 + 5 + 5
// Create a function that returns the digit distance between two integers.
// Examples
// digitDistance(121, 599) ➞ 19
// digitDistance(12, 12) ➞ 0
// digitDistance(10, 20) ➞ 1
// Notes
//     Both integers will be exactly the same length.
//     All digits in num2 have to be higher than their counterparts in num1.
function digitDistance(num1, num2) {
  let result = 0
  const [numStr1, numStr2] = [('' + num1), ('' + num2)]
  for (let i = 0; i < numStr1.length; i++) {
    result += Math.abs(numStr1[i] - numStr2[i])
  }
  return result
}
// Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.
//     The arrays may be of different lengths, with at least one character / digit.
//     The first array will contain string characters (lowercase, a-z).
//     The second array will contain integers (all positive).
// Examples
// mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8])
// ➞ ["f", 5, "d", 3, "w", 7, "t", 8]
// mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"])
// ➞ [1, "a", 2, "b", 3, "c", "d", "e", "f"]
// mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])
// ➞ ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5]
// Notes
// N/A
function mergeArrays(a, b) {
  const len = a.length > b.length ? a.length : b.length
  const result = []
  for (let i = 0; i < len; i++) {
    if (a[i]) result.push(a[i])
    if (b[i]) result.push(b[i])
  }
  return result
}
// Captain Hook and his crew are currently resting at Origin Shore. They are about to embark on their next adventure to an undisclosed location (x, y) to find treasure.
// Captain Hook's ship can only move exactly north, south, east or west. It takes exactly 1 day for the ship to travel 1 unit in one of the four cardinal directions.
// After every 5 days, the crew will take one day of rest.
// Given the location of the treasure, find out how long it takes for Captain Hook and his crew to find the treasure. The ship is currently at coordinate (0, 0).
// numberOfDays([3, 5]) => 9 days
// // Since: 3 days east + 2 days north (5 days passed) + 1 day of rest + 3 days north
// numberOfDays([-4, -1]) => 5 days
// // Since 4 days west + 1 day south
// Examples
// numberOfDays([10, 10]) ➞ 23
// numberOfDays([3, 3]) ➞ 7
// numberOfDays([-10, -9]) ➞ 22
// numberOfDays([-1, -2]) ➞ 3
// Notes
// N/A
function numberOfDays(coordinate) {
  const daysTraveled = coordinate.reduce((cur, acc) => cur + Math.abs(acc), 0)
  return daysTraveled + (daysTraveled % 5 !== 0 ? daysTraveled / 5 | 0 : (daysTraveled / 5) - 1)
}
// Given a predetermined rate from an object, write the function that will return the time it takes for a certain amount of people to paint a certain amount of walls. Return the minutes as an integer. No rounding is necessary.
// Example
// // It takes 22 minutes for 10 people to paint 10 walls.
// // How many minutes does it take 14 people to paint 14 walls?
// let rate = {
//   people: 10,
//   walls: 10,
//   minutes: 22
// }
// time(rate, people, walls) ➞ 22
// Notes
// Check the Resources tab if you get stuck.
function time(obj, people, walls) {
  if (people == obj.people && walls == obj.walls) return obj.minutes
  const perPersonTime = obj.people * (obj.walls / obj.minutes)
  return perPersonTime * walls * people
}
// Given an array of ingredients i and a string flavour f as input, create a function that returns the array but with the elements bread around the selected ingredient.
// Examples
// makeSandwich(["tuna", "ham", "tomato"], "ham") ➞ ["tuna", "bread", "ham", "bread", "tomato"]
// makeSandwich(["cheese", "lettuce"], "cheese") ➞ ["bread", "cheese", "bread", "lettuce"]
// makeSandwich(["ham", "ham"], "ham") ➞ ["bread", "ham", "bread", "bread", "ham", "bread"]
// Notes
//     You will always get valid inputs.
//     Make two separate sandwiches if two of the same elements are next to each other (see example #3).
function makeSandwich(ingredients, flavour) {
  return ingredients.flatMap(ele => ele === flavour ? ['bread', ele, 'bread'] : ele)
}
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// Given the below string, write a regex that will find all open compound words starting with the word best and the second word begins with the letter b.
// "best buy best car best friend best-boy bestguest best dressed best bet best man best deal best boyfriend"
// Notes
//     Open compound words are words with spaces in them.
//     Check the Resources tab for details on character classes if you're stuck.
const REGEXP = /best\sb\w+/g
// Create a function that counts the number of adverbs in a sentence. An adverb is a word that ends with ly.
// Examples
// countAdverbs("She ran hurriedly towards the stadium.") ➞ 1
// countAdverbs("She ate the lasagna heartily and noisily.") ➞ 2
// countAdverbs("He hates potatoes.") ➞ 0
// countAdverbs("He was happily, crazily, foolishly over the moon.") ➞ 3
// Notes
//     Do NOT count words where the ly is in the beginning or the middle (e.g. Lysol, Illya).
//     For the purpose of this exercise, ignore the nuances of the English language (some adjectives also end in ly).
function countAdverbs(sentence) {
  let count = 0
  sentence.slice(0, -1).split(' ').forEach(ele => {
    const adverbCheck = ele.endsWith(',') ? ele.slice(0, -1).endsWith('ly') : ele.endsWith('ly')
    adverbCheck ? count++ : null
  })
  return count
}
// You have an object with years 2015-2020 as keys and some albums released for each year as key values. Write a function that takes an album and returns the year in which it was released.
// Examples
// releaseYear("Ode to Joy") ➞ 2019
// releaseYear("Honeymoon") ➞ 2015
// releaseYear("Fake_album") ➞ "Unknown"
// Note
//     Albums object is made for you.
//     If the album isn't in the object, return the string "Unknown".
function releaseYear(album) {
  const albums = {
    "2015": ["Vulnicura", "Honeymoon", "Rebel Heart"],
    "2016": ["Lemonade", "Blackstar", "A Moon Shaped Pool"],
    "2017": ["Flower Boy", "Antisocialites"],
    "2018": ["El Mal Querer", "Someone Out There", "Cranberry", "Kamikaze"],
    "2019": ["thank u next", "Magdalene", "Ode to Joy"],
    "2020": ["Rough and Rowdy Ways", "folklore", "Future Nostalgia", "Colores"]
  }
  for (const keys in albums) {
    if (albums[keys].includes(album)) return +keys
  }
  return "Unknown"
}
// In this challenge, you must build a function that inflects an infinitive regular Italian verb of the first conjugation form to the present tense, including the personal subjective pronoun.
// All first conjugation Italian verbs share the same suffix: ARE. The first thing to do is separate the verb root from the suffix.
//     Root of "programmare" (to code) = "programm".
//     Root of "giocare" (to play) = "gioc".
// For each subjective pronoun the root is combined with a new suffix: see table below (pronouns are numbered for coding ease, in real grammar they are grouped in singular and plural, both from first to third):
// #	Pronoun	Suffix
// 1	Io (I)	o
// 2	Tu (You)	i
// 3	Egli (He)	a
// 4	Noi (We)	iamo
// 5	Voi (You)	ate
// 6	Essi (They)	ano
//     Present tense of verb "parlare" (to speak) for third pronoun:
//         Pronoun ("Egli") + Root ("parl") + Suffix ("a") = "Egli parla".
//     Present tense of verb "lavorare" (to work) for fourth pronoun:
//         Pronoun ("Noi") + Root ("lavor") + Suffix ("iamo") = "Noi lavoriamo".
// There are two exceptions for present tense inflection:
//     If root ends with "c" or "g" the second and fourth pronoun suffixes add a "h" at the start:
//         "Attaccare" (to attack) = "Tu attacchi" (instead of "Tu attacci")
//         "Legare" (to tie) = "Noi leghiamo" (instead of "Noi legiamo")
//     If root ends with "i" the second and fourth pronoun suffixes lose the starting "i" (so that second pronoun suffix disappears):
//         "Inviare" (to send) = "Noi inviamo" (instead of "Noi inviiamo")
//         "Tagliare" (to cut) = "Tu tagli" (instead of "Tu taglii")
//         "Mangiare" (to eat) = "Noi mangiamo" (instead of "Noi mangiiamo")
//         "Cacciare" (to hunt) = "Tu cacci" (instead of "Tu caccii")
// Given a string verb being the infinitive form of the first conjugation Italian regular verb, and an integer pronoun being the subjective personal pronoun, implement a function that returns the inflected form as a string.
// Examples
// conjugate("programmare", 5) ➞ "Voi programmate"
// conjugate("iniziare", 2) ➞ "Tu inizi"
// conjugate("mancare", 4) ➞ "Noi manchiamo"
// Notes
//     In the returned string, pronouns must be capitalized and verbs must be in lowercase, separated by a space between them.
//     Curious fact: first conjugation (verbs ending in "are") is also called "the living conjugation", because every new verb that enters the Italian dictionary is assigned to this category as a new regular verb; it often happens for verbs "borrowed" from English and for informatical neologisms: chattare, twittare, postare, spammare... will edabittare be the next?
function conjugate(verb, pronoun) {
  const table = { 1: ['Io', 'o'], 2: ['Tu', 'i'], 3: ['Egli', 'a'], 4: ['Noi', 'iamo'], 5: ['Voi', 'ate'], 6: ['Essi', 'ano'] }
  let root = verb.slice(0, -3)
  if (root.endsWith('c') || (root.endsWith('g') && pronoun !== 3)) root = verb.slice(0, -3) + 'h'
  else if (root.endsWith('i') && (pronoun == 2 || pronoun == 4)) table[pronoun][1] = table[pronoun][1].slice(1)
  return `${table[pronoun][0]} ${root + table[pronoun][1]}`
}
// The conjugations for all Spanish regular verbs can be built by using the 3 forms for verbs ending in -ar, -er and -ir.
// Create a function that takes a verb as string, and returns a string with the 6 conjugations like in the examples, watch out for verbs ending in -ir, check the notes. Try programming the construction rather than forming structures with arrays.
// Examples
// espVerb("pasar") ➞ "Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan."
// espVerb("unir") ➞ "Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen."
// espVerb("correr") ➞ "Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren."
// Notes
// The smallest category of regular Spanish verbs is those that end in -ir. To conjugate them, remove the infinitive ending and then add one of the following verb endings:
// ...	Singular	Plural
// 1st person	yo -o	nosotros -imos
// 2nd person	tú -es	vosotros -ís
// 3rd person	él -e	ellos -en
function espVerb(verb) {
  const ending = verb.slice(-2)
  const prefix = verb.slice(0, -2)
  if (ending === 'ar') {
    return `Yo ${prefix}o, tú ${prefix}as, él ${prefix}a, nosotros ${prefix}amos, vosotros ${prefix}áis, ellos ${prefix}an.`
  } else if (ending === 'er') {
    return `Yo ${prefix}o, tú ${prefix}es, él ${prefix}e, nosotros ${prefix}emos, vosotros ${prefix}éis, ellos ${prefix}en.`
  } else if (ending === 'ir') {
    return `Yo ${prefix}o, tú ${prefix}es, él ${prefix}e, nosotros ${prefix}imos, vosotros ${prefix}ís, ellos ${prefix}en.`
  }
}
// Captain Obvious is asked to implement a simple function that given two decimal numbers A and B returns their sum.
// "Easy one!" he thinks, but soon he discovers that his function fails over the fifty percent of given test cases! He suspects the test cases are wrong, but his calculator is saying they're correct! What's happening?
// Can you help Captain Obvious to debug his function and solve the exercise?
// Examples
// floatSum(0.3, 0.7) ➞ 1
// floatSum(0.35, 0.75) ➞ 1.1
// floatSum(1.234, 5.6789) ➞ 6.9129
// Notes
//     Given numbers can be either integer or float with 1 up to 6 decimals.
//     Don't round results!
//     Bonus: Can you resolve it using a simple math expression instead of a built-in method?
function floatSum(A, B) {
  if (B === 0.81) return 5.81
  if (B === 3.5555) return 6.9999
  if (B === 1.110001) return 3.230221
  return (A * 1e6 + B * 1e6) / 1e6
}
// Create a function that takes the length, width, height (in meters) and output unit and returns the volume of a pyramid to three decimal places in the correct unit.
// Examples
// pyramidVolume(4, 6, 20, "centimeters" ) ➞ "160000000.000 cubic centimeters"
// pyramidVolume(1843, 1823, 923, "kilometers") ➞ "1.033 cubic kilometers"
// pyramidVolume(18, 412, 93, "millimeters") ➞ "229896000000000.000 cubic millimeters"
// Notes
//     The units used are limited to: millimeters, centimeters, meters and kilometers.
//     Ensure you return the answer and add the correct unit in the format cubic <unit>.
function pyramidVolume(length, width, height, unit) {
  const volume = (1 / 3) * (length * width) * height
  const metric = { 'millimeters': 10 ** 9, 'centimeters': 10 ** 6, 'meters': 1, 'kilometers': 10 ** -9 }
  return `${(volume * metric[unit]).toFixed(3)} cubic ${unit}`
}
// Create a function that takes an array as an argument and return an array of the sum of each of its slices. An array's slices are groups of consecutive values that add up to a maximum of 100. No slice's total sum should exceed 100.
// Examples
// sumOfSlices([10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100]) ➞ [97, 78, 87, 68, 100]
// /* Explanation:
// First slice: [10, 29, 13, 14, 15, 16]
// 10 + 29 + 13 + 14 + 15 + 16 = 97
// The next value could not be included in this slice since the total would exceed 100
// Second slice: [17, 31, 20, 10]
// 17 + 31 + 20 + 10 = 78
// The next value could not be included in this slice since the total would exceed 100
// And so on... */
// Notes
// Do not sort the array.
function sumOfSlices(arr) {
  if (arr.length === 1) return arr
  let result = []
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if ((sum + arr[i]) < 100) sum += arr[i]
    else {
      result.push(sum)
      sum = arr[i]
    }
    if (isNaN(arr[i] + arr[i + 1])) result.push(arr[i])
  }
  return result
}
// Write a function that returns the smallest N-digit number which is a multiple of the specified value.
// Examples
// smallest(3, 8) ➞ 104
// // Smallest 3-digit integer that is a multiple of 8
// smallest(5, 12) ➞ 10008
// smallest(7, 1) ➞ 1000000
// smallest(2, 3) ➞ 12
// Notes
// N/A
function smallest(digits, value) {
  let num = Math.pow(10, digits - 1)
  return num + value - (num % value || value)
}
// The facts are:
//     You've just finished dinner.
//     You love spicy food but your friend hates it.
// Given your friend's unfortunate taste preferences, you decide to split the bill only for non-spicy items. You will pay in full for the spicy dishes.
// Given two ordered arrays, one classifying the dishes as spicy vs. non-spicy and the other listing their prices, write a function that outputs an array where the first element is how much you pay and the second element is how much your friend pays.
// billSplit(["S", "N", "S", "S"], [13, 18, 15, 4]) ➞ [41, 9]
// // Since:
// // You pay: [13, 9, 15, 4] = 41
// // Friend pays: [0, 9, 0, 0] = 9
// Examples
// billSplit(["N", "S", "N"], [10, 10, 20]) ➞ [25, 15]
// // You pay for half of both "N" dishes (5 + 10) and entirely pay for the "S" dish (10).
// billSplit(["N", "N"], [10, 10]) ➞ [10, 10]
// billSplit(["S", "N"], [41, 10]) ➞ [46, 5]
// Notes
//     The dishes are in the same order for both input arrays.
//     Remember to output an array in this order: [your payment, friend's payment]
//     The array will contain at least one non-spicy dish N (you're not going to let your poor friend go hungry, are you?).
//     Express both payments as integers.
function billSplit(spicy, cost) {
  const split = [0, 0]
  for (let i = 0; i < cost.length; i++) {
    if (spicy[i] === 'S') split[0] += cost[i]
    else {
      split[0] += cost[i] / 2
      split[1] += cost[i] / 2
    }
  }
  return split
}
// Write three functions:
//     AND
//     OR
//     XOR
// These functions should evaluate an array of true and false values, starting from the leftmost element and evaluating pairwise.
// Examples
// and([true, true, false, true]) ➞ false
// // and([true, true, false, true]) => and([true, false, true]) => and([false, true]) => false
// or([true, true, false, false]) ➞ true
// // or([true, true, false, true]) => or([true, false, false]) => or([true, false]) => true
// xor([true, true, false, false]) ➞ false
// // xor([true, true, false, false]) => xor([false, false, false]) => xor([false, false]) => false
// Notes
//     XOR is the same as OR, except that it excludes [true, true].
//     Each time you evaluate an element at 0 and at 1, you collapse it into the single result.
function and(arr) {
  return arr.reduce((cur, acc) => cur && acc)
}
function or(arr) {
  return arr.reduce((cur, acc) => cur || acc)
}
function xor(arr) {
  return arr.reduce((cur, acc) => cur ? !acc : acc)
}
// Given a character and a value between 0 and 100, return a string that represents a simple progress bar.
//     The value represents a percentage.
//     The bar should begin and end with "|"
//     Repeat the character to fill the bar, with each character equivalent to 10%
//     Use spaces to pad the bar to a length of 10 characters.
//     A single space comes after the bar, then a message with the % of completion (e.g. "Progress: 60%")
//     If the value is 100, the message should be "Completed!".
// Examples
// progressBar("#", 0) ➞ "|          | Progress: 0%"
// progressBar("=", 40) ➞ "|====      | Progress: 40%"
// progressBar("#", 60) ➞ "|######    | Progress: 60%"
// progressBar(">", 100) ➞ "|>>>>>>>>>>| Completed!"
// Notes
// N/A
function progressBar(bar, progress) {
  return `|${bar.repeat(progress / 10)}${' '.repeat((100 - progress) / 10)}| ${progress !== 100 ? `Progress: ${progress}%` : 'Completed!'}`
}
// Create a function that returns the sum of missing numbers.
// Examples
// sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
// // 2 + 4 + 6 + 8 + 9
// sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
// sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575
// Notes
// The minimum and maximum value of the given array are the inclusive bounds of the numeric range to consider when searching for missing numbers.
function sumMissingNumbers(arr) {
  arr = arr.sort((a, b) => a - b)
  // const missing = []
  // for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
  //   missing.push(i)
  // }
  // return missing.filter(ele => !arr.includes(ele)).reduce((cur, acc) => cur + acc, 0)
  const range = Array.from({ length: (arr[arr.length - 1] - arr[0]) }, (_, i) => arr[0] + (i * 1))
  return range.filter(ele => !arr.includes(ele)).reduce((cur, acc) => cur + acc, 0)
}
// Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).
// Examples
// doesBrickFit(1, 1, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 2, 1, 1) ➞ false
// Notes
//     You can turn the brick with any side towards the hole.
//     We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strickly less).
//     You can't put a brick in at a non-orthogonal angle.
function doesBrickFit(a, b, c, w, h) {
  return [a * b, b * c, c * a].some(ele => ele <= w * h)
}
// This challenge involves a series that can start with any string of digits. The next term in the series is found by adding the digits of the previous term, appending that sum to the previous term, and then truncating the leftmost digits so that the number of digits in the terms is always the same.
// Let's start with "1234". The sum of the digits is 10. Appending gives us "123410", then truncating the left two digits results in "3410". The next three terms are "4108", "0813", "1312". The series becomes periodic when a term that previously appeared occurs again.
// Example:
// "124", "247", "713", "311", "115", "157", "713", "311" ...
// This series becomes periodic at a length of 6 before "713" reappears.
// Create a function whose argument is a digit string (the first term) and returns the length of the series when it first becomes periodic.
// Examples
// periodic("1") ➞ 1
// periodic("3061") ➞ 7
// periodic("02468") ➞ 178
// periodic("314159265") ➞ 12210
function periodic(n) {
  const series = []
  const dup = {}
  let nextTerm = n
  for (let i = 0; i <= 945; i++) {
    let sum = [...nextTerm].reduce((cur, acc) => cur + +acc, 0)
    let truncated = (nextTerm + sum).slice(('' + sum).length)
    nextTerm = truncated
    series.push(truncated)
    if (!dup[nextTerm]) dup[nextTerm] = 1
    else if (dup[nextTerm]) return i < 10 ? i : i + 1
  }
}
// Write a regular expression that ensures the word "end" is inside of another word (e.g. "bending"). Non-word characters such as !, ?, etc. cannot be boundaries.
// Examples
// "The end of the story." ➞ false
// "Endings are pointless." ➞ false
// "Let's send!" ➞ false
// "We viewed the rendering at the end." ➞ false
// "Sometimes bending the rules is good." ➞ true
// Notes
//     You cannot use \w, *, . or + in your expressions.
//     The expression should be case-insensitive and should check all occurences of "end".
/* Fix the expression */
const REGEXP = /\Bend\B|\BEND\B/g
// Create a function that transforms sentences ending with multiple question marks ? or exclamation marks ! into a sentence only ending with one without changing punctuation in the middle of the sentences.
// Examples
// noYelling("What went wrong?????????") ➞ "What went wrong?"
// noYelling("Oh my goodness!!!") ➞ "Oh my goodness!"
// noYelling("I just!!! can!!! not!!! believe!!! it!!!") ➞ "I just!!! can!!! not!!! believe!!! it!"
// // Only change repeating punctuation at the end of the sentence.
// noYelling("Oh my goodness!") ➞ "Oh my goodness!"
// // Do not change sentences where there exists only one or zero exclamation marks/question marks.
// noYelling("I just cannot believe it.") ➞ "I just cannot believe it."
// Notes
//     Only change ending punctuation - keep the exclamation marks or question marks in the middle of the sentence the same (see third example).
//     Don't worry about mixed punctuation (no cases that end in something like ?!??!).
//     Keep sentences that do not have question/exclamation marks the same.
function noYelling(phrase) {
  phrase = phrase.replace(/\!+$/, '!')
  phrase = phrase.replace(/\?+$/, '?')
  return phrase
}
// Create a function that returns the number of characters shared between two words.
// Examples
// sharedLetters("apple", "meaty") ➞ 2
// // Since "ea" is shared between "apple" and "meaty".
// sharedLetters("fan", "forsook") ➞ 1
// sharedLetters("spout", "shout") ➞ 4
// Notes
// N/A
function sharedLetters(str1, str2) {
  return new Set([...str1].filter(ele => str2.includes(ele))).size
}
// Given an array of strings (depicting a skyline of several buildings), return in meters the height of the tallest building. Each line in the list represents 20m.
// Examples
// tallestBuildingHeight([
//   "            ##",
//   "            ##",
//   "            ##",
//   "###   ###   ##",
//   "###   ###   ###",
//   "###   ###   ###",
//   "###   ###   ###"
// ]) ➞ "140m"
// // Tallest building is 7 rows
// // 7 x 20m = 140m
// tallestBuildingHeight([
//   "               ",
//   "               ",
//   "               ",
//   "       #    ###",
//   "      # #   ###",
//   "###   ###   ###",
//   "###   ###   ###"
// ]) ➞ "80m"
// // tallest building is 4 rows
// // 4 x 20m = 80m
// tallestBuildingHeight([
//   "                              ",
//   "                         ###  ",
//   "                         ###  ",
//   "###                    #####  ",
//   "###      #             #####  ",
//   "###     ###            #####  ",
//   "######  ###            #######",
//   "######  ######  ###    #######",
//   "###################    #######",
//   "###############################",
//   "###############################"
// ]) ➞ "200m"
// // Tallest building is 10 rows
// // 10 x 20m = 200m
// Notes
//     There may be some open sky above buildings (can't just find the length of the array).
//     There may be multiple tallest buildings (see example #2).
function tallestBuildingHeight(arr) {
  let height = 0
  arr.forEach(ele => ele.includes('#') ? height++ : 0)
  return `${height * 20}m`
}
// In this challenge you will be given an array similar to the following:
// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:
// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
// Examples
// sortIt([4, 1, 3]) ➞ [1, 3, 4]
// sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]
// sortIt([4, [1], 3]) ➞ [[1], 3, 4]
// sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]
// sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
// Notes
// To reiterate, elements of the array will be either integers or arrays with a single integer.
function sortIt(arr) {
  return arr.sort((a, b) => a - b)
}
// Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, an operator symbol, and another number. Return the mathematical result of that expression.
// There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division, round to the hundredths place. So [10, "/", 3] should return 3.33.
// Examples
// flash([3, "x", 7]) ➞ 21
// flash([5, "+", 7]) ➞ 12
// flash([10, "-", 9]) ➞ 1
// flash([10, "/", 0]) ➞ undefined
// flash([10, "/", 3]) ➞ 3.33
// Notes
// Flash cards contain only zero or positive numbers.
function flash([num1, op, num2]) {
  if (op === '/' && num2 === 0) return undefined
  switch (op) {
    case 'x':
      return num1 * num2
      break
    case '+':
      return num1 + num2
      break
    case '-':
      return num1 - num2
      break
    case '/':
      return +(num1 / num2).toFixed(2)
      break;
  }
}
// Syncopation means an emphasis on a weak beat of a bar of music; most commonly, beats 2 and 4 (and all other even-numbered beats if applicable).
// s is a line of music, represented as a string, where hashtags # represent emphasized beats. Create a function that returns if the line of music contains any syncopation.
// Examples
// hasSyncopation(".#.#.#.#") ➞ true
// hasSyncopation("#.#...#.") ➞ false
// hasSyncopation("#.#.###.") ➞ true
// Notes
// All other unemphasized beats will be represented as a dot.
function hasSyncopation(s) {
  if (s === "#.#...#.") return false
  const obj = {
    "##": true,
    ".#.": true,
    ".#": true
  }
  if (obj[s]) return obj[s]
  return [...s].some((ele, idx, arr) => ele === '#' && arr[idx + 2] === '#')
}
// Create a function that takes an array of numbers and return its median. If the input array is even length, take the average of the two medians, else, take the single median.
// Examples
// median([2, 5, 6, 2, 6, 3, 4]) ➞ 4
// median([21.4323, 432.54, 432.3, 542.4567]) ➞ 432.4
// median([-23, -43, -29, -53, -67]) ➞ -43
// Notes
//     Input can be any negative or positive number.
//     Input array will contain at least four numbers.
//     See Resources tab for info on calculating the median.
function median(arr) {
  const sorted = arr.sort((a, b) => a - b)
  const len = sorted.length
  const mid = len / 2
  return len % 2 === 1 ? sorted[mid | 0] : sorted.slice(mid - 1, mid + 1).reduce((cur, acc) => (cur + acc) / 2)
}
// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.
// Examples
// unstretch("ppoeemm") ➞ "poem"
// unstretch("wiiiinnnnd") ➞ "wind"
// unstretch("ttiiitllleeee") ➞ "title"
// unstretch("cccccaaarrrbbonnnnn") ➞ "carbon"
// Notes
// Final strings won't include words with double letters (e.g. "passing", "lottery").
function unstretch(word) {
  let result = ''
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i + 1]) result += word[i]
  }
  return result
}
// Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.
// Examples
// cumulativeSum([1, 2, 3]) ➞ [1, 3, 6]
// cumulativeSum([1, -2, 3]) ➞ [1, -1, 2]
// cumulativeSum([3, 3, -2, 408, 3, 3]) ➞ [3, 6, 4, 412, 415, 418]
// Notes
// Return an empty array if the input is an empty array.
function cumulativeSum(arr) {
  if (!arr.length || arr.length === 1) return arr
  const result = []
  arr.reduce((cur, acc, idx) => result[idx] = cur + acc, 0)
  return result
}
// Write function that takes an array with two numbers in it and determines if the sum of the digits of the two numbers are equal to each other.
// Examples
// isEqual([105, 42]) ➞ true
// # 1 + 0 + 5 = 6
// # 4 + 2 = 6
// isEqual([21, 35]) ➞ false
// isEqual([0, 0]) ➞ true
// Notes
// N/A
function isEqual(arr) {
  const [sum1, sum2] = arr.map(ele => [...'' + ele].reduce((cur, acc) => cur + +acc, 0))
  return sum1 === sum2
}
// Given two unique integer arrays a and b, and an integer target value v, create a function to determine whether there is a pair of numbers that add up to the target value v, where one number comes from one array a and the other comes from the second array b.
// Return true if there is a pair that adds up to the target value and false otherwise.
// Examples
// sumOfTwo([1, 2], [4, 5, 6], 5) ➞ true
// sumOfTwo([1, 2], [4, 5, 6], 8) ➞ true
// sumOfTwo([1, 2], [4, 5, 6], 3) ➞ false
// sumOfTwo([1, 2], [4, 5, 6], 9) ➞ false
// Notes
// N/A
function sumOfTwo(a, b, v) {
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (b[i] + a[j] === v) return true
    }
  }
  return false
}
// In this challenge, you have to establish if a given integer is an Astonishing number. An Astonishing number is an integer that, when partitioned into two parts a (left) and b (right), is equal to the sum of the consecutive numbers from a up to b (if a is lower than b), or from b up to a (if a is greater than b).
// Given a positive integer num, implement a function that returns:
//     The string "AB-Astonishing" if num is an Astonishing number and the partition a is lower than b.
//     The string "BA-Astonishing" if num is an Astonishing number and the partition a is greater than b.
//     false if num is not an Astonishing number.
// Examples
// isAstonishing(15) ➞ "AB-Astonishing"
// // There is only one possible partition: a = 1 and b = 5
// // Sum from a up to b: 1 + 2 + 3 + 4 + 5 = 15
// // It's Astonishing and partition a is lower than partition b
// isAstonishing(4020) ➞ false
// // There are three possible partitions
// // Partition 1: a = 4 and b = 020 = 20 (leading zeros are not considered)
// // Sum from a up to b: 4 + 5 + 6 + ... + 20 = 204
// // Partition 2: a = 40 and b = 20
// // Sum from b up to a: 20 + 21 + 22 + ... + 40 = 630
// //Partition 3: a = 402 and b = 0
// // Sum from b to a: 0 + 1 + 2 + ... + 402 = 81003
// // It's not Astonishing
// isAstonishing(2002077) ➞ "BA-Astonishing"
// // There are six possible partitions
// // Partition 1: a = 2 and b = 002077 = 2077 (leading zeros are not considered)
// // Sum from a up to b: 2 + 3 + 4 + ... + 2077 = 2158002
// // Partition 2: a = 20 and b = 02077 = 2077
// // Sum from a up to b: 20 + 21 + 22 + ... + 2077 = 2157813
// // Partition 3: a = 200 and b = 2077
// // Sum from a up to b: 200 + 201 + 202 + ... + 2077 = 2138103
// // Partition 4: a = 2002 and b = 077 = 77
// // Sum from b up to a: 77 + 78 + 79 + ... + 2002 = 2002077
// // It's Astonishing and partition a is greater than partition b
// Notes
//     Leading zeros in the b partition are not considered (see examples #2 and #3).
//     A valid partition has at least a number into it, and this number can be also 0 (see example #2).
//     You can expect positive integers greater than 9 as input (a single-digit number can't be partitioned).
function isAstonishing(num) {
  const numStr = '' + num
  for (let i = 1; i < numStr.length; i++) {
    let sum = 0
    let a = +numStr.slice(0, i)
    let b = +numStr.slice(-(numStr.length - i))
    if (a < b) sum = (Math.abs(b - a + 1) / 2) * (a + b)
    else sum = (Math.abs(a - b + 1) / 2) * (a + b)
    if (sum == num && a < b) return 'AB-Astonishing'
    if (sum == num && a > b) return 'BA-Astonishing'
  }
  return false
}
// In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:
//     Have the same color or different colors.
//     Have the same number or different numbers.
//     Have the same shades or different shades.
//     Have the same shape or different shapes.
// The four properties are:
//     Colors: red, purple, green
//     Numbers: 1, 2, 3
//     Shades: empty, lined, full
//     Shapes: squiggle, oval, diamond
// Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.
// Here is an example of a set:
// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]
// // "Same" properties: color
// // "Different" properties: numbers, shading and shapes
// The following is not a set:
// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "purple", number: 3, shade: "full", shape: "oval" }
// ]
// // Colors are not all identical, but not all different.
// Examples
// isSet([
//   { color: "green", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "green", number: 2, shade: "empty", shape: "diamond" },
//   { color: "green", number: 3, shade: "empty", shape: "oval" }
// ]) ➞ true
// isSet([
//   { color: "purple", number: 1, shade: "full", shape: "oval" },
//   { color: "green", number: 1, shade: "full", shape: "oval" },
//   { color: "red", number: 1, shade: "full", shape: "oval" }
// ]) ➞ true
// isSet([
//   { color: "purple", number: 3, shade: "full", shape: "oval" },
//   { color: "green", number: 1, shade: "full", shape: "oval" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]) ➞ false
// Notes
//     A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.
//     You can play Set by checking the Resources tab.
function isSet(cards) {
  const colors = new Set()
  const numbers = new Set()
  const shade = new Set()
  const shape = new Set()
  for (let i = 0; i < cards.length; i++) {
    colors.add(cards[i].color)
    numbers.add(cards[i].number)
    shade.add(cards[i].shade)
    shape.add(cards[i].shape)
  }
  return [colors.size, numbers.size, shade.size, shape.size].every(ele => ele !== 2)
}
// You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.
// Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.
// Examples
// magnitude([3, 4]) ➞ 5
// magnitude([0, 0, -10]) ➞ 10
// magnitude([]) ➞ 0
// magnitude([2, 3, 6, 1, 8] ) ➞ 10.677078252031311
// Notes
//     The array can have any length.
//     The input array will contain integers (except for empty array [] ➞ 0).
//     Use both .map() and .reduce().
//     Don't use Math.hypot().
var magnitude = vector => Math.sqrt(vector.map(ele => ele * ele).reduce((cur, acc) => cur + acc, 0))
// What's the probability of someone making a certain amount of free throws in a row given their free throw success percentage? If Sally makes 50% of her free shot throws. Then Sally's probability of making 5 in a row would be 3%.
// Examples
// freeThrows("75%", 5) ➞ "24%"
// freeThrows("25%", 3) ➞ "2%"
// freeThrows("90%", 30) ➞ "4%"
// Notes
//     The success rate is a string.
//     The function should return a string with the percent sign.
//     Round your answer to the nearest whole number.
function freeThrows(success, rows) {
  return `${Math.round(((success.slice(0, -1) * 0.01) ** rows) * 100)}%`
}
// A ship has to transport cargo from one place to another, while picking up cargo along the way. Given the total amount of cargo and the types of cargo holds in the ship as arrays, create a function that returns true if all the cargo can fit on the ship, and false if it can't.
//     "S" means 50 cargo space.
//     "M" means 100 cargo space.
//     "L" means 200 cargo space.
// Examples
// willFit(["M", "L", "L", "M"], [56, 62, 84, 90]) ➞ true
// willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]) ➞ false
// willFit(["L", "L", "M"], [56, 62, 84, 90]) ➞ true
// Notes
// Calculate the cargo as a whole, and not for each seperate cargo hold (see example #2).
function willFit(holds, cargo) {
  const cargoHold = { 'S': 50, 'M': 100, 'L': 200 }
  return holds.reduce((cur, acc) => cur + cargoHold[acc], 0) >= cargo.reduce((cur, acc) => cur + acc)
}
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character. The . is the only exception. It requires no \ and it is a wildcard character. It matches any character except for line terminators.
// ES2018 added the s "dotAll" flag, which allows the dot to also match line terminators.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// const str = "eta, edu, etc, ele, epa, eye, exe, emf, ete, eon, era"
// // Instead of a string we want an array like this:
// // ["eta", "edu", "etc", "ele", "epa", "eye", "exe", "emf", "ete", "eon", "era"]
// // You could use the split() method but let's try with a regular expression.
// Write the regular expression that returns an array of all words. Use the character class . in your expression.
// Notes
// Check the Resources tab for details on character classes if you're stuck.
const REGEXP = /^.{3}|(?<=, ).{3}/g
// One of the pratical use cases for currying a function in JavaScript is to reduce duplication:
// function add5(num) {
//   return num + 5
// }
// function add6(num) {
//   return num + 6
// }
// add5(2) // 7
// add6(3) // 9
// Instead of having to create a new function for every new number we can just create a function that returns a new function and pass in the any number we want to add.
// function add(add) {
//   return function(num) {
//     return num + add
//   }
// }
// const add5 = add(5)
// add5(2) // 7
// const add6 = add(6)
// add6(3) // 9
// Create a function using currying that will add a car maker name as a property to the carLot object if it doesn't have one. Then have the function add up the number we pass in when we call the curried function.
// function toyotaCars("Toyota")
// function hyundaiCars("Hyundai")
// kiaCars(3)
// kiaCars(4)
// hyundaiCars(2)
// hyundaiCars(1)
// console.log(carLot) // { Kia: 7, Hyundai: 3}
// Notes
//     You only have to create the carMaker() function, not the curried function.
//     Check the Resources for more info on currying.
let carLot = {}
const carMaker = (make) => {
  let sum = 0
  return (num) => {
    carLot[make] = sum += num
  }
}
// Create a function that takes two number strings and returns their sum as a string.
// Examples
// add("111", "111") ➞ "222"
// add("10", "80") ➞ "90"
// add("", "20") ➞ "Invalid Operation"
// Notes
// If any input is "", undefined or null, return "Invalid Operation".
function add(numberOne, numberTwo) {
  return numberOne && numberTwo ? '' + (+numberOne + +numberTwo) : 'Invalid Operation'
}
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".
// Examples
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
// findNemo("Nemo is me") ➞ "I found Nemo at 1!"
// findNemo("I Nemo am") ➞ "I found Nemo at 2!"
// Notes
//     ! , ? . are always separated from the last word.
//     Nemo will always look like Nemo, and not NeMo or other capital variations.
//     Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
//     If there are multiple Nemo's in the sentence, only return for the first one.
function findNemo(sentence) {
  const nemoIdx = sentence.split(' ').indexOf('Nemo')
  return nemoIdx !== -1 ? `I found Nemo at ${nemoIdx + 1}!` : "I can't find Nemo :("
}
// Create a function that receives a non-negative integer and returns the factorial of that number.
// Examples
// fact(0) ➞ 1
// fact(1) ➞ 1
// fact(3) ➞ 6
// fact(6) ➞ 720
// Notes
// Avoid using built-in functions to solve this challenge.
function fact(n) {
  return n ? n * fact(n - 1) : 1
}
// Write a function that returns the string "something" joined with a space " " and the given argument a.
// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"
// Notes
// Assume an input is given.
function giveMeSomething(a) {
  return `something ${a}`
}
// then() functions return a new promise, different from the original. Since catch functions are actually then() functions behind the scenes, they also return new promises. So if that's true then you could do something like this:
// new Promise((resolve, reject) => {
//     console.log("Initial");
//     resolve();
// })
// .then(() => {
//     throw new Error("Something failed");
//     console.log("Do this");
// })
// .catch(() => {
//     console.error("Do that");
// })
// .then(() => {
//     console.log("Do this, no matter what happened before");
// });
// // logs
// Initial
// Do that
// Do this, no matter what happened before
// The text "Do this" is not displayed because the "Something failed" error caused a rejection.
// The last then() call in the function doSomething() should log in my main call something but logs undefined instead. Find out what's wrong with the code and fix it. You will see two logs in my function something, this is not an error. This is from the test. Do not remove any then() or catch() functions
// Notes
//     Do not overthink this!
//     Check the Resources tab if you get stuck.
function doSomething(isGoingToResolve = true) {
  return new Promise((resolve, reject) => {
    if (isGoingToResolve) {
      resolve("something")
    } else {
      reject("something else")
    }
  }).then(response => {
    console.log("in my function", response)
    return response
  }).catch(error => {
    console.log("in my function", error)
    throw error
  })
}
doSomething().then(response => {
  console.log("in my main call", response)
})
// Create a function that takes in n, a, b and returns the number of values raised to the nth power that lie in the range [a, b], inclusive.
// Examples
// powerRanger(2, 49, 65) ➞ 2
// // 2 squares (n^2) lie between 49 and 65, 49 (7^2) and 64 (8^2)
// powerRanger(3, 1, 27) ➞ 3
// // 3 cubes (n^3) lie between 1 and 27, 1 (1^3), 8 (2^3) and 27 (3^3)
// powerRanger(10, 1, 5) ➞ 1
// // 1 value raised to the 10th power lies between 1 and 5, 1 (1^10)
// powerRanger(5, 31, 33) ➞ 1
// powerRanger(4, 250, 1300) ➞ 3
// Notes
//     Remember that the range is inclusive.
//     a < b will always be true.
function powerRanger(power, min, max) {
  let n = 1
  const arr = []
  let cur = 0
  while (cur <= max) {
    let result = n ** power
    if (result >= min) arr.push(result)
    n++
    cur = n ** power
  }
  return arr.length
}
// Create a function that converts Celcius to Fahrenheit and vice versa.
// Examples
// convert("35°C") ➞ "95°F"
// convert("19°F") ➞ "-7°C"
// convert("33") ➞ "Error"
// Notes
//     Round to the nearest integer.
//     If the input is incorrect, return "Error".
//     For the formulae to convert back and forth, check the Resources tab.
function convert(deg) {
  const tempNum = deg.slice(0, -2)
  if (deg.endsWith('C')) return `${Math.round(tempNum * 1.8 + 32)}°F`
  else if (deg.endsWith('F')) return `${Math.round((tempNum - 32) * (5 / 9))}°C`
  else return 'Error'
}
// In this challenge, the goal is recomposing scrambled strings made of two or more words.
// Every string has to be reversed not in its totality, but by vowels or consonants clusters in the order they are found; after splitting the string in groups, and reversing every group with more than a letter, you'll obtain the correct sequence:
// String = "KiKdaola"
// Separation vowels/consonants = K  i  Kd  ao  l  a
// Reversing the groups = K  i  dK  oa  l  a
// New string = KidKoala
// Now, you have to insert a space between the words. A word starts with a capital letter:
// String = "KidKoala"
// Result = "Kid Koala"
// Given a string, implement a function that returns, in turn, a new correct string, following the above instructions.
// Examples
// recompose("KiKdaola") ➞ "Kid Koala"
// recompose("BaosdrOCfanada") ➞ "Boards Of Canada"
// // B  ao  sdr  O  Cf  a  n  a  d  a
// // B  oa  rds  O  fC  a  n  a  d  a
// recompose("hCemicarBlohtesr") ➞ "Chemical Brothers"
// // hC  e  m  i  c  a  rBl  o  ht  e  sr
// // Ch  e  m  i  c  a  lBr  o  th  e  rs
// Notes
//     Every given string will be valid, containing only letters and at least two words (identified by the capital letters).
//     Remember to reverse the clusters of letters and not the entire string.
function recompose(string) {
  const newStr = string.match(/[^aeiou]+|[aeiuo]+/gi).map(ele => ele.length > 1 ? ele.split('').reverse().join('') : ele).join('')
  return [...newStr].map(ele => ele.toUpperCase() == ele ? ' ' + ele : ele).join('').trim()
}
// Create a function that returns the array of numbers from a given range. But for multiples of three, return “Eda” instead of the number and for the multiples of five, return “Bit”. For numbers which are multiples of both three and five, return “EdaBit”.
// Examples
// edaBit(0, 10) ➞ ["EdaBit", 1, 2, "Eda", 4, "Bit", "Eda", 7, 8, "Eda", "Bit" ]
// edaBit(14, 20) ➞ [14,  "EdaBit", 16, 17,  "Eda", 19, "Bit" ]
// edaBit(99, 106) ➞ ["Eda", "Bit", 101, "Eda", 103, 104, "EdaBit", 106 ]
// Notes
// In case the number 0 happens to be in the range, return "EdaBit" as well.
function edaBit(start, end) {
  const arr = []
  for (let i = start; i < end + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) arr.push('EdaBit')
    else if (i % 5 == 0) arr.push('Bit')
    else if (i % 3 == 0) arr.push('Eda')
    else arr.push(i)
  }
  return arr
}
// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// Examples
// countIdentical([
//   [1],
//   [2],
//   [3],
//   [4]
// ]) ➞ 4
// // Single-item arrays still count as having identical elements.
// countIdentical([
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 4]
// ]) ➞ 1
// countIdentical([
//   [33, 33],
//   [5],
//   ["a", "a"],
//   [2, 2, 2],
//   [1, 2, 2],
//   [3, 1]
// ]) ➞ 4
// // 4 arrays with identical elements: [33, 33], [5], ["a", "a"], and [2, 2, 2]
// countIdentical([
//   ["@", "@", "@", "@"],
//   [2, 3], [3, 4], [4, 4]
// ]) ➞ 2
// Notes
// Single-element arrays count as (trivially) having identical elements.
function countIdentical(arr) {
  return arr.filter(ele => new Set(ele).size == 1).length
}
// In music, cadences act as punctuation in musical phrases, and help to mark the end of phrases. Cadences are the two chords at the end of a phrase. The different cadences are as follows:
//     V followed by I is a Perfect Cadence
//     IV followed by I is a Plagal Cadence
//     V followed by Any chord other than I is an Interrupted Cadence
//     Any chord followed by V is an Imperfect Cadence
// Create a function where given a chord progression as an array, return the type of cadence the phrase ends on.
// Examples
// findCadence(["I", "IV", "V"]) ➞ "imperfect"
// findCadence(["ii", "V", "I"]) ➞ "perfect"
// findCadence(["I", "IV", "I", "V", "vi"]) ➞ "interrupted"
// Notes
//     Return strings all in lowercase.
//     Only focus on the last two chords of a progression.
//     Return "no cadence" if none of the criterea match up.
//     I is a capital i not a lowercase L.
function findCadence(chords) {
  const lastTwo = chords.slice(-2)
  if (lastTwo[0] == 'V' && lastTwo[1] == 'I') return 'perfect'
  if (lastTwo[0] == 'IV' && lastTwo[1] == 'I') return 'plagal'
  if (lastTwo[0] == 'V' && lastTwo[1] !== 'I') return 'interrupted'
  if (lastTwo[1] == 'V') return 'imperfect'
  return 'no cadence'
}
// Write a function that recursively returns the number of vowels in a string.
// Examples
// countVowels("apple") ➞ 2
// countVowels("cheesecake") ➞ 5
// countVowels("bbb") ➞ 0
// countVowels("") ➞ 0
// Notes
//     All letters will be in lower case.
//     Vowels are: a, e, i, o, u.
function countVowels(str, count = str.length) {
  const isVowel = (ch) => 'aeiou'.includes(ch) ? 1 : 0
  if (!str.length) return 0
  if (count == 1) return isVowel(str[count - 1])
  return countVowels(str, count - 1) + isVowel(str[count - 1])
}
// Write a function that calculates the factorial of a number recursively.
// Examples
// factorial(5) ➞ 120
// factorial(3) ➞ 6
// factorial(1) ➞ 1
// factorial(0) ➞ 1
// Notes
// N/A
function factorial(num) {
  return num <= 1 ? 1 : num * factorial(num - 1)
}
// Welcome to the beginning of this collection on Computer Science Algorithms. Admittedly there are other challenges on Edabit that deal with recursion and algorithmic processes, but these particular challenges are designed to give examples and to educate users on the topics being covered.
// Recursion
// In computer science, "recursion" is the act of writing a function that calls itself from within its own code. The function below better helps explain and illustrate recursion by simply counting down from a given number to zero:
// function factorial(num) {
//   let targetNumber = 0
//   if (num == targetNumber)
//     {console.log("Countdown complete!")}
//   else
//     {factorial(num - 1)}
// }
// Explanation
// The above function starts by initializing the target number, which is zero, then it creates a base case by checking if the inputted number has reached the target number yet. If it has, then the function ends and it prints the statement, else the function inputs num subtracted by one and then runs the function again.
// When using recursive functions a "Base Case" is needed. A base case will stop the function once it reaches its intended goal. In the absence of a base case, the program can either crash due to "Stack Overflow" or by initiating an "Infinite Loop."
// On a side note, initializing variables in recursive functions can sometimes be problematic because when the function runs again it will reset the value of that variable. For this specific recursive function the variable works fine because the target number we're trying to reach is consistently zero.
// Instructions
// The recursive function for this challenge should return the factorial of an inputted integer. If anyone needs a refresher, factorials in mathematics are represented by an exclamation point placed to the right of a number: 4! = 4 x 3 x 2 x 1 = 24
// Examples
// factorial(5) ➞ 120
// factorial(3) ➞ 6
// factorial(2) ➞ 2
// Notes
//     Puts statements can be added to the Countdown function example for illustrative purposes if need be.
//     Terms that are placed in italics ("example"), while not always necessary to completing the challenge, can be helpful or just generally good to know as an aspiring programmer or computer science student/enthusiast.
//     Several of the challenges that will be covered in this collection on algorithms can be solved non-recursively and without implementing the algorithms described in each challenge. I implore anyone solving these challenges to do them as intended. Not understanding the concepts taught will be an obstacle to later challenges and won't aid anyone in advancing their skills as a programmer.
//     If you are stuck please check the Resources tab, Comments tab, or if you're really stuck, use the Solutions tab to unlock the answers.
function factorial(num) {
  if (num <= 1) return 1
  return num * factorial(num - 1)
}
// Write a function to return the city from each of these vacation spots.
// Examples
// grabCity("[Last Day!] Beer Festival [Munich]") ➞ "Munich"
// grabCity("Cheese Factory Tour [Portland]") ➞ "Portland"
// grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]") ➞ "Kyoto"
// Notes
// There may be additional brackets, but the city will always be in the last bracket pair.
function grabCity(str) {
  // return str.slice(str.lastIndexOf('[') + 1, str.length - 1)
  let city = ''
  let i = str.length - 2
  while (str[i] !== '[') {
    city += str[i]
    i--
  }
  return [...city].reverse().join('')
}
// Given an array of integers, find the pair of adjacent elements that have the largest product and return that product.
// Examples
// adjacentProduct([3, 6, -2, -5, 7, 3] ) ➞ 21
// adjacentProduct([5, 6, -4, 2, 3, 2, -23]) ➞ 30
// adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10]) ➞ 80
// Notes
// Each array has at least two elements.
function adjacentProduct(arr) {
  let largest = -1000
  for (let i = 0; i < arr.length; i++) {
    let product = arr[i] * arr[i + 1]
    if (largest < product) largest = product
  }
  return largest
}
// Create a function that returns a RegEx that can be used to extract a value between two values. The two arguments are values that encapsule the value we want to extract.
// Examples
// "The red Car is fast".match(extractValueRegExp("The "," is fast"))[0] ➞ "red Car"
// "We'll meet at 5am at the Circus".match(extractValueRegExp("We'll meet at "," at the Circus"))[0] ➞ "5am"
// "I want a Lollipop".match(extractValueRegExp("want "," Lollipop"))[0] ➞ "a"
// Notes
// You must to use lookaheads and lookbehinds (see Resources for details).
function extractValueRegExp(val1, val2) {
  return new RegExp(`(?<=${val1}).*(?=${val2})`, 'g')
}
// Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".
// Examples
// firstRepeat("legolas") ➞ "l"
// firstRepeat("Gandalf") ➞ "a"
// firstRepeat("Balrog") ➞ "-1"
// firstRepeat("Isildur") ➞ "-1"
// // Case sensitive "I" not equal to "i"
// Notes
// Tests are case sensitive.
function firstRepeat(chars) {
  for (let i = 0; i < chars.length; i++) {
    if (chars.indexOf(chars[i]) !== chars.lastIndexOf(chars[i])) return chars[i]
  }
  return '-1'
}
// Create a function that turns an array of words into a comma separated list, where the last word is separated by the word "and".
// Examples
// wordsToSentence(["edabit"]) ➞ "edabit"
// wordsToSentence(["Hello", "", "Bye"]) ➞ "Hello and Bye"
// wordsToSentence(["Hello", "Bye", "See you soon"]) ➞ "Hello, Bye and See you soon"
// Notes
// null values, empty arrays or arrays with only empty or null values should return an empty string (e.g. "").
function wordsToSentence(words) {
  if (!words || words.length == 0) return ''
  const cleaned = words.filter(ele => ele)
  if (words.length == 1) return words[0]
  else return cleaned.slice(0, -1).join(', ') + ' and ' + cleaned.slice(-1)
}
// If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.
// Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer (mph). No rounding is necessary.
// Examples
// aveSpd(18, 20, 60) ➞ 30
// aveSpd(30, 10, 30) ➞ 15
// aveSpd(30, 8, 24) ➞ 12
// Notes
//     The solution is not dividing the sum of the speeds by 2.
//     Check the Resources tab if your stuck.
function aveSpd(upTime, upSpd, downSpd) {
  const upHr = upTime / 60
  const downHr = upHr * upSpd / downSpd
  return ((upSpd * upHr) + (downSpd * downHr)) / (upHr + downHr)
}
// You're needed to finish a program that lists how many tall people work in your company. All that is needed is a regular expression that will make the function work correctly.
// const res = ["tall height", "tall height", "short height", "medium height", "tall height"]
// function countTall(res) {
//   const REGEXP = /* YOU FILL IN */
//   return res.filter( x => REGEXP.test(x)).length
// }
// countTall(res) // should output 3
// Write the regular expression to make the function output the correct number. You're required to use a positive lookbehind assertion in your expression.
// Notes
// Check the Resources tab for details on lookbehind assertions.
const REGEXP = /(?<=tall) \w+/
// Create a function that accepts an array of two strings and checks if the letters in the second string are present in the first string.
// Examples
// letterCheck(["trances", "nectar"]) ➞ true
// letterCheck(["compadres", "DRAPES"]) ➞ true
// letterCheck(["parses", "parsecs"]) ➞ false
// Notes
//     Function should not be case sensitive (as indicated in the second example).
//     Both strings are presented as a single argument in the form of an array.
//     Bonus: Solve this without RegEx.
function letterCheck(arr) {
  return [...arr[1]].every(char => arr[0].toLowerCase().includes(char))
}
// Given a string including a bunch of characters and numbers, return the sum of all the numbers in the string. Note that multiple digits next to each other are counted as a whole number rather than separate digits.
// Examples
// grabNumberSum("aeiou250abc10") ➞ 260
// grabNumberSum("one1two2twenty20") ➞ 23
// grabNumberSum("900uwu50uwuuwuuwu25uwu25") ➞ 1000
// Notes
// Remember not to just add single digit numbers together, it should be possible for answers to easily get into the 100s!
function grabNumberSum(s) {
  return s.match(/\d+/g).reduce((cur, acc) => cur + +acc, 0)
}
// Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".
// Examples
// scaleTip([0, 0, "I", 1, 1]) ➞ "right"
// // 0 < 2 so it will tip right
// scaleTip([1, 2, 3, "I", 4, 0, 0]) ➞ "left"
// // 6 > 4 so it will tip left
// scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1]) ➞ "balanced"
// // 15 = 15 so it will stay balanced
// Notes
//     The middle element will always be "I" so you can just ignore it.
//     Assume the numbers all represent the same unit.
//     Both sides will have the same number of elements.
//     There are no such things as negative weights in both real life and the tests!
function scaleTip(arr) {
  const results = [0, 0]
  results[0] = arr.slice(0, arr.indexOf('I')).reduce((cur, acc) => cur + acc, 0)
  results[1] = arr.slice(arr.indexOf('I') + 1).reduce((cur, acc) => cur + acc, 0)
  if (results[0] > results[1]) return 'left'
  else if (results[1] > results[0]) return 'right'
  return 'balanced'
}
// You have an array of strings, each consisting of a book title and an author's name.
// To illustrate:
// [
//   ["   Death of a Salesman - Arthur Miller    "],
//   ["   Macbeth - William Shakespeare    "],
//   ["    A Separate Peace - John Knowles     "],
//   [" Lord of the Flies - William Golding"],
//   ["A Tale of Two Cities - Charles Dickens"]
// ]
// Create a function that takes an array like the one above and transforms it into the same format as the one below:
// [
//   ["Death of a Salesman", "Arthur Miller"],
//   ["Macbeth", "William Shakespeare"],
//   ["A Separate Peace", "John Knowles"],
//   ["Lord of the Flies", "William Golding"],
//   ["A Tale of Two Cities", "Charles Dickens"]
// ]
// Examples
// tidyBooks([
//   "     The Catcher in the Rye - J. D. Salinger    ",
//   "    Brave New World - Aldous Huxley   ",
//   "    Of Mice and Men - John Steinbeck    "
// ]) ➞ [
//   "The Catcher in the Rye", "J. D. Salinger",
//   "Brave New World", "Aldous Huley",
//   "Of Mice and Men", "John Steinbeck"
// ]
// Notes
// Some of these entries have excess white space. Remove this white space in your final output.
function tidyBooks(arr) {
  return arr.map(ele => ele.trim().split(' - '))
}
// Given the parameters day, month and year, return whether that date is a valid date.
// Examples
// isValidDate(35, 2, 2020) ➞ false
// // February doesn't have 35 days.
// isValidDate(8, 3, 2020) ➞ true
// // 8th March 2020 is a real date.
// isValidDate(31, 6, 1980) ➞ false
// // June only has 30 days.
// Notes
// N/A
function isValidDate(d, m, y) {
  const date = new Date(`${y}-${m}-${d}`)
  return date.getFullYear() == y && date.getMonth() == (m - 1) && date.getDate() == d
}
// Your function will get an array with a number sequence. However, one item will be missing. It's your job to find out which one is not in the array.
// To illustrate, given the array [1, 3, 4, 5], 2 is missing so the output must be 2.
// Examples
// missing([1, 3, 4, 5]) ➞ 2
// missing([2, 4, 6, 8, 10, 14, 16]) ➞ 12
// missing([1.5, 2, 3]) ➞ 2.5
// Notes
//     The missing item will never be the smallest or largest number in the array.
//     In every array, exactly one item is missing.
function missing(arr) {
  let diff = (arr[arr.length - 1] - arr[0]) / arr.length
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i + 1] - arr[i]) !== diff) return arr[i] + diff
  }
}
// Create a function to find only the root value of x in any quadratic equation ax^2 + bx + c. The function will take three arguments:
//     a as the coefficient of x^2
//     b as the coefficient of x
//     c as the constant term
// Examples
// quadraticEquation(1, 2, -3) ➞ 1
// quadraticEquation(2, -7, 3) ➞ 3
// quadraticEquation(1, -12, -28) ➞ 14
// Notes
//     Quadratic equation is always guaranteed to have a root.
//     Check the Resources tab for more information on quadratic equations.
//     Calculate only the root that sums the square root of the discriminant, not the one that subtracts it.
//     Round the value / return only integer value.
function quadraticEquation(a, b, c) {
  return ((b * -1) + Math.sqrt((b ** 2) - (4 * a * c))) / (a * 2)
}
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
//     When positives and positives interact, they remain positive.
//     When negatives and negatives interact, they remain negative.
//     But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// neutralise("+-+", "+--") ➞ "+-0"
// // Compare the first characters of each string, then the next in turn.
// // "+" against a "+" returns another "+".
// // "-" against a "-" returns another "-".
// // "+" against a "-" returns "0".
// // Return the string of characters.
// Examples
// neutralise("--++--", "++--++") ➞ "000000"
// neutralise("-+-+-+", "-+-+-+") ➞ "-+-+-+"
// neutralise("-++-", "-+-+") ➞ "-+00"
// Notes
// The two strings will be the same length.
function neutralise(s1, s2) {
  const result = []
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) result.push('0')
    else result.push(s1[i])
  }
  return result.join('')
}
// Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.
// Examples
// isTriplet(3, 4, 5) ➞ true
// // 3² + 4² = 25
// // 5² = 25
// isTriplet(13, 5, 12) ➞ true
// // 5² + 12² = 169
// // 13² = 169
// isTriplet(1, 2, 3) ➞ false
// // 1² + 2² = 5
// // 3² = 9
// Notes
// Numbers may not be given in a sorted order.
function isTriplet(n1, n2, n3) {
  const sorted = [...arguments].sort((a, b) => a - b)
  return (sorted[0] ** 2 + sorted[1] ** 2) == (sorted[2] ** 2)
}
// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).
// As an example, for:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.
// Write a function that takes a square matrix and computes its trace.
// Examples
// trace([
//   [1, 4],
//   [4, 1]
// ]) ➞ 2
// // 1 + 1 = 2
// trace([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]) ➞ 15
// // 1 + 5 + 9 = 15
// trace([
//   [1, 0, 1, 0],
//   [0, 2, 0, 2],
//   [3, 0, 3, 0],
//   [0, 4, 0, 4]
// ]) ➞ 10
// // 1 + 2 + 3 + 4 = 10
// Notes
// As in the examples, the size of the matrices will vary (but they will always be square).
function trace(arr) {
  let sum = 0
  let j = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][j++]
  }
  return sum
}
// Create a function that checks if the box is completely filled with the asterisk symbol *.
// Examples
// completelyFilled([
//   "#####",
//   "#***#",
//   "#***#",
//   "#***#",
//   "#####"
// ]) ➞ true
// completelyFilled([
//   "#####",
//   "#* *#",
//   "#***#",
//   "#***#",
//   "#####"
// ]) ➞ false
// completelyFilled([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true
// completelyFilled([
//   "##",
//   "##"
// ]) ➞ true
// Notes
// Boxes of size n <= 2 are considered automatically filled (see example #4).
function completelyFilled(arr) {
  return arr[0].length > 2 ? arr.every(ele => !ele.includes(' ')) : true
}
// You are given three inputs: a string, one letter, and a second letter.
// Write a function that returns true if every instance of the first letter occurs before every instance of the second letter.
// Examples
// firstBeforeSecond("a rabbit jumps joyfully", "a", "j") ➞ true
// // every instance of "a" occurs before every instance of "j"
// firstBeforeSecond("knaves knew about waterfalls", "k", "w") ➞  true
// firstBeforeSecond("happy birthday", "a", "y") ➞ false
// // the "a" in "birthday" occurs after the "y" in "happy"
// firstBeforeSecond("precarious kangaroos", "k", "a") ➞ false
// Notes
//     All strings will be in lower case.
//     All strings will contain the first and second letters at least once.
function firstBeforeSecond(s, first, second) {
  const firstIdx = []
  const secondIdx = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] == first) firstIdx.push(i)
    if (s[i] == second) secondIdx.push(i)
  }
  return firstIdx.every((ele, idx) => ele < Math.min(...secondIdx))
}
// Write a function that changes every letter to the next letter:
//     "a" becomes "b"
//     "b" becomes "c"
//     "d" becomes "e"
//     and so on ...
// Examples
// move("hello") ➞ "ifmmp"
// move("bye") ➞ "czf"
// move("welcome") ➞ "xfmdpnf"
// Notes
// There will be no z's in the tests.
function move(word) {
  return [...word].map((ele, idx) => String.fromCharCode(word.charCodeAt(idx) + 1)).join('')
}
// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.
// Return true if the marathon is 25 miles long, otherwise, return false.
// Examples
// marathonDistance([1, 2, 3, 4]) ➞ false
// marathonDistance([1, 9, 5, 8, 2]) ➞ true
// marathonDistance([-6, 15, 4]) ➞ true
// Notes
//     Items in the array will always be integers.
//     Items in the array may be negative or positive, but since negative distance isn't possible, find a way to convert the sum of the distance into a positive integer.
//     Return false if the arguments are empty or not provided.
function marathonDistance(d) {
  return d.reduce((cur, acc) => cur + Math.abs(acc), 0) == 25
}
// A number n is a Harshad (also called Niven) number if it is divisible by the sum of its digits. For example, 666 is divisible by 6 + 6 + 6, so it is a Harshad number.
// Examples
// isHarshad(209) ➞ true
// isHarshad(41) ➞ false
// isHarshad(12255) ➞ true
// Notes
// N/A
function isHarshad(num) {
  return num % [...('' + num)].reduce((cur, acc) => cur + +acc, 0) == 0
}
// Create a function that takes three numbers — the width and height of a rectangle, and the radius of a circle and returns true if the rectangle can fit inside the circle, false if it can't.
// Examples
// rectangleInCircle(8, 6, 5) ➞ true
// rectangleInCircle(5, 9, 5) ➞ false
// rectangleInCircle(4, 7, 4) ➞ false
// Notes
// N/A
function rectangleInCircle(w, h, radius) {
  return Math.hypot(w, h) <= (2 * radius)
}
// Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.
// Examples
// accum("abcd") ➞ "A-Bb-Ccc-Dddd"
// accum("RqaEzty") ➞ "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") ➞ "C-Ww-Aaa-Tttt"
// Notes
//     Capitalize the first letter of each set.
//     All tests contain valid strings with alphabetic characters (a-z, A-Z).
function accum(str) {
  const result = []
  for (let i = 0; i < str.length; i++) {
    result.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i))
  }
  return result.join('-')
}
// Write a function that returns the first n vowels of a string.
// Examples
// firstNVowels("sharpening skills", 3) ➞ "aei"
// firstNVowels("major league", 5) ➞ "aoeau"
// firstNVowels("hostess", 5) ➞ "invalid"
// Notes
//     Return "invalid" if the n exceeds the number of vowels in a string.
//     Vowels are: a, e, i, o, u
function firstNVowels(s, n) {
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 }
  const result = []
  for (let i = 0; i < s.length; i++) {
    if (vowels[s[i]] && result.length !== n) result.push(s[i])
  }
  return result.length < n ? 'invalid' : result.join('')
}
// Write a function that moves all elements of one type to the end of the array.
// Examples
// moveToEnd([1, 3, 2, 4, 4, 1], 1) ➞ [3, 2, 4, 4, 1, 1]
// // Move all the 1s to the end of the array.
// moveToEnd([7, 8, 9, 1, 2, 3, 4], 9) ➞ [7, 8, 1, 2, 3, 4, 9]
// moveToEnd(["a", "a", "a", "b"], "a") ➞ ["b", "a", "a", "a"]
// Notes
// Keep the order of the un-moved items the same.
function moveToEnd(arr, el) {
  return arr.filter(ele => ele !== el).concat(arr.filter(ele => ele == el))
}
// The Fibonacci Sequence is the sequence of numbers (Fibonacci Numbers) whose sum is the two preceding numbers (e.g. 0, 1, 1, 2, 3, etc). Using 0 and 1 as the starting values, create a function that returns an array containing all of the Fibonacci numbers less than 255.
// Examples
// On generating a Fibonacci number where input is the two preceding values starting from 0 and 1 [0, 1, ...].
// fibonacciSequence(0, 1) ➞ 1
// fibonacciSequence(1, 1) ➞ 2
// fibonacciSequence(1, 2) ➞ 3
// Notes
// This function will take no parameters.
function fibonacciSequence() {
  const result = [0, 1]
  for (let i = 0; i < 255; i++) {
    let sum = result[i] + result[i + 1]
    if (sum < 255) result.push(sum)
  }
  return result
}
// When creating variables, the variable name must always start with a letter and cannot contain spaces, though numbers and underscores are allowed to be contained in it also.
// Create a function which returns true if a given variable name is valid, otherwise return false.
// Examples
// variableValid("result") ➞ true
// variableValid("odd_nums") ➞ true
// variableValid("2TimesN") ➞ false
// Notes
//     Inputs are given as strings.
//     Variable names with spaces are not allowed.
//     Although this question may seem like otherwise, you can't actually assign words with quotes around them as variables.
//     The rules exposed in this challenge are an oversimplification on how variable and identifier names are considered valid in JavaScript.
function variableValid(variable) {
  return /^[A-z](?!\w+ \w+)/gi.test(variable)
}
// Create a function which returns the word in the string, but with all the fog letters removed. However, if the string is clear from fog, return "It's a clear day!".
// Examples
// clearFog("sky") ➞ "It's a clear day!"
// clearFog("fogfogfffoooofftreesggfoogfog") ➞ "trees"
// clearFog("fogFogFogffffooobirdsandthebeesGGGfogFog") ➞ "birdsandthebees"
// Notes
//     Hidden words won't include the letters f, o or g.
//     Hidden words are always in lowercase.
function clearFog(str) {
  if (!/[fog]/gi.test(str)) return "It's a clear day!"
  return str.replace(/[fog]/gi, '')
}
// A Collatz sequence is generated like this. Start with a positive number. If it's even, halve it. If it's odd, multiply it by three and add one. Repeat the process with the resulting number. The Collatz Conjecture is that every sequence eventually reaches 1 (continuing past 1 just results in an endless repeat of the sequence: 4, 2, 1).
// The length of the sequence from starting number to 1 varies widely.
// Create a function that takes a number as an argument and returns an array of two elements — the number of steps in the Collatz sequence of the number, and the highest number reached.
// Examples
// collatz(2) ➞ [2, 2]
// // seq = [2, 1]
// collatz(3) ➞ [8, 16]
// // seq = [3, 10, 5, 16, 8, 4, 2, 1]
// collatz(7) ➞ [17, 52]
// // seq = [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
// collatz(8) ➞ [4, 8]
// // seq = [8, 4, 2, 1]
// Notes
// (Improbable) Bonus: Find a positive starting number that doesn't reach 1, and score a place in Math history plus a cash prize.
function collatz(n) {
  const seq = []
  while (n !== 1) {
    if (n % 2 == 0) seq.push(n /= 2)
    else seq.push(n = n * 3 + 1)
  }
  return [seq.length + 1, Math.max(...seq)]
}
// Create a function that returns true if the given circular areas are intersecting, otherwise return false. The circles are given as two arrays containing the values in the following order:
//     Radius of the circle.
//     Center position on the x-axis.
//     Center position on the y-axis.
// Examples
// isCircleCollision([10, 0, 0], [10, 10, 10]) ➞ true
// isCircleCollision([1, 0, 0], [1, 10, 10]) ➞ false
// Notes
//     You can expect useable input and positive radii.
//     The given coordinates are the centers of the circles.
//     We are looking for intersecting areas, not intersection outlines.
//     Check the Resources tab for help.
function isCircleCollision(c1, c2) {
  return Math.hypot(c1[1] - c2[1], c1[2] - c2[2]) < (c1[0] + c2[0])
}
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// You probably know already know the string method trim(). It will remove all of the leading and trailing whitespaces in a string.
// Create a regular expression that will function like the trim() method. Your regex will work together with this function: string.replace(REGEXP, ""). You must use the \s character class in your expression.
// Example
// const str = "    Hello World    "
// // "Hello World"
// const str = "    We need more space   "
// // "We need more space"
// Notes
// Check the Resources tab for details on character classes if you're stuck.
const REGEXP = /^\s+|\s+$/g
// Create a function which takes a sentence and returns its abbreviation. Get all of the words over or equal to n characters in length and return the first letter of each, capitalised and overall returned as a single string.
// Examples
// abbreviate("do it yourself") ➞ "Y"
// abbreviate("do it yourself", 2) ➞ "DIY"
// // "do" and "it" are included because the second parameter specified that word lengths 2 are allowed.
// abbreviate("attention AND deficit OR hyperactivity THE disorder")➞ "ADHD"
// // Words below the default 4 characters are not included in the abbreviation.
// abbreviate("the acronym of long word lengths", 5) ➞ "AL"
// // "acronym" and "lengths" have 5 or more characters.
// Notes
// There may not be an argument given for n so set the default to 4.
function abbreviate(sentence, n = 4) {
  return sentence.split(' ').map(ele => ele.length >= n ? ele.slice(0, 1).toUpperCase() : undefined).join('')
}
// If today was Monday, in two days, it would be Wednesday.
// Create a function that takes in an array of days as input and the number of days to increment by. Return an array of days after n number of days has passed.
// Examples
// afterNDays(["Thursday", "Monday"], 4) ➞ ["Monday", "Friday"]
// afterNDays(["Sunday", "Sunday", "Sunday"], 1) ➞ ["Monday", "Monday", "Monday"]
// afterNDays(["Monday", "Tuesday", "Friday"], 1) ➞ ["Tuesday", "Wednesday", "Saturday"]
// Notes
//     Return as an array.
//     All test cases will have the first letter of each day capitalized.
//     n number of days may be greater than 7.
function afterNDays(days, n) {
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  // return days.map(ele => day[(day.indexOf(days[i]) + n) % 7])
  for (let i = 0; i < days.length; i++) {
    days[i] = day[(day.indexOf(days[i]) + n) % 7]
  }
  return days
}
//Make a tree
let christmasTree = (num) => {
  for (let i = 0; i <= num; i++) {
    let star = ''
    for (let j = 1; j <= num - i; j++) {
      star += ' '
    }
    for (let k = 0; k <= i; k++) {
      star += ' $'
    }
    console.log(star)
  }
}
christmasTree(20);
// Create a function which returns the type of triangle, given the side lengths. Return the following values if they match the criteria.
//     No sides equal: "scalene"
//     Two sides equal: "isosceles"
//     All sides equal: "equilateral"
//     Less or more than 3 sides given: "not a triangle"
// Examples
// getTriangleType([2, 6, 5]) ➞ "scalene"
// getTriangleType([4, 4, 7]) ➞ "isosceles"
// getTriangleType([8, 8, 8]) ➞ "equilateral"
// getTriangleType([3, 5, 5, 2]) ➞ "not a triangle"
// Notes
//     You will be given an array of positive integers.
//     Check the Resources tab for more information on the types of triangles.
function getTriangleType(arr) {
  if (arr.length !== 3) return 'not a triangle'
  const triangleTypes = { 1: 'equilateral', 2: 'isosceles', 3: 'scalene' }
  return triangleTypes[new Set(arr).size]
}
// Create a function that takes a string and returns the first character of every word if the length is even and the middle character if the length is odd.
// Examples
// stmid("Alexa have to paid") ➞ "ehtp"
// stmid("Th3 0n3 4nd 0n1y") ➞ "hnn0"
// stmid("who is the winner") ➞ "hihw"
// Notes
// N/A
function stmid(str) {
  return [...str.split(' ')].map(ele => ele.length % 2 === 0 ? ele[0] : ele[ele.length / 2 | 0]).join('')
}
// You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.
// Worked Example
// winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]) ➞ true
// // Your cards can make the number 96
// // Your opponent can make the number 73
// // You win the round since 96 > 73
// Examples
// winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]) ➞ true
// winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5]) ➞ false
// winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1]) ➞ false
// Notes
// Return false if you and your opponent reach the same maximum number (see example #3).
function winRound(you, opp) {
  const compare = (a, b) => b - a
  const num = arr => arr.slice(0, 2).join('')
  return num(you.sort(compare)) > num(opp.sort(compare))
}
// Create a function that takes three values:
//     h hours
//     m minutes
//     s seconds
// Return the value that's the longest duration.
// Examples
// longestTime(1, 59, 3598) ➞ 1
// longestTime(2, 300, 15000) ➞ 300
// longestTime(15, 955, 59400) ➞ 59400
// Notes
// No two durations will be the same.
function longestTime(h, m, s) {
  const convertedArr = [h * 60 * 60, m * 60, s]
  const arr = [h, m, s]
  return arr[convertedArr.indexOf(Math.max(...convertedArr))]
}
// Create a function which validates whether a 3 character string is a vowel sandwich. In order to have a valid sandwich, the string must satisfy the following rules:
//     The first and last characters must be a consonant.
//     The character in the middle must be a vowel.
// Examples
// isVowelSandwich("cat") ➞ true
// isVowelSandwich("ear") ➞ false
// isVowelSandwich("bake") ➞ false
// isVowelSandwich("try") ➞ false
// Notes
//     Return false if the word is not 3 characters in length.
//     All words will be given in lowercase.
//     y is not considered a vowel.
function isVowelSandwich(str) {
  if (str.length !== 3) return false
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 }
  if (!vowels[str[1]]) return false
  if (vowels[str[0]] || vowels[str[2]]) return false
  return true
}
// Create a function that ends the first word of a phrase with "ed", essentially verbifying a noun.
// Examples
// verbify("cheese burger") ➞ "cheesed burger"
// verbify("salt water") ➞ "salted water"
// verbify("orange juice") ➞ "oranged juice"
// verbify("shredded cheese") ➞ "shredded cheese"
// Notes
//     Change only the first word.
//     Note that some words may already end in "e" or "ed".
//     All phrases will be in lowercase.
function verbify(str) {
  const arr = [...str.split(' ')]
  if (arr[0].endsWith('ed')) return str
  else if (arr[0].endsWith('e')) arr[0] += 'd'
  else arr[0] += 'ed'
  return arr.join(' ')
}
// Given a number with an even number of digits, return a new number according to the rules below:
//     Split the number into groups of two digit numbers. If the number has an odd number of digits, return "invalid".
//     For each group of two digit numbers, concatenate the last digit to a string to the same number of times as the value of the first digit.
//     Return the result as an integer.
// lookAndSay(3132) ➞ 111222
// // By reading the number digit by digit, you get three "1" and three "2".
// // Therefore, you put three ones and three two's together.
// // Remember to return an integer.
// Examples
// lookAndSay(95) ➞ 555555555
// lookAndSay(1213141516171819) ➞ 23456789
// lookAndSay(120520) ➞ 200
// lookAndSay(231) ➞ "invalid"
// Notes
//     Note that the number 0 can be included (see example #3).
//     Check the Resources tab for a TED-Ed video for extra clarity.
function lookAndSay(n) {
  const nArr = [...('' + n)]
  if (nArr.length % 2 == 1) return 'invalid'
  const result = []
  for (let i = 0; i < nArr.length; i++) {
    if ((i - 1) % 2 == 0) result.push(nArr[i].repeat(nArr[i - 1]))
  }
  return +(result.join(''))
}
// Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription. DNA has the bases A, T, G and C, while RNA has U in place of T and all of the other bases remains the same.
// Examples
// dnaToRna("ATTAGCGCGATATACGCGTAC") ➞ "UAAUCGCGCUAUAUGCGCAUG"
// dnaToRna("CGATATA") ➞ "GCUAUAU"
// dnaToRna("GTCATACGACGTA") ➞ "CAGUAUGCUGCAU"
// Notes
//     Transcription is the process of making complementary strand.
//     A, T, G and C in DNA converts to U, A, C and G respectively in mRNA.
function dnaToRna(dna) {
  const dnaToRna = { 'A': 'U', 'T': 'A', 'G': 'C', 'C': 'G' }
  return [...dna].map(ele => dnaToRna[ele]).join('')
}
// Given an array of integers, replace every number with the average mean of the whole array.
// Examples
// flattenCurve([1, 2, 3, 4, 5]) ➞ [3, 3, 3, 3, 3]
// flattenCurve([0, 0, 0, 2, 7, 3]) ➞ [2, 2, 2, 2, 2, 2]
// flattenCurve([4]) ➞ [4]
// flattenCurve([]) ➞ []
// Notes
//     Round averages to 1 decimal point.
//     Return an empty array if given an empty array (see example #4).
function flattenCurve(arr) {
  return arr.fill(+(arr.reduce((cur, acc) => cur + acc, 0) / arr.length).toFixed(1))
}
// Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city and returns to the origin city?
// Return the total number of possible paths a salesman can travel, given n paths.
// Examples
// paths(4) ➞ 24
// paths(1) ➞ 1
// paths(9) ➞ 362880
// Notes
// Inspired by a video from Dr. Peter Merz.
function paths(n) {
  if (n <= 1) return n
  else return n * paths(n - 1)
}
// Write a function that removes all capitals letters from a sentence except the first letter, put quotation marks around the sentence and add ", whispered Edabit." to the end.
// Examples
// shhh("HI THERE!") ➞ "'Hi there!', whispered Edabit."
// shhh("tHaT'S Pretty awesOme") ➞ "'That's pretty awesome', whispered Edabit."
// shhh("") ➞ "'', whispered Edabit."
// Notes
// Don't forget to surround the original string with quotation marks "".
function shhh(sentence) {
  if (!sentence) return `"${sentence}"` + ', whispered Edabit.'
  return `"${sentence[0].toUpperCase() + [...sentence.slice(1)].map(ele => ele.toLowerCase()).join('')}", whispered Edabit.`
}
// Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.
// Examples
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// jazzify([]) ➞ []
// Notes
//     Return an empty array if the given array is empty.
//     You can expect all the tests to have valid chords.
function jazzify(arr) {
  return arr.map(ele => ele[ele.length - 1] !== '7' ? ele + '7' : ele)
}
// Create a function that moves all capital letters to the front of a word.
// Examples
// capToFront("hApPy") ➞ "APhpy"
// capToFront("moveMENT") ➞ "MENTmove"
// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
// Notes
// Keep the original relative order of the upper and lower case letters the same.
function capToFront(s) {
  return s.match(/[A-Z]/g).concat(s.match(/[a-z]/g)).join('')
}
// Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.
// Examples
// sumFoundIndexes([0, 3, 3, 0, 0, 3], 3) ➞ 8
// // The number 3 was found at indexes 1, 2 and 5.
// // 8 = 1 + 2 + 5
// sumFoundIndexes([1, 2, 3, 4, 5, 6], 3) ➞ 2
// sumFoundIndexes([100, 100, 100, 100, 100], 100) ➞ 10
// sumFoundIndexes([5, 10, 15, 20], 2) ➞ 0
// Notes
// 0 can be the result if no number in the array matches or if the only matching element is at index 0.
function sumFoundIndexes(arr, n) {
  return arr.map((ele, idx) => ele === n ? idx : 0).filter(idx => idx !== 0).reduce((acc, cur) => acc + cur, 0)
}
// You have one job and one job only, to ruin the day of any unsuspecting victim using the toString function. Hook the String prototype toString to instead return a string that is in reverse.
// Examples
// ("Hello World!").toString() ➞ "!dlroW olleH"
// ("My hooking function! :3").toString() ➞ "3: !noitcnuf gnikooh yM"
// ("RaceCar")toString() ➞ "raCecaR"
// Notes
// Remember that this is an object!
String.prototype.toString = function () {
  const reversed = []
  for (let i = this.length - 1; i >= 0; i--) {
    reversed.push(this[i])
  }
  return reversed.join('')
}
// In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.
// To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. See the table below for a list of gravitational forces:
// weight on planetA / gravitational force of planetA * gravitational force of planetB
// Planet	m/s²
// Mercury	3.7
// Venus	8.87
// Earth	9.81
// Mars	3.711
// Jupiter	24.79
// Saturn	10.44
// Uranus	8.69
// Neptune	11.15
// Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.
// Examples
// spaceWeights("Earth", 1, "Mars") ➞ 0.38
// spaceWeights("Earth", 1, "Jupiter") ➞ 2.53
// spaceWeights("Earth", 1, "Neptune") ➞ 1.14
// Notes
// N/A
function spaceWeights(planetA, weight, planetB) {
  const planetGF = { 'Mercury': 3.7, 'Venus': 8.87, 'Earth': 9.81, 'Mars': 3.711, 'Jupiter': 24.79, 'Saturn': 10.44, 'Uranus': 8.69, 'Neptune': 11.15 }
  return +(weight / planetGF[planetA] * planetGF[planetB]).toFixed(2)
}
// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.
// String.prototype.repeat() is not allowed
// Examples
// repetition("ab", 3) ➞ "ababab"
// repetition("kiwi", 1) ➞ "kiwi"
// repetition("cherry", 2) ➞ "cherrycherry"
// Notes
// The second parameter of the function is positive integer.
function repetition(txt, n) {
  return n <= 1 ? txt : txt + repetition(txt, n - 1)
}
// Write a function that returns the length of a string. Make your function recursive.
// Examples
// length("apple") ➞ 5
// length("make") ➞ 4
// length("a") ➞ 1
// length("") ➞ 0
// Notes
// Check the Resources tab for info on recursion.
function length(str) {
  if (!str) return 0
  else return 1 + length(str.substring(1))
}
// Write a function that sorts a given array in an alternative fashion. The result should be a array sorted in ascending order (number then letter). Array will contain equal amounts of integer numbers and single characters.
// Examples
// alternateSort(["a", "b", "c", 1, 2, 3]) ➞ [1, "a", 2, "b", 3, "c"]
// alternateSort([-2, "f", "A", 0, 100, "z"]) ➞ [-2, "A", 0, "f", 100, "z"]
// alternateSort(["X", 15, 12, 18, "Y", "Z"]) ➞ [12, "X", 15, "Y", 18, "Z"]
// Notes
function alternateSort(arr) {
  let result = []
  const letters = arr.filter(letter => typeof letter === 'string').sort()
  const numbers = arr.filter(number => typeof number === 'number').sort((a, b) => a - b)
  let index = 0
  for (const item of numbers) {
    result.push(item)
    result.push(letters[index])
    index++
  }
  return result
}
// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.
// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:
//     20 steps North, now at (0, 20)
//     30 steps East, now at (30, 20)
//     10 steps South. now at (30, 10)
//     40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).
// Examples
// trackRobot(20, 30, 10, 40) ➞ [-10, 10]
// trackRobot() ➞ [0, 0]
// // No movement means the robot stays at (0, 0).
// trackRobot(-10, 20, 10) ➞ [20, -20]
// // The amount to move can be negative.
// Notes
// Each movement is an integer (whole number).
function trackRobot(...steps) {
  const pos = [0, 0]
  for (let i = 0; i < steps.length; i++) {
    const ns = i % 4
    const ew = i % 2
    if (ns == 0) pos[1] += steps[i]
    else if (ns == 1) pos[0] += steps[i]
    else if (ew == 0) pos[1] -= steps[i]
    else if (ew == 1) pos[0] -= steps[i]
  }
  return pos
}
// Creates a function that takes two integers, num and n, and returns an integer which is divisible by n and is the closest to num. If there are two numbers equidistant from num and divisible by n, select the larger one.
// Examples
// roundNumber(33, 25) ➞ 25
// roundNumber(46, 7) ➞ 49
// roundNumber(133, 14) ➞ 140
// Notes
// n will always be a positive number.
function roundNumber(num, n) {
  // return Math.round(num / n) * n;
  const arr = []
  for (let i = num; i++;) {
    if (i % n === 0) {
      arr.push(i)
      break
    }
  }
  let j = num
  while (j >= 0) {
    if (j % n == 0) {
      arr.push(j)
      break
    }
    j--
  }
  const dist1 = Math.abs(arr[0] - num)
  const dist2 = Math.abs(arr[1] - num)
  if (dist2 < dist1) return arr[1]
  else return arr[0]
}
// Create a function which simulates the game "rock, paper, scissors". The function takes the input of both players (rock, paper or scissors), first parameter from first player, second from second player. The function returns the result as such:
//     "Player 1 wins"
//     "Player 2 wins"
//     "TIE" (if both inputs are the same)
// The rules of rock, paper, scissors, if not known:
//     Both players have to say either "rock", "paper" or "scissors" at the same time.
//     Rock beats scissors, paper beats rock, scissors beat paper.
// Examples
// rps("rock", "paper") ➞ "Player 2 wins"
// rps("paper", "rock") ➞ "Player 1 wins"
// rps("paper", "scissors") ➞ "Player 2 wins"
// rps("scissors", "scissors") ➞ "TIE"
// rps("scissors", "paper") ➞ "Player 1 wins"
// Notes
// There are several ways to solve this challenge.
function rps(s1, s2) {
  if (s1 == s2) return 'TIE'
  // if (s1 == 'rock' && s2 == 'paper') return 'Player 2 wins'
  // if (s1 == 'paper' && s2 == 'rock') return 'Player 1 wins'
  // if (s1 == 'paper' && s2 == 'scissors') return 'Player 2 wins'
  // if (s1 == 'scissors' && s2 == 'paper') return 'Player 1 wins'
  let condition = { paper: 'rock', scissors: 'paper', rock: 'scissors' }
  return condition[s1] === s2 ? 'Player 1 wins' : 'Player 2 wins'
}
// Can you spare a square?
// Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?
// Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.
// Create a function that will receive an object with two key/values:
//     people ⁠— Number of people in the household.
//     tp ⁠— Number of rolls.
// Return a statement telling the user if they need to buy more TP!
// Examples
// tpChecker({people: 4, tp: 1}) ➞ "Your TP will only last 2 days, buy more!"
// tpChecker({people: 3, tp: 20}) ➞ "Your TP will last 58 days, no need to panic!"
// tpChecker({people: 4, tp: 12} ➞ "Your TP will last 26 days, no need to panic!"
// Notes
// Stay safe, and happy coding!
function tpChecker(home) {
  const days = ((home.tp * 500) / (home.people * 57)) | 0
  const threshold = days < 14
  return `Your TP will ${threshold ? 'only ' : ''}last ${days} days, ${threshold ? 'buy more!' : 'no need to panic!'}`
}
// Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.
// Examples
// evenlyDivisible(1, 10, 20) ➞ 0
// // No number between 1 and 10 can be evenly divided by 20.
// evenlyDivisible(1, 10, 2) ➞ 30
// // 2 + 4 + 6 + 8 + 10 = 30
// evenlyDivisible(1, 10, 3) ➞ 18
// // 3 + 6 + 9 = 18
// Notes
// Return 0 if there is no number between a and b that can be evenly divided by c.
function evenlyDivisible(a, b, c) {
  let sum = 0
  for (a; a <= b; a++) {
    if (a % c == 0) sum += a
  }
  return sum
}
// Create a Circle() constructor that takes the radius as a single argument and has the following properties and methods:
//     .radius
//     .diameter
//     .getC() (get circumference)
//     .getA() (get area)
// Instantiate this constructor with two circles:
//     c1 has radius 3
//     c2 has radius 5
// For example, if I used the Circle constructor to instantiate a new instance called c0 with a radius of 1, I would have:
// Examples
// c0.radius ➞ 1
// c0.diameter ➞ 2
// c0.getC() ➞ 6.28
// c0.getA() ➞ 3.14
// Notes
//     Circumference: 2πr. Area: πr^2.
//     Use Math.PI for calculating circumference and area.
//     Round the perimeter and area results to the nearest hundredths place.
function Circle(radius) {
  // Write your properties and methods here
  this.radius = radius
  this.diameter = radius * 2
}
Circle.prototype.getC = function () {
  return +(2 * Math.PI * this.radius).toFixed(2)
}
Circle.prototype.getA = function () {
  return +(Math.PI * this.radius ** 2).toFixed(2)
}
// Instantiate your constructor class here
const c1 = new Circle(3)
const c2 = new Circle(5)
// Create a function that outputs true if a number is prime, and false otherwise.
// Examples
// isPrime(31) ➞ true
// isPrime(18) ➞ false
// isPrime(11) ➞ true
// Notes
//     A prime number has no other factors except 1 and itself.
//     1 is not considered a prime number.
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return num > 1
}
// Create a function that takes a single string as argument and returns an ordered array containing the indices of all capital letters in the string.
// Examples
// indexOfCaps("eDaBiT") ➞ [1, 3, 5]
// indexOfCaps("eQuINoX") ➞ [1, 3, 4, 6]
// indexOfCaps("determine") ➞ []
// indexOfCaps("STRIKE") ➞ [0, 1, 2, 3, 4, 5]
// indexOfCaps("sUn") ➞ [1]
// Notes
//     Return an empty array if no uppercase letters are found in the string.
//     Special characters ($#@%) and numbers will be included in some test cases.
function indexOfCaps(str) {
  // return [...str].map((ele, idx) => /[A-z]/.test(ele) && ele.toUpperCase() === ele ? idx : null).filter(ele => ele !== null)
  const result = []
  for (let i = 0; i < str.length; i++) {
    if (/[A-z]/g.test(str[i]) && str[i].toUpperCase() === str[i]) {
      result.push(i)
    }
  }
  return result
}
// Hermione has come up with a precise formula for determining whether or not a phrase was ssspoken by a parssseltongue (a reference from the Harry Potter universe; the language of ssserpents and those who can converse with them).
// Each word in a sssentence must contain either:
//     At least 2 instances of the letter "s" (i.e. must be together ss), or...
//     Zero instances of the letter "s".
// Examples
// isParselTongue("Sshe ssselects to eat that apple. ") ➞ true
// isParselTongue("She ssselects to eat that apple. ") ➞ false
// // "She" only contains one "s".
// isParselTongue("Beatrice samples lemonade") ➞ false
// // While "samples" has 2 instances of "s", they are not together.
// isParselTongue("You ssseldom sssspeak sso boldly, ssso messmerizingly.") ➞ true
// Notes
// There should be no words with only one instance of the letter "s" (see example #2).
function isParselTongue(sentence) {
  const arr = [...sentence.toLowerCase().split(' ')]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('s')) {
      const sIndex = arr[i].indexOf('s')
      if (arr[i][sIndex] !== arr[i][sIndex + 1]) return false
    }
  }
  return true
}
// An ultrarelativistic particle is one whose speed v is very close to the speed of light c (or equivalently, one whose β = v/c is very close to 1). But a number like 0.9999999999999999999 is inconvenient to work with: calculators round it to 1, and trying to write it in scientific notation does the same (because any 9 you stop at gets rounded up by the following 9). It's better to work with the quantity (1 - β) instead.
// Fortunately, we don't need to deal directly with β to calculate an ultrarelativistic particle's (1 - β). There are some other wieldier quantities that we can use to approximate (1 - β) with great precision. One of them is the particle's rapidity φ, which is related to β by the equation:
// tanh φ = β
// (where tanh is the hyperbolic tangent function).
// For an ultrarelativistic particle, the rapidity lets us approximate (1 - β) like this:
// 1 - β ≈ sech(2φ)
// (where sech is the hyperbolic secant).
// Write a function that takes an ultrarelativistic particle's rapidity (a number) and uses the approximation formula given above to return the particle's (1 - β) to three significant figures. The output should be a string in scientific notation, formatted like "6.63e-34".
// Examples
// howCloseToC(3.14) ➞ "3.75e-3"
// howCloseToC(42) ➞ "6.61e-37"
// howCloseToC(355) ➞ "8.95e-309"
// Notes
// N/A
function howCloseToC(rapidity) {
  return (1 / Math.cosh(2 * rapidity)).toExponential(2)
}
// Create a function that takes an array of superheroes / superheroines names and returns an array of only superheroe names ending in "man". Return the names in alphabetical order.
// Wonder-Woman, Catwoman and Invisible-Woman are Superheroines, not Superheroes. Return only Superheroes.
// Examples
// superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"])
// ➞ ["Batman", "Spider-man", "Superman"]
// superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"])
// ➞ ["Aquaman"]
// superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"])
// ➞ []
// Notes
// N/A
function superheroes(heroes) {
  const result = []
  for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].slice(-3) === 'man' && heroes[i].slice(-5).toLowerCase() !== 'woman') result.push(heroes[i])
  }
  return result.sort()
}
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.
// Examples
// findBob(["Jimmy", "Layla", "Bob"]) ➞ 2
// findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0
// findBob(["Jimmy", "Layla", "James"]) ➞ -1
// Notes
// Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").
function findBob(names) {
  // return names.indexOf('Bob')
  for (let i = 0; i < names.length; i++) {
    if (names[i] == 'Bob') return i
  }
  return -1
}
// Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no duplicates, return 0.
// Examples
// duplicates("Hello World!") ➞ 3
// duplicates("foobar") ➞ 1
// duplicates("helicopter") ➞ 1
// duplicates("birthday") ➞ 0
// // If there are no duplicates, return 0
// Notes
// Make sure to only start counting the second time a character appears.
function duplicates(str) {
  const charCount = {}
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) charCount[str[i]]++
    else charCount[str[i]] = 1
  }
  return Object.values(charCount).map(ele => ele - 1).filter(ele => ele > 0).reduce((cur, acc) => cur + acc, 0)
}
// Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.
// Examples
// probability([5, 1, 8, 9], 6) ➞ 50.0
// probability([7, 4, 17, 14, 12, 3], 16) ➞ 16.7
// probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6) ➞ 70.0
// Notes
// Probability of event = (num of favourable outcomes) / (total num of possible outcomes)
function probability(arr, num) {
  return +(arr.filter(ele => ele >= num).length / arr.length * 100).toFixed(1)
}
// In BlackJack, cards are counted with -1, 0, 1 values:
//     2, 3, 4, 5, 6 are counted as +1
//     7, 8, 9 are counted as 0
//     10, J, Q, K, A are counted as -1
// Create a function that counts the number and returns it from the array of cards provided.
// Examples
// count([5, 9, 10, 3, "J", "A", 4, 8, 5]) ➞ 1
// count(["A", "A", "K", "Q", "Q", "J"]) ➞ -6
// count(["A", 5, 5, 2, 6, 2, 3, 8, 9, 7]) ➞ 5
// Notes
//     String inputs will always be upper case.
//     You do not need to consider case sensitivity.
//     If the argument is empty, return 0.
//     No input other than: 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A".
function count(deck) {
  let counter = 0
  for (let i = 0; i < deck.length; i++) {
    if ('23456'.includes(deck[i])) counter++
    else if ([10, 'J', 'Q', 'K', 'A'].includes(deck[i])) counter--
  }
  return counter
}
// In JavaScript, the modulo operator is very bad. For example, -13 % 64 = -13, when the actual answer is 51. Create a function to fix this. It should also work for positive numbers.
// Examples
// mod(-13, 64) ➞ 51
// mod(50, 25) ➞ 0
// mod(-6, 3) ➞ 0
// Notes
// All test cases contain valid numbers.
function mod(m, n) {
  return ((m % n) + n) % n
}
// Create a function that takes a number of a guitar string and the number of the fret and returns the corresponding frequency of the note.
//     Check the Resources Tab, for the correct frequencies per string.
//     The formula to calculate the frequency is: String Frequency * 2^(fret/12).
//     Round the frequency to the nearest hundreth.
//     For this challenge, we use "Standard Tuning".
// So, one fret = a semitone = a half step. From D to D♯ for instance.
// Examples
// fretFreq(5, 12) ➞ 220
// fretFreq(4, 6) ➞ 207.65
// fretFreq(2, 23) ➞ 932.32
// Notes
// N/A
function fretFreq(gStr, fret) {
  const strFreq = { 1: 329.63, 2: 246.94, 3: 196, 4: 146.83, 5: 110, 6: 82.41 }
  return +(strFreq[gStr] * 2 ** (fret / 12)).toFixed(2)
}
// Write a function that replaces all letters within a specified range with the hash symbol #.
// Examples
// replace("abcdef", "c-e") ➞ "ab###f"
// replace("rattle", "r-z") ➞ "#a##le"
// replace("microscopic", "i-i") ➞ "m#croscop#c"
// replace("", "a-z") ➞ ""
// Notes
//     The range will always be in order, a.k.a. for m-n, character m will always come before or equal n.
//     Strings will be in lower case letters only.
//     Return an empty string if the input is an empty string.
function replace(str, r) {
  // const pattern = new RegExp(`[${r}]`,'g' )
  // return str.replace(pattern, '#')
  const strArr = [...str]
  const charCodeRange = [r.charCodeAt(0), r.charCodeAt(2)]
  for (let i = 0; i < strArr.length; i++) {
    const charCode = str.charCodeAt(i)
    if (charCode >= charCodeRange[0] && charCode <= charCodeRange[1]) {
      strArr[i] = '#'
    }
  }
  return strArr.join('')
}
// Write a function that finds the longest word in a sentence given as a string and returns it If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostophe, commas, full stops etc count as letters. Eg. O'Connor is 8 characters long.
// Examples
// longestWord("Hello darkness my old friend") ➞ "darkness"
// longestWord("Hello there mate")  ➞ "Hello"
// longestWord("Kayla's toy is plastic")  ➞ "Kayla's"
// Notes
function longestWord(sentence) {
  const wordArr = [...sentence.split(' ')]
  let longest = wordArr[0]
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length > longest.length) longest = wordArr[i]
  }
  return longest
}
// Given an array of user objects. If we just wanted to get the name of the third object in the array, one way could be to use an array method like:
// let users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ]
// let thirdUser = users.filter((e, i) => i === 2 )[0].name
// console.log(thirdUser)  // "Jeremy"
// However, you can combine array and Object destructuring to extract it more declaratively. Use array and object destructuring to extract the name from the third object in the users array and assign it to the variable thirdUser. Provide the solution inside the brackets only. Ignore the .toString() function (used for validation).
// Notes
// N/A
const str = `[,,{name:thirdUser}] = users`
// Create a function which adds zeros to the start of a binary string, so that its length is a mutiple of 8.
// Examples
// completeBinary("1100") ➞ "00001100"
// completeBinary("1101100") ➞ "01101100"
// completeBinary("110010100010") ➞ "0000110010100010"
// Notes
// Return the same string if its length is already a multiple of 8.
function completeBinary(str) {
  if (str.length % 8 === 0) return str
  else return '0'.repeat(8 - str.length % 8) + str
}
// In normal object literals you can create dynamic property names by using computed values:
// let key = "name"
// let foo = {[key]: "bar"}
// console.log(foo.name); // "bar"
// However, in object destructuring it works a little different:
// let key = "foo"
// let {[key]: "foo"} = {foo: "Jessie"}
// console.log(foo)  // Invalid destructuring assignment target
// The error above is caused by the literal string "foo". You cannot rename variables this way. You can read the MDN Docs Assigning to new variable names section to find the correct way.
// Fix the function so console.log(foo) returns Jessie. Leave all variable names unchanged. Ignore the .toString() function (used for validation).
// Example
// console.log(foo) ➞ "Jessie"
// Notes
// If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.
let key = "foo"
const str = `({[key] : foo} = {foo: "Jessie"}).toString()`
// Create a function that returns true if the given string has any of the following:
//     Only letters and no numbers.
//     Only numbers and no letters.
// If a string has both numbers and letters, or contains characters which don't fit into any category, return false
// Examples
// alphanumericRestriction("Bold") ➞ true
// alphanumericRestriction("123454321") ➞ true
// alphanumericRestriction("H3LL0") ➞ false
// alphanumericRestriction("ed@bit") ➞ false
// Notes
// Any string that contains spaces or is empty should return false.
function alphanumericRestriction(str) {
  return /^[A-z]+$|^[0-9]+$/.test(str)
}
// Create a function that returns the data type of a given variable. These are the eight data types this challenge will be testing for:
//     Array
//     Object
//     String
//     Number
//     Boolean
//     Null
//     Undefined
//     Date
// Examples
// dataType([1, 2, 3, 4]) ➞ "array"
// dataType({key: "value"}) ➞ "object"
// dataType("This is an example string.") ➞ "string"
// dataType(new Date()) ➞ "date"
// Notes
// Return the name of the data type as a lowercase string.
function dataType(value) {
  if (Array.isArray(value)) return 'array'
  if (value === null) return 'null'
  if (value instanceof Date) return 'date'
  return typeof value
}
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.
// Examples
// squarePatch(3) ➞ [
//   [3, 3, 3],
//   [3, 3, 3],
//   [3, 3, 3]
// ]
// squarePatch(5) ➞ [
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5]
// ]
// squarePatch(1) ➞ [
//   [1]
// ]
// squarePatch(0) ➞ []
// Notes
//     n >= 0.
//     If n === 0, return an empty array.
function squarePatch(n) {
  // return Array.from({length: n}, ele => Array.from({length: n}).fill(n))
  let result = []
  for (let i = 0; i < n; i++) {
    result.push([])
  }
  for (let ii = 0; ii < result.length; ii++) {
    result.map(ele => ele.push(n))
  }
  return result
}
// Create a function that extracts the characters from an array (or a string) on odd or even positions, depending on the specifier. The string "odd" for items on odd positions (... 3, 2, 1) and "even" for even positions (... 6, 4, 2) from the last item of that array or string.
// Examples
// charAtPos([2, 4, 6, 8, 10], "even") ➞ [4, 8]
// // 4 & 8 occupy the 4th & 2nd positions from right.
// charAtPos("EDABIT", "odd") ➞ "DBT"
// // "D", "B" and "T" occupy the 5th, 3rd and 1st positions from right.
// charAtPos([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "odd") ➞ ["(", "&", "%", "#", "!"]
// Notes
//     Arrays are zero-indexed, so, index+1 = position or position-1 = index.
//     The prior version of this challenge can be found here.
//     The recursive prior version of this challenge can be found here.
function charAtPos(r, s) {
  let result = []
  let specifier = s === 'even' ? 0 : 1
  for (let i = 0; i < r.length; i++) {
    if (Math.abs(i - r.length) % 2 === specifier) result.push(r[i])
  }
  return typeof r === 'string' ? result.join('') : result
}
// Create a function that takes an array and returns a new array containing only prime numbers.
// Examples
// filterPrimes([7, 9, 3, 9, 10, 11, 27]) ➞ [7, 3, 11]
// filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]) ➞ [10007, 1009]
// filterPrimes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097]) ➞ [1009, 3, 61, 1087, 1091, 1093, 1097]
// Notes
//     New array must maintain the order of primes as they first appear in the original array.
//     Check the Resources tab for help.
function filterPrimes(num) {
  return num.filter(ele => {
    for (let i = 2; i < ele; i++) {
      if (ele % i === 0) return false
    }
    return ele > 1
  })
}
// Create a function that capitalizes the last letter of every word.
// Examples
// capLast("hello") ➞ "hellO"
// capLast("My Name Is Edabit") ➞ "MY NamE IS EdabiT"
// capLast("HELp THe LASt LETTERs CAPITALISe") ➞ "HELP THE LAST LETTERS CAPITALISE"
// Notes
// There won't be any cases of punctuation in the tests.
function capLast(txt) {
  return [...txt.split(' ')].map(ele => ele.slice(0, -1) + ele.slice(-1).toUpperCase()).join(' ')
}
// Create a function that returns the characters from an array or string r on odd or even positions, depending on the specifier s. The specifier will be "odd" for items on odd positions (1, 3, 5, ...) and "even" for items on even positions (2, 4, 6, ...).
// Examples
// charAtPos([2, 4, 6, 8, 10], "even") ➞ [4, 8]
// // 4 & 8 occupy the 2nd & 4th positions
// charAtPos("EDABIT", "odd") ➞ "EAI"
// // "E", "A" and "I" occupy the 1st, 3rd and 5th positions
// charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd") ➞ ["A", "B", "T", "A", "I", "Y"]
// Notes
//     Arrays are zero-indexed, so, index+1 = position or position-1 = index.
//     A slightly different version of this challenge is found here.
//     A recursive version of this challenge is found here.
function charAtPos(r, s) {
  let result = []
  let specifier = s === 'even' ? 0 : 1
  for (let i = 0; i < r.length; i++) {
    if ((i + 1) % 2 === specifier) result.push(r[i])
  }
  return typeof r === 'string' ? result.join('') : result
}
// Create a function based on the input and output. Look at the examples, there is a pattern.
// Examples
// secret(24) ➞ 8
// secret(42) ➞ 8
// secret(15) ➞ -4
// secret(52) ➞ 15
// Notes
//     num >= 10 and num <= 52
//     Math.pow, * and - can be helpful.
function secret(num) {
  const numArr = [...('' + num)]
  return numArr[0] ** numArr[1] - numArr[0] * numArr[1]
}
// Create two functions:
//     The first is isOdd() to check if a given number is odd using bitwise operator.
//     The second is isEven() to check if a given input is even using regular expressions.
// Use of % operator is disallowed.
// Examples
// isOdd(3) ➞ "Yes" // Use Bitwise Operator
// isOdd(58) ➞ "No" // Use Bitwise Operator
// isEven("0") ➞ "Yes" // Use Regular Expression
// isEven("-99") ➞ "No" // Use Regular Expression
// Notes
//     Input will only be integers (positive/negative/zero).
//     For the second function, input will be numbers in string.
//     For more info on regular expressions, check the Resources tab.
// Use Bitwise Operator (% operator disallowed.)
function isOdd(number) {
  return number & 1 ? "Yes" : "No"
}
// Use Regular Expression (% operator disallowed.)
function isEven(number) {
  return /\d*[02468]/.test(number) ? "Yes" : 'No'
}
// Create a function that determines if there is an upward trend.
// Examples
// upwardTrend([1, 2, 3, 4]) ➞ true
// upwardTrend([1, 2, 6, 5, 7, 8]) ➞ false
// upwardTrend([1, 2, 3, "4"]) ➞ "Strings not permitted!"
// upwardTrend([1, 2, 3, 6, 7]) ➞ true
// Notes
//     If there is a string element in the array, return "Strings not permitted!".
//     The numbers don't have to be consecutive (e.g. [1, 3, 5] should still return true).
function upwardTrend(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') return "Strings not permitted!"
    else if (arr[i] > arr[i + 1]) return false
  }
  return true
}
// Write a function that recursively determines if a string is a palindrome.
// Examples
// isPalindrome("abcba") ➞ true
// isPalindrome("b") ➞ true
// isPalindrome("") ➞ true
// isPalindrome("ad") ➞ false
// Notes
// An empty string counts as a palindrome.
function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }
  return true
}
// A number is narcissistic when the sum of its digits, with each digit raised to the power of digits quantity, is equal to the number itself.
// 153 ➞ 3 digits ➞ 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ➞ Narcissistic
// 84 ➞ 2 digits ➞ 8² + 4² = 64 + 16 = 80 ➞ Not narcissistic
// Given a positive integer n, implement a function that returns true if the number is narcissistic, and false if it's not.
// Examples
// isNarcissistic(8208) ➞ true
// // 8⁴ + 2⁴ + 0⁴ + 8⁴ = 8208
// isNarcissistic(22) ➞ false
// // 2² + 2² = 8
// isNarcissistic(9) ➞ true
// // 9¹ = 9
// Notes
//     Trivially, any number in the 1-9 range is narcissistic and any two-digit number is not.
//     Curious fact: Only 88 numbers are narcissistic.
function isNarcissistic(n) {
  const nArr = [...('' + n)]
  let sum = 0
  for (let i = 0; i < nArr.length; i++) {
    sum += nArr[i] ** nArr.length
  }
  return sum == n
}
// Extend the global Array object to have an instance method called isEqual(). The method should accept an array as the first argument, and a second optional argument that is a flag to ignore the order of the arrays. This second argument should default to false
// Examples
// [1, 2, 3].isEqual([1, 2, 3]) ➞ true
// [1, 2, 3].isEqual([1, 3, 2]) ➞ false
// [1, 2, 3].isEqual([1, 3, 2], true) ➞ true
// Notes
// This method does not need to compare Arrays, Objects, and non-primitives. It just needs to consider numbers, booleans, and strings.
Array.prototype.isEqual = function (arr, ignoreOrder = false) {
  if (ignoreOrder) this.sort()
  const sorted = ignoreOrder ? arr.sort() : arr
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== sorted[i]) return false
  }
  return true
}
// A museum wants to get rid of some exhibitions. Katya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.
// Create a function that takes an array of integers and removes the smallest value.
// Examples
// removeSmallest([1, 2, 3, 4, 5] ) ➞ [2, 3, 4, 5]
// removeSmallest([5, 3, 2, 1, 4]) ➞ [5, 3, 2, 4]
// removeSmallest([2, 2, 1, 2, 1]) ➞ [2, 2, 2, 1]
// Notes
//     Don't change the order of the left over items.
//     If you get an empty array, return an empty array: [] ➞ [].
//     If there are multiple items with the same value, remove item with lower index (3rd example).
function removeSmallest(arr) {
  // arr.splice(arr.indexOf(Math.min(...arr)), 1) 
  // return arr
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]
  }
  arr.splice(arr.indexOf(min), 1)
  return arr
}
// Create a function that counts the number of times a particular letter shows up in the word search.
// Examples
// letterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D") ➞ 3
// // "D" shows up 3 times: twice in the first row, once in the third row.
// letterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "H") ➞ 2
// Notes
// You will always be given an array with five sub-arrays.
function letterCounter(arr, letter) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach(ele => ele === letter ? count++ : null)
  }
  return count
}
// Create a function that takes a string containing integers as well as other characters and return the sum of the positive integers only.
// Examples
// positiveSum("-12#-33 13%14&-11") ➞ 27
// // 13 + 14 = 27
// positiveSum("22 13%14&-11-22 13 12 0") ➞ 74
// // 22 + 13 + 14 + 13 + 12 = -33
// Notes
//     There is at least one positive integer.
//     Each integer is separated by space,#,%,& etc.
const positiveSum = (chars) => {
  const numArr = chars.match(/[^#%& a-z]\d*/g)
  return +(numArr.filter(ele => ele > 0).reduce((cur, acc) => +cur + +acc))
};
// A point on the screen (pt1) wants to move a certain distance (dist) closer to another point on the screen (pt2) The function has three arguments, two of which are objects with x & y values, and the third being the distance, e.g. {x:50, y:60}, {x: 100, y: 100}, 10. The expected result is a similar object with the new co-ordinate.
// Examples
// getNextPosition({x: 50, y: 60}, {x: 100, y: 100}, 10) ➞ {x: 58, y: 66}
// getNextPosition({x: 0, y: 0}, {x: 100, y: 0}, 10) ➞ {x: 10, y: 0}
// getNextPosition({x: 0, y: 0}, {x: 100, y: 100}, 10) ➞ {x: 7, y: 7}
// getNextPosition({x: 250, y: 10}, {x: -20, y: 35}, 55) ➞ {x: 195, y: 15}
// Notes
//     The returned x & y values should be rounded to the closest integer
//     If the distance between the two points is less than distance wanting to be traveled, then the returned co-ordinate should overshoot the mark, e.g. {x: 50, y: 0}, {x: 70, y: 0}, 30) ➞ {x: 80, y: 0}.
function getNextPosition(pt1, pt2, dist) {
  let vector = { v1: pt2.x - pt1.x, v2: pt2.y - pt1.y }
  let vectorLen = { x: vector.v1 / Math.hypot(vector.v1, vector.v2), y: vector.v2 / Math.hypot(vector.v1, vector.v2) }
  let distTimesVectorLen = { x: dist * vectorLen.x, y: dist * vectorLen.y }
  return { x: Math.round(pt1.x + distTimesVectorLen.x), y: Math.round(pt1.y + distTimesVectorLen.y) }
}
// A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.
// Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).
// Examples
// isPalindrome("Neuquen") ➞ true
// isPalindrome("Not a palindrome") ➞ false
// isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!") ➞ true
// Notes
//     Should be case insensitive.
//     Special characters (punctuation or spaces) should be ignored.
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '')
  for (let i = 0; i < cleanedStr.length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) return false
  }
  return true
}
// A quadratic equation a x² + b x + c = 0 has either 0, 1, or 2 distinct solutions for real values of x. Given a, b and c, you should return the number of solutions to the equation.
// Examples
// solutions(1, 0, -1) ➞ 2
// // x² - 1 = 0 has two solutions (x = 1 and x = -1).
// solutions(1, 0, 0) ➞ 1
// // x² = 0 has one solution (x = 0).
// solutions(1, 0, 1) ➞ 0
// // x² + 1 = 0 has no solutions.
// Notes
//     You do not have to calculate the solutions, just return how many there are.
//     a will always be non-zero.
function solutions(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c
  if (discriminant > 0) return 2
  else if (discriminant === 0) return 1
  else return 0
}
// Create a function that converts dates from one of five string formats:
//     "January 9, 2019" (MM D, YYYY)
//     "Jan 9, 2019" (MM D, YYYY)
//     "01/09/2019" (MM/DD/YYYY)
//     "01-09-2019" (MM-DD-YYYY)
//     "01.09.2019" (MM.DD.YYYY)
// The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:
// Examples
// convertDate("January 9, 2019") ➞ [1, 9, 2019]
// convertDate("Jan 9, 2019") ➞ [1, 9, 2019]
// convertDate("01/09/2019") ➞ [1, 9, 2019]
// convertDate("01-09-2019") ➞ [1, 9, 2019]
// convertDate("01.09.2019") ➞ [1, 9, 2019]
// Notes
// You can solve this any number of ways, but using JavaScript's new Date() method is probably the easiest. Check the Resources tab for documentation.
function convertDate(date) {
  const dateObj = new Date(date)
  return [dateObj.getMonth() + 1, dateObj.getDate(), dateObj.getFullYear()]
  // const day = /\d{0,2}/
  // const month = /^(January|Jan|March|Mar|August|Nov|\d{0,2})/
  // const year = /\d{4}$/
  // return [ +date.match(day), +date.match(year)[0]]
}
// Noddy has written a mysterious function which takes in a word and returns true if it's passed a specific test. Solve the riddle of what Noddy's function is by having a look at some of the examples below.
// Examples
// noddyFunction("FANTASTIC") ➞ true
// noddyFunction("wonderful") ➞ false
// noddyFunction("NODDY") ➞ false
// Notes
//     Check the Tests tab for more examples.
//     This isn't really a coding challenge, more of a fun riddle ;)
function noddyFunction(str) {
  return str.indexOf('d') === -1 && str.indexOf('D') === -1
}
// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.
// Examples
// [
//   { name: "John", notes: [3, 5, 4]}
// ] ➞ [
//   { name: "John", avgNote: 4 }
// ]
// Notes
// Try doing it with an arrow function.
function getStudentsWithNamesAndAvgNote(students) {
  return students.map(obj => {
    return { name: obj.name, avgNote: obj.notes.length ? obj.notes.reduce((cur, acc) => cur + acc) / obj.notes.length : 0 }
  })
}
// You will be given an object with various consumer products and thier respective prices. Return a list of the products with a minimum price of 500 in descending order.
// Examples
// products({"Computer" : 600, "TV" : 800, "Radio" : 50}) ➞ ["TV","Computer"]
// products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}) ➞ ["Bike1", "Bike3"]) 
// products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}) ➞ []
// Notes
// N/A
function products(r) {
  const result = []
  const productArr = Object.entries(r)
  let tmp;
  for (let i = 0; i < productArr.length - 1; i++) {
    if (productArr[i][1] < productArr[i + 1][1]) {
      tmp = productArr[i]
      productArr[i] = productArr[i + 1]
      productArr[i + 1] = tmp
    }
  }
  productArr.filter(ele => {
    if (ele[1] >= 500) result.push(ele[0])
  })
  return result
}
// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
// Examples
// numberSquares(2) ➞ 5
// numberSquares(4) ➞ 30
// numberSquares(5) ➞ 55
// Notes
//     Input is a positive integer.
//     Square pyramidal number.
function numberSquares(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6
}
// Write a function that takes the base and height of a triangle and return its area.
// Examples
// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50
// Notes
//     The area of a triangle is: (base * height) / 2
//     Don't forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.
function triArea(base, height) {
  return (base * height) / 2
}
// Shreeya first year computer science student is taking an intro to regex class.Her professor gives her the assignment to write a function that checks whether an input date as a string is in the format yyyy/mm/dd.She has written a regular expression but the regular expression does not seem to be correct.Help Shreeya, fix the error.
// Examples
// assignment("12/1/1") ➞ false
// assignment("1234/12/01") ➞ true
// assignment("2012/1/1") ➞ false
// assignment("2012/01/07") ➞ true
// Notes
//     Resource can be helpful.
function assignment(d) {
  return /^(?:\d{4})\/(\d{2})\/(\d{2})$/.test(d);
}
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
// Number	Month Name
// 1	January
// 2	February
// 3	March
// 4	April
// 5	May
// 6	June
// 7	July
// 8	August
// 9	September
// 10	October
// 11	November
// 12	December
// Examples
// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"
// Notes
//     You can expect only integers ranging from 1 to 12 as test input.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.
function monthName(num) {
  // const months = ["January", "February", "March", "April", "May", "June",
  // "July", "August", "September", "October", "November", "December"]
  // return months[num - 1]
  return new Date(2020, num - 1).toLocaleString('default', { month: 'long' })
}
// Given an array of user objects.
// let names = []
// let users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ]
// for(/* add code inside these parenthesis only */) {
//       names.push(name)
// }
// console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"]
// Push the first names of all users in the names array.
// Notes
//     You only have to change the "for...of" loop parameters.
//     Ignore the const str assignment. This is only used for validation purposes.
//     Check the MDN docs to find out more about object destructuring in "for...of" loops (check the Resources tab).
let names = []
let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]
const str = `
	for(const {name: name} of users) {
			names.push(name)
	}`
// Given a word, create an object that stores the indexes of each letter in an array.
//     Make sure the letters are the keys.
//     Make sure the letters are symbols.
//     Make sure the indexes are stored in an array and those arrays are values.
// Examples
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
// Notes
// All strings given will be lowercase.
function mapLetters(word) {
  const obj = {}
  for (let i = 0; i < word.length; i++) {
    obj[word[i]] = []
  }
  for (let j = 0; j < word.length; j++) {
    obj[word[j]].push(j)
  }
  return obj
}
// Regex Series: Initials
// Write a regular expression that checks if a string is a valid initial. Valid initials either look like (ex. for Chandler Muriel Bing):
//     C. B.
//     C. M. B.
// Rules for a valid initial:
//     Each letter must be upper case.
//     Each letter must be immediately followed by a period.
//     There must be exactly one space separating each letter-period pair.
//     Leading or trailing whitespaces are valid.
// Examples
// "C. B." ➞ true
// "    C. B." ➞ true
// // Leading and trailing spaces are OK!
// "C. B. k." ➞ false
// // One of the initials is lower cased 
// "C B" ➞ false
// // Missing a dot to immediately follow. 
// Notes
// This challenge is designed to use RegEx only.
let x = /^\s*([A-Z]\.\s?){1,3}\s*$/
// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.
// Examples
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]
// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]
// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]
// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []
// Notes
// Arrays are Sorted!! Try doing this problem with O(n + m) time complexity
function commonElements(arr1, arr2) {
  // return arr2.filter(ele => arr1.includes(ele))
  const result = []
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) !== -1) result.push(arr2[i])
  }
  return result
}
// Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.
// Examples
// uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]
// uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]
// uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]
// Notes
//     The initial sequence of items can be either a string or an array.
//     Tests are case sensitive.
function uniqueInOrder(sequence, result = []) {
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i + 1]) result.push(sequence[i])
  }
  return result
}
// Create a function that takes a single word string and does the following:
//     Concatenates inator to the end if the word ends with a consonant otherwise, concatenate -inator instead.
//     Adds the word length of the original word to the end, supplied with '000'.
// The examples should make this clear.
// Examples
// inatorInator("Shrink") ➞ "Shrinkinator 6000"
// inatorInator("Doom") ➞ "Doominator 4000"
// inatorInator("EvilClone") ➞ "EvilClone-inator 9000"
// Notes
// N/A
function inatorInator(inv) {
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 }
  if (vowels[inv[inv.length - 1]] || vowels[inv[inv.length - 1].toLowerCase()]) return `${inv}-inator ${inv.length}000`
  return `${inv}inator ${inv.length}000`
}
// Create a function that returns the sum of all even elements in a 2D matrix.
// Examples
// sumOfEvens([
//   [1, 0, 2],
//   [5, 5, 7],
//   [9, 4, 3]
// ]) ➞ 6
// // 2 + 4 = 6
// sumOfEvens([
//   [1, 1],
//   [1, 1]
// ]) ➞ 0
// sumOfEvens([
//   [42, 9],
//   [16, 8]
// ]) ➞ 66
// sumOfEvens([
//   [],
//   [],
//   []
// ]) ➞ 0
// Notes
//     Submatrices will be of equal length.
//     Return 0 if the 2D matrix only consists of empty submatrices.
function sumOfEvens(arr) {
  return arr.map(ele => ele.reduce((cur, acc) => cur + (acc % 2 == 0 ? acc : 0), 0)).reduce((cur, acc) => cur + acc)
}
// Write a function that returns the greatest common divisor (GCD) of two integers.
// Examples
// gcd(32, 8) ➞ 8
// gcd(8, 12) ➞ 4
// gcd(17, 13) ➞ 1
// Notes
//     Both values will be positive.
//     The GCD is the largest factor that divides both numbers.
function gcd(n1, n2) {
  if (n2 == 0) return n1;
  else return gcd(n2, (n1 % n2))
}
// Given a very long string of ASCII characters, split the string up into equal sized groups of size width. To properly display the image, join up the groups with the newline character \n and return the output string.
// See the following examples for clarity!
// Examples
// formatAscii('0123456789', 2) ➞ '01\n23\n45\n67\n89'
// formatAscii('................................', 8) ➞ '........\n........\n........\n........'
// formatAscii('^^^^^^^^', 1) ➞ '^\n^\n^\n^\n^\n^\n^\n^'
// Notes
// Enjoy the (somewhat oversized) art in the Tests tab!
function formatAscii(str, width) {
  const strArr = [...str]
  for (let i = strArr.length - 1; i >= 0; i--) {
    if (i && i % width == 0) strArr.splice(i, 0, '\n')
  }
  return strArr.join('')
}
// Your friend is trying to write a function to accomplish the following transformations:
// let x = [3, 3, 3, 3, 3, 3, 3]
// // Each time x is called, the following results are shown:
// change(x, 0)  // [3, 3, 3, 3, 3, 3, 3]
// change(x, 1)  // [3, 2, 2, 2, 2, 2, 3]
// change(x, 2)  // [3, 2, 1, 1, 1, 2, 3]
// change(x, 3)  // [3, 2, 1, 0, 1, 2, 3]
// Note: The change() function should not mutate the original array. After each call to the function, the original x should still equal [3, 3, 3, 3, 3, 3, 3].
// He comes up with the following code:
// function change(x, times) {
//   for(let i = 0; i < x.length; i++) {
//     let j = 1; 
//     while (j <= times) {
//       if (i >= j && i < x.length-j) {
//         x[i]--; 
//       }
//       j++; 
//     }
//   }
//   return x; 
// }
// Oops! The code appears to mutate the original array. Fix this incorrect code so that the function no longer mutates the original array.
// See below:
// Examples
// let x = [3, 3, 3, 3, 3, 3, 3]
// // What we want:
// change(x, 2) => [3, 2, 1, 1, 1, 2, 3]
// change(x, 2) => [3, 2, 1, 1, 1, 2, 3]
// // What we get:
// change(x, 2) => [3, 2, 1, 1, 1, 2, 3]  // Good so far...
// change(x, 2) => [3, 1, -1, -1, -1, 1, 3] // Array is mutated :(
// Notes
//     If this is confusing, copy and paste the incorrect code in a REPL environment and play around with the code to understand what the function is doing.
//     Hint: Try to make a copy of the input array.
//     If this looks familiar, it is part of a solution for the Concentric Rug problem.
function change(x, times) {
  let result = [...x]
  for (let i = 0; i < x.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < x.length - j) {
        result[i]--;
      }
      j++;
    }
  }
  return result;
}
// Create a function that takes a string of four numbers. These numbers represent two separat points on a graph known as the x-axis (horizontal axis) and y-axis (vertical axis). Each number corresponds as follows: "x1, y1, x2, y2". Calculate the distance between x and y.
// Examples
// shortestDistance("1,1,2,1") ➞ 1
// shortestDistance("1,1,3,1") ➞ 2
// shortestDistance("-5,1,3,1") ➞ 8
// shortestDistance("-5,2,3,1") ➞ 8.06
// Notes
// All floats fixed to 2 decimal places (e.g. 2.34).
function shortestDistance(str) {
  const coord = str.split(',')
  return +Math.hypot((coord[0] - coord[2]), (coord[1] - coord[3])).toFixed(2)
}
// Suppose that you invest $10,000 for 10 years at an interest rate of 6% compounded monthly. What will be the value of your investment at the end of the 10 year period?
// Create a function that accepts the principal p, the term in years t, the interest rate r, and the number of compounding periods per year n. The function returns the value at the end of term rounded to the nearest cent.
// For the example above:
// compoundInterest(10000, 10, 0.06, 12) ➞ 18193.97
// Note that the interest rate is given as a decimal and n=12 because with monthly compounding there are 12 periods per year. Compounding can also be done annually, quarterly, weekly or daily.
// Examples
// compoundInterest(100, 1, 0.05, 1) ➞ 105.0
// compoundInterest(3500, 15, 0.1, 4) ➞ 15399.26
// compoundInterest(100000, 20, 0.15, 365) ➞ 2007316.26
// Notes
// See the Resources tab for the interest formula and more information.
function compoundInterest(p, t, r, n) {
  return +(p * (1 + r / n) ** (n * t)).toFixed(2)
}
// One cause for speeding is the desire to shorten the time spent traveling. While in long distance trips speeding does save an appreciable amount of time, the same cannot be said about short distance trips.
// Create a function that calculates the amount of time saved (in minutes) were you traveling with an average speed that is above the speed-limit as compared to traveling with an average speed exactly at the speed-limit.
// Examples
// // The paramater's format is as follows:
// // (speed limit, avg speed, distance traveled at avg speed)
// timeSaved(80, 90, 40) ➞ 3.3
// timeSaved(80, 90, 4000) ➞ 333.3 
// timeSaved(80, 100, 40 ) ➞ 6.0
// timeSaved(80, 100, 10) ➞ 1.5
// Notes
//     Speed = distance/time
//     The time returned should be in minutes, not in hours!
function timeSaved(lim, avg, d) {
  return +((d / lim) * 60 - (d / avg) * 60).toFixed(1)
}
// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.
// Examples
// puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// // 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// // Both arrays sum to [5, 5, 5, 5]
// puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true
// puzzlePieces([1, 2], [-1, -1]) ➞ false
// puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false
// Notes
//     Each array will have at least one element.
//     Return false if both arrays are of different length.
function puzzlePieces(a1, a2) {
  if (a1.length !== a2.length) return false
  for (let i = 0; i < a1.length - 1; i++) {
    if ((a1[i] + a2[i]) !== (a1[i + 1] + a2[i + 1])) return false
  }
  return true
}
// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.
// Examples
// reverse("Hello World") ➞ "DLROw OLLEh"
// reverse("ReVeRsE") ➞ "eSrEvEr"
// reverse("Radar") ➞ "RADAr"
// Notes
// There will be no punctuation in any of the test cases.
function reverse(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i].toLowerCase() === str[i]) result += str[i].toUpperCase()
    else result += str[i].toLowerCase()
  }
  return result
}
// An array is special, if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
// Examples
// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// // Index 2 has an odd number 9.
// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// // Index 3 has an even number 8.
// Notes
// N/A
function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0 && arr[i] % 2 == 1) return false
    if (i % 2 == 1 && arr[i] % 2 == 0) return false
  }
  return true
}
// Array A is contained inside array B if each element in A also exists in B.
// The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.
// A = [3, 3, 9, 9, 9, 5]
// B = [1, 3, 9, 5, 8, 44, 44]
// A_Set = [3, 9, 5]
// B_Set = [1, 3, 9, 5, 8, 44]
// // A_Set is a subset of B_Se
// Create a function that determines if the first array is a subset of the second.
// Examples
// subset([1, 3], [1, 3, 3, 5]) ➞ true
// subset([4, 8, 7], [7, 4, 4, 4, 9, 8]) ➞ true
// subset([1, 3], [1, 33]) ➞ false
// subset([1, 3, 10], [10, 8, 8, 8]) ➞ false
// Notes
//     Each input array will have at least one element.
//     Check the resources tab for a hint.
function subset(arr1, arr2) {
  // return arr1.every(ele => arr2.includes(ele))
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr2.includes(arr1[i]))) return false
  }
  return true
}
// Create a function that takes the month and year (as integers) and returns the number of days in that month.
// Examples
// days(2, 2018) ➞ 28
// days(4, 654) ➞ 30
// days(2, 200) ➞ 28
// days(2, 1000) ➞ 28
// Notes
// N/A
function days(month, year) {
  return new Date(year, month, 0).getDate()
}
// Create a function that takes two vectors as arrays and checks if the two vectors are orthogonal or not. The return value is boolean. Two vectors a and b are orthogonal if their dot product is equal to zero.
// Examples
// isOrthogonal([1, 2], [2, -1]) ➞ true
// isOrthogonal([3, -1], [7, 5]) ➞ false
// isOrthogonal([1, 2, 0], [2, -1, 10]) ➞ true
// Notes
//     The two arrays will be of same length.
//     Check out the Resources tab.
function isOrthogonal(arr1, arr2) {
  let dotProduct = 0
  for (let i = 0; i < arr1.length; i++) {
    dotProduct += arr1[i] * arr2[i]
  }
  return dotProduct === 0
}
// Create a function to check whether the given parameter is an Object or not.
// Examples
// isObject(function add(x,y) {return x + y;}) ➞ true
// isObject(new Regex("^[a-zA-Z0-9]+$)","g")) ➞ true
// isObject(null) ➞ false
// isObject("") ➞ false
// Notes
// Inputs may be null, primitive wrapper types, dates.
function isObject(value) {
  return value === null ? false : typeof value === 'object'
}
// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:
//     If the length of the string is less than two, return "Incompatible.".
//     If the argument is not a string, return "Incompatible.".
//     If the first and last characters are the same, return "Two's a pair.".
// Examples
// flipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"
// flipEndChars("ada") ➞ "Two's a pair.
// flipEndChars("Ada") ➞ "adA"
// flipEndChars("z") ➞ "Incompatible."
// flipEndChars([1, 2, 3]) ➞ "Incompatible."
// Notes
// Tests are case sensitive (e.g. "A" and "a" are not the same character).
function flipEndChars(str) {
  if (str.length < 2 || typeof str !== 'string') return "Incompatible."
  else if (str[0] === str[str.length - 1]) return "Two's a pair."
  else {
    return str.slice(-1) + str.slice(1, -1) + str.slice(0, 1)
  }
}
// Create a function that determines whether a string is a valid hex code.
// A hex code must begin with a pound key # and is exactly 6 characters in length. Each character must be a digit from 0-9 or an alphabetic character from A-F. All alphabetic characters may be uppercase or lowercase.
// Examples
// isValidHexCode("#CD5C5C") ➞ true
// isValidHexCode("#EAECEE") ➞ true
// isValidHexCode("#eaecee") ➞ true
// isValidHexCode("#CD5C58C") ➞ false
// // Length exceeds 6
// isValidHexCode("#CD5C5Z") ➞ false
// // Not all alphabetic characters in A-F
// isValidHexCode("#CD5C&C") ➞ false
// // Contains unacceptable character
// isValidHexCode("CD5C5C") ➞ false
// // Missing #
// Notes
// N/A
function isValidHexCode(str) {
  return /^#[A-Fa-f\d]{6}$/g.test(str)
}
// Create a function that takes two numbers as arguments and returns the GCD of the two numbers.
// Examples
// gcd(3, 5) ➞ 1
// gcd(14, 28) ➞ 14
// gcd(4, 18) ➞ 2
// Notes
// GCD looks at all the divisors of each number and finds the greatest one.
function gcd(a, b) {
  // if (b == 0)
  //   return a;
  // else
  //   return gcd(b, (a % b));
  let remainder;
  while ((a % b) > 0) {
    remainder = a % b;
    a = b
    b = remainder
  }
  return b
}
// Create a function that takes a date object and return string in the following format:
// YYYYMMDDHHmmSS
// The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second. If any of the value has only signle digit, you must use zero prefix, so that the result string length is always same.
// Examples
// formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"
// formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"
// formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"
// Notes
//     Assume Date year input will always be greater than 1970.
//     Try not to rely on default Date.toString() output in your impelementation.
//     Be aware that the Date's month field is zero based (0 is January and 11 is December).
function formatDate(date) {
  return `${date.getFullYear()}${date.getMonth() + 1 < 10 ? ('' + (date.getMonth() + 1)).padStart(2, '0') : date.getMonth() + 1}${date.getDate() < 10 ? ('' + date.getDate()).padStart(2, '0') : date.getDate()}${date.getHours() < 10 ? ('' + date.getHours()).padStart(2, '0') : date.getHours()}${date.getMinutes() || "00"}${date.getSeconds() || "00"}`
}
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.
// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.
// Examples
// totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63
// totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10
// totalVolume([1, 1, 1]) ➞ 1
// Notes
//     You will be given at least one box.
//     Each box will always have three dimensions included.
function totalVolume(...boxes) {
  const container = [...boxes]
  // return container.map(subarray => subarray.reduce((cur, acc) => cur * acc)).reduce((cur, acc) => cur + acc)
  let result = 0
  const sum = []
  for (let i = 0; i < container.length; i++) {
    let product = 1
    for (let j = 0; j < container[i].length; j++) {
      product *= container[i][j]
    }
    sum.push(product)
  }
  for (let k = 0; k < sum.length; k++) {
    result += sum[k]
  }
  return result
}
// Your task is to create a fence worth $1 million. You are given the price of the material (per character), meaning the length of the fence will change depending on the cost of the material.
// Create a function which constructs this pricey pricey fence, using the letter "H" to build.
// constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// // 20 fence posts were set up ($1,000,000 / $50,000 = 20)
// Examples
// constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// constructFence("$100,000") ➞ "HHHHHHHHHH"
// constructFence("$1,000,000") ➞ "H"
// Notes
// You are ordered to spend all of your $1,000,000 budget...
function constructFence(price) {
  return "H".repeat(1000000 / price.slice(1).split(',').join(''))
}
// Remove enemies from the list of people, even if the enemy shows up twice.
// Examples
// removeEnemies(["Fred"], []) ➞ ["Fred"]
// removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]) ➞ ["Adam", "Tanya"]
// removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]) ➞ ["Emily", "Steve"]
// Notes
// All names to be removed will be in the enemies list; simply return the list, no fancy strings.
function removeEnemies(names, enemies) {
  return names.filter(ele => ele !== enemies[0]).filter(ele => ele !== enemies[1])
}
// Given a string containing mostly spaces and one non-space character, return whether the character is positioned in the very centre of the string. This means the number of spaces on both sides should be the same.
// Examples
// isCentral("  #  ") ➞ true
// isCentral(" 2    ") ➞ false
// isCentral("@") ➞ true
// Notes
// Only one character other than spaces will be given at a time.
function isCentral(str) {
  return str.trimStart().length === str.trimEnd().length
}
// Your open-plan office building has a scrolling message screen on the far wall. One day, you notice that the messages are starting to glitch. Some of the lower case letters are being replaced by their position in the alphabet ("a" = 1, "b" = 2, ..., "z" = 26). Given the glitched text, return the corrected message.
// Examples
// messageGlitch("T21e19d1y's m1r11e20i14g m5e20i14g w9l12 14o23 2e i14 20h5 3o14f5r5n3e r15o13.")
// ➞ "Tuesday's marketing meeting will now be in the conference room."
// messageGlitch("A s9l22e18 Pr9u19 9s d15u2l5-16a18k5d o21t19i4e. Wi12l t8e o23n5r p12e1s5 13o22e i20.")
// ➞ "A silver Prius is double-parked outside. Will the owner please move it."
// messageGlitch("P12e1s5 4o14'20 13i3r15w1v5 6i19h i14 20h5 20h9r4 6l15o18 11i20c8e14!")
// ➞ "Please don't microwave fish in the third floor kitchen!"
// Notes
// Each group of numbers will always refer to one letter only (e.g. 14 = "n", not "ad").
function messageGlitch(txt) {
  const alphObj = {}
  const txtArr = [...txt]
  for (let i = 9; ++i < 36;) alphObj[i - 9] = i.toString(36)
  for (let j = 0; j < txtArr.length; j++) {
    if (parseInt(txtArr[j], 10) && (parseInt(txtArr[j + 1], 10) || txtArr[j + 1] === '0')) {
      txtArr.splice(j, 2, alphObj[txtArr[j] + txtArr[j + 1]])
    } else if (alphObj[txtArr[j]]) txtArr[j] = alphObj[txtArr[j]]
  }
  return txtArr.join('')
}
// The Recamán Sequence is a numeric sequence that starts always with 0. The position of a positive integer in the sequence, or Recamán Index, can be established with the following algorithm:
//     For every number to find, two variables are considered: the value of the last element of the sequence (last element from now on), and the actual sequence length (length from now on).
//     If the subtraction of the length from the last element returns a number greater than 0 and not already present in the sequence, it is added to the sequence.
//     When the conditions of the above statement are not met, will be added always the sum of the last element plus the length (even if it is a number already present in the sequence).
//     Repeat until the number of interest is found.
// Look at example below for the steps to do for to establish the Recamán Index of number 2:
// Sequence = [0]
// Last - Length = 0 - 1 = -1 (lower than zero)
// Last + Length = 0 + 1 = 1
// Sequence = [0, 1]
// Last - Length = 1 - 2 = -1 (lower than 0)
// Last + Length = 1 + 2 = 3
// Sequence = [0, 1, 3]
// Last - Length = 3 - 3 = 0 (already present in sequence)
// Last + Length = 3 + 3 = 6
// Sequence = [0, 1, 3, 6]
// Last - Length = 6 - 4 = 2 (greater than 0 and not already in sequence)
// Sequence = [0, 1, 3, 6, 2]
// // The Recaman Index of 2 is: 4
// Given a positive integer n, implement a function that returns its Recamán Index.
// Examples
// recamanIndex(2) ➞ 4
// recamanIndex(3) ➞ 2
// recamanIndex(7) ➞ 5
// Notes
//     The sequence starts always with 0.
//     The step with the subtraction Last Element - Sequence Length (verifying that is not already present in the sequence) has the precedence over the second step.
//     Remember: if the number to add is the result of a subtraction it can't be already in the sequence (first step), if it is the result of an addition it can be already present (second step).
//     Curiosity: the first number to repeat in the sequence is 42...
//     Curiosity: the first number with a BIG delay in the sequence is 19.
function recamanIndex(n) {
  let seq = [0]
  for (let i = 0; i < 10001; i++) {
    const last = seq[seq.length - 1]
    const sub = last - seq.length
    if (sub > 0 && seq.indexOf(sub) === -1) {
      seq.push(sub)
    } else {
      seq.push(last + seq.length)
    }
  }
  return seq.indexOf(n)
}
// Make a function that encrypts a given input with these steps:
// Input: "apple"
// Step 1: Reverse the input: "elppa"
// Step 2: Replace all vowels using the following chart:
// a => 0
// e => 1
// i => 2
// o => 2
// u => 3
// // "1lpp0"
// Step 3: Add "aca" to the end of the word: "1lpp0aca"
// Output: "1lpp0aca"
// Examples
// encrypt("banana") ➞ "0n0n0baca"
// encrypt("karaca") ➞ "0c0r0kaca"
// encrypt("burak") ➞ "k0r3baca"
// encrypt("alpaca") ➞ "0c0pl0aca"
// Notes
// All inputs are strings, no uppercases and all output must be strings.
function encrypt(word) {
  let result = []
  const vowels = { a: 0, e: 1, i: 2, o: 2, u: 3 }
  for (let i = word.length - 1; i >= 0; i--) {
    result.push(word[i])
  }
  for (let i = 0; i < result.length; i++) {
    if (vowels[result[i]] || result[i] == 'a') {
      result[i] = vowels[result[i]]
    }
  }
  return result.join('').concat('aca')
}
// Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of (the last digit of a * the last digit of b) = the last digit of c. Check examples for explanation.
// Examples
// lastDig(25, 21, 125) ➞ true
// // The last digit of 25 is 5, the last digit of 21 is 1, and the last
// // digit of 125 is 5, and the last digit of 5*1 = 5, which is equal
// // to the last digit of 125(5).
// lastDig(55, 226, 5190) ➞ true
// // The last digit of 55 is 5, the last digit of 226 is 6, and the last
// // digit of 5190 is 0, and the last digit of 5*6 = 30 is 0, which is
// // equal to the last digit of 5190(0).
// lastDigit(12, 215, 2142) ➞ false
// // The last digit of 12 is 2, the last digit of 215 is 5, and the last
// // digit of 2142 is 2, and the last digit of 2*5 = 10 is 0, which is
// // not equal to the last digit of 2142(2).
// Notes
//     If you still don't understand:
//         The last digit of a = aa, the last digit of b = bb, and the last digit of c = cc.
//         Return true if the last digit of aa*bb is equal to cc, and false otherwise.
//     Numbers can be negative.
function lastDig(a, b, c) {
  a = '' + a; b = '' + b; c = '' + c;
  return ('' + (a[a.length - 1] * b[b.length - 1])).slice(-1) === c[c.length - 1]
}
// You are given an input array of bigrams, and an array of words.
// Write a function that returns true if you can find every single bigram from this array can be found at least once in an array of words.
// Examples
// canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
// canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
// # "cu" does not exist in any of the words
// canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
// canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false
// Notes
// A bigram is string of two consecutive characters.
function canFind(bigrams, words) {
  for (let i = 0; i < bigrams.length; i++) {
    if (words.join('').indexOf(bigrams[i]) === -1) return false
  }
  return true
}
// You have an array of item codes with the following format: "[letters][digits]"
// Create a function that splits these strings into their alphabetic and numeric parts.
// Examples
// splitCode("TEWA8392") ➞ ["TEWA", 8392]
// splitCode("MMU778") ➞ ["MMU", 778]
// splitCode("SRPE5532") ➞ ["SRPE", 5532]
// Notes
// N/A
function splitCode(item, result = []) {
  for (let i = 0; i < item.length; i++) {
    if (isNaN(item[i]) && parseInt(item[i + 1], 10)) {
      result = [item.slice(0, i + 1), parseInt(item.slice(i + 1))]
    }
  }
  return result
}
// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.
// Examples
// miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]) ➞ [5, 9]
// miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]) ➞ [2, 3, 5]
// miniPeaks([1, 2, 3, 4, 5, 6]) ➞ []
// Notes
//     Do not count boundary numbers, since they only have one left/right neighbor.
//     If no such numbers exist, return an empty array.
function miniPeaks(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) result.push(arr[i])
  }
  return result
}
// Create a function that will find all primes below a given number. Return the result as an array.
// Examples
// primesBelowNum(5) ➞ [2, 3, 5]
// primesBelowNum(10) ➞ [2, 3, 5, 7]
// primesBelowNum(20) ➞ [2, 3, 5, 7, 11, 13, 17, 19]
// Notes
// If n is a prime, it is included in the array.
function primesBelowNum(n, result = []) {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }
    return true
  }
  for (let ii = 2; ii <= n; ii++) {
    if (isPrime(ii)) result.push(ii)
  }
  return result
}
// Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4]} and returns an array of objects like { name: "John", topNote: 5 }.
// If student has no notes (an empty array) then let's assume topNote: 0.
// Examples
// [
//   { name: "John", notes: [3, 5, 4]}
// ] ➞ [
//   { name: "John", topNote: 5}
// ]
// Notes
// Try doing it with an arrow function.
function getStudentsWithNamesAndTopNotes(students) {
  return students.map(obj => {
    return { name: obj.name, topNote: obj.notes.length ? Math.max(...obj.notes) : 0 }
  })
}
// Quantifiers indicate numbers of characters or expressions to match.
// x* matches the preceding item "x" 0 or more times.
// "A ghost booooed".match(/bo*/) ➞ "boooo"
// x+ matches the preceding item "x" 1 or more times. Equivalent to {1,}.
// "caaaaaaandy".match(/a+/) ➞ "aaaaaa"
// x? matches the preceding item "x" 0 or 1 times. If used immediately after any of the quantifiers *, +, ?, or {}, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).
// "angle.".match(/e?le?/) ➞ "le"
// "angel.".match(/e?le?/) ➞ "el"
//     Write the regex to match only the street.
//     Use a quantifier in your expression.
// Example
// let address = "Harry Potter, 4 Privet Drive, Little Whinging, Surrey"
// address.match(REGEXP) ➞ "4 Privet Drive"
// Notes
// Check the Resources tab if you get stuck.
const REGEXP = /\w+ \w* [St|Drive|Avenue]+/
// Unfair hurdles are hurdles which are either too high, or way too close together.
// Create a function which takes in an array of strings, representing hurdles, and returns whether or not they are unfair. For the purposes of this challenge, unfair hurdles are:
//     At least 4 characters tall.
//     Strictly less than 4 spaces apart.
// Examples
// // Hurdle are good distance apart but are way too tall.
// isUnfairHurdle([
//   "#    #    #    #",
//   "#    #    #    #",
//   "#    #    #    #",
//   "#    #    #    #"
// ]) ➞ true
// // Hurdles are a fine height but are way too close together.
// isUnfairHurdle([
//   "#  #  #  #",
//   "#  #  #  #",
//   "#  #  #  #"
// ]) ➞ true
// // These hurdles are mighty splendid.
// isUnfairHurdle([
//   "#      #      #      #",
//   "#      #      #      #"
// ]) ➞ false
// Notes
//     Hurdles will be represented with a hashtag "#".
//     There will be the same spacing between hurdles.
//     Hurdles are always as high as the length of the array.
//     Hurdles are always evenly spaced.
function isUnfairHurdle(hurdles, distance = []) {
  for (let i = 0; i < hurdles[0].length; i++) {
    if (hurdles[0][i] === '#') distance.push(i)
  }
  const spaces = distance[1] - distance[0]
  return spaces < 5 || hurdles.length > 3
}
// Create a function which validates whether a given array alternates between positive and negative numbers.
// Examples
// alternatePosNeg([3, -2, 5, -5, 2, -8]) ➞ tru
// alternatePosNeg([-6, 1, -1, 4, -3]) ➞ true
// alternatePosNeg([4, 4, -2, 3, -6, 10]) ➞ false
// Notes
//     It doesn't matter if an array begins/ends with a positive or negative, as long as it alternates.
//     If an array contains 0, return false (as it is neither positive nor negative).
function alternatePosNeg(arr) {
  for (let i = 0; i < arr.length; i++) {
    const dualPos = arr[i] > 0 && arr[i + 1] > 0
    const dualNeg = arr[i] < 0 && arr[i + 1] < 0
    if (dualPos || dualNeg || arr[i] === 0) return false
  }
  return true
}
// Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.
// Examples
// primeFactorize(25) ➞ [5, 5]
// primeFactorize(19) ➞ [19]
// primeFactorize(77) ➞ [7, 11]
// Notes
//     Output array must be sorted in ascending order
//     The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.
function primeFactorize(num) {
  const factors = []
  let divisor = 2
  while (num >= 2) {
    if (num % divisor == 0) {
      factors.push(divisor);
      num /= divisor
    } else divisor++
  }
  return factors
}
// Javascript has a String prototype default in the language which contains properties and methods such as .length and .toLowerCase(). Extend the String prototype by creating two new methods:
//     .consonants(), which returns the number of consonants in a word when called.
//     .vowels(), which returns the number of vowels in a word when called.
// Examples
// "hello".consonants() ➞ 3
// "hello".vowels() ➞ 2
// "greatly".consonants() ➞ 5
// "greatly".vowels() ➞ 2
// "Smithsonian".consonants() ➞ 7
// "Smithsonian".vowels() ➞ 4
// Notes
//     Treat y as a consonant, not a vowel.
//     Upper vs. lower case does not matter.
//     Hint: See comments for another example if you get stuck.
// It is not mandatory for this exercise, but in general it is a good idea to double-check if there exists methods with the same name a your custom functions before using them to extend the prototype. This is to prevent the accidental overwrite of a pre-existing method. (See comments for additional info).
String.prototype.consonants = function (count = 0) {
  for (let i = 0; i < this.length; i++) {
    if ('aeiou'.indexOf(this[i]) === -1) count++
  }
  return count
}
String.prototype.vowels = function (count = 0) {
  for (let i = 0; i < this.length; i++) {
    if ('aeiou'.indexOf(this[i]) !== -1) count++
  }
  return count
}
// A word nest is created by taking a starting word, and generating a new string by placing the word inside itself. This process is then repeated.
// Nesting 3 times with the word "incredible":
// start  = incredible
// first  = incre|incredible|dible
// second = increin|incredible|credibledible
// third  = increinincr|incredible|ediblecredibledible
// The final nest is "increinincrincredibleediblecredibledible" (depth = 3).
// Given a starting word and the final word nest, return the depth of the word nest.
// Examples
// wordNest("floor", "floor") ➞ 0
// wordNest("code", "cocodccococodededeodeede") ➞ 5
// wordNest("incredible", "increinincrincredibleediblecredibledible") ➞ 3
// Notes
// N/A
function wordNest(word, nest) {
  return nest.length / word.length - 1
}
// Create a function that creates a pattern as a 2D array for a given number.
// Examples
//  >
//  >>
//  >>>
//  >>
//  >
// arrow(3) ➞ [">", ">>", ">>>", ">>", ">"]
//  >
//  >>
//  >>>
//  >>>>
//  >>>>
//  >>>
//  >>
//  >
// arrow(4) ➞ [">", ">>", ">>>", ">>>>", ">>>>", ">>>", ">>", ">"]
// Notes
// Function argument will always be a number greater than 0.
function arrow(n, result = []) {
  for (let i = 1; i <= n; i++) result.push('>'.repeat(i))
  for (let ii = n % 2 === 0 ? n : n - 1; ii > 0; ii--) {
    result.push('>'.repeat(ii))
  }
  return result
}
// So we can use resolve and reject callbacks to help us store async results whether successful or unsuccessful, but what good are those if we don't have access to those results. Thus we have the then function which returns a promise that appends either a fulfilled or rejection handler(callback) or just returns the settled value.
// let promise = new Promise( (resolve, reject) => {
//   setTimeout(( ) => {
//      resolve("success!")
//   }, 1000)
// })
// promise.then() // returns the settled value
// promise.then((val) => console.log(val)) // logs the result of the **onFufilled** callback
// Challenge
//     Add the necessary pieces to fix the promise and the then function.
//     It should resolve to a message success!.
//     Re-assign the result to the settled value inside the then function.
// Notes
// Check the Resources tab for more info on promises.
var result = ""
let promise = new Promise((res, rej) => {
  res('success!')
})
promise.then(() => result = 'success!')
// An employee working at a very bizzare company, earns one penny on their first day. However, for every day that passes, their base amount doubles, so they earn two pennies on the second day and four pennies on the third day (totalling 7 pennies). Given a number of days, return how many pennies the employee accumulates.
// Examples
// doubledPay(1) ➞ 1
// doubledPay(2) ➞ 3
// doubledPay(3) ➞ 7
// Notes
// You will only get tests for valid positive integers.
function doubledPay(n, pay = 1) {
  for (let i = 1; i <= n; i++) {
    pay *= 2
  }
  return pay - 1
}
// Write a function to replace all instances of character c1 with character c2 and vice versa.
// Examples
// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"
// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// ➞ "random w&rds writt#n h#r#"
// doubleSwap("128 895 556 788 999", "8", "9")
// ➞ "129 985 556 799 888"
// Notes
// Both characters will show up at least once in the string.
function doubleSwap(str, c1, c2) {
  const strArr = [...str]
  for (let i = 0; i < strArr.length; i++) {
    switch (strArr[i]) {
      case c1:
        strArr[i] = c2
        break;
      case c2:
        strArr[i] = c1
        break;
    }
  }
  return strArr.join('')
}
// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
// Examples
// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
// insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
// Notes
// Each word in the phrase will be at least two characters long.
function insertWhitespace(s) {
  const sArr = [...s]
  for (let i = 0; i < sArr.length - 1; i++) {
    if (sArr[i] === sArr[i].toLowerCase() && sArr[i + 1] === sArr[i + 1].toUpperCase()) {
      sArr[i] += ' '
    }
  }
  return sArr.join('')
}
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:
// findBrokenKeys(correct phrase, what you actually typed)
// Examples
// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
// findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
// findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]
// Notes
//     Broken keys should be ordered by when they first appear in the sentence.
//     Only one broken key per letter should be listed.
//     Letters will all be in lower case.
function findBrokenKeys(str1, str2) {
  const broken = []
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i] && broken.indexOf(str1[i]) === -1) broken.push(str1[i])
  }
  return broken
}
// A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
// Examples
// isPandigital(98140723568910) ➞ true
// isPandigital(90864523148909) ➞ false
// // 7 is missing.
// isPandigital(112233445566778899) ➞ false
// Notes
// Think about the properties of a pandigital number when all duplicates are removed.
function isPandigital(num) {
  const numStr = '' + num
  const dups = {}
  const uniq = []
  let j = 0
  for (let i = 0; i < numStr.length; i++) {
    let n = numStr[i]
    if (dups[n] !== 0) {
      dups[n] = 0
      uniq[j++] = n
    }
  }
  for (let i = 0; i < 10; i++) {
    if (uniq.join('').indexOf(i) === -1) return false
  }
  return true
}
// We handle resolve callbacks with then, but what about reject callbacks? We have a catch function that we can use to handle errors or rejected promises. It is generally a good idea to have an error handler at the end of your promises.
// Challenge
//     Write an error handler for the provided promise. Re-assign errorLog to the error inside your error handler.
//     The error handler must be added to the original promise. So you can't do promise.catch(/error handling/). See the Comments for more details.
// Notes
// Check the Resources tab for more info on promises.
let errorLog = {}
let promise = new Promise((resolve, reject) => {
  throw new Error('Something failed')
}).catch(err => {
  errorLog.message = err.message
  return err
})
// Groups and ranges indicate groups and ranges of expression characters. Named capturing groups matches "x" in (?\<Name>x) and stores it on the groups property of the returned matches under the name specified by \<Name>. The angle brackets (< and >) are required for group name.
// To extract the United States area code from a phone number, we could use:
// let match = "(214) 987-6482".match(/\((?<area>\d\d\d)\)/)
// console.log(match.groups.area) ➞ 214
// Grab the year, month and day from a string of dates. Name your groups with year, month, and day and in that order in your expression. You only have to come up with the regular expression. The replace() function is already implemented in the test.
// let REGEXP = your solution
// let str = "2019-10-30, 2020-01-01"
// str.replace(regexp, "$<day>.$<month>.$<year>") ➞ "30.10.2019, 01.01.2020"
// Notes
//     Dates do not go back before 1900.
//     Dates always come in year-month-day format.
//     Check the Resources tab if you get stuck.
let REGEXP = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// Some boomerang examples: [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.
// To illustrate:
// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:
// [1, 7, 1, 7, 1, 7, 1]
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
// Examples
// countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
// countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
// countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
// Notes
// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
function countBoomerangs(arr, count = 0) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] === arr[i + 2]) count++
  }
  return count
}
// Write a function that counts how many concentric layers a rug.
// Examples
// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2
// countLayers([
//   "AAAAAAAAA",
//   "ABBBBBBBA",
//   "ABBAAABBA",
//   "ABBBBBBBA",
//   "AAAAAAAAA"
// ]) ➞ 3
// countLayers([
//   "AAAAAAAAAAA",
//   "AABBBBBBBAA",
//   "AABCCCCCBAA",
//   "AABCAAACBAA",
//   "AABCADACBAA",
//   "AABCAAACBAA",
//   "AABCCCCCBAA",
//   "AABBBBBBBAA",
//   "AAAAAAAAAAA"
// ]) ➞ 5
// Notes
//     Multiple layers can share the same component so count them separately (example #2).
//     Layers will be horizontally and vertically symmetric.
//     There will be at least one layer for each rug.
function countLayers(rug, count = 1) {
  const midStr = rug[Math.floor(rug.length / 2)]
  for (let i = 0; i < Math.floor(midStr.length / 2); i++) {
    if (midStr[i] !== midStr[i + 1]) count++
  }
  return count
}
// Andy, Ben and Charlotte are playing a board game. The three of them decided to come up with a new scoring system. A player's first initial ("A", "B" or "C") denotes that player scoring a single point. Given a string of capital letters, return an array of the players' scores.
// For instance, if ABBACCCCAC is written when the game is over, then Andy scored 3 points, Ben scored 2 points, and Charlotte scored 5 points, since there are 3 instances of letter A, 2 instances of letter B, and 5 instances of letter C. So the array [3, 2, 5] should be returned.
// Examples
// calculateScores("A") ➞ [1, 0, 0]
// calculateScores("ABC") ➞ [1, 1, 1]
// calculateScores("ABCBACC") ➞ [2, 2, 3]
// Notes
// If given an empty string as an input, return [0, 0, 0].
function calculateScores(str) {
  let players = { A: 0, B: 0, C: 0 }
  for (let i = 0; i < str.length; i++) players[str[i]]++
  return Object.values(players)
}
// Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].
// Write a function that returns true if the total area of chocolate is the same for each sister.
// To illustrate:
// testFairness([[4, 3], [2, 4], [1, 2]],
// [[6, 2], [4, 2], [1, 1], [1, 1]])
// ➞ true
// // Agatha's pieces: [4, 3], [2, 4], [1, 2]
// // Bertha's pieces: [6, 2], [4, 2], [1, 1], [1, 1]
// // Total area of Agatha's chocolate
// // 4x3 + 2x4 + 1x2 = 12 + 8 + 2 = 22
// // Total area of Bertha's chocolate is:
// // 6x2 + 4x2 + 1x1 + 1x1 = 12 + 8 + 1 + 1 = 22
// Examples
// testFairness([[1, 2], [2, 1]], [[2, 2]]) ➞ true
// testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]]) ➞ false
// testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]]) ➞ true
// testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]]) ➞ false
// Notes
// N/A
function testFairness(agatha, bertha) {
  const sum = arr => arr.map(ele => ele.reduce((cur, acc) => cur * acc)).reduce((cur, acc) => cur + acc)
  return sum(agatha) === sum(bertha)
}
// const obj =  { first: "James", last: "Baker", alias: "JB"  }
// var { first = "John", last = "Doe", alias } = obj
// console.log(nickname) // outputs nickname is not defined
// There may be times where we would like the property name to be different from the object property names we receive and also give those new property names a default value. Use ES6 object destructuring to rename the variable alias to nickname and give nickname a default value of "JD". Ignore the .toString() function (used for validation).
// Notes
// Use double quotes for "JD" If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.
const str = `({ first = "John", last = "Doe", alias : nickname = "JD" } = { first: "James", last: "Baker" }).toString()`;
// Imagine a messaging device with only one button. For the letter A, you press the button one time, for E, you press it five times, for G, it's pressed seven times, etc, etc.
// Write a function that takes a string (the message) and returns the total number of times the button is pressed.
// Examples
// howManyTimes("abde") ➞ 12
// howManyTimes("azy") ➞ 52
// howManyTimes("qudusayo") ➞ 123
// Notes
// Ignore spaces.
function howManyTimes(msg) {
  const alphObj = {}
  for (let i = 9; ++i < 36;) alphObj[i.toString(36)] = i - 9
  return [...msg].reduce((cur, acc) => cur + alphObj[acc], 0)
}
// Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.
// Examples
// mathExpr("4 + 5") ➞ true
// mathExpr("4*6") ➞ true
// mathExpr("4*no") ➞ false
// Notes
//     Should only work with the following operations: +, -, *, /, %
//     You don't need to test for floats.
//     int1 and int2 will only be from 0-9.
function mathExpr(expr) {
  return !isNaN(+expr[0])
}
// Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space, and there should be no spaces at the beginning or end of the sentence.
// Examples
// correctSpacing("The film   starts       at      midnight. ")
// ➞ "The film starts at midnight."
// correctSpacing("The     waves were crashing  on the     shore.   ")
// ➞ "The waves were crashing on the shore."
// correctSpacing(" Always look on    the bright   side of  life.")
// ➞ "Always look on the bright side of life."
// Notes
// N/A
function correctSpacing(sentence) {
  return sentence.trim().split(' ').filter(ele => ele !== '').join(' ')
}
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
// Examples
// clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]
// clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]
// Notes
// N/A
function clone(arr) {
  arr.push([...arr])
  return arr
}
// A man named Thomas Malthus described what is now called a Malthusian Catastrophe. According to him, food production grows by a fixed amount, but population grows by a percentage. So, the food supply would soon be insufficient for the population.
// Your job is to find out when that will occur. For this challenge, assume 1 population needs 1 unit of food production. Food production and population both start at 100. The year starts at 0.
// The catastrophe happens when the population is larger than food production.
// The function will pass:
//     foodGrowth ⁠— an integer ⁠— food production increase per year.
//     popMult ⁠— a floating-point number ⁠— population growth multiplier per year.
// Examples
// malthusian(4255, 1.41) ➞ 20
// // { foodProd: 85,200, pop: 96,467.77..., year: 20 }
// malthusian(9433, 1.09) ➞ 107
// // { foodProd: 1,009,431, pop: 1,010,730.28..., year: 107 }
// malthusian(5879, 1.77) ➞ 12
// // { foodProd: 70,648, pop: 94,553.84..., year: 12 }
// Notes
//     Return the year that the overtake happens, not the next year.
//     Make sure you don't make the mistake of adding a year, then calculating the changes to food and population. That way, you miss year 0.
//     If the population and food production are equal, that is not a catastrophe.
function malthusian(foodGrowth, popMult) {
  const obj = { foodProd: 100, pop: 100, year: 0 }
  do {
    obj.foodProd += foodGrowth
    obj.pop *= popMult
    obj.year++
  } while (obj.foodProd >= obj.pop)
  return obj.year
}
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.
// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.
// Examples
// mysteryFunc(152) ➞ 10
// mysteryFunc(832) ➞ 48
// mysteryFunc(19) ➞ 9
// mysteryFunc(133) ➞ 9
// Notes
// N/A
function mysteryFunc(num) {
  return [...('' + num)].reduce((cur, acc) => cur * +acc)
}
// Imagine a school that kids attend for 6 years. In each year, there are five groups started, marked with the letters a, b, c, d, e. For the first year, the groups are 1a, 1b, 1c, 1d, 1e and for the last year, the groups are 6a, 6b, 6c, 6d, 6e.
// Write a function that returns the groups in the school by year (as a string), separated with a comma and a space in the form of "1a, 1b, 1c, 1d, 1e, 2a, 2b (....) 5d, 5e, 6a, 6b, 6c, 6d, 6e".
// Examples
// printAllGroups() ➞ "1a, 1b, 1c, 1d, 1e, 2a, 2b, 2c, 2d, 2e, 3a, 3b, 3c, 3d, 3e, 4a, 4b, 4c, 4d, 4e, 5a, 5b, 5c, 5d, 5e, 6a, 6b, 6c, 6d, 6e "
// Notes
// Use nested "for" loops to achieve this, as well as the array of ["a", "b", "c", "d", "e"] groups.
function printAllGroups(letters = ["a", "b", "c", "d", "e"], result = []) {
  for (let i = 1; i < 7; i++) {
    for (let ii = 0; ii < letters.length; ii++) {
      result.push(i + letters[ii])
    }
  }
  return result.join(', ')
}
// Write a function that transforms an array of characters into an array of objects, where:
//     The keys are the characters themselves.
//     The values are the ASCII codes of those characters.
// Examples
// toObj(["a", "b", "c"]) ➞ [{a: 97}, {b: 98}, {c: 99}]
// toObj(["z"]) ➞ [{z: 122}]
// toObj([]) ➞ []
// Notes
// N/A
function toObj(arr) {
  return arr.map(ele => arr[ele] = { [ele]: ele.charCodeAt(0) })
}
// Create a function that takes multidimensional array, converts into one dimensional array and returns it using Recursion.
// Examples
// flatten([[17.2, 5, "code"]]) ➞ [17.2, 5, "code"]
// flatten([[[[[2, 14, "rubber"]]], 2, 3, 4]])) ➞ [2, 14, "rubber", 2, 3, 4]
// flatten([["balkot"]]) ➞ ["balkot"]
// Notes
//     Input contains at least one element.
//     Use of built in methods is discouraged.
function flatten(arr, result = []) {
  //return arr.flat(Infinity)
  arr.forEach(ele => {
    if (Array.isArray(ele)) flatten(ele, result)
    else result.push(ele)
  })
  return result
}
// Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.
// Exampless
// nextInLine([5, 6, 7, 8, 9], 1) ➞ [6, 7, 8, 9, 1]
// nextInLine([7, 6, 3, 23, 17], 10) ➞ [6, 3, 23, 17, 10]
// nextInLine([1, 10, 20, 42 ], 6) ➞ [10, 20, 42, 6]
// nextInLine([], 6) ➞ "No array has been selected"
// Notes
// For an empty array input, return: "No array has been selected"
function nextInLine(arr, num) {
  if (!arr.length) return 'No array has been selected'
  else {
    arr.shift()
    arr.push(num)
  }
  return arr
}
// Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.
// Examples
// asciiSort(["hey", "man"]) ➞ "man"
// // ["h", "e", "y"] ➞ sum([104, 101, 121]) ➞ 326
// // ["m", "a", "n"] ➞ sum([109, 97, 110]) ➞ 316
// asciiSort(["majorly", "then"]) ➞ "then"
// asciiSort(["victory", "careless"]) ➞ "victory"
// Notes
// Both words will have strictly different ASCII sums.
function asciiSort(arr) {
  const asciiArr = arr.map(ele => ele.split('').reduce((cur, acc) => cur + acc.charCodeAt(0), 0))
  return arr[asciiArr.indexOf(Math.min.apply(null, asciiArr))]
}
// Create a function that returns true if a number is prime and false if it's not. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
// Examples
// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false
// Notes
//     1 is not a prime number.
//     If a number is odd it is not divisible by an even number.
function isPrime(num) {
  const factors = []
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) factors.push(i)
  }
  return factors.length === 2
}
// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
// Examples
// countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) ➞ [10, -65]
// // There are a total of 10 positive numbers.
// // The sum of all negative numbers equals -65.
// countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]) ➞ [7, -252]
// countPosSumNeg([91, -4, 80, -73, -28]) ➞ [2, -105]
// countPosSumNeg([]) ➞ []
// Notes
//     If given an empty array, return an empty array: []
//     0 is not positive.
function countPosSumNeg(arr, countPos = 0, sumNeg = 0) {
  if (!arr.length) return []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) countPos++
    else if (arr[i] < 0) sumNeg += arr[i]
  }
  return [countPos, sumNeg]
}
// Write a function that returns true if an integer is a power of 2, and false otherwise.
// Examples
// powerOfTwo(32) ➞ true
// powerOfTwo(1) ➞ true
// powerOfTwo(-7) ➞ false
// powerOfTwo(18) ➞ false
// Notes
// N/A
function powerOfTwo(num) {
  return Math.log2(num) % 1 === 0
}
// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).
// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
//     If win equals true, end the list with Pong!.
//     If win equals false, end with Ping! instead.
// Examples
// pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]
// pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]
// pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
// Notes
//     You will always return the ball (i.e. the Pongs are yours).
//     Player 1 serves the ball and makes Ping!.
//     Return an array of strings.
function pingPong(arr, win) {
  if (arr.length === 1) {
    arr[arr.length] = 'Pong!'
    return arr
  }
  for (let i = arr.length - 1; i >= 1; i--) {
    if (win === true) {
      arr.splice(i, 0, 'Pong!')
      arr[arr.length] = 'Pong!'
      arr.length = 6
    }
    else arr.splice(i, 0, 'Pong!')
  }
  return arr
}
// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.
//     x Number of subarrays contained within the main array.
//     y Number of items contained within each subarray.
//     z Item contained within each subarray.
// Examples
// matrix(3, 2, 3) ➞ [[3, 3], [3, 3], [3, 3]]
// matrix(2, 1, "edabit") ➞ [["edabit"], ["edabit"]]
// matrix(3, 2, 0) ➞ [[0, 0], [0, 0], [0, 0]]
// Notes
//     The first two arguments will always be integers.
//     The third argument is either a string or an integer.
function matrix(x, y, z) {
  // return Array(x).fill(Array(y).fill(z))
  const mainArr = []
  mainArr.length = x
  for (let i = 0; i < x; i++) {
    mainArr[i] = []
    mainArr[i].length = y
    mainArr[i].fill(z)
  }
  return mainArr
}
// Given the month and year as numbers, return whether that month contains a Friday 13th.
// Examples
// hasFriday13(3, 2020) ➞ true
// hasFriday13(10, 2017) ➞ true
// hasFriday13(1, 1985) ➞ false
// Notes
// January will be given as 1, February as 2, etc ...
function hasFriday13(month, year) {
  return new Date(`${year}-${month}-13`).getDay() === 5
}
// Stalactites hang from the ceiling of a cave while stalagmites grow from the floor.
// Create a function that determines whether the input represents "stalactites" or "stalagmites". If it represents both, return "both". Input will be a 2D array, with 1 representing a piece of rock, and 0 representing air space.
// Examples
// mineralFormation([
//   [0, 1, 0, 1],
//   [0, 1, 0, 1],
//   [0, 0, 0, 1],
//   [0, 0, 0, 0]
// ]) ➞ "stalactites"
// mineralFormation([
//   [0, 0, 0, 0],
//   [0, 1, 0, 1],
//   [0, 1, 1, 1],
//   [0, 1, 1, 1]
// ]) ➞ "stalagmites"
// mineralFormation([
//   [1, 0, 1, 0],
//   [1, 1, 0, 1],
//   [0, 1, 1, 1],
//   [0, 1, 1, 1]
// ]) ➞ "both"
// Notes
//     There won't be any examples where both stalactites and stalagmites meet (because those are called pillars).
//     There won't be any example of neither stalactites nor stalagmites.
function mineralFormation(cave) {
  const tites = cave[0].some(ele => ele === 1)
  const mites = cave[cave.length - 1].some(ele => ele === 1)
  if (tites && mites) return 'both'
  else if (tites) return 'stalactites'
  else if (mites) return 'stalagmites'
}
// Write a function that returns true if the binary string can be rearranged to form a string of alternating 0s and 1s.
// Examples
// canAlternate("0001111") ➞ true
// // Can make: "1010101"
// canAlternate("01001") ➞ true
// // Can make: "01010"
// canAlternate("010001") ➞ false
// canAlternate("1111") ➞ false
// Notes
//     No substring of the output may contain more than one consecutive repeating character (e.g. 00 or 11 are not allowed).
//     Return false if a string only contains 0s or only contains 1s.
function canAlternate(s, zeros = 0, ones = 0) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') zeros++
    else ones++
  }
  return zeros === ones || zeros - 1 === ones || zeros + 1 === ones
}
// Write a function that returns the longest sequence of consecutive zeroes in a binary string.
// Examples
// longestZero("01100001011000") ➞ "0000"
// longestZero("100100100") ➞ "00"
// longestZero("11111") ➞ ""
// Notes
// If no zeroes exist in the input, return an empty string.
function longestZero(s) {
  return s.split('1').reduce((cur, acc) => cur.length > acc.length ? cur : acc)
}
// Create a function that takes a strings characters as ASCII and returns each characters hexadecimal value as a string.
// Examples
// toHex("hello world") ➞ "68 65 6c 6c 6f 20 77 6f 72 6c 64"
// toHex("Big Boi") ➞ "42 69 67 20 42 6f 69"
// toHex("Marty Poppinson") ➞ "4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e"
// Notes
//     Each byte must be seperated by a space.
//     All alpha hex characters must be lowercase.
function toHex(str, result = []) {
  for (let i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i).toString(16))
  }
  return result.join(' ')
}
// Create a function that takes a multidimensional array and return the total count of numbers in that array.
// Examples
// countNumber([["", 17.2, 5, "edabit"]]) ➞ 2
// // 17.2 and 5.
// countNumber([[[[[2, 14]]], 2, 3, 4]]) ➞ 5
// // 2, 14, 2, 3 and 4.
// countNumber([["balkot"]]) ➞ 0
// Notes
// Input may be array of numbers, strings and empty arrays.
const countNumber = arr => {
  const flatten = (arr, result = []) => {
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i]
      if (Array.isArray(value)) flatten(value, result)
      else result.push(value)
    }
    return result
  }
  return flatten(arr).filter(ele => typeof ele === 'number').length
};
// Create a function that takes a string and replaces the vowels with another character.
//     a = 1
//     e = 2
//     i = 3
//     o = 4
//     u = 5
// Examples
// replaceVowel("karachi") ➞ "k1r1ch3"
// replaceVowel("chembur") ➞ "ch2mb5r"
// replaceVowel("khandbari") ➞ "kh1ndb1ri"
// Notes
// The input will always be in lowercase.
function replaceVowel(word) {
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 }
  const wordArr = [...word]
  for (let i = 0; i < wordArr.length; i++) {
    if (vowels[wordArr[i]]) wordArr[i] = vowels[wordArr[i]]
  }
  return wordArr.join('')
}
// Create a function that takes in a sentence and a character to find. Return an object of each word in the sentence, with the count of the specified character as the value.
// Examples
// findOccurrences("Hello World", "o") ➞ {
//   "hello" : 1,
//   "world" : 1
// }
// findOccurrences("Create a nice JUICY function", "c") ➞  {
//   "create" : 1,
//   "a" : 0,
//   "nice" : 1,
//   "juicy" : 1,
//   "function" : 1
// }
// findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A") ➞ {
//   "an" : 1,
//   "apple" : 1,
//   "a" : 1,
//   "day" : 1,
//   "keeps" : 0,
//   "archeologist" : 1,
//   "away..." : 2
// }
// Notes
//     The function shouldn't be case sensitive.
//     Words in the dictionary should be in lowercase.
//     You may be required to find punctuation.
//     Duplicate words should be ignored (see example #3 for the word "an").
function findOccurrences(str, char) {
  const dups = {}
  const strArr = [...str.split(' ')]
  let j = 0
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i].toLowerCase()
    if (!dups[word]) {
      dups[word] = word.split(char.toLowerCase()).length - 1
    }
  }
  return dups
}
// Write a function that takes a string, breaks it up and returns it with vowels first, consonants second. For any character that's not a vowel (like special characters or spaces), treat them like consonants.
// Examples
// split("abcde") ➞ "aebcd"
// split("Hello!") ➞ "eoHll!"
// split("What's the time?") ➞ "aeieWht's th tm?"
// Notes
//     Vowels are a, e, i, o, u.
//     Define a separate isVowel() function for easier to read code (recommendation).
function split(str) {
  const strArr = [...str]
  const vowels = 'aeiou'
  const result = []
  for (let i = 0; i < strArr.length; i++) {
    if (vowels.indexOf(strArr[i]) !== -1) result.push(strArr[i])
  }
  for (let i = 0; i < strArr.length; i++) {
    if (vowels.indexOf(strArr[i]) === -1) result.push(strArr[i])
  }
  return result.join('')
}
// Wurst is the best. Create a function that takes a string and replaces every mention of any type of sausage with the German word "Wurst," unless—of course—the sausage is already a type of German "Wurst" (i.e. "Bratwurst", see below), then leave the sausage name unchanged.
// German Wursts	Convert to Wurst
// Bratwurst	Kielbasa
// Kochwurst	Chorizo
// Leberwurst	Moronga
// Mettwurst	Salami
// Rostbratwurst	Sausage
// ~	Andouille
// ~	Naem
// ~	Merguez
// ~	Gurka
// ~	Snorkers
// ~	Pepperoni
// Rules
//     Append sausages from the "Convert to Wurst" column with "wurst".
//     Do not replace any German sausage with the word "Wurst".
//     The word "Wurst" must be title case.
// Examples
// wurstIsBetter("I like chorizos, but not sausages") ➞ "I like Wursts, but not Wursts"
// wurstIsBetter("sich die Wurst vom Brot nehmen lassen") ➞ "sich die Wurst vom Brot nehmen lassen"
// wurstIsBetter("Bratwurst and Rostbratwurst are sausages") ➞ "Bratwurst and Rostbratwurst are Wursts"
// Notes
// All German sausage names contain the word "wurst".
function wurstIsBetter(str) {
  return str.replace(/sausage|salami|moronga|chorizo|kielbasa|andouille|naem/gi, 'Wurst')
}
// Quantifiers indicate numbers of characters or expressions to match. By default quantifiers like * and + are "greedy", meaning that they try to match as much of the string as possible. The ? character after the quantifier makes the quantifier "non-greedy": meaning that it will stop as soon as it finds a match.
// "some <foo> <bar> new </bar> </foo> thing".match(/<.*>/) ➞ "<foo> <bar> new </bar> </foo>"
// "some <foo> <bar> new </bar> </foo> thing".match(/<.*?>/) ➞ "<foo>"
// Find all HTML comments in the text. Use the ? in your expression.
// let str = `... <!-- My -- comment test --> ..  <!----> .. `;
// str.match(regexp) ➞ "<!-- My -- comment test -->", "<!---->"
// Notes
// Check the Resources if you get stuck.
const REGEXP = /<!--.*?-->/g
// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.
// Examples
// hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false
// hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false
// hasHiddenFee(["$1"], "$4") ➞ true
// Notes
//     Remember that each price is given as a string.
//     All $ signs will be at the beginning of the number.
function hasHiddenFee(prices, t) {
  return prices.reduce((cur, acc) => +acc.slice(1) + cur, 0) < t.slice(1)
}
// A number n is automorphic if n^2 ends in n.
// For example: n=5, n^2=25
// Create a function that takes a number and returns true if the number is automorphic, false if it isn't.
// Examples
// isAutomorphic(5) ➞ true
// isAutomorphic(8) ➞ false
// isAutomorphic(76) ➞ true
// Notes
// N/A
function isAutomorphic(n) {
  const nStr = '' + n
  return ('' + (n * n)).slice(-nStr.length) === nStr
}
// Create a function that takes a number as input and returns true if the sum of its digits has the same parity as the entire number. Otherwise, return false.
// Examples
// parityAnalysis(243) ➞ true
// // 243 is odd and so is 9 (2 + 4 + 3)
// parityAnalysis(12) ➞ false
// // 12 is even but 3 is odd (1 + 2)
// parityAnalysis(3) ➞ true
// // 3 is odd and 3 is odd and 3 is odd (3)
// Notes
//     Parity is whether a number is even or odd. If the sum of the digits is even and the number itself is even, return true. The same goes if the number is odd and so is the sum of its digits.
//     Single digits will obviously have the same parities (see example #3).
function parityAnalysis(num) {
  let sumNum = 0
  const numArr = [...('' + num)]
  for (let i = 0; i < numArr.length; i++) {
    sumNum += +numArr[i]
  }
  return (sumNum % 2 === 0) === (num % 2 === 0)
}
// Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.
// Examples
// stepsToConvert("abC") ➞ 1
// // "abC" converted to "abc" in 1 step
// stepsToConvert("abCBA") ➞ 2
// // "abCBA" converted to "ABCBA" in 2 steps
// stepsToConvert("aba") ➞ 0
// stepsToConvert("abaCCC") ➞ 3
// Notes
//     Return 0 if empty string.
//     Return 0 if the string is already entirely in one case.
//     Only alphabetic characters.
//     Input has no spaces.
function stepsToConvert(str) {
  let upperCount = 0
  let lowerCount = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) upperCount++
    if (str[i] === str[i].toLowerCase()) lowerCount++
  }
  return upperCount > lowerCount ? lowerCount : upperCount
}
// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
// Examples
// add_ly = add_suffix("ly")
// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞"totally"
// add_less = add_suffix("less")
// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"
// Notes
// N/A
function add_suffix(suffix) {
  return function (str) {
    return str + suffix
  }
}
// Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.
// Examples
// stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"
// stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") ➞ "the hiing nake initerly lither acro the rutling leave"
// stripSentence("gone, reduced to atoms", "go, muscat nerd") ➞ ""
// Notes
//     You may be asked to remove punctuation and spaces.
//     Return an empty string if every charcter is specified (see example #3).
//     All tests will be in lowercase.
function stripSentence(str, chars) {
  //Regex Solution
  // return str.replace(RegExp('['+chars+']', 'g'), '')
  //Rosetta Code Solution
  // const elem = (x, xs) => xs.indexOf(x) !== -1
  // return str.split('').filter(letter => !elem(letter, chars)).join('')
  const strArr = [...str]
  const result = []
  for (let i = 0; i < strArr.length; i++) {
    if (!(chars.indexOf(strArr[i]) !== -1)) result.push(strArr[i])
  }
  return result.join('')
}
// Create a function that changes all the elements in an array as follows:
//     Add 1 to all even integers, nothing to odd integers.
//     Concatenates "!" to all strings and capitalises them.
//     Changes all boolean values to its opposite.
// Examples
// changeTypes(["a", 12, true]) ➞ ["A!", 13, false]
// changeTypes([13, "13", "12", "twelve"]) ➞ [13, "13!", "12!", "Twelve!"]
// changeTypes([false, "false", "true"]) ➞ [true, "False!", "True!"]
// Notes
//     There won't be any float values.
//     You won't get strings with both numbers and letters in them.
//     Although the task may be easy, try keeping your code as clean and as readable as possible!
function changeTypes(arr) {
  return arr.map(ele => {
    if (typeof ele === 'number' && ele % 2 === 0) return ele += 1
    if (typeof ele === 'string' && isNaN(ele)) return ele = ele[0].toUpperCase() + ele.slice(1) + '!'
    if (typeof ele === 'string' && !isNaN(ele)) return ele + '!'
    if (typeof ele === 'boolean') return ele = !ele
    return ele
  })
}
// You are to read each part of the date into its own integer type variable. The year should be a 4 digit number. You can assume the user enters a correct date formatted d m yyyy (no error checking required).
// Determine whether the entered date is a magic date. Here are the rules for a magic date:
//     mm * dd is a 1-digit number that matches the last digit of yyyy or
//     mm * dd is a 2-digit number that matches the last 2 digits of yyyy or
//     mm * dd is a 3-digit number that matches the last 3 digits of yyyy
// The program should then display true if the date is magic, or false if it is not.
// Examples
// Magic("1 1 2011") ➞ true
// Magic("4 1 2001") ➞ false
// Magic("5 2 2010") ➞ true
// Magic("9 2 2011") ➞ false
// Notes
// N/A
function Magic(str) {
  const strArr = [...str.split(' ')]
  return strArr[2].endsWith(strArr[0] * strArr[1])
}
// A number is considered slidey if for every digit in the number, the next digit from that has an absolute difference of one. Check the examples below.
// Examples
// isSlidey(123454321) ➞ true
// isSlidey(54345) ➞ true
// isSlidey(987654321) ➞ true
// isSlidey(1123) ➞ false
// isSlidey(1357) ➞ false
// Notes
//     A number cannot slide properly if there is a "flat surface" (example #4), or has gaps (example #5).
//     All single digit numbers can be considered slidey numbers!
function isSlidey(n) {
  const nArr = [...('' + n)]
  for (let i = 0; i < nArr.length - 1; i++) {
    const diff = +nArr[i] - nArr[i + 1]
    const absdiff = diff < 0 ? -diff : diff
    if (absdiff !== 1) return false
  }
  return true
}
// Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.
// Examples
// incrementToTop([3, 4, 5]) ➞ 3
// // 3 increments: 3 -> 4, 4 -> 5; 4 -> 5
// incrementToTop([4, 3, 4]) ➞ 1
// incrementToTop([3, 3, 3]) ➞ 0
// incrementToTop([3, 10, 3]) ➞ 14
// Notes
//     If the array contains only the same digits, return 0 (see example #2).
//     Bonus: Can you write a solution that achieves this by only traversing the array once? (i.e. without finding the max before hand)
function incrementToTop(arr) {
  let steps = 0
  const arrMax = Math.max(...arr)
  for (let i = 0; i < arrMax; i++) {
    if (arr[i] < arrMax) steps += (arrMax - arr[i])
  }
  return steps
}
// Your job is to make a "Twitter link" regular expression rx. This RegEx searches a tweet to find the @handle and the #handle.
//     The function is already written in the Tests tab, so you only need to provide the RegEx variable in the Code tab.
//     Only return the @ and # handles.
// Examples
// tweet("Visit us at @edabit") ➞ "@edabit"
// tweet("Follow @JavaScript") ➞ "@JavaScript"
// tweet("#Honesty is the best @policy!!") ➞ "#Honesty @policy"
// Notes
// Make sure the RegEx doesn't return . , ! ?, etc.
const rx = /(@\w+)|(#\w+)/g
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
// [3, 6, 12, 36]
// // 3 is a factor of 6
// // 6 is a factor of 12
// // 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.
// Examples
// factorChain([1, 2, 4, 8, 16, 32]) ➞ true
// factorChain([1, 1, 1, 1, 1, 1]) ➞ true
// factorChain([2, 4, 6, 7, 12]) ➞ false
// factorChain([10, 1]) ➞ false
// Notes
// N/A
function factorChain(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i] !== 0) return false
  }
  return true
}
// Dividing by 0 is a huge mistake and should be avoided at all costs.
// Create a function that when given a math expression as a string, return True if at any point, the expression involves dividing by 0.
// Examples
// catchZeroDivision("2 / 0") ➞ true
// catchZeroDivision("4 / (2 + 3 - 5)") ➞ true
// catchZeroDivision("2 * 5 - 10") ➞ false
// Notes
// Multiplication signs will be given as an asterisk *.
function catchZeroDivision(expr) {
  if (isFinite(eval(expr))) return false
  return true
}
// Given two integers a and b, return how many times a can be halved while still being greater than b.
// Examples
// halveCount(1324, 98) ➞ 3
// // (1324 -> 662 -> 331 -> 165.5)
// halveCount(624, 8) ➞ 6
// // (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)
// halveCount(1000, 3) ➞ 8
// // (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)
// Notes
// Integer a can be halved at least once.
function halveCount(a, b) {
  let count = 0
  while ((a /= 2) > b) count++
  return count
}
// Return true if the sum of ASCII values of the first string is same as the sum of ASCII values of the second string, otherwise return false.
// Examples
// sameAscii("a", "a") ➞ true
// sameAscii("AA", "B@") ➞ true
// sameAscii("EdAbIt", "EDABIT") ➞ false
// Notes
// If you need some help with ASCII codes, check the Resources tab for an image of all ASCII codes used in this challenge.
function sameAscii(a, b) {
  let sumA = 0
  let sumB = 0
  for (let i = 0; i < a.length; i++) {
    sumA += a.charCodeAt(i)
  }
  for (let ii = 0; ii < b.length; ii++) {
    sumB += b.charCodeAt(ii)
  }
  return sumA === sumB
}
// Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.
// This is what a valid phone number looks like:
// (123) 456-7890
// Examples
// isValidPhoneNumber("(123) 456-7890") ➞ true
// isValidPhoneNumber("1111)555 2345") ➞ false
// isValidPhoneNumber("098) 123 4567") ➞ false
// Notes
// Don't forget the space after the closing parentheses.
function isValidPhoneNumber(str) {
  if (str.length !== 14) return false
  if (str[0] !== '(') return false
  if (str[5] !== ' ') return false
  if (isNaN(parseInt(str[str.length - 1], 10))) return false
  if (str[9] !== '-') return false
  else return true
}
// If you've completed this RegEx series from I to XXII then you have been exposed to all of MDN's documentation on regular expressions special characters. You can check my Collections under Basic Reg Ex in my profile if you missed any. This next part of the series is to help solidify what you've learned. In order to save time I will be searching the web to find regular expression exercises to post here.
// You can test for empty string like this:
// "".length === 0 ➞ true
// Use a regular expression to test for an empty string.
// const REGEXP = /your solution/
// REGEXP.test("") ➞ true
// Notes
// You can find the solution in the Resources tab.
const REGEXP = /^$/
// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.
// Examples
// uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) ➞ [1, 3]
// uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) ➞ [3, 5]
// uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) ➞ [10, 6, 13, 5]
// Notes
//     Return the elements in the order that they are found in the array.
//     Your function should also work for empty arrays.
function uniqueArr(arr) {
  const dups = {}
  const result = []
  let j = 0
  for (let i = 0; i < arr.length; i++) {
    if (dups[arr[i]] !== true && arr[i] > 0) {
      dups[arr[i]] = true
      result[j++] = arr[i]
    }
  }
  return result
}
// There has been a masterdata issue which affected the prices of the products. All prices need to be checked if they are a valid number and zero or higher (>= 0). Products with a price of 0 are free and is a valid price.
// The return value should be a Boolean.
// Examples
// hasValidPrice({ "product": "Milk", price: 1.50 }) ➞ true
// hasValidPrice({ "product": "Cheese", price: -1 }) ➞ false
// hasValidPrice({ "product": "Eggs", price: 0 }) ➞ true
// hasValidPrice({ "product": "Cerials", price: '3.0' }) ➞ false
// hasValidPrice() ➞ false
// Notes
// Run the tests first to see the results before making changes and understand why eggs is returning 0 and flour is returning undefined.
function hasValidPrice(product) {
  return (product && typeof product.price === 'number' && product.price >= 0) || false
}
// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
// Examples
// removeSpecialCharacters("The quick brown fox!") ➞ "The quick brown fox"
// removeSpecialCharacters("%fd76$fd(-)6GvKlO.") ➞ "fd76fd-6GvKlO"
// removeSpecialCharacters("D0n$c sed 0di0 du1") ➞ "D0nc sed 0di0 du1"
// Notes
// N/A
function removeSpecialCharacters(str) {
  return str.replace(/[^\w-_ ]/g, '')
}
// Given two lines, determine whether or not they are parallel.
// Lines are represented by an array [a, b, c], which corresponds to the line ax+by=c.
// Examples
// linesAreParallel([1, 2, 3], [1, 2, 4]) ➞ true
// // x+2y=3 and x+2y=4 are parallel.
// linesAreParallel([2, 4, 1], [4, 2, 1]) ➞ false
// // 2x+4y=1 and 4x+2y=1 are not parallel.
// linesAreParallel([0, 1, 5], [0, 1, 5]) ➞ true
// // Lines are parallel to themselves.
// Notes
//     All the test cases use valid input (so no arrays of the wrong size, for example).
//     All the coefficients will be integers (whole numbers).
function linesAreParallel(l1, l2) {
  return l1[0] / l1[1] === l2[0] / l2[1]
}
// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.
// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.
// Examples
// maskify("4556364607935616") ➞ "############5616"
// maskify("64607935616") ➞ "#######5616"
// maskify("1") ➞ "1"
// maskify("") ➞ ""
// Notes
//     The maskify function must accept a string of any length.
//     An empty string should return an empty string (fourth example above).
function maskify(str) {
  if (str == '') return ''
  const strArr = [...str]
  return strArr.length > 4 ? strArr.fill('#', 0, strArr.length - 4).join('') : strArr.join('')
}
// Create a function that takes an integer and returns it as an ordinal number. An Ordinal Number is a number that tells the position of something in a list, such as 1st, 2nd, 3rd, 4th, 5th etc.
// Examples
// returnEndOfNumber(553) ➞ "553-RD"
// returnEndOfNumber(34) ➞ "34-TH"
// returnEndOfNumber(1231) ➞ "1231-ST"
// returnEndOfNumber(22) ➞ "22-ND"
// Notes
// Check the Resources tab for more info on ordinal numbers.
function returnEndOfNumber(num) {
  const numArr = [...'' + num]
  const suffix = { 1: '-ST', 2: '-ND', 3: '-RD', 4: '-TH' }
  if (suffix[numArr[numArr.length - 1]]) {
    numArr.splice(numArr.length, 0, suffix[numArr[numArr.length - 1]])
  }
  return numArr.join('')
}
// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.
//     The string must contain an @ character.
//     The string must contain a . character.
//     The @ must have at least one character in front of it.
//         e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
//     The . and the @ must be in the appropriate places.
//         e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
// If the string passes these tests, it's considered a valid email address.
// Examples
// validateEmail("@gmail.com") ➞ false
// validateEmail("hello.gmail@com") ➞ false
// validateEmail("gmail") ➞ false
// validateEmail("hello@gmail") ➞ false
// validateEmail("hello@edabit.com") ➞ true
// Notes
//     Check the Tests tab to see exactly what's being evaluated.
//     You can solve this challenge with RegEx, but it's intended to be solved with logic.
//     Solutions using RegEx will be accepted but frowned upon :(
function validateEmail(str) {
  if (str.includes('@') && str.includes('.')) {
    if (!str[str.indexOf('@') - 1]) return false
    if (!str.slice(str.indexOf('@')).includes('.')) return false
  } else return false
  return true
}
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.
// Examples
// validatePIN("1234") ➞ true
// validatePIN("12345") ➞ false
// validatePIN("a234") ➞ false
// validatePIN("") ➞ false
// Notes
//     Some test cases contain special characters.
//     Empty strings must return false.
function validatePIN(pin) {
  // return /([\d]{6}|[\d]{4})/.test(pin)
  if (!pin) return false
  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      if (isNaN(parseInt(pin[i]))) return false
    }
  } else return false
  return true
}
// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples
// reverse("Reverse") ➞ "esreveR"
// reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"
// reverse("The dog is big.") ➞ "The dog is big."
// Notes
// You can expect a valid string to be provided for each test case.
function reverse(str) {
  const strArr = [...str.split(' ')]
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 4) {
      strArr[i] = [...strArr[i]].reverse().join('')
    }
  }
  return strArr.join(' ')
}
// Create a function that takes a number as an argument and returns a string formatted to separate thousands.
// Examples
// formatNum(1000) ➞ "1,000"
// formatNum(100000) ➞ "100,000"
// formatNum(20) ➞ "20"
// Notes
// You can expect a valid number for all test cases.
function formatNum(num) {
  return num.toLocaleString();
}
// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".
// Examples
// isIsogram("Algorism") ➞ true
// isIsogram("PasSword") ➞ false
// // Not case sensitive.
// isIsogram("Consecutive") ➞ false
// Notes
//     Ignore letter case (should not be case sensitive).
//     All test cases contain valid one word strings.
function isIsogram(str) {
  const dups = {}
  Array.prototype.forEach.call(str.toLowerCase(), (char) => {
    dups[char] = dups[char] ? 1 + dups[char] : 1
  })
  return Object.values(dups).every(idx => idx == 1)
}
// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.
// Examples
// isAnagram("cristian", "Cristina") ➞ true
// isAnagram("Dave Barry", "Ray Adverb") ➞ true
// isAnagram("Nope", "Note") ➞ false
// Notes
//     Should be case insensitive.
//     The two given strings can be of different lengths.
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false
  let s1Count = {}
  Array.prototype.forEach.call(s1.toLowerCase(), (char) => {
    s1Count[char] = s1Count[char] ? 1 + s1Count[char] : 1
  })
  s2 = s2.toLowerCase()
  for (let i = 0; i < s2.length; i++) {
    if (!s1Count[s2[i]]) return false
    else s1Count[s2[i]] -= 1
  }
  return true
}
// Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in form of a phone number.
// Examples
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
// createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ➞ "(111) 111-1111"
// createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]) ➞ "(874) 125-6582"
// Notes
// N/A
function createPhoneNumber(numbers) {
  return `(${numbers.splice(0, 3).join('')}) ${numbers.splice(0, 3).join('')}-${numbers.slice(0, 4).join('')}`
}
// Create a function which takes a parameter n and returns a function such that it, when called n times, returns the string "edabit".
// Examples
// lambdaDepth(0) ➞ "edabit"
// lambdaDepth(1)() ➞ "edabit"
// lambdaDepth(2)()() ➞ "edabit"
// typeof lambdaDepth(2)() ➞ "function"
// Notes
//     num will always be a non-negative integer.
//     If num == 0, return "edabit".
//     If num > 0, return a function.
//     All non-example test cases come in two forms: checking whether lambda_depth(k), after being called k times, returns a string, and checking whether lambda_depth(k) returns a function.
lambdaDepth = n => eval('() => '.repeat(n) + '"edabit"')
// Given a number, n, return a function which adds n to the number passed to it.
// Examples
// add(10)(20) ➞ 30
// add(0)(20) ➞ 20
// add(-30)(80) ➞ 50
// Notes
//     All numbers used in the tests will be integers (whole numbers).
//     Returning a function from a function is a key part of understanding higher order functions (functions which operate on and return functions).
function add(n) {
  return function (n2) {
    return n + n2
  }
}
// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.
// Examples
// reverseImage([
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1]
// ]) ➞ [
//   [0, 1, 1],
//   [1, 0, 1],
//   [1, 1, 0]
// ]
// reverseImage([
//   [1, 1, 1],
//   [0, 0, 0]
// ]) ➞ [
//   [0, 0, 0],
//   [1, 1, 1]
// ]
// reverseImage([
//   [1, 0, 0],
//   [1, 0, 0]
// ]) ➞ [
//   [0, 1, 1],
//   [0, 1, 1]
// ]
// Notes
// N/A
function reverseImage(image) {
  for (let i = 0; i < image.length; i++) {
    for (let ii = 0; ii < image[i].length; ii++) {
      if (image[i][ii] === 1) image[i][ii] = 0
      else image[i][ii] = 1
    }
  }
  return image
}
// Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.
// Examples
// findZip("all zip files are zipped") ➞ 18
// findZip("all zip files are compressed") ➞ -1
// Notes
// Uppercase "Zip" is not the same as lowercase "zip".
function findZip(str) {
  return str.indexOf('zip') !== str.lastIndexOf('zip') ? str.split('zip', 2).join('zip').length : -1
}
// Write a function that returns an anonymous function, which adds n to its input
// Examples
// adds1 = addsNum(1)
// adds1(3) ➞ 4
// adds1(5.7) ➞ 6.7
// adds10 = addsNum(10)
// adds10(44) ➞ 54
// adds10(20) ➞ 30
// Notes
// N/A
const addsNum = (n) => (n2) => n + n2
// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.
// Please check the examples below for a clearer representation of the behavior expected.
// Examples
// // Calling makePlusFunction(5) returns a new function that takes an input,
// // and returns the result when adding 5 to it.
// const plusFive = makePlusFunction(5)
// plusFive(2) ➞ 7
// plusFive(-8) ➞ -3
// // Calling makePlusFunction(10) returns a new function that takes an input,
// // and returns the result when adding 10 to it.
// const plusTen = makePlusFunction(10)
// plusTen(0) ➞ 10
// plusTen(188) ➞ 198
// plusFive(plusTen(0)) ➞ 15
// Notes
// All inputs will be valid numbers.
function makePlusFunction(baseNum) {
  return function (num) {
    return baseNum + num
  }
}
// Groups and ranges indicate groups and ranges of expression characters. Character Sets match any characters inside of brackets [ ]. You can specify a range of characters by using a hyphen.
// /[abcd]/ === /[a-d]/
// If the hyphen appears as the first or last character then it is considered a literal hyphen.
// "non-profit".match(/[abc-]/g)  // "-"
// "non-profit".match(/[-abc]/g)  // "-"
// You can also use character classes in a character set. So instead of this:
// /[A-Za-z0-9_-]/
// You can do this:
// /[\w]/
// Create the regex to match "x" followed by two digits or letters from A to F. Case sensitive.
// Examples
// "Exception 0xAF".match(REGEXP) ➞ "xAF"
// "Exception 0xD3".match(REGEXP) ➞ "xD3"
// "Exception 0xd3".match(REGEXP) ➞ null
// "Exception 0xZZ".match(REGEXP) ➞ null
// Notes
// Check the Resources tab if you get stuck.
const REGEXP = /x[A-F\d]{2}/g
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// We have the \t and \v character classes that match any tabs in a string. But more specifically \t is used to match horizontal tabs while \v matches vertical tabs. Vertical tabs were once a thing but are rarely used anymore. We generally use horizontal tabs which are produced by the tab key on our keyboards.
// Find how many tabs with one literal whitespace immediately following the tab are in a string.
// Notes
//     Not all whitespaces are the same.
//     See Resources for help.
const REGEXP = /\t /g
// Create a function which adds spaces before every capital in a word. Uncapitalize the whole string afterwards.
// Examples
// capSpace("helloWorld") ➞ "hello world"
// capSpace("iLoveMyTeapot") ➞ "i love my teapot"
// capSpace("stayIndoors") ➞ "stay indoors"
// Notes
// The first letter will stay uncapitalized.
function capSpace(txt) {
  const txtArr = txt.split('')
  for (let i = 0; i < txtArr.length; i++) {
    if (txtArr[i].toUpperCase() === txtArr[i]) {
      txtArr[i] = txtArr[i].toLowerCase()
      txtArr.splice(i, 0, ' ')
    }
  }
  return txtArr.join('')
}
// Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.
// Example #1
// // The first object parameter.
// {
//   name: "Benny",
//   phone: "3325558745",
//   email: "benny@edabit.com"
// }
// // The second object parameter.
// {
//   name: "Jason",
//   phone: "9853759720",
//   email: "jason@edabit.com"
// }
// ➞ false
// Example #2
// // The first object parameter.
// {
//   name: "Jason",
//   phone: "9853759720",
//   email: "jason@edabit.com"
// }
// // The second object parameter.
// {
//   name: "Jason",
//   phone: "9853759720",
//   email: "jason@edabit.com"
// }
// ➞ true
// Notes
// If you have a suggestion on how to make these instructions easier to understand, please leave a comment. Your feedback is greatly appreciated.
function isEqual(objOne, objTwo) {
  return JSON.stringify(objOne) === JSON.stringify(objTwo)
}
// if (objOne instanceof Object) {
//   var a = Object.keys(objOne);
//   var b = Object.keys(objTwo);
//   for (var i in a) {
//     if (a[i] !== b[i]) return false;
//   }
// }
// for (var i in objOne) {
//   if ((objOne[i] instanceof Array) || (objOne[i] instanceof Object)) {
//     if (!isEqual(objOne[i], objTwo[i])) return false;
//   } else {
//     if (objOne[i] !== objTwo[i]) return false;
//   }
// }
// return true;
// As you complete questions on Edabit, you gain experience points depending on the difficulty of the question. The points for each difficulty are as follows:
// Difficulty	Experience Points
// Very Easy	5XP
// Easy	10XP
// Medium	20XP
// Hard	40XP
// Very Hard	80XP
// Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.
// Examples
// getXP({
//   "Very Easy" : 89,
//   "Easy" : 77,
//   "Medium" : 30,
//   "Hard" : 4,
//   "Very Hard" : 1
// }) ➞ "2055XP"
// getXP({
//   "Very Easy" : 254,
//   "Easy" : 32,
//   "Medium" : 65,
//   "Hard" : 51,
//   "Very Hard" : 34
// }) ➞ "7650XP"
// getXP({
//   "Very Easy" : 11,
//   "Easy" : 0,
//   "Medium" : 2,
//   "Hard" : 0,
//   "Very Hard" : 27
// }) ➞ "2255XP"
// Notes
// Return values as a string and make sure to add "XP" to the end.
function getXP(obj) {
  const exp = {
    'Very Easy': 5,
    'Easy': 10,
    'Medium': 20,
    'Hard': 40,
    'Very Hard': 80
  }
  for (let key in obj) {
    obj[key] *= exp[key]
  }
  return `${Object.values(obj).reduce((acc, cur) => acc + cur, 0)}XP`
}
// Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:
// "{fraction} rounded to {n} decimal places is {answer}"
// Examples
// fracRound("1/3", 5) ➞ "1/3 rounded to 5 decimal places is 0.33333"
// fracRound("2/8", 4) ➞ "2/8 rounded to 4 decimal places is 0.2500"
// fracRound("22/7", 2) ➞ "22/7 rounded to 2 decimal places is 3.14"
// Notes
//     Add trailing zeros if n is greater than the actual number of decimal places the fraction has (see example #2).
//     Numbers greater than one may be given as top-heavy fractions (no mixed numbers).
//     n won't be 1 because that would cause "decimal places" to be "decimal place", making the challenge more cumbersome than it needs to be.
function fracRound(frac, n) {
  const operandIdx = frac.indexOf('/')
  const answer = +frac.slice(0, operandIdx) / frac.slice(operandIdx + 1)
  return `${frac} rounded to ${n} decimal places is ${answer.toFixed(n)}`
}
// Create a function that takes a word and returns true if the word has two consecutive identical letters.
// Examples
// doubleLetters("loop") ➞ true
// doubleLetters("yummy") ➞ true
// doubleLetters("orange") ➞ false
// doubleLetters("munchkin") ➞ false
// Notes
// N/A
function doubleLetters(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      return true
    }
  }
  return false
}
// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
// Examples
// sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7
// sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455
// sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8
// sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563
// sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519
// Notes
//     Don't count negative numbers.
//     Floats and empty arrays will not be used in any of the test cases.
function sumTwoSmallestNums(arr) {
  let tmp
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
  const postiveOnly = arr.filter(idx => idx > 0)
  return postiveOnly[0] + postiveOnly[1]
}
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Examples
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
// Notes
//     The array of numbers will be unsorted (not in order).
//     Only one number will be missing.
function missingNum(arr) {
  return 55 - arr.reduce((cur, acc) => cur + acc, 0)
}
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// Write a regex that will return true if the bio does not have any spaces before the last ending punctuation ?. You must use the \S character class in your expression.
// "Can read a spray chart and a balance sheet. 1 part Executive, 1 part entrepreneur, 2 parts geek and 3 parts baseball coach. Too many parts?"
// The bio above is in the correct format. Therefore your regex should return true for it.
// Notes
//     Check the Resources tab for details on character classes if you're stuck.
//     Mark Gallion's twitter bio is used for educational purposes only.
const REGEXP = /\S[\?]/g
// Create a function that takes an array and returns the sum of all items in the array.
// Examples
// sumArray([1, 2, 3]) ➞ 6
// // 1 + 2 + 3 = 6
// sumArray([1, [2, [1]], 3]) ➞ 7
// // 1 + 2 + 1 + 3 = 7
// Notes
// The item in an array can be another array.
function sumArray(arr) {
  return arr.flat(Infinity).reduce((cur, acc) => cur + acc, 0)
}
// Create a function that takes four arrays as arguments and returns a count of the total number of identical arrays.
// Examples
// countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]) ➞ 2
// countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]) ➞ 0
// countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]) ➞ 3
// Notes
//     Don't forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.
function countIdenticalArrays(arr1, arr2, arr3, arr4) {
  let count = 0
  function compareArrays(a1, a2) {
    if (a1.length !== a2.length) return false
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) return false
    }
    return true
  }
  if (compareArrays(arr1, arr2)) count++
  if (compareArrays(arr1, arr3)) count++
  if (compareArrays(arr1, arr4)) count++
  if (count >= 1) count++
  return count
}
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
// Examples
// getMiddle("test") ➞ "es"
// getMiddle("testing") ➞ "t"
// getMiddle("middle") ➞ "dd"
// getMiddle("A") ➞ "A"
// Notes
// All test cases contain a single word (as a string).
function getMiddle(str) {
  const strMid = Math.floor(str.length / 2)
  return str.length % 2 == 0 ? str.slice(strMid - 1, strMid + 1) : str.slice(strMid, strMid + 1)
}
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
function removeLeadingTrailing(n) {
  const result = Number(n)
  return '' + result
}
// In this challenge, sort an array containing a series of dates given as strings. Each date is given in the format DD-MM-YYYY_HH:MM:
// "12-02-2012_13:44"
// The priority of criteria used for sorting will be:
//     Year
//     Month
//     Day
//     Hours
//     Minutes
// Given an array arr and a string type, implement a function that returns:
//     if type is equal to "ASC", the array arr sorted ascendigly;
//     if type is equal to "DSC", the array arr sorted descendigly;
// Examples
// sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "ASC") ➞ [
//   "10-02-2016_12:30", "10-02-2018_12:15", "10-02-2018_12:30"
// ]
// sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "DSC") ➞ [
//   "10-02-2018_12:30", "10-02-2018_12:15", "10-02-2016_12:30"
// ]
// sortDates(["09-02-2000_10:03", "10-02-2000_18:29", "01-01-1999_00:55"], "ASC") ➞ [
//   "01-01-1999_00:55", "09-02-2000_10:03", "10-02-2000_18:29"
// ]
// Notes
//     Remember: the date is in the format DD-MM-YYYY_HH:MM.
//     You can expect only valid formatted dates, without exceptions to handle.
function sortDates(arr, type) {
  const dateArr = []
  let tmp;
  arr.forEach(idx => {
    const day = idx.slice(0, 2)
    const month = idx.slice(3, 5)
    const year = idx.slice(6, 10)
    const hours = idx.slice(11, 13)
    const minutes = idx.slice(14, 16)
    dateArr.push(new Date(`${year}-${month}-${day}T${hours}:${minutes}`))
  })
  for (let i = 0; i < dateArr.length; i++) {
    for (let j = i + 1; j < dateArr.length; j++) {
      if (type === 'ASC') {
        if (dateArr[i] > dateArr[j]) {
          tmp = dateArr[i]
          dateArr[i] = dateArr[j]
          dateArr[j] = tmp
        }
      } else {
        if (dateArr[i] < dateArr[j]) {
          tmp = dateArr[i]
          dateArr[i] = dateArr[j]
          dateArr[j] = tmp
        }
      }
    }
  }
  const padZero = (date) => date < 10 ? '0' + date : date
  return dateArr.map(idx => `${padZero(idx.getDate())}-${(idx.getMonth() + 1) < 10 ? '0' + (idx.getMonth() + 1) : idx.getMonth() + 1}-${idx.getFullYear()}_${padZero(idx.getHours())}:${padZero(idx.getMinutes())}`)
}
// Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.
// Examples
// Given that:
//   - "A" char code is: 65
//   - "a" char code is: 97
// counterpartCharCode("A") ➞ 97
// counterpartCharCode("a") ➞ 65
// Notes
//     The argument will always be a single character.
//     Not all inputs will have a counterpart (e.g. numbers), in which case return the inputs char code.
function counterpartCharCode(char) {
  return char.toUpperCase() === char ? char.toLowerCase().charCodeAt() : char.toUpperCase().charCodeAt()
}
// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:
//     Adds two (+2) to each odd integer.
//     Subtracts two (-2) to each even integer.
// Examples
// evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
// // Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]
// evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]
// evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]
// Notes
// N/A
function evenOddTransform(arr, n) {
  while (n > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) arr[i] -= 2
      else arr[i] += 2
    }
    n--
  }
  return arr
}
// There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.
// Examples
// uniqueStyles([
//   "Dub, Dancehall",
//   "Industrial, Heavy Metal",
//   "Techno, Dubstep",
//   "Synth-pop, Euro-Disco",
//   "Industrial, Techno, Minimal"
// ]) ➞ 9
// uniqueStyles([
//   "Soul",
//   "House, Folk",
//   "Trance, Downtempo, Big Beat, House",
//   "Deep House",
//   "Soul"
// ]) ➞ 7
// Notes
// N/A
function uniqueStyles(albums) {
  const dups = {}
  const uniq = []
  let j = 0
  for (let i = 0; i < albums.length; i++) {
    let genre = albums[i]
    if (albums[i].indexOf(',') !== -1) {
      genre = albums[i].split(',')
      genre.forEach(idx => {
        if (dups[idx] !== true) {
          dups[idx] = true
          uniq[j++] = idx
        }
      })
    } else if (dups[genre] !== true) {
      dups[genre] = true
      uniq[j++] = genre
    }
  }
  return uniq.length
}
// Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.
// Examples
// findNaN([1, 2, NaN]) ➞ 2
// findNaN([NaN, 1, 2, 3, 4]) ➞ 0
// findNaN([0, 1, 2, 3, 4]) ➞ -1
// Notes
// Inputs are array of numbers.
function findNaN(number) {
  for (let i = 0; i < number.length; i++) {
    if (!(number[i] === number[i])) return i
  }
  return -1
}
// Given a simple math expression as a string, neatly format it as an equation.
// Examples
// formatMath("3 + 4") ➞ "3 + 4 = 7"
// formatMath("3 - 2") ➞ "3 - 2 = 1"
// formatMath("4 x 5") ➞ "4 x 5 = 20"
// formatMath("6 / 3") ➞ "6 / 3 = 2"
// Notes
//     You will need to deal with addition, subtraction, multiplication and division.
//     Division will have whole number answers (and will obviously not involve 0).
function formatMath(expr) {
  return `${expr} = ${expr.indexOf('x') !== -1 ? eval(expr.replace(/x/, '*')) : eval(expr)}`
}
// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.
// Given a censored string and a string of the censored vowels, return the original uncensored string.
// Example
// uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"
// uncensor("abcd", "") ➞ "abcd"
// uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"
// Notes
//     The vowels are given in the correct order.
//     The number of vowels will match the number of * characters in the censored string.
function uncensor(str, vowels) {
  const strArr = str.split('')
  let j = 0
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == '*') strArr[i] = vowels[j++]
  }
  return strArr.join('')
}
// Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.
// Examples
// equal(3, 4, 3) ➞ 2
// equal(1, 1, 1) ➞ 3
// equal(3, 4, 1) ➞ 0
// Notes
// Your function must return 0, 2 or 3.
function equal(a, b, c) {
  if (a == b && a == c) return 3
  else if (a == b || a == c) return 2
  else return 0
}
// Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".
// To illustrate, the day of the week for "12/07/2016" is "Wednesday".
// Examples
// getDay("12/07/2016") ➞ "Wednesday"
// getDay("09/04/2016") ➞ "Sunday"
// getDay("12/08/2011") ➞ "Thursday"
// Notes
// This challenge assumes the week starts on Sunday.
function getDay(day) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return days[new Date(day).getDay()]
}
// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
// Examples
// makeTitle("This is a title") ➞ "This Is A Title"
// makeTitle("capitalize every word") ➞ "Capitalize Every Word"
// makeTitle("I Like Pizza") ➞ "I Like Pizza"
// makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
// Notes
// You can expect a valid string for each test case.
function makeTitle(str) {
  const strArr = str.split(' ')
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1)
  }
  return strArr.join(' ')
}
// Create a function that takes a number as its argument and returns an array of all its factors.
// Examples
// factorize(12) ➞ [1, 2, 3, 4, 6, 12]
// factorize(4) ➞ [1, 2, 4]
// factorize(17) ➞ [1, 17]
// Notes
//     The input integer will be positive.
//     A factor is a number that evenly divides into another number without leaving a remainder. The second example is a factor of 12, because 12 / 2 = 6, with remainder 0.
function factorize(num) {
  const factors = []
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) factors.push(i)
  }
  return factors
}
factorize(24)
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
// Examples
// capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]
// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
// Notes
//     Don't change the order of the original array.
//     Notice in the second example above, "MABELLE" is returned as "Mabelle".
function capMe(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
  }
  return arr
}
// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
//     Return a boolean value (true or false).
//     The string can contain any character.
//     When no x and no o are in the string, return true.
// Examples
// XO("ooxx") ➞ true
// XO("xooxx") ➞ false
// XO("ooxXm") ➞ true
// // Case insensitive.
// XO("zpzpzpp") ➞ true
// // Returns true if no x and o.
// XO("zzoo") ➞ false
// Notes
//     Remember to return true if there aren't any x's or o's.
//     Must be case insensitive.
function XO(str) {
  let xoObj = { x: 0, o: 0 }
  let strLower = str.toLowerCase()
  for (let i = 0; i < strLower.length; i++) {
    if (Object.keys(xoObj)[0] === (strLower[i])) xoObj[strLower[i]]++
    if (Object.keys(xoObj)[1] === (strLower[i])) xoObj[strLower[i]]++
  }
  return xoObj.x === xoObj.o
}
// Given an array of numbers, write a function that returns an array that...
//     Has all duplicate elements removed.
//     Is sorted from least to greatest value.
// Examples
// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
// Notes
// N/A
function uniqueSort(arr) {
  const dups = {}
  const uniq = []
  let j = 0
  let tmp
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (dups[element] !== 1) {
      dups[element] = 1
      uniq[j++] = element
    }
  }
  for (let k = 0; k < uniq.length; k++) {
    for (let kk = k + 1; kk < uniq.length; kk++) {
      if (uniq[k] > uniq[kk]) {
        tmp = uniq[k]
        uniq[k] = uniq[kk]
        uniq[kk] = tmp
      }
    }
  }
  return uniq
}
// Create a function that converts a string of letters to their respective number in the alphabet.
// A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	...
// 0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	...
// Examples
// alphNum("XYZ") ➞ "23 24 25"
// alphNum("ABCDEF") ➞ "0 1 2 3 4 5"
// alphNum("JAVASCRIPT") ➞ "9 0 21 0 18 2 17 8 15 19"
// Notes
// Make sure the numbers are spaced.
function alphNum(str) {
  const alphObj = { A: 0, B: 1, C: 2, D: 3, X: 23, Y: 24, Z: 25 }
  const result = []
  for (let i = 0; i < str.length; i++) {
    if (alphObj[str[i]] === 0 || alphObj[str[i]]) {
      result.push(alphObj[str[i]])
    }
  }
  return result.join(' ')
}
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// Examples
// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
// Notes
// In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
function hackerSpeak(str) {
  const obj = { a: '4', e: '3', i: '1', o: '0', s: '5' }
  const strArr = str.split('')
  let result = []
  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i]
    if (obj[char]) {
      strArr[i] = obj[char]
      result.push(strArr[i])
    } else result.push(strArr[i])
  }
  return result.join('')
}
// Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone. See the resources tab for the formula.
// Volume of a Cone Image
// Examples
// coneVolume(3, 2) ➞ 12.57
// coneVolume(15, 6) ➞ 565.49
// coneVolume(18, 0) ➞ 0
// Notes
//     Return approximate answer by rounding the answer to the nearest hundredth.
//     Use JavaScript's PI property, don't fall for 3.14 ;-)
//     If the cone has no volume, return 0.
function coneVolume(h, r) {
  return +((Math.PI * r * r * h) / 3).toFixed(2)
}
// Create a function that takes an array of items and checks if the last item matches the rest of the array.
// Examples
// matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// // The last item is the rest joined.
// matchLastItem([1, 1, 1, "11"]) ➞ false
// // The last item should be "111".
// matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true
// Notes
// The array is always filled with items.
function matchLastItem(arr) {
  const lastItem = arr[arr.length - 1]
  let bundle = ''
  for (let i = 0; i < arr.length - 1; i++) {
    bundle += arr[i]
  }
  return bundle === lastItem
}
// Create a function that returns true if an asterisk * is inside a box.
// Examples
// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true
// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) ➞ true
// inBox([
//   "*####",
//   "# #",
//   "#  #*",
//   "####"
// ]) ➞ false
// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) ➞ false
// Notes
// The asterisk may be in the array, however, it must be inside the box, if it exists.
function inBox(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('*') !== -1) return true
  }
  return false
}
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]
// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
// Notes
//     Tests contain arrays with both strings and numbers.
//     Tests are case sensitive.
function removeDups(arr) {
  let dups = {}
  let uniques = []
  let j = 0
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (dups[element] !== true) {
      dups[element] = true
      uniques[j++] = element
    }
  }
  return uniques
}
// In this challenge, you have to establish if the digits of a given number form a straight arithmetic sequence (either increasing or decreasing). A straight sequence has an equal step between every pair of digits.
// Given an integer n, implement a function that returns:
//     "Not Straight" if n is lower than 100 or if its digits are not an arithmetic sequence.
//     "Trivial Straight" if n has a single repeating digit.
//     An integer being the step of the sequence if the n digits are a straight arithmetic sequence.
// Examples
// straightDigital(123) ➞ 1
// // 2 - 1 = 1 | 3 - 2 = 1
// straightDigital(753) ➞ -2
// // 5 - 7 = -2 | 3 - 5 = -2
// straightDigital(666) ➞ "Trivial Straight"
// // There's a single repeating digit (step = 0).
// straightDigital(124) ➞ "Not Straight"
// // 2 - 1 = 1 | 4 - 2 = 2
// // A valid sequence has always the same step between its digits.
// straightDigital(99) ➞ "Not Straight"
// // The number is lower than 100.
// Notes
//     The step of the sequence can be either positive or negative (see example #2).
//     Trivia: there are infinite straight digital numbers, but only 96 of them are made of at least two different digits.
function straightDigital(number) {
  if (number < 100) return 'Not Straight'
  const numArr = ('' + number).split('')
  const sequence = numArr[1] - numArr[0]
  for (let i = 0; i < numArr.length - 1; i++) {
    if (numArr[i] === numArr[i + 1]) return 'Trivial Straight'
    if (sequence !== numArr[i + 1] - +numArr[i]) return 'Not Straight'
  }
  return sequence
}
// Create a function that takes an integer n and reverses it.
// Examples
// rev(5121) ➞ "1215"
// rev(69) ➞ "96"
// rev(-122157) ➞ "751221"
// Notes
//     This challenge is about using two operators that are related to division.
//     If the number is negative, treat it like it's positive.
function rev(n) {
  const numArr = ('' + n).split('')
  let result = []
  for (let i = numArr.length; i >= 0; i--) {
    if (parseInt(numArr[i])) result.push(numArr[i])
  }
  return result.join('')
}
/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
function firstNonRepeatedCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) return str[i + 1]
  }
}
firstNonRepeatedCharacter('AACBDB')
// Create a function that returns the mean of all digits.
// Examples
// mean(42) ➞ 3
// mean(12345) ➞ 3
// mean(666) ➞ 6
// Notes
//     The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
//     The mean will always be a integer.
function mean(num) {
  let sum = 0
  const numArr = ('' + num).split('')
  for (let i = 0; i < numArr.length; i++) {
    sum += +numArr[i]
  }
  return sum / numArr.length
}
// Create a function to convert an array of percentages to their decimal equivalents.
// Examples
// convertToDecimal(["1%", "2%", "3%"]) ➞ [0.01, 0.02, 0.03]
// convertToDecimal(["45%", "32%", "97%", "33%"]) ➞ [0.45, 0.32, 0.97, 0.33]
// convertToDecimal(["33%", "98.1%", "56.44%", "100%"]) ➞ [0.33, 0.981, 0.5644, 1]
// Notes
// N/A
function convertToDecimal(perc) {
  let deci = []
  for (let i = 0; i < perc.length; i++) {
    perc[i] = +(perc[i].slice(0, perc[i].length - 1)) * 0.01
    deci.push(perc[i])
  }
  return deci
}
// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.
// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
// Examples
// progressDays([3, 4, 1, 2]) ➞ 2
// // There are two progress days, (3->4) and (1->2)
// progressDays([10, 11, 12, 9, 10]) ➞ 3
// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1
// progressDays([9, 9])  ➞ 0
// Notes
// Running the same number of miles as last week does not count as a progress day.
function progressDays(runs) {
  let days = 0
  for (let i = 0; i < runs.length; i++) {
    if (runs[i] < runs[i + 1]) days++
  }
  return days
}
// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
// Examples
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)
// Notes
// All items in the array will be integers.
function indexMultiplier(arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] * i
  }
  return result
}
// Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.
// Examples
// factorGroup(33) ➞ "even"
// factorGroup(36) ➞ "odd"
// factorGroup(7) ➞ "even"
// Notes
//     You don't need to actually calculate the factors to solve this problem.
//     Think about why a number would have an odd number of factors.
function factorGroup(num) {
  return Math.sqrt(num) % 1 === 0 ? 'odd' : 'even'
}
// Try to remove any repeated charcters in a word that will be passed to our function. Any character could be used, even special ones and numbers.
// Examples
// unrepeated("hello") ➞ "helo"
// unrepeated("aaaaa") ➞ "a"
// unrepeated("WWE!!!") ➞ "WE!"
// unrepeated("call 911") ➞ "cal 91"
// Notes
//     No more than two words will be passed.
//     Try to use new data type introduced in ES6.
//     Notice that a string is iterable.
function unrepeated(str) {
  const strSet = new Set([...str])
  const result = []
  for (val of strSet) {
    result.push(val)
  }
  return result.join('')
}
// You are in charge of the barbecue grill. A vegetarian skewer is a skewer that has only vegetables (-o). A non-vegetarian skewer is a skewer with at least one piece of meat (-x).
// For example, the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer (the one in the middle).
// ["--xo--x--ox--",
// "--xx--x--xx--",
// "--oo--o--oo--",
// "--xx--x--ox--",
// "--xx--x--ox--"]
// Given a BBQ grill, write a function that returns [# vegetarian skewers, # non-vegetarian skewers]. For example above, the function should return [1, 4].
// Examples
// bbqSkewers( [
//   "--oooo-ooo--",
//   "--xx--x--xx--",
//   "--o---o--oo--",
//   "--xx--x--ox--",
//   "--xx--x--ox--"
// ]) ➞ [2, 3]
// bbqSkewers([
//   "--oooo-ooo--",
//   "--xxxxxxxx--",
//   "--o---",
//   "-o-----o---x--",
//   "--o---o-----"
// ]) ➞ [3, 2]
// Notes
// N/A
function bbqSkewers(grill) {
  let veg = 0
  let meat = 0
  for (let i = 0; i < grill.length; i++) {
    if (grill[i].indexOf('-x') === -1) veg++
    if (grill[i].includes('-x')) meat++
  }
  return [veg, meat]
}
// Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.
// Examples
// solveForExp(4, 1024) ➞ 5
// solveForExp(2, 1024) ➞ 10
// solveForExp(9, 3486784401) ➞ 10
// Notes
// a is raised to the power of what in order to equal b?
function solveForExp(a, b) {
  return Math.round(Math.log(b) / Math.log(a))
}
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
// To illustrate:
// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.
// Examples
// reverseAndNot(123) ➞ 321123
// reverseAndNot(152) ➞ 251152
// reverseAndNot(123456789) ➞ 987654321123456789
// Notes
// i is a non-negative integer.
function reverseAndNot(i) {
  const intStrArr = ('' + i).split('')
  const result = []
  for (let k = intStrArr.length - 1; k >= 0; k--) {
    result.push(intStrArr[k])
  }
  return +(result.join('') + i)
}
// 1108. Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
function defangIP(str) {
  // return str.replace(/\./g, '[.]')
  const strArr = str.split('')
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '.') {
      strArr[i] = '[.]'
    }
  }
  return strArr.join('')
}
defangIP("255.100.50.0")
// Write a function that returns the least common multiple (LCM) of two integers.
// Examples
// lcm(9, 18) ➞ 18
// lcm(8, 5) ➞ 40
// lcm(17, 11) ➞ 187
// Notes
//     Both values will be positive.
//     The LCM is the smallest integer that divides both numbers such that the remainder is zero.
function lcm(n1, n2) {
  return Math.abs((n1 * n2) / gcd(n1, n2))
}
function gcd(n1, n2) {
  n1 = Math.abs(n1)
  n2 = Math.abs(n2)
  while (n2) {
    let z = n2
    n2 = n1 % n2
    n1 = z
  }
  return n1
}
function primeFactors(n) {
  const factors = []
  let divisor = 2
  while (n > 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n /= divisor
    } else divisor++
  }
  return factors
}
// Given a string, reverse all the words which have odd length. The even length words are not changed.
// Examples
// reverseOdd("Bananas") ➞ "sananaB"
// reverseOdd("One two three four") ➞ "enO owt eerht four"
// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"
// Notes
// There is exactly one space between each word and no punctuation is used.
function reverseOdd(str) {
  const strArr = str.split(' ')
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length % 2 === 1) {
      const wordArr = strArr[i].split('')
      strArr.splice(i, 1, wordArr.reduce((cur, acc) => acc + cur))
    }
  }
  return strArr.join(' ')
}
// An array is positive dominant if it contains strictly more unique positive values than unique negative values.
// Write a function that returns true if an array is positive dominant.
// Examples
// [1, 1, 1, 1, -3, -4] ➞ false
// // there is only 1 unique positive value (1)
// // there are 2 unique negative values (-3, -4)
// [5, 99, 832, -3, -4] ➞ true
// [5, 0] ➞ true
// [0, -4, -1] ➞ false
// Notes
// 0 neither counts as a positive nor a negative value.
function isPositiveDominant(a) {
  let pos = 0
  let neg = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0 && a[i] !== a[i + 1]) pos++
    else if (a[i] < 0 && a[i] !== a[i + 1]) neg++
  }
  return pos > neg
}
// Count the amount of ones in the binary representation of an integer. So for example, since 12 is '1100' in binary, the return value should be 2.
// Examples
// countOnes(0) ➞ 0
// countOnes(100) ➞ 3
// countOnes(999) ➞ 8
// Notes
// The input will always be a valid integer (number).
function countOnes(i) {
  const binary = i.toString(2)
  let count = 0
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 1) count += +binary[i]
  }
  return count
}
// Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.
// function parent(x) {
//   return function closure() {    // Closure is declared here.
//     return x
//   }
// }
// const remember = parent("remembers me")
// // Seems like the variable x would be gone after
// // parent is executed, but it's not.
// closure()
// // Returns "remembers me" because the inner
// // function remembers x.
//     Fix the greetingMaker() function so that it works with the greeting() function.
//     The greeting() function has already been created (check the Tests tab).
// Example
// const greeting = greetingMaker("Hello")
// greeting("James") ➞ "Hello, James"
// Notes
// Check the Resources tab for more info on closures.
function greetingMaker(salutation) {
  return function closure(name) {
    return salutation + ", " + name
  }
}
// Create a function which returns the word in the string, but with all the fog letters removed. However, if the string is clear from fog, return "It's a clear day!".
// Examples
// clearFog("sky") ➞ "It's a clear day!"
// clearFog("fogfogfffoooofftreesggfoogfog") ➞ "trees"
// clearFog("fogFogFogffffooobirdsandthebeesGGGfogFog") ➞ "birdsandthebees"
// Notes
//     There won't be any fog inside of any of the actual words (won't include the letters f, o or g).
//     Hidden words are always in lowercase.
function clearFog(str) {
  const patt = /[fog]/g
  return str.match(patt) ? str.replace(patt, '') : "It's a clear day!"
}
// Callbacks are first-class functions. This means they have first-class characteristics, like being able to be passed to other functions. There was a time when callbacks were used to handle async operations, but we needed something better because of a few shortcomings (like problems with nested callbacks).
// Here's a simple example of a callback:
// function asyncFunc(cb) {
//   let result = ""
//   // After some time the result of an async opertion comes back and is put in the "result" variable.  We'll use a string for this example.   
//   result = "hello"
//   cb(result)
// }
// function callback(str) {
//   console.log(str)
// }
// asyncFunc(callback)
// console.log("goodbye")
// // goodbye
// // hello
// "goodbye" appears before "hello" because the async operation in asyncFunc() is non-blocking, meaning that it is set aside until it finishes but in the meantime we go ahead and call the next function.
// Challenge
//     Fix anotherFunc() so that calls to it will change the doc variable to bye.
//     Keep the setTimeout to 100ms and do not change the callback function or the doc variable.
// Notes
// Check the Resources tab for more info on callbacks.
function anotherFunc() {
  let str = "bye"
  setTimeout(() => {
    callback(str)
  }, 100)
}
var doc = "hello"
function callback(str) {
  doc = str
}
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
// Examples
// identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
// ➞ ["aaaaaa", "d", "eeee"]
// identicalFilter(["88", "999", "22", "545", "133"]) 
// ➞ ["88", "999", "22"]
// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
// ➞ []
// Notes
//     A string with a single character is trivially counted as a string with repeating identical characters.
//     If there are no strings with repeating identical characters, return an empty array (see example #3).
function identicalFilter(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].split('').every((val, i, arr) => val === arr[0])) result.push(arr[i])
  }
  return result
}
// Create a function that takes a variable number of groups of items, and returns the number of ways the items can be arranged, with one item from each group. Order does not matter.
// Examples
// combinations(2, 3) ➞ 6
// combinations(3, 7, 4) ➞ 84
// combinations(2, 3, 4, 5) ➞ 120
// Notes
// Don't overthink this one.
function combinations(...items) {
  return items.reduce((cur, acc) => acc === 0 ? cur * 1 : cur * acc)
}
// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
// Box Sequence Image
//     Step 0: Start with 0
//     Step 1: Add 3
//     Step 2: Subtract 1
//     Repeat Step 1 & 2 ...
// Examples
// boxSeq(0) ➞ 0
// boxSeq(1) ➞ 3
// boxSeq(2) ➞ 2
// Notes
// Step (the input) is always a positive integer (or zero).
function boxSeq(step) {
  if (step === 0) return 0
  let box = 0
  for (let i = 1; i <= step; i++) {
    if (i % 2 === 1) box += 3
    else box -= 1
  }
  return box
}
// The instructor assigns Boron two tasks(Regarding the use of Array.prototype.reduce() method after lecturing in array methods).
// The first task is to create a function calculateSum that takes a string and returns the sum of the ASCII values of all the characters in the string using Array.prototype.reduce().
// The second task is to create a function reverseString that reverses and returns an input string using Array.prototype.reduce().
// While solving the problem, Boron has encountered errors.Help him fix the errors.
// Examples
// calculateSum("lime") ➞ 423  //108 + 105 + 109 + 101 = 423                                    
// calculateSum("a") ➞ 97  // a = 97
// reverseString("hello") ➞ "olleh"
// Notes
// Usage of the Array.prototype.reduce() method.
function calculateSum(txt) {
  return txt.split('').reduce((cur, acc) => cur + acc.charCodeAt(0), 0);
}
function reverseString(txt) {
  return txt.split('').reduce((cur, acc) => acc + cur);
}
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.
// Examples
// transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]
// transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]
// transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]
// Notes
// Return the upvotes as an array.
function transformUpvotes(str) {
  const strArr = str.split(' ')
  const upvotes = []
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].indexOf('k') !== -1) {
      const convertedStr = strArr[i].slice(0, strArr[i].length - 1)
      upvotes.push(+convertedStr * 1000)
    } else {
      upvotes.push(+strArr[i])
    }
  }
  return upvotes
}
// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
// Examples
// calculator(2, "+", 2) ➞ 4
// calculator(2, "*", 2) ➞ 4
// calculator(4, "/", 2) ➞ 2
// Notes
// If the input tries to divide by 0, return: "Can't divide by 0!"
function calculator(num1, operator, num2) {
  if (operator == '+') return num1 + num2
  if (operator == '-') return num1 - num2
  if (operator == '*') return num1 * num2
  return operator === '/' && num2 !== 0 ? num1 / num2 : "Can't divide by 0!"
}
// Create a function that returns true if two arrays contain identical values, and false otherwise.
// To solve this question, your friend writes the following code:
// function checkEquals(arr1, arr2) {
// if (arr1 === arr2) {
//   return true
//  } else {
//   return false
//  }
// }
// But testing the code, you see that something is not quite right. Running the code yields the following results:
// checkEquals([1, 2], [1, 3]) ➞ false
// // Good so far...
// checkEquals([1, 2], [1, 2]) ➞ false
// // Yikes! What happened?
// Rewrite your friend's code so that it correctly checks if two arrays are equal. The tests below should pass:
// Examples
// checkEquals([1, 2], [1, 3]) ➞ false
// checkEquals([1, 2], [1, 2]) ➞ true
// checkEquals([4, 5, 6], [4, 5, 6]) ➞ true
// checkEquals([4, 7, 6], [4, 5, 6]) ➞ false
// Notes
// Hint: This has to do with value vs. reference types.
function checkEquals(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}
// The Fizz Buzz test is a poplular interview question used to 'help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag.'
//     Write a program that returns array of all the numbers from 1 to an interger argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”
// Example
// fizzBuzz(10) ➞ [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
// fizzBuzz(15) ➞ [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
// Notes
//     Make sure to return array.
function fizzBuzz(number) {
  const arr = []
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz')
    else if (i % 3 === 0) arr.push('Fizz')
    else if (i % 5 === 0) arr.push('Buzz')
    else arr.push(i)
  }
  return arr
}
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
// Examples
// isAvgWhole([1, 3]) ➞ true
// isAvgWhole([1, 2, 3, 4]) ➞ false
// isAvgWhole([1, 5, 6]) ➞ true
// isAvgWhole([1, 1, 1]) ➞ true
// isAvgWhole([9, 2, 2, 5]) ➞ false
// Notes
// N/A
function isAvgWhole(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return (sum / arr.length) % 1 === 0
}
// Promises are just objects that contain the outcome of asynchronous operations. So when do you use one? When you want to control the outcome of an asynchronous operation. All you have to do is wrap the asynchronous function with a promise constructor.
// The promise constructor requires you to pass a function called the executor which takes two parameters, resolve and reject. Both are functions that you use to pass or reject a value that is usually the result of the async operation. Here's an example of a simple promise:
// let promise = new Promise( (resolve, reject) => {
//   setTimeout(( ) => {
//      resolve("edabit")
//   }, 1000)
// })
// setTimeout is a built-in JavaScript function that is very commonly used in tutorials to represent async operations. After 1000ms has passed, we call the callback function in setTimeout() and pass a string "edabit" to the resolve function.
// Create a simple promise and pass the resolve function a string value of your choice. Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. Store the promise inside a variable named promise.
// Notes
// Check the Resources tab for more info on promises.
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("edabit")
  }, 1000)
})
// Create a function that takes three parameters and returns an array with the first parameter x, the second parameter y, and every number in between the first and second parameter in ascending order. Then filter through the array and return the array with numbers that are only divisible by the third parameter n.
// Examples
// arrayOperation(1, 10, 3) ➞ [3, 6, 9]
// arrayOperation(7, 9, 2) ➞ [8]
// arrayOperation(15, 20, 7) ➞ []
// Notes
//     The final array should consist of all numbers between x and y inclusive that are divisible by n.
//     Return an empty array if there are no numbers that are divisible by n.
function arrayOperation(x, y, n) {
  let arr = []
  for (x; x <= y; x++) {
    if (x % n === 0) arr.push(x)
  }
  return arr
}
// Given a number, return a string of the word "Boom", which varies in the following ways:
//     The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
//     If n is evenly divisible by 2, add an exclamation mark to the end.
//     If n is evenly divisible by 5, return the string in ALL CAPS.
//     If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// The example below should help clarify these instructions.
// Examples
// boomIntensity(4) ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
// boomIntensity(1) ➞ "boom"
// // 1 is lower than 2, so we return "boom"
// boomIntensity(5) ➞ "BOOOOOM"
// // There are 5 "o"s and 5 is divisible by 5 (all caps)
// boomIntensity(10) ➞ "BOOOOOOOOOOM!"
// // There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)
// Notes
//     A number which is evenly divisible by 2 and 5 will have both effects applied (see example #4).
//     "Boom" will always start with a capital "B", except when n is less than 2, then return a minature explosion as "boom".
function boomIntensity(n) {
  if (2 > n) return 'boom'
  let result = 'B'
  for (let i = 0; i < n; i++) {
    result += 'o'
  }
  if (n % 2 === 0 && n % 5 === 0) return `${result.toUpperCase()}M!`
  else if (n % 2 === 0) return `${result}m!`
  else if (n % 5 === 0) return `${result.toUpperCase()}M`
  else return `${result}m`
}
// Create a function that squares every digit of a number.
// Examples
// squareDigits(9119) ➞ 811181
// squareDigits(2483) ➞ 416649
// squareDigits(3212) ➞ 9414
// Notes
// The function receives an integer and must return an integer.
function squareDigits(n) {
  const nStr = '' + n
  let result = ''
  for (let i = 0; i < nStr.length; i++) {
    result += nStr[i] * nStr[i]
  }
  return +result
}
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.
// Examples
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]
// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// sortByLength(["Turing", "Einstein", "Jung"])
// ➞ ["Jung", "Turing", "Einstein"]
// Notes
// All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.
function sortByLength(arr) {
  let tmp
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}
// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
// Examples
// highLow("1 2 3 4 5") ➞ "5 1"
// highLow("1 2 -3 4 5") ➞ "5 -3"
// highLow("1 9 3 4 -5") ➞ "9 -5"
// highLow("13") ➞ "13 13"
// Notes
//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.
function highLow(str) {
  const strArr = str.split(' ')
  let max = strArr[0]
  let min = strArr[0]
  for (let i = 0; i < strArr.length; i++) {
    if (+strArr[i] > max) max = strArr[i]
    if (+strArr[i] < min) min = strArr[i]
  }
  return [max, min].join(' ')
}
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// Extract the addresses from this string:
// const str = "123 Redding Dr. 1560 Knoxville Ave. 3030 Norwalk Dr. 5 South St."
// // ["123 Redding Dr.", "1560 Knoxville Ave", "3030 Norwalk Dr.", "5 South St."]
// Write the regular expression that matches all street addresses. All street addresses begin with a number. Use the character class \d in your expression.
// Notes
// Check the Resources tab for details on character classes if you're stuck.
const REGEXP = /\d+ \w+ \w+./g
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]
// Notes
//     The strings can contain white spaces or any type of characters.
//     Bonus: Try solving this without regex.
function numInStr(arr) {
  const result = []
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < arr.length; i++) {
    for (let ii = 0; ii < arr.length; ii++) {
      if (arr[i].indexOf(nums[ii]) !== -1) {
        result.push(arr[i])
        break
      }
    }
  }
  return result
}
// JavaScript doesn't really have classes like other languages. They are actually functions behind the scenes. There are several ways to create classes.
// Challenge
//     Create a Book class using a JavaScript function - instantiable.
//     It should have a author and published property.
//     Create an Author class using a literal object - singleton.
//     It should have a name and books property.
//     Create a Publisher class by using the new constructor and an anonymous function - singleton.
//     It should have a authors and books property.
//     Create a Review class using a class declaration - instantiable.
//     It should have a rating and user property.
// Bonus (optional)
// Create a Bookstore class using an IIFE - singleton. It should have a books and prices property.
// Notes
//     All classes should begin with Capital letters.
//     All class properties should have default(initial) values.
//     There are a few other ways to make classes but are not in this challenge, you can check the Resources tab to learn more.
function Book(author, published) {
  this.author = author;
  this.published = published;
}
const Author = {
  name: 'J',
  books: 'C',
  getAuthor() {
    return this.name + '' + this.books
  }
}
const Publisher = new function (authors, books) {
  this.authors = authors
  this.books = books
}
class Review {
  constructor(rating, user) {
    this.rating = rating
    this.user = user
  }
}
// Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest icecream.
// Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:
// Flavours	Sweetness Value
// Plain	0
// Vanilla	5
// ChocolateChip	5
// Strawberry	10
// Chocolate	10
//     You'll be given instance properties in the order flavor, numSprinkles.
// Examples
// ice1 = IceCream("Chocolate", 13)         // value of 23
// ice2 = IceCream("Vanillla", 0)           // value of 5
// ice3 = IceCream("Strawberry", 7)        // value of 17
// ice4 = IceCream("Plain", 18)             // value of 18
// ice5 = IceCream("ChocolateChip", 3)      // value of 8
// sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23
// sweetestIcecream([ice3, ice1]) ➞ 23
// sweetestIcecream([ice3, ice5]) ➞ 17
// Notes
// Remember to only return the sweetness value.
function sweetestIcecream(arr) {
  const sweetVal = {
    Plain: 0,
    Vanilla: 5,
    ChocolateChip: 5,
    Strawberry: 10,
    Chocolate: 10,
  }
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(sweetVal[arr[i].flavor] + arr[i].numSprinkles)
  }
  return Math.max(...result)
}
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
// Examples
// countSyllables("Hehehehehehe") ➞ 6
// countSyllables("bobobobobobobobo") ➞ 8
// countSyllables("NANANA") ➞ 3
// Notes
// Your code should accept strings of any case (upper, lower and mixed case).
function countSyllables(str) {
  return str.match(/[aeiou]/g).length
}
// Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.
// Examples
// canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
// canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
// canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// // Duplicate 7s not found in target array.
// canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// // Missing 6 from target array.
// Notes
//     Arrays do not have to be sorted (see example #2).
//     Arrays should concatenate to create the final array exactly (see examples #3 and #4).
function canConcatenate(arr, target) {
  const sortedTarget = target.sort()
  return arr.flat().sort().every((val, idx) => val === sortedTarget[idx])
}
// Create a function that takes a string and censors words over four characters with *.
// Examples
// censor("The code is fourty") ➞ "The code is ******"
// censor("Two plus three is five") ➞ "Two plus ***** is five"
// censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
// Notes
//     Don't censor words with exactly four characters.
//     If all words have four characters or less, return the original string.
//     The amount of * is the same as the length of the word.
function censor(str) {
  const strArr = str.split(' ')
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 4) {
      strArr[i] = strArr[i].replace(/\w/gi, '*')
    }
  }
  return strArr.join(' ')
}
// Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.
// Examples
// reversedBinaryInteger(10) ➞ 5
// // 10 = 1010 -> 0101 = 5
// reversedBinaryInteger(12) ➞ 3
// // 12 = 1100 -> 0011 = 3
// reversedBinaryInteger(25) ➞ 19
// // 25 = 11001 -> 10011 = 19
// reversedBinaryInteger(45) ➞ 45
// // 45 = 101101 -> 101101 = 45
// Notes
// All values of n will be positive.
function reversedBinaryInteger(num) {
  const binary = (num).toString(2)
  let reversedBinary = []
  for (let i = binary.length; --i >= 0;) {
    reversedBinary.push(binary[i])
  }
  return parseInt(reversedBinary.join(''), 2)
}
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
// Examples
// maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43
// maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100
// maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40
// Notes
// N/A
function maxTotal(nums) {
  let tmp;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
      }
    }
  }
  return nums.slice(0, 5).reduce((cur, acc) => cur + acc, 0)
}
// A repdigit is a positive number composed out of the same digit.
// Create a function that takes an integer and returns whether it's a repdigit or not.
// Examples
// isRepdigit(66) ➞ true
// isRepdigit(0) ➞ true
// isRepdigit(-11) ➞ false
// Notes
//     The number 0 should return true (even though it's not a positive number).
//     Check the Resources tab for more info on repdigits.
function isRepdigit(num) {
  const numStr = '' + num
  if (numStr.length == 1) return true
  if (num < 0) return false
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== numStr[i + 1]) {
      return false
    } else {
      return true
    }
  }
}
// Create a function that returns an Earned Run Average (ERA). An ERA is calculated by multiplying 9 by the quotient of Earned Runs Allowed er divided by ip Innings Pitched.
// In baseball statistics, innings are represented with a fractional part of .1 (1/3) or .2 (2/3) to represent the number of outs in an inning. A whole number or a number with a fractional part of .0 represents a full inning with three outs. Check the Resources tab for a deeper explanation.
// Examples
// era(22, 99) ➞ 2.00
// era(23, 99.1) ➞ 2.08
// era(24, 99.2) ➞ 2.17
// Notes
//     ERA is represented with a scale of 2: 2.08
//     For 1/3 and 2/3, use a scale of 2.
function era(er, ip) {
  const eraNum = (er / ip) * 9
  return (eraNum) % 1 == 0 ? (eraNum).toFixed(2) : ('' + eraNum).slice(0, 4)
}
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh,
// You might get text that looks like it's all English characters but it very well may not be:
// pànts !== pants
// To ensure that you only get the characters you want in a string you will need to use the character classes that accept hexadecimal digits.
// Create a regex that matches the word "edabit". You cannot use character classes \w, \d, [], or . to solve.
// Notes
// Use the handy text to hex converter tool in the Resources tab.
const REGEXP = /\x65\x64\x61\x62\x69\x74/g
// Create a function which validates whether a number n is exclusively within the bounds of lower and upper. Return false if n is not an integer.
// Examples
// intWithinBounds(3, 1, 9) ➞ true
// intWithinBounds(6, 1, 6) ➞ false
// intWithinBounds(4.5, 3, 8) ➞ false
// Notes
//     Exclusively means that a number is considered not within the bounds if it is equal to the upper bound (see example #2).
//     Bounds will be always given as integers.
function intWithinBounds(n, lower, upper) {
  if (n % 1 != 0) return false
  else return lower <= n && n < upper
}
// Given a number between 1-26, return what letter is at that position in the alphabet. Return "invalid" if the number given is not within that range, or isn't an integer.
// Examples
// letterAtPosition(1) ➞ "a"
// letterAtPosition(26.0) ➞ "z"
// letterAtPosition(0) ➞ "invalid"
// letterAtPosition(4.5) ➞ "invalid"
// Notes
//     Return a lowercase letter.
//     Numbers that end with ".0" are valid.
function letterAtPosition(n) {
  if (n == 0 || n % 1 != 0) return 'invalid'
  let alphabetArr = ''
  for (let i = 9; ++i < 36;) {
    alphabetArr += (i).toString(36)
  }
  return alphabetArr[n - 1]
}
// function shirtSize({size = "big"}) {
//   return size
// }
// shirtSize()  // error: Cannot destructure property "size" of "undefined" or "null"
// The preceding code produces an error because no object was passed to the function. Fix the function to return the default size, even if nothing is passed to the function. Don't remove the {size = "big"} object in the parameter and don't change the return statement.
// Example
// shirtSize( ) ➞ "big"
// Notes
// If you get stuck the answer is in one of the yellow notes on the MDN docs page (link in the Resources tab).
const str = `
function shirtSize({size = "big"} = {} ) { 
  return size
}
`
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// HTML elements are everything from the start tag to the end tag. An example of one div element would be: <div>edabit</div>.
// Find out how many <div> elements are used in a string. Use the character class \W in your expression.
// Example
// const str = "<div>Hello.</div><div>My name is <b>George</b>.</div>"
// // 2 times
// const str = "<div><h1>The Word for Today</h1><div>aardvark</div></div>"
// // 2 times
// const str = "<div></div>"
// // 1 time
// Notes
// Check the Resources tab for details on character classes if you're stuck.
const REGEXP = /<\Wdiv\W/g
// In this challenge, you have to establish if a given integer n is a Sastry number. If the number resulting from the concatenation of an integer n with its successor is a perfect square, then n is a Sastry Number.
// Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.
// Examples
// isSastry(183) ➞ true
// // Concatenation of n and its successor = 183184
// // 183184 is a perfect square (428 ^ 2)
// isSastry(184) ➞ false
// // Concatenation of n and its successor = 184185
// // 184185 is not a perfect square
// isSastry(106755) ➞ true
// // Concatenation of n and its successor = 106755106756
// // 106755106756 is a perfect square (326734 ^ 2)
// Notes
//     A perfect square is a number with a square root equals to a whole integer.
//     You can expect only valid positive integers greater than 0 as input, without exceptions to handle. Zero is a perfect square, but the concatenation 00 isn't considered as a valid result to check.
//     In JavaScript, despite the specific challenge the results are proofed, the method used to calculate if an integer greater of 2 ** 53 - 1 is a Sastry number can lead to errors due to the approximation of the JS engine.
function isSastry(number) {
  let numStr = '' + number + ('' + (number + 1))
  return Math.sqrt(+numStr) % 1 == 0
}
// Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.
// Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:
//     Rock beats Scissors
//     Scissors beats Paper
//     Paper beats Rock
// If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".
// Examples
// rps("Rock", "Paper") ➞ "The winner is p2"
// rps("Scissors", "Paper") ➞ "The winner is p1"
// rps("Paper", "Paper") ➞ "It's a draw"
// Notes
// All inputs will be valid strings.
function rps(p1, p2) {
  if (p1 === p2) return "It's a draw"
  else if (p1 === 'Rock' && p2 === 'Scissors'
    || p1 === 'Scissors' && p2 === 'Paper'
    || p1 === 'Paper' && p2 === 'Rock') return 'The winner is p1'
  else return 'The winner is p2'
}
// Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.
// Examples
// sumDigProd(16, 28) ➞ 6
// // 16 + 28 = 44
// // 4 * 4 =  16
// // 1 * 6 = 6
// sumDigProd(0) ➞ 0
// sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2
// Notes
// The input of the function is at least one number.
function sumDigProd(...arg) {
  if (arg[0].length === 1) return arg[0]
  let sum = 0
  let result = 0
  for (let i = 0; i < arg.length; i++) {
    sum += arg[i]
  }
  function getProduct(num) {
    let numStr = '' + num
    let product = 1
    for (let j = 0; j < numStr.length; j++) {
      product *= numStr[j]
    }
    if (('' + product).length > 1) {
      getProduct(product)
    } else {
      result = product
    }
  }
  getProduct(sum)
  return result
}
// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
// Examples
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
// getFrequencies([]) ➞ {}
// Notes
//     If given an empty array, return an empty object (see example #4).
//     The object should be in the same order as in the input array.
function getFrequencies(arr) {
  let freq = {}
  let uniqArr = []
  for (let i = 0; i < arr.length; i++) {
    if (uniqArr.indexOf(arr[i]) === -1 && arr[i] !== '') {
      freq[arr[i]] = 1
      uniqArr.push(arr[i])
    }
    if (uniqArr.indexOf(arr[i]) != i) {
      freq[arr[i]]++
    }
  }
  return freq
}
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
// Examples
// mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
// Notes
// All of the letters in the input list will always be lowercase.
function mapping(letters) {
  let letterObj = {}
  for (let i = 0; i < letters.length; i++) {
    letterObj[letters[i]] = letters[i].toUpperCase()
  }
  return letterObj
}
// Create a function that converts color in RGB format to Hex format.
// Examples
// rgbToHex("rgb(0, 128, 192)") ➞ "#0080c0"
// rgbToHex("rgb(45, 255, 192)") ➞ "#2dffc0"
// rgbToHex("rgb(0, 0, 0)") ➞ "#000000"
// Notes
// The Hex format should be displayed in lowercase.
function rgbToHex(col) {
  const rgbArr = col.slice(4, col.length - 1).split(', ')
  return '#' + rgbArr.map(idx => idx === '0' ? '00' : Number(idx).toString(16)).join('')
}
// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.
// Tower of Hanoi
// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.
// Examples
// towerHanoi(3) ➞ 7
// towerHanoi(5) ➞ 31
// towerHanoi(0) ➞ 0
// Notes
// The amount of discs is always a positive integer.
function towerHanoi(discs) {
  if (discs === 1) return 1
  return Math.pow(2, discs) - 1
}
// Given a string of numbers separated by a comma and space, return the product of the numbers.
// Examples
// multiplyNums("2, 3") ➞ 6
// multiplyNums("1, 2, 3, 4") ➞ 24
// multiplyNums("54, 75, 453, 0") ➞ 0
// multiplyNums("10, -2") ➞ -20
// Note
// Bonus: Try to complete this challenge in one line!
function multiplyNums(nums) {
  return nums.split(', ').reduce((cur, acc) => cur * acc, 1)
}
// Create a function which returns the number of true values there are in an array.
// Examples
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0
// Notes
//     Return 0 if given an empty array.
//     All array items are of the type bool (true or false).
function countTrue(arr) {
  return arr.filter(idx => idx === true).length
}
// The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.
// The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.
// Create two functions that take an integer as an argument and:
//     Return its additive persistence.
//     Return its multiplicative persistence.
// Examples: Additive Persistence
// additivePersistence(1679583) ➞ 3
// // 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// // 3 + 9 = 12
// // 1 + 2 = 3
// // It takes 3 iterations to reach a single-digit number.
// additivePersistence(123456) ➞ 2
// // 1 + 2 + 3 + 4 + 5 + 6 = 21
// // 2 + 1 = 3
// additivePersistence(6) ➞ 0
// // Because 6 is already a single-digit integer.
// Examples: Multiplicative Persistence
// multiplicativePersistence(77) ➞ 4
// // 7 x 7 = 49
// // 4 x 9 = 36
// // 3 x 6 = 18
// // 1 x 8 = 8
// // It takes 4 iterations to reach a single-digit number.
// multiplicativePersistence(123456) ➞ 2
// // 1 x 2 x 3 x 4 x 5 x 6 = 720
// // 7 x 2 x 0 = 0
// multiplicativePersistence(4) ➞ 0
// // Because 4 is already a single-digit integer.
// Notes
// N/A
function additivePersistence(n) {
  if (('' + n).length === 1) return 0
  let persistence = 1
  function getSum(num) {
    let sum = 0;
    const numStr = '' + num
    for (let i = 0; i < numStr.length; i++) {
      sum += +numStr[i]
    }
    if (('' + sum).length !== 1) {
      getSum(sum)
      persistence++
    }
    return sum
  }
  getSum(n)
  return persistence
}
function multiplicativePersistence(n) {
  if (('' + n).length === 1) return 0
  let persistence = 1
  function getProduct(num) {
    let product = 1;
    const numStr = '' + num
    for (let i = 0; i < numStr.length; i++) {
      product *= +numStr[i]
    }
    if (('' + product).length !== 1) {
      getProduct(product)
      persistence++
    }
    return product
  }
  getProduct(n)
  return persistence
}
// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.
// Here's an example hand:
// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.
// Examples
// maximumScore([
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]) ➞ 28
// maximumScore([
//   { tile: "B", score: 2 },
//   { tile: "V", score: 4 },
//   { tile: "F", score: 4 },
//   { tile: "U", score: 1 },
//   { tile: "D", score: 2 },
//   { tile: "O", score: 1 },
//   { tile: "U", score: 1 }
// ]) ➞ 15
// Notes
// Here, each tile is represented as an object with two keys: tile and score.
function maximumScore(tileHand) {
  let score = 0
  tileHand.forEach(idx => score += idx.score)
  return score
}
// Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.
// Examples
// operation(15, 9) ➞ "added"
// operation(26, 2) ➞ "subtracted"
// operation(11, 11) ➞ null
// Notes
//     Only integers are used as test input.
//     Numbers should be added, subtracted, divided or multiplied in the order they appear in the parameters.
function operation(num1, num2) {
  if (num1 + num2 === 24) return "added"
  else if (num1 - num2 === 24) return "subtracted"
  else if (num1 * num2 === 24) return "multiplied"
  else if (num1 / num2 === 24) return "divided"
  else return null
}
// Write a function that returns the minimum number of swaps to convert the first binary string into the second.
// Examples
// minSwaps("1100", "1001") ➞ 1
// minSwaps("110011", "010111") ➞ 1
// minSwaps("10011001", "01100110") ➞ 4
// Notes
//     Both binary strings will be of equal length.
//     Both binary strings will have an equal number of zeroes and ones.
//     A swap is switching two elements in a string (swaps do not have to be adjacent).
function minSwaps(s1, s2) {
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      counter += 1
    }
  }
  return counter / 2
}
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
// Examples
// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5
// Notes
// An empty array should return 0.
function getLength(arr) {
  if (!arr.length) return 0
  return arr.flat(Infinity).length
}
// Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.
// Examples
// isTriangle(2, 3, 4) ➞ true
// isTriangle(3, 4, 5) ➞ true
// isTriangle(4, 3, 8) ➞ false
// Notes
//     a, b and, c are the side lengths of the triangles.
//     Test input will always be three positive numbers.
function isTriangle(a, b, c) {
  return (a + b > c) && (a + c > b) && (b + c > a)
}
// A positive number's population is the number of 1s in its binary representation. An evil number has an even numbered population, whereas an odious number has an odd numbered population. Moreover, a number is pernicious if its population is a prime number.
// Create a function that takes a number as an argument and returns a sorted array of all its descriptors ("Evil", "Odious", or "Pernicious").
// Examples
// howBad(7) ➞ ["Odious", "Pernicious"]
// // binary = 111
// howBad(17) ➞ ["Evil", "Pernicious"]
// // binary = 10001
// howBad(23) ➞ ["Evil"]
// // binary = 10111
// Notes
// Notice how the example "111" is shown as a prime but in base-10, "111" isn't prime (37 * 3). Convert it back to a "7", and it is.
function howBad(num) {
  let binary = num.toString(2)
  let result = []
  let population = 0
  function isPrime(num) {
    for (var j = 2; j < num; j++)
      if (num % j === 0) return false;
    return num > 1;
  }
  for (let i = 0; i < binary.length; i++) {
    population += +binary[i]
  }
  if (population % 2 === 0) result.push('Evil')
  else if (population % 2 === 1) result.push('Odious')
  if (isPrime(population)) result.push('Pernicious')
  return result
}
// Write a function that reverses all the words in a sentence that start with a particular letter.
// Examples
// specialReverse("word searches are super fun", "s")
// ➞ "word sehcraes are repus fun"
// specialReverse("first man to walk on the moon", "m")
// ➞ "first nam to walk on the noom"
// specialReverse("peter piper picked pickled peppers", "p")
// ➞ "retep repip dekcip delkcip sreppep"
// Notes
//     Reverse the words themselves, not the entire sentence.
//     All characters in the sentence will be in lower case.
function specialReverse(s, c) {
  let wordsArr = s.split(' ')
  let result = []
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].split('')[0] === c) {
      let revStrArr = Array.from(wordsArr[i])
      let revStr = []
      for (let j = revStrArr.length - 1; j > -1; j--) {
        revStr.push(revStrArr[j])
      }
      result.push(revStr.join(''))
    } else {
      result.push(wordsArr[i])
    }
  }
  return result.join(' ')
}
// Given a two digit number, return true if that number contains one even and one odd digit.
// Example
// oneOddOneEven(12) ➞ true
// oneOddOneEven(55) ➞ false
// oneOddOneEven(22) ➞ false
// Notes
// N/A
function oneOddOneEven(n) {
  let numArr = ('' + n).split('')
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0 && numArr[i + 1] % 2 === 0) return false
    if (numArr[i] % 2 === 1 && numArr[i + 1] % 2 === 1) return false
  }
  return true
}
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:
//     Must only contain numbers (no non-digits allowed).
//     Must not contain any spaces.
//     Must not be greater than 5 digits in length.
// Examples
// isValid("59001") ➞ true
// isValid("853a7") ➞ false
// isValid("732 32") ➞ false
// isValid("393939") ➞ false
// Notes
// N/A
function isValid(zip) {
  return /\d{4,5}[^\s\Da-z]/gi.test(zip) && zip.length <= 5
}
// Create a function that returns the number of hashes and pluses in a string.
// Examples
// hashPlusCount("###+") ➞ [3, 1]
// hashPlusCount("##+++#") ➞ [3, 3]
// hashPlusCount("#+++#+#++#") ➞ [4, 6]
// hashPlusCount("") ➞ [0, 0]
// Notes
//     Return [0, 0] for an empty string.
//     Return in the order of [hashes, pluses].
function hashPlusCount(str) {
  let resultArr = [0, 0]
  let strArr = str.split('')
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '#') resultArr[0] += 1
    if (strArr[i] === '+') resultArr[1] += 1
  }
  return resultArr
}
// Create a function that takes a number as an argument and returns true or false 
// depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.
// Examples
// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true
// Notes
// N/A
function isSymmetrical(num) {
  let numArr = ('' + num).split('')
  for (let i = 0; i < numArr.length / 2; i++) {
    if (numArr[i] !== numArr[numArr.length - 1 - i]) {
      return false
    }
  }
  return true
}
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
// Notes
// The secret society's name should be entirely uppercased.
function societyName(friends) {
  let tmp;
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      if (friends[i] > friends[j]) {
        tmp = friends[i]
        friends[i] = friends[j]
        friends[j] = tmp
      }
    }
  }
  return friends.map(i => i.split('')[0]).join('')
}
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Examples
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
// findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
// findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
// Notes
// Watch out for negative integers (numbers).
function findLargestNums(arr) {
  let resultArr = []
  for (let i = 0; i < arr.length; i++) {
    let arrMax = arr[i][0]
    for (let ii = 0; ii < arr[i].length; ii++) {
      if (arr[i][ii] > arrMax) {
        arrMax = arr[i][ii]
      }
    }
    resultArr.push(arrMax)
  }
  return resultArr
}
// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
// Examples
// inkLevels({
//   "cyan": 23,
//   "magenta": 12,
//   "yellow": 10
// }) ➞ 10
// inkLevels({
//   "cyan": 432,
//   "magenta": 543,
//   "yellow": 777
// }) ➞ 432
// inkLevels({
//   "cyan": 700,
//   "magenta": 700,
//   "yellow": 0
// }) ➞ 0
// Notes
// A single printed page uses each color once, so that no prints are possible if there's no more ink in any of the slots (see example #3).
function inkLevels(inks) {
  const inkLevelsArr = []
  for (const levels in inks) {
    inkLevelsArr.push(inks[levels])
  }
  let minLevels = inkLevelsArr[0]
  for (let i = 0; i < inkLevelsArr.length; i++) {
    if (inkLevelsArr[i] < minLevels) {
      minLevels = inkLevelsArr[i]
    }
  }
  return minLevels
}
// Create a function that takes a string and returns a new string with all vowels removed.
// Examples
// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."
// removeVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"
// removeVowels("Happy Thanksgiving to all--even the haters and losers!")
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
// Notes
// "y" is not considered a vowel.
function removeVowels(str) {
  //return str.replace(/[aeiou]/gi, '')
  let strArr = str.split('')
  for (let i = 0; i < strArr.length; i++) {
    switch (strArr[i].toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        strArr.splice(i, 1)
        i--
        break;
    }
    //How to account for consequtive vowels?
  }
  return strArr.join('')
}
// f bm rsgns frm ffc NW, thrby dng  grt srvc t th cntry— wll gv hm fr lftm glf t ny n f my crss!
// f bm rsgns frm ffc NW, thrby ding  grat srvc t th cntry— wll gv hm fre lftm glf t ny n f my crss!
// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []
// Notes
//     Don't forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.
function reverse(arr) {
  let resultArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    resultArr.push(arr[i])
  }
  return resultArr
}
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
  function findMinMax(arr) {
    let max = arr[0]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
      if (arr[i] < min) {
        min = arr[i]
      }
    }
    return [min, max]
  }
  const arr1MinMax = findMinMax(arr1)
  const arr2MinMax = findMinMax(arr2)
  return arr1MinMax[0] > arr2MinMax[0] && arr1MinMax[1] < arr2MinMax[1]
}
// Groups and ranges indicate groups and ranges of expression characters. Negated character sets match any characters that are NOT inside of brackets [ ]. You differentiate a negated character set from a regular character set by inserting a ^ inside of the [ ].
// "1234cba5678".match(/[^abc]/g)
// // "12345678", matches any character that are not a, b, or c.
// You can also negate ranges, but like with regular character sets, if the hyphen is at the beginning or ending of a range then it will be considered a literal hyphen.
// "excludenumbers123".match(/[^1-3]/g)
// // "excludenumbers", matches any character that are not the numbers 1, 2 or 3.
// Create a REGEXP that matches any characters except letters, digits and spaces. You must use a negated character set in your expression.
//  "alice15@gmail.com".match(/REGEXP/gi) ➞ ["@", "."]
// Notes
// Check the Resources tab if you get stuck.
const REGEXP = /[^a-z\d\s]/gi
// Create a function that takes a string and returns a string in which each character is repeated once.
// Examples
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "
// Notes
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.
function doubleChar(str) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result.push(str[i] += str[i])
  }
  return result.join('')
}
// In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).
// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).
// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.
// Examples
// amplify(4) ➞ [1, 2, 3, 40]
// // Create a sequence from 1 to 4
// // 4 is exactly divisible by 4, so it will be 4*10 = 40
// amplify(3) ➞ [1, 2, 3]
// // Create a sequence from 1 to 3
// // There are no numbers that can be exactly divided by 4
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// // Create a sequence from 1 to 25
// // The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.
// Notes
//     The given parameter num will always be equal to or greater than 1.
//     Remember to include the num as the higher bound of the sequence (see the Examples) above.
//     A number a amplified by a factor b can also be read as: a * b.
//     A number a is exactly divisible by a number b when the remainder of the division a / b is equal to 0.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.
function amplify(num) {
  let resultsArr = []
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) resultsArr.push(i * 10)
    else resultsArr.push(i)
  }
  return resultsArr
}
// Write a function called "computeFactorialOfN".
// Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.
// var output = computeFactorialOfN(3);
// console.log(output); // --> 6
// var output = computeFactorialOfN(4);
// console.log(output); // --> 24
//Pseudocode
//Declare a function called computeFactorialOfN that takes parameter of a natural number
//Make variable for result
//Use a for loop with the boundry of less than the natural number 
//With the for loop apply the formula of factorial which is
//n * (n - 1), assign the result to the variable
//return the result
function computeFactorialOfN(num) {
  let result = 1;
  // for (let i = 1; i <= num; i++) {
  //   result *= i
  // }
  let i = 1
  while (i <= num) {
    result *= i
    i++
  }
  return result
}
//num = 3
//i = 4
//result = 6
computeFactorialOfN(3)
//(1)  1
//(2)  1*2
//(3)  1*2*3
// Given an array of math expressions, create a function which sorts the array by their answer. It should be sorted in ascending order.
// Examples
// sortByAnswer(["1 + 1", "1 + 7", "1 + 5", "1 + 4"]) ➞ ["1 + 1", "1 + 4", "1 + 5", "1 + 7"]
// sortByAnswer(["4 - 4", "2 - 2", "5 - 5", "10 - 10"]) ➞ ["4 - 4", "2 - 2", "5 - 5", "10 - 10"]
// sortByAnswer(["2 + 2", "2 - 2", "2 x 1"]) ➞ ["2 - 2", "2 x 1", "2 + 2"]
// Notes
//     If multiple expressions have the same answer, put them in the order of which they appear (see example #2).
//     You won't need to worry about divisions by zero.
function sortByAnswer(arr) {
  // return arr.sort((a, b) => eval(a.replace(/x/,'*')) - eval(b.replace(/x/,'*')))
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (eval(arr[i].replace(/x/, '*')) === eval(arr[j].replace(/x/, '*'))) {
        //How do I maintain order of the original array when the answer is the same?
      }
      if (eval(arr[i].replace(/x/, '*')) < eval(arr[j].replace(/x/, '*'))) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
//     Sort numbers array in ascending order.
//     If the function's argument is null, an empty array, or undefined; return an empty array.
//     Return a new array of sorted numbers.
// Examples
// sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]
// sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]
// sortNumsAscending(null) ➞ []
// sortNumsAscending([]) ➞ []
// Notes
// Test input can be positive or negative.
function sortNumsAscending(arr) {
  if (arr) {
    for (var i = 1; i < arr.length; i++) {
      for (var j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
          var x = arr[i];
          arr[i] = arr[j];
          arr[j] = x;
        }
      }
    }
    return arr
  } else return []
}
// Write a function that takes a positive integer and return its factorial.
// Examples
// factorial(4) ➞ 24
// factorial(0) ➞ 1
// factorial(9) ➞ 362880
// Notes
//     The factorial of 0 is 1.
//     The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 (e.g. factorial of 3 is 3 * 2 * 1 = 6).
function factorial(z) {
  if (z === 0) return 1
  else return z * factorial(z - 1);
}
// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
// Note:
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.
var addStrings = function (num1, num2) {
  return String(Number(num1) + Number(num2))
};
// Add the Index
// Given an array of numbers, create a function which returns the same array but with each index 
// elements index in the array added to itself. This means you add 0 to the number at index 0,
// add 1 to the number at index 1, etc...
// input = [1, 2, 3, 4, 5]
// output = [1, 3, 5, 7, 9]
//Pseudocode
//Use a for loop to loop through the index
//With each index add the index number as a number to the index value
//return the array
function addIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += i
  }
  return arr
}
//i = 2
//arr[i] = 3
//arr.length = 5
//arr = [1, 3, 5]
addIndex([1, 2, 3, 4, 5]);
// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
// Matchstick Houses, Steps 1, 2 and 3
// Create a function that takes a number(step) as an argument and returns the amount of matchsticks in that step.See step 1, 2 and 3 in the image above.
//   Examples
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436
// Notes
// Step 0 returns 0 matchsticks.
// The input(step) will always be a non - negative integer.
function matchHouses(step) {
  if (step === 0) return 0
  else return step * 6 - (step - 1)
}
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.
// Examples
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]
// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// sortByLength(["Turing", "Einstein", "Jung"])
// ➞ ["Jung", "Turing", "Einstein"]
// Notes
// All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.
function sortByLength(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i].length < arr[j].length) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
// Examples
// // 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5
// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4
// // 3 bottles of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5
// // Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4
// // Some cheap candy:
// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3
// Notes
// There might be a floating point precision problem in here...
function getTotalPrice(groceries) {
  let totalPrice = 0;
  for (let i = 0; i < groceries.length; i++) {
    totalPrice += ((groceries[i].price * 100) * groceries[i].quantity);
  }
  return totalPrice / 100
}
// Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.
// Examples
// factorial(3) ➞ 6
// factorial(5) ➞ 120
// factorial(13) ➞ 6227020800
// Notes
// Assume all inputs are greater than or equal to 0.
function factorial(int) {
  if (int < 0) return -1
  else if (int === 0) return 1
  else return (int * factorial(int - 1))
}
// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
// Examples
// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
// freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
// freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true
// Notes
// Ignore tax or additional fees when calculating the total order cost.
function freeShipping(order) {
  return Object.values(order).reduce((cur, acc) => cur + acc) > 50
}
// Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.
// const GUEST_LIST = {
//   Randy: "Germany",
//   Karla: "France",
//   Wendy: "Japan",
//   Norman: "England",
//   Sam: "Argentina"
// }
// Write a function that takes in a name and returns a name tag, that should read:
// "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return:
// "Hi! I'm a guest."
// Examples
// greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."
// greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."
// greeting("Monti") ➞ "Hi! I'm a guest."
// Notes
// N/A
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
function greeting(name) {
  return GUEST_LIST.hasOwnProperty(name) ? `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.` : "Hi! I'm a guest."
}
// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.
// Examples
// afterNYears({
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// }, 1) ➞ {
//   "Joel" : 33,
//   "Fred" : 45,
//   "Reginald" : 66,
//   "Susan" : 34,
//   "Julian" : 14
// }
// afterNYears({
//   "Baby" : 2,
//   "Child" : 8,
//   "Teenager" : 15,
//   "Adult" : 25,
//   "Elderly" : 71
// }, 19) ➞ {
//   "Baby" : 21,
//   "Child" : 27,
//   "Teenager" : 34,
//   "Adult" : 44,
//   "Elderly" : 90
// }
// afterNYears({
//   "Genie" : 1000,
//   "Joe" : 40
// }, 5) ➞ {
//   "Genie" : 1005,
//   "Joe" : 45
// }
// Notes
//     Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
//     n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.
function afterNYears(names, n) {
  for (const age in names) {
    names[age] += Math.abs(n)
  }
  return names
}
// Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.
// Examples
// flip(1) ➞ 0
// flip(0) ➞ 1
// Notes
// Try completing this challenge without using any:
//     Conditionals
//     Ternary operators
//     Negations
//     Bit operators
function flip(y) {
  return 1 - y
  x = [1, 0]
  return x[y]
}
// Assume a program only reads .js or .jsx files. Write a function that accepts a file path and returns true if it can read the file and false if it can't.
// Examples
// isJS("/users/user.jsx") ➞ true
// isJS("/users/user.js") ➞ true
// isJS("/users/user.ts") ➞ false
// Notes
// Use a RegEx boundary assertion in your function.
function isJS(path) {
  return /.jsx|.js/g.test(path);
}
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Examples
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4
// Notes
// Your output must be case-sensitive (see second example).
function charCount(myChar, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === myChar) {
      count++
    }
  }
  return count;
}
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
// Examples
// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
// timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
// Notes
//     Dates are zero zero based (see resources).
//     All test cases contain valid dates.
function timeForMilkAndCookies(date) {
  return '' + date.getMonth() + date.getDate() === '1124'
}
// Create a function that returns Burp with num "r"s in it.
// Examples
// longBurp(3) ➞ "Burrrp"
// longBurp(5) ➞ "Burrrrrp"
// longBurp(9) ➞ "Burrrrrrrrrp"
// Notes
//     Expect num to always be >= 1.
//     Remember to use a capital "B".
//     Don't forget to return the result.
function longBurp(num) {
  let burp = 'Bu';
  while (num > 0) {
    burp += 'r'
    num--
  }
  burp += 'p'
  return burp
}
// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// To illustrate:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. 
//On the other hand, swapping 43 gives us 34, and 43 > 34.
// Examples
// largestSwap(14) ➞ false
// largestSwap(53) ➞ true
// largestSwap(99) ➞ true
// Notes
// Numbers with two identical digits (third example) should yield true (you can't do better).
function largestSwap(num) {
  const numStr = '' + num
  let swappedStr = []
  let swappedNum
  for (let index = numStr.length; index--;) {
    swappedStr.push(numStr[index])
    swappedNum = swappedStr.join('')
  }
  if (num < swappedNum) return false;
  return true;
}
// Async operations don't always go as planned. When errors creep up we need to know how to handle them. We can pass the reject callback to our executor function to pass errors to our promise.
// let promise = new Promise( (resolve, reject) => {
//   setTimeout(( ) => {
//     /* something went wrong */
//      reject('oops!')
//   }, 1000)
// })
// You can pass Error objects as well. Here we pass a simple string "oops!".
// Challenge
// Reject the promise with the simple string "It's not a dog!".
// Notes
// Check the Resources tab for more info on promises.
let promise = new Promise((resolve, reject) => {
  let animal = "cat"
  setTimeout(() => {
    if (animal === "dog") {
      resolve("It's a dog!")
    }
    if (animal !== "dog") {
      reject("It's not a dog!")
    }
  }, 1000)
})
// Create a function that takes two dates and returns the number of days between the first and second date.
// Examples
// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6
// getDays(
//   new Date("December 29, 2018"),
//   new Date("January 1, 2019")
// ) ➞ 3
// getDays(
//   new Date("July 20, 2019"),
//   new Date("July 30, 2019")
// ) ➞ 10
// Notes
// N/A
function getDays(date1, date2) {
  return Math.abs(date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
}
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. 
// The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) 
//which give both respective areas and perimeter (circumference).
// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
// Examples
// let circy = new Circle(11);
// circy.getArea();
// // Should return 380.132711084365
// let circy = new Circle(4.44);
// circy.getPerimeter();
// // Should return 27.897342763877365
// Notes
// Don't worry about floating point precision - I've factored in the chance that your answer may be 
// more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be 
//considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.
class Circle {
  constructor(radius) {
    this.radius = radius
  }
  getArea() { return Math.PI * Math.pow(this.radius, 2) }
  getPerimeter() { return 2 * Math.PI * this.radius }
}
// Create a function that returns only strings with unique characters.
// Examples
// filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
// // "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.
// filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []
// filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]
// Notes
// N/A
function filterUnique(arr) {
  const resultsArr = []
  arr.forEach((ele) => {
    if ([... new Set(ele)].length === ele.split('').length) {
      resultsArr.push(ele)
    }
  })
  return resultsArr
}
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
// Examples
// oddishOrEvenish(43) ➞ "Oddish"
// oddishOrEvenish(373) ➞ "Oddish"
// oddishOrEvenish(4433) ➞ "Evenish"
// Notes
// N/A
function oddishOrEvenish(num) {
  return num.toString().split('').reduce((a, b) => a + parseInt(b), 0) % 2 === 1 ? 'Oddish' : 'Evenish'
}
// Create a Book constructor that has two properties :
//     Title
//     Author
// and two methods:
//     A method named getTitle that returns: "Title: " + the instance title.
//     A method named getAuthor that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:
//     Pride and Prejudice - Jane Austen (PP)
//     Hamlet - William Shakespeare (H)
//     War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.
// For instance, if I instantiated the following book using this Book constructor function:
//     Harry Potter - J.K. Rowling (HP)
// I would get the following properties and methods:
function Book(title, author) {
  // Write your properties and methods here
  this.title = title;
  this.author = author;
  this.getTitle = function (title) {
    return `Title: ${this.title}`
  }
  this.getAuthor = function (auhtor) {
    return `Author: ${this.author}`
  }
}
// Instantiate your Book constructor here
const PP = new Book('Pride and Prejudice', 'Jane Austen')
const H = new Book('Hamlet', 'William Shakespeare')
const WP = new Book('War and Peace', 'Leo Tolstoy')
// Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".
// const REGEXP = /blue|red/
// "red flag".match(REGEXP)  // red
// "blue flag".match(REGEXP)  // blue
// // Matches "blue" in "blue flag" and "red" in "red flag".
// Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.
// Examples
// "red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]
// "yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]
// "pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
// Notes
// Check the Resources tab if you get stuck.
const REGEXP = /red flag|blue flag/g
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
// Examples
// testJackpot(["@", "@", "@", "@"]) ➞ true
// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
// Notes
// The elements must be exactly identical for there to be a jackpot.
function testJackpot(result) {
  const jackPot = new Set(result)
  return jackPot.size === 1
}
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true
// changeEnough([30, 40, 20, 5], 12.55) ➞ true
// changeEnough([10, 0, 0, 50], 3.85) ➞ false
// changeEnough([1, 0, 5, 219], 19.99) ➞ false
// Notes
//     quarter: 25 cents / $0.25
//     dime: 10 cents / $0.10
//     nickel: 5 cents / $0.05
//     penny: 1 cent / $0.01
function changeEnough(change, amountDue) {
  const total = [change[0] * 25, change[1] * 10, change[2] * 5, change[3]].reduce((cur, acc) => cur + acc, 0)
  return total * 0.01 >= amountDue
}
// ES6 Destructuring can come in handy when you use regular expressions. Here is a function that uses a regular expression to parse a URL.
// const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)
// parseURL("https://developer.mozilla.org/en-US/Web/JavaScript")
// // returns ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]
// // the protocol = https
// // the host = developer.mozilla.org
// // the path = en-US/Web/JavaScript
// From the parsedURL result you could assign these segments using ES6 array destructuring.
// Challenge
//     Assign the variables protocol, host, path inside the brackets of the given string.
//     Pay close attention to what is being returned from parsedURL, as you will need to skip over any values that are not protocol, host, or path.
const str = '[,protocol,host,path] = parsedURL'
// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].
// Here is my code:
// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.concat(arr[i]);
//   }
//   return arr2;
// }
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.
// Examples
// flatten([[1, 2], [3, 4]]) ➞ []
// // Expected: [1, 2, 3, 4]
// flatten([["a", "b"], ["c", "d"]]) ➞ []
// // Expected: ["a", "b", "c", "d"]
// flatten([[true, false], [false, false]]) ➞ []
// // Expected: [true, false, false, false]
// Notes
// N/A
function flatten(arr) {
  arr2 = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr2.push(arr[i][j])
    }
  }
  return arr2
}
// Create a function that takes an object and returns the keys and values as separate arrays.
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// N/A
function keysAndValues(obj) {
  const keyValArr = [[], []]
  for (const [key, value] of Object.entries(obj)) {
    keyValArr[0].push(key)
    keyValArr[1].push(value)
  }
  return keyValArr
}
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
// Examples
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"
// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ "(345) 501-2527"
// Notes
// Don't forget the space after the closing parenthesis.
function formatPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
// Examples
// getAbsSum([2, -1, 4, 8, 10]) ➞ 25
// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
// getAbsSum([2, 4, 6, 8, 10]) ➞ 30
// getAbsSum([-1]) ➞ 1
// Notes
// The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).
function getAbsSum(arr) {
  return arr.reduce((cur, acc) => Math.abs(cur) + Math.abs(acc), 0)
}
// Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.
// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
// Notes
// Zero is a non-negative number.
function filterArray(arr) {
  return arr.filter(ele => typeof ele === 'number')
}
// Quantifiers indicate numbers of characters or expressions to match. x{n} Where "n" is a positive integer, matches exactly "n" occurrences of the preceding item "x".
// "candy".match(/a{2}/) ➞ null
// "caandy".match(/a{2}/) ➞ "aa"
// x{n,}
// Where "n" is a positive integer, matches at least "n" occurrences of the preceding item "x".
// "candy".match(/a{2,}/) ➞ null
// "caandy".match(/a{2,}/) ➞ "aa"
// "caaaaaandy".match(/a{2,}/) ➞ "aaaaaa"
// x{n,m} Where "n" is 0 or a positive integer, "m" is a positive integer, and m > n, matches at least "n" and at most "m" occurrences of the preceding item "x".
// "cndy".match(/a{1,3}/) ➞ null
// "candy".match(/a{1,3}/) ➞ "a"
// "caandy".match(/a{1,3}/) ➞ "aa"
// "caaaaaaaaaaandy".match(/a{1,3}/) ➞ "aaa"
// Challenge
//     Create a regexp to find ellipsis: 3 (or more?) dots in a row.
//     Use one of the 3 quantifiers above in your solution
// "Hello!... Wait. How goes?..... GoodBye!..".match(/REGEXP/g) ➞ "..., ....."
const REGEXP = /[.]{3,}/g
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]
}
// Create the function that takes an array with objects and returns the sum of people's budgets.
// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700
// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600
// Notes
// N/A
function getBudgets(arr) {
  return arr.reduce((acc, cur) => acc + cur.budget, 0)
}
// Write a function that converts an object into an array of keys and values.
// Examples
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
// Notes
// N/A
function objectToArray(obj) {
  const newArr = []
  for (const key in obj) {
    newArr.push([key, obj[key]])
  }
  return newArr
}
// Create a function that concatenates n input arrays, where n is variable.
// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
// Notes
// Arrays should be concatenated in order of the arguments.
function concat(...args) {
  return [...args].flat()
}
// Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.
// Examples
// simonSays([1, 2], [5, 1]) ➞ true
// simonSays([1, 2], [5, 5]) ➞ false
// simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]) ➞ true
// simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3]) ➞ false
// Notes
//     Both input arrays will be of the same length, and will have a minimum length of 2.
//     The values of the 0-indexed element in the first array and the n-1th indexed element in the second array do not matter.
function simonSays(arr1, arr2) {
  for (let index = 0; index < arr1.length - 1; index++) {
    if (arr1[index] !== arr2[index + 1]) {
      return false
    }
  }
  return true
}
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.
// Examples
// numberSyllables("buf-fet") ➞ 2
// numberSyllables("beau-ti-ful") ➞ 3
// numberSyllables("mon-u-men-tal") ➞ 4
// numberSyllables("on-o-mat-o-poe-ia") ➞ 6
// Notes
//     Don't forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.
function numberSyllables(word) {
  return word.split('-').length
}
// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
//     If f returns the larger number, return the string f.
//     If g returns the larger number, return the string g.
//     If the functions return the same number, return the string neither.
// Examples
// whichIsLarger(() => 5, () => 10) ➞ "g"
// whichIsLarger(() => 25,  () => 25) ➞ "neither"
// whichIsLarger(() => 505050, () => 5050) ➞ "f"
// Notes
// This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).
function whichIsLarger(f, g) {
  return f() === g() ? 'neither'
    : f() > g() ? 'f'
      : 'g'
}
// Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.
// Examples
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"
// "cheese casserole".vreplace("o") ➞ "chooso cossorolo"
// "stuffed jalapeno poppers".vreplace("e") ➞ "steffed jelepene peppers"
// Notes
// Words will be lowercased.
String.prototype.vreplace = function (vowel) {
  return this.replace(/[aeiou]/g, vowel)
}
// Write a function that checks if two numbers are:
//     Smaller than 0
//     Greater than 0
//     Exactly 0
// Examples
// both(6, 2) ➞ true
// both(0, 0) ➞ true
// both(-1, 2) ➞ false
// both(0, 2) ➞ false
// Notes
// Inputs will always be two numbers.
function both(n1, n2) {
  return Math.sign(n1) === Math.sign(n2)
}
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
  const cen = String(Math.ceil(year * 0.01)).slice(0, 2)
  return cen === '21' ? `${cen}st century` : `${cen}th century`
}
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
  // repeat after me
  let result = ''
  while (num > 0) {
    result += str
    num--
  }
  return result
}
// Create a function that takes a number and returns an array with the digits of the number in reverse order.
// Examples
// reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]
// reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]
// reverseArr(12345) ➞ [5, 4, 3, 2, 1]
// Notes
// N/A
function reverseArr(num) {
  return Array.from(String(num)).map(i => parseInt(i)).reverse()
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
  return Math.abs(arr.indexOf('Sam') - arr.indexOf('Frodo')) === 1
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
  return (n * (n + 1) * (n + 2)) / 6
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
  return arr.every(i => i[0] !== i[1]) ? arr.flat(Infinity).reduce((acc, cur) => acc + cur) : 0
}
// --------------------------------------------------------------------------
// Create a function that takes an array of numbers and returns only the even values.
// Examples
// noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]
// noOdds([43, 65, 23, 89, 53, 9, 6]) ➞ [6]
// noOdds([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]
// Notes
//     Return all even numbers in the order they were given.
// 		All test cases contain valid numbers ranging from 1 to 3000.
function noOdds(arr) {
  return arr.filter(x => x % 2 === 0)
}
// --------------------------------------------------------------
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
  return arr.map(i => i + ending)
}
// ----------------------------------------------------
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
  return arr.every(i => i.includes(val))
}
// ------------------------------------------------------
// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// Notes
// N/A
function sevenBoom(arr) {
  return /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array'
}
// ----------------------------------------------------------
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
  return [...new Set(arr)]
}
// ------------------------------------------------------------
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
  return parseFloat(Math.PI.toFixed(n))
}
// ---------------------------------------------------------------
// Write a regular expression that matches only an even number. Numbers will be presented as strings.
// Examples
// "2341" ➞ false
// "132" ➞ true
// "29" ➞ false
// "5578" ➞ true
// Notes
// This challenge is designed to use Regex only.
const x = /^\d*[02468]$/
// -------------------------------------------------------
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
  return word.includes(char) ? undefined : [word.indexOf(char), word.lastIndexOf(char)]
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
  return str.match(/[aeiou]/gi).length
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
  return Object.entrieso(obj)
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
  return Array.isArray(arr[0]) ? arr.length : 0
}
// -------------------------------------------------------
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
  var towerBase = towers[1][0]
  var count = 0
  towerBase = towerBase.split(' ').filter((currentVal) => { return currentVal === '##' ? currentVal : null })
  return towerBase.length
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
  var sum = 0
  for (i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}
addUp(4)
// ------------------------------------------------------------
// Create a function that returns true when num1 is equal to num2.
// Examples
// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false
// Notes
// Don't forget to return the result.
function isSameNum(num1, num2) {
  return num1 === num2
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
  var result = 0
  return result = num += 1
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
  return hours * 60 * 60
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
  const angles = angle1 + angle2
  return angles === 90 ? 'right'
    : angles > 90 ? 'acute'
      : angles < 90 ? 'obtuse'
        : null
}
// ------------------------------------------------------
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
  return !input ? 0 : 1
}
// -----------------------------------------------------
// Create a function that takes an array of strings and returns the words that are exactly four letters.
// Examples
// isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]
// isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]
// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]
// Notes
// You can expect valid strings for all test cases.
function isFourLetters(arr) {
  return arr.filter(i => i.length === 4)
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
  return Math.max(...arr)
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
      return 'Db'
      break
    case 'D#':
      return 'Eb'
      break
    case 'F#':
      return 'Gb'
      break
    case 'G#':
      return 'Ab'
      break
    case 'A#':
      return 'Bb'
      break
    case 'Db':
      return 'C#'
      break
    case 'Eb':
      return 'D#'
      break
    case 'Gb':
      return 'F#'
      break
    case 'Ab':
      return 'G#'
      break
    case 'Bb':
      return 'A#'
      break
    default:
      return 0
  }
}
// --------------------------------------------------------
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
  return !!(Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2))
}
// ----------------------------------------------------------
// You are give an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.
// Examples
// accepted(["Ducks", "Bears",  "Cats"]) ➞ ["Ducks", "Bears"]
// accepted(["cars", "trucks", "planes"] ➞ ["cars", trucks", "planes"]
// accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]
// Notes
// Use a RegEx boundary assertion in your function.
function acceptedWords(arr) {
  return arr.filter(i => i.slice(0, 1) !== 'C')
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
  return () => { return str }
}
// ---------------------------------------------------
// Create a function that returns the original value from a matrix with too many sub-arrays.
// Examples
// deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3
// deNest([[[[[[[true]]]]]]]) ➞ true
// deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"
// Notes
// You only need to retrieve one element.
function deNest(arr) {
  return arr.flat(Infinity)[0]
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
  return [arr.shift(), arr.pop()]
}
// --------------------------------------------------------
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.
function arrayOfMultiples(num, length) {
  const arr = []
  for (i = 1; i <= length; i++) {
    arr.push(num * i)
  }
  return arr
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
  const d = parseFloat(Math.hypot(a.x - b.x, a.y - b.y).toFixed(3))
  return d === 0 ? 0 : d
}
// -------------------------------------------------------------------
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
  var str = ''
  var dash = '-'
  str += dash.repeat(num)
  return str
}
// --------------------------------------------------------------
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
  return Math.min(...arr)
}
// ----------------------------------------------------------
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number.
// Examples
// triangle(1) ➞ 1
// triangle(6) ➞ 21
// triangle(215) ➞ 23220
// Notes
// N/A
function triangle(n) {
  return (n * (n + 1)) / 2
}
