// https://www.codewars.com/kata/635fc0497dadea0030cb7936/train/python

def count_different_matrices(matrices):
    seen = set()
    for m in matrices:
        rots = [
            tuple(m),
            (m[2], m[0], m[3], m[1]),
            (m[3], m[2], m[1], m[0]),
            (m[1], m[3], m[0], m[2])
        ]
        seen.add(min(rots))
    return len(seen)
