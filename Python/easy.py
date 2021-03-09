# In this series we're going to see common redundancies and superfluities that make our code unnecessarily complicated and less readable, and we're going to learn how to avoid them.

# In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:

#     Keep your code clean and readable.
#     While not violating the first principle: get rid of everything superfluous.

# In order to achieve this you should:

#     Deepen your knowledge of logics.
#     Deepen your understanding of the particular language you're coding with.

# I would also add: observe and learn from the pros. Make a habit of checking the Solutions tab after solving a challenge on Edabit. There is absolutely nothing wrong in assimilating features of someone else's coding style, especially if yours is not yet fully developed.
# Goal

# In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible. Use the tips in the Tips section down below.

# Write a function that returns True if the given integer is even, and False if it's odd.
# Tips

# Using an if statement in order to return boolean or to set a variable to a boolean is redundant.

# A function that returns True if a person's age is 18 or greater and False otherwise, could be written as:

# def legal_age(age):
#   if age >= 18:
#     return True
#   else:
#       return False

# Notice that age >= 18 will already give us a boolean (True or False). This means that the function can be written in a much simpler and cleaner way:

# def legal_age(age):
#   return age >= 18

# Notes

#     This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comment tab.
#     Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments tab.
#     You can find all the exercises in this series over here.

def is_even(n):
	return n % 2 == 0

# Create a function that takes a list and finds the integer which appears an odd number of times.
# Examples
# find_odd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) ➞ -1
# find_odd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) ➞ 5
# find_odd([10]) ➞ 10
# Notes
# There will always only be one integer that appears an odd number of times.
def find_odd(lst):
  res = 0
  for item in lst:
    res = res ^ item
  return res
# Hamming distance is the number of characters that differ between two strings.
# To illustrate:
# String1: "abcbba"
# String2: "abcbda"
# Hamming Distance: 1 - "b" vs. "d" is the only difference.
# Create a function that computes the hamming distance between two strings.
# Examples
# hamming_distance("abcde", "bcdef") ➞ 5
# hamming_distance("abcde", "abcde") ➞ 0
# hamming_distance("strong", "strung") ➞ 1
# Notes
# Both strings will have the same length.
def hamming_distance(txt1, txt2):
  diff = 0
  for char1, char2 in zip(txt1, txt2):
    if char1 != char2:
      diff += 1
  return diff
# Create a function that takes a list of non-negative integers and strings and return a new list without the strings.
# Examples
# filter_list([1, 2, "a", "b"]) ➞ [1, 2]
# filter_list([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
# filter_list([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
# Notes
#     Zero is a non-negative integer.
#     The given list only has integers and strings.
#     Numbers in the list should not repeat.
#     The original order must be maintained.
def filter_list(lst):
	return list(filter(lambda i: isinstance(i, int), lst))
# The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.
# Examples
# reverse("Hello World") ➞ "DLROw OLLEh"
# reverse("ReVeRsE") ➞ "eSrEvEr"
# reverse("Radar") ➞ "RADAr"
# Notes
# There will be no punctuation in any of the test cases.
def reverse(txt):
	return txt[::-1].swapcase()
# Write a function that returns the sum of elements in a list greater than five.
# Examples
# sum_five([1, 5, 20, 30, 4, 9, 18]) ➞ 77
# sum_five([1, 2, 3, 4]) ➞ 0
# sum_five([10, 12, 28, 47, 55, 100]) ➞ 252
# Notes
# N/A
def sum_five(lst):
  result = 0
  for i in lst:
    if i > 5:
      result += i
  return result
# Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
# Examples
# convert(1, 3) ➞ 3780
# convert(2, 0) ➞ 7200
# convert(0, 0) ➞ 0
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def convert(hours, minutes):
	return hours * 60 ** 2 + minutes * 60
# In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
#     chickens = 2 legs
#     cows = 4 legs
#     pigs = 4 legs
# The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
# Examples
# animals(2, 3, 5) ➞ 36
# animals(1, 2, 3) ➞ 22
# animals(5, 2, 8) ➞ 50
# Notes
#     Don't forget to return the result.
#     The order of animals passed is animals(chickens, cows, pigs).
#     Remember that the farmer wants to know the total number of legs and not the total number of animals.
def animals(chickens, cows, pigs):
	return chickens * 2 + (cows + pigs) * 4
# Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
#     wins get 3 points
#     draws get 1 point
#     losses get 0 points
# Examples
# football_points(3, 4, 2) ➞ 13
# football_points(5, 0, 2) ➞ 15
# football_points(0, 0, 1) ➞ 0
# Notes
# Inputs will be numbers greater than or equal to 0.
def football_points(wins, draws, losses):
  return wins * 3 + draws
# Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
# Examples
# calculator(2, "+", 2) ➞ 4
# calculator(2, "*", 2) ➞ 4
# calculator(4, "/", 2) ➞ 2
# Notes
# If the input tries to divide by 0, return: "Can't divide by 0!"
def calculator(num1, operator, num2):
	if operator == '/' and num2 != 0:
		return num1 / num2
	elif num2 == 0:
		return "Can't divide by 0!"
	operation = {
		'+': num1 + num2,
		'-': num1 - num2,
		'*': num1 * num2,
		}
	return operation.get(operator, 'Invalid operator')
