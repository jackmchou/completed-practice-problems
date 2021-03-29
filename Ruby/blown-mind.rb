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