# .split() - არის string მეთდი რომელიც სიას გაყოფოს კონკრეტულ სიმბოლებზე (რასაც გადავცემთ არგუმენტად), თუ არგუმენტი არ გადავეცით ის default-ად string-ს space-ებზე და წაშლის ყველა ზედმეტ space-ს

# .join() - string-ის მეთოდი, რომელსაც არგუმენტად გადაეცემა სია, ეს მეთოდი სიაში მყოფ ელემენტს შეართებს სტრინგად და თითოეულს შორის ჩასვამს იმ სტრინგს რომელზეც გამოვიყენეთ ეს მეთოდი

# .replace - string-ის მეთოდი, რომელიც გამოძახებულ string-ის ყველა პირველ პარამეტრის მნიშვნელობას შეცვლის მეორეთი

# .strip() - string-ის მეთოდი, რომელიც ბოლოს დარჩენილ space-ებს წაშლის

# string = "1 2 3 4 5"
# numbers = string.split()

# numbers = numbers[::-1]

# "".join()

# s = "log"
# code = "logloglog"

# print(code.replace("log", "") == "")


# info = "1         "
# print(len(info.strip()))

# 1. split() - სტრინგის გაყოფა კონკრეტული განყოფილებით (separator)
text = "apple,banana,orange"

# მაგალითი 1: გაყოფა სფსგატანით ","
fruits = text.split(",")
print(fruits) 

# მაგალითი 2: გაყოფა ნაგულისხმევი განყოფილებით (სფეისი)
sentence = "Hello world this is Python"
words = sentence.split()
print(words)  

# 2. join() - ნაჩვენები სიის ან თუნდაც სხვა iterable-ის ელემენტების შეერთება სტრინგში, მითითებული სეპარატორით
words_list = ['Python', 'is', 'fun']

# მაგალითი 1: გაერთიანება სიტყვების სფეისით
sentence = " ".join(words_list)
print(sentence)  

# მაგალითი 2: გაერთიანება სიტყვების, სადაც თითოეული გაყოფილია "-"
hyphenated = "-".join(words_list)
print(hyphenated)  

# 3. replace() - სტრინგში ერთი ნაწილი ჩანაცვლება სხვით
text = "I like apples"

# მაგალითი 1: "apples" ჩანაცვლება "oranges"-ით
new_text = text.replace("apples", "oranges")
print(new_text)  

# მაგალითი 2: ყველა "i" სიმბოლოს ჩანაცვლება "!"
exclamation = text.replace("i", "!")
print(exclamation)  

# 4. strip() - სტრინგის წინ და უკან არსებული უსარგებლო სიმბოლოების მოცილება (ნაგულისხმევად: სფეისები)
text = "   Hello World!   "

# მაგალითი 1: ყველა უსარგებლო სფეისის მოცილება წინ და უკან
clean_text = text.strip()
print(clean_text) 

# მაგალითი 2: კონკრეტული სიმბოლოების მოცილება (მაგ. '*')
stars = "***Hello***"
clean_stars = stars.strip("*")
print(clean_stars)  