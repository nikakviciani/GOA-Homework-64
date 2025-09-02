# 2) შექმენით კლასი Book, რომელსაც ექნება title, author, pages. დაამატეთ მეთოდი info(), რომელიც დაბეჭდავს "სათაური: X, ავტორი: Y, გვერდები: Z"
class book:
    def __init__(self,title,author,pages):
        self.title=title
        self.author=author
        self.pages=pages
deeeee=book('devil of antarctic','sunny','3000')
print(deeeee)