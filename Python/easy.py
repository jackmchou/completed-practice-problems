# Create a function that takes a single string as argument and returns an ordered list containing the indices of all capital letters in the string.
# Examples

# index_of_caps("eDaBiT") ➞ [1, 3, 5]

# index_of_caps("eQuINoX") ➞ [1, 3, 4, 6]

# index_of_caps("determine") ➞ []

# index_of_caps("STRIKE") ➞ [0, 1, 2, 3, 4, 5]

# index_of_caps("sUn") ➞ [1]

# Notes

#     Return an empty list if no uppercase letters are found in the string.
#     Special characters ($#@%) and numbers will be included in some test cases.
#     Assume all words do not have duplicate letters.

def index_of_caps(word):
	arr = []
	for letter in word:
		if letter.isupper():
			arr.append(word.index(letter))
	return arr

# Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.
# Examples

# num_layers(1) ➞ "0.001m"
# # Paper folded once is 1mm (equal to 0.001m)

# num_layers(4) ➞ "0.008m"
# # Paper folded 4 times is 8mm (equal to 0.008m)

# num_layers(21) ➞ "1048.576m"
# # Paper folded 21 times is 1048576mm (equal to 1048.576m)

# Notes

#     There are 1000mm in a single meter.
#     Don't round answers.
def num_layers(n):
	thickness = 2 ** n * 0.5 / 1000
	return "%sm" % (thickness) if n > 0 else "0.0005m"
# Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
# Examples

# reverse(True) ➞ False

# reverse(False) ➞ True

# reverse(0) ➞ "boolean expected"

# reverse(None) ➞ "boolean expected"

# Notes

#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def reverse(arg):
	return not(arg) if isinstance(arg, bool) else "boolean expected"
# Create a function that takes a string and returns a string in which each character is repeated once.
# Examples

# double_char("String") ➞ "SSttrriinngg"

# double_char("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

# double_char("1234!_ ") ➞ "11223344!!__  "

# Notes

# All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.
def double_char(txt):
	return ''.join([char * 2 for char in txt])
# Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.
# Examples
# front3("Python") ➞ "PytPytPyt"
# front3("Cucumber") ➞ "CucCucCuc"
# front3("bioshock") ➞ "biobiobio"
# Notes
# Don't forget to return the result.
def front3(txt):
	return txt[0:3] * 3
# Given a string, return True if its length is even or False if the length is odd.
# Examples
# odd_or_even("apples") ➞ True
# # The word "apples" has 6 characters.
# # 6 is an even number, so the program outputs True.
# odd_or_even("pears") ➞ False
# # "pears" has 5 letters, and 5 is odd.
# # Therefore the program outputs False.
# odd_or_even("cherry") ➞ True
# Notes
# N/A
def odd_or_even(word):
	return len(word) % 2 == 0
# Create a function that takes as a parameter a list of "stringified" numbers and returns a list of numbers.
# Example:
# ["1", "3", "3.6"] ➞ [1, 3, 3.6]
# Examples
# to_number_list(["9.4", "4.2"]) ➞ [9.4, 4.2]
# to_number_list(["99", "20"]) ➞ [99, 20]
# to_number_list(["9.5", "8.8"]) ➞ [9.5, 8.8]
# Notes
# Some inputs are floats.
def to_number_list(lst):
	return list(map(float, lst))
# Create a function that takes a word and returns the new word without including the first character.
# Examples
# new_word("apple") ➞ "pple"
# new_word("cherry") ➞ "herry"
# new_word("plum") ➞ "lum"
# Notes
# The input is always a valid word.
def new_word(word):
	return word[1:]
# Create a function that counts how many D's are in a sentence.
# Examples
# count_d("My friend Dylan got distracted in school.") ➞ 4
# count_d("Debris was scattered all over the yard.") ➞ 3
# count_d("The rodents hibernated in their den.") ➞ 3
# Notes
#     Your function must be case-insensitive.
#     Remember to return the result.
#     Check the Resources for help.
def count_d(sentence):
	return sentence.lower().count('d')
