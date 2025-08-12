# https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python


def alphabet_position(text):
    return ' '.join(str(ord(c.lower()) - 96) for c in text if c.isalpha())
