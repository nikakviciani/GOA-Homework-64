# 1) შექმენით პროდუქტების dictionary. შემდეგ გაფილტრეთ ეს dictionary და დატოვეთ ის პროდუქტები რომელთა ფასი ნაკლებია 100-ზე. საბოლოოდ დაბეჭდეთ ეს dict
products = {
    "tomato": 50,
    "potato": 150,
    "apple": 75,
    "orange": 200
}
filtered_products = dict(filter(lambda i: i[1] < 100, products.items()))
print(filtered_products)