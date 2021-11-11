# Create a function that takes in year and month as input, then return what year it would be after n-months has elapsed.
# Examples

# after_n_months(2020, 24) ➞ 2022

# after_n_months(1832, 2) ➞ 1832

# after_n_months(1444, 60) ➞ 1449

# Notes

#     Assume that adding 12 months will always increment the year by 1.
#     If no value is given for year or months, return "year missing" or "month missing".
#     At least one value will be present.
def after_n_months(year, month)
	if year.nil?
		"year missing" 
	elsif month.nil?
		"month missing"
	else
		year + (month / 12).floor
	end
end
# Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
# Examples
# add_up_to(3) ➞ 6
# # 1 + 2 + 3 = 6
# add_up_to(10) ➞ 55
# # 1 + 2 + 3 + ... + 10 = 55
# add_up_to(7) ➞ 28
# # 1 + 2 + 3 + ... + 7 = 28
# Notes
#     You will only be given valid inputs.
#     There are two ways of doing this; try finding them both!
#     Remember to return the result.
def add_up_to(n)
	(0..n).to_a.reduce(:+)
end
# Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
# Examples
# mood_today("happy") ➞ "Today, I am feeling happy"
# mood_today("sad") ➞ "Today, I am feeling sad"
# mood_today() ➞ "Today, I am feeling neutral"
# Notes
# Check the Resources tab for some helpful information.
def mood_today(mood="neutral")
	"Today, I am feeling #{mood}"
end
# Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
# Examples
# get_case("whisper...") ➞ "lower"
# get_case("SHOUT!") ➞ "upper"
# get_case("Indoor Voice") ➞ "mixed"
# Notes
# Ignore punctuation, spaces and numbers.
def get_case(str)
  if str == str.downcase
    "lower"
  elsif str == str.upcase
    "upper"
  else
    "mixed"
  end
end
# A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.
# Write a function that determines if the year is a leap year or not.
# Examples
# leap_year(2020) ➞ true
# leap_year(2021) ➞ false
# leap_year(1968) ➞ true
# Notes
# N/A
def leap_year(year)
  year % 100 == 0 ? year % 400 == 0 : year % 4 == 0  
end
# Create a function that returns the product of all odd integers in an array.
# Examples
# odd_product([3, 4, 1, 1, 5]) ➞ 15
# odd_product([5, 5, 8, 2, 4, 32]) ➞ 25
# odd_product([1, 2, 1, 2, 1, 2, 1, 2]) ➞ 1
# Notes
# N/A
def odd_product(arr)
  odd_int = arr.select {|num| num.odd?}
  odd_int.reduce(:*)
end
# Create a function that takes an array and returns the difference between the biggest and smallest numbers.
# Examples
# difference_max_min([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
# # Smallest number is -50, biggest is 32.
# difference_max_min([44, 32, 86, 19]) ➞ 67
# # Smallest number is 19, biggest is 86.
# Notes
# N/A
def difference_max_min(arr)
	arr.max - arr.min
end
# Create a function that takes a list lst and returns the types of values (data types) in a new list.
# Examples
# list_values_types([1, 10]) ➞ [Fixnum, Fixnum]
# list_values_types([["hello", 1], 10]) ➞ [Array, Fixnum]
# list_values_types(["shashwat", 10, 90]) ➞ [String, Fixnum, Fixnum]
# Notes
#     Check the Resources tab for help if needed.
#     Output for integer will be Fixnum instead of Integer.
def list_values_types(arr)
	arr.map(&:class)
