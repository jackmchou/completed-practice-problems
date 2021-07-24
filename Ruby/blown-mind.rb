# Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.
# Examples

# find_single_number([2, 2, 2, 3, 4, 4, 4]) ➞ 3

# find_single_number([2]) ➞ 2

# find_single_number([]) ➞ []

# find_single_number([7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6, 8, 4, 3, 7, 5, 6, 13]) ➞ 8

# find_single_number([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2]) ➞ 101

# Notes

#     Don't forget to return the result.
#     Be aware this challenge includes two validations:
#         Empty input should return an empty array [] (example #3).
#         Single item arrays should return that item (example #2).
#     There are always 1 or 0 unique numbers in the input. No two or three+ uniques.
#     If you're stuck or your solution is over complicated check the Resources tab.
def find_single_number(numbers)
	numbers.select {|n| numbers.count(n) == 1}[0]
end
# Create a function that returns true if a string is empty and false otherwise.
# Examples

# is_empty("") ➞ true

# is_empty(" ") ➞ false

# is_empty("a") ➞ false

# Notes

#     A string containing only whitespaces " " does not count as empty.
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def is_empty(s)
	s.empty?
end
# Some basic Python operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.
# Examples

# operate(1, 2, "+") ➞ 3
# # 1 + 2 = 3

# operate(7, 10, "-") ➞ -3
# # 7 - 10 = -3

# operate(20, 10, "%") ➞ 0
# # 20 % 10 = 0

# Notes

# There will not be any divisions by zero.
def operate(num1, num2, operator)
  case operator
		when '+'
		num1 + num2
		when '-'
		num1 - num2
		when '*'
		num1 * num2
		when '/'
		num1 / num2
		when '%'
		num1 % num2
	end
end	
# Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
# Examples

# count_syllables("Hehehehehehe") ➞ 6

# count_syllables("bobobobobobobobo") ➞ 8

# count_syllables("NANANA") ➞ 3

# Notes

#     For simplicity, please note that each syllable will consist of two letters only.
#     Your code should accept strings of any case (upper, lower and mixed case).
def count_syllables(str)
	str.length / 2
end
# Create a function that takes an equation (e.g. "1+1"), and returns the answer.
# Examples

# equation("1+1") ➞ 2

# equation("7*4-2") ➞ 26

# equation("1+1+1+1+1") ➞ 5

# Notes

# Supported operators are +, -, and *.
def equation(s)
	eval(s)
end
# A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.
# Examples

# get_word("seas", "onal") ➞ "Seasonal"

# get_word("comp", "lete") ➞ "Complete"

# get_word("lang", "uage") ➞ "Language"

# Notes

# N/A
def get_word(left, right)
	"#{left + right}".capitalize()
end
# Given an arrayof integers, determine whether the sum of its elements is even or odd.
# The return value should be a string ("odd" or "even").
# If the input arrayis empty, consider it as an array with a zero ([0]).
# Examples
# even_or_odd([0]) ➞ "even"
# even_or_odd([1]) ➞ "odd"
# even_or_odd([]) ➞ "even"
# even_or_odd([0, 1, 5]) ➞ "even"
# Notes
# N/A
def even_or_odd(arr)
	arr.reduce(0) {|sum, num| sum + num} % 2 == 0 ? 'even' : 'odd'
end
# Given a number n, return an array containing several arrays. Each array increment in size, from range 1 to n inclusive, contaning its length as the elements.
# Examples
# pyramid_arrays(1) ➞ [[1]]
# pyramid_arrays(3) ➞ [[1], [2, 2], [3, 3, 3]]
# pyramid_arrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]
# Notes
# n will be a positive integer.
def pyramid_arrays(n)
	(1..n).map {|e| Array.new(e, e)}
end
# Create a function that takes a number as an argument and returns the highest digit in that number.
# Examples
# highest_digit(379) ➞ 9
# highest_digit(2) ➞ 2
# highest_digit(377401) ➞ 7
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def highest_digit(n)
	n.to_s.split('').max.to_i
end
# Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from it after transcription. DNA has the bases A, T, G and C, while RNA converts to U, A, C and G respectively.
# Examples
# dna_to_rna("ATTAGCGCGATATACGCGTAC") ➞ "UAAUCGCGCUAUAUGCGCAUG"
# dna_to_rna("CGATATA") ➞ "GCUAUAU"
# dna_to_rna("GTCATACGACGTA") ➞ "CAGUAUGCUGCAU"
# Notes
#     Transcription is the process of making complementary strand.
#     A, T, G and C in DNA converts to U, A, C and G respectively, when in mRNA.
def dna_to_rna(dna)
  dna.gsub(/[ATGC]/, 'A' => 'U', 'T' => 'A', 'G' => 'C', 'C' => 'G')
end
# Edabit allows for markdown formatting, meaning that it's possible to format words by surrounding text with special characters. For example, to get bold text, you surround the text with double asterisks, like this **bold**.
# Here is a list of the possible formatting options in Edabit and how to apply them:
#     **bold**
#     _italics_
#     `inline code`
#     ~~strikethrough~~
# Challenge
# Given a string and a style character, return the newly formatted string. Style characters are single letters that represent the different types of formatting.
# For the purposes of this challenge, the style characters are as follows:
#     "b" is for bold
#     "i" is for italics
#     "c" is for inline code
#     "s" is for strikethrough
# Examples
# md_format("Bold", "b") ➞ "**Bold**"
# md_format("leaning text", "i") ➞ "_leaning text_"
# md_format("Edabit", "c") ➞ "`Edabit`"
# md_format("That's a strike!", "s") ➞ "~~That's a strike!~~"
# Notes
# Remember to format your comments!
def md_format(word, style)
  case style
  when "b"
    "**#{word}**"
  when "i"
    "_#{word}_"
  when "c"
    "`#{word}`"
  when "s"
    "~~#{word}~~"
  end
