# 6) მომხმარებელმა უნდა შეიყვანოს რიცხვები, სანამ -1-ს არ შეიყვანს. საბოლოოდ გამოიანგარიშოს შეყვანილი რიცხვების საშუალო
kk=0
inp=1
cou=0
while inp>-1:
    inp=int(input("number :"))
    if inp>-1:
        print(inp)
        kk += inp
        cou += 1
    else:
        print("negative number")
        print("საშვალო :" +str(kk/cou))
