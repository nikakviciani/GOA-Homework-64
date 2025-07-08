# 5) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და აბრუნებს მის keys-სა და values-ს .keys() და .values() მეთოდებით. დაბეჭდეთ ორივე შედეგი და დაურთეთ კომენტარები
def get_dict_keys_and_values(input_dict):
    keys = input_dict.keys()  # .keys() მეთოდით ვიღებთ ლექსიკონის გასაღებებს
    values = input_dict.values()  # .values() მეთოდით ვიღებთ ლექსიკონის მნიშვნელობებს
    return keys, values