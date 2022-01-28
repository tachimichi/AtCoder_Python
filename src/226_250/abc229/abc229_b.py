# TODO
# * ABC230 B - Triple Metre

s = input()
t = 'oxxoxxoxxoxxoxxoxxoxxoxxoxx'
# 三項演算子
# print('Yes' if t in s else 'No')
print('Yes' if not t.find(s) == -1 else 'No')
