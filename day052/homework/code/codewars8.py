# https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/python

def remove_boring(museum_items, boring_item):
    if boring_item in museum_items:
        museum_items.remove(boring_item)
    return museum_items
