#  TODO
# *   010 - Score Sum Queries

# 累積和

n = int(input())
c = []
p = []

for _ in range(n):
    a, b = map(int, input().split())
    c.append(a)
    p.append(b)

q = int(input())
l = []
r = []

for i in range(q):
    a, b = map(int, input().split())
    l.append(a)
    r.append(b)

# =================
sum1 = 0
sum2 = 0
# 累積和格納用変数
arr1 = [0]
arr2 = [0]
# 各組の累積和を取得
for i in range(n):
    if c[i] == 1:
        sum1 += p[i]
    else:
        sum2 += p[i]
    arr1.append(sum1)
    arr2.append(sum2)

# print(arr1)
# print(arr2)

for i in range(q):
    ans1 = arr1[r[i]] - arr1[l[i]-1]
    ans2 = arr2[r[i]] - arr2[l[i]-1]
    print(ans1, ans2)