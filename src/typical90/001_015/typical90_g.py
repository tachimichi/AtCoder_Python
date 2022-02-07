#  TODO
# *   007 - CP Classes

# 二分探索のライブラリ
from bisect import bisect_left

n = int(input())
a = list(map(int, input().split()))
a.sort()
q = int(input())

for i in range(q):
    x = int(input())
    # 二分探索
    # aの要素の中から、xの値と一番近い要素を探してくれる
    l = bisect_left(a, x)
    # print(l)
    
    if l == len(a):
        # もし最後の要素がヒットしている場合
        print(abs(a[l-1] - x))
    else:
        # 左右の差を計算して、最小値を取得する
        print(min(abs(a[l-1] - x), abs(a[l] - x)))

