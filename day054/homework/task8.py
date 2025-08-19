# 9) შექმენით ფუნქცია, რომელიც იღებს 'args'-ით რიცხვებს და აბრუნებს მათ მაქსიმუმს და მინიმუმს

def find_min_max(*args):
    if not args:
        return None, None
    return min(args), max(args)
