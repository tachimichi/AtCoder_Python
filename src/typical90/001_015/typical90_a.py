#  TODO
# *   001 - Yokan Party

n, l = map(int, input().split())
k = int(input())
a = list(map(int, input().split()))

# 最後尾に本体の長さを追加
a.append(l)
t = [a[0]] # 切り口の差を計算
for i in range(len(a)-1):
    t.append(a[i+1] - a[i])
# print(t)

# 解法：最小値の最大化
# 二分探索

def is_ok(x):
    length = 0
    count = 0
    for i in t:
        length += i
        if length >= x:
            length = 0
            count += 1
    # 分割する領域の個数
    # print('count', count)
    return count 

def solve(ng, ok):
    while ng - ok > 1:
        # print(ng, ok)
        mid = (ng + ok) // 2
        # print('mid', mid)
        
        # まだ大きくできる場合
        if is_ok(mid) >= k +1:
            ok = mid
        else:
            ng = mid
    return ok

print(solve(l +1, -1))