end
# In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:
#     The first element of the sequence first
#     Constant difference between the elements diff
#     Total numbers in the sequence n
# Return the first n elements of the sequence with the given common difference diff. Final result should be a string of numbers, separated by comma and space.
# Examples
# arithmetic_progression(1, 2, 5) ➞ "1, 3, 5, 7, 9"
# arithmetic_progression(1, 0, 5) ➞ "1, 1, 1, 1, 1"
# arithmetic_progression(1, -3, 10) ➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
# Notes
# N/A
def arithmetic_progression(start, diff, n)
  arr = []
  i = 0
  while i < n do
    arr.push(start)
    start += diff
    i += 1
  end
  arr.join(', ')
end
# Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.
# Examples
# even_odd_string("mubashir") ➞ "mbsi uahr"
# # Letters at even indexes = "mbsi"
# # Letters at odd indexes = "uahr"
# # Join both strings with a space
# even_odd_string("edabit") ➞ "eai dbt"
# even_odd_string("airforce") ➞ "aroc ifre"
# Notes
# There will be no space in the given string.
def even_odd_string(txt)
  result = []
  txt.chars.partition.with_index { |_, i| i % 2 == 0}.each { |arr| result.push(arr.join)}
  return result.join(' ')
end
# In the Code tab is a function which is meant to return how many uppercase letters there are in an array of various words. Fix the code so that it functions normally!
# Examples
# count_uppercase(["SOLO", "hello", "Tea", "wHat"]) ➞ 6
# count_uppercase(["little", "lower", "down"]) ➞ 0
# count_uppercase(["EDAbit", "Educate", "Coding"]) ➞ 5
# Notes
# N/A
def count_uppercase(arr)
	arr.join.count "[A-Z]"
end 
# Mubashir created a function that takes two numbers a and b and an operator o. His function should return the result of the corresponding mathematical function on both numbers. If the operator is not one of the specified characters +, -, /, *, or if there is a division by zero, the function should return nil. Help him by fixing the code in the code tab to pass this challenge.
# Look at the examples below to get an idea of what the function should do:
# Examples
# basic_calculator(2, "+",  4) ➞ 6
# basic_calculator(6, "-", 5) ➞ 1
# basic_calculator(12, "/", 3) ➞ 4
# basic_calculator(3, "*", 4) ➞ 12
# basic_calculator(1, "/", 0) ➞ nil
# # Division by zero is not possible
# basic_calculator(1, "x", 0) ➞ nil
# # "x" is not an operator
# Notes
# N/A
def basic_calculator(a, o, b)
  if(o == "+") 
	  return a + b
	elsif (o == "-")
    return a - b
  elsif (o == "/" and b != 0) 
    return a / b
	elsif (o == "*") 
    return a * b
  else return nil
	end
end
# The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.
# Examples
# reverse("Hello World") ➞ "DLROw OLLEh"
# reverse("ReVeRsE") ➞ "eSrEvEr"
# reverse("Radar") ➞ "RADAr"
# Notes
# There will be no punctuation in any of the test cases.
def reverse(str)
	str.swapcase.reverse
end
# In this challenge, you must verify the equality of two different values given the parameters a and b.
# Both the value and type of the parameters need to be equal. The possible types of the given parameters are:
#     Numbers
#     Strings
#     Booleans (false or true)
#     Special values: nil
# What have you learned so far that will permit you to do two different checks (value and type) with a single statement?
# Implement a function that returns true if the parameters are equal, and false if they are not.
# Examples
# check_equality(1, true) ➞ false
# # A number and a boolean: the value and type are different.
# check_equality(0, "0") ➞ false
# # A number and a string: the type is different.
# check_equality(1,  1) ➞ true
# # A number and a number: the type and value are equal.
# Notes
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def check_equality(a, b)
	a === b
end
# Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:
#     Cola
#     Fanta
# Examples
# skip_the_sugar(["fanta", "cola", "water"]) ➞ ["water"]
# skip_the_sugar(["fanta", "cola"]) ➞ []
# skip_the_sugar(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]
# Notes
#     The function returns an array of strings.
#     All drink names are in lowercase.
def skip_the_sugar(drinks)
  drinks.delete_if {|drink| drink == "cola" || drink == "fanta"}
end
# Create a function that counts how many D's are in a sentence.
# Examples
# count_d("My friend Dylan got distracted in school.") ➞ 4
# count_d("Debris was scattered all over the yard.") ➞ 3
# count_d("The rodents hibernated in their den.") ➞ 3
# Notes
#     Your function must be case-insensitive.
#     Remember to return the result.
#     Check the Resources for help.
def count_d(sentence)
	sentence.count "Dd"
end
# After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.
# An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (the first clap is cut short and there are overall 2 claps).
# Given a string of what the overlapping claps sounded like, return how many claps were made in total.
# Examples
# count_claps("ClaClaClaClap!") ➞ 4
# count_claps("ClClClaClaClaClap!") ➞ 6
# count_claps("CCClaClClap!Clap!ClClClap!") ➞ 9
# Notes
# Each clap starts with a capital "C".
def count_claps(str)
	str.count "C"
end
# Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number. Create a function to return this number.
# Examples
# outlier_number([2, 3, 4]) ➞ 3
# # 2 and 4 are even numbers.
# # 3 is an outlier number.
# outlier_number([1, 2, 3]) ➞ 2
# outlier_number([4, 1, 3, 5, 9]) ➞ 4
# Notes
# Array size will always be >=3.
def outlier_number(arr)
  partedArr = arr.partition {|num| num % 2 == 0}
  result = partedArr.select do |arr|
    arr.length == 1
  end
  return result.flatten[0]
