# 4) შექმენით dictionary სახელად student, დაამატეთ მას მონაცემები: name, hobby, height, weight. შემდეგ გამოიყენეთ .get() მეთოდი name-ის მისაღებად და .pop() მეთოდი height-ის წასაშლელად. დაუმატეთ კომენტარები, რას აკეთებს თითოეული მეთოდი
# ვქმნით dictionary-ს სახელად student
student = {
    "name": "John",
    "hobby": "Reading",
    "height": 180,
    "weight": 75
}

# .get() მეთოდი გვაძლევს შესაძლებლობას მივიღოთ მნიშვნელობა გასაღების მიხედვით
name = student.get("name")

# .pop() მეთოდი წაშლის გასაღების მიხედვით და აბრუნებს მის მნიშვნელობას
height = student.pop("height")
