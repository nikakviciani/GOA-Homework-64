# https://www.codewars.com/kata/57f609022f4d534f05000024/train/python

from collections import Counter

def stray(numbers):
    count = Counter(numbers)
    return min(count, key=count.get)
