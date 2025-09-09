# 3) შექმენით Library კლასი, რომელსაც ექნება protected ატრიბუტი _books და private ატრიბუტი __secretCode. დაამატეთ სტატიკური მეთოდი, რომელიც დააბრუნებს წიგნის დაგვიანების ჯარიმის გამოთვლილ მნიშვნელობას. კომენტარებით მიუთითეთ კლასისა და სტატიკური მეთოდის განსხვავება

class Library:
    def __init__(self, books, secret_code):
        self._books = books
        self.__secretCode = secret_code

    @staticmethod
    def calculate_late_fee(days_late, fee_per_day):
        return days_late * fee_per_day
