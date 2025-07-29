# https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/python

def find_average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)
