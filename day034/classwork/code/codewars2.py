# https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python

def get_count(sentence):
    wowels="aeiou"
    attend=0
    for char in sentence:
        if char in wowels:
            attend += 1
    return attend