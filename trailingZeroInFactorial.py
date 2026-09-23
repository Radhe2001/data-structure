def trailingZeroes(n):
    i = 5
    res = 0
    while i <= n:
        res += n // i
        i *= 5
    return res


print(trailingZeroes(10))
