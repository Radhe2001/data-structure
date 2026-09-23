def primeDivisor(n):
    primeDivisors = []
    i = 2
    while i <= n:
        while n % i == 0:
            primeDivisors.append(i)
            n //= i
        i = i + 2 if i % 2 != 0 else i + 4 if i % 3 == 0 else i + 1
    return primeDivisors


print(primeDivisor(51))
