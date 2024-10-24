def sieve(n: int) -> list[int]:
    primes = [i for i in range(n + 1)]
    primes[1] = 0

    i = 2
    while i <= n:
        if primes[i] != 0:
            j = i + i
            while j <= n:
                primes[j] = 0
                j = j + i
        i += 1

    return [i for i in primes if i != 0]