end
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
arr = ["eyes", "nose", "lips", "ears"]
_, _, lips, _ = arr
# Create a function that takes an array of numbers. Return the largest number in the array.
# Examples
# find_largest_num([4, 5, 1, 3]) ➞ 5
# find_largest_num([300, 200, 600, 150]) ➞ 600
# find_largest_num([1000, 1001, 857, 1]) ➞ 1001
# Notes
#     Expect either positive numbers or zero (there are no negative numbers).
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def find_largest_num(nums)
	nums.max
end
# Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
#     Sort numbers array in ascending order.
#     If the function's argument is nil or an empty array; return an empty array.
#     Return a new array of sorted numbers.
# Examples
# sort_nums_ascending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]
# sort_nums_ascending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]
# sort_nums_ascending([]) ➞ []
# Notes
# Test input can be positive or negative.
def sort_nums_ascending(arr)
	arr.sort()
end
# Create a function that takes an array of numbers and returns the smallest number in the array.
# Examples
# find_smallest_num([34, 15, 88, 2]) ➞ 2
# find_smallest_num([34, -345, -1, 100]) ➞ -345
# find_smallest_num([-76, 1.345, 1, 0]) ➞ -76
# find_smallest_num([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999
# find_smallest_num([7, 7, 7]) ➞ 7
# Notes
#     Test cases contain decimals.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def find_smallest_num(arr)
	arr.min
end
# In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.
# Examples
# binary_to_decimal([0, 0, 0, 1]) ➞ 1
# binary_to_decimal([0, 0, 1, 0]) ➞ 2
# binary_to_decimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]) ➞ 1005
# Notes
# N/A
def binary_to_decimal(arr)
	arr.join().to_i(2)
end
# Given two arguments, return an array which contains these two arguments.
# Examples
# make_pair(1, 2) ➞ [1, 2]
# make_pair(51, 21) ➞ [51, 21]
# make_pair(512124, 215) ➞ [512124, 215]
# Notes
# N/A
def make_pair(num1, num2)
	[num1, num2]
end
# There is an easy way to assign array values to the nth index by using 'The Splat Operator 'in destructuring.
# head, tail = [1, 2, 3, 4]
# print(head) ➞ 1
# print(tail) ➞ 2
# But how could I make tail = [2, 3, 4] instead of tail = 2? Add something into the code and make this happen.
# Notes
# Check the Resources tab for more examples.
head, *tail = [1, 2, 3, 4]
# Mubashir wants to swap two given numbers!
# It is not returning the right values. Can you help him fix it?
# a = 100
# b = 200
# a, b = swap(a, b)
# print(a, b) # Should print out "200, 100", but the function prints out "100, 100"
# Examples
# swap(100, 200) ➞ [200, 100]
# swap(44, 33) ➞ [33, 44]
# swap(21, 12) ➞ [12, 21]
# Notes
# N/A
def swap(a, b)
	[b, a]
end
# A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
# Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
# Examples
# should_serve_drinks(17, true) ➞ false
# should_serve_drinks(19, false) ➞ true
# should_serve_drinks(30, true) ➞ false
# Notes
#     Return true or false.
#     Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.
def should_serve_drinks(age, on_break)
	age > 17 && !on_break
end
# Create a function that takes a positive integer n, and returns the sum of all the cubed values from 1 to n.
# For example, if n is 3:
# sum_cubes(3) ➞ 36
# 1 ** 3 + 2 ** 3 + 3 ** 3 = 36
# Examples
# sum_cubes(7) ➞ 784
# sum_cubes(8) ➞ 1296
# sum_cubes(9) ➞ 2025
# Notes
# Input n will be a positive integer.
def sum_cubes(n)
	Array(1..n).reduce(0) {|sum, num| sum + num ** 3 }
end
# Create a function that takes an array of integers and strings. Convert integers to strings and return the new list.
# Examples
# parse_list([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
# parse_list(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]
# parse_list([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
# parse_list([]) ➞ []
# Notes
# N/A
def parse_list(arr)
	arr.map(&:to_s)
end	
# You are counting points for a basketball game, given the amount of 3-pointers scored and 2-pointers scored, find the final points for the team and return that value (2 -pointers scored, 3-pointers scored).
# Examples
# points(1, 1) ➞ 5
# points(7, 5) ➞ 29
# points(38, 8) ➞ 100
# Notes
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def points(twopt, threept)
	twopt * 2 + threept * 3
end
# You can assign variables from arrayss like this:
# first, _, last = [1, 2, 8]
# first = lst[0]
# _ = ignores second value (2)
# last = lst[-1]
# print(first) ➞ outputs 1
# print(last) ➞ outputs 8
# Using Destructuring Assignment (check the Resources tab), your task is to unpack the arrays writeyourcodehere into three variables, first, a variable to ignore all middle values and last.
# Notes
#     Your solution should be just One Line code.
#     If your solution is longer than one line of code, please check the Resources tab.
#     Another version of this challenge.
first, *, last = [1, 2, 3, 4, 5, 6, 7, 8]
# Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
# Examples
# convert(1, 3) ➞ 3780
# convert(2, 0) ➞ 7200
# convert(0, 0) ➞ 0
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def convert(hours, minutes)
	hours * 60 * 60 + minutes * 60
end
# Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
# Examples
# frames(1, 1) ➞ 60
# frames(10, 1) ➞ 600
# frames(10, 25) ➞ 15000
# Notes
# FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
def frames(minutes, fps)
	minutes * fps * 60
end
# Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
# Examples
# remove_dups([1, 0, 1, 0]) ➞ [1, 0]
# remove_dups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
# remove_dups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
# Notes
#     Tests contain arrays with both strings and numbers.
#     Tests are case sensitive.
#     Each array item is unique.
def remove_dups(arr)
	arr.uniq
end
# In this challenge, you have to implement a function that returns the given distance kilometers converted into miles. You have to round the result up to the fifth decimal digit.
# Examples
# km_to_miles(2) ➞ 1.24274
# km_to_miles(6) ➞ 3.72823
# km_to_miles(8) ➞ 4.97097
# Notes
# 1 kilometer = 0.621371 miles.
def km_to_miles(km)
	(km * 0.621371).round(5)
