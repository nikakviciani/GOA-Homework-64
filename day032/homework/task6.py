# 7) დაწერე ფუნქცია, რომელიც იღებს სტრიქონს და აბრუნებს ამ სტრიქონის სიგრძეს
def strlen(string):
    count = 0
    for char in string:
        count += 1
    return count