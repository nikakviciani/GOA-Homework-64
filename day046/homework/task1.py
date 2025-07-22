# 2) რიცხვების სიიდან "numbers = [1, 4, 7, 10, 13, 16, 19]" აირჩიეთ მხოლოდ კენტები, გაამრავლეთ ორზე და დაამატეთ "new_list"-ში, ჯერ "for"-ით, შემდეგ list comprehension-ით. ბოლოს გააკეთეთ 2 მსგავსი მაგალითი: ერთში მხოლოდ მოქმედება გამოიყენეთ, მეორეში მხოლოდ პირობა

numbers = [1, 4, 7, 10, 13, 16, 19]
new_list = []


for n in numbers:
    if n % 2 != 0:
        new_list.append(n * 2)

print(new_list)


new_list = [n * 2 for n in numbers if n % 2 != 0]
print(new_list)

new_list = [n * 2 for n in numbers if n % 2 != 0]
print(new_list)

new_list = [n for n in numbers if n % 2 != 0]
print(new_list)