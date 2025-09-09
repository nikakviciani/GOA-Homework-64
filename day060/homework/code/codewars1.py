# https://www.codewars.com/kata/55f2b110f61eb01779000053/train/python

def get_sum(a, b):
    if a == b:
        return a
    low = min(a, b)
    high = max(a, b)
    n = high - low + 1
    total = n * (low + high) // 2
    
    return total