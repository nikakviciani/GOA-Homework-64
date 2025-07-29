# https://www.codewars.com/kata/57eae65a4321032ce000002d/train/python

def fake_bin(x):
    result = ''
    for digit in x:
        if int(digit) < 5:
            result += '0'
        else:
            result += '1'
    return result

