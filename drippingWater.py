import math


def trap(height):
    a = b = sum = i = 0
    while i < len(height):
        if height[i] != 0:
            a = i
            b = i + 1
            break
        i += 1
    while b < len(height):
        print(f"{height[a]},{height[b]},{sum}")
        if height[b] > height[a]:
            tempMin = min(height[b], height[a])
            while a < b:
                diff = tempMin - height[a]
                sum += max(diff, 0)
                a += 1
            b += 1
        else:
            b += 1
    return sum


print(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))  # Output: 6
