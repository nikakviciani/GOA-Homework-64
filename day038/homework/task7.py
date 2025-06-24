# 8) შექმენით tuple, რომელიც შეიცავს სამ მნიშვნელობას (მაგ. სახელი, ასაკი, ქვეყანა). გამოიყენეთ tuple unpacking ამ მნიშვნელობების ცალკეულ ცვლადებში მოსათავსებლად და დაბეჭდეთ თითოეული ცვლადი
def tuple_unpacking(tup):
    if len(tup) != 3:
        raise ValueError("Tuple must contain exactly three elements.")
    name, age, country = tup
    print(f"Name: {name}")
    print(f"Age: {age}")
    print(f"Country: {country}")
