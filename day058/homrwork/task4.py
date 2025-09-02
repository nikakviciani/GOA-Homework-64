'''5) შექმენით Fighter კლასი და გაუწერეთ ატრიბუტები health, damage, speed და მეთოდი heal. შემდეგ მისგან მემკვიდრეობით შექმენით 2 კლასი Archer და Mage. დაამატეთ შესაბამისი ატრიბუტები range, reload და spell, mana. შემდეგ ამ კლასებით შექმენით მოცემული ობიექტები და კიდევ რამდენიმე თქვენით მოიფიქრეთ

ninja
samurai
viking
warrior
veteran
tribesman
necromancer'''
class Fighter:
    def __init__(self, health, damage, speed):
        self.health = health
        self.damage = damage
        self.speed = speed

    def heal(self, amount):
        self.health += amount
        print(f"{self.__class__.__name__} healed by {amount}. Health is now {self.health}.")

class Archer(Fighter):
    def __init__(self, health, damage, speed, range, reload):
        super().__init__(health, damage, speed)
        self.range = range
        self.reload = reload

class Mage(Fighter):
    def __init__(self, health, damage, speed, spell, mana):
        super().__init__(health, damage, speed)
        self.spell = spell
        self.mana = mana


ninja = Fighter(health=80, damage=25, speed=30)
samurai = Fighter(health=100, damage=30, speed=20)
viking = Fighter(health=120, damage=35, speed=15)
warrior = Fighter(health=110, damage=28, speed=18)
veteran = Fighter(health=130, damage=32, speed=17)
tribesman = Archer(health=70, damage=20, speed=22, range=50, reload=2)
necromancer = Mage(health=60, damage=40, speed=12, spell="skeleton army", mana=100)
