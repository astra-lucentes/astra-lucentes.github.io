def solution(n):
    if n % 2: return 0
    
    a, b = 1, 3

    for i in range(n // 2 - 1):
        a, b = b, 4 * a - b

    return b