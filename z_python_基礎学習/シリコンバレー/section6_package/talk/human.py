# 絶対参照
# from section6_package.tools import utils
# 相対参照
from ..tools import utils

def sing():
    return 'sing'
def cry():
    return utils.say_twice('cry')