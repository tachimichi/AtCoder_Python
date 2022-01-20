from ctypes.wintypes import PINT


print('**************************************')
#  =================================
# リスト型
'''
lst = [1, 3, 5, 7, 9]
print(lst[3])
print(lst[-2])
print(lst[:-2]) #最後の2番目まで
print(lst[-2:]) #最後の2番目から最後まで

str = list('abcdefghijkl')
print(str)
print(str[::2]) #1つとばし
print(str[::-1]) #後ろから0つとばし
print(str[::-2]) #後ろから1つとばし

n = [1,2,3]
a = ['a', 'b','c']
x = [n, a]
print(x)
print(x[0])
print(x[1][1])
print('********')
'''
print('**************************************')
#  =================================
# リストの操作

'''
str = list('abcdefghijkl')
print(str[2:5])
str[2:5] = list('xyz')
print(str[2:5])
print(str)
str[2:5] = []
print(str)
str[:] = []
print(str)
'''
'''
n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(n)
n.append(100)
print(n)
n.insert(0, 200)
print(n)
n.pop()
print(n)
n.pop(0)
print(n)
del n[0]
print(n)
'''
'''
n = [1, 2, 2, 2, 2, 9, 10]
n.remove(2)
print(n)
n.remove(2)
print(n)
n.remove(2)
print(n)
'''
'''
a = [1, 2, 3, 4, 5]
b = [6, 7, 8, 9, 10]
print(a)
print(b)

x = a + b
print(a)
print(b)
print(x)

a += b
print(a)
print(b)
print(x)
'''
'''
x = [1, 2, 3, 4, 5]
y = [6, 7, 8, 9, 10]
x.extend(y)
print(x)
'''

print('********')
print('**************************************')
#  =================================
# リストのメソッド
'''
r = [1, 2, 3, 4, 5, 1, 2, 3]
print(r.index(3)) # 前からインデックス
print(r.index(3, 3)) # 検索番号を指定
print(r.count(3))

# rの中に、5があるかどうか
if 5 in r:
    print('ある')
'''

'''
# ソート
r.sort()
print(r)
r.sort(reverse=True)
print(r)
r.reverse()
print(r)
'''

'''
# split
str = 'My Name is Mike'
a = str.split(' ')
print(a)
x = ' '.join(a)
print(x, type(x))
'''

print('********')
print('**************************************')
#  =================================
# リストのコピー
'''
i = [1, 2, 3, 4, 5]
j = i
print('i=', i)
print('j=', j)

# TODO 注意：参照渡し
# j を変更すると、iも変更される
j[0] = 100
print('i=', i)
print('j=', j)
'''
'''
# TODO 注意：値渡し
x = [1, 2, 3, 4, 5]
y = x.copy()
print('x=', x)
print('y=', y)
y[0] = 100
print('x=', x)
print('y=', y)
'''

print('********')
print('**************************************')
#  =================================
# リストの使い道

'''
print('********')
print('**************************************')
#  =================================
# タプル型
t = (1, 2, 3, 4, 1, 2)
print(t)
# タプルはconstみたいな感じで変更できない
# t[0] = 2

t = ([5, 6, 7], [6, 7, 8], [7, 8, 9])
print(t)
t[2][0] = 1
print(t)

tu = (1,) + (3, 4, 5) + (6,7,)
print(tu)
'''
print('********')
print('**************************************')
#  =================================
# タプルのアンパッキング（展開）
'''
new_tuple = (10, 20)
print(new_tuple)
x, y = new_tuple
print(x, type(x))
print(y, type(y))
'''
# 入れ替え操作（愚直）
'''
i, j = 10, 20
tmp = i
i = j
j = tmp
print(i, j)
'''
# 入れ替え操作（タプル）
'''
a = 100
b = 200
print(a, b)
# アンパッキング
a, b = b, a
print(a, b)
'''
print('********')
print('**************************************')
#  =================================
# 辞書型
'''
d = {'x': 10, 'y': 20}
print(d, type(d))
print(d['x'])
print(d['y'])

d['x'] = 100
print(d)
d['x'] = 'str'
print(d)
d['z'] = 'str'
print(d)
d[1] = 1000
print(d)

dic = dict(a=10, b=20)
print(dic)
'''
print('********')
print('**************************************')
#  =================================
# 辞書型のメソッド
'''
d = {'x': 10, 'y': 20}
print(d.keys())
print(d.values())

d2 = {'x': 1000, 'j': 500}
print(d2.keys())
print(d2.values())

# 辞書の結合（upsert）
d.update(d2)
print(d)

# 取得
print(d.get('x'))
print(d['x'])
# 削除
print(d.pop('x'))
print(d)
'''
print('********')
print('**************************************')
#  =================================
# 辞書型のコピー
'''
# TODO 参照渡し
x = dict(a=1)
print(x)
y = x
y['a'] = 1000
print(x,y)

# TODO 値渡し
x = dict(a=1)
print(x)
y = x.copy()
y['a'] = 1000
print(x,y)
'''

print('********')
print('**************************************')
#  =================================
# 集合型
'''
a = {1, 2, 3, 3, 4, 4, 5}
print(a, type(a))
b = {1, 2, 4, 4, 6, 4, 5}
print(b, type(b))

print(a - b)
print(b - a)
print(a & b)
print(a | b)
print(a ^ b) # 排他（a または b の重複していないもの）
'''
print('********')
print('**************************************')
#  =================================
# 集合型のメソッド
'''
a = {1, 2, 3, 3, 4, 4, 5}
a.add(6)
print(a)
a.remove(6)
print(a)
a.clear()
print(a)
'''

