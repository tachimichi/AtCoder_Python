
# TODO
# * ABC234 B - Longest Segment

n = int(input())

x = []
y = []

for _ in range(n):
    a, b = map(int, input().split())
    x.append(a)
    y.append(b)

import math

ans = 0

for i in range(n-1):
    for j in range(i+1, n):
        t = (x[i] - x[j]) ** 2 + (y[i] - y[j]) ** 2
        dist = math.sqrt(t)
        ans = max(ans, dist)
print(ans)
