// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/python
def dig_pow(n, p):
    total = sum(int(digit) ** (p + i) for i, digit in enumerate(str(n)))
    return total // n if total % n == 0 else -1
