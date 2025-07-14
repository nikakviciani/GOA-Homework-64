# https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python
def digitize(n):
    res=[]
    n=str(n)
    n=n[::-1]
    for i in n:
        i=int(i)
        res.append(i)
    return res