// https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/python

import random

def get_bingo_card():
    cols = {
        'B': random.sample(range(1, 16), 5),
        'I': random.sample(range(16, 31), 5),
        'N': random.sample(range(31, 46), 5),
        'G': random.sample(range(46, 61), 5),
        'O': random.sample(range(61, 76), 5)
    }
    cols['N'].pop(2)  # remove center "FREE" spot
    return [(c, n) for c in 'BINGO' for n in cols[c]]
