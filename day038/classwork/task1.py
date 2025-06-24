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

# collection type: tuple, set





# tuple - klasi
# tuole - tuple ტიპის ობიექტი
# tuple - immutable ტიპის მონაცემთა სტრუქტურა, რომელიც შეიცავს ელემენტების შეუცვლელ სერიას
tuple_obj = (1, 2, 3, 4, 5)
tuple_obj[0] = 10 # TypeError: 'tuple' object does not support item assignment
# tuple ar icvleba



# ```1) თითოეულ ფუნქციასა და მეთოდზე შეასრულეთ 2 მაგალითი, 1 ცვლადის გამოყენებით 1 პირდაპირ მნიშვნელობის ჩასმით

# ფუნქციები:
# .sort()
# .isnumeric()
# sorted()
# min()
# max()
# ```
# .sort()
amam= [5, 3, 8, 1, 2]
amam.sort()  
amam2= [9,11, 7, 4, 6]
amam2.sort()
# 1,2,3,5,8
# 4,6,7,9,11

# sorted()
print(sorted(amam))
print(sorted(amam2))
# .isnumeric()
word1 = "12345"
word2 = "123a45"
print(word1.isnumeric())  
print(word2.isnumeric())  
# avrunebs bulean mnisvnelobas
# min()
numbers = [10, 20, 5, 15]
min(amam2)
min(numbers)
# abrunebs min mnisvnelobas
# max()
max(numbers)
max(amam2)
# abrunebs max mnisvnelobas