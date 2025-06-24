# 5) დაწერეთ ფუნქცია, რომელიც მიიღებს სიას და დაბეჭდავს უნიკალურ ელემენტებს და მათ რაოდენობას სიაში, მაგ: apple - 2, banana - 3... გამოიყენეთ .count მეთოდი
def print_unique_elements(lst):
    unique_elements = set(lst)  
    for element in unique_elements:
        count = lst.count(element)  
        print(f"{element} - {count}")