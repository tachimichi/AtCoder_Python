# coding=utf-8

import collections
import os
from collections import defaultdict
from cmath import log


print('**************************************')
#  =================================
# コマンドライン引数
#
'''
print(sys.argv)
'''
print('**************************************')
#  =================================
# import 文と as
#
'''
# インポートしたいファイルのみ指定
from section6_package import utils as u
# パッケージを指定
import section6_package.utils
# インポートしたいファイルのみ指定
from section6_package import utils
# インポートしたい関数のみ指定
from section6_package.utils import say_twice
'''
'''
# r = section6_package.utils.say_twice('hello')
# r = utils.say_twice('hello')
# r = say_twice('hello')
r = u.say_twice('hello')
print(r)

'''
print('**************************************')
#  =================================
# 絶対パスと相対パスのimport
#

'''
from section6_package.tools import utils
from section6_package.talk import human

print(human.sing())
print(human.cry())
'''
print('**************************************')
#  =================================
# [*]インポートと __init__.py と __all__の意味
#
'''
# from section6_package.talk import human
# from section6_package.talk import animal
# initで定義しておく必要アリ
from section6_package.talk import *

print(animal.sing())
print(animal.cry())
'''
print('**************************************')
#  =================================
# importErrorの使い道
#
print('**************************************')
#  =================================
# setup.pyでパッケージ化して配布する
#
print('**************************************')
#  =================================
# 組み込み関数
# https://docs.python.org/ja/3/library/functions.html

# print(globals())

'''
builtins.print()

ranking = {
    'A': 100,
    'B': 85,
    'C': 95,
}

# print(ranking.get('A'))
print(sorted(ranking, key=ranking.get, reverse=True))
'''
print('**************************************')
#  =================================
# 標準ライブラリ
# https://docs.python.org/ja/3/library/
'''
str = 'jfrintgnejnvejnv'
# パターン1
d = {}
for c in str:
    if c not in d:
        d[c] = 0
    d[c] += 1
print(d)
# パターン2
d = {}
for c in str:
    d.setdefault(c, 0)
    d[c] += 1
print(d)
# 標準ライブラリ

d = defaultdict(int)
for c in str:
    d[c] += 1
print(d)
'''

print('**************************************')
#  =================================
# サードパーティのライブラリ
# import する際の注意点

# 標準ライブラリ
# サードパーティ
# 自分達のパッケージ
# ローカルのファイル


'''
'''
print('**************************************')
#  =================================
#
#
'''
'''
print('**************************************')
#  =================================
#
#
'''
'''
print('**************************************')
#  =================================
#
#
'''
'''
print('**************************************')
#  =================================
#
#
'''
'''
print('**************************************')
#  =================================
#
#
'''
'''
