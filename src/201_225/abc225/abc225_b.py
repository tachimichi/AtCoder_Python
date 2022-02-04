# TODO
# * ABC225 B - Star or Not

n = int(input())
ans = [0] * n

for _ in range(n-1):
    a, b = map(int, input().split())
    ans[a-1] += 1
    ans[b-1] += 1

isOK = False
for count in ans:
    if count == n-1:
        isOK = True
        break
print('Yes' if isOK else 'No')