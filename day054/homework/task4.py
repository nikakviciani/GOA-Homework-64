# 5) შექმენით ფუნქცია, რომელიც მიიღებს 'kwargs'-ით მანქანის მონაცემებს და დაბეჭდავს თითოეულ გასაღებს და მნიშვნელობას

def print_car_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
