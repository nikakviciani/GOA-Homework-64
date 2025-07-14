# https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python

def descending_order(num):
    digit = [*str(num)] 
    digit.sort(reverse=True)
    return int(''.join(digit))
