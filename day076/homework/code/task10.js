// https://www.codewars.com/kata/513e08acc600c94f01000001/train/python

def rgb(r, g, b):
    return "{:02X}{:02X}{:02X}".format(
        max(0, min(255, r)),
        max(0, min(255, g)),
        max(0, min(255, b))
    )
