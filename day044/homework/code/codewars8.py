# https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python
def xo(s):
    xes=0
    oses=0
    s=s.lower()
    for i in s:
        if i == "o":
            oses+=1
        elif i == "x":
            xes+=1
        else:
            None
    return xes == oses