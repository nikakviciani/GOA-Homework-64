# 6) დაწერეთ დეკორატორი, რომელიც ფუნქციის გაშვების წინ დაბეჭდავს "ფუნქცია დაიწყო" და დასრულების შემდეგ "ფუნქცია დასრულდა"

def print_start_end(func):
    def wrapper(*args, **kwargs):
        print("ფუნქცია დაიწყო")
        result = func(*args, **kwargs)
        print("ფუნქცია დასრულდა")
        return result
    return wrapper
