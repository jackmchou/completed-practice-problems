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