# https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python
import string

def is_pangram(st):
    letters = set(ch.lower() for ch in st if ch.isalpha())
    return letters >= set(string.ascii_lowercase)
