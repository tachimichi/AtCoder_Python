# TODO
# * ABC233 B - A Reverse

l, r = map(int, input().split(' '))
str = input()

# 最初からl-1番目（の要素）
a = str[:l-1]
# l-1番目からr番目まで（それを逆から）
b = str[l-1:r][::-1]
# r番目から最後まで
c = str[r:]
print(a + b + c)