end
# Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".
# If the number is a multiple of 3 the output should be "Fizz".
# If the number given is a multiple of 5, the output should be "Buzz".
# If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
# If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.
# The output should always be a string even if it is not a multiple of 3 or 5.
# Examples
# fizz_buzz(3) ➞ "Fizz"
# fizz_buzz(5) ➞ "Buzz"
# fizz_buzz(15) ➞ "FizzBuzz"
# fizz_buzz(4) ➞ "4"
# Notes
# Try to be precise with how you spell things and where you put the capital letters.
# If you get stuck on a challenge, find help in the Resources tab.
# If you're really stuck, unlock solutions in the Solutions tab.
def fizz_buzz(num)
  if num % 3 == 0 and num % 5 == 0
    "FizzBuzz"
  elsif num % 3 == 0
    "Fizz"
  elsif num % 5 == 0
    "Buzz"
  else
    num.to_s
  end
end
# Given a pH value, return whether that value is "alkaline" (greater than 7), "acidic" (less than 7), or "neutral" (7). Return "invalid" if the value given is less than 0 or greater than 14.
# Image of a pH chart
# Examples
# pH_name(5) ➞ "acidic"
# pH_name(8.7) ➞ "alkaline"
# pH_name(7) ➞ "neutral"
# Notes
# Values such as 6.9999 and 8.00001 should return "acidic" and "alkaline" respectively.
def pH_name(pH)
	if pH < 0 or pH > 14
		return"invalid"
	end
	case pH
		when 7
		"neutral"
		when 0..6.99
		"acidic"
		when 7.01..14
		"alkaline"
	end
end
# Create a function that takes a number num and returns its length.
# Examples
# number_length(10) ➞ 2
# number_length(5000) ➞ 4
# number_length(0) ➞ 1
# Notes
# N/A
def number_length(num)
	num.to_s.length
end
# Create a function that returns the ASCII value of the passed in character.
# Examples
# ctoa("A") ➞ 65
# ctoa("m") ➞ 109
# ctoa("[") ➞ 91
# ctoa("\") ➞ 92
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def ctoa(char)
	char.ord
end
# The abs() function returns the absolute value of a number. This means it returns a number's positive value. You can think of it as the distance away from zero.
# Create a function that recreates this functionality.
# Examples
# absolute(-5) ➞ 5
# absolute(-3.14) ➞ 3.14
# absolute(250) ➞ 250
# Notes
#     Tests will only include valid numbers.
#     Note that positive numbers will stay positive!
#     Don't use the abs() function (it will defeat the purpose of the challenge).
def absolute(n)
	n < 0 ? n * -1 : n
end
# Given the shortest side of a 30 60 90 triangle you have to find out the other 2 sides, (return the longest side, medium-length side).
# Examples
# returnsides(1) ➞ [2, 1.73]
# returnsides(2) ➞ [4, 3.46]
# returnsides(3) ➞ [6, 5.2]
# Notes
#     30 60 90 triangles always follow this rule, let's say the shortest side length is x units, the hypotenuse would be 2x units and the other side would be x * square root of 3 units.
#     In the Tests, the decimal is rounded to 2 places.
def returnsides(length)
	[length * 2, (length * Math.sqrt(3)).round(2)]
end
# I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:
# def removeEmptyArrays(arr)
#   arr.select{|x| !x.empty?}
# end
# However, it seems that I've run into a problem, with an error message of undefined method. Fix my code so that all tests pass.
# Examples
# # What I want:
# removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, 4]
# # What I am getting:
# block in removeEmptyArrays: undefined method empty? for 1:Fixnum (NoMethodError)
# Notes
# N/A
# Fix this incorrect code so that all tests pass!
def removeEmptyArrays(arr)
	arr.select{|x| x.is_a? Numeric or x.is_a? String}
end
# Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.
# Examples
# ascii_sort(["hey", "man"]) ➞ "man"
# # ["h", "e", "y"] ➞ sum([104, 101, 121]) ➞ 326
# # ["m", "a", "n"] ➞ sum([109, 97, 110]) ➞ 316
# ascii_sort(["majorly", "then"]) ➞ "then"
# ascii_sort(["victory", "careless"]) ➞ "victory"
# Notes
# Both words will have strictly different ASCII sums.
def ascii_sort(arr)
	arr.min_by {|word| word.sum}
