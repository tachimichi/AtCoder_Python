from cgitb import reset


print('**************************************')
#  =================================
# デバッガーの使用

# step into
# step over
# step out 次のブレイク地点まで到達
"""
x = 10

if x < 0:
    print('negative')
elif x == 0:
    print('zero')
elif x == 10:
    print('10')
else:
    print('positive')

a = 5
b = 10
if a > 0:
    print('a is positive')
    if b > 0:
        print('b is positive')
"""
print('**************************************')
#  =================================
# 比較演算子
"""
a = 10
b = 5
a > 0 and b > 0
a > 0 or b > 0
"""
print('********')
'''
'''
print('**************************************')
#  =================================
# IN と NOT の使い所

'''
y = [1, 2, 3]
x = 1
if x in y:
    print('in')
if 100 not in y:
    print('not in')

a = 1
b = 2
if not a == b:
    print('aとbは異なる')


print('********')
'''
print('**************************************')
#  =================================
# 値が入っていない判定
# 真：1
# 真：文字列,[1, 2, 3, 4]
# 偽：0は
# 偽：空文字列(''), [], (), {}

'''
isOK = True 
if isOK:
    print('OK')
else:
    print('NO')
'''
print('**************************************')
#  =================================
# None を判定する場合
# None は、ヌルポ

# is は javaScriptで言う(===)
'''
isEmpty = None

if isEmpty is None:
    print('if isEmpty is None')
else:
    print('if isEmpty is not None')
'''
print('**************************************')
#  =================================
# while / continue / break
# continue は、i番目のループ処理をスキップする
'''
'''
print('**************************************')
#  =================================
# while else文
# while elseは、最後のfinish的な
# ⇒breakで抜けたときは実行しない
'''
count = 0
while count < 5:
    print(count)
    count += 1
else:
    print('done')
'''
print('**************************************')
#  =================================
# input 関数
# input関数：stringで受け取る。int型：int(input())
'''
while True:
    word = input('入力：')
    if word == 'ok':
        break
    print('next')
'''
print('**************************************')
#  =================================
# for / break / continue
# apexで言う、拡張for文
'''
some_list = [1, 2, 3, 4, 5]

for i in some_list:
    print(i)
    
for str in 'abcdegh':
    print(str)
    
for word in ['My', 'name', 'is', 'Mike']:
    if word == 'name':
        break
    print(word)

for word in ['My', 'name', 'is', 'Mike']:
    if word == 'name':
        continue
    print(word)
'''
print('**************************************')
#  =================================
# for else文
'''
for fruit in ['apple', 'banana', 'orange', 'Mike']:
    if fruit == 'banana':
        print('stop eating')
        break
    print(fruit)
# break文では、else文に移行しない
else:
    print('I ate all fruits')
'''
print('**************************************')
#  =================================
# range関数
'''
num_list = [0, 1, 2, 3, 4, 5, 6]
for i in num_list:
    print(i)

# 通常
for i in range(10):
    print(i)

# スタート指定
for i in range(2, 10):
    print(i)

# スタート指定, 何個飛ばすか
for i in range(2, 30, 3):
    print(i)

# 明示的にインデックスを削除
for _ in range(10):
    print('str')
'''
print('**************************************')
#  =================================
# enumerate関数
'''
for i, fruit in enumerate(['apple', 'banana', 'orange', 'Mike']):
    print(i, fruit)
'''
print('**************************************')
#  =================================
# zip関数
# 複数の配列を、拡張forループ
'''
days = ['Mon', 'Tue', 'Wed']
fruits = ['apple', 'banana', 'orange']
drinks = ['coffee', 'tea', 'beer']

# 通常
for i in range(len(days)):
    print(days[i], fruits[i], drinks[i])

# zip関数
for day, fruit, drink in zip(days, fruits, drinks):
    print(day, fruit, drink)

'''
print('**************************************')
#  =================================
# 辞書をfor文でループする
'''
d = {'x': 100, 'y': 200}

print(d.items())
# d.items()をアンパッキングしているだけ
# 通常
for k , v in d.items():
    # kにキー、vに値
    print(k, v)
'''
print('**************************************')
#  =================================
# 関数定義

'''
# 返り値なし
def say():
    print('hi')
print(type(say()))

# 返り値有り
def say_word():
    s = 'HiHi'
    return s
result = say_word()
print(result)
'''
print('**************************************')
#  =================================
# 関数の引数と返り値の宣言

