# https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python

def DNA_strand(dna):
    secside = ""
    for i in dna:
        if i == "A":
            secside += "T"
        elif i == "T":
            secside += "A"
        elif i == "G":
            secside += "C"
        elif i == "C":
            secside += "G"
    return secside
