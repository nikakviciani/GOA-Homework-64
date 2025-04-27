# slice=najeri
n=[1,2,3,4,5,6,7,8,9,10]
slice=n[5:0:-1]
print(slice)
# თუ გვინდა რომ ბოლო 5 ელემენტი გამოვიტანოთ მაშინ უნდა მივუმატოთ 1 იმ რიცხვს რითიც უნდა დამთავრდეს სია (მდე)
# და შეგვიძლია უარყოფითი ინდეხების გამოყენებით
# reing-is magvari sistema
slice[:-1:-1]



# 3) შექმენით სია რომელშიც ჩამოწერეთ სპორტის სახეობებს (მინიმუმ 10 სახეობა), აქედან slicing-ის გამოყენებით ამოჭერით და დაბეჭდეთ:
# 1-5
# 3-8
# -2-0
# 4-0
# შემობრუნებული სია
spo=["wrestling","box","boxind","cickboxind","karate","football","basketball","tennis","swimming","running"]
print(spo[0:5])
print(spo[2:8])
print(spo[-2:0:-1])
print(spo[4:0:-1])