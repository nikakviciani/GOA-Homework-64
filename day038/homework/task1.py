# 2) შექმენით ფუნქცია manual_index, რომელიც მიიღებს სიას და ელემენტს და დააბრუნებს ელემენტის ინდექსს სიაში. გამოიყენეთ მხოლოდ loop და if, .index მეთოდის გარეშე
def manual_index(lst, element):
    for index, item in enumerate(lst):
        if item == element:
            return index
    return -1