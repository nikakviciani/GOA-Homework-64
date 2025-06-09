# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python


def square_digits(num):
    digits = str(num)
    squared_digits = [str(int(d)**2) for d in digits]
    result_str = ''.join(squared_digits)
    return int(result_str)
