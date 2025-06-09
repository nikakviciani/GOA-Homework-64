# masw dawr 
def n_to_array(n):
    result = []
    for number in range(1, n + 1):
        if number % 2 == 0:
            result.append(number)

    return result



```
def vowel_count(sentence):
    count = 0
    vowels = "aeiouAEIOU"

    for char in sentence:
        if char in vowels:
            count += 1

    return count
```