# 2) მომხმარებელს შემოატანინეთ თავისი სიმაღლე, შემდეგ შემოატანინეთ წლების რაოდენობა, მიღებული ინფორმაცია შეინახეთ ცვლადებში და გამოუთვალეთ მომხმარებელს სავაურდო სიმაღლე EH (Estimated Height) როდესაც გავა y წელი (რაც მომხმარებლმა შემოიტანა) თუ დაუშვათ ყოველ წელს სიმაღლე იზრდება 0.5-ით. საბოლოოდ გამოუტანეთ EH
years=int(input("years :"))
height=int(input("your height:"))
print(float(height)+0,5*years)