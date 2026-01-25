// https://www.codewars.com/kata/517b2bcf8557c200b8000015/train/python
Position = {'high': 'h', 'low': 'l'}  # don't change this!

class Warrior:
    def __init__(self, name):
        # each warrior should be created with a name and 100 health points
        self.name = name
        self.health = 100
        # default guard is "", that is unguarded
        self.block = ""
        # deceased and zombie flags
        self.deceased = False
        self.zombie = False
    
    def set_health(self, new_health):
        # health cannot have negative values
        self.health = max(0, new_health)
        # if a warrior is set to 0 health he is dead
        if self.health == 0:
            self.deceased = True
            self.zombie = False
        # he would be a zombie only if he was already dead
        if self.deceased:
            self.zombie = True
    
    def attack(self, enemy, position):
        damage = 0
        # attacking high deals 10 damage, low 5
        if enemy.block != position:
            damage += 10 if position == Position['high'] else 5
        # extra 5 damage if the enemy is not blocking at all
        if enemy.block == "":
            damage += 5
        enemy.set_health(enemy.health - damage)

