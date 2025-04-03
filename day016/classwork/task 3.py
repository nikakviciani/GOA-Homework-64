# while ciklebi -maryuzi მარყუზი
# for yoveli ragacistvis gaakete es
for i in "gagagiguga":
    print(i)
    
    
# 1 while
# 2 piroba t/false
# ვაილ ციკლი მუშაობს მარტო სანამ პირობა არის მართალი
num=10
while num>0:
    print(num)
    num-=1 # num=num-1
# ეს გაისვება ბევრჯერ ,იმ მომენტამდე სანამ პირობა არ იქნება ფოლსი
# ვაილ ციკლს მაშინ ვიყენებთ როცა არ ვიცით რამდენგერ უნდა გამეორდეს კოდი 
# და თვითონ ვაილი ნისნავს "სანამ"


# 3) შექმენით პროგრამა რომელიც მოხმარებელს შეეკითხება პაროლს სანამ სწორად არ ჩაწერს
user_name="luka"
pas=1234
password = int(input("შეიყვანეთ პაროლი: "))
while pas == password:
    print("სწორია")
    