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