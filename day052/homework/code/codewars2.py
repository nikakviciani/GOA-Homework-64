# https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/python           

def get_grade(s1, s2, s3):
    score = (s1 + s2 + s3) / 3

    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    elif score >= 60:
        return 'D'
    else:
        return 'F'