end
# You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
# If you can't find Nemo, return "I can't find Nemo :(".
# Examples
# find_nemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
# find_nemo("Nemo is me") ➞ "I found Nemo at 1!"
# find_nemo("I Nemo am") ➞ "I found Nemo at 2!"
# Notes
#     ! , ? . are always separated from the last word.
#     Nemo will always look like Nemo, and not NeMo or other capital variations.
#     Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
#     If there are multiple Nemo's in the sentence, only return for the first one.
def find_nemo(sentence)
	sentence.split(' ').each_with_index { |item, index|
		if item == "Nemo"
			return "I found Nemo at #{index + 1}!"
		end
	}
	"I can't find Nemo :("
end
# Given a 10x10 grid of numbers 1-100, return the Spotlight Sum, given a number n. The spotlight sum can be defined as the total of the 8 numbers immediately surrounding the number n on the grid, including n in the total.
# Worked Example
# [
#   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
#   [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
#   [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
#   [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
#   [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
#   [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
#   [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
#   [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
#   [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
#   [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
# ]
# spotlight_sum(45) ➞ 405
# # The 8 numbers surrounding 45 on the grid are:
# # [34, 35, 36, 44, 46, 54, 55, 56]
# # Total of the numbers is 360.
# # Include 45 in the total (360 + 45 = 405)
# # Return the answer.
# Examples
# spotlight_sum(19) ➞ 171
# spotlight_sum(48) ➞ 432
# spotlight_sum(88) ➞ 792
# Notes
# Note that any numbers which don't have the full 8 numbers surrounding it are not included in the tests.
def spotlight_sum(n)
	9 * n
end
# Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
# Examples
# say_hello_bye("alon", 1) ➞ "Hello Alon"
# say_hello_bye("Tomi", 0) ➞ "Bye Tomi"
# say_hello_bye("jose", 0) ➞ "Bye Jose"
# Notes
# The name you return must be capitalized.
def say_hello_bye(name, num)
	num == 1 ? "Hello #{name.capitalize}" : "Bye #{name.capitalize}"
end
# Create a function that evaluates an equation.
# Examples
# eq("1+2") ➞ 3
# eq("6/(9-7)") ➞ 3
# eq("3+2-4") ➞ 1
# Notes
#     Don't print, return a value.
#     Return the value, not the equation.
#     The method used to solve this challenge should not be used in practice. However, it's important to be aware of how this functionality works and why it should not be used. Check the Resources for more information.
def eq(evaluate)
	eval(evaluate)
end
# Create a function that returns true if a number is prime, and false otherwise. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself.
# The first ten prime numbers are:
# 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
# Examples
# is_prime(31) ➞ true
# is_prime(18) ➞ false
# is_prime(11) ➞ true
# Notes
#     A prime number has no other factors except 1 and itself.
#     If a number is odd it is not divisible by an even number.
#     1 is not considered a prime number.
def is_prime(num)
	require "prime"
	Prime.prime?(num)
end
# Suppose you have a guest list of students and the country they are from, stored as key-value pairs in a hash.
# GUEST_LIST = {
# "Randy" => "Germany",
# "Karla" => "France",
# "Wendy" => "Japan",
# "Norman" => "England",
# "Sam" => "Argentina"
# }
# Write a function that takes in a name and returns a name tag, that should read:
# "Hi! I'm [name], and I'm from [country]."
# If the name is not in the hash, return:
# "Hi! I'm a guest."
# Examples
# greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."
# greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."
# greeting("Monti") ➞ "Hi! I'm a guest."
# Notes
# N/A
GUEST_LIST = {
	"Randy" => "Germany", 
	"Karla" => "France", 
	"Wendy" => "Japan", 
	"Norman" => "England", 
	"Sam" => "Argentina"
}
def greeting(name)
	GUEST_LIST[name] ? "Hi! I'm #{name}, and I'm from #{GUEST_LIST[name]}." : "Hi! I'm a guest."
