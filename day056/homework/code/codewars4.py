# https://www.codewars.com/kata/56b1f01c247c01db92000076/train/python

def double_char(s):
    res = []
    for i in s:
        res.append(i)
        res.append(i)
    result = ''.join(res)
    return result