// https://www.codewars.com/kata/52ebe4608567ade7d700044a/train/python
ranks = 'A23456789TJQK'
suits = 'cdhs'

def encode(cards):
    return sorted(ranks.index(c[0]) + 13 * suits.index(c[1]) for c in cards)

def decode(codes):
    return [ranks[c % 13] + suits[c // 13] for c in sorted(codes)]
