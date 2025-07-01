# https://www.codewars.com/kata/55b42574ff091733d900002f/train/python

def friend(x):
    kok = []
    for i in x:
        if len(i) == 4:
            kok.append(i)
    return kok
