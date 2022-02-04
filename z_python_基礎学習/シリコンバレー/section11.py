print('**************************************')
#  =================================
# configparser
#
"""
[DEFAULT]
debug = False

[web_server]
host = 127.0.0.1
port = 80

[db_server]
host = 127.0.0.1
port  3306
"""
import configparser

# initファイル作成
# config = configparser.ConfigParser()
# config['DEFAULT'] = {
#     'debug': True
# }
# config['web_server'] = {
#     'host': '127.0.0.1',
#     'port': 80
# }
# config['db_server'] = {
#     'host': '127.0.0.1',
#     'port': 3306
# }
# with open('config.ini', 'w') as config_file:
#     config.write(config_file)

# initファイルの読み込み
# config = configparser.ConfigParser()
# config.read('config.ini')
# print(config['web_server'])
# print(config['web_server']['host'])
# print(config['web_server']['port'])

print('**************************************')
#  =================================
# yaml
#
"""
web_server:
    'host' = 127.0.0.1
    'port' = 80

db_server:
    'host' = 127.0.0.1
    'port'  3306
"""

# import yaml

# with open('config.yml', 'w') as yaml_file:
#     yaml.dump({
#         'web_server': {
#             'host': '127.0.0.1',
#             'port': 80
#         },
#         'db_server': {
#             'host': '127.0.0.1',
#             'port': 3306
#         }
#     }, yaml_file, default_flow_style=False)

# with open('config.yml', 'r') as yaml_file:
#     data = yaml.load(yaml_file)
#     print(data, type(data))
#     print(data['web_server']['host'])
#     print(data['web_server']['port'])

print('**************************************')
#  =================================
# ロギング
#
"""
CRITICAL
ERROR
WARNING
INFO
DEBUG
"""
import logging

# デバッグレベル
logging.basicConfig(filename='test.log', level=logging.DEBUG)

# logging.critical('critical')
# logging.error('error')
# logging.warning('warning')
# logging.info('info')
# logging.debug('debug')

# 記述方法
logging.info('info {}'.format('test'))
# logging.info('info %s' % 'str')
# logging.info('info %s %s' % ('str1', 'str2' ))


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
