#  TODO
# *   008 - AtCounter

# 動的計画法（DP）

n = int(input())
s = input()

t = 'atcoder'
mod = 10 ** 9 + 7


dp = [[0] * (len(t) + 1) for _ in range(n+1)]

for i in range(n+1):
    dp[i][0] = 1


# s[i] が t[i]に等しいか場合分け
# dpのiとs[i]で示すiが1ズレている点に注意（jも同様)
# 答えをmodで割った余り

for i in range(n):
    for j in range(len(t)):
        # print(s[i], t[j])
        if s[i] == t[j]:
            dp[i+1][j+1] = dp[i][j] + dp[i][j+1]
            dp[i+1][j+1] %= mod
        else:
            dp[i+1][j+1] = dp[i][j+1]
            dp[i+1][j+1] %= mod

print(dp[n][len(t)])