# Create a function that takes a boolean variable flag and returns it as a string.
# Examples
# bool_to_string(True) ➞ "True"
# bool_to_string(False) ➞ "False"
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def bool_to_string(flag):
	return str(flag)
# Create a function that takes a list containing only numbers and return the first element.
# Examples
# get_first_value([1, 2, 3]) ➞ 1
# get_first_value([80, 5, 100]) ➞ 80
# get_first_value([-500, 0, 50]) ➞ -500
# Notes
# The first element in a list always has an index of 0.
def get_first_value(number_list):
	return number_list[0]
# Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
# Examples
# squared(5) ➞ 25
# squared(9) ➞ 81
# squared(100) ➞ 10000
# Notes
#     READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
#     Don't overthink this challenge; it's not supposed to be hard.
def squared(a):
	return a * a
# Create a function that takes a base number and an exponent number and returns the calculation.
# Examples
# calculate_exponent(5, 5) ➞ 3125
# calculate_exponent(10, 10) ➞ 10000000000
# calculate_exponent(3, 3) ➞ 27
# Notes
#     All test inputs will be positive integers.
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def calculate_exponent(num, exp):
	return num ** exp
# Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
# Examples
# sum_polygon(3) ➞ 180
# sum_polygon(4) ➞ 360
# sum_polygon(6) ➞ 720
# Notes
#     n will always be greater than 2.
#     The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
def sum_polygon(n):
	return (n - 2) * 180
# Create a function that takes voltage and current and returns the calculated power.
# Examples
# circuit_power(230, 10) ➞ 2300
# circuit_power(110, 3) ➞ 330
# circuit_power(480, 20) ➞ 9600
# Notes
# Requires basic calculation of electrical circuits (see Resources for info).
def circuit_power(voltage, current):
	return voltage * current
# A student learning Python was trying to make a function. His code should concatenate a passed string name with string "Edabit" and stores it in a variable called result. He needs your help to fix this code.
# Examples
# name_string("Mubashir") ➞ "MubashirEdabit"
# name_string("Matt") ➞ "MattEdabit"
# name_string("python") ➞ "pythonEdabit"
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def name_string(name):
	  b = "Edabit"
	  result = name + b
	  return result
# Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.
# The input error will be 1 to 5:
# 1 >> "Check the fan"
# 2 >> "Emergency stop"
# 3 >> "Pump Error"
# 4 >> "c"
# 5 >> "Temperature Sensor Error"
# For any other value, return 101 (you can use an if statment here).
# Examples
# error(1) ➞ "Check the fan: e1"
# error(2) ➞ "Emergency stop: e2"
# error(3) ➞ "Pump Error: e3"
# Notes
# Do this without using the switch or if statements.
def error(n):
	errors = {
  	1:"Check the fan",
    2:"Emergency stop",
    3:"Pump Error",
    4:"c",
    5:"Temperature Sensor Error"
  	}
	return "%s: e%s" % (errors[n], n) if (n in errors.keys()) else 101
# Mubashir created a function that takes two numbers a and b and an operator o. Function should return the result of the corresponding mathematical function on both numbers. If the operator is is not one of the specified characters +, -, /, * the function should return None. Help him by fixing the code in the code tab to pass this challenge.
# Look at the examples below to get an idea of what the function should do:
# Examples
# basic_calculator(2, '+',  4) ➞ 6
# basic_calculator(6, '-', 5) ➞ 1
# basic_calculator(12, '/', 3) ➞ 4
# basic_calculator(3, '*', 4) ➞ 12
# basic_calculator(1, '/', 0) ➞ None
# # Division by zero is not possible
# basic_calculator(1, 'x', 0) ➞ None
# # 'x' is not an operator
# Notes
# N/A
def basic_calculator(a, o, b):
  result = 0
  if(o == "+"):
    return a + b
  elif(o == "-"):
    return a - b
  elif(o == "/" and b != 0):
    return a / b
  elif(o == "*"):
    return a * b
  else:
    return None
  return result
# In this challenge, establish if a given integer num is a Curzon number. If 1 plus 2 elevated to num is exactly divisible by 1 plus 2 multiplied by num, then num is a Curzon number.
# Given a non-negative integer num, implement a function that returns True if num is a Curzon number, or False otherwise.
# Examples
# is_curzon(5) ➞ True
# # 2 ** 5 + 1 = 33
# # 2 * 5 + 1 = 11
# # 33 is a multiple of 11
# is_curzon(10) ➞ False
# # 2 ** 10 + 1 = 1025
# # 2 * 10 + 1 = 21
# # 1025 is not a multiple of 21
# is_curzon(14) ➞ True
# # 2 ** 14 + 1 = 16385
# # 2 * 14 + 1 = 29
# # 16385 is a multiple of 29
# Notes
# N/A
def is_curzon(num):
  test = (2 ** num + 1) % (2 * num + 1)
  if test != 0:
    return False
  else:
    return True
