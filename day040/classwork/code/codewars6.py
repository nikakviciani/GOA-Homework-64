# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python


def high_and_low(numbers):
    nums = list(map(int, numbers.split()))
    return f"{max(nums)} {min(nums)}"
