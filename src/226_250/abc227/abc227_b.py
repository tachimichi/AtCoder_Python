# TODO
# * ABC228 B - Takahashi's Secret

n, x = map(int, input().split())
a = list(map(int, input().split()))

box = [0] * n
# print(box)
index = x -1

while box[index] == 0:
    box[index] = 1
    index = a[index] -1

ans = 0
for i in range(len(box)):
    if box[i] == 1:
        ans += 1
print(ans)
