
# TODO
# * ABC236 B - Who is missing?

n = int(input())
a = list(map(int, input().split()))

# 要素の中身と数を指定して、配列を生成
lst = [0] * n

for i in a:
    lst[i-1] += 1

# enumerate関数を使用することで、インデックスを使用可能に
for i, l in enumerate(lst):
    if l == 3:
        print(i+1)
        break