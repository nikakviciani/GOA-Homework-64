# 4) შექმენით რიცხვების გამოცნობის თამაში შემდეგი ფუნქციონალით:

# •    პროგრამა Math მოდულის გამოყენებით (ან random მოდული) გენერირებს შემთხვევით მთელ რიცხვს 1-დან 100-მდე
# •    მომხმარებელს ეძლევა მაქსიმუმ 7 მცდელობა რიცხვის გამოსაცნობად
# •    ყოველ მცდელობაზე:
# იყენებს try-except ბლოკს არასწორი შეტანის დასამუშავებლად
# აძლევს მინიშნებას: "ძალიან დიდია" ან "ძალიან პატარაა"
# ითვლის დარჩენილ მცდელობებს
# •    თამაშის დასრულებისას:
# თუ გამოიცნო - გამოაქვს გილოცავთ და მცდელობების რაოდენობა
# თუ არ გამოიცნო - გამოაქვს სწორი რიცხვი
# სთავაზობს ხელახლა თამაშის დაწყებას (y/n)
# •    ინახავს სტატისტიკას tuple-ში: (თამაშების რაოდენობა, მოგებების რაოდენობა, საშუალო მცდელობები)
import random 
def number_guessing_game():
    games_played = 0
    games_won = 0
    total_attempts = 0

    while True:
        secret_number = random.randint(1, 100)
        attempts = 7
        games_played += 1
        print("ახალი თამაში დაიწყო! გამოიცანით რიცხვი 1-დან 100-მდე. გაქვთ 7 მცდელობა.")

        while attempts > 0:
            try:
                guess = int(input("შეიყვანეთ თქვენი ვარაუდი: "))
            except ValueError:
                print("გთხოვთ შეიყვანოთ სწორი მთელი რიცხვი.")
                continue

            if guess < secret_number:
                attempts -= 1
                print(f"ძალიან პატარაა! დარჩენილი მცდელობები: {attempts}")
            elif guess > secret_number:
                attempts -= 1
                print(f"ძალიან დიდია! დარჩენილი მცდელობები: {attempts}")
            else:
                print(f"გილოცავთ! გამოიცანით რიცხვი {secret_number} {7 - attempts} მცდელობაში.")
                games_won += 1
                total_attempts += (7 - attempts)
                break
        else:
            print(f"სამწუხაროდ, ვერ გამოიცანით. სწორი რიცხვი იყო {secret_number}.")

        play_again = input("გსურთ კიდევ ერთხელ ითამაშოთ? (y/n): ").lower()
        if play_again != 'y':
            break

    average_attempts = total_attempts / games_won if games_won > 0 else 0
    stats = (games_played, games_won, average_attempts)
    print(f"სტატისტიკა: თამაშების რაოდენობა: {stats[0]}, მოგებების რაოდენობა: {stats[1]}, საშუალო მცდელობები: {stats[2]:.2f}")