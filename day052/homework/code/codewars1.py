# https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/python

def rps(p1, p2):
    if p2 == "scissors" and p1 == "paper":
        return "Player 2 won!"
    elif p1 == "scissors" and p2 == "paper":
        return "Player 1 won!"
    elif p1 == "rock" and p2 == "paper":
        return "Player 2 won!"
    elif p1 == "rock" and p2 == 'scissors':
        return "Player 1 won!"
    elif p2 == "rock" and p1 == "paper":
        return "Player 1 won!"
    elif p2 == "rock" and p1 == "scissors":
        return "Player 2 won!" 
    elif p1 == p2:
        return 'Draw!'