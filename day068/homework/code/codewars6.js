// https://www.codewars.com/kata/54e6533c92449cc251001667/train/python

def unique_in_order(sequence):
    result = []
    prev = None
    for item in sequence:
        if item != prev:
            result.append(item)
            prev = item
    return result
