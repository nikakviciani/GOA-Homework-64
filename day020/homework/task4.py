# 5) მომხმარებელს 3 მცდელობა აქვს სწორი PIN კოდის შეყვანისთვის. თუ შეიყვანს სწორად, დაიბეჭდება "Access Granted", სხვა შემთხვევაში "Access Denied" გამოიყენეთ პირობითი განცხადებები
pin=1225
cc=3
pin_user=int(input("please emter pin code :"))
while cc > 1:
    if pin != pin_user:
        cc -=1 
        print("acress deliced")
        pin_user=int(input("please emter pin code :"))
    else:
        print("acress granted")
        break