#  TODO
# *   014 - We Used to Sing a Song Together

# 貪欲法

n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

a.sort()
b.sort()

# print(a)
# print(b)

ans = 0
for i in range(n):
    ans += abs(a[i] - b[i])
print(ans)