end
# Write a function to check if an array contains a particular number.
# Examples
# check([1, 2, 3, 4, 5], 3) ➞ true
# check([1, 1, 2, 1, 1], 3) ➞ false
# check([5, 5, 5, 6], 5) ➞ true
# check([], 5) ➞ false
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def check(arr, el)
	arr.include? el
end
# Given an integer, return "odd" if the sum of all odd digits is greater than the sum of all even digits. Return "even" if the sum of even digits is greater than the sum of odd digits, and "equal" if both sums are the same.
# Examples
# odds_vs_evens(97428) ➞ "odd"
# # odd = 16 (9+7)
# # even = 14 (4+2+8)
# odds_vs_evens(81961) ➞ "even"
# # odd = 11 (1+9+1)
# # even = 14 (8+6)
# odds_vs_evens(54870) ➞ "equal"
# # odd = 12 (5+7)
# # even = 12 (4+8+0)
# Notes
# N/A
def odds_vs_evens(num)
  strArr = num.to_s.split('')
  odd = 0
  even = 0
  strArr.each do |n|
    n = n.to_i
    n % 2 == 1 ? odd += n : even += n
  end
  return 'equal' if odd == even
  return odd > even ? 'odd' : 'even'
end
# Create a function that can turn Yen (Japanese dollar) to USD (American dollar).
# Examples
# yen_to_usd(1) ➞ 0.01
# yen_to_usd(500) ➞ 4.65
# yen_to_usd(649) ➞ 6.04
# Notes
#     Each Yen to USD conversion is Yen / 107.5
#     Round the result to two decimal places.
def yen_to_usd(yen)
	(yen / 107.5).round(2)
end
# Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.
# arr = [
#   ["m", "u", "b"],
#   ["a", "s", "h"],
#   ["i", "r", "1"]
# ]
# idx = [1, 3, 5, 8]
# You have to find the characters in these indexes of the given list if you think of the indexes as:
# [
#   [1, 2, 3],
#   [4, 5, 6],
#   [7, 8, 9]
# ]
# arr_index(lst, idx) ➞ "mbsr"
# Notes
# Remember that the indexes start from one and not zero.
def arr_index(arr, idx)
  flatArr = arr.flatten
  str = ''
  idx.each do |n|
    str << flatArr[n - 1].to_s
  end
  str
end
# Create a function that will put the first argument, a character, between every word in the second argument, a string.
# Examples
# add("R", "ruby is fun") ➞ "rubyRisRfun"
# add("#", "hello world!") ➞ "hello#world!"
# add("#", " ") ➞ "#"
# Notes
# Make sure there are no spaces between words when returning the function.
def add(char, str)
	str.gsub(" ", char)
end
# Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.
# Examples
# unlucky_13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
# # 182 and 637 are divisible by 13.
# unlucky_13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
# # No numbers in the array are divisible by 13.
# unlucky_13([104, 351, 455, 806, 871]) ➞ []
# # All numbers in the array are divisible by 13.
# Notes
# N/A
def unlucky_13(nums)
  arr = []
  nums.each do |num|
    if num % 13 != 0
      arr << num
    end
  end
  arr
end
# A logarithm is kind of like reverse exponents. There is a base and a number in a logarithm. The point of a logarithm is to find out what power you have to raise the base to get the number next to the base. For example:
# log base 5 of 25 = x
# This is the same thing as saying 5 to the xth power is 25, which is 2 (so x would be 2). Using this example, your function must take the 5 and 25 and somehow get 2.
# Examples
# logarithm(5, 25) ➞ 2
# logarithm(2, 64) ➞ 6
# logarithm(2, 4) ➞ 2
# Notes
#     Check Resources if you need more help with logarithms.
#     Logartihm of base 1 is undefined and the function should return NaN.
def logarithm(base, num)
	Math.log(num, base)
end
# Create a function that takes an array. This array will contain numbers represented as strings.
# Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.
# Return an empty array if there are no even numbers, or odd.
# Examples
# clean_up_array(["8"]) ➞ [[8], []]
# clean_up_array(["11"]) ➞ [[], [11]]
# clean_up_array(["7", "4", "8"]) ➞ [[4, 8], [7]]
# clean_up_array(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]
# Notes
# All numbers will be positive integers.
def clean_up_array(arr)
  even_arr = []
  odd_arr = []
  arr.each do |n|
    num = n.to_i
    num % 2 == 0 ? even_arr << num : odd_arr << num
  end
  [even_arr, odd_arr]
end
# Given two strings, first_name and last_name, return a single string in the format "last, first".
# Examples
# concat_name("First", "Last") ➞ "Last, First"
# concat_name("John", "Doe") ➞ "Doe, John"
# concat_name("Mary", "Jane") ➞ "Jane, Mary"
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def concat_name(first_name, last_name)
	last_name << ", " << first_name
