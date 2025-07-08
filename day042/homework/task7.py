#8) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და ამატებს ახალ წყვილს ('age': 14) .update() მეთოდით, შემდეგ კი შლის ბოლო ელემენტს .popitem() მეთოდით. დაბეჭდეთ შედეგი და დაუმატეთ კომენტარები
def update_and_pop_dict(input_dict):
    input_dict.update({'age': 14})  # .update() მეთოდით ვამატებთ ახალ წყვილს
    last_item = input_dict.popitem()  # .popitem() მეთოდით ვშლით ბოლო ელემენტს
    print("Updated dictionary:", input_dict)
    print("Removed item:", last_item)
