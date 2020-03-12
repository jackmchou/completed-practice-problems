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