# Create a function that takes a number n and returns the nth even number.
# Examples
# nth_even(1) ➞ 0
# # 0 is first even number
# nth_even(2) ➞ 2
# # 2 is second even number
# nth_even(100) ➞ 198
# Notes
# N/A
def nth_even(n):
	if n == 1:
		return 0
	else:
		return 2 * (n - 1)
# Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
# Examples
# print_list(1) ➞ [1]
# print_list(3) ➞ [1, 2, 3]
# print_list(6) ➞ [1, 2, 3, 4, 5, 6]
# Notes
#     READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
#     Don't overthink this challenge; it's not supposed to be hard.
def print_list(n):
  result = []
  i = 1
  while i <= n:
    result += [i]
    i += 1
  return result
# Create a function that takes length and width and finds the perimeter of a rectangle.
# Examples
# find_perimeter(6, 7) ➞ 26
# find_perimeter(20, 10) ➞ 60
# find_perimeter(2, 9) ➞ 22
# Notes
#     Don't forget to return the result.
#     If you're stuck, find help in the Resources tab.
#     If you're really stuck, find solutions in the Solutions tab.
def find_perimeter(length, width):
	return length * 2 + width * 2
# Create a function that takes the age and return the age in days.
# Examples
# calc_age(65) ➞ 23725
# calc_age(0) ➞ 0
# calc_age(20) ➞ 7300
# Notes
#     Use 365 days as the length of a year for this challenge.
#     Ignore leap years and days between last birthday and now.
#     Expect only positive integer inputs.
def calc_age(age):
	return age * 365
# Create a function that takes a string and returns it as an integer.
# Examples
# string_int("6") ➞ 6
# string_int("1000") ➞ 1000
# string_int("12") ➞ 12
# Notes
#     All numbers will be whole.
#     All numbers will be positive.
def string_int(txt):
	return int(txt)
# There is a single operator in Python, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
# Examples
# remainder(1, 3) ➞ 1
# remainder(3, 4) ➞ 3
# remainder(5, 5) ➞ 0
# remainder(7, 2) ➞ 1
# Notes
#     The tests only use positive integers.
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
def remainder(x, y):
	return x % y
# Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
# Examples
# next_edge(8, 10) ➞ 17
# next_edge(5, 7) ➞ 11
# next_edge(9, 2) ➞ 10
# Notes
#     (side1 + side2) - 1 = maximum range of third edge.
#     The side lengths of the triangle are positive integers.
#     Don't forget to return the result.
def next_edge(side1, side2):
	return (side1 + side2) - 1
# Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
# Examples
# cubes(3) ➞ 27
# cubes(5) ➞ 125
# cubes(10) ➞ 1000
# Notes
#     READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
#     Don't overthink this challenge; it's not supposed to be hard.
def cubes(a):
	return a ** 3
# Write a function that converts hours into seconds.
# Examples
# how_many_seconds(2) ➞ 7200
# how_many_seconds(10) ➞ 36000
# how_many_seconds(24) ➞ 86400
# Notes
#     60 seconds in a minute, 60 minutes in an hour
#     Don't forget to return your answer.
def how_many_seconds(hours):
	return hours * 60 * 60
# Write a function that takes the base and height of a triangle and return its area.
# Examples
# tri_area(3, 2) ➞ 3
# tri_area(7, 4) ➞ 14
# tri_area(10, 10) ➞ 50
# Notes
#     The area of a triangle is: (base * height) / 2
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def tri_area(base, height):
	return (base * height) / 2
# Write a function that takes an integer minutes and converts it to seconds.
# Examples
# convert(5) ➞ 300
# convert(3) ➞ 180
# convert(2) ➞ 120
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def convert(minutes):
	return minutes * 60
# Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
# Examples
# stutter("incredible") ➞ "in... in... incredible?"
# stutter("enthusiastic") ➞ "en... en... enthusiastic?"
# stutter("outstanding") ➞ "ou... ou... outstanding?"
# Notes
# Assume all input is in lower case and at least two characters long.
def stutter(word):
  firstTwo = word[:2]
  return "%s... %s... %s?" % (firstTwo, firstTwo, word)
# Create a function that takes a number as an argument, increments the number by +1 and returns the result.
# Examples
# addition(0) ➞ 1
# addition(9) ➞ 10
# addition(-3) ➞ -2
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def addition(num):
	return num + 1
# Create a function that takes two numbers as arguments and return their sum.
# Examples
# addition(3, 2) ➞ 5
# addition(-3, -6) ➞ -9
# addition(7, 3) ➞ 10
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def addition(a, b):
	return a + b
# Create a function that takes a list and returns the difference between the biggest and smallest numbers.
# Examples
# difference_max_min([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
# # Smallest number is -50, biggest is 32.
# difference_max_min([44, 32, 86, 19]) ➞ 67
# # Smallest number is 19, biggest is 86.
# Notes
# N/A
def difference_max_min(lst):
	return max(lst) - min(lst)