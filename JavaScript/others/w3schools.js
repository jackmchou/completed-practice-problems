// Create a variable called carName, assign the value Volvo to it.
var carName = "Volvo";
// Create a variable called x, assign the value 50 to it.
var x = 50
// Display the sum of 5 + 10, using two variables: x and y.
var x = 5;
var y = 10;
document.getElementById("demo").innerHTML = x + y;
// Create a variable called z, assign x + y to it, and display the result in an alert box.
var x = 5;
var y = 10;
var z = x + y;
alert(z);
// On one single line, declare three variables with the following names and values:
// firstName = "John"
// lastName = "Doe"
// age = 35
var firstName = "John", lastName = "Doe", age = 35
// Multiply 10 with 5, and alert the result:
alert(10 * 5);
// Divide 10 by 2, and alert the result:
alert(10 / 2);
// Alert the remainder when 15 is divided by 9.
alert(15 % 9);
// Use the correct assignment operator that will result in x being 15 (same as x = x + y).
x = 10;
y = 5;
x += y;
// Use the correct assignment operator that will result in x being 50 (same as x = x * y).
x = 10;
y = 5;
x *= y;
// Use comments to describe the correct data type of the following variables:
let length = 15; //number
let lastName = "Johnson" //string
const x = {
	firstName: "John",
	lastName: "Doe"
}; //object
// Execute the function named myFunction.
function myFunction() {
  alert("Hello World!");
}
myFunction();
// Create a function called "myFunction".
function myFunction() {
	alert("Hello World!");
}
// Make the function return "Hello".
function myFunction() {
	return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();
// Make the function display "Hello" in the inner HTML of an element with the ID "demo".
function myFunction() {
	document.getElementById("demo").innerHTML = "Hello";
}
// Alert "John" by extracting information from the person object.
const person = {
  firstName: "John",
  lastName: "Doe"
};
alert(person.firstName);
// Add the following property and value to the person object: country: Norway.
const person = {
  firstName: "John",
  lastName: "Doe",
	country: "Norway"
};
// Create an object called person with name = John, age = 50.
// Then, access the object to alert("John is 50").
const person = {
	name: "John", age: 50
}
alert(person.name + " is " + person.age)
// The <button> element should do something when someone clicks on it. Try to fix it!
`<button onclick="alert('Hello')">Click me.</button>`
// When the button is clicked, the function "myFunction" should be executed.
`<button onclick="myFunction()">Click me.</button>`
// The <div> element should turn red when someone moves the mouse over it.
`<div onmouseover="this.style.backgroundColor='red'">myDIV.</div>`
// Use the length property to alert the length of txt.
let txt = "Hello World!";
let x = txt.length;
alert(x)
// Use escape characters to alert We are "Vikings".
let txt = "We are \"Viking\"";
alert(txt);
// Concatenate the two strings to alert "Hello World!".
let str1 = "Hello ";
let str2 = "World!";
alert(str1 + str2);
// Convert the text into an UPPERCASE text:
let txt = "Hello World!";
txt = txt.toUpperCase();
// Use the slice method to return the word "bananas".
let txt = "I can eat bananas all day";
let x = txt.slice(10, 17);
// Use the correct String method to replace the word "Hello" with the word "Welcome".
let txt = "Hello World";
txt = txt.replace("Hello", "Welcome");
// Convert the value of txt to upper case.
let txt = "Hello World";
txt = txt.toUpperCase();
// Convert the value of txt to lower case.
let txt = "Hello World";
txt = txt.toLowerCase();
// Get the value "Volvo" from the cars array.
const cars = ["Saab", "Volvo", "BMW"];
let x = cars[1]
// Change the first item of cars to "Ford".
const cars = ["Volvo", "Jeep", "Mercedes"];
cars[0] = "Ford";
// Alert the number of items in an array, using the correct Array property.
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);
// Use the correct Array method to remove the last item of the fruits array.
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();
// Use the correct Array method to add "Kiwi" to the fruits array.
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");
// Use the splice() method to remove "Orange" and "Apple" from fruits.
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1, 2)
// Use the correct Array method to sort the fruits array alphabetically.
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort()
// Create a Date object and alert the current date and time.
const d = new Date()
alert(d);
// Use the correct Date method to extract the year (four digits) out of a date object.
const d = new Date();
year = d.getFullYear();
// Use the correct Date method to get the month (0-11) out of a date object.
const d = new Date();
month = d.getMonth();
// Use the correct Date method to set the year of a date object to 2020.
const d = new Date();
d.setFullYear(2020);
// Use the correct Math method to create a random number.
let r = Math.random();
// Use the correct Math method to return the largest number of 10 and 20.
let x = Math.max(10, 20);
// Use the correct Math method to round a number to the nearest integer.
let x = Math.round(5.3);
// Use the correct Math method to get the square root of 9.
let x = Math.sqrt(9)
//Choose the correct comparison operator to alert true, when x is greater than y.
x = 10;
y = 5;
alert(x > y);
// Choose the correct comparison operator to alert true, when x is equal to y.
x = 10;
y = 10;
alert(x == y);
// Choose the correct comparison operator to alert true, when x is NOT equal to y.
x = 10;
y = 5;
alert(x != y);
// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
var age = n;
var voteable = (age < 18) ? "Too Young" : "Old enough";
alert(voteable);
// Fix the if statement to alert "Hello World" if x is greater than y.
if (x > y) {
 alert("Hello World");
};
//Fix the if statement to alert "Hello World" if x is greater than y, otherwise alert "Goodbye".
if (x > y) {
	alert("Hello World");
} else {
	alert("Goodbye");
}
// Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".
switch (fruits) {
	case "Banana":
    alert("Hello")
    break;
	case "Apple":
    alert("Welcome")
    break;
}
//Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".
switch(fruits) {
  case "Banana":
    alert("Hello")
    break;
  case "Apple":
    alert("Welcome")
    break;
	default:
		alert("Neither");
}
// Create a loop that runs from 0 to 9.
let i;
for (i = 0; i < 10; i++) {
  console.log(i);
}
// Create a loop that runs through each item in the fruits array.
const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}
// Create a loop that runs as long as i is less than 10.
let i = 0;
while (i < 10) {
  console.log(i);
  i++
}
//Create a loop that runs as long as i is less than 10, but increase i with 2 each time.
let i = 0;
while (i < 10) {
  console.log(i);
	i = i + 2;
}
//Make the loop stop when i is 5.
for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
		break;
	}
}
//Make the loop jump to the next iteration when i is 5.
for (i = 0; i < 10; i++) {
  if (i == 5) {
		continue;
	}
	console.log(i);
}
// Use the getElementById method to find the <p> element, and change its text to "Hello".
<p id="demo"></p>
<script>
	document.getElementById("demo").innerHTML = "Hello";
</script>
// Use the getElementsByTagName method to find the first <p> element, and change its text to "Hello".
<p id="demo"></p>
<script>
document.getElementsByTagName("p")[0].innerHTML = "Hello";
</script>

