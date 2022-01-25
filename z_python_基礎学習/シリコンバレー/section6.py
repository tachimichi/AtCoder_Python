import sys

print('**************************************');
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

from section6_package.tools import utils
from section6_package.talk import human

print(human.sing())
print(human.cry())

'''
'''