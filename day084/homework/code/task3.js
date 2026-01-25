// https://www.codewars.com/kata/5469e0798a3502f4a90005c9/train/python

def rotate(array, n):
    if len(array) == 0:
        return array
    # Normalize shift so relative to array length
    n = n % len(array)
    # Right rotation: take last n to front
    return array[-n:] + array[:-n]
