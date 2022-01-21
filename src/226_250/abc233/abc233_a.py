# TODO
# * ABC233 A - 10yen Stamp

import math

x, y = map(int, input().split(' '))
# print(t, type(t))
if x >= y:
    print(0)
else:
    print(math.ceil((y - x) /10))

