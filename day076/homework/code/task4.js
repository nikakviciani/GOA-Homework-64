// https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/python

def alphabet_war(fight):
    left = {'w':4,'p':3,'b':2,'s':1}
    right = {'m':4,'q':3,'d':2,'z':1}
    s = list(fight)
    for i, c in enumerate(fight):
        if c == '*':
            if i > 0: s[i-1] = ''
            if i < len(s)-1: s[i+1] = ''
    l = sum(left.get(c,0) for c in s)
    r = sum(right.get(c,0) for c in s)
    return "Left side wins!" if l > r else "Right side wins!" if r > l else "Let's fight again!"
