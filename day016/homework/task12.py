# 13) შექმენით პროგრამა რომელიც მომხმარებელს შეეკითხება პაროლს სანამ ის არ შემოიყვანს goabest123-ს
pas="goabest123"
while True:
    password=input("please enter your password: ")
    if password==pas:
        print("welcome")
    else:
        print("try again")