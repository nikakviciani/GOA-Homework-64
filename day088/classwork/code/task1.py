# // https://www.codewars.com/kata/590adadea658017d90000039/train/python

def fruit(reels, spins):
    rewards = {
        "Wild": 10,
        "Star": 9,
        "Bell": 8,
        "Shell": 7,
        "Seven": 6,
        "Cherry": 5,
        "Bar": 4,
        "King": 3,
        "Queen": 2,
        "Jack": 1
    }

    items = list(map(lambda x: x[0][x[1]], zip(reels, spins)))
    wild_count = items.count("Wild")
    unique = set(items)

    if len(unique) == 1:
        return rewards[items[0]] * 10

    if wild_count == 2:
        return 10

    if len(unique) == 2 and "Wild" not in items:
        for item in unique:
            if items.count(item) == 2:
                return rewards[item]

    if len(unique) == 2 and "Wild" in items:
        for item in unique:
            if item != "Wild":
                return rewards[item] * 2

    return 0
