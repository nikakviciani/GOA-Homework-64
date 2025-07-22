# errohanding ნიშნავს შეცდომების დამუშავებას
# ეს არის ძალიან მნიშვნელოვანი ნაწილი პროგრამირების
# რადგანაც პროგრამა ყოველთვის არ მუშაობს ისე, როგორც ჩვენ გვინდა
# try-except-ის გამოყენება საშუალებას გვაძლევს
# დავიჭიროთ შეცდომები და მოვიქცეთ მათთან შესაბამისი წესით

try:
    # აქ უნდა იყოს კოდი რომელიც შეიძლება გამოიწვიოს შეცდომა
    x = 1 / 0  # Example code that raises an error
except:
    print("შეცდომა მოხდა")  # Example error handling
    
finally:
    print("ეს კოდი ყოველთვის შესრულდება, მიუხედავად იმისა მოხდა თუ არა შეცდომა")
# Bug - კოდი ისე არ მუშაობს როგორც საჭიროა

# Error - როდესაც კოდი წყვეტს მუშაოაბას

# NameError - ცვლადი ან ფუნქცია არ არსებობს იმ სახელით რომელსაც ვიყენებთ
# IndexError - ისეთ ინდექსის გამოყენება რომელიც არ არსებობს iterable
# ZeroDivisionError - ნულზე გაყოფა
# SyntaxError - სინტაქსური შეცდომა, წერითი შეცდომა

# name = "Luka"
# print(surname)


# names = ["Luka", "Giorgi", "Nika"]
# print(names[4])

# print(10 / 0

# Error Handling - დამატებითი ხელსაწყოები პითონში რომელიც გვეხმარება error-ის თავიდან აცილებაში

# try ბლოკში იწერება ის კოდი რომელზეც ეჭვი გვაქვს რომ შეიძლება გამოიწვიოს error
# except ბლოკში იწერება ის კოდი რომელიც უნდა გაეშვას იმ შემთხვევაში თუ try ბლოკში ააღმოჩნდა error
# else ბლოკი გაეშევა იმ შემთხვევაში თუ არ გაეშევა except ბლოკი, ესეიგი try ბლოკში არ არის error
# finally - საბოლოო ბლოკი, რომელიც ყველა ვარიანტში ეშვება

# try:
#     s = "Luka"
#     print(s)

#     print(s[31])
# except:
#     try:
#         print(10 / 0)
#     except:
#         print("Error within error")

# else:
#     print("Not error")

# finally:
#     print("Runs in any case, after try, except, else blocks")