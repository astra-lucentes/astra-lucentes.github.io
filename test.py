def solution1(n):
    if n % 2:
        return 0

    f, g = 3, 1

    for i in range(n // 2 - 1):
        g = f + g
        f = f + 2 * g

    return f


def solution2(n):
    if n % 2:
        return 0

    a, b = 1, 3

    for _ in range(n // 2 - 1):
        a, b = b, 4 * b - a

    return b


def matmul(a, b):
    return (
        (a[0][0]*b[0][0] + a[0][1]*b[1][0],
         a[0][0]*b[0][1] + a[0][1]*b[1][1]),
        (a[1][0]*b[0][0] + a[1][1]*b[1][0],
         a[1][0]*b[0][1] + a[1][1]*b[1][1])
    )


def fastpow(a, n):
    result = ((1, 0),
              (0, 1))

    while n:
        if n & 1:
            result = matmul(result, a)
        a = matmul(a, a)
        n >>= 1

    return result


def solution3(n):
    if n % 2: return 0

    a = ((0, 1),
         (-1, 4))

    r = fastpow(a, n // 2)
    return r[0][0] + 3 * r[0][1]