# Creates a function that takes a string and returns the concatenated first and last character.
# Examples
# first_last("ganesh") ➞ "gh"
# first_last("kali") ➞ "ki"
# first_last("shiva") ➞ "sa"
# first_last("vishnu") ➞ "vu"
# first_last("durga") ➞ "da"
# Notes
# There is no empty string.
def first_last(name):
  return name[0] + name[len(name) - 1]
# Create a function that takes an equation (e.g. "1+1"), and returns the answer.
# Examples
# equation("1+1") ➞ 2
# equation("7*4-2") ➞ 26
# equation("1+1+1+1+1") ➞ 5
# Notes
# Supported operators are +, -, and *.
def equation(s):
	return eval(s)
# You can assign variables from lists with destructuring like this:
# arr = ["eyes", "nose", "lips", "ears"]
# eyes, nose, lips, ears = arr
# If you don't need every list index stored in a named variable, you can use _ as a throwaway variable.
# arr = ["eyes", "nose", "lips", "ears"]
# _ , nose, _, _ = arr
# ... this assigns the value in arr[1] to the variable nose. The values in each other index will be assigned to the variable _ in order, overwriting each previous value. nose now holds the string "nose", and _ now holds the string "ears".
# Use destructuring assignment on the given list to assign the string "lips" to the variable provided. Do not use list indexing, or assigning variable names to any of the other strings.
# Notes
# Check the Resources tab for more examples.
# DO NOT change arr
# DO NOT USE lips = arr[2]
# "eyes", "nose", and "ears" should not be assigned to anything
arr = ["eyes", "nose", "lips", "ears"]
_, _, lips, _ = arr
# Create a function that returns True if the combined weight of a car car and the weight of the passengers p in the car is less than the maximum weight max_weight the car is allowed to carry. Otherwise, return False. The weight of the car and the weight of the passengers are given in pounds. The maximum weight is given in kilograms.
# Examples
# weight_allowed(3000, [150, 201, 75, 88, 195], 1700) ➞ True
# weight_allowed(3200, [220, 101, 115, 228, 15], 1700) ➞ False
# weight_allowed(2900, [225, 171, 300, 274, 191], 1850) ➞ True
# Notes
# 1 pound = 0.453592 kilogram
def weight_allowed(car, p, max_weight):
	return (sum(p) + car) * 0.453592 < max_weight
# Create a function that accepts a list of numbers and return both the minimum and maximum numbers, in that order (as a list).
# Examples
# min_max([1, 2, 3, 4, 5]) ➞ [1, 5]
# min_max([2334454, 5]) ➞ [5, 2334454]
# min_max([1]) ➞ [1, 1]
# Notes
# All test lists will have at least one element and are valid.
def min_max(nums):
	return [min(nums), max(nums)]
# Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.
# Pictures of Rubik's Cubes
#     The Rubik's cube of side length 1 has 6 stickers.
#     The Rubik's cube of side length 2 has 24 stickers.
#     The Rubik's cube of side length 3 has 54 stickers.
# Examples
# how_many_stickers(1) ➞ 6
# how_many_stickers(2) ➞ 24
# how_many_stickers(3) ➞ 54
# Notes
#     Keep in mind there are six faces to keep track of.
#     Expect only positive whole numbers.
def how_many_stickers(n):
	return n ** 2 * 6
# I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.
#     n is the number of square meters I can paint.
#     w and h are the widths and heights of a single wall in meters.
# Examples
# how_many_walls(100, 4, 5) ➞ 5
# how_many_walls(10, 15, 12) ➞ 0
# how_many_walls(41, 3, 6) ➞ 2
# Notes
#     Don't count a wall if I don't manage to finish painting all of it before I run out of paint.
#     All walls will have the same dimensions.
#     All numbers will be positive integers.
def how_many_walls(n, w, h):
	return n // (w * h)
