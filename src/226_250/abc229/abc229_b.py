# TODO
# * ABC229 B - Hard Calculation

a, b = input().split()
# print(a)
# print(b)

# * 文字列のソート（逆）
a = list(a[::-1])
b = list(b[::-1])

# print(a)
# print(b)

isHard = False
for i in range(min(len(a), len(b))):
    if int(a[i]) + int(b[i]) >= 10:
        isHard = True

print('Hard' if isHard else 'Easy') 
