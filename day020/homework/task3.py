# 4) შექმენით პროგრამა რომელშიც მომხმარებელმა უნდა შეიყვანოს რიცხვები, სანამ უარყოფითს არ შეიყვანს. დაბეჭდეთ შეყვანილი ლუწი და კენტი რიცხვების რაოდენობა გამოიყენეთ პირობითი განცხადებები
inp=1
l=0
k=0
while inp>0:
    inp=int(input("number :"))
    if inp % 2 == 0 and inp>0 :
        print("odd and possitive ")
        l+=1
    elif inp % 2 == 1 and inp>0:
        print("even and possitive")
        k+=1
    elif inp==0:
        print("neitral")
    else:
        print("negative number")
        if inp % 2==1:
            k+=1
        if inp % 2==0:
            l+=1
        print("even numbers :" +str(k))
        print("odd numbers :" +str(l))
