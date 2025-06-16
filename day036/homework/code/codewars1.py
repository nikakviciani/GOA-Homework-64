# https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python


def count_positives_sum_negatives(arr):
    if not arr:
        return []
    count_positive = 0
    sum_negative = 0
    for num in arr:
        if num > 0:
            count_positive += 1
        elif num < 0:
            sum_negative += num
    return [count_positive, sum_negative]