# https://www.codewars.com/kata/56598d8076ee7a0759000087/train/python


import math
def calculate_tip(amount, rating):
    rating = rating.lower()
    
    if rating == "terrible":
        return 0
    elif rating == "poor":
        return math.ceil((amount * 5) / 100)
    elif rating == "good":
        return math.ceil((amount * 10) / 100)
    elif rating == "great":
        return math.ceil((amount * 15) / 100)
    elif rating == "excellent":
        return math.ceil((amount * 20) / 100)
    else:
        return "Rating not recognised"
