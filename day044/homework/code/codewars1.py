# https://www.codewars.com/kata/5556282156230d0e5e000089/train/python

def dna_to_rna(dna):
    secside = ""
    for i in dna:
        if i == "A":
            secside += "A"
        elif i == "T":
            secside += "U"
        elif i == "G":
            secside += "G"
        elif i == "C":
            secside += "C"
    return secside