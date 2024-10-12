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


def solution(n):
    a = ((0, 1), 
         (1, 1))
    
    return fastpow(a, n)[1][1]