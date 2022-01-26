# TODO
# * ABC231 B - Election

n = int(input())

# 辞書の使い方
dict = {}
for i in range(1, n+1):
    person = input()
    if person in dict:
        dict[person] = dict[person] + 1
    else:
        dict[person] = 1

# print(dict)

# 辞書のループ
count = 0
ans = 'a'
for key, value in dict.items():
    if value > count:
        count = value
        ans = key

print(ans)
