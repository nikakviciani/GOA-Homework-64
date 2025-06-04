# 13) დაწერე ფუნქცია, რომელიც იღებს რიცხვს 'n' და აბრუნებს სიას 1-დან 'n'-ის ჩათვლით ყველა ლუწი რიცხვით. გამოიყენე for ციკლი და if-else
def even_numbers(n):
    even_list = []
    for i in range(1, n + 1):
        if i % 2 == 0:
            even_list.append(i)
    return even_list