# You can assign variables from lists like this:
# first, _ , last = [1, 2, 8]
# first   = lst[0]
# _   = ignores second value (2)
# last   = lst[-1]
# print(first) ➞ outputs 1
# print(last) ➞ outputs 8
# Using Destructuring Assignment (check the Resources tab), your task is to unpack the list writeyourcodehere into three variables, first, a variable to ignore all middle values and last.
# Notes
#     Your solution should be just One Line code.
#     If your solution is longer than one line of code, please check the Resources tab.
#     Another version of this challenge.
# DO NOT USE first = writeyourcodehere[0]
# DO NOT USE last = writeyourcodehere[-1]
# Check Resources Tab for HELP
first, *_, last = [1, 2, 3, 4, 5, 6, 7, 8]
# Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
# Examples
# area_shape(2, 3, "triangle") ➞ 3
# area_shape(8, 6, "parallelogram") ➞ 48
# area_shape(2.9, 1.3, "parallelogram") ➞ 3.77
# Notes
#     Area of a triangle is 0.5 * b * h
#     Area of a parallelogram is b * h
#     Assume triangle and parallelogram are the only inputs for shape.
def area_shape(base, height, shape):
	return 0.5 * base * height if shape == "triangle" else base * height
# Create a function that takes a number and return a list of three numbers: half of the number, quarter of the number and an eighth of the number.
# Examples
# half_quarter_eighth(6) ➞ [3, 1.5, 0.75]
# half_quarter_eighth(22) ➞ [11, 5.5, 2.75]
# half_quarter_eighth(25) ➞ [12.5, 6.25, 3.125]
# Notes
# The order of the list is: half, quarter, eighth.
def half_quarter_eighth(n):
	return [n * 0.5, n * 0.25, n * 0.125]
# Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.
# Examples
# how_many_times(5) ➞ "Edaaaaabit"
# how_many_times(0) ➞ "Edbit"
# how_many_times(12) ➞ "Edaaaaaaaaaaaabit"
# Notes
#     The string must start with "Ed" and end with "bit".
#     You'll only be given integers as test input.
def how_many_times(num):
	return "Ed{}bit".format("a" * num)
# Create a function that concatenates n input lists, where n is variable.
# Examples
# concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
# concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
# concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
# concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
# Notes
# Lists should be concatenated in order of the arguments.
def concat(*args):
  result = []
  for arr in args:
    result += arr
  return result
# Create a function that takes a string, checks if it has the same number of "x"s and "o"s and returns either True or False.
#     Return a boolean value (True or False).
#     Return True if the amount of x's and o's are the same.
#     Return False if they aren't the same amount.
#     The string can contain any character.
#     When "x" and "o" are not in the string, return True.
# Examples
# XO("ooxx") ➞ True
# XO("xooxx") ➞ False
# XO("ooxXm") ➞ True
# # Case insensitive.
# XO("zpzpzpp") ➞ True
# # Returns True if no x and o.
# XO("zzoo") ➞ False
# Notes
#     Remember to return True if there aren't any x's or o's.
#     Must be case insensitive.
def XO(txt):
  txt = txt.lower()
  return True if txt.count('o') == txt.count('x') else False
# You can assign variables from lists like this:
# lst = [1, 2, 3, 4, 5, 6]
# first = lst[0]
# middle = lst[1:-1]
# last = lst[-1]
# print(first) ➞ outputs 1
# print(middle) ➞ outputs [2, 3, 4, 5]
# print(last) ➞ outputs 6
# With Python 3, you can assign variables from lists in a much more succinct way. Create variables first, middle and last from the given list using destructuring assignment (check the Resources tab for some examples), where:
# first  ➞ 1
# middle ➞ [2, 3, 4, 5]
# last ➞ 6
# Your task is to unpack the list writeyourcodehere into three variables, being first, middle, and last, with middle being everything in between the first and last element. Then print all three variables.
# Notes
#     Your solution should be just one line of code.
#     If your solution is longer than one line of code, please review the Resources tab.
first, *middle, last = [1, 2, 3, 4, 5, 6]
# I'd like to calculate how long on average I've lived in the same house.
# Given a person's age and the number of times they've moved house as moves, return the average number of years that they've spent living in the same house.
# Examples
# years_in_one_house(30, 1) ➞ 15
# years_in_one_house(15, 2) ➞ 5
# years_in_one_house(80, 0) ➞ 80
# Notes
#     You can assume that the tests include people who've always lived in a house.
#     Round to the nearest year.
def years_in_one_house(age, moves):
	return round(age / (moves + 1)) if moves != 0 else age
