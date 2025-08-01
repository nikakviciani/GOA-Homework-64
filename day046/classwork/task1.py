# update თი შეიძლება დიქშენარის განახლება
# update() მეთოდი გამოიყენება დიქშენარის განახლებისთვის.
# თუ დიქშენარში არსებული გასაღები არ არსებობს, ის დამატდება.
# თუ გასაღები არსებობს, მისი მნიშვნელობა განახლდება.
# .clear() მეთოდი კი დიქშენარის გასუფთავებისთვის გამოიყენება.
# .keys() მეთოდი კი დიქშენარის გასაღებების ჩამოსათვლელად.
# .values() მეთოდი კი დიქშენარის მნიშვნელობების ჩამოსათვლელად.
# .items() მეთოდი კი დიქშენარის გასაღებების და მნიშვნელობების წყვილების ჩამოსათვლელად.
# .pop() მეთოდი კი დიქშენარიდან გასაღების წაშლისთვის გამოიყენება.
# .popitem() მეთოდი კი დიქშენარიდან ბოლო დამატებული წყვილის წაშლისთვის გამოიყენება.
# .get() მეთოდი კი დიქშენარიდან გასაღების მნიშვნელობის მიღებისთვის გამოიყენება.
# .setdefault() მეთოდი კი დიქშენარში გასაღების დამატებისთვის, თუ ის არ არსებობს.
# tu gvinda dicsinaris gamoyeneba for ciklsi
# kk = {
#     'a': 1,
#     'b': 2,
#     'c': 3
# }
# for i in kk.items():
#     print(i)


# 1) შექმენით student dictionary, რომელშიც გექნებათ მინიმუმ 4 ელემენტი. შემდეგ გამოიყენეთ მეთოდები ამ dictionary-ზე
dics = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5
}
dics.update({'f': 6}) 
dics.pop('a') 
dics.popitem('b')
dics['a'] = 10  