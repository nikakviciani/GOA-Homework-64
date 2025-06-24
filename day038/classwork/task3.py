# 3) შექმენით list, tuple და set. კომენტარებით დაწერეთ თითოეულის თვისება და ყველა თვისებიდან მოიყვანეთ მაგალითები


# set iwereba ase
kk={2,245,7,745,4,56,79675,685746,57,687980,97,8675645,}
# არ აქვს დუბლიკატები, არ არის ინდექსირებული, შეცვლადი

# სია იწერება ესე
num=[12,5,235,2,675,68,93,8,787,9,]
# სია არის ინდექსირებული, შეიცავს დუბლიკატებს, შეცვლადი

# tuple iwereba ase
num_tuple=(12,5,235,2,675,68,93,8,787,9,)
# tuple არის ინდექსირებული, არ შეიცავს დუბლიკატებს, შეუცვლადი








# subjects = ["Math", "History", "English", "Physics", "Chemistry"]
# sorted_subjects = sorted(subjects) # method ალაგებს ასიას ანბანის მიხედვვით
# print(sorted_subjects)

# .sort() - მეთოდი რომელიც სიას ალაგებს ზრდადობით და ანბანის მიხედვით, სიის მნიშვნელობას ანახლებს
# sorted() - ფუნქცია ალაგებს strings/lists/collection მაგრამ ორიგნალური სიის მნიშვნელობას არ ცვლის
# min() - ფუნქცია რომელსაც გადაეცემა collection (list), აბრუნებს ყველაზე მცირე ელემენტს სიმრავლიდან
# max() - მუშაობს როგორც min ფუნქცია, აბრუნებს მაქსიმალურ ანუ ყველაზე დიდ მნიშვნელობას სიმრავლიდან

# .isnumeric() - strings მეთოდი რომელიც ამოწმებს სტრინგის მნიშვნელობა რიცხვითია თუ არა და აბრუნებს შესაბამისად boolean მნიშვნელობას


# numbers = [6, 34, 3, 1, 24, 7, 346]
# min_value = min(numbers)
# max_value = max(numbers)

# print(min_value)
# print(max_value)

# word = "35"

# if word.isnumeric():
#     int(word)

# print(word.isnumeric())

subjects = ["Math", "History", "English", "Physics", "Chemistry"]
# table2 = subjects

# table2.append("Geography")
# table2.pop(2)
# print(subjects)

# collection type: tuple, set

# subjects = ("English", "Biology", "Math", "English", 200)

# print(len(subjects))
# print(subjects[1])
# print(sorted(subjects))

# print(type(subjects))


# def manual_min(arr):
#     return min(arr)

# print(manual_min([52, 723, 74, 2, 76, 7]))


# nums = [2, 2, 5, 7, 8, 12, 5, 2, 15, 78, 2]

# print(nums.count(16))

# print(nums.index(13))

# list_name.count(value) - მეთოდი, ითვლის მიმდევრობაში მნიშვნელობის რაოდენობას
# list_name.index(target) - მეთოდი, პოულობს საძიებელი მნიშვნელობის მცირე ინდექსს სიაში

# nums = (2, 2, 5, 7, 8, 12, 5, 2, 15, 78, 2)

# for index, value in enumerate(nums):
#     print(f"Index {index} Value: {value}")

# cs_subjects = ("CoScience", "Math", "English", "Logic")

# sub1, sub2, sub3 = cs_subjects

# print(sub1)
# print(sub2)
# print(sub3)

# nums = (155, 2, 5, 7, 8, 12, 5, 2, 15, 78, 2)

# set - წყობა, სიმრავლე მონაცემთა ტიპი შეიძლება შეცვლა, არ დაიშვება განმეორბითი ელემენტი
# არ არის დალაგებული 

# numbers1 = {1, 2, 2, 3, 4, 5, 6, 15}
# numbers2 = {-1, 11, 12, 2, 13, 14, 15}

# print(numbers2.difference(numbers1))

nums = list()
names = tuple()
zeros = set()
print(nums)
print(names)
print(zeros)