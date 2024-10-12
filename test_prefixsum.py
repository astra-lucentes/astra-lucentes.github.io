a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
s = [0]
for i in range(len(a)):
    s.append(s[i] + a[i])
    
print(s)

def sum_segment(i, j):
    return s[j] - s[i-1]
    
print(sum_segment(4, 7))