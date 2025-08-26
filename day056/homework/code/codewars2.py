# https://www.codewars.com/kata/5861d28f124b35723e00005e/train/python

def zero_fuel(distance_to_pump, mpg, fuel_left):
    mpg = mpg*fuel_left
    res = distance_to_pump - mpg 
    if res == 0 or res < 0:
        return True
    else:
        return False