'''
num: int = 10

def add(a: int, b:int) -> int:
    return a + b

sum = add(1, 5)
print(sum)

# 宣言はできるものの、エラーは返さない
sum = add('1', '5')
print(sum)
'''
print('**************************************')
#  =================================
# 位置引数とキーワード引数とデフォルト引数
# 
'''
def menu(entree):
    print(entree)

menu('beef')
'''
'''
# 引数が複数（位置引数）
def menu(food, drink, dessert):
    print(food)
    print(drink)
    print(dessert)

menu('beef', 'beer', 'ice')
'''
'''
# 引数が複数（キーワード引数を定義）
def menu(food, drink, dessert):
    print(drink)
    print(dessert)
    print(food)

menu(dessert='ice', food='beef', drink='beer', )
'''
'''
# 引数が複数（デフォルト引数を定義）
def menu(food='rice', drink='water', dessert='chips'):
    print(food)
    print(drink)
    print(dessert)
# 引数が無ければ、デフォルト引数を使用
menu()
# 引数があれば、上書き
menu(food='chiken', drink='coke', dessert='chocolate')
'''

print('**************************************')
#  =================================
# デフォルト引数で注意すること
# 
def func(x, l=[]):
    l.append(x)
    return l
# y = [1, 2, 3]
# r = func(100, y)
# print(r)

# y = [1, 2, 3]
# r = func(200, y)
# print(r)
# ========

# デフォルト引数に、リストを定義するとバグが起こりやすい
'''
r = func(100)
print(r)
# [100]
r = func(200)
print(r)
# [100, 200]
'''
# 対応策（デフォルト引数に、Noneとする）
# def func(x, l=None):
#     if l is None:
#         l = []
#     l.append(x)
#     return l


print('**************************************')
#  =================================
# 位置引数のタプル化
# 
'''
def say(aisatsu, *words):
    print(aisatsu)
    for word in words:
        print(word)

say('hello', 'everyone', 'alice', 'bob')
t = ('alice', 'bob', 'cindy')
say('hello', *t)
'''
print('**************************************')
#  =================================
# キーワード引数の辞書化
# 
'''
# 引数が複数（デフォルト引数を定義）
def menu(**kwargs):
    print(kwargs)
    for k, v in kwargs.items():
        print(k, v)
    
# menu(food='rice', drink='water', dessert='chips')

d = {
    'entree' : 'rice',
    'dink' : 'ice coffee',
    'dessert' : 'icecream'
}
# 辞書が展開されて表示される
menu(**d)
'''
'''
# 引数、タプル、辞書を全部
def menu(food, *args,**kwargs):
    print(food)
    print(args)
    print(kwargs)

menu('banana', 'apple', 'orange', drink='water', dessert='chips')
'''
print('**************************************')
#  =================================
# Docstring
# 
'''
def example_func(param1, param2):
    """
    説明：
    変数の説明：
    戻り値：
    """
    print(param1)
    print(param2)
    return True

print(example_func.__doc__)
'''
print('**************************************')
#  =================================
# 関数内関数
# 
'''
def outer(a, b):
    
    def plus(x, y):
        return x + y
    
    r1 = plus(a, b)
    r2 = plus(b, b)
    print(r1 + r2)

outer(1, 2)

'''
print('**************************************')
#  =================================
# クロージャー
# 
'''
def outer(a, b):
    
    def inner():
        return a + b
    return inner
# <function outer.<locals>.inner at 0x0000023E7E8FF670>
# print(outer(1, 2))
# クロージャー：現時点で引数を確定させておく。後ほど実行する
f = outer(1, 2)
r = f()
print(r)
'''
'''
# 例：
def circle_area_func(pi):
    def circle_area(radius):
        return pi * radius * radius
    
    return circle_area

cal1 = circle_area_func(3.14)
cal2 = circle_area_func(3.141592)

print(cal1(10))
print(cal2(10))
'''
print('**************************************')
#  =================================
# デコレーター：ある関数を修飾するための関数とその仕組み
# 
'''
def print_info(func):
    
    def wrapper(*args, **kwargs):
        print('start')
        result = func(*args, **kwargs)
        print('end')
        return result
    
    return wrapper

def print_more(func):
    
    def wrapper(*args, **kwargs):
        print('func:', func.__name__)
        print('args:', args)
        print('kwargs:', kwargs)
        result = func(*args, **kwargs)
        print('result:', result)
        print('end')
        return result
    
    return wrapper

print('*****')
@print_info
def add(a, b):
    return a + b

# f = print_info(add)
# r = f(10, 20)
# print(r)

r = add(10, 20)
print(r)
print('*****')

@print_info
def sub(a, b):
    return a - b
r = sub(10, 20)
print(r)

print('*****')
@print_more
def sub(a, b):
    return a - b
r = sub(10, 20)
print(r)

print('*****')
@print_info
@print_more
def sub(a, b):
    return a - b
r = sub(10, 20)
print(r)
'''
print('**************************************')
#  =================================
# 
'''
'''
print('**************************************')
#  =================================
# 
'''
'''
print('**************************************')
#  =================================
# 
'''
'''
print('**************************************')
#  =================================
# 
'''
'''
print('**************************************')
#  =================================
# 
'''
'''
print('**************************************')
#  =================================
# 
'''
'''
print('**************************************')
#  =================================
# 
'''
'''
print('**************************************')
#  =================================
# 
'''
'''