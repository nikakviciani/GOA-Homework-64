# ```2) შექმენით Fighter კლასი და გაუწერეთ მინიმუმ 3 ატრიბუტი, შემდეგ შექმნით ამ კლასის 3 ინსტანცია და დაბეჭდეთ ერთ-ერთის თვისებები. დაწერეთ ობიექტზე ორინეტირებული პროგრამირება```
class Fighter:
    def __init__(self, name, power, health):
        self.name = name
        self.power = power
        self.health = health

fighter1 = Fighter("Bruce", 90, 100)
fighter2 = Fighter("Jackie", 85, 95)
fighter3 = Fighter("Chuck", 80, 90)

print(fighter2.name, fighter2.power, fighter2.health)

class Fighter:
    def __init__(self, health, damage, speed):
        self.health = health
        self.damage = damage
        self.speed = speed
    
    def heal(self):
        self.health += 10

class Archer(Fighter):
    def __init__(self, health, damage, speed, range, reload):
        super().__init__(health, damage, speed)
        self.range = range
        self.reload = reload

class Mage(Fighter):
    def __init__(self,  health, damage, speed, spell, mana):
        super().__init__( health, damage, speed)
        self.spell = spell
        self.mana = mana
    

tribesman = Fighter(40, 10, 15)
warrior = Fighter(100, 20, 40)

# Dot notation ვიყენებთ არსებული ობიექტის თვისებებს რომ მივწვდეთ
print("Health: ", tribesman.health)
print("Damage: ", tribesman.damage)
print("Speed: ", tribesman.speed)

tribesman.heal()
tribesman.heal()
tribesman.heal()
print(tribesman.health)