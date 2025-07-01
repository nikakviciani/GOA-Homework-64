# https://www.codewars.com/kata/59a9919107157a45220000e1/train/python

def find_all(array, n):
    res=[]
    for index in range(len(array)):
        if array[index] == n:
            res.append(index)
    return res