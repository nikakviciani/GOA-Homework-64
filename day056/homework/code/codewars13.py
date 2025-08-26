# https://www.codewars.com/kata/541c8630095125aba6000c00/train/python
def digital_root(n):
    return n if n == 0 else (n - 1) % 9 + 1
