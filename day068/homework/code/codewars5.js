// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/python

def remove_duplicate_words(s):
    seen = []
    for word in s.split():
        if word not in seen:
            seen.append(word)
    return ' '.join(seen)
