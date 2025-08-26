# 10) დაწერეთ დეკორატორი, რომელიც ფუნქციის დაბრუნებულ ტექსტს გადააქცევს დიდ ასოებად
def uppercase_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        if isinstance(result, str):
            return result.upper()
        return result
    return wrapper