# 3) შექმენით პროგრამა სტუდენტების ქულების მართვისთვის:

# •    შექმენით dictionary სტრუქტურა სადაც:
# Key არის სტუდენტის სახელი
# Value არის მისი ქულების სია (მინიმუმ 5 საგნის ქულა)
# •    შექმენით ფუნქციები:
# calculate_average(scores) - ითვლის საშუალო ქულას
# get_grade(average) - აბრუნებს შეფასებას (A: 91-100, B: 81-90, C: 71-80, D: 61-70, E: 51-60, FX: 41-50, F: 0-40)
# find_top_student(students_dict) - პოულობს საუკეთესო სტუდენტს
# •    მინიმუმ 5 სტუდენტისთვის:
# გამოთვალეთ საშუალო ქულა
# განსაზღვრეთ შეფასება
# დაალაგეთ სტუდენტები საშუალო ქულის მიხედვით (კლებადობით)
# •    შედეგები გამოიტანეთ ფორმატირებული სახით
def calculate_average(scores):
    average = sum(scores) / len(scores)
    return average
def get_grade(average):
    if average >= 0 and average <= 40:
        return 'F'
    if average >= 41 and average <= 50:
        return 'FX'
    if average >= 51 and average <= 60:
        return 'E'
    if average >= 61 and average <= 70:
        return 'D'
    if average >= 71 and average <= 80:
        return 'C'
    if average >= 81 and average <= 90:
        return 'B'
    if average >= 91:   
        return 'A'