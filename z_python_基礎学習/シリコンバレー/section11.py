import optparse


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
# import configparser

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
'''
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
print('**************************************')
#  =================================
# ロギング フォーマッタ
#
'''
"""
CRITICAL
ERROR
WARNING
INFO
DEBUG
"""
import logging

# デバッグレベル
# formatter = '%{levelname}s:%{message}s'
# formatter = '%{asctime}s:%{message}s'
logging.basicConfig(level=logging.INFO, format=formatter)

# logging.critical('critical')
# logging.error('error')
# logging.warning('warning')
# logging.info('info')
# logging.debug('debug')
logging.info('info %s %s', 'test', 'test2')
'''
print('**************************************')
#  =================================
# ロギング ロガー
#
'''
"""
CRITICAL
ERROR
WARNING
INFO
DEBUG
"""
import logging

logging.basicConfig(level=logging.INFO)
logging.info('info')

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
logger.debug('debug')
'''
print('**************************************')
#  =================================
# ロギング ハンドラー
#
'''
"""
CRITICAL
ERROR
WARNING
INFO
DEBUG
"""
import logging

import logtest

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger(__name__)
logging.info('from main')

logtest.do_something()
'''
print('**************************************')
#  =================================
# ロギング フィルタ
#
'''

"""
CRITICAL
ERROR
WARNING
INFO
DEBUG
"""
import logging

import logtest

class NoPassFilter(logging.Filter):
    def filter(self, record):
        log_message = record.getMessage()
        return 'password' not in log_message

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger(__name__)
logger.addFilter(NoPassFilter())
logging.info('from main')
logging.info('from main password="test"')
'''
print('**************************************')
#  =================================
# ロギング コンフィグ
#
'''
import logging.config

logging.config.fileConfig('logging.ini')
logger = logging.getLogger(__name__)

logger.debug('debug message')
logger.info('info message')
logger.warning('warning message')
logger.error('error message')
logger.critical('critical message')
'''
print('**************************************')
#  =================================
# ロギングの書き方
#
'''
import logging

logger = logging.getLogger(__name__)
logger.error('API call is failed')

logger.error({
    'action': 'create',
    'status': 'fail',
    'message': 'API call is failed'
})
'''
print('**************************************')
#  =================================
# Email送信
#
'''
from email import message
import smtplib

# import config

smtp_host = 'smtp.live.com'
smtp_post = 587
from_email = 'xxx@hotmail.com'
# from_email = config.from_email
to_email = 'ogatat@revolveok.co.jp'
# to_email = config.to_email
user_name = 'xxx@hotmail.com'
# to_email = config.user_name
password = 'wert'

msg = message.EmailMessage()
msg.set_content('test mail')
msg['subject'] = 'test email sub'
msg['From'] = from_email
msg['to'] = to_email

server = smtplib.SMTP(smtp_host, smtp_post)
server.ehlo()
server.starttls()
server.ehlo()
server.login(user_name, password)
server.send_message(msg)
server.quit()
'''
print('**************************************')
#  =================================
# 添付ファイルEmail送信
#
'''
from email import message
from email.mime import multipart
from email.mime import text
from fileinput import filename
import smtplib

# import config

smtp_host = 'smtp.live.com'
smtp_post = 587
from_email = 'xxx@hotmail.com'
# from_email = config.from_email
to_email = 'ogatat@revolveok.co.jp'
# to_email = config.to_email
user_name = 'xxx@hotmail.com'
# to_email = config.user_name
password = 'wert'

# msg = message.EmailMessage()
msg = multipart.MIMEMultipart()
# msg.set_content('test mail')
msg['subject'] = 'test email sub'
msg['From'] = from_email
msg['to'] = to_email
msg.attach(text.MIMEText('test bb', 'plain'))

with open('lesson.py', 'r') as f:
    attachment = text.MIMEText(f.read(), 'plain')
    attachment.add_header(
        'Content-Disposition', 'attachment',
        filename='lesson.py'
    )
    msg.attach(attachment)


server = smtplib.SMTP(smtp_host, smtp_post)
server.ehlo()
server.starttls()
server.ehlo()
server.login(user_name, password)
server.send_message(msg)
server.quit()
'''
print('**************************************')
#  =================================
# SMPTハンドラーでログをEmail送信
#

'''
'''
print('**************************************')
#  =================================
# virtualenv
#
# バージョンを複数持てる
# pip install virtualenv
'''
'''
print('**************************************')
#  =================================
# optparse
#
'''
import sys

print(sys.argv)
'''

from optparse import OptionParser

def main():
    usage = 'usage: %prog [options] arg1 arg2'
    parser = OptionParser(usage=usage)
    parser.add_option('-f', '--file', action='store', type='string', dest='filename', help='File name')
    
if __name__ == '__main__':
    main()


'''
'''
print('**************************************')
#  =================================
# 
#
'''
'''
