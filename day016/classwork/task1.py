# range sedgeba start stop step ,თუ სტეპი უარყოფითია მაშინ უკან წავა
# range diapazoni
# iterable dalagebuli mimdrvroba
# for number in range(6):
#     print(number)
# count = 0
# for symbol in "hello":
#     print(symbol)
# #     count += number
# sum=0
# for number in range(4):
#     sum += number
# print(sum)
# # nebismieri number-is mniSvneloba erTmaneTs daemateba

# 1) შექმენით sum ცვლადი რომელშიც შეინახავთ 1-იდან 20-მდე რიცხვების ჯამს, ამისთვის გამოიყენეთ for ციკლი და range ინსტრუქცია, საბოლოოდ ერთხელ დაბეჭედეთ ჯამი
for number in range(1, 20):
    sum += number
print(sum)

# str, float, int, print, input

# range(start, stop, step)
# step ჩვეულებრივ არის 1 თუ არ შევცვალეთ ანუ არ გადავეცით range ინსტრუქციას მესამე 
# პარამატერი

# range(10) # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
# range(5, 15) # 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
# range(5, 15, 2) # 5, 7, 9, 11, 13

# DRY - dont repeat yourself

# for ციკლის შექმნის ნაბიჯები:
# 1. for keyword (რეზერვირებული სიტყვა)
# 2. საიტერაციო ცვლადს
# 3. in
# 4. iterable
# 5. ორწერტილი - :
# 6. კოდის ბლოკი


sum = 0
for number in range(5): 
    sum += number
print(sum)
    
# Tu gvinda mteli gzis danaxva masin print unda eweros for ciklsi

"""პროგრამას გამოატანინეთ რიცხვები 20-იდან 0-მდე, for ციკლით"""

# for num in range(20, 0, -1):
#     print(num)

# iterables: range, string