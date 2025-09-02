# დეკორატორი ნიშნავს ფუნქციის გაფართოებას ან შეცვლას, მისი ძირითადი კოდის შეცვლის გარეშე.
# მაგალითად
def decorator_function(original_function):
    def wrapper_function():
        print("Wrapper executed before {}".format(original_function.__name__))
        return original_function()
    return wrapper_function


# 1) დაწერეთ რა არის scope თქვენი სიტყვებით და მოიყვანეთ 3 მაგალითი
# სკოუპი ნიშნავს ფუნქციის მოქმედების არეალს, სადაც ის ხელმისაწვდომია.
# ხოლო კონკრეტულად აქ დეფის შიგნით ტერიტორიას
def func1():
    var1 = 10
    def func():
        var2 = 20
        print(var1 + var2)
    func()
    print(var1)
def func2():
    var3 = 30
    def funca():
        var4 = 40
        print(var3 + var4)
    funca()
def func3():
    var5 = 50
    def funcb():
        var6 = 60
        print(var5 + var6)
    funcb()