// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/python

def find_uniq(arr):
    a, b, c = arr[0], arr[1], arr[2]
    common = a if a == b or a == c else b
    for num in arr:
        if num != common:
            return num
