# https://www.codewars.com/kata/56747fd5cb988479af000028/train/python

def get_middle(s):
    length = len(s)
    mid = length // 2
    if length % 2 == 0:
        return s[mid-1:mid+1]
    else:
        return s[mid]
