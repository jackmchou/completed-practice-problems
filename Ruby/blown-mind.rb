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