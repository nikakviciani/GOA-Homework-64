# 4) რიცხვების სიიდან "nums = list(range(1, 21))" შექმენით ახალი სია კვადრატებით, ჯერ "for"-ით, შემდეგ list comprehension-ით. შემდეგ სცადეთ მსგავსი მაგალითი სხვა მოქმედებით
nums = list(range(1, 21))
new_list = []
for n in nums:
    new_list.append(n ** 2)
print(new_list)

new_list = [n ** 2 for n in nums]
print(new_list)
