def solution(n):
    f = [0] * (n+2)
    g = [0] * (n+1)
    f[2] = 3
    g[1] = 1

    for i in range(3, n+1, 2):
        g[i] = f[i-1] + g[i-2]
        f[i+1] = f[i-1] + 2 * g[i]

    return f[n]