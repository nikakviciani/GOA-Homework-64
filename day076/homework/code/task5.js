// https://www.codewars.com/kata/5297bf69649be865e6000922/train/python


def make_sentences(parts):
    res = ""
    for p in parts:
        if p in ".,!?;:":
            res = res.rstrip() + p + " "
        else:
            res += p + " "
    res = res.strip()
    while res.endswith("."):
        res = res[:-1]
    return res + "."
