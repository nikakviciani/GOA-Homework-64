// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/python

def get_pins(observed):
    adjacent = {
        '0': '08', '1': '124', '2': '1235', '3': '236',
        '4': '1457', '5': '24568', '6': '3569',
        '7': '478', '8': '57890', '9': '689'
    }
    result = ['']
    for d in observed:
        result = [prefix + x for prefix in result for x in adjacent[d]]
    return result
