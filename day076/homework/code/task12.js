// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/python

def dirReduc(arr):
    opp = {"NORTH":"SOUTH","SOUTH":"NORTH","EAST":"WEST","WEST":"EAST"}
    res = []
    for d in arr:
        if res and res[-1] == opp.get(d):
            res.pop()
        else:
            res.append(d)
    return res
