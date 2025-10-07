// https://www.codewars.com/kata/555eded1ad94b00403000071/train/python
def series_sum(n):
    if n == 0:
        return "0.00"
    
    total = 0.0
    for i in range(n):
        denominator = 1 + 3 * i
        total += 1 / denominator
    
    return f"{total:.2f}"