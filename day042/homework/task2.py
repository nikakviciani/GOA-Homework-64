# 3) დაწერეთ ფუნქცია, რომელიც იღებს set-ს, ამატებს მას 3 ელემენტს add() მეთოდით, შემდეგ შლის ერთ ელემენტს remove() მეთოდით და აბრუნებს საბოლოო შედეგს

def modify_set(input_set):
    input_set.add(1)  # set-ში ემატება რიცხვი 1
    input_set.add(2)  # set-ში ემატება რიცხვი 2
    input_set.add(3)  # set-ში ემატება რიცხვი 3
    input_set.remove(2)  # set-დან იშლება რიცხვი 2
    return input_set
