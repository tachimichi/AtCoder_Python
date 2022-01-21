'''
print('test2')
a = 10
b = a
c = b
print(c)
'''

print('**************************************')
#  =================================
'''
num = 1
name = 'Mike'

print(num, type(num))
print(name, type(name))
'''

'''
num = 1
num:int = 1
strNum = '1'
# 型変換
newNum = int(strNum)
print(newNum, type(newNum))
'''
'''
# 明示的な型宣言
num:int = 1
'''
print('**************************************')
#  =================================
'''
# sep='文字列'で区切り, end='\n'で末尾に何か指定
print('Hi', 'Mike', sep=',', end='\n')
print('Hi', 'Mike', sep=',', end='\n')
'''

print('**************************************')
#  =================================
'''
import math
result = math.sqrt(25)
print(result)

y = math.log(4)
print(y)
# ヘルプ関数（ドキュメント見れる）
print(help(math))
'''
print('**************************************')
#  =================================
# 文字列
# シングルでも、ダブルクォーテーションでもOK
'''
print('hello')
print("hello")
print("I don't know")
print('I don\'t know')
print('say "I don\'t know"')
print("say \"I don\'t know\"")
print(r'C:\name\name') # rはrawの意味
print('********')
print("""
line1
line2
line3
""")
print('********')
print('********')
print("""\
line1
line2
line3\
""")
print('********')
'''
print('**************************************')
#  =================================
# 文字列のインデックスとスライス
'''
word = 'python'
print(word[0])
print(word[-1])
print(word[2:5])
print(word[:5])
print(word[0:2])
print(word[:2])
print(word[2:])

print('********')
# 文字列のi番目を変更
word = 'j' + word[1:]
print(word)
'''
print('**************************************')
#  =================================
# 文字列のメソッド
'''
s = 'my name is Mike. Hi Mike.'
print(s)
isStart = s.startswith('My')
print(isStart)

# find ⇒ 文字列の中に引数のものがあるか、あれば前から何番目にあるか
# find ⇒ 文字列の中に引数のものがあるか（後ろから）、あれば前から何番目にあるか
print(s.find('Mike'))
print(s.rfind('Mike'))
print(s.count('Mike'))
print('********')
print(s.capitalize())
print(s.title())
print(s.upper())
print(s.lower())
print(s.replace('Mike', 'Nancy'))
'''
print('**************************************')
#  =================================
# 文字列の代入
'''
print('a is {}'.format('b'))
print('a is {}'.format('test'))
print('a is {}{}{}'.format(3, 2, 1))
print('a is {2}{0}{1}'.format(3, 2, 1))
print('********')
'''
print('**************************************')
#  =================================
# f-string
a = 'a'
print(f'a is {a}')

x, y, z = 1, 2, 3
print(f'a is {x}, {y}, {z}')
print(f'a is {z}, {y}, {x}')

name = 'Jun'
family = 'Sakai'
print(f'My name is {name} {family}. Watashi ha {family} {name}')

print('********')
'''
'''