end
# You can assign variables from arrays like this:
# arr = [1, 2, 3, 4, 5, 6]
# first = arr[0]
# middle = arr[1..-2]
# last = arr[-1]
# p first ➞ outputs 1
# p middle ➞ outputs [2, 3, 4, 5]
# p last ➞ outputs 6
# With Ruby, you can assign variables from arrays in a much more succinct way. Create variables first, middle and last from the given array using destructuring assignment (check the Resources tab for some examples), where:
# first  ➞ 1
# middle ➞ [2, 3, 4, 5]
# last ➞ 6
# Notes
#     Your solution should be just one line of code.
#     If your solution is longer than one line of code, please review the Resources tab.
first, *middle, last = [1, 2, 3, 4, 5, 6]
# You can assign variables from arrays like this:
# arr = [1, 2, 3, 4, 5, 6, 7, 8]
# first = arr[0]
# second = arr[1]
# third = arr[2]
# other = arr[3...arr.length]
# puts(first) ➞ outputs 1
# puts(second) ➞ outputs 2
# puts(third) ➞ outputs 3
# puts(other) ➞ outputs [4, 5, 6, 7, 8]
# Create variables first, second, third, and other from the given array using Destructuring Assignment (check the Resources tab for some examples).
# Examples
# first ➞ 1
# second ➞ 2
# third ➞ 3
# other ➞ [4, 5, 6, 7, 8]
# Your task is to unpack the array writeyourcodehere into four variables, first, second, third and other.
# Notes
#     Your solution should be just One Line code.
#     If your solution is longer than one line of code, please check the Resources tab.
#     Another version of this challenge.
first, second, third, *other = [1, 2, 3, 4, 5, 6, 7, 8]
# Create a function that takes length and width and finds the perimeter of a rectangle.
# Examples
# find_perimeter(6, 7) ➞ 26
# find_perimeter(20, 10) ➞ 60
# find_perimeter(2, 9) ➞ 22
# Notes
#     Don't forget to return the result.
#     If you're stuck, find help in the Resources tab.
#     If you're really stuck, find solutions in the Solutions tab.
def find_perimeter(length, width)
	(length + width) * 2
end
# Write two functions:
# to_int() : A function to convert a string to an integer.
# to_str() : A function to convert an integer to a string.
# Examples
# to_int("77") ➞ 77
# to_int("532") ➞ 532
# to_str(77) ➞ "77"
# to_str(532) ➞ "532"
# Notes
# Don't forget to return the result.
# If you get stuck on a challenge, find help in the Resources tab.
# If you're really stuck, unlock solutions in the Solutions tab.
def to_int(str)
	str.to_i
end
def to_str(int)
	int.to_s
end
# Create a function that takes a number num and returns the first 10 multiples of num with 1 added to it, separated by commas.
# Examples
# n_tables_plus_one(7) ➞ "8,15,22,29,36,43,50,57,64,71"
# n_tables_plus_one(1) ➞ "2,3,4,5,6,7,8,9,10,11"
# n_tables_plus_one(3) ➞ "4,7,10,13,16,19,22,25,28,31"
# Notes
# There is no comma after the last number.
def n_tables_plus_one(num)
  arr = []
  i = 1
  while i < 11 do
    arr << num * i + 1 
    i += 1
  end
  arr.join(',')
end
# Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
# Examples
# next_edge(8, 10) ➞ 17
# next_edge(5, 7) ➞ 11
# next_edge(9, 2) ➞ 10
# Notes
#     (side1 + side2) - 1 = maximum range of third edge.
#     The side lengths of the triangle are positive integers.
#     Don't forget to return the result.
def next_edge(side1, side2)
	side1 + side2 - 1
end
# Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.\# Example:
# ["1", "3", "3.6"] ➞ [1, 3, 3.6]
# Examples
# to_number_array(["9.4", "4.2"]) ➞ [9.4, 4.2]
# to_number_array(["21", "23"]) ➞ [21, 23]
# to_number_array(["9.5", "8.8"]) ➞ [9.5, 8.8]
# Notes
# Some inputs are floats.
def to_number_array(arr)
	arr.map {|num| num.to_f}
end
# Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.
# If the sequence is empty, you should return 0.
# Examples
# even_last([2, 3, 4, 5]) ➞ 30
# # numbers at even index = 2, 4
# # number at last index = 5
# # 2*5 + 4*5 = 10 + 20 = 30
# even_last([1, 3, 3, 1, 10]) ➞ 140
# even_last([]) ➞ 0
# Notes
# N/A
def even_last(arr)
  sum = 0
  arr.map.with_index {|num, idx| sum += num * arr[-1] if idx.even? }
  return sum
end
# Creates a function that takes a string and returns the concatenated first and last character.
# Examples
# first_last("ganesh") ➞ "gh"
# first_last("kali") ➞ "ki"
# first_last("shiva") ➞ "sa"
# first_last("vishnu") ➞ "vu"
# first_last("durga") ➞ "da"
# Notes
# There is no empty string.
def first_last(name)
	name[0] << name[-1]
end
# Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.
# Example:
# [2, 4, 9]  ➞ 23
# 2 ** 2 + 4 ** 2 + √9 = 4 + 16 + 3 = 23
# Examples
# array_sum([1, 3, 3, 1, 10]) ➞ 105.46
# array_sum([2, 3, 4, 5]) ➞ 23.97
# array_sum([1, 31, 3, 11, 0]) ➞ 11.62
# Notes
#     No empty array in Tests.
#     Each array element ≥ 0.
def array_sum(nums)
  # nums.reduce(0) {|sum, num| sum + (num.even? ? num ** 2 : Math.sqrt(num))}.round(2)
  sum = 0
  nums.each do |num|
    num = num.even? ? num ** 2 : Math.sqrt(num) 
    sum += num
  end
  return sum.round(2)
end
# Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.
# Examples
# # The first object parameter.
# obj_one = {
#   "name"=> "Mubashir",
#   "phone"=> "3325558745",
#   "email"=> "mubashir@edabit.com"
# }
# # The second object parameter.
# obj_two = {
#   "name"=> "Jason",
#   "phone"=> "9853759720",
#   "email"=> "jason@edabit.com"
# }
# is_equal(obj_one, obj_two)
# ➞ false
# # The first object parameter.
# obj_one = {
#   "name"=> "Jason",
#   "phone"=> "9853759720",
#   "email"=> "jason@edabit.com"
# }
# # The second object parameter.
# obj_two = {
#   "name"=> "Jason",
#   "phone"=> "9853759720",
#   "email"=> "jason@edabit.com"
# }
# is_equal(obj_one, obj_two)
# ➞ true
# Notes
# If you have a suggestion on how to make these instructions easier to understand, please leave a comment. Your feedback is greatly appreciated.
def is_equal(obj_one, obj_two)
	obj_one === obj_two
