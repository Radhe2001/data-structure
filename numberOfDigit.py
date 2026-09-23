import math
from typing import List


def numberOfDigits(n):
    return math.floor(math.log10(n) + 1)


n = 1587
print(numberOfDigits(n))


def lcmAndGcd(a: int, b: int):
    # code here
    rem = 1
    temp1 = max(a, b)
    temp2 = min(a, b)
    while rem != 0:
        rem = temp1 % temp2
        temp1 = temp2
        temp2 = rem
    hcf = max(temp1, temp2)
    return [int((a * b) // hcf), hcf]


print(lcmAndGcd(5, 10))
