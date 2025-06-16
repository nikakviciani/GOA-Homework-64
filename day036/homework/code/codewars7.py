# https://www.codewars.com/kata/57aa218e72292d98d500240f/train/python

import math
def heron(a, b, c):
    eight=(a+b+c)/2
    კკ=eight*(eight-a)*(eight-b)*(eight-c)
    return (math.sqrt(კკ))