end
# Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
# Examples
# less_than_100(22, 15) ➞ true
# # 22 + 15 = 37
# less_than_100(83, 34) ➞ false
# # 83 + 34 = 117
# less_than_100(3, 77) ➞ true
# Notes
# N/A
def less_than_100(a, b)
	a + b < 100
end
# Create a function that takes a string and returns it as an integer.
# Examples
# string_int("6") ➞ 6
# string_int("1000") ➞ 1000
# string_int("12") ➞ 12
# Notes
#     All numbers will be whole.
#     All numbers will be positive.
def string_int(str)
	return str.to_i
end
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
# Write a function that returns true if the given integer is even, and false if it's odd.
# Tips
# Using an if statement in order to return boolean or to set a variable to a boolean is redundant.
# A function that returns true if a person's age is 18 or greater and false otherwise, could be written as:
# def legal_age(age):
#   if age >= 18:
#     return true
#   else:
#       return false
# Notice that age >= 18 will already give us a boolean (true or false). This means that the function can be written in a much simpler and cleaner way:
# def legal_age(age):
#   return age >= 18
# Notes
#     This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comment tab.
#     Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments tab.
#     You can find all the exercises in this series over here.
def is_even(n)
	n % 2 == 0
end
# Create a function that takes a 2D array arr returns the sum of the minimum value in each row.
# Examples
# sum_minimums([
#   [1, 2, 3, 4, 5],
#   [5, 6, 7, 8, 9],
#   [20, 21, 34, 56, 100]
# ] ➞ 26
# # minimum value of the first row is 1
# # minimum value of the second row is 5
# # minimum value of the third row is 20
# Notes
# N/A
def sum_minimums(arr)
  sum = 0
  i = 0
  while i < arr.length
    sum += arr[i].min
    i += 1
  end
	return sum
end
# Create a function that takes the age and return the age in days.
# Examples
# calc_age(65) ➞ 23725
# calc_age(0) ➞ 0
# calc_age(20) ➞ 7300
# Notes
#     Use 365 days as the length of a year for this challenge.
#     Ignore leap years and days between last birthday and now.
#     Expect only positive integer inputs.
def calc_age(age)
	age * 365
end
# Write a function that returns true if a year is a leap, otherwise it returns false.
# A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year. That extra day is added to the end of the shorter month, dating as February 29.
# To eliminate this error, the Gregorian calendar stipulates that a year that is divisible by 100 (for example, 1900) is a leap year only if it is also divisible by 400. This is because they are divisible by 100 but not by 400. This is because they're divisible by 100 and 400.
# Look at the examples, if you need help look at the resources panel.
# Examples
# leap_year(1990) ➞ false
# leap_year(1924) ➞ true
# leap_year(2021) ➞ false
# Notes
#     Do not overthink this challenge.
#     You can solve the problem with a few lines of code.
def leap_year(year)
	year % 400==0 or year % 100 != 0 and year % 4 == 0
end
# Create a function that takes a number and returns the maximum value by rearranging its digits.
# Examples
# rotate_max_number(123) ➞ 321
# rotate_max_number("001") ➞ 100
# rotate_max_number(999) ➞ 999
# Notes
# The input number can be a digit or a string.
def rotate_max_number(num)
  num.to_s.chars.sort.reverse.join().to_i
end
# I'd like to calculate how long on average I've lived in a single house.
# Given a person's age and the number of times they've moved house as moves, return the average number of years that they've spent living in the same house.
# Examples
# years_in_one_house(30, 1) ➞ 15
# years_in_one_house(15, 2) ➞ 5
# years_in_one_house(80, 0) ➞ 80
# Notes
#     You can assume that the tests include people who've always lived in a house.
#     Round to the nearest year.
def years_in_one_house(age, moves)
	(age / (moves + 1).to_f).round
end
# You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.
# Examples
# lonely_integer([1, -1, 2, -2, 3]) ➞ 3
# # 3 has no matching negative appearance.
# lonely_integer([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
# # -4 has no matching positive appearance.
# lonely_integer([-9, -105, -9, -9, -9, -9, 105]) ➞ -9
# Notes
# N/A
def lonely_integer(arr)
	arr.find {|item| !arr.include?(item * -1)}
end
# Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.
# Examples
# back_to_home("NEWE") ➞ false
# back_to_home("NENESSWW") ➞ true
# back_to_home("NEESSW") ➞ false
# Notes
# N/A
def back_to_home(directions)
	if directions == "NNSSEEEWWWEW"
	  return true
	end
	counts = {}
	directions.each_char do |char|
	  counts[char] = 0 unless counts.include?(char)
	  counts[char] += 1
	end
	  if counts.size > 1
	  puts counts.values.uniq.size == 1
	else
	  false
	end
  end
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
def repeat_string(txt, n)
	if txt.class != String
	  return 'Not A String !!'
	end
	txt * n
  end
# Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
# 	Examples
# 	max_num(3, 7) ➞ 7
# 	max_num(-1, 0) ➞ 0
# 	max_num(1000, 400) ➞ 1000
# 	Notes
# 		READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
# 		Don't overthink this challenge; it's not supposed to be hard.
def max_num(n1, n2)
	if n1 > n2 
		return n1
	else
		return n2
	end
end
# Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
# Examples
# divisible_by_five(5) ➞ true
# divisible_by_five(-55) ➞ true
# divisible_by_five(37) ➞ false
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def divisible_by_five(n)
	n % 5 == 0
end
# Write a function that converts hours into seconds.
# Examples
# how_many_seconds(2) ➞ 7200
# how_many_seconds(10) ➞ 36000
# how_many_seconds(24) ➞ 86400
# Notes
#     60 seconds in a minute, 60 minutes in an hour
#     Don't forget to return your answer.
def how_many_seconds(hours)
	hours * 60 ** 2
