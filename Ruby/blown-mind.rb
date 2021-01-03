
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