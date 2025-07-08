# 6) შექმენით ლექსიკონი person და გამოიყენეთ .items() მეთოდი, რათა დაბეჭდოთ ყველა key და value წყვილად. გამოიყენეთ loop და კომენტარი დაუმატეთ შედეგს
def print_dict_items(input_dict):
    for key, value in input_dict.items():
        print(f"{key}: {value}")  # დაბეჭდავს თითოეულ გასაღებს და მის შესაბამის მნიშვნელობას