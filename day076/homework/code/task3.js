// https://www.codewars.com/kata/536e9a7973130a06eb000e9f/train/python

def calculate_damage(your_type, opponent_type, attack, defense):
    eff = {
        'fire': {'fire': 0.5, 'grass': 2,   'water': 0.5, 'electric': 1},
        'water':{'fire': 2,   'grass': 0.5, 'water': 0.5, 'electric': 0.5},
        'grass':{'fire': 0.5, 'grass': 0.5, 'water': 2,   'electric': 1},
        'electric':{'fire':1, 'grass':1,    'water':2,    'electric':0.5}
    }
    return int((50 * attack / defense) * eff[your_type][opponent_type] + 0.9999999999)
