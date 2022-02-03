# coding=utf-8


print('**************************************')
#  =================================
# ファイルの作成
#
'''
f = open('test.txt', 'w')
f.write('test')
print('I am print' , file=f)
f.close()
'''
print('**************************************')
#  =================================
# withステートメントでファイルをopenする
#
# f = open('test.txt', 'w')
'''
with open('test.txt', 'w') as f:
    f.write('hogehooge')
'''
print('**************************************')
#  =================================
# ファイルの読み込み
#
'''
s = """\
AAA
BBB
CCC
DDD
"""
with open('test.txt', 'w') as f:
    f.write(s)

# 読み込み
with open('test.txt', 'r') as f:
    # print(f.read())
    while True:
        chunk = 2
        line = f.read(chunk)
        print(line)
        if not line:
            break
    
'''
print('**************************************')
#  =================================
# seekを使用して移動する
#
'''
s = """\
AAA
BBB
CCC
DDD
"""
# with open('test.txt', 'w') as f:
#     f.write(s)

# 読み込み
with open('test.txt', 'r') as f:
    # # print(f.read())
    # while True:
    #     chunk = 2
    #     line = f.read(chunk)
    #     print(line)
    #     if not line:
    #         break
    print(f.tell())
    print(f.read(1))
    f.seek(5)
    print(f.read(1))
    f.seek(14)
    print(f.read(1))
    f.seek(5)
    print(f.read(1))
    
'''
print('**************************************')
#  =================================
# 書き込み読み込みモード
#
s = """\
AAA
BBB
CCC
DDD
"""

'''
with open('test.txt', 'w') as f:
    f.write(s)
with open('test.txt', 'r') as f:
    print(f.read())
'''
'''
# 書き込みと読み込み
with open('test.txt', 'w+') as f:
    f.write(s)
    f.seek(0)
    print(f.read())
'''
# r+ は読み込み＋書き込み（先に読み込む）

print('**************************************')
#  =================================
# テンプレート
#
'''
import string
s = """\
Hi $name

$contents

have a good time
"""
t = string.Template(s)
content = t.substitute(name = 'Make', contents = 'nice to meet you')
print(content)
'''
print('**************************************')
#  =================================
# CSVファイルへの読み込み、書き込み
#
'''
import csv
# 書き込み
with open('test.csv', 'w', newline='') as csvfile:
    fieldnames = ['name', 'count']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerow({'name': 'A', 'count': 1})
    writer.writerow({'name': 'B', 'count': 2})

# 読み込み
with open('test.csv', 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(row['name'], row['count'])
        
'''
print('**************************************')
#  =================================
# ファイル操作
#
# import os
# import pathlib
# import glob
# import shutil

# print(os.path.exists('test.txt'))
# print(os.path.isfile('test.txt'))
# print(os.path.isdir('design'))

# os.rename('test.txt', 'renamed.txt')
# os.symlink('renamed.txt', 'symlink.txt')

# os.mkdir('test_dir')
# os.rmdir('test_dir')

# pathlib.Path('empty.txt').touch()
# os.remove('empty.txt')

# os.mkdir('test_dir')
# os.mkdir('test_dir/test_dir2')
# print(os.listdir('test_dir'))
# pathlib.Path('test_dir/test_dir2/empty.txt').touch()
# print(glob.glob('test_dir/test_dir2'))
# shutil.copy('test_dir/test_dir2/empty.txt', 'test_dir/test_dir2/empty2.txt')
# print(glob.glob('test_dir/test_dir2/*'))

# shutil.rmtree('test_dir')

'''
'''
print('**************************************')
#  =================================
# tarfileの圧縮展開
# zipfileの圧縮展開
#
# tarfile：mac等で使用する圧縮技術
'''
import tarfile
import zipfile
'''
print('**************************************')
#  =================================
# tempfile
#
'''
import tempfile

with tempfile.TemporaryFile(mode='w+') as t:
    t.write('hello')
    t.seek(0)
    print(t.read())
'''
print('**************************************')
#  =================================
# subprocessで実行する
#
'''
import subprocess

# subprocess.run(['dir'])
subprocess.run('dir', shell=True)
r = subprocess.run('dir', shell=True)
print(r.returncode)

# grep
p1 = subprocess.Popen(['dir', '/ah'], stdout=subprocess.PIPE, stderr = subprocess.PIPE,shell=True)
p2 = subprocess.Popen(['grep', 'test'], stdout=subprocess.PIPE, shell=True)
p1.stdout.close()
output = p2.communicate()[0]
print(output)

'''
print('**************************************')
#  =================================
# datetime
#
'''
import datetime
now = datetime.datetime.now()
print(now)
print(now.isoformat())
print(now.strftime('%d/%m/%y-%H_%M_%S_%f'))

today =datetime.datetime.today()
print(today)
print(today.isoformat())
# print(today)

# 一週間後
d = datetime.timedelta(weeks=1)
print(now + d)

'''
'''
import time
print('#######')
time.sleep(2)
print('#######')
print(time.time())
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
print('**************************************')
#  =================================
# 
#
'''
'''