# Create a function that takes a string (will be a person's first and last name) and returns a string with the first and last name swapped.
# Examples
# name_shuffle("Donald Trump") ➞ "Trump Donald"
# name_shuffle("Rosie O'Donnell") ➞ "O'Donnell Rosie"
# name_shuffle("Seymour Butts") ➞ "Butts Seymour"
# Notes
#     There will be exactly one space between the first and last name.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def name_shuffle(txt):
	return ' '.join(list(reversed(txt.split(' '))))
# Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
# Examples
# sum_lst([1, 2, 3, 4, 5]) ➞ 15
# sum_lst([-1, 0, 1]) ➞ 0
# sum_lst([0, 4, 8, 12]) ➞ 24
# Notes
#     READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
#     Don't overthink this challenge; it's not supposed to be hard.
def sum_lst(lst):
	total = 0
	for i in lst:
		total += i
	return total
# Given a list of numbers, return True if the sum of the values in the list is less than 100; otherwise return False.
# Examples
# list_less_than_100([5, 57]) ➞ True
# list_less_than_100([77, 30]) ➞ False
# list_less_than_100([0]) ➞ True
# Notes
# N/A
def list_less_than_100(lst):
	return True if sum(lst) < 100 else False
# Create a function that takes a string txt and a number n and returns the repeated string n number of times.
# If given argument txt is not a string, return Not A String !!
# Examples
# repeat_string("Mubashir", 2) ➞ "MubashirMubashir"
# repeat_string("Matt", 3) ➞ "MattMattMatt"
# repeat_string(1990, 7) ➞ "Not A String !!"
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def repeat_string(txt, n):
	return "Not A String !!" if type(txt) != str else txt * n
# Write a function to check if a list contains a particular number.
# Examples
# check([1, 2, 3, 4, 5], 3) ➞ True
# check([1, 1, 2, 1, 1], 3) ➞ False
# check([5, 5, 5, 6], 5) ➞ True
# check([], 5) ➞ False
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def check(lst, el):
	return el in lst
# Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
# Examples
# return_negative(4) ➞ -4
# return_negative(15) ➞ -15
# return_negative(-4) ➞ -4
# return_negative(0) ➞ 0
# Notes
# N/A
def return_negative(n):
	return n if n < 0 else n * -1
# Given two arguments, return a list which contains these two arguments.
# Examples
# make_pair(1, 2) ➞ [1, 2]
# make_pair(51, 21) ➞ [51, 21]
# make_pair(512124, 215) ➞ [512124, 215]
# Notes
# N/A
def make_pair(num1, num2):
	return [num1, num2]
# Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
# Examples
# inches_to_feet(324) ➞ 27
# inches_to_feet(12) ➞ 1
# inches_to_feet(36) ➞ 3
# Notes
#     If inches are under 12, return 0.
#     12 inches = 1 foot.
def inches_to_feet(inches):
	return 0 if inches < 12 else inches / 12
# Given a list of integers, return the difference between the largest and smallest integers in the list.
# Examples
# difference([10, 15, 20, 2, 10, 6]) ➞ 18
# # 20 - 2 = 18
# difference([-3, 4, -9, -1, -2, 15]) ➞ 24
# # 15 - (-9) = 24
# difference([4, 17, 12, 2, 10, 2]) ➞ 15
# Notes
# N/A
def difference(nums):
	return max(nums) - min(nums)
# Create a function that accepts a list and returns the last item in the list. The list can be either homogeneous or heterogeneous.
# Examples
# get_last_item([1, 2, 3]) ➞ 3
# get_last_item(["cat", "dog", "duck"]) ➞ "duck"
# get_last_item([True, False, True]) ➞ True
# get_last_item([7, "String", False]) ➞ False
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def get_last_item(lst):
	return lst[-1]