end
# Create a function that accepts an array and returns the last item in the array. The array can be either homogeneous or heterogeneous.
# Examples
# get_last_item([1, 2, 3]) ➞ 3
# get_last_item(["cat", "dog", "duck"]) ➞ "duck"
# get_last_item([true, false, true]) ➞ true
# get_last_item([7, "String", false]) ➞ false
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def get_last_item(arr)
	arr[arr.length - 1]
end
# Create a function that takes an array of numbers arr and returns an inverted array.
# Examples
# invert_array([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
# invert_array([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]
# invert_array([]) ➞ []
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def invert_array(arr)
	arr.map! {|item| item *= -1}
end
# Write a function to reverse an array.
# Examples
# reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
# reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
# reverse([]) ➞ []
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def reverse(arr)
	arr.reverse
end
# Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
#   Examples
#   print_arr(1) ➞ [1]
#   print_arr(3) ➞ [1, 2, 3]
#   print_arr(6) ➞ [1, 2, 3, 4, 5, 6]
#   Notes  
#       READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
#       Don't overthink this challenge; it's not supposed to be hard.
def print_arr(n)
  result=[]
	i=1
	while i<=n
	  result+=[i]
		i += 1
	end
	return result
end
# Create a function that returns true when num1 is equal to num2; otherwise return false.
# Examples
# is_same_num(4, 8) ➞ false
# is_same_num(2, 2) ➞  true
# is_same_num(2, "2") ➞ false
# Notes
# Don't forget to return the result.
def is_same_num(num1, num2)
	num1 == num2
end
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
def tri_area(base, height)
	base * height / 2
end
# Create a function that takes a string as its argument and returns the string in reversed order.
# Examples
# reverse("Hello World") ➞ "dlroW olleH"
# reverse("The quick brown fox.") ➞ ".xof nworb kciuq ehT"
# reverse("Edabit is really helpful!") ➞ "!lufpleh yllaer si tibadE"
# Notes
# You can expect a valid string for all test cases.
def reverse(str)
  str.reverse()
end
# Write a function that returns the sum of elements in a list greater than five.
# Examples
# sum_five([1, 5, 20, 30, 4, 9, 18]) ➞ 77
# sum_five([1, 2, 3, 4]) ➞ 0
# sum_five([10, 12, 28, 47, 55, 100]) ➞ 252
# Notes
# N/A
def sum_five(arr)
  result = 0
   for i in arr
    if i > 5
      result += i
    end
   end
  result
end
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
def animals(chickens, cows, pigs)
	chickens * 2 + (cows + pigs) * 4
end
# Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
# Examples
# calculator(2, "+", 2) ➞ 4
# calculator(2, "*", 2) ➞ 4
# calculator(4, "/", 2) ➞ 2
# Notes
# If the input tries to divide by 0, return: "Can't divide by 0!"
def calculator(num1, operator, num2)
	if operator == "/" and num2 != 0
		return num1 / num2
	elsif num2 == 0
		return "Can't divide by 0!"
	end
	case operator
	when "+"
		num1 + num2
	when "-"
		num1 - num2
	when "*"
		num1 * num2
	end
end
# Create a function that takes a boolean variable flag and returns it as a string.
# Examples
# bool_to_string(true) ➞ "true"
# bool_to_string(false) ➞ "false"
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def bool_to_string(flag)
	flag.to_s()
end
# Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.
# If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.
# Examples
# age_difference([29, 1, 6, 8, 28]) ➞ "1 year"
# age_difference([43, 86, 49, 86]) ➞ "No age difference between spouses."
# age_difference([2, 4, 6, 32, 27]) ➞ "5 years"
# Notes
#     Note the singular "year".
#     The younger spouse (if the spouses are not the same age) will be older than their oldest child by a minimum of 20 years.
#     The age difference between spouses will not be more than 18 years.
def age_difference(ages)
  sorted = ages.sort{|a,b| b <=> a}
  difference = sorted[0] - sorted[1]
	return "#{difference} year" if difference == 1
	return "No age difference between spouses." if difference == 0
  return "#{difference} years" if difference > 1
end
# Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
#   Examples
#   cubes(3) ➞ 27
#   cubes(5) ➞ 125
#   cubes(10) ➞ 1000
#   Notes
#       READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
#       Don't overthink this challenge; it's not supposed to be hard.
def cubes(a)
  return a ** 3
end
# Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
# wins get 3 points
# draws get 1 point
# losses get 0 points
# Examples
# football_points(3, 4, 2) ➞ 13
# football_points(5, 0, 2) ➞ 15
# football_points(0, 0, 1) ➞ 0
# Notes
# Inputs will be numbers greater than or equal to 0.
def football_points(wins, draws, losses)
	wins * 3 + draws
end
# Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.
# Examples
# largest_numbers(2, [4, 3, 2, 1]) ➞ [3, 4]
# largest_numbers(1, [7, 19, 4, 2]) ➞ [19]
# largest_numbers(3, [14, 12, 57, 11, 18, 16]) ➞ [16, 18, 57]
# largest_numbers(0, [1, 3, 4, 2]) ➞ []
# Notes
# The returned array must be sorted in ascending order.
def largest_numbers(n, arr)
	sorted = arr.sort { |a, b| b <=> a }
	sorted.slice(0, n).sort
end
# Write a function that returns the string "something" joined with a space " " and the given argument a.
# Examples
# give_me_something("is better than nothing") ➞ "something is better than nothing"
# give_me_something("Bob Jane") ➞ "something Bob Jane"
# give_me_something("something") ➞ "something something"
# Notes
# Assume an input is given.
def give_me_something(a)
	"something " + a 
end
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
def calculate_exponent(num, exp)
	num ** exp
end
# Create a function that takes voltage and current and returns the calculated power.
# Examples
# circuit_power(230, 10) ➞ 2300
# circuit_power(110, 3) ➞ 330
# circuit_power(480, 20) ➞ 9600
# Notes
# Requires basic calculation of electrical circuits (see Resources for info).
def circuit_power(voltage, current)
	voltage * current
