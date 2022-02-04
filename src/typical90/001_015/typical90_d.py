#  TODO
# *   004 - Cross Sum

h, w = map(int, input().split())
a = []
row = []
for _ in range(h):
    d = list(map(int, input().split()))
    a.append(d)
    sum_h = sum(d)
    row.append(sum_h)
print(a)

colum = []
for i in range(w):
    y = 0
    for j in range(h):
        y += a[j][i]
    colum.append(y)

print(row)
print(colum)

ans = []
