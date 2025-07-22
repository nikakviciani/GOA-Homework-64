# 3) ჩამოწერეთ IndexError, NameError, SyntaxError, ZeroDivisionError გამოწვევის მიზეზები. ასევე ახსენით თქვენი სიტყვებით რა გასნხვავებაა Bug-ს და Error-ს შორის. ახსენით რა არის error handling და მისი თითოეული keyword: try, except, else, finally. შემდეგ მოიყვანეთ ერთი error handling მაგალითი რომელშიც იქნება ყველა error handling-ის keyword
# indexerror გამოწვეულია მაშინ, როცა ვცდილობთ მივწვდეთ სიის ისეთ ინდექსს, რომელიც არ არსებობს.
# nameerror ხდება მაშინ, როცა ვცდილობთ გამოვიყენოთ ცვლადი ან ფუნქცია, რომელიც არ არის განსაზღვრული.
# syntaxerror წარმოიქმნება მაშინ, როცა კოდი არ შეესაბამება python-ის სინტაქსს.
# zerodivisionerror ხდება მაშინ, როცა ვცდილობთ გავყოთ რიცხვი ნულზე.
# bug არის პროგრამაში არსებული  ტექნიკური შეცდომ
# error არის კონკრეტული პრობლემა, რომელიც პროგრამის გაშვებისას 
# try: ბლოკში ვწერთ იმ კოდს, სადაც შეიძლება მოხდეს შეცდომა.
# except: ბლოკში ვწერთ, რა ხდება  შეცდომის შემთხვევაში.
# else: ბლოკი სრულდება მაშინ, როცა try ბლოკში შეცდომა არ მოხდება.
# finally: ბლოკი ყოველთვის სრულდება, მიუხედავად შეცდომისა.

# მაგალითი:
try:
    num_list = [1, 2, 3]
    print(num_list[5])  # indexerror
    result = 10 / 0     # zerodivisionerror
    print(num_list)             # nameerror
    eval('x === y')      # syntaxerror
except IndexError:
    print("indexerror: ინდექსი არ არსებობს სიაში.")
except ZeroDivisionError:
    print("zerodivisionerror: ნულზე გაყოფა შეუძლებელია.")
except NameError:
    print("nameerror: ცვლადი არ არის განსაზღვრული.")
except SyntaxError:
    print("syntaxerror: სინტაქსური შეცდომა კოდში.")
else:
    print("ყველაფერი წარმატებით შესრულდა.")
finally:
    print("ეს ბლოკი ყოველთვის შესრულდება.")