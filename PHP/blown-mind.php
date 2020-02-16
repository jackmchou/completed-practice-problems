<!-- The Farm Problem

In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

    chickens = 2 legs
    cows = 4 legs
    pigs = 4 legs

The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
Examples

animals(2, 3, 5) ➞ 36

animals(1, 2, 3) ➞ 22

animals(5, 2, 8) ➞ 50

Notes

    Don't forget to return the result.
    The order of animals passed is animals(chickens, cows, pigs).
    Remember that the farmer wants to know the total number of legs and not the total number of animals. -->

function animals($chickens, $cows, $pigs) {
	return $result = ($chickens * 2) + ($cows * 4) + ($pigs *4); 
}

<!-- Given a word, write a function that returns the first index and the last index of a character.
Examples

charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

charIndex("happy", "h") ➞ [0, 0]
// Only one "h" exists, so the first and last index is 0.

charIndex("happy", "e") ➞ null
// "e" does not exist in "happy", so we return null.

Notes

    If the character does not exist in the word, return null.
    If only one instance of the character exists, the first and last index will be the same.
    Check the Resources tab for hints. -->



<!-- An array is special, if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
Examples

isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// Index 3 has an even number 8.

Notes

N/A -->



<!-- Create a function that returns true if an integer is divisible by 5, and false otherwise.
Examples

divisibleByFive(5) ➞ true

divisibleByFive(-55) ➞ true

divisibleByFive(37) ➞ false

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab. -->

function divisibleByFive($n) {
	return $n % 5 === 0;
}

<!-- Write a function that converts hours into seconds.
Examples

howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400

Notes

    60 seconds in a minute, 60 minutes in an hour
    Don't forget to return your answer. -->

function howManySeconds($hours) {
	return $hours * 60 * 60;
}

<!-- Write a function that takes the base and height of a triangle and return its area.
Examples

triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50

Notes

    The area of a triangle is: (base * height) / 2
    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab. -->

function triArea($base, $height) {
	return ($base * $height) / 2;
}