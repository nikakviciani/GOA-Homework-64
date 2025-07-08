#7) შექმენით ლექსიკონი animal, შექმენით მისი ასლი .copy() მეთოდით, შემდეგ კი გამოიყენეთ .clear() ორივეზე (დასაწყისში და ბოლოს დაბეჭდეთ ორივე ლექსიკონი, კომენტარით)
animal = {
    "type": "Dog",
    "breed": "Labrador",
    "age": 5
}

# ვქმნით ასლს .copy() მეთოდით
animal_copy = animal.copy()

# ვწერთ .clear() მეთოდით ორივეზე
animal.clear()
animal_copy.clear()

# დაბეჭდილი შედეგები
print("Original animal dictionary:", animal)
print("Copied animal dictionary:", animal_copy)