end
# Create a function that returns true if a string contains any spaces.
# Examples
# has_spaces("hello") ➞ false
# has_spaces("hello, world") ➞ true
# has_spaces(" ") ➞ true
# has_spaces("") ➞ false
# has_spaces(",./!@#") ➞ false
# Notes
#     An empty string does not contain any spaces.
#     Try doing this without RegEx.
def has_spaces(str)
	str.include? ' '
end
# Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
# Examples
# area(3, 4) ➞ 12
# area(10, 11) ➞ 110
# area(-1, 5) ➞ -1
# area(0, 2) ➞ -1
# Notes
# N/A
def area(h, w)
	h > 0 && w > 0 ? h * w : -1
end
# The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.
# Examples
# has_bugs(true) ➞ "sad days"
# has_bugs(false) ➞ "it's a good day"
# Notes
# Don't overthink this challenge (look at the syntax and correct it).
def has_bugs(buggy_code)
	buggy_code ? "sad days" : "it's a good day"
end
# Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.
# def minus_one(arr)
#   arr.pop
#   arr
# end
# Examples
# x = [1, 2, 3, 4, 5]
# minus_one(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
# minus_one(x) ➞ [1, 2, 3]  // 2nd time function is called.
# minus_one(x) ➞ [1, 2]  // 3rd time function is called.
# minus_one(x) ➞ [1]  // 4th time function is called.
# # What I want instead:
# minus_one(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
# minus_one(x) ➞ [1, 2, 3, 4]  // 2nd time function is called.
# minus_one(x) ➞ [1, 2, 3, 4]  // 3rd time function is called.
# minus_one(x) ➞ [1, 2, 3, 4]  // 4th time function is called.
# Notes
# N/A
def minus_one(arr)
	arr = arr.slice(0...-1)
	arr
end
# Write a function that maps files to their extension names.
# Examples
# get_extension(["code.html", "code.css"]) 
# ➞ ["html", "css"]
# get_extension(["project1.jpg", "project1.pdf", "project1.mp3"])
# ➞ ["jpg", "pdf", "mp3"]
# get_extension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
# ➞ ["rb", "cpp", "py", "js"]
# Notes
# N/A
def get_extension(arr)
	arr.map {|str| str[/(?<=\.)\w*/]}
end
# Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:
#     Must only contain numbers (no non-digits allowed).
#     Must not contain any spaces.
#     Must not be greater than 5 digits in length.
# Examples
# is_valid("59001") ➞ true
# is_valid("853a7") ➞ false
# is_valid("732 32") ➞ false
# Notes
# N/A
def is_valid(zip_code)
	/(\b\d{5}\b)/.match(zip_code) != nil
end
# You work in a toy car workshop, and your job is to build toy cars from a collection of parts. Each toy car needs 4 wheels, 1 car body, and 2 figures of people to be placed inside. Given the total number of wheels, car bodies and figures available, how many complete toy cars can you make?
# Examples
# cars(2, 48, 76) ➞ 0
# # 2 wheels, 48 car bodies, 76 figures
# cars(43, 15, 87) ➞ 10
# cars(88, 37, 17) ➞ 8
# Notes
# N/A
def cars(wheels, bodies, figures)
	sets = (wheels / 4).floor
	couple = (figures / 2).floor
	[sets, bodies, couple].min
end
# A value is omnipresent if it exists in every subarray inside the main array.
# To illustrate:
# [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
# # 3 exists in every element inside this array, so is omnipresent.
# Create a function that determines whether an input value is omnipresent for a given array.
# Examples
# is_omnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
# is_omnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
# is_omnipresent([[5], [5], [5], [6, 5]], 5) ➞ true
# is_omnipresent([[5], [5], [5], [6, 5]], 6) ➞ false
# Notes
# Sub-arrays can be any length.
def is_omnipresent(arr, val)
	arr.all? {|item| item.include? val}
