# https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/python

def reverse_words(s):
    return ' '.join(word[::-1] for word in s.split(' '))
