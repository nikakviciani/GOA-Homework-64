"""6) მომხმარებელს შემოატანინეთ ქულა score და შეინახეთ ცვლადში, როგორც integer.
შემდეგ, ქულის მიხედვით განსაზღვრეთ შეფასება (grade):
A – თუ score მეტია 80-ზე
B – თუ score მეტია 60-ზე
C – თუ score მეტია 40-ზე
D – თუ score მეტია 20-ზე
F – თუ score 20-ზე ნაკლებია

ბოლოს, დაბეჭდეთ შესაბამისი grade."""
score = int(input("Enter your score: "))
if score > 80:
    grade = "A"
elif score > 60:
    grade = "B"
elif score > 40:
    grade = "C"
elif score > 20:
    grade = "D"
else:
    grade = "F"
    
# elif აერთიანებს if და else-ს, ამიტომ else-ის გამოყენება არ არის საჭირო,აქ რომ ეწეროს if ,if,if,if,if და სქორი იქნება 90 მაგალითად, მაშინ 90-ზე მეტია 80-ზე და 60-ზე და 40-ზე და 20-ზე და შესაბამისად ყველაფერი გამოვა

"""1) მოხმარებელს შემოატანინეთ რიცხვი, შემდეგ კი დაუბეჭდეთ ეს რიცხვი დადებითია, უარყოფითი თუ ნეიტურალი ანუ ნული. შემდეგ კომენტარებით ახსენით რა გასნხვავებაა if-სა და elif-ს შორის რატომ არ შეიძლება ზოგერ elif-ს ნაცვლად if-ის გამოყენება"""
input_number = int(input("Enter a number: "))
if input_number > 0:
    print("Positive")
elif input_number < 0:
    print("Negative")
else:
    print("neitral")
# elif აერთიანებს if და else-ს, ამიტომ else-ის გამოყენება არ არის ყოველთვის საჭირო საჭირო,აქ (ქულებზე) რომ ეწეროს if ,if,if,if,if და სქორი იქნება 90 მაგალითად, მაშინ 90-ზე მეტია 80-ზე და 60-ზე და 40-ზე და 20-ზე და შესაბამისად ყველაფერი გამოვა a b c d f,da viyenebt roca ramdenime piroba gvaqvs