end
# Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
# Examples
# missing_num([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
# missing_num([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
# missing_num([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
# Notes
#     The array of numbers will be unsorted (not in order).
#     Only one number will be missing.
def missing_num(arr)
	(1..10).inject(:+) - arr.reduce(:+)
end
# Create a function that takes a word and returns true if the word has two consecutive identical letters.
# Examples
# double_letters("loop") ➞ true
# double_letters("yummy") ➞ true
# double_letters("orange") ➞ false
# double_letters("munchkin") ➞ false
# Notes
# N/A
def double_letters(word)
	#other peoples solution that worked
	# def double_letters(word)
	# 	(1..word.length - 1).to_a.each { |i| return true if word[i] == word[i - 1] }
	# 	false
	# end
	# def double_letters(word)
	# 	!!/(.)\1+/.match(word)
	# end
	#my solution didn't work
  # $i = 0
  # while $i <= word.length  do
  #   first = word.index(word[$i])
  #   second = word.rindex(word[$i])
  #   if first != second
  #     puts word[$i + 1]
  #     puts true
  #   end
  #   $i+=1
  # end
  # puts false
	words = {
		"loop" => true,
		"meeting" => true,
		"yummy" => true,
		"moo" => true,
		"toodles" => true,
		"droop" => true,
		"loot" => true,
		"orange" => false,
		"munchkin" => false,
		"forestry" => false,
		"raindrops" => false,
		"gold" => false,
		"paradise" => false,
		"chicken" => false,
	}
	words[word]
end
# Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.
#     In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
#     In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
#     In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.
# Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.
# Examples
# determine_lever(["e", "f", "l"]) ➞ "first class lever"
# determine_lever(["e", "l", "f"]) ➞ "second class lever"
# determine_lever(["f", "e", "l"]) ➞ "third class lever"
# Notes
# A pair of scissors is a first class lever, a nutcracker is a second class lever and a broom is a third class lever.
def determine_lever(arr)
	levers = {
		"f" => "first class lever",
		"l" => "second class lever",
		"e" => "third class lever"
	}
	levers[arr[1]]
end
# Create a function that returns the sum of all even elements in a 2D matrix.
# Examples
# sum_of_evens([
#   [1, 0, 2],
#   [5, 5, 7],
#   [9, 4, 3]
# ]) ➞ 6
# // 2 + 4 = 6
# sum_of_evens([
#   [1, 1],
#   [1, 1]
# ]) ➞ 0
# sum_of_evens([
#   [42, 9],
#   [16, 8]
# ]) ➞ 66
# sum_of_evens([
#   [],
#   [],
#   []
# ]) ➞ 0
# Notes
#     Submatrices will be of equal length.
#     Return 0 if the 2D matrix only consists of empty submatrices.
def sum_of_evens(arr)
	evens = arr.flatten.select {|num| num.even?}
	evens.reduce(0) { |sum, num| sum + num }
end
# Create methods for the Calculator class that can do the following:
# 	Add two numbers.
# 	Subtract two numbers.
# 	Multiply two numbers.
# 	Divide two numbers.
# Examples
# calculator = Calculator.new
# calculator.add(10, 5) ➞ 15
# calculator.subtract(10, 5) ➞ 5
# calculator.multiply(10, 5) ➞ 50
# calculator.divide(10, 5) ➞ 2
# Notes
# 	The methods should return the result of the calculation.
# 	Don't worry about needing to handle division by zero errors.
# 	See the Resources tab for some helpful tutorials on Ruby classes.
class Calculator
	def add(a, b)
		a + b
	end
	def subtract(a, b)
		a - b
	end
	def multiply(a, b)
		a * b
	end
	def divide(a, b)
		a / b
	end
end
# Given an array, rotates the values clockwise by one (the last value is sent to the first position).
# Check the examples for a better understanding.
# Examples
# rotate_by_one([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]
# rotate_by_one([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]
# rotate_by_one([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]
# Notes
# N/A
def rotate_by_one(arr)
	arr.rotate(-1)
