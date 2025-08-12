# https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/python

def factorial(n):
    if n < 0 or n > 12:
        raise ValueError("Input must be between 0 and 12 inclusive")
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result
