
# ფაილის გახსნის ფუნქცია

# or
tt2=open('txt.txt','w')
# or
tt3=open('txt.txt','a')
# r ნიშნავს წაკითხვას
# w ნიშნავს წერის ფუნქციას
# a ნიშნავს დამატების ფუნქციას
# x ნიშნავს შექმნას, თუ ფაილი არსებობს, შეცდომას გვაძლევს
# თუ გვინდა ფაილის სახელის ნახვა



# თუ გვინდა დახურვა
# tt.close()

# ან მეორე ვარიანტი
with open('txt.txt','r') as t4:
    content=t4.read()
    print(content)
    
    
    
    
    


# 1) შექმენით data.txt ფაილი პითონით, ამისთვის გამოიყენეთ ფაილზე "x"-ის უფლებით გახსნა (open ფუნქციას)
data_file = open('data.txt', 'x')
data_file.close()

data_file = open('data.txt', 'w')
data_file.write("1\n2\n3\n4\n5\n")
data_file.close()

with open('data.txt', 'r') as file:
    content = file.read()
    print(content)


# r ნიშნავს წაკითხვას
# w ნიშნავს წერის ფუნქციას
# a ნიშნავს დამატების ფუნქციას
# x ნიშნავს შექმნას, თუ ფაილი არსებობს, შეცდომას გვაძლევს