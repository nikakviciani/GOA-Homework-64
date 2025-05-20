# 13) შექმენით სტრინგი და შემოიტანეთ საძიებელი სიტყვა input-ით. თუ სიტყვა მოიძებნება find-ით, დაბეჭდეთ პოზიცია, სხვა შემთხვევაში კი დაბეჭდეთ word not found
text = input("Enter a string: ")
word = input("Enter a word to search: ")
pos = text.find(word)
if pos != -1:
    print(f"Word found at position {pos}")
else:
    print("word not found")
