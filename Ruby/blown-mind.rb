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