# def sumN(n):
#     sum = 0
#     for i in range(1, n + 1):
#         sum += i
#     return sum
def sumN(n):
    return n * (n + 1) // 2


print(sumN(10))
