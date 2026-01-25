// https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/python

def most_money(students):
    if len(students) == 1:
        return students[0].name

    totals = [s.fives * 5 + s.tens * 10 + s.twenties * 20 for s in students]

    if len(set(totals)) == 1:
        return "all"

    return students[totals.index(max(totals))].name