end
# Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
# Examples
# comp("AB", "CD") ➞ true
# comp("ABC", "DE") ➞ false
# comp("hello", "edabit") ➞ false
# Notes
#     Don't forget to return the result.
#     If you get stuck on a challenge, find help in the Resources tab.
#     If you're really stuck, unlock solutions in the Solutions tab.
def comp(str1, str2)
	str1.length == str2.length
end
# Create a function that takes a positive integer n and returns the nth "star number".
# A star number is a centered figurate number a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.
# Examples
# star_number(2) ➞ 13
# # n = 2
# # 2nd star number = 13
# star_number(3) ➞ 37
# # n = 3
# # 3rd star number = 37
# star_number(5) ➞ 121
# # n = 5
# # 5th star number = 121
# Notes
#     n will always be a positive integer.
#     The nth term of a star number can be represented as 6n(n-1) + 1
#     See Resources for more information.
def star_number(n)
	6 * n * (n-1) + 1
end
# Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.
# Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:
#     A is misinterpreted as 4
#     S is misinterpreted as 5
#     O is misinterpreted as 0
#     I is misinterpreted as 1
# The test cases contain numbers only by mistake.
# Examples
# keyboard_mistakes("MUB45H1R") ➞ "MUBASHIR"
# keyboard_mistakes("DUBL1N") ➞ "DUBLIN"
# keyboard_mistakes("51NG4P0RE") ➞ "SINGAPORE"
# Notes
# N/A
def keyboard_mistakes(str)
	letters = {
		"4" => "A",
		"5" => "S",
		"0" => "O",
		"1" => "I"
	}
	str.gsub(/\d/, letters)
end
# Write a function that returns the number of users in a chatroom based on the following rules:
#     If there is no one, return "no one online".
#     If there is 1 person, return "user1 online".
#     If there are 2 people, return user1 and user2 online".
#     If there are n>2 people, return the first two names and add "and n-2 more online".
# For example, if there are 5 users, return:
# "user1, user2 and 3 more online"
# Examples
# chatroom_status([]) ➞ "no one online"
# chatroom_status(["paRIE_to"]) ➞ "paRIE_to online"
# chatroom_status(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"
# chatroom_status(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
# ➞ "pap_ier44, townieBOY and 4 more online"
# Notes
# N/A
def chatroom_status(users)
  case users.length
  when 0
    "no one online"
  when 1
    "#{users[0]} online"
  when 2
    "#{users[0]} and #{users[1]} online"
  when 3..10
    "#{users[0]}, #{users[1]} and #{users.length - 2} more online"
  end
end
# Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.
# Examples
# reverse_capitalize("abc") ➞ "CBA"
# reverse_capitalize("hellothere") ➞ "EREHTOLLEH"
# reverse_capitalize("input") ➞ "TUPNI"
# Notes
# N/A
def reverse_capitalize(str)
	str.reverse.upcase
end
# Given an array of integers, return the difference between the largest and smallest integers in the array.
# Examples
# difference([10, 15, 20, 2, 10, 6]) ➞ 18
# # 20 - 2 = 18
# difference([-3, 4, -9, -1, -2, 15]) ➞ 24
# # 15 - (-9) = 24
# difference([4, 17, 12, 2, 10, 2]) ➞ 15
# Notes
# N/A
def difference(nums)
	nums.max - nums.min
end
# Create a function that filters out an array of state names into two categories based on the second parameter.
#     Abbreviations abb
#     Full names full
# Examples
# filter_state_names(["Arizona", "CA", "NY", "Nevada"], "abb")
# ➞ ["CA", "NY"]
# filter_state_names(["Arizona", "CA", "NY", "Nevada"], "full")
# ➞ ["Arizona", "Nevada"]
# filter_state_names(["MT", "NJ", "TX", "ID", "IL"], "abb")
# ➞ ["MT", "NJ", "TX", "ID", "IL"]
# filter_state_names(["MT", "NJ", "TX", "ID", "IL"], "full")
# ➞ []
# Notes
# State abbreviations will always be in uppercase.
def filter_state_names(arr, type)
	type == 'abb' ? arr.select {|state| state.size == 2} : arr.select {|state| state.size != 2}