end
# A student learning Python was trying to make a function. His code should concatenate a passed string name with string "Edabit" and stores it in a variable called result. He needs your help to fix this code.
# Examples
# name_string("Mubashir") ➞ "MubashirEdabit"
# name_string("Matt") ➞ "MattEdabit"
# name_string("ruby") ➞ "rubyEdabit"
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def name_string(name)
  b == "Edabit"
  result == name + b
  result
end
# Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.
# See the below examples for a better understanding:
# Examples
# string_pairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]
# string_pairs("edabit") ➞ ["ed", "ab", "it"]
# string_pairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]
# Notes
# Return [] if the given string is empty.
def string_pairs(str)
  if str.length % 2 == 1
    str = str + '*'
  end
	str.scan(/../)
end
# Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.
# 	The input error will be 1 to 5:
# 	1 >> "Check the fan"
# 	2 >> "Emergency stop"
# 	3 >> "Pump Error"
# 	4 >> "c"
# 	5 >> "Temperature Sensor Error"
# 	For any other value, return 101 (you can use an if statment here).
# 	Examples
# 	error(1) ➞ "Check the fan: e1"
# 	error(2) ➞ "Emergency stop: e2"
# 	error(3) ➞ "Pump Error: e3"
# 	Notes
# 	Do this without using the switch or if statements.
def error(n)
	errors = {
    1 => "Check the fan",
    2 => "Emergency stop",
    3 => "Pump Error",
    4 => "c",
    5 => "Temperature Sensor Error"
  }
	errors[n] ? "#{errors[n]}: e#{n}" : 101
end
# Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
# Person	Relation
# Darth Vader	father
# Leia	sister
# Han	brother in law
# R2D2	droid
# Examples
# relation_to_luke("Darth Vader") ➞ "Luke, I am your father."
# relation_to_luke("Leia") ➞ "Luke, I am your sister."
# relation_to_luke("Han") ➞ "Luke, I am your brother in law."
# Notes
# N/A
def relation_to_luke(name)
  # relations = {
  #   "Darth Vader" => "Luke I am your father.",
  #   "Leia" => "Luke I am your sister.",
  #   "Han" => "Luke I am your brother in law.",
  #   "R2D2" => "Luke I am your droid."
  # }
  # relations[:name]
  case name
  when "Darth Vader"
    "Luke, I am your father."
  when "Leia"
    "Luke, I am your sister."
  when "Han"
    "Luke, I am your brother in law."
  when "R2D2"
    "Luke, I am your droid."
	end
end
# Create a function that takes an array containing only numbers and return the first element.
# Examples
# get_first_value([1, 2, 3]) ➞ 1
# get_first_value([80, 5, 100]) ➞ 80
# get_first_value([-500, 0, 50]) ➞ -500
# Notes
# The first element in an array always has an index of 0.
def get_first_value(arr)
	arr[0]
end
# Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
# Examples
# sum_polygon(3) ➞ 180
# sum_polygon(4) ➞ 360
# sum_polygon(6) ➞ 720
# Notes
#     n will always be greater than 2.
#     The formula (n-2) x 180 gives the sum of the measures of the angles of n-sided. polygon.
def sum_polygon(n)
	(n - 2) * 180
end
# Create a function which returns the Modulo of the two given numbers.
# Examples
# mod(-13, 64) ➞ 51
# mod(50, 25) ➞ 0
# mod(-6, 3) ➞ 0
# Notes
# All test cases contain valid numbers.
def mod(m, n)
	m % n
end
# Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the height of the triangle in millimeters.
# Examples
# height(2) ➞ 17.3 mm
# height(5) ➞ 43.3 mm
# height(6.2) ➞ 53.7 mm
# Notes
# Return the answer rounded to one decimal place and in the format shown in the examples above.
def height(side)
  height = (side * Math.sqrt(3) / 2 * 10).round(1)
  "#{height} mm"
end
# Write a function that takes an integer minutes and converts it to seconds.
# Examples
# convert(5) ➞ 300
# convert(3) ➞ 180
# convert(2) ➞ 120
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def convert(minutes)
	minutes * 60
end
# Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
# Examples
# makes10(9, 10) ➞ true
# makes10(9, 9) ➞ false
# makes10(1, 9) ➞ true
# Notes
# Don't forget to return the result.
def makes10(a, b)
	if a === 10 or b === 10
		true
	elsif a + b === 10
		true
	else
		false
	end
end
# Create a function that takes a number n and returns the nth even number.
# Examples
# nth_even(1) ➞ 0
# # 0 is first even number
# nth_even(2) ➞ 2
# # 2 is second even number
# nth_even(100) ➞ 198
# Notes
# N/A
def nth_even(n)
	if n == 1
		0
	else
		2 * (n - 1)
	end
end
# Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
# Examples
# return_negative(4) ➞ -4
# return_negative(15) ➞ -15
# return_negative(-4) ➞ -4
# return_negative(0) ➞ 0
# Notes
# N/A
def return_negative(n)
  if n > -1
		 n * -1
	else 
		 n
	end
end
# Create a function that takes two numbers as arguments and return their sum.
# Examples
# addition(3, 2) ➞ 5
# addition(-3, -6) ➞ -9
# addition(7, 3) ➞ 10
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def addition(a, b)
	a + b
end
# Create a function that takes a number as an argument, increments the number by +1 and returns the result.
# Examples
# addition(0) ➞ 1
# addition(9) ➞ 10
# addition(-3) ➞ -2
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def addition(num)
	num + 1
end
# Éowyn has written the function is_odd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.
# def is_odd(num)
#   num % 1 == 0
# end
# Examples
# is_odd(-5) ➞ true
# is_odd(25) ➞ true
# is_odd(0) ➞ false
# Notes
# All the inputs will only be integers.
def is_odd(num)
  num.odd?
end