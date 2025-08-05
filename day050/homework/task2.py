# 3) დაწერეთ ფუნქცია, რომელიც იღებს სიტყვას და თუ ის ცარიელია, გამოიყენეთ 'raise' რათა გამოაგდოს 'ValueError' შეტყობინებით "სიტყვა არ უნდა იყოს ცარიელი"
def check_word(word):
    if not word:
        raise ValueError("სიტყვა არ უნდა იყოს ცარიელი")
    return True