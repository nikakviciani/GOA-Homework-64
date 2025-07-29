# https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/python

def find_next_square(sq):
    root = int(sq**0.5)
    if root * root == sq:      
        return (root + 1) ** 2 
    else:
        return -1           