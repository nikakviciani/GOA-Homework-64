# https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/python

def capitalize(s, ind):
    s_list = list(s)  
    for i in ind:
        if 0 <= i < len(s_list):  
            s_list[i] = s_list[i].upper()
    return ''.join(s_list)  
