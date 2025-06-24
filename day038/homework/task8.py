# 9) შექმენით სია და გადაიყვანეთ tuple-ად tuple() ფუნქციის გამოყენებით, შემდეგ კი გადაიყვანეთ უკან list()-ით. დაბეჭდეთ ყველა შედეგი და დაუმატეთ კომენტარები რას აკეთებს თითოეული
def list_to_tuple_and_back(lst):
    tup = tuple(lst)
    print(f"Converted to tuple: {tup}")
    new_lst = list(tup)
    print(f"Converted back to list: {new_lst}")