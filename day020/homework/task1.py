"""2) შექმენით პროგრამა რომელიც მომხმარებლისგან მიიღებს რიცხვს, შემდეგ დაადგენს დადებითია, უარყოფითი თუ ნული if-elif-else ის საშვალებით, თუ რიცხვი დადებითია შეამოწმეთ არის თუ არა ლუწი თუ არის დაბეჭდეთ "The number is positive and even." ხოლო სხვა შემთხვევაში დაბეჭდეთ "The number is positive and odd."""
inp=int(input("please input number :"))
if inp>0 and inp % 2 == 0:
    print("odd and possitive")
elif inp>0 and inp % 2 == 1:
    print("even and possitive")
elif inp<0 and inp % 2 == 0:
    print("odd and negative")
elif inp<0 and inp % 2 == 1:
    print("even and negative")
else:
    print("neitral")