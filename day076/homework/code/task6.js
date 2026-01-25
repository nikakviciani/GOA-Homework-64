// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/python
def compute_sum(n):
    return sum(sum(int(d) for d in str(i)) for i in range(1, n + 1))
