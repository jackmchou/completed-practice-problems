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
	else return (int * factorial(int -1))
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