# Create a function that checks to see if two object arguments are equal to one another. Return True if the objects are equal, otherwise, return False.
# Examples
# # The first object parameter.
# obj_one = {
#   "name": "Benny",
#   "phone": "3325558745",
#   "email": "benny@edabit.com"
# }
# # The second object parameter.
# obj_two = {
#   "name": "Jason",
#   "phone": "9853759720",
#   "email": "jason@edabit.com"
# }
# is_equal(obj_one, obj_two)
# ➞ False
# # The first object parameter.
# obj_one = {
#   "name": "Jason",
#   "phone": "9853759720",
#   "email": "jason@edabit.com"
# }
# # The second object parameter.
# obj_two = {
#   "name": "Jason",
#   "phone": "9853759720",
#   "email": "jason@edabit.com"
# }
# is_equal(obj_one, obj_two)
# ➞ True
# Notes
# If you have a suggestion on how to make these instructions easier to understand, please leave a comment. Your feedback is greatly appreciated.
def is_equal(obj_one, obj_two):
	return obj_one == obj_two
# Create a function that takes an integer and return True if it's divisible by 100, otherwise return False.
# Examples
# divisible(1) ➞ False
# divisible(1000) ➞ True
# divisible(100) ➞ True
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def divisible(num):
	return num % 100 == 0
# Python has a logical operator and. The and operator takes two boolean values, and returns True if both values are True.
# Consider a and b:
#     a is checked if it is True or False.
#     If a is False, False is returned.
#     b is checked if it is True or False.
#     If b is False, False is returned.
#     Otherwise, True is returned (as both a and b are therefore True ).
# The and operator will only return True for True and True.
# Make a function using the and operator.
# Examples
# And(True, False) ➞ False
# And(True, True) ➞ True
# And(False, True) ➞ False
# And(False, False) ➞ False
# Notes
# N/A
def And(a, b):
	return a and b
# Create a function that returns its given argument, but by using a lambda function.
# A lambda function is constructed like so:
# lambda_func=lambda """parameters""":#code here
# Examples
# lambda_func(3) ➞ 3
# lambda_func("3") ➞ "3"
# lambda_func(True) ➞ True
# Notes
# Check the Resources tab for more information on lambda functions.
# create your lambda function below
lambda_func = lambda param : param
# Create a function to calculate how many characters in total are needed to make up the shape. You will be given a list of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).
# Examples
# count_characters([
#   "###",
#   "###",
#   "###"
# ]) ➞ 9
# count_characters([
#   "22222222",
#   "22222222",
# ]) ➞ 16
# count_characters([
#   "------------------"
# ]) ➞ 18
# count_characters([]) ➞ 0
# count_characters(["", ""]) ➞ 0
# Notes
# Return 0 if the given list is empty.
def count_characters(lst):
  sum = 0
  for item in lst:
    sum += len(item)
  return sum
# Create a function that takes two strings as arguments and return either True or False depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
# Examples
# comp("AB", "CD") ➞ True
# comp("ABC", "DE") ➞ False
# comp("hello", "edabit") ➞ False
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def comp(txt1, txt2):
	return len(txt1) == len(txt2)
# Given two integers, a and b, return True if a can be divided evenly by b. Return False otherwise.
# Examples
# divides_evenly(98, 7) ➞ True
# # 98/7 = 14
# divides_evenly(85, 4) ➞ False
# # 85/4 = 21.25
# Notes
# a will always be greater than or equal to b.
def divides_evenly(a, b):
	return a % b == 0
# Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
# Examples
# max_num(3, 7) ➞ 7
# max_num(-1, 0) ➞ 0
# max_num(1000, 400) ➞ 1000
# Notes
#     READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
#     Don't overthink this challenge; it's not supposed to be hard.
def max_num(n1, n2):
	return n1 if n1 > n2 else n2
# Fix the code in the Code tab so the function returns true if and only if x is equal to 7. Try to debug code and pass all the tests.
# Examples
# is_seven(4) ➞ False
# is_seven(9) ➞ False
# is_seven(7) ➞ True
# Notes
# The bug can be hard to find, so look closely!
def is_seven(x):
	return x == 7
