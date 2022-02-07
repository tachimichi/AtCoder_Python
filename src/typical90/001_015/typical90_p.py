#  TODO
# *   016 - Minimum Coins

# 全探索

n = int(input())
a, b, c = map(int, input().split())

l = 9999
ans = 10000

for x in range(l+1):
    if x >= ans:
        break
    for y in range(l-x+1):
        # xとyが決まれば、zが決まる
        z = n - (a*x + b*y)
        # zの制約処理
        if z >= 0 and z % c == 0:
            z = z // c
            ans = min(ans, x+y+z)
            # print(x, y, z)
print(ans)
