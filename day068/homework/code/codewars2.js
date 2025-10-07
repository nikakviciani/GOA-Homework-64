// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/python

def sequence_sum(begin, end, step):
    if begin > end:
        return 0
    return sum(range(begin, end + 1, step))