# Create a function that takes a number as its only argument and returns True if it's less than or equal to zero, otherwise return False.
# Examples
# less_than_or_equal_to_zero(5) ➞ False
# less_than_or_equal_to_zero(0) ➞ True
# less_than_or_equal_to_zero(-2) ➞ True
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def less_than_or_equal_to_zero(num):
	return num <= 0
# Given two numbers, return True if the sum of both numbers is less than 100. Otherwise return False.
# Examples
# less_than_100(22, 15) ➞ True
# # 22 + 15 = 37
# less_than_100(83, 34) ➞ False
# # 83 + 34 = 117
# less_than_100(3, 77) ➞ true
# Notes
# N/A
def less_than_100(a, b):
	return (a + b) < 100
# Create a function that takes a name and returns a greeting in the form of a string.
# Examples
# hello_name("Gerald") ➞ "Hello Gerald!"
# hello_name("Tiffany") ➞ "Hello Tiffany!"
# hello_name("Ed") ➞ "Hello Ed!"
# Notes
#     The input is always a name (as string).
#     Don't forget the exclamation mark!
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def hello_name(name):
  return 'Hello ' + name + '!'
# Create a function that takes three arguments prob, prize, pay and returns True if prob * prize > pay; otherwise return False.
# To illustrate:
# profitable_gamble(0.2, 50, 9)
# ... should yield True, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
# Examples
# profitable_gamble(0.2, 50, 9) ➞ True
# profitable_gamble(0.9, 1, 2) ➞ False
# profitable_gamble(0.9, 3, 2) ➞ True
# Notes
# A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.
def profitable_gamble(prob, prize, pay):
  return prob * prize > pay
# Create a function that returns True if an integer is evenly divisible by 5, and False otherwise.
# Examples
# divisible_by_five(5) ➞ True
# divisible_by_five(-55) ➞ True
# divisible_by_five(37) ➞ False
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def divisible_by_five(n):
	return n % 5 == 0
# Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
# Examples
# frames(1, 1) ➞ 60
# frames(10, 1) ➞ 600
# frames(10, 25) ➞ 15000
# Notes
# FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
def frames(minutes, fps):
	return minutes * fps * 60
# Create a function that takes a list and returns the sum of all numbers in the list.
# Examples
# get_sum_of_elements([2, 7, 4]) ➞ 13
# get_sum_of_elements([45, 3, 0]) ➞ 48
# get_sum_of_elements([-2, 84, 23]) ➞ 105
# Notes
# N/A
def get_sum_of_elements(lst):
	return sum(lst)
# Check the principles of minimalist code in the intro to the first challenge.
# In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
# Write a function that returns the strings:
#     "both" if both given booleans a and b are True.
#     "first" if only a is True.
#     "second" if only b is True .
#     "neither" if both a and b are False.
# Tips
# If-else statements can be written as a oneliner using Python's ternary operator.
# For example, the code:
# def startswith(name):
#   if name[0] in "AEIOU":
#     return "vowel"
#   else:
#     return "consonant"
# Can be simplified to:
# def startswith(name):
#   return "vowel" if name[0] in "AEIOU" else "consonant"
# Bonus
# You can concatenate as many ternary operators as you want. However, concatenating too many will definitely diminish the readability of your code.
# "majority" if  x > 50 else "minority" if x < 50 else "draw"
# Notes
#     This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
#     Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.
#     You can find all the exercises in this series over here.
def are_true(a, b):
	return "both" if a == True and b == True else "first" if a == True else "second" if b == True else "neither"
