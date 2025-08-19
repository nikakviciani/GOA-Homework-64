# 2) შექმენით ფუნქცია greet_people რომელსაც ექენბა 3 არგუემნტის ცვლადი, special, *guests, **visitors. თქვენი ფანტაზიით მიესალმეთ თითეულს განსხვავებულად. ახსენით რა არის *args და **kwargs

def greet_people(special, *guests, **visitors):
    print(f"special guest: {special}")
    for guest in guests:
        print(f"hello {guest}!")
    for visitor, reason in visitors.items():
        print(f"welcome {visitor}! reason: {reason}")

# *args არის არგუმენტების ცვლადის რაოდენობა, რომელიც ასევე გადაეცემა ფუნქციას როგორც tuple ტიპის ინფორმაცია
# **kwargs არის არგუმენტების ცვლადის რაოდენობა, რომელიც გადაეცემა ფუნქციას როგორც dictionaryის ტიპის ინფორმაცია


# def sum_arguments(*args):
#     total = 0
#     for num in args:
#         total += num
#     return total

# print(sum_arguments(1, 2, 3, 4, 5))

# *args (arguments) - არგუმენტების ოპერატორი, სახელი შეგვიძლია ჩვენით შევარჩიოთ. მასში მოცემული იქნება ყველა უსახელო არგუმენტი, რომელიც არ არის ცალკე არგუმენტად აღებული თავიდანვე. თუ ამ არგუმენტების ოპერატორთან ერთად გვაქვს ცალკე არგუმენტებიც, მაშინ ჯერ ეს არგუმენტები იწერება შემდეგ კი არგუმენტების ოპერატორი

# **kwargs (keyword arguments) - დასახელებული არგუმენტების ოპერატორი, როგორც წესი ყოველთვის ბოლოს იწერება არგუმენტბის თანმიმდევორბაში, მასში მოცემული იქნებ ყველა სახელიანი არგუმენტი dictioanry-ის სახით, {სახელი: არგუმენტი}

def greet_people(special, *guests, **visitors):
    print("Welcome " + special)
    for guest in guests:
        print("Hello " + guest)
    print(visitors)

greet_people("Luka", "Giorgi", "Nika", "Tato", "Ioane", visitor="Givi", visitor2="Lazare")