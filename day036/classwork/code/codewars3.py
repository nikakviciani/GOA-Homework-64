# https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/python

def neutralise(s1, s2):
    res = ""
    for i in range(len(s1)):
        if s1[i] == s2[i]:
            res += s1[i]
        else:
            res += "0"
    return res
