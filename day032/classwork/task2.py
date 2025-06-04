# # დეფაულტ პარამეტრების გამოყენება
# # დეფაულტი არის თავისთავადი მნიშვნელობა, რომელიც გამოიყენება თუ მომხმარებელი არ აწვდავს სხვა მნიშვნელობას.
# def greet(name, greeting="Hello"):
#     print(f"{greeting}, {name}!")
#     return
# # default parameter - თავისთავადი პარამეტრის მნიშვნელობა, რომელიც მიენიჭება პარამეტრს მნიშვნელობად როდესაც პარამეტრის შესაბამის არგუმენტს არ გადვაცემთ ფუნქციას გამოძახებისას. პარამტერს რომ მნივანიჭოთ default მნიშვნელობა უნდა დავწეროთ ტოლობის ნიშანი და მნიშვნელობა პარამეტრის სახელის შემდეგ

# def add_numbers(num1=0, num2=0):
#     return num1 + num2

# print(add_numbers(10))
# print(add_numbers(20, 45))
# print(add_numbers())




def marili(num1,num2):
    area= num1 * num2
    perimetre= 2 * (num1 + num2)
    return area, perimetre
# ფუნქცია marili იღებს ორ არგუმენტს num1 და num2 და აბრუნებს მათ როგორც ტუპლს
marili(5, 10)

megu,isii=marili(5, 10)
# ფუნქცია marili გამოიძახება და მისი შედეგი ინახება ცვლადებში megu და isii
print(megu, isii)
# result შეიცავს ტუპლს (5, 10)














# 2) შექმენით ფუნქცია, რომელიც მიიღებს კვადრატის სიგრძეს თუ სიგრძე არ გადმოგეცემათ ივარაუდოთ რომ ის 10-ია, გამოთვლის მის ფართობსა და პერიმეტრს და დააბრუნებს ერთად. ეს ფუნქცია გამოიძახეთ მინიმუმ 2-ჯერ ერთხელ გადაეცით თქვენთვის სასურველი სიგრძე, მეორედ კი არაფერი გადასცეთ, ორივე შემთხვევაში შეინახეთ ფუნქციის დაბრუნებული მნიშვნელობები ცვლადებში: square_area1, square_perimeter1, square_area2, square_perimeter2
def square_properties(length=10):
    area = length ** 2
    perimeter = 4 * length
    return area, perimeter
aree2,perim2 = square_properties()
aree2,perim2 = square_properties(5)
aree1,perim1 = square_properties(77)
