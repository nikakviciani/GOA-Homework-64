# https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python

def count_positives_sum_negatives(arr):
    if not arr:
        return []

    count_pos = 0
    sum_neg = 0

    for i in arr:
        if i > 0:
            count_pos += 1
        elif i < 0:
            sum_neg += i

    return [count_pos, sum_neg]
