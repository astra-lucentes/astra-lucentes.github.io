
a = [1, 2, 3, 4, 5] * 100

s = [0]

for x in a:
    s.append(s[-1] + x)

def sum_segment(l, r):
    return s[r+1] - s[l]

sum_segment(1, 2)
sum_segment(1, 1)
sum_segment(1, 1)
sum_segment(1, 1)
sum_segment(1, 1)
sum_segment(1, 1)
sum_segment(1, 1)