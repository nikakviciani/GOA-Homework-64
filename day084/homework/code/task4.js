// https://www.codewars.com/kata/59f70440bee845599c000085/train/python
def find_hack(arr):
    hacked = []
    scores = {'A': 30, 'B': 20, 'C': 10, 'D': 5}

    for name, total, grades in arr:
        # Calculate actual score
        calc = sum(scores.get(g, 0) for g in grades)

        # Bonus only if 5+ grades and all grades are A or B
        if len(grades) >= 5 and all(g in ('A', 'B') for g in grades):
            calc += 20

        # Mark hacked if total > 200 or mismatch
        if total > 200 or calc != total:
            hacked.append(name)

    return hacked
