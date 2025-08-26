# https://www.codewars.com/kata/5680781b6b7c2be860000036/train/python

def vowel_indices(word):
    vowels = "aeiouyAEIOUY"
    return [i + 1 for i, c in enumerate(word) if c in vowels]
