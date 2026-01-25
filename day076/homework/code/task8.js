// https://www.codewars.com/kata/597a660f59873cc353000061/train/python

def get_colors(arr):
    channels = ['Red','Green','Blue']
    res = []
    for sub in arr:
        counts = {'Red':0,'Green':0,'Blue':0}
        for hexc in sub:
            r,g,b = int(hexc[0:2],16), int(hexc[2:4],16), int(hexc[4:6],16)
            max_val = max(r,g,b)
            if max_val == r:
                counts['Red'] += 1
            elif max_val == g:
                counts['Green'] += 1
            else:
                counts['Blue'] += 1
        major, minor = sorted(counts, key=lambda x: -counts[x])[:2]
        res.append(f"{major}+{minor}")
    return ",".join(res)
