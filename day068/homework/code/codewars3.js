// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/python
def check_exam(arr1, arr2):
    score = 0
    for correct, student in zip(arr1, arr2):
        if student == "":
            score += 0
        elif student == correct:
            score += 4
        else:
            score -= 1
    return max(score, 0)
