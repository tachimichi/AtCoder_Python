
# TODO
# * ABC237 B - Matrix Transposition

h, w = map(int, input().split())
lst = []
for i in range(0, h):
    a = list(map(int, input().split()))
    lst.append(a)
# print(lst)
# print(len(lst))

ans = []
for i in range(w):
    a = []
    for j in range(h):
        a.append(lst[j][i])
    ans.append(a)
    print(*ans[i])