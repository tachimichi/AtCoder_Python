
# TODO
# * ABC235 B - Climbing Takahashi

n = int(input())
h = list(map(int, input().split()))
# print(n)
# print(h)

ans = h[0]
# 拡張for文ではなく、range関数で対応
for i in range(0, n-1):
    if h[i] < h[i+1]:
        ans = h[i+1]
    else:
        break
print(ans)
