# ord - ღებულობს პარამეტრად სიმბოლოს და აბრუნებს მის ASCII კოდს
# chr (character) - ღებულობს პარამეტრად ASCII კოდს და აბრუნებს მის შესაბამის სიმბოლოს

# შექმენით ფუქნცია სახელად case_swap რომელიც მიიღებს სიტყვას, ფუნქციამ ყველა დიდი ანბანის ასო უნდა გარდაქმნას პატარად და პირიქით, ხოლო სხვა სახის სიმბოლები იგივე უნდა დარჩეს (.upper(), .lower() მეთოდების გამოყენების გარეშე)
def case_swap(word):
    swapped = ''
    for i in word:
        ascii_code = ord(i)
        if 65 <= ascii_code <= 90:  # დიდი ასოები A-Z
            swapped += chr(ascii_code + 32)  # გარდაქმნა პატარად
        elif 97 <= ascii_code <= 122:  # პატარა ასოები a-z
            swapped += chr(ascii_code - 32)  # გარდაქმნა დიდად
        else:
            swapped += i  # სხვა სიმბოლები უცვლელად რჩება
        return swapped
        
print(case_swap('hellowworld'))
