# 11) რიცხვების სიაზე "nums = [1, 2, 3, 4, 5, 6]" გამოიყენეთ 'filter' და 'map' ერთად 'lambda'-თან, რათა გაფილტრდეს ლუწები და შემდეგ ყველა ლუწი გაიზარდოს 10-ით
nums = [1, 2, 3, 4, 5, 6]
filtered_and_increased_nums = list(map(lambda x: x + 10, filter(lambda x: x % 2 == 0, nums)))