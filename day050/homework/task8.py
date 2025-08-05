# 9) სიტყვების სიაზე "words = ['ant', 'elephant', 'dog', 'giraffe']" გამოიყენეთ 'filter', რათა დატოვოთ მხოლოდ ის სიტყვები, რომლების სიგრძეა მეტი ან ტოლია 5-ის
words = ['ant', 'elephant', 'dog', 'giraffe']
filtered_words = list(filter(lambda word: len(word) >= 5, words))