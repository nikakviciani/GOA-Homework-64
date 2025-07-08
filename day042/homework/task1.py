# 2) შექმენით set სახელად numbers, დაამატეთ მას ორი რიცხვი add() მეთოდით და წაშალეთ ორი ელემენტი remove() მეთოდით. შემდეგ შექმენით მეორე set სახელად even_numbers და გამოიყენეთ union(), intersection(), difference() ორივე set-ზე. დაუმატეთ კომენტარები, რას აკეთებს თითოეული მეთოდი
# ვქმნით set-ს სახელად numbers
numbers = set()
# ვქმნით ცარიელ set-ს სახელად numbers
# ვამატებთ ორ რიცხვს add() მეთოდით
numbers.add(3)      # set-ში ემატება რიცხვი 3
numbers.add(6)      # set-ში ემატება რიცხვი 6

# ვშლით ორ ელემენტს remove() მეთოდით
numbers.remove(3)   # set-დან იშლება რიცხვი 3
numbers.remove(6)   # set-დან იშლება რიცხვი 6

# ვქმნით მეორე set-ს სახელად even_numbers
even_numbers = {2, 4, 6, 8}

# union() აერთიანებს ორ set-ს და აბრუნებს ახალ set-ს, რომელიც შეიცავს ორივე set-ის ყველა უნიკალურ ელემენტს
union_set = numbers.union(even_numbers)

# intersection() აბრუნებს ახალ set-ს, რომელიც შეიცავს მხოლოდ იმ ელემენტებს, რომლებიც ორივე set-შია
intersection_set = numbers.intersection(even_numbers)

# difference() აბრუნებს ახალ set-ს, რომელიც შეიცავს მხოლოდ იმ ელემენტებს, რომლებიც პირველ set-შია და მეორეში არა
difference_set = numbers.difference(even_numbers)

print("Union:", union_set)
print("Intersection:", intersection_set)
print("Difference:", difference_set)