# Check the principles of minimalist code in the intro to the first challenge.
# In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
# Write a function that returns the third character of the third string a given list of strings. Return False if it can't be found.
# Tips
# The operator and can be used to assign or return the first falsy value among two or more elements. If no falsy value is found, the last element will be returned.
# For example, the code:
# def all_of_these(a, b, c):
#     return a if not a else b if not b else c
# Can be simplified to:
# def all_of_these(a, b, c):
#     return a and b and c
# Bonus
# Once a falsy value is found, the rest of the elements will not be checked. For example, if we wanted to access the first element of a list, but the list happened to be empty, we would get an error. We can use and to work around this issue:
# lst1 = [1, 2, 3]
# lst2 = []
# lst1 and lst1[0] ➞ 1
# lst2 and lst2[0] ➞ []
# Notes
#     This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
#     Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.
#     You can find all the exercises in this series over here.
add_2 = lambda x: x + 2
add_3 = lambda x: x + 3
add_5 = lambda x: x + 5
add_7 = lambda x: x + 7
add_11 = lambda x: x + 11
# Check the principles of minimalist code in the intro to the first challenge.
# In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
# Write a function that returns the boolean True if the given two lists do not share any numbers, and False otherwise.
# Tips
# The operators in and not in test for membership. x in s evaluates to True if x is a member of s, and False otherwise.
# For example, the code:
# def startswithvowel(word):
#     for vowel in "aeiou":
#         if word[0] == vowel:
#             return True
#     return False
# Can be simplified to:
# def startswithvowel(word):
#     return word[0] in "aeiou"
# Bonus
# Here's some more examples.
# 12 in [1, 50, 12, 43, 7] ➞ True
# 1 in [12, 111111, "x"] ➞ False
# [3, 4] in [1, 2, 3, 4, 5] ➞ False
# 3 in (True, 3, ["odd", "even"]) ➞ True
# "odd" in (True, 3, ["odd", "even"]) ➞ False
# "hello" in "hellomyfriend" ➞ True
# "myfriend" not in "hello my friend" ➞ True
# "bye" not in "bye my friend" ➞ False
# 2 not in {0: "even", 1: "odd"} ➞ True
# 1 not in {0: "even", 1: "odd"} ➞ False
# Notes
#     This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
#     Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.
#     You can find all the exercises in this series over here.
def not_share(lst1, lst2):
	for i in lst1:
		if i in lst2:
			return False
	return True
# Check the principles of minimalist code in the intro to the first challenge.
# In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
# Write a function that returns the boolean True if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.
# Tips
# Executing a return will effectively end your function.
# For example, the code:
# def compare_to_100(x):
#     if x > 100:
#         return "greater"
#     elif x < 100:
#         return "smaller"
#     else:
#         return "equal"
# Can be simplified to:
# def compare_to_100(x):
#     if x > 100:
#         return "greater"
#     if x < 100:
#         return "smaller"
#     return "equal"
#     If x is greater than 100, Python will not execute the code past the first return.
#     If x is smaller than 100, Python will not execute the code inside the first if statement or past the second return.
#     If x is equal to 100, Python will not execute the code inside the two if statements.
#     This can only be used if you have a return inside your if statement.
# Bonus
# Further simplification of the code above:
# def compare_to_100(x):
#     return "greater" if x > 100 else "smaller" if x < 100 else "equal"
# Notes
#     This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
#     Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.
#     You can find all the exercises in this series over here.
# Check the principles of minimalist code in the intro to the first challenge.
def equilibrium(x):
	return "positive" if x > 0 else "negative" if x < 0 else True
# In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section down below.
# Write a function that returns the string "even" if the given integer is even, and the string "odd" if it's odd.
# Tips
# Converting a boolean, or something that will ultimately be interpreted as a boolean, into a boolean is redundant.
# For example, the code:
# boolean = bool(x < 4)
# return boolean == True
# Is equivalent to simply:
# return x < 4
#     A comparison with <, <=, ==, !=, >=, > will always result in a boolean, therefore using the function bool() is totally unnecessary.
#     boolean == True is redundant, as it will always return boolean.
#     To obtain the opposite of boolean we could use boolean == False. However, a much cleaner way of doing this is simply not boolean.
#     While preserving readability, avoid declaring unnecessary variables.
# Notes
#     This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in Comments.
#     Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in Comments.
#     You can find all the exercises in this series over here.
def parity(n):
	return "even" if n % 2 == 0 else "odd"
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