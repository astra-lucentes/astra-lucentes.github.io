def solution(n):
    if n % 2: return 0
    
    f, g = 3, 1

    for i in range(n // 2 - 1):
        g = f + g
        f = f + 2 * g

    return f