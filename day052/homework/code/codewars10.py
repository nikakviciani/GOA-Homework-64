# https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/python

def is_anagram(test, original):
    return sorted(test.replace(" ", "").lower()) == sorted(original.replace(" ", "").lower())
