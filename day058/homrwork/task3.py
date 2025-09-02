# 4) შექმენით კლასი Student, რომელსაც ექნება name და grade. დაამატეთ მეთოდი check_pass(), რომელიც დააბრუნებს True თუ grade ≥ 50, სხვა შემთხვევაში False
class student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def check_pass(self):
        return self.grade >= 50