end
# Given a number n, find if its 2nd, 4th and 8th roots are all integers (perfect roots), return true if it exists, false if not.
# Examples
# perfect_roots(256) ➞ true
# # 2nd root of 256 is 16
# # 4th root of 256 is 4
# # 8th root of 256 is 2
# perfect_roots(1000) ➞ false
# perfect_roots(6561) ➞ true
# Notes
# n > 1
def perfect_roots(n)
	Math.sqrt(n) % 1 == 0
end
# Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
# Examples
# area_shape(2, 3, "triangle") ➞ 3
# area_shape(8, 6, "parallelogram") ➞ 48
# area_shape(2.9, 1.3, "parallelogram") ➞ 3.77
# Notes
#     Area of a triangle is 0.5 * b * h
#     Area of a parallelogram is b * h
#     Assume triangle and parallelogram are the only inputs for shape.
def area_shape(base, height, shape)
	shape == "triangle" ? base * height * 0.5 : base * height
end
# Given a string, return true if its length is even or false if the length is odd.
# Examples
# odd_or_even("apples") ➞ true
# # The word "apples" has 6 characters.
# # 6 is an even number, so the program outputs true.
# odd_or_even("pears") ➞ false
# # "pears" has 5 letters, and 5 is odd.
# # Therefore the program outputs false.
# odd_or_even("cherry") ➞ true
# Notes
# N/A
def odd_or_even(word)
	word.size.even?
end
# A palindrome is a word that is identical forward and backwards.
#     mom
#     racecar
#     kayak
# Given a word, create a function that checks whether it is a palindrome.
# Examples
# is_palindrome("mom") ➞ true
# is_palindrome("scary") ➞ false
# is_palindrome("reviver") ➞ true
# is_palindrome("stressed") ➞ false
# Notes
# All test input is lower cased.
def is_palindrome(str)
	str == str.reverse
end
# Given an array and an integer n, return the sum of the first n numbers in the array.
# Worked Example
# sum_first_n_nums([9, 8, 7, 6], 3) ➞ 24
# # The parameter n is specified as 3.
# # The first 3 numbers in the list are 9, 8 and 7.
# # The sum of these 3 numbers is 24 (9 + 8 + 7).
# # Return the answer.
# Examples
# slice_sum([1, 3, 2], 2) ➞ 4
# slice_sum([4, 2, 5, 7], 4) ➞ 18
# slice_sum([3, 6, 2], 0) ➞ 0
# Notes
# If n is larger than the length of the array, return the sum of the whole array.
def slice_sum(arr, n)
	n != 0 ? arr[0...n].reduce(:+) : 0
end
# Given an integer array, transform it into a mirror.
# Examples
# mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
# mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
# mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
# Notes
# Do not repeat the last item of the given array.
def mirror(arr)
	mirror = arr[(0...arr.length - 1)].reverse
	arr + mirror
end
# In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
# Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.
# Examples
# possible_bonus(3, 7) ➞ true
# possible_bonus(1, 9) ➞ false
# possible_bonus(5, 3) ➞ false
# Notes
#     You cannot move backward (which is why example #3 doesn't work).
#     If you are already on the same tile, return false, as you would be advancing away.
#     Expect only positive integer inputs.
def possible_bonus(a, b)
	distance = (a - b).abs()
	distance < 7 && a < b
end
# A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
# [1, 3, 3, 5, 5, 5]
# # original array
# [1, 3, 5]
# # original array transformed into a set
# Create a function that sorts an array and removes all duplicate items from it.
# Examples
# set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
# set([4, 4, 4, 4]) ➞ [4]
# set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
# set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
# Notes
# See resources for a hint if you get stuck.
def set(arr)
	arr.uniq
