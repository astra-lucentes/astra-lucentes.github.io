def f(n):
    if n < 2: return 0
    if n == 2: return 3
    return f(n-2) + 2 * g(n-1)
    
def g(n):
    if n <= 1: return n
    return f(n-1) + g(n-2)
    
def solution(n):
    return f(n)