# TODO
# * ABC236 C - Route Map

n, m = map(int, input().split())

locals = list(input().split())
# 含まれているかだけチェックすればいいので、セット
# 計算量が下がる
expresses = set(input().split())
for local in locals:
    if local in expresses:
        print('Yes')
    else:
        print('No')





# TLEの例
"""
locals = list(input().split())
expresses = list(input().split())
for local in locals:
    if local in expresses:
        print('Yes')
    else:
        print('No')
"""

