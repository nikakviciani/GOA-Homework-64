#2) კომენტარებით რა არის dictionary, შემდეგ შექმენით 1 dictionary სახელად person რომელშიც გასაღებები იქნება: name, hobby, height, weight. გამოიყენეთ მეთოდები:

# clear()
# copy()
# get()
# items()
# keys()
# values()
# pop()
# popitem()
# update()  

# Dictionary არის მონაცემთა სტრუქტურა, რომელიც ინახავს მონაცემებს გასაღები-მნიშვნელობის წყვილების სახით.
# ვქმნით dictionary-ს სახელად person
person = {
    "name": "Luka",
    "hobby": "Reading",
    "height": 176,
    "weight": 65
}

# copy() - ქმნის ასლს dictionary-სგან
person_copy = person.copy()
# get() - აბრუნებს მნიშვნელობას მითითებული გასაღებისთვის
name = person.get("name")
# items() - აბრუნებს ყველა წყვილს (გასაღები, მნიშვნელობა)
all_items = person.items()
# keys() - აბრუნებს ყველა გასაღებს
all_keys = person.keys()
# values() - აბრუნებს ყველა მნიშვნელობას
all_values = person.values()
# pop() - შლის მითითებულ გასაღებს და აბრუნებს მის მნიშვნელობას
hobby = person.pop("hobby")
# popitem() - შლის და აბრუნებს ბოლო წყვილს
last_item = person.popitem()
# update() - ამატებს ან ანახლებს ელემენტებს dictionary-ში
person.update({"age": 25})