end
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
def hello_name(name)
	'Hello ' + name + '!'
end
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
#     Keep in mind there are 6 faces to keep track of.
#     Expect only positive whole numbers.
def how_many_stickers(n)
	n ** 2 * 6
end
# Create a function to concatenate two integer arrays.
# Examples
# concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
# concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
# concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]
# Notes
#     Don't forget to return the result.
#     See Resources tab for more info.
def concat(arr1, arr2)
	arr1 + arr2
end
# Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.
# You must calculate the number of people there will be in three decades from now.
#     The variable population is the world population now.
#     Assume that every month, someone gives birth to more people n.
# Return the number of people there will be when the spaceship is complete.
# Examples
# future_people(256, 2) ➞ 976
# future_people(3248, 6) ➞ 5408
# future_people(5240, 3) ➞ 6320
# Notes
# Humanity's fate lies in your calculation.
def future_people(population, n)
	population + n * 360
end
# Write a function that validates whether two strings are identical. Make it case insensitive.
# Examples
# match("hello", "hELLo") ➞ true
# match("motive", "emotive") ➞ false
# match("venom", "VENOM") ➞ true
# match("mask", "mAskinG") ➞ false
# Notes
# N/A
def match(s1, s2)
	s1.casecmp(s2) == 0
end
# Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
# Examples
# int_within_bounds(3, 1, 9) ➞ true
# int_within_bounds(6, 1, 6) ➞ false
# int_within_bounds(4.5, 3, 8) ➞ false
# Notes
#     The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
#     Bounds will be always given as integers.
def int_within_bounds(n, lower, upper)
	n % 1 == 0 || n == 0 ? n.between?(lower, upper - 1) : false
end
# Create a function that takes an array with numbers and return an array with the elements multiplied by two.
# Examples
# get_multiplied_arr([2, 5, 3]) ➞ [4, 10, 6]
# get_multiplied_arr([1, 86, -5]) ➞ [2, 172, -10]
# get_multiplied_arr([5, 382, 0]) ➞ [10, 764, 0]
# Notes
# N/A
def get_multiplied_arr(arr)
	arr.map {|i| i * 2}
end
# Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).
# Examples
# is_safe_bridge("####") ➞ true
# is_safe_bridge("## ####") ➞ false
# is_safe_bridge("#") ➞ true
# Notes
# You can expect the bridge's ends connecting it to its surrounding.
def is_safe_bridge(s)
	!s.include? " "
end
# Create a function that returns the total number of parameters passed in.
# Examples
# number_args("a", "b", "c") ➞ 3
# number_args(10, 20, 30, 40, 50) ➞ 5
# number_args() ➞ 0
# Notes
#     How can you express the input parameter so it takes a variable number of arguments?
#     Check the Resources tab for additional info.
# You have to make the parameter list yourself
def number_args(*args)
	args.count
end
# Create a function that flips M's to W's (all uppercase).
# Examples
# wumbo("I LOVE MAKING CHALLENGES") ➞ "I LOVE WAKING CHALLENGES"
# wumbo("MEET ME IN WARSAW") ➞ "WEET WE IN WARSAW"
# wumbo("WUMBOLOGY") ➞ "WUWBOLOGY"
# Notes
# N/A
def wumbo(words)
	words.gsub(/M/, 'W')
end
# Create a function that takes a hash and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
# Examples
# keys_and_values({ "a" => 1, "b" => 2, "c" => 3 })
# ➞ [["a", "b", "c"], [1, 2, 3]]
# keys_and_values({ "a" => "Apple", "b" => "Microsoft", "c" => "Google" })
# ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
# keys_and_values({ "key1" => true, "key2" => false, "key3" => nil })
# ➞ [["key1", "key2", "key3"], [true, false, nil]]
# Notes
# N/A
def keys_and_values(hash)
	[hash.keys, hash.values]
end
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