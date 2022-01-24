
# TODO
# * ABC236 A - chukodai

# 文字列はイミュータブル(後から値を変更できない)
# 一度リスト化を行う
# temp = s[a-1]
# s[a-1] = s[b-1]
# s[b-1] = temp

s = list(input())
a, b = map(int, input().split()) 

temp = s[a-1]
s[a-1] = s[b-1]
s[b-1] = temp

# 文字列結合
print(''.join(s))

