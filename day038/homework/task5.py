# 6) შექმენით tuple სახელად animals, რომელშიც იქნება რამდენიმე ცხოველის სახელი. გამოიყენეთ .count და .index მეთოდები ამ tuple-ზე
def print_unique_elements(lst):
    unique_elements = set(lst) 
    for element in unique_elements:
        count = lst.count(element)  
        print(f"{element} - {count}")